(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [goog.string :as gstring]
            [goog.string.format]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [clojure.set]))

(enable-console-print!)

(def levels {"beginner" {:size [8 8] :mines 10}
             "intermediate" {:size [16 16] :mines 40}
             "expert" {:size [16 30] :mines 99}})

(defn vec-zeros [n]
  (vec (repeat n 0)))

(defn vec-zeros-2 [[rows cols]]
  (vec (repeat rows (vec-zeros cols))))

(defn neighbour-coords
  [[rows cols] [row col]]
  (let [indices [[-1 -1] [0 -1] [1 -1] [-1 0] [1 0] [-1 1] [0 1] [1 1]]]
    (reduce (fn [coords [i j]]
              (let [x (+ row i)
                    y (+ col j)]
                (if (and (< -1 x rows) (< -1 y cols))
                  (conj coords [x y])
                  coords)))
            []
            indices)))

(defn set-high-score!
  [level score]
  (.setItem js/localStorage level score))

(defn get-high-score
  [level]
  (let [score (.getItem js/localStorage level)]
    (if score
      (js/parseInt score)
      nil)))

(defn dbg-clear-high-score!
  [level]
  (.removeItem js/localStorage level))

(defn count-surrounding
  "Returns the number of cells with value value around cell [row col]."
  [value [rows cols] grid [row col]]
  (reduce (fn [count cell]
            (if (= value (get-in grid cell))
              (inc count)
              count))
          0
          (neighbour-coords [rows cols] [row col])))

(def count-surrounding-zeros (partial count-surrounding 0))
(def count-surrounding-ones (partial count-surrounding 1))

(defn populate-grid
  "Takes an empty grid and populates it randomly with mines."
  [[rows cols] grid num-mines]
  (loop [i 0
         grid grid]
    (let [row (rand rows)
          col (rand cols)
          is-mine (= :X (get-in grid [row col]))]
      (if (< i num-mines)
        (recur (if is-mine i (inc i))
               (if is-mine grid (assoc-in grid [row col] :X)))
        grid))))

(defn can-spread-sweep?
  "If the cell is surrounded by precisely the correct number of flags in addition
  to at least 1 unflagged cell, the player can perform a spread-sweep by clicking
  this cell."
  [[rows cols] grid mask flags [row col]]
  (let [value (get-in grid [row col])
        num-flags (count-surrounding-ones [rows cols] flags [row col])
        num-hidden (count-surrounding-zeros [rows cols] mask [row col])]
    (and (> value 0)
         (= value num-flags)
         (< num-flags num-hidden))))

(defn flatten-grid
  "Returns a flat vector of [row col value] vectors to enable easy iteration over
  the grid."
  [grid]
  (for [[i row] (map-indexed vector grid)
        [j val] (map-indexed vector row)]
    [i j val]))

(defn sum-grid
  [grid]
  (reduce (fn [sum [_ _ n]]
            (+ sum n))
          0
          (flatten-grid grid)))

(defn count-in-grid
  [grid value]
  (reduce (fn [total [_ _ v]]
            (if (= value v)
              (inc total)
              total))
          0
          (flatten-grid grid)))

(defn label-grid
  "Takes a grid populated with mines and adds in the numbers."
  [[rows cols] grid]
  (reduce (fn [labelled [i j val]]
            (if (= :X val)
              (let [neighbours (neighbour-coords [rows cols] [i j])]
                (reduce (fn [labelled [ni nj]]
                          (update-in labelled [ni nj]
                                     #(if (number? %) (inc %) %)))
                        labelled
                        neighbours))
              labelled))
          grid
          (flatten-grid grid)))

(defn get-time
  "Seconds since the epoch."
  []
  (let [millis (.getTime (js/Date.))]
    (/ millis 1000)))

(defn calc-elapsed
  [time-started]
  (int (- (get-time) time-started)))

(defn zero-region
  "If this cell is zero, add its neighbours to the region. Repeat for each neighbour,
  recursively."
  [[rows cols] grid [row col] region]
  (let [neighbours (neighbour-coords [rows cols] [row col])
        region (conj region [row col])]
    (if (= 0 (get-in grid [row col]))
      (reduce (fn [region [nx ny]]
                (if (not (contains? region [nx ny]))
                  (clojure.set/union region (zero-region [rows cols] grid [nx ny] region))
                  region))
              region
              neighbours)
      region)))

(defn set-in-grid
  "Sets the grid to value at each cell."
  [grid cells value]
  (reduce (fn [grid [r c]]
            (assoc-in grid [r c] value))
          grid
          cells))

(defn values-at
  "List of values at the locations given by cells."
  [grid cells]
  (map #(get-in grid %) cells))

(defn calc-game-state
  "Returns one of :alive, :dead, or :victorious."
  [grid mask num-mines swept-cells]
  (let [num-hidden (count-in-grid mask 0)
        values (values-at grid swept-cells)
        dead (contains? (set values) :X)]
    (if dead
      :dead
      (if (= num-mines num-hidden)
        :victorious
        :alive))))

(defn sweep-cell
  "Returns the region to be swept"
  [[rows cols] grid [row col]]
  (if (= 0 (get-in grid [row col]))
    (zero-region [rows cols] grid [row col] #{})
    #{[row col]}))

(defn sweep-cells
  "Returns the region to be swept."
  [[rows cols] grid cells]
  (reduce (fn [region cell]
            (clojure.set/union region (sweep-cell [rows cols] grid cell)))
          #{}
          cells))

(defn flag-remaining
  "Flag any unflagged mines."
  [flags grid]
  (reduce (fn [flags [r c val]]
            (if (= :X val)
              (assoc-in flags [r c] 1)
              flags))
          flags
          (flatten-grid grid)))

(defn new-state
  "Construct a fresh game state for the given difficulty level."
  [level]
  (let [[rows cols] (get-in levels [level :size])
        num-mines (get-in levels [level :mines])]
    {:controls {:level level
                :react-key "controls"}
     :level (get levels level)
     :grid (label-grid [rows cols]
                       (populate-grid [rows cols]
                                      (vec-zeros-2 [rows cols])
                                      num-mines))
     :mask (vec-zeros-2 [rows cols])
     :flags (vec-zeros-2 [rows cols])
     :time-started (get-time)
     :tick-count 0
     ;; Valid values are :pending, :alive, :dead, and :victorious
     :game-state :pending
     :high-score (get-high-score level)}))

(defn update-high-score!
  "If the time elapsed repesents a new high-score, persist it to local
  storage."
  [state]
  (let [level (get-in @state [:controls :level])
        time-started (get @state :time-started)
        elapsed (calc-elapsed time-started)
        high-score (get-high-score level)]
    (when (or (= nil high-score) (< elapsed high-score))
      (swap! state assoc :high-score elapsed)
      (set-high-score! level elapsed))))

(defn sweep-cell!
  "Perform the sweep, and update the app state."
  [state [row col]]
  (let [[rows cols] (get-in @state [:level :size])
        grid (get @state :grid)
        mask (get @state :mask)
        flags (get @state :flags)
        num-mines (get-in @state [:level :mines])
        sweep-region (sweep-cell [rows cols] grid [row col])
        new-mask (set-in-grid mask sweep-region 1)
        new-flags (set-in-grid flags sweep-region 0)
        game-state (calc-game-state grid new-mask num-mines [[row col]])]
    (swap! state assoc :game-state game-state)
    (swap! state assoc :mask new-mask)
    (swap! state assoc :flags new-flags)
    (when (= :victorious game-state)
      (swap! state assoc :flags (flag-remaining new-flags grid))
      (update-high-score! state))))

(defn sweep-spread!
  "Perform a spread-sweep and update the app state."
  [state [row col]]
  (let [[rows cols] (get-in @state [:level :size])
        grid (get @state :grid)
        mask (get @state :mask)
        flags (get @state :flags)
        num-mines (get-in @state [:level :mines])]
    (if (can-spread-sweep? [rows cols] grid mask flags [row col])
      (let [swept (reduce (fn [swept cell]
                            (if (= 0 (get-in flags cell))
                              (conj swept cell)
                              swept))
                          []
                          (neighbour-coords [rows cols] [row col]))
            sweep-region (sweep-cells [rows cols] grid swept)
            new-mask (set-in-grid mask sweep-region 1)
            new-flags (set-in-grid flags sweep-region 0)
            game-state (calc-game-state grid new-mask num-mines swept)]
        (swap! state assoc :mask new-mask)
        (swap! state assoc :flags new-flags)
        (swap! state assoc :game-state game-state)
        (when (= :victorious game-state)
          (swap! state assoc :flags (flag-remaining flags grid))
          (update-high-score! state))))))

(defn flag-cell!
  [state [row col]]
  (swap! state assoc-in [:flags row col] 1))

(defn unflag-cell!
  [state [row col]]
  (swap! state assoc-in [:flags row col] 0))

(defn reset-game!
  [state]
  (let [level (get-in @state [:controls :level])]
    (reset! state (new-state level))))

(defn start-game!
  "Transition the game state from :pending to :alive."
  [state]
  (swap! state assoc :game-state :alive)
  (swap! state assoc :time-started (get-time)))

(defn tick!
  "Any components that need regular refreshing can depend on :tick-count,
  which is incremented periodically."
  [state]
  (swap! state update :tick-count inc))

(defmulti read (fn [env key params] key))

(defmethod read :default
  [{:keys [state query] :as env} key params]
  (let [st @state]
    (if-let [[_ v] (find st key)]
      {:value v}
      {:value :not-found})))

(defn if-alive
  "Call the function if the game-state is :alive."
  [state fn & args]
  (if (= :alive (get @state :game-state))
    (apply fn args)))

(defn alive-or-pending?
  [state]
  (contains? #{:pending :alive} (get @state :game-state)))

(defn start-game-if-pending!
  [state]
  (if (= :pending (get @state :game-state))
    (start-game! state)))

(defmulti mutate (fn [env key params] key))

(defmethod mutate `tick
  [{:keys [state]} key params]
  {:action #(if-alive state tick! state)})

(defmethod mutate `sweep
  [{:keys [state]} key {:keys [row col]}]
  {:action #(when (alive-or-pending? state)
              (start-game-if-pending! state)
              (sweep-cell! state [row col]))})

(defmethod mutate `reset
  [{:keys [state]} key params]
  {:action #(reset-game! state)})

(defmethod mutate `spread-sweep
  [{:keys [state]} key {:keys [row col]}]
  {:action #(if-alive state sweep-spread! state [row col])})

(defmethod mutate `flag
  [{:keys [state]} key {:keys [row col]}]
  {:action #(when (alive-or-pending? state)
              (start-game-if-pending! state)
              (flag-cell! state [row col]))})

(defmethod mutate `unflag
  [{:keys [state]} key {:keys [row col]}]
  {:action #(if-alive state unflag-cell! state [row col])})

(defmethod mutate `level-select
  [{:keys [state]} key {:keys [level]}]
  {:action #(swap! state assoc-in [:controls :level] level)})

(def parser (om/parser {:read read :mutate mutate}))

(def app-state
  (atom (new-state "intermediate")))

(def reconciler
  (om/reconciler
   {:state app-state
    :parser parser}))

(defui ExposedCellView
  static om/IQuery
  (query [this]
         [])
  Object
  (render [this]
          (let [{:keys [row col value can-spread]} (om/get-computed this)
                str-val (case value
                          1 "one"
                          2 "two"
                          3 "three"
                          4 "four"
                          5 "five"
                          6 "six"
                          7 "seven"
                          8 "eight"
                          :X "mine"
                          "")]
            ;; (println (str "Rendering exposed cell (" row "," col "," value ")"))            
            (dom/div #js {:className (str "cell revealed "
                                          str-val
                                          (if can-spread " spread" ""))
                          :onClick (fn [e] (om/transact! this `[(spread-sweep {:row ~row :col ~col}) :mask :game-state]))}
                     (dom/span nil
                               (case value
                                 :X ""
                                 0 ""
                                 value))))))

(def exposed-cell-view (om/factory ExposedCellView))

(defui HiddenCellView
  static om/IQuery
  (query [this]
         [])
  Object
  (render [this]
          (let [{:keys [game-state]} (om/props this)
                {:keys [row col value flag]} (om/get-computed this)
                status-str (if (= :dead game-state)
                             (if (= :X value) "mine" "safe")
                             "")]
            ;; (println (str "Rendering hidden cell (" row "," col "," flag ")"))
            (if (= 1 flag)
              (dom/div
               #js {:className (str "cell hidden flagged " status-str)
                    :onContextMenu (fn [e] (do (.preventDefault e)
                                               (om/transact! this `[(unflag {:row ~row :col ~col}) :flags])))})
              (dom/div
               #js {:className (str "cell hidden " status-str)
                    :onClick (fn [e] (om/transact! this `[(sweep {:row ~row :col ~col}) :mask :flags :game-state]))
                    :onContextMenu (fn [e] (do (.preventDefault e)
                                               (om/transact! this `[(flag {:row ~row :col ~col}) :flags])))})))))

(def hidden-cell-view (om/factory HiddenCellView))

(defui CellView
  static om/IQuery
  (query [this]
         [:game-state])
  Object
  (render [this]
          (let [{:keys [game-state]} (om/props this)
                {:keys [row col flag value mask-val can-spread]} (om/get-computed this)]
            (if (= mask-val 1)
              (exposed-cell-view (om/computed {}
                                              {:value value :row row :col col :can-spread can-spread}))
              (hidden-cell-view (om/computed {:game-state game-state}
                                             {:flag flag :value value :row row :col col}))))))

(def cell-view (om/factory CellView))

(defui GridView
  static om/IQuery
  (query [this]
         [])
  Object
  (render [this]
          ;; (println "Rendering grid view")
          (let [{:keys [game-state game-size grid mask flags] :as props} (om/props this)
                key #(+ (* %1 7) %2)] ;; Generate unique key from row and col
            (apply dom/div
                   #js {:className "minesweeper"}
                   (map-indexed (fn [r row] (apply dom/div
                                   #js {:className "row"}
                                   (map-indexed (fn [c val]
                                                  (cell-view (om/computed {:react-key (key r c)
                                                                           :game-state game-state}
                                                                          {:flag (get-in flags [r c])
                                                                           :value val
                                                                           :mask-val (get-in mask [r c])
                                                                           :row r
                                                                           :col c
                                                                           :can-spread (can-spread-sweep? game-size
                                                                                                          grid
                                                                                                          mask
                                                                                                          flags
                                                                                                          [r c])})))
                                                row)))
                                grid)))))

(def grid-view (om/factory GridView))

(defui ControlsView
  static om/IQuery
  (query [this]
         [:level])
  Object
  (render [this]
          ;; (println "Rendering controls view")
          (let [{:keys [level]} (om/props this)]
            (dom/div #js {:className "panel"}
                     (dom/select #js {:className "control"
                                      :value level
                                      :onChange (fn [e]
                                                  (let [value (-> e .-target .-value)]
                                                    (om/transact! this `[(level-select {:level ~value})])))}
                                 (dom/option #js {:value "beginner"} "Beginner")
                                 (dom/option #js {:value "intermediate"} "Intermediate")
                                 (dom/option #js {:value "expert"} "Expert"))
                     (dom/button
                      #js {:className "control"
                           :onClick (fn [e] (om/transact! this `[(reset) :level]))}
                      "Reset")))))

(def controls-view (om/factory ControlsView))

(defui TimerView
  static om/IQuery
  (query [this]
         [])
  Object
  (render [this]
          ;; (println "Rendering timer view")
          (let [{:keys [elapsed]} (om/get-computed this)]
            (dom/div #js {:className "timer"}
                     "Time "
                     (dom/span nil (gstring/format "%03d" elapsed))))))

(def timer-view (om/factory TimerView))

(defui InfoView
  static om/IQuery
  (query [this]
         [:high-score :flags])
  Object
  (render [this]
          ;; (println "Rendering info view")
          (let [{:keys [high-score]} (om/props this)
                {:keys [time-started tick-count num-remaining]} (om/get-computed this)]
            (dom/div #js {:className "info"}
                     (timer-view (om/computed {} {:elapsed (calc-elapsed time-started)}))
                     (dom/div #js {:className "high-score"}
                              "Best "
                              (dom/span nil
                                        (if (nil? high-score) "---" (gstring/format "%03d" high-score))))
                     (dom/div #js {:className "remaining"}
                              "Mines "
                              (dom/span nil
                                        (gstring/format "%03d" num-remaining)))))))

(def info-view (om/factory InfoView))

(defui MainView
  static om/IQuery
  (query [this]
         [:level :grid :mask :flags :game-state :time-started :tick-count :high-score
          {:controls (om/get-query ControlsView)}])
  Object
  (componentDidMount [this]
                     (println "MainView mounted")
                     (js/setInterval #(om/transact! this `[(tick) :tick-count]) 1000))
  (render [this]
          ;; (println "Rendering main view")
          (let [{:keys [controls
                        level
                        grid
                        mask
                        flags
                        game-state
                        time-started
                        tick-count
                        high-score]} (om/props this)
                game-size (get level :size)
                num-mines (get level :mines)
                num-remaining (- num-mines (sum-grid flags))]
            (dom/div #js {:className (str "minesweeper-wrap "
                                          (case game-state
                                            :victorious "st-victorious"
                                            :dead "st-dead"
                                            ""))
                          :onContextMenu (fn [e] (.preventDefault e))}
                     (info-view (om/computed {:react-key "info"
                                              :high-score high-score}
                                             {:time-started time-started
                                              :tick-count tick-count
                                              :num-remaining num-remaining}))
                     (grid-view {:game-state game-state
                                 :game-size game-size
                                 :grid grid
                                 :mask mask
                                 :flags flags})
                     (controls-view controls)))))

(om/add-root! reconciler
              MainView (gdom/getElement "app"))


(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [clojure.set]))

(enable-console-print!)

(def rows 15)
(def cols 20)
(def num-mines 40)

(def empty-row (vec (repeat cols 0)))

;; A number between 0 and 8 corresponds to the number of surrounding mines.
;; A value of :X represents a mine.
(def empty-grid (vec (repeat rows empty-row)))

;; 1 = revealed cell, 0 = hidden cell
(def empty-mask (vec (repeat rows empty-row)))

;; 1 = flag, 0 = no flag
(def empty-flags (vec (repeat rows empty-row)))

(defn populate-grid
  "Takes an empty grid and populates it randomly with mines"
  [grid num-mines]
  (loop [i 0
         grid grid]
    (let [row (rand rows)
          col (rand cols)
          is-mine (= :X (get-in grid [row col]))]
      (if (< i num-mines)
        (recur (if is-mine i (inc i))
               (if is-mine grid (assoc-in grid [row col] :X)))
        grid))))

(defn neighbour-coords
  [row col]
  (let [indices [[-1 -1] [0 -1] [1 -1] [-1 0] [1 0] [-1 1] [0 1] [1 1]]]
    (reduce (fn [coords [i j]]
              (let [x (+ row i)
                    y (+ col j)]
                (if (and (< -1 x rows) (< -1 y cols))
                  (conj coords [x y])
                  coords)))
            []
            indices)))

(defn count-nearby-flags
  [flags row col]
  (reduce (fn [count cell]
            (let [flag (get-in flags cell)]
              (+ count flag)))
          0
          (neighbour-coords row col)))

(defn flatten-grid
  "Returns a flat vector of [row col value] vectors to enable easy
  iteration over the grid"
  [grid]
  (for [[i row] (map-indexed vector grid)
        [j val] (map-indexed vector row)]
    [i j val]))

(defn label-grid
  "Takes a populated grid and sets the numbers"
  [grid]
  (reduce (fn [labelled [i j val]]
            (if (= :X val)
              (let [neighbours (neighbour-coords i j)]
                (reduce (fn [labelled [ni nj]]
                          (update-in labelled [ni nj]
                                     #(if (number? %) (inc %) %)))
                        labelled
                        neighbours))
              labelled))
          grid
          (flatten-grid grid)))

(defn new-state []
  {:rows rows
   :cols cols
   :grid (label-grid (populate-grid empty-grid num-mines))
   :mask empty-mask
   :flags empty-flags
   ;; Valid values are: :alive :dead :victorious
   :game-state :alive})

(def app-state
  (atom (new-state)))

(defui ExposedCellView
  static om/IQuery
  (query [this]
         [])
  Object
  (render [this]
          (let [{:keys [row col value]} (om/get-computed this)]
            (println (str "Rendering exposed cell (" row "," col "," value ")"))            
            (dom/div #js {:className (str "cell revealed "
                                          (case value
                                            1 "one"
                                            2 "two"
                                            3 "three"
                                            4 "four"
                                            5 "five"
                                            6 "six"
                                            7 "seven"
                                            8 "eight"
                                            :X "mine"
                                            ""))
                          :onClick (fn [e] (om/transact! this `[(clear {:row ~row :col ~col}) :mask :game-state]))}
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
          (let [{:keys [row col flag]} (om/get-computed this)]
            (println (str "Rendering hidden cell (" row "," col "," flag ")"))
            (if (= 1 flag)
              (dom/div
               #js {:className "cell hidden flagged"
                    :onContextMenu (fn [e] (do (.preventDefault e)
                                               (om/transact! this `[(unflag {:row ~row :col ~col}) :flags])))})
              (dom/div
               #js {:className "cell hidden"
                    :onClick (fn [e] (om/transact! this `[(sweep {:row ~row :col ~col}) :mask :game-state]))
                    :onContextMenu (fn [e] (do (.preventDefault e)
                                               (om/transact! this `[(flag {:row ~row :col ~col}) :flags])))})))))

(def hidden-cell-view (om/factory HiddenCellView))

(defui CellView
  static om/IQuery
  (query [this]
         [])
  Object
  (render [this]
          (let [{:keys [row col flag value mask-val]} (om/get-computed this)]
            (if (= mask-val 1)
              (exposed-cell-view (om/computed {} {:value value :row row :col col}))
              (hidden-cell-view (om/computed {} {:flag flag :row row :col col}))))))

(def cell-view (om/factory CellView))

(defui GridView
  static om/IQuery
  (query [this]
         [:rows :cols :grid :mask :flags])
  Object
  (render [this]
          (let [{:keys [rows cols grid mask flags] :as props} (om/props this)
                key #(+ (* %1 7) %2)] ;; Generate unique key from row and col
            (println "Rendering grid")
            (apply dom/div
                   #js {:className "minesweeper"}
                   (map-indexed (fn [r row] (apply dom/div
                                   #js {:className "row"}
                                   (map-indexed (fn [c val]
                                                  (cell-view (om/computed {:react-key (key r c)}
                                                                          {:flag (get-in flags [r c])
                                                                           :value (get-in grid [r c])
                                                                           :mask-val (get-in mask [r c])
                                                                           :row r
                                                                           :col c})))
                                                row)))
                                grid)))))

(def grid-view (om/factory GridView))

(defui MainView
  static om/IQuery
  (query [this]
         [:rows :cols :grid :mask :flags :game-state])
  Object
  (render [this]
          (let [{:keys [rows cols grid mask flags game-state]} (om/props this)]
            (println "Rendering main view")
            (dom/div #js {:className (str "minesweeper-wrap "
                                          (case game-state
                                            :victorious "st-victorious"
                                            :dead "st-dead"
                                            ""))
                          :onContextMenu (fn [e] (.preventDefault e))}
                     (dom/button
                      #js {:onClick (fn [e] (om/transact! this `[(reset)]))}
                      "Reset")
                     (grid-view {:rows rows
                                 :cols cols
                                 :grid grid
                                 :mask mask
                                 :flags flags})))))

(defn player-death!
  [state [row col]]
  (swap! state assoc :game-state :dead))

(defn zero-region
  [grid [row col] region]
  (let [neighbours (neighbour-coords row col)
        region (conj region [row col])]
    (if (= 0 (get-in grid [row col]))
      (reduce (fn [region [nx ny]]
                (if (not (contains? region [nx ny]))
                  (clojure.set/union region (zero-region grid [nx ny] region))
                  region))
              region
              neighbours)
      region)))

(defn update-mask
  [mask cells]
  (reduce (fn [mask [r c]]
            (assoc-in mask [r c] 1))
          mask
          cells))

(defn values-at
  [grid cells]
  (map #(get-in grid %) cells))

(defn calc-game-state
  [grid mask swept-cells]
  (let [num-hidden 
        (reduce (fn [total [r c n]]
                  (if (= 0 n)
                    (inc total)
                    total))
                0
                (flatten-grid mask))
        values (values-at grid swept-cells)
        dead (contains? (set values) :X)]
    (if dead
      :dead
      (if (= num-mines num-hidden)
        :victorious
        :alive))))

(defn sweep-cell
  "Returns a new mask"
  [grid mask [row col]]
  (let [sweep-region (if (= 0 (get-in grid [row col]))
                       (zero-region grid [row col] #{})
                       [[row col]])]
    (update-mask mask sweep-region)))

(defn sweep-cells
  [grid mask cells]
  (reduce (fn [mask cell]
            (sweep-cell grid mask cell))
          mask
          cells))

(defn update-game-state!
  [state mask swept-cells]
  (let [grid (get @state :grid)]
    (swap! state assoc-in [:game-state] (calc-game-state grid mask swept-cells))))

(defn update-mask!
  [state mask]
  (swap! state assoc :mask mask))

(defn sweep-cell!
  [state [row col]]
  (let [grid (get @state :grid)
        mask (get @state :mask)
        new-mask (sweep-cell grid mask [row col])]
    (update-game-state! state new-mask [[row col]])
    (update-mask! state new-mask)))

(defn sweep-spread!
  [state [row col]]
  (let [grid (get @state :grid)
        mask (get @state :mask)
        flags (get @state :flags)
        value (get-in grid [row col])
        num-flags (count-nearby-flags flags row col)]
    (if (= value num-flags)
      (let [swept (reduce (fn [swept cell]
                            (if (= 0 (get-in flags cell))
                              (conj swept cell)
                              swept))
                          []
                          (neighbour-coords row col))
            new-mask (sweep-cells grid mask swept)]
        (update-mask! state new-mask)
        (update-game-state! state new-mask swept)))))

(defn flag-cell!
  [state [row col]]
  (swap! state assoc-in [:flags row col] 1))

(defn unflag-cell!
  [state [row col]]
  (swap! state assoc-in [:flags row col] 0))

(defn restart-game!
  [state]
  (reset! state (new-state)))

(defmulti read (fn [env key params] key))

(defmethod read :default
  [{:keys [state query] :as env} key params]
  (let [st @state]
    (if-let [[_ v] (find st key)]
      {:value v}
      {:value :not-found})))

(defmulti mutate (fn [env key params] key))

(defn if-alive
  [state fn & args]
  (if (= :alive (get @state :game-state))
    (apply fn args)))

(defmethod mutate `sweep
  [{:keys [state]} key {:keys [row col]}]
  {:action #(if-alive state sweep-cell! state [row col])})

(defmethod mutate `reset
  [{:keys [state]} key params]
  {:action #(restart-game! state)})

(defmethod mutate `clear
  [{:keys [state]} key {:keys [row col]}]
  {:action #(if-alive state sweep-spread! state [row col])})

(defmethod mutate `flag
  [{:keys [state]} key {:keys [row col]}]
  {:action #(if-alive state flag-cell! state [row col])})

(defmethod mutate `unflag
  [{:keys [state]} key {:keys [row col]}]
  {:action #(if-alive state unflag-cell! state [row col])})

(def parser (om/parser {:read read :mutate mutate}))

(def reconciler
  (om/reconciler
   {:state app-state
    :parser parser}))

(om/add-root! reconciler
              MainView (gdom/getElement "app"))

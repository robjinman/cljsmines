(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [goog.string :as gstring]
            [goog.string.format]
            [reagent.core :as reagent]
            [re-frame.core :refer [reg-event-db
                                   path
                                   reg-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]
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
  [grid mask num-mines swept-cells game-state]
  (if (= :dead game-state)
    :dead
    (let [num-hidden (count-in-grid mask 0)
          values (values-at grid swept-cells)]
      (if (contains? (set values) :X)
        :dead
        (if (= num-mines num-hidden)
          :victorious
          :alive)))))

(defn sweep-cell
  "Returns the region to be swept."
  ([[rows cols] grid [row col]]
   (sweep-cell [rows cols] grid [row col] #{}))
  ([[rows cols] grid [row col] region]
   (let [neighbours (neighbour-coords [rows cols] [row col])
         region (conj region [row col])]
     (if (= 0 (get-in grid [row col]))
       (reduce (fn [region [nx ny]]
                 (if (not (contains? region [nx ny]))
                   (clojure.set/union region (sweep-cell [rows cols] grid [nx ny] region))
                   region))
               region
               neighbours)
       region))))

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
    {:level-selected level
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

(defn alive-or-pending?
  [state]
  (contains? #{:pending :alive} (:game-state state)))


;; -- State Updater Functions----------------------------------------------

(defn update-high-score!
  "If the time elapsed repesents a new high-score, persist it to local
  storage."
  [state]
  (let [level (:level-selected state)
        time-started (:time-started state)
        elapsed (calc-elapsed time-started)
        high-score (get-high-score level)]
    (if (or (= nil high-score) (< elapsed high-score))
      (do
        (set-high-score! level elapsed)
        (assoc state :high-score elapsed))
      state)))

(defn sweep-cell!
  [state [row col]]
  (let [[rows cols] (get-in state [:level :size])
        game-state (:game-state state)
        grid (:grid state)
        mask (:mask state)
        flags (:flags state)
        num-mines (get-in state [:level :mines])
        sweep-region (sweep-cell [rows cols] grid [row col])
        new-mask (set-in-grid mask sweep-region 1)
        new-flags (set-in-grid flags sweep-region 0)
        new-game-state (calc-game-state grid new-mask num-mines [[row col]] game-state)
        new-state (-> (assoc state :game-state new-game-state)
                      (assoc :mask new-mask)
                      (assoc :flags new-flags))]
    (if (= :victorious new-game-state)
      (-> (assoc new-state :flags (flag-remaining new-flags grid))
          (update-high-score!))
      new-state)))

(defn sweep-spread!
  [state [row col]]
  (let [[rows cols] (get-in state [:level :size])
        grid (:grid state)
        mask (:mask state)
        flags (:flags state)
        num-mines (get-in state [:level :mines])]
    (if (can-spread-sweep? [rows cols] grid mask flags [row col])
      (reduce (fn [st cell]
                  (if (= 0 (get-in flags cell))
                    (sweep-cell! st cell)
                    st))
                state
                (neighbour-coords [rows cols] [row col]))
      state)))

(defn flag-cell
  [state [row col]]
  (assoc-in state [:flags row col] 1))

(defn unflag-cell
  [state [row col]]
  (assoc-in state [:flags row col] 0))

(defn reset-game
  [state]
  (let [level (:level-selected state)]
    (merge state (new-state level))))

(defn start-game
  [state]
  (-> (assoc state :game-state :alive)
      (assoc :time-started (get-time))))

(defn tick
  "Any components that need regular refreshing can depend on :tick-count,
  which is incremented periodically."
  [state]
  (update state :tick-count inc))

(defn start-game-if-pending
  [state]
  (if (= :pending (:game-state state))
    (start-game state)
    state))


;; -- Event Handlers ------------------------------------------------------

(reg-event-db
 :initialise
 (fn [state _]
   (new-state "intermediate")))

(reg-event-db
 :tick
 (fn [state _]
   (if (= :alive (:game-state state))
     (tick state)
     state)))

(reg-event-db
 :sweep
 (fn [state [_ row col]]
   (if (alive-or-pending? state)
     (-> (start-game-if-pending state)
         (sweep-cell! [row col]))
     state)))

(reg-event-db
 :reset
 (fn [state _]
   (reset-game state)))

(reg-event-db
 :spread-sweep
 (fn [state [_ row col]]
   (if (= :alive (:game-state state))
     (sweep-spread! state [row col])
     state)))

(reg-event-db
 :flag
 (fn [state [_ row col]]
   (if (alive-or-pending? state)
     (-> (start-game-if-pending state)
         (flag-cell [row col]))
     state)))

(reg-event-db
 :unflag
 (fn [state [_ row col]]
   (if (= :alive (:game-state state))
     (unflag-cell state [row col])
     state)))

(reg-event-db
 :level-select
 (fn [state [_ level]]
   (assoc state :level-selected level)))


;; -- Subscription Handlers -----------------------------------------------

(reg-sub
 :grid-size
 (fn [state _]
   (get-in state [:level :size])))

(reg-sub
 :game-state
 (fn [state _]
   (:game-state state)))

(reg-sub
 :grid-value
 (fn [state [_ row col]]
   (get-in state [:grid row col])))

(reg-sub
 :mask-value
 (fn [state [_ row col]]
   (get-in state [:mask row col])))

(reg-sub
 :flags-value
 (fn [state [_ row col]]
   (get-in state [:flags row col])))

(reg-sub
 :high-score
 (fn [state _]
   (:high-score state)))

(reg-sub
 :num-remaining
 (fn [state _]
   (let [num-mines (get-in state [:level :mines])
         flags (:flags state)
         num-flagged (sum-grid flags)]
     (- num-mines num-flagged))))

(reg-sub
 :time-started
 (fn [state _]
   (:time-started state)))

(reg-sub
 :tick-count
 (fn [state _]
   (:tick-count state)))

(reg-sub
 :level-selected
 (fn [state _]
   (:level-selected state)))

(reg-sub
 :can-spread
 (fn [state [_ row col]]
   (let [[rows cols] (get-in state [:level :size])
         grid (:grid state)
         mask (:mask state)
         flags (:flags state)]
     (can-spread-sweep? [rows cols] grid mask flags [row col]))))


;; -- View Components -----------------------------------------------------

(defn controls-view
  []
  (let [level (subscribe [:level-selected])]
    (fn []
      [:div.ms-panel
       [:select.ms-control {:value @level
                 :onChange #(dispatch [:level-select (-> % .-target .-value)])}
        [:option {:value "beginner"} "Beginner"]
        [:option {:value "intermediate"} "Intermediate"]
        [:option {:value "expert"} "Expert"]]
       [:button.ms-control {:onClick #(dispatch [:reset])} "Reset"]])))

(defn timer-view
  []
  (let [time-started (subscribe [:time-started])
        tick-count (subscribe [:tick-count])]
    [:div.ms-timer "Time "
     [:span (gstring/format "%03d" (calc-elapsed @time-started))]
     [:span.ms-display-none @tick-count]]))

(defn info-view
  []
  (let [high-score (subscribe [:high-score])
        num-remaining (subscribe [:num-remaining])]
    (fn []
      [:div.ms-info
       [timer-view]
       [:div.ms-high-score "Best "
        [:span (if (nil? @high-score)
                 "---"
                 (gstring/format "%03d" @high-score))]]
       [:div.ms-remaining "Mines " [:span (gstring/format "%03d" @num-remaining)]]])))

(defn hidden-cell-view
  [row col]
  (let [flag (subscribe [:flags-value row col])
        value (subscribe [:grid-value row col])
        game-state (subscribe [:game-state])]
    (fn []
      (let [status-str (if (= :dead @game-state)
                         (if (= :X @value)
                           "ms-mine"
                           "ms-safe")
                         "")]
        (if (= 1 @flag)
          [:div.ms-cell {:className (str "ms-hidden ms-flagged " status-str)
                         :onContextMenu #(dispatch [:unflag row col])}]
          [:div.ms-cell {:className (str "ms-hidden " status-str)
                         :onClick #(dispatch [:sweep row col])
                         :onContextMenu #(dispatch [:flag row col])}])))))

(defn exposed-cell-view
  [row col]
  (let [value (subscribe [:grid-value row col])
        str-val (case @value
                  0 "zero"
                  1 "one"
                  2 "two"
                  3 "three"
                  4 "four"
                  5 "five"
                  6 "six"
                  7 "seven"
                  8 "eight"
                  :X "mine"
                  "")
        can-spread (subscribe [:can-spread row col])]
    (fn []
      [:div.ms-cell {:className (str "ms-revealed "
                                     (str "ms-" str-val)
                                     (if @can-spread " ms-spread"))
                     :onClick #(dispatch [:spread-sweep row col])}
       [:span (case @value
                :X ""
                0 ""
                @value)]])))

(defn cell-view
  [row col]
  (let [mask-val (subscribe [:mask-value row col])]
    (fn []
      (if (= @mask-val 1)
        [exposed-cell-view row col]
        [hidden-cell-view row col]))))

(defn grid-view
  []
  (let [grid-size (subscribe [:grid-size])]
    (fn []
      [:div.ms-grid
       (doall
        (for [r (range (get @grid-size 0))]
          ^{:key r}
          [:div.ms-row
           (doall (for [c (range (get @grid-size 1))]
                    ^{:key (str r c)}
                    [cell-view r c]))]))])))

(defn main-view
  []
  (let [game-state (subscribe [:game-state])]
    (fn []
      [:div.ms-cljsmines
       {:className (case @game-state
                     :victorious "ms-st-victorious"
                     :dead "ms-st-dead"
                     "")
        :onContextMenu #(.preventDefault %)}
       [info-view]
       [grid-view]
       [controls-view]])))

(defonce timer (js/setInterval
                #(dispatch [:tick]) 1000))

(defn ^:export run
  []
  (dispatch-sync [:initialise])
  (reagent/render [main-view]
                  (gdom/getElement "cljsmines")))

(ns minesweeper.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(enable-console-print!)

(def rows 20)
(def cols 30)
(def num-mines 40)

(def empty-row (vec (repeat cols 0)))

;; A number between 0 and 8 corresponds to the number of surrounding mines.
;; A value of :X represents a mine.
(def initial-board (vec (repeat rows empty-row)))

;; A 0 represents a hidden square, a 1 represents a revealed square
(def initial-mask (vec (repeat rows empty-row)))

(defn populate-board
  "Takes an empty board and populates it randomly with mines"
  [board num-mines]
  (loop [i 0
         board board]
    (let [row (rand rows)
          col (rand cols)
          is-mine (= :X (get-in board [row col]))]
      (if (< i num-mines)
        (recur (if is-mine i (inc i))
               (if is-mine board (assoc-in board [row col] :X)))
        board))))

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

(defn flatten-board
  "Returns a flat vector of [row col value] vectors to enable easy
  iteration over the board"
  [board]
  (for [[i row] (map-indexed vector board)
        [j val] (map-indexed vector row)]
    [i j val]))

(defn label-board
  "Takes a populated board and sets the numbers"
  [board]
  (reduce (fn [labelled [i j val]]
            (if (= :X val)
              (let [neighbours (neighbour-coords i j)]
                (reduce (fn [labelled [ni nj]]
                          (update-in labelled [ni nj]
                                     #(if (number? %) (inc %) %)))
                        labelled
                        neighbours))
              labelled))
          board
          (flatten-board board)))

(def app-state
  (atom
   {:rows rows
    :cols cols
    :board (label-board (populate-board initial-board num-mines))
    :mask (assoc-in initial-mask [0 0] 1)
    :foo {:bar "hello"}
    :animals/list
    [[1 "Ant"] [2 "Antelope"] [3 "Bird"] [4 "Cat"] [5 "Dog"]
     [6 "Lion"] [7 "Mouse"] [8 "Monkey"] [9 "Snake"] [10 "Zebra"]]}))

(defui Square-vw
  static om/IQuery
  (query [this]
         [:board :mask])
  Object
  (render [this]
          (let [{:keys [board mask row col]} (om/props this)
                board-val (get-in board [row col])
                mask-val (get-in mask [row col])]
            (println (str "Square rendered! row=" row ",col=" col))
            (dom/span
             #js {:className (str "square"
                                  (if-not (= 1 mask-val) " hidden"))
                  :onClick (fn [e] (om/transact! this `[(sweep {:row ~row :col ~col})]))}
             (if (= :X board-val)
               "X"
               board-val)))))

(def square-vw (om/factory Square-vw))

(defui Thing
  static om/IQuery
  (query [this]
         [:bar])
  Object
  (render [this]
          (let [{:keys [bar]} (om/props this)]
               (dom/span nil bar))))

(def thing (om/factory Thing))

(defui MainView
  static om/IQuery
  (query [this]
         [{:foo (om/get-query Thing)}])
  Object
  (render [this]
          (let [t (:foo (om/props this))]
            (println (str "foo=" t))
            (thing t))))

(defui Board-vw
  static om/IQuery
  (query [this]
         [:rows :cols :board :mask])
  Object
  (render [this]
          (let [{:keys [rows cols board mask] :as props} (om/props this)
                key #(+ (* %1 7) %2)] ;; Generate unique key from row and col
            (println "Board rendered!")
            (apply dom/div
                   #js {:className "minesweeper"}
                   (map-indexed (fn [r row] (apply dom/div
                                   #js {:className "row"}
                                   (map-indexed (fn [c val]
                                                  (square-vw {:row r
                                                              :col c
                                                              :board board
                                                              :mask mask
                                                              :react-key (key r c)}))
                                                row)))
                                board)))))

(defmulti read (fn [env key params] key))

(defn read-query
  [state query])

(defn read-key
  [state key])

(defmethod read :default
  [{:keys [state query] :as env} key params]
  (let [st @state]
    (if-let [[_ v] (find st key)]
      {:value v}
      {:value :not-found})))

(defmethod read :animals/list
  [{:keys [state] :as env} key {:keys [start end]}]
  (println (str "start=" start ",end=" end))
  {:value (subvec (:animals/list @state) start end)})

(defmethod read :boardval
  [{:keys [state]} key {:keys [row col]}]
  {:value (get-in (:board @state) [row col])})

(defmethod read :maskval
  [{:keys [state]} key {:keys [row col]}]
  {:value (get-in (:mask @state) [row col])})

(defmulti mutate (fn [env key params] key))

(defmethod mutate `sweep
  [{:keys [state]} key {:keys [row col]}]
  (let [{:keys [mask]} @state]
    (println "row=" row ",col=" col)
    {:action #(swap! state assoc-in [:mask row col] 1)}))

(def parser (om/parser {:read read :mutate mutate}))

(def reconciler
  (om/reconciler
   {:state app-state
    :parser parser}))

(om/add-root! reconciler
              Board-vw (gdom/getElement "app"))

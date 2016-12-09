(ns minesweeper.dev
  (:require [minesweeper.core :as minesweeper]
            [figwheel.client :as fw]))

(fw/start {:on-jsload minesweeper/run
           :websocket-url "ws://localhost:3449/figwheel-ws"})


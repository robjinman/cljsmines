(defproject minesweeper "0.1.0-SNAPSHOT"
  :description "Classic minesweeper clone"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha34"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]]
  :plugins [[lein-less "1.7.5"]]
  :less {:source-paths ["less"]
         :target-path  "resources/public/css"})


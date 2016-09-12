(defproject minesweeper "0.1.0-SNAPSHOT"
  :description "Classic minesweeper clone"
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha34"]]
  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]]
                   :plugins [[lein-cljsbuild "1.1.4"]
                             [lein-resource "15.10.2"]
                             [lein-less "1.7.5"]]}}
  :less {:source-paths ["less"]
         :target-path  "resources/public/css"}
  :cljsbuild {
              :builds [
                       {:id           "release"
                        :source-paths ["src"]
                        :compiler     {;; :main minesweeper.core
                                       :optimizations  :advanced
                                       :pretty-print   false
                                       :output-dir     "target/js/out"
                                       :output-to      "target/js/cljsmines.js"
                                       :source-map     "target/js/cljsmines.js.map"
                                       :parallel-build true}}]}
  :resource {:resource-paths ["resources/public"]
             :target-path    "target"
             :update         false
             :includes       [#".*"]
             :excludes       [#".*~"
                              #"resources/public/js/.*"]
             :silent         false
             :verbose        false
             :skip-stencil   [#"resources/public/css/.*"
                              #"resources/public/img/.*"]
             :extra-values   nil}
  :aliases {"build"    ["do" "clean"
                        ["cljsbuild" "once" "release"]
                        ["less" "once"]
                        ["resource"]]})


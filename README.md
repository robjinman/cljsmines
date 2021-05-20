CLJS Mines
==========

Try it here: https://robjinman.github.io/cljsmines/target/index.html


Building CLJS Mines
-------------------

To run locally

        rlwrap lein figwheel

Then navigate to http://localhost:3449 in the browser. Figwheel will rebuild the ClojureScript when the source changes.

To build the css, run

        lein less once

or

        lein less auto

To make a production build, run

        lein build


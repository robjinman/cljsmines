// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.std_interceptors');
goog.require('cljs.core');
goog.require('re_frame.interceptor');
goog.require('re_frame.loggers');
goog.require('re_frame.registrar');
goog.require('re_frame.db');
goog.require('clojure.data');
/**
 * An interceptor which logs data about the handling of an event.
 * 
 *   Includes a `clojure.data/diff` of the db, before vs after, showing
 *   the changes caused by the event handler.
 * 
 *   You'd typically want this interceptor after (to the right of) any
 *   path interceptor.
 * 
 *   Warning:  calling clojure.data/diff on large, complex data structures
 *   can be slow. So, you won't want this interceptor present in production
 *   code. See the todomvc example to see how to exclude interceptors from
 *   production code.
 */
re_frame.std_interceptors.debug = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$debug,cljs.core.cst$kw$before,(function re_frame$std_interceptors$debug_before(context){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.array_seq(["Handling re-frame event: ",re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event)], 0));

return context;
}),cljs.core.cst$kw$after,(function re_frame$std_interceptors$debug_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event);
var orig_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$db,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_db,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_not_DASH_found)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.array_seq(["No :db changes caused by: ",event], 0));
} else {
var vec__13097_13109 = clojure.data.diff(orig_db,new_db);
var only_before_13110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13097_13109,(0),null);
var only_after_13111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13097_13109,(1),null);
var db_changed_QMARK__13112 = (cljs.core.some_QMARK_(only_before_13110)) || (cljs.core.some_QMARK_(only_after_13111));
if(db_changed_QMARK__13112){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$group,cljs.core.array_seq(["db clojure.data/diff for: ",event], 0));

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.array_seq(["only before: ",only_before_13110], 0));

re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.array_seq(["only after : ",only_after_13111], 0));

re_frame.loggers.console(cljs.core.cst$kw$groupEnd);
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$log,cljs.core.array_seq(["no app-db changes caused by: ",event], 0));
}
}

return context;
})], 0));
/**
 * An interceptor which removes the first element of the event vector,
 *   allowing you to write more aesthetically pleasing db handlers. No
 *   leading underscore on the event-v!
 *   Your event handlers will look like this:
 * 
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 */
re_frame.std_interceptors.trim_v = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$trim_DASH_v,cljs.core.cst$kw$before,(function re_frame$std_interceptors$trimv_before(context){
return re_frame.interceptor.assoc_coeffect(context,cljs.core.cst$kw$event,cljs.core.vec(cljs.core.rest(re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event))));
})], 0));
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-db`.
 * 
 *   These handlers take two arguments;  `db` and `event`, and they return `db`.
 * 
 *   (fn [db event]
 *   ....)
 * 
 *   So, the interceptor wraps the given handler:
 *   1. extracts two `:coeffects` keys: db and event
 *   2. calls handler-fn
 *   3. stores the db result back into context's `:effects`
 */
re_frame.std_interceptors.db_handler__GT_interceptor = (function re_frame$std_interceptors$db_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$db_DASH_handler,cljs.core.cst$kw$before,(function re_frame$std_interceptors$db_handler__GT_interceptor_$_db_handler_before(context){
var map__13122 = cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(context);
var map__13122__$1 = ((((!((map__13122 == null)))?((((map__13122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13122):map__13122);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13122__$1,cljs.core.cst$kw$db);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13122__$1,cljs.core.cst$kw$event);
return re_frame.interceptor.assoc_effect(context,cljs.core.cst$kw$db,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(db,event) : handler_fn.call(null,db,event)));
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.
 * 
 *   These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.
 * 
 *   (fn [coeffects event]
 *   {:db ...
 *    :dispatch ...})
 * 
 * Wrap handler in an interceptor so it can be added to (the RHS) of a chain:
 *   1. extracts `:coeffects`
 *   2. call handler-fn giving coeffects
 *   3. stores the result back into the `:effects`
 */
re_frame.std_interceptors.fx_handler__GT_interceptor = (function re_frame$std_interceptors$fx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$fx_DASH_handler,cljs.core.cst$kw$before,(function re_frame$std_interceptors$fx_handler__GT_interceptor_$_fx_handler_before(context){
var map__13160 = cljs.core.cst$kw$coeffects.cljs$core$IFn$_invoke$arity$1(context);
var map__13160__$1 = ((((!((map__13160 == null)))?((((map__13160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13160):map__13160);
var coeffects = map__13160__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13160__$1,cljs.core.cst$kw$event);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$effects,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event)));
})], 0));
});
/**
 * Returns an interceptor which wraps the kind of event handler given to `reg-event-ctx`.
 *   These advanced handlers take one argument: `context` and they return a modified `context`.
 *   Example:
 *   (fn [context]
 *      (enqueue context [more interceptors]))
 */
re_frame.std_interceptors.ctx_handler__GT_interceptor = (function re_frame$std_interceptors$ctx_handler__GT_interceptor(handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$ctx_DASH_handler,cljs.core.cst$kw$before,handler_fn], 0));
});
/**
 * An interceptor factory which supplies a sub-path of `:db` to the handler.
 *   It's action is somewhat annologous to `update-in`. It grafts the return
 *   value from the handler back into db.
 * 
 *   Usage:
 *  (path :some :path)
 *  (path [:some :path])
 *  (path [:some :path] :to :here)
 *  (path [:some :path] [:to] :here)
 * 
 *   Notes:
 *  1. cater for `path` appearing more than once in an interceptor chain.
 *  2. `:effect` may not contain `:db` effect. Which means no change to
 *     `:db` should be made.
 *   
 */
re_frame.std_interceptors.path = (function re_frame$std_interceptors$path(var_args){
var args__7486__auto__ = [];
var len__7479__auto___13173 = arguments.length;
var i__7480__auto___13174 = (0);
while(true){
if((i__7480__auto___13174 < len__7479__auto___13173)){
args__7486__auto__.push((arguments[i__7480__auto___13174]));

var G__13177 = (i__7480__auto___13174 + (1));
i__7480__auto___13174 = G__13177;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((0) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((0)),(0),null)):null);
return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(argseq__7487__auto__);
});

re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var path = cljs.core.flatten(args);
var db_store_key = cljs.core.cst$kw$re_DASH_frame_DASH_path_SLASH_db_DASH_store;
if(cljs.core.empty_QMARK_(path)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: \"path\" interceptor given no params"], 0));
} else {
}

return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$path,cljs.core.cst$kw$before,((function (path,db_store_key){
return (function (context){
var original_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
return re_frame.interceptor.assoc_coeffect(cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,db_store_key,cljs.core.conj,original_db),cljs.core.cst$kw$db,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(original_db,path));
});})(path,db_store_key))
,cljs.core.cst$kw$after,((function (path,db_store_key){
return (function (context){
var db_store = (db_store_key.cljs$core$IFn$_invoke$arity$1 ? db_store_key.cljs$core$IFn$_invoke$arity$1(context) : db_store_key.call(null,context));
var original_db = cljs.core.peek(db_store);
var new_db_store = cljs.core.pop(db_store);
var context_SINGLEQUOTE_ = re_frame.interceptor.assoc_coeffect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,db_store_key,new_db_store),cljs.core.cst$kw$db,original_db);
var db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$db,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_not_DASH_found);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$re_DASH_frame$std_DASH_interceptors_SLASH_not_DASH_found)){
return context_SINGLEQUOTE_;
} else {
return re_frame.interceptor.assoc_effect(context_SINGLEQUOTE_,cljs.core.cst$kw$db,cljs.core.assoc_in(original_db,path,db));
}
});})(path,db_store_key))
], 0));
});

re_frame.std_interceptors.path.cljs$lang$maxFixedArity = (0);

re_frame.std_interceptors.path.cljs$lang$applyTo = (function (seq13172){
return re_frame.std_interceptors.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13172));
});

/**
 * Interceptor factory which runs the given function `f` in the `after handler`
 *   position.  `f` is called with two arguments: `db` and `v`, and is expected to
 *   return a modified `db`.
 * 
 *   Unlike the `after` inteceptor which is only about side effects, `enrich`
 *   expects f to process and alter the given `db` coeffect in some useful way,
 *   contributing to the derived data, flowing vibe.
 * 
 *   Example Use:
 * 
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them in a warning
 *   down the bottom of the panel.
 * 
 *   Almost any action (edit text, add new todo, remove a todo) requires a
 *   complete reassesment of duplication errors and warnings. Eg: that edit
 *   update might have introduced a new duplicate or removed one. Same with a
 *   todo removal.
 * 
 *   And to perform this enrichment, a function has to inspect all the todos,
 *   possibly set flags on each, and set some overall list of duplicates.
 *   And this duplication check might just be one check among many.
 * 
 *   `f` would need to be both adding and removing the duplicate warnings.
 *   By applying `f` in middleware, we keep the handlers simple and yet we
 *   ensure this important step is not missed.
 */
re_frame.std_interceptors.enrich = (function re_frame$std_interceptors$enrich(f){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$enrich,cljs.core.cst$kw$after,(function re_frame$std_interceptors$enrich_$_enrich_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event);
var db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
return re_frame.interceptor.assoc_effect(context,cljs.core.cst$kw$db,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event)));
})], 0));
});
/**
 * Interceptor factory which runs a given function `f` in the "after"
 *   position, presumably for side effects.
 * 
 *   `f` is called with two arguments: the `effects` value of `:db` and the event. It's return
 *   value is ignored so `f` can only side-effect.
 * 
 *   Example use:
 *   - `f` runs schema validation (reporting any errors found)
 *   - `f` writes some aspect of db to localstorage.
 */
re_frame.std_interceptors.after = (function re_frame$std_interceptors$after(f){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$after,cljs.core.cst$kw$after,(function re_frame$std_interceptors$after_$_after_after(context){
var db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$event);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(db,event) : f.call(null,db,event));

return context;
})], 0));
});
/**
 * Interceptor factory which acts a bit like `reaction`  (but it flows into `db`, rather than out)
 *   It observes N paths in `db` and if any of them test not indentical? to their previous value
 *   (as a result of a handler being run) then it runs `f` to compute a new value, which is
 *   then assoced into the given `out-path` within `db`.
 * 
 *   Usage:
 * 
 *   (defn my-f
 *  [a-val b-val]
 *  ... some computation on a and b in here)
 * 
 *   (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put this Interceptor on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call `f` each time the value at path [:a] or [:b] changes
 *   - call `f` with the values extracted from [:a] [:b]
 *   - assoc the return value from `f` into the path  [:c]
 *   
 */
re_frame.std_interceptors.on_changes = (function re_frame$std_interceptors$on_changes(var_args){
var args__7486__auto__ = [];
var len__7479__auto___13199 = arguments.length;
var i__7480__auto___13200 = (0);
while(true){
if((i__7480__auto___13200 < len__7479__auto___13199)){
args__7486__auto__.push((arguments[i__7480__auto___13200]));

var G__13201 = (i__7480__auto___13200 + (1));
i__7480__auto___13200 = G__13201;
continue;
} else {
}
break;
}

var argseq__7487__auto__ = ((((2) < args__7486__auto__.length))?(new cljs.core.IndexedSeq(args__7486__auto__.slice((2)),(0),null)):null);
return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7487__auto__);
});

re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$enrich,cljs.core.cst$kw$after,(function re_frame$std_interceptors$on_change_after(context){
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
var old_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$db);
var new_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_db,old_db){
return (function (p1__13194_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,p1__13194_SHARP_);
});})(new_db,old_db))
,in_paths);
var old_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_db,old_db,new_ins){
return (function (p1__13195_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_db,p1__13195_SHARP_);
});})(new_db,old_db,new_ins))
,in_paths);
var changed_ins_QMARK_ = cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.identical_QMARK_,new_ins,old_ins));
if(cljs.core.truth_(changed_ins_QMARK_)){
return re_frame.interceptor.assoc_effect(context,cljs.core.cst$kw$db,cljs.core.assoc_in(new_db,out_path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new_ins)));
} else {
return context;
}
})], 0));
});

re_frame.std_interceptors.on_changes.cljs$lang$maxFixedArity = (2);

re_frame.std_interceptors.on_changes.cljs$lang$applyTo = (function (seq13196){
var G__13197 = cljs.core.first(seq13196);
var seq13196__$1 = cljs.core.next(seq13196);
var G__13198 = cljs.core.first(seq13196__$1);
var seq13196__$2 = cljs.core.next(seq13196__$1);
return re_frame.std_interceptors.on_changes.cljs$core$IFn$_invoke$arity$variadic(G__13197,G__13198,seq13196__$2);
});


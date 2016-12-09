// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13141){
var vec__13142 = p__13141;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13142,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13142,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__13151_13167 = cljs.core.cst$kw$dispatch_DASH_later;
var G__13152_13168 = ((function (G__13151_13167){
return (function (value){
var seq__13153 = cljs.core.seq(value);
var chunk__13154 = null;
var count__13155 = (0);
var i__13156 = (0);
while(true){
if((i__13156 < count__13155)){
var map__13157 = chunk__13154.cljs$core$IIndexed$_nth$arity$2(null,i__13156);
var map__13157__$1 = ((((!((map__13157 == null)))?((((map__13157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13157):map__13157);
var effect = map__13157__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13157__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13153,chunk__13154,count__13155,i__13156,map__13157,map__13157__$1,effect,ms,dispatch,G__13151_13167){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13153,chunk__13154,count__13155,i__13156,map__13157,map__13157__$1,effect,ms,dispatch,G__13151_13167))
,ms);
}

var G__13173 = seq__13153;
var G__13174 = chunk__13154;
var G__13175 = count__13155;
var G__13176 = (i__13156 + (1));
seq__13153 = G__13173;
chunk__13154 = G__13174;
count__13155 = G__13175;
i__13156 = G__13176;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13153);
if(temp__4657__auto__){
var seq__13153__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13153__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13153__$1);
var G__13182 = cljs.core.chunk_rest(seq__13153__$1);
var G__13183 = c__7215__auto__;
var G__13184 = cljs.core.count(c__7215__auto__);
var G__13185 = (0);
seq__13153 = G__13182;
chunk__13154 = G__13183;
count__13155 = G__13184;
i__13156 = G__13185;
continue;
} else {
var map__13163 = cljs.core.first(seq__13153__$1);
var map__13163__$1 = ((((!((map__13163 == null)))?((((map__13163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13163):map__13163);
var effect = map__13163__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13153,chunk__13154,count__13155,i__13156,map__13163,map__13163__$1,effect,ms,dispatch,seq__13153__$1,temp__4657__auto__,G__13151_13167){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13153,chunk__13154,count__13155,i__13156,map__13163,map__13163__$1,effect,ms,dispatch,seq__13153__$1,temp__4657__auto__,G__13151_13167))
,ms);
}

var G__13192 = cljs.core.next(seq__13153__$1);
var G__13193 = null;
var G__13194 = (0);
var G__13195 = (0);
seq__13153 = G__13192;
chunk__13154 = G__13193;
count__13155 = G__13194;
i__13156 = G__13195;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13151_13167))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13151_13167,G__13152_13168) : re_frame.fx.register.call(null,G__13151_13167,G__13152_13168));
var G__13196_13198 = cljs.core.cst$kw$dispatch;
var G__13197_13199 = ((function (G__13196_13198){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__13196_13198))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13196_13198,G__13197_13199) : re_frame.fx.register.call(null,G__13196_13198,G__13197_13199));
var G__13207_13213 = cljs.core.cst$kw$dispatch_DASH_n;
var G__13208_13214 = ((function (G__13207_13213){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__13209 = cljs.core.seq(value);
var chunk__13210 = null;
var count__13211 = (0);
var i__13212 = (0);
while(true){
if((i__13212 < count__13211)){
var event = chunk__13210.cljs$core$IIndexed$_nth$arity$2(null,i__13212);
re_frame.router.dispatch(event);

var G__13228 = seq__13209;
var G__13229 = chunk__13210;
var G__13230 = count__13211;
var G__13231 = (i__13212 + (1));
seq__13209 = G__13228;
chunk__13210 = G__13229;
count__13211 = G__13230;
i__13212 = G__13231;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13209);
if(temp__4657__auto__){
var seq__13209__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13209__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13209__$1);
var G__13232 = cljs.core.chunk_rest(seq__13209__$1);
var G__13233 = c__7215__auto__;
var G__13234 = cljs.core.count(c__7215__auto__);
var G__13235 = (0);
seq__13209 = G__13232;
chunk__13210 = G__13233;
count__13211 = G__13234;
i__13212 = G__13235;
continue;
} else {
var event = cljs.core.first(seq__13209__$1);
re_frame.router.dispatch(event);

var G__13236 = cljs.core.next(seq__13209__$1);
var G__13237 = null;
var G__13238 = (0);
var G__13239 = (0);
seq__13209 = G__13236;
chunk__13210 = G__13237;
count__13211 = G__13238;
i__13212 = G__13239;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13207_13213))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13207_13213,G__13208_13214) : re_frame.fx.register.call(null,G__13207_13213,G__13208_13214));
var G__13255_13257 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__13256_13258 = ((function (G__13255_13257){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__13255_13257))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13255_13257,G__13256_13258) : re_frame.fx.register.call(null,G__13255_13257,G__13256_13258));
var G__13259_13261 = cljs.core.cst$kw$db;
var G__13260_13262 = ((function (G__13259_13261){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__13259_13261))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13259_13261,G__13260_13262) : re_frame.fx.register.call(null,G__13259_13261,G__13260_13262));

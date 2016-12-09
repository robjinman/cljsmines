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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13143){
var vec__13144 = p__13143;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13144,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13144,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__13154_13165 = cljs.core.cst$kw$dispatch_DASH_later;
var G__13155_13166 = ((function (G__13154_13165){
return (function (value){
var seq__13156 = cljs.core.seq(value);
var chunk__13157 = null;
var count__13158 = (0);
var i__13159 = (0);
while(true){
if((i__13159 < count__13158)){
var map__13160 = chunk__13157.cljs$core$IIndexed$_nth$arity$2(null,i__13159);
var map__13160__$1 = ((((!((map__13160 == null)))?((((map__13160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13160):map__13160);
var effect = map__13160__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13160__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13160__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13156,chunk__13157,count__13158,i__13159,map__13160,map__13160__$1,effect,ms,dispatch,G__13154_13165){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13156,chunk__13157,count__13158,i__13159,map__13160,map__13160__$1,effect,ms,dispatch,G__13154_13165))
,ms);
}

var G__13179 = seq__13156;
var G__13180 = chunk__13157;
var G__13181 = count__13158;
var G__13182 = (i__13159 + (1));
seq__13156 = G__13179;
chunk__13157 = G__13180;
count__13158 = G__13181;
i__13159 = G__13182;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13156);
if(temp__4657__auto__){
var seq__13156__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13156__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13156__$1);
var G__13183 = cljs.core.chunk_rest(seq__13156__$1);
var G__13184 = c__7215__auto__;
var G__13185 = cljs.core.count(c__7215__auto__);
var G__13186 = (0);
seq__13156 = G__13183;
chunk__13157 = G__13184;
count__13158 = G__13185;
i__13159 = G__13186;
continue;
} else {
var map__13163 = cljs.core.first(seq__13156__$1);
var map__13163__$1 = ((((!((map__13163 == null)))?((((map__13163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13163):map__13163);
var effect = map__13163__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13156,chunk__13157,count__13158,i__13159,map__13163,map__13163__$1,effect,ms,dispatch,seq__13156__$1,temp__4657__auto__,G__13154_13165){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13156,chunk__13157,count__13158,i__13159,map__13163,map__13163__$1,effect,ms,dispatch,seq__13156__$1,temp__4657__auto__,G__13154_13165))
,ms);
}

var G__13195 = cljs.core.next(seq__13156__$1);
var G__13196 = null;
var G__13197 = (0);
var G__13198 = (0);
seq__13156 = G__13195;
chunk__13157 = G__13196;
count__13158 = G__13197;
i__13159 = G__13198;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13154_13165))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13154_13165,G__13155_13166) : re_frame.fx.register.call(null,G__13154_13165,G__13155_13166));
var G__13199_13201 = cljs.core.cst$kw$dispatch;
var G__13200_13202 = ((function (G__13199_13201){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__13199_13201))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13199_13201,G__13200_13202) : re_frame.fx.register.call(null,G__13199_13201,G__13200_13202));
var G__13209_13215 = cljs.core.cst$kw$dispatch_DASH_n;
var G__13210_13216 = ((function (G__13209_13215){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__13211 = cljs.core.seq(value);
var chunk__13212 = null;
var count__13213 = (0);
var i__13214 = (0);
while(true){
if((i__13214 < count__13213)){
var event = chunk__13212.cljs$core$IIndexed$_nth$arity$2(null,i__13214);
re_frame.router.dispatch(event);

var G__13221 = seq__13211;
var G__13222 = chunk__13212;
var G__13223 = count__13213;
var G__13224 = (i__13214 + (1));
seq__13211 = G__13221;
chunk__13212 = G__13222;
count__13213 = G__13223;
i__13214 = G__13224;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13211);
if(temp__4657__auto__){
var seq__13211__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13211__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13211__$1);
var G__13225 = cljs.core.chunk_rest(seq__13211__$1);
var G__13226 = c__7215__auto__;
var G__13227 = cljs.core.count(c__7215__auto__);
var G__13228 = (0);
seq__13211 = G__13225;
chunk__13212 = G__13226;
count__13213 = G__13227;
i__13214 = G__13228;
continue;
} else {
var event = cljs.core.first(seq__13211__$1);
re_frame.router.dispatch(event);

var G__13229 = cljs.core.next(seq__13211__$1);
var G__13230 = null;
var G__13231 = (0);
var G__13232 = (0);
seq__13211 = G__13229;
chunk__13212 = G__13230;
count__13213 = G__13231;
i__13214 = G__13232;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13209_13215))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13209_13215,G__13210_13216) : re_frame.fx.register.call(null,G__13209_13215,G__13210_13216));
var G__13241_13243 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__13242_13244 = ((function (G__13241_13243){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__13241_13243))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13241_13243,G__13242_13244) : re_frame.fx.register.call(null,G__13241_13243,G__13242_13244));
var G__13248_13250 = cljs.core.cst$kw$db;
var G__13249_13251 = ((function (G__13248_13250){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__13248_13250))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13248_13250,G__13249_13251) : re_frame.fx.register.call(null,G__13248_13250,G__13249_13251));

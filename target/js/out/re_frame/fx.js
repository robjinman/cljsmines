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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13232){
var vec__13233 = p__13232;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13233,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13233,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__13236_13246 = cljs.core.cst$kw$dispatch_DASH_later;
var G__13237_13247 = ((function (G__13236_13246){
return (function (value){
var seq__13238 = cljs.core.seq(value);
var chunk__13239 = null;
var count__13240 = (0);
var i__13241 = (0);
while(true){
if((i__13241 < count__13240)){
var map__13242 = chunk__13239.cljs$core$IIndexed$_nth$arity$2(null,i__13241);
var map__13242__$1 = ((((!((map__13242 == null)))?((((map__13242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13242):map__13242);
var effect = map__13242__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13242__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13242__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13238,chunk__13239,count__13240,i__13241,map__13242,map__13242__$1,effect,ms,dispatch,G__13236_13246){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13238,chunk__13239,count__13240,i__13241,map__13242,map__13242__$1,effect,ms,dispatch,G__13236_13246))
,ms);
}

var G__13248 = seq__13238;
var G__13249 = chunk__13239;
var G__13250 = count__13240;
var G__13251 = (i__13241 + (1));
seq__13238 = G__13248;
chunk__13239 = G__13249;
count__13240 = G__13250;
i__13241 = G__13251;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13238);
if(temp__4657__auto__){
var seq__13238__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13238__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13238__$1);
var G__13252 = cljs.core.chunk_rest(seq__13238__$1);
var G__13253 = c__7215__auto__;
var G__13254 = cljs.core.count(c__7215__auto__);
var G__13255 = (0);
seq__13238 = G__13252;
chunk__13239 = G__13253;
count__13240 = G__13254;
i__13241 = G__13255;
continue;
} else {
var map__13244 = cljs.core.first(seq__13238__$1);
var map__13244__$1 = ((((!((map__13244 == null)))?((((map__13244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13244):map__13244);
var effect = map__13244__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13244__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13244__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13238,chunk__13239,count__13240,i__13241,map__13244,map__13244__$1,effect,ms,dispatch,seq__13238__$1,temp__4657__auto__,G__13236_13246){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13238,chunk__13239,count__13240,i__13241,map__13244,map__13244__$1,effect,ms,dispatch,seq__13238__$1,temp__4657__auto__,G__13236_13246))
,ms);
}

var G__13256 = cljs.core.next(seq__13238__$1);
var G__13257 = null;
var G__13258 = (0);
var G__13259 = (0);
seq__13238 = G__13256;
chunk__13239 = G__13257;
count__13240 = G__13258;
i__13241 = G__13259;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13236_13246))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13236_13246,G__13237_13247) : re_frame.fx.register.call(null,G__13236_13246,G__13237_13247));
var G__13260_13262 = cljs.core.cst$kw$dispatch;
var G__13261_13263 = ((function (G__13260_13262){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__13260_13262))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13260_13262,G__13261_13263) : re_frame.fx.register.call(null,G__13260_13262,G__13261_13263));
var G__13264_13270 = cljs.core.cst$kw$dispatch_DASH_n;
var G__13265_13271 = ((function (G__13264_13270){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__13266 = cljs.core.seq(value);
var chunk__13267 = null;
var count__13268 = (0);
var i__13269 = (0);
while(true){
if((i__13269 < count__13268)){
var event = chunk__13267.cljs$core$IIndexed$_nth$arity$2(null,i__13269);
re_frame.router.dispatch(event);

var G__13272 = seq__13266;
var G__13273 = chunk__13267;
var G__13274 = count__13268;
var G__13275 = (i__13269 + (1));
seq__13266 = G__13272;
chunk__13267 = G__13273;
count__13268 = G__13274;
i__13269 = G__13275;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13266);
if(temp__4657__auto__){
var seq__13266__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13266__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13266__$1);
var G__13276 = cljs.core.chunk_rest(seq__13266__$1);
var G__13277 = c__7215__auto__;
var G__13278 = cljs.core.count(c__7215__auto__);
var G__13279 = (0);
seq__13266 = G__13276;
chunk__13267 = G__13277;
count__13268 = G__13278;
i__13269 = G__13279;
continue;
} else {
var event = cljs.core.first(seq__13266__$1);
re_frame.router.dispatch(event);

var G__13280 = cljs.core.next(seq__13266__$1);
var G__13281 = null;
var G__13282 = (0);
var G__13283 = (0);
seq__13266 = G__13280;
chunk__13267 = G__13281;
count__13268 = G__13282;
i__13269 = G__13283;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13264_13270))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13264_13270,G__13265_13271) : re_frame.fx.register.call(null,G__13264_13270,G__13265_13271));
var G__13284_13286 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__13285_13287 = ((function (G__13284_13286){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__13284_13286))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13284_13286,G__13285_13287) : re_frame.fx.register.call(null,G__13284_13286,G__13285_13287));
var G__13288_13290 = cljs.core.cst$kw$db;
var G__13289_13291 = ((function (G__13288_13290){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__13288_13290))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13288_13290,G__13289_13291) : re_frame.fx.register.call(null,G__13288_13290,G__13289_13291));

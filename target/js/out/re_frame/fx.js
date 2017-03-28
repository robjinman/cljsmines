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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13171){
var vec__13172 = p__13171;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13172,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return (effect_fn.cljs$core$IFn$_invoke$arity$1 ? effect_fn.cljs$core$IFn$_invoke$arity$1(value) : effect_fn.call(null,value));
} else {
return null;
}
}),cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context)));
})], 0));
var G__13175_13188 = cljs.core.cst$kw$dispatch_DASH_later;
var G__13176_13189 = ((function (G__13175_13188){
return (function (value){
var seq__13177 = cljs.core.seq(value);
var chunk__13178 = null;
var count__13179 = (0);
var i__13180 = (0);
while(true){
if((i__13180 < count__13179)){
var map__13181 = chunk__13178.cljs$core$IIndexed$_nth$arity$2(null,i__13180);
var map__13181__$1 = ((((!((map__13181 == null)))?((((map__13181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13181):map__13181);
var effect = map__13181__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13181__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13181__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13177,chunk__13178,count__13179,i__13180,map__13181,map__13181__$1,effect,ms,dispatch,G__13175_13188){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13177,chunk__13178,count__13179,i__13180,map__13181,map__13181__$1,effect,ms,dispatch,G__13175_13188))
,ms);
}

var G__13200 = seq__13177;
var G__13201 = chunk__13178;
var G__13202 = count__13179;
var G__13203 = (i__13180 + (1));
seq__13177 = G__13200;
chunk__13178 = G__13201;
count__13179 = G__13202;
i__13180 = G__13203;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13177);
if(temp__4657__auto__){
var seq__13177__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13177__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13177__$1);
var G__13205 = cljs.core.chunk_rest(seq__13177__$1);
var G__13206 = c__7215__auto__;
var G__13207 = cljs.core.count(c__7215__auto__);
var G__13208 = (0);
seq__13177 = G__13205;
chunk__13178 = G__13206;
count__13179 = G__13207;
i__13180 = G__13208;
continue;
} else {
var map__13183 = cljs.core.first(seq__13177__$1);
var map__13183__$1 = ((((!((map__13183 == null)))?((((map__13183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13183):map__13183);
var effect = map__13183__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13183__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13183__$1,cljs.core.cst$kw$dispatch);
if((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-later value: ",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13177,chunk__13178,count__13179,i__13180,map__13183,map__13183__$1,effect,ms,dispatch,seq__13177__$1,temp__4657__auto__,G__13175_13188){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13177,chunk__13178,count__13179,i__13180,map__13183,map__13183__$1,effect,ms,dispatch,seq__13177__$1,temp__4657__auto__,G__13175_13188))
,ms);
}

var G__13220 = cljs.core.next(seq__13177__$1);
var G__13221 = null;
var G__13222 = (0);
var G__13223 = (0);
seq__13177 = G__13220;
chunk__13178 = G__13221;
count__13179 = G__13222;
i__13180 = G__13223;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13175_13188))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13175_13188,G__13176_13189) : re_frame.fx.register.call(null,G__13175_13188,G__13176_13189));
var G__13225_13227 = cljs.core.cst$kw$dispatch;
var G__13226_13228 = ((function (G__13225_13227){
return (function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value], 0));
} else {
return re_frame.router.dispatch(value);
}
});})(G__13225_13227))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13225_13227,G__13226_13228) : re_frame.fx.register.call(null,G__13225_13227,G__13226_13228));
var G__13229_13235 = cljs.core.cst$kw$dispatch_DASH_n;
var G__13230_13236 = ((function (G__13229_13235){
return (function (value){
if(!(cljs.core.sequential_QMARK_(value))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value], 0));
} else {
}

var seq__13231 = cljs.core.seq(value);
var chunk__13232 = null;
var count__13233 = (0);
var i__13234 = (0);
while(true){
if((i__13234 < count__13233)){
var event = chunk__13232.cljs$core$IIndexed$_nth$arity$2(null,i__13234);
re_frame.router.dispatch(event);

var G__13239 = seq__13231;
var G__13240 = chunk__13232;
var G__13241 = count__13233;
var G__13242 = (i__13234 + (1));
seq__13231 = G__13239;
chunk__13232 = G__13240;
count__13233 = G__13241;
i__13234 = G__13242;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13231);
if(temp__4657__auto__){
var seq__13231__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13231__$1)){
var c__7215__auto__ = cljs.core.chunk_first(seq__13231__$1);
var G__13243 = cljs.core.chunk_rest(seq__13231__$1);
var G__13244 = c__7215__auto__;
var G__13245 = cljs.core.count(c__7215__auto__);
var G__13246 = (0);
seq__13231 = G__13243;
chunk__13232 = G__13244;
count__13233 = G__13245;
i__13234 = G__13246;
continue;
} else {
var event = cljs.core.first(seq__13231__$1);
re_frame.router.dispatch(event);

var G__13249 = cljs.core.next(seq__13231__$1);
var G__13250 = null;
var G__13251 = (0);
var G__13252 = (0);
seq__13231 = G__13249;
chunk__13232 = G__13250;
count__13233 = G__13251;
i__13234 = G__13252;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__13229_13235))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13229_13235,G__13230_13236) : re_frame.fx.register.call(null,G__13229_13235,G__13230_13236));
var G__13273_13300 = cljs.core.cst$kw$deregister_DASH_event_DASH_handler;
var G__13274_13301 = ((function (G__13273_13300){
return (function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clear_event,value));
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
});})(G__13273_13300))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13273_13300,G__13274_13301) : re_frame.fx.register.call(null,G__13273_13300,G__13274_13301));
var G__13302_13304 = cljs.core.cst$kw$db;
var G__13303_13305 = ((function (G__13302_13304){
return (function (value){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,value) : cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value));
});})(G__13302_13304))
;
(re_frame.fx.register.cljs$core$IFn$_invoke$arity$2 ? re_frame.fx.register.cljs$core$IFn$_invoke$arity$2(G__13302_13304,G__13303_13305) : re_frame.fx.register.call(null,G__13302_13304,G__13303_13305));

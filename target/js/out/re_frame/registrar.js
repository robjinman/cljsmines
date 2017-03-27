// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.registrar');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
re_frame.registrar.kinds = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$sub,null,cljs.core.cst$kw$event,null,cljs.core.cst$kw$cofx,null,cljs.core.cst$kw$fx,null], null), null);
re_frame.registrar.kind__GT_id__GT_handler = (function (){var G__12989 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12989) : cljs.core.atom.call(null,G__12989));
})();
re_frame.registrar.get_handler = (function re_frame$registrar$get_handler(var_args){
var args12990 = [];
var len__7479__auto___13001 = arguments.length;
var i__7480__auto___13002 = (0);
while(true){
if((i__7480__auto___13002 < len__7479__auto___13001)){
args12990.push((arguments[i__7480__auto___13002]));

var G__13003 = (i__7480__auto___13002 + (1));
i__7480__auto___13002 = G__13003;
continue;
} else {
}
break;
}

var G__12995 = args12990.length;
switch (G__12995) {
case 1:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12990.length)].join('')));

}
});

re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$1 = (function (kind){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)),kind);
});

re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.registrar.kind__GT_id__GT_handler) : cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler)),kind),id);
});

re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3 = (function (kind,id,required_QMARK_){
var handler = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(kind,id);
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_((function (){var and__6392__auto__ = required_QMARK_;
if(cljs.core.truth_(and__6392__auto__)){
return (handler == null);
} else {
return and__6392__auto__;
}
})())){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.array_seq(["re-frame: no ",[cljs.core.str(kind)].join('')," handler registered for: ",id], 0));
} else {
}
} else {
}

return handler;
});

re_frame.registrar.get_handler.cljs$lang$maxFixedArity = 3;

re_frame.registrar.register_handler = (function re_frame$registrar$register_handler(kind,id,handler_fn){
if(re_frame.interop.debug_enabled_QMARK_){
if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(kind,id,false))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: overwriting ",[cljs.core.str(kind)].join('')," handler for: ",id], 0));
} else {
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.registrar.kind__GT_id__GT_handler,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,id], null),handler_fn);

return handler_fn;
});
re_frame.registrar.clear_handlers = (function re_frame$registrar$clear_handlers(var_args){
var args13019 = [];
var len__7479__auto___13026 = arguments.length;
var i__7480__auto___13027 = (0);
while(true){
if((i__7480__auto___13027 < len__7479__auto___13026)){
args13019.push((arguments[i__7480__auto___13027]));

var G__13028 = (i__7480__auto___13027 + (1));
i__7480__auto___13027 = G__13028;
continue;
} else {
}
break;
}

var G__13022 = args13019.length;
switch (G__13022) {
case 0:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13019.length)].join('')));

}
});

re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$0 = (function (){
var G__13024 = re_frame.registrar.kind__GT_id__GT_handler;
var G__13025 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13024,G__13025) : cljs.core.reset_BANG_.call(null,G__13024,G__13025));
});

re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1 = (function (kind){
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(kind) : re_frame.registrar.kinds.call(null,kind)))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.registrar.kind__GT_id__GT_handler,cljs.core.dissoc,kind);
});

re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2 = (function (kind,id){
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(kind) : re_frame.registrar.kinds.call(null,kind)))){
} else {
throw (new Error("Assert failed: (kinds kind)"));
}

if(cljs.core.truth_(re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(kind,id))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame.registrar.kind__GT_id__GT_handler,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind], null),cljs.core.dissoc,cljs.core.array_seq([id], 0));
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.array_seq(["re-frame: can't clear ",[cljs.core.str(kind)].join('')," handler for  ",id,".  Not found."], 0));
}
});

re_frame.registrar.clear_handlers.cljs$lang$maxFixedArity = 2;


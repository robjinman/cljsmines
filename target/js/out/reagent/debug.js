// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12346__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12352__i = 0, G__12352__a = new Array(arguments.length -  0);
while (G__12352__i < G__12352__a.length) {G__12352__a[G__12352__i] = arguments[G__12352__i + 0]; ++G__12352__i;}
  args = new cljs.core.IndexedSeq(G__12352__a,0);
} 
return G__12346__delegate.call(this,args);};
G__12346.cljs$lang$maxFixedArity = 0;
G__12346.cljs$lang$applyTo = (function (arglist__12353){
var args = cljs.core.seq(arglist__12353);
return G__12346__delegate(args);
});
G__12346.cljs$core$IFn$_invoke$arity$variadic = G__12346__delegate;
return G__12346;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12355__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12358__i = 0, G__12358__a = new Array(arguments.length -  0);
while (G__12358__i < G__12358__a.length) {G__12358__a[G__12358__i] = arguments[G__12358__i + 0]; ++G__12358__i;}
  args = new cljs.core.IndexedSeq(G__12358__a,0);
} 
return G__12355__delegate.call(this,args);};
G__12355.cljs$lang$maxFixedArity = 0;
G__12355.cljs$lang$applyTo = (function (arglist__12362){
var args = cljs.core.seq(arglist__12362);
return G__12355__delegate(args);
});
G__12355.cljs$core$IFn$_invoke$arity$variadic = G__12355__delegate;
return G__12355;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});

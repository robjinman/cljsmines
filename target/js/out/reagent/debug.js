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
var G__12343__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12344__i = 0, G__12344__a = new Array(arguments.length -  0);
while (G__12344__i < G__12344__a.length) {G__12344__a[G__12344__i] = arguments[G__12344__i + 0]; ++G__12344__i;}
  args = new cljs.core.IndexedSeq(G__12344__a,0);
} 
return G__12343__delegate.call(this,args);};
G__12343.cljs$lang$maxFixedArity = 0;
G__12343.cljs$lang$applyTo = (function (arglist__12345){
var args = cljs.core.seq(arglist__12345);
return G__12343__delegate(args);
});
G__12343.cljs$core$IFn$_invoke$arity$variadic = G__12343__delegate;
return G__12343;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12346__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12347__i = 0, G__12347__a = new Array(arguments.length -  0);
while (G__12347__i < G__12347__a.length) {G__12347__a[G__12347__i] = arguments[G__12347__i + 0]; ++G__12347__i;}
  args = new cljs.core.IndexedSeq(G__12347__a,0);
} 
return G__12346__delegate.call(this,args);};
G__12346.cljs$lang$maxFixedArity = 0;
G__12346.cljs$lang$applyTo = (function (arglist__12348){
var args = cljs.core.seq(arglist__12348);
return G__12346__delegate(args);
});
G__12346.cljs$core$IFn$_invoke$arity$variadic = G__12346__delegate;
return G__12346;
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

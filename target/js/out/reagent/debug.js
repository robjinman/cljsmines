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
var G__12339__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12346__i = 0, G__12346__a = new Array(arguments.length -  0);
while (G__12346__i < G__12346__a.length) {G__12346__a[G__12346__i] = arguments[G__12346__i + 0]; ++G__12346__i;}
  args = new cljs.core.IndexedSeq(G__12346__a,0);
} 
return G__12339__delegate.call(this,args);};
G__12339.cljs$lang$maxFixedArity = 0;
G__12339.cljs$lang$applyTo = (function (arglist__12347){
var args = cljs.core.seq(arglist__12347);
return G__12339__delegate(args);
});
G__12339.cljs$core$IFn$_invoke$arity$variadic = G__12339__delegate;
return G__12339;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12349__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12351__i = 0, G__12351__a = new Array(arguments.length -  0);
while (G__12351__i < G__12351__a.length) {G__12351__a[G__12351__i] = arguments[G__12351__i + 0]; ++G__12351__i;}
  args = new cljs.core.IndexedSeq(G__12351__a,0);
} 
return G__12349__delegate.call(this,args);};
G__12349.cljs$lang$maxFixedArity = 0;
G__12349.cljs$lang$applyTo = (function (arglist__12355){
var args = cljs.core.seq(arglist__12355);
return G__12349__delegate(args);
});
G__12349.cljs$core$IFn$_invoke$arity$variadic = G__12349__delegate;
return G__12349;
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

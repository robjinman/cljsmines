// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om.util');
goog.require('cljs.core');
om.util.force_children = (function om$util$force_children(x){
var G__10256 = x;
var G__10256__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om$util$force_children),G__10256):G__10256);
return G__10256__$1;
});
om.util.union_QMARK_ = (function om$util$union_QMARK_(expr){
var expr__$1 = (function (){var G__10258 = expr;
var G__10258__$1 = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(G__10258):G__10258);
return G__10258__$1;
})();
return (cljs.core.map_QMARK_(expr__$1)) && (cljs.core.map_QMARK_(cljs.core.second(cljs.core.first(expr__$1))));
});
om.util.join_QMARK_ = (function om$util$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.first(x):x);
return cljs.core.map_QMARK_(x__$1);
});
/**
 * Returns true if x is an ident.
 */
om.util.ident_QMARK_ = (function om$util$ident_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (((2) === cljs.core.count(x))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)) instanceof cljs.core.Keyword));
});
om.util.join_entry = (function om$util$join_entry(expr){
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
return cljs.core.first(expr);
}
});
om.util.join_key = (function om$util$join_key(expr){
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
return om$util$join_key(cljs.core.first(expr));
} else {
return expr;

}
}
});
om.util.join_value = (function om$util$join_value(join){
return cljs.core.second(om.util.join_entry(join));
});
om.util.unique_ident_QMARK_ = (function om$util$unique_ident_QMARK_(x){
return (om.util.ident_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(x)));
});
om.util.recursion_QMARK_ = (function om$util$recursion_QMARK_(x){
return (cljs.core.symbol_identical_QMARK_(cljs.core.cst$sym$$$$,x)) || (typeof x === 'number');
});
om.util.mutation_QMARK_ = (function om$util$mutation_QMARK_(expr){
var expr__$1 = (function (){var G__10261 = expr;
var G__10261__$1 = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(G__10261):G__10261);
return G__10261__$1;
})();
return (expr__$1 instanceof cljs.core.Symbol);
});
om.util.mutation_key = (function om$util$mutation_key(expr){
if((cljs.core.first(expr) instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$symbol_QMARK_,cljs.core.list(cljs.core.cst$sym$first,cljs.core.cst$sym$expr))], 0)))].join('')));
}

return cljs.core.first(expr);
});

// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
goog.require('om.util');
om.next.impl.parser.expr__GT_ast;
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__10264){
var vec__10266 = p__10264;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10266,(1),null);
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$union_DASH_entry,cljs.core.cst$kw$union_DASH_key,k,cljs.core.cst$kw$query,v,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null))], 0));
});
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$union,cljs.core.cst$kw$query,m,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.union_entry__GT_ast),m)], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__10267){
var vec__10270 = p__10267;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10270,(1),null);
var call = vec__10270;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : om.next.impl.parser.expr__GT_ast.call(null,args)),cljs.core.cst$kw$target,(function (){var or__4671__auto__ = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$remote;
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : om.next.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.merge,(function (){var or__4671__auto__ = args;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__10271 = ast;
var G__10271__$1 = (((cljs.core.cst$kw$dispatch_DASH_key.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10271,cljs.core.cst$kw$type,cljs.core.cst$kw$call):G__10271);
return G__10271__$1;
}
});
/**
 * Convert a query to its AST representation.
 */
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$root,cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),query)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null))], 0));
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var query_root_QMARK_ = cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join));
var vec__10273 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10273,(1),null);
var ast = (om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : om.next.impl.parser.expr__GT_ast.call(null,k));
var component = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ast,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$join,cljs.core.cst$kw$query,v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_root,true], null):null),(((typeof v === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,v)))?null:((cljs.core.vector_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_(v))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast(v)], null)], null):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid join, "),cljs.core.str(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_join], null))})()
)))], 0));
});
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__10274){
var vec__10276 = p__10274;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10276,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10276,(1),null);
var ref = vec__10276;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dispatch_DASH_key,k,cljs.core.cst$kw$key,ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return om.next.impl.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return om.next.impl.parser.ident__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return om.next.impl.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta((function (){var G__10278 = expr;
var G__10278__$1 = (((expr instanceof cljs.core.Keyword))?cljs.core._conj(cljs.core.List.EMPTY,G__10278):G__10278);
return G__10278__$1;
})(),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query_DASH_root,true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var args10282 = [];
var len__5729__auto___10298 = arguments.length;
var i__5730__auto___10299 = (0);
while(true){
if((i__5730__auto___10299 < len__5729__auto___10298)){
args10282.push((arguments[i__5730__auto___10299]));

var G__10300 = (i__5730__auto___10299 + (1));
i__5730__auto___10299 = G__10300;
continue;
} else {
}
break;
}

var G__10284 = args10282.length;
switch (G__10284) {
case 1:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10282.length)].join('')));

}
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__10285,unparse_QMARK_){
var map__10286 = p__10285;
var map__10286__$1 = ((((!((map__10286 == null)))?((((map__10286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10286):map__10286);
var ast = map__10286__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10286__$1,cljs.core.cst$kw$type);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10286__$1,cljs.core.cst$kw$component);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$root,type)){
var G__10288 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__10286,map__10286__$1,ast,type,component){
return (function (p1__10279_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__10279_SHARP_,unparse_QMARK_);
});})(map__10286,map__10286__$1,ast,type,component))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(ast));
var G__10288__$1 = ((!((component == null)))?cljs.core.with_meta(G__10288,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null)):G__10288);
return G__10288__$1;
} else {
var map__10289 = ast;
var map__10289__$1 = ((((!((map__10289 == null)))?((((map__10289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10289):map__10289);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10289__$1,cljs.core.cst$kw$key);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10289__$1,cljs.core.cst$kw$query);
var query_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10289__$1,cljs.core.cst$kw$query_DASH_root);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10289__$1,cljs.core.cst$kw$params);
return om.next.impl.parser.wrap_expr(query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast,cljs.core.cst$kw$params),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_(params))){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params),expr);
} else {
return cljs.core._conj(cljs.core.List.EMPTY,expr);
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$join,type))?(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query)) && (!(typeof query === 'number')) && (unparse_QMARK_ === true))?(function (){var map__10291 = ast;
var map__10291__$1 = ((((!((map__10291 == null)))?((((map__10291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10291):map__10291);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10291__$1,cljs.core.cst$kw$children);
if((((1) === cljs.core.count(children))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$union,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children))))){
return cljs.core.PersistentArrayMap.fromArray([key,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__10291,map__10291__$1,children,map__10289,map__10289__$1,key,query,query_root,params,map__10286,map__10286__$1,ast,type,component){
return (function (p__10293){
var map__10294 = p__10293;
var map__10294__$1 = ((((!((map__10294 == null)))?((((map__10294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10294):map__10294);
var union_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10294__$1,cljs.core.cst$kw$union_DASH_key);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10294__$1,cljs.core.cst$kw$children);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10294__$1,cljs.core.cst$kw$component);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__10296 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__10294,map__10294__$1,union_key,children__$1,component__$1,map__10291,map__10291__$1,children,map__10289,map__10289__$1,key,query,query_root,params,map__10286,map__10286__$1,ast,type,component){
return (function (p1__10280_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__10280_SHARP_,unparse_QMARK_);
});})(map__10294,map__10294__$1,union_key,children__$1,component__$1,map__10291,map__10291__$1,children,map__10289,map__10289__$1,key,query,query_root,params,map__10286,map__10286__$1,ast,type,component))
),children__$1);
var G__10296__$1 = ((!((component__$1 == null)))?cljs.core.with_meta(G__10296,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component__$1], null)):G__10296);
return G__10296__$1;
})()], null);
});})(map__10291,map__10291__$1,children,map__10289,map__10289__$1,key,query,query_root,params,map__10286,map__10286__$1,ast,type,component))
),cljs.core.cst$kw$children.cljs$core$IFn$_invoke$arity$1(cljs.core.first(children)))], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([key,(function (){var G__10297 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__10291,map__10291__$1,children,map__10289,map__10289__$1,key,query,query_root,params,map__10286,map__10286__$1,ast,type,component){
return (function (p1__10281_SHARP_){
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(p1__10281_SHARP_,unparse_QMARK_);
});})(map__10291,map__10291__$1,children,map__10289,map__10289__$1,key,query,query_root,params,map__10286,map__10286__$1,ast,type,component))
),children);
var G__10297__$1 = ((!((component == null)))?cljs.core.with_meta(G__10297,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,component], null)):G__10297);
return G__10297__$1;
})()], true, false);
}
})():cljs.core.PersistentArrayMap.fromArray([key,query], true, false)):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;
/**
 * Add path metadata to a data structure. data is the data to be worked on.
 * path is the current path into the data. query is the query used to
 * walk the data. union-expr tracks the last seen union query to be used
 * when it finds a recursive union.
 */
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(var_args){
var args10303 = [];
var len__5729__auto___10316 = arguments.length;
var i__5730__auto___10317 = (0);
while(true){
if((i__5730__auto___10317 < len__5729__auto___10316)){
args10303.push((arguments[i__5730__auto___10317]));

var G__10318 = (i__5730__auto___10317 + (1));
i__5730__auto___10317 = G__10318;
continue;
} else {
}
break;
}

var G__10305 = args10303.length;
switch (G__10305) {
case 3:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10303.length)].join('')));

}
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3 = (function (data,path,query){
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(data,path,query,null);
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4 = (function (data,path,query,union_expr){
var map__10306 = cljs.core.group_by((function (p1__10302_SHARP_){
var or__4671__auto__ = om.util.join_QMARK_(p1__10302_SHARP_);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return om.util.ident_QMARK_(p1__10302_SHARP_);
}
}),query);
var map__10306__$1 = ((((!((map__10306 == null)))?((((map__10306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10306):map__10306);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10306__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10306__$1,true);
if((query == null)){
var G__10308 = data;
var G__10308__$1 = ((((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || (data.cljs$core$IWithMeta$))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,data)))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__10308,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path):G__10308);
return G__10308__$1;
} else {
if(cljs.core.sequential_QMARK_(data)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (map__10306,map__10306__$1,props,joins){
return (function (idx,v){
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,idx),query,union_expr);
});})(map__10306,map__10306__$1,props,joins))
),data),cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path);
} else {
if(cljs.core.vector_QMARK_(query)){
var joins__$1 = cljs.core.seq(joins);
var ret = data;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__10311 = join;
var G__10311__$1 = ((om.util.ident_QMARK_(join))?cljs.core.PersistentHashMap.fromArrays([G__10311],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]):G__10311);
return G__10311__$1;
})();
var vec__10310 = om.util.join_entry(join__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10310,(1),null);
var union_entry = ((om.util.union_QMARK_(join__$1))?sel:union_expr);
var sel__$1 = ((om.util.recursion_QMARK_(sel))?((!((union_expr == null)))?union_entry:query):sel);
var key__$1 = (function (){var G__10312 = key;
var G__10312__$1 = ((om.util.unique_ident_QMARK_(key))?cljs.core.first(G__10312):G__10312);
return G__10312__$1;
})();
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ret,key__$1);
var G__10320 = cljs.core.next(joins__$1);
var G__10321 = (function (){var G__10313 = ret;
var G__10313__$1 = ((cljs.core.contains_QMARK_(ret,key__$1))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10313,key__$1,om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,key__$1),sel__$1,union_entry)):G__10313);
return G__10313__$1;
})();
joins__$1 = G__10320;
ret = G__10321;
continue;
} else {
var G__10314 = ret;
var G__10314__$1 = ((((!((ret == null)))?((((ret.cljs$lang$protocol_mask$partition0$ & (262144))) || (ret.cljs$core$IWithMeta$))?true:(((!ret.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,ret)))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__10314,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path):G__10314);
return G__10314__$1;
}
break;
}
} else {
if(cljs.core.map_QMARK_(data)){
var dispatch_key = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,om.next.impl.parser.expr__GT_ast);
var branches = cljs.core.vals(query);
var props__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(dispatch_key,cljs.core.keys(data));
var query__$1 = cljs.core.some(((function (dispatch_key,branches,props__$1,map__10306,map__10306__$1,props,joins){
return (function (q){
var query_props = cljs.core.map.cljs$core$IFn$_invoke$arity$2(dispatch_key,q);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(props__$1),cljs.core.set(query_props))){
return q;
} else {
return null;
}
});})(dispatch_key,branches,props__$1,map__10306,map__10306__$1,props,joins))
,branches);
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4(data,path,query__$1,union_expr);
} else {
return data;
}

}
}
}
});

om.next.impl.parser.path_meta.cljs$lang$maxFixedArity = 4;
om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$om$next_SLASH_abort,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__10322){
var map__10405 = p__10322;
var map__10405__$1 = ((((!((map__10405 == null)))?((((map__10405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10405):map__10405);
var config = map__10405__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10405__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10405__$1,cljs.core.cst$kw$mutate);
return ((function (map__10405,map__10405__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = cljs.core.boolean$(cljs.core.cst$kw$elide_DASH_paths.cljs$core$IFn$_invoke$arity$1(config));
var map__10447 = (function (){var G__10448 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$parser,om$next$impl$parser$parser_$_self,cljs.core.array_seq([cljs.core.cst$kw$target,target,cljs.core.cst$kw$query_DASH_root,cljs.core.cst$kw$om$next_SLASH_root], 0));
var G__10448__$1 = ((!(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$path)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10448,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY):G__10448);
return G__10448__$1;
})();
var map__10447__$1 = ((((!((map__10447 == null)))?((((map__10447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10447):map__10447);
var env__$1 = map__10447__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10447__$1,cljs.core.cst$kw$path);
var step = ((function (elide_paths_QMARK_,map__10447,map__10447__$1,env__$1,path,map__10405,map__10405__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__10477 = om.next.impl.parser.expr__GT_ast(expr);
var map__10477__$1 = ((((!((map__10477 == null)))?((((map__10477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10477):map__10477);
var ast = map__10477__$1;
var query_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10477__$1,cljs.core.cst$kw$query);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10477__$1,cljs.core.cst$kw$key);
var dispatch_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10477__$1,cljs.core.cst$kw$dispatch_DASH_key);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10477__$1,cljs.core.cst$kw$params);
var env__$2 = (function (){var G__10479 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([env__$1,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ast,ast,cljs.core.cst$kw$query,query_SINGLEQUOTE_], null)], 0));
var G__10479__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__10479,cljs.core.cst$kw$query):G__10479);
var G__10479__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$$$$,query_SINGLEQUOTE_))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10479__$1,cljs.core.cst$kw$query,query):G__10479__$1);
var G__10479__$3 = ((cljs.core.vector_QMARK_(key))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10479__$2,cljs.core.cst$kw$query_DASH_root,key):G__10479__$2);
return G__10479__$3;
})();
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
var res = (function (){var G__10480 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10480) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$mutate], 0)))].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : mutate.call(null,env__$2,dispatch_key,params));

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$read], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
case "join":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$read], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
case "union":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$read], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dispatch_key,params) : read.call(null,env__$2,dispatch_key,params));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target);
var G__10481 = ret;
var G__10481__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10481,expr):G__10481);
var G__10481__$2 = ((cljs.core.map_QMARK_(ast_SINGLEQUOTE_))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__10481__$1,om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_)):G__10481__$1);
return G__10481__$2;
} else {
if(!((call_QMARK_) || ((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,cljs.core.cst$kw$value)))){
return ret;
} else {
var error = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var mut_ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if((call_QMARK_) && (!((cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{var G__10483_10488 = mut_ret;
var G__10484_10489 = cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res).call(null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10483_10488,G__10484_10489) : cljs.core.reset_BANG_.call(null,G__10483_10488,G__10484_10489));
}catch (e10482){var e_10490 = e10482;
if(cljs.core.truth_(om.next.impl.parser.rethrow_QMARK_(e_10490))){
throw e_10490;
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(error,e_10490) : cljs.core.reset_BANG_.call(null,error,e_10490));
}
}} else {
}

var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_(value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(dispatch_key),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$value),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$value))], 0)))].join('')));
}
} else {
}

var G__10485 = ret;
var G__10485__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10485,key,value):G__10485);
var G__10485__$2 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mut_ret) : cljs.core.deref.call(null,mut_ret)))?cljs.core.assoc_in(G__10485__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$result], null),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mut_ret) : cljs.core.deref.call(null,mut_ret))):G__10485__$1);
var G__10485__$3 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10485__$2,key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$om$next_SLASH_error,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error))], null)):G__10485__$2);
return G__10485__$3;
}
}
});})(elide_paths_QMARK_,map__10447,map__10447__$1,env__$1,path,map__10405,map__10405__$1,config,read,mutate))
;
var G__10486 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
var G__10486__$1 = ((!((!((target == null))) || (elide_paths_QMARK_)))?om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3(G__10486,path,query):G__10486);
return G__10486__$1;
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__10405,map__10405__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = (function (){var G__12628 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12628) : cljs.core.atom.call(null,G__12628));
})();
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
var expr_SINGLEQUOTE_ = cljs.core.first(expr);
if(cljs.core.map_QMARK_(expr_SINGLEQUOTE_)){
return cljs.core.ffirst(expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_(expr)){
var G__12630 = expr;
var G__12630__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(expr)))?cljs.core.first(G__12630):G__12630);
return G__12630__$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper((function (p1__12631_SHARP_){
return (cljs.core.vector_QMARK_(p1__12631_SHARP_)) || (cljs.core.map_QMARK_(p1__12631_SHARP_)) || (cljs.core.seq_QMARK_(p1__12631_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__12632 = clojure.zip.right(loc__$1);
loc__$1 = G__12632;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__12649 = clojure.zip.down(loc);
var G__12650 = path__$1;
loc = G__12649;
path__$1 = G__12650;
continue;
} else {
var vec__12647 = path__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12647,(0),null);
var ks = cljs.core.nthnext(vec__12647,(1));
var k_SINGLEQUOTE_ = om.next.expr__GT_key(node);
if(cljs.core.keyword_identical_QMARK_(k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_(node)) || ((cljs.core.seq_QMARK_(node)) && (cljs.core.map_QMARK_(cljs.core.first(node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key((function (){var G__12648 = loc;
var G__12648__$1 = ((cljs.core.seq_QMARK_(node))?clojure.zip.down(G__12648):G__12648);
return G__12648__$1;
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__12651 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(om.next.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__12652 = cljs.core.next(ks);
loc = G__12651;
path__$1 = G__12652;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__12653 = loc_SINGLEQUOTE_;
var G__12654 = ks;
loc = G__12653;
path__$1 = G__12654;
continue;
}
} else {
var G__12655 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__12656 = ks;
loc = G__12655;
path__$1 = G__12656;
continue;
}
} else {
var G__12657 = clojure.zip.right(loc);
var G__12658 = path__$1;
loc = G__12657;
path__$1 = G__12658;
continue;
}
}
}
break;
}
});
return query_template_STAR_(om.next.query_zip(query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
om.next.focus_query;
om.next.focused_join = (function om$next$focused_join(expr,ks){
var expr_meta = cljs.core.meta(expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_(expr))?cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst(expr),(function (){var G__12664 = cljs.core.second(cljs.core.first(expr));
var G__12665 = ks;
return (om.next.focus_query.cljs$core$IFn$_invoke$arity$2 ? om.next.focus_query.cljs$core$IFn$_invoke$arity$2(G__12664,G__12665) : om.next.focus_query.call(null,G__12664,G__12665));
})()], true, false):((cljs.core.seq_QMARK_(expr))?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.second(expr)),om$next$focused_join(cljs.core.first(expr),ks)):expr
));
var G__12666 = expr_SINGLEQUOTE_;
var G__12666__$1 = ((cljs.core.some_QMARK_(expr_meta))?cljs.core.with_meta(G__12666,expr_meta):G__12666);
return G__12666__$1;
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__12670 = path;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12670,(0),null);
var ks = cljs.core.nthnext(vec__12670,(1));
var match = ((function (vec__12670,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,om.util.join_key(x));
});})(vec__12670,k,ks))
;
var value = ((function (vec__12670,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join(x,ks);
});})(vec__12670,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k),ks)], true, false);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args12671 = [];
var len__5729__auto___12675 = arguments.length;
var i__5730__auto___12676 = (0);
while(true){
if((i__5730__auto___12676 < len__5729__auto___12675)){
args12671.push((arguments[i__5730__auto___12676]));

var G__12677 = (i__5730__auto___12676 + (1));
i__5730__auto___12676 = G__12677;
continue;
} else {
}
break;
}

var G__12673 = args12671.length;
switch (G__12673) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12671.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,cljs.core.cst$sym$_STAR_,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__4659__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bound,cljs.core.cst$sym$_STAR_)) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,bound)) && ((cljs.core.count(path) < cljs.core.count(bound))));
if(and__4659__auto__){
var and__4659__auto____$1 = cljs.core.some(om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__4659__auto____$1)){
return ((1) === cljs.core.count(focus));
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())){
var vec__12674 = om.util.join_entry(cljs.core.first(focus));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12674,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12674,(1),null);
var k__$1 = ((om.util.ident_QMARK_(k))?cljs.core.first(k):k);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_(focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__12679 = focus_SINGLEQUOTE___$1;
var G__12680 = bound;
var G__12681 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k__$1);
focus = G__12679;
bound = G__12680;
path = G__12681;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.next.ident[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__5327__auto__.call(null,this$,props));
} else {
var m__5327__auto____$1 = (om.next.ident["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__5327__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.next.params[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.next.params["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.next.query[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.next.query["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__5327__auto__.call(null,this$,new_state));
} else {
var m__5327__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__5327__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.next._get_state[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.next._get_state["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.next._get_rendered_state[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__5326__auto__ = (((this$ == null))?null:this$);
var m__5327__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto__.call(null,this$));
} else {
var m__5327__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5327__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__4659__auto__ = (x instanceof cljs.core.Symbol);
if(and__4659__auto__){
var G__12688 = [cljs.core.str(x)].join('');
var G__12689 = "?";
return goog.string.startsWith(G__12688,G__12689);
} else {
return and__4659__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_(expr))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,om.next.var__GT_keyword(expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta(query);
var tr = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (qm){
return (function (p1__12690_SHARP_){
return om$next$bind_query(p1__12690_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_(query))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_(query))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(query),tr,query):om.next.replace_var(query,params)
));
var G__12693 = ret;
var G__12693__$1 = (cljs.core.truth_((function (){var and__4659__auto__ = qm;
if(cljs.core.truth_(and__4659__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || (ret.cljs$core$IMeta$)){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IMeta,ret);
}
} else {
return and__4659__auto__;
}
})())?cljs.core.with_meta(G__12693,qm):G__12693);
return G__12693__$1;
});
om.next.component_QMARK_;

om.next.get_reconciler;

om.next.props;

om.next.class_path;

om.next.get_indexer;

om.next.path;
om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__12696 = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(component) : om.next.get_reconciler.call(null,component));
var G__12696__$1 = (((G__12696 == null))?null:cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__12696));
var G__12696__$2 = (((G__12696__$1 == null))?null:cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__12696__$1));
var G__12696__$3 = (((G__12696__$2 == null))?null:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12696__$2) : cljs.core.deref.call(null,G__12696__$2)));
var G__12696__$4 = (((G__12696__$3 == null))?null:cljs.core.cst$kw$om$next_SLASH_queries.cljs$core$IFn$_invoke$arity$1(G__12696__$3));
var G__12696__$5 = (((G__12696__$4 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__12696__$4,component));
return G__12696__$5;
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data(component),om.next.query(component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data(component),om.next.params(component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args12697 = [];
var len__5729__auto___12700 = arguments.length;
var i__5730__auto___12701 = (0);
while(true){
if((i__5730__auto___12701 < len__5729__auto___12700)){
args12697.push((arguments[i__5730__auto___12701]));

var G__12702 = (i__5730__auto___12701 + (1));
i__5730__auto___12701 = G__12702;
continue;
} else {
}
break;
}

var G__12699 = args12697.length;
switch (G__12699) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12697.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2(component,om.next.component__GT_query_data(component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(query_data,om.next.query(component));
var c_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c_SINGLEQUOTE_)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(query_data,om.next.params(component))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,cljs.core.type(component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = (function (){var G__12708 = x.prototype;
return Object.create(G__12708);
})();
if(!((x__$1 == null))){
if((false) || (x__$1.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return null;
}
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1(x);
} else {
var q = om.next.query(x);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x], null));
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
var temp__4423__auto__ = om.next.component__GT_query_data(x);
if(cljs.core.truth_(temp__4423__auto__)){
var query_data = temp__4423__auto__;
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2(x,query_data);
} else {
var cp = (om.next.class_path.cljs$core$IFn$_invoke$arity$1 ? om.next.class_path.cljs$core$IFn$_invoke$arity$1(x) : om.next.class_path.call(null,x));
var r = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(x) : om.next.get_reconciler.call(null,x));
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),(om.next.path.cljs$core$IFn$_invoke$arity$1 ? om.next.path.cljs$core$IFn$_invoke$arity$1(x) : om.next.path.call(null,x)));
var class_path_query_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$class_DASH_path_DASH__GT_query.cljs$core$IFn$_invoke$arity$1((function (){var G__12716 = (om.next.get_indexer.cljs$core$IFn$_invoke$arity$1 ? om.next.get_indexer.cljs$core$IFn$_invoke$arity$1(r) : om.next.get_indexer.call(null,r));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12716) : cljs.core.deref.call(null,G__12716));
})()),cp);
var qs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cp,r,data_path,class_path_query_data,temp__4423__auto__){
return (function (p1__12710_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__12710_SHARP_),data_path));
});})(cp,r,data_path,class_path_query_data,temp__4423__auto__))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_(qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_(qs__$1))){
return clojure.zip.node(cljs.core.first(qs__$1));
} else {
return om.next.get_class_or_instance_query(x);
}
}
} else {
return om.next.get_class_or_instance_query(x);
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var y = (function (){var G__12717 = x.prototype;
return Object.create(G__12717);
})();
if(((!((y == null)))?(((false) || (y.om$next$IQuery$))?true:false):false)){
var q = om.next.query(y);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(y),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(y)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$component,class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$basis_DASH_t], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write(writer__5270__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props(null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4423__auto__ = cljs.core.cst$kw$react_DASH_key.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return rk;
} else {
var temp__4423__auto____$1 = cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args12719 = [];
var len__5729__auto___12735 = arguments.length;
var i__5730__auto___12736 = (0);
while(true){
if((i__5730__auto___12736 < len__5729__auto___12735)){
args12719.push((arguments[i__5730__auto___12736]));

var G__12737 = (i__5730__auto___12736 + (1));
i__5730__auto___12736 = G__12737;
continue;
} else {
}
break;
}

var G__12721 = args12719.length;
switch (G__12721) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12719.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__12722){
var map__12723 = p__12722;
var map__12723__$1 = ((((!((map__12723 == null)))?((((map__12723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12723):map__12723);
var opts = map__12723__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12723__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12723__$1,cljs.core.cst$kw$keyfn);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$class)], 0)))].join('')));
}

return ((function (map__12723,map__12723__$1,opts,validator,keyfn){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$validator,cljs.core.cst$sym$props)], 0)))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
var G__12730 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$children,children,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$factory,om$next$self], null);
return (om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__12730) : om.next._STAR_instrument_STAR_.call(null,G__12730));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):om.next.compute_react_key(class$,props));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__12731 = ref;
var G__12731__$1 = (((ref instanceof cljs.core.Keyword))?[cljs.core.str(G__12731)].join(''):G__12731);
return G__12731__$1;
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(om.next._STAR_reconciler_STAR_):(0));
var G__12732 = class$;
var G__12733 = {"omcljs$value": om.next.om_props(props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_};
var G__12734 = om.util.force_children(children);
return React.createElement(G__12732,G__12733,G__12734);
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__12739__i = 0, G__12739__a = new Array(arguments.length -  1);
while (G__12739__i < G__12739__a.length) {G__12739__a[G__12739__i] = arguments[G__12739__i + 1]; ++G__12739__i;}
  children = new cljs.core.IndexedSeq(G__12739__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__12740){
var props = cljs.core.first(arglist__12740);
var children = cljs.core.rest(arglist__12740);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__12723,map__12723__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
var G__12743 = c.props;
var G__12744 = k;
return goog.object.get(G__12743,G__12744);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_(x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_(x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_(x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
var G__12748 = c.props;
var G__12749 = k;
var G__12750 = v;
return goog.object.set(G__12748,G__12749,G__12750);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return om.next.get_prop(c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args12751 = [];
var len__5729__auto___12754 = arguments.length;
var i__5730__auto___12755 = (0);
while(true){
if((i__5730__auto___12755 < len__5729__auto___12754)){
args12751.push((arguments[i__5730__auto___12755]));

var G__12756 = (i__5730__auto___12755 + (1));
i__5730__auto___12755 = G__12756;
continue;
} else {
}
break;
}

var G__12753 = args12751.length;
switch (G__12753) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12751.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args12758 = [];
var len__5729__auto___12761 = arguments.length;
var i__5730__auto___12762 = (0);
while(true){
if((i__5730__auto___12762 < len__5729__auto___12761)){
args12758.push((arguments[i__5730__auto___12762]));

var G__12763 = (i__5730__auto___12762 + (1));
i__5730__auto___12762 = G__12763;
continue;
} else {
}
break;
}

var G__12760 = args12758.length;
switch (G__12760) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12758.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap(om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(prev_props),om.next.get_prev_props(cst)),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3(om.next.get_props(component.props),om.next.get_props(next_props),om.next.get_next_props(component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
var G__12767 = c.state;
var G__12768 = "omcljs$prev$value";
return goog.object.remove(G__12767,G__12768);
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(c.props),om.next.get_props(c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop(component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_(component)){
return om.next.get_prop(component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop(component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__4671__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop(c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args12769 = [];
var len__5729__auto___12776 = arguments.length;
var i__5730__auto___12777 = (0);
while(true){
if((i__5730__auto___12777 < len__5729__auto___12776)){
args12769.push((arguments[i__5730__auto___12777]));

var G__12778 = (i__5730__auto___12777 + (1));
i__5730__auto___12777 = G__12778;
continue;
} else {
}
break;
}

var G__12771 = args12769.length;
switch (G__12771) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12769.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

var shared = (function (){var G__12772 = component.props;
var G__12773 = "omcljs$shared";
return goog.object.get(G__12772,G__12773);
})();
var ks = (function (){var G__12774 = k_or_ks;
var G__12774__$1 = ((!(cljs.core.sequential_QMARK_(k_or_ks)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__12774],null)):G__12774);
return G__12774__$1;
})();
var G__12775 = shared;
var G__12775__$1 = ((!(cljs.core.empty_QMARK_(ks)))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__12775,ks):G__12775);
return G__12775__$1;
});

om.next.shared.cljs$lang$maxFixedArity = 2;
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.get_prop(component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var G__12784 = c.state;
var G__12785_12788 = G__12784;
var G__12786_12789 = "omcljs$next$value";
var G__12787_12790 = om.next.om_props(next_props,om.next.protocols.basis_t(om.next.get_reconciler(c)));
goog.object.set(G__12785_12788,G__12786_12789,G__12787_12790);

return G__12784;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(component.props),om.next.get_props(component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__12793 = props;
var G__12793__$1 = ((!(cljs.core.empty_QMARK_(computed_map)))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__12793,cljs.core.assoc,cljs.core.cst$kw$om$next_SLASH_computed,computed_map):G__12793);
return G__12793__$1;
} else {
var G__12794 = props;
var G__12794__$1 = ((!(cljs.core.empty_QMARK_(computed_map)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12794,cljs.core.cst$kw$om$next_SLASH_computed,computed_map):G__12794);
return G__12794__$1;
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args12795 = [];
var len__5729__auto___12800 = arguments.length;
var i__5730__auto___12801 = (0);
while(true){
if((i__5730__auto___12801 < len__5729__auto___12800)){
args12795.push((arguments[i__5730__auto___12801]));

var G__12802 = (i__5730__auto___12801 + (1));
i__5730__auto___12801 = G__12802;
continue;
} else {
}
break;
}

var G__12797 = args12795.length;
switch (G__12797) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12795.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__12798 = x;
var G__12798__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__12798):G__12798);
return G__12798__$1;
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_computed], null),(function (){var G__12799 = k_or_ks;
var G__12799__$1 = ((!(cljs.core.sequential_QMARK_(k_or_ks)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__12799],null)):G__12799);
return G__12799__$1;
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
om.next.schedule_render_BANG_;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_(component,new_state);
} else {
var G__12809_12812 = component.state;
var G__12810_12813 = "omcljs$pendingState";
var G__12811_12814 = new_state;
goog.object.set(G__12809_12812,G__12810_12813,G__12811_12814);
}

var temp__4423__auto__ = om.next.get_reconciler(component);
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return (om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_render_BANG_.call(null,r));
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args12815 = [];
var len__5729__auto___12819 = arguments.length;
var i__5730__auto___12820 = (0);
while(true){
if((i__5730__auto___12820 < len__5729__auto___12819)){
args12815.push((arguments[i__5730__auto___12820]));

var G__12821 = (i__5730__auto___12820 + (1));
i__5730__auto___12820 = G__12821;
continue;
} else {
}
break;
}

var G__12817 = args12815.length;
switch (G__12817) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12815.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state(component):(function (){var temp__4425__auto__ = component.state;
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
var or__4671__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args12823 = [];
var len__5729__auto___12848 = arguments.length;
var i__5730__auto___12849 = (0);
while(true){
if((i__5730__auto___12849 < len__5729__auto___12848)){
args12823.push((arguments[i__5730__auto___12849]));

var G__12850 = (i__5730__auto___12849 + (1));
i__5730__auto___12849 = G__12850;
continue;
} else {
}
break;
}

var G__12832 = args12823.length;
switch (G__12832) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args12823.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5748__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_(component,(function (){var G__12833 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12833) : f.call(null,G__12833));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_(component,(function (){var G__12834 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__12835 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12834,G__12835) : f.call(null,G__12834,G__12835));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_(component,(function (){var G__12836 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__12837 = arg0;
var G__12838 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12836,G__12837,G__12838) : f.call(null,G__12836,G__12837,G__12838));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_(component,(function (){var G__12839 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__12840 = arg0;
var G__12841 = arg1;
var G__12842 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12839,G__12840,G__12841,G__12842) : f.call(null,G__12839,G__12840,G__12841,G__12842));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_(component,(function (){var G__12843 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__12844 = arg0;
var G__12845 = arg1;
var G__12846 = arg2;
var G__12847 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__12843,G__12844,G__12845,G__12846,G__12847) : f.call(null,G__12843,G__12844,G__12845,G__12846,G__12847));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,om.next.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq12824){
var G__12825 = cljs.core.first(seq12824);
var seq12824__$1 = cljs.core.next(seq12824);
var G__12826 = cljs.core.first(seq12824__$1);
var seq12824__$2 = cljs.core.next(seq12824__$1);
var G__12827 = cljs.core.first(seq12824__$2);
var seq12824__$3 = cljs.core.next(seq12824__$2);
var G__12828 = cljs.core.first(seq12824__$3);
var seq12824__$4 = cljs.core.next(seq12824__$3);
var G__12829 = cljs.core.first(seq12824__$4);
var seq12824__$5 = cljs.core.next(seq12824__$4);
var G__12830 = cljs.core.first(seq12824__$5);
var seq12824__$6 = cljs.core.next(seq12824__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12825,G__12826,G__12827,G__12828,G__12829,G__12830,seq12824__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
return om.next._get_rendered_state(component);
} else {
var G__12855 = component;
var G__12855__$1 = (((G__12855 == null))?null:G__12855.state);
var G__12855__$2 = (((G__12855__$1 == null))?null:goog.object.get(G__12855__$1,"omcljs$state"));
return G__12855__$2;
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_(c);
} else {
var temp__4425__auto__ = (function (){var G__12859 = c;
var G__12859__$1 = (((G__12859 == null))?null:G__12859.state);
var G__12859__$2 = (((G__12859__$1 == null))?null:goog.object.get(G__12859__$1,"omcljs$pendingState"));
return G__12859__$2;
})();
if(cljs.core.truth_(temp__4425__auto__)){
var pending = temp__4425__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args12860 = [];
var len__5729__auto___12863 = arguments.length;
var i__5730__auto___12864 = (0);
while(true){
if((i__5730__auto___12864 < len__5729__auto___12863)){
args12860.push((arguments[i__5730__auto___12864]));

var G__12865 = (i__5730__auto___12864 + (1));
i__5730__auto___12864 = G__12865;
continue;
} else {
}
break;
}

var G__12862 = args12860.length;
switch (G__12862) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12860.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return component.setState({"omcljs$state": new_state},cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;
om.next.full_query;

om.next.to_env;

om.next.schedule_sends_BANG_;

om.next.reconciler_QMARK_;

om.next.ref__GT_components;

om.next.force;
om.next.gather_sends = (function om$next$gather_sends(p__12868,q,remotes){
var map__12873 = p__12868;
var map__12873__$1 = ((((!((map__12873 == null)))?((((map__12873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12873):map__12873);
var env = map__12873__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12873__$1,cljs.core.cst$kw$parser);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__12873,map__12873__$1,env,parser){
return (function (p1__12867_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12867_SHARP_,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__12867_SHARP_) : parser.call(null,env,q,p1__12867_SHARP_))],null));
});})(map__12873,map__12873__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__12873,map__12873__$1,env,parser){
return (function (p__12875){
var vec__12876 = p__12875;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12876,(1),null);
return (cljs.core.count(v) > (0));
});})(map__12873,map__12873__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12905 = cljs.core.first(q);
var G__12906 = target;
return (om.next.force.cljs$core$IFn$_invoke$arity$2 ? om.next.force.cljs$core$IFn$_invoke$arity$2(G__12905,G__12906) : om.next.force.call(null,G__12905,G__12906));
})()], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx__$1,(function (){var G__12909 = c;
var G__12910 = with_target(target,om.next.focus_query(om.next.get_query(c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
return (om.next.full_query.cljs$core$IFn$_invoke$arity$2 ? om.next.full_query.cljs$core$IFn$_invoke$arity$2(G__12909,G__12910) : om.next.full_query.call(null,G__12909,G__12910));
})());
});
var exprs = cljs.core.seq(tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var ast = om.next.impl.parser.expr__GT_ast(expr);
var key = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var tgt = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var G__12911 = cljs.core.next(exprs);
var G__12912 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt){
return (function (p1__12877_SHARP_,p2__12878_SHARP_){
return add_focused_query(key,tgt,p1__12877_SHARP_,p2__12878_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt))
,tx_SINGLEQUOTE_,(om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2 ? om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2(r,key) : om.next.ref__GT_components.call(null,r,key)));
exprs = G__12911;
tx_SINGLEQUOTE_ = G__12912;
continue;
} else {
var G__12913 = cljs.core.next(exprs);
var G__12914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx_SINGLEQUOTE_,expr);
exprs = G__12913;
tx_SINGLEQUOTE_ = G__12914;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args12915 = [];
var len__5729__auto___12926 = arguments.length;
var i__5730__auto___12927 = (0);
while(true){
if((i__5730__auto___12927 < len__5729__auto___12926)){
args12915.push((arguments[i__5730__auto___12927]));

var G__12928 = (i__5730__auto___12927 + (1));
i__5730__auto___12927 = G__12928;
continue;
} else {
}
break;
}

var G__12917 = args12915.length;
switch (G__12917) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12915.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3(x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__12918,reads){
var map__12919 = p__12918;
var map__12919__$1 = ((((!((map__12919 == null)))?((((map__12919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12919):map__12919);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12919__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12919__$1,cljs.core.cst$kw$query);
if(cljs.core.truth_((function (){var or__4671__auto__ = (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return om.next.component_QMARK_(x);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x))], 0)))].join('')));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$params)),cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$query)))], 0)))].join('')));
}

if(((reads == null)) || (cljs.core.vector_QMARK_(reads))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$reads),cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$reads))], 0)))].join('')));
}

var r = ((om.next.component_QMARK_(x))?om.next.get_reconciler(x):x);
var c = ((om.next.component_QMARK_(x))?x:null);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__12921 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(r);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__12921) : cljs.core.deref.call(null,G__12921));
})());
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var st = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st) : cljs.core.deref.call(null,st)));
var temp__4425__auto___12930 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4425__auto___12930)){
var l_12931 = temp__4425__auto___12930;
var G__12923_12932 = l_12931;
var G__12924_12933 = [cljs.core.str((function (){var temp__4425__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(cljs.core.truth_(temp__4425__auto____$1)){
var ident = temp__4425__auto____$1;
return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ident], 0))),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
goog.log.info(G__12923_12932,G__12924_12933);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,(function (){var or__4671__auto__ = c;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null):null)], 0))], 0));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_(r,reads);
}

om.next.protocols.reindex_BANG_(r);

var rootq_12934 = ((!((c == null)))?(om.next.full_query.cljs$core$IFn$_invoke$arity$1 ? om.next.full_query.cljs$core$IFn$_invoke$arity$1(c) : om.next.full_query.call(null,c)):(((reads == null))?om.next.get_query(root):null));
var sends_12935 = om.next.gather_sends((om.next.to_env.cljs$core$IFn$_invoke$arity$1 ? om.next.to_env.cljs$core$IFn$_invoke$arity$1(cfg) : om.next.to_env.call(null,cfg)),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4671__auto__ = rootq_12934;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads(r,reads)),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_(sends_12935)){
} else {
om.next.protocols.queue_sends_BANG_(r,sends_12935);

(om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_sends_BANG_.call(null,r));
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args12936 = [];
var len__5729__auto___12962 = arguments.length;
var i__5730__auto___12963 = (0);
while(true){
if((i__5730__auto___12963 < len__5729__auto___12962)){
args12936.push((arguments[i__5730__auto___12963]));

var G__12964 = (i__5730__auto___12963 + (1));
i__5730__auto___12963 = G__12964;
continue;
} else {
}
break;
}

var G__12945 = args12936.length;
switch (G__12945) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__5748__auto__ = (new cljs.core.IndexedSeq(args12936.slice((6)),(0)));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5748__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__12946 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__12946) : f.call(null,G__12946));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__12947 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__12948 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__12947,G__12948) : f.call(null,G__12947,G__12948));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__12949 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__12950 = arg0;
var G__12951 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__12949,G__12950,G__12951) : f.call(null,G__12949,G__12950,G__12951));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__12952 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__12953 = arg0;
var G__12954 = arg1;
var G__12955 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__12952,G__12953,G__12954,G__12955) : f.call(null,G__12952,G__12953,G__12954,G__12955));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.next.set_query_BANG_,component,(function (){var G__12956 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__12957 = arg0;
var G__12958 = arg1;
var G__12959 = arg2;
var G__12960 = arg3;
var G__12961 = arg_rest;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__12956,G__12957,G__12958,G__12959,G__12960,G__12961) : f.call(null,G__12956,G__12957,G__12958,G__12959,G__12960,G__12961));
})());
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq12937){
var G__12938 = cljs.core.first(seq12937);
var seq12937__$1 = cljs.core.next(seq12937);
var G__12939 = cljs.core.first(seq12937__$1);
var seq12937__$2 = cljs.core.next(seq12937__$1);
var G__12940 = cljs.core.first(seq12937__$2);
var seq12937__$3 = cljs.core.next(seq12937__$2);
var G__12941 = cljs.core.first(seq12937__$3);
var seq12937__$4 = cljs.core.next(seq12937__$3);
var G__12942 = cljs.core.first(seq12937__$4);
var seq12937__$5 = cljs.core.next(seq12937__$4);
var G__12943 = cljs.core.first(seq12937__$5);
var seq12937__$6 = cljs.core.next(seq12937__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12938,G__12939,G__12940,G__12941,G__12942,G__12943,seq12937__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_(x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__12967 = component.refs;
var G__12967__$1 = (((G__12967 == null))?null:goog.object.get(G__12967,name));
return G__12967__$1;
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

om.next.update_props_BANG_(c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args12968 = [];
var len__5729__auto___12971 = arguments.length;
var i__5730__auto___12972 = (0);
while(true){
if((i__5730__auto___12972 < len__5729__auto___12971)){
args12968.push((arguments[i__5730__auto___12972]));

var G__12973 = (i__5730__auto___12972 + (1));
i__5730__auto___12972 = G__12973;
continue;
} else {
}
break;
}

var G__12970 = args12968.length;
switch (G__12970) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12968.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){

new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_(c)], null)], null);

var c__$1 = c;
var ret = cljs.core._conj(cljs.core.List.EMPTY,cljs.core.type(c__$1));
while(true){
var temp__4423__auto__ = om.next.parent(c__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(om.next.iquery_QMARK_(p)){
var G__12977 = p;
var G__12978 = cljs.core.cons(cljs.core.type(p),ret);
c__$1 = G__12977;
ret = G__12978;
continue;
} else {
var G__12979 = p;
var G__12980 = ret;
c__$1 = G__12979;
ret = G__12980;
continue;
}
} else {
var seen = (function (){var G__12976 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12976) : cljs.core.atom.call(null,G__12976));
})();
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (c__$1,ret,seen,temp__4423__auto__){
return (function (x){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen) : cljs.core.deref.call(null,seen)),x)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4423__auto__))
,ret);
}
break;
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$subquery_DASH_ref),cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$subquery_DASH_ref))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$subquery_DASH_class)], 0)))].join('')));
}

var ref = (function (){var G__12982 = subquery_ref;
var G__12982__$1 = (((subquery_ref instanceof cljs.core.Keyword))?[cljs.core.str(G__12982)].join(''):G__12982);
return G__12982__$1;
})();
if((om.next.component_QMARK_(x)) && (om.next.mounted_QMARK_(x))){
return om.next.get_query(om.next.react_ref(x,ref));
} else {
return om.next.get_query(subquery_class);
}
});
om.next.get_ident = (function om$next$get_ident(x){

new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_(x)], null)], null);

var m = om.next.props(x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

return om.next.ident(x,m);
});
om.next.reconciler_QMARK_;
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t(reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_(reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_(reconciler);
});
if(cljs.core.fn_QMARK_(om.next._STAR_raf_STAR_)){
return (om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : om.next._STAR_raf_STAR_.call(null,f));
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_(reconciler))){
var G__12985 = (function (){
return om.next.protocols.send_BANG_(reconciler);
});
var G__12986 = (0);
return setTimeout(G__12985,G__12986);
} else {
return null;
}
});
om.next.remove_root_BANG_;
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args12987 = [];
var len__5729__auto___12990 = arguments.length;
var i__5730__auto___12991 = (0);
while(true){
if((i__5730__auto___12991 < len__5729__auto___12990)){
args12987.push((arguments[i__5730__auto___12991]));

var G__12992 = (i__5730__auto___12991 + (1));
i__5730__auto___12991 = G__12992;
continue;
} else {
}
break;
}

var G__12989 = args12987.length;
switch (G__12989) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12987.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$root_DASH_class)], 0)))].join('')));
}

var temp__4425__auto___12994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.next.roots) : cljs.core.deref.call(null,om.next.roots)),target);
if(cljs.core.truth_(temp__4425__auto___12994)){
var old_reconciler_12995 = temp__4425__auto___12994;
(om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_12995,target) : om.next.remove_root_BANG_.call(null,old_reconciler_12995,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_(reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__5326__auto__ = (((c == null))?null:c);
var m__5327__auto__ = (om.next.tx_intercept[goog.typeOf(x__5326__auto__)]);
if(!((m__5327__auto__ == null))){
return (m__5327__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__5327__auto__.call(null,c,tx));
} else {
var m__5327__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__5327__auto____$1 == null))){
return (m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5327__auto____$1.cljs$core$IFn$_invoke$arity$2(c,tx) : m__5327__auto____$1.call(null,c,tx));
} else {
throw cljs.core.missing_protocol("ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,cljs.core.cst$kw$shared,cljs.core.cst$kw$parser,cljs.core.cst$kw$logger,cljs.core.cst$kw$pathopt], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__4659__auto__ = c;
if(cljs.core.truth_(and__4659__auto__)){
var and__4659__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__4659__auto____$1){
return cljs.core.not(ref);
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())?om.next.ident(c,om.next.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reconciler,r,cljs.core.cst$kw$component,c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref__$1], null):null)], 0));
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(function (){var G__13004 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13004) : cljs.core.deref.call(null,G__13004));
})());
var ___$1 = (function (){var temp__4425__auto__ = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4425__auto__)){
var l = temp__4425__auto__;
var G__13005 = l;
var G__13006 = [cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref__$1], 0))),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
return goog.log.info(G__13005,G__13006);
} else {
return null;
}
})();
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends(env,tx,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__13007 = cljs.core.PersistentVector.EMPTY;
var G__13007__$1 = ((!((c == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13007,c):G__13007);
var G__13007__$2 = ((!((ref__$1 == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13007__$1,ref__$1):G__13007__$1);
return G__13007__$2;
})();
om.next.protocols.queue_BANG_(r,cljs.core.into.cljs$core$IFn$_invoke$arity$3(q,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_(r,snds);

return om.next.schedule_sends_BANG_(r);
}
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__13016 = expr;
var G__13016__$1 = ((om.util.mutation_QMARK_(expr))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__13016,cljs.core.assoc,cljs.core.cst$kw$mutator,ident__$1):G__13016);
return G__13016__$1;
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__13008_SHARP_){
return annotate(p1__13008_SHARP_,ident);
})),tx);
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args13017 = [];
var len__5729__auto___13025 = arguments.length;
var i__5730__auto___13026 = (0);
while(true){
if((i__5730__auto___13026 < len__5729__auto___13025)){
args13017.push((arguments[i__5730__auto___13026]));

var G__13027 = (i__5730__auto___13026 + (1));
i__5730__auto___13026 = G__13027;
continue;
} else {
}
break;
}

var G__13019 = args13017.length;
switch (G__13019) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13017.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__4671__auto__ = om.next.component_QMARK_(x);
if(or__4671__auto__){
return or__4671__auto__;
} else {
return (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$x))], 0)))].join('')));
}

if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$tx)], 0)))].join('')));
}

var tx__$1 = (function (){var G__13020 = tx;
var G__13020__$1 = (((function (){var and__4659__auto__ = om.next.component_QMARK_(x);
if(and__4659__auto__){
if(!((x == null))){
if((false) || (x.om$next$Ident$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.next.Ident,x);
}
} else {
return and__4659__auto__;
}
})())?om.next.annotate_mutations(G__13020,om.next.get_ident(x)):G__13020);
return G__13020__$1;
})();
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))){
return om.next.transact_STAR_(x,null,null,tx__$1);
} else {
if(om.next.iquery_QMARK_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$iquery_QMARK_,cljs.core.cst$sym$x)], 0)))].join('')));
}

var p = om.next.parent(x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler(x__$1);
return om.next.transact_STAR_(r,x__$1,null,om.next.transform_reads(r,tx__$2));
} else {
var vec__13023 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept(p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(0),null);
var tx__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(1),null);
var G__13029 = om.next.parent(p);
var G__13030 = x_SINGLEQUOTE_;
var G__13031 = tx__$3;
p = G__13029;
x__$1 = G__13030;
tx__$2 = G__13031;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_(r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__13032){
var map__13035 = p__13032;
var map__13035__$1 = ((((!((map__13035 == null)))?((((map__13035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13035):map__13035);
var opts = map__13035__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13035__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13035__$1,cljs.core.cst$kw$mutate);
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$opts)], 0)))].join('')));
}

return om.next.impl.parser.parser(opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast(query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_(cp))){
var rendered_data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.set(union_keys)),data_path__$1);
var filter_data_path = (function (){var G__13039 = rendered_data_path;
var G__13039__$1 = ((!(cljs.core.empty_QMARK_(rendered_data_path)))?cljs.core.pop(G__13039):G__13039);
return G__13039__$1;
})();
var qs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__13037_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(filter_data_path,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__13037_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__4671__auto__ = cljs.core.map_QMARK_(clojure.zip.node(q));
if(or__4671__auto__){
return or__4671__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.peek(data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek(data_path__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(clojure.zip.node(om.next.query_template(clojure.zip.root(q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template(om.next.focus_query(om.next.replace(om.next.query_template(clojure.zip.root(q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__13040 = cljs.core.pop(cp);
var G__13041 = cljs.core.pop(data_path__$1);
var G__13042 = clojure.zip.node(cljs.core.first(qs_SINGLEQUOTE_));
var G__13043 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cp,qs_SINGLEQUOTE_);
cp = G__13040;
data_path__$1 = G__13041;
new_query__$1 = G__13042;
ret = G__13043;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = (function (){var G__13051 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13051) : cljs.core.atom.call(null,G__13051));
})();
var class_path__GT_query = (function (){var G__13052 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13052) : cljs.core.atom.call(null,G__13052));
})();
var rootq = om.next.get_query(x);
var class$ = (function (){var G__13053 = x;
var G__13053__$1 = ((om.next.component_QMARK_(x))?cljs.core.type(G__13053):G__13053);
return G__13053__$1;
})();
var get_dispatch_key = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$get_dispatch_key(prop){
var G__13111 = prop;
var G__13111__$1 = (((!(om.util.ident_QMARK_(prop))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(prop),cljs.core.cst$sym$_)))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,om.next.impl.parser.expr__GT_ast).call(null,G__13111):G__13111);
return G__13111__$1;
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,query,path,classpath,union_keys){
var l__12618__auto___13176 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_(class$__$1))) || ((om.next.iquery_QMARK_(class$__$1)) && (!(cljs.core.empty_QMARK_(query))))){
} else {
var G__13144_13177 = l__12618__auto___13176;
var G__13145_13178 = [cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_(class$__$1))?class$__$1.constructor.displayName:class$__$1.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join('');
goog.log.error(G__13144_13177,G__13145_13178);
}

var recursive_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([class$__$1], true),classpath);
var classpath__$1 = (function (){var G__13146 = classpath;
var G__13146__$1 = (((!((class$__$1 == null))) && (cljs.core.not(recursive_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13146,class$__$1):G__13146);
return G__13146__$1;
})();
var dp__GT_cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components], null));
if(cljs.core.truth_(class$__$1)){
var focused_query_13179 = om.next.query_template(om.next.focus_query(rootq,path),path);
var cp_query_13180 = (function (){var G__13147 = focused_query_13179;
var G__13147__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.zip.node(focused_query_13179),query))?clojure.zip.replace(G__13147,query):G__13147);
return G__13147__$1;
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([cp_query_13180], 0));
} else {
}

if(cljs.core.truth_(recursive_QMARK_)){
return null;
} else {
if(cljs.core.vector_QMARK_(query)){
var map__13148 = cljs.core.group_by(om.util.join_QMARK_,query);
var map__13148__$1 = ((((!((map__13148 == null)))?((((map__13148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13148):map__13148);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13148__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13148__$1,true);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (map__13148,map__13148__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__13044_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__13044_SHARP_,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_dispatch_key,props),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([class$__$1], true)))], 0));
});})(map__13148,map__13148__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

var seq__13150 = cljs.core.seq(joins);
var chunk__13151 = null;
var count__13152 = (0);
var i__13153 = (0);
while(true){
if((i__13153 < count__13152)){
var join = chunk__13151.cljs$core$IIndexed$_nth$arity$2(null,i__13153);
var vec__13154_13181 = om.util.join_entry(join);
var prop_13182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13154_13181,(0),null);
var query_SINGLEQUOTE__13183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13154_13181,(1),null);
var prop_dispatch_key_13184 = get_dispatch_key(prop_13182);
var recursion_QMARK__13185 = om.util.recursion_QMARK_(query_SINGLEQUOTE__13183);
var query_SINGLEQUOTE__13186__$1 = ((recursion_QMARK__13185)?query:query_SINGLEQUOTE__13183);
var path_SINGLEQUOTE__13187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_13182);
var rendered_path_SINGLEQUOTE__13188 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__13187));
var cs_13189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__13188);
var cascade_query_QMARK__13190 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_13189),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__13186__$1)),cljs.core.type(cljs.core.first(cs_13189)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__13186__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__13191 = ((cascade_query_QMARK__13190)?om.next.get_query(cljs.core.first(cs_13189)):query_SINGLEQUOTE__13186__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__13150,chunk__13151,count__13152,i__13153,vec__13154_13181,prop_13182,query_SINGLEQUOTE__13183,prop_dispatch_key_13184,recursion_QMARK__13185,query_SINGLEQUOTE__13186__$1,path_SINGLEQUOTE__13187,rendered_path_SINGLEQUOTE__13188,cs_13189,cascade_query_QMARK__13190,query_SINGLEQUOTE__SINGLEQUOTE__13191,join,map__13148,map__13148__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__13045_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__13045_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_13184,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__13150,chunk__13151,count__13152,i__13153,vec__13154_13181,prop_13182,query_SINGLEQUOTE__13183,prop_dispatch_key_13184,recursion_QMARK__13185,query_SINGLEQUOTE__13186__$1,path_SINGLEQUOTE__13187,rendered_path_SINGLEQUOTE__13188,cs_13189,cascade_query_QMARK__13190,query_SINGLEQUOTE__SINGLEQUOTE__13191,join,map__13148,map__13148__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

if((cascade_query_QMARK__13190) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__13186__$1,query_SINGLEQUOTE__SINGLEQUOTE__13191))){
var cp__GT_q_SINGLEQUOTE__13192 = om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1,path_SINGLEQUOTE__13187,query_SINGLEQUOTE__SINGLEQUOTE__13191,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__13192);
} else {
}

var class_SINGLEQUOTE__13193 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__13191));
if((recursion_QMARK__13185) && ((class_SINGLEQUOTE__13193 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__13193,query_SINGLEQUOTE__SINGLEQUOTE__13191,path_SINGLEQUOTE__13187,classpath__$1,union_keys);
}

var G__13194 = seq__13150;
var G__13195 = chunk__13151;
var G__13196 = count__13152;
var G__13197 = (i__13153 + (1));
seq__13150 = G__13194;
chunk__13151 = G__13195;
count__13152 = G__13196;
i__13153 = G__13197;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13150);
if(temp__4425__auto__){
var seq__13150__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13150__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__13150__$1);
var G__13198 = cljs.core.chunk_rest(seq__13150__$1);
var G__13199 = c__5474__auto__;
var G__13200 = cljs.core.count(c__5474__auto__);
var G__13201 = (0);
seq__13150 = G__13198;
chunk__13151 = G__13199;
count__13152 = G__13200;
i__13153 = G__13201;
continue;
} else {
var join = cljs.core.first(seq__13150__$1);
var vec__13155_13202 = om.util.join_entry(join);
var prop_13203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13155_13202,(0),null);
var query_SINGLEQUOTE__13204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13155_13202,(1),null);
var prop_dispatch_key_13205 = get_dispatch_key(prop_13203);
var recursion_QMARK__13206 = om.util.recursion_QMARK_(query_SINGLEQUOTE__13204);
var query_SINGLEQUOTE__13207__$1 = ((recursion_QMARK__13206)?query:query_SINGLEQUOTE__13204);
var path_SINGLEQUOTE__13208 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_13203);
var rendered_path_SINGLEQUOTE__13209 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(union_keys),path_SINGLEQUOTE__13208));
var cs_13210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,rendered_path_SINGLEQUOTE__13209);
var cascade_query_QMARK__13211 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_13210),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__13207__$1)),cljs.core.type(cljs.core.first(cs_13210)))) && (!(cljs.core.map_QMARK_(query_SINGLEQUOTE__13207__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__13212 = ((cascade_query_QMARK__13211)?om.next.get_query(cljs.core.first(cs_13210)):query_SINGLEQUOTE__13207__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__13150,chunk__13151,count__13152,i__13153,vec__13155_13202,prop_13203,query_SINGLEQUOTE__13204,prop_dispatch_key_13205,recursion_QMARK__13206,query_SINGLEQUOTE__13207__$1,path_SINGLEQUOTE__13208,rendered_path_SINGLEQUOTE__13209,cs_13210,cascade_query_QMARK__13211,query_SINGLEQUOTE__SINGLEQUOTE__13212,join,seq__13150__$1,temp__4425__auto__,map__13148,map__13148__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__13045_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__13045_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_13205,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__13150,chunk__13151,count__13152,i__13153,vec__13155_13202,prop_13203,query_SINGLEQUOTE__13204,prop_dispatch_key_13205,recursion_QMARK__13206,query_SINGLEQUOTE__13207__$1,path_SINGLEQUOTE__13208,rendered_path_SINGLEQUOTE__13209,cs_13210,cascade_query_QMARK__13211,query_SINGLEQUOTE__SINGLEQUOTE__13212,join,seq__13150__$1,temp__4425__auto__,map__13148,map__13148__$1,props,joins,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

if((cascade_query_QMARK__13211) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE__13207__$1,query_SINGLEQUOTE__SINGLEQUOTE__13212))){
var cp__GT_q_SINGLEQUOTE__13213 = om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1,path_SINGLEQUOTE__13208,query_SINGLEQUOTE__SINGLEQUOTE__13212,union_keys);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__13213);
} else {
}

var class_SINGLEQUOTE__13214 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__SINGLEQUOTE__13212));
if((recursion_QMARK__13206) && ((class_SINGLEQUOTE__13214 == null))){
} else {
om$next$build_index_STAR_(class_SINGLEQUOTE__13214,query_SINGLEQUOTE__SINGLEQUOTE__13212,path_SINGLEQUOTE__13208,classpath__$1,union_keys);
}

var G__13215 = cljs.core.next(seq__13150__$1);
var G__13216 = null;
var G__13217 = (0);
var G__13218 = (0);
seq__13150 = G__13215;
chunk__13151 = G__13216;
count__13152 = G__13217;
i__13153 = G__13218;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(query)){
var seq__13156 = cljs.core.seq(query);
var chunk__13157 = null;
var count__13158 = (0);
var i__13159 = (0);
while(true){
if((i__13159 < count__13158)){
var vec__13160 = chunk__13157.cljs$core$IIndexed$_nth$arity$2(null,i__13159);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13160,(1),null);
var path_SINGLEQUOTE__13219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__13220 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_13221 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__13156,chunk__13157,count__13158,i__13159,path_SINGLEQUOTE__13219,class_SINGLEQUOTE__13220,vec__13160,prop,query_SINGLEQUOTE_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__13046_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__13220,cljs.core.type(p1__13046_SHARP_));
});})(seq__13156,chunk__13157,count__13158,i__13159,path_SINGLEQUOTE__13219,class_SINGLEQUOTE__13220,vec__13160,prop,query_SINGLEQUOTE_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__13222 = (function (){var and__4659__auto__ = class_SINGLEQUOTE__13220;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_13221),(1));
} else {
return and__4659__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__13223 = (cljs.core.truth_(cascade_query_QMARK__13222)?om.next.get_query(cljs.core.first(cs_13221)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__4659__auto__ = cascade_query_QMARK__13222;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__13223);
} else {
return and__4659__auto__;
}
})())){
var qs_13224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1);
var q_13225 = cljs.core.first(qs_13224);
var qnode_13226 = clojure.zip.node((function (){var G__13161 = q_13225;
var G__13161__$1 = (((class$__$1 == null))?om.next.query_template(G__13161,path):G__13161);
return G__13161__$1;
})());
var new_query_13227 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_13226,prop,query_SINGLEQUOTE__SINGLEQUOTE__13223);
var q_SINGLEQUOTE__13228 = (function (){var G__13162 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_13225),path),new_query_13227);
var G__13162__$1 = (((class$__$1 == null))?om.next.query_template(om.next.focus_query(clojure.zip.root(G__13162),cljs.core.pop(path)),cljs.core.pop(path)):G__13162);
return G__13162__$1;
})();
var qs_SINGLEQUOTE__13229 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__13228], true),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([q_13225], true)),qs_13224);
var cp__GT_q_SINGLEQUOTE__13230 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__13229], true, false),om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__13228),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__13230);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__13220,query_SINGLEQUOTE__SINGLEQUOTE__13223,path_SINGLEQUOTE__13219,classpath__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__13231 = seq__13156;
var G__13232 = chunk__13157;
var G__13233 = count__13158;
var G__13234 = (i__13159 + (1));
seq__13156 = G__13231;
chunk__13157 = G__13232;
count__13158 = G__13233;
i__13159 = G__13234;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13156);
if(temp__4425__auto__){
var seq__13156__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13156__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__13156__$1);
var G__13235 = cljs.core.chunk_rest(seq__13156__$1);
var G__13236 = c__5474__auto__;
var G__13237 = cljs.core.count(c__5474__auto__);
var G__13238 = (0);
seq__13156 = G__13235;
chunk__13157 = G__13236;
count__13158 = G__13237;
i__13159 = G__13238;
continue;
} else {
var vec__13163 = cljs.core.first(seq__13156__$1);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13163,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13163,(1),null);
var path_SINGLEQUOTE__13239 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop);
var class_SINGLEQUOTE__13240 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
var cs_13241 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (seq__13156,chunk__13157,count__13158,i__13159,path_SINGLEQUOTE__13239,class_SINGLEQUOTE__13240,vec__13163,prop,query_SINGLEQUOTE_,seq__13156__$1,temp__4425__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__13046_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(class_SINGLEQUOTE__13240,cljs.core.type(p1__13046_SHARP_));
});})(seq__13156,chunk__13157,count__13158,i__13159,path_SINGLEQUOTE__13239,class_SINGLEQUOTE__13240,vec__13163,prop,query_SINGLEQUOTE_,seq__13156__$1,temp__4425__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dp__GT_cs,path));
var cascade_query_QMARK__13242 = (function (){var and__4659__auto__ = class_SINGLEQUOTE__13240;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cs_13241),(1));
} else {
return and__4659__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__13243 = (cljs.core.truth_(cascade_query_QMARK__13242)?om.next.get_query(cljs.core.first(cs_13241)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__4659__auto__ = cascade_query_QMARK__13242;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__13243);
} else {
return and__4659__auto__;
}
})())){
var qs_13244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),classpath__$1);
var q_13245 = cljs.core.first(qs_13244);
var qnode_13246 = clojure.zip.node((function (){var G__13164 = q_13245;
var G__13164__$1 = (((class$__$1 == null))?om.next.query_template(G__13164,path):G__13164);
return G__13164__$1;
})());
var new_query_13247 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(qnode_13246,prop,query_SINGLEQUOTE__SINGLEQUOTE__13243);
var q_SINGLEQUOTE__13248 = (function (){var G__13165 = clojure.zip.replace(om.next.query_template(clojure.zip.root(q_13245),path),new_query_13247);
var G__13165__$1 = (((class$__$1 == null))?om.next.query_template(om.next.focus_query(clojure.zip.root(G__13165),cljs.core.pop(path)),cljs.core.pop(path)):G__13165);
return G__13165__$1;
})();
var qs_SINGLEQUOTE__13249 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__13248], true),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([q_13245], true)),qs_13244);
var cp__GT_q_SINGLEQUOTE__13250 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__13249], true, false),om.next.cascade_query((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query)),cljs.core.pop(classpath__$1),path,clojure.zip.node(q_SINGLEQUOTE__13248),union_keys)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__13250);
} else {
}

om$next$build_index_STAR_(class_SINGLEQUOTE__13240,query_SINGLEQUOTE__SINGLEQUOTE__13243,path_SINGLEQUOTE__13239,classpath__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(union_keys,prop));

var G__13251 = cljs.core.next(seq__13156__$1);
var G__13252 = null;
var G__13253 = (0);
var G__13254 = (0);
seq__13156 = G__13251;
chunk__13157 = G__13252;
count__13158 = G__13253;
i__13159 = G__13254;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_(class$,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop_DASH__GT_classes,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prop__GT_classes) : cljs.core.deref.call(null,prop__GT_classes)),cljs.core.cst$kw$class_DASH_path_DASH__GT_query,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query))], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$index_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(c));
var indexes__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$index_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components,data_path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?(function (){var ident = om.next.ident(c,om.next.props(c));
var l__12618__auto___13255 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_(ident)){
} else {
var G__13167_13256 = l__12618__auto___13255;
var G__13168_13257 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join('');
goog.log.error(G__13167_13256,G__13168_13257);
}

return ident;
})():null);
if(!((ident == null))){
var G__13169 = indexes__$3;
var G__13169__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__13169,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__13169);
return G__13169__$1;
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$drop_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.type(c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(c));
var indexes__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$drop_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$data_DASH_path_DASH__GT_components,data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(!((ident == null))){
var G__13171 = indexes__$3;
var G__13171__$1 = (cljs.core.truth_(ident)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__13171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.disj,c):G__13171);
return G__13171__$1;
} else {
return indexes__$3;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
if(om.next.component_QMARK_(k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__4423__auto__ = cljs.core.cst$kw$ref_DASH__GT_components.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__4423__auto__)){
var cs = temp__4423__auto__;
return cs;
} else {
var cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,k], null),cljs.core.cst$kw$om$next_SLASH_not_DASH_found);
if(!(cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$om$next_SLASH_not_DASH_found,cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prop_DASH__GT_classes,k], null));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (cs__$1,cs,temp__4423__auto__,indexes__$1,___$1){
return (function (p1__13047_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,p1__13047_SHARP_], null));
});})(cs__$1,cs,temp__4423__auto__,indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5285__auto__,k__5286__auto__){
var self__ = this;
var this__5285__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5285__auto____$1,k__5286__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5287__auto__,k13049,else__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
var G__13172 = (((k13049 instanceof cljs.core.Keyword))?k13049.fqn:null);
switch (G__13172) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13049,else__5288__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5299__auto__,writer__5300__auto__,opts__5301__auto__){
var self__ = this;
var this__5299__auto____$1 = this;
var pr_pair__5302__auto__ = ((function (this__5299__auto____$1){
return (function (keyval__5303__auto__){
return cljs.core.pr_sequential_writer(writer__5300__auto__,cljs.core.pr_writer,""," ","",opts__5301__auto__,keyval__5303__auto__);
});})(this__5299__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5300__auto__,pr_pair__5302__auto__,"#om.next.Indexer{",", ","}",opts__5301__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13048){
var self__ = this;
var G__13048__$1 = this;
return (new cljs.core.RecordIter((0),G__13048__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes,cljs.core.cst$kw$extfs], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5283__auto__){
var self__ = this;
var this__5283__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5279__auto__){
var self__ = this;
var this__5279__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5289__auto__){
var self__ = this;
var this__5289__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
var h__5106__auto__ = self__.__hash;
if(!((h__5106__auto__ == null))){
return h__5106__auto__;
} else {
var h__5106__auto____$1 = cljs.core.hash_imap(this__5280__auto____$1);
self__.__hash = h__5106__auto____$1;

return h__5106__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5281__auto__,other__5282__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4659__auto__ = other__5282__auto__;
if(cljs.core.truth_(and__4659__auto__)){
var and__4659__auto____$1 = (this__5281__auto____$1.constructor === other__5282__auto__.constructor);
if(and__4659__auto____$1){
return cljs.core.equiv_map(this__5281__auto____$1,other__5282__auto__);
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5294__auto__,k__5295__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$extfs,null,cljs.core.cst$kw$indexes,null], null), null),k__5295__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5294__auto____$1),self__.__meta),k__5295__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5295__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5292__auto__,k__5293__auto__,G__13048){
var self__ = this;
var this__5292__auto____$1 = this;
var pred__13173 = cljs.core.keyword_identical_QMARK_;
var expr__13174 = k__5293__auto__;
if(cljs.core.truth_((pred__13173.cljs$core$IFn$_invoke$arity$2 ? pred__13173.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes,expr__13174) : pred__13173.call(null,cljs.core.cst$kw$indexes,expr__13174)))){
return (new om.next.Indexer(G__13048,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13173.cljs$core$IFn$_invoke$arity$2 ? pred__13173.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extfs,expr__13174) : pred__13173.call(null,cljs.core.cst$kw$extfs,expr__13174)))){
return (new om.next.Indexer(self__.indexes,G__13048,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5293__auto__,G__13048),null));
}
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5284__auto__,G__13048){
var self__ = this;
var this__5284__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__13048,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5290__auto__,entry__5291__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5291__auto__)){
return cljs.core._assoc(this__5290__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5291__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5291__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5290__auto____$1,entry__5291__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$indexes,cljs.core.cst$sym$extfs], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__5319__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__5319__auto__,writer__5320__auto__){
return cljs.core._write(writer__5320__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__13050){
return (new om.next.Indexer(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(G__13050),cljs.core.cst$kw$extfs.cljs$core$IFn$_invoke$arity$1(G__13050),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13050,cljs.core.cst$kw$indexes,cljs.core.array_seq([cljs.core.cst$kw$extfs], 0)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args13259 = [];
var len__5729__auto___13263 = arguments.length;
var i__5730__auto___13264 = (0);
while(true){
if((i__5730__auto___13264 < len__5729__auto___13263)){
args13259.push((arguments[i__5730__auto___13264]));

var G__13265 = (i__5730__auto___13264 + (1));
i__5730__auto___13264 = G__13265;
continue;
} else {
}
break;
}

var G__13261 = args13259.length;
switch (G__13261) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13259.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$drop_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$ref_DASH__GT_components,(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer((function (){var G__13262 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$data_DASH_path_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13262) : cljs.core.atom.call(null,G__13262));
})(),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return om.next.protocols.key__GT_components(indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(om.next.protocols.key__GT_components(indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
var cp = ((om.next.component_QMARK_(y))?om.next.class_path(y):y);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.zip.root),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args13268 = [];
var len__5729__auto___13273 = arguments.length;
var i__5730__auto___13274 = (0);
while(true){
if((i__5730__auto___13274 < len__5729__auto___13273)){
args13268.push((arguments[i__5730__auto___13274]));

var G__13275 = (i__5730__auto___13274 + (1));
i__5730__auto___13274 = G__13275;
continue;
} else {
}
break;
}

var G__13270 = args13268.length;
switch (G__13270) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13268.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_(component)){
if((om.next.path(component) == null)){
return om.next.replace(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__13271 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13271) : cljs.core.deref.call(null,G__13271));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,om.next.class_path(component)], null))),om.next.get_query(component));
} else {
return om.next.full_query.cljs$core$IFn$_invoke$arity$2(component,om.next.get_query(component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_(component)){
var path_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(component));
var cp = om.next.class_path(component);
var qs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__13272 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13272) : cljs.core.deref.call(null,G__13272));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null));
if(!(cljs.core.empty_QMARK_(qs))){
var q = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__13267_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__13267_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace(q,query);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if((class$ == null)){
return null;
} else {
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))){
var G__13280 = class$.prototype;
return Object.create(G__13280);
} else {
return class$;
}
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = om.next.to_class(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query)));
var ident = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident(class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(om$next$normalize_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident)),data,refs,union_seen),cljs.core.assoc,cljs.core.cst$kw$om_SLASH_tag,cljs.core.first(ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_(data)){
return data;
} else {
var q = cljs.core.seq(query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first(q);
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var vec__13296 = om.util.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13296,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13296,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_(sel);
var union_entry = ((om.util.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = om.next.to_class(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1)));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_(v))){
var G__13303 = cljs.core.next(q);
var G__13304 = ret;
q = G__13303;
ret = G__13304;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = om$next$normalize_STAR_(sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.array_seq([x], 0));

var G__13305 = cljs.core.next(q);
var G__13306 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__13305;
ret = G__13306;
continue;
} else {
var G__13307 = cljs.core.next(q);
var G__13308 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__13307;
ret = G__13308;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__13281_SHARP_){
return om$next$normalize_STAR_(sel__$1,p1__13281_SHARP_,refs,union_entry);
});})(q,ret,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__13282_SHARP_){
return om.next.ident(class$,p1__13282_SHARP_);
});})(q,ret,xs,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst(is)], null),((function (q,ret,is,xs,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ys){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([ys,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,is),xs)], 0));
});})(q,ret,is,xs,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__13301){
var vec__13302 = p__13301;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13302,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13302,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__13296,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__13309 = cljs.core.next(q);
var G__13310 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__13309;
ret = G__13310;
continue;
} else {
var G__13311 = cljs.core.next(q);
var G__13312 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__13311;
ret = G__13312;
continue;
}
} else {
if((v == null)){
var G__13313 = cljs.core.next(q);
var G__13314 = ret;
q = G__13313;
ret = G__13314;
continue;
} else {
var G__13315 = cljs.core.next(q);
var G__13316 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__13315;
ret = G__13316;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__13317 = cljs.core.next(q);
var G__13318 = ret;
q = G__13317;
ret = G__13318;
continue;
} else {
var G__13319 = cljs.core.next(q);
var G__13320 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__13319;
ret = G__13320;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args13321 = [];
var len__5729__auto___13325 = arguments.length;
var i__5730__auto___13326 = (0);
while(true){
if((i__5730__auto___13326 < len__5729__auto___13325)){
args13321.push((arguments[i__5730__auto___13326]));

var G__13327 = (i__5730__auto___13326 + (1));
i__5730__auto___13326 = G__13327;
continue;
} else {
}
break;
}

var G__13323 = args13321.length;
switch (G__13323) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13321.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = (function (){var G__13324 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13324) : cljs.core.atom.call(null,G__13324));
})();
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:om.next.get_query(x));
var ret = om.next.normalize_STAR_(x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ret,refs_SINGLEQUOTE_], 0)),cljs.core.cst$kw$om$next_SLASH_tables,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta(ret,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs)));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;
om.next.sift_idents = (function om$next$sift_idents(res){
var map__13332 = cljs.core.group_by((function (p1__13329_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__13329_SHARP_));
}),res);
var map__13332__$1 = ((((!((map__13332 == null)))?((((map__13332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13332):map__13332);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13332__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13332__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_(om.next.focus_query(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node(pos);
var node_SINGLEQUOTE_ = (function (){var G__13335 = node;
var G__13335__$1 = ((typeof node === 'number')?(G__13335 - (1)):G__13335);
return G__13335__$1;
})();
return om.next.replace(pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13338){
var vec__13339 = p__13338;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13339,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13339,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth(q,recursion_key)], null);
}),union_expr));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$refs)], 0)))].join('')));
}

var data__$1 = (function (){var G__13355 = data;
var G__13355__$1 = ((om.util.ident_QMARK_(data))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(G__13355) : map_ident.call(null,G__13355))):G__13355);
return G__13355__$1;
})();
if(cljs.core.vector_QMARK_(data__$1)){
var step = ((function (data__$1){
return (function (ident){
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var union_recur_QMARK_ = (function (){var and__4659__auto__ = union_expr;
if(cljs.core.truth_(and__4659__auto__)){
return recurse_key;
} else {
return and__4659__auto__;
}
})();
var query__$1 = (function (){var G__13356 = query;
var G__13356__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next.reduce_union_recursion_depth(G__13356,recurse_key):G__13356);
return G__13356__$1;
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__13357 = union_expr;
var G__13357__$1 = (cljs.core.truth_(union_recur_QMARK_)?om.next.reduce_union_recursion_depth(G__13357,recurse_key):G__13357);
return G__13357__$1;
})();
var query_SINGLEQUOTE_ = (function (){var G__13358 = query__$1;
var G__13358__$1 = ((cljs.core.map_QMARK_(query__$1))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__13358,cljs.core.first(ident)):G__13358);
return G__13358__$1;
})();
return om$next$denormalize_STAR_(query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
});})(data__$1))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(step),data__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data__$1;
} else {
var map__13359 = cljs.core.group_by(((function (data__$1){
return (function (p1__13340_SHARP_){
var or__4671__auto__ = om.util.join_QMARK_(p1__13340_SHARP_);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (om.util.ident_QMARK_(p1__13340_SHARP_)) || ((cljs.core.seq_QMARK_(p1__13340_SHARP_)) && (om.util.ident_QMARK_(cljs.core.first(p1__13340_SHARP_))));
}
});})(data__$1))
,query);
var map__13359__$1 = ((((!((map__13359 == null)))?((((map__13359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13359):map__13359);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13359__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13359__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__13359,map__13359__$1,props,joins,data__$1){
return (function (p1__13341_SHARP_){
var G__13361 = p1__13341_SHARP_;
var G__13361__$1 = ((cljs.core.seq_QMARK_(p1__13341_SHARP_))?cljs.core.first(G__13361):G__13361);
return G__13361__$1;
});})(map__13359,map__13359__$1,props,joins,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__13363 = join;
var G__13363__$1 = ((cljs.core.seq_QMARK_(join))?cljs.core.first(G__13363):G__13363);
return G__13363__$1;
})();
var join__$2 = (function (){var G__13364 = join__$1;
var G__13364__$1 = ((om.util.ident_QMARK_(join__$1))?cljs.core.PersistentHashMap.fromArrays([G__13364],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]):G__13364);
return G__13364__$1;
})();
var vec__13362 = om.util.join_entry(join__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13362,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13362,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_(key))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__13365 = key;
var G__13365__$1 = ((om.util.unique_ident_QMARK_(key))?cljs.core.first(G__13365):G__13365);
return G__13365__$1;
})();
var v__$1 = ((om.util.ident_QMARK_(v))?(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v) : map_ident.call(null,v)):v);
var limit = ((typeof sel === 'number')?sel:cljs.core.cst$kw$none);
var union_entry = ((om.util.union_QMARK_(join__$2))?sel:union_expr);
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth(query,key__$1)):(((om.util.ident_QMARK_(key__$1)) && (om.util.union_QMARK_(join__$2)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(key__$1)):(((om.util.ident_QMARK_(v__$1)) && (om.util.union_QMARK_(join__$2)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(v__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$none,limit));
var idents_seen__$1 = (((om.util.ident_QMARK_(v__$1)) && (recurse_QMARK_))?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
var G__13368 = cljs.core.next(joins__$1);
var G__13369 = ret;
joins__$1 = G__13368;
ret = G__13369;
continue;
} else {
if(graph_loop_QMARK_){
var G__13370 = cljs.core.next(joins__$1);
var G__13371 = ret;
joins__$1 = G__13370;
ret = G__13371;
continue;
} else {
if((v__$1 == null)){
var G__13372 = cljs.core.next(joins__$1);
var G__13373 = ret;
joins__$1 = G__13372;
ret = G__13373;
continue;
} else {
var G__13374 = cljs.core.next(joins__$1);
var G__13375 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,om$next$denormalize_STAR_(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__13374;
ret = G__13375;
continue;

}
}
}
} else {
var temp__4423__auto__ = cljs.core.some(((function (joins__$1,ret,map__13359,map__13359__$1,props,joins,props__$1,data__$1){
return (function (p__13366){
var vec__13367 = p__13366;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13367,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13367,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,k], null));
} else {
return null;
}
});})(joins__$1,ret,map__13359,map__13359__$1,props,joins,props__$1,data__$1))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(idents_seen,cljs.core.cst$kw$last_DASH_ident));
if(cljs.core.truth_(temp__4423__auto__)){
var looped_key = temp__4423__auto__;
return looped_key;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(data__$1,props__$1),ret], 0));
}
}
break;
}
}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args13376 = [];
var len__5729__auto___13379 = arguments.length;
var i__5730__auto___13380 = (0);
while(true){
if((i__5730__auto___13380 < len__5729__auto___13379)){
args13376.push((arguments[i__5730__auto___13380]));

var G__13381 = (i__5730__auto___13380 + (1));
i__5730__auto___13380 = G__13381;
continue;
} else {
}
break;
}

var G__13378 = args13376.length;
switch (G__13378) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13376.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
return om.next.denormalize_STAR_(query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
return om.next.denormalize_STAR_(query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;
om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__13394){
var vec__13396 = p__13394;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13396,(0),null);
var orig_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13396,(1),null);
var to_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (to_move,vec__13396,k,orig_paths){
return (function (p1__13383_SHARP_,p2__13384_SHARP_){
return cljs.core.assoc_in(p1__13383_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__13384_SHARP_,k),to_move);
});})(to_move,vec__13396,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_(join))){
if(cljs.core.truth_(query_root_QMARK_(join))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__13397_SHARP_){
return om$next$move_roots(p1__13397_SHARP_,result_roots,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,om.util.join_key(join)));
}),cljs.core.array_seq([om.util.join_value(join)], 0));
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$elements_DASH_seen.cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_((function (){var and__4659__auto__ = om.util.join_QMARK_(expr);
if(cljs.core.truth_(and__4659__auto__)){
return (!(om.util.union_QMARK_(expr))) && (!(cljs.core.list_QMARK_(expr)));
} else {
return and__4659__auto__;
}
})())?(function (){var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var q = (function (){var or__4671__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_(q))?q:((om.util.recursion_QMARK_(jv))?jv:om$next$merge_joins(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(q,jv)))
));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_by_DASH_join], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_mergeable], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements_DASH_seen], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_by_DASH_join,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$elements_DASH_seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$not_DASH_mergeable,cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,init,query);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$not_DASH_mergeable.cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (init,res){
return (function (p__13407){
var vec__13408 = p__13407;
var jkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13408,(0),null);
var jsel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13408,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots(expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_(roots)){
return retain(expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__13418){
var vec__13420 = p__13418;
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13420,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13420,(1),null);
if(cljs.core.empty_QMARK_(path)){
return rewrites;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key(expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(reroot,cljs.core.array_seq([query], 0));
var query__$1 = om.next.merge_joins(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,query__$1,cljs.core.cst$kw$rewrite,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__13430 = config;
var map__13430__$1 = ((((!((map__13430 == null)))?((((map__13430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13430):map__13430);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13430__$1,cljs.core.cst$kw$merge_DASH_ident);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13430__$1,cljs.core.cst$kw$indexer);
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__13430,map__13430__$1,merge_ident,indexer){
return (function (p1__13421_SHARP_){
var and__4659__auto__ = om.util.join_QMARK_(p1__13421_SHARP_);
if(cljs.core.truth_(and__4659__auto__)){
return om.util.ident_QMARK_(om.util.join_key(p1__13421_SHARP_));
} else {
return and__4659__auto__;
}
});})(map__13430,map__13430__$1,merge_ident,indexer))
,query));
var step = ((function (map__13430,map__13430__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__13435){
var vec__13437 = p__13435;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13437,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13437,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__4671__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident_joins,ident);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return om.next.ref__GT_any(indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(c_or_q,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,(merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_)),refs__$1);
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props));
}
});})(map__13430,map__13430__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__13440 = om.next.sift_idents(res);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13440,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13440,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){var or__4671__auto__ = query;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__13441 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13441) : cljs.core.deref.call(null,G__13441));
})());
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents(state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),cljs.core.cst$kw$next,om.next.merge_novelty_BANG_(reconciler,state,res,query),cljs.core.cst$kw$tempids,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args13442 = [];
var len__5729__auto___13465 = arguments.length;
var i__5730__auto___13466 = (0);
while(true){
if((i__5730__auto___13466 < len__5729__auto___13465)){
args13442.push((arguments[i__5730__auto___13466]));

var G__13467 = (i__5730__auto___13466 + (1));
i__5730__auto___13466 = G__13467;
continue;
} else {
}
break;
}

var G__13444 = args13442.length;
switch (G__13444) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13442.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = cljs.core.cst$kw$merge.cljs$core$IFn$_invoke$arity$1(config);
var map__13445 = (function (){var G__13446 = reconciler;
var G__13447 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var G__13448 = delta;
var G__13449 = query;
return (merge_STAR_.cljs$core$IFn$_invoke$arity$4 ? merge_STAR_.cljs$core$IFn$_invoke$arity$4(G__13446,G__13447,G__13448,G__13449) : merge_STAR_.call(null,G__13446,G__13447,G__13448,G__13449));
})();
var map__13445__$1 = ((((!((map__13445 == null)))?((((map__13445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13445):map__13445);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13445__$1,cljs.core.cst$kw$keys);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13445__$1,cljs.core.cst$kw$next);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13445__$1,cljs.core.cst$kw$tempids);
om.next.protocols.queue_BANG_(reconciler,keys);

var G__13457 = state;
var G__13458 = (function (){var temp__4423__auto__ = cljs.core.cst$kw$migrate.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4423__auto__)){
var migrate = temp__4423__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null)),(function (){var G__13460 = next;
var G__13461 = (function (){var or__4671__auto__ = query;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return om.next.get_query(cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__13464 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13464) : cljs.core.deref.call(null,G__13464));
})()));
}
})();
var G__13462 = tempids;
var G__13463 = cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(config);
return (migrate.cljs$core$IFn$_invoke$arity$4 ? migrate.cljs$core$IFn$_invoke$arity$4(G__13460,G__13461,G__13462,G__13463) : migrate.call(null,G__13460,G__13461,G__13462,G__13463));
})()], 0));
} else {
return next;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13457,G__13458) : cljs.core.reset_BANG_.call(null,G__13457,G__13458));
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5285__auto__,k__5286__auto__){
var self__ = this;
var this__5285__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5285__auto____$1,k__5286__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5287__auto__,k13474,else__5288__auto__){
var self__ = this;
var this__5287__auto____$1 = this;
var G__13476 = (((k13474 instanceof cljs.core.Keyword))?k13474.fqn:null);
switch (G__13476) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13474,else__5288__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue], null),cljs.core.into,cljs.core.array_seq([ks], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued_DASH_sends], null),cljs.core.cst$kw$merge_DASH_sends.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.array_seq([sends], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = cljs.core.cst$kw$queued_DASH_sends.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$queued_DASH_sends,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$sends_DASH_queued,false);
});})(sends,this$__$1))
);

return cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (res,query){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,query);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state));
var q = cljs.core.cst$kw$queue.cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queue,cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_(q)){
return cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_skip], null),q)){
return null;
} else {
var cs = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (st,q,___$1){
return (function (p1__13470_SHARP_){
return om.next.protocols.key__GT_components(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),p1__13470_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__13471_SHARP_,p2__13472_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__13471_SHARP_,p2__13472_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__13477 = self__.config;
var map__13477__$1 = ((((!((map__13477 == null)))?((((map__13477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13477):map__13477);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13477__$1,cljs.core.cst$kw$ui_DASH__GT_props);
var env = om.next.to_env(self__.config);
var seq__13479 = cljs.core.seq(cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__13480 = null;
var count__13481 = (0);
var i__13482 = (0);
while(true){
if((i__13482 < count__13481)){
var c = chunk__13480.cljs$core$IIndexed$_nth$arity$2(null,i__13482);
if(om.next.mounted_QMARK_(c)){
var computed_13497 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_props_13498 = om.next.computed((ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c)),computed_13497);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_13498,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_13498 == null))){
om.next.update_component_BANG_(c,next_props_13498);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__13499 = seq__13479;
var G__13500 = chunk__13480;
var G__13501 = count__13481;
var G__13502 = (i__13482 + (1));
seq__13479 = G__13499;
chunk__13480 = G__13500;
count__13481 = G__13501;
i__13482 = G__13502;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13479);
if(temp__4425__auto__){
var seq__13479__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13479__$1)){
var c__5474__auto__ = cljs.core.chunk_first(seq__13479__$1);
var G__13503 = cljs.core.chunk_rest(seq__13479__$1);
var G__13504 = c__5474__auto__;
var G__13505 = cljs.core.count(c__5474__auto__);
var G__13506 = (0);
seq__13479 = G__13503;
chunk__13480 = G__13504;
count__13481 = G__13505;
i__13482 = G__13506;
continue;
} else {
var c = cljs.core.first(seq__13479__$1);
if(om.next.mounted_QMARK_(c)){
var computed_13507 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_props_13508 = om.next.computed((ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c)),computed_13507);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_13508,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_13508 == null))){
om.next.update_component_BANG_(c,next_props_13508);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__13509 = cljs.core.next(seq__13479__$1);
var G__13510 = null;
var G__13511 = (0);
var G__13512 = (0);
seq__13479 = G__13509;
chunk__13480 = G__13510;
count__13481 = G__13511;
i__13482 = G__13512;
continue;
}
} else {
return null;
}
}
break;
}

}
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$sends_DASH_queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$sends_DASH_queued,true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rctor = om.next.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = cljs.core.random_uuid();
if(om.next.iquery_QMARK_(root_class)){
om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__4659__auto__ = cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not(cljs.core.cst$kw$normalized.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))));
} else {
return and__4659__auto__;
}
})())){
var new_state_13513 = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,(function (){var G__13483 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13483) : cljs.core.deref.call(null,G__13483));
})());
var refs_13514 = cljs.core.meta(new_state_13513);
var G__13484_13515 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
var G__13485_13516 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_state_13513,refs_13514], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13484_13515,G__13485_13516) : cljs.core.reset_BANG_.call(null,G__13484_13515,G__13485_13516));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$normalized,true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_13486 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_13487 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13488 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config))?cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null)], 0));

om.next._STAR_instrument_STAR_ = cljs.core.cst$kw$instrument.cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?cljs.core.cst$kw$root_DASH_render.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)),target):((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null))?(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)):(function (){var temp__4425__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(temp__4425__auto__)){
var c_SINGLEQUOTE_ = temp__4425__auto__;
if(om.next.mounted_QMARK_(c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$root,c);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c) : cljs.core.reset_BANG_.call(null,ret,c));
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13488;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13487;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13486;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query((function (){var or__4671__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_(sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$sel),cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$sel))], 0)))].join('')));
}

if(!((sel == null))){
var env = om.next.to_env(self__.config);
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_(v)){
return null;
} else {
return renderf(v);
}
} else {
return renderf((function (){var G__13489 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13489) : cljs.core.deref.call(null,G__13489));
})());
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$render,parsef,cljs.core.cst$kw$root,root_class,cljs.core.cst$kw$remove,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__4671__auto__ = target;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__13469_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13469_SHARP_,cljs.core.cst$kw$target),cljs.core.cst$kw$render),cljs.core.cst$kw$root),cljs.core.cst$kw$remove);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return cljs.core.cst$kw$root_DASH_unmount.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__4671__auto__ = target;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$t], null),cljs.core.inc);

return om.next.schedule_render_BANG_(this$__$1);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef();

var temp__4425__auto___13517 = om.next.get_query((function (){var or__4671__auto__ = (function (){var and__4659__auto__ = target;
if(cljs.core.truth_(and__4659__auto__)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__4425__auto___13517)){
var sel_13518 = temp__4425__auto___13517;
var env_13519 = om.next.to_env(self__.config);
var snds_13520 = om.next.gather_sends(env_13519,sel_13518,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_(snds_13520)){
} else {
var temp__4425__auto___13521__$1 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4425__auto___13521__$1)){
var send_13522 = temp__4425__auto___13521__$1;
var G__13490_13523 = snds_13520;
var G__13491_13524 = ((function (G__13490_13523,send_13522,temp__4425__auto___13521__$1,env_13519,snds_13520,sel_13518,temp__4425__auto___13517,renderf,parsef,ret,rctor,guid,this$__$1){
return (function (res,query){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,query);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_13519,sel_13518));
});})(G__13490_13523,send_13522,temp__4425__auto___13521__$1,env_13519,snds_13520,sel_13518,temp__4425__auto___13517,renderf,parsef,ret,rctor,guid,this$__$1))
;
(send_13522.cljs$core$IFn$_invoke$arity$2 ? send_13522.cljs$core$IFn$_invoke$arity$2(G__13490_13523,G__13491_13524) : send_13522.call(null,G__13490_13523,G__13491_13524));
} else {
}
}
} else {
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),cljs.core.cst$kw$root);
if(om.next.iquery_QMARK_(root)){
var indexer = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,root], null)));
return om.next.protocols.index_root(indexer,(function (){var or__4671__auto__ = c;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = cljs.core.cst$kw$remove.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.truth_(temp__4425__auto__)){
var remove = temp__4425__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5299__auto__,writer__5300__auto__,opts__5301__auto__){
var self__ = this;
var this__5299__auto____$1 = this;
var pr_pair__5302__auto__ = ((function (this__5299__auto____$1){
return (function (keyval__5303__auto__){
return cljs.core.pr_sequential_writer(writer__5300__auto__,cljs.core.pr_writer,""," ","",opts__5301__auto__,keyval__5303__auto__);
});})(this__5299__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5300__auto__,pr_pair__5302__auto__,"#om.next.Reconciler{",", ","}",opts__5301__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13473){
var self__ = this;
var G__13473__$1 = this;
return (new cljs.core.RecordIter((0),G__13473__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$state], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5283__auto__){
var self__ = this;
var this__5283__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5279__auto__){
var self__ = this;
var this__5279__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5289__auto__){
var self__ = this;
var this__5289__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5280__auto__){
var self__ = this;
var this__5280__auto____$1 = this;
var h__5106__auto__ = self__.__hash;
if(!((h__5106__auto__ == null))){
return h__5106__auto__;
} else {
var h__5106__auto____$1 = cljs.core.hash_imap(this__5280__auto____$1);
self__.__hash = h__5106__auto____$1;

return h__5106__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5281__auto__,other__5282__auto__){
var self__ = this;
var this__5281__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4659__auto__ = other__5282__auto__;
if(cljs.core.truth_(and__4659__auto__)){
var and__4659__auto____$1 = (this__5281__auto____$1.constructor === other__5282__auto__.constructor);
if(and__4659__auto____$1){
return cljs.core.equiv_map(this__5281__auto____$1,other__5282__auto__);
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5294__auto__,k__5295__auto__){
var self__ = this;
var this__5294__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$config,null,cljs.core.cst$kw$state,null], null), null),k__5295__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5294__auto____$1),self__.__meta),k__5295__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5295__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5292__auto__,k__5293__auto__,G__13473){
var self__ = this;
var this__5292__auto____$1 = this;
var pred__13492 = cljs.core.keyword_identical_QMARK_;
var expr__13493 = k__5293__auto__;
if(cljs.core.truth_((pred__13492.cljs$core$IFn$_invoke$arity$2 ? pred__13492.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$config,expr__13493) : pred__13492.call(null,cljs.core.cst$kw$config,expr__13493)))){
return (new om.next.Reconciler(G__13473,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13492.cljs$core$IFn$_invoke$arity$2 ? pred__13492.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state,expr__13493) : pred__13492.call(null,cljs.core.cst$kw$state,expr__13493)))){
return (new om.next.Reconciler(self__.config,G__13473,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5293__auto__,G__13473),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5297__auto__){
var self__ = this;
var this__5297__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5284__auto__,G__13473){
var self__ = this;
var this__5284__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__13473,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5290__auto__,entry__5291__auto__){
var self__ = this;
var this__5290__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5291__auto__)){
return cljs.core._assoc(this__5290__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5291__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5291__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5290__auto____$1,entry__5291__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__13495 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13495) : cljs.core.deref.call(null,G__13495));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$state], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__5319__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__5319__auto__,writer__5320__auto__){
return cljs.core._write(writer__5320__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__13475){
return (new om.next.Reconciler(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__13475),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__13475),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13475,cljs.core.cst$kw$config,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__13525,c){
var map__13535 = p__13525;
var map__13535__$1 = ((((!((map__13535 == null)))?((((map__13535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13535):map__13535);
var env = map__13535__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$parser);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13535__$1,cljs.core.cst$kw$pathopt);
var ui = (((function (){var and__4659__auto__ = pathopt;
if(and__4659__auto__){
var and__4659__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__4659__auto____$1){
return om.next.iquery_QMARK_(c);
} else {
return and__4659__auto____$1;
}
} else {
return and__4659__auto__;
}
})())?(function (){var id = om.next.ident(c,om.next.props(c));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__13540 = env;
var G__13541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query(c)], true, false)], null);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__13540,G__13541) : parser.call(null,G__13540,G__13541));
})(),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.cljs$core$IFn$_invoke$arity$1(c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time();
var ui__$1 = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,fq) : parser.call(null,env,fq));
var e = cljs.core.system_time();
var temp__4425__auto___13544 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4425__auto___13544)){
var l_13545 = temp__4425__auto___13544;
var dt_13546 = (e - s);
if(((16) < dt_13546)){
var G__13542_13547 = l_13545;
var G__13543_13548 = [cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_13546),cljs.core.str(" msecs")].join('');
goog.log.warning(G__13542_13547,G__13543_13548);
} else {
}
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui__$1,om.next.path(c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0));
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args13549 = [];
var len__5729__auto___13572 = arguments.length;
var i__5730__auto___13573 = (0);
while(true){
if((i__5730__auto___13573 < len__5729__auto___13572)){
args13549.push((arguments[i__5730__auto___13573]));

var G__13574 = (i__5730__auto___13573 + (1));
i__5730__auto___13573 = G__13574;
continue;
} else {
}
break;
}

var G__13551 = args13549.length;
switch (G__13551) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13549.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4(app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__13562){
var vec__13564 = p__13562;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13564,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13564,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pure,table,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pure,table),id));
});
var step = (function om$next$step(pure,p__13565){
var vec__13569 = p__13565;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13569,(0),null);
var vec__13570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13569,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13570,(1),null);
var new$ = vec__13570;
return cljs.core.assoc_in(dissoc_in(pure,old),new$,(function (){var G__13571 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,old),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,new$)], 0));
var G__13571__$1 = ((!((id_key == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13571,id_key,id):G__13571);
return G__13571__$1;
})());
});
if(!(cljs.core.empty_QMARK_(tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,app_state_pure,tempids);
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;
om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.cst$kw$om$next_SLASH_error));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_(res__$1)))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (class$){
return (function (p1__13576_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__13576_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident(class$,res__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_(query__$1)){
if(cljs.core.vector_QMARK_(res__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (class$,top_error_QMARK_,ret){
return (function (p1__13577_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(query__$1,p1__13577_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq(query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var k = (function (){var k = om.next.expr__GT_key(expr);
var k__$1 = (function (){var G__13613 = k;
var G__13613__$1 = ((om.util.unique_ident_QMARK_(k))?cljs.core.first(G__13613):G__13613);
return G__13613__$1;
})();
return k__$1;
})();
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,k);
if(om.util.mutation_QMARK_(expr)){
var mk = om.util.mutation_key(expr);
var ret_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,mk);
if(om.next.has_error_QMARK_(ret_SINGLEQUOTE_)){
var x = cljs.core.cst$kw$mutator.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__13578_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__13578_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__13615 = cljs.core.next(exprs);
var G__13616 = ret__$1;
exprs = G__13615;
ret__$1 = G__13616;
continue;
} else {
var G__13617 = cljs.core.next(exprs);
var G__13618 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__13617;
ret__$1 = G__13618;
continue;
}
} else {
if(om.util.union_QMARK_(expr)){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var class_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(jv));
if(!(cljs.core.vector_QMARK_(data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,data))),data,errs);
var G__13619 = cljs.core.next(exprs);
var G__13620 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__13619;
ret__$1 = G__13620;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__13579_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,p1__13579_SHARP_))),p1__13579_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__13621 = cljs.core.next(exprs);
var G__13622 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__13621;
ret__$1 = G__13622;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_(expr))){
var jk = om.util.join_key(expr);
var jv = om.util.join_value(expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(jv,data,errs);
var G__13623 = cljs.core.next(exprs);
var G__13624 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__13623;
ret__$1 = G__13624;
continue;
} else {
if((cljs.core.map_QMARK_(data)) && (om.next.has_error_QMARK_(data))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__13580_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__13580_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4671__auto__ = (((class$ == null))?null:om.next.ident(class$,res__$1));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__13625 = cljs.core.next(exprs);
var G__13626 = null;
exprs = G__13625;
ret__$1 = G__13626;
continue;
} else {
var G__13627 = cljs.core.next(exprs);
var G__13628 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,k,data));
exprs = G__13627;
ret__$1 = G__13628;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = (function (){var G__13614 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13614) : cljs.core.atom.call(null,G__13614));
})();
var ret = extract_STAR_(query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tree,ret,cljs.core.cst$kw$errors,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(errs) : cljs.core.deref.call(null,errs))], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__13634){
var map__13642 = p__13634;
var map__13642__$1 = ((((!((map__13642 == null)))?((((map__13642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13642):map__13642);
var config = map__13642__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$root_DASH_render,((function (map__13642,map__13642__$1,config){
return (function (p1__13631_SHARP_,p2__13632_SHARP_){
return ReactDOM.render(p1__13631_SHARP_,p2__13632_SHARP_);
});})(map__13642,map__13642__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13642__$1,cljs.core.cst$kw$normalize);
var prune_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$prune_DASH_tree,om.next.default_extract_errors);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$pathopt,false);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13642__$1,cljs.core.cst$kw$instrument);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13642__$1,cljs.core.cst$kw$id_DASH_key);
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$merge_DASH_sends,((function (map__13642,map__13642__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__13629_SHARP_,p2__13630_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__13629_SHARP_,p2__13630_SHARP_], 0));
});})(map__13642,map__13642__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$merge_DASH_ident,om.next.default_merge_ident);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote], null));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$migrate,om.next.default_migrate);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$history,(100));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13642__$1,cljs.core.cst$kw$state);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$merge,om.next.default_merge);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13642__$1,cljs.core.cst$kw$shared_DASH_fn);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$ui_DASH__GT_props,om.next.default_ui__GT_props);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13642__$1,cljs.core.cst$kw$parser);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$indexer,om.next.indexer);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$root_DASH_unmount,((function (map__13642,map__13642__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__13633_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__13633_SHARP_);
});})(map__13642,map__13642__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13642__$1,cljs.core.cst$kw$send);
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$merge_DASH_tree,om.next.default_merge_tree);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13642__$1,cljs.core.cst$kw$shared);
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13642__$1,cljs.core.cst$kw$optimize,((function (map__13642,map__13642__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(om.next.depth,cs);
});})(map__13642,map__13642__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$config)], 0)))].join('')));
}

var idxr = (indexer.cljs$core$IFn$_invoke$arity$0 ? indexer.cljs$core$IFn$_invoke$arity$0() : indexer.call(null));
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.atom.call(null,state)));
var logger = ((cljs.core.contains_QMARK_(config,cljs.core.cst$kw$logger))?cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pathopt,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$instrument,cljs.core.cst$kw$merge_DASH_ident,cljs.core.cst$kw$merge_DASH_sends,cljs.core.cst$kw$remotes,cljs.core.cst$kw$migrate,cljs.core.cst$kw$history,cljs.core.cst$kw$state,cljs.core.cst$kw$merge,cljs.core.cst$kw$shared_DASH_fn,cljs.core.cst$kw$parser,cljs.core.cst$kw$ui_DASH__GT_props,cljs.core.cst$kw$logger,cljs.core.cst$kw$indexer,cljs.core.cst$kw$root_DASH_unmount,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$optimize,cljs.core.cst$kw$root_DASH_render,cljs.core.cst$kw$normalize,cljs.core.cst$kw$prune_DASH_tree],[pathopt,id_key,(function (){var G__13645 = instrument;
var G__13645__$1 = ((!((instrument == null)))?((function (G__13645,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__13642,map__13642__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize){
return (function om$next$reconciler_$_G__13645(x){
var _STAR_instrument_STAR_13647 = om.next._STAR_instrument_STAR_;
om.next._STAR_instrument_STAR_ = null;

try{return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(x) : instrument.call(null,x));
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13647;
}});})(G__13645,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__13642,map__13642__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize))
:G__13645);
return G__13645__$1;
})(),merge_ident,merge_sends,remotes,migrate,om.next.cache.cache(history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__4671__auto__ = !(norm_QMARK_);
if(or__4671__auto__){
return or__4671__auto__;
} else {
return normalize;
}
})(),prune_tree]),(function (){var G__13648 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$normalized,cljs.core.cst$kw$remove,cljs.core.cst$kw$queue,cljs.core.cst$kw$sends_DASH_queued,cljs.core.cst$kw$queued_DASH_sends,cljs.core.cst$kw$queued,cljs.core.cst$kw$render,cljs.core.cst$kw$root,cljs.core.cst$kw$t,cljs.core.cst$kw$target],[norm_QMARK_,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13648) : cljs.core.atom.call(null,G__13648));
})(),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__13650 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13650) : cljs.core.deref.call(null,G__13650));
})(),cljs.core.cst$kw$root);
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__13652 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__13652) : cljs.core.deref.call(null,G__13652));
})(),cljs.core.cst$kw$render).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args13653 = [];
var len__5729__auto___13656 = arguments.length;
var i__5730__auto___13657 = (0);
while(true){
if((i__5730__auto___13657 < len__5729__auto___13656)){
args13653.push((arguments[i__5730__auto___13657]));

var G__13658 = (i__5730__auto___13657 + (1));
i__5730__auto___13657 = G__13658;
continue;
} else {
}
break;
}

var G__13655 = args13653.length;
switch (G__13655) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13653.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;
/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_(x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args13660 = [];
var len__5729__auto___13663 = arguments.length;
var i__5730__auto___13664 = (0);
while(true){
if((i__5730__auto___13664 < len__5729__auto___13663)){
args13660.push((arguments[i__5730__auto___13664]));

var G__13665 = (i__5730__auto___13664 + (1));
i__5730__auto___13664 = G__13665;
continue;
} else {
}
break;
}

var G__13662 = args13660.length;
switch (G__13662) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13660.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args13667 = [];
var len__5729__auto___13670 = arguments.length;
var i__5730__auto___13671 = (0);
while(true){
if((i__5730__auto___13671 < len__5729__auto___13670)){
args13667.push((arguments[i__5730__auto___13671]));

var G__13672 = (i__5730__auto___13671 + (1));
i__5730__auto___13671 = G__13672;
continue;
} else {
}
break;
}

var G__13669 = args13667.length;
switch (G__13669) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13667.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;
/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args13674 = [];
var len__5729__auto___13677 = arguments.length;
var i__5730__auto___13678 = (0);
while(true){
if((i__5730__auto___13678 < len__5729__auto___13677)){
args13674.push((arguments[i__5730__auto___13678]));

var G__13679 = (i__5730__auto___13678 + (1));
i__5730__auto___13678 = G__13679;
continue;
} else {
}
break;
}

var G__13676 = args13674.length;
switch (G__13676) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13674.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.cst$kw$remote);
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.cst$sym$quote),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;

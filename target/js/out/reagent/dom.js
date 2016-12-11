// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_(reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6404__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__12834 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12834) : cljs.core.atom.call(null,G__12834));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12839 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_12839){
return (function (){
var _STAR_always_update_STAR_12840 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12840;
}});})(_STAR_always_update_STAR_12839))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12839;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12843 = [];
var len__7479__auto___12848 = arguments.length;
var i__7480__auto___12849 = (0);
while(true){
if((i__7480__auto___12849 < len__7479__auto___12848)){
args12843.push((arguments[i__7480__auto___12849]));

var G__12850 = (i__7480__auto___12849 + (1));
i__7480__auto___12849 = G__12850;
continue;
} else {
}
break;
}

var G__12847 = args12843.length;
switch (G__12847) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12843.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__12856_12860 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__12857_12861 = null;
var count__12858_12862 = (0);
var i__12859_12863 = (0);
while(true){
if((i__12859_12863 < count__12858_12862)){
var v_12864 = chunk__12857_12861.cljs$core$IIndexed$_nth$arity$2(null,i__12859_12863);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12864);

var G__12865 = seq__12856_12860;
var G__12866 = chunk__12857_12861;
var G__12867 = count__12858_12862;
var G__12868 = (i__12859_12863 + (1));
seq__12856_12860 = G__12865;
chunk__12857_12861 = G__12866;
count__12858_12862 = G__12867;
i__12859_12863 = G__12868;
continue;
} else {
var temp__4657__auto___12869 = cljs.core.seq(seq__12856_12860);
if(temp__4657__auto___12869){
var seq__12856_12870__$1 = temp__4657__auto___12869;
if(cljs.core.chunked_seq_QMARK_(seq__12856_12870__$1)){
var c__7215__auto___12871 = cljs.core.chunk_first(seq__12856_12870__$1);
var G__12872 = cljs.core.chunk_rest(seq__12856_12870__$1);
var G__12873 = c__7215__auto___12871;
var G__12874 = cljs.core.count(c__7215__auto___12871);
var G__12875 = (0);
seq__12856_12860 = G__12872;
chunk__12857_12861 = G__12873;
count__12858_12862 = G__12874;
i__12859_12863 = G__12875;
continue;
} else {
var v_12876 = cljs.core.first(seq__12856_12870__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12876);

var G__12877 = cljs.core.next(seq__12856_12870__$1);
var G__12878 = null;
var G__12879 = (0);
var G__12880 = (0);
seq__12856_12860 = G__12877;
chunk__12857_12861 = G__12878;
count__12858_12862 = G__12879;
i__12859_12863 = G__12880;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

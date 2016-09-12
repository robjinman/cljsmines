// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__24768_24772 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__24769_24773 = null;
var count__24770_24774 = (0);
var i__24771_24775 = (0);
while(true){
if((i__24771_24775 < count__24770_24774)){
var k_24776 = cljs.core._nth.call(null,chunk__24769_24773,i__24771_24775);
var v_24777 = (b[k_24776]);
(a[k_24776] = v_24777);

var G__24778 = seq__24768_24772;
var G__24779 = chunk__24769_24773;
var G__24780 = count__24770_24774;
var G__24781 = (i__24771_24775 + (1));
seq__24768_24772 = G__24778;
chunk__24769_24773 = G__24779;
count__24770_24774 = G__24780;
i__24771_24775 = G__24781;
continue;
} else {
var temp__4425__auto___24782 = cljs.core.seq.call(null,seq__24768_24772);
if(temp__4425__auto___24782){
var seq__24768_24783__$1 = temp__4425__auto___24782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24768_24783__$1)){
var c__17589__auto___24784 = cljs.core.chunk_first.call(null,seq__24768_24783__$1);
var G__24785 = cljs.core.chunk_rest.call(null,seq__24768_24783__$1);
var G__24786 = c__17589__auto___24784;
var G__24787 = cljs.core.count.call(null,c__17589__auto___24784);
var G__24788 = (0);
seq__24768_24772 = G__24785;
chunk__24769_24773 = G__24786;
count__24770_24774 = G__24787;
i__24771_24775 = G__24788;
continue;
} else {
var k_24789 = cljs.core.first.call(null,seq__24768_24783__$1);
var v_24790 = (b[k_24789]);
(a[k_24789] = v_24790);

var G__24791 = cljs.core.next.call(null,seq__24768_24783__$1);
var G__24792 = null;
var G__24793 = (0);
var G__24794 = (0);
seq__24768_24772 = G__24791;
chunk__24769_24773 = G__24792;
count__24770_24774 = G__24793;
i__24771_24775 = G__24794;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args24795 = [];
var len__17844__auto___24798 = arguments.length;
var i__17845__auto___24799 = (0);
while(true){
if((i__17845__auto___24799 < len__17844__auto___24798)){
args24795.push((arguments[i__17845__auto___24799]));

var G__24800 = (i__17845__auto___24799 + (1));
i__17845__auto___24799 = G__24800;
continue;
} else {
}
break;
}

var G__24797 = args24795.length;
switch (G__24797) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24795.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__24802 = (i + (2));
var G__24803 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__24802;
ret = G__24803;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24804_24808 = cljs.core.seq.call(null,v);
var chunk__24805_24809 = null;
var count__24806_24810 = (0);
var i__24807_24811 = (0);
while(true){
if((i__24807_24811 < count__24806_24810)){
var x_24812 = cljs.core._nth.call(null,chunk__24805_24809,i__24807_24811);
ret.push(x_24812);

var G__24813 = seq__24804_24808;
var G__24814 = chunk__24805_24809;
var G__24815 = count__24806_24810;
var G__24816 = (i__24807_24811 + (1));
seq__24804_24808 = G__24813;
chunk__24805_24809 = G__24814;
count__24806_24810 = G__24815;
i__24807_24811 = G__24816;
continue;
} else {
var temp__4425__auto___24817 = cljs.core.seq.call(null,seq__24804_24808);
if(temp__4425__auto___24817){
var seq__24804_24818__$1 = temp__4425__auto___24817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24804_24818__$1)){
var c__17589__auto___24819 = cljs.core.chunk_first.call(null,seq__24804_24818__$1);
var G__24820 = cljs.core.chunk_rest.call(null,seq__24804_24818__$1);
var G__24821 = c__17589__auto___24819;
var G__24822 = cljs.core.count.call(null,c__17589__auto___24819);
var G__24823 = (0);
seq__24804_24808 = G__24820;
chunk__24805_24809 = G__24821;
count__24806_24810 = G__24822;
i__24807_24811 = G__24823;
continue;
} else {
var x_24824 = cljs.core.first.call(null,seq__24804_24818__$1);
ret.push(x_24824);

var G__24825 = cljs.core.next.call(null,seq__24804_24818__$1);
var G__24826 = null;
var G__24827 = (0);
var G__24828 = (0);
seq__24804_24808 = G__24825;
chunk__24805_24809 = G__24826;
count__24806_24810 = G__24827;
i__24807_24811 = G__24828;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24829_24833 = cljs.core.seq.call(null,v);
var chunk__24830_24834 = null;
var count__24831_24835 = (0);
var i__24832_24836 = (0);
while(true){
if((i__24832_24836 < count__24831_24835)){
var x_24837 = cljs.core._nth.call(null,chunk__24830_24834,i__24832_24836);
ret.push(x_24837);

var G__24838 = seq__24829_24833;
var G__24839 = chunk__24830_24834;
var G__24840 = count__24831_24835;
var G__24841 = (i__24832_24836 + (1));
seq__24829_24833 = G__24838;
chunk__24830_24834 = G__24839;
count__24831_24835 = G__24840;
i__24832_24836 = G__24841;
continue;
} else {
var temp__4425__auto___24842 = cljs.core.seq.call(null,seq__24829_24833);
if(temp__4425__auto___24842){
var seq__24829_24843__$1 = temp__4425__auto___24842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24829_24843__$1)){
var c__17589__auto___24844 = cljs.core.chunk_first.call(null,seq__24829_24843__$1);
var G__24845 = cljs.core.chunk_rest.call(null,seq__24829_24843__$1);
var G__24846 = c__17589__auto___24844;
var G__24847 = cljs.core.count.call(null,c__17589__auto___24844);
var G__24848 = (0);
seq__24829_24833 = G__24845;
chunk__24830_24834 = G__24846;
count__24831_24835 = G__24847;
i__24832_24836 = G__24848;
continue;
} else {
var x_24849 = cljs.core.first.call(null,seq__24829_24843__$1);
ret.push(x_24849);

var G__24850 = cljs.core.next.call(null,seq__24829_24843__$1);
var G__24851 = null;
var G__24852 = (0);
var G__24853 = (0);
seq__24829_24833 = G__24850;
chunk__24830_24834 = G__24851;
count__24831_24835 = G__24852;
i__24832_24836 = G__24853;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24854_24858 = cljs.core.seq.call(null,v);
var chunk__24855_24859 = null;
var count__24856_24860 = (0);
var i__24857_24861 = (0);
while(true){
if((i__24857_24861 < count__24856_24860)){
var x_24862 = cljs.core._nth.call(null,chunk__24855_24859,i__24857_24861);
ret.push(x_24862);

var G__24863 = seq__24854_24858;
var G__24864 = chunk__24855_24859;
var G__24865 = count__24856_24860;
var G__24866 = (i__24857_24861 + (1));
seq__24854_24858 = G__24863;
chunk__24855_24859 = G__24864;
count__24856_24860 = G__24865;
i__24857_24861 = G__24866;
continue;
} else {
var temp__4425__auto___24867 = cljs.core.seq.call(null,seq__24854_24858);
if(temp__4425__auto___24867){
var seq__24854_24868__$1 = temp__4425__auto___24867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24854_24868__$1)){
var c__17589__auto___24869 = cljs.core.chunk_first.call(null,seq__24854_24868__$1);
var G__24870 = cljs.core.chunk_rest.call(null,seq__24854_24868__$1);
var G__24871 = c__17589__auto___24869;
var G__24872 = cljs.core.count.call(null,c__17589__auto___24869);
var G__24873 = (0);
seq__24854_24858 = G__24870;
chunk__24855_24859 = G__24871;
count__24856_24860 = G__24872;
i__24857_24861 = G__24873;
continue;
} else {
var x_24874 = cljs.core.first.call(null,seq__24854_24868__$1);
ret.push(x_24874);

var G__24875 = cljs.core.next.call(null,seq__24854_24868__$1);
var G__24876 = null;
var G__24877 = (0);
var G__24878 = (0);
seq__24854_24858 = G__24875;
chunk__24855_24859 = G__24876;
count__24856_24860 = G__24877;
i__24857_24861 = G__24878;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args24879 = [];
var len__17844__auto___24890 = arguments.length;
var i__17845__auto___24891 = (0);
while(true){
if((i__17845__auto___24891 < len__17844__auto___24890)){
args24879.push((arguments[i__17845__auto___24891]));

var G__24892 = (i__17845__auto___24891 + (1));
i__17845__auto___24891 = G__24892;
continue;
} else {
}
break;
}

var G__24881 = args24879.length;
switch (G__24881) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24879.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24882 = obj;
G__24882.push(kfn.call(null,k),vfn.call(null,v));

return G__24882;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24883 = cljs.core.clone.call(null,handlers);
x24883.forEach = ((function (x24883,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24884 = cljs.core.seq.call(null,coll);
var chunk__24885 = null;
var count__24886 = (0);
var i__24887 = (0);
while(true){
if((i__24887 < count__24886)){
var vec__24888 = cljs.core._nth.call(null,chunk__24885,i__24887);
var k = cljs.core.nth.call(null,vec__24888,(0),null);
var v = cljs.core.nth.call(null,vec__24888,(1),null);
f.call(null,v,k);

var G__24894 = seq__24884;
var G__24895 = chunk__24885;
var G__24896 = count__24886;
var G__24897 = (i__24887 + (1));
seq__24884 = G__24894;
chunk__24885 = G__24895;
count__24886 = G__24896;
i__24887 = G__24897;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24884);
if(temp__4425__auto__){
var seq__24884__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24884__$1)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,seq__24884__$1);
var G__24898 = cljs.core.chunk_rest.call(null,seq__24884__$1);
var G__24899 = c__17589__auto__;
var G__24900 = cljs.core.count.call(null,c__17589__auto__);
var G__24901 = (0);
seq__24884 = G__24898;
chunk__24885 = G__24899;
count__24886 = G__24900;
i__24887 = G__24901;
continue;
} else {
var vec__24889 = cljs.core.first.call(null,seq__24884__$1);
var k = cljs.core.nth.call(null,vec__24889,(0),null);
var v = cljs.core.nth.call(null,vec__24889,(1),null);
f.call(null,v,k);

var G__24902 = cljs.core.next.call(null,seq__24884__$1);
var G__24903 = null;
var G__24904 = (0);
var G__24905 = (0);
seq__24884 = G__24902;
chunk__24885 = G__24903;
count__24886 = G__24904;
i__24887 = G__24905;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24883,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24883;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args24906 = [];
var len__17844__auto___24912 = arguments.length;
var i__17845__auto___24913 = (0);
while(true){
if((i__17845__auto___24913 < len__17844__auto___24912)){
args24906.push((arguments[i__17845__auto___24913]));

var G__24914 = (i__17845__auto___24913 + (1));
i__17845__auto___24913 = G__24914;
continue;
} else {
}
break;
}

var G__24908 = args24906.length;
switch (G__24908) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24906.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit24909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit24909 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta24910){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta24910 = meta24910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit24909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24911,meta24910__$1){
var self__ = this;
var _24911__$1 = this;
return (new cognitect.transit.t_cognitect$transit24909(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta24910__$1));
});

cognitect.transit.t_cognitect$transit24909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24911){
var self__ = this;
var _24911__$1 = this;
return self__.meta24910;
});

cognitect.transit.t_cognitect$transit24909.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24909.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24909.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24909.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta24910","meta24910",2084940736,null)], null);
});

cognitect.transit.t_cognitect$transit24909.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit24909.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit24909";

cognitect.transit.t_cognitect$transit24909.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cognitect.transit/t_cognitect$transit24909");
});

cognitect.transit.__GT_t_cognitect$transit24909 = (function cognitect$transit$__GT_t_cognitect$transit24909(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24910){
return (new cognitect.transit.t_cognitect$transit24909(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24910));
});

}

return (new cognitect.transit.t_cognitect$transit24909(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16785__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map
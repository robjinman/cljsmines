// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16785__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16785__auto__){
return or__16785__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16785__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21896_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21896_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__21901 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21902 = null;
var count__21903 = (0);
var i__21904 = (0);
while(true){
if((i__21904 < count__21903)){
var n = cljs.core._nth.call(null,chunk__21902,i__21904);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21905 = seq__21901;
var G__21906 = chunk__21902;
var G__21907 = count__21903;
var G__21908 = (i__21904 + (1));
seq__21901 = G__21905;
chunk__21902 = G__21906;
count__21903 = G__21907;
i__21904 = G__21908;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21901);
if(temp__4425__auto__){
var seq__21901__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21901__$1)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,seq__21901__$1);
var G__21909 = cljs.core.chunk_rest.call(null,seq__21901__$1);
var G__21910 = c__17589__auto__;
var G__21911 = cljs.core.count.call(null,c__17589__auto__);
var G__21912 = (0);
seq__21901 = G__21909;
chunk__21902 = G__21910;
count__21903 = G__21911;
i__21904 = G__21912;
continue;
} else {
var n = cljs.core.first.call(null,seq__21901__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21913 = cljs.core.next.call(null,seq__21901__$1);
var G__21914 = null;
var G__21915 = (0);
var G__21916 = (0);
seq__21901 = G__21913;
chunk__21902 = G__21914;
count__21903 = G__21915;
i__21904 = G__21916;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__21955_21962 = cljs.core.seq.call(null,deps);
var chunk__21956_21963 = null;
var count__21957_21964 = (0);
var i__21958_21965 = (0);
while(true){
if((i__21958_21965 < count__21957_21964)){
var dep_21966 = cljs.core._nth.call(null,chunk__21956_21963,i__21958_21965);
topo_sort_helper_STAR_.call(null,dep_21966,(depth + (1)),state);

var G__21967 = seq__21955_21962;
var G__21968 = chunk__21956_21963;
var G__21969 = count__21957_21964;
var G__21970 = (i__21958_21965 + (1));
seq__21955_21962 = G__21967;
chunk__21956_21963 = G__21968;
count__21957_21964 = G__21969;
i__21958_21965 = G__21970;
continue;
} else {
var temp__4425__auto___21971 = cljs.core.seq.call(null,seq__21955_21962);
if(temp__4425__auto___21971){
var seq__21955_21972__$1 = temp__4425__auto___21971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21955_21972__$1)){
var c__17589__auto___21973 = cljs.core.chunk_first.call(null,seq__21955_21972__$1);
var G__21974 = cljs.core.chunk_rest.call(null,seq__21955_21972__$1);
var G__21975 = c__17589__auto___21973;
var G__21976 = cljs.core.count.call(null,c__17589__auto___21973);
var G__21977 = (0);
seq__21955_21962 = G__21974;
chunk__21956_21963 = G__21975;
count__21957_21964 = G__21976;
i__21958_21965 = G__21977;
continue;
} else {
var dep_21978 = cljs.core.first.call(null,seq__21955_21972__$1);
topo_sort_helper_STAR_.call(null,dep_21978,(depth + (1)),state);

var G__21979 = cljs.core.next.call(null,seq__21955_21972__$1);
var G__21980 = null;
var G__21981 = (0);
var G__21982 = (0);
seq__21955_21962 = G__21979;
chunk__21956_21963 = G__21980;
count__21957_21964 = G__21981;
i__21958_21965 = G__21982;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21959){
var vec__21961 = p__21959;
var x = cljs.core.nth.call(null,vec__21961,(0),null);
var xs = cljs.core.nthnext.call(null,vec__21961,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21961,x,xs,get_deps__$1){
return (function (p1__21917_SHARP_){
return clojure.set.difference.call(null,p1__21917_SHARP_,x);
});})(vec__21961,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__21995 = cljs.core.seq.call(null,provides);
var chunk__21996 = null;
var count__21997 = (0);
var i__21998 = (0);
while(true){
if((i__21998 < count__21997)){
var prov = cljs.core._nth.call(null,chunk__21996,i__21998);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21999_22007 = cljs.core.seq.call(null,requires);
var chunk__22000_22008 = null;
var count__22001_22009 = (0);
var i__22002_22010 = (0);
while(true){
if((i__22002_22010 < count__22001_22009)){
var req_22011 = cljs.core._nth.call(null,chunk__22000_22008,i__22002_22010);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22011,prov);

var G__22012 = seq__21999_22007;
var G__22013 = chunk__22000_22008;
var G__22014 = count__22001_22009;
var G__22015 = (i__22002_22010 + (1));
seq__21999_22007 = G__22012;
chunk__22000_22008 = G__22013;
count__22001_22009 = G__22014;
i__22002_22010 = G__22015;
continue;
} else {
var temp__4425__auto___22016 = cljs.core.seq.call(null,seq__21999_22007);
if(temp__4425__auto___22016){
var seq__21999_22017__$1 = temp__4425__auto___22016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21999_22017__$1)){
var c__17589__auto___22018 = cljs.core.chunk_first.call(null,seq__21999_22017__$1);
var G__22019 = cljs.core.chunk_rest.call(null,seq__21999_22017__$1);
var G__22020 = c__17589__auto___22018;
var G__22021 = cljs.core.count.call(null,c__17589__auto___22018);
var G__22022 = (0);
seq__21999_22007 = G__22019;
chunk__22000_22008 = G__22020;
count__22001_22009 = G__22021;
i__22002_22010 = G__22022;
continue;
} else {
var req_22023 = cljs.core.first.call(null,seq__21999_22017__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22023,prov);

var G__22024 = cljs.core.next.call(null,seq__21999_22017__$1);
var G__22025 = null;
var G__22026 = (0);
var G__22027 = (0);
seq__21999_22007 = G__22024;
chunk__22000_22008 = G__22025;
count__22001_22009 = G__22026;
i__22002_22010 = G__22027;
continue;
}
} else {
}
}
break;
}

var G__22028 = seq__21995;
var G__22029 = chunk__21996;
var G__22030 = count__21997;
var G__22031 = (i__21998 + (1));
seq__21995 = G__22028;
chunk__21996 = G__22029;
count__21997 = G__22030;
i__21998 = G__22031;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21995);
if(temp__4425__auto__){
var seq__21995__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21995__$1)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,seq__21995__$1);
var G__22032 = cljs.core.chunk_rest.call(null,seq__21995__$1);
var G__22033 = c__17589__auto__;
var G__22034 = cljs.core.count.call(null,c__17589__auto__);
var G__22035 = (0);
seq__21995 = G__22032;
chunk__21996 = G__22033;
count__21997 = G__22034;
i__21998 = G__22035;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21995__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22003_22036 = cljs.core.seq.call(null,requires);
var chunk__22004_22037 = null;
var count__22005_22038 = (0);
var i__22006_22039 = (0);
while(true){
if((i__22006_22039 < count__22005_22038)){
var req_22040 = cljs.core._nth.call(null,chunk__22004_22037,i__22006_22039);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22040,prov);

var G__22041 = seq__22003_22036;
var G__22042 = chunk__22004_22037;
var G__22043 = count__22005_22038;
var G__22044 = (i__22006_22039 + (1));
seq__22003_22036 = G__22041;
chunk__22004_22037 = G__22042;
count__22005_22038 = G__22043;
i__22006_22039 = G__22044;
continue;
} else {
var temp__4425__auto___22045__$1 = cljs.core.seq.call(null,seq__22003_22036);
if(temp__4425__auto___22045__$1){
var seq__22003_22046__$1 = temp__4425__auto___22045__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22003_22046__$1)){
var c__17589__auto___22047 = cljs.core.chunk_first.call(null,seq__22003_22046__$1);
var G__22048 = cljs.core.chunk_rest.call(null,seq__22003_22046__$1);
var G__22049 = c__17589__auto___22047;
var G__22050 = cljs.core.count.call(null,c__17589__auto___22047);
var G__22051 = (0);
seq__22003_22036 = G__22048;
chunk__22004_22037 = G__22049;
count__22005_22038 = G__22050;
i__22006_22039 = G__22051;
continue;
} else {
var req_22052 = cljs.core.first.call(null,seq__22003_22046__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22052,prov);

var G__22053 = cljs.core.next.call(null,seq__22003_22046__$1);
var G__22054 = null;
var G__22055 = (0);
var G__22056 = (0);
seq__22003_22036 = G__22053;
chunk__22004_22037 = G__22054;
count__22005_22038 = G__22055;
i__22006_22039 = G__22056;
continue;
}
} else {
}
}
break;
}

var G__22057 = cljs.core.next.call(null,seq__21995__$1);
var G__22058 = null;
var G__22059 = (0);
var G__22060 = (0);
seq__21995 = G__22057;
chunk__21996 = G__22058;
count__21997 = G__22059;
i__21998 = G__22060;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22065_22069 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22066_22070 = null;
var count__22067_22071 = (0);
var i__22068_22072 = (0);
while(true){
if((i__22068_22072 < count__22067_22071)){
var ns_22073 = cljs.core._nth.call(null,chunk__22066_22070,i__22068_22072);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22073);

var G__22074 = seq__22065_22069;
var G__22075 = chunk__22066_22070;
var G__22076 = count__22067_22071;
var G__22077 = (i__22068_22072 + (1));
seq__22065_22069 = G__22074;
chunk__22066_22070 = G__22075;
count__22067_22071 = G__22076;
i__22068_22072 = G__22077;
continue;
} else {
var temp__4425__auto___22078 = cljs.core.seq.call(null,seq__22065_22069);
if(temp__4425__auto___22078){
var seq__22065_22079__$1 = temp__4425__auto___22078;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22065_22079__$1)){
var c__17589__auto___22080 = cljs.core.chunk_first.call(null,seq__22065_22079__$1);
var G__22081 = cljs.core.chunk_rest.call(null,seq__22065_22079__$1);
var G__22082 = c__17589__auto___22080;
var G__22083 = cljs.core.count.call(null,c__17589__auto___22080);
var G__22084 = (0);
seq__22065_22069 = G__22081;
chunk__22066_22070 = G__22082;
count__22067_22071 = G__22083;
i__22068_22072 = G__22084;
continue;
} else {
var ns_22085 = cljs.core.first.call(null,seq__22065_22079__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22085);

var G__22086 = cljs.core.next.call(null,seq__22065_22079__$1);
var G__22087 = null;
var G__22088 = (0);
var G__22089 = (0);
seq__22065_22069 = G__22086;
chunk__22066_22070 = G__22087;
count__22067_22071 = G__22088;
i__22068_22072 = G__22089;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16785__auto__ = goog.require__;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22090__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22091__i = 0, G__22091__a = new Array(arguments.length -  0);
while (G__22091__i < G__22091__a.length) {G__22091__a[G__22091__i] = arguments[G__22091__i + 0]; ++G__22091__i;}
  args = new cljs.core.IndexedSeq(G__22091__a,0);
} 
return G__22090__delegate.call(this,args);};
G__22090.cljs$lang$maxFixedArity = 0;
G__22090.cljs$lang$applyTo = (function (arglist__22092){
var args = cljs.core.seq(arglist__22092);
return G__22090__delegate(args);
});
G__22090.cljs$core$IFn$_invoke$arity$variadic = G__22090__delegate;
return G__22090;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22094 = cljs.core._EQ_;
var expr__22095 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22094.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22095))){
var path_parts = ((function (pred__22094,expr__22095){
return (function (p1__22093_SHARP_){
return clojure.string.split.call(null,p1__22093_SHARP_,/[\/\\]/);
});})(pred__22094,expr__22095))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22094,expr__22095){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22097){if((e22097 instanceof Error)){
var e = e22097;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22097;

}
}})());
});
;})(path_parts,sep,root,pred__22094,expr__22095))
} else {
if(cljs.core.truth_(pred__22094.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22095))){
return ((function (pred__22094,expr__22095){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22094,expr__22095){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22094,expr__22095))
);

return deferred.addErrback(((function (deferred,pred__22094,expr__22095){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22094,expr__22095))
);
});
;})(pred__22094,expr__22095))
} else {
return ((function (pred__22094,expr__22095){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22094,expr__22095))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22098,callback){
var map__22101 = p__22098;
var map__22101__$1 = ((((!((map__22101 == null)))?((((map__22101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22101):map__22101);
var file_msg = map__22101__$1;
var request_url = cljs.core.get.call(null,map__22101__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22101,map__22101__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22101,map__22101__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto__){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto__){
return (function (state_22125){
var state_val_22126 = (state_22125[(1)]);
if((state_val_22126 === (7))){
var inst_22121 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
var statearr_22127_22147 = state_22125__$1;
(statearr_22127_22147[(2)] = inst_22121);

(statearr_22127_22147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (1))){
var state_22125__$1 = state_22125;
var statearr_22128_22148 = state_22125__$1;
(statearr_22128_22148[(2)] = null);

(statearr_22128_22148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (4))){
var inst_22105 = (state_22125[(7)]);
var inst_22105__$1 = (state_22125[(2)]);
var state_22125__$1 = (function (){var statearr_22129 = state_22125;
(statearr_22129[(7)] = inst_22105__$1);

return statearr_22129;
})();
if(cljs.core.truth_(inst_22105__$1)){
var statearr_22130_22149 = state_22125__$1;
(statearr_22130_22149[(1)] = (5));

} else {
var statearr_22131_22150 = state_22125__$1;
(statearr_22131_22150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (6))){
var state_22125__$1 = state_22125;
var statearr_22132_22151 = state_22125__$1;
(statearr_22132_22151[(2)] = null);

(statearr_22132_22151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (3))){
var inst_22123 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22125__$1,inst_22123);
} else {
if((state_val_22126 === (2))){
var state_22125__$1 = state_22125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22125__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22126 === (11))){
var inst_22117 = (state_22125[(2)]);
var state_22125__$1 = (function (){var statearr_22133 = state_22125;
(statearr_22133[(8)] = inst_22117);

return statearr_22133;
})();
var statearr_22134_22152 = state_22125__$1;
(statearr_22134_22152[(2)] = null);

(statearr_22134_22152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (9))){
var inst_22111 = (state_22125[(9)]);
var inst_22109 = (state_22125[(10)]);
var inst_22113 = inst_22111.call(null,inst_22109);
var state_22125__$1 = state_22125;
var statearr_22135_22153 = state_22125__$1;
(statearr_22135_22153[(2)] = inst_22113);

(statearr_22135_22153[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (5))){
var inst_22105 = (state_22125[(7)]);
var inst_22107 = figwheel.client.file_reloading.blocking_load.call(null,inst_22105);
var state_22125__$1 = state_22125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22125__$1,(8),inst_22107);
} else {
if((state_val_22126 === (10))){
var inst_22109 = (state_22125[(10)]);
var inst_22115 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22109);
var state_22125__$1 = state_22125;
var statearr_22136_22154 = state_22125__$1;
(statearr_22136_22154[(2)] = inst_22115);

(statearr_22136_22154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (8))){
var inst_22111 = (state_22125[(9)]);
var inst_22105 = (state_22125[(7)]);
var inst_22109 = (state_22125[(2)]);
var inst_22110 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22111__$1 = cljs.core.get.call(null,inst_22110,inst_22105);
var state_22125__$1 = (function (){var statearr_22137 = state_22125;
(statearr_22137[(9)] = inst_22111__$1);

(statearr_22137[(10)] = inst_22109);

return statearr_22137;
})();
if(cljs.core.truth_(inst_22111__$1)){
var statearr_22138_22155 = state_22125__$1;
(statearr_22138_22155[(1)] = (9));

} else {
var statearr_22139_22156 = state_22125__$1;
(statearr_22139_22156[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18953__auto__))
;
return ((function (switch__18841__auto__,c__18953__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18842__auto__ = null;
var figwheel$client$file_reloading$state_machine__18842__auto____0 = (function (){
var statearr_22143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22143[(0)] = figwheel$client$file_reloading$state_machine__18842__auto__);

(statearr_22143[(1)] = (1));

return statearr_22143;
});
var figwheel$client$file_reloading$state_machine__18842__auto____1 = (function (state_22125){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_22125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e22144){if((e22144 instanceof Object)){
var ex__18845__auto__ = e22144;
var statearr_22145_22157 = state_22125;
(statearr_22145_22157[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22158 = state_22125;
state_22125 = G__22158;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18842__auto__ = function(state_22125){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18842__auto____1.call(this,state_22125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18842__auto____0;
figwheel$client$file_reloading$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18842__auto____1;
return figwheel$client$file_reloading$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto__))
})();
var state__18955__auto__ = (function (){var statearr_22146 = f__18954__auto__.call(null);
(statearr_22146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto__);

return statearr_22146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto__))
);

return c__18953__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22159,callback){
var map__22162 = p__22159;
var map__22162__$1 = ((((!((map__22162 == null)))?((((map__22162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22162):map__22162);
var file_msg = map__22162__$1;
var namespace = cljs.core.get.call(null,map__22162__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22162,map__22162__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22162,map__22162__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22164){
var map__22167 = p__22164;
var map__22167__$1 = ((((!((map__22167 == null)))?((((map__22167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22167):map__22167);
var file_msg = map__22167__$1;
var namespace = cljs.core.get.call(null,map__22167__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16773__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16773__auto__){
var or__16785__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16773__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22169,callback){
var map__22172 = p__22169;
var map__22172__$1 = ((((!((map__22172 == null)))?((((map__22172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22172):map__22172);
var file_msg = map__22172__$1;
var request_url = cljs.core.get.call(null,map__22172__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22172__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18953__auto___22260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___22260,out){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___22260,out){
return (function (state_22242){
var state_val_22243 = (state_22242[(1)]);
if((state_val_22243 === (1))){
var inst_22220 = cljs.core.nth.call(null,files,(0),null);
var inst_22221 = cljs.core.nthnext.call(null,files,(1));
var inst_22222 = files;
var state_22242__$1 = (function (){var statearr_22244 = state_22242;
(statearr_22244[(7)] = inst_22221);

(statearr_22244[(8)] = inst_22222);

(statearr_22244[(9)] = inst_22220);

return statearr_22244;
})();
var statearr_22245_22261 = state_22242__$1;
(statearr_22245_22261[(2)] = null);

(statearr_22245_22261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22243 === (2))){
var inst_22225 = (state_22242[(10)]);
var inst_22222 = (state_22242[(8)]);
var inst_22225__$1 = cljs.core.nth.call(null,inst_22222,(0),null);
var inst_22226 = cljs.core.nthnext.call(null,inst_22222,(1));
var inst_22227 = (inst_22225__$1 == null);
var inst_22228 = cljs.core.not.call(null,inst_22227);
var state_22242__$1 = (function (){var statearr_22246 = state_22242;
(statearr_22246[(10)] = inst_22225__$1);

(statearr_22246[(11)] = inst_22226);

return statearr_22246;
})();
if(inst_22228){
var statearr_22247_22262 = state_22242__$1;
(statearr_22247_22262[(1)] = (4));

} else {
var statearr_22248_22263 = state_22242__$1;
(statearr_22248_22263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22243 === (3))){
var inst_22240 = (state_22242[(2)]);
var state_22242__$1 = state_22242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22242__$1,inst_22240);
} else {
if((state_val_22243 === (4))){
var inst_22225 = (state_22242[(10)]);
var inst_22230 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22225);
var state_22242__$1 = state_22242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22242__$1,(7),inst_22230);
} else {
if((state_val_22243 === (5))){
var inst_22236 = cljs.core.async.close_BANG_.call(null,out);
var state_22242__$1 = state_22242;
var statearr_22249_22264 = state_22242__$1;
(statearr_22249_22264[(2)] = inst_22236);

(statearr_22249_22264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22243 === (6))){
var inst_22238 = (state_22242[(2)]);
var state_22242__$1 = state_22242;
var statearr_22250_22265 = state_22242__$1;
(statearr_22250_22265[(2)] = inst_22238);

(statearr_22250_22265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22243 === (7))){
var inst_22226 = (state_22242[(11)]);
var inst_22232 = (state_22242[(2)]);
var inst_22233 = cljs.core.async.put_BANG_.call(null,out,inst_22232);
var inst_22222 = inst_22226;
var state_22242__$1 = (function (){var statearr_22251 = state_22242;
(statearr_22251[(12)] = inst_22233);

(statearr_22251[(8)] = inst_22222);

return statearr_22251;
})();
var statearr_22252_22266 = state_22242__$1;
(statearr_22252_22266[(2)] = null);

(statearr_22252_22266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18953__auto___22260,out))
;
return ((function (switch__18841__auto__,c__18953__auto___22260,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto____0 = (function (){
var statearr_22256 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22256[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto__);

(statearr_22256[(1)] = (1));

return statearr_22256;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto____1 = (function (state_22242){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_22242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e22257){if((e22257 instanceof Object)){
var ex__18845__auto__ = e22257;
var statearr_22258_22267 = state_22242;
(statearr_22258_22267[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22268 = state_22242;
state_22242 = G__22268;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto__ = function(state_22242){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto____1.call(this,state_22242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___22260,out))
})();
var state__18955__auto__ = (function (){var statearr_22259 = f__18954__auto__.call(null);
(statearr_22259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___22260);

return statearr_22259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___22260,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22269,opts){
var map__22273 = p__22269;
var map__22273__$1 = ((((!((map__22273 == null)))?((((map__22273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22273):map__22273);
var eval_body__$1 = cljs.core.get.call(null,map__22273__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22273__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16773__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16773__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16773__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22275){var e = e22275;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22276_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22276_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22281){
var vec__22282 = p__22281;
var k = cljs.core.nth.call(null,vec__22282,(0),null);
var v = cljs.core.nth.call(null,vec__22282,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22283){
var vec__22284 = p__22283;
var k = cljs.core.nth.call(null,vec__22284,(0),null);
var v = cljs.core.nth.call(null,vec__22284,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22288,p__22289){
var map__22536 = p__22288;
var map__22536__$1 = ((((!((map__22536 == null)))?((((map__22536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22536):map__22536);
var opts = map__22536__$1;
var before_jsload = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22536__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22537 = p__22289;
var map__22537__$1 = ((((!((map__22537 == null)))?((((map__22537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22537):map__22537);
var msg = map__22537__$1;
var files = cljs.core.get.call(null,map__22537__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22537__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22537__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22690){
var state_val_22691 = (state_22690[(1)]);
if((state_val_22691 === (7))){
var inst_22551 = (state_22690[(7)]);
var inst_22553 = (state_22690[(8)]);
var inst_22552 = (state_22690[(9)]);
var inst_22554 = (state_22690[(10)]);
var inst_22559 = cljs.core._nth.call(null,inst_22552,inst_22554);
var inst_22560 = figwheel.client.file_reloading.eval_body.call(null,inst_22559,opts);
var inst_22561 = (inst_22554 + (1));
var tmp22692 = inst_22551;
var tmp22693 = inst_22553;
var tmp22694 = inst_22552;
var inst_22551__$1 = tmp22692;
var inst_22552__$1 = tmp22694;
var inst_22553__$1 = tmp22693;
var inst_22554__$1 = inst_22561;
var state_22690__$1 = (function (){var statearr_22695 = state_22690;
(statearr_22695[(7)] = inst_22551__$1);

(statearr_22695[(8)] = inst_22553__$1);

(statearr_22695[(9)] = inst_22552__$1);

(statearr_22695[(11)] = inst_22560);

(statearr_22695[(10)] = inst_22554__$1);

return statearr_22695;
})();
var statearr_22696_22782 = state_22690__$1;
(statearr_22696_22782[(2)] = null);

(statearr_22696_22782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (20))){
var inst_22594 = (state_22690[(12)]);
var inst_22602 = figwheel.client.file_reloading.sort_files.call(null,inst_22594);
var state_22690__$1 = state_22690;
var statearr_22697_22783 = state_22690__$1;
(statearr_22697_22783[(2)] = inst_22602);

(statearr_22697_22783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (27))){
var state_22690__$1 = state_22690;
var statearr_22698_22784 = state_22690__$1;
(statearr_22698_22784[(2)] = null);

(statearr_22698_22784[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (1))){
var inst_22543 = (state_22690[(13)]);
var inst_22540 = before_jsload.call(null,files);
var inst_22541 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22542 = (function (){return ((function (inst_22543,inst_22540,inst_22541,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22285_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22285_SHARP_);
});
;})(inst_22543,inst_22540,inst_22541,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22543__$1 = cljs.core.filter.call(null,inst_22542,files);
var inst_22544 = cljs.core.not_empty.call(null,inst_22543__$1);
var state_22690__$1 = (function (){var statearr_22699 = state_22690;
(statearr_22699[(13)] = inst_22543__$1);

(statearr_22699[(14)] = inst_22541);

(statearr_22699[(15)] = inst_22540);

return statearr_22699;
})();
if(cljs.core.truth_(inst_22544)){
var statearr_22700_22785 = state_22690__$1;
(statearr_22700_22785[(1)] = (2));

} else {
var statearr_22701_22786 = state_22690__$1;
(statearr_22701_22786[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (24))){
var state_22690__$1 = state_22690;
var statearr_22702_22787 = state_22690__$1;
(statearr_22702_22787[(2)] = null);

(statearr_22702_22787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (39))){
var inst_22644 = (state_22690[(16)]);
var state_22690__$1 = state_22690;
var statearr_22703_22788 = state_22690__$1;
(statearr_22703_22788[(2)] = inst_22644);

(statearr_22703_22788[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (46))){
var inst_22685 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
var statearr_22704_22789 = state_22690__$1;
(statearr_22704_22789[(2)] = inst_22685);

(statearr_22704_22789[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (4))){
var inst_22588 = (state_22690[(2)]);
var inst_22589 = cljs.core.List.EMPTY;
var inst_22590 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22589);
var inst_22591 = (function (){return ((function (inst_22588,inst_22589,inst_22590,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22286_SHARP_){
var and__16773__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22286_SHARP_);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22286_SHARP_));
} else {
return and__16773__auto__;
}
});
;})(inst_22588,inst_22589,inst_22590,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22592 = cljs.core.filter.call(null,inst_22591,files);
var inst_22593 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22594 = cljs.core.concat.call(null,inst_22592,inst_22593);
var state_22690__$1 = (function (){var statearr_22705 = state_22690;
(statearr_22705[(17)] = inst_22590);

(statearr_22705[(18)] = inst_22588);

(statearr_22705[(12)] = inst_22594);

return statearr_22705;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22706_22790 = state_22690__$1;
(statearr_22706_22790[(1)] = (16));

} else {
var statearr_22707_22791 = state_22690__$1;
(statearr_22707_22791[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (15))){
var inst_22578 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
var statearr_22708_22792 = state_22690__$1;
(statearr_22708_22792[(2)] = inst_22578);

(statearr_22708_22792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (21))){
var inst_22604 = (state_22690[(19)]);
var inst_22604__$1 = (state_22690[(2)]);
var inst_22605 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22604__$1);
var state_22690__$1 = (function (){var statearr_22709 = state_22690;
(statearr_22709[(19)] = inst_22604__$1);

return statearr_22709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22690__$1,(22),inst_22605);
} else {
if((state_val_22691 === (31))){
var inst_22688 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22690__$1,inst_22688);
} else {
if((state_val_22691 === (32))){
var inst_22644 = (state_22690[(16)]);
var inst_22649 = inst_22644.cljs$lang$protocol_mask$partition0$;
var inst_22650 = (inst_22649 & (64));
var inst_22651 = inst_22644.cljs$core$ISeq$;
var inst_22652 = (inst_22650) || (inst_22651);
var state_22690__$1 = state_22690;
if(cljs.core.truth_(inst_22652)){
var statearr_22710_22793 = state_22690__$1;
(statearr_22710_22793[(1)] = (35));

} else {
var statearr_22711_22794 = state_22690__$1;
(statearr_22711_22794[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (40))){
var inst_22665 = (state_22690[(20)]);
var inst_22664 = (state_22690[(2)]);
var inst_22665__$1 = cljs.core.get.call(null,inst_22664,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22666 = cljs.core.get.call(null,inst_22664,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22667 = cljs.core.not_empty.call(null,inst_22665__$1);
var state_22690__$1 = (function (){var statearr_22712 = state_22690;
(statearr_22712[(20)] = inst_22665__$1);

(statearr_22712[(21)] = inst_22666);

return statearr_22712;
})();
if(cljs.core.truth_(inst_22667)){
var statearr_22713_22795 = state_22690__$1;
(statearr_22713_22795[(1)] = (41));

} else {
var statearr_22714_22796 = state_22690__$1;
(statearr_22714_22796[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (33))){
var state_22690__$1 = state_22690;
var statearr_22715_22797 = state_22690__$1;
(statearr_22715_22797[(2)] = false);

(statearr_22715_22797[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (13))){
var inst_22564 = (state_22690[(22)]);
var inst_22568 = cljs.core.chunk_first.call(null,inst_22564);
var inst_22569 = cljs.core.chunk_rest.call(null,inst_22564);
var inst_22570 = cljs.core.count.call(null,inst_22568);
var inst_22551 = inst_22569;
var inst_22552 = inst_22568;
var inst_22553 = inst_22570;
var inst_22554 = (0);
var state_22690__$1 = (function (){var statearr_22716 = state_22690;
(statearr_22716[(7)] = inst_22551);

(statearr_22716[(8)] = inst_22553);

(statearr_22716[(9)] = inst_22552);

(statearr_22716[(10)] = inst_22554);

return statearr_22716;
})();
var statearr_22717_22798 = state_22690__$1;
(statearr_22717_22798[(2)] = null);

(statearr_22717_22798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (22))){
var inst_22608 = (state_22690[(23)]);
var inst_22612 = (state_22690[(24)]);
var inst_22604 = (state_22690[(19)]);
var inst_22607 = (state_22690[(25)]);
var inst_22607__$1 = (state_22690[(2)]);
var inst_22608__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22607__$1);
var inst_22609 = (function (){var all_files = inst_22604;
var res_SINGLEQUOTE_ = inst_22607__$1;
var res = inst_22608__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22608,inst_22612,inst_22604,inst_22607,inst_22607__$1,inst_22608__$1,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22287_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22287_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22608,inst_22612,inst_22604,inst_22607,inst_22607__$1,inst_22608__$1,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22610 = cljs.core.filter.call(null,inst_22609,inst_22607__$1);
var inst_22611 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22612__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22611);
var inst_22613 = cljs.core.not_empty.call(null,inst_22612__$1);
var state_22690__$1 = (function (){var statearr_22718 = state_22690;
(statearr_22718[(23)] = inst_22608__$1);

(statearr_22718[(26)] = inst_22610);

(statearr_22718[(24)] = inst_22612__$1);

(statearr_22718[(25)] = inst_22607__$1);

return statearr_22718;
})();
if(cljs.core.truth_(inst_22613)){
var statearr_22719_22799 = state_22690__$1;
(statearr_22719_22799[(1)] = (23));

} else {
var statearr_22720_22800 = state_22690__$1;
(statearr_22720_22800[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (36))){
var state_22690__$1 = state_22690;
var statearr_22721_22801 = state_22690__$1;
(statearr_22721_22801[(2)] = false);

(statearr_22721_22801[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (41))){
var inst_22665 = (state_22690[(20)]);
var inst_22669 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22670 = cljs.core.map.call(null,inst_22669,inst_22665);
var inst_22671 = cljs.core.pr_str.call(null,inst_22670);
var inst_22672 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22671)].join('');
var inst_22673 = figwheel.client.utils.log.call(null,inst_22672);
var state_22690__$1 = state_22690;
var statearr_22722_22802 = state_22690__$1;
(statearr_22722_22802[(2)] = inst_22673);

(statearr_22722_22802[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (43))){
var inst_22666 = (state_22690[(21)]);
var inst_22676 = (state_22690[(2)]);
var inst_22677 = cljs.core.not_empty.call(null,inst_22666);
var state_22690__$1 = (function (){var statearr_22723 = state_22690;
(statearr_22723[(27)] = inst_22676);

return statearr_22723;
})();
if(cljs.core.truth_(inst_22677)){
var statearr_22724_22803 = state_22690__$1;
(statearr_22724_22803[(1)] = (44));

} else {
var statearr_22725_22804 = state_22690__$1;
(statearr_22725_22804[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (29))){
var inst_22608 = (state_22690[(23)]);
var inst_22610 = (state_22690[(26)]);
var inst_22612 = (state_22690[(24)]);
var inst_22604 = (state_22690[(19)]);
var inst_22607 = (state_22690[(25)]);
var inst_22644 = (state_22690[(16)]);
var inst_22640 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22643 = (function (){var all_files = inst_22604;
var res_SINGLEQUOTE_ = inst_22607;
var res = inst_22608;
var files_not_loaded = inst_22610;
var dependencies_that_loaded = inst_22612;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22608,inst_22610,inst_22612,inst_22604,inst_22607,inst_22644,inst_22640,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22642){
var map__22726 = p__22642;
var map__22726__$1 = ((((!((map__22726 == null)))?((((map__22726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22726):map__22726);
var namespace = cljs.core.get.call(null,map__22726__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22608,inst_22610,inst_22612,inst_22604,inst_22607,inst_22644,inst_22640,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22644__$1 = cljs.core.group_by.call(null,inst_22643,inst_22610);
var inst_22646 = (inst_22644__$1 == null);
var inst_22647 = cljs.core.not.call(null,inst_22646);
var state_22690__$1 = (function (){var statearr_22728 = state_22690;
(statearr_22728[(28)] = inst_22640);

(statearr_22728[(16)] = inst_22644__$1);

return statearr_22728;
})();
if(inst_22647){
var statearr_22729_22805 = state_22690__$1;
(statearr_22729_22805[(1)] = (32));

} else {
var statearr_22730_22806 = state_22690__$1;
(statearr_22730_22806[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (44))){
var inst_22666 = (state_22690[(21)]);
var inst_22679 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22666);
var inst_22680 = cljs.core.pr_str.call(null,inst_22679);
var inst_22681 = [cljs.core.str("not required: "),cljs.core.str(inst_22680)].join('');
var inst_22682 = figwheel.client.utils.log.call(null,inst_22681);
var state_22690__$1 = state_22690;
var statearr_22731_22807 = state_22690__$1;
(statearr_22731_22807[(2)] = inst_22682);

(statearr_22731_22807[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (6))){
var inst_22585 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
var statearr_22732_22808 = state_22690__$1;
(statearr_22732_22808[(2)] = inst_22585);

(statearr_22732_22808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (28))){
var inst_22610 = (state_22690[(26)]);
var inst_22637 = (state_22690[(2)]);
var inst_22638 = cljs.core.not_empty.call(null,inst_22610);
var state_22690__$1 = (function (){var statearr_22733 = state_22690;
(statearr_22733[(29)] = inst_22637);

return statearr_22733;
})();
if(cljs.core.truth_(inst_22638)){
var statearr_22734_22809 = state_22690__$1;
(statearr_22734_22809[(1)] = (29));

} else {
var statearr_22735_22810 = state_22690__$1;
(statearr_22735_22810[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (25))){
var inst_22608 = (state_22690[(23)]);
var inst_22624 = (state_22690[(2)]);
var inst_22625 = cljs.core.not_empty.call(null,inst_22608);
var state_22690__$1 = (function (){var statearr_22736 = state_22690;
(statearr_22736[(30)] = inst_22624);

return statearr_22736;
})();
if(cljs.core.truth_(inst_22625)){
var statearr_22737_22811 = state_22690__$1;
(statearr_22737_22811[(1)] = (26));

} else {
var statearr_22738_22812 = state_22690__$1;
(statearr_22738_22812[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (34))){
var inst_22659 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
if(cljs.core.truth_(inst_22659)){
var statearr_22739_22813 = state_22690__$1;
(statearr_22739_22813[(1)] = (38));

} else {
var statearr_22740_22814 = state_22690__$1;
(statearr_22740_22814[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (17))){
var state_22690__$1 = state_22690;
var statearr_22741_22815 = state_22690__$1;
(statearr_22741_22815[(2)] = recompile_dependents);

(statearr_22741_22815[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (3))){
var state_22690__$1 = state_22690;
var statearr_22742_22816 = state_22690__$1;
(statearr_22742_22816[(2)] = null);

(statearr_22742_22816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (12))){
var inst_22581 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
var statearr_22743_22817 = state_22690__$1;
(statearr_22743_22817[(2)] = inst_22581);

(statearr_22743_22817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (2))){
var inst_22543 = (state_22690[(13)]);
var inst_22550 = cljs.core.seq.call(null,inst_22543);
var inst_22551 = inst_22550;
var inst_22552 = null;
var inst_22553 = (0);
var inst_22554 = (0);
var state_22690__$1 = (function (){var statearr_22744 = state_22690;
(statearr_22744[(7)] = inst_22551);

(statearr_22744[(8)] = inst_22553);

(statearr_22744[(9)] = inst_22552);

(statearr_22744[(10)] = inst_22554);

return statearr_22744;
})();
var statearr_22745_22818 = state_22690__$1;
(statearr_22745_22818[(2)] = null);

(statearr_22745_22818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (23))){
var inst_22608 = (state_22690[(23)]);
var inst_22610 = (state_22690[(26)]);
var inst_22612 = (state_22690[(24)]);
var inst_22604 = (state_22690[(19)]);
var inst_22607 = (state_22690[(25)]);
var inst_22615 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22617 = (function (){var all_files = inst_22604;
var res_SINGLEQUOTE_ = inst_22607;
var res = inst_22608;
var files_not_loaded = inst_22610;
var dependencies_that_loaded = inst_22612;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22608,inst_22610,inst_22612,inst_22604,inst_22607,inst_22615,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22616){
var map__22746 = p__22616;
var map__22746__$1 = ((((!((map__22746 == null)))?((((map__22746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22746):map__22746);
var request_url = cljs.core.get.call(null,map__22746__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22608,inst_22610,inst_22612,inst_22604,inst_22607,inst_22615,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22618 = cljs.core.reverse.call(null,inst_22612);
var inst_22619 = cljs.core.map.call(null,inst_22617,inst_22618);
var inst_22620 = cljs.core.pr_str.call(null,inst_22619);
var inst_22621 = figwheel.client.utils.log.call(null,inst_22620);
var state_22690__$1 = (function (){var statearr_22748 = state_22690;
(statearr_22748[(31)] = inst_22615);

return statearr_22748;
})();
var statearr_22749_22819 = state_22690__$1;
(statearr_22749_22819[(2)] = inst_22621);

(statearr_22749_22819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (35))){
var state_22690__$1 = state_22690;
var statearr_22750_22820 = state_22690__$1;
(statearr_22750_22820[(2)] = true);

(statearr_22750_22820[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (19))){
var inst_22594 = (state_22690[(12)]);
var inst_22600 = figwheel.client.file_reloading.expand_files.call(null,inst_22594);
var state_22690__$1 = state_22690;
var statearr_22751_22821 = state_22690__$1;
(statearr_22751_22821[(2)] = inst_22600);

(statearr_22751_22821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (11))){
var state_22690__$1 = state_22690;
var statearr_22752_22822 = state_22690__$1;
(statearr_22752_22822[(2)] = null);

(statearr_22752_22822[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (9))){
var inst_22583 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
var statearr_22753_22823 = state_22690__$1;
(statearr_22753_22823[(2)] = inst_22583);

(statearr_22753_22823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (5))){
var inst_22553 = (state_22690[(8)]);
var inst_22554 = (state_22690[(10)]);
var inst_22556 = (inst_22554 < inst_22553);
var inst_22557 = inst_22556;
var state_22690__$1 = state_22690;
if(cljs.core.truth_(inst_22557)){
var statearr_22754_22824 = state_22690__$1;
(statearr_22754_22824[(1)] = (7));

} else {
var statearr_22755_22825 = state_22690__$1;
(statearr_22755_22825[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (14))){
var inst_22564 = (state_22690[(22)]);
var inst_22573 = cljs.core.first.call(null,inst_22564);
var inst_22574 = figwheel.client.file_reloading.eval_body.call(null,inst_22573,opts);
var inst_22575 = cljs.core.next.call(null,inst_22564);
var inst_22551 = inst_22575;
var inst_22552 = null;
var inst_22553 = (0);
var inst_22554 = (0);
var state_22690__$1 = (function (){var statearr_22756 = state_22690;
(statearr_22756[(7)] = inst_22551);

(statearr_22756[(8)] = inst_22553);

(statearr_22756[(32)] = inst_22574);

(statearr_22756[(9)] = inst_22552);

(statearr_22756[(10)] = inst_22554);

return statearr_22756;
})();
var statearr_22757_22826 = state_22690__$1;
(statearr_22757_22826[(2)] = null);

(statearr_22757_22826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (45))){
var state_22690__$1 = state_22690;
var statearr_22758_22827 = state_22690__$1;
(statearr_22758_22827[(2)] = null);

(statearr_22758_22827[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (26))){
var inst_22608 = (state_22690[(23)]);
var inst_22610 = (state_22690[(26)]);
var inst_22612 = (state_22690[(24)]);
var inst_22604 = (state_22690[(19)]);
var inst_22607 = (state_22690[(25)]);
var inst_22627 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22629 = (function (){var all_files = inst_22604;
var res_SINGLEQUOTE_ = inst_22607;
var res = inst_22608;
var files_not_loaded = inst_22610;
var dependencies_that_loaded = inst_22612;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22608,inst_22610,inst_22612,inst_22604,inst_22607,inst_22627,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22628){
var map__22759 = p__22628;
var map__22759__$1 = ((((!((map__22759 == null)))?((((map__22759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22759):map__22759);
var namespace = cljs.core.get.call(null,map__22759__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22759__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22608,inst_22610,inst_22612,inst_22604,inst_22607,inst_22627,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22630 = cljs.core.map.call(null,inst_22629,inst_22608);
var inst_22631 = cljs.core.pr_str.call(null,inst_22630);
var inst_22632 = figwheel.client.utils.log.call(null,inst_22631);
var inst_22633 = (function (){var all_files = inst_22604;
var res_SINGLEQUOTE_ = inst_22607;
var res = inst_22608;
var files_not_loaded = inst_22610;
var dependencies_that_loaded = inst_22612;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22608,inst_22610,inst_22612,inst_22604,inst_22607,inst_22627,inst_22629,inst_22630,inst_22631,inst_22632,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22608,inst_22610,inst_22612,inst_22604,inst_22607,inst_22627,inst_22629,inst_22630,inst_22631,inst_22632,state_val_22691,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22634 = setTimeout(inst_22633,(10));
var state_22690__$1 = (function (){var statearr_22761 = state_22690;
(statearr_22761[(33)] = inst_22632);

(statearr_22761[(34)] = inst_22627);

return statearr_22761;
})();
var statearr_22762_22828 = state_22690__$1;
(statearr_22762_22828[(2)] = inst_22634);

(statearr_22762_22828[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (16))){
var state_22690__$1 = state_22690;
var statearr_22763_22829 = state_22690__$1;
(statearr_22763_22829[(2)] = reload_dependents);

(statearr_22763_22829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (38))){
var inst_22644 = (state_22690[(16)]);
var inst_22661 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22644);
var state_22690__$1 = state_22690;
var statearr_22764_22830 = state_22690__$1;
(statearr_22764_22830[(2)] = inst_22661);

(statearr_22764_22830[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (30))){
var state_22690__$1 = state_22690;
var statearr_22765_22831 = state_22690__$1;
(statearr_22765_22831[(2)] = null);

(statearr_22765_22831[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (10))){
var inst_22564 = (state_22690[(22)]);
var inst_22566 = cljs.core.chunked_seq_QMARK_.call(null,inst_22564);
var state_22690__$1 = state_22690;
if(inst_22566){
var statearr_22766_22832 = state_22690__$1;
(statearr_22766_22832[(1)] = (13));

} else {
var statearr_22767_22833 = state_22690__$1;
(statearr_22767_22833[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (18))){
var inst_22598 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
if(cljs.core.truth_(inst_22598)){
var statearr_22768_22834 = state_22690__$1;
(statearr_22768_22834[(1)] = (19));

} else {
var statearr_22769_22835 = state_22690__$1;
(statearr_22769_22835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (42))){
var state_22690__$1 = state_22690;
var statearr_22770_22836 = state_22690__$1;
(statearr_22770_22836[(2)] = null);

(statearr_22770_22836[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (37))){
var inst_22656 = (state_22690[(2)]);
var state_22690__$1 = state_22690;
var statearr_22771_22837 = state_22690__$1;
(statearr_22771_22837[(2)] = inst_22656);

(statearr_22771_22837[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22691 === (8))){
var inst_22551 = (state_22690[(7)]);
var inst_22564 = (state_22690[(22)]);
var inst_22564__$1 = cljs.core.seq.call(null,inst_22551);
var state_22690__$1 = (function (){var statearr_22772 = state_22690;
(statearr_22772[(22)] = inst_22564__$1);

return statearr_22772;
})();
if(inst_22564__$1){
var statearr_22773_22838 = state_22690__$1;
(statearr_22773_22838[(1)] = (10));

} else {
var statearr_22774_22839 = state_22690__$1;
(statearr_22774_22839[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18841__auto__,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto____0 = (function (){
var statearr_22778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22778[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto__);

(statearr_22778[(1)] = (1));

return statearr_22778;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto____1 = (function (state_22690){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_22690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e22779){if((e22779 instanceof Object)){
var ex__18845__auto__ = e22779;
var statearr_22780_22840 = state_22690;
(statearr_22780_22840[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22841 = state_22690;
state_22690 = G__22841;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto__ = function(state_22690){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto____1.call(this,state_22690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18955__auto__ = (function (){var statearr_22781 = f__18954__auto__.call(null);
(statearr_22781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto__);

return statearr_22781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto__,map__22536,map__22536__$1,opts,before_jsload,on_jsload,reload_dependents,map__22537,map__22537__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18953__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22844,link){
var map__22847 = p__22844;
var map__22847__$1 = ((((!((map__22847 == null)))?((((map__22847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22847):map__22847);
var file = cljs.core.get.call(null,map__22847__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22847,map__22847__$1,file){
return (function (p1__22842_SHARP_,p2__22843_SHARP_){
if(cljs.core._EQ_.call(null,p1__22842_SHARP_,p2__22843_SHARP_)){
return p1__22842_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22847,map__22847__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22853){
var map__22854 = p__22853;
var map__22854__$1 = ((((!((map__22854 == null)))?((((map__22854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22854):map__22854);
var match_length = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22849_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22849_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args22856 = [];
var len__17844__auto___22859 = arguments.length;
var i__17845__auto___22860 = (0);
while(true){
if((i__17845__auto___22860 < len__17844__auto___22859)){
args22856.push((arguments[i__17845__auto___22860]));

var G__22861 = (i__17845__auto___22860 + (1));
i__17845__auto___22860 = G__22861;
continue;
} else {
}
break;
}

var G__22858 = args22856.length;
switch (G__22858) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22856.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22863_SHARP_,p2__22864_SHARP_){
return cljs.core.assoc.call(null,p1__22863_SHARP_,cljs.core.get.call(null,p2__22864_SHARP_,key),p2__22864_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22865){
var map__22868 = p__22865;
var map__22868__$1 = ((((!((map__22868 == null)))?((((map__22868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22868):map__22868);
var f_data = map__22868__$1;
var file = cljs.core.get.call(null,map__22868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22870,files_msg){
var map__22877 = p__22870;
var map__22877__$1 = ((((!((map__22877 == null)))?((((map__22877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22877):map__22877);
var opts = map__22877__$1;
var on_cssload = cljs.core.get.call(null,map__22877__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22879_22883 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22880_22884 = null;
var count__22881_22885 = (0);
var i__22882_22886 = (0);
while(true){
if((i__22882_22886 < count__22881_22885)){
var f_22887 = cljs.core._nth.call(null,chunk__22880_22884,i__22882_22886);
figwheel.client.file_reloading.reload_css_file.call(null,f_22887);

var G__22888 = seq__22879_22883;
var G__22889 = chunk__22880_22884;
var G__22890 = count__22881_22885;
var G__22891 = (i__22882_22886 + (1));
seq__22879_22883 = G__22888;
chunk__22880_22884 = G__22889;
count__22881_22885 = G__22890;
i__22882_22886 = G__22891;
continue;
} else {
var temp__4425__auto___22892 = cljs.core.seq.call(null,seq__22879_22883);
if(temp__4425__auto___22892){
var seq__22879_22893__$1 = temp__4425__auto___22892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22879_22893__$1)){
var c__17589__auto___22894 = cljs.core.chunk_first.call(null,seq__22879_22893__$1);
var G__22895 = cljs.core.chunk_rest.call(null,seq__22879_22893__$1);
var G__22896 = c__17589__auto___22894;
var G__22897 = cljs.core.count.call(null,c__17589__auto___22894);
var G__22898 = (0);
seq__22879_22883 = G__22895;
chunk__22880_22884 = G__22896;
count__22881_22885 = G__22897;
i__22882_22886 = G__22898;
continue;
} else {
var f_22899 = cljs.core.first.call(null,seq__22879_22893__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_22899);

var G__22900 = cljs.core.next.call(null,seq__22879_22893__$1);
var G__22901 = null;
var G__22902 = (0);
var G__22903 = (0);
seq__22879_22883 = G__22900;
chunk__22880_22884 = G__22901;
count__22881_22885 = G__22902;
i__22882_22886 = G__22903;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22877,map__22877__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22877,map__22877__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
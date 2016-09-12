// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19153_19167 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19154_19168 = null;
var count__19155_19169 = (0);
var i__19156_19170 = (0);
while(true){
if((i__19156_19170 < count__19155_19169)){
var f_19171 = cljs.core._nth.call(null,chunk__19154_19168,i__19156_19170);
cljs.core.println.call(null,"  ",f_19171);

var G__19172 = seq__19153_19167;
var G__19173 = chunk__19154_19168;
var G__19174 = count__19155_19169;
var G__19175 = (i__19156_19170 + (1));
seq__19153_19167 = G__19172;
chunk__19154_19168 = G__19173;
count__19155_19169 = G__19174;
i__19156_19170 = G__19175;
continue;
} else {
var temp__4425__auto___19176 = cljs.core.seq.call(null,seq__19153_19167);
if(temp__4425__auto___19176){
var seq__19153_19177__$1 = temp__4425__auto___19176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19153_19177__$1)){
var c__17588__auto___19178 = cljs.core.chunk_first.call(null,seq__19153_19177__$1);
var G__19179 = cljs.core.chunk_rest.call(null,seq__19153_19177__$1);
var G__19180 = c__17588__auto___19178;
var G__19181 = cljs.core.count.call(null,c__17588__auto___19178);
var G__19182 = (0);
seq__19153_19167 = G__19179;
chunk__19154_19168 = G__19180;
count__19155_19169 = G__19181;
i__19156_19170 = G__19182;
continue;
} else {
var f_19183 = cljs.core.first.call(null,seq__19153_19177__$1);
cljs.core.println.call(null,"  ",f_19183);

var G__19184 = cljs.core.next.call(null,seq__19153_19177__$1);
var G__19185 = null;
var G__19186 = (0);
var G__19187 = (0);
seq__19153_19167 = G__19184;
chunk__19154_19168 = G__19185;
count__19155_19169 = G__19186;
i__19156_19170 = G__19187;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19188 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16785__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19188);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19188)))?cljs.core.second.call(null,arglists_19188):arglists_19188));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19157 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19158 = null;
var count__19159 = (0);
var i__19160 = (0);
while(true){
if((i__19160 < count__19159)){
var vec__19161 = cljs.core._nth.call(null,chunk__19158,i__19160);
var name = cljs.core.nth.call(null,vec__19161,(0),null);
var map__19162 = cljs.core.nth.call(null,vec__19161,(1),null);
var map__19162__$1 = ((((!((map__19162 == null)))?((((map__19162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19162):map__19162);
var doc = cljs.core.get.call(null,map__19162__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19162__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19189 = seq__19157;
var G__19190 = chunk__19158;
var G__19191 = count__19159;
var G__19192 = (i__19160 + (1));
seq__19157 = G__19189;
chunk__19158 = G__19190;
count__19159 = G__19191;
i__19160 = G__19192;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19157);
if(temp__4425__auto__){
var seq__19157__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19157__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__19157__$1);
var G__19193 = cljs.core.chunk_rest.call(null,seq__19157__$1);
var G__19194 = c__17588__auto__;
var G__19195 = cljs.core.count.call(null,c__17588__auto__);
var G__19196 = (0);
seq__19157 = G__19193;
chunk__19158 = G__19194;
count__19159 = G__19195;
i__19160 = G__19196;
continue;
} else {
var vec__19164 = cljs.core.first.call(null,seq__19157__$1);
var name = cljs.core.nth.call(null,vec__19164,(0),null);
var map__19165 = cljs.core.nth.call(null,vec__19164,(1),null);
var map__19165__$1 = ((((!((map__19165 == null)))?((((map__19165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19165):map__19165);
var doc = cljs.core.get.call(null,map__19165__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__19165__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__19197 = cljs.core.next.call(null,seq__19157__$1);
var G__19198 = null;
var G__19199 = (0);
var G__19200 = (0);
seq__19157 = G__19197;
chunk__19158 = G__19198;
count__19159 = G__19199;
i__19160 = G__19200;
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
});

//# sourceMappingURL=repl.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__20564 = cljs.core._EQ_;
var expr__20565 = (function (){var or__16785__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__20564.call(null,"true",expr__20565))){
return true;
} else {
if(cljs.core.truth_(pred__20564.call(null,"false",expr__20565))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__20565)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20567__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20568__i = 0, G__20568__a = new Array(arguments.length -  0);
while (G__20568__i < G__20568__a.length) {G__20568__a[G__20568__i] = arguments[G__20568__i + 0]; ++G__20568__i;}
  args = new cljs.core.IndexedSeq(G__20568__a,0);
} 
return G__20567__delegate.call(this,args);};
G__20567.cljs$lang$maxFixedArity = 0;
G__20567.cljs$lang$applyTo = (function (arglist__20569){
var args = cljs.core.seq(arglist__20569);
return G__20567__delegate(args);
});
G__20567.cljs$core$IFn$_invoke$arity$variadic = G__20567__delegate;
return G__20567;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__20570){
var map__20573 = p__20570;
var map__20573__$1 = ((((!((map__20573 == null)))?((((map__20573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20573):map__20573);
var message = cljs.core.get.call(null,map__20573__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__20573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16785__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16773__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16773__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16773__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20242__auto___20736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20242__auto___20736,ch){
return (function (){
var f__20243__auto__ = (function (){var switch__20221__auto__ = ((function (c__20242__auto___20736,ch){
return (function (state_20705){
var state_val_20706 = (state_20705[(1)]);
if((state_val_20706 === (7))){
var inst_20701 = (state_20705[(2)]);
var state_20705__$1 = state_20705;
var statearr_20707_20737 = state_20705__$1;
(statearr_20707_20737[(2)] = inst_20701);

(statearr_20707_20737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (1))){
var state_20705__$1 = state_20705;
var statearr_20708_20738 = state_20705__$1;
(statearr_20708_20738[(2)] = null);

(statearr_20708_20738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (4))){
var inst_20658 = (state_20705[(7)]);
var inst_20658__$1 = (state_20705[(2)]);
var state_20705__$1 = (function (){var statearr_20709 = state_20705;
(statearr_20709[(7)] = inst_20658__$1);

return statearr_20709;
})();
if(cljs.core.truth_(inst_20658__$1)){
var statearr_20710_20739 = state_20705__$1;
(statearr_20710_20739[(1)] = (5));

} else {
var statearr_20711_20740 = state_20705__$1;
(statearr_20711_20740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (15))){
var inst_20665 = (state_20705[(8)]);
var inst_20680 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20665);
var inst_20681 = cljs.core.first.call(null,inst_20680);
var inst_20682 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_20681);
var inst_20683 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_20682)].join('');
var inst_20684 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_20683);
var state_20705__$1 = state_20705;
var statearr_20712_20741 = state_20705__$1;
(statearr_20712_20741[(2)] = inst_20684);

(statearr_20712_20741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (13))){
var inst_20689 = (state_20705[(2)]);
var state_20705__$1 = state_20705;
var statearr_20713_20742 = state_20705__$1;
(statearr_20713_20742[(2)] = inst_20689);

(statearr_20713_20742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (6))){
var state_20705__$1 = state_20705;
var statearr_20714_20743 = state_20705__$1;
(statearr_20714_20743[(2)] = null);

(statearr_20714_20743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (17))){
var inst_20687 = (state_20705[(2)]);
var state_20705__$1 = state_20705;
var statearr_20715_20744 = state_20705__$1;
(statearr_20715_20744[(2)] = inst_20687);

(statearr_20715_20744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (3))){
var inst_20703 = (state_20705[(2)]);
var state_20705__$1 = state_20705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20705__$1,inst_20703);
} else {
if((state_val_20706 === (12))){
var inst_20664 = (state_20705[(9)]);
var inst_20678 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_20664,opts);
var state_20705__$1 = state_20705;
if(cljs.core.truth_(inst_20678)){
var statearr_20716_20745 = state_20705__$1;
(statearr_20716_20745[(1)] = (15));

} else {
var statearr_20717_20746 = state_20705__$1;
(statearr_20717_20746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (2))){
var state_20705__$1 = state_20705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20705__$1,(4),ch);
} else {
if((state_val_20706 === (11))){
var inst_20665 = (state_20705[(8)]);
var inst_20670 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20671 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_20665);
var inst_20672 = cljs.core.async.timeout.call(null,(1000));
var inst_20673 = [inst_20671,inst_20672];
var inst_20674 = (new cljs.core.PersistentVector(null,2,(5),inst_20670,inst_20673,null));
var state_20705__$1 = state_20705;
return cljs.core.async.ioc_alts_BANG_.call(null,state_20705__$1,(14),inst_20674);
} else {
if((state_val_20706 === (9))){
var inst_20665 = (state_20705[(8)]);
var inst_20691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_20692 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_20665);
var inst_20693 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_20692);
var inst_20694 = [cljs.core.str("Not loading: "),cljs.core.str(inst_20693)].join('');
var inst_20695 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_20694);
var state_20705__$1 = (function (){var statearr_20718 = state_20705;
(statearr_20718[(10)] = inst_20691);

return statearr_20718;
})();
var statearr_20719_20747 = state_20705__$1;
(statearr_20719_20747[(2)] = inst_20695);

(statearr_20719_20747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (5))){
var inst_20658 = (state_20705[(7)]);
var inst_20660 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_20661 = (new cljs.core.PersistentArrayMap(null,2,inst_20660,null));
var inst_20662 = (new cljs.core.PersistentHashSet(null,inst_20661,null));
var inst_20663 = figwheel.client.focus_msgs.call(null,inst_20662,inst_20658);
var inst_20664 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_20663);
var inst_20665 = cljs.core.first.call(null,inst_20663);
var inst_20666 = figwheel.client.autoload_QMARK_.call(null);
var state_20705__$1 = (function (){var statearr_20720 = state_20705;
(statearr_20720[(8)] = inst_20665);

(statearr_20720[(9)] = inst_20664);

return statearr_20720;
})();
if(cljs.core.truth_(inst_20666)){
var statearr_20721_20748 = state_20705__$1;
(statearr_20721_20748[(1)] = (8));

} else {
var statearr_20722_20749 = state_20705__$1;
(statearr_20722_20749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (14))){
var inst_20676 = (state_20705[(2)]);
var state_20705__$1 = state_20705;
var statearr_20723_20750 = state_20705__$1;
(statearr_20723_20750[(2)] = inst_20676);

(statearr_20723_20750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (16))){
var state_20705__$1 = state_20705;
var statearr_20724_20751 = state_20705__$1;
(statearr_20724_20751[(2)] = null);

(statearr_20724_20751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (10))){
var inst_20697 = (state_20705[(2)]);
var state_20705__$1 = (function (){var statearr_20725 = state_20705;
(statearr_20725[(11)] = inst_20697);

return statearr_20725;
})();
var statearr_20726_20752 = state_20705__$1;
(statearr_20726_20752[(2)] = null);

(statearr_20726_20752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20706 === (8))){
var inst_20664 = (state_20705[(9)]);
var inst_20668 = figwheel.client.reload_file_state_QMARK_.call(null,inst_20664,opts);
var state_20705__$1 = state_20705;
if(cljs.core.truth_(inst_20668)){
var statearr_20727_20753 = state_20705__$1;
(statearr_20727_20753[(1)] = (11));

} else {
var statearr_20728_20754 = state_20705__$1;
(statearr_20728_20754[(1)] = (12));

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
});})(c__20242__auto___20736,ch))
;
return ((function (switch__20221__auto__,c__20242__auto___20736,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20222__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20222__auto____0 = (function (){
var statearr_20732 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20732[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20222__auto__);

(statearr_20732[(1)] = (1));

return statearr_20732;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20222__auto____1 = (function (state_20705){
while(true){
var ret_value__20223__auto__ = (function (){try{while(true){
var result__20224__auto__ = switch__20221__auto__.call(null,state_20705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20224__auto__;
}
break;
}
}catch (e20733){if((e20733 instanceof Object)){
var ex__20225__auto__ = e20733;
var statearr_20734_20755 = state_20705;
(statearr_20734_20755[(5)] = ex__20225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20756 = state_20705;
state_20705 = G__20756;
continue;
} else {
return ret_value__20223__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20222__auto__ = function(state_20705){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20222__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20222__auto____1.call(this,state_20705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20222__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20222__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20222__auto__;
})()
;})(switch__20221__auto__,c__20242__auto___20736,ch))
})();
var state__20244__auto__ = (function (){var statearr_20735 = f__20243__auto__.call(null);
(statearr_20735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20242__auto___20736);

return statearr_20735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20244__auto__);
});})(c__20242__auto___20736,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__20757_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__20757_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_20764 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_20764){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_20762 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_20763 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_20762,_STAR_print_newline_STAR_20763,base_path_20764){
return (function() { 
var G__20765__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__20765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20766__i = 0, G__20766__a = new Array(arguments.length -  0);
while (G__20766__i < G__20766__a.length) {G__20766__a[G__20766__i] = arguments[G__20766__i + 0]; ++G__20766__i;}
  args = new cljs.core.IndexedSeq(G__20766__a,0);
} 
return G__20765__delegate.call(this,args);};
G__20765.cljs$lang$maxFixedArity = 0;
G__20765.cljs$lang$applyTo = (function (arglist__20767){
var args = cljs.core.seq(arglist__20767);
return G__20765__delegate(args);
});
G__20765.cljs$core$IFn$_invoke$arity$variadic = G__20765__delegate;
return G__20765;
})()
;})(_STAR_print_fn_STAR_20762,_STAR_print_newline_STAR_20763,base_path_20764))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_20763;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_20762;
}}catch (e20761){if((e20761 instanceof Error)){
var e = e20761;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_20764], null));
} else {
var e = e20761;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_20764))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__20768){
var map__20775 = p__20768;
var map__20775__$1 = ((((!((map__20775 == null)))?((((map__20775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20775):map__20775);
var opts = map__20775__$1;
var build_id = cljs.core.get.call(null,map__20775__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__20775,map__20775__$1,opts,build_id){
return (function (p__20777){
var vec__20778 = p__20777;
var map__20779 = cljs.core.nth.call(null,vec__20778,(0),null);
var map__20779__$1 = ((((!((map__20779 == null)))?((((map__20779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20779):map__20779);
var msg = map__20779__$1;
var msg_name = cljs.core.get.call(null,map__20779__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20778,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__20778,map__20779,map__20779__$1,msg,msg_name,_,map__20775,map__20775__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__20778,map__20779,map__20779__$1,msg,msg_name,_,map__20775,map__20775__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__20775,map__20775__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__20785){
var vec__20786 = p__20785;
var map__20787 = cljs.core.nth.call(null,vec__20786,(0),null);
var map__20787__$1 = ((((!((map__20787 == null)))?((((map__20787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20787):map__20787);
var msg = map__20787__$1;
var msg_name = cljs.core.get.call(null,map__20787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20786,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__20789){
var map__20799 = p__20789;
var map__20799__$1 = ((((!((map__20799 == null)))?((((map__20799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20799):map__20799);
var on_compile_warning = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__20799__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__20799,map__20799__$1,on_compile_warning,on_compile_fail){
return (function (p__20801){
var vec__20802 = p__20801;
var map__20803 = cljs.core.nth.call(null,vec__20802,(0),null);
var map__20803__$1 = ((((!((map__20803 == null)))?((((map__20803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20803):map__20803);
var msg = map__20803__$1;
var msg_name = cljs.core.get.call(null,map__20803__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__20802,(1));
var pred__20805 = cljs.core._EQ_;
var expr__20806 = msg_name;
if(cljs.core.truth_(pred__20805.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__20806))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__20805.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__20806))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__20799,map__20799__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20242__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20243__auto__ = (function (){var switch__20221__auto__ = ((function (c__20242__auto__,msg_hist,msg_names,msg){
return (function (state_21022){
var state_val_21023 = (state_21022[(1)]);
if((state_val_21023 === (7))){
var inst_20946 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_20946)){
var statearr_21024_21070 = state_21022__$1;
(statearr_21024_21070[(1)] = (8));

} else {
var statearr_21025_21071 = state_21022__$1;
(statearr_21025_21071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (20))){
var inst_21016 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21026_21072 = state_21022__$1;
(statearr_21026_21072[(2)] = inst_21016);

(statearr_21026_21072[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (27))){
var inst_21012 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21027_21073 = state_21022__$1;
(statearr_21027_21073[(2)] = inst_21012);

(statearr_21027_21073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (1))){
var inst_20939 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_20939)){
var statearr_21028_21074 = state_21022__$1;
(statearr_21028_21074[(1)] = (2));

} else {
var statearr_21029_21075 = state_21022__$1;
(statearr_21029_21075[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (24))){
var inst_21014 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21030_21076 = state_21022__$1;
(statearr_21030_21076[(2)] = inst_21014);

(statearr_21030_21076[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (4))){
var inst_21020 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21022__$1,inst_21020);
} else {
if((state_val_21023 === (15))){
var inst_21018 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21031_21077 = state_21022__$1;
(statearr_21031_21077[(2)] = inst_21018);

(statearr_21031_21077[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (21))){
var inst_20977 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21032_21078 = state_21022__$1;
(statearr_21032_21078[(2)] = inst_20977);

(statearr_21032_21078[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (31))){
var inst_21001 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_21001)){
var statearr_21033_21079 = state_21022__$1;
(statearr_21033_21079[(1)] = (34));

} else {
var statearr_21034_21080 = state_21022__$1;
(statearr_21034_21080[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (32))){
var inst_21010 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21035_21081 = state_21022__$1;
(statearr_21035_21081[(2)] = inst_21010);

(statearr_21035_21081[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (33))){
var inst_20999 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21036_21082 = state_21022__$1;
(statearr_21036_21082[(2)] = inst_20999);

(statearr_21036_21082[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (13))){
var inst_20960 = figwheel.client.heads_up.clear.call(null);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(16),inst_20960);
} else {
if((state_val_21023 === (22))){
var inst_20981 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20982 = figwheel.client.heads_up.append_message.call(null,inst_20981);
var state_21022__$1 = state_21022;
var statearr_21037_21083 = state_21022__$1;
(statearr_21037_21083[(2)] = inst_20982);

(statearr_21037_21083[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (36))){
var inst_21008 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21038_21084 = state_21022__$1;
(statearr_21038_21084[(2)] = inst_21008);

(statearr_21038_21084[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (29))){
var inst_20992 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21039_21085 = state_21022__$1;
(statearr_21039_21085[(2)] = inst_20992);

(statearr_21039_21085[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (6))){
var inst_20941 = (state_21022[(7)]);
var state_21022__$1 = state_21022;
var statearr_21040_21086 = state_21022__$1;
(statearr_21040_21086[(2)] = inst_20941);

(statearr_21040_21086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (28))){
var inst_20988 = (state_21022[(2)]);
var inst_20989 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20990 = figwheel.client.heads_up.display_warning.call(null,inst_20989);
var state_21022__$1 = (function (){var statearr_21041 = state_21022;
(statearr_21041[(8)] = inst_20988);

return statearr_21041;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(29),inst_20990);
} else {
if((state_val_21023 === (25))){
var inst_20986 = figwheel.client.heads_up.clear.call(null);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(28),inst_20986);
} else {
if((state_val_21023 === (34))){
var inst_21003 = figwheel.client.heads_up.flash_loaded.call(null);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(37),inst_21003);
} else {
if((state_val_21023 === (17))){
var inst_20968 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21042_21087 = state_21022__$1;
(statearr_21042_21087[(2)] = inst_20968);

(statearr_21042_21087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (3))){
var inst_20958 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_20958)){
var statearr_21043_21088 = state_21022__$1;
(statearr_21043_21088[(1)] = (13));

} else {
var statearr_21044_21089 = state_21022__$1;
(statearr_21044_21089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (12))){
var inst_20954 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21045_21090 = state_21022__$1;
(statearr_21045_21090[(2)] = inst_20954);

(statearr_21045_21090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (2))){
var inst_20941 = (state_21022[(7)]);
var inst_20941__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_21022__$1 = (function (){var statearr_21046 = state_21022;
(statearr_21046[(7)] = inst_20941__$1);

return statearr_21046;
})();
if(cljs.core.truth_(inst_20941__$1)){
var statearr_21047_21091 = state_21022__$1;
(statearr_21047_21091[(1)] = (5));

} else {
var statearr_21048_21092 = state_21022__$1;
(statearr_21048_21092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (23))){
var inst_20984 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_20984)){
var statearr_21049_21093 = state_21022__$1;
(statearr_21049_21093[(1)] = (25));

} else {
var statearr_21050_21094 = state_21022__$1;
(statearr_21050_21094[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (35))){
var state_21022__$1 = state_21022;
var statearr_21051_21095 = state_21022__$1;
(statearr_21051_21095[(2)] = null);

(statearr_21051_21095[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (19))){
var inst_20979 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_20979)){
var statearr_21052_21096 = state_21022__$1;
(statearr_21052_21096[(1)] = (22));

} else {
var statearr_21053_21097 = state_21022__$1;
(statearr_21053_21097[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (11))){
var inst_20950 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21054_21098 = state_21022__$1;
(statearr_21054_21098[(2)] = inst_20950);

(statearr_21054_21098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (9))){
var inst_20952 = figwheel.client.heads_up.clear.call(null);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(12),inst_20952);
} else {
if((state_val_21023 === (5))){
var inst_20943 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_21022__$1 = state_21022;
var statearr_21055_21099 = state_21022__$1;
(statearr_21055_21099[(2)] = inst_20943);

(statearr_21055_21099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (14))){
var inst_20970 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_20970)){
var statearr_21056_21100 = state_21022__$1;
(statearr_21056_21100[(1)] = (18));

} else {
var statearr_21057_21101 = state_21022__$1;
(statearr_21057_21101[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (26))){
var inst_20994 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_21022__$1 = state_21022;
if(cljs.core.truth_(inst_20994)){
var statearr_21058_21102 = state_21022__$1;
(statearr_21058_21102[(1)] = (30));

} else {
var statearr_21059_21103 = state_21022__$1;
(statearr_21059_21103[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (16))){
var inst_20962 = (state_21022[(2)]);
var inst_20963 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20964 = figwheel.client.format_messages.call(null,inst_20963);
var inst_20965 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20966 = figwheel.client.heads_up.display_error.call(null,inst_20964,inst_20965);
var state_21022__$1 = (function (){var statearr_21060 = state_21022;
(statearr_21060[(9)] = inst_20962);

return statearr_21060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(17),inst_20966);
} else {
if((state_val_21023 === (30))){
var inst_20996 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20997 = figwheel.client.heads_up.display_warning.call(null,inst_20996);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(33),inst_20997);
} else {
if((state_val_21023 === (10))){
var inst_20956 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21061_21104 = state_21022__$1;
(statearr_21061_21104[(2)] = inst_20956);

(statearr_21061_21104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (18))){
var inst_20972 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20973 = figwheel.client.format_messages.call(null,inst_20972);
var inst_20974 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_20975 = figwheel.client.heads_up.display_error.call(null,inst_20973,inst_20974);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(21),inst_20975);
} else {
if((state_val_21023 === (37))){
var inst_21005 = (state_21022[(2)]);
var state_21022__$1 = state_21022;
var statearr_21062_21105 = state_21022__$1;
(statearr_21062_21105[(2)] = inst_21005);

(statearr_21062_21105[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21023 === (8))){
var inst_20948 = figwheel.client.heads_up.flash_loaded.call(null);
var state_21022__$1 = state_21022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21022__$1,(11),inst_20948);
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
});})(c__20242__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20221__auto__,c__20242__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto____0 = (function (){
var statearr_21066 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21066[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto__);

(statearr_21066[(1)] = (1));

return statearr_21066;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto____1 = (function (state_21022){
while(true){
var ret_value__20223__auto__ = (function (){try{while(true){
var result__20224__auto__ = switch__20221__auto__.call(null,state_21022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20224__auto__;
}
break;
}
}catch (e21067){if((e21067 instanceof Object)){
var ex__20225__auto__ = e21067;
var statearr_21068_21106 = state_21022;
(statearr_21068_21106[(5)] = ex__20225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21107 = state_21022;
state_21022 = G__21107;
continue;
} else {
return ret_value__20223__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto__ = function(state_21022){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto____1.call(this,state_21022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20222__auto__;
})()
;})(switch__20221__auto__,c__20242__auto__,msg_hist,msg_names,msg))
})();
var state__20244__auto__ = (function (){var statearr_21069 = f__20243__auto__.call(null);
(statearr_21069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20242__auto__);

return statearr_21069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20244__auto__);
});})(c__20242__auto__,msg_hist,msg_names,msg))
);

return c__20242__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20242__auto___21170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20242__auto___21170,ch){
return (function (){
var f__20243__auto__ = (function (){var switch__20221__auto__ = ((function (c__20242__auto___21170,ch){
return (function (state_21153){
var state_val_21154 = (state_21153[(1)]);
if((state_val_21154 === (1))){
var state_21153__$1 = state_21153;
var statearr_21155_21171 = state_21153__$1;
(statearr_21155_21171[(2)] = null);

(statearr_21155_21171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21154 === (2))){
var state_21153__$1 = state_21153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21153__$1,(4),ch);
} else {
if((state_val_21154 === (3))){
var inst_21151 = (state_21153[(2)]);
var state_21153__$1 = state_21153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21153__$1,inst_21151);
} else {
if((state_val_21154 === (4))){
var inst_21141 = (state_21153[(7)]);
var inst_21141__$1 = (state_21153[(2)]);
var state_21153__$1 = (function (){var statearr_21156 = state_21153;
(statearr_21156[(7)] = inst_21141__$1);

return statearr_21156;
})();
if(cljs.core.truth_(inst_21141__$1)){
var statearr_21157_21172 = state_21153__$1;
(statearr_21157_21172[(1)] = (5));

} else {
var statearr_21158_21173 = state_21153__$1;
(statearr_21158_21173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21154 === (5))){
var inst_21141 = (state_21153[(7)]);
var inst_21143 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_21141);
var state_21153__$1 = state_21153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21153__$1,(8),inst_21143);
} else {
if((state_val_21154 === (6))){
var state_21153__$1 = state_21153;
var statearr_21159_21174 = state_21153__$1;
(statearr_21159_21174[(2)] = null);

(statearr_21159_21174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21154 === (7))){
var inst_21149 = (state_21153[(2)]);
var state_21153__$1 = state_21153;
var statearr_21160_21175 = state_21153__$1;
(statearr_21160_21175[(2)] = inst_21149);

(statearr_21160_21175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21154 === (8))){
var inst_21145 = (state_21153[(2)]);
var state_21153__$1 = (function (){var statearr_21161 = state_21153;
(statearr_21161[(8)] = inst_21145);

return statearr_21161;
})();
var statearr_21162_21176 = state_21153__$1;
(statearr_21162_21176[(2)] = null);

(statearr_21162_21176[(1)] = (2));


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
});})(c__20242__auto___21170,ch))
;
return ((function (switch__20221__auto__,c__20242__auto___21170,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20222__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20222__auto____0 = (function (){
var statearr_21166 = [null,null,null,null,null,null,null,null,null];
(statearr_21166[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20222__auto__);

(statearr_21166[(1)] = (1));

return statearr_21166;
});
var figwheel$client$heads_up_plugin_$_state_machine__20222__auto____1 = (function (state_21153){
while(true){
var ret_value__20223__auto__ = (function (){try{while(true){
var result__20224__auto__ = switch__20221__auto__.call(null,state_21153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20224__auto__;
}
break;
}
}catch (e21167){if((e21167 instanceof Object)){
var ex__20225__auto__ = e21167;
var statearr_21168_21177 = state_21153;
(statearr_21168_21177[(5)] = ex__20225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21178 = state_21153;
state_21153 = G__21178;
continue;
} else {
return ret_value__20223__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20222__auto__ = function(state_21153){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20222__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20222__auto____1.call(this,state_21153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20222__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20222__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20222__auto__;
})()
;})(switch__20221__auto__,c__20242__auto___21170,ch))
})();
var state__20244__auto__ = (function (){var statearr_21169 = f__20243__auto__.call(null);
(statearr_21169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20242__auto___21170);

return statearr_21169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20244__auto__);
});})(c__20242__auto___21170,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20242__auto__){
return (function (){
var f__20243__auto__ = (function (){var switch__20221__auto__ = ((function (c__20242__auto__){
return (function (state_21199){
var state_val_21200 = (state_21199[(1)]);
if((state_val_21200 === (1))){
var inst_21194 = cljs.core.async.timeout.call(null,(3000));
var state_21199__$1 = state_21199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21199__$1,(2),inst_21194);
} else {
if((state_val_21200 === (2))){
var inst_21196 = (state_21199[(2)]);
var inst_21197 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_21199__$1 = (function (){var statearr_21201 = state_21199;
(statearr_21201[(7)] = inst_21196);

return statearr_21201;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21199__$1,inst_21197);
} else {
return null;
}
}
});})(c__20242__auto__))
;
return ((function (switch__20221__auto__,c__20242__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20222__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20222__auto____0 = (function (){
var statearr_21205 = [null,null,null,null,null,null,null,null];
(statearr_21205[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20222__auto__);

(statearr_21205[(1)] = (1));

return statearr_21205;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20222__auto____1 = (function (state_21199){
while(true){
var ret_value__20223__auto__ = (function (){try{while(true){
var result__20224__auto__ = switch__20221__auto__.call(null,state_21199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20224__auto__;
}
break;
}
}catch (e21206){if((e21206 instanceof Object)){
var ex__20225__auto__ = e21206;
var statearr_21207_21209 = state_21199;
(statearr_21207_21209[(5)] = ex__20225__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21210 = state_21199;
state_21199 = G__21210;
continue;
} else {
return ret_value__20223__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20222__auto__ = function(state_21199){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20222__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20222__auto____1.call(this,state_21199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20222__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20222__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20222__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20222__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20222__auto__;
})()
;})(switch__20221__auto__,c__20242__auto__))
})();
var state__20244__auto__ = (function (){var statearr_21208 = f__20243__auto__.call(null);
(statearr_21208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20242__auto__);

return statearr_21208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20244__auto__);
});})(c__20242__auto__))
);

return c__20242__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__21211){
var map__21218 = p__21211;
var map__21218__$1 = ((((!((map__21218 == null)))?((((map__21218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21218):map__21218);
var ed = map__21218__$1;
var formatted_exception = cljs.core.get.call(null,map__21218__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__21218__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__21218__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__21220_21224 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__21221_21225 = null;
var count__21222_21226 = (0);
var i__21223_21227 = (0);
while(true){
if((i__21223_21227 < count__21222_21226)){
var msg_21228 = cljs.core._nth.call(null,chunk__21221_21225,i__21223_21227);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21228);

var G__21229 = seq__21220_21224;
var G__21230 = chunk__21221_21225;
var G__21231 = count__21222_21226;
var G__21232 = (i__21223_21227 + (1));
seq__21220_21224 = G__21229;
chunk__21221_21225 = G__21230;
count__21222_21226 = G__21231;
i__21223_21227 = G__21232;
continue;
} else {
var temp__4425__auto___21233 = cljs.core.seq.call(null,seq__21220_21224);
if(temp__4425__auto___21233){
var seq__21220_21234__$1 = temp__4425__auto___21233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21220_21234__$1)){
var c__17588__auto___21235 = cljs.core.chunk_first.call(null,seq__21220_21234__$1);
var G__21236 = cljs.core.chunk_rest.call(null,seq__21220_21234__$1);
var G__21237 = c__17588__auto___21235;
var G__21238 = cljs.core.count.call(null,c__17588__auto___21235);
var G__21239 = (0);
seq__21220_21224 = G__21236;
chunk__21221_21225 = G__21237;
count__21222_21226 = G__21238;
i__21223_21227 = G__21239;
continue;
} else {
var msg_21240 = cljs.core.first.call(null,seq__21220_21234__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_21240);

var G__21241 = cljs.core.next.call(null,seq__21220_21234__$1);
var G__21242 = null;
var G__21243 = (0);
var G__21244 = (0);
seq__21220_21224 = G__21241;
chunk__21221_21225 = G__21242;
count__21222_21226 = G__21243;
i__21223_21227 = G__21244;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__21245){
var map__21248 = p__21245;
var map__21248__$1 = ((((!((map__21248 == null)))?((((map__21248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21248):map__21248);
var w = map__21248__$1;
var message = cljs.core.get.call(null,map__21248__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16773__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16773__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16773__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__21256 = cljs.core.seq.call(null,plugins);
var chunk__21257 = null;
var count__21258 = (0);
var i__21259 = (0);
while(true){
if((i__21259 < count__21258)){
var vec__21260 = cljs.core._nth.call(null,chunk__21257,i__21259);
var k = cljs.core.nth.call(null,vec__21260,(0),null);
var plugin = cljs.core.nth.call(null,vec__21260,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21262 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21256,chunk__21257,count__21258,i__21259,pl_21262,vec__21260,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_21262.call(null,msg_hist);
});})(seq__21256,chunk__21257,count__21258,i__21259,pl_21262,vec__21260,k,plugin))
);
} else {
}

var G__21263 = seq__21256;
var G__21264 = chunk__21257;
var G__21265 = count__21258;
var G__21266 = (i__21259 + (1));
seq__21256 = G__21263;
chunk__21257 = G__21264;
count__21258 = G__21265;
i__21259 = G__21266;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21256);
if(temp__4425__auto__){
var seq__21256__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21256__$1)){
var c__17588__auto__ = cljs.core.chunk_first.call(null,seq__21256__$1);
var G__21267 = cljs.core.chunk_rest.call(null,seq__21256__$1);
var G__21268 = c__17588__auto__;
var G__21269 = cljs.core.count.call(null,c__17588__auto__);
var G__21270 = (0);
seq__21256 = G__21267;
chunk__21257 = G__21268;
count__21258 = G__21269;
i__21259 = G__21270;
continue;
} else {
var vec__21261 = cljs.core.first.call(null,seq__21256__$1);
var k = cljs.core.nth.call(null,vec__21261,(0),null);
var plugin = cljs.core.nth.call(null,vec__21261,(1),null);
if(cljs.core.truth_(plugin)){
var pl_21271 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__21256,chunk__21257,count__21258,i__21259,pl_21271,vec__21261,k,plugin,seq__21256__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_21271.call(null,msg_hist);
});})(seq__21256,chunk__21257,count__21258,i__21259,pl_21271,vec__21261,k,plugin,seq__21256__$1,temp__4425__auto__))
);
} else {
}

var G__21272 = cljs.core.next.call(null,seq__21256__$1);
var G__21273 = null;
var G__21274 = (0);
var G__21275 = (0);
seq__21256 = G__21272;
chunk__21257 = G__21273;
count__21258 = G__21274;
i__21259 = G__21275;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args21276 = [];
var len__17843__auto___21279 = arguments.length;
var i__17844__auto___21280 = (0);
while(true){
if((i__17844__auto___21280 < len__17843__auto___21279)){
args21276.push((arguments[i__17844__auto___21280]));

var G__21281 = (i__17844__auto___21280 + (1));
i__17844__auto___21280 = G__21281;
continue;
} else {
}
break;
}

var G__21278 = args21276.length;
switch (G__21278) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21276.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17850__auto__ = [];
var len__17843__auto___21287 = arguments.length;
var i__17844__auto___21288 = (0);
while(true){
if((i__17844__auto___21288 < len__17843__auto___21287)){
args__17850__auto__.push((arguments[i__17844__auto___21288]));

var G__21289 = (i__17844__auto___21288 + (1));
i__17844__auto___21288 = G__21289;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((0) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17851__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__21284){
var map__21285 = p__21284;
var map__21285__$1 = ((((!((map__21285 == null)))?((((map__21285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21285):map__21285);
var opts = map__21285__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq21283){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21283));
});

//# sourceMappingURL=client.js.map
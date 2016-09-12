// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args18998 = [];
var len__17844__auto___19004 = arguments.length;
var i__17845__auto___19005 = (0);
while(true){
if((i__17845__auto___19005 < len__17844__auto___19004)){
args18998.push((arguments[i__17845__auto___19005]));

var G__19006 = (i__17845__auto___19005 + (1));
i__17845__auto___19005 = G__19006;
continue;
} else {
}
break;
}

var G__19000 = args18998.length;
switch (G__19000) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18998.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19001 = (function (f,blockable,meta19002){
this.f = f;
this.blockable = blockable;
this.meta19002 = meta19002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19003,meta19002__$1){
var self__ = this;
var _19003__$1 = this;
return (new cljs.core.async.t_cljs$core$async19001(self__.f,self__.blockable,meta19002__$1));
});

cljs.core.async.t_cljs$core$async19001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19003){
var self__ = this;
var _19003__$1 = this;
return self__.meta19002;
});

cljs.core.async.t_cljs$core$async19001.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19002","meta19002",-811778135,null)], null);
});

cljs.core.async.t_cljs$core$async19001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19001";

cljs.core.async.t_cljs$core$async19001.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async19001");
});

cljs.core.async.__GT_t_cljs$core$async19001 = (function cljs$core$async$__GT_t_cljs$core$async19001(f__$1,blockable__$1,meta19002){
return (new cljs.core.async.t_cljs$core$async19001(f__$1,blockable__$1,meta19002));
});

}

return (new cljs.core.async.t_cljs$core$async19001(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19010 = [];
var len__17844__auto___19013 = arguments.length;
var i__17845__auto___19014 = (0);
while(true){
if((i__17845__auto___19014 < len__17844__auto___19013)){
args19010.push((arguments[i__17845__auto___19014]));

var G__19015 = (i__17845__auto___19014 + (1));
i__17845__auto___19014 = G__19015;
continue;
} else {
}
break;
}

var G__19012 = args19010.length;
switch (G__19012) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19010.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19017 = [];
var len__17844__auto___19020 = arguments.length;
var i__17845__auto___19021 = (0);
while(true){
if((i__17845__auto___19021 < len__17844__auto___19020)){
args19017.push((arguments[i__17845__auto___19021]));

var G__19022 = (i__17845__auto___19021 + (1));
i__17845__auto___19021 = G__19022;
continue;
} else {
}
break;
}

var G__19019 = args19017.length;
switch (G__19019) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19017.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19024 = [];
var len__17844__auto___19027 = arguments.length;
var i__17845__auto___19028 = (0);
while(true){
if((i__17845__auto___19028 < len__17844__auto___19027)){
args19024.push((arguments[i__17845__auto___19028]));

var G__19029 = (i__17845__auto___19028 + (1));
i__17845__auto___19028 = G__19029;
continue;
} else {
}
break;
}

var G__19026 = args19024.length;
switch (G__19026) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19024.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19031 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19031);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19031,ret){
return (function (){
return fn1.call(null,val_19031);
});})(val_19031,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19032 = [];
var len__17844__auto___19035 = arguments.length;
var i__17845__auto___19036 = (0);
while(true){
if((i__17845__auto___19036 < len__17844__auto___19035)){
args19032.push((arguments[i__17845__auto___19036]));

var G__19037 = (i__17845__auto___19036 + (1));
i__17845__auto___19036 = G__19037;
continue;
} else {
}
break;
}

var G__19034 = args19032.length;
switch (G__19034) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19032.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17689__auto___19039 = n;
var x_19040 = (0);
while(true){
if((x_19040 < n__17689__auto___19039)){
(a[x_19040] = (0));

var G__19041 = (x_19040 + (1));
x_19040 = G__19041;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19042 = (i + (1));
i = G__19042;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19046 = (function (alt_flag,flag,meta19047){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19047 = meta19047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19048,meta19047__$1){
var self__ = this;
var _19048__$1 = this;
return (new cljs.core.async.t_cljs$core$async19046(self__.alt_flag,self__.flag,meta19047__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19048){
var self__ = this;
var _19048__$1 = this;
return self__.meta19047;
});})(flag))
;

cljs.core.async.t_cljs$core$async19046.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19046.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19046.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19047","meta19047",-1444594376,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19046";

cljs.core.async.t_cljs$core$async19046.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async19046");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19046 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19046(alt_flag__$1,flag__$1,meta19047){
return (new cljs.core.async.t_cljs$core$async19046(alt_flag__$1,flag__$1,meta19047));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19046(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19052 = (function (alt_handler,flag,cb,meta19053){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19053 = meta19053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19054,meta19053__$1){
var self__ = this;
var _19054__$1 = this;
return (new cljs.core.async.t_cljs$core$async19052(self__.alt_handler,self__.flag,self__.cb,meta19053__$1));
});

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19054){
var self__ = this;
var _19054__$1 = this;
return self__.meta19053;
});

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19053","meta19053",1014913504,null)], null);
});

cljs.core.async.t_cljs$core$async19052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19052";

cljs.core.async.t_cljs$core$async19052.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async19052");
});

cljs.core.async.__GT_t_cljs$core$async19052 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19052(alt_handler__$1,flag__$1,cb__$1,meta19053){
return (new cljs.core.async.t_cljs$core$async19052(alt_handler__$1,flag__$1,cb__$1,meta19053));
});

}

return (new cljs.core.async.t_cljs$core$async19052(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19055_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19055_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19056_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19056_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16785__auto__ = wport;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19057 = (i + (1));
i = G__19057;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16785__auto__ = ret;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16773__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17851__auto__ = [];
var len__17844__auto___19063 = arguments.length;
var i__17845__auto___19064 = (0);
while(true){
if((i__17845__auto___19064 < len__17844__auto___19063)){
args__17851__auto__.push((arguments[i__17845__auto___19064]));

var G__19065 = (i__17845__auto___19064 + (1));
i__17845__auto___19064 = G__19065;
continue;
} else {
}
break;
}

var argseq__17852__auto__ = ((((1) < args__17851__auto__.length))?(new cljs.core.IndexedSeq(args__17851__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17852__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19060){
var map__19061 = p__19060;
var map__19061__$1 = ((((!((map__19061 == null)))?((((map__19061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19061):map__19061);
var opts = map__19061__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19058){
var G__19059 = cljs.core.first.call(null,seq19058);
var seq19058__$1 = cljs.core.next.call(null,seq19058);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19059,seq19058__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19066 = [];
var len__17844__auto___19116 = arguments.length;
var i__17845__auto___19117 = (0);
while(true){
if((i__17845__auto___19117 < len__17844__auto___19116)){
args19066.push((arguments[i__17845__auto___19117]));

var G__19118 = (i__17845__auto___19117 + (1));
i__17845__auto___19117 = G__19118;
continue;
} else {
}
break;
}

var G__19068 = args19066.length;
switch (G__19068) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19066.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18953__auto___19120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___19120){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___19120){
return (function (state_19092){
var state_val_19093 = (state_19092[(1)]);
if((state_val_19093 === (7))){
var inst_19088 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19094_19121 = state_19092__$1;
(statearr_19094_19121[(2)] = inst_19088);

(statearr_19094_19121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (1))){
var state_19092__$1 = state_19092;
var statearr_19095_19122 = state_19092__$1;
(statearr_19095_19122[(2)] = null);

(statearr_19095_19122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (4))){
var inst_19071 = (state_19092[(7)]);
var inst_19071__$1 = (state_19092[(2)]);
var inst_19072 = (inst_19071__$1 == null);
var state_19092__$1 = (function (){var statearr_19096 = state_19092;
(statearr_19096[(7)] = inst_19071__$1);

return statearr_19096;
})();
if(cljs.core.truth_(inst_19072)){
var statearr_19097_19123 = state_19092__$1;
(statearr_19097_19123[(1)] = (5));

} else {
var statearr_19098_19124 = state_19092__$1;
(statearr_19098_19124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (13))){
var state_19092__$1 = state_19092;
var statearr_19099_19125 = state_19092__$1;
(statearr_19099_19125[(2)] = null);

(statearr_19099_19125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (6))){
var inst_19071 = (state_19092[(7)]);
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19092__$1,(11),to,inst_19071);
} else {
if((state_val_19093 === (3))){
var inst_19090 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19092__$1,inst_19090);
} else {
if((state_val_19093 === (12))){
var state_19092__$1 = state_19092;
var statearr_19100_19126 = state_19092__$1;
(statearr_19100_19126[(2)] = null);

(statearr_19100_19126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (2))){
var state_19092__$1 = state_19092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19092__$1,(4),from);
} else {
if((state_val_19093 === (11))){
var inst_19081 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
if(cljs.core.truth_(inst_19081)){
var statearr_19101_19127 = state_19092__$1;
(statearr_19101_19127[(1)] = (12));

} else {
var statearr_19102_19128 = state_19092__$1;
(statearr_19102_19128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (9))){
var state_19092__$1 = state_19092;
var statearr_19103_19129 = state_19092__$1;
(statearr_19103_19129[(2)] = null);

(statearr_19103_19129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (5))){
var state_19092__$1 = state_19092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19104_19130 = state_19092__$1;
(statearr_19104_19130[(1)] = (8));

} else {
var statearr_19105_19131 = state_19092__$1;
(statearr_19105_19131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (14))){
var inst_19086 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19106_19132 = state_19092__$1;
(statearr_19106_19132[(2)] = inst_19086);

(statearr_19106_19132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (10))){
var inst_19078 = (state_19092[(2)]);
var state_19092__$1 = state_19092;
var statearr_19107_19133 = state_19092__$1;
(statearr_19107_19133[(2)] = inst_19078);

(statearr_19107_19133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19093 === (8))){
var inst_19075 = cljs.core.async.close_BANG_.call(null,to);
var state_19092__$1 = state_19092;
var statearr_19108_19134 = state_19092__$1;
(statearr_19108_19134[(2)] = inst_19075);

(statearr_19108_19134[(1)] = (10));


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
});})(c__18953__auto___19120))
;
return ((function (switch__18841__auto__,c__18953__auto___19120){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_19112 = [null,null,null,null,null,null,null,null];
(statearr_19112[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_19112[(1)] = (1));

return statearr_19112;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_19092){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_19092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e19113){if((e19113 instanceof Object)){
var ex__18845__auto__ = e19113;
var statearr_19114_19135 = state_19092;
(statearr_19114_19135[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19136 = state_19092;
state_19092 = G__19136;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_19092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_19092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___19120))
})();
var state__18955__auto__ = (function (){var statearr_19115 = f__18954__auto__.call(null);
(statearr_19115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___19120);

return statearr_19115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___19120))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19320){
var vec__19321 = p__19320;
var v = cljs.core.nth.call(null,vec__19321,(0),null);
var p = cljs.core.nth.call(null,vec__19321,(1),null);
var job = vec__19321;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18953__auto___19503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___19503,res,vec__19321,v,p,job,jobs,results){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___19503,res,vec__19321,v,p,job,jobs,results){
return (function (state_19326){
var state_val_19327 = (state_19326[(1)]);
if((state_val_19327 === (1))){
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19326__$1,(2),res,v);
} else {
if((state_val_19327 === (2))){
var inst_19323 = (state_19326[(2)]);
var inst_19324 = cljs.core.async.close_BANG_.call(null,res);
var state_19326__$1 = (function (){var statearr_19328 = state_19326;
(statearr_19328[(7)] = inst_19323);

return statearr_19328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19326__$1,inst_19324);
} else {
return null;
}
}
});})(c__18953__auto___19503,res,vec__19321,v,p,job,jobs,results))
;
return ((function (switch__18841__auto__,c__18953__auto___19503,res,vec__19321,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0 = (function (){
var statearr_19332 = [null,null,null,null,null,null,null,null];
(statearr_19332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__);

(statearr_19332[(1)] = (1));

return statearr_19332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1 = (function (state_19326){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_19326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e19333){if((e19333 instanceof Object)){
var ex__18845__auto__ = e19333;
var statearr_19334_19504 = state_19326;
(statearr_19334_19504[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19505 = state_19326;
state_19326 = G__19505;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = function(state_19326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1.call(this,state_19326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___19503,res,vec__19321,v,p,job,jobs,results))
})();
var state__18955__auto__ = (function (){var statearr_19335 = f__18954__auto__.call(null);
(statearr_19335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___19503);

return statearr_19335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___19503,res,vec__19321,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19336){
var vec__19337 = p__19336;
var v = cljs.core.nth.call(null,vec__19337,(0),null);
var p = cljs.core.nth.call(null,vec__19337,(1),null);
var job = vec__19337;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17689__auto___19506 = n;
var __19507 = (0);
while(true){
if((__19507 < n__17689__auto___19506)){
var G__19338_19508 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19338_19508) {
case "compute":
var c__18953__auto___19510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19507,c__18953__auto___19510,G__19338_19508,n__17689__auto___19506,jobs,results,process,async){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (__19507,c__18953__auto___19510,G__19338_19508,n__17689__auto___19506,jobs,results,process,async){
return (function (state_19351){
var state_val_19352 = (state_19351[(1)]);
if((state_val_19352 === (1))){
var state_19351__$1 = state_19351;
var statearr_19353_19511 = state_19351__$1;
(statearr_19353_19511[(2)] = null);

(statearr_19353_19511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (2))){
var state_19351__$1 = state_19351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19351__$1,(4),jobs);
} else {
if((state_val_19352 === (3))){
var inst_19349 = (state_19351[(2)]);
var state_19351__$1 = state_19351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19351__$1,inst_19349);
} else {
if((state_val_19352 === (4))){
var inst_19341 = (state_19351[(2)]);
var inst_19342 = process.call(null,inst_19341);
var state_19351__$1 = state_19351;
if(cljs.core.truth_(inst_19342)){
var statearr_19354_19512 = state_19351__$1;
(statearr_19354_19512[(1)] = (5));

} else {
var statearr_19355_19513 = state_19351__$1;
(statearr_19355_19513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (5))){
var state_19351__$1 = state_19351;
var statearr_19356_19514 = state_19351__$1;
(statearr_19356_19514[(2)] = null);

(statearr_19356_19514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (6))){
var state_19351__$1 = state_19351;
var statearr_19357_19515 = state_19351__$1;
(statearr_19357_19515[(2)] = null);

(statearr_19357_19515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19352 === (7))){
var inst_19347 = (state_19351[(2)]);
var state_19351__$1 = state_19351;
var statearr_19358_19516 = state_19351__$1;
(statearr_19358_19516[(2)] = inst_19347);

(statearr_19358_19516[(1)] = (3));


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
});})(__19507,c__18953__auto___19510,G__19338_19508,n__17689__auto___19506,jobs,results,process,async))
;
return ((function (__19507,switch__18841__auto__,c__18953__auto___19510,G__19338_19508,n__17689__auto___19506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0 = (function (){
var statearr_19362 = [null,null,null,null,null,null,null];
(statearr_19362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__);

(statearr_19362[(1)] = (1));

return statearr_19362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1 = (function (state_19351){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_19351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e19363){if((e19363 instanceof Object)){
var ex__18845__auto__ = e19363;
var statearr_19364_19517 = state_19351;
(statearr_19364_19517[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19518 = state_19351;
state_19351 = G__19518;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = function(state_19351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1.call(this,state_19351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__;
})()
;})(__19507,switch__18841__auto__,c__18953__auto___19510,G__19338_19508,n__17689__auto___19506,jobs,results,process,async))
})();
var state__18955__auto__ = (function (){var statearr_19365 = f__18954__auto__.call(null);
(statearr_19365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___19510);

return statearr_19365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(__19507,c__18953__auto___19510,G__19338_19508,n__17689__auto___19506,jobs,results,process,async))
);


break;
case "async":
var c__18953__auto___19519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19507,c__18953__auto___19519,G__19338_19508,n__17689__auto___19506,jobs,results,process,async){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (__19507,c__18953__auto___19519,G__19338_19508,n__17689__auto___19506,jobs,results,process,async){
return (function (state_19378){
var state_val_19379 = (state_19378[(1)]);
if((state_val_19379 === (1))){
var state_19378__$1 = state_19378;
var statearr_19380_19520 = state_19378__$1;
(statearr_19380_19520[(2)] = null);

(statearr_19380_19520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (2))){
var state_19378__$1 = state_19378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19378__$1,(4),jobs);
} else {
if((state_val_19379 === (3))){
var inst_19376 = (state_19378[(2)]);
var state_19378__$1 = state_19378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19378__$1,inst_19376);
} else {
if((state_val_19379 === (4))){
var inst_19368 = (state_19378[(2)]);
var inst_19369 = async.call(null,inst_19368);
var state_19378__$1 = state_19378;
if(cljs.core.truth_(inst_19369)){
var statearr_19381_19521 = state_19378__$1;
(statearr_19381_19521[(1)] = (5));

} else {
var statearr_19382_19522 = state_19378__$1;
(statearr_19382_19522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (5))){
var state_19378__$1 = state_19378;
var statearr_19383_19523 = state_19378__$1;
(statearr_19383_19523[(2)] = null);

(statearr_19383_19523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (6))){
var state_19378__$1 = state_19378;
var statearr_19384_19524 = state_19378__$1;
(statearr_19384_19524[(2)] = null);

(statearr_19384_19524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19379 === (7))){
var inst_19374 = (state_19378[(2)]);
var state_19378__$1 = state_19378;
var statearr_19385_19525 = state_19378__$1;
(statearr_19385_19525[(2)] = inst_19374);

(statearr_19385_19525[(1)] = (3));


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
});})(__19507,c__18953__auto___19519,G__19338_19508,n__17689__auto___19506,jobs,results,process,async))
;
return ((function (__19507,switch__18841__auto__,c__18953__auto___19519,G__19338_19508,n__17689__auto___19506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0 = (function (){
var statearr_19389 = [null,null,null,null,null,null,null];
(statearr_19389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__);

(statearr_19389[(1)] = (1));

return statearr_19389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1 = (function (state_19378){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_19378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e19390){if((e19390 instanceof Object)){
var ex__18845__auto__ = e19390;
var statearr_19391_19526 = state_19378;
(statearr_19391_19526[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19527 = state_19378;
state_19378 = G__19527;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = function(state_19378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1.call(this,state_19378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__;
})()
;})(__19507,switch__18841__auto__,c__18953__auto___19519,G__19338_19508,n__17689__auto___19506,jobs,results,process,async))
})();
var state__18955__auto__ = (function (){var statearr_19392 = f__18954__auto__.call(null);
(statearr_19392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___19519);

return statearr_19392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(__19507,c__18953__auto___19519,G__19338_19508,n__17689__auto___19506,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19528 = (__19507 + (1));
__19507 = G__19528;
continue;
} else {
}
break;
}

var c__18953__auto___19529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___19529,jobs,results,process,async){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___19529,jobs,results,process,async){
return (function (state_19414){
var state_val_19415 = (state_19414[(1)]);
if((state_val_19415 === (1))){
var state_19414__$1 = state_19414;
var statearr_19416_19530 = state_19414__$1;
(statearr_19416_19530[(2)] = null);

(statearr_19416_19530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (2))){
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19414__$1,(4),from);
} else {
if((state_val_19415 === (3))){
var inst_19412 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19414__$1,inst_19412);
} else {
if((state_val_19415 === (4))){
var inst_19395 = (state_19414[(7)]);
var inst_19395__$1 = (state_19414[(2)]);
var inst_19396 = (inst_19395__$1 == null);
var state_19414__$1 = (function (){var statearr_19417 = state_19414;
(statearr_19417[(7)] = inst_19395__$1);

return statearr_19417;
})();
if(cljs.core.truth_(inst_19396)){
var statearr_19418_19531 = state_19414__$1;
(statearr_19418_19531[(1)] = (5));

} else {
var statearr_19419_19532 = state_19414__$1;
(statearr_19419_19532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (5))){
var inst_19398 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19414__$1 = state_19414;
var statearr_19420_19533 = state_19414__$1;
(statearr_19420_19533[(2)] = inst_19398);

(statearr_19420_19533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (6))){
var inst_19400 = (state_19414[(8)]);
var inst_19395 = (state_19414[(7)]);
var inst_19400__$1 = cljs.core.async.chan.call(null,(1));
var inst_19401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19402 = [inst_19395,inst_19400__$1];
var inst_19403 = (new cljs.core.PersistentVector(null,2,(5),inst_19401,inst_19402,null));
var state_19414__$1 = (function (){var statearr_19421 = state_19414;
(statearr_19421[(8)] = inst_19400__$1);

return statearr_19421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19414__$1,(8),jobs,inst_19403);
} else {
if((state_val_19415 === (7))){
var inst_19410 = (state_19414[(2)]);
var state_19414__$1 = state_19414;
var statearr_19422_19534 = state_19414__$1;
(statearr_19422_19534[(2)] = inst_19410);

(statearr_19422_19534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19415 === (8))){
var inst_19400 = (state_19414[(8)]);
var inst_19405 = (state_19414[(2)]);
var state_19414__$1 = (function (){var statearr_19423 = state_19414;
(statearr_19423[(9)] = inst_19405);

return statearr_19423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19414__$1,(9),results,inst_19400);
} else {
if((state_val_19415 === (9))){
var inst_19407 = (state_19414[(2)]);
var state_19414__$1 = (function (){var statearr_19424 = state_19414;
(statearr_19424[(10)] = inst_19407);

return statearr_19424;
})();
var statearr_19425_19535 = state_19414__$1;
(statearr_19425_19535[(2)] = null);

(statearr_19425_19535[(1)] = (2));


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
});})(c__18953__auto___19529,jobs,results,process,async))
;
return ((function (switch__18841__auto__,c__18953__auto___19529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0 = (function (){
var statearr_19429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__);

(statearr_19429[(1)] = (1));

return statearr_19429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1 = (function (state_19414){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_19414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e19430){if((e19430 instanceof Object)){
var ex__18845__auto__ = e19430;
var statearr_19431_19536 = state_19414;
(statearr_19431_19536[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19537 = state_19414;
state_19414 = G__19537;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = function(state_19414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1.call(this,state_19414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___19529,jobs,results,process,async))
})();
var state__18955__auto__ = (function (){var statearr_19432 = f__18954__auto__.call(null);
(statearr_19432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___19529);

return statearr_19432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___19529,jobs,results,process,async))
);


var c__18953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto__,jobs,results,process,async){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto__,jobs,results,process,async){
return (function (state_19470){
var state_val_19471 = (state_19470[(1)]);
if((state_val_19471 === (7))){
var inst_19466 = (state_19470[(2)]);
var state_19470__$1 = state_19470;
var statearr_19472_19538 = state_19470__$1;
(statearr_19472_19538[(2)] = inst_19466);

(statearr_19472_19538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (20))){
var state_19470__$1 = state_19470;
var statearr_19473_19539 = state_19470__$1;
(statearr_19473_19539[(2)] = null);

(statearr_19473_19539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (1))){
var state_19470__$1 = state_19470;
var statearr_19474_19540 = state_19470__$1;
(statearr_19474_19540[(2)] = null);

(statearr_19474_19540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (4))){
var inst_19435 = (state_19470[(7)]);
var inst_19435__$1 = (state_19470[(2)]);
var inst_19436 = (inst_19435__$1 == null);
var state_19470__$1 = (function (){var statearr_19475 = state_19470;
(statearr_19475[(7)] = inst_19435__$1);

return statearr_19475;
})();
if(cljs.core.truth_(inst_19436)){
var statearr_19476_19541 = state_19470__$1;
(statearr_19476_19541[(1)] = (5));

} else {
var statearr_19477_19542 = state_19470__$1;
(statearr_19477_19542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (15))){
var inst_19448 = (state_19470[(8)]);
var state_19470__$1 = state_19470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19470__$1,(18),to,inst_19448);
} else {
if((state_val_19471 === (21))){
var inst_19461 = (state_19470[(2)]);
var state_19470__$1 = state_19470;
var statearr_19478_19543 = state_19470__$1;
(statearr_19478_19543[(2)] = inst_19461);

(statearr_19478_19543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (13))){
var inst_19463 = (state_19470[(2)]);
var state_19470__$1 = (function (){var statearr_19479 = state_19470;
(statearr_19479[(9)] = inst_19463);

return statearr_19479;
})();
var statearr_19480_19544 = state_19470__$1;
(statearr_19480_19544[(2)] = null);

(statearr_19480_19544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (6))){
var inst_19435 = (state_19470[(7)]);
var state_19470__$1 = state_19470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19470__$1,(11),inst_19435);
} else {
if((state_val_19471 === (17))){
var inst_19456 = (state_19470[(2)]);
var state_19470__$1 = state_19470;
if(cljs.core.truth_(inst_19456)){
var statearr_19481_19545 = state_19470__$1;
(statearr_19481_19545[(1)] = (19));

} else {
var statearr_19482_19546 = state_19470__$1;
(statearr_19482_19546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (3))){
var inst_19468 = (state_19470[(2)]);
var state_19470__$1 = state_19470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19470__$1,inst_19468);
} else {
if((state_val_19471 === (12))){
var inst_19445 = (state_19470[(10)]);
var state_19470__$1 = state_19470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19470__$1,(14),inst_19445);
} else {
if((state_val_19471 === (2))){
var state_19470__$1 = state_19470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19470__$1,(4),results);
} else {
if((state_val_19471 === (19))){
var state_19470__$1 = state_19470;
var statearr_19483_19547 = state_19470__$1;
(statearr_19483_19547[(2)] = null);

(statearr_19483_19547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (11))){
var inst_19445 = (state_19470[(2)]);
var state_19470__$1 = (function (){var statearr_19484 = state_19470;
(statearr_19484[(10)] = inst_19445);

return statearr_19484;
})();
var statearr_19485_19548 = state_19470__$1;
(statearr_19485_19548[(2)] = null);

(statearr_19485_19548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (9))){
var state_19470__$1 = state_19470;
var statearr_19486_19549 = state_19470__$1;
(statearr_19486_19549[(2)] = null);

(statearr_19486_19549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (5))){
var state_19470__$1 = state_19470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19487_19550 = state_19470__$1;
(statearr_19487_19550[(1)] = (8));

} else {
var statearr_19488_19551 = state_19470__$1;
(statearr_19488_19551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (14))){
var inst_19450 = (state_19470[(11)]);
var inst_19448 = (state_19470[(8)]);
var inst_19448__$1 = (state_19470[(2)]);
var inst_19449 = (inst_19448__$1 == null);
var inst_19450__$1 = cljs.core.not.call(null,inst_19449);
var state_19470__$1 = (function (){var statearr_19489 = state_19470;
(statearr_19489[(11)] = inst_19450__$1);

(statearr_19489[(8)] = inst_19448__$1);

return statearr_19489;
})();
if(inst_19450__$1){
var statearr_19490_19552 = state_19470__$1;
(statearr_19490_19552[(1)] = (15));

} else {
var statearr_19491_19553 = state_19470__$1;
(statearr_19491_19553[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (16))){
var inst_19450 = (state_19470[(11)]);
var state_19470__$1 = state_19470;
var statearr_19492_19554 = state_19470__$1;
(statearr_19492_19554[(2)] = inst_19450);

(statearr_19492_19554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (10))){
var inst_19442 = (state_19470[(2)]);
var state_19470__$1 = state_19470;
var statearr_19493_19555 = state_19470__$1;
(statearr_19493_19555[(2)] = inst_19442);

(statearr_19493_19555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (18))){
var inst_19453 = (state_19470[(2)]);
var state_19470__$1 = state_19470;
var statearr_19494_19556 = state_19470__$1;
(statearr_19494_19556[(2)] = inst_19453);

(statearr_19494_19556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19471 === (8))){
var inst_19439 = cljs.core.async.close_BANG_.call(null,to);
var state_19470__$1 = state_19470;
var statearr_19495_19557 = state_19470__$1;
(statearr_19495_19557[(2)] = inst_19439);

(statearr_19495_19557[(1)] = (10));


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
});})(c__18953__auto__,jobs,results,process,async))
;
return ((function (switch__18841__auto__,c__18953__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0 = (function (){
var statearr_19499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__);

(statearr_19499[(1)] = (1));

return statearr_19499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1 = (function (state_19470){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_19470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e19500){if((e19500 instanceof Object)){
var ex__18845__auto__ = e19500;
var statearr_19501_19558 = state_19470;
(statearr_19501_19558[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19559 = state_19470;
state_19470 = G__19559;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__ = function(state_19470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1.call(this,state_19470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto__,jobs,results,process,async))
})();
var state__18955__auto__ = (function (){var statearr_19502 = f__18954__auto__.call(null);
(statearr_19502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto__);

return statearr_19502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto__,jobs,results,process,async))
);

return c__18953__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19560 = [];
var len__17844__auto___19563 = arguments.length;
var i__17845__auto___19564 = (0);
while(true){
if((i__17845__auto___19564 < len__17844__auto___19563)){
args19560.push((arguments[i__17845__auto___19564]));

var G__19565 = (i__17845__auto___19564 + (1));
i__17845__auto___19564 = G__19565;
continue;
} else {
}
break;
}

var G__19562 = args19560.length;
switch (G__19562) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19560.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19567 = [];
var len__17844__auto___19570 = arguments.length;
var i__17845__auto___19571 = (0);
while(true){
if((i__17845__auto___19571 < len__17844__auto___19570)){
args19567.push((arguments[i__17845__auto___19571]));

var G__19572 = (i__17845__auto___19571 + (1));
i__17845__auto___19571 = G__19572;
continue;
} else {
}
break;
}

var G__19569 = args19567.length;
switch (G__19569) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19567.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19574 = [];
var len__17844__auto___19627 = arguments.length;
var i__17845__auto___19628 = (0);
while(true){
if((i__17845__auto___19628 < len__17844__auto___19627)){
args19574.push((arguments[i__17845__auto___19628]));

var G__19629 = (i__17845__auto___19628 + (1));
i__17845__auto___19628 = G__19629;
continue;
} else {
}
break;
}

var G__19576 = args19574.length;
switch (G__19576) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19574.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18953__auto___19631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___19631,tc,fc){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___19631,tc,fc){
return (function (state_19602){
var state_val_19603 = (state_19602[(1)]);
if((state_val_19603 === (7))){
var inst_19598 = (state_19602[(2)]);
var state_19602__$1 = state_19602;
var statearr_19604_19632 = state_19602__$1;
(statearr_19604_19632[(2)] = inst_19598);

(statearr_19604_19632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (1))){
var state_19602__$1 = state_19602;
var statearr_19605_19633 = state_19602__$1;
(statearr_19605_19633[(2)] = null);

(statearr_19605_19633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (4))){
var inst_19579 = (state_19602[(7)]);
var inst_19579__$1 = (state_19602[(2)]);
var inst_19580 = (inst_19579__$1 == null);
var state_19602__$1 = (function (){var statearr_19606 = state_19602;
(statearr_19606[(7)] = inst_19579__$1);

return statearr_19606;
})();
if(cljs.core.truth_(inst_19580)){
var statearr_19607_19634 = state_19602__$1;
(statearr_19607_19634[(1)] = (5));

} else {
var statearr_19608_19635 = state_19602__$1;
(statearr_19608_19635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (13))){
var state_19602__$1 = state_19602;
var statearr_19609_19636 = state_19602__$1;
(statearr_19609_19636[(2)] = null);

(statearr_19609_19636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (6))){
var inst_19579 = (state_19602[(7)]);
var inst_19585 = p.call(null,inst_19579);
var state_19602__$1 = state_19602;
if(cljs.core.truth_(inst_19585)){
var statearr_19610_19637 = state_19602__$1;
(statearr_19610_19637[(1)] = (9));

} else {
var statearr_19611_19638 = state_19602__$1;
(statearr_19611_19638[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (3))){
var inst_19600 = (state_19602[(2)]);
var state_19602__$1 = state_19602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19602__$1,inst_19600);
} else {
if((state_val_19603 === (12))){
var state_19602__$1 = state_19602;
var statearr_19612_19639 = state_19602__$1;
(statearr_19612_19639[(2)] = null);

(statearr_19612_19639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (2))){
var state_19602__$1 = state_19602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19602__$1,(4),ch);
} else {
if((state_val_19603 === (11))){
var inst_19579 = (state_19602[(7)]);
var inst_19589 = (state_19602[(2)]);
var state_19602__$1 = state_19602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19602__$1,(8),inst_19589,inst_19579);
} else {
if((state_val_19603 === (9))){
var state_19602__$1 = state_19602;
var statearr_19613_19640 = state_19602__$1;
(statearr_19613_19640[(2)] = tc);

(statearr_19613_19640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (5))){
var inst_19582 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19583 = cljs.core.async.close_BANG_.call(null,fc);
var state_19602__$1 = (function (){var statearr_19614 = state_19602;
(statearr_19614[(8)] = inst_19582);

return statearr_19614;
})();
var statearr_19615_19641 = state_19602__$1;
(statearr_19615_19641[(2)] = inst_19583);

(statearr_19615_19641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (14))){
var inst_19596 = (state_19602[(2)]);
var state_19602__$1 = state_19602;
var statearr_19616_19642 = state_19602__$1;
(statearr_19616_19642[(2)] = inst_19596);

(statearr_19616_19642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (10))){
var state_19602__$1 = state_19602;
var statearr_19617_19643 = state_19602__$1;
(statearr_19617_19643[(2)] = fc);

(statearr_19617_19643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19603 === (8))){
var inst_19591 = (state_19602[(2)]);
var state_19602__$1 = state_19602;
if(cljs.core.truth_(inst_19591)){
var statearr_19618_19644 = state_19602__$1;
(statearr_19618_19644[(1)] = (12));

} else {
var statearr_19619_19645 = state_19602__$1;
(statearr_19619_19645[(1)] = (13));

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
});})(c__18953__auto___19631,tc,fc))
;
return ((function (switch__18841__auto__,c__18953__auto___19631,tc,fc){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_19623 = [null,null,null,null,null,null,null,null,null];
(statearr_19623[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_19623[(1)] = (1));

return statearr_19623;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_19602){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_19602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e19624){if((e19624 instanceof Object)){
var ex__18845__auto__ = e19624;
var statearr_19625_19646 = state_19602;
(statearr_19625_19646[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19647 = state_19602;
state_19602 = G__19647;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_19602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_19602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___19631,tc,fc))
})();
var state__18955__auto__ = (function (){var statearr_19626 = f__18954__auto__.call(null);
(statearr_19626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___19631);

return statearr_19626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___19631,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto__){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto__){
return (function (state_19711){
var state_val_19712 = (state_19711[(1)]);
if((state_val_19712 === (7))){
var inst_19707 = (state_19711[(2)]);
var state_19711__$1 = state_19711;
var statearr_19713_19734 = state_19711__$1;
(statearr_19713_19734[(2)] = inst_19707);

(statearr_19713_19734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19712 === (1))){
var inst_19691 = init;
var state_19711__$1 = (function (){var statearr_19714 = state_19711;
(statearr_19714[(7)] = inst_19691);

return statearr_19714;
})();
var statearr_19715_19735 = state_19711__$1;
(statearr_19715_19735[(2)] = null);

(statearr_19715_19735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19712 === (4))){
var inst_19694 = (state_19711[(8)]);
var inst_19694__$1 = (state_19711[(2)]);
var inst_19695 = (inst_19694__$1 == null);
var state_19711__$1 = (function (){var statearr_19716 = state_19711;
(statearr_19716[(8)] = inst_19694__$1);

return statearr_19716;
})();
if(cljs.core.truth_(inst_19695)){
var statearr_19717_19736 = state_19711__$1;
(statearr_19717_19736[(1)] = (5));

} else {
var statearr_19718_19737 = state_19711__$1;
(statearr_19718_19737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19712 === (6))){
var inst_19691 = (state_19711[(7)]);
var inst_19694 = (state_19711[(8)]);
var inst_19698 = (state_19711[(9)]);
var inst_19698__$1 = f.call(null,inst_19691,inst_19694);
var inst_19699 = cljs.core.reduced_QMARK_.call(null,inst_19698__$1);
var state_19711__$1 = (function (){var statearr_19719 = state_19711;
(statearr_19719[(9)] = inst_19698__$1);

return statearr_19719;
})();
if(inst_19699){
var statearr_19720_19738 = state_19711__$1;
(statearr_19720_19738[(1)] = (8));

} else {
var statearr_19721_19739 = state_19711__$1;
(statearr_19721_19739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19712 === (3))){
var inst_19709 = (state_19711[(2)]);
var state_19711__$1 = state_19711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19711__$1,inst_19709);
} else {
if((state_val_19712 === (2))){
var state_19711__$1 = state_19711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19711__$1,(4),ch);
} else {
if((state_val_19712 === (9))){
var inst_19698 = (state_19711[(9)]);
var inst_19691 = inst_19698;
var state_19711__$1 = (function (){var statearr_19722 = state_19711;
(statearr_19722[(7)] = inst_19691);

return statearr_19722;
})();
var statearr_19723_19740 = state_19711__$1;
(statearr_19723_19740[(2)] = null);

(statearr_19723_19740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19712 === (5))){
var inst_19691 = (state_19711[(7)]);
var state_19711__$1 = state_19711;
var statearr_19724_19741 = state_19711__$1;
(statearr_19724_19741[(2)] = inst_19691);

(statearr_19724_19741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19712 === (10))){
var inst_19705 = (state_19711[(2)]);
var state_19711__$1 = state_19711;
var statearr_19725_19742 = state_19711__$1;
(statearr_19725_19742[(2)] = inst_19705);

(statearr_19725_19742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19712 === (8))){
var inst_19698 = (state_19711[(9)]);
var inst_19701 = cljs.core.deref.call(null,inst_19698);
var state_19711__$1 = state_19711;
var statearr_19726_19743 = state_19711__$1;
(statearr_19726_19743[(2)] = inst_19701);

(statearr_19726_19743[(1)] = (10));


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
});})(c__18953__auto__))
;
return ((function (switch__18841__auto__,c__18953__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18842__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18842__auto____0 = (function (){
var statearr_19730 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19730[(0)] = cljs$core$async$reduce_$_state_machine__18842__auto__);

(statearr_19730[(1)] = (1));

return statearr_19730;
});
var cljs$core$async$reduce_$_state_machine__18842__auto____1 = (function (state_19711){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_19711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e19731){if((e19731 instanceof Object)){
var ex__18845__auto__ = e19731;
var statearr_19732_19744 = state_19711;
(statearr_19732_19744[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19745 = state_19711;
state_19711 = G__19745;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18842__auto__ = function(state_19711){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18842__auto____1.call(this,state_19711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18842__auto____0;
cljs$core$async$reduce_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18842__auto____1;
return cljs$core$async$reduce_$_state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto__))
})();
var state__18955__auto__ = (function (){var statearr_19733 = f__18954__auto__.call(null);
(statearr_19733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto__);

return statearr_19733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto__))
);

return c__18953__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19746 = [];
var len__17844__auto___19798 = arguments.length;
var i__17845__auto___19799 = (0);
while(true){
if((i__17845__auto___19799 < len__17844__auto___19798)){
args19746.push((arguments[i__17845__auto___19799]));

var G__19800 = (i__17845__auto___19799 + (1));
i__17845__auto___19799 = G__19800;
continue;
} else {
}
break;
}

var G__19748 = args19746.length;
switch (G__19748) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19746.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto__){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto__){
return (function (state_19773){
var state_val_19774 = (state_19773[(1)]);
if((state_val_19774 === (7))){
var inst_19755 = (state_19773[(2)]);
var state_19773__$1 = state_19773;
var statearr_19775_19802 = state_19773__$1;
(statearr_19775_19802[(2)] = inst_19755);

(statearr_19775_19802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (1))){
var inst_19749 = cljs.core.seq.call(null,coll);
var inst_19750 = inst_19749;
var state_19773__$1 = (function (){var statearr_19776 = state_19773;
(statearr_19776[(7)] = inst_19750);

return statearr_19776;
})();
var statearr_19777_19803 = state_19773__$1;
(statearr_19777_19803[(2)] = null);

(statearr_19777_19803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (4))){
var inst_19750 = (state_19773[(7)]);
var inst_19753 = cljs.core.first.call(null,inst_19750);
var state_19773__$1 = state_19773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19773__$1,(7),ch,inst_19753);
} else {
if((state_val_19774 === (13))){
var inst_19767 = (state_19773[(2)]);
var state_19773__$1 = state_19773;
var statearr_19778_19804 = state_19773__$1;
(statearr_19778_19804[(2)] = inst_19767);

(statearr_19778_19804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (6))){
var inst_19758 = (state_19773[(2)]);
var state_19773__$1 = state_19773;
if(cljs.core.truth_(inst_19758)){
var statearr_19779_19805 = state_19773__$1;
(statearr_19779_19805[(1)] = (8));

} else {
var statearr_19780_19806 = state_19773__$1;
(statearr_19780_19806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (3))){
var inst_19771 = (state_19773[(2)]);
var state_19773__$1 = state_19773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19773__$1,inst_19771);
} else {
if((state_val_19774 === (12))){
var state_19773__$1 = state_19773;
var statearr_19781_19807 = state_19773__$1;
(statearr_19781_19807[(2)] = null);

(statearr_19781_19807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (2))){
var inst_19750 = (state_19773[(7)]);
var state_19773__$1 = state_19773;
if(cljs.core.truth_(inst_19750)){
var statearr_19782_19808 = state_19773__$1;
(statearr_19782_19808[(1)] = (4));

} else {
var statearr_19783_19809 = state_19773__$1;
(statearr_19783_19809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (11))){
var inst_19764 = cljs.core.async.close_BANG_.call(null,ch);
var state_19773__$1 = state_19773;
var statearr_19784_19810 = state_19773__$1;
(statearr_19784_19810[(2)] = inst_19764);

(statearr_19784_19810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (9))){
var state_19773__$1 = state_19773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19785_19811 = state_19773__$1;
(statearr_19785_19811[(1)] = (11));

} else {
var statearr_19786_19812 = state_19773__$1;
(statearr_19786_19812[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (5))){
var inst_19750 = (state_19773[(7)]);
var state_19773__$1 = state_19773;
var statearr_19787_19813 = state_19773__$1;
(statearr_19787_19813[(2)] = inst_19750);

(statearr_19787_19813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (10))){
var inst_19769 = (state_19773[(2)]);
var state_19773__$1 = state_19773;
var statearr_19788_19814 = state_19773__$1;
(statearr_19788_19814[(2)] = inst_19769);

(statearr_19788_19814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19774 === (8))){
var inst_19750 = (state_19773[(7)]);
var inst_19760 = cljs.core.next.call(null,inst_19750);
var inst_19750__$1 = inst_19760;
var state_19773__$1 = (function (){var statearr_19789 = state_19773;
(statearr_19789[(7)] = inst_19750__$1);

return statearr_19789;
})();
var statearr_19790_19815 = state_19773__$1;
(statearr_19790_19815[(2)] = null);

(statearr_19790_19815[(1)] = (2));


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
});})(c__18953__auto__))
;
return ((function (switch__18841__auto__,c__18953__auto__){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_19794 = [null,null,null,null,null,null,null,null];
(statearr_19794[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_19794[(1)] = (1));

return statearr_19794;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_19773){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_19773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e19795){if((e19795 instanceof Object)){
var ex__18845__auto__ = e19795;
var statearr_19796_19816 = state_19773;
(statearr_19796_19816[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19817 = state_19773;
state_19773 = G__19817;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_19773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_19773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto__))
})();
var state__18955__auto__ = (function (){var statearr_19797 = f__18954__auto__.call(null);
(statearr_19797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto__);

return statearr_19797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto__))
);

return c__18953__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17441__auto__ = (((_ == null))?null:_);
var m__17442__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,_);
} else {
var m__17442__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17441__auto__ = (((m == null))?null:m);
var m__17442__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17442__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17441__auto__ = (((m == null))?null:m);
var m__17442__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,m,ch);
} else {
var m__17442__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17441__auto__ = (((m == null))?null:m);
var m__17442__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,m);
} else {
var m__17442__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20039 = (function (mult,ch,cs,meta20040){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20040 = meta20040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20041,meta20040__$1){
var self__ = this;
var _20041__$1 = this;
return (new cljs.core.async.t_cljs$core$async20039(self__.mult,self__.ch,self__.cs,meta20040__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20041){
var self__ = this;
var _20041__$1 = this;
return self__.meta20040;
});})(cs))
;

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20039.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20039.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20040","meta20040",-1203757022,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20039";

cljs.core.async.t_cljs$core$async20039.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async20039");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20039 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20039(mult__$1,ch__$1,cs__$1,meta20040){
return (new cljs.core.async.t_cljs$core$async20039(mult__$1,ch__$1,cs__$1,meta20040));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20039(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18953__auto___20260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___20260,cs,m,dchan,dctr,done){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___20260,cs,m,dchan,dctr,done){
return (function (state_20172){
var state_val_20173 = (state_20172[(1)]);
if((state_val_20173 === (7))){
var inst_20168 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
var statearr_20174_20261 = state_20172__$1;
(statearr_20174_20261[(2)] = inst_20168);

(statearr_20174_20261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (20))){
var inst_20073 = (state_20172[(7)]);
var inst_20083 = cljs.core.first.call(null,inst_20073);
var inst_20084 = cljs.core.nth.call(null,inst_20083,(0),null);
var inst_20085 = cljs.core.nth.call(null,inst_20083,(1),null);
var state_20172__$1 = (function (){var statearr_20175 = state_20172;
(statearr_20175[(8)] = inst_20084);

return statearr_20175;
})();
if(cljs.core.truth_(inst_20085)){
var statearr_20176_20262 = state_20172__$1;
(statearr_20176_20262[(1)] = (22));

} else {
var statearr_20177_20263 = state_20172__$1;
(statearr_20177_20263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (27))){
var inst_20115 = (state_20172[(9)]);
var inst_20044 = (state_20172[(10)]);
var inst_20113 = (state_20172[(11)]);
var inst_20120 = (state_20172[(12)]);
var inst_20120__$1 = cljs.core._nth.call(null,inst_20113,inst_20115);
var inst_20121 = cljs.core.async.put_BANG_.call(null,inst_20120__$1,inst_20044,done);
var state_20172__$1 = (function (){var statearr_20178 = state_20172;
(statearr_20178[(12)] = inst_20120__$1);

return statearr_20178;
})();
if(cljs.core.truth_(inst_20121)){
var statearr_20179_20264 = state_20172__$1;
(statearr_20179_20264[(1)] = (30));

} else {
var statearr_20180_20265 = state_20172__$1;
(statearr_20180_20265[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (1))){
var state_20172__$1 = state_20172;
var statearr_20181_20266 = state_20172__$1;
(statearr_20181_20266[(2)] = null);

(statearr_20181_20266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (24))){
var inst_20073 = (state_20172[(7)]);
var inst_20090 = (state_20172[(2)]);
var inst_20091 = cljs.core.next.call(null,inst_20073);
var inst_20053 = inst_20091;
var inst_20054 = null;
var inst_20055 = (0);
var inst_20056 = (0);
var state_20172__$1 = (function (){var statearr_20182 = state_20172;
(statearr_20182[(13)] = inst_20090);

(statearr_20182[(14)] = inst_20053);

(statearr_20182[(15)] = inst_20056);

(statearr_20182[(16)] = inst_20055);

(statearr_20182[(17)] = inst_20054);

return statearr_20182;
})();
var statearr_20183_20267 = state_20172__$1;
(statearr_20183_20267[(2)] = null);

(statearr_20183_20267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (39))){
var state_20172__$1 = state_20172;
var statearr_20187_20268 = state_20172__$1;
(statearr_20187_20268[(2)] = null);

(statearr_20187_20268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (4))){
var inst_20044 = (state_20172[(10)]);
var inst_20044__$1 = (state_20172[(2)]);
var inst_20045 = (inst_20044__$1 == null);
var state_20172__$1 = (function (){var statearr_20188 = state_20172;
(statearr_20188[(10)] = inst_20044__$1);

return statearr_20188;
})();
if(cljs.core.truth_(inst_20045)){
var statearr_20189_20269 = state_20172__$1;
(statearr_20189_20269[(1)] = (5));

} else {
var statearr_20190_20270 = state_20172__$1;
(statearr_20190_20270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (15))){
var inst_20053 = (state_20172[(14)]);
var inst_20056 = (state_20172[(15)]);
var inst_20055 = (state_20172[(16)]);
var inst_20054 = (state_20172[(17)]);
var inst_20069 = (state_20172[(2)]);
var inst_20070 = (inst_20056 + (1));
var tmp20184 = inst_20053;
var tmp20185 = inst_20055;
var tmp20186 = inst_20054;
var inst_20053__$1 = tmp20184;
var inst_20054__$1 = tmp20186;
var inst_20055__$1 = tmp20185;
var inst_20056__$1 = inst_20070;
var state_20172__$1 = (function (){var statearr_20191 = state_20172;
(statearr_20191[(14)] = inst_20053__$1);

(statearr_20191[(15)] = inst_20056__$1);

(statearr_20191[(16)] = inst_20055__$1);

(statearr_20191[(17)] = inst_20054__$1);

(statearr_20191[(18)] = inst_20069);

return statearr_20191;
})();
var statearr_20192_20271 = state_20172__$1;
(statearr_20192_20271[(2)] = null);

(statearr_20192_20271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (21))){
var inst_20094 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
var statearr_20196_20272 = state_20172__$1;
(statearr_20196_20272[(2)] = inst_20094);

(statearr_20196_20272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (31))){
var inst_20120 = (state_20172[(12)]);
var inst_20124 = done.call(null,null);
var inst_20125 = cljs.core.async.untap_STAR_.call(null,m,inst_20120);
var state_20172__$1 = (function (){var statearr_20197 = state_20172;
(statearr_20197[(19)] = inst_20124);

return statearr_20197;
})();
var statearr_20198_20273 = state_20172__$1;
(statearr_20198_20273[(2)] = inst_20125);

(statearr_20198_20273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (32))){
var inst_20112 = (state_20172[(20)]);
var inst_20115 = (state_20172[(9)]);
var inst_20113 = (state_20172[(11)]);
var inst_20114 = (state_20172[(21)]);
var inst_20127 = (state_20172[(2)]);
var inst_20128 = (inst_20115 + (1));
var tmp20193 = inst_20112;
var tmp20194 = inst_20113;
var tmp20195 = inst_20114;
var inst_20112__$1 = tmp20193;
var inst_20113__$1 = tmp20194;
var inst_20114__$1 = tmp20195;
var inst_20115__$1 = inst_20128;
var state_20172__$1 = (function (){var statearr_20199 = state_20172;
(statearr_20199[(20)] = inst_20112__$1);

(statearr_20199[(9)] = inst_20115__$1);

(statearr_20199[(11)] = inst_20113__$1);

(statearr_20199[(21)] = inst_20114__$1);

(statearr_20199[(22)] = inst_20127);

return statearr_20199;
})();
var statearr_20200_20274 = state_20172__$1;
(statearr_20200_20274[(2)] = null);

(statearr_20200_20274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (40))){
var inst_20140 = (state_20172[(23)]);
var inst_20144 = done.call(null,null);
var inst_20145 = cljs.core.async.untap_STAR_.call(null,m,inst_20140);
var state_20172__$1 = (function (){var statearr_20201 = state_20172;
(statearr_20201[(24)] = inst_20144);

return statearr_20201;
})();
var statearr_20202_20275 = state_20172__$1;
(statearr_20202_20275[(2)] = inst_20145);

(statearr_20202_20275[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (33))){
var inst_20131 = (state_20172[(25)]);
var inst_20133 = cljs.core.chunked_seq_QMARK_.call(null,inst_20131);
var state_20172__$1 = state_20172;
if(inst_20133){
var statearr_20203_20276 = state_20172__$1;
(statearr_20203_20276[(1)] = (36));

} else {
var statearr_20204_20277 = state_20172__$1;
(statearr_20204_20277[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (13))){
var inst_20063 = (state_20172[(26)]);
var inst_20066 = cljs.core.async.close_BANG_.call(null,inst_20063);
var state_20172__$1 = state_20172;
var statearr_20205_20278 = state_20172__$1;
(statearr_20205_20278[(2)] = inst_20066);

(statearr_20205_20278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (22))){
var inst_20084 = (state_20172[(8)]);
var inst_20087 = cljs.core.async.close_BANG_.call(null,inst_20084);
var state_20172__$1 = state_20172;
var statearr_20206_20279 = state_20172__$1;
(statearr_20206_20279[(2)] = inst_20087);

(statearr_20206_20279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (36))){
var inst_20131 = (state_20172[(25)]);
var inst_20135 = cljs.core.chunk_first.call(null,inst_20131);
var inst_20136 = cljs.core.chunk_rest.call(null,inst_20131);
var inst_20137 = cljs.core.count.call(null,inst_20135);
var inst_20112 = inst_20136;
var inst_20113 = inst_20135;
var inst_20114 = inst_20137;
var inst_20115 = (0);
var state_20172__$1 = (function (){var statearr_20207 = state_20172;
(statearr_20207[(20)] = inst_20112);

(statearr_20207[(9)] = inst_20115);

(statearr_20207[(11)] = inst_20113);

(statearr_20207[(21)] = inst_20114);

return statearr_20207;
})();
var statearr_20208_20280 = state_20172__$1;
(statearr_20208_20280[(2)] = null);

(statearr_20208_20280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (41))){
var inst_20131 = (state_20172[(25)]);
var inst_20147 = (state_20172[(2)]);
var inst_20148 = cljs.core.next.call(null,inst_20131);
var inst_20112 = inst_20148;
var inst_20113 = null;
var inst_20114 = (0);
var inst_20115 = (0);
var state_20172__$1 = (function (){var statearr_20209 = state_20172;
(statearr_20209[(20)] = inst_20112);

(statearr_20209[(9)] = inst_20115);

(statearr_20209[(11)] = inst_20113);

(statearr_20209[(27)] = inst_20147);

(statearr_20209[(21)] = inst_20114);

return statearr_20209;
})();
var statearr_20210_20281 = state_20172__$1;
(statearr_20210_20281[(2)] = null);

(statearr_20210_20281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (43))){
var state_20172__$1 = state_20172;
var statearr_20211_20282 = state_20172__$1;
(statearr_20211_20282[(2)] = null);

(statearr_20211_20282[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (29))){
var inst_20156 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
var statearr_20212_20283 = state_20172__$1;
(statearr_20212_20283[(2)] = inst_20156);

(statearr_20212_20283[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (44))){
var inst_20165 = (state_20172[(2)]);
var state_20172__$1 = (function (){var statearr_20213 = state_20172;
(statearr_20213[(28)] = inst_20165);

return statearr_20213;
})();
var statearr_20214_20284 = state_20172__$1;
(statearr_20214_20284[(2)] = null);

(statearr_20214_20284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (6))){
var inst_20104 = (state_20172[(29)]);
var inst_20103 = cljs.core.deref.call(null,cs);
var inst_20104__$1 = cljs.core.keys.call(null,inst_20103);
var inst_20105 = cljs.core.count.call(null,inst_20104__$1);
var inst_20106 = cljs.core.reset_BANG_.call(null,dctr,inst_20105);
var inst_20111 = cljs.core.seq.call(null,inst_20104__$1);
var inst_20112 = inst_20111;
var inst_20113 = null;
var inst_20114 = (0);
var inst_20115 = (0);
var state_20172__$1 = (function (){var statearr_20215 = state_20172;
(statearr_20215[(20)] = inst_20112);

(statearr_20215[(9)] = inst_20115);

(statearr_20215[(11)] = inst_20113);

(statearr_20215[(30)] = inst_20106);

(statearr_20215[(21)] = inst_20114);

(statearr_20215[(29)] = inst_20104__$1);

return statearr_20215;
})();
var statearr_20216_20285 = state_20172__$1;
(statearr_20216_20285[(2)] = null);

(statearr_20216_20285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (28))){
var inst_20112 = (state_20172[(20)]);
var inst_20131 = (state_20172[(25)]);
var inst_20131__$1 = cljs.core.seq.call(null,inst_20112);
var state_20172__$1 = (function (){var statearr_20217 = state_20172;
(statearr_20217[(25)] = inst_20131__$1);

return statearr_20217;
})();
if(inst_20131__$1){
var statearr_20218_20286 = state_20172__$1;
(statearr_20218_20286[(1)] = (33));

} else {
var statearr_20219_20287 = state_20172__$1;
(statearr_20219_20287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (25))){
var inst_20115 = (state_20172[(9)]);
var inst_20114 = (state_20172[(21)]);
var inst_20117 = (inst_20115 < inst_20114);
var inst_20118 = inst_20117;
var state_20172__$1 = state_20172;
if(cljs.core.truth_(inst_20118)){
var statearr_20220_20288 = state_20172__$1;
(statearr_20220_20288[(1)] = (27));

} else {
var statearr_20221_20289 = state_20172__$1;
(statearr_20221_20289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (34))){
var state_20172__$1 = state_20172;
var statearr_20222_20290 = state_20172__$1;
(statearr_20222_20290[(2)] = null);

(statearr_20222_20290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (17))){
var state_20172__$1 = state_20172;
var statearr_20223_20291 = state_20172__$1;
(statearr_20223_20291[(2)] = null);

(statearr_20223_20291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (3))){
var inst_20170 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20172__$1,inst_20170);
} else {
if((state_val_20173 === (12))){
var inst_20099 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
var statearr_20224_20292 = state_20172__$1;
(statearr_20224_20292[(2)] = inst_20099);

(statearr_20224_20292[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (2))){
var state_20172__$1 = state_20172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20172__$1,(4),ch);
} else {
if((state_val_20173 === (23))){
var state_20172__$1 = state_20172;
var statearr_20225_20293 = state_20172__$1;
(statearr_20225_20293[(2)] = null);

(statearr_20225_20293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (35))){
var inst_20154 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
var statearr_20226_20294 = state_20172__$1;
(statearr_20226_20294[(2)] = inst_20154);

(statearr_20226_20294[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (19))){
var inst_20073 = (state_20172[(7)]);
var inst_20077 = cljs.core.chunk_first.call(null,inst_20073);
var inst_20078 = cljs.core.chunk_rest.call(null,inst_20073);
var inst_20079 = cljs.core.count.call(null,inst_20077);
var inst_20053 = inst_20078;
var inst_20054 = inst_20077;
var inst_20055 = inst_20079;
var inst_20056 = (0);
var state_20172__$1 = (function (){var statearr_20227 = state_20172;
(statearr_20227[(14)] = inst_20053);

(statearr_20227[(15)] = inst_20056);

(statearr_20227[(16)] = inst_20055);

(statearr_20227[(17)] = inst_20054);

return statearr_20227;
})();
var statearr_20228_20295 = state_20172__$1;
(statearr_20228_20295[(2)] = null);

(statearr_20228_20295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (11))){
var inst_20073 = (state_20172[(7)]);
var inst_20053 = (state_20172[(14)]);
var inst_20073__$1 = cljs.core.seq.call(null,inst_20053);
var state_20172__$1 = (function (){var statearr_20229 = state_20172;
(statearr_20229[(7)] = inst_20073__$1);

return statearr_20229;
})();
if(inst_20073__$1){
var statearr_20230_20296 = state_20172__$1;
(statearr_20230_20296[(1)] = (16));

} else {
var statearr_20231_20297 = state_20172__$1;
(statearr_20231_20297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (9))){
var inst_20101 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
var statearr_20232_20298 = state_20172__$1;
(statearr_20232_20298[(2)] = inst_20101);

(statearr_20232_20298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (5))){
var inst_20051 = cljs.core.deref.call(null,cs);
var inst_20052 = cljs.core.seq.call(null,inst_20051);
var inst_20053 = inst_20052;
var inst_20054 = null;
var inst_20055 = (0);
var inst_20056 = (0);
var state_20172__$1 = (function (){var statearr_20233 = state_20172;
(statearr_20233[(14)] = inst_20053);

(statearr_20233[(15)] = inst_20056);

(statearr_20233[(16)] = inst_20055);

(statearr_20233[(17)] = inst_20054);

return statearr_20233;
})();
var statearr_20234_20299 = state_20172__$1;
(statearr_20234_20299[(2)] = null);

(statearr_20234_20299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (14))){
var state_20172__$1 = state_20172;
var statearr_20235_20300 = state_20172__$1;
(statearr_20235_20300[(2)] = null);

(statearr_20235_20300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (45))){
var inst_20162 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
var statearr_20236_20301 = state_20172__$1;
(statearr_20236_20301[(2)] = inst_20162);

(statearr_20236_20301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (26))){
var inst_20104 = (state_20172[(29)]);
var inst_20158 = (state_20172[(2)]);
var inst_20159 = cljs.core.seq.call(null,inst_20104);
var state_20172__$1 = (function (){var statearr_20237 = state_20172;
(statearr_20237[(31)] = inst_20158);

return statearr_20237;
})();
if(inst_20159){
var statearr_20238_20302 = state_20172__$1;
(statearr_20238_20302[(1)] = (42));

} else {
var statearr_20239_20303 = state_20172__$1;
(statearr_20239_20303[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (16))){
var inst_20073 = (state_20172[(7)]);
var inst_20075 = cljs.core.chunked_seq_QMARK_.call(null,inst_20073);
var state_20172__$1 = state_20172;
if(inst_20075){
var statearr_20240_20304 = state_20172__$1;
(statearr_20240_20304[(1)] = (19));

} else {
var statearr_20241_20305 = state_20172__$1;
(statearr_20241_20305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (38))){
var inst_20151 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
var statearr_20242_20306 = state_20172__$1;
(statearr_20242_20306[(2)] = inst_20151);

(statearr_20242_20306[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (30))){
var state_20172__$1 = state_20172;
var statearr_20243_20307 = state_20172__$1;
(statearr_20243_20307[(2)] = null);

(statearr_20243_20307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (10))){
var inst_20056 = (state_20172[(15)]);
var inst_20054 = (state_20172[(17)]);
var inst_20062 = cljs.core._nth.call(null,inst_20054,inst_20056);
var inst_20063 = cljs.core.nth.call(null,inst_20062,(0),null);
var inst_20064 = cljs.core.nth.call(null,inst_20062,(1),null);
var state_20172__$1 = (function (){var statearr_20244 = state_20172;
(statearr_20244[(26)] = inst_20063);

return statearr_20244;
})();
if(cljs.core.truth_(inst_20064)){
var statearr_20245_20308 = state_20172__$1;
(statearr_20245_20308[(1)] = (13));

} else {
var statearr_20246_20309 = state_20172__$1;
(statearr_20246_20309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (18))){
var inst_20097 = (state_20172[(2)]);
var state_20172__$1 = state_20172;
var statearr_20247_20310 = state_20172__$1;
(statearr_20247_20310[(2)] = inst_20097);

(statearr_20247_20310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (42))){
var state_20172__$1 = state_20172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20172__$1,(45),dchan);
} else {
if((state_val_20173 === (37))){
var inst_20140 = (state_20172[(23)]);
var inst_20044 = (state_20172[(10)]);
var inst_20131 = (state_20172[(25)]);
var inst_20140__$1 = cljs.core.first.call(null,inst_20131);
var inst_20141 = cljs.core.async.put_BANG_.call(null,inst_20140__$1,inst_20044,done);
var state_20172__$1 = (function (){var statearr_20248 = state_20172;
(statearr_20248[(23)] = inst_20140__$1);

return statearr_20248;
})();
if(cljs.core.truth_(inst_20141)){
var statearr_20249_20311 = state_20172__$1;
(statearr_20249_20311[(1)] = (39));

} else {
var statearr_20250_20312 = state_20172__$1;
(statearr_20250_20312[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20173 === (8))){
var inst_20056 = (state_20172[(15)]);
var inst_20055 = (state_20172[(16)]);
var inst_20058 = (inst_20056 < inst_20055);
var inst_20059 = inst_20058;
var state_20172__$1 = state_20172;
if(cljs.core.truth_(inst_20059)){
var statearr_20251_20313 = state_20172__$1;
(statearr_20251_20313[(1)] = (10));

} else {
var statearr_20252_20314 = state_20172__$1;
(statearr_20252_20314[(1)] = (11));

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
});})(c__18953__auto___20260,cs,m,dchan,dctr,done))
;
return ((function (switch__18841__auto__,c__18953__auto___20260,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18842__auto__ = null;
var cljs$core$async$mult_$_state_machine__18842__auto____0 = (function (){
var statearr_20256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20256[(0)] = cljs$core$async$mult_$_state_machine__18842__auto__);

(statearr_20256[(1)] = (1));

return statearr_20256;
});
var cljs$core$async$mult_$_state_machine__18842__auto____1 = (function (state_20172){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_20172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e20257){if((e20257 instanceof Object)){
var ex__18845__auto__ = e20257;
var statearr_20258_20315 = state_20172;
(statearr_20258_20315[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20316 = state_20172;
state_20172 = G__20316;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18842__auto__ = function(state_20172){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18842__auto____1.call(this,state_20172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18842__auto____0;
cljs$core$async$mult_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18842__auto____1;
return cljs$core$async$mult_$_state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___20260,cs,m,dchan,dctr,done))
})();
var state__18955__auto__ = (function (){var statearr_20259 = f__18954__auto__.call(null);
(statearr_20259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___20260);

return statearr_20259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___20260,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20317 = [];
var len__17844__auto___20320 = arguments.length;
var i__17845__auto___20321 = (0);
while(true){
if((i__17845__auto___20321 < len__17844__auto___20320)){
args20317.push((arguments[i__17845__auto___20321]));

var G__20322 = (i__17845__auto___20321 + (1));
i__17845__auto___20321 = G__20322;
continue;
} else {
}
break;
}

var G__20319 = args20317.length;
switch (G__20319) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20317.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17441__auto__ = (((m == null))?null:m);
var m__17442__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,m,ch);
} else {
var m__17442__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17441__auto__ = (((m == null))?null:m);
var m__17442__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,m,ch);
} else {
var m__17442__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17441__auto__ = (((m == null))?null:m);
var m__17442__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,m);
} else {
var m__17442__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17441__auto__ = (((m == null))?null:m);
var m__17442__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,m,state_map);
} else {
var m__17442__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17441__auto__ = (((m == null))?null:m);
var m__17442__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,m,mode);
} else {
var m__17442__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17851__auto__ = [];
var len__17844__auto___20334 = arguments.length;
var i__17845__auto___20335 = (0);
while(true){
if((i__17845__auto___20335 < len__17844__auto___20334)){
args__17851__auto__.push((arguments[i__17845__auto___20335]));

var G__20336 = (i__17845__auto___20335 + (1));
i__17845__auto___20335 = G__20336;
continue;
} else {
}
break;
}

var argseq__17852__auto__ = ((((3) < args__17851__auto__.length))?(new cljs.core.IndexedSeq(args__17851__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17852__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20328){
var map__20329 = p__20328;
var map__20329__$1 = ((((!((map__20329 == null)))?((((map__20329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20329):map__20329);
var opts = map__20329__$1;
var statearr_20331_20337 = state;
(statearr_20331_20337[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20329,map__20329__$1,opts){
return (function (val){
var statearr_20332_20338 = state;
(statearr_20332_20338[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20329,map__20329__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20333_20339 = state;
(statearr_20333_20339[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20324){
var G__20325 = cljs.core.first.call(null,seq20324);
var seq20324__$1 = cljs.core.next.call(null,seq20324);
var G__20326 = cljs.core.first.call(null,seq20324__$1);
var seq20324__$2 = cljs.core.next.call(null,seq20324__$1);
var G__20327 = cljs.core.first.call(null,seq20324__$2);
var seq20324__$3 = cljs.core.next.call(null,seq20324__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20325,G__20326,G__20327,seq20324__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20503 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20504){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20504 = meta20504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20505,meta20504__$1){
var self__ = this;
var _20505__$1 = this;
return (new cljs.core.async.t_cljs$core$async20503(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20504__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20505){
var self__ = this;
var _20505__$1 = this;
return self__.meta20504;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20503.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20503.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20504","meta20504",871466026,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20503";

cljs.core.async.t_cljs$core$async20503.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async20503");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20503 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20503(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20504){
return (new cljs.core.async.t_cljs$core$async20503(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20504));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20503(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18953__auto___20666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___20666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___20666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20603){
var state_val_20604 = (state_20603[(1)]);
if((state_val_20604 === (7))){
var inst_20521 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
var statearr_20605_20667 = state_20603__$1;
(statearr_20605_20667[(2)] = inst_20521);

(statearr_20605_20667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (20))){
var inst_20533 = (state_20603[(7)]);
var state_20603__$1 = state_20603;
var statearr_20606_20668 = state_20603__$1;
(statearr_20606_20668[(2)] = inst_20533);

(statearr_20606_20668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (27))){
var state_20603__$1 = state_20603;
var statearr_20607_20669 = state_20603__$1;
(statearr_20607_20669[(2)] = null);

(statearr_20607_20669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (1))){
var inst_20509 = (state_20603[(8)]);
var inst_20509__$1 = calc_state.call(null);
var inst_20511 = (inst_20509__$1 == null);
var inst_20512 = cljs.core.not.call(null,inst_20511);
var state_20603__$1 = (function (){var statearr_20608 = state_20603;
(statearr_20608[(8)] = inst_20509__$1);

return statearr_20608;
})();
if(inst_20512){
var statearr_20609_20670 = state_20603__$1;
(statearr_20609_20670[(1)] = (2));

} else {
var statearr_20610_20671 = state_20603__$1;
(statearr_20610_20671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (24))){
var inst_20577 = (state_20603[(9)]);
var inst_20563 = (state_20603[(10)]);
var inst_20556 = (state_20603[(11)]);
var inst_20577__$1 = inst_20556.call(null,inst_20563);
var state_20603__$1 = (function (){var statearr_20611 = state_20603;
(statearr_20611[(9)] = inst_20577__$1);

return statearr_20611;
})();
if(cljs.core.truth_(inst_20577__$1)){
var statearr_20612_20672 = state_20603__$1;
(statearr_20612_20672[(1)] = (29));

} else {
var statearr_20613_20673 = state_20603__$1;
(statearr_20613_20673[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (4))){
var inst_20524 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
if(cljs.core.truth_(inst_20524)){
var statearr_20614_20674 = state_20603__$1;
(statearr_20614_20674[(1)] = (8));

} else {
var statearr_20615_20675 = state_20603__$1;
(statearr_20615_20675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (15))){
var inst_20550 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
if(cljs.core.truth_(inst_20550)){
var statearr_20616_20676 = state_20603__$1;
(statearr_20616_20676[(1)] = (19));

} else {
var statearr_20617_20677 = state_20603__$1;
(statearr_20617_20677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (21))){
var inst_20555 = (state_20603[(12)]);
var inst_20555__$1 = (state_20603[(2)]);
var inst_20556 = cljs.core.get.call(null,inst_20555__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20557 = cljs.core.get.call(null,inst_20555__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20558 = cljs.core.get.call(null,inst_20555__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20603__$1 = (function (){var statearr_20618 = state_20603;
(statearr_20618[(13)] = inst_20557);

(statearr_20618[(11)] = inst_20556);

(statearr_20618[(12)] = inst_20555__$1);

return statearr_20618;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20603__$1,(22),inst_20558);
} else {
if((state_val_20604 === (31))){
var inst_20585 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
if(cljs.core.truth_(inst_20585)){
var statearr_20619_20678 = state_20603__$1;
(statearr_20619_20678[(1)] = (32));

} else {
var statearr_20620_20679 = state_20603__$1;
(statearr_20620_20679[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (32))){
var inst_20562 = (state_20603[(14)]);
var state_20603__$1 = state_20603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20603__$1,(35),out,inst_20562);
} else {
if((state_val_20604 === (33))){
var inst_20555 = (state_20603[(12)]);
var inst_20533 = inst_20555;
var state_20603__$1 = (function (){var statearr_20621 = state_20603;
(statearr_20621[(7)] = inst_20533);

return statearr_20621;
})();
var statearr_20622_20680 = state_20603__$1;
(statearr_20622_20680[(2)] = null);

(statearr_20622_20680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (13))){
var inst_20533 = (state_20603[(7)]);
var inst_20540 = inst_20533.cljs$lang$protocol_mask$partition0$;
var inst_20541 = (inst_20540 & (64));
var inst_20542 = inst_20533.cljs$core$ISeq$;
var inst_20543 = (inst_20541) || (inst_20542);
var state_20603__$1 = state_20603;
if(cljs.core.truth_(inst_20543)){
var statearr_20623_20681 = state_20603__$1;
(statearr_20623_20681[(1)] = (16));

} else {
var statearr_20624_20682 = state_20603__$1;
(statearr_20624_20682[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (22))){
var inst_20562 = (state_20603[(14)]);
var inst_20563 = (state_20603[(10)]);
var inst_20561 = (state_20603[(2)]);
var inst_20562__$1 = cljs.core.nth.call(null,inst_20561,(0),null);
var inst_20563__$1 = cljs.core.nth.call(null,inst_20561,(1),null);
var inst_20564 = (inst_20562__$1 == null);
var inst_20565 = cljs.core._EQ_.call(null,inst_20563__$1,change);
var inst_20566 = (inst_20564) || (inst_20565);
var state_20603__$1 = (function (){var statearr_20625 = state_20603;
(statearr_20625[(14)] = inst_20562__$1);

(statearr_20625[(10)] = inst_20563__$1);

return statearr_20625;
})();
if(cljs.core.truth_(inst_20566)){
var statearr_20626_20683 = state_20603__$1;
(statearr_20626_20683[(1)] = (23));

} else {
var statearr_20627_20684 = state_20603__$1;
(statearr_20627_20684[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (36))){
var inst_20555 = (state_20603[(12)]);
var inst_20533 = inst_20555;
var state_20603__$1 = (function (){var statearr_20628 = state_20603;
(statearr_20628[(7)] = inst_20533);

return statearr_20628;
})();
var statearr_20629_20685 = state_20603__$1;
(statearr_20629_20685[(2)] = null);

(statearr_20629_20685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (29))){
var inst_20577 = (state_20603[(9)]);
var state_20603__$1 = state_20603;
var statearr_20630_20686 = state_20603__$1;
(statearr_20630_20686[(2)] = inst_20577);

(statearr_20630_20686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (6))){
var state_20603__$1 = state_20603;
var statearr_20631_20687 = state_20603__$1;
(statearr_20631_20687[(2)] = false);

(statearr_20631_20687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (28))){
var inst_20573 = (state_20603[(2)]);
var inst_20574 = calc_state.call(null);
var inst_20533 = inst_20574;
var state_20603__$1 = (function (){var statearr_20632 = state_20603;
(statearr_20632[(7)] = inst_20533);

(statearr_20632[(15)] = inst_20573);

return statearr_20632;
})();
var statearr_20633_20688 = state_20603__$1;
(statearr_20633_20688[(2)] = null);

(statearr_20633_20688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (25))){
var inst_20599 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
var statearr_20634_20689 = state_20603__$1;
(statearr_20634_20689[(2)] = inst_20599);

(statearr_20634_20689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (34))){
var inst_20597 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
var statearr_20635_20690 = state_20603__$1;
(statearr_20635_20690[(2)] = inst_20597);

(statearr_20635_20690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (17))){
var state_20603__$1 = state_20603;
var statearr_20636_20691 = state_20603__$1;
(statearr_20636_20691[(2)] = false);

(statearr_20636_20691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (3))){
var state_20603__$1 = state_20603;
var statearr_20637_20692 = state_20603__$1;
(statearr_20637_20692[(2)] = false);

(statearr_20637_20692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (12))){
var inst_20601 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20603__$1,inst_20601);
} else {
if((state_val_20604 === (2))){
var inst_20509 = (state_20603[(8)]);
var inst_20514 = inst_20509.cljs$lang$protocol_mask$partition0$;
var inst_20515 = (inst_20514 & (64));
var inst_20516 = inst_20509.cljs$core$ISeq$;
var inst_20517 = (inst_20515) || (inst_20516);
var state_20603__$1 = state_20603;
if(cljs.core.truth_(inst_20517)){
var statearr_20638_20693 = state_20603__$1;
(statearr_20638_20693[(1)] = (5));

} else {
var statearr_20639_20694 = state_20603__$1;
(statearr_20639_20694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (23))){
var inst_20562 = (state_20603[(14)]);
var inst_20568 = (inst_20562 == null);
var state_20603__$1 = state_20603;
if(cljs.core.truth_(inst_20568)){
var statearr_20640_20695 = state_20603__$1;
(statearr_20640_20695[(1)] = (26));

} else {
var statearr_20641_20696 = state_20603__$1;
(statearr_20641_20696[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (35))){
var inst_20588 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
if(cljs.core.truth_(inst_20588)){
var statearr_20642_20697 = state_20603__$1;
(statearr_20642_20697[(1)] = (36));

} else {
var statearr_20643_20698 = state_20603__$1;
(statearr_20643_20698[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (19))){
var inst_20533 = (state_20603[(7)]);
var inst_20552 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20533);
var state_20603__$1 = state_20603;
var statearr_20644_20699 = state_20603__$1;
(statearr_20644_20699[(2)] = inst_20552);

(statearr_20644_20699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (11))){
var inst_20533 = (state_20603[(7)]);
var inst_20537 = (inst_20533 == null);
var inst_20538 = cljs.core.not.call(null,inst_20537);
var state_20603__$1 = state_20603;
if(inst_20538){
var statearr_20645_20700 = state_20603__$1;
(statearr_20645_20700[(1)] = (13));

} else {
var statearr_20646_20701 = state_20603__$1;
(statearr_20646_20701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (9))){
var inst_20509 = (state_20603[(8)]);
var state_20603__$1 = state_20603;
var statearr_20647_20702 = state_20603__$1;
(statearr_20647_20702[(2)] = inst_20509);

(statearr_20647_20702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (5))){
var state_20603__$1 = state_20603;
var statearr_20648_20703 = state_20603__$1;
(statearr_20648_20703[(2)] = true);

(statearr_20648_20703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (14))){
var state_20603__$1 = state_20603;
var statearr_20649_20704 = state_20603__$1;
(statearr_20649_20704[(2)] = false);

(statearr_20649_20704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (26))){
var inst_20563 = (state_20603[(10)]);
var inst_20570 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20563);
var state_20603__$1 = state_20603;
var statearr_20650_20705 = state_20603__$1;
(statearr_20650_20705[(2)] = inst_20570);

(statearr_20650_20705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (16))){
var state_20603__$1 = state_20603;
var statearr_20651_20706 = state_20603__$1;
(statearr_20651_20706[(2)] = true);

(statearr_20651_20706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (38))){
var inst_20593 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
var statearr_20652_20707 = state_20603__$1;
(statearr_20652_20707[(2)] = inst_20593);

(statearr_20652_20707[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (30))){
var inst_20563 = (state_20603[(10)]);
var inst_20557 = (state_20603[(13)]);
var inst_20556 = (state_20603[(11)]);
var inst_20580 = cljs.core.empty_QMARK_.call(null,inst_20556);
var inst_20581 = inst_20557.call(null,inst_20563);
var inst_20582 = cljs.core.not.call(null,inst_20581);
var inst_20583 = (inst_20580) && (inst_20582);
var state_20603__$1 = state_20603;
var statearr_20653_20708 = state_20603__$1;
(statearr_20653_20708[(2)] = inst_20583);

(statearr_20653_20708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (10))){
var inst_20509 = (state_20603[(8)]);
var inst_20529 = (state_20603[(2)]);
var inst_20530 = cljs.core.get.call(null,inst_20529,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20531 = cljs.core.get.call(null,inst_20529,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20532 = cljs.core.get.call(null,inst_20529,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20533 = inst_20509;
var state_20603__$1 = (function (){var statearr_20654 = state_20603;
(statearr_20654[(7)] = inst_20533);

(statearr_20654[(16)] = inst_20530);

(statearr_20654[(17)] = inst_20531);

(statearr_20654[(18)] = inst_20532);

return statearr_20654;
})();
var statearr_20655_20709 = state_20603__$1;
(statearr_20655_20709[(2)] = null);

(statearr_20655_20709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (18))){
var inst_20547 = (state_20603[(2)]);
var state_20603__$1 = state_20603;
var statearr_20656_20710 = state_20603__$1;
(statearr_20656_20710[(2)] = inst_20547);

(statearr_20656_20710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (37))){
var state_20603__$1 = state_20603;
var statearr_20657_20711 = state_20603__$1;
(statearr_20657_20711[(2)] = null);

(statearr_20657_20711[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20604 === (8))){
var inst_20509 = (state_20603[(8)]);
var inst_20526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20509);
var state_20603__$1 = state_20603;
var statearr_20658_20712 = state_20603__$1;
(statearr_20658_20712[(2)] = inst_20526);

(statearr_20658_20712[(1)] = (10));


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
});})(c__18953__auto___20666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18841__auto__,c__18953__auto___20666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18842__auto__ = null;
var cljs$core$async$mix_$_state_machine__18842__auto____0 = (function (){
var statearr_20662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20662[(0)] = cljs$core$async$mix_$_state_machine__18842__auto__);

(statearr_20662[(1)] = (1));

return statearr_20662;
});
var cljs$core$async$mix_$_state_machine__18842__auto____1 = (function (state_20603){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_20603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e20663){if((e20663 instanceof Object)){
var ex__18845__auto__ = e20663;
var statearr_20664_20713 = state_20603;
(statearr_20664_20713[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20714 = state_20603;
state_20603 = G__20714;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18842__auto__ = function(state_20603){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18842__auto____1.call(this,state_20603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18842__auto____0;
cljs$core$async$mix_$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18842__auto____1;
return cljs$core$async$mix_$_state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___20666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18955__auto__ = (function (){var statearr_20665 = f__18954__auto__.call(null);
(statearr_20665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___20666);

return statearr_20665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___20666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17441__auto__ = (((p == null))?null:p);
var m__17442__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17442__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17441__auto__ = (((p == null))?null:p);
var m__17442__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,p,v,ch);
} else {
var m__17442__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20715 = [];
var len__17844__auto___20718 = arguments.length;
var i__17845__auto___20719 = (0);
while(true){
if((i__17845__auto___20719 < len__17844__auto___20718)){
args20715.push((arguments[i__17845__auto___20719]));

var G__20720 = (i__17845__auto___20719 + (1));
i__17845__auto___20719 = G__20720;
continue;
} else {
}
break;
}

var G__20717 = args20715.length;
switch (G__20717) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20715.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17441__auto__ = (((p == null))?null:p);
var m__17442__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,p);
} else {
var m__17442__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17441__auto__ = (((p == null))?null:p);
var m__17442__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17441__auto__)]);
if(!((m__17442__auto__ == null))){
return m__17442__auto__.call(null,p,v);
} else {
var m__17442__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17442__auto____$1 == null))){
return m__17442__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20723 = [];
var len__17844__auto___20848 = arguments.length;
var i__17845__auto___20849 = (0);
while(true){
if((i__17845__auto___20849 < len__17844__auto___20848)){
args20723.push((arguments[i__17845__auto___20849]));

var G__20850 = (i__17845__auto___20849 + (1));
i__17845__auto___20849 = G__20850;
continue;
} else {
}
break;
}

var G__20725 = args20723.length;
switch (G__20725) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20723.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16785__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16785__auto__,mults){
return (function (p1__20722_SHARP_){
if(cljs.core.truth_(p1__20722_SHARP_.call(null,topic))){
return p1__20722_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20722_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16785__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20726 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20727){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20727 = meta20727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20728,meta20727__$1){
var self__ = this;
var _20728__$1 = this;
return (new cljs.core.async.t_cljs$core$async20726(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20727__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20728){
var self__ = this;
var _20728__$1 = this;
return self__.meta20727;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20726.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20726.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20726.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20726.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20726.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20727","meta20727",60264882,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20726";

cljs.core.async.t_cljs$core$async20726.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async20726");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20726 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20727){
return (new cljs.core.async.t_cljs$core$async20726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20727));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20726(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18953__auto___20852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___20852,mults,ensure_mult,p){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___20852,mults,ensure_mult,p){
return (function (state_20800){
var state_val_20801 = (state_20800[(1)]);
if((state_val_20801 === (7))){
var inst_20796 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20802_20853 = state_20800__$1;
(statearr_20802_20853[(2)] = inst_20796);

(statearr_20802_20853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (20))){
var state_20800__$1 = state_20800;
var statearr_20803_20854 = state_20800__$1;
(statearr_20803_20854[(2)] = null);

(statearr_20803_20854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (1))){
var state_20800__$1 = state_20800;
var statearr_20804_20855 = state_20800__$1;
(statearr_20804_20855[(2)] = null);

(statearr_20804_20855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (24))){
var inst_20779 = (state_20800[(7)]);
var inst_20788 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20779);
var state_20800__$1 = state_20800;
var statearr_20805_20856 = state_20800__$1;
(statearr_20805_20856[(2)] = inst_20788);

(statearr_20805_20856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (4))){
var inst_20731 = (state_20800[(8)]);
var inst_20731__$1 = (state_20800[(2)]);
var inst_20732 = (inst_20731__$1 == null);
var state_20800__$1 = (function (){var statearr_20806 = state_20800;
(statearr_20806[(8)] = inst_20731__$1);

return statearr_20806;
})();
if(cljs.core.truth_(inst_20732)){
var statearr_20807_20857 = state_20800__$1;
(statearr_20807_20857[(1)] = (5));

} else {
var statearr_20808_20858 = state_20800__$1;
(statearr_20808_20858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (15))){
var inst_20773 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20809_20859 = state_20800__$1;
(statearr_20809_20859[(2)] = inst_20773);

(statearr_20809_20859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (21))){
var inst_20793 = (state_20800[(2)]);
var state_20800__$1 = (function (){var statearr_20810 = state_20800;
(statearr_20810[(9)] = inst_20793);

return statearr_20810;
})();
var statearr_20811_20860 = state_20800__$1;
(statearr_20811_20860[(2)] = null);

(statearr_20811_20860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (13))){
var inst_20755 = (state_20800[(10)]);
var inst_20757 = cljs.core.chunked_seq_QMARK_.call(null,inst_20755);
var state_20800__$1 = state_20800;
if(inst_20757){
var statearr_20812_20861 = state_20800__$1;
(statearr_20812_20861[(1)] = (16));

} else {
var statearr_20813_20862 = state_20800__$1;
(statearr_20813_20862[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (22))){
var inst_20785 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
if(cljs.core.truth_(inst_20785)){
var statearr_20814_20863 = state_20800__$1;
(statearr_20814_20863[(1)] = (23));

} else {
var statearr_20815_20864 = state_20800__$1;
(statearr_20815_20864[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (6))){
var inst_20781 = (state_20800[(11)]);
var inst_20731 = (state_20800[(8)]);
var inst_20779 = (state_20800[(7)]);
var inst_20779__$1 = topic_fn.call(null,inst_20731);
var inst_20780 = cljs.core.deref.call(null,mults);
var inst_20781__$1 = cljs.core.get.call(null,inst_20780,inst_20779__$1);
var state_20800__$1 = (function (){var statearr_20816 = state_20800;
(statearr_20816[(11)] = inst_20781__$1);

(statearr_20816[(7)] = inst_20779__$1);

return statearr_20816;
})();
if(cljs.core.truth_(inst_20781__$1)){
var statearr_20817_20865 = state_20800__$1;
(statearr_20817_20865[(1)] = (19));

} else {
var statearr_20818_20866 = state_20800__$1;
(statearr_20818_20866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (25))){
var inst_20790 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20819_20867 = state_20800__$1;
(statearr_20819_20867[(2)] = inst_20790);

(statearr_20819_20867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (17))){
var inst_20755 = (state_20800[(10)]);
var inst_20764 = cljs.core.first.call(null,inst_20755);
var inst_20765 = cljs.core.async.muxch_STAR_.call(null,inst_20764);
var inst_20766 = cljs.core.async.close_BANG_.call(null,inst_20765);
var inst_20767 = cljs.core.next.call(null,inst_20755);
var inst_20741 = inst_20767;
var inst_20742 = null;
var inst_20743 = (0);
var inst_20744 = (0);
var state_20800__$1 = (function (){var statearr_20820 = state_20800;
(statearr_20820[(12)] = inst_20766);

(statearr_20820[(13)] = inst_20742);

(statearr_20820[(14)] = inst_20744);

(statearr_20820[(15)] = inst_20741);

(statearr_20820[(16)] = inst_20743);

return statearr_20820;
})();
var statearr_20821_20868 = state_20800__$1;
(statearr_20821_20868[(2)] = null);

(statearr_20821_20868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (3))){
var inst_20798 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20800__$1,inst_20798);
} else {
if((state_val_20801 === (12))){
var inst_20775 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20822_20869 = state_20800__$1;
(statearr_20822_20869[(2)] = inst_20775);

(statearr_20822_20869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (2))){
var state_20800__$1 = state_20800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20800__$1,(4),ch);
} else {
if((state_val_20801 === (23))){
var state_20800__$1 = state_20800;
var statearr_20823_20870 = state_20800__$1;
(statearr_20823_20870[(2)] = null);

(statearr_20823_20870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (19))){
var inst_20781 = (state_20800[(11)]);
var inst_20731 = (state_20800[(8)]);
var inst_20783 = cljs.core.async.muxch_STAR_.call(null,inst_20781);
var state_20800__$1 = state_20800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20800__$1,(22),inst_20783,inst_20731);
} else {
if((state_val_20801 === (11))){
var inst_20755 = (state_20800[(10)]);
var inst_20741 = (state_20800[(15)]);
var inst_20755__$1 = cljs.core.seq.call(null,inst_20741);
var state_20800__$1 = (function (){var statearr_20824 = state_20800;
(statearr_20824[(10)] = inst_20755__$1);

return statearr_20824;
})();
if(inst_20755__$1){
var statearr_20825_20871 = state_20800__$1;
(statearr_20825_20871[(1)] = (13));

} else {
var statearr_20826_20872 = state_20800__$1;
(statearr_20826_20872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (9))){
var inst_20777 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20827_20873 = state_20800__$1;
(statearr_20827_20873[(2)] = inst_20777);

(statearr_20827_20873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (5))){
var inst_20738 = cljs.core.deref.call(null,mults);
var inst_20739 = cljs.core.vals.call(null,inst_20738);
var inst_20740 = cljs.core.seq.call(null,inst_20739);
var inst_20741 = inst_20740;
var inst_20742 = null;
var inst_20743 = (0);
var inst_20744 = (0);
var state_20800__$1 = (function (){var statearr_20828 = state_20800;
(statearr_20828[(13)] = inst_20742);

(statearr_20828[(14)] = inst_20744);

(statearr_20828[(15)] = inst_20741);

(statearr_20828[(16)] = inst_20743);

return statearr_20828;
})();
var statearr_20829_20874 = state_20800__$1;
(statearr_20829_20874[(2)] = null);

(statearr_20829_20874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (14))){
var state_20800__$1 = state_20800;
var statearr_20833_20875 = state_20800__$1;
(statearr_20833_20875[(2)] = null);

(statearr_20833_20875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (16))){
var inst_20755 = (state_20800[(10)]);
var inst_20759 = cljs.core.chunk_first.call(null,inst_20755);
var inst_20760 = cljs.core.chunk_rest.call(null,inst_20755);
var inst_20761 = cljs.core.count.call(null,inst_20759);
var inst_20741 = inst_20760;
var inst_20742 = inst_20759;
var inst_20743 = inst_20761;
var inst_20744 = (0);
var state_20800__$1 = (function (){var statearr_20834 = state_20800;
(statearr_20834[(13)] = inst_20742);

(statearr_20834[(14)] = inst_20744);

(statearr_20834[(15)] = inst_20741);

(statearr_20834[(16)] = inst_20743);

return statearr_20834;
})();
var statearr_20835_20876 = state_20800__$1;
(statearr_20835_20876[(2)] = null);

(statearr_20835_20876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (10))){
var inst_20742 = (state_20800[(13)]);
var inst_20744 = (state_20800[(14)]);
var inst_20741 = (state_20800[(15)]);
var inst_20743 = (state_20800[(16)]);
var inst_20749 = cljs.core._nth.call(null,inst_20742,inst_20744);
var inst_20750 = cljs.core.async.muxch_STAR_.call(null,inst_20749);
var inst_20751 = cljs.core.async.close_BANG_.call(null,inst_20750);
var inst_20752 = (inst_20744 + (1));
var tmp20830 = inst_20742;
var tmp20831 = inst_20741;
var tmp20832 = inst_20743;
var inst_20741__$1 = tmp20831;
var inst_20742__$1 = tmp20830;
var inst_20743__$1 = tmp20832;
var inst_20744__$1 = inst_20752;
var state_20800__$1 = (function (){var statearr_20836 = state_20800;
(statearr_20836[(17)] = inst_20751);

(statearr_20836[(13)] = inst_20742__$1);

(statearr_20836[(14)] = inst_20744__$1);

(statearr_20836[(15)] = inst_20741__$1);

(statearr_20836[(16)] = inst_20743__$1);

return statearr_20836;
})();
var statearr_20837_20877 = state_20800__$1;
(statearr_20837_20877[(2)] = null);

(statearr_20837_20877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (18))){
var inst_20770 = (state_20800[(2)]);
var state_20800__$1 = state_20800;
var statearr_20838_20878 = state_20800__$1;
(statearr_20838_20878[(2)] = inst_20770);

(statearr_20838_20878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20801 === (8))){
var inst_20744 = (state_20800[(14)]);
var inst_20743 = (state_20800[(16)]);
var inst_20746 = (inst_20744 < inst_20743);
var inst_20747 = inst_20746;
var state_20800__$1 = state_20800;
if(cljs.core.truth_(inst_20747)){
var statearr_20839_20879 = state_20800__$1;
(statearr_20839_20879[(1)] = (10));

} else {
var statearr_20840_20880 = state_20800__$1;
(statearr_20840_20880[(1)] = (11));

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
});})(c__18953__auto___20852,mults,ensure_mult,p))
;
return ((function (switch__18841__auto__,c__18953__auto___20852,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_20844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20844[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_20844[(1)] = (1));

return statearr_20844;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_20800){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_20800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e20845){if((e20845 instanceof Object)){
var ex__18845__auto__ = e20845;
var statearr_20846_20881 = state_20800;
(statearr_20846_20881[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20882 = state_20800;
state_20800 = G__20882;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_20800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_20800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___20852,mults,ensure_mult,p))
})();
var state__18955__auto__ = (function (){var statearr_20847 = f__18954__auto__.call(null);
(statearr_20847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___20852);

return statearr_20847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___20852,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20883 = [];
var len__17844__auto___20886 = arguments.length;
var i__17845__auto___20887 = (0);
while(true){
if((i__17845__auto___20887 < len__17844__auto___20886)){
args20883.push((arguments[i__17845__auto___20887]));

var G__20888 = (i__17845__auto___20887 + (1));
i__17845__auto___20887 = G__20888;
continue;
} else {
}
break;
}

var G__20885 = args20883.length;
switch (G__20885) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20883.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20890 = [];
var len__17844__auto___20893 = arguments.length;
var i__17845__auto___20894 = (0);
while(true){
if((i__17845__auto___20894 < len__17844__auto___20893)){
args20890.push((arguments[i__17845__auto___20894]));

var G__20895 = (i__17845__auto___20894 + (1));
i__17845__auto___20894 = G__20895;
continue;
} else {
}
break;
}

var G__20892 = args20890.length;
switch (G__20892) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20890.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args20897 = [];
var len__17844__auto___20968 = arguments.length;
var i__17845__auto___20969 = (0);
while(true){
if((i__17845__auto___20969 < len__17844__auto___20968)){
args20897.push((arguments[i__17845__auto___20969]));

var G__20970 = (i__17845__auto___20969 + (1));
i__17845__auto___20969 = G__20970;
continue;
} else {
}
break;
}

var G__20899 = args20897.length;
switch (G__20899) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20897.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18953__auto___20972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___20972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___20972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20938){
var state_val_20939 = (state_20938[(1)]);
if((state_val_20939 === (7))){
var state_20938__$1 = state_20938;
var statearr_20940_20973 = state_20938__$1;
(statearr_20940_20973[(2)] = null);

(statearr_20940_20973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (1))){
var state_20938__$1 = state_20938;
var statearr_20941_20974 = state_20938__$1;
(statearr_20941_20974[(2)] = null);

(statearr_20941_20974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (4))){
var inst_20902 = (state_20938[(7)]);
var inst_20904 = (inst_20902 < cnt);
var state_20938__$1 = state_20938;
if(cljs.core.truth_(inst_20904)){
var statearr_20942_20975 = state_20938__$1;
(statearr_20942_20975[(1)] = (6));

} else {
var statearr_20943_20976 = state_20938__$1;
(statearr_20943_20976[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (15))){
var inst_20934 = (state_20938[(2)]);
var state_20938__$1 = state_20938;
var statearr_20944_20977 = state_20938__$1;
(statearr_20944_20977[(2)] = inst_20934);

(statearr_20944_20977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (13))){
var inst_20927 = cljs.core.async.close_BANG_.call(null,out);
var state_20938__$1 = state_20938;
var statearr_20945_20978 = state_20938__$1;
(statearr_20945_20978[(2)] = inst_20927);

(statearr_20945_20978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (6))){
var state_20938__$1 = state_20938;
var statearr_20946_20979 = state_20938__$1;
(statearr_20946_20979[(2)] = null);

(statearr_20946_20979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (3))){
var inst_20936 = (state_20938[(2)]);
var state_20938__$1 = state_20938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20938__$1,inst_20936);
} else {
if((state_val_20939 === (12))){
var inst_20924 = (state_20938[(8)]);
var inst_20924__$1 = (state_20938[(2)]);
var inst_20925 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20924__$1);
var state_20938__$1 = (function (){var statearr_20947 = state_20938;
(statearr_20947[(8)] = inst_20924__$1);

return statearr_20947;
})();
if(cljs.core.truth_(inst_20925)){
var statearr_20948_20980 = state_20938__$1;
(statearr_20948_20980[(1)] = (13));

} else {
var statearr_20949_20981 = state_20938__$1;
(statearr_20949_20981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (2))){
var inst_20901 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_20902 = (0);
var state_20938__$1 = (function (){var statearr_20950 = state_20938;
(statearr_20950[(7)] = inst_20902);

(statearr_20950[(9)] = inst_20901);

return statearr_20950;
})();
var statearr_20951_20982 = state_20938__$1;
(statearr_20951_20982[(2)] = null);

(statearr_20951_20982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (11))){
var inst_20902 = (state_20938[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20938,(10),Object,null,(9));
var inst_20911 = chs__$1.call(null,inst_20902);
var inst_20912 = done.call(null,inst_20902);
var inst_20913 = cljs.core.async.take_BANG_.call(null,inst_20911,inst_20912);
var state_20938__$1 = state_20938;
var statearr_20952_20983 = state_20938__$1;
(statearr_20952_20983[(2)] = inst_20913);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (9))){
var inst_20902 = (state_20938[(7)]);
var inst_20915 = (state_20938[(2)]);
var inst_20916 = (inst_20902 + (1));
var inst_20902__$1 = inst_20916;
var state_20938__$1 = (function (){var statearr_20953 = state_20938;
(statearr_20953[(10)] = inst_20915);

(statearr_20953[(7)] = inst_20902__$1);

return statearr_20953;
})();
var statearr_20954_20984 = state_20938__$1;
(statearr_20954_20984[(2)] = null);

(statearr_20954_20984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (5))){
var inst_20922 = (state_20938[(2)]);
var state_20938__$1 = (function (){var statearr_20955 = state_20938;
(statearr_20955[(11)] = inst_20922);

return statearr_20955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20938__$1,(12),dchan);
} else {
if((state_val_20939 === (14))){
var inst_20924 = (state_20938[(8)]);
var inst_20929 = cljs.core.apply.call(null,f,inst_20924);
var state_20938__$1 = state_20938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20938__$1,(16),out,inst_20929);
} else {
if((state_val_20939 === (16))){
var inst_20931 = (state_20938[(2)]);
var state_20938__$1 = (function (){var statearr_20956 = state_20938;
(statearr_20956[(12)] = inst_20931);

return statearr_20956;
})();
var statearr_20957_20985 = state_20938__$1;
(statearr_20957_20985[(2)] = null);

(statearr_20957_20985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (10))){
var inst_20906 = (state_20938[(2)]);
var inst_20907 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_20938__$1 = (function (){var statearr_20958 = state_20938;
(statearr_20958[(13)] = inst_20906);

return statearr_20958;
})();
var statearr_20959_20986 = state_20938__$1;
(statearr_20959_20986[(2)] = inst_20907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20939 === (8))){
var inst_20920 = (state_20938[(2)]);
var state_20938__$1 = state_20938;
var statearr_20960_20987 = state_20938__$1;
(statearr_20960_20987[(2)] = inst_20920);

(statearr_20960_20987[(1)] = (5));


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
});})(c__18953__auto___20972,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18841__auto__,c__18953__auto___20972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_20964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20964[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_20964[(1)] = (1));

return statearr_20964;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_20938){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_20938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e20965){if((e20965 instanceof Object)){
var ex__18845__auto__ = e20965;
var statearr_20966_20988 = state_20938;
(statearr_20966_20988[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20989 = state_20938;
state_20938 = G__20989;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_20938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_20938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___20972,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18955__auto__ = (function (){var statearr_20967 = f__18954__auto__.call(null);
(statearr_20967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___20972);

return statearr_20967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___20972,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args20991 = [];
var len__17844__auto___21047 = arguments.length;
var i__17845__auto___21048 = (0);
while(true){
if((i__17845__auto___21048 < len__17844__auto___21047)){
args20991.push((arguments[i__17845__auto___21048]));

var G__21049 = (i__17845__auto___21048 + (1));
i__17845__auto___21048 = G__21049;
continue;
} else {
}
break;
}

var G__20993 = args20991.length;
switch (G__20993) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20991.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18953__auto___21051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___21051,out){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___21051,out){
return (function (state_21023){
var state_val_21024 = (state_21023[(1)]);
if((state_val_21024 === (7))){
var inst_21002 = (state_21023[(7)]);
var inst_21003 = (state_21023[(8)]);
var inst_21002__$1 = (state_21023[(2)]);
var inst_21003__$1 = cljs.core.nth.call(null,inst_21002__$1,(0),null);
var inst_21004 = cljs.core.nth.call(null,inst_21002__$1,(1),null);
var inst_21005 = (inst_21003__$1 == null);
var state_21023__$1 = (function (){var statearr_21025 = state_21023;
(statearr_21025[(7)] = inst_21002__$1);

(statearr_21025[(8)] = inst_21003__$1);

(statearr_21025[(9)] = inst_21004);

return statearr_21025;
})();
if(cljs.core.truth_(inst_21005)){
var statearr_21026_21052 = state_21023__$1;
(statearr_21026_21052[(1)] = (8));

} else {
var statearr_21027_21053 = state_21023__$1;
(statearr_21027_21053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (1))){
var inst_20994 = cljs.core.vec.call(null,chs);
var inst_20995 = inst_20994;
var state_21023__$1 = (function (){var statearr_21028 = state_21023;
(statearr_21028[(10)] = inst_20995);

return statearr_21028;
})();
var statearr_21029_21054 = state_21023__$1;
(statearr_21029_21054[(2)] = null);

(statearr_21029_21054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (4))){
var inst_20995 = (state_21023[(10)]);
var state_21023__$1 = state_21023;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21023__$1,(7),inst_20995);
} else {
if((state_val_21024 === (6))){
var inst_21019 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
var statearr_21030_21055 = state_21023__$1;
(statearr_21030_21055[(2)] = inst_21019);

(statearr_21030_21055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (3))){
var inst_21021 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21023__$1,inst_21021);
} else {
if((state_val_21024 === (2))){
var inst_20995 = (state_21023[(10)]);
var inst_20997 = cljs.core.count.call(null,inst_20995);
var inst_20998 = (inst_20997 > (0));
var state_21023__$1 = state_21023;
if(cljs.core.truth_(inst_20998)){
var statearr_21032_21056 = state_21023__$1;
(statearr_21032_21056[(1)] = (4));

} else {
var statearr_21033_21057 = state_21023__$1;
(statearr_21033_21057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (11))){
var inst_20995 = (state_21023[(10)]);
var inst_21012 = (state_21023[(2)]);
var tmp21031 = inst_20995;
var inst_20995__$1 = tmp21031;
var state_21023__$1 = (function (){var statearr_21034 = state_21023;
(statearr_21034[(11)] = inst_21012);

(statearr_21034[(10)] = inst_20995__$1);

return statearr_21034;
})();
var statearr_21035_21058 = state_21023__$1;
(statearr_21035_21058[(2)] = null);

(statearr_21035_21058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (9))){
var inst_21003 = (state_21023[(8)]);
var state_21023__$1 = state_21023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21023__$1,(11),out,inst_21003);
} else {
if((state_val_21024 === (5))){
var inst_21017 = cljs.core.async.close_BANG_.call(null,out);
var state_21023__$1 = state_21023;
var statearr_21036_21059 = state_21023__$1;
(statearr_21036_21059[(2)] = inst_21017);

(statearr_21036_21059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (10))){
var inst_21015 = (state_21023[(2)]);
var state_21023__$1 = state_21023;
var statearr_21037_21060 = state_21023__$1;
(statearr_21037_21060[(2)] = inst_21015);

(statearr_21037_21060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21024 === (8))){
var inst_21002 = (state_21023[(7)]);
var inst_21003 = (state_21023[(8)]);
var inst_20995 = (state_21023[(10)]);
var inst_21004 = (state_21023[(9)]);
var inst_21007 = (function (){var cs = inst_20995;
var vec__21000 = inst_21002;
var v = inst_21003;
var c = inst_21004;
return ((function (cs,vec__21000,v,c,inst_21002,inst_21003,inst_20995,inst_21004,state_val_21024,c__18953__auto___21051,out){
return (function (p1__20990_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__20990_SHARP_);
});
;})(cs,vec__21000,v,c,inst_21002,inst_21003,inst_20995,inst_21004,state_val_21024,c__18953__auto___21051,out))
})();
var inst_21008 = cljs.core.filterv.call(null,inst_21007,inst_20995);
var inst_20995__$1 = inst_21008;
var state_21023__$1 = (function (){var statearr_21038 = state_21023;
(statearr_21038[(10)] = inst_20995__$1);

return statearr_21038;
})();
var statearr_21039_21061 = state_21023__$1;
(statearr_21039_21061[(2)] = null);

(statearr_21039_21061[(1)] = (2));


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
});})(c__18953__auto___21051,out))
;
return ((function (switch__18841__auto__,c__18953__auto___21051,out){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_21043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21043[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_21043[(1)] = (1));

return statearr_21043;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_21023){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_21023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e21044){if((e21044 instanceof Object)){
var ex__18845__auto__ = e21044;
var statearr_21045_21062 = state_21023;
(statearr_21045_21062[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21063 = state_21023;
state_21023 = G__21063;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_21023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_21023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___21051,out))
})();
var state__18955__auto__ = (function (){var statearr_21046 = f__18954__auto__.call(null);
(statearr_21046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___21051);

return statearr_21046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___21051,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21064 = [];
var len__17844__auto___21113 = arguments.length;
var i__17845__auto___21114 = (0);
while(true){
if((i__17845__auto___21114 < len__17844__auto___21113)){
args21064.push((arguments[i__17845__auto___21114]));

var G__21115 = (i__17845__auto___21114 + (1));
i__17845__auto___21114 = G__21115;
continue;
} else {
}
break;
}

var G__21066 = args21064.length;
switch (G__21066) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21064.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18953__auto___21117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___21117,out){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___21117,out){
return (function (state_21090){
var state_val_21091 = (state_21090[(1)]);
if((state_val_21091 === (7))){
var inst_21072 = (state_21090[(7)]);
var inst_21072__$1 = (state_21090[(2)]);
var inst_21073 = (inst_21072__$1 == null);
var inst_21074 = cljs.core.not.call(null,inst_21073);
var state_21090__$1 = (function (){var statearr_21092 = state_21090;
(statearr_21092[(7)] = inst_21072__$1);

return statearr_21092;
})();
if(inst_21074){
var statearr_21093_21118 = state_21090__$1;
(statearr_21093_21118[(1)] = (8));

} else {
var statearr_21094_21119 = state_21090__$1;
(statearr_21094_21119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (1))){
var inst_21067 = (0);
var state_21090__$1 = (function (){var statearr_21095 = state_21090;
(statearr_21095[(8)] = inst_21067);

return statearr_21095;
})();
var statearr_21096_21120 = state_21090__$1;
(statearr_21096_21120[(2)] = null);

(statearr_21096_21120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (4))){
var state_21090__$1 = state_21090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21090__$1,(7),ch);
} else {
if((state_val_21091 === (6))){
var inst_21085 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21097_21121 = state_21090__$1;
(statearr_21097_21121[(2)] = inst_21085);

(statearr_21097_21121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (3))){
var inst_21087 = (state_21090[(2)]);
var inst_21088 = cljs.core.async.close_BANG_.call(null,out);
var state_21090__$1 = (function (){var statearr_21098 = state_21090;
(statearr_21098[(9)] = inst_21087);

return statearr_21098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21090__$1,inst_21088);
} else {
if((state_val_21091 === (2))){
var inst_21067 = (state_21090[(8)]);
var inst_21069 = (inst_21067 < n);
var state_21090__$1 = state_21090;
if(cljs.core.truth_(inst_21069)){
var statearr_21099_21122 = state_21090__$1;
(statearr_21099_21122[(1)] = (4));

} else {
var statearr_21100_21123 = state_21090__$1;
(statearr_21100_21123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (11))){
var inst_21067 = (state_21090[(8)]);
var inst_21077 = (state_21090[(2)]);
var inst_21078 = (inst_21067 + (1));
var inst_21067__$1 = inst_21078;
var state_21090__$1 = (function (){var statearr_21101 = state_21090;
(statearr_21101[(10)] = inst_21077);

(statearr_21101[(8)] = inst_21067__$1);

return statearr_21101;
})();
var statearr_21102_21124 = state_21090__$1;
(statearr_21102_21124[(2)] = null);

(statearr_21102_21124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (9))){
var state_21090__$1 = state_21090;
var statearr_21103_21125 = state_21090__$1;
(statearr_21103_21125[(2)] = null);

(statearr_21103_21125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (5))){
var state_21090__$1 = state_21090;
var statearr_21104_21126 = state_21090__$1;
(statearr_21104_21126[(2)] = null);

(statearr_21104_21126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (10))){
var inst_21082 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21105_21127 = state_21090__$1;
(statearr_21105_21127[(2)] = inst_21082);

(statearr_21105_21127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21091 === (8))){
var inst_21072 = (state_21090[(7)]);
var state_21090__$1 = state_21090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21090__$1,(11),out,inst_21072);
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
});})(c__18953__auto___21117,out))
;
return ((function (switch__18841__auto__,c__18953__auto___21117,out){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_21109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21109[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_21109[(1)] = (1));

return statearr_21109;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_21090){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_21090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e21110){if((e21110 instanceof Object)){
var ex__18845__auto__ = e21110;
var statearr_21111_21128 = state_21090;
(statearr_21111_21128[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21129 = state_21090;
state_21090 = G__21129;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_21090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_21090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___21117,out))
})();
var state__18955__auto__ = (function (){var statearr_21112 = f__18954__auto__.call(null);
(statearr_21112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___21117);

return statearr_21112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___21117,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21137 = (function (map_LT_,f,ch,meta21138){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21138 = meta21138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21139,meta21138__$1){
var self__ = this;
var _21139__$1 = this;
return (new cljs.core.async.t_cljs$core$async21137(self__.map_LT_,self__.f,self__.ch,meta21138__$1));
});

cljs.core.async.t_cljs$core$async21137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21139){
var self__ = this;
var _21139__$1 = this;
return self__.meta21138;
});

cljs.core.async.t_cljs$core$async21137.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21140 = (function (map_LT_,f,ch,meta21138,_,fn1,meta21141){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21138 = meta21138;
this._ = _;
this.fn1 = fn1;
this.meta21141 = meta21141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21142,meta21141__$1){
var self__ = this;
var _21142__$1 = this;
return (new cljs.core.async.t_cljs$core$async21140(self__.map_LT_,self__.f,self__.ch,self__.meta21138,self__._,self__.fn1,meta21141__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21142){
var self__ = this;
var _21142__$1 = this;
return self__.meta21141;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21140.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21130_SHARP_){
return f1.call(null,(((p1__21130_SHARP_ == null))?null:self__.f.call(null,p1__21130_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21140.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21138","meta21138",-856621022,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21137","cljs.core.async/t_cljs$core$async21137",-213881330,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21141","meta21141",1073819887,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21140";

cljs.core.async.t_cljs$core$async21140.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async21140");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21140 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21140(map_LT___$1,f__$1,ch__$1,meta21138__$1,___$2,fn1__$1,meta21141){
return (new cljs.core.async.t_cljs$core$async21140(map_LT___$1,f__$1,ch__$1,meta21138__$1,___$2,fn1__$1,meta21141));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21140(self__.map_LT_,self__.f,self__.ch,self__.meta21138,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16773__auto__ = ret;
if(cljs.core.truth_(and__16773__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16773__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21138","meta21138",-856621022,null)], null);
});

cljs.core.async.t_cljs$core$async21137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21137";

cljs.core.async.t_cljs$core$async21137.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async21137");
});

cljs.core.async.__GT_t_cljs$core$async21137 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21137(map_LT___$1,f__$1,ch__$1,meta21138){
return (new cljs.core.async.t_cljs$core$async21137(map_LT___$1,f__$1,ch__$1,meta21138));
});

}

return (new cljs.core.async.t_cljs$core$async21137(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21146 = (function (map_GT_,f,ch,meta21147){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21147 = meta21147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21148,meta21147__$1){
var self__ = this;
var _21148__$1 = this;
return (new cljs.core.async.t_cljs$core$async21146(self__.map_GT_,self__.f,self__.ch,meta21147__$1));
});

cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21148){
var self__ = this;
var _21148__$1 = this;
return self__.meta21147;
});

cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21147","meta21147",17141824,null)], null);
});

cljs.core.async.t_cljs$core$async21146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21146";

cljs.core.async.t_cljs$core$async21146.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async21146");
});

cljs.core.async.__GT_t_cljs$core$async21146 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21146(map_GT___$1,f__$1,ch__$1,meta21147){
return (new cljs.core.async.t_cljs$core$async21146(map_GT___$1,f__$1,ch__$1,meta21147));
});

}

return (new cljs.core.async.t_cljs$core$async21146(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21152 = (function (filter_GT_,p,ch,meta21153){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21153 = meta21153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21154,meta21153__$1){
var self__ = this;
var _21154__$1 = this;
return (new cljs.core.async.t_cljs$core$async21152(self__.filter_GT_,self__.p,self__.ch,meta21153__$1));
});

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21154){
var self__ = this;
var _21154__$1 = this;
return self__.meta21153;
});

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21153","meta21153",1887849585,null)], null);
});

cljs.core.async.t_cljs$core$async21152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21152";

cljs.core.async.t_cljs$core$async21152.cljs$lang$ctorPrWriter = (function (this__17384__auto__,writer__17385__auto__,opt__17386__auto__){
return cljs.core._write.call(null,writer__17385__auto__,"cljs.core.async/t_cljs$core$async21152");
});

cljs.core.async.__GT_t_cljs$core$async21152 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21152(filter_GT___$1,p__$1,ch__$1,meta21153){
return (new cljs.core.async.t_cljs$core$async21152(filter_GT___$1,p__$1,ch__$1,meta21153));
});

}

return (new cljs.core.async.t_cljs$core$async21152(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21155 = [];
var len__17844__auto___21199 = arguments.length;
var i__17845__auto___21200 = (0);
while(true){
if((i__17845__auto___21200 < len__17844__auto___21199)){
args21155.push((arguments[i__17845__auto___21200]));

var G__21201 = (i__17845__auto___21200 + (1));
i__17845__auto___21200 = G__21201;
continue;
} else {
}
break;
}

var G__21157 = args21155.length;
switch (G__21157) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21155.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18953__auto___21203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___21203,out){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___21203,out){
return (function (state_21178){
var state_val_21179 = (state_21178[(1)]);
if((state_val_21179 === (7))){
var inst_21174 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
var statearr_21180_21204 = state_21178__$1;
(statearr_21180_21204[(2)] = inst_21174);

(statearr_21180_21204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (1))){
var state_21178__$1 = state_21178;
var statearr_21181_21205 = state_21178__$1;
(statearr_21181_21205[(2)] = null);

(statearr_21181_21205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (4))){
var inst_21160 = (state_21178[(7)]);
var inst_21160__$1 = (state_21178[(2)]);
var inst_21161 = (inst_21160__$1 == null);
var state_21178__$1 = (function (){var statearr_21182 = state_21178;
(statearr_21182[(7)] = inst_21160__$1);

return statearr_21182;
})();
if(cljs.core.truth_(inst_21161)){
var statearr_21183_21206 = state_21178__$1;
(statearr_21183_21206[(1)] = (5));

} else {
var statearr_21184_21207 = state_21178__$1;
(statearr_21184_21207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (6))){
var inst_21160 = (state_21178[(7)]);
var inst_21165 = p.call(null,inst_21160);
var state_21178__$1 = state_21178;
if(cljs.core.truth_(inst_21165)){
var statearr_21185_21208 = state_21178__$1;
(statearr_21185_21208[(1)] = (8));

} else {
var statearr_21186_21209 = state_21178__$1;
(statearr_21186_21209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (3))){
var inst_21176 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21178__$1,inst_21176);
} else {
if((state_val_21179 === (2))){
var state_21178__$1 = state_21178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21178__$1,(4),ch);
} else {
if((state_val_21179 === (11))){
var inst_21168 = (state_21178[(2)]);
var state_21178__$1 = state_21178;
var statearr_21187_21210 = state_21178__$1;
(statearr_21187_21210[(2)] = inst_21168);

(statearr_21187_21210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (9))){
var state_21178__$1 = state_21178;
var statearr_21188_21211 = state_21178__$1;
(statearr_21188_21211[(2)] = null);

(statearr_21188_21211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (5))){
var inst_21163 = cljs.core.async.close_BANG_.call(null,out);
var state_21178__$1 = state_21178;
var statearr_21189_21212 = state_21178__$1;
(statearr_21189_21212[(2)] = inst_21163);

(statearr_21189_21212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (10))){
var inst_21171 = (state_21178[(2)]);
var state_21178__$1 = (function (){var statearr_21190 = state_21178;
(statearr_21190[(8)] = inst_21171);

return statearr_21190;
})();
var statearr_21191_21213 = state_21178__$1;
(statearr_21191_21213[(2)] = null);

(statearr_21191_21213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21179 === (8))){
var inst_21160 = (state_21178[(7)]);
var state_21178__$1 = state_21178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21178__$1,(11),out,inst_21160);
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
});})(c__18953__auto___21203,out))
;
return ((function (switch__18841__auto__,c__18953__auto___21203,out){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_21195 = [null,null,null,null,null,null,null,null,null];
(statearr_21195[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_21195[(1)] = (1));

return statearr_21195;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_21178){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_21178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e21196){if((e21196 instanceof Object)){
var ex__18845__auto__ = e21196;
var statearr_21197_21214 = state_21178;
(statearr_21197_21214[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21215 = state_21178;
state_21178 = G__21215;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_21178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_21178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___21203,out))
})();
var state__18955__auto__ = (function (){var statearr_21198 = f__18954__auto__.call(null);
(statearr_21198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___21203);

return statearr_21198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___21203,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21216 = [];
var len__17844__auto___21219 = arguments.length;
var i__17845__auto___21220 = (0);
while(true){
if((i__17845__auto___21220 < len__17844__auto___21219)){
args21216.push((arguments[i__17845__auto___21220]));

var G__21221 = (i__17845__auto___21220 + (1));
i__17845__auto___21220 = G__21221;
continue;
} else {
}
break;
}

var G__21218 = args21216.length;
switch (G__21218) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21216.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto__){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto__){
return (function (state_21388){
var state_val_21389 = (state_21388[(1)]);
if((state_val_21389 === (7))){
var inst_21384 = (state_21388[(2)]);
var state_21388__$1 = state_21388;
var statearr_21390_21431 = state_21388__$1;
(statearr_21390_21431[(2)] = inst_21384);

(statearr_21390_21431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (20))){
var inst_21354 = (state_21388[(7)]);
var inst_21365 = (state_21388[(2)]);
var inst_21366 = cljs.core.next.call(null,inst_21354);
var inst_21340 = inst_21366;
var inst_21341 = null;
var inst_21342 = (0);
var inst_21343 = (0);
var state_21388__$1 = (function (){var statearr_21391 = state_21388;
(statearr_21391[(8)] = inst_21343);

(statearr_21391[(9)] = inst_21365);

(statearr_21391[(10)] = inst_21340);

(statearr_21391[(11)] = inst_21342);

(statearr_21391[(12)] = inst_21341);

return statearr_21391;
})();
var statearr_21392_21432 = state_21388__$1;
(statearr_21392_21432[(2)] = null);

(statearr_21392_21432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (1))){
var state_21388__$1 = state_21388;
var statearr_21393_21433 = state_21388__$1;
(statearr_21393_21433[(2)] = null);

(statearr_21393_21433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (4))){
var inst_21329 = (state_21388[(13)]);
var inst_21329__$1 = (state_21388[(2)]);
var inst_21330 = (inst_21329__$1 == null);
var state_21388__$1 = (function (){var statearr_21394 = state_21388;
(statearr_21394[(13)] = inst_21329__$1);

return statearr_21394;
})();
if(cljs.core.truth_(inst_21330)){
var statearr_21395_21434 = state_21388__$1;
(statearr_21395_21434[(1)] = (5));

} else {
var statearr_21396_21435 = state_21388__$1;
(statearr_21396_21435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (15))){
var state_21388__$1 = state_21388;
var statearr_21400_21436 = state_21388__$1;
(statearr_21400_21436[(2)] = null);

(statearr_21400_21436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (21))){
var state_21388__$1 = state_21388;
var statearr_21401_21437 = state_21388__$1;
(statearr_21401_21437[(2)] = null);

(statearr_21401_21437[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (13))){
var inst_21343 = (state_21388[(8)]);
var inst_21340 = (state_21388[(10)]);
var inst_21342 = (state_21388[(11)]);
var inst_21341 = (state_21388[(12)]);
var inst_21350 = (state_21388[(2)]);
var inst_21351 = (inst_21343 + (1));
var tmp21397 = inst_21340;
var tmp21398 = inst_21342;
var tmp21399 = inst_21341;
var inst_21340__$1 = tmp21397;
var inst_21341__$1 = tmp21399;
var inst_21342__$1 = tmp21398;
var inst_21343__$1 = inst_21351;
var state_21388__$1 = (function (){var statearr_21402 = state_21388;
(statearr_21402[(8)] = inst_21343__$1);

(statearr_21402[(14)] = inst_21350);

(statearr_21402[(10)] = inst_21340__$1);

(statearr_21402[(11)] = inst_21342__$1);

(statearr_21402[(12)] = inst_21341__$1);

return statearr_21402;
})();
var statearr_21403_21438 = state_21388__$1;
(statearr_21403_21438[(2)] = null);

(statearr_21403_21438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (22))){
var state_21388__$1 = state_21388;
var statearr_21404_21439 = state_21388__$1;
(statearr_21404_21439[(2)] = null);

(statearr_21404_21439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (6))){
var inst_21329 = (state_21388[(13)]);
var inst_21338 = f.call(null,inst_21329);
var inst_21339 = cljs.core.seq.call(null,inst_21338);
var inst_21340 = inst_21339;
var inst_21341 = null;
var inst_21342 = (0);
var inst_21343 = (0);
var state_21388__$1 = (function (){var statearr_21405 = state_21388;
(statearr_21405[(8)] = inst_21343);

(statearr_21405[(10)] = inst_21340);

(statearr_21405[(11)] = inst_21342);

(statearr_21405[(12)] = inst_21341);

return statearr_21405;
})();
var statearr_21406_21440 = state_21388__$1;
(statearr_21406_21440[(2)] = null);

(statearr_21406_21440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (17))){
var inst_21354 = (state_21388[(7)]);
var inst_21358 = cljs.core.chunk_first.call(null,inst_21354);
var inst_21359 = cljs.core.chunk_rest.call(null,inst_21354);
var inst_21360 = cljs.core.count.call(null,inst_21358);
var inst_21340 = inst_21359;
var inst_21341 = inst_21358;
var inst_21342 = inst_21360;
var inst_21343 = (0);
var state_21388__$1 = (function (){var statearr_21407 = state_21388;
(statearr_21407[(8)] = inst_21343);

(statearr_21407[(10)] = inst_21340);

(statearr_21407[(11)] = inst_21342);

(statearr_21407[(12)] = inst_21341);

return statearr_21407;
})();
var statearr_21408_21441 = state_21388__$1;
(statearr_21408_21441[(2)] = null);

(statearr_21408_21441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (3))){
var inst_21386 = (state_21388[(2)]);
var state_21388__$1 = state_21388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21388__$1,inst_21386);
} else {
if((state_val_21389 === (12))){
var inst_21374 = (state_21388[(2)]);
var state_21388__$1 = state_21388;
var statearr_21409_21442 = state_21388__$1;
(statearr_21409_21442[(2)] = inst_21374);

(statearr_21409_21442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (2))){
var state_21388__$1 = state_21388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21388__$1,(4),in$);
} else {
if((state_val_21389 === (23))){
var inst_21382 = (state_21388[(2)]);
var state_21388__$1 = state_21388;
var statearr_21410_21443 = state_21388__$1;
(statearr_21410_21443[(2)] = inst_21382);

(statearr_21410_21443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (19))){
var inst_21369 = (state_21388[(2)]);
var state_21388__$1 = state_21388;
var statearr_21411_21444 = state_21388__$1;
(statearr_21411_21444[(2)] = inst_21369);

(statearr_21411_21444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (11))){
var inst_21354 = (state_21388[(7)]);
var inst_21340 = (state_21388[(10)]);
var inst_21354__$1 = cljs.core.seq.call(null,inst_21340);
var state_21388__$1 = (function (){var statearr_21412 = state_21388;
(statearr_21412[(7)] = inst_21354__$1);

return statearr_21412;
})();
if(inst_21354__$1){
var statearr_21413_21445 = state_21388__$1;
(statearr_21413_21445[(1)] = (14));

} else {
var statearr_21414_21446 = state_21388__$1;
(statearr_21414_21446[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (9))){
var inst_21376 = (state_21388[(2)]);
var inst_21377 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21388__$1 = (function (){var statearr_21415 = state_21388;
(statearr_21415[(15)] = inst_21376);

return statearr_21415;
})();
if(cljs.core.truth_(inst_21377)){
var statearr_21416_21447 = state_21388__$1;
(statearr_21416_21447[(1)] = (21));

} else {
var statearr_21417_21448 = state_21388__$1;
(statearr_21417_21448[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (5))){
var inst_21332 = cljs.core.async.close_BANG_.call(null,out);
var state_21388__$1 = state_21388;
var statearr_21418_21449 = state_21388__$1;
(statearr_21418_21449[(2)] = inst_21332);

(statearr_21418_21449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (14))){
var inst_21354 = (state_21388[(7)]);
var inst_21356 = cljs.core.chunked_seq_QMARK_.call(null,inst_21354);
var state_21388__$1 = state_21388;
if(inst_21356){
var statearr_21419_21450 = state_21388__$1;
(statearr_21419_21450[(1)] = (17));

} else {
var statearr_21420_21451 = state_21388__$1;
(statearr_21420_21451[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (16))){
var inst_21372 = (state_21388[(2)]);
var state_21388__$1 = state_21388;
var statearr_21421_21452 = state_21388__$1;
(statearr_21421_21452[(2)] = inst_21372);

(statearr_21421_21452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21389 === (10))){
var inst_21343 = (state_21388[(8)]);
var inst_21341 = (state_21388[(12)]);
var inst_21348 = cljs.core._nth.call(null,inst_21341,inst_21343);
var state_21388__$1 = state_21388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21388__$1,(13),out,inst_21348);
} else {
if((state_val_21389 === (18))){
var inst_21354 = (state_21388[(7)]);
var inst_21363 = cljs.core.first.call(null,inst_21354);
var state_21388__$1 = state_21388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21388__$1,(20),out,inst_21363);
} else {
if((state_val_21389 === (8))){
var inst_21343 = (state_21388[(8)]);
var inst_21342 = (state_21388[(11)]);
var inst_21345 = (inst_21343 < inst_21342);
var inst_21346 = inst_21345;
var state_21388__$1 = state_21388;
if(cljs.core.truth_(inst_21346)){
var statearr_21422_21453 = state_21388__$1;
(statearr_21422_21453[(1)] = (10));

} else {
var statearr_21423_21454 = state_21388__$1;
(statearr_21423_21454[(1)] = (11));

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
});})(c__18953__auto__))
;
return ((function (switch__18841__auto__,c__18953__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18842__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18842__auto____0 = (function (){
var statearr_21427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21427[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18842__auto__);

(statearr_21427[(1)] = (1));

return statearr_21427;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18842__auto____1 = (function (state_21388){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_21388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e21428){if((e21428 instanceof Object)){
var ex__18845__auto__ = e21428;
var statearr_21429_21455 = state_21388;
(statearr_21429_21455[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21456 = state_21388;
state_21388 = G__21456;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18842__auto__ = function(state_21388){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18842__auto____1.call(this,state_21388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18842__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18842__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto__))
})();
var state__18955__auto__ = (function (){var statearr_21430 = f__18954__auto__.call(null);
(statearr_21430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto__);

return statearr_21430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto__))
);

return c__18953__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21457 = [];
var len__17844__auto___21460 = arguments.length;
var i__17845__auto___21461 = (0);
while(true){
if((i__17845__auto___21461 < len__17844__auto___21460)){
args21457.push((arguments[i__17845__auto___21461]));

var G__21462 = (i__17845__auto___21461 + (1));
i__17845__auto___21461 = G__21462;
continue;
} else {
}
break;
}

var G__21459 = args21457.length;
switch (G__21459) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21457.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21464 = [];
var len__17844__auto___21467 = arguments.length;
var i__17845__auto___21468 = (0);
while(true){
if((i__17845__auto___21468 < len__17844__auto___21467)){
args21464.push((arguments[i__17845__auto___21468]));

var G__21469 = (i__17845__auto___21468 + (1));
i__17845__auto___21468 = G__21469;
continue;
} else {
}
break;
}

var G__21466 = args21464.length;
switch (G__21466) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21464.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21471 = [];
var len__17844__auto___21522 = arguments.length;
var i__17845__auto___21523 = (0);
while(true){
if((i__17845__auto___21523 < len__17844__auto___21522)){
args21471.push((arguments[i__17845__auto___21523]));

var G__21524 = (i__17845__auto___21523 + (1));
i__17845__auto___21523 = G__21524;
continue;
} else {
}
break;
}

var G__21473 = args21471.length;
switch (G__21473) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21471.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18953__auto___21526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___21526,out){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___21526,out){
return (function (state_21497){
var state_val_21498 = (state_21497[(1)]);
if((state_val_21498 === (7))){
var inst_21492 = (state_21497[(2)]);
var state_21497__$1 = state_21497;
var statearr_21499_21527 = state_21497__$1;
(statearr_21499_21527[(2)] = inst_21492);

(statearr_21499_21527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (1))){
var inst_21474 = null;
var state_21497__$1 = (function (){var statearr_21500 = state_21497;
(statearr_21500[(7)] = inst_21474);

return statearr_21500;
})();
var statearr_21501_21528 = state_21497__$1;
(statearr_21501_21528[(2)] = null);

(statearr_21501_21528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (4))){
var inst_21477 = (state_21497[(8)]);
var inst_21477__$1 = (state_21497[(2)]);
var inst_21478 = (inst_21477__$1 == null);
var inst_21479 = cljs.core.not.call(null,inst_21478);
var state_21497__$1 = (function (){var statearr_21502 = state_21497;
(statearr_21502[(8)] = inst_21477__$1);

return statearr_21502;
})();
if(inst_21479){
var statearr_21503_21529 = state_21497__$1;
(statearr_21503_21529[(1)] = (5));

} else {
var statearr_21504_21530 = state_21497__$1;
(statearr_21504_21530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (6))){
var state_21497__$1 = state_21497;
var statearr_21505_21531 = state_21497__$1;
(statearr_21505_21531[(2)] = null);

(statearr_21505_21531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (3))){
var inst_21494 = (state_21497[(2)]);
var inst_21495 = cljs.core.async.close_BANG_.call(null,out);
var state_21497__$1 = (function (){var statearr_21506 = state_21497;
(statearr_21506[(9)] = inst_21494);

return statearr_21506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21497__$1,inst_21495);
} else {
if((state_val_21498 === (2))){
var state_21497__$1 = state_21497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21497__$1,(4),ch);
} else {
if((state_val_21498 === (11))){
var inst_21477 = (state_21497[(8)]);
var inst_21486 = (state_21497[(2)]);
var inst_21474 = inst_21477;
var state_21497__$1 = (function (){var statearr_21507 = state_21497;
(statearr_21507[(10)] = inst_21486);

(statearr_21507[(7)] = inst_21474);

return statearr_21507;
})();
var statearr_21508_21532 = state_21497__$1;
(statearr_21508_21532[(2)] = null);

(statearr_21508_21532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (9))){
var inst_21477 = (state_21497[(8)]);
var state_21497__$1 = state_21497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21497__$1,(11),out,inst_21477);
} else {
if((state_val_21498 === (5))){
var inst_21477 = (state_21497[(8)]);
var inst_21474 = (state_21497[(7)]);
var inst_21481 = cljs.core._EQ_.call(null,inst_21477,inst_21474);
var state_21497__$1 = state_21497;
if(inst_21481){
var statearr_21510_21533 = state_21497__$1;
(statearr_21510_21533[(1)] = (8));

} else {
var statearr_21511_21534 = state_21497__$1;
(statearr_21511_21534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (10))){
var inst_21489 = (state_21497[(2)]);
var state_21497__$1 = state_21497;
var statearr_21512_21535 = state_21497__$1;
(statearr_21512_21535[(2)] = inst_21489);

(statearr_21512_21535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21498 === (8))){
var inst_21474 = (state_21497[(7)]);
var tmp21509 = inst_21474;
var inst_21474__$1 = tmp21509;
var state_21497__$1 = (function (){var statearr_21513 = state_21497;
(statearr_21513[(7)] = inst_21474__$1);

return statearr_21513;
})();
var statearr_21514_21536 = state_21497__$1;
(statearr_21514_21536[(2)] = null);

(statearr_21514_21536[(1)] = (2));


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
});})(c__18953__auto___21526,out))
;
return ((function (switch__18841__auto__,c__18953__auto___21526,out){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_21518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21518[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_21518[(1)] = (1));

return statearr_21518;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_21497){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_21497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e21519){if((e21519 instanceof Object)){
var ex__18845__auto__ = e21519;
var statearr_21520_21537 = state_21497;
(statearr_21520_21537[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21538 = state_21497;
state_21497 = G__21538;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_21497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_21497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___21526,out))
})();
var state__18955__auto__ = (function (){var statearr_21521 = f__18954__auto__.call(null);
(statearr_21521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___21526);

return statearr_21521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___21526,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21539 = [];
var len__17844__auto___21609 = arguments.length;
var i__17845__auto___21610 = (0);
while(true){
if((i__17845__auto___21610 < len__17844__auto___21609)){
args21539.push((arguments[i__17845__auto___21610]));

var G__21611 = (i__17845__auto___21610 + (1));
i__17845__auto___21610 = G__21611;
continue;
} else {
}
break;
}

var G__21541 = args21539.length;
switch (G__21541) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21539.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18953__auto___21613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___21613,out){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___21613,out){
return (function (state_21579){
var state_val_21580 = (state_21579[(1)]);
if((state_val_21580 === (7))){
var inst_21575 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
var statearr_21581_21614 = state_21579__$1;
(statearr_21581_21614[(2)] = inst_21575);

(statearr_21581_21614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (1))){
var inst_21542 = (new Array(n));
var inst_21543 = inst_21542;
var inst_21544 = (0);
var state_21579__$1 = (function (){var statearr_21582 = state_21579;
(statearr_21582[(7)] = inst_21543);

(statearr_21582[(8)] = inst_21544);

return statearr_21582;
})();
var statearr_21583_21615 = state_21579__$1;
(statearr_21583_21615[(2)] = null);

(statearr_21583_21615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (4))){
var inst_21547 = (state_21579[(9)]);
var inst_21547__$1 = (state_21579[(2)]);
var inst_21548 = (inst_21547__$1 == null);
var inst_21549 = cljs.core.not.call(null,inst_21548);
var state_21579__$1 = (function (){var statearr_21584 = state_21579;
(statearr_21584[(9)] = inst_21547__$1);

return statearr_21584;
})();
if(inst_21549){
var statearr_21585_21616 = state_21579__$1;
(statearr_21585_21616[(1)] = (5));

} else {
var statearr_21586_21617 = state_21579__$1;
(statearr_21586_21617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (15))){
var inst_21569 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
var statearr_21587_21618 = state_21579__$1;
(statearr_21587_21618[(2)] = inst_21569);

(statearr_21587_21618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (13))){
var state_21579__$1 = state_21579;
var statearr_21588_21619 = state_21579__$1;
(statearr_21588_21619[(2)] = null);

(statearr_21588_21619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (6))){
var inst_21544 = (state_21579[(8)]);
var inst_21565 = (inst_21544 > (0));
var state_21579__$1 = state_21579;
if(cljs.core.truth_(inst_21565)){
var statearr_21589_21620 = state_21579__$1;
(statearr_21589_21620[(1)] = (12));

} else {
var statearr_21590_21621 = state_21579__$1;
(statearr_21590_21621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (3))){
var inst_21577 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21579__$1,inst_21577);
} else {
if((state_val_21580 === (12))){
var inst_21543 = (state_21579[(7)]);
var inst_21567 = cljs.core.vec.call(null,inst_21543);
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21579__$1,(15),out,inst_21567);
} else {
if((state_val_21580 === (2))){
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21579__$1,(4),ch);
} else {
if((state_val_21580 === (11))){
var inst_21559 = (state_21579[(2)]);
var inst_21560 = (new Array(n));
var inst_21543 = inst_21560;
var inst_21544 = (0);
var state_21579__$1 = (function (){var statearr_21591 = state_21579;
(statearr_21591[(10)] = inst_21559);

(statearr_21591[(7)] = inst_21543);

(statearr_21591[(8)] = inst_21544);

return statearr_21591;
})();
var statearr_21592_21622 = state_21579__$1;
(statearr_21592_21622[(2)] = null);

(statearr_21592_21622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (9))){
var inst_21543 = (state_21579[(7)]);
var inst_21557 = cljs.core.vec.call(null,inst_21543);
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21579__$1,(11),out,inst_21557);
} else {
if((state_val_21580 === (5))){
var inst_21543 = (state_21579[(7)]);
var inst_21552 = (state_21579[(11)]);
var inst_21544 = (state_21579[(8)]);
var inst_21547 = (state_21579[(9)]);
var inst_21551 = (inst_21543[inst_21544] = inst_21547);
var inst_21552__$1 = (inst_21544 + (1));
var inst_21553 = (inst_21552__$1 < n);
var state_21579__$1 = (function (){var statearr_21593 = state_21579;
(statearr_21593[(11)] = inst_21552__$1);

(statearr_21593[(12)] = inst_21551);

return statearr_21593;
})();
if(cljs.core.truth_(inst_21553)){
var statearr_21594_21623 = state_21579__$1;
(statearr_21594_21623[(1)] = (8));

} else {
var statearr_21595_21624 = state_21579__$1;
(statearr_21595_21624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (14))){
var inst_21572 = (state_21579[(2)]);
var inst_21573 = cljs.core.async.close_BANG_.call(null,out);
var state_21579__$1 = (function (){var statearr_21597 = state_21579;
(statearr_21597[(13)] = inst_21572);

return statearr_21597;
})();
var statearr_21598_21625 = state_21579__$1;
(statearr_21598_21625[(2)] = inst_21573);

(statearr_21598_21625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (10))){
var inst_21563 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
var statearr_21599_21626 = state_21579__$1;
(statearr_21599_21626[(2)] = inst_21563);

(statearr_21599_21626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (8))){
var inst_21543 = (state_21579[(7)]);
var inst_21552 = (state_21579[(11)]);
var tmp21596 = inst_21543;
var inst_21543__$1 = tmp21596;
var inst_21544 = inst_21552;
var state_21579__$1 = (function (){var statearr_21600 = state_21579;
(statearr_21600[(7)] = inst_21543__$1);

(statearr_21600[(8)] = inst_21544);

return statearr_21600;
})();
var statearr_21601_21627 = state_21579__$1;
(statearr_21601_21627[(2)] = null);

(statearr_21601_21627[(1)] = (2));


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
});})(c__18953__auto___21613,out))
;
return ((function (switch__18841__auto__,c__18953__auto___21613,out){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_21605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21605[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_21605[(1)] = (1));

return statearr_21605;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_21579){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_21579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e21606){if((e21606 instanceof Object)){
var ex__18845__auto__ = e21606;
var statearr_21607_21628 = state_21579;
(statearr_21607_21628[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21629 = state_21579;
state_21579 = G__21629;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_21579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_21579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___21613,out))
})();
var state__18955__auto__ = (function (){var statearr_21608 = f__18954__auto__.call(null);
(statearr_21608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___21613);

return statearr_21608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___21613,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21630 = [];
var len__17844__auto___21704 = arguments.length;
var i__17845__auto___21705 = (0);
while(true){
if((i__17845__auto___21705 < len__17844__auto___21704)){
args21630.push((arguments[i__17845__auto___21705]));

var G__21706 = (i__17845__auto___21705 + (1));
i__17845__auto___21705 = G__21706;
continue;
} else {
}
break;
}

var G__21632 = args21630.length;
switch (G__21632) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21630.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18953__auto___21708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18953__auto___21708,out){
return (function (){
var f__18954__auto__ = (function (){var switch__18841__auto__ = ((function (c__18953__auto___21708,out){
return (function (state_21674){
var state_val_21675 = (state_21674[(1)]);
if((state_val_21675 === (7))){
var inst_21670 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21676_21709 = state_21674__$1;
(statearr_21676_21709[(2)] = inst_21670);

(statearr_21676_21709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (1))){
var inst_21633 = [];
var inst_21634 = inst_21633;
var inst_21635 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21674__$1 = (function (){var statearr_21677 = state_21674;
(statearr_21677[(7)] = inst_21635);

(statearr_21677[(8)] = inst_21634);

return statearr_21677;
})();
var statearr_21678_21710 = state_21674__$1;
(statearr_21678_21710[(2)] = null);

(statearr_21678_21710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (4))){
var inst_21638 = (state_21674[(9)]);
var inst_21638__$1 = (state_21674[(2)]);
var inst_21639 = (inst_21638__$1 == null);
var inst_21640 = cljs.core.not.call(null,inst_21639);
var state_21674__$1 = (function (){var statearr_21679 = state_21674;
(statearr_21679[(9)] = inst_21638__$1);

return statearr_21679;
})();
if(inst_21640){
var statearr_21680_21711 = state_21674__$1;
(statearr_21680_21711[(1)] = (5));

} else {
var statearr_21681_21712 = state_21674__$1;
(statearr_21681_21712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (15))){
var inst_21664 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21682_21713 = state_21674__$1;
(statearr_21682_21713[(2)] = inst_21664);

(statearr_21682_21713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (13))){
var state_21674__$1 = state_21674;
var statearr_21683_21714 = state_21674__$1;
(statearr_21683_21714[(2)] = null);

(statearr_21683_21714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (6))){
var inst_21634 = (state_21674[(8)]);
var inst_21659 = inst_21634.length;
var inst_21660 = (inst_21659 > (0));
var state_21674__$1 = state_21674;
if(cljs.core.truth_(inst_21660)){
var statearr_21684_21715 = state_21674__$1;
(statearr_21684_21715[(1)] = (12));

} else {
var statearr_21685_21716 = state_21674__$1;
(statearr_21685_21716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (3))){
var inst_21672 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21674__$1,inst_21672);
} else {
if((state_val_21675 === (12))){
var inst_21634 = (state_21674[(8)]);
var inst_21662 = cljs.core.vec.call(null,inst_21634);
var state_21674__$1 = state_21674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21674__$1,(15),out,inst_21662);
} else {
if((state_val_21675 === (2))){
var state_21674__$1 = state_21674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21674__$1,(4),ch);
} else {
if((state_val_21675 === (11))){
var inst_21642 = (state_21674[(10)]);
var inst_21638 = (state_21674[(9)]);
var inst_21652 = (state_21674[(2)]);
var inst_21653 = [];
var inst_21654 = inst_21653.push(inst_21638);
var inst_21634 = inst_21653;
var inst_21635 = inst_21642;
var state_21674__$1 = (function (){var statearr_21686 = state_21674;
(statearr_21686[(7)] = inst_21635);

(statearr_21686[(11)] = inst_21654);

(statearr_21686[(8)] = inst_21634);

(statearr_21686[(12)] = inst_21652);

return statearr_21686;
})();
var statearr_21687_21717 = state_21674__$1;
(statearr_21687_21717[(2)] = null);

(statearr_21687_21717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (9))){
var inst_21634 = (state_21674[(8)]);
var inst_21650 = cljs.core.vec.call(null,inst_21634);
var state_21674__$1 = state_21674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21674__$1,(11),out,inst_21650);
} else {
if((state_val_21675 === (5))){
var inst_21635 = (state_21674[(7)]);
var inst_21642 = (state_21674[(10)]);
var inst_21638 = (state_21674[(9)]);
var inst_21642__$1 = f.call(null,inst_21638);
var inst_21643 = cljs.core._EQ_.call(null,inst_21642__$1,inst_21635);
var inst_21644 = cljs.core.keyword_identical_QMARK_.call(null,inst_21635,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21645 = (inst_21643) || (inst_21644);
var state_21674__$1 = (function (){var statearr_21688 = state_21674;
(statearr_21688[(10)] = inst_21642__$1);

return statearr_21688;
})();
if(cljs.core.truth_(inst_21645)){
var statearr_21689_21718 = state_21674__$1;
(statearr_21689_21718[(1)] = (8));

} else {
var statearr_21690_21719 = state_21674__$1;
(statearr_21690_21719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (14))){
var inst_21667 = (state_21674[(2)]);
var inst_21668 = cljs.core.async.close_BANG_.call(null,out);
var state_21674__$1 = (function (){var statearr_21692 = state_21674;
(statearr_21692[(13)] = inst_21667);

return statearr_21692;
})();
var statearr_21693_21720 = state_21674__$1;
(statearr_21693_21720[(2)] = inst_21668);

(statearr_21693_21720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (10))){
var inst_21657 = (state_21674[(2)]);
var state_21674__$1 = state_21674;
var statearr_21694_21721 = state_21674__$1;
(statearr_21694_21721[(2)] = inst_21657);

(statearr_21694_21721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21675 === (8))){
var inst_21642 = (state_21674[(10)]);
var inst_21638 = (state_21674[(9)]);
var inst_21634 = (state_21674[(8)]);
var inst_21647 = inst_21634.push(inst_21638);
var tmp21691 = inst_21634;
var inst_21634__$1 = tmp21691;
var inst_21635 = inst_21642;
var state_21674__$1 = (function (){var statearr_21695 = state_21674;
(statearr_21695[(7)] = inst_21635);

(statearr_21695[(8)] = inst_21634__$1);

(statearr_21695[(14)] = inst_21647);

return statearr_21695;
})();
var statearr_21696_21722 = state_21674__$1;
(statearr_21696_21722[(2)] = null);

(statearr_21696_21722[(1)] = (2));


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
});})(c__18953__auto___21708,out))
;
return ((function (switch__18841__auto__,c__18953__auto___21708,out){
return (function() {
var cljs$core$async$state_machine__18842__auto__ = null;
var cljs$core$async$state_machine__18842__auto____0 = (function (){
var statearr_21700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21700[(0)] = cljs$core$async$state_machine__18842__auto__);

(statearr_21700[(1)] = (1));

return statearr_21700;
});
var cljs$core$async$state_machine__18842__auto____1 = (function (state_21674){
while(true){
var ret_value__18843__auto__ = (function (){try{while(true){
var result__18844__auto__ = switch__18841__auto__.call(null,state_21674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18844__auto__;
}
break;
}
}catch (e21701){if((e21701 instanceof Object)){
var ex__18845__auto__ = e21701;
var statearr_21702_21723 = state_21674;
(statearr_21702_21723[(5)] = ex__18845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21724 = state_21674;
state_21674 = G__21724;
continue;
} else {
return ret_value__18843__auto__;
}
break;
}
});
cljs$core$async$state_machine__18842__auto__ = function(state_21674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18842__auto____1.call(this,state_21674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18842__auto____0;
cljs$core$async$state_machine__18842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18842__auto____1;
return cljs$core$async$state_machine__18842__auto__;
})()
;})(switch__18841__auto__,c__18953__auto___21708,out))
})();
var state__18955__auto__ = (function (){var statearr_21703 = f__18954__auto__.call(null);
(statearr_21703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18953__auto___21708);

return statearr_21703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18955__auto__);
});})(c__18953__auto___21708,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
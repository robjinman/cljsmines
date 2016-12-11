// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('minesweeper.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.set');
cljs.core.enable_console_print_BANG_();
minesweeper.core.levels = new cljs.core.PersistentArrayMap(null, 3, ["beginner",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),cljs.core.cst$kw$mines,(10)], null),"intermediate",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),cljs.core.cst$kw$mines,(40)], null),"expert",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(30)], null),cljs.core.cst$kw$mines,(99)], null)], null);
minesweeper.core.vec_zeros = (function minesweeper$core$vec_zeros(n){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
});
minesweeper.core.vec_zeros_2 = (function minesweeper$core$vec_zeros_2(p__13348){
var vec__13352 = p__13348;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13352,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13352,(1),null);
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,minesweeper.core.vec_zeros(cols)));
});
minesweeper.core.neighbour_coords = (function minesweeper$core$neighbour_coords(p__13355,p__13356){
var vec__13367 = p__13355;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13367,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13367,(1),null);
var vec__13370 = p__13356;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13370,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13370,(1),null);
var indices = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices,vec__13367,rows,cols,vec__13370,row,col){
return (function (coords,p__13373){
var vec__13374 = p__13373;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13374,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13374,(1),null);
var x = (row + i);
var y = (col + j);
if(((((-1) < x)) && ((x < rows))) && ((((-1) < y)) && ((y < cols)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return coords;
}
});})(indices,vec__13367,rows,cols,vec__13370,row,col))
,cljs.core.PersistentVector.EMPTY,indices);
});
minesweeper.core.set_high_score_BANG_ = (function minesweeper$core$set_high_score_BANG_(level,score){
return localStorage.setItem(level,score);
});
minesweeper.core.get_high_score = (function minesweeper$core$get_high_score(level){
var score = localStorage.getItem(level);
if(cljs.core.truth_(score)){
return parseInt(score);
} else {
return null;
}
});
minesweeper.core.dbg_clear_high_score_BANG_ = (function minesweeper$core$dbg_clear_high_score_BANG_(level){
return localStorage.removeItem(level);
});
/**
 * Returns the number of cells with value value around cell [row col].
 */
minesweeper.core.count_surrounding = (function minesweeper$core$count_surrounding(value,p__13377,grid,p__13378){
var vec__13385 = p__13377;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13385,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13385,(1),null);
var vec__13388 = p__13378;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13388,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13388,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13385,rows,cols,vec__13388,row,col){
return (function (count,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,cell))){
return (count + (1));
} else {
return count;
}
});})(vec__13385,rows,cols,vec__13388,row,col))
,(0),minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
});
minesweeper.core.count_surrounding_zeros = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(minesweeper.core.count_surrounding,(0));
minesweeper.core.count_surrounding_ones = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(minesweeper.core.count_surrounding,(1));
/**
 * Takes an empty grid and populates it randomly with mines.
 */
minesweeper.core.populate_grid = (function minesweeper$core$populate_grid(p__13391,grid,num_mines){
var vec__13395 = p__13391;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13395,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13395,(1),null);
var i = (0);
var grid__$1 = grid;
while(true){
var row = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(rows);
var col = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(cols);
var is_mine = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
if((i < num_mines)){
var G__13398 = ((is_mine)?i:(i + (1)));
var G__13399 = ((is_mine)?grid__$1:cljs.core.assoc_in(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.cst$kw$X));
i = G__13398;
grid__$1 = G__13399;
continue;
} else {
return grid__$1;
}
break;
}
});
/**
 * If the cell is surrounded by precisely the correct number of flags in addition
 *   to at least 1 unflagged cell, the player can perform a spread-sweep by clicking
 *   this cell.
 */
minesweeper.core.can_spread_sweep_QMARK_ = (function minesweeper$core$can_spread_sweep_QMARK_(p__13400,grid,mask,flags,p__13401){
var vec__13414 = p__13400;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13414,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13414,(1),null);
var vec__13417 = p__13401;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13417,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13417,(1),null);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var num_flags = (function (){var G__13420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null);
var G__13421 = flags;
var G__13422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (minesweeper.core.count_surrounding_ones.cljs$core$IFn$_invoke$arity$3 ? minesweeper.core.count_surrounding_ones.cljs$core$IFn$_invoke$arity$3(G__13420,G__13421,G__13422) : minesweeper.core.count_surrounding_ones.call(null,G__13420,G__13421,G__13422));
})();
var num_hidden = (function (){var G__13423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null);
var G__13424 = mask;
var G__13425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (minesweeper.core.count_surrounding_zeros.cljs$core$IFn$_invoke$arity$3 ? minesweeper.core.count_surrounding_zeros.cljs$core$IFn$_invoke$arity$3(G__13423,G__13424,G__13425) : minesweeper.core.count_surrounding_zeros.call(null,G__13423,G__13424,G__13425));
})();
return ((value > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,num_flags)) && ((num_flags < num_hidden));
});
/**
 * Returns a flat vector of [row col value] vectors to enable easy iteration over
 *   the grid.
 */
minesweeper.core.flatten_grid = (function minesweeper$core$flatten_grid(grid){
var iter__7184__auto__ = (function minesweeper$core$flatten_grid_$_iter__13467(s__13468){
return (new cljs.core.LazySeq(null,(function (){
var s__13468__$1 = s__13468;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13468__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__13491 = cljs.core.first(xs__5205__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13491,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13491,(1),null);
var iterys__7180__auto__ = ((function (s__13468__$1,vec__13491,i,row,xs__5205__auto__,temp__4657__auto__){
return (function minesweeper$core$flatten_grid_$_iter__13467_$_iter__13469(s__13470){
return (new cljs.core.LazySeq(null,((function (s__13468__$1,vec__13491,i,row,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__13470__$1 = s__13470;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__13470__$1);
if(temp__4657__auto____$1){
var s__13470__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13470__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__13470__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__13472 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__13471 = (0);
while(true){
if((i__13471 < size__7183__auto__)){
var vec__13502 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__13471);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13502,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13502,(1),null);
cljs.core.chunk_append(b__13472,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null));

var G__13508 = (i__13471 + (1));
i__13471 = G__13508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13472),minesweeper$core$flatten_grid_$_iter__13467_$_iter__13469(cljs.core.chunk_rest(s__13470__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13472),null);
}
} else {
var vec__13505 = cljs.core.first(s__13470__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13505,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13505,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null),minesweeper$core$flatten_grid_$_iter__13467_$_iter__13469(cljs.core.rest(s__13470__$2)));
}
} else {
return null;
}
break;
}
});})(s__13468__$1,vec__13491,i,row,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__13468__$1,vec__13491,i,row,xs__5205__auto__,temp__4657__auto__))
;
var fs__7181__auto__ = cljs.core.seq(iterys__7180__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__7181__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7181__auto__,minesweeper$core$flatten_grid_$_iter__13467(cljs.core.rest(s__13468__$1)));
} else {
var G__13509 = cljs.core.rest(s__13468__$1);
s__13468__$1 = G__13509;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7184__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,grid));
});
minesweeper.core.sum_grid = (function minesweeper$core$sum_grid(grid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__13514){
var vec__13515 = p__13514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(2),null);
return (sum + n);
}),(0),minesweeper.core.flatten_grid(grid));
});
minesweeper.core.count_in_grid = (function minesweeper$core$count_in_grid(grid,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (total,p__13522){
var vec__13523 = p__13522;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13523,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13523,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13523,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,v)){
return (total + (1));
} else {
return total;
}
}),(0),minesweeper.core.flatten_grid(grid));
});
/**
 * Takes a grid populated with mines and adds in the numbers.
 */
minesweeper.core.label_grid = (function minesweeper$core$label_grid(p__13527,grid){
var vec__13539 = p__13527;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13539,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13539,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13539,rows,cols){
return (function (labelled,p__13542){
var vec__13543 = p__13542;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,val)){
var neighbours = minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (neighbours,vec__13543,i,j,val,vec__13539,rows,cols){
return (function (labelled__$1,p__13546){
var vec__13547 = p__13546;
var ni = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13547,(0),null);
var nj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13547,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(labelled__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ni,nj], null),((function (vec__13547,ni,nj,neighbours,vec__13543,i,j,val,vec__13539,rows,cols){
return (function (p1__13526_SHARP_){
if(typeof p1__13526_SHARP_ === 'number'){
return (p1__13526_SHARP_ + (1));
} else {
return p1__13526_SHARP_;
}
});})(vec__13547,ni,nj,neighbours,vec__13543,i,j,val,vec__13539,rows,cols))
);
});})(neighbours,vec__13543,i,j,val,vec__13539,rows,cols))
,labelled,neighbours);
} else {
return labelled;
}
});})(vec__13539,rows,cols))
,grid,minesweeper.core.flatten_grid(grid));
});
/**
 * Seconds since the epoch.
 */
minesweeper.core.get_time = (function minesweeper$core$get_time(){
var millis = (new Date()).getTime();
return (millis / (1000));
});
minesweeper.core.calc_elapsed = (function minesweeper$core$calc_elapsed(time_started){
return ((minesweeper.core.get_time() - time_started) | (0));
});
/**
 * Sets the grid to value at each cell.
 */
minesweeper.core.set_in_grid = (function minesweeper$core$set_in_grid(grid,cells,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grid__$1,p__13554){
var vec__13555 = p__13554;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13555,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13555,(1),null);
return cljs.core.assoc_in(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),value);
}),grid,cells);
});
/**
 * List of values at the locations given by cells.
 */
minesweeper.core.values_at = (function minesweeper$core$values_at(grid,cells){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13558_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,p1__13558_SHARP_);
}),cells);
});
/**
 * Returns one of :alive, :dead, or :victorious.
 */
minesweeper.core.calc_game_state = (function minesweeper$core$calc_game_state(grid,mask,num_mines,swept_cells,game_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dead,game_state)){
return cljs.core.cst$kw$dead;
} else {
var num_hidden = minesweeper.core.count_in_grid(mask,(0));
var values = minesweeper.core.values_at(grid,swept_cells);
if(cljs.core.contains_QMARK_(cljs.core.set(values),cljs.core.cst$kw$X)){
return cljs.core.cst$kw$dead;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_mines,num_hidden)){
return cljs.core.cst$kw$victorious;
} else {
return cljs.core.cst$kw$alive;
}
}
}
});
/**
 * Returns the region to be swept.
 */
minesweeper.core.sweep_cell = (function minesweeper$core$sweep_cell(var_args){
var args13559 = [];
var len__7479__auto___13582 = arguments.length;
var i__7480__auto___13583 = (0);
while(true){
if((i__7480__auto___13583 < len__7479__auto___13582)){
args13559.push((arguments[i__7480__auto___13583]));

var G__13584 = (i__7480__auto___13583 + (1));
i__7480__auto___13583 = G__13584;
continue;
} else {
}
break;
}

var G__13561 = args13559.length;
switch (G__13561) {
case 3:
return minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13559.length)].join('')));

}
});

minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$3 = (function (p__13562,grid,p__13563){
var vec__13564 = p__13562;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13564,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13564,(1),null);
var vec__13567 = p__13563;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13567,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13567,(1),null);
return minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.PersistentHashSet.EMPTY);
});

minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$4 = (function (p__13570,grid,p__13571,region){
var vec__13572 = p__13570;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13572,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13572,(1),null);
var vec__13575 = p__13571;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13575,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13575,(1),null);
var neighbours = minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var region__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (neighbours,region__$1,vec__13572,rows,cols,vec__13575,row,col){
return (function (region__$2,p__13578){
var vec__13579 = p__13578;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(1),null);
if(!(cljs.core.contains_QMARK_(region__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(region__$2,minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null),region__$2));
} else {
return region__$2;
}
});})(neighbours,region__$1,vec__13572,rows,cols,vec__13575,row,col))
,region__$1,neighbours);
} else {
return region__$1;
}
});

minesweeper.core.sweep_cell.cljs$lang$maxFixedArity = 4;

/**
 * Returns the region to be swept.
 */
minesweeper.core.sweep_cells = (function minesweeper$core$sweep_cells(p__13586,grid,cells){
var vec__13590 = p__13586;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13590,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13590,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13590,rows,cols){
return (function (region,cell){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(region,minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,cell));
});})(vec__13590,rows,cols))
,cljs.core.PersistentHashSet.EMPTY,cells);
});
/**
 * Flag any unflagged mines.
 */
minesweeper.core.flag_remaining = (function minesweeper$core$flag_remaining(flags,grid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (flags__$1,p__13597){
var vec__13598 = p__13597;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13598,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13598,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13598,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,val)){
return cljs.core.assoc_in(flags__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),(1));
} else {
return flags__$1;
}
}),flags,minesweeper.core.flatten_grid(grid));
});
/**
 * Construct a fresh game state for the given difficulty level.
 */
minesweeper.core.new_state = (function minesweeper$core$new_state(level){
var vec__13604 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13604,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13604,(1),null);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$mines], null));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$mask,cljs.core.cst$kw$grid,cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$level_DASH_selected,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$level,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$flags],[minesweeper.core.vec_zeros_2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),minesweeper.core.label_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),minesweeper.core.populate_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),minesweeper.core.vec_zeros_2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),num_mines)),minesweeper.core.get_high_score(level),level,minesweeper.core.get_time(),cljs.core.cst$kw$pending,cljs.core.get.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,level),(0),minesweeper.core.vec_zeros_2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null))]);
});
minesweeper.core.alive_or_pending_QMARK_ = (function minesweeper$core$alive_or_pending_QMARK_(state){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pending,null,cljs.core.cst$kw$alive,null], null), null),cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * If the time elapsed repesents a new high-score, persist it to local
 *   storage.
 */
minesweeper.core.update_high_score_BANG_ = (function minesweeper$core$update_high_score_BANG_(state){
var level = cljs.core.cst$kw$level_DASH_selected.cljs$core$IFn$_invoke$arity$1(state);
var time_started = cljs.core.cst$kw$time_DASH_started.cljs$core$IFn$_invoke$arity$1(state);
var elapsed = minesweeper.core.calc_elapsed(time_started);
var high_score = minesweeper.core.get_high_score(level);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,high_score)) || ((elapsed < high_score))){
minesweeper.core.set_high_score_BANG_(level,elapsed);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$high_DASH_score,elapsed);
} else {
return state;
}
});
minesweeper.core.sweep_cell_BANG_ = (function minesweeper$core$sweep_cell_BANG_(state,p__13607){
var vec__13614 = p__13607;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13614,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13614,(1),null);
var vec__13617 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13617,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13617,(1),null);
var game_state = cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state);
var grid = cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state);
var mask = cljs.core.cst$kw$mask.cljs$core$IFn$_invoke$arity$1(state);
var flags = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(state);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
var sweep_region = minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var new_mask = minesweeper.core.set_in_grid(mask,sweep_region,(1));
var new_flags = minesweeper.core.set_in_grid(flags,sweep_region,(0));
var new_game_state = minesweeper.core.calc_game_state(grid,new_mask,num_mines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null),game_state);
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$game_DASH_state,new_game_state),cljs.core.cst$kw$mask,new_mask),cljs.core.cst$kw$flags,new_flags);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$victorious,new_game_state)){
return minesweeper.core.update_high_score_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$flags,minesweeper.core.flag_remaining(new_flags,grid)));
} else {
return new_state;
}
});
minesweeper.core.sweep_spread_BANG_ = (function minesweeper$core$sweep_spread_BANG_(state,p__13620){
var vec__13627 = p__13620;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13627,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13627,(1),null);
var vec__13630 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13630,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13630,(1),null);
var grid = cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state);
var mask = cljs.core.cst$kw$mask.cljs$core$IFn$_invoke$arity$1(state);
var flags = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(state);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
if(cljs.core.truth_(minesweeper.core.can_spread_sweep_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13630,rows,cols,grid,mask,flags,num_mines,vec__13627,row,col){
return (function (st,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(flags,cell))){
return minesweeper.core.sweep_cell_BANG_(st,cell);
} else {
return st;
}
});})(vec__13630,rows,cols,grid,mask,flags,num_mines,vec__13627,row,col))
,state,minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
} else {
return state;
}
});
minesweeper.core.flag_cell = (function minesweeper$core$flag_cell(state,p__13633){
var vec__13637 = p__13633;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13637,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13637,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(1));
});
minesweeper.core.unflag_cell = (function minesweeper$core$unflag_cell(state,p__13640){
var vec__13644 = p__13640;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13644,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13644,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(0));
});
minesweeper.core.reset_game = (function minesweeper$core$reset_game(state){
var level = cljs.core.cst$kw$level_DASH_selected.cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([state,minesweeper.core.new_state(level)], 0));
});
minesweeper.core.start_game = (function minesweeper$core$start_game(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$alive),cljs.core.cst$kw$time_DASH_started,minesweeper.core.get_time());
});
/**
 * Any components that need regular refreshing can depend on :tick-count,
 *   which is incremented periodically.
 */
minesweeper.core.tick = (function minesweeper$core$tick(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$tick_DASH_count,cljs.core.inc);
});
minesweeper.core.start_game_if_pending = (function minesweeper$core$start_game_if_pending(state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pending,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state))){
return minesweeper.core.start_game(state);
} else {
return state;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialise,(function (state,_){
return minesweeper.core.new_state("intermediate");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick,(function (state,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alive,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state))){
return minesweeper.core.tick(state);
} else {
return state;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sweep,(function (state,p__13647){
var vec__13648 = p__13647;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13648,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13648,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13648,(2),null);
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))){
return minesweeper.core.sweep_cell_BANG_(minesweeper.core.start_game_if_pending(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return state;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reset,(function (state,_){
return minesweeper.core.reset_game(state);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$spread_DASH_sweep,(function (state,p__13651){
var vec__13652 = p__13651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13652,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alive,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state))){
return minesweeper.core.sweep_spread_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return state;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$flag,(function (state,p__13655){
var vec__13656 = p__13655;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13656,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13656,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13656,(2),null);
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))){
return minesweeper.core.flag_cell(minesweeper.core.start_game_if_pending(state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return state;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unflag,(function (state,p__13659){
var vec__13660 = p__13659;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13660,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13660,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13660,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alive,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state))){
return minesweeper.core.unflag_cell(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return state;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$level_DASH_select,(function (state,p__13663){
var vec__13664 = p__13663;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13664,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13664,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$level_DASH_selected,level);
}));
var G__13667_13669 = cljs.core.cst$kw$grid_DASH_size;
var G__13668_13670 = ((function (G__13667_13669){
return (function (state,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
});})(G__13667_13669))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13667_13669,G__13668_13670) : re_frame.core.reg_sub.call(null,G__13667_13669,G__13668_13670));
var G__13671_13673 = cljs.core.cst$kw$game_DASH_state;
var G__13672_13674 = ((function (G__13671_13673){
return (function (state,_){
return cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state);
});})(G__13671_13673))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13671_13673,G__13672_13674) : re_frame.core.reg_sub.call(null,G__13671_13673,G__13672_13674));
var G__13675_13681 = cljs.core.cst$kw$grid_DASH_value;
var G__13676_13682 = ((function (G__13675_13681){
return (function (state,p__13677){
var vec__13678 = p__13677;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13678,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13678,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13678,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grid,row,col], null));
});})(G__13675_13681))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13675_13681,G__13676_13682) : re_frame.core.reg_sub.call(null,G__13675_13681,G__13676_13682));
var G__13683_13689 = cljs.core.cst$kw$mask_DASH_value;
var G__13684_13690 = ((function (G__13683_13689){
return (function (state,p__13685){
var vec__13686 = p__13685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mask,row,col], null));
});})(G__13683_13689))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13683_13689,G__13684_13690) : re_frame.core.reg_sub.call(null,G__13683_13689,G__13684_13690));
var G__13691_13697 = cljs.core.cst$kw$flags_DASH_value;
var G__13692_13698 = ((function (G__13691_13697){
return (function (state,p__13693){
var vec__13694 = p__13693;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13694,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13694,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13694,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null));
});})(G__13691_13697))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13691_13697,G__13692_13698) : re_frame.core.reg_sub.call(null,G__13691_13697,G__13692_13698));
var G__13699_13701 = cljs.core.cst$kw$high_DASH_score;
var G__13700_13702 = ((function (G__13699_13701){
return (function (state,_){
return cljs.core.cst$kw$high_DASH_score.cljs$core$IFn$_invoke$arity$1(state);
});})(G__13699_13701))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13699_13701,G__13700_13702) : re_frame.core.reg_sub.call(null,G__13699_13701,G__13700_13702));
var G__13703_13705 = cljs.core.cst$kw$num_DASH_remaining;
var G__13704_13706 = ((function (G__13703_13705){
return (function (state,_){
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
var flags = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(state);
var num_flagged = minesweeper.core.sum_grid(flags);
return (num_mines - num_flagged);
});})(G__13703_13705))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13703_13705,G__13704_13706) : re_frame.core.reg_sub.call(null,G__13703_13705,G__13704_13706));
var G__13707_13709 = cljs.core.cst$kw$time_DASH_started;
var G__13708_13710 = ((function (G__13707_13709){
return (function (state,_){
return cljs.core.cst$kw$time_DASH_started.cljs$core$IFn$_invoke$arity$1(state);
});})(G__13707_13709))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13707_13709,G__13708_13710) : re_frame.core.reg_sub.call(null,G__13707_13709,G__13708_13710));
var G__13711_13713 = cljs.core.cst$kw$tick_DASH_count;
var G__13712_13714 = ((function (G__13711_13713){
return (function (state,_){
return cljs.core.cst$kw$tick_DASH_count.cljs$core$IFn$_invoke$arity$1(state);
});})(G__13711_13713))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13711_13713,G__13712_13714) : re_frame.core.reg_sub.call(null,G__13711_13713,G__13712_13714));
var G__13715_13717 = cljs.core.cst$kw$level_DASH_selected;
var G__13716_13718 = ((function (G__13715_13717){
return (function (state,_){
return cljs.core.cst$kw$level_DASH_selected.cljs$core$IFn$_invoke$arity$1(state);
});})(G__13715_13717))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13715_13717,G__13716_13718) : re_frame.core.reg_sub.call(null,G__13715_13717,G__13716_13718));
var G__13719_13728 = cljs.core.cst$kw$can_DASH_spread;
var G__13720_13729 = ((function (G__13719_13728){
return (function (state,p__13721){
var vec__13722 = p__13721;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13722,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13722,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13722,(2),null);
var vec__13725 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13725,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13725,(1),null);
var grid = cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state);
var mask = cljs.core.cst$kw$mask.cljs$core$IFn$_invoke$arity$1(state);
var flags = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(state);
return minesweeper.core.can_spread_sweep_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});})(G__13719_13728))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13719_13728,G__13720_13729) : re_frame.core.reg_sub.call(null,G__13719_13728,G__13720_13729));
minesweeper.core.controls_view = (function minesweeper$core$controls_view(){
var level = (function (){var G__13734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level_DASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13734) : re_frame.core.subscribe.call(null,G__13734));
})();
return ((function (level){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_panel,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$ms_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(level) : cljs.core.deref.call(null,level)),cljs.core.cst$kw$onChange,((function (level){
return (function (p1__13730_SHARP_){
var G__13735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level_DASH_select,p1__13730_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13735) : re_frame.core.dispatch.call(null,G__13735));
});})(level))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"beginner"], null),"Beginner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"intermediate"], null),"Intermediate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"expert"], null),"Expert"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$ms_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (level){
return (function (){
var G__13736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13736) : re_frame.core.dispatch.call(null,G__13736));
});})(level))
], null),"Reset"], null)], null);
});
;})(level))
});
minesweeper.core.timer_view = (function minesweeper$core$timer_view(){
var time_started = (function (){var G__13741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_started], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13741) : re_frame.core.subscribe.call(null,G__13741));
})();
var tick_count = (function (){var G__13742 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_DASH_count], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13742) : re_frame.core.subscribe.call(null,G__13742));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_timer,"Time ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(function (){var G__13743 = "%03d";
var G__13744 = minesweeper.core.calc_elapsed((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(time_started) : cljs.core.deref.call(null,time_started)));
return goog.string.format(G__13743,G__13744);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$ms_DASH_display_DASH_none,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tick_count) : cljs.core.deref.call(null,tick_count))], null)], null);
});
minesweeper.core.info_view = (function minesweeper$core$info_view(){
var high_score = (function (){var G__13751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_score], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13751) : re_frame.core.subscribe.call(null,G__13751));
})();
var num_remaining = (function (){var G__13752 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$num_DASH_remaining], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13752) : re_frame.core.subscribe.call(null,G__13752));
})();
return ((function (high_score,num_remaining){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.timer_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_high_DASH_score,"Best ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(high_score) : cljs.core.deref.call(null,high_score)) == null))?"---":(function (){var G__13753 = "%03d";
var G__13754 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(high_score) : cljs.core.deref.call(null,high_score));
return goog.string.format(G__13753,G__13754);
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_remaining,"Mines ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(function (){var G__13755 = "%03d";
var G__13756 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(num_remaining) : cljs.core.deref.call(null,num_remaining));
return goog.string.format(G__13755,G__13756);
})()], null)], null)], null);
});
;})(high_score,num_remaining))
});
minesweeper.core.hidden_cell_view = (function minesweeper$core$hidden_cell_view(row,col){
var flag = (function (){var G__13763 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags_DASH_value,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13763) : re_frame.core.subscribe.call(null,G__13763));
})();
var value = (function (){var G__13764 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grid_DASH_value,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13764) : re_frame.core.subscribe.call(null,G__13764));
})();
var game_state = (function (){var G__13765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13765) : re_frame.core.subscribe.call(null,G__13765));
})();
return ((function (flag,value,game_state){
return (function (){
var status_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dead,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_state) : cljs.core.deref.call(null,game_state))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value))))?"ms-mine":"ms-safe"):"");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flag) : cljs.core.deref.call(null,flag)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,[cljs.core.str("ms-hidden ms-flagged "),cljs.core.str(status_str)].join(''),cljs.core.cst$kw$onContextMenu,((function (status_str,flag,value,game_state){
return (function (){
var G__13766 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unflag,row,col], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13766) : re_frame.core.dispatch.call(null,G__13766));
});})(status_str,flag,value,game_state))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_cell,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$className,[cljs.core.str("ms-hidden "),cljs.core.str(status_str)].join(''),cljs.core.cst$kw$onClick,((function (status_str,flag,value,game_state){
return (function (){
var G__13767 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sweep,row,col], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13767) : re_frame.core.dispatch.call(null,G__13767));
});})(status_str,flag,value,game_state))
,cljs.core.cst$kw$onContextMenu,((function (status_str,flag,value,game_state){
return (function (){
var G__13768 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flag,row,col], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13768) : re_frame.core.dispatch.call(null,G__13768));
});})(status_str,flag,value,game_state))
], null)], null);
}
});
;})(flag,value,game_state))
});
minesweeper.core.exposed_cell_view = (function minesweeper$core$exposed_cell_view(row,col){
var value = (function (){var G__13774 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grid_DASH_value,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13774) : re_frame.core.subscribe.call(null,G__13774));
})();
var str_val = (function (){var G__13775 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__13775)){
return "zero";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),G__13775)){
return "seven";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__13775)){
return "one";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),G__13775)){
return "four";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),G__13775)){
return "six";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__13775)){
return "three";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__13775)){
return "two";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),G__13775)){
return "five";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13775)){
return "mine";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),G__13775)){
return "eight";
} else {
return "";

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
})();
var can_spread = (function (){var G__13776 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$can_DASH_spread,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13776) : re_frame.core.subscribe.call(null,G__13776));
})();
return ((function (value,str_val,can_spread){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,[cljs.core.str("ms-revealed "),cljs.core.str([cljs.core.str("ms-"),cljs.core.str(str_val)].join('')),cljs.core.str((cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(can_spread) : cljs.core.deref.call(null,can_spread)))?" ms-spread":null))].join(''),cljs.core.cst$kw$onClick,((function (value,str_val,can_spread){
return (function (){
var G__13777 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spread_DASH_sweep,row,col], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13777) : re_frame.core.dispatch.call(null,G__13777));
});})(value,str_val,can_spread))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(function (){var G__13778 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13778)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__13778)){
return "";
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value));

}
}
})()], null)], null);
});
;})(value,str_val,can_spread))
});
minesweeper.core.cell_view = (function minesweeper$core$cell_view(row,col){
var mask_val = (function (){var G__13780 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mask_DASH_value,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13780) : re_frame.core.subscribe.call(null,G__13780));
})();
return ((function (mask_val){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mask_val) : cljs.core.deref.call(null,mask_val)),(1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.exposed_cell_view,row,col], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.hidden_cell_view,row,col], null);
}
});
;})(mask_val))
});
minesweeper.core.grid_view = (function minesweeper$core$grid_view(){
var grid_size = (function (){var G__13812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grid_DASH_size], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13812) : re_frame.core.subscribe.call(null,G__13812));
})();
return ((function (grid_size){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_grid,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7184__auto__ = ((function (grid_size){
return (function minesweeper$core$grid_view_$_iter__13813(s__13814){
return (new cljs.core.LazySeq(null,((function (grid_size){
return (function (){
var s__13814__$1 = s__13814;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13814__$1);
if(temp__4657__auto__){
var s__13814__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13814__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__13814__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__13816 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__13815 = (0);
while(true){
if((i__13815 < size__7183__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__13815);
cljs.core.chunk_append(b__13816,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7184__auto__ = ((function (i__13815,r,c__7182__auto__,size__7183__auto__,b__13816,s__13814__$2,temp__4657__auto__,grid_size){
return (function minesweeper$core$grid_view_$_iter__13813_$_iter__13831(s__13832){
return (new cljs.core.LazySeq(null,((function (i__13815,r,c__7182__auto__,size__7183__auto__,b__13816,s__13814__$2,temp__4657__auto__,grid_size){
return (function (){
var s__13832__$1 = s__13832;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__13832__$1);
if(temp__4657__auto____$1){
var s__13832__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13832__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__13832__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__13834 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__13833 = (0);
while(true){
if((i__13833 < size__7183__auto____$1)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__13833);
cljs.core.chunk_append(b__13834,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.cell_view,r,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(r),cljs.core.str(c)].join('')], null)));

var G__13843 = (i__13833 + (1));
i__13833 = G__13843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13834),minesweeper$core$grid_view_$_iter__13813_$_iter__13831(cljs.core.chunk_rest(s__13832__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13834),null);
}
} else {
var c = cljs.core.first(s__13832__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.cell_view,r,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(r),cljs.core.str(c)].join('')], null)),minesweeper$core$grid_view_$_iter__13813_$_iter__13831(cljs.core.rest(s__13832__$2)));
}
} else {
return null;
}
break;
}
});})(i__13815,r,c__7182__auto__,size__7183__auto__,b__13816,s__13814__$2,temp__4657__auto__,grid_size))
,null,null));
});})(i__13815,r,c__7182__auto__,size__7183__auto__,b__13816,s__13814__$2,temp__4657__auto__,grid_size))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(grid_size) : cljs.core.deref.call(null,grid_size)),(1))));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,r], null)));

var G__13844 = (i__13815 + (1));
i__13815 = G__13844;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13816),minesweeper$core$grid_view_$_iter__13813(cljs.core.chunk_rest(s__13814__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13816),null);
}
} else {
var r = cljs.core.first(s__13814__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7184__auto__ = ((function (r,s__13814__$2,temp__4657__auto__,grid_size){
return (function minesweeper$core$grid_view_$_iter__13813_$_iter__13837(s__13838){
return (new cljs.core.LazySeq(null,((function (r,s__13814__$2,temp__4657__auto__,grid_size){
return (function (){
var s__13838__$1 = s__13838;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__13838__$1);
if(temp__4657__auto____$1){
var s__13838__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13838__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__13838__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__13840 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__13839 = (0);
while(true){
if((i__13839 < size__7183__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__13839);
cljs.core.chunk_append(b__13840,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.cell_view,r,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(r),cljs.core.str(c)].join('')], null)));

var G__13845 = (i__13839 + (1));
i__13839 = G__13845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13840),minesweeper$core$grid_view_$_iter__13813_$_iter__13837(cljs.core.chunk_rest(s__13838__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13840),null);
}
} else {
var c = cljs.core.first(s__13838__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.cell_view,r,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(r),cljs.core.str(c)].join('')], null)),minesweeper$core$grid_view_$_iter__13813_$_iter__13837(cljs.core.rest(s__13838__$2)));
}
} else {
return null;
}
break;
}
});})(r,s__13814__$2,temp__4657__auto__,grid_size))
,null,null));
});})(r,s__13814__$2,temp__4657__auto__,grid_size))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(grid_size) : cljs.core.deref.call(null,grid_size)),(1))));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,r], null)),minesweeper$core$grid_view_$_iter__13813(cljs.core.rest(s__13814__$2)));
}
} else {
return null;
}
break;
}
});})(grid_size))
,null,null));
});})(grid_size))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(grid_size) : cljs.core.deref.call(null,grid_size)),(0))));
})())], null);
});
;})(grid_size))
});
minesweeper.core.main_view = (function minesweeper$core$main_view(){
var game_state = (function (){var G__13849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13849) : re_frame.core.subscribe.call(null,G__13849));
})();
return ((function (game_state){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_cljsmines,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,(function (){var G__13850 = ((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_state) : cljs.core.deref.call(null,game_state)) instanceof cljs.core.Keyword))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_state) : cljs.core.deref.call(null,game_state)).fqn:null);
switch (G__13850) {
case "victorious":
return "ms-st-victorious";

break;
case "dead":
return "ms-st-dead";

break;
default:
return "";

}
})(),cljs.core.cst$kw$onContextMenu,((function (game_state){
return (function (p1__13846_SHARP_){
return p1__13846_SHARP_.preventDefault();
});})(game_state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.info_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.grid_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.controls_view], null)], null);
});
;})(game_state))
});
if(typeof minesweeper.core.timer !== 'undefined'){
} else {
minesweeper.core.timer = (function (){var G__13852 = (function (){
var G__13854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13854) : re_frame.core.dispatch.call(null,G__13854));
});
var G__13853 = (1000);
return setInterval(G__13852,G__13853);
})();
}
minesweeper.core.run = (function minesweeper$core$run(){
var G__13856_13857 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialise], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__13856_13857) : re_frame.core.dispatch_sync.call(null,G__13856_13857));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.main_view], null),goog.dom.getElement("cljsmines"));
});
goog.exportSymbol('minesweeper.core.run', minesweeper.core.run);

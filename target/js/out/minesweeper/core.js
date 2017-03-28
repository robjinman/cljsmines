// Compiled by ClojureScript 1.9.227 {:static-fns true, :optimize-constants true}
goog.provide('minesweeper.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('goog.string');
goog.require('clojure.set');
goog.require('clojure.test.check.random');
goog.require('goog.string.format');
goog.require('re_frame.core');
minesweeper.core.levels = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$beginner,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$beginner,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),cljs.core.cst$kw$mines,(10)], null),cljs.core.cst$kw$intermediate,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$intermediate,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),cljs.core.cst$kw$mines,(40)], null),cljs.core.cst$kw$expert,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$expert,cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(30)], null),cljs.core.cst$kw$mines,(99)], null)], null);
minesweeper.core.vec_zeros = (function minesweeper$core$vec_zeros(n){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
});
minesweeper.core.vec_zeros_2 = (function minesweeper$core$vec_zeros_2(p__13383){
var vec__13387 = p__13383;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13387,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13387,(1),null);
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,minesweeper.core.vec_zeros(cols)));
});
minesweeper.core.neighbour_coords = (function minesweeper$core$neighbour_coords(p__13390,p__13391){
var vec__13402 = p__13390;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402,(1),null);
var vec__13405 = p__13391;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13405,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13405,(1),null);
var indices = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices,vec__13402,rows,cols,vec__13405,row,col){
return (function (coords,p__13408){
var vec__13409 = p__13408;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13409,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13409,(1),null);
var x = (row + i);
var y = (col + j);
if(((((-1) < x)) && ((x < rows))) && ((((-1) < y)) && ((y < cols)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return coords;
}
});})(indices,vec__13402,rows,cols,vec__13405,row,col))
,cljs.core.PersistentVector.EMPTY,indices);
});
/**
 * Returns the number of cells with value value around cell [row col].
 */
minesweeper.core.count_surrounding = (function minesweeper$core$count_surrounding(value,p__13412,grid,p__13413){
var vec__13420 = p__13412;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13420,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13420,(1),null);
var vec__13423 = p__13413;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13423,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13423,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13420,rows,cols,vec__13423,row,col){
return (function (count,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,cell))){
return (count + (1));
} else {
return count;
}
});})(vec__13420,rows,cols,vec__13423,row,col))
,(0),minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
});
minesweeper.core.count_surrounding_zeros = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(minesweeper.core.count_surrounding,(0));
minesweeper.core.count_surrounding_ones = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(minesweeper.core.count_surrounding,(1));
minesweeper.core.random_int = (function minesweeper$core$random_int(seed,max){
return ((clojure.test.check.random.rand_double(clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed)) * max) | (0));
});
/**
 * Takes an empty grid and populates it randomly with mines.
 */
minesweeper.core.populate_grid = (function minesweeper$core$populate_grid(p__13426,grid,num_mines,seed){
var vec__13430 = p__13426;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13430,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13430,(1),null);
var seed__$1 = seed;
var mines = (0);
var grid__$1 = grid;
while(true){
var row = minesweeper.core.random_int(seed__$1,rows);
var col = minesweeper.core.random_int(((10000) + seed__$1),cols);
var is_mine = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
if((mines < num_mines)){
var G__13433 = (seed__$1 + (1));
var G__13434 = ((is_mine)?mines:(mines + (1)));
var G__13435 = ((is_mine)?grid__$1:cljs.core.assoc_in(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.cst$kw$X));
seed__$1 = G__13433;
mines = G__13434;
grid__$1 = G__13435;
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
minesweeper.core.can_spread_sweep_QMARK_ = (function minesweeper$core$can_spread_sweep_QMARK_(p__13436,grid,mask,flags,p__13437){
var vec__13450 = p__13436;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13450,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13450,(1),null);
var vec__13453 = p__13437;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13453,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13453,(1),null);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var num_flags = (function (){var G__13456 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null);
var G__13457 = flags;
var G__13458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (minesweeper.core.count_surrounding_ones.cljs$core$IFn$_invoke$arity$3 ? minesweeper.core.count_surrounding_ones.cljs$core$IFn$_invoke$arity$3(G__13456,G__13457,G__13458) : minesweeper.core.count_surrounding_ones.call(null,G__13456,G__13457,G__13458));
})();
var num_hidden = (function (){var G__13459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null);
var G__13460 = mask;
var G__13461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (minesweeper.core.count_surrounding_zeros.cljs$core$IFn$_invoke$arity$3 ? minesweeper.core.count_surrounding_zeros.cljs$core$IFn$_invoke$arity$3(G__13459,G__13460,G__13461) : minesweeper.core.count_surrounding_zeros.call(null,G__13459,G__13460,G__13461));
})();
return ((value > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,num_flags)) && ((num_flags < num_hidden));
});
/**
 * Returns a flat vector of [row col value] vectors to enable easy iteration over
 *   the grid.
 */
minesweeper.core.flatten_grid = (function minesweeper$core$flatten_grid(grid){
var iter__7184__auto__ = (function minesweeper$core$flatten_grid_$_iter__13503(s__13504){
return (new cljs.core.LazySeq(null,(function (){
var s__13504__$1 = s__13504;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13504__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__13527 = cljs.core.first(xs__5205__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13527,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13527,(1),null);
var iterys__7180__auto__ = ((function (s__13504__$1,vec__13527,i,row,xs__5205__auto__,temp__4657__auto__){
return (function minesweeper$core$flatten_grid_$_iter__13503_$_iter__13505(s__13506){
return (new cljs.core.LazySeq(null,((function (s__13504__$1,vec__13527,i,row,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__13506__$1 = s__13506;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__13506__$1);
if(temp__4657__auto____$1){
var s__13506__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13506__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__13506__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__13508 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__13507 = (0);
while(true){
if((i__13507 < size__7183__auto__)){
var vec__13538 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__13507);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(1),null);
cljs.core.chunk_append(b__13508,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null));

var G__13544 = (i__13507 + (1));
i__13507 = G__13544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13508),minesweeper$core$flatten_grid_$_iter__13503_$_iter__13505(cljs.core.chunk_rest(s__13506__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13508),null);
}
} else {
var vec__13541 = cljs.core.first(s__13506__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13541,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13541,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null),minesweeper$core$flatten_grid_$_iter__13503_$_iter__13505(cljs.core.rest(s__13506__$2)));
}
} else {
return null;
}
break;
}
});})(s__13504__$1,vec__13527,i,row,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__13504__$1,vec__13527,i,row,xs__5205__auto__,temp__4657__auto__))
;
var fs__7181__auto__ = cljs.core.seq(iterys__7180__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__7181__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__7181__auto__,minesweeper$core$flatten_grid_$_iter__13503(cljs.core.rest(s__13504__$1)));
} else {
var G__13545 = cljs.core.rest(s__13504__$1);
s__13504__$1 = G__13545;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__13550){
var vec__13551 = p__13550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13551,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13551,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13551,(2),null);
return (sum + n);
}),(0),minesweeper.core.flatten_grid(grid));
});
minesweeper.core.count_in_grid = (function minesweeper$core$count_in_grid(grid,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (total,p__13558){
var vec__13559 = p__13558;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13559,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13559,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13559,(2),null);
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
minesweeper.core.label_grid = (function minesweeper$core$label_grid(p__13563,grid){
var vec__13575 = p__13563;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13575,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13575,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13575,rows,cols){
return (function (labelled,p__13578){
var vec__13579 = p__13578;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13579,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,val)){
var neighbours = minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (neighbours,vec__13579,i,j,val,vec__13575,rows,cols){
return (function (labelled__$1,p__13582){
var vec__13583 = p__13582;
var ni = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13583,(0),null);
var nj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13583,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(labelled__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ni,nj], null),((function (vec__13583,ni,nj,neighbours,vec__13579,i,j,val,vec__13575,rows,cols){
return (function (p1__13562_SHARP_){
if(typeof p1__13562_SHARP_ === 'number'){
return (p1__13562_SHARP_ + (1));
} else {
return p1__13562_SHARP_;
}
});})(vec__13583,ni,nj,neighbours,vec__13579,i,j,val,vec__13575,rows,cols))
);
});})(neighbours,vec__13579,i,j,val,vec__13575,rows,cols))
,labelled,neighbours);
} else {
return labelled;
}
});})(vec__13575,rows,cols))
,grid,minesweeper.core.flatten_grid(grid));
});
/**
 * Sets the grid to value at each cell.
 */
minesweeper.core.set_in_grid = (function minesweeper$core$set_in_grid(grid,cells,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grid__$1,p__13590){
var vec__13591 = p__13590;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13591,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13591,(1),null);
return cljs.core.assoc_in(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),value);
}),grid,cells);
});
/**
 * List of values at the locations given by cells.
 */
minesweeper.core.values_at = (function minesweeper$core$values_at(grid,cells){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13594_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,p1__13594_SHARP_);
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
var args13595 = [];
var len__7479__auto___13618 = arguments.length;
var i__7480__auto___13619 = (0);
while(true){
if((i__7480__auto___13619 < len__7479__auto___13618)){
args13595.push((arguments[i__7480__auto___13619]));

var G__13620 = (i__7480__auto___13619 + (1));
i__7480__auto___13619 = G__13620;
continue;
} else {
}
break;
}

var G__13597 = args13595.length;
switch (G__13597) {
case 3:
return minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13595.length)].join('')));

}
});

minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$3 = (function (p__13598,grid,p__13599){
var vec__13600 = p__13598;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13600,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13600,(1),null);
var vec__13603 = p__13599;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13603,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13603,(1),null);
return minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.PersistentHashSet.EMPTY);
});

minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$4 = (function (p__13606,grid,p__13607,region){
var vec__13608 = p__13606;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13608,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13608,(1),null);
var vec__13611 = p__13607;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13611,(1),null);
var neighbours = minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var region__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (neighbours,region__$1,vec__13608,rows,cols,vec__13611,row,col){
return (function (region__$2,p__13614){
var vec__13615 = p__13614;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13615,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13615,(1),null);
if(!(cljs.core.contains_QMARK_(region__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(region__$2,minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null),region__$2));
} else {
return region__$2;
}
});})(neighbours,region__$1,vec__13608,rows,cols,vec__13611,row,col))
,region__$1,neighbours);
} else {
return region__$1;
}
});

minesweeper.core.sweep_cell.cljs$lang$maxFixedArity = 4;

/**
 * Returns the region to be swept.
 */
minesweeper.core.sweep_cells = (function minesweeper$core$sweep_cells(p__13622,grid,cells){
var vec__13626 = p__13622;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13626,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13626,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13626,rows,cols){
return (function (region,cell){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(region,minesweeper.core.sweep_cell.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,cell));
});})(vec__13626,rows,cols))
,cljs.core.PersistentHashSet.EMPTY,cells);
});
/**
 * Flag any unflagged mines.
 */
minesweeper.core.flag_remaining = (function minesweeper$core$flag_remaining(flags,grid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (flags__$1,p__13633){
var vec__13634 = p__13633;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13634,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13634,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13634,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,val)){
return cljs.core.assoc_in(flags__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),(1));
} else {
return flags__$1;
}
}),flags,minesweeper.core.flatten_grid(grid));
});
minesweeper.core.seed_from_time = (function minesweeper$core$seed_from_time(t){
return ((t * (1000)) | (0));
});
/**
 * Construct a fresh game state for the given difficulty level.
 */
minesweeper.core.new_state = (function minesweeper$core$new_state(level,best_times,posix_time){
var vec__13640 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13640,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13640,(1),null);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$mines], null));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$mask,cljs.core.cst$kw$best_DASH_times,cljs.core.cst$kw$grid,cljs.core.cst$kw$level_DASH_selected,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$level,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$flags],[minesweeper.core.vec_zeros_2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),(function (){var or__6404__auto__ = best_times;
if(cljs.core.truth_(or__6404__auto__)){
return or__6404__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$beginner,null,cljs.core.cst$kw$intermediate,null,cljs.core.cst$kw$expert,null], null);
}
})(),minesweeper.core.label_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),minesweeper.core.populate_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),minesweeper.core.vec_zeros_2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),num_mines,minesweeper.core.seed_from_time(posix_time))),level,posix_time,cljs.core.cst$kw$pending,cljs.core.get.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,level),(0),minesweeper.core.vec_zeros_2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null))]);
});
minesweeper.core.alive_or_pending_QMARK_ = (function minesweeper$core$alive_or_pending_QMARK_(state){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pending,null,cljs.core.cst$kw$alive,null], null), null),cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state));
});
minesweeper.core.posix_time_BANG_ = (function minesweeper$core$posix_time_BANG_(){
return ((new Date()).getTime() / (1000));
});
/**
 * If the time elapsed repesents a new best time, update the app state.
 */
minesweeper.core.update_best_times = (function minesweeper$core$update_best_times(state,posix_time){
var level = cljs.core.cst$kw$level_DASH_selected.cljs$core$IFn$_invoke$arity$1(state);
var time_started = cljs.core.cst$kw$time_DASH_started.cljs$core$IFn$_invoke$arity$1(state);
var elapsed = ((posix_time - time_started) | (0));
var current_best = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$best_DASH_times,level], null));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,current_best)) || ((elapsed < current_best))){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$best_DASH_times,level], null),elapsed);
} else {
return state;
}
});
minesweeper.core.do_sweep_cell = (function minesweeper$core$do_sweep_cell(state,posix_time,p__13643){
var vec__13650 = p__13643;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13650,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13650,(1),null);
var vec__13653 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13653,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13653,(1),null);
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
return minesweeper.core.update_best_times(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,cljs.core.cst$kw$flags,minesweeper.core.flag_remaining(new_flags,grid)),posix_time);
} else {
return new_state;
}
});
minesweeper.core.do_sweep_spread = (function minesweeper$core$do_sweep_spread(state,posix_time,p__13656){
var vec__13663 = p__13656;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13663,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13663,(1),null);
var vec__13666 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13666,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13666,(1),null);
var grid = cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state);
var mask = cljs.core.cst$kw$mask.cljs$core$IFn$_invoke$arity$1(state);
var flags = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(state);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
if(cljs.core.truth_(minesweeper.core.can_spread_sweep_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13666,rows,cols,grid,mask,flags,num_mines,vec__13663,row,col){
return (function (st,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(flags,cell))){
return minesweeper.core.do_sweep_cell(st,posix_time,cell);
} else {
return st;
}
});})(vec__13666,rows,cols,grid,mask,flags,num_mines,vec__13663,row,col))
,state,minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
} else {
return state;
}
});
minesweeper.core.flag_cell = (function minesweeper$core$flag_cell(state,p__13669){
var vec__13673 = p__13669;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13673,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13673,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(1));
});
minesweeper.core.unflag_cell = (function minesweeper$core$unflag_cell(state,p__13676){
var vec__13680 = p__13676;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13680,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13680,(1),null);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(0));
});
minesweeper.core.start_game = (function minesweeper$core$start_game(state,posix_time){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$alive),cljs.core.cst$kw$time_DASH_started,posix_time);
});
/**
 * Any components that need regular refreshing can depend on :tick-count,
 *   which is incremented periodically.
 */
minesweeper.core.tick = (function minesweeper$core$tick(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$tick_DASH_count,cljs.core.inc);
});
minesweeper.core.start_game_if_pending = (function minesweeper$core$start_game_if_pending(state,posix_time){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pending,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state))){
return minesweeper.core.start_game(state,posix_time);
} else {
return state;
}
});
var G__13683_13686 = cljs.core.cst$kw$get_DASH_local_DASH_storage_DASH_key;
var G__13684_13687 = ((function (G__13683_13686){
return (function (cofx,name){
var app_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13685 = localStorage.getItem("cljsmines");
return JSON.parse(G__13685);
})(),cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_data,name));
});})(G__13683_13686))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__13683_13686,G__13684_13687) : re_frame.core.reg_cofx.call(null,G__13683_13686,G__13684_13687));
var G__13688_13690 = cljs.core.cst$kw$posix_DASH_time;
var G__13689_13691 = ((function (G__13688_13690){
return (function (cofx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,cljs.core.cst$kw$posix_DASH_time,minesweeper.core.posix_time_BANG_());
});})(G__13688_13690))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__13688_13690,G__13689_13691) : re_frame.core.reg_cofx.call(null,G__13688_13690,G__13689_13691));
var G__13692_13699 = cljs.core.cst$kw$set_DASH_local_DASH_storage_DASH_key;
var G__13693_13700 = ((function (G__13692_13699){
return (function (p__13694){
var map__13695 = p__13694;
var map__13695__$1 = ((((!((map__13695 == null)))?((((map__13695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13695):map__13695);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13695__$1,cljs.core.cst$kw$name);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13695__$1,cljs.core.cst$kw$value);
var app_data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var G__13697 = localStorage.getItem("cljsmines");
return JSON.parse(G__13697);
})());
return localStorage.setItem("cljsmines",(function (){var G__13698 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app_data,name,value));
return JSON.stringify(G__13698);
})());
});})(G__13692_13699))
;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__13692_13699,G__13693_13700) : re_frame.core.reg_fx.call(null,G__13692_13699,G__13693_13700));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$initialise,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13701 = cljs.core.cst$kw$get_DASH_local_DASH_storage_DASH_key;
var G__13702 = cljs.core.cst$kw$best_DASH_times;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$2(G__13701,G__13702) : re_frame.core.inject_cofx.call(null,G__13701,G__13702));
})(),(function (){var G__13703 = cljs.core.cst$kw$posix_DASH_time;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__13703) : re_frame.core.inject_cofx.call(null,G__13703));
})()], null),(function (cofx,_){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,minesweeper.core.new_state(cljs.core.cst$kw$intermediate,cljs.core.cst$kw$best_DASH_times.cljs$core$IFn$_invoke$arity$1(cofx),cljs.core.cst$kw$posix_DASH_time.cljs$core$IFn$_invoke$arity$1(cofx))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tick,(function (state,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alive,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state))){
return minesweeper.core.tick(state);
} else {
return state;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$sweep,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13704 = cljs.core.cst$kw$posix_DASH_time;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__13704) : re_frame.core.inject_cofx.call(null,G__13704));
})()], null),(function (cofx,p__13705){
var vec__13706 = p__13705;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13706,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13706,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13706,(2),null);
var state = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx);
var new_state = (cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))?minesweeper.core.do_sweep_cell(minesweeper.core.start_game_if_pending(state,cljs.core.cst$kw$posix_DASH_time.cljs$core$IFn$_invoke$arity$1(cofx)),cljs.core.cst$kw$posix_DASH_time.cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)):state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_state,cljs.core.cst$kw$set_DASH_local_DASH_storage_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"best-times",cljs.core.cst$kw$value,cljs.core.cst$kw$best_DASH_times.cljs$core$IFn$_invoke$arity$1(new_state)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$reset,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13709 = cljs.core.cst$kw$posix_DASH_time;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__13709) : re_frame.core.inject_cofx.call(null,G__13709));
})()], null),(function (cofx,_){
var state = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,minesweeper.core.new_state(cljs.core.cst$kw$level_DASH_selected.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$best_DASH_times.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$posix_DASH_time.cljs$core$IFn$_invoke$arity$1(cofx))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$spread_DASH_sweep,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13710 = cljs.core.cst$kw$posix_DASH_time;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__13710) : re_frame.core.inject_cofx.call(null,G__13710));
})()], null),(function (cofx,p__13711){
var vec__13712 = p__13711;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13712,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13712,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13712,(2),null);
var state = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx);
var new_state = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alive,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state)))?minesweeper.core.do_sweep_spread(state,cljs.core.cst$kw$posix_DASH_time.cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)):state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$db,new_state,cljs.core.cst$kw$set_DASH_local_DASH_storage_DASH_key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"best-times",cljs.core.cst$kw$value,cljs.core.cst$kw$best_DASH_times.cljs$core$IFn$_invoke$arity$1(new_state)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$flag,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13715 = cljs.core.cst$kw$posix_DASH_time;
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__13715) : re_frame.core.inject_cofx.call(null,G__13715));
})()], null),(function (cofx,p__13716){
var vec__13717 = p__13716;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13717,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13717,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13717,(2),null);
var state = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cofx);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$db,(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))?minesweeper.core.flag_cell(minesweeper.core.start_game_if_pending(state,cljs.core.cst$kw$posix_DASH_time.cljs$core$IFn$_invoke$arity$1(cofx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)):state)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unflag,(function (state,p__13720){
var vec__13721 = p__13720;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13721,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13721,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13721,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alive,cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state))){
return minesweeper.core.unflag_cell(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return state;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$level_DASH_select,(function (state,p__13724){
var vec__13725 = p__13724;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13725,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13725,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$level_DASH_selected,level);
}));
var G__13728_13730 = cljs.core.cst$kw$grid_DASH_size;
var G__13729_13731 = ((function (G__13728_13730){
return (function (state,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
});})(G__13728_13730))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13728_13730,G__13729_13731) : re_frame.core.reg_sub.call(null,G__13728_13730,G__13729_13731));
var G__13732_13734 = cljs.core.cst$kw$game_DASH_state;
var G__13733_13735 = ((function (G__13732_13734){
return (function (state,_){
return cljs.core.cst$kw$game_DASH_state.cljs$core$IFn$_invoke$arity$1(state);
});})(G__13732_13734))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13732_13734,G__13733_13735) : re_frame.core.reg_sub.call(null,G__13732_13734,G__13733_13735));
var G__13736_13742 = cljs.core.cst$kw$grid_DASH_value;
var G__13737_13743 = ((function (G__13736_13742){
return (function (state,p__13738){
var vec__13739 = p__13738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13739,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13739,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13739,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grid,row,col], null));
});})(G__13736_13742))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13736_13742,G__13737_13743) : re_frame.core.reg_sub.call(null,G__13736_13742,G__13737_13743));
var G__13744_13750 = cljs.core.cst$kw$mask_DASH_value;
var G__13745_13751 = ((function (G__13744_13750){
return (function (state,p__13746){
var vec__13747 = p__13746;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13747,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13747,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13747,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mask,row,col], null));
});})(G__13744_13750))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13744_13750,G__13745_13751) : re_frame.core.reg_sub.call(null,G__13744_13750,G__13745_13751));
var G__13752_13758 = cljs.core.cst$kw$flags_DASH_value;
var G__13753_13759 = ((function (G__13752_13758){
return (function (state,p__13754){
var vec__13755 = p__13754;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13755,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13755,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13755,(2),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null));
});})(G__13752_13758))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13752_13758,G__13753_13759) : re_frame.core.reg_sub.call(null,G__13752_13758,G__13753_13759));
var G__13760_13762 = cljs.core.cst$kw$best_DASH_time;
var G__13761_13763 = ((function (G__13760_13762){
return (function (state,_){
var level = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$key], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$best_DASH_times,level], null));
});})(G__13760_13762))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13760_13762,G__13761_13763) : re_frame.core.reg_sub.call(null,G__13760_13762,G__13761_13763));
var G__13764_13766 = cljs.core.cst$kw$num_DASH_remaining;
var G__13765_13767 = ((function (G__13764_13766){
return (function (state,_){
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
var flags = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(state);
var num_flagged = minesweeper.core.sum_grid(flags);
return (num_mines - num_flagged);
});})(G__13764_13766))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13764_13766,G__13765_13767) : re_frame.core.reg_sub.call(null,G__13764_13766,G__13765_13767));
var G__13768_13770 = cljs.core.cst$kw$time_DASH_started;
var G__13769_13771 = ((function (G__13768_13770){
return (function (state,_){
return cljs.core.cst$kw$time_DASH_started.cljs$core$IFn$_invoke$arity$1(state);
});})(G__13768_13770))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13768_13770,G__13769_13771) : re_frame.core.reg_sub.call(null,G__13768_13770,G__13769_13771));
var G__13772_13774 = cljs.core.cst$kw$tick_DASH_count;
var G__13773_13775 = ((function (G__13772_13774){
return (function (state,_){
return cljs.core.cst$kw$tick_DASH_count.cljs$core$IFn$_invoke$arity$1(state);
});})(G__13772_13774))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13772_13774,G__13773_13775) : re_frame.core.reg_sub.call(null,G__13772_13774,G__13773_13775));
var G__13776_13778 = cljs.core.cst$kw$level_DASH_selected;
var G__13777_13779 = ((function (G__13776_13778){
return (function (state,_){
return cljs.core.cst$kw$level_DASH_selected.cljs$core$IFn$_invoke$arity$1(state);
});})(G__13776_13778))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13776_13778,G__13777_13779) : re_frame.core.reg_sub.call(null,G__13776_13778,G__13777_13779));
var G__13780_13789 = cljs.core.cst$kw$can_DASH_spread;
var G__13781_13790 = ((function (G__13780_13789){
return (function (state,p__13782){
var vec__13783 = p__13782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13783,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13783,(1),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13783,(2),null);
var vec__13786 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(1),null);
var grid = cljs.core.cst$kw$grid.cljs$core$IFn$_invoke$arity$1(state);
var mask = cljs.core.cst$kw$mask.cljs$core$IFn$_invoke$arity$1(state);
var flags = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(state);
return minesweeper.core.can_spread_sweep_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});})(G__13780_13789))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__13780_13789,G__13781_13790) : re_frame.core.reg_sub.call(null,G__13780_13789,G__13781_13790));
minesweeper.core.controls_view = (function minesweeper$core$controls_view(){
var level = (function (){var G__13795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level_DASH_selected], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13795) : re_frame.core.subscribe.call(null,G__13795));
})();
return ((function (level){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_panel,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$ms_DASH_control,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(level) : cljs.core.deref.call(null,level)),cljs.core.cst$kw$onChange,((function (level){
return (function (p1__13791_SHARP_){
var G__13796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level_DASH_select,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__13791_SHARP_.target.value)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13796) : re_frame.core.dispatch.call(null,G__13796));
});})(level))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"beginner"], null),"Beginner"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"intermediate"], null),"Intermediate"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"expert"], null),"Expert"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$ms_DASH_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$onClick,((function (level){
return (function (){
var G__13797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reset], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13797) : re_frame.core.dispatch.call(null,G__13797));
});})(level))
], null),"Reset"], null)], null);
});
;})(level))
});
minesweeper.core.timer_view = (function minesweeper$core$timer_view(){
var time_started = (function (){var G__13802 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$time_DASH_started], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13802) : re_frame.core.subscribe.call(null,G__13802));
})();
var tick_count = (function (){var G__13803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick_DASH_count], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13803) : re_frame.core.subscribe.call(null,G__13803));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_timer,"Time ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(function (){var G__13804 = "%03d";
var G__13805 = ((minesweeper.core.posix_time_BANG_() - (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(time_started) : cljs.core.deref.call(null,time_started))) | (0));
return goog.string.format(G__13804,G__13805);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$ms_DASH_display_DASH_none,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(tick_count) : cljs.core.deref.call(null,tick_count))], null)], null);
});
minesweeper.core.info_view = (function minesweeper$core$info_view(){
var best_time = (function (){var G__13812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$best_DASH_time], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13812) : re_frame.core.subscribe.call(null,G__13812));
})();
var num_remaining = (function (){var G__13813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$num_DASH_remaining], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13813) : re_frame.core.subscribe.call(null,G__13813));
})();
return ((function (best_time,num_remaining){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.timer_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_high_DASH_score,"Best ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(best_time) : cljs.core.deref.call(null,best_time)) == null))?"---":(function (){var G__13814 = "%03d";
var G__13815 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(best_time) : cljs.core.deref.call(null,best_time));
return goog.string.format(G__13814,G__13815);
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_remaining,"Mines ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(function (){var G__13816 = "%03d";
var G__13817 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(num_remaining) : cljs.core.deref.call(null,num_remaining));
return goog.string.format(G__13816,G__13817);
})()], null)], null)], null);
});
;})(best_time,num_remaining))
});
minesweeper.core.hidden_cell_view = (function minesweeper$core$hidden_cell_view(row,col){
var flag = (function (){var G__13824 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags_DASH_value,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13824) : re_frame.core.subscribe.call(null,G__13824));
})();
var value = (function (){var G__13825 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grid_DASH_value,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13825) : re_frame.core.subscribe.call(null,G__13825));
})();
var game_state = (function (){var G__13826 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13826) : re_frame.core.subscribe.call(null,G__13826));
})();
return ((function (flag,value,game_state){
return (function (){
var status_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dead,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_state) : cljs.core.deref.call(null,game_state))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value))))?"ms-mine":"ms-safe"):"");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(flag) : cljs.core.deref.call(null,flag)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,[cljs.core.str("ms-hidden ms-flagged "),cljs.core.str(status_str)].join(''),cljs.core.cst$kw$onContextMenu,((function (status_str,flag,value,game_state){
return (function (){
var G__13827 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unflag,row,col], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13827) : re_frame.core.dispatch.call(null,G__13827));
});})(status_str,flag,value,game_state))
], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_cell,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$className,[cljs.core.str("ms-hidden "),cljs.core.str(status_str)].join(''),cljs.core.cst$kw$onClick,((function (status_str,flag,value,game_state){
return (function (){
var G__13828 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sweep,row,col], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13828) : re_frame.core.dispatch.call(null,G__13828));
});})(status_str,flag,value,game_state))
,cljs.core.cst$kw$onContextMenu,((function (status_str,flag,value,game_state){
return (function (){
var G__13829 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flag,row,col], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13829) : re_frame.core.dispatch.call(null,G__13829));
});})(status_str,flag,value,game_state))
], null)], null);
}
});
;})(flag,value,game_state))
});
minesweeper.core.exposed_cell_view = (function minesweeper$core$exposed_cell_view(row,col){
var value = (function (){var G__13835 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grid_DASH_value,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13835) : re_frame.core.subscribe.call(null,G__13835));
})();
var str_val = (function (){var G__13836 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__13836)){
return "zero";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),G__13836)){
return "seven";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__13836)){
return "one";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),G__13836)){
return "four";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),G__13836)){
return "six";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__13836)){
return "three";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__13836)){
return "two";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),G__13836)){
return "five";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13836)){
return "mine";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),G__13836)){
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
var can_spread = (function (){var G__13837 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$can_DASH_spread,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13837) : re_frame.core.subscribe.call(null,G__13837));
})();
return ((function (value,str_val,can_spread){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,[cljs.core.str("ms-revealed "),cljs.core.str([cljs.core.str("ms-"),cljs.core.str(str_val)].join('')),cljs.core.str((cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(can_spread) : cljs.core.deref.call(null,can_spread)))?" ms-spread":null))].join(''),cljs.core.cst$kw$onClick,((function (value,str_val,can_spread){
return (function (){
var G__13838 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$spread_DASH_sweep,row,col], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13838) : re_frame.core.dispatch.call(null,G__13838));
});})(value,str_val,can_spread))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,(function (){var G__13839 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.deref.call(null,value));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13839)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__13839)){
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
var mask_val = (function (){var G__13841 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$mask_DASH_value,row,col], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13841) : re_frame.core.subscribe.call(null,G__13841));
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
var grid_size = (function (){var G__13873 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$grid_DASH_size], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13873) : re_frame.core.subscribe.call(null,G__13873));
})();
return ((function (grid_size){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_grid,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7184__auto__ = ((function (grid_size){
return (function minesweeper$core$grid_view_$_iter__13874(s__13875){
return (new cljs.core.LazySeq(null,((function (grid_size){
return (function (){
var s__13875__$1 = s__13875;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13875__$1);
if(temp__4657__auto__){
var s__13875__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13875__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__13875__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__13877 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__13876 = (0);
while(true){
if((i__13876 < size__7183__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__13876);
cljs.core.chunk_append(b__13877,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7184__auto__ = ((function (i__13876,r,c__7182__auto__,size__7183__auto__,b__13877,s__13875__$2,temp__4657__auto__,grid_size){
return (function minesweeper$core$grid_view_$_iter__13874_$_iter__13892(s__13893){
return (new cljs.core.LazySeq(null,((function (i__13876,r,c__7182__auto__,size__7183__auto__,b__13877,s__13875__$2,temp__4657__auto__,grid_size){
return (function (){
var s__13893__$1 = s__13893;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__13893__$1);
if(temp__4657__auto____$1){
var s__13893__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13893__$2)){
var c__7182__auto____$1 = cljs.core.chunk_first(s__13893__$2);
var size__7183__auto____$1 = cljs.core.count(c__7182__auto____$1);
var b__13895 = cljs.core.chunk_buffer(size__7183__auto____$1);
if((function (){var i__13894 = (0);
while(true){
if((i__13894 < size__7183__auto____$1)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto____$1,i__13894);
cljs.core.chunk_append(b__13895,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.cell_view,r,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(r),cljs.core.str(c)].join('')], null)));

var G__13904 = (i__13894 + (1));
i__13894 = G__13904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13895),minesweeper$core$grid_view_$_iter__13874_$_iter__13892(cljs.core.chunk_rest(s__13893__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13895),null);
}
} else {
var c = cljs.core.first(s__13893__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.cell_view,r,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(r),cljs.core.str(c)].join('')], null)),minesweeper$core$grid_view_$_iter__13874_$_iter__13892(cljs.core.rest(s__13893__$2)));
}
} else {
return null;
}
break;
}
});})(i__13876,r,c__7182__auto__,size__7183__auto__,b__13877,s__13875__$2,temp__4657__auto__,grid_size))
,null,null));
});})(i__13876,r,c__7182__auto__,size__7183__auto__,b__13877,s__13875__$2,temp__4657__auto__,grid_size))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(grid_size) : cljs.core.deref.call(null,grid_size)),(1))));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,r], null)));

var G__13905 = (i__13876 + (1));
i__13876 = G__13905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13877),minesweeper$core$grid_view_$_iter__13874(cljs.core.chunk_rest(s__13875__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13877),null);
}
} else {
var r = cljs.core.first(s__13875__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_row,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__7184__auto__ = ((function (r,s__13875__$2,temp__4657__auto__,grid_size){
return (function minesweeper$core$grid_view_$_iter__13874_$_iter__13898(s__13899){
return (new cljs.core.LazySeq(null,((function (r,s__13875__$2,temp__4657__auto__,grid_size){
return (function (){
var s__13899__$1 = s__13899;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__13899__$1);
if(temp__4657__auto____$1){
var s__13899__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13899__$2)){
var c__7182__auto__ = cljs.core.chunk_first(s__13899__$2);
var size__7183__auto__ = cljs.core.count(c__7182__auto__);
var b__13901 = cljs.core.chunk_buffer(size__7183__auto__);
if((function (){var i__13900 = (0);
while(true){
if((i__13900 < size__7183__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7182__auto__,i__13900);
cljs.core.chunk_append(b__13901,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.cell_view,r,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(r),cljs.core.str(c)].join('')], null)));

var G__13906 = (i__13900 + (1));
i__13900 = G__13906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13901),minesweeper$core$grid_view_$_iter__13874_$_iter__13898(cljs.core.chunk_rest(s__13899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13901),null);
}
} else {
var c = cljs.core.first(s__13899__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.cell_view,r,c], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str(r),cljs.core.str(c)].join('')], null)),minesweeper$core$grid_view_$_iter__13874_$_iter__13898(cljs.core.rest(s__13899__$2)));
}
} else {
return null;
}
break;
}
});})(r,s__13875__$2,temp__4657__auto__,grid_size))
,null,null));
});})(r,s__13875__$2,temp__4657__auto__,grid_size))
;
return iter__7184__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(grid_size) : cljs.core.deref.call(null,grid_size)),(1))));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,r], null)),minesweeper$core$grid_view_$_iter__13874(cljs.core.rest(s__13875__$2)));
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
var game_state = (function (){var G__13910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__13910) : re_frame.core.subscribe.call(null,G__13910));
})();
return ((function (game_state){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$ms_DASH_cljsmines,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$className,(function (){var G__13911 = ((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_state) : cljs.core.deref.call(null,game_state)) instanceof cljs.core.Keyword))?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(game_state) : cljs.core.deref.call(null,game_state)).fqn:null);
switch (G__13911) {
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
return (function (p1__13907_SHARP_){
return p1__13907_SHARP_.preventDefault();
});})(game_state))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.info_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.grid_view], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.controls_view], null)], null);
});
;})(game_state))
});
if(typeof minesweeper.core.timer !== 'undefined'){
} else {
minesweeper.core.timer = (function (){var G__13913 = (function (){
var G__13915 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__13915) : re_frame.core.dispatch.call(null,G__13915));
});
var G__13914 = (500);
return setInterval(G__13913,G__13914);
})();
}
minesweeper.core.run = (function minesweeper$core$run(){
var G__13917_13918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialise], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__13917_13918) : re_frame.core.dispatch_sync.call(null,G__13917_13918));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper.core.main_view], null),goog.dom.getElement("cljsmines"));
});
goog.exportSymbol('minesweeper.core.run', minesweeper.core.run);

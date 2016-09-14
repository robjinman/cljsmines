// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('minesweeper.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('goog.string.format');
goog.require('om.next');
cljs.core.enable_console_print_BANG_();
minesweeper.core.levels = new cljs.core.PersistentArrayMap(null, 3, ["beginner",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),cljs.core.cst$kw$mines,(10)], null),"intermediate",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),cljs.core.cst$kw$mines,(40)], null),"expert",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(30)], null),cljs.core.cst$kw$mines,(99)], null)], null);
minesweeper.core.vec_zeros = (function minesweeper$core$vec_zeros(n){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
});
minesweeper.core.vec_zeros_2 = (function minesweeper$core$vec_zeros_2(p__13683){
var vec__13685 = p__13683;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(1),null);
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,minesweeper.core.vec_zeros(cols)));
});
minesweeper.core.neighbour_coords = (function minesweeper$core$neighbour_coords(p__13686,p__13687){
var vec__13692 = p__13686;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13692,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13692,(1),null);
var vec__13693 = p__13687;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13693,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13693,(1),null);
var indices = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices,vec__13692,rows,cols,vec__13693,row,col){
return (function (coords,p__13694){
var vec__13695 = p__13694;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13695,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13695,(1),null);
var x = (row + i);
var y = (col + j);
if(((((-1) < x)) && ((x < rows))) && ((((-1) < y)) && ((y < cols)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return coords;
}
});})(indices,vec__13692,rows,cols,vec__13693,row,col))
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
minesweeper.core.count_surrounding = (function minesweeper$core$count_surrounding(value,p__13696,grid,p__13697){
var vec__13700 = p__13696;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13700,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13700,(1),null);
var vec__13701 = p__13697;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13701,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13700,rows,cols,vec__13701,row,col){
return (function (count,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,cell))){
return (count + (1));
} else {
return count;
}
});})(vec__13700,rows,cols,vec__13701,row,col))
,(0),minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
});
minesweeper.core.count_surrounding_zeros = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(minesweeper.core.count_surrounding,(0));
minesweeper.core.count_surrounding_ones = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(minesweeper.core.count_surrounding,(1));
/**
 * Takes an empty grid and populates it randomly with mines.
 */
minesweeper.core.populate_grid = (function minesweeper$core$populate_grid(p__13702,grid,num_mines){
var vec__13704 = p__13702;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13704,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13704,(1),null);
var i = (0);
var grid__$1 = grid;
while(true){
var row = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(rows);
var col = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(cols);
var is_mine = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
if((i < num_mines)){
var G__13705 = ((is_mine)?i:(i + (1)));
var G__13706 = ((is_mine)?grid__$1:cljs.core.assoc_in(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.cst$kw$X));
i = G__13705;
grid__$1 = G__13706;
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
minesweeper.core.can_spread_sweep_QMARK_ = (function minesweeper$core$can_spread_sweep_QMARK_(p__13707,grid,mask,flags,p__13708){
var vec__13717 = p__13707;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13717,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13717,(1),null);
var vec__13718 = p__13708;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13718,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13718,(1),null);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var num_flags = (function (){var G__13719 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null);
var G__13720 = flags;
var G__13721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (minesweeper.core.count_surrounding_ones.cljs$core$IFn$_invoke$arity$3 ? minesweeper.core.count_surrounding_ones.cljs$core$IFn$_invoke$arity$3(G__13719,G__13720,G__13721) : minesweeper.core.count_surrounding_ones.call(null,G__13719,G__13720,G__13721));
})();
var num_hidden = (function (){var G__13722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null);
var G__13723 = mask;
var G__13724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (minesweeper.core.count_surrounding_zeros.cljs$core$IFn$_invoke$arity$3 ? minesweeper.core.count_surrounding_zeros.cljs$core$IFn$_invoke$arity$3(G__13722,G__13723,G__13724) : minesweeper.core.count_surrounding_zeros.call(null,G__13722,G__13723,G__13724));
})();
return ((value > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,num_flags)) && ((num_flags < num_hidden));
});
/**
 * Returns a flat vector of [row col value] vectors to enable easy iteration over
 *   the grid.
 */
minesweeper.core.flatten_grid = (function minesweeper$core$flatten_grid(grid){
var iter__5443__auto__ = (function minesweeper$core$flatten_grid_$_iter__13746(s__13747){
return (new cljs.core.LazySeq(null,(function (){
var s__13747__$1 = s__13747;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13747__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__13760 = cljs.core.first(xs__4977__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13760,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13760,(1),null);
var iterys__5439__auto__ = ((function (s__13747__$1,vec__13760,i,row,xs__4977__auto__,temp__4425__auto__){
return (function minesweeper$core$flatten_grid_$_iter__13746_$_iter__13748(s__13749){
return (new cljs.core.LazySeq(null,((function (s__13747__$1,vec__13760,i,row,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__13749__$1 = s__13749;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__13749__$1);
if(temp__4425__auto____$1){
var s__13749__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13749__$2)){
var c__5441__auto__ = cljs.core.chunk_first(s__13749__$2);
var size__5442__auto__ = cljs.core.count(c__5441__auto__);
var b__13751 = cljs.core.chunk_buffer(size__5442__auto__);
if((function (){var i__13750 = (0);
while(true){
if((i__13750 < size__5442__auto__)){
var vec__13765 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5441__auto__,i__13750);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13765,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13765,(1),null);
cljs.core.chunk_append(b__13751,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null));

var G__13767 = (i__13750 + (1));
i__13750 = G__13767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13751),minesweeper$core$flatten_grid_$_iter__13746_$_iter__13748(cljs.core.chunk_rest(s__13749__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13751),null);
}
} else {
var vec__13766 = cljs.core.first(s__13749__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null),minesweeper$core$flatten_grid_$_iter__13746_$_iter__13748(cljs.core.rest(s__13749__$2)));
}
} else {
return null;
}
break;
}
});})(s__13747__$1,vec__13760,i,row,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__13747__$1,vec__13760,i,row,xs__4977__auto__,temp__4425__auto__))
;
var fs__5440__auto__ = cljs.core.seq(iterys__5439__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__5440__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5440__auto__,minesweeper$core$flatten_grid_$_iter__13746(cljs.core.rest(s__13747__$1)));
} else {
var G__13768 = cljs.core.rest(s__13747__$1);
s__13747__$1 = G__13768;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,grid));
});
minesweeper.core.sum_grid = (function minesweeper$core$sum_grid(grid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__13771){
var vec__13772 = p__13771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(2),null);
return (sum + n);
}),(0),minesweeper.core.flatten_grid(grid));
});
minesweeper.core.count_in_grid = (function minesweeper$core$count_in_grid(grid,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (total,p__13775){
var vec__13776 = p__13775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13776,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13776,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13776,(2),null);
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
minesweeper.core.label_grid = (function minesweeper$core$label_grid(p__13778,grid){
var vec__13784 = p__13778;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13784,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13784,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13784,rows,cols){
return (function (labelled,p__13785){
var vec__13786 = p__13785;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,val)){
var neighbours = minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (neighbours,vec__13786,i,j,val,vec__13784,rows,cols){
return (function (labelled__$1,p__13787){
var vec__13788 = p__13787;
var ni = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(0),null);
var nj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(labelled__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ni,nj], null),((function (vec__13788,ni,nj,neighbours,vec__13786,i,j,val,vec__13784,rows,cols){
return (function (p1__13777_SHARP_){
if(typeof p1__13777_SHARP_ === 'number'){
return (p1__13777_SHARP_ + (1));
} else {
return p1__13777_SHARP_;
}
});})(vec__13788,ni,nj,neighbours,vec__13786,i,j,val,vec__13784,rows,cols))
);
});})(neighbours,vec__13786,i,j,val,vec__13784,rows,cols))
,labelled,neighbours);
} else {
return labelled;
}
});})(vec__13784,rows,cols))
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
 * If this cell is zero, add its neighbours to the region. Repeat for each neighbour,
 *   recursively.
 */
minesweeper.core.zero_region = (function minesweeper$core$zero_region(p__13789,grid,p__13790,region){
var vec__13799 = p__13789;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13799,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13799,(1),null);
var vec__13800 = p__13790;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13800,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13800,(1),null);
var neighbours = minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var region__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (neighbours,region__$1,vec__13799,rows,cols,vec__13800,row,col){
return (function (region__$2,p__13801){
var vec__13802 = p__13801;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(1),null);
if(!(cljs.core.contains_QMARK_(region__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(region__$2,minesweeper$core$zero_region(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null),region__$2));
} else {
return region__$2;
}
});})(neighbours,region__$1,vec__13799,rows,cols,vec__13800,row,col))
,region__$1,neighbours);
} else {
return region__$1;
}
});
/**
 * Sets the grid to value at each cell.
 */
minesweeper.core.set_in_grid = (function minesweeper$core$set_in_grid(grid,cells,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grid__$1,p__13805){
var vec__13806 = p__13805;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13806,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13806,(1),null);
return cljs.core.assoc_in(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),value);
}),grid,cells);
});
/**
 * List of values at the locations given by cells.
 */
minesweeper.core.values_at = (function minesweeper$core$values_at(grid,cells){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13807_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,p1__13807_SHARP_);
}),cells);
});
/**
 * Returns one of :alive, :dead, or :victorious.
 */
minesweeper.core.calc_game_state = (function minesweeper$core$calc_game_state(grid,mask,num_mines,swept_cells){
var num_hidden = minesweeper.core.count_in_grid(mask,(0));
var values = minesweeper.core.values_at(grid,swept_cells);
var dead = cljs.core.contains_QMARK_(cljs.core.set(values),cljs.core.cst$kw$X);
if(dead){
return cljs.core.cst$kw$dead;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_mines,num_hidden)){
return cljs.core.cst$kw$victorious;
} else {
return cljs.core.cst$kw$alive;
}
}
});
/**
 * Returns the region to be swept
 */
minesweeper.core.sweep_cell = (function minesweeper$core$sweep_cell(p__13808,grid,p__13809){
var vec__13812 = p__13808;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13812,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13812,(1),null);
var vec__13813 = p__13809;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13813,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13813,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
return minesweeper.core.zero_region(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], true);
}
});
/**
 * Returns the region to be swept.
 */
minesweeper.core.sweep_cells = (function minesweeper$core$sweep_cells(p__13814,grid,cells){
var vec__13816 = p__13814;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13816,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13816,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13816,rows,cols){
return (function (region,cell){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(region,minesweeper.core.sweep_cell(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,cell));
});})(vec__13816,rows,cols))
,cljs.core.PersistentHashSet.EMPTY,cells);
});
/**
 * Flag any unflagged mines.
 */
minesweeper.core.flag_remaining = (function minesweeper$core$flag_remaining(flags,grid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (flags__$1,p__13819){
var vec__13820 = p__13819;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13820,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13820,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13820,(2),null);
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
var vec__13822 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822,(1),null);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$mines], null));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$mask,cljs.core.cst$kw$grid,cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$controls,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$level,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$flags],[minesweeper.core.vec_zeros_2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),minesweeper.core.label_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),minesweeper.core.populate_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),minesweeper.core.vec_zeros_2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),num_mines)),minesweeper.core.get_high_score(level),minesweeper.core.get_time(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$level,level,cljs.core.cst$kw$react_DASH_key,"controls"], null),cljs.core.cst$kw$pending,cljs.core.get.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,level),(0),minesweeper.core.vec_zeros_2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null))]);
});
/**
 * If the time elapsed repesents a new high-score, persist it to local
 *   storage.
 */
minesweeper.core.update_high_score_BANG_ = (function minesweeper$core$update_high_score_BANG_(state){
var level = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$controls,cljs.core.cst$kw$level], null));
var time_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$time_DASH_started);
var elapsed = minesweeper.core.calc_elapsed(time_started);
var high_score = minesweeper.core.get_high_score(level);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,high_score)) || ((elapsed < high_score))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$high_DASH_score,elapsed);

return minesweeper.core.set_high_score_BANG_(level,elapsed);
} else {
return null;
}
});
/**
 * Perform the sweep, and update the app state.
 */
minesweeper.core.sweep_cell_BANG_ = (function minesweeper$core$sweep_cell_BANG_(state,p__13823){
var vec__13826 = p__13823;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13826,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13826,(1),null);
var vec__13827 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13827,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13827,(1),null);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$flags);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
var sweep_region = minesweeper.core.sweep_cell(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var new_mask = minesweeper.core.set_in_grid(mask,sweep_region,(1));
var new_flags = minesweeper.core.set_in_grid(flags,sweep_region,(0));
var game_state = minesweeper.core.calc_game_state(grid,new_mask,num_mines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$game_DASH_state,game_state);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mask,new_mask);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$flags,new_flags);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$victorious,game_state)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$flags,minesweeper.core.flag_remaining(new_flags,grid));

return minesweeper.core.update_high_score_BANG_(state);
} else {
return null;
}
});
/**
 * Perform a spread-sweep and update the app state.
 */
minesweeper.core.sweep_spread_BANG_ = (function minesweeper$core$sweep_spread_BANG_(state,p__13828){
var vec__13831 = p__13828;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13831,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13831,(1),null);
var vec__13832 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(1),null);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$flags);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
if(cljs.core.truth_(minesweeper.core.can_spread_sweep_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
var swept = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13832,rows,cols,grid,mask,flags,num_mines,vec__13831,row,col){
return (function (swept,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(flags,cell))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(swept,cell);
} else {
return swept;
}
});})(vec__13832,rows,cols,grid,mask,flags,num_mines,vec__13831,row,col))
,cljs.core.PersistentVector.EMPTY,minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
var sweep_region = minesweeper.core.sweep_cells(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,swept);
var new_mask = minesweeper.core.set_in_grid(mask,sweep_region,(1));
var new_flags = minesweeper.core.set_in_grid(flags,sweep_region,(0));
var game_state = minesweeper.core.calc_game_state(grid,new_mask,num_mines,swept);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mask,new_mask);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$flags,new_flags);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$game_DASH_state,game_state);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$victorious,game_state)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$flags,minesweeper.core.flag_remaining(flags,grid));

return minesweeper.core.update_high_score_BANG_(state);
} else {
return null;
}
} else {
return null;
}
});
minesweeper.core.flag_cell_BANG_ = (function minesweeper$core$flag_cell_BANG_(state,p__13833){
var vec__13835 = p__13833;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13835,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13835,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(1));
});
minesweeper.core.unflag_cell_BANG_ = (function minesweeper$core$unflag_cell_BANG_(state,p__13836){
var vec__13838 = p__13836;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13838,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13838,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(0));
});
minesweeper.core.reset_game_BANG_ = (function minesweeper$core$reset_game_BANG_(state){
var level = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$controls,cljs.core.cst$kw$level], null));
var G__13841 = state;
var G__13842 = minesweeper.core.new_state(level);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13841,G__13842) : cljs.core.reset_BANG_.call(null,G__13841,G__13842));
});
/**
 * Transition the game state from :pending to :alive.
 */
minesweeper.core.start_game_BANG_ = (function minesweeper$core$start_game_BANG_(state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$alive);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$time_DASH_started,minesweeper.core.get_time());
});
/**
 * Any components that need regular refreshing can depend on :tick-count,
 *   which is incremented periodically.
 */
minesweeper.core.tick_BANG_ = (function minesweeper$core$tick_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$tick_DASH_count,cljs.core.inc);
});
if(typeof minesweeper.core.read !== 'undefined'){
} else {
minesweeper.core.read = (function (){var method_table__5584__auto__ = (function (){var G__13843 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13843) : cljs.core.atom.call(null,G__13843));
})();
var prefer_table__5585__auto__ = (function (){var G__13844 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13844) : cljs.core.atom.call(null,G__13844));
})();
var method_cache__5586__auto__ = (function (){var G__13845 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13845) : cljs.core.atom.call(null,G__13845));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__13846 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13846) : cljs.core.atom.call(null,G__13846));
})();
var hierarchy__5588__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("minesweeper.core","read"),((function (method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__){
return (function (env,key,params){
return key;
});})(method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__))
,cljs.core.cst$kw$default,hierarchy__5588__auto__,method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__));
})();
}
minesweeper.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__13847,key,params){
var map__13848 = p__13847;
var map__13848__$1 = ((((!((map__13848 == null)))?((((map__13848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13848):map__13848);
var env = map__13848__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var temp__4423__auto__ = cljs.core.find(st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__13850 = temp__4423__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13850,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$not_DASH_found], null);
}
}));
/**
 * Call the function if the game-state is :alive.
 */
minesweeper.core.if_alive = (function minesweeper$core$if_alive(var_args){
var args__5736__auto__ = [];
var len__5729__auto___13854 = arguments.length;
var i__5730__auto___13855 = (0);
while(true){
if((i__5730__auto___13855 < len__5729__auto___13854)){
args__5736__auto__.push((arguments[i__5730__auto___13855]));

var G__13856 = (i__5730__auto___13855 + (1));
i__5730__auto___13855 = G__13856;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((2) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((2)),(0))):null);
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5737__auto__);
});

minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic = (function (state,fn,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alive,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$game_DASH_state))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fn,args);
} else {
return null;
}
});

minesweeper.core.if_alive.cljs$lang$maxFixedArity = (2);

minesweeper.core.if_alive.cljs$lang$applyTo = (function (seq13851){
var G__13852 = cljs.core.first(seq13851);
var seq13851__$1 = cljs.core.next(seq13851);
var G__13853 = cljs.core.first(seq13851__$1);
var seq13851__$2 = cljs.core.next(seq13851__$1);
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(G__13852,G__13853,seq13851__$2);
});
minesweeper.core.alive_or_pending_QMARK_ = (function minesweeper$core$alive_or_pending_QMARK_(state){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pending,null,cljs.core.cst$kw$alive,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$game_DASH_state));
});
minesweeper.core.start_game_if_pending_BANG_ = (function minesweeper$core$start_game_if_pending_BANG_(state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pending,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$game_DASH_state))){
return minesweeper.core.start_game_BANG_(state);
} else {
return null;
}
});
if(typeof minesweeper.core.mutate !== 'undefined'){
} else {
minesweeper.core.mutate = (function (){var method_table__5584__auto__ = (function (){var G__13857 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13857) : cljs.core.atom.call(null,G__13857));
})();
var prefer_table__5585__auto__ = (function (){var G__13858 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13858) : cljs.core.atom.call(null,G__13858));
})();
var method_cache__5586__auto__ = (function (){var G__13859 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13859) : cljs.core.atom.call(null,G__13859));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__13860 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13860) : cljs.core.atom.call(null,G__13860));
})();
var hierarchy__5588__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("minesweeper.core","mutate"),((function (method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__){
return (function (env,key,params){
return key;
});})(method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__))
,cljs.core.cst$kw$default,hierarchy__5588__auto__,method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__));
})();
}
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_tick,(function (p__13861,key,params){
var map__13862 = p__13861;
var map__13862__$1 = ((((!((map__13862 == null)))?((((map__13862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13862):map__13862);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13862__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13862,map__13862__$1,state){
return (function (){
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(state,minesweeper.core.tick_BANG_,cljs.core.array_seq([state], 0));
});})(map__13862,map__13862__$1,state))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_sweep,(function (p__13864,key,p__13865){
var map__13866 = p__13864;
var map__13866__$1 = ((((!((map__13866 == null)))?((((map__13866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13866):map__13866);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,cljs.core.cst$kw$state);
var map__13867 = p__13865;
var map__13867__$1 = ((((!((map__13867 == null)))?((((map__13867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13867):map__13867);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13867__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13867__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13866,map__13866__$1,state,map__13867,map__13867__$1,row,col){
return (function (){
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))){
minesweeper.core.start_game_if_pending_BANG_(state);

return minesweeper.core.sweep_cell_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return null;
}
});})(map__13866,map__13866__$1,state,map__13867,map__13867__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_reset,(function (p__13870,key,params){
var map__13871 = p__13870;
var map__13871__$1 = ((((!((map__13871 == null)))?((((map__13871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13871):map__13871);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13871__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13871,map__13871__$1,state){
return (function (){
return minesweeper.core.reset_game_BANG_(state);
});})(map__13871,map__13871__$1,state))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_spread_DASH_sweep,(function (p__13873,key,p__13874){
var map__13875 = p__13873;
var map__13875__$1 = ((((!((map__13875 == null)))?((((map__13875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13875):map__13875);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13875__$1,cljs.core.cst$kw$state);
var map__13876 = p__13874;
var map__13876__$1 = ((((!((map__13876 == null)))?((((map__13876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13876):map__13876);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13876__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13876__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13875,map__13875__$1,state,map__13876,map__13876__$1,row,col){
return (function (){
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(state,minesweeper.core.sweep_spread_BANG_,cljs.core.array_seq([state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], 0));
});})(map__13875,map__13875__$1,state,map__13876,map__13876__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_flag,(function (p__13879,key,p__13880){
var map__13881 = p__13879;
var map__13881__$1 = ((((!((map__13881 == null)))?((((map__13881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13881):map__13881);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13881__$1,cljs.core.cst$kw$state);
var map__13882 = p__13880;
var map__13882__$1 = ((((!((map__13882 == null)))?((((map__13882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13882):map__13882);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13882__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13882__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13881,map__13881__$1,state,map__13882,map__13882__$1,row,col){
return (function (){
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))){
minesweeper.core.start_game_if_pending_BANG_(state);

return minesweeper.core.flag_cell_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return null;
}
});})(map__13881,map__13881__$1,state,map__13882,map__13882__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_unflag,(function (p__13885,key,p__13886){
var map__13887 = p__13885;
var map__13887__$1 = ((((!((map__13887 == null)))?((((map__13887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13887):map__13887);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.cst$kw$state);
var map__13888 = p__13886;
var map__13888__$1 = ((((!((map__13888 == null)))?((((map__13888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13888):map__13888);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13887,map__13887__$1,state,map__13888,map__13888__$1,row,col){
return (function (){
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(state,minesweeper.core.unflag_cell_BANG_,cljs.core.array_seq([state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], 0));
});})(map__13887,map__13887__$1,state,map__13888,map__13888__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_level_DASH_select,(function (p__13891,key,p__13892){
var map__13893 = p__13891;
var map__13893__$1 = ((((!((map__13893 == null)))?((((map__13893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13893):map__13893);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13893__$1,cljs.core.cst$kw$state);
var map__13894 = p__13892;
var map__13894__$1 = ((((!((map__13894 == null)))?((((map__13894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13894):map__13894);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13894__$1,cljs.core.cst$kw$level);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13893,map__13893__$1,state,map__13894,map__13894__$1,level){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$controls,cljs.core.cst$kw$level], null),level);
});})(map__13893,map__13893__$1,state,map__13894,map__13894__$1,level))
], null);
}));
minesweeper.core.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,minesweeper.core.read,cljs.core.cst$kw$mutate,minesweeper.core.mutate], null));
minesweeper.core.app_state = (function (){var G__13897 = minesweeper.core.new_state("intermediate");
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13897) : cljs.core.atom.call(null,G__13897));
})();
minesweeper.core.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,minesweeper.core.app_state,cljs.core.cst$kw$parser,minesweeper.core.parser], null));
/**
 * @constructor
 */
minesweeper.core.ExposedCellView = (function minesweeper$core$ExposedCellView(){
var this__12595__auto__ = this;
React.Component.apply(this__12595__auto__,arguments);

if(!((this__12595__auto__.initLocalState == null))){
this__12595__auto__.state = this__12595__auto__.initLocalState();
} else {
this__12595__auto__.state = {};
}

return this__12595__auto__;
});

minesweeper.core.ExposedCellView.prototype = goog.object.clone(React.Component.prototype);

var x13902_13927 = minesweeper.core.ExposedCellView.prototype;
x13902_13927.componentWillUpdate = ((function (x13902_13927){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13928 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13929 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13928,next_ident__12535__auto___13929)){
var idxr__12536__auto___13930 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13930 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13930),((function (idxr__12536__auto___13930,ident__12534__auto___13928,next_ident__12535__auto___13929,this__12530__auto__,x13902_13927){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13928], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13929], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13930,ident__12534__auto___13928,next_ident__12535__auto___13929,this__12530__auto__,x13902_13927))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13902_13927))
;

x13902_13927.shouldComponentUpdate = ((function (x13902_13927){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13904 = next_props__12531__auto____$1;
var G__13904__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13904):G__13904);
return G__13904__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13909 = this__12530__auto__.state;
var G__13910 = "omcljs$state";
return goog.object.get(G__13909,G__13910);
})(),goog.object.get(next_state__12532__auto__,"omcljs$state"));
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__12530__auto__.props.children,next_children__12533__auto__);
}
}
});})(x13902_13927))
;

x13902_13927.componentWillUnmount = ((function (x13902_13927){
return (function (){
var this__12530__auto__ = this;
var r__12541__auto__ = om.next.get_reconciler(this__12530__auto__);
var cfg__12542__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12541__auto__);
var st__12543__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
var indexer__12540__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
if(cljs.core.truth_((function (){var and__4659__auto__ = !((st__12543__auto__ == null));
if(and__4659__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__12543__auto__) : cljs.core.deref.call(null,st__12543__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__12530__auto__], null));
} else {
return and__4659__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12543__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12530__auto__], 0));
} else {
}

if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13902_13927))
;

x13902_13927.componentDidUpdate = ((function (x13902_13927){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13902_13927))
;

x13902_13927.isMounted = ((function (x13902_13927){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13902_13927))
;

x13902_13927.componentWillMount = ((function (x13902_13927){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13902_13927))
;

x13902_13927.render = ((function (x13902_13927){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13911 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13912 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13913 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13914 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13915 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13916 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13916__$1 = ((((!((map__13916 == null)))?((((map__13916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13916):map__13916);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13916__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13916__$1,cljs.core.cst$kw$col);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13916__$1,cljs.core.cst$kw$value);
var can_spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13916__$1,cljs.core.cst$kw$can_DASH_spread);
var str_val = (function (){var G__13918 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__13918)){
return "one";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__13918)){
return "two";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__13918)){
return "three";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),G__13918)){
return "four";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),G__13918)){
return "five";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),G__13918)){
return "six";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),G__13918)){
return "seven";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),G__13918)){
return "eight";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13918)){
return "mine";
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
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Rendering exposed cell ("),cljs.core.str(row),cljs.core.str(","),cljs.core.str(col),cljs.core.str(","),cljs.core.str(value),cljs.core.str(")")].join('')], 0));

var G__13919 = {"className": [cljs.core.str("cell revealed "),cljs.core.str(str_val),cljs.core.str((cljs.core.truth_(can_spread)?" spread":""))].join(''), "onClick": ((function (map__13916,map__13916__$1,row,col,value,can_spread,str_val,_STAR_reconciler_STAR_13911,_STAR_depth_STAR_13912,_STAR_shared_STAR_13913,_STAR_instrument_STAR_13914,_STAR_parent_STAR_13915,this$,this__12529__auto__,x13902_13927){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_spread_DASH_sweep),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mask),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$game_DASH_state)], 0))))));
});})(map__13916,map__13916__$1,row,col,value,can_spread,str_val,_STAR_reconciler_STAR_13911,_STAR_depth_STAR_13912,_STAR_shared_STAR_13913,_STAR_instrument_STAR_13914,_STAR_parent_STAR_13915,this$,this__12529__auto__,x13902_13927))
};
var G__13920 = om.util.force_children((function (){var G__13922 = null;
var G__13923 = om.util.force_children((function (){var G__13924 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13924)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__13924)){
return "";
} else {
return value;

}
}
})());
return React.DOM.span(G__13922,G__13923);
})());
return React.DOM.div(G__13919,G__13920);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13915;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13914;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13913;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13912;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13911;
}});})(x13902_13927))
;


minesweeper.core.ExposedCellView.prototype.constructor = minesweeper.core.ExposedCellView;

minesweeper.core.ExposedCellView.prototype.constructor.displayName = "minesweeper.core/ExposedCellView";

minesweeper.core.ExposedCellView.prototype.om$isComponent = true;

var x13925_13931 = minesweeper.core.ExposedCellView;
x13925_13931.om$next$IQuery$ = true;

x13925_13931.om$next$IQuery$query$arity$1 = ((function (x13925_13931){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13925_13931))
;


var x13926_13932 = minesweeper.core.ExposedCellView.prototype;
x13926_13932.om$next$IQuery$ = true;

x13926_13932.om$next$IQuery$query$arity$1 = ((function (x13926_13932){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13926_13932))
;


minesweeper.core.ExposedCellView.cljs$lang$type = true;

minesweeper.core.ExposedCellView.cljs$lang$ctorStr = "minesweeper.core/ExposedCellView";

minesweeper.core.ExposedCellView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/ExposedCellView");
});
minesweeper.core.exposed_cell_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(minesweeper.core.ExposedCellView);
/**
 * @constructor
 */
minesweeper.core.HiddenCellView = (function minesweeper$core$HiddenCellView(){
var this__12595__auto__ = this;
React.Component.apply(this__12595__auto__,arguments);

if(!((this__12595__auto__.initLocalState == null))){
this__12595__auto__.state = this__12595__auto__.initLocalState();
} else {
this__12595__auto__.state = {};
}

return this__12595__auto__;
});

minesweeper.core.HiddenCellView.prototype = goog.object.clone(React.Component.prototype);

var x13937_13959 = minesweeper.core.HiddenCellView.prototype;
x13937_13959.componentWillUpdate = ((function (x13937_13959){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13960 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13961 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13960,next_ident__12535__auto___13961)){
var idxr__12536__auto___13962 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13962 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13962),((function (idxr__12536__auto___13962,ident__12534__auto___13960,next_ident__12535__auto___13961,this__12530__auto__,x13937_13959){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13960], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13961], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13962,ident__12534__auto___13960,next_ident__12535__auto___13961,this__12530__auto__,x13937_13959))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13937_13959))
;

x13937_13959.shouldComponentUpdate = ((function (x13937_13959){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13939 = next_props__12531__auto____$1;
var G__13939__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13939):G__13939);
return G__13939__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13944 = this__12530__auto__.state;
var G__13945 = "omcljs$state";
return goog.object.get(G__13944,G__13945);
})(),goog.object.get(next_state__12532__auto__,"omcljs$state"));
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__12530__auto__.props.children,next_children__12533__auto__);
}
}
});})(x13937_13959))
;

x13937_13959.componentWillUnmount = ((function (x13937_13959){
return (function (){
var this__12530__auto__ = this;
var r__12541__auto__ = om.next.get_reconciler(this__12530__auto__);
var cfg__12542__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12541__auto__);
var st__12543__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
var indexer__12540__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
if(cljs.core.truth_((function (){var and__4659__auto__ = !((st__12543__auto__ == null));
if(and__4659__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__12543__auto__) : cljs.core.deref.call(null,st__12543__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__12530__auto__], null));
} else {
return and__4659__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12543__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12530__auto__], 0));
} else {
}

if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13937_13959))
;

x13937_13959.componentDidUpdate = ((function (x13937_13959){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13937_13959))
;

x13937_13959.isMounted = ((function (x13937_13959){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13937_13959))
;

x13937_13959.componentWillMount = ((function (x13937_13959){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13937_13959))
;

x13937_13959.render = ((function (x13937_13959){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13946 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13947 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13948 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13949 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13950 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13951 = om.next.props(this$);
var map__13951__$1 = ((((!((map__13951 == null)))?((((map__13951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13951):map__13951);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13951__$1,cljs.core.cst$kw$game_DASH_state);
var map__13952 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13952__$1 = ((((!((map__13952 == null)))?((((map__13952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13952):map__13952);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13952__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13952__$1,cljs.core.cst$kw$col);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13952__$1,cljs.core.cst$kw$value);
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13952__$1,cljs.core.cst$kw$flag);
var status_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dead,game_state))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,value))?"mine":"safe"):"");
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Rendering hidden cell ("),cljs.core.str(row),cljs.core.str(","),cljs.core.str(col),cljs.core.str(","),cljs.core.str(flag),cljs.core.str(")")].join('')], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),flag)){
var G__13955 = {"className": [cljs.core.str("cell hidden flagged "),cljs.core.str(status_str)].join(''), "onContextMenu": ((function (map__13951,map__13951__$1,game_state,map__13952,map__13952__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13946,_STAR_depth_STAR_13947,_STAR_shared_STAR_13948,_STAR_instrument_STAR_13949,_STAR_parent_STAR_13950,this$,this__12529__auto__,x13937_13959){
return (function (e){
e.preventDefault();

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_unflag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$flags))))));
});})(map__13951,map__13951__$1,game_state,map__13952,map__13952__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13946,_STAR_depth_STAR_13947,_STAR_shared_STAR_13948,_STAR_instrument_STAR_13949,_STAR_parent_STAR_13950,this$,this__12529__auto__,x13937_13959))
};
return React.DOM.div(G__13955);
} else {
var G__13956 = {"className": [cljs.core.str("cell hidden "),cljs.core.str(status_str)].join(''), "onClick": ((function (map__13951,map__13951__$1,game_state,map__13952,map__13952__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13946,_STAR_depth_STAR_13947,_STAR_shared_STAR_13948,_STAR_instrument_STAR_13949,_STAR_parent_STAR_13950,this$,this__12529__auto__,x13937_13959){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_sweep),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mask),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$flags),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$game_DASH_state)], 0))))));
});})(map__13951,map__13951__$1,game_state,map__13952,map__13952__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13946,_STAR_depth_STAR_13947,_STAR_shared_STAR_13948,_STAR_instrument_STAR_13949,_STAR_parent_STAR_13950,this$,this__12529__auto__,x13937_13959))
, "onContextMenu": ((function (map__13951,map__13951__$1,game_state,map__13952,map__13952__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13946,_STAR_depth_STAR_13947,_STAR_shared_STAR_13948,_STAR_instrument_STAR_13949,_STAR_parent_STAR_13950,this$,this__12529__auto__,x13937_13959){
return (function (e){
e.preventDefault();

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_flag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$flags))))));
});})(map__13951,map__13951__$1,game_state,map__13952,map__13952__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13946,_STAR_depth_STAR_13947,_STAR_shared_STAR_13948,_STAR_instrument_STAR_13949,_STAR_parent_STAR_13950,this$,this__12529__auto__,x13937_13959))
};
return React.DOM.div(G__13956);
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13950;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13949;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13948;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13947;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13946;
}});})(x13937_13959))
;


minesweeper.core.HiddenCellView.prototype.constructor = minesweeper.core.HiddenCellView;

minesweeper.core.HiddenCellView.prototype.constructor.displayName = "minesweeper.core/HiddenCellView";

minesweeper.core.HiddenCellView.prototype.om$isComponent = true;

var x13957_13963 = minesweeper.core.HiddenCellView;
x13957_13963.om$next$IQuery$ = true;

x13957_13963.om$next$IQuery$query$arity$1 = ((function (x13957_13963){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13957_13963))
;


var x13958_13964 = minesweeper.core.HiddenCellView.prototype;
x13958_13964.om$next$IQuery$ = true;

x13958_13964.om$next$IQuery$query$arity$1 = ((function (x13958_13964){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13958_13964))
;


minesweeper.core.HiddenCellView.cljs$lang$type = true;

minesweeper.core.HiddenCellView.cljs$lang$ctorStr = "minesweeper.core/HiddenCellView";

minesweeper.core.HiddenCellView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/HiddenCellView");
});
minesweeper.core.hidden_cell_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(minesweeper.core.HiddenCellView);
/**
 * @constructor
 */
minesweeper.core.CellView = (function minesweeper$core$CellView(){
var this__12595__auto__ = this;
React.Component.apply(this__12595__auto__,arguments);

if(!((this__12595__auto__.initLocalState == null))){
this__12595__auto__.state = this__12595__auto__.initLocalState();
} else {
this__12595__auto__.state = {};
}

return this__12595__auto__;
});

minesweeper.core.CellView.prototype = goog.object.clone(React.Component.prototype);

var x13969_13991 = minesweeper.core.CellView.prototype;
x13969_13991.componentWillUpdate = ((function (x13969_13991){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13992 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13993 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13992,next_ident__12535__auto___13993)){
var idxr__12536__auto___13994 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13994 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13994),((function (idxr__12536__auto___13994,ident__12534__auto___13992,next_ident__12535__auto___13993,this__12530__auto__,x13969_13991){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13992], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13993], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13994,ident__12534__auto___13992,next_ident__12535__auto___13993,this__12530__auto__,x13969_13991))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13969_13991))
;

x13969_13991.shouldComponentUpdate = ((function (x13969_13991){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13971 = next_props__12531__auto____$1;
var G__13971__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13971):G__13971);
return G__13971__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13976 = this__12530__auto__.state;
var G__13977 = "omcljs$state";
return goog.object.get(G__13976,G__13977);
})(),goog.object.get(next_state__12532__auto__,"omcljs$state"));
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__12530__auto__.props.children,next_children__12533__auto__);
}
}
});})(x13969_13991))
;

x13969_13991.componentWillUnmount = ((function (x13969_13991){
return (function (){
var this__12530__auto__ = this;
var r__12541__auto__ = om.next.get_reconciler(this__12530__auto__);
var cfg__12542__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12541__auto__);
var st__12543__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
var indexer__12540__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
if(cljs.core.truth_((function (){var and__4659__auto__ = !((st__12543__auto__ == null));
if(and__4659__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__12543__auto__) : cljs.core.deref.call(null,st__12543__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__12530__auto__], null));
} else {
return and__4659__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12543__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12530__auto__], 0));
} else {
}

if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13969_13991))
;

x13969_13991.componentDidUpdate = ((function (x13969_13991){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13969_13991))
;

x13969_13991.isMounted = ((function (x13969_13991){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13969_13991))
;

x13969_13991.componentWillMount = ((function (x13969_13991){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13969_13991))
;

x13969_13991.render = ((function (x13969_13991){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13978 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13979 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13980 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13981 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13982 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13983 = om.next.props(this$);
var map__13983__$1 = ((((!((map__13983 == null)))?((((map__13983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13983):map__13983);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13983__$1,cljs.core.cst$kw$game_DASH_state);
var map__13984 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13984__$1 = ((((!((map__13984 == null)))?((((map__13984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13984):map__13984);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$col);
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$flag);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$value);
var mask_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$mask_DASH_val);
var can_spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13984__$1,cljs.core.cst$kw$can_DASH_spread);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mask_val,(1))){
var G__13987 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col,cljs.core.cst$kw$can_DASH_spread,can_spread], null));
return (minesweeper.core.exposed_cell_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.exposed_cell_view.cljs$core$IFn$_invoke$arity$1(G__13987) : minesweeper.core.exposed_cell_view.call(null,G__13987));
} else {
var G__13988 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_state,game_state], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flag,flag,cljs.core.cst$kw$value,value,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col], null));
return (minesweeper.core.hidden_cell_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.hidden_cell_view.cljs$core$IFn$_invoke$arity$1(G__13988) : minesweeper.core.hidden_cell_view.call(null,G__13988));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13982;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13981;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13980;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13979;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13978;
}});})(x13969_13991))
;


minesweeper.core.CellView.prototype.constructor = minesweeper.core.CellView;

minesweeper.core.CellView.prototype.constructor.displayName = "minesweeper.core/CellView";

minesweeper.core.CellView.prototype.om$isComponent = true;

var x13989_13995 = minesweeper.core.CellView;
x13989_13995.om$next$IQuery$ = true;

x13989_13995.om$next$IQuery$query$arity$1 = ((function (x13989_13995){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
});})(x13989_13995))
;


var x13990_13996 = minesweeper.core.CellView.prototype;
x13990_13996.om$next$IQuery$ = true;

x13990_13996.om$next$IQuery$query$arity$1 = ((function (x13990_13996){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
});})(x13990_13996))
;


minesweeper.core.CellView.cljs$lang$type = true;

minesweeper.core.CellView.cljs$lang$ctorStr = "minesweeper.core/CellView";

minesweeper.core.CellView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/CellView");
});
minesweeper.core.cell_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(minesweeper.core.CellView);
/**
 * @constructor
 */
minesweeper.core.GridView = (function minesweeper$core$GridView(){
var this__12595__auto__ = this;
React.Component.apply(this__12595__auto__,arguments);

if(!((this__12595__auto__.initLocalState == null))){
this__12595__auto__.state = this__12595__auto__.initLocalState();
} else {
this__12595__auto__.state = {};
}

return this__12595__auto__;
});

minesweeper.core.GridView.prototype = goog.object.clone(React.Component.prototype);

var x14003_14022 = minesweeper.core.GridView.prototype;
x14003_14022.componentWillUpdate = ((function (x14003_14022){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14023 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14024 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14023,next_ident__12535__auto___14024)){
var idxr__12536__auto___14025 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14025 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14025),((function (idxr__12536__auto___14025,ident__12534__auto___14023,next_ident__12535__auto___14024,this__12530__auto__,x14003_14022){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14023], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14024], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14025,ident__12534__auto___14023,next_ident__12535__auto___14024,this__12530__auto__,x14003_14022))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14003_14022))
;

x14003_14022.shouldComponentUpdate = ((function (x14003_14022){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14005 = next_props__12531__auto____$1;
var G__14005__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14005):G__14005);
return G__14005__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14010 = this__12530__auto__.state;
var G__14011 = "omcljs$state";
return goog.object.get(G__14010,G__14011);
})(),goog.object.get(next_state__12532__auto__,"omcljs$state"));
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__12530__auto__.props.children,next_children__12533__auto__);
}
}
});})(x14003_14022))
;

x14003_14022.componentWillUnmount = ((function (x14003_14022){
return (function (){
var this__12530__auto__ = this;
var r__12541__auto__ = om.next.get_reconciler(this__12530__auto__);
var cfg__12542__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12541__auto__);
var st__12543__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
var indexer__12540__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
if(cljs.core.truth_((function (){var and__4659__auto__ = !((st__12543__auto__ == null));
if(and__4659__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__12543__auto__) : cljs.core.deref.call(null,st__12543__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__12530__auto__], null));
} else {
return and__4659__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12543__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12530__auto__], 0));
} else {
}

if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14003_14022))
;

x14003_14022.componentDidUpdate = ((function (x14003_14022){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14003_14022))
;

x14003_14022.isMounted = ((function (x14003_14022){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14003_14022))
;

x14003_14022.componentWillMount = ((function (x14003_14022){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14003_14022))
;

x14003_14022.render = ((function (x14003_14022){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14012 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14013 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14014 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14015 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14016 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering grid view"], 0));

var map__14017 = om.next.props(this$);
var map__14017__$1 = ((((!((map__14017 == null)))?((((map__14017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14017):map__14017);
var props = map__14017__$1;
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14017__$1,cljs.core.cst$kw$game_DASH_state);
var game_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14017__$1,cljs.core.cst$kw$game_DASH_size);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14017__$1,cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14017__$1,cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14017__$1,cljs.core.cst$kw$flags);
var key = ((function (map__14017,map__14017__$1,props,game_state,game_size,grid,mask,flags,_STAR_reconciler_STAR_14012,_STAR_depth_STAR_14013,_STAR_shared_STAR_14014,_STAR_instrument_STAR_14015,_STAR_parent_STAR_14016,this$,this__12529__auto__,x14003_14022){
return (function (p1__13997_SHARP_,p2__13998_SHARP_){
return ((p1__13997_SHARP_ * (7)) + p2__13998_SHARP_);
});})(map__14017,map__14017__$1,props,game_state,game_size,grid,mask,flags,_STAR_reconciler_STAR_14012,_STAR_depth_STAR_14013,_STAR_shared_STAR_14014,_STAR_instrument_STAR_14015,_STAR_parent_STAR_14016,this$,this__12529__auto__,x14003_14022))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "minesweeper"},cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__14017,map__14017__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_14012,_STAR_depth_STAR_14013,_STAR_shared_STAR_14014,_STAR_instrument_STAR_14015,_STAR_parent_STAR_14016,this$,this__12529__auto__,x14003_14022){
return (function (r,row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "row"},cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__14017,map__14017__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_14012,_STAR_depth_STAR_14013,_STAR_shared_STAR_14014,_STAR_instrument_STAR_14015,_STAR_parent_STAR_14016,this$,this__12529__auto__,x14003_14022){
return (function (c,val){
var G__14019 = om.next.computed(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$react_DASH_key,key(r,c),cljs.core.cst$kw$game_DASH_state,game_state], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$flag,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),cljs.core.cst$kw$value,val,cljs.core.cst$kw$mask_DASH_val,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mask,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),cljs.core.cst$kw$row,r,cljs.core.cst$kw$col,c,cljs.core.cst$kw$can_DASH_spread,minesweeper.core.can_spread_sweep_QMARK_(game_size,grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));
return (minesweeper.core.cell_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.cell_view.cljs$core$IFn$_invoke$arity$1(G__14019) : minesweeper.core.cell_view.call(null,G__14019));
});})(map__14017,map__14017__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_14012,_STAR_depth_STAR_14013,_STAR_shared_STAR_14014,_STAR_instrument_STAR_14015,_STAR_parent_STAR_14016,this$,this__12529__auto__,x14003_14022))
,row));
});})(map__14017,map__14017__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_14012,_STAR_depth_STAR_14013,_STAR_shared_STAR_14014,_STAR_instrument_STAR_14015,_STAR_parent_STAR_14016,this$,this__12529__auto__,x14003_14022))
,grid));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14016;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14015;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14014;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14013;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14012;
}});})(x14003_14022))
;


minesweeper.core.GridView.prototype.constructor = minesweeper.core.GridView;

minesweeper.core.GridView.prototype.constructor.displayName = "minesweeper.core/GridView";

minesweeper.core.GridView.prototype.om$isComponent = true;

var x14020_14026 = minesweeper.core.GridView;
x14020_14026.om$next$IQuery$ = true;

x14020_14026.om$next$IQuery$query$arity$1 = ((function (x14020_14026){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x14020_14026))
;


var x14021_14027 = minesweeper.core.GridView.prototype;
x14021_14027.om$next$IQuery$ = true;

x14021_14027.om$next$IQuery$query$arity$1 = ((function (x14021_14027){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x14021_14027))
;


minesweeper.core.GridView.cljs$lang$type = true;

minesweeper.core.GridView.cljs$lang$ctorStr = "minesweeper.core/GridView";

minesweeper.core.GridView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/GridView");
});
minesweeper.core.grid_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(minesweeper.core.GridView);
/**
 * @constructor
 */
minesweeper.core.ControlsView = (function minesweeper$core$ControlsView(){
var this__12595__auto__ = this;
React.Component.apply(this__12595__auto__,arguments);

if(!((this__12595__auto__.initLocalState == null))){
this__12595__auto__.state = this__12595__auto__.initLocalState();
} else {
this__12595__auto__.state = {};
}

return this__12595__auto__;
});

minesweeper.core.ControlsView.prototype = goog.object.clone(React.Component.prototype);

var x14032_14065 = minesweeper.core.ControlsView.prototype;
x14032_14065.componentWillUpdate = ((function (x14032_14065){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14066 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14067 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14066,next_ident__12535__auto___14067)){
var idxr__12536__auto___14068 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14068 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14068),((function (idxr__12536__auto___14068,ident__12534__auto___14066,next_ident__12535__auto___14067,this__12530__auto__,x14032_14065){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14066], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14067], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14068,ident__12534__auto___14066,next_ident__12535__auto___14067,this__12530__auto__,x14032_14065))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14032_14065))
;

x14032_14065.shouldComponentUpdate = ((function (x14032_14065){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14034 = next_props__12531__auto____$1;
var G__14034__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14034):G__14034);
return G__14034__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14039 = this__12530__auto__.state;
var G__14040 = "omcljs$state";
return goog.object.get(G__14039,G__14040);
})(),goog.object.get(next_state__12532__auto__,"omcljs$state"));
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__12530__auto__.props.children,next_children__12533__auto__);
}
}
});})(x14032_14065))
;

x14032_14065.componentWillUnmount = ((function (x14032_14065){
return (function (){
var this__12530__auto__ = this;
var r__12541__auto__ = om.next.get_reconciler(this__12530__auto__);
var cfg__12542__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12541__auto__);
var st__12543__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
var indexer__12540__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
if(cljs.core.truth_((function (){var and__4659__auto__ = !((st__12543__auto__ == null));
if(and__4659__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__12543__auto__) : cljs.core.deref.call(null,st__12543__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__12530__auto__], null));
} else {
return and__4659__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12543__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12530__auto__], 0));
} else {
}

if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14032_14065))
;

x14032_14065.componentDidUpdate = ((function (x14032_14065){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14032_14065))
;

x14032_14065.isMounted = ((function (x14032_14065){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14032_14065))
;

x14032_14065.componentWillMount = ((function (x14032_14065){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14032_14065))
;

x14032_14065.render = ((function (x14032_14065){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14041 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14042 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14043 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14044 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14045 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering controls view"], 0));

var map__14046 = om.next.props(this$);
var map__14046__$1 = ((((!((map__14046 == null)))?((((map__14046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14046):map__14046);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14046__$1,cljs.core.cst$kw$level);
var G__14048 = {"className": "panel"};
var G__14049 = om.util.force_children((function (){var G__14051 = {"className": "control", "value": level, "onChange": ((function (G__14048,map__14046,map__14046__$1,level,_STAR_reconciler_STAR_14041,_STAR_depth_STAR_14042,_STAR_shared_STAR_14043,_STAR_instrument_STAR_14044,_STAR_parent_STAR_14045,this$,this__12529__auto__,x14032_14065){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_level_DASH_select),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level),cljs.core._conj(cljs.core.List.EMPTY,value)))))))))))))));
});})(G__14048,map__14046,map__14046__$1,level,_STAR_reconciler_STAR_14041,_STAR_depth_STAR_14042,_STAR_shared_STAR_14043,_STAR_instrument_STAR_14044,_STAR_parent_STAR_14045,this$,this__12529__auto__,x14032_14065))
};
var G__14052 = (function (){var G__14055 = {"value": "beginner"};
var G__14056 = "Beginner";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__14055,G__14056) : om.dom.option.call(null,G__14055,G__14056));
})();
var G__14053 = (function (){var G__14057 = {"value": "intermediate"};
var G__14058 = "Intermediate";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__14057,G__14058) : om.dom.option.call(null,G__14057,G__14058));
})();
var G__14054 = (function (){var G__14059 = {"value": "expert"};
var G__14060 = "Expert";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__14059,G__14060) : om.dom.option.call(null,G__14059,G__14060));
})();
return (om.dom.select.cljs$core$IFn$_invoke$arity$4 ? om.dom.select.cljs$core$IFn$_invoke$arity$4(G__14051,G__14052,G__14053,G__14054) : om.dom.select.call(null,G__14051,G__14052,G__14053,G__14054));
})());
var G__14050 = om.util.force_children((function (){var G__14061 = {"className": "control", "onClick": ((function (G__14048,G__14049,map__14046,map__14046__$1,level,_STAR_reconciler_STAR_14041,_STAR_depth_STAR_14042,_STAR_shared_STAR_14043,_STAR_instrument_STAR_14044,_STAR_parent_STAR_14045,this$,this__12529__auto__,x14032_14065){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_reset))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level))))));
});})(G__14048,G__14049,map__14046,map__14046__$1,level,_STAR_reconciler_STAR_14041,_STAR_depth_STAR_14042,_STAR_shared_STAR_14043,_STAR_instrument_STAR_14044,_STAR_parent_STAR_14045,this$,this__12529__auto__,x14032_14065))
};
var G__14062 = om.util.force_children("Reset");
return React.DOM.button(G__14061,G__14062);
})());
return React.DOM.div(G__14048,G__14049,G__14050);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14045;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14044;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14043;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14042;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14041;
}});})(x14032_14065))
;


minesweeper.core.ControlsView.prototype.constructor = minesweeper.core.ControlsView;

minesweeper.core.ControlsView.prototype.constructor.displayName = "minesweeper.core/ControlsView";

minesweeper.core.ControlsView.prototype.om$isComponent = true;

var x14063_14069 = minesweeper.core.ControlsView;
x14063_14069.om$next$IQuery$ = true;

x14063_14069.om$next$IQuery$query$arity$1 = ((function (x14063_14069){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level], null);
});})(x14063_14069))
;


var x14064_14070 = minesweeper.core.ControlsView.prototype;
x14064_14070.om$next$IQuery$ = true;

x14064_14070.om$next$IQuery$query$arity$1 = ((function (x14064_14070){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level], null);
});})(x14064_14070))
;


minesweeper.core.ControlsView.cljs$lang$type = true;

minesweeper.core.ControlsView.cljs$lang$ctorStr = "minesweeper.core/ControlsView";

minesweeper.core.ControlsView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/ControlsView");
});
minesweeper.core.controls_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(minesweeper.core.ControlsView);
/**
 * @constructor
 */
minesweeper.core.TimerView = (function minesweeper$core$TimerView(){
var this__12595__auto__ = this;
React.Component.apply(this__12595__auto__,arguments);

if(!((this__12595__auto__.initLocalState == null))){
this__12595__auto__.state = this__12595__auto__.initLocalState();
} else {
this__12595__auto__.state = {};
}

return this__12595__auto__;
});

minesweeper.core.TimerView.prototype = goog.object.clone(React.Component.prototype);

var x14075_14098 = minesweeper.core.TimerView.prototype;
x14075_14098.componentWillUpdate = ((function (x14075_14098){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14099 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14100 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14099,next_ident__12535__auto___14100)){
var idxr__12536__auto___14101 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14101 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14101),((function (idxr__12536__auto___14101,ident__12534__auto___14099,next_ident__12535__auto___14100,this__12530__auto__,x14075_14098){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14099], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14100], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14101,ident__12534__auto___14099,next_ident__12535__auto___14100,this__12530__auto__,x14075_14098))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14075_14098))
;

x14075_14098.shouldComponentUpdate = ((function (x14075_14098){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14077 = next_props__12531__auto____$1;
var G__14077__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14077):G__14077);
return G__14077__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14082 = this__12530__auto__.state;
var G__14083 = "omcljs$state";
return goog.object.get(G__14082,G__14083);
})(),goog.object.get(next_state__12532__auto__,"omcljs$state"));
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__12530__auto__.props.children,next_children__12533__auto__);
}
}
});})(x14075_14098))
;

x14075_14098.componentWillUnmount = ((function (x14075_14098){
return (function (){
var this__12530__auto__ = this;
var r__12541__auto__ = om.next.get_reconciler(this__12530__auto__);
var cfg__12542__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12541__auto__);
var st__12543__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
var indexer__12540__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
if(cljs.core.truth_((function (){var and__4659__auto__ = !((st__12543__auto__ == null));
if(and__4659__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__12543__auto__) : cljs.core.deref.call(null,st__12543__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__12530__auto__], null));
} else {
return and__4659__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12543__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12530__auto__], 0));
} else {
}

if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14075_14098))
;

x14075_14098.componentDidUpdate = ((function (x14075_14098){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14075_14098))
;

x14075_14098.isMounted = ((function (x14075_14098){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14075_14098))
;

x14075_14098.componentWillMount = ((function (x14075_14098){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14075_14098))
;

x14075_14098.render = ((function (x14075_14098){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14084 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14085 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14086 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14087 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14088 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering timer view"], 0));

var map__14089 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14089__$1 = ((((!((map__14089 == null)))?((((map__14089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14089):map__14089);
var elapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14089__$1,cljs.core.cst$kw$elapsed);
var G__14091 = {"className": "timer"};
var G__14092 = om.util.force_children("Time ");
var G__14093 = om.util.force_children((function (){var G__14094 = null;
var G__14095 = om.util.force_children(goog.string.format("%03d",elapsed));
return React.DOM.span(G__14094,G__14095);
})());
return React.DOM.div(G__14091,G__14092,G__14093);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14088;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14087;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14086;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14085;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14084;
}});})(x14075_14098))
;


minesweeper.core.TimerView.prototype.constructor = minesweeper.core.TimerView;

minesweeper.core.TimerView.prototype.constructor.displayName = "minesweeper.core/TimerView";

minesweeper.core.TimerView.prototype.om$isComponent = true;

var x14096_14102 = minesweeper.core.TimerView;
x14096_14102.om$next$IQuery$ = true;

x14096_14102.om$next$IQuery$query$arity$1 = ((function (x14096_14102){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x14096_14102))
;


var x14097_14103 = minesweeper.core.TimerView.prototype;
x14097_14103.om$next$IQuery$ = true;

x14097_14103.om$next$IQuery$query$arity$1 = ((function (x14097_14103){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x14097_14103))
;


minesweeper.core.TimerView.cljs$lang$type = true;

minesweeper.core.TimerView.cljs$lang$ctorStr = "minesweeper.core/TimerView";

minesweeper.core.TimerView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/TimerView");
});
minesweeper.core.timer_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(minesweeper.core.TimerView);
/**
 * @constructor
 */
minesweeper.core.InfoView = (function minesweeper$core$InfoView(){
var this__12595__auto__ = this;
React.Component.apply(this__12595__auto__,arguments);

if(!((this__12595__auto__.initLocalState == null))){
this__12595__auto__.state = this__12595__auto__.initLocalState();
} else {
this__12595__auto__.state = {};
}

return this__12595__auto__;
});

minesweeper.core.InfoView.prototype = goog.object.clone(React.Component.prototype);

var x14108_14143 = minesweeper.core.InfoView.prototype;
x14108_14143.componentWillUpdate = ((function (x14108_14143){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14144 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14145 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14144,next_ident__12535__auto___14145)){
var idxr__12536__auto___14146 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14146 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14146),((function (idxr__12536__auto___14146,ident__12534__auto___14144,next_ident__12535__auto___14145,this__12530__auto__,x14108_14143){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14144], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14145], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14146,ident__12534__auto___14144,next_ident__12535__auto___14145,this__12530__auto__,x14108_14143))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14108_14143))
;

x14108_14143.shouldComponentUpdate = ((function (x14108_14143){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14110 = next_props__12531__auto____$1;
var G__14110__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14110):G__14110);
return G__14110__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14115 = this__12530__auto__.state;
var G__14116 = "omcljs$state";
return goog.object.get(G__14115,G__14116);
})(),goog.object.get(next_state__12532__auto__,"omcljs$state"));
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__12530__auto__.props.children,next_children__12533__auto__);
}
}
});})(x14108_14143))
;

x14108_14143.componentWillUnmount = ((function (x14108_14143){
return (function (){
var this__12530__auto__ = this;
var r__12541__auto__ = om.next.get_reconciler(this__12530__auto__);
var cfg__12542__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12541__auto__);
var st__12543__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
var indexer__12540__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
if(cljs.core.truth_((function (){var and__4659__auto__ = !((st__12543__auto__ == null));
if(and__4659__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__12543__auto__) : cljs.core.deref.call(null,st__12543__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__12530__auto__], null));
} else {
return and__4659__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12543__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12530__auto__], 0));
} else {
}

if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14108_14143))
;

x14108_14143.componentDidUpdate = ((function (x14108_14143){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14108_14143))
;

x14108_14143.isMounted = ((function (x14108_14143){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14108_14143))
;

x14108_14143.componentWillMount = ((function (x14108_14143){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14108_14143))
;

x14108_14143.render = ((function (x14108_14143){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14117 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14118 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14119 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14120 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14121 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering info view"], 0));

var map__14122 = om.next.props(this$);
var map__14122__$1 = ((((!((map__14122 == null)))?((((map__14122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14122):map__14122);
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14122__$1,cljs.core.cst$kw$high_DASH_score);
var map__14123 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14123__$1 = ((((!((map__14123 == null)))?((((map__14123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14123):map__14123);
var time_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14123__$1,cljs.core.cst$kw$time_DASH_started);
var tick_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14123__$1,cljs.core.cst$kw$tick_DASH_count);
var num_remaining = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14123__$1,cljs.core.cst$kw$num_DASH_remaining);
var G__14126 = {"className": "info"};
var G__14127 = om.util.force_children((function (){var G__14130 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elapsed,minesweeper.core.calc_elapsed(time_started)], null));
return (minesweeper.core.timer_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.timer_view.cljs$core$IFn$_invoke$arity$1(G__14130) : minesweeper.core.timer_view.call(null,G__14130));
})());
var G__14128 = om.util.force_children((function (){var G__14131 = {"className": "high-score"};
var G__14132 = om.util.force_children("Best ");
var G__14133 = om.util.force_children((function (){var G__14134 = null;
var G__14135 = om.util.force_children((((high_score == null))?"---":goog.string.format("%03d",high_score)));
return React.DOM.span(G__14134,G__14135);
})());
return React.DOM.div(G__14131,G__14132,G__14133);
})());
var G__14129 = om.util.force_children((function (){var G__14136 = {"className": "remaining"};
var G__14137 = om.util.force_children("Mines ");
var G__14138 = om.util.force_children((function (){var G__14139 = null;
var G__14140 = om.util.force_children(goog.string.format("%03d",num_remaining));
return React.DOM.span(G__14139,G__14140);
})());
return React.DOM.div(G__14136,G__14137,G__14138);
})());
return React.DOM.div(G__14126,G__14127,G__14128,G__14129);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14121;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14120;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14119;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14118;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14117;
}});})(x14108_14143))
;


minesweeper.core.InfoView.prototype.constructor = minesweeper.core.InfoView;

minesweeper.core.InfoView.prototype.constructor.displayName = "minesweeper.core/InfoView";

minesweeper.core.InfoView.prototype.om$isComponent = true;

var x14141_14147 = minesweeper.core.InfoView;
x14141_14147.om$next$IQuery$ = true;

x14141_14147.om$next$IQuery$query$arity$1 = ((function (x14141_14147){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$flags], null);
});})(x14141_14147))
;


var x14142_14148 = minesweeper.core.InfoView.prototype;
x14142_14148.om$next$IQuery$ = true;

x14142_14148.om$next$IQuery$query$arity$1 = ((function (x14142_14148){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$flags], null);
});})(x14142_14148))
;


minesweeper.core.InfoView.cljs$lang$type = true;

minesweeper.core.InfoView.cljs$lang$ctorStr = "minesweeper.core/InfoView";

minesweeper.core.InfoView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/InfoView");
});
minesweeper.core.info_view = om.next.factory.cljs$core$IFn$_invoke$arity$1(minesweeper.core.InfoView);
/**
 * @constructor
 */
minesweeper.core.MainView = (function minesweeper$core$MainView(){
var this__12595__auto__ = this;
React.Component.apply(this__12595__auto__,arguments);

if(!((this__12595__auto__.initLocalState == null))){
this__12595__auto__.state = this__12595__auto__.initLocalState();
} else {
this__12595__auto__.state = {};
}

return this__12595__auto__;
});

minesweeper.core.MainView.prototype = goog.object.clone(React.Component.prototype);

var x14153_14181 = minesweeper.core.MainView.prototype;
x14153_14181.componentWillUpdate = ((function (x14153_14181){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14182 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14183 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14182,next_ident__12535__auto___14183)){
var idxr__12536__auto___14184 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14184 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14184),((function (idxr__12536__auto___14184,ident__12534__auto___14182,next_ident__12535__auto___14183,this__12530__auto__,x14153_14181){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14182], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14183], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14184,ident__12534__auto___14182,next_ident__12535__auto___14183,this__12530__auto__,x14153_14181))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14153_14181))
;

x14153_14181.shouldComponentUpdate = ((function (x14153_14181){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14155 = next_props__12531__auto____$1;
var G__14155__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14155):G__14155);
return G__14155__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14160 = this__12530__auto__.state;
var G__14161 = "omcljs$state";
return goog.object.get(G__14160,G__14161);
})(),goog.object.get(next_state__12532__auto__,"omcljs$state"));
} else {
return and__4659__auto__;
}
})();
if(cljs.core.truth_(or__4671__auto____$1)){
return or__4671__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__12530__auto__.props.children,next_children__12533__auto__);
}
}
});})(x14153_14181))
;

x14153_14181.componentWillUnmount = ((function (x14153_14181){
return (function (){
var this__12530__auto__ = this;
var r__12541__auto__ = om.next.get_reconciler(this__12530__auto__);
var cfg__12542__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__12541__auto__);
var st__12543__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
var indexer__12540__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__12542__auto__);
if(cljs.core.truth_((function (){var and__4659__auto__ = !((st__12543__auto__ == null));
if(and__4659__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__12543__auto__) : cljs.core.deref.call(null,st__12543__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__12530__auto__], null));
} else {
return and__4659__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__12543__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__12530__auto__], 0));
} else {
}

if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14153_14181))
;

x14153_14181.componentDidUpdate = ((function (x14153_14181){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14153_14181))
;

x14153_14181.isMounted = ((function (x14153_14181){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14153_14181))
;

x14153_14181.componentWillMount = ((function (x14153_14181){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14153_14181))
;

x14153_14181.componentDidMount = ((function (x14153_14181){
return (function (){
var this$ = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["MainView mounted"], 0));

var G__14162 = ((function (this$,x14153_14181){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_tick))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$tick_DASH_count))))));
});})(this$,x14153_14181))
;
var G__14163 = (1000);
return setInterval(G__14162,G__14163);
});})(x14153_14181))
;

x14153_14181.render = ((function (x14153_14181){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14164 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14165 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14166 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14167 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14168 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering main view"], 0));

var map__14169 = om.next.props(this$);
var map__14169__$1 = ((((!((map__14169 == null)))?((((map__14169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14169):map__14169);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,cljs.core.cst$kw$controls);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,cljs.core.cst$kw$level);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,cljs.core.cst$kw$flags);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,cljs.core.cst$kw$game_DASH_state);
var time_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,cljs.core.cst$kw$time_DASH_started);
var tick_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,cljs.core.cst$kw$tick_DASH_count);
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14169__$1,cljs.core.cst$kw$high_DASH_score);
var game_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(level,cljs.core.cst$kw$size);
var num_mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(level,cljs.core.cst$kw$mines);
var num_remaining = (num_mines - minesweeper.core.sum_grid(flags));
var G__14172 = {"className": [cljs.core.str("minesweeper-wrap "),cljs.core.str((function (){var G__14176 = (((game_state instanceof cljs.core.Keyword))?game_state.fqn:null);
switch (G__14176) {
case "victorious":
return "st-victorious";

break;
case "dead":
return "st-dead";

break;
default:
return "";

}
})())].join(''), "onContextMenu": ((function (map__14169,map__14169__$1,controls,level,grid,mask,flags,game_state,time_started,tick_count,high_score,game_size,num_mines,num_remaining,_STAR_reconciler_STAR_14164,_STAR_depth_STAR_14165,_STAR_shared_STAR_14166,_STAR_instrument_STAR_14167,_STAR_parent_STAR_14168,this$,this__12529__auto__,x14153_14181){
return (function (e){
return e.preventDefault();
});})(map__14169,map__14169__$1,controls,level,grid,mask,flags,game_state,time_started,tick_count,high_score,game_size,num_mines,num_remaining,_STAR_reconciler_STAR_14164,_STAR_depth_STAR_14165,_STAR_shared_STAR_14166,_STAR_instrument_STAR_14167,_STAR_parent_STAR_14168,this$,this__12529__auto__,x14153_14181))
};
var G__14173 = om.util.force_children((function (){var G__14177 = om.next.computed(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$react_DASH_key,"info",cljs.core.cst$kw$high_DASH_score,high_score], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time_DASH_started,time_started,cljs.core.cst$kw$tick_DASH_count,tick_count,cljs.core.cst$kw$num_DASH_remaining,num_remaining], null));
return (minesweeper.core.info_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.info_view.cljs$core$IFn$_invoke$arity$1(G__14177) : minesweeper.core.info_view.call(null,G__14177));
})());
var G__14174 = om.util.force_children((function (){var G__14178 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$game_DASH_state,game_state,cljs.core.cst$kw$game_DASH_size,game_size,cljs.core.cst$kw$grid,grid,cljs.core.cst$kw$mask,mask,cljs.core.cst$kw$flags,flags], null);
return (minesweeper.core.grid_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.grid_view.cljs$core$IFn$_invoke$arity$1(G__14178) : minesweeper.core.grid_view.call(null,G__14178));
})());
var G__14175 = om.util.force_children((minesweeper.core.controls_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.controls_view.cljs$core$IFn$_invoke$arity$1(controls) : minesweeper.core.controls_view.call(null,controls)));
return React.DOM.div(G__14172,G__14173,G__14174,G__14175);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14168;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14167;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14166;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14165;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14164;
}});})(x14153_14181))
;


minesweeper.core.MainView.prototype.constructor = minesweeper.core.MainView;

minesweeper.core.MainView.prototype.constructor.displayName = "minesweeper.core/MainView";

minesweeper.core.MainView.prototype.om$isComponent = true;

var x14179_14186 = minesweeper.core.MainView;
x14179_14186.om$next$IQuery$ = true;

x14179_14186.om$next$IQuery$query$arity$1 = ((function (x14179_14186){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$grid,cljs.core.cst$kw$mask,cljs.core.cst$kw$flags,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$high_DASH_score,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$controls,om.next.get_query(minesweeper.core.ControlsView)], null)], null);
});})(x14179_14186))
;


var x14180_14187 = minesweeper.core.MainView.prototype;
x14180_14187.om$next$IQuery$ = true;

x14180_14187.om$next$IQuery$query$arity$1 = ((function (x14180_14187){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$grid,cljs.core.cst$kw$mask,cljs.core.cst$kw$flags,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$high_DASH_score,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$controls,om.next.get_query(minesweeper.core.ControlsView)], null)], null);
});})(x14180_14187))
;


minesweeper.core.MainView.cljs$lang$type = true;

minesweeper.core.MainView.cljs$lang$ctorStr = "minesweeper.core/MainView";

minesweeper.core.MainView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/MainView");
});
om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(minesweeper.core.reconciler,minesweeper.core.MainView,goog.dom.getElement("app"));

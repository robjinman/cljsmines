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
minesweeper.core.empty_row = (function minesweeper$core$empty_row(cols){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cols,(0)));
});
minesweeper.core.empty_grid = (function minesweeper$core$empty_grid(p__13683){
var vec__13685 = p__13683;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13685,(1),null);
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,minesweeper.core.empty_row(cols)));
});
minesweeper.core.empty_mask = (function minesweeper$core$empty_mask(p__13686){
var vec__13688 = p__13686;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688,(1),null);
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,minesweeper.core.empty_row(cols)));
});
minesweeper.core.empty_flags = (function minesweeper$core$empty_flags(p__13689){
var vec__13691 = p__13689;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13691,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13691,(1),null);
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,minesweeper.core.empty_row(cols)));
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
 * Takes an empty grid and populates it randomly with mines.
 */
minesweeper.core.populate_grid = (function minesweeper$core$populate_grid(grid,p__13692,num_mines){
var vec__13694 = p__13692;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13694,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13694,(1),null);
var i = (0);
var grid__$1 = grid;
while(true){
var row = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(rows);
var col = cljs.core.rand.cljs$core$IFn$_invoke$arity$1(cols);
var is_mine = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
if((i < num_mines)){
var G__13695 = ((is_mine)?i:(i + (1)));
var G__13696 = ((is_mine)?grid__$1:cljs.core.assoc_in(grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.cst$kw$X));
i = G__13695;
grid__$1 = G__13696;
continue;
} else {
return grid__$1;
}
break;
}
});
minesweeper.core.neighbour_coords = (function minesweeper$core$neighbour_coords(p__13697,p__13698){
var vec__13703 = p__13697;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13703,(1),null);
var vec__13704 = p__13698;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13704,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13704,(1),null);
var indices = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (indices,vec__13703,rows,cols,vec__13704,row,col){
return (function (coords,p__13705){
var vec__13706 = p__13705;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13706,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13706,(1),null);
var x = (row + i);
var y = (col + j);
if(((((-1) < x)) && ((x < rows))) && ((((-1) < y)) && ((y < cols)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return coords;
}
});})(indices,vec__13703,rows,cols,vec__13704,row,col))
,cljs.core.PersistentVector.EMPTY,indices);
});
/**
 * Returns the number of flags surrounding the cell.
 */
minesweeper.core.count_nearby_flags = (function minesweeper$core$count_nearby_flags(p__13707,flags,p__13708){
var vec__13711 = p__13707;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13711,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13711,(1),null);
var vec__13712 = p__13708;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13712,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13712,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13711,rows,cols,vec__13712,row,col){
return (function (count,cell){
var flag = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(flags,cell);
return (count + flag);
});})(vec__13711,rows,cols,vec__13712,row,col))
,(0),minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
});
minesweeper.core.count_nearby_exposed = minesweeper.core.count_nearby_flags;
/**
 * Returns the number of hidden cells surrounding the cell.
 */
minesweeper.core.count_nearby_hidden = (function minesweeper$core$count_nearby_hidden(p__13713,mask,p__13714){
var vec__13720 = p__13713;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13720,(1),null);
var vec__13721 = p__13714;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13721,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13721,(1),null);
var num_neighbours = cljs.core.count(minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
var num_exposed = (function (){var G__13722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null);
var G__13723 = mask;
var G__13724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null);
return (minesweeper.core.count_nearby_exposed.cljs$core$IFn$_invoke$arity$3 ? minesweeper.core.count_nearby_exposed.cljs$core$IFn$_invoke$arity$3(G__13722,G__13723,G__13724) : minesweeper.core.count_nearby_exposed.call(null,G__13722,G__13723,G__13724));
})();
return (num_neighbours - num_exposed);
});
/**
 * If the cell is surrounded by precisely the correct number of flags in addition
 *   to at least 1 unflagged cell, the player can perform a spread-sweep by clicking
 *   this cell.
 */
minesweeper.core.can_spread_sweep_QMARK_ = (function minesweeper$core$can_spread_sweep_QMARK_(p__13725,grid,mask,flags,p__13726){
var vec__13729 = p__13725;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13729,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13729,(1),null);
var vec__13730 = p__13726;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13730,(1),null);
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var num_flags = minesweeper.core.count_nearby_flags(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var num_hidden = minesweeper.core.count_nearby_hidden(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),mask,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
return ((value > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,num_flags)) && ((num_flags < num_hidden));
});
/**
 * Returns a flat vector of [row col value] vectors to enable easy iteration over
 *   the grid.
 */
minesweeper.core.flatten_grid = (function minesweeper$core$flatten_grid(grid){
var iter__5443__auto__ = (function minesweeper$core$flatten_grid_$_iter__13752(s__13753){
return (new cljs.core.LazySeq(null,(function (){
var s__13753__$1 = s__13753;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13753__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__13766 = cljs.core.first(xs__4977__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(1),null);
var iterys__5439__auto__ = ((function (s__13753__$1,vec__13766,i,row,xs__4977__auto__,temp__4425__auto__){
return (function minesweeper$core$flatten_grid_$_iter__13752_$_iter__13754(s__13755){
return (new cljs.core.LazySeq(null,((function (s__13753__$1,vec__13766,i,row,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__13755__$1 = s__13755;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__13755__$1);
if(temp__4425__auto____$1){
var s__13755__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13755__$2)){
var c__5441__auto__ = cljs.core.chunk_first(s__13755__$2);
var size__5442__auto__ = cljs.core.count(c__5441__auto__);
var b__13757 = cljs.core.chunk_buffer(size__5442__auto__);
if((function (){var i__13756 = (0);
while(true){
if((i__13756 < size__5442__auto__)){
var vec__13771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5441__auto__,i__13756);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771,(1),null);
cljs.core.chunk_append(b__13757,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null));

var G__13773 = (i__13756 + (1));
i__13756 = G__13773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13757),minesweeper$core$flatten_grid_$_iter__13752_$_iter__13754(cljs.core.chunk_rest(s__13755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13757),null);
}
} else {
var vec__13772 = cljs.core.first(s__13755__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null),minesweeper$core$flatten_grid_$_iter__13752_$_iter__13754(cljs.core.rest(s__13755__$2)));
}
} else {
return null;
}
break;
}
});})(s__13753__$1,vec__13766,i,row,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__13753__$1,vec__13766,i,row,xs__4977__auto__,temp__4425__auto__))
;
var fs__5440__auto__ = cljs.core.seq(iterys__5439__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,row)));
if(fs__5440__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5440__auto__,minesweeper$core$flatten_grid_$_iter__13752(cljs.core.rest(s__13753__$1)));
} else {
var G__13774 = cljs.core.rest(s__13753__$1);
s__13753__$1 = G__13774;
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
/**
 * This actually sums all the numbers in whatever 2D array it is given. When given
 *   the flags array, it will return the total number of flags.
 */
minesweeper.core.count_flags = (function minesweeper$core$count_flags(flags){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__13777){
var vec__13778 = p__13777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778,(2),null);
return (sum + n);
}),(0),minesweeper.core.flatten_grid(flags));
});
/**
 * Takes a grid populated with mines and adds in the numbers.
 */
minesweeper.core.label_grid = (function minesweeper$core$label_grid(p__13780,grid){
var vec__13786 = p__13780;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13786,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13786,rows,cols){
return (function (labelled,p__13787){
var vec__13788 = p__13787;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,val)){
var neighbours = minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (neighbours,vec__13788,i,j,val,vec__13786,rows,cols){
return (function (labelled__$1,p__13789){
var vec__13790 = p__13789;
var ni = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13790,(0),null);
var nj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13790,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(labelled__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ni,nj], null),((function (vec__13790,ni,nj,neighbours,vec__13788,i,j,val,vec__13786,rows,cols){
return (function (p1__13779_SHARP_){
if(typeof p1__13779_SHARP_ === 'number'){
return (p1__13779_SHARP_ + (1));
} else {
return p1__13779_SHARP_;
}
});})(vec__13790,ni,nj,neighbours,vec__13788,i,j,val,vec__13786,rows,cols))
);
});})(neighbours,vec__13788,i,j,val,vec__13786,rows,cols))
,labelled,neighbours);
} else {
return labelled;
}
});})(vec__13786,rows,cols))
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
 * Returns a list of cell coords belonging to the zero region surrounding the cell. The
 *   cell is expected to have a value of 0 in grid.
 */
minesweeper.core.zero_region = (function minesweeper$core$zero_region(p__13791,grid,p__13792,region){
var vec__13801 = p__13791;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13801,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13801,(1),null);
var vec__13802 = p__13792;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13802,(1),null);
var neighbours = minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var region__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (neighbours,region__$1,vec__13801,rows,cols,vec__13802,row,col){
return (function (region__$2,p__13803){
var vec__13804 = p__13803;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13804,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13804,(1),null);
if(!(cljs.core.contains_QMARK_(region__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(region__$2,minesweeper$core$zero_region(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null),region__$2));
} else {
return region__$2;
}
});})(neighbours,region__$1,vec__13801,rows,cols,vec__13802,row,col))
,region__$1,neighbours);
} else {
return region__$1;
}
});
/**
 * Sets the mask to 1 (corresponding to exposed) at each cell.
 */
minesweeper.core.update_mask = (function minesweeper$core$update_mask(mask,cells){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mask__$1,p__13807){
var vec__13808 = p__13807;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13808,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13808,(1),null);
return cljs.core.assoc_in(mask__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),(1));
}),mask,cells);
});
/**
 * List of values at the locations given by cells.
 */
minesweeper.core.values_at = (function minesweeper$core$values_at(grid,cells){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13809_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,p1__13809_SHARP_);
}),cells);
});
/**
 * Returns one of :alive, :dead, or :victorious.
 */
minesweeper.core.calc_game_state = (function minesweeper$core$calc_game_state(grid,mask,num_mines,swept_cells){
var num_hidden = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (total,p__13812){
var vec__13813 = p__13812;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13813,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13813,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13813,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return (total + (1));
} else {
return total;
}
}),(0),minesweeper.core.flatten_grid(mask));
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
 * Returns a new mask.
 */
minesweeper.core.sweep_cell = (function minesweeper$core$sweep_cell(p__13814,grid,mask,p__13815){
var vec__13818 = p__13814;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13818,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13818,(1),null);
var vec__13819 = p__13815;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13819,(1),null);
var sweep_region = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))))?minesweeper.core.zero_region(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.PersistentHashSet.EMPTY):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null));
return minesweeper.core.update_mask(mask,sweep_region);
});
/**
 * Returns a new mask.
 */
minesweeper.core.sweep_cells = (function minesweeper$core$sweep_cells(p__13820,grid,mask,cells){
var vec__13822 = p__13820;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13822,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13822,rows,cols){
return (function (mask__$1,cell){
return minesweeper.core.sweep_cell(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask__$1,cell);
});})(vec__13822,rows,cols))
,mask,cells);
});
/**
 * Flag any unflagged mines.
 */
minesweeper.core.flag_remaining = (function minesweeper$core$flag_remaining(flags,grid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (flags__$1,p__13825){
var vec__13826 = p__13825;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13826,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13826,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13826,(2),null);
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
var vec__13828 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13828,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13828,(1),null);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$mines], null));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$mask,cljs.core.cst$kw$grid,cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$controls,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$level,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$flags],[minesweeper.core.empty_mask(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),minesweeper.core.label_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),minesweeper.core.populate_grid(minesweeper.core.empty_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),num_mines)),minesweeper.core.get_high_score(level),minesweeper.core.get_time(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$level,level,cljs.core.cst$kw$react_DASH_key,"controls"], null),cljs.core.cst$kw$pending,cljs.core.get.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,level),(0),minesweeper.core.empty_flags(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null))]);
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
minesweeper.core.sweep_cell_BANG_ = (function minesweeper$core$sweep_cell_BANG_(state,p__13829){
var vec__13832 = p__13829;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(1),null);
var vec__13833 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13833,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13833,(1),null);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$flags);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
var new_mask = minesweeper.core.sweep_cell(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var game_state = minesweeper.core.calc_game_state(grid,new_mask,num_mines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$game_DASH_state,game_state);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mask,new_mask);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$victorious,game_state)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$flags,minesweeper.core.flag_remaining(flags,grid));

return minesweeper.core.update_high_score_BANG_(state);
} else {
return null;
}
});
/**
 * Perform a spread-sweep and update the app state.
 */
minesweeper.core.sweep_spread_BANG_ = (function minesweeper$core$sweep_spread_BANG_(state,p__13834){
var vec__13837 = p__13834;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13837,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13837,(1),null);
var vec__13838 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13838,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13838,(1),null);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$flags);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
if(cljs.core.truth_(minesweeper.core.can_spread_sweep_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
var swept = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13838,rows,cols,grid,mask,flags,num_mines,vec__13837,row,col){
return (function (swept,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(flags,cell))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(swept,cell);
} else {
return swept;
}
});})(vec__13838,rows,cols,grid,mask,flags,num_mines,vec__13837,row,col))
,cljs.core.PersistentVector.EMPTY,minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
var new_mask = minesweeper.core.sweep_cells(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,swept);
var game_state = minesweeper.core.calc_game_state(grid,new_mask,num_mines,swept);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$mask,new_mask);

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
minesweeper.core.flag_cell_BANG_ = (function minesweeper$core$flag_cell_BANG_(state,p__13839){
var vec__13841 = p__13839;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13841,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13841,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(1));
});
minesweeper.core.unflag_cell_BANG_ = (function minesweeper$core$unflag_cell_BANG_(state,p__13842){
var vec__13844 = p__13842;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13844,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13844,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(0));
});
minesweeper.core.reset_game_BANG_ = (function minesweeper$core$reset_game_BANG_(state){
var level = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$controls,cljs.core.cst$kw$level], null));
var G__13847 = state;
var G__13848 = minesweeper.core.new_state(level);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13847,G__13848) : cljs.core.reset_BANG_.call(null,G__13847,G__13848));
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
minesweeper.core.read = (function (){var method_table__5584__auto__ = (function (){var G__13849 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13849) : cljs.core.atom.call(null,G__13849));
})();
var prefer_table__5585__auto__ = (function (){var G__13850 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13850) : cljs.core.atom.call(null,G__13850));
})();
var method_cache__5586__auto__ = (function (){var G__13851 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13851) : cljs.core.atom.call(null,G__13851));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__13852 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13852) : cljs.core.atom.call(null,G__13852));
})();
var hierarchy__5588__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("minesweeper.core","read"),((function (method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__){
return (function (env,key,params){
return key;
});})(method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__))
,cljs.core.cst$kw$default,hierarchy__5588__auto__,method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__));
})();
}
minesweeper.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__13853,key,params){
var map__13854 = p__13853;
var map__13854__$1 = ((((!((map__13854 == null)))?((((map__13854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13854):map__13854);
var env = map__13854__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13854__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13854__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var temp__4423__auto__ = cljs.core.find(st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__13856 = temp__4423__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13856,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13856,(1),null);
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
var len__5729__auto___13860 = arguments.length;
var i__5730__auto___13861 = (0);
while(true){
if((i__5730__auto___13861 < len__5729__auto___13860)){
args__5736__auto__.push((arguments[i__5730__auto___13861]));

var G__13862 = (i__5730__auto___13861 + (1));
i__5730__auto___13861 = G__13862;
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

minesweeper.core.if_alive.cljs$lang$applyTo = (function (seq13857){
var G__13858 = cljs.core.first(seq13857);
var seq13857__$1 = cljs.core.next(seq13857);
var G__13859 = cljs.core.first(seq13857__$1);
var seq13857__$2 = cljs.core.next(seq13857__$1);
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(G__13858,G__13859,seq13857__$2);
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
minesweeper.core.mutate = (function (){var method_table__5584__auto__ = (function (){var G__13863 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13863) : cljs.core.atom.call(null,G__13863));
})();
var prefer_table__5585__auto__ = (function (){var G__13864 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13864) : cljs.core.atom.call(null,G__13864));
})();
var method_cache__5586__auto__ = (function (){var G__13865 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13865) : cljs.core.atom.call(null,G__13865));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__13866 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13866) : cljs.core.atom.call(null,G__13866));
})();
var hierarchy__5588__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("minesweeper.core","mutate"),((function (method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__){
return (function (env,key,params){
return key;
});})(method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__))
,cljs.core.cst$kw$default,hierarchy__5588__auto__,method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__));
})();
}
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_tick,(function (p__13867,key,params){
var map__13868 = p__13867;
var map__13868__$1 = ((((!((map__13868 == null)))?((((map__13868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13868):map__13868);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13868__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13868,map__13868__$1,state){
return (function (){
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(state,minesweeper.core.tick_BANG_,cljs.core.array_seq([state], 0));
});})(map__13868,map__13868__$1,state))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_sweep,(function (p__13870,key,p__13871){
var map__13872 = p__13870;
var map__13872__$1 = ((((!((map__13872 == null)))?((((map__13872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13872):map__13872);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13872__$1,cljs.core.cst$kw$state);
var map__13873 = p__13871;
var map__13873__$1 = ((((!((map__13873 == null)))?((((map__13873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13873):map__13873);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13873__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13873__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13872,map__13872__$1,state,map__13873,map__13873__$1,row,col){
return (function (){
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))){
minesweeper.core.start_game_if_pending_BANG_(state);

return minesweeper.core.sweep_cell_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return null;
}
});})(map__13872,map__13872__$1,state,map__13873,map__13873__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_reset,(function (p__13876,key,params){
var map__13877 = p__13876;
var map__13877__$1 = ((((!((map__13877 == null)))?((((map__13877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13877):map__13877);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13877__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13877,map__13877__$1,state){
return (function (){
return minesweeper.core.reset_game_BANG_(state);
});})(map__13877,map__13877__$1,state))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_spread_DASH_sweep,(function (p__13879,key,p__13880){
var map__13881 = p__13879;
var map__13881__$1 = ((((!((map__13881 == null)))?((((map__13881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13881):map__13881);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13881__$1,cljs.core.cst$kw$state);
var map__13882 = p__13880;
var map__13882__$1 = ((((!((map__13882 == null)))?((((map__13882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13882):map__13882);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13882__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13882__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13881,map__13881__$1,state,map__13882,map__13882__$1,row,col){
return (function (){
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(state,minesweeper.core.sweep_spread_BANG_,cljs.core.array_seq([state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], 0));
});})(map__13881,map__13881__$1,state,map__13882,map__13882__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_flag,(function (p__13885,key,p__13886){
var map__13887 = p__13885;
var map__13887__$1 = ((((!((map__13887 == null)))?((((map__13887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13887):map__13887);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13887__$1,cljs.core.cst$kw$state);
var map__13888 = p__13886;
var map__13888__$1 = ((((!((map__13888 == null)))?((((map__13888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13888):map__13888);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13888__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13887,map__13887__$1,state,map__13888,map__13888__$1,row,col){
return (function (){
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))){
minesweeper.core.start_game_if_pending_BANG_(state);

return minesweeper.core.flag_cell_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return null;
}
});})(map__13887,map__13887__$1,state,map__13888,map__13888__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_unflag,(function (p__13891,key,p__13892){
var map__13893 = p__13891;
var map__13893__$1 = ((((!((map__13893 == null)))?((((map__13893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13893):map__13893);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13893__$1,cljs.core.cst$kw$state);
var map__13894 = p__13892;
var map__13894__$1 = ((((!((map__13894 == null)))?((((map__13894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13894):map__13894);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13894__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13894__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13893,map__13893__$1,state,map__13894,map__13894__$1,row,col){
return (function (){
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(state,minesweeper.core.unflag_cell_BANG_,cljs.core.array_seq([state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], 0));
});})(map__13893,map__13893__$1,state,map__13894,map__13894__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_level_DASH_select,(function (p__13897,key,p__13898){
var map__13899 = p__13897;
var map__13899__$1 = ((((!((map__13899 == null)))?((((map__13899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13899):map__13899);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13899__$1,cljs.core.cst$kw$state);
var map__13900 = p__13898;
var map__13900__$1 = ((((!((map__13900 == null)))?((((map__13900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13900):map__13900);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13900__$1,cljs.core.cst$kw$level);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__13899,map__13899__$1,state,map__13900,map__13900__$1,level){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$controls,cljs.core.cst$kw$level], null),level);
});})(map__13899,map__13899__$1,state,map__13900,map__13900__$1,level))
], null);
}));
minesweeper.core.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,minesweeper.core.read,cljs.core.cst$kw$mutate,minesweeper.core.mutate], null));
minesweeper.core.app_state = (function (){var G__13903 = minesweeper.core.new_state("intermediate");
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13903) : cljs.core.atom.call(null,G__13903));
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

var x13908_13933 = minesweeper.core.ExposedCellView.prototype;
x13908_13933.componentWillUpdate = ((function (x13908_13933){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13934 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13935 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13934,next_ident__12535__auto___13935)){
var idxr__12536__auto___13936 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13936 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13936),((function (idxr__12536__auto___13936,ident__12534__auto___13934,next_ident__12535__auto___13935,this__12530__auto__,x13908_13933){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13934], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13935], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13936,ident__12534__auto___13934,next_ident__12535__auto___13935,this__12530__auto__,x13908_13933))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13908_13933))
;

x13908_13933.shouldComponentUpdate = ((function (x13908_13933){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13910 = next_props__12531__auto____$1;
var G__13910__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13910):G__13910);
return G__13910__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13915 = this__12530__auto__.state;
var G__13916 = "omcljs$state";
return goog.object.get(G__13915,G__13916);
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
});})(x13908_13933))
;

x13908_13933.componentWillUnmount = ((function (x13908_13933){
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
});})(x13908_13933))
;

x13908_13933.componentDidUpdate = ((function (x13908_13933){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13908_13933))
;

x13908_13933.isMounted = ((function (x13908_13933){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13908_13933))
;

x13908_13933.componentWillMount = ((function (x13908_13933){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13908_13933))
;

x13908_13933.render = ((function (x13908_13933){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13917 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13918 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13919 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13920 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13921 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13922 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13922__$1 = ((((!((map__13922 == null)))?((((map__13922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13922):map__13922);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,cljs.core.cst$kw$col);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,cljs.core.cst$kw$value);
var can_spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13922__$1,cljs.core.cst$kw$can_DASH_spread);
var str_val = (function (){var G__13924 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__13924)){
return "one";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__13924)){
return "two";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__13924)){
return "three";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),G__13924)){
return "four";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),G__13924)){
return "five";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),G__13924)){
return "six";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),G__13924)){
return "seven";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),G__13924)){
return "eight";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13924)){
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

var G__13925 = {"className": [cljs.core.str("cell revealed "),cljs.core.str(str_val),cljs.core.str((cljs.core.truth_(can_spread)?" spread":""))].join(''), "onClick": ((function (map__13922,map__13922__$1,row,col,value,can_spread,str_val,_STAR_reconciler_STAR_13917,_STAR_depth_STAR_13918,_STAR_shared_STAR_13919,_STAR_instrument_STAR_13920,_STAR_parent_STAR_13921,this$,this__12529__auto__,x13908_13933){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_spread_DASH_sweep),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mask),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$game_DASH_state)], 0))))));
});})(map__13922,map__13922__$1,row,col,value,can_spread,str_val,_STAR_reconciler_STAR_13917,_STAR_depth_STAR_13918,_STAR_shared_STAR_13919,_STAR_instrument_STAR_13920,_STAR_parent_STAR_13921,this$,this__12529__auto__,x13908_13933))
};
var G__13926 = om.util.force_children((function (){var G__13928 = null;
var G__13929 = om.util.force_children((function (){var G__13930 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13930)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__13930)){
return "";
} else {
return value;

}
}
})());
return React.DOM.span(G__13928,G__13929);
})());
return React.DOM.div(G__13925,G__13926);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13921;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13920;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13919;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13918;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13917;
}});})(x13908_13933))
;


minesweeper.core.ExposedCellView.prototype.constructor = minesweeper.core.ExposedCellView;

minesweeper.core.ExposedCellView.prototype.constructor.displayName = "minesweeper.core/ExposedCellView";

minesweeper.core.ExposedCellView.prototype.om$isComponent = true;

var x13931_13937 = minesweeper.core.ExposedCellView;
x13931_13937.om$next$IQuery$ = true;

x13931_13937.om$next$IQuery$query$arity$1 = ((function (x13931_13937){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13931_13937))
;


var x13932_13938 = minesweeper.core.ExposedCellView.prototype;
x13932_13938.om$next$IQuery$ = true;

x13932_13938.om$next$IQuery$query$arity$1 = ((function (x13932_13938){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13932_13938))
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

var x13943_13965 = minesweeper.core.HiddenCellView.prototype;
x13943_13965.componentWillUpdate = ((function (x13943_13965){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13966 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13967 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13966,next_ident__12535__auto___13967)){
var idxr__12536__auto___13968 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13968 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13968),((function (idxr__12536__auto___13968,ident__12534__auto___13966,next_ident__12535__auto___13967,this__12530__auto__,x13943_13965){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13966], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13967], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13968,ident__12534__auto___13966,next_ident__12535__auto___13967,this__12530__auto__,x13943_13965))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13943_13965))
;

x13943_13965.shouldComponentUpdate = ((function (x13943_13965){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13945 = next_props__12531__auto____$1;
var G__13945__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13945):G__13945);
return G__13945__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13950 = this__12530__auto__.state;
var G__13951 = "omcljs$state";
return goog.object.get(G__13950,G__13951);
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
});})(x13943_13965))
;

x13943_13965.componentWillUnmount = ((function (x13943_13965){
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
});})(x13943_13965))
;

x13943_13965.componentDidUpdate = ((function (x13943_13965){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13943_13965))
;

x13943_13965.isMounted = ((function (x13943_13965){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13943_13965))
;

x13943_13965.componentWillMount = ((function (x13943_13965){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13943_13965))
;

x13943_13965.render = ((function (x13943_13965){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13952 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13953 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13954 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13955 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13956 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13957 = om.next.props(this$);
var map__13957__$1 = ((((!((map__13957 == null)))?((((map__13957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13957):map__13957);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13957__$1,cljs.core.cst$kw$game_DASH_state);
var map__13958 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13958__$1 = ((((!((map__13958 == null)))?((((map__13958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13958):map__13958);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13958__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13958__$1,cljs.core.cst$kw$col);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13958__$1,cljs.core.cst$kw$value);
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13958__$1,cljs.core.cst$kw$flag);
var status_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dead,game_state))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,value))?"mine":"safe"):"");
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Rendering hidden cell ("),cljs.core.str(row),cljs.core.str(","),cljs.core.str(col),cljs.core.str(","),cljs.core.str(flag),cljs.core.str(")")].join('')], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),flag)){
var G__13961 = {"className": [cljs.core.str("cell hidden flagged "),cljs.core.str(status_str)].join(''), "onContextMenu": ((function (map__13957,map__13957__$1,game_state,map__13958,map__13958__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13952,_STAR_depth_STAR_13953,_STAR_shared_STAR_13954,_STAR_instrument_STAR_13955,_STAR_parent_STAR_13956,this$,this__12529__auto__,x13943_13965){
return (function (e){
e.preventDefault();

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_unflag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$flags))))));
});})(map__13957,map__13957__$1,game_state,map__13958,map__13958__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13952,_STAR_depth_STAR_13953,_STAR_shared_STAR_13954,_STAR_instrument_STAR_13955,_STAR_parent_STAR_13956,this$,this__12529__auto__,x13943_13965))
};
return React.DOM.div(G__13961);
} else {
var G__13962 = {"className": [cljs.core.str("cell hidden "),cljs.core.str(status_str)].join(''), "onClick": ((function (map__13957,map__13957__$1,game_state,map__13958,map__13958__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13952,_STAR_depth_STAR_13953,_STAR_shared_STAR_13954,_STAR_instrument_STAR_13955,_STAR_parent_STAR_13956,this$,this__12529__auto__,x13943_13965){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_sweep),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mask),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$game_DASH_state)], 0))))));
});})(map__13957,map__13957__$1,game_state,map__13958,map__13958__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13952,_STAR_depth_STAR_13953,_STAR_shared_STAR_13954,_STAR_instrument_STAR_13955,_STAR_parent_STAR_13956,this$,this__12529__auto__,x13943_13965))
, "onContextMenu": ((function (map__13957,map__13957__$1,game_state,map__13958,map__13958__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13952,_STAR_depth_STAR_13953,_STAR_shared_STAR_13954,_STAR_instrument_STAR_13955,_STAR_parent_STAR_13956,this$,this__12529__auto__,x13943_13965){
return (function (e){
e.preventDefault();

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_flag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$flags))))));
});})(map__13957,map__13957__$1,game_state,map__13958,map__13958__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13952,_STAR_depth_STAR_13953,_STAR_shared_STAR_13954,_STAR_instrument_STAR_13955,_STAR_parent_STAR_13956,this$,this__12529__auto__,x13943_13965))
};
return React.DOM.div(G__13962);
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13956;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13955;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13954;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13953;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13952;
}});})(x13943_13965))
;


minesweeper.core.HiddenCellView.prototype.constructor = minesweeper.core.HiddenCellView;

minesweeper.core.HiddenCellView.prototype.constructor.displayName = "minesweeper.core/HiddenCellView";

minesweeper.core.HiddenCellView.prototype.om$isComponent = true;

var x13963_13969 = minesweeper.core.HiddenCellView;
x13963_13969.om$next$IQuery$ = true;

x13963_13969.om$next$IQuery$query$arity$1 = ((function (x13963_13969){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13963_13969))
;


var x13964_13970 = minesweeper.core.HiddenCellView.prototype;
x13964_13970.om$next$IQuery$ = true;

x13964_13970.om$next$IQuery$query$arity$1 = ((function (x13964_13970){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13964_13970))
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

var x13975_13997 = minesweeper.core.CellView.prototype;
x13975_13997.componentWillUpdate = ((function (x13975_13997){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13998 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13999 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13998,next_ident__12535__auto___13999)){
var idxr__12536__auto___14000 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14000 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14000),((function (idxr__12536__auto___14000,ident__12534__auto___13998,next_ident__12535__auto___13999,this__12530__auto__,x13975_13997){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13998], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13999], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14000,ident__12534__auto___13998,next_ident__12535__auto___13999,this__12530__auto__,x13975_13997))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13975_13997))
;

x13975_13997.shouldComponentUpdate = ((function (x13975_13997){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13977 = next_props__12531__auto____$1;
var G__13977__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13977):G__13977);
return G__13977__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13982 = this__12530__auto__.state;
var G__13983 = "omcljs$state";
return goog.object.get(G__13982,G__13983);
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
});})(x13975_13997))
;

x13975_13997.componentWillUnmount = ((function (x13975_13997){
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
});})(x13975_13997))
;

x13975_13997.componentDidUpdate = ((function (x13975_13997){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13975_13997))
;

x13975_13997.isMounted = ((function (x13975_13997){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13975_13997))
;

x13975_13997.componentWillMount = ((function (x13975_13997){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13975_13997))
;

x13975_13997.render = ((function (x13975_13997){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13984 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13985 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13986 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13987 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13988 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13989 = om.next.props(this$);
var map__13989__$1 = ((((!((map__13989 == null)))?((((map__13989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13989):map__13989);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13989__$1,cljs.core.cst$kw$game_DASH_state);
var map__13990 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13990__$1 = ((((!((map__13990 == null)))?((((map__13990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13990):map__13990);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,cljs.core.cst$kw$col);
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,cljs.core.cst$kw$flag);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,cljs.core.cst$kw$value);
var mask_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,cljs.core.cst$kw$mask_DASH_val);
var can_spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,cljs.core.cst$kw$can_DASH_spread);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mask_val,(1))){
var G__13993 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col,cljs.core.cst$kw$can_DASH_spread,can_spread], null));
return (minesweeper.core.exposed_cell_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.exposed_cell_view.cljs$core$IFn$_invoke$arity$1(G__13993) : minesweeper.core.exposed_cell_view.call(null,G__13993));
} else {
var G__13994 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_state,game_state], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flag,flag,cljs.core.cst$kw$value,value,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col], null));
return (minesweeper.core.hidden_cell_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.hidden_cell_view.cljs$core$IFn$_invoke$arity$1(G__13994) : minesweeper.core.hidden_cell_view.call(null,G__13994));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13988;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13987;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13986;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13985;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13984;
}});})(x13975_13997))
;


minesweeper.core.CellView.prototype.constructor = minesweeper.core.CellView;

minesweeper.core.CellView.prototype.constructor.displayName = "minesweeper.core/CellView";

minesweeper.core.CellView.prototype.om$isComponent = true;

var x13995_14001 = minesweeper.core.CellView;
x13995_14001.om$next$IQuery$ = true;

x13995_14001.om$next$IQuery$query$arity$1 = ((function (x13995_14001){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
});})(x13995_14001))
;


var x13996_14002 = minesweeper.core.CellView.prototype;
x13996_14002.om$next$IQuery$ = true;

x13996_14002.om$next$IQuery$query$arity$1 = ((function (x13996_14002){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
});})(x13996_14002))
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

var x14009_14028 = minesweeper.core.GridView.prototype;
x14009_14028.componentWillUpdate = ((function (x14009_14028){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14029 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14030 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14029,next_ident__12535__auto___14030)){
var idxr__12536__auto___14031 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14031 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14031),((function (idxr__12536__auto___14031,ident__12534__auto___14029,next_ident__12535__auto___14030,this__12530__auto__,x14009_14028){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14029], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14030], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14031,ident__12534__auto___14029,next_ident__12535__auto___14030,this__12530__auto__,x14009_14028))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14009_14028))
;

x14009_14028.shouldComponentUpdate = ((function (x14009_14028){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14011 = next_props__12531__auto____$1;
var G__14011__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14011):G__14011);
return G__14011__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14016 = this__12530__auto__.state;
var G__14017 = "omcljs$state";
return goog.object.get(G__14016,G__14017);
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
});})(x14009_14028))
;

x14009_14028.componentWillUnmount = ((function (x14009_14028){
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
});})(x14009_14028))
;

x14009_14028.componentDidUpdate = ((function (x14009_14028){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14009_14028))
;

x14009_14028.isMounted = ((function (x14009_14028){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14009_14028))
;

x14009_14028.componentWillMount = ((function (x14009_14028){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14009_14028))
;

x14009_14028.render = ((function (x14009_14028){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14018 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14019 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14020 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14021 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14022 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering grid view"], 0));

var map__14023 = om.next.props(this$);
var map__14023__$1 = ((((!((map__14023 == null)))?((((map__14023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14023):map__14023);
var props = map__14023__$1;
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023__$1,cljs.core.cst$kw$game_DASH_state);
var game_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023__$1,cljs.core.cst$kw$game_DASH_size);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023__$1,cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023__$1,cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14023__$1,cljs.core.cst$kw$flags);
var key = ((function (map__14023,map__14023__$1,props,game_state,game_size,grid,mask,flags,_STAR_reconciler_STAR_14018,_STAR_depth_STAR_14019,_STAR_shared_STAR_14020,_STAR_instrument_STAR_14021,_STAR_parent_STAR_14022,this$,this__12529__auto__,x14009_14028){
return (function (p1__14003_SHARP_,p2__14004_SHARP_){
return ((p1__14003_SHARP_ * (7)) + p2__14004_SHARP_);
});})(map__14023,map__14023__$1,props,game_state,game_size,grid,mask,flags,_STAR_reconciler_STAR_14018,_STAR_depth_STAR_14019,_STAR_shared_STAR_14020,_STAR_instrument_STAR_14021,_STAR_parent_STAR_14022,this$,this__12529__auto__,x14009_14028))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "minesweeper"},cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__14023,map__14023__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_14018,_STAR_depth_STAR_14019,_STAR_shared_STAR_14020,_STAR_instrument_STAR_14021,_STAR_parent_STAR_14022,this$,this__12529__auto__,x14009_14028){
return (function (r,row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "row"},cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__14023,map__14023__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_14018,_STAR_depth_STAR_14019,_STAR_shared_STAR_14020,_STAR_instrument_STAR_14021,_STAR_parent_STAR_14022,this$,this__12529__auto__,x14009_14028){
return (function (c,val){
var G__14025 = om.next.computed(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$react_DASH_key,key(r,c),cljs.core.cst$kw$game_DASH_state,game_state], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$flag,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),cljs.core.cst$kw$value,val,cljs.core.cst$kw$mask_DASH_val,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mask,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),cljs.core.cst$kw$row,r,cljs.core.cst$kw$col,c,cljs.core.cst$kw$can_DASH_spread,minesweeper.core.can_spread_sweep_QMARK_(game_size,grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));
return (minesweeper.core.cell_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.cell_view.cljs$core$IFn$_invoke$arity$1(G__14025) : minesweeper.core.cell_view.call(null,G__14025));
});})(map__14023,map__14023__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_14018,_STAR_depth_STAR_14019,_STAR_shared_STAR_14020,_STAR_instrument_STAR_14021,_STAR_parent_STAR_14022,this$,this__12529__auto__,x14009_14028))
,row));
});})(map__14023,map__14023__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_14018,_STAR_depth_STAR_14019,_STAR_shared_STAR_14020,_STAR_instrument_STAR_14021,_STAR_parent_STAR_14022,this$,this__12529__auto__,x14009_14028))
,grid));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14022;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14021;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14020;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14019;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14018;
}});})(x14009_14028))
;


minesweeper.core.GridView.prototype.constructor = minesweeper.core.GridView;

minesweeper.core.GridView.prototype.constructor.displayName = "minesweeper.core/GridView";

minesweeper.core.GridView.prototype.om$isComponent = true;

var x14026_14032 = minesweeper.core.GridView;
x14026_14032.om$next$IQuery$ = true;

x14026_14032.om$next$IQuery$query$arity$1 = ((function (x14026_14032){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x14026_14032))
;


var x14027_14033 = minesweeper.core.GridView.prototype;
x14027_14033.om$next$IQuery$ = true;

x14027_14033.om$next$IQuery$query$arity$1 = ((function (x14027_14033){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x14027_14033))
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

var x14038_14071 = minesweeper.core.ControlsView.prototype;
x14038_14071.componentWillUpdate = ((function (x14038_14071){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14072 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14073 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14072,next_ident__12535__auto___14073)){
var idxr__12536__auto___14074 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14074 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14074),((function (idxr__12536__auto___14074,ident__12534__auto___14072,next_ident__12535__auto___14073,this__12530__auto__,x14038_14071){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14072], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14073], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14074,ident__12534__auto___14072,next_ident__12535__auto___14073,this__12530__auto__,x14038_14071))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14038_14071))
;

x14038_14071.shouldComponentUpdate = ((function (x14038_14071){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14040 = next_props__12531__auto____$1;
var G__14040__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14040):G__14040);
return G__14040__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14045 = this__12530__auto__.state;
var G__14046 = "omcljs$state";
return goog.object.get(G__14045,G__14046);
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
});})(x14038_14071))
;

x14038_14071.componentWillUnmount = ((function (x14038_14071){
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
});})(x14038_14071))
;

x14038_14071.componentDidUpdate = ((function (x14038_14071){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14038_14071))
;

x14038_14071.isMounted = ((function (x14038_14071){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14038_14071))
;

x14038_14071.componentWillMount = ((function (x14038_14071){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14038_14071))
;

x14038_14071.render = ((function (x14038_14071){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14047 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14048 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14049 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14050 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14051 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering controls view"], 0));

var map__14052 = om.next.props(this$);
var map__14052__$1 = ((((!((map__14052 == null)))?((((map__14052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14052):map__14052);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14052__$1,cljs.core.cst$kw$level);
var G__14054 = {"className": "panel"};
var G__14055 = om.util.force_children((function (){var G__14057 = {"className": "control", "value": level, "onChange": ((function (G__14054,map__14052,map__14052__$1,level,_STAR_reconciler_STAR_14047,_STAR_depth_STAR_14048,_STAR_shared_STAR_14049,_STAR_instrument_STAR_14050,_STAR_parent_STAR_14051,this$,this__12529__auto__,x14038_14071){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_level_DASH_select),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level),cljs.core._conj(cljs.core.List.EMPTY,value)))))))))))))));
});})(G__14054,map__14052,map__14052__$1,level,_STAR_reconciler_STAR_14047,_STAR_depth_STAR_14048,_STAR_shared_STAR_14049,_STAR_instrument_STAR_14050,_STAR_parent_STAR_14051,this$,this__12529__auto__,x14038_14071))
};
var G__14058 = (function (){var G__14061 = {"value": "beginner"};
var G__14062 = "Beginner";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__14061,G__14062) : om.dom.option.call(null,G__14061,G__14062));
})();
var G__14059 = (function (){var G__14063 = {"value": "intermediate"};
var G__14064 = "Intermediate";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__14063,G__14064) : om.dom.option.call(null,G__14063,G__14064));
})();
var G__14060 = (function (){var G__14065 = {"value": "expert"};
var G__14066 = "Expert";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__14065,G__14066) : om.dom.option.call(null,G__14065,G__14066));
})();
return (om.dom.select.cljs$core$IFn$_invoke$arity$4 ? om.dom.select.cljs$core$IFn$_invoke$arity$4(G__14057,G__14058,G__14059,G__14060) : om.dom.select.call(null,G__14057,G__14058,G__14059,G__14060));
})());
var G__14056 = om.util.force_children((function (){var G__14067 = {"className": "control", "onClick": ((function (G__14054,G__14055,map__14052,map__14052__$1,level,_STAR_reconciler_STAR_14047,_STAR_depth_STAR_14048,_STAR_shared_STAR_14049,_STAR_instrument_STAR_14050,_STAR_parent_STAR_14051,this$,this__12529__auto__,x14038_14071){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_reset))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level))))));
});})(G__14054,G__14055,map__14052,map__14052__$1,level,_STAR_reconciler_STAR_14047,_STAR_depth_STAR_14048,_STAR_shared_STAR_14049,_STAR_instrument_STAR_14050,_STAR_parent_STAR_14051,this$,this__12529__auto__,x14038_14071))
};
var G__14068 = om.util.force_children("Reset");
return React.DOM.button(G__14067,G__14068);
})());
return React.DOM.div(G__14054,G__14055,G__14056);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14051;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14050;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14049;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14048;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14047;
}});})(x14038_14071))
;


minesweeper.core.ControlsView.prototype.constructor = minesweeper.core.ControlsView;

minesweeper.core.ControlsView.prototype.constructor.displayName = "minesweeper.core/ControlsView";

minesweeper.core.ControlsView.prototype.om$isComponent = true;

var x14069_14075 = minesweeper.core.ControlsView;
x14069_14075.om$next$IQuery$ = true;

x14069_14075.om$next$IQuery$query$arity$1 = ((function (x14069_14075){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level], null);
});})(x14069_14075))
;


var x14070_14076 = minesweeper.core.ControlsView.prototype;
x14070_14076.om$next$IQuery$ = true;

x14070_14076.om$next$IQuery$query$arity$1 = ((function (x14070_14076){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level], null);
});})(x14070_14076))
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

var x14081_14104 = minesweeper.core.TimerView.prototype;
x14081_14104.componentWillUpdate = ((function (x14081_14104){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14105 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14106 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14105,next_ident__12535__auto___14106)){
var idxr__12536__auto___14107 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14107 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14107),((function (idxr__12536__auto___14107,ident__12534__auto___14105,next_ident__12535__auto___14106,this__12530__auto__,x14081_14104){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14105], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14106], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14107,ident__12534__auto___14105,next_ident__12535__auto___14106,this__12530__auto__,x14081_14104))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14081_14104))
;

x14081_14104.shouldComponentUpdate = ((function (x14081_14104){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14083 = next_props__12531__auto____$1;
var G__14083__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14083):G__14083);
return G__14083__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14088 = this__12530__auto__.state;
var G__14089 = "omcljs$state";
return goog.object.get(G__14088,G__14089);
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
});})(x14081_14104))
;

x14081_14104.componentWillUnmount = ((function (x14081_14104){
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
});})(x14081_14104))
;

x14081_14104.componentDidUpdate = ((function (x14081_14104){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14081_14104))
;

x14081_14104.isMounted = ((function (x14081_14104){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14081_14104))
;

x14081_14104.componentWillMount = ((function (x14081_14104){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14081_14104))
;

x14081_14104.render = ((function (x14081_14104){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14090 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14091 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14092 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14093 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14094 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering timer view"], 0));

var map__14095 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14095__$1 = ((((!((map__14095 == null)))?((((map__14095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14095):map__14095);
var elapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095__$1,cljs.core.cst$kw$elapsed);
var G__14097 = {"className": "timer"};
var G__14098 = om.util.force_children("Time ");
var G__14099 = om.util.force_children((function (){var G__14100 = null;
var G__14101 = om.util.force_children(goog.string.format("%03d",elapsed));
return React.DOM.span(G__14100,G__14101);
})());
return React.DOM.div(G__14097,G__14098,G__14099);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14094;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14093;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14092;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14091;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14090;
}});})(x14081_14104))
;


minesweeper.core.TimerView.prototype.constructor = minesweeper.core.TimerView;

minesweeper.core.TimerView.prototype.constructor.displayName = "minesweeper.core/TimerView";

minesweeper.core.TimerView.prototype.om$isComponent = true;

var x14102_14108 = minesweeper.core.TimerView;
x14102_14108.om$next$IQuery$ = true;

x14102_14108.om$next$IQuery$query$arity$1 = ((function (x14102_14108){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x14102_14108))
;


var x14103_14109 = minesweeper.core.TimerView.prototype;
x14103_14109.om$next$IQuery$ = true;

x14103_14109.om$next$IQuery$query$arity$1 = ((function (x14103_14109){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x14103_14109))
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

var x14114_14149 = minesweeper.core.InfoView.prototype;
x14114_14149.componentWillUpdate = ((function (x14114_14149){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14150 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14151 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14150,next_ident__12535__auto___14151)){
var idxr__12536__auto___14152 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14152 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14152),((function (idxr__12536__auto___14152,ident__12534__auto___14150,next_ident__12535__auto___14151,this__12530__auto__,x14114_14149){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14150], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14151], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14152,ident__12534__auto___14150,next_ident__12535__auto___14151,this__12530__auto__,x14114_14149))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14114_14149))
;

x14114_14149.shouldComponentUpdate = ((function (x14114_14149){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14116 = next_props__12531__auto____$1;
var G__14116__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14116):G__14116);
return G__14116__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14121 = this__12530__auto__.state;
var G__14122 = "omcljs$state";
return goog.object.get(G__14121,G__14122);
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
});})(x14114_14149))
;

x14114_14149.componentWillUnmount = ((function (x14114_14149){
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
});})(x14114_14149))
;

x14114_14149.componentDidUpdate = ((function (x14114_14149){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14114_14149))
;

x14114_14149.isMounted = ((function (x14114_14149){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14114_14149))
;

x14114_14149.componentWillMount = ((function (x14114_14149){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14114_14149))
;

x14114_14149.render = ((function (x14114_14149){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14123 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14124 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14125 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14126 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14127 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering info view"], 0));

var map__14128 = om.next.props(this$);
var map__14128__$1 = ((((!((map__14128 == null)))?((((map__14128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14128):map__14128);
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14128__$1,cljs.core.cst$kw$high_DASH_score);
var map__14129 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14129__$1 = ((((!((map__14129 == null)))?((((map__14129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14129):map__14129);
var time_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$time_DASH_started);
var tick_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$tick_DASH_count);
var num_remaining = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14129__$1,cljs.core.cst$kw$num_DASH_remaining);
var G__14132 = {"className": "info"};
var G__14133 = om.util.force_children((function (){var G__14136 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elapsed,minesweeper.core.calc_elapsed(time_started)], null));
return (minesweeper.core.timer_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.timer_view.cljs$core$IFn$_invoke$arity$1(G__14136) : minesweeper.core.timer_view.call(null,G__14136));
})());
var G__14134 = om.util.force_children((function (){var G__14137 = {"className": "high-score"};
var G__14138 = om.util.force_children("Best ");
var G__14139 = om.util.force_children((function (){var G__14140 = null;
var G__14141 = om.util.force_children((((high_score == null))?"---":goog.string.format("%03d",high_score)));
return React.DOM.span(G__14140,G__14141);
})());
return React.DOM.div(G__14137,G__14138,G__14139);
})());
var G__14135 = om.util.force_children((function (){var G__14142 = {"className": "remaining"};
var G__14143 = om.util.force_children("Mines ");
var G__14144 = om.util.force_children((function (){var G__14145 = null;
var G__14146 = om.util.force_children(goog.string.format("%03d",num_remaining));
return React.DOM.span(G__14145,G__14146);
})());
return React.DOM.div(G__14142,G__14143,G__14144);
})());
return React.DOM.div(G__14132,G__14133,G__14134,G__14135);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14127;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14126;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14125;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14124;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14123;
}});})(x14114_14149))
;


minesweeper.core.InfoView.prototype.constructor = minesweeper.core.InfoView;

minesweeper.core.InfoView.prototype.constructor.displayName = "minesweeper.core/InfoView";

minesweeper.core.InfoView.prototype.om$isComponent = true;

var x14147_14153 = minesweeper.core.InfoView;
x14147_14153.om$next$IQuery$ = true;

x14147_14153.om$next$IQuery$query$arity$1 = ((function (x14147_14153){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$flags], null);
});})(x14147_14153))
;


var x14148_14154 = minesweeper.core.InfoView.prototype;
x14148_14154.om$next$IQuery$ = true;

x14148_14154.om$next$IQuery$query$arity$1 = ((function (x14148_14154){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$flags], null);
});})(x14148_14154))
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

var x14159_14187 = minesweeper.core.MainView.prototype;
x14159_14187.componentWillUpdate = ((function (x14159_14187){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14188 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14189 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14188,next_ident__12535__auto___14189)){
var idxr__12536__auto___14190 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14190 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14190),((function (idxr__12536__auto___14190,ident__12534__auto___14188,next_ident__12535__auto___14189,this__12530__auto__,x14159_14187){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14188], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14189], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14190,ident__12534__auto___14188,next_ident__12535__auto___14189,this__12530__auto__,x14159_14187))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14159_14187))
;

x14159_14187.shouldComponentUpdate = ((function (x14159_14187){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14161 = next_props__12531__auto____$1;
var G__14161__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14161):G__14161);
return G__14161__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14166 = this__12530__auto__.state;
var G__14167 = "omcljs$state";
return goog.object.get(G__14166,G__14167);
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
});})(x14159_14187))
;

x14159_14187.componentWillUnmount = ((function (x14159_14187){
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
});})(x14159_14187))
;

x14159_14187.componentDidUpdate = ((function (x14159_14187){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14159_14187))
;

x14159_14187.isMounted = ((function (x14159_14187){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14159_14187))
;

x14159_14187.componentWillMount = ((function (x14159_14187){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14159_14187))
;

x14159_14187.componentDidMount = ((function (x14159_14187){
return (function (){
var this$ = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["MainView mounted"], 0));

var G__14168 = ((function (this$,x14159_14187){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_tick))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$tick_DASH_count))))));
});})(this$,x14159_14187))
;
var G__14169 = (1000);
return setInterval(G__14168,G__14169);
});})(x14159_14187))
;

x14159_14187.render = ((function (x14159_14187){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14170 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14171 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14172 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14173 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14174 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering main view"], 0));

var map__14175 = om.next.props(this$);
var map__14175__$1 = ((((!((map__14175 == null)))?((((map__14175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14175):map__14175);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$controls);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$level);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$flags);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$game_DASH_state);
var time_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$time_DASH_started);
var tick_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$tick_DASH_count);
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14175__$1,cljs.core.cst$kw$high_DASH_score);
var game_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(level,cljs.core.cst$kw$size);
var num_mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(level,cljs.core.cst$kw$mines);
var num_remaining = (num_mines - minesweeper.core.count_flags(flags));
var G__14178 = {"className": [cljs.core.str("minesweeper-wrap "),cljs.core.str((function (){var G__14182 = (((game_state instanceof cljs.core.Keyword))?game_state.fqn:null);
switch (G__14182) {
case "victorious":
return "st-victorious";

break;
case "dead":
return "st-dead";

break;
default:
return "";

}
})())].join(''), "onContextMenu": ((function (map__14175,map__14175__$1,controls,level,grid,mask,flags,game_state,time_started,tick_count,high_score,game_size,num_mines,num_remaining,_STAR_reconciler_STAR_14170,_STAR_depth_STAR_14171,_STAR_shared_STAR_14172,_STAR_instrument_STAR_14173,_STAR_parent_STAR_14174,this$,this__12529__auto__,x14159_14187){
return (function (e){
return e.preventDefault();
});})(map__14175,map__14175__$1,controls,level,grid,mask,flags,game_state,time_started,tick_count,high_score,game_size,num_mines,num_remaining,_STAR_reconciler_STAR_14170,_STAR_depth_STAR_14171,_STAR_shared_STAR_14172,_STAR_instrument_STAR_14173,_STAR_parent_STAR_14174,this$,this__12529__auto__,x14159_14187))
};
var G__14179 = om.util.force_children((function (){var G__14183 = om.next.computed(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$react_DASH_key,"info",cljs.core.cst$kw$high_DASH_score,high_score], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time_DASH_started,time_started,cljs.core.cst$kw$tick_DASH_count,tick_count,cljs.core.cst$kw$num_DASH_remaining,num_remaining], null));
return (minesweeper.core.info_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.info_view.cljs$core$IFn$_invoke$arity$1(G__14183) : minesweeper.core.info_view.call(null,G__14183));
})());
var G__14180 = om.util.force_children((function (){var G__14184 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$game_DASH_state,game_state,cljs.core.cst$kw$game_DASH_size,game_size,cljs.core.cst$kw$grid,grid,cljs.core.cst$kw$mask,mask,cljs.core.cst$kw$flags,flags], null);
return (minesweeper.core.grid_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.grid_view.cljs$core$IFn$_invoke$arity$1(G__14184) : minesweeper.core.grid_view.call(null,G__14184));
})());
var G__14181 = om.util.force_children((minesweeper.core.controls_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.controls_view.cljs$core$IFn$_invoke$arity$1(controls) : minesweeper.core.controls_view.call(null,controls)));
return React.DOM.div(G__14178,G__14179,G__14180,G__14181);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14174;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14173;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14172;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14171;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14170;
}});})(x14159_14187))
;


minesweeper.core.MainView.prototype.constructor = minesweeper.core.MainView;

minesweeper.core.MainView.prototype.constructor.displayName = "minesweeper.core/MainView";

minesweeper.core.MainView.prototype.om$isComponent = true;

var x14185_14192 = minesweeper.core.MainView;
x14185_14192.om$next$IQuery$ = true;

x14185_14192.om$next$IQuery$query$arity$1 = ((function (x14185_14192){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$grid,cljs.core.cst$kw$mask,cljs.core.cst$kw$flags,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$high_DASH_score,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$controls,om.next.get_query(minesweeper.core.ControlsView)], null)], null);
});})(x14185_14192))
;


var x14186_14193 = minesweeper.core.MainView.prototype;
x14186_14193.om$next$IQuery$ = true;

x14186_14193.om$next$IQuery$query$arity$1 = ((function (x14186_14193){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$grid,cljs.core.cst$kw$mask,cljs.core.cst$kw$flags,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$high_DASH_score,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$controls,om.next.get_query(minesweeper.core.ControlsView)], null)], null);
});})(x14186_14193))
;


minesweeper.core.MainView.cljs$lang$type = true;

minesweeper.core.MainView.cljs$lang$ctorStr = "minesweeper.core/MainView";

minesweeper.core.MainView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/MainView");
});
om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(minesweeper.core.reconciler,minesweeper.core.MainView,goog.dom.getElement("app"));

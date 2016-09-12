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
 * Takes an empty grid and populates it randomly with mines
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
 * Returns a flat vector of [row col value] vectors to enable easy
 *   iteration over the grid
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
 * Takes a populated grid and sets the numbers
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
 * Seconds since epoch
 */
minesweeper.core.get_time = (function minesweeper$core$get_time(){
var millis = (new Date()).getTime();
return (millis / (1000));
});
minesweeper.core.calc_elapsed = (function minesweeper$core$calc_elapsed(time_started){
return ((minesweeper.core.get_time() - time_started) | (0));
});
minesweeper.core.new_state = (function minesweeper$core$new_state(level){
var vec__13792 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13792,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13792,(1),null);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,cljs.core.cst$kw$mines], null));
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$mask,cljs.core.cst$kw$grid,cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$controls,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$level,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$flags],[minesweeper.core.empty_mask(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),minesweeper.core.label_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),minesweeper.core.populate_grid(minesweeper.core.empty_grid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),num_mines)),minesweeper.core.get_high_score(level),minesweeper.core.get_time(),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$level,level,cljs.core.cst$kw$react_DASH_key,"controls"], null),cljs.core.cst$kw$pending,cljs.core.get.cljs$core$IFn$_invoke$arity$2(minesweeper.core.levels,level),(0),minesweeper.core.empty_flags(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null))]);
});
minesweeper.core.app_state = (function (){var G__13793 = minesweeper.core.new_state("intermediate");
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13793) : cljs.core.atom.call(null,G__13793));
})();
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

var x13798_13823 = minesweeper.core.ExposedCellView.prototype;
x13798_13823.componentWillUpdate = ((function (x13798_13823){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13824 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13825 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13824,next_ident__12535__auto___13825)){
var idxr__12536__auto___13826 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13826 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13826),((function (idxr__12536__auto___13826,ident__12534__auto___13824,next_ident__12535__auto___13825,this__12530__auto__,x13798_13823){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13824], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13825], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13826,ident__12534__auto___13824,next_ident__12535__auto___13825,this__12530__auto__,x13798_13823))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13798_13823))
;

x13798_13823.shouldComponentUpdate = ((function (x13798_13823){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13800 = next_props__12531__auto____$1;
var G__13800__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13800):G__13800);
return G__13800__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13805 = this__12530__auto__.state;
var G__13806 = "omcljs$state";
return goog.object.get(G__13805,G__13806);
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
});})(x13798_13823))
;

x13798_13823.componentWillUnmount = ((function (x13798_13823){
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
});})(x13798_13823))
;

x13798_13823.componentDidUpdate = ((function (x13798_13823){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13798_13823))
;

x13798_13823.isMounted = ((function (x13798_13823){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13798_13823))
;

x13798_13823.componentWillMount = ((function (x13798_13823){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13798_13823))
;

x13798_13823.render = ((function (x13798_13823){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13807 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13808 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13809 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13810 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13811 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13812 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13812__$1 = ((((!((map__13812 == null)))?((((map__13812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13812):map__13812);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,cljs.core.cst$kw$col);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,cljs.core.cst$kw$value);
var can_spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13812__$1,cljs.core.cst$kw$can_DASH_spread);
var str_val = (function (){var G__13814 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),G__13814)){
return "one";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),G__13814)){
return "two";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),G__13814)){
return "three";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),G__13814)){
return "four";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),G__13814)){
return "five";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),G__13814)){
return "six";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),G__13814)){
return "seven";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),G__13814)){
return "eight";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13814)){
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

var G__13815 = {"className": [cljs.core.str("cell revealed "),cljs.core.str(str_val),cljs.core.str((cljs.core.truth_(can_spread)?" spread":""))].join(''), "onClick": ((function (map__13812,map__13812__$1,row,col,value,can_spread,str_val,_STAR_reconciler_STAR_13807,_STAR_depth_STAR_13808,_STAR_shared_STAR_13809,_STAR_instrument_STAR_13810,_STAR_parent_STAR_13811,this$,this__12529__auto__,x13798_13823){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_spread_DASH_sweep),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mask),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$game_DASH_state)], 0))))));
});})(map__13812,map__13812__$1,row,col,value,can_spread,str_val,_STAR_reconciler_STAR_13807,_STAR_depth_STAR_13808,_STAR_shared_STAR_13809,_STAR_instrument_STAR_13810,_STAR_parent_STAR_13811,this$,this__12529__auto__,x13798_13823))
};
var G__13816 = om.util.force_children((function (){var G__13818 = null;
var G__13819 = om.util.force_children((function (){var G__13820 = value;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,G__13820)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__13820)){
return "";
} else {
return value;

}
}
})());
return React.DOM.span(G__13818,G__13819);
})());
return React.DOM.div(G__13815,G__13816);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13811;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13810;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13809;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13808;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13807;
}});})(x13798_13823))
;


minesweeper.core.ExposedCellView.prototype.constructor = minesweeper.core.ExposedCellView;

minesweeper.core.ExposedCellView.prototype.constructor.displayName = "minesweeper.core/ExposedCellView";

minesweeper.core.ExposedCellView.prototype.om$isComponent = true;

var x13821_13827 = minesweeper.core.ExposedCellView;
x13821_13827.om$next$IQuery$ = true;

x13821_13827.om$next$IQuery$query$arity$1 = ((function (x13821_13827){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13821_13827))
;


var x13822_13828 = minesweeper.core.ExposedCellView.prototype;
x13822_13828.om$next$IQuery$ = true;

x13822_13828.om$next$IQuery$query$arity$1 = ((function (x13822_13828){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13822_13828))
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

var x13833_13855 = minesweeper.core.HiddenCellView.prototype;
x13833_13855.componentWillUpdate = ((function (x13833_13855){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13856 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13857 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13856,next_ident__12535__auto___13857)){
var idxr__12536__auto___13858 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13858 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13858),((function (idxr__12536__auto___13858,ident__12534__auto___13856,next_ident__12535__auto___13857,this__12530__auto__,x13833_13855){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13856], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13857], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13858,ident__12534__auto___13856,next_ident__12535__auto___13857,this__12530__auto__,x13833_13855))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13833_13855))
;

x13833_13855.shouldComponentUpdate = ((function (x13833_13855){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13835 = next_props__12531__auto____$1;
var G__13835__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13835):G__13835);
return G__13835__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13840 = this__12530__auto__.state;
var G__13841 = "omcljs$state";
return goog.object.get(G__13840,G__13841);
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
});})(x13833_13855))
;

x13833_13855.componentWillUnmount = ((function (x13833_13855){
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
});})(x13833_13855))
;

x13833_13855.componentDidUpdate = ((function (x13833_13855){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13833_13855))
;

x13833_13855.isMounted = ((function (x13833_13855){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13833_13855))
;

x13833_13855.componentWillMount = ((function (x13833_13855){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13833_13855))
;

x13833_13855.render = ((function (x13833_13855){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13842 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13843 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13844 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13845 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13846 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13847 = om.next.props(this$);
var map__13847__$1 = ((((!((map__13847 == null)))?((((map__13847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13847):map__13847);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,cljs.core.cst$kw$game_DASH_state);
var map__13848 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13848__$1 = ((((!((map__13848 == null)))?((((map__13848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13848):map__13848);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,cljs.core.cst$kw$col);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,cljs.core.cst$kw$value);
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,cljs.core.cst$kw$flag);
var status_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dead,game_state))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,value))?"mine":"safe"):"");
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Rendering hidden cell ("),cljs.core.str(row),cljs.core.str(","),cljs.core.str(col),cljs.core.str(","),cljs.core.str(flag),cljs.core.str(")")].join('')], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),flag)){
var G__13851 = {"className": [cljs.core.str("cell hidden flagged "),cljs.core.str(status_str)].join(''), "onContextMenu": ((function (map__13847,map__13847__$1,game_state,map__13848,map__13848__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13842,_STAR_depth_STAR_13843,_STAR_shared_STAR_13844,_STAR_instrument_STAR_13845,_STAR_parent_STAR_13846,this$,this__12529__auto__,x13833_13855){
return (function (e){
e.preventDefault();

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_unflag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$flags))))));
});})(map__13847,map__13847__$1,game_state,map__13848,map__13848__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13842,_STAR_depth_STAR_13843,_STAR_shared_STAR_13844,_STAR_instrument_STAR_13845,_STAR_parent_STAR_13846,this$,this__12529__auto__,x13833_13855))
};
return React.DOM.div(G__13851);
} else {
var G__13852 = {"className": [cljs.core.str("cell hidden "),cljs.core.str(status_str)].join(''), "onClick": ((function (map__13847,map__13847__$1,game_state,map__13848,map__13848__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13842,_STAR_depth_STAR_13843,_STAR_shared_STAR_13844,_STAR_instrument_STAR_13845,_STAR_parent_STAR_13846,this$,this__12529__auto__,x13833_13855){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_sweep),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$mask),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$game_DASH_state)], 0))))));
});})(map__13847,map__13847__$1,game_state,map__13848,map__13848__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13842,_STAR_depth_STAR_13843,_STAR_shared_STAR_13844,_STAR_instrument_STAR_13845,_STAR_parent_STAR_13846,this$,this__12529__auto__,x13833_13855))
, "onContextMenu": ((function (map__13847,map__13847__$1,game_state,map__13848,map__13848__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13842,_STAR_depth_STAR_13843,_STAR_shared_STAR_13844,_STAR_instrument_STAR_13845,_STAR_parent_STAR_13846,this$,this__12529__auto__,x13833_13855){
return (function (e){
e.preventDefault();

return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_flag),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$row),cljs.core._conj(cljs.core.List.EMPTY,row),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$col),cljs.core._conj(cljs.core.List.EMPTY,col)], 0)))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$flags))))));
});})(map__13847,map__13847__$1,game_state,map__13848,map__13848__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_13842,_STAR_depth_STAR_13843,_STAR_shared_STAR_13844,_STAR_instrument_STAR_13845,_STAR_parent_STAR_13846,this$,this__12529__auto__,x13833_13855))
};
return React.DOM.div(G__13852);
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13846;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13845;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13844;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13843;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13842;
}});})(x13833_13855))
;


minesweeper.core.HiddenCellView.prototype.constructor = minesweeper.core.HiddenCellView;

minesweeper.core.HiddenCellView.prototype.constructor.displayName = "minesweeper.core/HiddenCellView";

minesweeper.core.HiddenCellView.prototype.om$isComponent = true;

var x13853_13859 = minesweeper.core.HiddenCellView;
x13853_13859.om$next$IQuery$ = true;

x13853_13859.om$next$IQuery$query$arity$1 = ((function (x13853_13859){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13853_13859))
;


var x13854_13860 = minesweeper.core.HiddenCellView.prototype;
x13854_13860.om$next$IQuery$ = true;

x13854_13860.om$next$IQuery$query$arity$1 = ((function (x13854_13860){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13854_13860))
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

var x13865_13887 = minesweeper.core.CellView.prototype;
x13865_13887.componentWillUpdate = ((function (x13865_13887){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13888 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13889 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13888,next_ident__12535__auto___13889)){
var idxr__12536__auto___13890 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13890 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13890),((function (idxr__12536__auto___13890,ident__12534__auto___13888,next_ident__12535__auto___13889,this__12530__auto__,x13865_13887){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13888], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13889], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13890,ident__12534__auto___13888,next_ident__12535__auto___13889,this__12530__auto__,x13865_13887))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13865_13887))
;

x13865_13887.shouldComponentUpdate = ((function (x13865_13887){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13867 = next_props__12531__auto____$1;
var G__13867__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13867):G__13867);
return G__13867__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13872 = this__12530__auto__.state;
var G__13873 = "omcljs$state";
return goog.object.get(G__13872,G__13873);
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
});})(x13865_13887))
;

x13865_13887.componentWillUnmount = ((function (x13865_13887){
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
});})(x13865_13887))
;

x13865_13887.componentDidUpdate = ((function (x13865_13887){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13865_13887))
;

x13865_13887.isMounted = ((function (x13865_13887){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13865_13887))
;

x13865_13887.componentWillMount = ((function (x13865_13887){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13865_13887))
;

x13865_13887.render = ((function (x13865_13887){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13874 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13875 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13876 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13877 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13878 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13879 = om.next.props(this$);
var map__13879__$1 = ((((!((map__13879 == null)))?((((map__13879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13879):map__13879);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13879__$1,cljs.core.cst$kw$game_DASH_state);
var map__13880 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13880__$1 = ((((!((map__13880 == null)))?((((map__13880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13880):map__13880);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,cljs.core.cst$kw$col);
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,cljs.core.cst$kw$flag);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,cljs.core.cst$kw$value);
var mask_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,cljs.core.cst$kw$mask_DASH_val);
var can_spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,cljs.core.cst$kw$can_DASH_spread);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mask_val,(1))){
var G__13883 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col,cljs.core.cst$kw$can_DASH_spread,can_spread], null));
return (minesweeper.core.exposed_cell_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.exposed_cell_view.cljs$core$IFn$_invoke$arity$1(G__13883) : minesweeper.core.exposed_cell_view.call(null,G__13883));
} else {
var G__13884 = om.next.computed(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$game_DASH_state,game_state], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$flag,flag,cljs.core.cst$kw$value,value,cljs.core.cst$kw$row,row,cljs.core.cst$kw$col,col], null));
return (minesweeper.core.hidden_cell_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.hidden_cell_view.cljs$core$IFn$_invoke$arity$1(G__13884) : minesweeper.core.hidden_cell_view.call(null,G__13884));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13878;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13877;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13876;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13875;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13874;
}});})(x13865_13887))
;


minesweeper.core.CellView.prototype.constructor = minesweeper.core.CellView;

minesweeper.core.CellView.prototype.constructor.displayName = "minesweeper.core/CellView";

minesweeper.core.CellView.prototype.om$isComponent = true;

var x13885_13891 = minesweeper.core.CellView;
x13885_13891.om$next$IQuery$ = true;

x13885_13891.om$next$IQuery$query$arity$1 = ((function (x13885_13891){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
});})(x13885_13891))
;


var x13886_13892 = minesweeper.core.CellView.prototype;
x13886_13892.om$next$IQuery$ = true;

x13886_13892.om$next$IQuery$query$arity$1 = ((function (x13886_13892){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$game_DASH_state], null);
});})(x13886_13892))
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

var x13899_13918 = minesweeper.core.GridView.prototype;
x13899_13918.componentWillUpdate = ((function (x13899_13918){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13919 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13920 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13919,next_ident__12535__auto___13920)){
var idxr__12536__auto___13921 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13921 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13921),((function (idxr__12536__auto___13921,ident__12534__auto___13919,next_ident__12535__auto___13920,this__12530__auto__,x13899_13918){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13919], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13920], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13921,ident__12534__auto___13919,next_ident__12535__auto___13920,this__12530__auto__,x13899_13918))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13899_13918))
;

x13899_13918.shouldComponentUpdate = ((function (x13899_13918){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13901 = next_props__12531__auto____$1;
var G__13901__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13901):G__13901);
return G__13901__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13906 = this__12530__auto__.state;
var G__13907 = "omcljs$state";
return goog.object.get(G__13906,G__13907);
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
});})(x13899_13918))
;

x13899_13918.componentWillUnmount = ((function (x13899_13918){
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
});})(x13899_13918))
;

x13899_13918.componentDidUpdate = ((function (x13899_13918){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13899_13918))
;

x13899_13918.isMounted = ((function (x13899_13918){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13899_13918))
;

x13899_13918.componentWillMount = ((function (x13899_13918){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13899_13918))
;

x13899_13918.render = ((function (x13899_13918){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13908 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13909 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13910 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13911 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13912 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13913 = om.next.props(this$);
var map__13913__$1 = ((((!((map__13913 == null)))?((((map__13913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13913):map__13913);
var props = map__13913__$1;
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13913__$1,cljs.core.cst$kw$game_DASH_state);
var game_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13913__$1,cljs.core.cst$kw$game_DASH_size);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13913__$1,cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13913__$1,cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13913__$1,cljs.core.cst$kw$flags);
var key = ((function (map__13913,map__13913__$1,props,game_state,game_size,grid,mask,flags,_STAR_reconciler_STAR_13908,_STAR_depth_STAR_13909,_STAR_shared_STAR_13910,_STAR_instrument_STAR_13911,_STAR_parent_STAR_13912,this$,this__12529__auto__,x13899_13918){
return (function (p1__13893_SHARP_,p2__13894_SHARP_){
return ((p1__13893_SHARP_ * (7)) + p2__13894_SHARP_);
});})(map__13913,map__13913__$1,props,game_state,game_size,grid,mask,flags,_STAR_reconciler_STAR_13908,_STAR_depth_STAR_13909,_STAR_shared_STAR_13910,_STAR_instrument_STAR_13911,_STAR_parent_STAR_13912,this$,this__12529__auto__,x13899_13918))
;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering grid"], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "minesweeper"},cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__13913,map__13913__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_13908,_STAR_depth_STAR_13909,_STAR_shared_STAR_13910,_STAR_instrument_STAR_13911,_STAR_parent_STAR_13912,this$,this__12529__auto__,x13899_13918){
return (function (r,row){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.div,{"className": "row"},cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__13913,map__13913__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_13908,_STAR_depth_STAR_13909,_STAR_shared_STAR_13910,_STAR_instrument_STAR_13911,_STAR_parent_STAR_13912,this$,this__12529__auto__,x13899_13918){
return (function (c,val){
var G__13915 = om.next.computed(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$react_DASH_key,key(r,c),cljs.core.cst$kw$game_DASH_state,game_state], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$flag,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),cljs.core.cst$kw$value,val,cljs.core.cst$kw$mask_DASH_val,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mask,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),cljs.core.cst$kw$row,r,cljs.core.cst$kw$col,c,cljs.core.cst$kw$can_DASH_spread,minesweeper.core.can_spread_sweep_QMARK_(game_size,grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null));
return (minesweeper.core.cell_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.cell_view.cljs$core$IFn$_invoke$arity$1(G__13915) : minesweeper.core.cell_view.call(null,G__13915));
});})(map__13913,map__13913__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_13908,_STAR_depth_STAR_13909,_STAR_shared_STAR_13910,_STAR_instrument_STAR_13911,_STAR_parent_STAR_13912,this$,this__12529__auto__,x13899_13918))
,row));
});})(map__13913,map__13913__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_13908,_STAR_depth_STAR_13909,_STAR_shared_STAR_13910,_STAR_instrument_STAR_13911,_STAR_parent_STAR_13912,this$,this__12529__auto__,x13899_13918))
,grid));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13912;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13911;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13910;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13909;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13908;
}});})(x13899_13918))
;


minesweeper.core.GridView.prototype.constructor = minesweeper.core.GridView;

minesweeper.core.GridView.prototype.constructor.displayName = "minesweeper.core/GridView";

minesweeper.core.GridView.prototype.om$isComponent = true;

var x13916_13922 = minesweeper.core.GridView;
x13916_13922.om$next$IQuery$ = true;

x13916_13922.om$next$IQuery$query$arity$1 = ((function (x13916_13922){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13916_13922))
;


var x13917_13923 = minesweeper.core.GridView.prototype;
x13917_13923.om$next$IQuery$ = true;

x13917_13923.om$next$IQuery$query$arity$1 = ((function (x13917_13923){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13917_13923))
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

var x13928_13961 = minesweeper.core.ControlsView.prototype;
x13928_13961.componentWillUpdate = ((function (x13928_13961){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13962 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13963 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13962,next_ident__12535__auto___13963)){
var idxr__12536__auto___13964 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13964 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13964),((function (idxr__12536__auto___13964,ident__12534__auto___13962,next_ident__12535__auto___13963,this__12530__auto__,x13928_13961){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13962], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13963], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13964,ident__12534__auto___13962,next_ident__12535__auto___13963,this__12530__auto__,x13928_13961))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13928_13961))
;

x13928_13961.shouldComponentUpdate = ((function (x13928_13961){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13930 = next_props__12531__auto____$1;
var G__13930__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13930):G__13930);
return G__13930__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13935 = this__12530__auto__.state;
var G__13936 = "omcljs$state";
return goog.object.get(G__13935,G__13936);
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
});})(x13928_13961))
;

x13928_13961.componentWillUnmount = ((function (x13928_13961){
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
});})(x13928_13961))
;

x13928_13961.componentDidUpdate = ((function (x13928_13961){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13928_13961))
;

x13928_13961.isMounted = ((function (x13928_13961){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13928_13961))
;

x13928_13961.componentWillMount = ((function (x13928_13961){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13928_13961))
;

x13928_13961.render = ((function (x13928_13961){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13937 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13938 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13939 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13940 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13941 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13942 = om.next.props(this$);
var map__13942__$1 = ((((!((map__13942 == null)))?((((map__13942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13942):map__13942);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13942__$1,cljs.core.cst$kw$level);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("Level="),cljs.core.str(level)].join('')], 0));

var G__13944 = {"className": "panel"};
var G__13945 = om.util.force_children((function (){var G__13947 = {"className": "control", "value": level, "onChange": ((function (G__13944,map__13942,map__13942__$1,level,_STAR_reconciler_STAR_13937,_STAR_depth_STAR_13938,_STAR_shared_STAR_13939,_STAR_instrument_STAR_13940,_STAR_parent_STAR_13941,this$,this__12529__auto__,x13928_13961){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_level_DASH_select),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level),cljs.core._conj(cljs.core.List.EMPTY,value)))))))))))))));
});})(G__13944,map__13942,map__13942__$1,level,_STAR_reconciler_STAR_13937,_STAR_depth_STAR_13938,_STAR_shared_STAR_13939,_STAR_instrument_STAR_13940,_STAR_parent_STAR_13941,this$,this__12529__auto__,x13928_13961))
};
var G__13948 = (function (){var G__13951 = {"value": "beginner"};
var G__13952 = "Beginner";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__13951,G__13952) : om.dom.option.call(null,G__13951,G__13952));
})();
var G__13949 = (function (){var G__13953 = {"value": "intermediate"};
var G__13954 = "Intermediate";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__13953,G__13954) : om.dom.option.call(null,G__13953,G__13954));
})();
var G__13950 = (function (){var G__13955 = {"value": "expert"};
var G__13956 = "Expert";
return (om.dom.option.cljs$core$IFn$_invoke$arity$2 ? om.dom.option.cljs$core$IFn$_invoke$arity$2(G__13955,G__13956) : om.dom.option.call(null,G__13955,G__13956));
})();
return (om.dom.select.cljs$core$IFn$_invoke$arity$4 ? om.dom.select.cljs$core$IFn$_invoke$arity$4(G__13947,G__13948,G__13949,G__13950) : om.dom.select.call(null,G__13947,G__13948,G__13949,G__13950));
})());
var G__13946 = om.util.force_children((function (){var G__13957 = {"className": "control", "onClick": ((function (G__13944,G__13945,map__13942,map__13942__$1,level,_STAR_reconciler_STAR_13937,_STAR_depth_STAR_13938,_STAR_shared_STAR_13939,_STAR_instrument_STAR_13940,_STAR_parent_STAR_13941,this$,this__12529__auto__,x13928_13961){
return (function (e){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_reset))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$level))))));
});})(G__13944,G__13945,map__13942,map__13942__$1,level,_STAR_reconciler_STAR_13937,_STAR_depth_STAR_13938,_STAR_shared_STAR_13939,_STAR_instrument_STAR_13940,_STAR_parent_STAR_13941,this$,this__12529__auto__,x13928_13961))
};
var G__13958 = om.util.force_children("Reset");
return React.DOM.button(G__13957,G__13958);
})());
return React.DOM.div(G__13944,G__13945,G__13946);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13941;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13940;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13939;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13938;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13937;
}});})(x13928_13961))
;


minesweeper.core.ControlsView.prototype.constructor = minesweeper.core.ControlsView;

minesweeper.core.ControlsView.prototype.constructor.displayName = "minesweeper.core/ControlsView";

minesweeper.core.ControlsView.prototype.om$isComponent = true;

var x13959_13965 = minesweeper.core.ControlsView;
x13959_13965.om$next$IQuery$ = true;

x13959_13965.om$next$IQuery$query$arity$1 = ((function (x13959_13965){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level], null);
});})(x13959_13965))
;


var x13960_13966 = minesweeper.core.ControlsView.prototype;
x13960_13966.om$next$IQuery$ = true;

x13960_13966.om$next$IQuery$query$arity$1 = ((function (x13960_13966){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level], null);
});})(x13960_13966))
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

var x13971_13994 = minesweeper.core.TimerView.prototype;
x13971_13994.componentWillUpdate = ((function (x13971_13994){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___13995 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___13996 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___13995,next_ident__12535__auto___13996)){
var idxr__12536__auto___13997 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___13997 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___13997),((function (idxr__12536__auto___13997,ident__12534__auto___13995,next_ident__12535__auto___13996,this__12530__auto__,x13971_13994){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___13995], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___13996], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___13997,ident__12534__auto___13995,next_ident__12535__auto___13996,this__12530__auto__,x13971_13994))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x13971_13994))
;

x13971_13994.shouldComponentUpdate = ((function (x13971_13994){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__13973 = next_props__12531__auto____$1;
var G__13973__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__13973):G__13973);
return G__13973__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__13978 = this__12530__auto__.state;
var G__13979 = "omcljs$state";
return goog.object.get(G__13978,G__13979);
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
});})(x13971_13994))
;

x13971_13994.componentWillUnmount = ((function (x13971_13994){
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
});})(x13971_13994))
;

x13971_13994.componentDidUpdate = ((function (x13971_13994){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x13971_13994))
;

x13971_13994.isMounted = ((function (x13971_13994){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x13971_13994))
;

x13971_13994.componentWillMount = ((function (x13971_13994){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x13971_13994))
;

x13971_13994.render = ((function (x13971_13994){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_13980 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_13981 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_13982 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_13983 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_13984 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__13985 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__13985__$1 = ((((!((map__13985 == null)))?((((map__13985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13985):map__13985);
var elapsed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13985__$1,cljs.core.cst$kw$elapsed);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering timer"], 0));

var G__13987 = {"className": "timer"};
var G__13988 = om.util.force_children("Time ");
var G__13989 = om.util.force_children((function (){var G__13990 = null;
var G__13991 = om.util.force_children(goog.string.format("%03d",elapsed));
return React.DOM.span(G__13990,G__13991);
})());
return React.DOM.div(G__13987,G__13988,G__13989);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_13984;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_13983;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_13982;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_13981;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_13980;
}});})(x13971_13994))
;


minesweeper.core.TimerView.prototype.constructor = minesweeper.core.TimerView;

minesweeper.core.TimerView.prototype.constructor.displayName = "minesweeper.core/TimerView";

minesweeper.core.TimerView.prototype.om$isComponent = true;

var x13992_13998 = minesweeper.core.TimerView;
x13992_13998.om$next$IQuery$ = true;

x13992_13998.om$next$IQuery$query$arity$1 = ((function (x13992_13998){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13992_13998))
;


var x13993_13999 = minesweeper.core.TimerView.prototype;
x13993_13999.om$next$IQuery$ = true;

x13993_13999.om$next$IQuery$query$arity$1 = ((function (x13993_13999){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x13993_13999))
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

var x14004_14039 = minesweeper.core.InfoView.prototype;
x14004_14039.componentWillUpdate = ((function (x14004_14039){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14040 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14041 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14040,next_ident__12535__auto___14041)){
var idxr__12536__auto___14042 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14042 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14042),((function (idxr__12536__auto___14042,ident__12534__auto___14040,next_ident__12535__auto___14041,this__12530__auto__,x14004_14039){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14040], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14041], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14042,ident__12534__auto___14040,next_ident__12535__auto___14041,this__12530__auto__,x14004_14039))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14004_14039))
;

x14004_14039.shouldComponentUpdate = ((function (x14004_14039){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14006 = next_props__12531__auto____$1;
var G__14006__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14006):G__14006);
return G__14006__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14011 = this__12530__auto__.state;
var G__14012 = "omcljs$state";
return goog.object.get(G__14011,G__14012);
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
});})(x14004_14039))
;

x14004_14039.componentWillUnmount = ((function (x14004_14039){
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
});})(x14004_14039))
;

x14004_14039.componentDidUpdate = ((function (x14004_14039){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14004_14039))
;

x14004_14039.isMounted = ((function (x14004_14039){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14004_14039))
;

x14004_14039.componentWillMount = ((function (x14004_14039){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14004_14039))
;

x14004_14039.render = ((function (x14004_14039){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14013 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14014 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14015 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14016 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14017 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__14018 = om.next.props(this$);
var map__14018__$1 = ((((!((map__14018 == null)))?((((map__14018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14018):map__14018);
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,cljs.core.cst$kw$high_DASH_score);
var map__14019 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__14019__$1 = ((((!((map__14019 == null)))?((((map__14019.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14019.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14019):map__14019);
var time_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019__$1,cljs.core.cst$kw$time_DASH_started);
var tick_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019__$1,cljs.core.cst$kw$tick_DASH_count);
var num_remaining = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14019__$1,cljs.core.cst$kw$num_DASH_remaining);
var G__14022 = {"className": "info"};
var G__14023 = om.util.force_children((function (){var G__14026 = om.next.computed(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elapsed,minesweeper.core.calc_elapsed(time_started)], null));
return (minesweeper.core.timer_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.timer_view.cljs$core$IFn$_invoke$arity$1(G__14026) : minesweeper.core.timer_view.call(null,G__14026));
})());
var G__14024 = om.util.force_children((function (){var G__14027 = {"className": "high-score"};
var G__14028 = om.util.force_children("Best ");
var G__14029 = om.util.force_children((function (){var G__14030 = null;
var G__14031 = om.util.force_children((((high_score == null))?"---":goog.string.format("%03d",high_score)));
return React.DOM.span(G__14030,G__14031);
})());
return React.DOM.div(G__14027,G__14028,G__14029);
})());
var G__14025 = om.util.force_children((function (){var G__14032 = {"className": "remaining"};
var G__14033 = om.util.force_children("Mines ");
var G__14034 = om.util.force_children((function (){var G__14035 = null;
var G__14036 = om.util.force_children(goog.string.format("%03d",num_remaining));
return React.DOM.span(G__14035,G__14036);
})());
return React.DOM.div(G__14032,G__14033,G__14034);
})());
return React.DOM.div(G__14022,G__14023,G__14024,G__14025);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14017;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14016;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14015;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14014;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14013;
}});})(x14004_14039))
;


minesweeper.core.InfoView.prototype.constructor = minesweeper.core.InfoView;

minesweeper.core.InfoView.prototype.constructor.displayName = "minesweeper.core/InfoView";

minesweeper.core.InfoView.prototype.om$isComponent = true;

var x14037_14043 = minesweeper.core.InfoView;
x14037_14043.om$next$IQuery$ = true;

x14037_14043.om$next$IQuery$query$arity$1 = ((function (x14037_14043){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$flags], null);
});})(x14037_14043))
;


var x14038_14044 = minesweeper.core.InfoView.prototype;
x14038_14044.om$next$IQuery$ = true;

x14038_14044.om$next$IQuery$query$arity$1 = ((function (x14038_14044){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high_DASH_score,cljs.core.cst$kw$flags], null);
});})(x14038_14044))
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

var x14049_14077 = minesweeper.core.MainView.prototype;
x14049_14077.componentWillUpdate = ((function (x14049_14077){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
if(((!((this__12530__auto__ == null)))?(((false) || (this__12530__auto__.om$next$Ident$))?true:false):false)){
var ident__12534__auto___14078 = om.next.ident(this__12530__auto__,om.next.props(this__12530__auto__));
var next_ident__12535__auto___14079 = om.next.ident(this__12530__auto__,om.next._next_props(next_props__12531__auto__,this__12530__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__12534__auto___14078,next_ident__12535__auto___14079)){
var idxr__12536__auto___14080 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__12536__auto___14080 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__12536__auto___14080),((function (idxr__12536__auto___14080,ident__12534__auto___14078,next_ident__12535__auto___14079,this__12530__auto__,x14049_14077){
return (function (indexes__12537__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__12537__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__12534__auto___14078], null),cljs.core.disj,this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__12535__auto___14079], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__12530__auto__);
});})(idxr__12536__auto___14080,ident__12534__auto___14078,next_ident__12535__auto___14079,this__12530__auto__,x14049_14077))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__12530__auto__);

return om.next.merge_pending_state_BANG_(this__12530__auto__);
});})(x14049_14077))
;

x14049_14077.shouldComponentUpdate = ((function (x14049_14077){
return (function (next_props__12531__auto__,next_state__12532__auto__){
var this__12530__auto__ = this;
var next_children__12533__auto__ = next_props__12531__auto__.children;
var next_props__12531__auto____$1 = goog.object.get(next_props__12531__auto__,"omcljs$value");
var next_props__12531__auto____$2 = (function (){var G__14051 = next_props__12531__auto____$1;
var G__14051__$1 = (((next_props__12531__auto____$1 instanceof om.next.OmProps))?om.next.unwrap(G__14051):G__14051);
return G__14051__$1;
})();
var or__4671__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__12530__auto__),next_props__12531__auto____$2);
if(or__4671__auto__){
return or__4671__auto__;
} else {
var or__4671__auto____$1 = (function (){var and__4659__auto__ = this__12530__auto__.state;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__14056 = this__12530__auto__.state;
var G__14057 = "omcljs$state";
return goog.object.get(G__14056,G__14057);
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
});})(x14049_14077))
;

x14049_14077.componentWillUnmount = ((function (x14049_14077){
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
});})(x14049_14077))
;

x14049_14077.componentDidUpdate = ((function (x14049_14077){
return (function (prev_props__12538__auto__,prev_state__12539__auto__){
var this__12530__auto__ = this;
return om.next.clear_prev_props_BANG_(this__12530__auto__);
});})(x14049_14077))
;

x14049_14077.isMounted = ((function (x14049_14077){
return (function (){
var this__12530__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__12530__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x14049_14077))
;

x14049_14077.componentWillMount = ((function (x14049_14077){
return (function (){
var this__12530__auto__ = this;
var indexer__12540__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__12530__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__12540__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__12540__auto__,this__12530__auto__);
}
});})(x14049_14077))
;

x14049_14077.componentDidMount = ((function (x14049_14077){
return (function (){
var this$ = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["MainView mounted"], 0));

var G__14058 = ((function (this$,x14049_14077){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$minesweeper$core_SLASH_tick))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$tick_DASH_count))))));
});})(this$,x14049_14077))
;
var G__14059 = (1000);
return setInterval(G__14058,G__14059);
});})(x14049_14077))
;

x14049_14077.render = ((function (x14049_14077){
return (function (){
var this__12529__auto__ = this;
var this$ = this__12529__auto__;
var _STAR_reconciler_STAR_14060 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_14061 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_14062 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_14063 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_14064 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__12529__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__12529__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__12529__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__12529__auto__);

om.next._STAR_parent_STAR_ = this__12529__auto__;

try{var map__14065 = om.next.props(this$);
var map__14065__$1 = ((((!((map__14065 == null)))?((((map__14065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14065):map__14065);
var controls = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$controls);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$level);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$flags);
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$game_DASH_state);
var time_started = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$time_DASH_started);
var tick_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$tick_DASH_count);
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$high_DASH_score);
var game_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(level,cljs.core.cst$kw$size);
var num_mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(level,cljs.core.cst$kw$mines);
var num_remaining = (num_mines - minesweeper.core.count_flags(flags));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Rendering main view"], 0));

var G__14068 = {"className": [cljs.core.str("minesweeper-wrap "),cljs.core.str((function (){var G__14072 = (((game_state instanceof cljs.core.Keyword))?game_state.fqn:null);
switch (G__14072) {
case "victorious":
return "st-victorious";

break;
case "dead":
return "st-dead";

break;
default:
return "";

}
})())].join(''), "onContextMenu": ((function (map__14065,map__14065__$1,controls,level,grid,mask,flags,game_state,time_started,tick_count,high_score,game_size,num_mines,num_remaining,_STAR_reconciler_STAR_14060,_STAR_depth_STAR_14061,_STAR_shared_STAR_14062,_STAR_instrument_STAR_14063,_STAR_parent_STAR_14064,this$,this__12529__auto__,x14049_14077){
return (function (e){
return e.preventDefault();
});})(map__14065,map__14065__$1,controls,level,grid,mask,flags,game_state,time_started,tick_count,high_score,game_size,num_mines,num_remaining,_STAR_reconciler_STAR_14060,_STAR_depth_STAR_14061,_STAR_shared_STAR_14062,_STAR_instrument_STAR_14063,_STAR_parent_STAR_14064,this$,this__12529__auto__,x14049_14077))
};
var G__14069 = om.util.force_children((function (){var G__14073 = om.next.computed(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$react_DASH_key,"info",cljs.core.cst$kw$high_DASH_score,high_score], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$time_DASH_started,time_started,cljs.core.cst$kw$tick_DASH_count,tick_count,cljs.core.cst$kw$num_DASH_remaining,num_remaining], null));
return (minesweeper.core.info_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.info_view.cljs$core$IFn$_invoke$arity$1(G__14073) : minesweeper.core.info_view.call(null,G__14073));
})());
var G__14070 = om.util.force_children((function (){var G__14074 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$game_DASH_state,game_state,cljs.core.cst$kw$game_DASH_size,game_size,cljs.core.cst$kw$grid,grid,cljs.core.cst$kw$mask,mask,cljs.core.cst$kw$flags,flags], null);
return (minesweeper.core.grid_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.grid_view.cljs$core$IFn$_invoke$arity$1(G__14074) : minesweeper.core.grid_view.call(null,G__14074));
})());
var G__14071 = om.util.force_children((minesweeper.core.controls_view.cljs$core$IFn$_invoke$arity$1 ? minesweeper.core.controls_view.cljs$core$IFn$_invoke$arity$1(controls) : minesweeper.core.controls_view.call(null,controls)));
return React.DOM.div(G__14068,G__14069,G__14070,G__14071);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_14064;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_14063;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_14062;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_14061;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_14060;
}});})(x14049_14077))
;


minesweeper.core.MainView.prototype.constructor = minesweeper.core.MainView;

minesweeper.core.MainView.prototype.constructor.displayName = "minesweeper.core/MainView";

minesweeper.core.MainView.prototype.om$isComponent = true;

var x14075_14082 = minesweeper.core.MainView;
x14075_14082.om$next$IQuery$ = true;

x14075_14082.om$next$IQuery$query$arity$1 = ((function (x14075_14082){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$grid,cljs.core.cst$kw$mask,cljs.core.cst$kw$flags,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$high_DASH_score,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$controls,om.next.get_query(minesweeper.core.ControlsView)], null)], null);
});})(x14075_14082))
;


var x14076_14083 = minesweeper.core.MainView.prototype;
x14076_14083.om$next$IQuery$ = true;

x14076_14083.om$next$IQuery$query$arity$1 = ((function (x14076_14083){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$grid,cljs.core.cst$kw$mask,cljs.core.cst$kw$flags,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$time_DASH_started,cljs.core.cst$kw$tick_DASH_count,cljs.core.cst$kw$high_DASH_score,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$controls,om.next.get_query(minesweeper.core.ControlsView)], null)], null);
});})(x14076_14083))
;


minesweeper.core.MainView.cljs$lang$type = true;

minesweeper.core.MainView.cljs$lang$ctorStr = "minesweeper.core/MainView";

minesweeper.core.MainView.cljs$lang$ctorPrWriter = (function (this__12597__auto__,writer__12598__auto__,opt__12599__auto__){
return cljs.core._write(writer__12598__auto__,"minesweeper.core/MainView");
});
minesweeper.core.zero_region = (function minesweeper$core$zero_region(p__14084,grid,p__14085,region){
var vec__14094 = p__14084;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14094,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14094,(1),null);
var vec__14095 = p__14085;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14095,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14095,(1),null);
var neighbours = minesweeper.core.neighbour_coords(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var region__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(region,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (neighbours,region__$1,vec__14094,rows,cols,vec__14095,row,col){
return (function (region__$2,p__14096){
var vec__14097 = p__14096;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14097,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14097,(1),null);
if(!(cljs.core.contains_QMARK_(region__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null)))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(region__$2,minesweeper$core$zero_region(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null),region__$2));
} else {
return region__$2;
}
});})(neighbours,region__$1,vec__14094,rows,cols,vec__14095,row,col))
,region__$1,neighbours);
} else {
return region__$1;
}
});
minesweeper.core.update_mask = (function minesweeper$core$update_mask(mask,cells){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mask__$1,p__14100){
var vec__14101 = p__14100;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14101,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14101,(1),null);
return cljs.core.assoc_in(mask__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),(1));
}),mask,cells);
});
minesweeper.core.values_at = (function minesweeper$core$values_at(grid,cells){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14102_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,p1__14102_SHARP_);
}),cells);
});
minesweeper.core.calc_game_state = (function minesweeper$core$calc_game_state(grid,mask,num_mines,swept_cells){
var num_hidden = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (total,p__14105){
var vec__14106 = p__14105;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14106,(2),null);
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
 * Returns a new mask
 */
minesweeper.core.sweep_cell = (function minesweeper$core$sweep_cell(p__14107,grid,mask,p__14108){
var vec__14111 = p__14107;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14111,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14111,(1),null);
var vec__14112 = p__14108;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14112,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14112,(1),null);
var sweep_region = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))))?minesweeper.core.zero_region(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.PersistentHashSet.EMPTY):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null));
return minesweeper.core.update_mask(mask,sweep_region);
});
minesweeper.core.sweep_cells = (function minesweeper$core$sweep_cells(p__14113,grid,mask,cells){
var vec__14115 = p__14113;
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14115,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14115,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__14115,rows,cols){
return (function (mask__$1,cell){
return minesweeper.core.sweep_cell(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask__$1,cell);
});})(vec__14115,rows,cols))
,mask,cells);
});
minesweeper.core.flag_remaining = (function minesweeper$core$flag_remaining(flags,grid){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (flags__$1,p__14118){
var vec__14119 = p__14118;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14119,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14119,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14119,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$X,val)){
return cljs.core.assoc_in(flags__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),(1));
} else {
return flags__$1;
}
}),flags,minesweeper.core.flatten_grid(grid));
});
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
minesweeper.core.sweep_cell_BANG_ = (function minesweeper$core$sweep_cell_BANG_(state,p__14120){
var vec__14123 = p__14120;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14123,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14123,(1),null);
var vec__14124 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14124,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14124,(1),null);
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
minesweeper.core.sweep_spread_BANG_ = (function minesweeper$core$sweep_spread_BANG_(state,p__14125){
var vec__14128 = p__14125;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14128,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14128,(1),null);
var vec__14129 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$size], null));
var rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14129,(0),null);
var cols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14129,(1),null);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$grid);
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$mask);
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$flags);
var num_mines = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,cljs.core.cst$kw$mines], null));
if(cljs.core.truth_(minesweeper.core.can_spread_sweep_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
var swept = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__14129,rows,cols,grid,mask,flags,num_mines,vec__14128,row,col){
return (function (swept,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(flags,cell))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(swept,cell);
} else {
return swept;
}
});})(vec__14129,rows,cols,grid,mask,flags,num_mines,vec__14128,row,col))
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
minesweeper.core.flag_cell_BANG_ = (function minesweeper$core$flag_cell_BANG_(state,p__14130){
var vec__14132 = p__14130;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14132,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14132,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(1));
});
minesweeper.core.unflag_cell_BANG_ = (function minesweeper$core$unflag_cell_BANG_(state,p__14133){
var vec__14135 = p__14133;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14135,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14135,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$flags,row,col], null),(0));
});
minesweeper.core.reset_game_BANG_ = (function minesweeper$core$reset_game_BANG_(state){
var level = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$controls,cljs.core.cst$kw$level], null));
var G__14138 = state;
var G__14139 = minesweeper.core.new_state(level);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14138,G__14139) : cljs.core.reset_BANG_.call(null,G__14138,G__14139));
});
minesweeper.core.start_game_BANG_ = (function minesweeper$core$start_game_BANG_(state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$game_DASH_state,cljs.core.cst$kw$alive);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$time_DASH_started,minesweeper.core.get_time());

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Started game"], 0));
});
minesweeper.core.tick_BANG_ = (function minesweeper$core$tick_BANG_(state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,cljs.core.cst$kw$tick_DASH_count,cljs.core.inc);
});
if(typeof minesweeper.core.read !== 'undefined'){
} else {
minesweeper.core.read = (function (){var method_table__5584__auto__ = (function (){var G__14140 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14140) : cljs.core.atom.call(null,G__14140));
})();
var prefer_table__5585__auto__ = (function (){var G__14141 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14141) : cljs.core.atom.call(null,G__14141));
})();
var method_cache__5586__auto__ = (function (){var G__14142 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14142) : cljs.core.atom.call(null,G__14142));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__14143 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14143) : cljs.core.atom.call(null,G__14143));
})();
var hierarchy__5588__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("minesweeper.core","read"),((function (method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__){
return (function (env,key,params){
return key;
});})(method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__))
,cljs.core.cst$kw$default,hierarchy__5588__auto__,method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__));
})();
}
minesweeper.core.read.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__14144,key,params){
var map__14145 = p__14144;
var map__14145__$1 = ((((!((map__14145 == null)))?((((map__14145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14145):map__14145);
var env = map__14145__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14145__$1,cljs.core.cst$kw$state);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14145__$1,cljs.core.cst$kw$query);
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var temp__4423__auto__ = cljs.core.find(st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__14147 = temp__4423__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.cst$kw$not_DASH_found], null);
}
}));
minesweeper.core.if_alive = (function minesweeper$core$if_alive(var_args){
var args__5736__auto__ = [];
var len__5729__auto___14151 = arguments.length;
var i__5730__auto___14152 = (0);
while(true){
if((i__5730__auto___14152 < len__5729__auto___14151)){
args__5736__auto__.push((arguments[i__5730__auto___14152]));

var G__14153 = (i__5730__auto___14152 + (1));
i__5730__auto___14152 = G__14153;
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

minesweeper.core.if_alive.cljs$lang$applyTo = (function (seq14148){
var G__14149 = cljs.core.first(seq14148);
var seq14148__$1 = cljs.core.next(seq14148);
var G__14150 = cljs.core.first(seq14148__$1);
var seq14148__$2 = cljs.core.next(seq14148__$1);
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(G__14149,G__14150,seq14148__$2);
});
minesweeper.core.alive_or_pending_QMARK_ = (function minesweeper$core$alive_or_pending_QMARK_(state){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pending,null,cljs.core.cst$kw$alive,null], null), null),cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$game_DASH_state));
});
minesweeper.core.start_game_if_pending_BANG_ = (function minesweeper$core$start_game_if_pending_BANG_(state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pending,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core.cst$kw$game_DASH_state))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Starting game!"], 0));

return minesweeper.core.start_game_BANG_(state);
} else {
return null;
}
});
if(typeof minesweeper.core.mutate !== 'undefined'){
} else {
minesweeper.core.mutate = (function (){var method_table__5584__auto__ = (function (){var G__14154 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14154) : cljs.core.atom.call(null,G__14154));
})();
var prefer_table__5585__auto__ = (function (){var G__14155 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14155) : cljs.core.atom.call(null,G__14155));
})();
var method_cache__5586__auto__ = (function (){var G__14156 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14156) : cljs.core.atom.call(null,G__14156));
})();
var cached_hierarchy__5587__auto__ = (function (){var G__14157 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14157) : cljs.core.atom.call(null,G__14157));
})();
var hierarchy__5588__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("minesweeper.core","mutate"),((function (method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__){
return (function (env,key,params){
return key;
});})(method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__,hierarchy__5588__auto__))
,cljs.core.cst$kw$default,hierarchy__5588__auto__,method_table__5584__auto__,prefer_table__5585__auto__,method_cache__5586__auto__,cached_hierarchy__5587__auto__));
})();
}
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_tick,(function (p__14158,key,params){
var map__14159 = p__14158;
var map__14159__$1 = ((((!((map__14159 == null)))?((((map__14159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14159):map__14159);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14159__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14159,map__14159__$1,state){
return (function (){
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(state,minesweeper.core.tick_BANG_,cljs.core.array_seq([state], 0));
});})(map__14159,map__14159__$1,state))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_sweep,(function (p__14161,key,p__14162){
var map__14163 = p__14161;
var map__14163__$1 = ((((!((map__14163 == null)))?((((map__14163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14163):map__14163);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14163__$1,cljs.core.cst$kw$state);
var map__14164 = p__14162;
var map__14164__$1 = ((((!((map__14164 == null)))?((((map__14164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14164):map__14164);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14164__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14164__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14163,map__14163__$1,state,map__14164,map__14164__$1,row,col){
return (function (){
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))){
minesweeper.core.start_game_if_pending_BANG_(state);

return minesweeper.core.sweep_cell_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return null;
}
});})(map__14163,map__14163__$1,state,map__14164,map__14164__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_reset,(function (p__14167,key,params){
var map__14168 = p__14167;
var map__14168__$1 = ((((!((map__14168 == null)))?((((map__14168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14168):map__14168);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14168__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14168,map__14168__$1,state){
return (function (){
return minesweeper.core.reset_game_BANG_(state);
});})(map__14168,map__14168__$1,state))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_spread_DASH_sweep,(function (p__14170,key,p__14171){
var map__14172 = p__14170;
var map__14172__$1 = ((((!((map__14172 == null)))?((((map__14172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14172):map__14172);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14172__$1,cljs.core.cst$kw$state);
var map__14173 = p__14171;
var map__14173__$1 = ((((!((map__14173 == null)))?((((map__14173.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14173.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14173):map__14173);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14173__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14173__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14172,map__14172__$1,state,map__14173,map__14173__$1,row,col){
return (function (){
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(state,minesweeper.core.sweep_spread_BANG_,cljs.core.array_seq([state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], 0));
});})(map__14172,map__14172__$1,state,map__14173,map__14173__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_flag,(function (p__14176,key,p__14177){
var map__14178 = p__14176;
var map__14178__$1 = ((((!((map__14178 == null)))?((((map__14178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14178):map__14178);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14178__$1,cljs.core.cst$kw$state);
var map__14179 = p__14177;
var map__14179__$1 = ((((!((map__14179 == null)))?((((map__14179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14179):map__14179);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14178,map__14178__$1,state,map__14179,map__14179__$1,row,col){
return (function (){
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_(state))){
minesweeper.core.start_game_if_pending_BANG_(state);

return minesweeper.core.flag_cell_BANG_(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return null;
}
});})(map__14178,map__14178__$1,state,map__14179,map__14179__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_unflag,(function (p__14182,key,p__14183){
var map__14184 = p__14182;
var map__14184__$1 = ((((!((map__14184 == null)))?((((map__14184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14184):map__14184);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14184__$1,cljs.core.cst$kw$state);
var map__14185 = p__14183;
var map__14185__$1 = ((((!((map__14185 == null)))?((((map__14185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14185):map__14185);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14185__$1,cljs.core.cst$kw$row);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14185__$1,cljs.core.cst$kw$col);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14184,map__14184__$1,state,map__14185,map__14185__$1,row,col){
return (function (){
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(state,minesweeper.core.unflag_cell_BANG_,cljs.core.array_seq([state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], 0));
});})(map__14184,map__14184__$1,state,map__14185,map__14185__$1,row,col))
], null);
}));
minesweeper.core.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$minesweeper$core_SLASH_level_DASH_select,(function (p__14188,key,p__14189){
var map__14190 = p__14188;
var map__14190__$1 = ((((!((map__14190 == null)))?((((map__14190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14190):map__14190);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14190__$1,cljs.core.cst$kw$state);
var map__14191 = p__14189;
var map__14191__$1 = ((((!((map__14191 == null)))?((((map__14191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14191):map__14191);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14191__$1,cljs.core.cst$kw$level);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__14190,map__14190__$1,state,map__14191,map__14191__$1,level){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$controls,cljs.core.cst$kw$level], null),level);
});})(map__14190,map__14190__$1,state,map__14191,map__14191__$1,level))
], null);
}));
minesweeper.core.parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,minesweeper.core.read,cljs.core.cst$kw$mutate,minesweeper.core.mutate], null));
minesweeper.core.reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,minesweeper.core.app_state,cljs.core.cst$kw$parser,minesweeper.core.parser], null));
om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3(minesweeper.core.reconciler,minesweeper.core.MainView,goog.dom.getElement("app"));

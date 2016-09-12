// Compiled by ClojureScript 1.7.170 {}
goog.provide('minesweeper.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('goog.string.format');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
minesweeper.core.levels = new cljs.core.PersistentArrayMap(null, 3, ["beginner",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(8)], null),new cljs.core.Keyword(null,"mines","mines",-1960796490),(10)], null),"intermediate",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.Keyword(null,"mines","mines",-1960796490),(40)], null),"expert",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(30)], null),new cljs.core.Keyword(null,"mines","mines",-1960796490),(99)], null)], null);
minesweeper.core.empty_row = (function minesweeper$core$empty_row(cols){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cols,(0)));
});
minesweeper.core.empty_grid = (function minesweeper$core$empty_grid(p__23510){
var vec__23512 = p__23510;
var rows = cljs.core.nth.call(null,vec__23512,(0),null);
var cols = cljs.core.nth.call(null,vec__23512,(1),null);
return cljs.core.vec.call(null,cljs.core.repeat.call(null,rows,minesweeper.core.empty_row.call(null,cols)));
});
minesweeper.core.empty_mask = (function minesweeper$core$empty_mask(p__23513){
var vec__23515 = p__23513;
var rows = cljs.core.nth.call(null,vec__23515,(0),null);
var cols = cljs.core.nth.call(null,vec__23515,(1),null);
return cljs.core.vec.call(null,cljs.core.repeat.call(null,rows,minesweeper.core.empty_row.call(null,cols)));
});
minesweeper.core.empty_flags = (function minesweeper$core$empty_flags(p__23516){
var vec__23518 = p__23516;
var rows = cljs.core.nth.call(null,vec__23518,(0),null);
var cols = cljs.core.nth.call(null,vec__23518,(1),null);
return cljs.core.vec.call(null,cljs.core.repeat.call(null,rows,minesweeper.core.empty_row.call(null,cols)));
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
/**
 * Takes an empty grid and populates it randomly with mines
 */
minesweeper.core.populate_grid = (function minesweeper$core$populate_grid(grid,p__23519,num_mines){
var vec__23521 = p__23519;
var rows = cljs.core.nth.call(null,vec__23521,(0),null);
var cols = cljs.core.nth.call(null,vec__23521,(1),null);
var i = (0);
var grid__$1 = grid;
while(true){
var row = cljs.core.rand.call(null,rows);
var col = cljs.core.rand.call(null,cols);
var is_mine = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"X","X",1705996313),cljs.core.get_in.call(null,grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
if((i < num_mines)){
var G__23522 = ((is_mine)?i:(i + (1)));
var G__23523 = ((is_mine)?grid__$1:cljs.core.assoc_in.call(null,grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),new cljs.core.Keyword(null,"X","X",1705996313)));
i = G__23522;
grid__$1 = G__23523;
continue;
} else {
return grid__$1;
}
break;
}
});
minesweeper.core.neighbour_coords = (function minesweeper$core$neighbour_coords(p__23524,p__23525){
var vec__23530 = p__23524;
var rows = cljs.core.nth.call(null,vec__23530,(0),null);
var cols = cljs.core.nth.call(null,vec__23530,(1),null);
var vec__23531 = p__23525;
var row = cljs.core.nth.call(null,vec__23531,(0),null);
var col = cljs.core.nth.call(null,vec__23531,(1),null);
var indices = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
return cljs.core.reduce.call(null,((function (indices,vec__23530,rows,cols,vec__23531,row,col){
return (function (coords,p__23532){
var vec__23533 = p__23532;
var i = cljs.core.nth.call(null,vec__23533,(0),null);
var j = cljs.core.nth.call(null,vec__23533,(1),null);
var x = (row + i);
var y = (col + j);
if(((((-1) < x)) && ((x < rows))) && ((((-1) < y)) && ((y < cols)))){
return cljs.core.conj.call(null,coords,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return coords;
}
});})(indices,vec__23530,rows,cols,vec__23531,row,col))
,cljs.core.PersistentVector.EMPTY,indices);
});
minesweeper.core.count_nearby_flags = (function minesweeper$core$count_nearby_flags(p__23534,flags,p__23535){
var vec__23538 = p__23534;
var rows = cljs.core.nth.call(null,vec__23538,(0),null);
var cols = cljs.core.nth.call(null,vec__23538,(1),null);
var vec__23539 = p__23535;
var row = cljs.core.nth.call(null,vec__23539,(0),null);
var col = cljs.core.nth.call(null,vec__23539,(1),null);
return cljs.core.reduce.call(null,((function (vec__23538,rows,cols,vec__23539,row,col){
return (function (count,cell){
var flag = cljs.core.get_in.call(null,flags,cell);
return (count + flag);
});})(vec__23538,rows,cols,vec__23539,row,col))
,(0),minesweeper.core.neighbour_coords.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
});
minesweeper.core.count_nearby_exposed = minesweeper.core.count_nearby_flags;
minesweeper.core.count_nearby_hidden = (function minesweeper$core$count_nearby_hidden(p__23540,mask,p__23541){
var vec__23544 = p__23540;
var rows = cljs.core.nth.call(null,vec__23544,(0),null);
var cols = cljs.core.nth.call(null,vec__23544,(1),null);
var vec__23545 = p__23541;
var row = cljs.core.nth.call(null,vec__23545,(0),null);
var col = cljs.core.nth.call(null,vec__23545,(1),null);
var num_neighbours = cljs.core.count.call(null,minesweeper.core.neighbour_coords.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
var num_exposed = minesweeper.core.count_nearby_exposed.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),mask,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
return (num_neighbours - num_exposed);
});
minesweeper.core.can_spread_sweep_QMARK_ = (function minesweeper$core$can_spread_sweep_QMARK_(p__23546,grid,mask,flags,p__23547){
var vec__23550 = p__23546;
var rows = cljs.core.nth.call(null,vec__23550,(0),null);
var cols = cljs.core.nth.call(null,vec__23550,(1),null);
var vec__23551 = p__23547;
var row = cljs.core.nth.call(null,vec__23551,(0),null);
var col = cljs.core.nth.call(null,vec__23551,(1),null);
var value = cljs.core.get_in.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var num_flags = minesweeper.core.count_nearby_flags.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var num_hidden = minesweeper.core.count_nearby_hidden.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),mask,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
return ((value > (0))) && (cljs.core._EQ_.call(null,value,num_flags)) && ((num_flags < num_hidden));
});
/**
 * Returns a flat vector of [row col value] vectors to enable easy
 *   iteration over the grid
 */
minesweeper.core.flatten_grid = (function minesweeper$core$flatten_grid(grid){
var iter__17557__auto__ = (function minesweeper$core$flatten_grid_$_iter__23568(s__23569){
return (new cljs.core.LazySeq(null,(function (){
var s__23569__$1 = s__23569;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23569__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var vec__23579 = cljs.core.first.call(null,xs__4977__auto__);
var i = cljs.core.nth.call(null,vec__23579,(0),null);
var row = cljs.core.nth.call(null,vec__23579,(1),null);
var iterys__17553__auto__ = ((function (s__23569__$1,vec__23579,i,row,xs__4977__auto__,temp__4425__auto__){
return (function minesweeper$core$flatten_grid_$_iter__23568_$_iter__23570(s__23571){
return (new cljs.core.LazySeq(null,((function (s__23569__$1,vec__23579,i,row,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__23571__$1 = s__23571;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__23571__$1);
if(temp__4425__auto____$1){
var s__23571__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23571__$2)){
var c__17555__auto__ = cljs.core.chunk_first.call(null,s__23571__$2);
var size__17556__auto__ = cljs.core.count.call(null,c__17555__auto__);
var b__23573 = cljs.core.chunk_buffer.call(null,size__17556__auto__);
if((function (){var i__23572 = (0);
while(true){
if((i__23572 < size__17556__auto__)){
var vec__23582 = cljs.core._nth.call(null,c__17555__auto__,i__23572);
var j = cljs.core.nth.call(null,vec__23582,(0),null);
var val = cljs.core.nth.call(null,vec__23582,(1),null);
cljs.core.chunk_append.call(null,b__23573,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null));

var G__23584 = (i__23572 + (1));
i__23572 = G__23584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23573),minesweeper$core$flatten_grid_$_iter__23568_$_iter__23570.call(null,cljs.core.chunk_rest.call(null,s__23571__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23573),null);
}
} else {
var vec__23583 = cljs.core.first.call(null,s__23571__$2);
var j = cljs.core.nth.call(null,vec__23583,(0),null);
var val = cljs.core.nth.call(null,vec__23583,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,val], null),minesweeper$core$flatten_grid_$_iter__23568_$_iter__23570.call(null,cljs.core.rest.call(null,s__23571__$2)));
}
} else {
return null;
}
break;
}
});})(s__23569__$1,vec__23579,i,row,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__23569__$1,vec__23579,i,row,xs__4977__auto__,temp__4425__auto__))
;
var fs__17554__auto__ = cljs.core.seq.call(null,iterys__17553__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,row)));
if(fs__17554__auto__){
return cljs.core.concat.call(null,fs__17554__auto__,minesweeper$core$flatten_grid_$_iter__23568.call(null,cljs.core.rest.call(null,s__23569__$1)));
} else {
var G__23585 = cljs.core.rest.call(null,s__23569__$1);
s__23569__$1 = G__23585;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17557__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,grid));
});
minesweeper.core.count_flags = (function minesweeper$core$count_flags(flags){
return cljs.core.reduce.call(null,(function (sum,p__23588){
var vec__23589 = p__23588;
var _ = cljs.core.nth.call(null,vec__23589,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23589,(1),null);
var n = cljs.core.nth.call(null,vec__23589,(2),null);
return (sum + n);
}),(0),minesweeper.core.flatten_grid.call(null,flags));
});
/**
 * Takes a populated grid and sets the numbers
 */
minesweeper.core.label_grid = (function minesweeper$core$label_grid(p__23591,grid){
var vec__23597 = p__23591;
var rows = cljs.core.nth.call(null,vec__23597,(0),null);
var cols = cljs.core.nth.call(null,vec__23597,(1),null);
return cljs.core.reduce.call(null,((function (vec__23597,rows,cols){
return (function (labelled,p__23598){
var vec__23599 = p__23598;
var i = cljs.core.nth.call(null,vec__23599,(0),null);
var j = cljs.core.nth.call(null,vec__23599,(1),null);
var val = cljs.core.nth.call(null,vec__23599,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"X","X",1705996313),val)){
var neighbours = minesweeper.core.neighbour_coords.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));
return cljs.core.reduce.call(null,((function (neighbours,vec__23599,i,j,val,vec__23597,rows,cols){
return (function (labelled__$1,p__23600){
var vec__23601 = p__23600;
var ni = cljs.core.nth.call(null,vec__23601,(0),null);
var nj = cljs.core.nth.call(null,vec__23601,(1),null);
return cljs.core.update_in.call(null,labelled__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ni,nj], null),((function (vec__23601,ni,nj,neighbours,vec__23599,i,j,val,vec__23597,rows,cols){
return (function (p1__23590_SHARP_){
if(typeof p1__23590_SHARP_ === 'number'){
return (p1__23590_SHARP_ + (1));
} else {
return p1__23590_SHARP_;
}
});})(vec__23601,ni,nj,neighbours,vec__23599,i,j,val,vec__23597,rows,cols))
);
});})(neighbours,vec__23599,i,j,val,vec__23597,rows,cols))
,labelled,neighbours);
} else {
return labelled;
}
});})(vec__23597,rows,cols))
,grid,minesweeper.core.flatten_grid.call(null,grid));
});
/**
 * Seconds since epoch
 */
minesweeper.core.get_time = (function minesweeper$core$get_time(){
var millis = (new Date()).getTime();
return (millis / (1000));
});
minesweeper.core.calc_elapsed = (function minesweeper$core$calc_elapsed(time_started){
return ((minesweeper.core.get_time.call(null) - time_started) | (0));
});
minesweeper.core.new_state = (function minesweeper$core$new_state(level){
var vec__23603 = cljs.core.get_in.call(null,minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,new cljs.core.Keyword(null,"size","size",1098693007)], null));
var rows = cljs.core.nth.call(null,vec__23603,(0),null);
var cols = cljs.core.nth.call(null,vec__23603,(1),null);
var num_mines = cljs.core.get_in.call(null,minesweeper.core.levels,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [level,new cljs.core.Keyword(null,"mines","mines",-1960796490)], null));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"high-score","high-score",-1220549879),new cljs.core.Keyword(null,"time-started","time-started",725137802),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"tick-count","tick-count",1579994994),new cljs.core.Keyword(null,"flags","flags",1775418075)],[minesweeper.core.empty_mask.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),minesweeper.core.label_grid.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),minesweeper.core.populate_grid.call(null,minesweeper.core.empty_grid.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),num_mines)),minesweeper.core.get_high_score.call(null,level),minesweeper.core.get_time.call(null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"react-key","react-key",1337881348),"controls"], null),new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.get.call(null,minesweeper.core.levels,level),(0),minesweeper.core.empty_flags.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null))]);
});
minesweeper.core.app_state = cljs.core.atom.call(null,minesweeper.core.new_state.call(null,"intermediate"));
/**
 * @constructor
 */
minesweeper.core.ExposedCellView = (function minesweeper$core$ExposedCellView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

minesweeper.core.ExposedCellView.prototype = goog.object.clone(React.Component.prototype);

var x23608_23622 = minesweeper.core.ExposedCellView.prototype;
x23608_23622.componentWillUpdate = ((function (x23608_23622){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___23623 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___23624 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___23623,next_ident__18863__auto___23624)){
var idxr__18864__auto___23625 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___23625 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___23625),((function (idxr__18864__auto___23625,ident__18862__auto___23623,next_ident__18863__auto___23624,this__18858__auto__,x23608_23622){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___23623], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___23624], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___23625,ident__18862__auto___23623,next_ident__18863__auto___23624,this__18858__auto__,x23608_23622))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x23608_23622))
;

x23608_23622.shouldComponentUpdate = ((function (x23608_23622){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__23610 = next_props__18859__auto____$1;
var G__23610__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23610):G__23610);
return G__23610__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x23608_23622))
;

x23608_23622.componentWillUnmount = ((function (x23608_23622){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23608_23622))
;

x23608_23622.componentDidUpdate = ((function (x23608_23622){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x23608_23622))
;

x23608_23622.isMounted = ((function (x23608_23622){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23608_23622))
;

x23608_23622.componentWillMount = ((function (x23608_23622){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23608_23622))
;

x23608_23622.render = ((function (x23608_23622){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_23611 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23612 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23613 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23614 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23615 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__23616 = om.next.get_computed.call(null,this$);
var map__23616__$1 = ((((!((map__23616 == null)))?((((map__23616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23616):map__23616);
var row = cljs.core.get.call(null,map__23616__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__23616__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var value = cljs.core.get.call(null,map__23616__$1,new cljs.core.Keyword(null,"value","value",305978217));
var can_spread = cljs.core.get.call(null,map__23616__$1,new cljs.core.Keyword(null,"can-spread","can-spread",752329296));
var str_val = (function (){var G__23618 = value;
if(cljs.core._EQ_.call(null,(1),G__23618)){
return "one";
} else {
if(cljs.core._EQ_.call(null,(2),G__23618)){
return "two";
} else {
if(cljs.core._EQ_.call(null,(3),G__23618)){
return "three";
} else {
if(cljs.core._EQ_.call(null,(4),G__23618)){
return "four";
} else {
if(cljs.core._EQ_.call(null,(5),G__23618)){
return "five";
} else {
if(cljs.core._EQ_.call(null,(6),G__23618)){
return "six";
} else {
if(cljs.core._EQ_.call(null,(7),G__23618)){
return "seven";
} else {
if(cljs.core._EQ_.call(null,(8),G__23618)){
return "eight";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"X","X",1705996313),G__23618)){
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
cljs.core.println.call(null,[cljs.core.str("Rendering exposed cell ("),cljs.core.str(row),cljs.core.str(","),cljs.core.str(col),cljs.core.str(","),cljs.core.str(value),cljs.core.str(")")].join(''));

return React.DOM.div({"className": [cljs.core.str("cell revealed "),cljs.core.str(str_val),cljs.core.str((cljs.core.truth_(can_spread)?" spread":""))].join(''), "onClick": ((function (map__23616,map__23616__$1,row,col,value,can_spread,str_val,_STAR_reconciler_STAR_23611,_STAR_depth_STAR_23612,_STAR_shared_STAR_23613,_STAR_instrument_STAR_23614,_STAR_parent_STAR_23615,this$,this__18857__auto__,x23608_23622){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("minesweeper.core","spread-sweep","minesweeper.core/spread-sweep",-125389226,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"row","row",-570139521)),cljs.core._conj.call(null,cljs.core.List.EMPTY,row),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col","col",-1959363084)),cljs.core._conj.call(null,cljs.core.List.EMPTY,col)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mask","mask",-585748447)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"game-state","game-state",935682735)))))));
});})(map__23616,map__23616__$1,row,col,value,can_spread,str_val,_STAR_reconciler_STAR_23611,_STAR_depth_STAR_23612,_STAR_shared_STAR_23613,_STAR_instrument_STAR_23614,_STAR_parent_STAR_23615,this$,this__18857__auto__,x23608_23622))
},om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,(function (){var G__23619 = value;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"X","X",1705996313),G__23619)){
return "";
} else {
if(cljs.core._EQ_.call(null,(0),G__23619)){
return "";
} else {
return value;

}
}
})()))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23615;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23614;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23613;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23612;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23611;
}});})(x23608_23622))
;


minesweeper.core.ExposedCellView.prototype.constructor = minesweeper.core.ExposedCellView;

minesweeper.core.ExposedCellView.prototype.constructor.displayName = "minesweeper.core/ExposedCellView";

minesweeper.core.ExposedCellView.prototype.om$isComponent = true;

var x23620_23626 = minesweeper.core.ExposedCellView;
x23620_23626.om$next$IQuery$ = true;

x23620_23626.om$next$IQuery$query$arity$1 = ((function (x23620_23626){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x23620_23626))
;


var x23621_23627 = minesweeper.core.ExposedCellView.prototype;
x23621_23627.om$next$IQuery$ = true;

x23621_23627.om$next$IQuery$query$arity$1 = ((function (x23621_23627){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x23621_23627))
;


minesweeper.core.ExposedCellView.cljs$lang$type = true;

minesweeper.core.ExposedCellView.cljs$lang$ctorStr = "minesweeper.core/ExposedCellView";

minesweeper.core.ExposedCellView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"minesweeper.core/ExposedCellView");
});
minesweeper.core.exposed_cell_view = om.next.factory.call(null,minesweeper.core.ExposedCellView);
/**
 * @constructor
 */
minesweeper.core.HiddenCellView = (function minesweeper$core$HiddenCellView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

minesweeper.core.HiddenCellView.prototype = goog.object.clone(React.Component.prototype);

var x23632_23646 = minesweeper.core.HiddenCellView.prototype;
x23632_23646.componentWillUpdate = ((function (x23632_23646){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___23647 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___23648 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___23647,next_ident__18863__auto___23648)){
var idxr__18864__auto___23649 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___23649 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___23649),((function (idxr__18864__auto___23649,ident__18862__auto___23647,next_ident__18863__auto___23648,this__18858__auto__,x23632_23646){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___23647], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___23648], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___23649,ident__18862__auto___23647,next_ident__18863__auto___23648,this__18858__auto__,x23632_23646))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x23632_23646))
;

x23632_23646.shouldComponentUpdate = ((function (x23632_23646){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__23634 = next_props__18859__auto____$1;
var G__23634__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23634):G__23634);
return G__23634__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x23632_23646))
;

x23632_23646.componentWillUnmount = ((function (x23632_23646){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23632_23646))
;

x23632_23646.componentDidUpdate = ((function (x23632_23646){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x23632_23646))
;

x23632_23646.isMounted = ((function (x23632_23646){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23632_23646))
;

x23632_23646.componentWillMount = ((function (x23632_23646){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23632_23646))
;

x23632_23646.render = ((function (x23632_23646){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_23635 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23636 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23637 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23638 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23639 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__23640 = om.next.props.call(null,this$);
var map__23640__$1 = ((((!((map__23640 == null)))?((((map__23640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23640):map__23640);
var game_state = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var map__23641 = om.next.get_computed.call(null,this$);
var map__23641__$1 = ((((!((map__23641 == null)))?((((map__23641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23641):map__23641);
var row = cljs.core.get.call(null,map__23641__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__23641__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var value = cljs.core.get.call(null,map__23641__$1,new cljs.core.Keyword(null,"value","value",305978217));
var flag = cljs.core.get.call(null,map__23641__$1,new cljs.core.Keyword(null,"flag","flag",1088647881));
var status_str = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dead","dead",-1946604091),game_state))?((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"X","X",1705996313),value))?"mine":"safe"):"");
cljs.core.println.call(null,[cljs.core.str("Rendering hidden cell ("),cljs.core.str(row),cljs.core.str(","),cljs.core.str(col),cljs.core.str(","),cljs.core.str(flag),cljs.core.str(")")].join(''));

if(cljs.core._EQ_.call(null,(1),flag)){
return React.DOM.div({"className": [cljs.core.str("cell hidden flagged "),cljs.core.str(status_str)].join(''), "onContextMenu": ((function (map__23640,map__23640__$1,game_state,map__23641,map__23641__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_23635,_STAR_depth_STAR_23636,_STAR_shared_STAR_23637,_STAR_instrument_STAR_23638,_STAR_parent_STAR_23639,this$,this__18857__auto__,x23632_23646){
return (function (e){
e.preventDefault();

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("minesweeper.core","unflag","minesweeper.core/unflag",259191600,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"row","row",-570139521)),cljs.core._conj.call(null,cljs.core.List.EMPTY,row),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col","col",-1959363084)),cljs.core._conj.call(null,cljs.core.List.EMPTY,col)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075)))))));
});})(map__23640,map__23640__$1,game_state,map__23641,map__23641__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_23635,_STAR_depth_STAR_23636,_STAR_shared_STAR_23637,_STAR_instrument_STAR_23638,_STAR_parent_STAR_23639,this$,this__18857__auto__,x23632_23646))
});
} else {
return React.DOM.div({"className": [cljs.core.str("cell hidden "),cljs.core.str(status_str)].join(''), "onClick": ((function (map__23640,map__23640__$1,game_state,map__23641,map__23641__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_23635,_STAR_depth_STAR_23636,_STAR_shared_STAR_23637,_STAR_instrument_STAR_23638,_STAR_parent_STAR_23639,this$,this__18857__auto__,x23632_23646){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("minesweeper.core","sweep","minesweeper.core/sweep",-334767370,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"row","row",-570139521)),cljs.core._conj.call(null,cljs.core.List.EMPTY,row),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col","col",-1959363084)),cljs.core._conj.call(null,cljs.core.List.EMPTY,col)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"mask","mask",-585748447)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"game-state","game-state",935682735)))))));
});})(map__23640,map__23640__$1,game_state,map__23641,map__23641__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_23635,_STAR_depth_STAR_23636,_STAR_shared_STAR_23637,_STAR_instrument_STAR_23638,_STAR_parent_STAR_23639,this$,this__18857__auto__,x23632_23646))
, "onContextMenu": ((function (map__23640,map__23640__$1,game_state,map__23641,map__23641__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_23635,_STAR_depth_STAR_23636,_STAR_shared_STAR_23637,_STAR_instrument_STAR_23638,_STAR_parent_STAR_23639,this$,this__18857__auto__,x23632_23646){
return (function (e){
e.preventDefault();

return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("minesweeper.core","flag","minesweeper.core/flag",1415670223,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"row","row",-570139521)),cljs.core._conj.call(null,cljs.core.List.EMPTY,row),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"col","col",-1959363084)),cljs.core._conj.call(null,cljs.core.List.EMPTY,col)))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075)))))));
});})(map__23640,map__23640__$1,game_state,map__23641,map__23641__$1,row,col,value,flag,status_str,_STAR_reconciler_STAR_23635,_STAR_depth_STAR_23636,_STAR_shared_STAR_23637,_STAR_instrument_STAR_23638,_STAR_parent_STAR_23639,this$,this__18857__auto__,x23632_23646))
});
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23639;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23638;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23637;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23636;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23635;
}});})(x23632_23646))
;


minesweeper.core.HiddenCellView.prototype.constructor = minesweeper.core.HiddenCellView;

minesweeper.core.HiddenCellView.prototype.constructor.displayName = "minesweeper.core/HiddenCellView";

minesweeper.core.HiddenCellView.prototype.om$isComponent = true;

var x23644_23650 = minesweeper.core.HiddenCellView;
x23644_23650.om$next$IQuery$ = true;

x23644_23650.om$next$IQuery$query$arity$1 = ((function (x23644_23650){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x23644_23650))
;


var x23645_23651 = minesweeper.core.HiddenCellView.prototype;
x23645_23651.om$next$IQuery$ = true;

x23645_23651.om$next$IQuery$query$arity$1 = ((function (x23645_23651){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x23645_23651))
;


minesweeper.core.HiddenCellView.cljs$lang$type = true;

minesweeper.core.HiddenCellView.cljs$lang$ctorStr = "minesweeper.core/HiddenCellView";

minesweeper.core.HiddenCellView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"minesweeper.core/HiddenCellView");
});
minesweeper.core.hidden_cell_view = om.next.factory.call(null,minesweeper.core.HiddenCellView);
/**
 * @constructor
 */
minesweeper.core.CellView = (function minesweeper$core$CellView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

minesweeper.core.CellView.prototype = goog.object.clone(React.Component.prototype);

var x23656_23670 = minesweeper.core.CellView.prototype;
x23656_23670.componentWillUpdate = ((function (x23656_23670){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___23671 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___23672 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___23671,next_ident__18863__auto___23672)){
var idxr__18864__auto___23673 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___23673 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___23673),((function (idxr__18864__auto___23673,ident__18862__auto___23671,next_ident__18863__auto___23672,this__18858__auto__,x23656_23670){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___23671], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___23672], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___23673,ident__18862__auto___23671,next_ident__18863__auto___23672,this__18858__auto__,x23656_23670))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x23656_23670))
;

x23656_23670.shouldComponentUpdate = ((function (x23656_23670){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__23658 = next_props__18859__auto____$1;
var G__23658__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23658):G__23658);
return G__23658__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x23656_23670))
;

x23656_23670.componentWillUnmount = ((function (x23656_23670){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23656_23670))
;

x23656_23670.componentDidUpdate = ((function (x23656_23670){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x23656_23670))
;

x23656_23670.isMounted = ((function (x23656_23670){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23656_23670))
;

x23656_23670.componentWillMount = ((function (x23656_23670){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23656_23670))
;

x23656_23670.render = ((function (x23656_23670){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_23659 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23660 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23661 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23662 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23663 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__23664 = om.next.props.call(null,this$);
var map__23664__$1 = ((((!((map__23664 == null)))?((((map__23664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23664):map__23664);
var game_state = cljs.core.get.call(null,map__23664__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var map__23665 = om.next.get_computed.call(null,this$);
var map__23665__$1 = ((((!((map__23665 == null)))?((((map__23665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23665):map__23665);
var row = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var flag = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"flag","flag",1088647881));
var value = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mask_val = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"mask-val","mask-val",487298301));
var can_spread = cljs.core.get.call(null,map__23665__$1,new cljs.core.Keyword(null,"can-spread","can-spread",752329296));
if(cljs.core._EQ_.call(null,mask_val,(1))){
return minesweeper.core.exposed_cell_view.call(null,om.next.computed.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"can-spread","can-spread",752329296),can_spread], null)));
} else {
return minesweeper.core.hidden_cell_view.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flag","flag",1088647881),flag,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null)));
}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23663;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23662;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23661;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23660;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23659;
}});})(x23656_23670))
;


minesweeper.core.CellView.prototype.constructor = minesweeper.core.CellView;

minesweeper.core.CellView.prototype.constructor.displayName = "minesweeper.core/CellView";

minesweeper.core.CellView.prototype.om$isComponent = true;

var x23668_23674 = minesweeper.core.CellView;
x23668_23674.om$next$IQuery$ = true;

x23668_23674.om$next$IQuery$query$arity$1 = ((function (x23668_23674){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null);
});})(x23668_23674))
;


var x23669_23675 = minesweeper.core.CellView.prototype;
x23669_23675.om$next$IQuery$ = true;

x23669_23675.om$next$IQuery$query$arity$1 = ((function (x23669_23675){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null);
});})(x23669_23675))
;


minesweeper.core.CellView.cljs$lang$type = true;

minesweeper.core.CellView.cljs$lang$ctorStr = "minesweeper.core/CellView";

minesweeper.core.CellView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"minesweeper.core/CellView");
});
minesweeper.core.cell_view = om.next.factory.call(null,minesweeper.core.CellView);
/**
 * @constructor
 */
minesweeper.core.GridView = (function minesweeper$core$GridView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

minesweeper.core.GridView.prototype = goog.object.clone(React.Component.prototype);

var x23682_23694 = minesweeper.core.GridView.prototype;
x23682_23694.componentWillUpdate = ((function (x23682_23694){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___23695 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___23696 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___23695,next_ident__18863__auto___23696)){
var idxr__18864__auto___23697 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___23697 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___23697),((function (idxr__18864__auto___23697,ident__18862__auto___23695,next_ident__18863__auto___23696,this__18858__auto__,x23682_23694){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___23695], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___23696], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___23697,ident__18862__auto___23695,next_ident__18863__auto___23696,this__18858__auto__,x23682_23694))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x23682_23694))
;

x23682_23694.shouldComponentUpdate = ((function (x23682_23694){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__23684 = next_props__18859__auto____$1;
var G__23684__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23684):G__23684);
return G__23684__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x23682_23694))
;

x23682_23694.componentWillUnmount = ((function (x23682_23694){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23682_23694))
;

x23682_23694.componentDidUpdate = ((function (x23682_23694){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x23682_23694))
;

x23682_23694.isMounted = ((function (x23682_23694){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23682_23694))
;

x23682_23694.componentWillMount = ((function (x23682_23694){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23682_23694))
;

x23682_23694.render = ((function (x23682_23694){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_23685 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23686 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23687 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23688 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23689 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__23690 = om.next.props.call(null,this$);
var map__23690__$1 = ((((!((map__23690 == null)))?((((map__23690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23690):map__23690);
var props = map__23690__$1;
var game_state = cljs.core.get.call(null,map__23690__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var game_size = cljs.core.get.call(null,map__23690__$1,new cljs.core.Keyword(null,"game-size","game-size",1469204689));
var grid = cljs.core.get.call(null,map__23690__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var mask = cljs.core.get.call(null,map__23690__$1,new cljs.core.Keyword(null,"mask","mask",-585748447));
var flags = cljs.core.get.call(null,map__23690__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var key = ((function (map__23690,map__23690__$1,props,game_state,game_size,grid,mask,flags,_STAR_reconciler_STAR_23685,_STAR_depth_STAR_23686,_STAR_shared_STAR_23687,_STAR_instrument_STAR_23688,_STAR_parent_STAR_23689,this$,this__18857__auto__,x23682_23694){
return (function (p1__23676_SHARP_,p2__23677_SHARP_){
return ((p1__23676_SHARP_ * (7)) + p2__23677_SHARP_);
});})(map__23690,map__23690__$1,props,game_state,game_size,grid,mask,flags,_STAR_reconciler_STAR_23685,_STAR_depth_STAR_23686,_STAR_shared_STAR_23687,_STAR_instrument_STAR_23688,_STAR_parent_STAR_23689,this$,this__18857__auto__,x23682_23694))
;
cljs.core.println.call(null,"Rendering grid");

return cljs.core.apply.call(null,om.dom.div,{"className": "minesweeper"},cljs.core.map_indexed.call(null,((function (map__23690,map__23690__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_23685,_STAR_depth_STAR_23686,_STAR_shared_STAR_23687,_STAR_instrument_STAR_23688,_STAR_parent_STAR_23689,this$,this__18857__auto__,x23682_23694){
return (function (r,row){
return cljs.core.apply.call(null,om.dom.div,{"className": "row"},cljs.core.map_indexed.call(null,((function (map__23690,map__23690__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_23685,_STAR_depth_STAR_23686,_STAR_shared_STAR_23687,_STAR_instrument_STAR_23688,_STAR_parent_STAR_23689,this$,this__18857__auto__,x23682_23694){
return (function (c,val){
return minesweeper.core.cell_view.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),key.call(null,r,c),new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flag","flag",1088647881),cljs.core.get_in.call(null,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"mask-val","mask-val",487298301),cljs.core.get_in.call(null,mask,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)),new cljs.core.Keyword(null,"row","row",-570139521),r,new cljs.core.Keyword(null,"col","col",-1959363084),c,new cljs.core.Keyword(null,"can-spread","can-spread",752329296),minesweeper.core.can_spread_sweep_QMARK_.call(null,game_size,grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null))], null)));
});})(map__23690,map__23690__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_23685,_STAR_depth_STAR_23686,_STAR_shared_STAR_23687,_STAR_instrument_STAR_23688,_STAR_parent_STAR_23689,this$,this__18857__auto__,x23682_23694))
,row));
});})(map__23690,map__23690__$1,props,game_state,game_size,grid,mask,flags,key,_STAR_reconciler_STAR_23685,_STAR_depth_STAR_23686,_STAR_shared_STAR_23687,_STAR_instrument_STAR_23688,_STAR_parent_STAR_23689,this$,this__18857__auto__,x23682_23694))
,grid));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23689;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23688;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23687;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23686;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23685;
}});})(x23682_23694))
;


minesweeper.core.GridView.prototype.constructor = minesweeper.core.GridView;

minesweeper.core.GridView.prototype.constructor.displayName = "minesweeper.core/GridView";

minesweeper.core.GridView.prototype.om$isComponent = true;

var x23692_23698 = minesweeper.core.GridView;
x23692_23698.om$next$IQuery$ = true;

x23692_23698.om$next$IQuery$query$arity$1 = ((function (x23692_23698){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x23692_23698))
;


var x23693_23699 = minesweeper.core.GridView.prototype;
x23693_23699.om$next$IQuery$ = true;

x23693_23699.om$next$IQuery$query$arity$1 = ((function (x23693_23699){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x23693_23699))
;


minesweeper.core.GridView.cljs$lang$type = true;

minesweeper.core.GridView.cljs$lang$ctorStr = "minesweeper.core/GridView";

minesweeper.core.GridView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"minesweeper.core/GridView");
});
minesweeper.core.grid_view = om.next.factory.call(null,minesweeper.core.GridView);
/**
 * @constructor
 */
minesweeper.core.ControlsView = (function minesweeper$core$ControlsView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

minesweeper.core.ControlsView.prototype = goog.object.clone(React.Component.prototype);

var x23704_23716 = minesweeper.core.ControlsView.prototype;
x23704_23716.componentWillUpdate = ((function (x23704_23716){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___23717 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___23718 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___23717,next_ident__18863__auto___23718)){
var idxr__18864__auto___23719 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___23719 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___23719),((function (idxr__18864__auto___23719,ident__18862__auto___23717,next_ident__18863__auto___23718,this__18858__auto__,x23704_23716){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___23717], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___23718], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___23719,ident__18862__auto___23717,next_ident__18863__auto___23718,this__18858__auto__,x23704_23716))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x23704_23716))
;

x23704_23716.shouldComponentUpdate = ((function (x23704_23716){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__23706 = next_props__18859__auto____$1;
var G__23706__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23706):G__23706);
return G__23706__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x23704_23716))
;

x23704_23716.componentWillUnmount = ((function (x23704_23716){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23704_23716))
;

x23704_23716.componentDidUpdate = ((function (x23704_23716){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x23704_23716))
;

x23704_23716.isMounted = ((function (x23704_23716){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23704_23716))
;

x23704_23716.componentWillMount = ((function (x23704_23716){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23704_23716))
;

x23704_23716.render = ((function (x23704_23716){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_23707 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23708 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23709 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23710 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23711 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__23712 = om.next.props.call(null,this$);
var map__23712__$1 = ((((!((map__23712 == null)))?((((map__23712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23712):map__23712);
var level = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"level","level",1290497552));
cljs.core.println.call(null,[cljs.core.str("Level="),cljs.core.str(level)].join(''));

return React.DOM.div({"className": "panel"},om.util.force_children.call(null,om.dom.select.call(null,{"className": "control", "value": level, "onChange": ((function (map__23712,map__23712__$1,level,_STAR_reconciler_STAR_23707,_STAR_depth_STAR_23708,_STAR_shared_STAR_23709,_STAR_instrument_STAR_23710,_STAR_parent_STAR_23711,this$,this__18857__auto__,x23704_23716){
return (function (e){
var value = e.target.value;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("minesweeper.core","level-select","minesweeper.core/level-select",23671062,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"level","level",1290497552)),cljs.core._conj.call(null,cljs.core.List.EMPTY,value)))))))))))))));
});})(map__23712,map__23712__$1,level,_STAR_reconciler_STAR_23707,_STAR_depth_STAR_23708,_STAR_shared_STAR_23709,_STAR_instrument_STAR_23710,_STAR_parent_STAR_23711,this$,this__18857__auto__,x23704_23716))
},om.dom.option.call(null,{"value": "beginner"},"Beginner"),om.dom.option.call(null,{"value": "intermediate"},"Intermediate"),om.dom.option.call(null,{"value": "expert"},"Expert"))),om.util.force_children.call(null,React.DOM.button({"className": "control", "onClick": ((function (map__23712,map__23712__$1,level,_STAR_reconciler_STAR_23707,_STAR_depth_STAR_23708,_STAR_shared_STAR_23709,_STAR_instrument_STAR_23710,_STAR_parent_STAR_23711,this$,this__18857__auto__,x23704_23716){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("minesweeper.core","reset","minesweeper.core/reset",-859702012,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"level","level",1290497552)))))));
});})(map__23712,map__23712__$1,level,_STAR_reconciler_STAR_23707,_STAR_depth_STAR_23708,_STAR_shared_STAR_23709,_STAR_instrument_STAR_23710,_STAR_parent_STAR_23711,this$,this__18857__auto__,x23704_23716))
},om.util.force_children.call(null,"Reset"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23711;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23710;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23709;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23708;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23707;
}});})(x23704_23716))
;


minesweeper.core.ControlsView.prototype.constructor = minesweeper.core.ControlsView;

minesweeper.core.ControlsView.prototype.constructor.displayName = "minesweeper.core/ControlsView";

minesweeper.core.ControlsView.prototype.om$isComponent = true;

var x23714_23720 = minesweeper.core.ControlsView;
x23714_23720.om$next$IQuery$ = true;

x23714_23720.om$next$IQuery$query$arity$1 = ((function (x23714_23720){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552)], null);
});})(x23714_23720))
;


var x23715_23721 = minesweeper.core.ControlsView.prototype;
x23715_23721.om$next$IQuery$ = true;

x23715_23721.om$next$IQuery$query$arity$1 = ((function (x23715_23721){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552)], null);
});})(x23715_23721))
;


minesweeper.core.ControlsView.cljs$lang$type = true;

minesweeper.core.ControlsView.cljs$lang$ctorStr = "minesweeper.core/ControlsView";

minesweeper.core.ControlsView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"minesweeper.core/ControlsView");
});
minesweeper.core.controls_view = om.next.factory.call(null,minesweeper.core.ControlsView);
/**
 * @constructor
 */
minesweeper.core.TimerView = (function minesweeper$core$TimerView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

minesweeper.core.TimerView.prototype = goog.object.clone(React.Component.prototype);

var x23726_23738 = minesweeper.core.TimerView.prototype;
x23726_23738.componentWillUpdate = ((function (x23726_23738){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___23739 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___23740 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___23739,next_ident__18863__auto___23740)){
var idxr__18864__auto___23741 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___23741 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___23741),((function (idxr__18864__auto___23741,ident__18862__auto___23739,next_ident__18863__auto___23740,this__18858__auto__,x23726_23738){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___23739], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___23740], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___23741,ident__18862__auto___23739,next_ident__18863__auto___23740,this__18858__auto__,x23726_23738))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x23726_23738))
;

x23726_23738.shouldComponentUpdate = ((function (x23726_23738){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__23728 = next_props__18859__auto____$1;
var G__23728__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23728):G__23728);
return G__23728__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x23726_23738))
;

x23726_23738.componentWillUnmount = ((function (x23726_23738){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23726_23738))
;

x23726_23738.componentDidUpdate = ((function (x23726_23738){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x23726_23738))
;

x23726_23738.isMounted = ((function (x23726_23738){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23726_23738))
;

x23726_23738.componentWillMount = ((function (x23726_23738){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23726_23738))
;

x23726_23738.render = ((function (x23726_23738){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_23729 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23730 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23731 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23732 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23733 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__23734 = om.next.get_computed.call(null,this$);
var map__23734__$1 = ((((!((map__23734 == null)))?((((map__23734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23734):map__23734);
var elapsed = cljs.core.get.call(null,map__23734__$1,new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698));
cljs.core.println.call(null,"Rendering timer");

return React.DOM.div({"className": "timer"},om.util.force_children.call(null,"Time "),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,goog.string.format("%03d",elapsed)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23733;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23732;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23731;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23730;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23729;
}});})(x23726_23738))
;


minesweeper.core.TimerView.prototype.constructor = minesweeper.core.TimerView;

minesweeper.core.TimerView.prototype.constructor.displayName = "minesweeper.core/TimerView";

minesweeper.core.TimerView.prototype.om$isComponent = true;

var x23736_23742 = minesweeper.core.TimerView;
x23736_23742.om$next$IQuery$ = true;

x23736_23742.om$next$IQuery$query$arity$1 = ((function (x23736_23742){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x23736_23742))
;


var x23737_23743 = minesweeper.core.TimerView.prototype;
x23737_23743.om$next$IQuery$ = true;

x23737_23743.om$next$IQuery$query$arity$1 = ((function (x23737_23743){
return (function (this$){
var this$__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});})(x23737_23743))
;


minesweeper.core.TimerView.cljs$lang$type = true;

minesweeper.core.TimerView.cljs$lang$ctorStr = "minesweeper.core/TimerView";

minesweeper.core.TimerView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"minesweeper.core/TimerView");
});
minesweeper.core.timer_view = om.next.factory.call(null,minesweeper.core.TimerView);
/**
 * @constructor
 */
minesweeper.core.InfoView = (function minesweeper$core$InfoView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

minesweeper.core.InfoView.prototype = goog.object.clone(React.Component.prototype);

var x23748_23762 = minesweeper.core.InfoView.prototype;
x23748_23762.componentWillUpdate = ((function (x23748_23762){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___23763 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___23764 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___23763,next_ident__18863__auto___23764)){
var idxr__18864__auto___23765 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___23765 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___23765),((function (idxr__18864__auto___23765,ident__18862__auto___23763,next_ident__18863__auto___23764,this__18858__auto__,x23748_23762){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___23763], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___23764], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___23765,ident__18862__auto___23763,next_ident__18863__auto___23764,this__18858__auto__,x23748_23762))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x23748_23762))
;

x23748_23762.shouldComponentUpdate = ((function (x23748_23762){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__23750 = next_props__18859__auto____$1;
var G__23750__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23750):G__23750);
return G__23750__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x23748_23762))
;

x23748_23762.componentWillUnmount = ((function (x23748_23762){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23748_23762))
;

x23748_23762.componentDidUpdate = ((function (x23748_23762){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x23748_23762))
;

x23748_23762.isMounted = ((function (x23748_23762){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23748_23762))
;

x23748_23762.componentWillMount = ((function (x23748_23762){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23748_23762))
;

x23748_23762.render = ((function (x23748_23762){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_23751 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23752 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23753 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23754 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23755 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__23756 = om.next.props.call(null,this$);
var map__23756__$1 = ((((!((map__23756 == null)))?((((map__23756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23756):map__23756);
var high_score = cljs.core.get.call(null,map__23756__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
var map__23757 = om.next.get_computed.call(null,this$);
var map__23757__$1 = ((((!((map__23757 == null)))?((((map__23757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23757):map__23757);
var time_started = cljs.core.get.call(null,map__23757__$1,new cljs.core.Keyword(null,"time-started","time-started",725137802));
var tick_count = cljs.core.get.call(null,map__23757__$1,new cljs.core.Keyword(null,"tick-count","tick-count",1579994994));
var num_remaining = cljs.core.get.call(null,map__23757__$1,new cljs.core.Keyword(null,"num-remaining","num-remaining",-1894372914));
return React.DOM.div({"className": "info"},om.util.force_children.call(null,minesweeper.core.timer_view.call(null,om.next.computed.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),minesweeper.core.calc_elapsed.call(null,time_started)], null)))),om.util.force_children.call(null,React.DOM.div({"className": "high-score"},om.util.force_children.call(null,"Best "),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,(((high_score == null))?"---":goog.string.format("%03d",high_score))))))),om.util.force_children.call(null,React.DOM.div({"className": "remaining"},om.util.force_children.call(null,"Mines "),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,goog.string.format("%03d",num_remaining)))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23755;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23754;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23753;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23752;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23751;
}});})(x23748_23762))
;


minesweeper.core.InfoView.prototype.constructor = minesweeper.core.InfoView;

minesweeper.core.InfoView.prototype.constructor.displayName = "minesweeper.core/InfoView";

minesweeper.core.InfoView.prototype.om$isComponent = true;

var x23760_23766 = minesweeper.core.InfoView;
x23760_23766.om$next$IQuery$ = true;

x23760_23766.om$next$IQuery$query$arity$1 = ((function (x23760_23766){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-score","high-score",-1220549879),new cljs.core.Keyword(null,"flags","flags",1775418075)], null);
});})(x23760_23766))
;


var x23761_23767 = minesweeper.core.InfoView.prototype;
x23761_23767.om$next$IQuery$ = true;

x23761_23767.om$next$IQuery$query$arity$1 = ((function (x23761_23767){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-score","high-score",-1220549879),new cljs.core.Keyword(null,"flags","flags",1775418075)], null);
});})(x23761_23767))
;


minesweeper.core.InfoView.cljs$lang$type = true;

minesweeper.core.InfoView.cljs$lang$ctorStr = "minesweeper.core/InfoView";

minesweeper.core.InfoView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"minesweeper.core/InfoView");
});
minesweeper.core.info_view = om.next.factory.call(null,minesweeper.core.InfoView);
/**
 * @constructor
 */
minesweeper.core.MainView = (function minesweeper$core$MainView(){
var this__18923__auto__ = this;
React.Component.apply(this__18923__auto__,arguments);

if(!((this__18923__auto__.initLocalState == null))){
this__18923__auto__.state = this__18923__auto__.initLocalState();
} else {
this__18923__auto__.state = {};
}

return this__18923__auto__;
});

minesweeper.core.MainView.prototype = goog.object.clone(React.Component.prototype);

var x23772_23785 = minesweeper.core.MainView.prototype;
x23772_23785.componentWillUpdate = ((function (x23772_23785){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
if(((!((this__18858__auto__ == null)))?(((false) || (this__18858__auto__.om$next$Ident$))?true:false):false)){
var ident__18862__auto___23786 = om.next.ident.call(null,this__18858__auto__,om.next.props.call(null,this__18858__auto__));
var next_ident__18863__auto___23787 = om.next.ident.call(null,this__18858__auto__,om.next._next_props.call(null,next_props__18859__auto__,this__18858__auto__));
if(cljs.core.not_EQ_.call(null,ident__18862__auto___23786,next_ident__18863__auto___23787)){
var idxr__18864__auto___23788 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__18864__auto___23788 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__18864__auto___23788),((function (idxr__18864__auto___23788,ident__18862__auto___23786,next_ident__18863__auto___23787,this__18858__auto__,x23772_23785){
return (function (indexes__18865__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__18865__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__18862__auto___23786], null),cljs.core.disj,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__18863__auto___23787], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18858__auto__);
});})(idxr__18864__auto___23788,ident__18862__auto___23786,next_ident__18863__auto___23787,this__18858__auto__,x23772_23785))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18858__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18858__auto__);
});})(x23772_23785))
;

x23772_23785.shouldComponentUpdate = ((function (x23772_23785){
return (function (next_props__18859__auto__,next_state__18860__auto__){
var this__18858__auto__ = this;
var next_children__18861__auto__ = next_props__18859__auto__.children;
var next_props__18859__auto____$1 = goog.object.get(next_props__18859__auto__,"omcljs$value");
var next_props__18859__auto____$2 = (function (){var G__23774 = next_props__18859__auto____$1;
var G__23774__$1 = (((next_props__18859__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__23774):G__23774);
return G__23774__$1;
})();
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18858__auto__),next_props__18859__auto____$2);
if(or__16785__auto__){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = (function (){var and__16773__auto__ = this__18858__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18858__auto__.state,"omcljs$state"),goog.object.get(next_state__18860__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18858__auto__.props.children,next_children__18861__auto__);
}
}
});})(x23772_23785))
;

x23772_23785.componentWillUnmount = ((function (x23772_23785){
return (function (){
var this__18858__auto__ = this;
var r__18869__auto__ = om.next.get_reconciler.call(null,this__18858__auto__);
var cfg__18870__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18869__auto__);
var st__18871__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
var indexer__18868__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18870__auto__);
if(cljs.core.truth_((function (){var and__16773__auto__ = !((st__18871__auto__ == null));
if(and__16773__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__18871__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18858__auto__], null));
} else {
return and__16773__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__18871__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18858__auto__);
} else {
}

if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23772_23785))
;

x23772_23785.componentDidUpdate = ((function (x23772_23785){
return (function (prev_props__18866__auto__,prev_state__18867__auto__){
var this__18858__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18858__auto__);
});})(x23772_23785))
;

x23772_23785.isMounted = ((function (x23772_23785){
return (function (){
var this__18858__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18858__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23772_23785))
;

x23772_23785.componentWillMount = ((function (x23772_23785){
return (function (){
var this__18858__auto__ = this;
var indexer__18868__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18858__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18868__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18868__auto__,this__18858__auto__);
}
});})(x23772_23785))
;

x23772_23785.componentDidMount = ((function (x23772_23785){
return (function (){
var this$ = this;
cljs.core.println.call(null,"MainView mounted");

return setInterval(((function (this$,x23772_23785){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("minesweeper.core","tick","minesweeper.core/tick",2100065950,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tick-count","tick-count",1579994994)))))));
});})(this$,x23772_23785))
,(1000));
});})(x23772_23785))
;

x23772_23785.render = ((function (x23772_23785){
return (function (){
var this__18857__auto__ = this;
var this$ = this__18857__auto__;
var _STAR_reconciler_STAR_23775 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23776 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23777 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23778 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23779 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18857__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18857__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18857__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18857__auto__);

om.next._STAR_parent_STAR_ = this__18857__auto__;

try{var map__23780 = om.next.props.call(null,this$);
var map__23780__$1 = ((((!((map__23780 == null)))?((((map__23780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23780):map__23780);
var controls = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));
var level = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var grid = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var mask = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"mask","mask",-585748447));
var flags = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var game_state = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var time_started = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"time-started","time-started",725137802));
var tick_count = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"tick-count","tick-count",1579994994));
var high_score = cljs.core.get.call(null,map__23780__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
var game_size = cljs.core.get.call(null,level,new cljs.core.Keyword(null,"size","size",1098693007));
var num_mines = cljs.core.get.call(null,level,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var num_remaining = (num_mines - minesweeper.core.count_flags.call(null,flags));
cljs.core.println.call(null,"Rendering main view");

return React.DOM.div({"className": [cljs.core.str("minesweeper-wrap "),cljs.core.str((function (){var G__23782 = (((game_state instanceof cljs.core.Keyword))?game_state.fqn:null);
switch (G__23782) {
case "victorious":
return "st-victorious";

break;
case "dead":
return "st-dead";

break;
default:
return "";

}
})())].join(''), "onContextMenu": ((function (map__23780,map__23780__$1,controls,level,grid,mask,flags,game_state,time_started,tick_count,high_score,game_size,num_mines,num_remaining,_STAR_reconciler_STAR_23775,_STAR_depth_STAR_23776,_STAR_shared_STAR_23777,_STAR_instrument_STAR_23778,_STAR_parent_STAR_23779,this$,this__18857__auto__,x23772_23785){
return (function (e){
return e.preventDefault();
});})(map__23780,map__23780__$1,controls,level,grid,mask,flags,game_state,time_started,tick_count,high_score,game_size,num_mines,num_remaining,_STAR_reconciler_STAR_23775,_STAR_depth_STAR_23776,_STAR_shared_STAR_23777,_STAR_instrument_STAR_23778,_STAR_parent_STAR_23779,this$,this__18857__auto__,x23772_23785))
},om.util.force_children.call(null,minesweeper.core.info_view.call(null,om.next.computed.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"info",new cljs.core.Keyword(null,"high-score","high-score",-1220549879),high_score], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"time-started","time-started",725137802),time_started,new cljs.core.Keyword(null,"tick-count","tick-count",1579994994),tick_count,new cljs.core.Keyword(null,"num-remaining","num-remaining",-1894372914),num_remaining], null)))),om.util.force_children.call(null,minesweeper.core.grid_view.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state,new cljs.core.Keyword(null,"game-size","game-size",1469204689),game_size,new cljs.core.Keyword(null,"grid","grid",402978600),grid,new cljs.core.Keyword(null,"mask","mask",-585748447),mask,new cljs.core.Keyword(null,"flags","flags",1775418075),flags], null))),om.util.force_children.call(null,minesweeper.core.controls_view.call(null,controls)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23779;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23778;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23777;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23776;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23775;
}});})(x23772_23785))
;


minesweeper.core.MainView.prototype.constructor = minesweeper.core.MainView;

minesweeper.core.MainView.prototype.constructor.displayName = "minesweeper.core/MainView";

minesweeper.core.MainView.prototype.om$isComponent = true;

var x23783_23790 = minesweeper.core.MainView;
x23783_23790.om$next$IQuery$ = true;

x23783_23790.om$next$IQuery$query$arity$1 = ((function (x23783_23790){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"time-started","time-started",725137802),new cljs.core.Keyword(null,"tick-count","tick-count",1579994994),new cljs.core.Keyword(null,"high-score","high-score",-1220549879),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"controls","controls",1340701452),om.next.get_query.call(null,minesweeper.core.ControlsView)], null)], null);
});})(x23783_23790))
;


var x23784_23791 = minesweeper.core.MainView.prototype;
x23784_23791.om$next$IQuery$ = true;

x23784_23791.om$next$IQuery$query$arity$1 = ((function (x23784_23791){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"time-started","time-started",725137802),new cljs.core.Keyword(null,"tick-count","tick-count",1579994994),new cljs.core.Keyword(null,"high-score","high-score",-1220549879),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"controls","controls",1340701452),om.next.get_query.call(null,minesweeper.core.ControlsView)], null)], null);
});})(x23784_23791))
;


minesweeper.core.MainView.cljs$lang$type = true;

minesweeper.core.MainView.cljs$lang$ctorStr = "minesweeper.core/MainView";

minesweeper.core.MainView.cljs$lang$ctorPrWriter = (function (this__18925__auto__,writer__18926__auto__,opt__18927__auto__){
return cljs.core._write.call(null,writer__18926__auto__,"minesweeper.core/MainView");
});
minesweeper.core.zero_region = (function minesweeper$core$zero_region(p__23792,grid,p__23793,region){
var vec__23798 = p__23792;
var rows = cljs.core.nth.call(null,vec__23798,(0),null);
var cols = cljs.core.nth.call(null,vec__23798,(1),null);
var vec__23799 = p__23793;
var row = cljs.core.nth.call(null,vec__23799,(0),null);
var col = cljs.core.nth.call(null,vec__23799,(1),null);
var neighbours = minesweeper.core.neighbour_coords.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var region__$1 = cljs.core.conj.call(null,region,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
if(cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
return cljs.core.reduce.call(null,((function (neighbours,region__$1,vec__23798,rows,cols,vec__23799,row,col){
return (function (region__$2,p__23800){
var vec__23801 = p__23800;
var nx = cljs.core.nth.call(null,vec__23801,(0),null);
var ny = cljs.core.nth.call(null,vec__23801,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,region__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null)))){
return clojure.set.union.call(null,region__$2,minesweeper$core$zero_region.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null),region__$2));
} else {
return region__$2;
}
});})(neighbours,region__$1,vec__23798,rows,cols,vec__23799,row,col))
,region__$1,neighbours);
} else {
return region__$1;
}
});
minesweeper.core.update_mask = (function minesweeper$core$update_mask(mask,cells){
return cljs.core.reduce.call(null,(function (mask__$1,p__23804){
var vec__23805 = p__23804;
var r = cljs.core.nth.call(null,vec__23805,(0),null);
var c = cljs.core.nth.call(null,vec__23805,(1),null);
return cljs.core.assoc_in.call(null,mask__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),(1));
}),mask,cells);
});
minesweeper.core.values_at = (function minesweeper$core$values_at(grid,cells){
return cljs.core.map.call(null,(function (p1__23806_SHARP_){
return cljs.core.get_in.call(null,grid,p1__23806_SHARP_);
}),cells);
});
minesweeper.core.calc_game_state = (function minesweeper$core$calc_game_state(grid,mask,num_mines,swept_cells){
var num_hidden = cljs.core.reduce.call(null,(function (total,p__23809){
var vec__23810 = p__23809;
var r = cljs.core.nth.call(null,vec__23810,(0),null);
var c = cljs.core.nth.call(null,vec__23810,(1),null);
var n = cljs.core.nth.call(null,vec__23810,(2),null);
if(cljs.core._EQ_.call(null,(0),n)){
return (total + (1));
} else {
return total;
}
}),(0),minesweeper.core.flatten_grid.call(null,mask));
var values = minesweeper.core.values_at.call(null,grid,swept_cells);
var dead = cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,values),new cljs.core.Keyword(null,"X","X",1705996313));
if(dead){
return new cljs.core.Keyword(null,"dead","dead",-1946604091);
} else {
if(cljs.core._EQ_.call(null,num_mines,num_hidden)){
return new cljs.core.Keyword(null,"victorious","victorious",-1185786242);
} else {
return new cljs.core.Keyword(null,"alive","alive",1424929930);
}
}
});
/**
 * Returns a new mask
 */
minesweeper.core.sweep_cell = (function minesweeper$core$sweep_cell(p__23811,grid,mask,p__23812){
var vec__23815 = p__23811;
var rows = cljs.core.nth.call(null,vec__23815,(0),null);
var cols = cljs.core.nth.call(null,vec__23815,(1),null);
var vec__23816 = p__23812;
var row = cljs.core.nth.call(null,vec__23816,(0),null);
var col = cljs.core.nth.call(null,vec__23816,(1),null);
var sweep_region = ((cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))))?minesweeper.core.zero_region.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),cljs.core.PersistentHashSet.EMPTY):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null));
return minesweeper.core.update_mask.call(null,mask,sweep_region);
});
minesweeper.core.sweep_cells = (function minesweeper$core$sweep_cells(p__23817,grid,mask,cells){
var vec__23819 = p__23817;
var rows = cljs.core.nth.call(null,vec__23819,(0),null);
var cols = cljs.core.nth.call(null,vec__23819,(1),null);
return cljs.core.reduce.call(null,((function (vec__23819,rows,cols){
return (function (mask__$1,cell){
return minesweeper.core.sweep_cell.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask__$1,cell);
});})(vec__23819,rows,cols))
,mask,cells);
});
minesweeper.core.flag_remaining = (function minesweeper$core$flag_remaining(flags,grid){
return cljs.core.reduce.call(null,(function (flags__$1,p__23822){
var vec__23823 = p__23822;
var r = cljs.core.nth.call(null,vec__23823,(0),null);
var c = cljs.core.nth.call(null,vec__23823,(1),null);
var val = cljs.core.nth.call(null,vec__23823,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"X","X",1705996313),val)){
return cljs.core.assoc_in.call(null,flags__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),(1));
} else {
return flags__$1;
}
}),flags,minesweeper.core.flatten_grid.call(null,grid));
});
minesweeper.core.update_high_score_BANG_ = (function minesweeper$core$update_high_score_BANG_(state){
var level = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"level","level",1290497552)], null));
var time_started = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"time-started","time-started",725137802));
var elapsed = minesweeper.core.calc_elapsed.call(null,time_started);
var high_score = minesweeper.core.get_high_score.call(null,level);
if((elapsed < high_score)){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"high-score","high-score",-1220549879),elapsed);

return minesweeper.core.set_high_score_BANG_.call(null,level,elapsed);
} else {
return null;
}
});
minesweeper.core.sweep_cell_BANG_ = (function minesweeper$core$sweep_cell_BANG_(state,p__23824){
var vec__23827 = p__23824;
var row = cljs.core.nth.call(null,vec__23827,(0),null);
var col = cljs.core.nth.call(null,vec__23827,(1),null);
var vec__23828 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"size","size",1098693007)], null));
var rows = cljs.core.nth.call(null,vec__23828,(0),null);
var cols = cljs.core.nth.call(null,vec__23828,(1),null);
var grid = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"grid","grid",402978600));
var mask = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"mask","mask",-585748447));
var flags = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"flags","flags",1775418075));
var num_mines = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"mines","mines",-1960796490)], null));
var new_mask = minesweeper.core.sweep_cell.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
var game_state = minesweeper.core.calc_game_state.call(null,grid,new_mask,num_mines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)], null));
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mask","mask",-585748447),new_mask);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"victorious","victorious",-1185786242),game_state)){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"flags","flags",1775418075),minesweeper.core.flag_remaining.call(null,flags,grid));

return minesweeper.core.update_high_score_BANG_.call(null,state);
} else {
return null;
}
});
minesweeper.core.sweep_spread_BANG_ = (function minesweeper$core$sweep_spread_BANG_(state,p__23829){
var vec__23832 = p__23829;
var row = cljs.core.nth.call(null,vec__23832,(0),null);
var col = cljs.core.nth.call(null,vec__23832,(1),null);
var vec__23833 = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"size","size",1098693007)], null));
var rows = cljs.core.nth.call(null,vec__23833,(0),null);
var cols = cljs.core.nth.call(null,vec__23833,(1),null);
var grid = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"grid","grid",402978600));
var mask = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"mask","mask",-585748447));
var flags = cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"flags","flags",1775418075));
var num_mines = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"mines","mines",-1960796490)], null));
if(cljs.core.truth_(minesweeper.core.can_spread_sweep_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)))){
var swept = cljs.core.reduce.call(null,((function (vec__23833,rows,cols,grid,mask,flags,num_mines,vec__23832,row,col){
return (function (swept,cell){
if(cljs.core._EQ_.call(null,(0),cljs.core.get_in.call(null,flags,cell))){
return cljs.core.conj.call(null,swept,cell);
} else {
return swept;
}
});})(vec__23833,rows,cols,grid,mask,flags,num_mines,vec__23832,row,col))
,cljs.core.PersistentVector.EMPTY,minesweeper.core.neighbour_coords.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)));
var new_mask = minesweeper.core.sweep_cells.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,cols], null),grid,mask,swept);
var game_state = minesweeper.core.calc_game_state.call(null,grid,new_mask,num_mines,swept);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"mask","mask",-585748447),new_mask);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),game_state);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"victorious","victorious",-1185786242),game_state)){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"flags","flags",1775418075),minesweeper.core.flag_remaining.call(null,flags,grid));

return minesweeper.core.update_high_score_BANG_.call(null,state);
} else {
return null;
}
} else {
return null;
}
});
minesweeper.core.flag_cell_BANG_ = (function minesweeper$core$flag_cell_BANG_(state,p__23834){
var vec__23836 = p__23834;
var row = cljs.core.nth.call(null,vec__23836,(0),null);
var col = cljs.core.nth.call(null,vec__23836,(1),null);
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075),row,col], null),(1));
});
minesweeper.core.unflag_cell_BANG_ = (function minesweeper$core$unflag_cell_BANG_(state,p__23837){
var vec__23839 = p__23837;
var row = cljs.core.nth.call(null,vec__23839,(0),null);
var col = cljs.core.nth.call(null,vec__23839,(1),null);
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075),row,col], null),(0));
});
minesweeper.core.reset_game_BANG_ = (function minesweeper$core$reset_game_BANG_(state){
var level = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"level","level",1290497552)], null));
return cljs.core.reset_BANG_.call(null,state,minesweeper.core.new_state.call(null,level));
});
minesweeper.core.start_game_BANG_ = (function minesweeper$core$start_game_BANG_(state){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"alive","alive",1424929930));

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"time-started","time-started",725137802),minesweeper.core.get_time.call(null));

return cljs.core.println.call(null,"Started game");
});
minesweeper.core.tick_BANG_ = (function minesweeper$core$tick_BANG_(state){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword(null,"tick-count","tick-count",1579994994),cljs.core.inc);
});
if(typeof minesweeper.core.read !== 'undefined'){
} else {
minesweeper.core.read = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"minesweeper.core","read"),((function (method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__){
return (function (env,key,params){
return key;
});})(method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
})();
}
cljs.core._add_method.call(null,minesweeper.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23840,key,params){
var map__23841 = p__23840;
var map__23841__$1 = ((((!((map__23841 == null)))?((((map__23841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23841):map__23841);
var env = map__23841__$1;
var state = cljs.core.get.call(null,map__23841__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__23841__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__23843 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__23843,(0),null);
var v = cljs.core.nth.call(null,vec__23843,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
minesweeper.core.if_alive = (function minesweeper$core$if_alive(var_args){
var args__17850__auto__ = [];
var len__17843__auto___23847 = arguments.length;
var i__17844__auto___23848 = (0);
while(true){
if((i__17844__auto___23848 < len__17843__auto___23847)){
args__17850__auto__.push((arguments[i__17844__auto___23848]));

var G__23849 = (i__17844__auto___23848 + (1));
i__17844__auto___23848 = G__23849;
continue;
} else {
}
break;
}

var argseq__17851__auto__ = ((((2) < args__17850__auto__.length))?(new cljs.core.IndexedSeq(args__17850__auto__.slice((2)),(0))):null);
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17851__auto__);
});

minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic = (function (state,fn,args){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"alive","alive",1424929930),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"game-state","game-state",935682735)))){
return cljs.core.apply.call(null,fn,args);
} else {
return null;
}
});

minesweeper.core.if_alive.cljs$lang$maxFixedArity = (2);

minesweeper.core.if_alive.cljs$lang$applyTo = (function (seq23844){
var G__23845 = cljs.core.first.call(null,seq23844);
var seq23844__$1 = cljs.core.next.call(null,seq23844);
var G__23846 = cljs.core.first.call(null,seq23844__$1);
var seq23844__$2 = cljs.core.next.call(null,seq23844__$1);
return minesweeper.core.if_alive.cljs$core$IFn$_invoke$arity$variadic(G__23845,G__23846,seq23844__$2);
});
minesweeper.core.alive_or_pending_QMARK_ = (function minesweeper$core$alive_or_pending_QMARK_(state){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pending","pending",-220036727),null,new cljs.core.Keyword(null,"alive","alive",1424929930),null], null), null),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"game-state","game-state",935682735)));
});
minesweeper.core.start_game_if_pending_BANG_ = (function minesweeper$core$start_game_if_pending_BANG_(state){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"game-state","game-state",935682735)))){
cljs.core.println.call(null,"Starting game!");

return minesweeper.core.start_game_BANG_.call(null,state);
} else {
return null;
}
});
if(typeof minesweeper.core.mutate !== 'undefined'){
} else {
minesweeper.core.mutate = (function (){var method_table__17698__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17702__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"minesweeper.core","mutate"),((function (method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__){
return (function (env,key,params){
return key;
});})(method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__,hierarchy__17702__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17702__auto__,method_table__17698__auto__,prefer_table__17699__auto__,method_cache__17700__auto__,cached_hierarchy__17701__auto__));
})();
}
cljs.core._add_method.call(null,minesweeper.core.mutate,new cljs.core.Symbol("minesweeper.core","tick","minesweeper.core/tick",2100065950,null),(function (p__23850,key,params){
var map__23851 = p__23850;
var map__23851__$1 = ((((!((map__23851 == null)))?((((map__23851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23851):map__23851);
var state = cljs.core.get.call(null,map__23851__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23851,map__23851__$1,state){
return (function (){
return minesweeper.core.if_alive.call(null,state,minesweeper.core.tick_BANG_,state);
});})(map__23851,map__23851__$1,state))
], null);
}));
cljs.core._add_method.call(null,minesweeper.core.mutate,new cljs.core.Symbol("minesweeper.core","sweep","minesweeper.core/sweep",-334767370,null),(function (p__23853,key,p__23854){
var map__23855 = p__23853;
var map__23855__$1 = ((((!((map__23855 == null)))?((((map__23855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23855):map__23855);
var state = cljs.core.get.call(null,map__23855__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23856 = p__23854;
var map__23856__$1 = ((((!((map__23856 == null)))?((((map__23856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23856):map__23856);
var row = cljs.core.get.call(null,map__23856__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__23856__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23855,map__23855__$1,state,map__23856,map__23856__$1,row,col){
return (function (){
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_.call(null,state))){
minesweeper.core.start_game_if_pending_BANG_.call(null,state);

return minesweeper.core.sweep_cell_BANG_.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return null;
}
});})(map__23855,map__23855__$1,state,map__23856,map__23856__$1,row,col))
], null);
}));
cljs.core._add_method.call(null,minesweeper.core.mutate,new cljs.core.Symbol("minesweeper.core","reset","minesweeper.core/reset",-859702012,null),(function (p__23859,key,params){
var map__23860 = p__23859;
var map__23860__$1 = ((((!((map__23860 == null)))?((((map__23860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23860):map__23860);
var state = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23860,map__23860__$1,state){
return (function (){
return minesweeper.core.reset_game_BANG_.call(null,state);
});})(map__23860,map__23860__$1,state))
], null);
}));
cljs.core._add_method.call(null,minesweeper.core.mutate,new cljs.core.Symbol("minesweeper.core","spread-sweep","minesweeper.core/spread-sweep",-125389226,null),(function (p__23862,key,p__23863){
var map__23864 = p__23862;
var map__23864__$1 = ((((!((map__23864 == null)))?((((map__23864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23864):map__23864);
var state = cljs.core.get.call(null,map__23864__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23865 = p__23863;
var map__23865__$1 = ((((!((map__23865 == null)))?((((map__23865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23865):map__23865);
var row = cljs.core.get.call(null,map__23865__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__23865__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23864,map__23864__$1,state,map__23865,map__23865__$1,row,col){
return (function (){
return minesweeper.core.if_alive.call(null,state,minesweeper.core.sweep_spread_BANG_,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});})(map__23864,map__23864__$1,state,map__23865,map__23865__$1,row,col))
], null);
}));
cljs.core._add_method.call(null,minesweeper.core.mutate,new cljs.core.Symbol("minesweeper.core","flag","minesweeper.core/flag",1415670223,null),(function (p__23868,key,p__23869){
var map__23870 = p__23868;
var map__23870__$1 = ((((!((map__23870 == null)))?((((map__23870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23870):map__23870);
var state = cljs.core.get.call(null,map__23870__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23871 = p__23869;
var map__23871__$1 = ((((!((map__23871 == null)))?((((map__23871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23871):map__23871);
var row = cljs.core.get.call(null,map__23871__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__23871__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23870,map__23870__$1,state,map__23871,map__23871__$1,row,col){
return (function (){
if(cljs.core.truth_(minesweeper.core.alive_or_pending_QMARK_.call(null,state))){
minesweeper.core.start_game_if_pending_BANG_.call(null,state);

return minesweeper.core.flag_cell_BANG_.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
} else {
return null;
}
});})(map__23870,map__23870__$1,state,map__23871,map__23871__$1,row,col))
], null);
}));
cljs.core._add_method.call(null,minesweeper.core.mutate,new cljs.core.Symbol("minesweeper.core","unflag","minesweeper.core/unflag",259191600,null),(function (p__23874,key,p__23875){
var map__23876 = p__23874;
var map__23876__$1 = ((((!((map__23876 == null)))?((((map__23876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23876):map__23876);
var state = cljs.core.get.call(null,map__23876__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23877 = p__23875;
var map__23877__$1 = ((((!((map__23877 == null)))?((((map__23877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23877):map__23877);
var row = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__23877__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23876,map__23876__$1,state,map__23877,map__23877__$1,row,col){
return (function (){
return minesweeper.core.if_alive.call(null,state,minesweeper.core.unflag_cell_BANG_,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null));
});})(map__23876,map__23876__$1,state,map__23877,map__23877__$1,row,col))
], null);
}));
cljs.core._add_method.call(null,minesweeper.core.mutate,new cljs.core.Symbol("minesweeper.core","level-select","minesweeper.core/level-select",23671062,null),(function (p__23880,key,p__23881){
var map__23882 = p__23880;
var map__23882__$1 = ((((!((map__23882 == null)))?((((map__23882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23882):map__23882);
var state = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23883 = p__23881;
var map__23883__$1 = ((((!((map__23883 == null)))?((((map__23883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23883):map__23883);
var level = cljs.core.get.call(null,map__23883__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23882,map__23882__$1,state,map__23883,map__23883__$1,level){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"level","level",1290497552)], null),level);
});})(map__23882,map__23882__$1,state,map__23883,map__23883__$1,level))
], null);
}));
minesweeper.core.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),minesweeper.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),minesweeper.core.mutate], null));
minesweeper.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),minesweeper.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),minesweeper.core.parser], null));
om.next.add_root_BANG_.call(null,minesweeper.core.reconciler,minesweeper.core.MainView,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map
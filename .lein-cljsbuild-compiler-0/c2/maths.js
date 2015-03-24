goog.provide('c2.maths');
goog.require('cljs.core');
c2.maths.Pi = Math.PI;
c2.maths.Tau = (2 * c2.maths.Pi);
c2.maths.e = Math.E;
c2.maths.radians_per_degree = (c2.maths.Pi / 180);
c2.maths.rad = (function rad(x){
return (c2.maths.radians_per_degree * x);
});
c2.maths.deg = (function deg(x){
return (x / c2.maths.radians_per_degree);
});
c2.maths.sin = (function sin(x){
return Math.sin.call(null,x);
});
c2.maths.asin = (function asin(x){
return Math.asin.call(null,x);
});
c2.maths.cos = (function cos(x){
return Math.cos.call(null,x);
});
c2.maths.acos = (function acos(x){
return Math.acos.call(null,x);
});
c2.maths.tan = (function tan(x){
return Math.tan.call(null,x);
});
c2.maths.atan = (function atan(x){
return Math.atan.call(null,x);
});
c2.maths.expt = (function() {
var expt = null;
var expt__1 = (function (x){
return Math.exp.call(null,x);
});
var expt__2 = (function (x,y){
return Math.pow.call(null,x,y);
});
expt = function(x,y){
switch(arguments.length){
case 1:
return expt__1.call(this,x);
case 2:
return expt__2.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
expt.cljs$lang$arity$1 = expt__1;
expt.cljs$lang$arity$2 = expt__2;
return expt;
})()
;
c2.maths.sq = (function sq(x){
return c2.maths.expt.call(null,x,2);
});
c2.maths.sqrt = (function sqrt(x){
return Math.sqrt.call(null,x);
});
c2.maths.floor = (function floor(x){
return Math.floor.call(null,x);
});
c2.maths.ceil = (function ceil(x){
return Math.ceil.call(null,x);
});
c2.maths.abs = (function abs(x){
return Math.abs.call(null,x);
});
c2.maths.log = (function() {
var log = null;
var log__1 = (function (x){
return Math.log.call(null,x);
});
var log__2 = (function (base,x){
return (Math.log.call(null,x) / Math.log.call(null,base));
});
log = function(base,x){
switch(arguments.length){
case 1:
return log__1.call(this,base);
case 2:
return log__2.call(this,base,x);
}
throw('Invalid arity: ' + arguments.length);
};
log.cljs$lang$arity$1 = log__1;
log.cljs$lang$arity$2 = log__2;
return log;
})()
;
c2.maths.log10 = (function log10(x){
return (Math.log(x) / Math.LN10);
});
/**
* Returns 2-vector of min and max elements in xs.
*/
c2.maths.extent = (function extent(xs){
return cljs.core.PersistentVector.fromArray([cljs.core.apply.call(null,cljs.core.min,xs),cljs.core.apply.call(null,cljs.core.max,xs)], true);
});
/**
* Arithemetic mean of collection
*/
c2.maths.mean = (function mean(xs){
return (cljs.core.reduce.call(null,cljs.core._PLUS_,xs) / cljs.core.count.call(null,xs));
});
/**
* Median of a collection.
*/
c2.maths.median = (function median(xs){
var sorted__7352 = cljs.core.sort.call(null,xs);
var n__7353 = cljs.core.count.call(null,xs);
if(cljs.core._EQ_.call(null,n__7353,1))
{return cljs.core.first.call(null,sorted__7352);
} else
{if(cljs.core.odd_QMARK_.call(null,n__7353))
{return cljs.core.nth.call(null,sorted__7352,((n__7353 + 1) / 2));
} else
{if("\uFDD0'else")
{var mid__7354 = (n__7353 / 2);
return c2.maths.mean.call(null,cljs.core.PersistentVector.fromArray([cljs.core.nth.call(null,sorted__7352,c2.maths.floor.call(null,mid__7354)),cljs.core.nth.call(null,sorted__7352,c2.maths.ceil.call(null,mid__7354))], true));
} else
{return null;
}
}
}
});
/**
* Inclusive range; same as core/range, but includes the end.
*/
c2.maths.irange = (function() {
var irange = null;
var irange__1 = (function (start){
return cljs.core.range.call(null,start);
});
var irange__2 = (function (start,end){
return cljs.core.concat.call(null,cljs.core.range.call(null,start,end),cljs.core.PersistentVector.fromArray([end], true));
});
var irange__3 = (function (start,end,step){
var r__7356 = cljs.core.range.call(null,start,end,step);
if(((cljs.core.first.call(null,r__7356) % step) === (end % step)))
{return cljs.core.concat.call(null,r__7356,cljs.core.PersistentVector.fromArray([end], true));
} else
{return r__7356;
}
});
irange = function(start,end,step){
switch(arguments.length){
case 1:
return irange__1.call(this,start);
case 2:
return irange__2.call(this,start,end);
case 3:
return irange__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
irange.cljs$lang$arity$1 = irange__1;
irange.cljs$lang$arity$2 = irange__2;
irange.cljs$lang$arity$3 = irange__3;
return irange;
})()
;
/**
* Checks if bottom <= x <= top.
*/
c2.maths.within_QMARK_ = (function within_QMARK_(x,p__7357){
var vec__7363__7364 = p__7357;
var bottom__7365 = cljs.core.nth.call(null,vec__7363__7364,0,null);
var top__7366 = cljs.core.nth.call(null,vec__7363__7364,1,null);
var and__3941__auto____7367 = (bottom__7365 <= x);
if(and__3941__auto____7367)
{return (x <= top__7366);
} else
{return and__3941__auto____7367;
}
});
/**
* @param {...*} var_args
*/
c2.maths.add = (function() { 
var add__delegate = function (args){
return cljs.core.reduce.call(null,(function (A,B){
if((function (){var and__3941__auto____7372 = cljs.core.number_QMARK_.call(null,A);
if(and__3941__auto____7372)
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3941__auto____7372;
}
})())
{return (A + B);
} else
{if((function (){var and__3941__auto____7373 = cljs.core.coll_QMARK_.call(null,A);
if(and__3941__auto____7373)
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3941__auto____7373;
}
})())
{return cljs.core.map.call(null,cljs.core._PLUS_,A,B);
} else
{if((function (){var and__3941__auto____7374 = cljs.core.number_QMARK_.call(null,A);
if(and__3941__auto____7374)
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3941__auto____7374;
}
})())
{return cljs.core.map.call(null,cljs.core._PLUS_,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if((function (){var and__3941__auto____7375 = cljs.core.coll_QMARK_.call(null,A);
if(and__3941__auto____7375)
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3941__auto____7375;
}
})())
{return cljs.core.map.call(null,cljs.core._PLUS_,A,cljs.core.replicate.call(null,cljs.core.count.call(null,A),B));
} else
{return null;
}
}
}
}
}),args);
};
var add = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return add__delegate.call(this, args);
};
add.cljs$lang$maxFixedArity = 0;
add.cljs$lang$applyTo = (function (arglist__7376){
var args = cljs.core.seq(arglist__7376);;
return add__delegate(args);
});
add.cljs$lang$arity$variadic = add__delegate;
return add;
})()
;
/**
* @param {...*} var_args
*/
c2.maths.sub = (function() { 
var sub__delegate = function (args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,args),1))
{if((function (){var and__3941__auto____7385 = cljs.core.number_QMARK_.call(null,0);
if(and__3941__auto____7385)
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3941__auto____7385;
}
})())
{return (0 - cljs.core.first.call(null,args));
} else
{if((function (){var and__3941__auto____7386 = cljs.core.coll_QMARK_.call(null,0);
if(and__3941__auto____7386)
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3941__auto____7386;
}
})())
{return cljs.core.map.call(null,cljs.core._,0,cljs.core.first.call(null,args));
} else
{if((function (){var and__3941__auto____7387 = cljs.core.number_QMARK_.call(null,0);
if(and__3941__auto____7387)
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3941__auto____7387;
}
})())
{return cljs.core.map.call(null,cljs.core._,cljs.core.replicate.call(null,cljs.core.count.call(null,cljs.core.first.call(null,args)),0),cljs.core.first.call(null,args));
} else
{if((function (){var and__3941__auto____7388 = cljs.core.coll_QMARK_.call(null,0);
if(and__3941__auto____7388)
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3941__auto____7388;
}
})())
{return cljs.core.map.call(null,cljs.core._,0,cljs.core.replicate.call(null,cljs.core.count.call(null,0),cljs.core.first.call(null,args)));
} else
{return null;
}
}
}
}
} else
{return cljs.core.reduce.call(null,(function (A,B){
if((function (){var and__3941__auto____7389 = cljs.core.number_QMARK_.call(null,A);
if(and__3941__auto____7389)
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3941__auto____7389;
}
})())
{return (A - B);
} else
{if((function (){var and__3941__auto____7390 = cljs.core.coll_QMARK_.call(null,A);
if(and__3941__auto____7390)
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3941__auto____7390;
}
})())
{return cljs.core.map.call(null,cljs.core._,A,B);
} else
{if((function (){var and__3941__auto____7391 = cljs.core.number_QMARK_.call(null,A);
if(and__3941__auto____7391)
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3941__auto____7391;
}
})())
{return cljs.core.map.call(null,cljs.core._,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if((function (){var and__3941__auto____7392 = cljs.core.coll_QMARK_.call(null,A);
if(and__3941__auto____7392)
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3941__auto____7392;
}
})())
{return cljs.core.map.call(null,cljs.core._,A,cljs.core.replicate.call(null,cljs.core.count.call(null,A),B));
} else
{return null;
}
}
}
}
}),args);
}
};
var sub = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sub__delegate.call(this, args);
};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__7393){
var args = cljs.core.seq(arglist__7393);;
return sub__delegate(args);
});
sub.cljs$lang$arity$variadic = sub__delegate;
return sub;
})()
;
/**
* @param {...*} var_args
*/
c2.maths.mul = (function() { 
var mul__delegate = function (args){
return cljs.core.reduce.call(null,(function (A,B){
if((function (){var and__3941__auto____7398 = cljs.core.number_QMARK_.call(null,A);
if(and__3941__auto____7398)
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3941__auto____7398;
}
})())
{return (A * B);
} else
{if((function (){var and__3941__auto____7399 = cljs.core.coll_QMARK_.call(null,A);
if(and__3941__auto____7399)
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3941__auto____7399;
}
})())
{return cljs.core.map.call(null,cljs.core._STAR_,A,B);
} else
{if((function (){var and__3941__auto____7400 = cljs.core.number_QMARK_.call(null,A);
if(and__3941__auto____7400)
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3941__auto____7400;
}
})())
{return cljs.core.map.call(null,cljs.core._STAR_,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if((function (){var and__3941__auto____7401 = cljs.core.coll_QMARK_.call(null,A);
if(and__3941__auto____7401)
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3941__auto____7401;
}
})())
{return cljs.core.map.call(null,cljs.core._STAR_,A,cljs.core.replicate.call(null,cljs.core.count.call(null,A),B));
} else
{return null;
}
}
}
}
}),args);
};
var mul = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return mul__delegate.call(this, args);
};
mul.cljs$lang$maxFixedArity = 0;
mul.cljs$lang$applyTo = (function (arglist__7402){
var args = cljs.core.seq(arglist__7402);;
return mul__delegate(args);
});
mul.cljs$lang$arity$variadic = mul__delegate;
return mul;
})()
;
/**
* @param {...*} var_args
*/
c2.maths.div = (function() { 
var div__delegate = function (args){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,args),1))
{if((function (){var and__3941__auto____7411 = cljs.core.number_QMARK_.call(null,1);
if(and__3941__auto____7411)
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3941__auto____7411;
}
})())
{return (1 / cljs.core.first.call(null,args));
} else
{if((function (){var and__3941__auto____7412 = cljs.core.coll_QMARK_.call(null,1);
if(and__3941__auto____7412)
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3941__auto____7412;
}
})())
{return cljs.core.map.call(null,cljs.core._SLASH_,1,cljs.core.first.call(null,args));
} else
{if((function (){var and__3941__auto____7413 = cljs.core.number_QMARK_.call(null,1);
if(and__3941__auto____7413)
{return cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3941__auto____7413;
}
})())
{return cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.replicate.call(null,cljs.core.count.call(null,cljs.core.first.call(null,args)),1),cljs.core.first.call(null,args));
} else
{if((function (){var and__3941__auto____7414 = cljs.core.coll_QMARK_.call(null,1);
if(and__3941__auto____7414)
{return cljs.core.number_QMARK_.call(null,cljs.core.first.call(null,args));
} else
{return and__3941__auto____7414;
}
})())
{return cljs.core.map.call(null,cljs.core._SLASH_,1,cljs.core.replicate.call(null,cljs.core.count.call(null,1),cljs.core.first.call(null,args)));
} else
{return null;
}
}
}
}
} else
{return cljs.core.reduce.call(null,(function (A,B){
if((function (){var and__3941__auto____7415 = cljs.core.number_QMARK_.call(null,A);
if(and__3941__auto____7415)
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3941__auto____7415;
}
})())
{return (A / B);
} else
{if((function (){var and__3941__auto____7416 = cljs.core.coll_QMARK_.call(null,A);
if(and__3941__auto____7416)
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3941__auto____7416;
}
})())
{return cljs.core.map.call(null,cljs.core._SLASH_,A,B);
} else
{if((function (){var and__3941__auto____7417 = cljs.core.number_QMARK_.call(null,A);
if(and__3941__auto____7417)
{return cljs.core.coll_QMARK_.call(null,B);
} else
{return and__3941__auto____7417;
}
})())
{return cljs.core.map.call(null,cljs.core._SLASH_,cljs.core.replicate.call(null,cljs.core.count.call(null,B),A),B);
} else
{if((function (){var and__3941__auto____7418 = cljs.core.coll_QMARK_.call(null,A);
if(and__3941__auto____7418)
{return cljs.core.number_QMARK_.call(null,B);
} else
{return and__3941__auto____7418;
}
})())
{return cljs.core.map.call(null,cljs.core._SLASH_,A,cljs.core.replicate.call(null,cljs.core.count.call(null,A),B));
} else
{return null;
}
}
}
}
}),args);
}
};
var div = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return div__delegate.call(this, args);
};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__7419){
var args = cljs.core.seq(arglist__7419);;
return div__delegate(args);
});
div.cljs$lang$arity$variadic = div__delegate;
return div;
})()
;
/**
* Returns the quantiles of a dataset.
* 
* Kwargs:
* 
* > *:probs*: ntiles of the data to return, defaults to `[0 0.25 0.5 0.75 1]`
* 
* Algorithm is the same as R's quantile type=7.
* Transcribed from Jason Davies; https://github.com/jasondavies/science.js/blob/master/src/stats/quantiles.js
* @param {...*} var_args
*/
c2.maths.quantile = (function() { 
var quantile__delegate = function (data,p__7420){
var map__7446__7447 = p__7420;
var map__7446__7448 = ((cljs.core.seq_QMARK_.call(null,map__7446__7447))?clojure.lang.PersistentHashMap.create.call(null,cljs.core.seq.call(null,map__7446__7447)):map__7446__7447);
var probs__7449 = cljs.core._lookup.call(null,map__7446__7448,"\uFDD0'probs",cljs.core.PersistentVector.fromArray([0,0.25,0.5,0.75,1], true));
var xs__7450 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.sort.call(null,data));
var n_1__7451 = (cljs.core.count.call(null,xs__7450) - 1);
var iter__2487__auto____7470 = (function iter__7452(s__7453){
return (new cljs.core.LazySeq(null,false,(function (){
var s__7453__7462 = s__7453;
while(true){
var temp__4092__auto____7463 = cljs.core.seq.call(null,s__7453__7462);
if(temp__4092__auto____7463)
{var xs__4579__auto____7464 = temp__4092__auto____7463;
var q__7465 = cljs.core.first.call(null,xs__4579__auto____7464);
return cljs.core.cons.call(null,(function (){var index__7466 = ((q__7465 * n_1__7451) + 1);
var lo__7467 = cljs.core.int$.call(null,c2.maths.floor.call(null,index__7466));
var h__7468 = (index__7466 - lo__7467);
var a__7469 = xs__7450.call(null,(lo__7467 - 1));
if(cljs.core._EQ_.call(null,h__7468,0))
{return a__7469;
} else
{return (a__7469 + (h__7468 * (xs__7450.call(null,lo__7467) - a__7469)));
}
})(),iter__7452.call(null,cljs.core.rest.call(null,s__7453__7462)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2487__auto____7470.call(null,probs__7449);
};
var quantile = function (data,var_args){
var p__7420 = null;
if (goog.isDef(var_args)) {
  p__7420 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return quantile__delegate.call(this, data, p__7420);
};
quantile.cljs$lang$maxFixedArity = 1;
quantile.cljs$lang$applyTo = (function (arglist__7471){
var data = cljs.core.first(arglist__7471);
var p__7420 = cljs.core.rest(arglist__7471);
return quantile__delegate(data, p__7420);
});
quantile.cljs$lang$arity$variadic = quantile__delegate;
return quantile;
})()
;

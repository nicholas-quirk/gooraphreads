goog.provide('c2.core');
goog.require('cljs.core');
goog.require('reflex.core');
goog.require('c2.dom');
goog.require('singult.core');
c2.core.node_data = singult.core.node_data;
/**
* @param {...*} var_args
*/
c2.core.unify = (function() { 
var unify__delegate = function (data,mapping,args){
if(cljs.core.seq.call(null,data))
{mapping.call(null,cljs.core.first.call(null,data));
} else
{}
return cljs.core.apply.call(null,singult.core.unify,data,mapping,args);
};
var unify = function (data,mapping,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unify__delegate.call(this, data, mapping, args);
};
unify.cljs$lang$maxFixedArity = 2;
unify.cljs$lang$applyTo = (function (arglist__11217){
var data = cljs.core.first(arglist__11217);
var mapping = cljs.core.first(cljs.core.next(arglist__11217));
var args = cljs.core.rest(cljs.core.next(arglist__11217));
return unify__delegate(data, mapping, args);
});
unify.cljs$lang$arity$variadic = unify__delegate;
return unify;
})()
;

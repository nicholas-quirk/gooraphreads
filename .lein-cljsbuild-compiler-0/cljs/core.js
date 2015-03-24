goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
void 0;/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
if((p[goog.typeOf(x)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
void 0;cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw('Invalid arity: ' + arguments.length);
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__7472__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__7472 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7472__delegate.call(this, array, i, idxs);
};
G__7472.cljs$lang$maxFixedArity = 2;
G__7472.cljs$lang$applyTo = (function (arglist__7473){
var array = cljs.core.first(arglist__7473);
var i = cljs.core.first(cljs.core.next(arglist__7473));
var idxs = cljs.core.rest(cljs.core.next(arglist__7473));
return G__7472__delegate(array, i, idxs);
});
G__7472.cljs$lang$arity$variadic = G__7472__delegate;
return G__7472;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
void 0;
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw('Invalid arity: ' + arguments.length);
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
void 0;cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3941__auto____7537 = this$;
if(and__3941__auto____7537)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3941__auto____7537;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{return (function (){var or__3943__auto____7538 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7538)
{return or__3943__auto____7538;
} else
{var or__3943__auto____7539 = (cljs.core._invoke["_"]);
if(or__3943__auto____7539)
{return or__3943__auto____7539;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3941__auto____7540 = this$;
if(and__3941__auto____7540)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3941__auto____7540;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{return (function (){var or__3943__auto____7541 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7541)
{return or__3943__auto____7541;
} else
{var or__3943__auto____7542 = (cljs.core._invoke["_"]);
if(or__3943__auto____7542)
{return or__3943__auto____7542;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3941__auto____7543 = this$;
if(and__3941__auto____7543)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3941__auto____7543;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{return (function (){var or__3943__auto____7544 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7544)
{return or__3943__auto____7544;
} else
{var or__3943__auto____7545 = (cljs.core._invoke["_"]);
if(or__3943__auto____7545)
{return or__3943__auto____7545;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3941__auto____7546 = this$;
if(and__3941__auto____7546)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3941__auto____7546;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{return (function (){var or__3943__auto____7547 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7547)
{return or__3943__auto____7547;
} else
{var or__3943__auto____7548 = (cljs.core._invoke["_"]);
if(or__3943__auto____7548)
{return or__3943__auto____7548;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3941__auto____7549 = this$;
if(and__3941__auto____7549)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3941__auto____7549;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{return (function (){var or__3943__auto____7550 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7550)
{return or__3943__auto____7550;
} else
{var or__3943__auto____7551 = (cljs.core._invoke["_"]);
if(or__3943__auto____7551)
{return or__3943__auto____7551;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3941__auto____7552 = this$;
if(and__3941__auto____7552)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3941__auto____7552;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{return (function (){var or__3943__auto____7553 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7553)
{return or__3943__auto____7553;
} else
{var or__3943__auto____7554 = (cljs.core._invoke["_"]);
if(or__3943__auto____7554)
{return or__3943__auto____7554;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3941__auto____7555 = this$;
if(and__3941__auto____7555)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3941__auto____7555;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3943__auto____7556 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7556)
{return or__3943__auto____7556;
} else
{var or__3943__auto____7557 = (cljs.core._invoke["_"]);
if(or__3943__auto____7557)
{return or__3943__auto____7557;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3941__auto____7558 = this$;
if(and__3941__auto____7558)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3941__auto____7558;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3943__auto____7559 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7559)
{return or__3943__auto____7559;
} else
{var or__3943__auto____7560 = (cljs.core._invoke["_"]);
if(or__3943__auto____7560)
{return or__3943__auto____7560;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3941__auto____7561 = this$;
if(and__3941__auto____7561)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3941__auto____7561;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3943__auto____7562 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7562)
{return or__3943__auto____7562;
} else
{var or__3943__auto____7563 = (cljs.core._invoke["_"]);
if(or__3943__auto____7563)
{return or__3943__auto____7563;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3941__auto____7564 = this$;
if(and__3941__auto____7564)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3941__auto____7564;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3943__auto____7565 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7565)
{return or__3943__auto____7565;
} else
{var or__3943__auto____7566 = (cljs.core._invoke["_"]);
if(or__3943__auto____7566)
{return or__3943__auto____7566;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3941__auto____7567 = this$;
if(and__3941__auto____7567)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3941__auto____7567;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3943__auto____7568 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7568)
{return or__3943__auto____7568;
} else
{var or__3943__auto____7569 = (cljs.core._invoke["_"]);
if(or__3943__auto____7569)
{return or__3943__auto____7569;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3941__auto____7570 = this$;
if(and__3941__auto____7570)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3941__auto____7570;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3943__auto____7571 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7571)
{return or__3943__auto____7571;
} else
{var or__3943__auto____7572 = (cljs.core._invoke["_"]);
if(or__3943__auto____7572)
{return or__3943__auto____7572;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3941__auto____7573 = this$;
if(and__3941__auto____7573)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3941__auto____7573;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3943__auto____7574 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7574)
{return or__3943__auto____7574;
} else
{var or__3943__auto____7575 = (cljs.core._invoke["_"]);
if(or__3943__auto____7575)
{return or__3943__auto____7575;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3941__auto____7576 = this$;
if(and__3941__auto____7576)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3941__auto____7576;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3943__auto____7577 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7577)
{return or__3943__auto____7577;
} else
{var or__3943__auto____7578 = (cljs.core._invoke["_"]);
if(or__3943__auto____7578)
{return or__3943__auto____7578;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3941__auto____7579 = this$;
if(and__3941__auto____7579)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3941__auto____7579;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3943__auto____7580 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7580)
{return or__3943__auto____7580;
} else
{var or__3943__auto____7581 = (cljs.core._invoke["_"]);
if(or__3943__auto____7581)
{return or__3943__auto____7581;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3941__auto____7582 = this$;
if(and__3941__auto____7582)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3941__auto____7582;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3943__auto____7583 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7583)
{return or__3943__auto____7583;
} else
{var or__3943__auto____7584 = (cljs.core._invoke["_"]);
if(or__3943__auto____7584)
{return or__3943__auto____7584;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3941__auto____7585 = this$;
if(and__3941__auto____7585)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3941__auto____7585;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3943__auto____7586 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7586)
{return or__3943__auto____7586;
} else
{var or__3943__auto____7587 = (cljs.core._invoke["_"]);
if(or__3943__auto____7587)
{return or__3943__auto____7587;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3941__auto____7588 = this$;
if(and__3941__auto____7588)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3941__auto____7588;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3943__auto____7589 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7589)
{return or__3943__auto____7589;
} else
{var or__3943__auto____7590 = (cljs.core._invoke["_"]);
if(or__3943__auto____7590)
{return or__3943__auto____7590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3941__auto____7591 = this$;
if(and__3941__auto____7591)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3941__auto____7591;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3943__auto____7592 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7592)
{return or__3943__auto____7592;
} else
{var or__3943__auto____7593 = (cljs.core._invoke["_"]);
if(or__3943__auto____7593)
{return or__3943__auto____7593;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3941__auto____7594 = this$;
if(and__3941__auto____7594)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3941__auto____7594;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3943__auto____7595 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7595)
{return or__3943__auto____7595;
} else
{var or__3943__auto____7596 = (cljs.core._invoke["_"]);
if(or__3943__auto____7596)
{return or__3943__auto____7596;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3941__auto____7597 = this$;
if(and__3941__auto____7597)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3941__auto____7597;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3943__auto____7598 = (cljs.core._invoke[goog.typeOf(this$)]);
if(or__3943__auto____7598)
{return or__3943__auto____7598;
} else
{var or__3943__auto____7599 = (cljs.core._invoke["_"]);
if(or__3943__auto____7599)
{return or__3943__auto____7599;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
void 0;void 0;cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3941__auto____7603 = coll;
if(and__3941__auto____7603)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3941__auto____7603;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{return (function (){var or__3943__auto____7604 = (cljs.core._count[goog.typeOf(coll)]);
if(or__3943__auto____7604)
{return or__3943__auto____7604;
} else
{var or__3943__auto____7605 = (cljs.core._count["_"]);
if(or__3943__auto____7605)
{return or__3943__auto____7605;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3941__auto____7609 = coll;
if(and__3941__auto____7609)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3941__auto____7609;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (function (){var or__3943__auto____7610 = (cljs.core._empty[goog.typeOf(coll)]);
if(or__3943__auto____7610)
{return or__3943__auto____7610;
} else
{var or__3943__auto____7611 = (cljs.core._empty["_"]);
if(or__3943__auto____7611)
{return or__3943__auto____7611;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3941__auto____7615 = coll;
if(and__3941__auto____7615)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3941__auto____7615;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{return (function (){var or__3943__auto____7616 = (cljs.core._conj[goog.typeOf(coll)]);
if(or__3943__auto____7616)
{return or__3943__auto____7616;
} else
{var or__3943__auto____7617 = (cljs.core._conj["_"]);
if(or__3943__auto____7617)
{return or__3943__auto____7617;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;void 0;cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3941__auto____7624 = coll;
if(and__3941__auto____7624)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3941__auto____7624;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return (function (){var or__3943__auto____7625 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3943__auto____7625)
{return or__3943__auto____7625;
} else
{var or__3943__auto____7626 = (cljs.core._nth["_"]);
if(or__3943__auto____7626)
{return or__3943__auto____7626;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3941__auto____7627 = coll;
if(and__3941__auto____7627)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3941__auto____7627;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{return (function (){var or__3943__auto____7628 = (cljs.core._nth[goog.typeOf(coll)]);
if(or__3943__auto____7628)
{return or__3943__auto____7628;
} else
{var or__3943__auto____7629 = (cljs.core._nth["_"]);
if(or__3943__auto____7629)
{return or__3943__auto____7629;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
void 0;void 0;cljs.core.ASeq = {};
void 0;void 0;cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3941__auto____7633 = coll;
if(and__3941__auto____7633)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3941__auto____7633;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{return (function (){var or__3943__auto____7634 = (cljs.core._first[goog.typeOf(coll)]);
if(or__3943__auto____7634)
{return or__3943__auto____7634;
} else
{var or__3943__auto____7635 = (cljs.core._first["_"]);
if(or__3943__auto____7635)
{return or__3943__auto____7635;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3941__auto____7639 = coll;
if(and__3941__auto____7639)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3941__auto____7639;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{return (function (){var or__3943__auto____7640 = (cljs.core._rest[goog.typeOf(coll)]);
if(or__3943__auto____7640)
{return or__3943__auto____7640;
} else
{var or__3943__auto____7641 = (cljs.core._rest["_"]);
if(or__3943__auto____7641)
{return or__3943__auto____7641;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3941__auto____7645 = coll;
if(and__3941__auto____7645)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3941__auto____7645;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{return (function (){var or__3943__auto____7646 = (cljs.core._next[goog.typeOf(coll)]);
if(or__3943__auto____7646)
{return or__3943__auto____7646;
} else
{var or__3943__auto____7647 = (cljs.core._next["_"]);
if(or__3943__auto____7647)
{return or__3943__auto____7647;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3941__auto____7654 = o;
if(and__3941__auto____7654)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3941__auto____7654;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{return (function (){var or__3943__auto____7655 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3943__auto____7655)
{return or__3943__auto____7655;
} else
{var or__3943__auto____7656 = (cljs.core._lookup["_"]);
if(or__3943__auto____7656)
{return or__3943__auto____7656;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3941__auto____7657 = o;
if(and__3941__auto____7657)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3941__auto____7657;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{return (function (){var or__3943__auto____7658 = (cljs.core._lookup[goog.typeOf(o)]);
if(or__3943__auto____7658)
{return or__3943__auto____7658;
} else
{var or__3943__auto____7659 = (cljs.core._lookup["_"]);
if(or__3943__auto____7659)
{return or__3943__auto____7659;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
void 0;void 0;cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3941__auto____7663 = coll;
if(and__3941__auto____7663)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3941__auto____7663;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{return (function (){var or__3943__auto____7664 = (cljs.core._contains_key_QMARK_[goog.typeOf(coll)]);
if(or__3943__auto____7664)
{return or__3943__auto____7664;
} else
{var or__3943__auto____7665 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3943__auto____7665)
{return or__3943__auto____7665;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3941__auto____7669 = coll;
if(and__3941__auto____7669)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3941__auto____7669;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{return (function (){var or__3943__auto____7670 = (cljs.core._assoc[goog.typeOf(coll)]);
if(or__3943__auto____7670)
{return or__3943__auto____7670;
} else
{var or__3943__auto____7671 = (cljs.core._assoc["_"]);
if(or__3943__auto____7671)
{return or__3943__auto____7671;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;void 0;cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3941__auto____7675 = coll;
if(and__3941__auto____7675)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3941__auto____7675;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{return (function (){var or__3943__auto____7676 = (cljs.core._dissoc[goog.typeOf(coll)]);
if(or__3943__auto____7676)
{return or__3943__auto____7676;
} else
{var or__3943__auto____7677 = (cljs.core._dissoc["_"]);
if(or__3943__auto____7677)
{return or__3943__auto____7677;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;void 0;cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3941__auto____7681 = coll;
if(and__3941__auto____7681)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3941__auto____7681;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{return (function (){var or__3943__auto____7682 = (cljs.core._key[goog.typeOf(coll)]);
if(or__3943__auto____7682)
{return or__3943__auto____7682;
} else
{var or__3943__auto____7683 = (cljs.core._key["_"]);
if(or__3943__auto____7683)
{return or__3943__auto____7683;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3941__auto____7687 = coll;
if(and__3941__auto____7687)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3941__auto____7687;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{return (function (){var or__3943__auto____7688 = (cljs.core._val[goog.typeOf(coll)]);
if(or__3943__auto____7688)
{return or__3943__auto____7688;
} else
{var or__3943__auto____7689 = (cljs.core._val["_"]);
if(or__3943__auto____7689)
{return or__3943__auto____7689;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3941__auto____7693 = coll;
if(and__3941__auto____7693)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3941__auto____7693;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{return (function (){var or__3943__auto____7694 = (cljs.core._disjoin[goog.typeOf(coll)]);
if(or__3943__auto____7694)
{return or__3943__auto____7694;
} else
{var or__3943__auto____7695 = (cljs.core._disjoin["_"]);
if(or__3943__auto____7695)
{return or__3943__auto____7695;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;void 0;cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3941__auto____7699 = coll;
if(and__3941__auto____7699)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3941__auto____7699;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{return (function (){var or__3943__auto____7700 = (cljs.core._peek[goog.typeOf(coll)]);
if(or__3943__auto____7700)
{return or__3943__auto____7700;
} else
{var or__3943__auto____7701 = (cljs.core._peek["_"]);
if(or__3943__auto____7701)
{return or__3943__auto____7701;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3941__auto____7705 = coll;
if(and__3941__auto____7705)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3941__auto____7705;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{return (function (){var or__3943__auto____7706 = (cljs.core._pop[goog.typeOf(coll)]);
if(or__3943__auto____7706)
{return or__3943__auto____7706;
} else
{var or__3943__auto____7707 = (cljs.core._pop["_"]);
if(or__3943__auto____7707)
{return or__3943__auto____7707;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3941__auto____7711 = coll;
if(and__3941__auto____7711)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3941__auto____7711;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{return (function (){var or__3943__auto____7712 = (cljs.core._assoc_n[goog.typeOf(coll)]);
if(or__3943__auto____7712)
{return or__3943__auto____7712;
} else
{var or__3943__auto____7713 = (cljs.core._assoc_n["_"]);
if(or__3943__auto____7713)
{return or__3943__auto____7713;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;void 0;cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3941__auto____7717 = o;
if(and__3941__auto____7717)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3941__auto____7717;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{return (function (){var or__3943__auto____7718 = (cljs.core._deref[goog.typeOf(o)]);
if(or__3943__auto____7718)
{return or__3943__auto____7718;
} else
{var or__3943__auto____7719 = (cljs.core._deref["_"]);
if(or__3943__auto____7719)
{return or__3943__auto____7719;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3941__auto____7723 = o;
if(and__3941__auto____7723)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3941__auto____7723;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{return (function (){var or__3943__auto____7724 = (cljs.core._deref_with_timeout[goog.typeOf(o)]);
if(or__3943__auto____7724)
{return or__3943__auto____7724;
} else
{var or__3943__auto____7725 = (cljs.core._deref_with_timeout["_"]);
if(or__3943__auto____7725)
{return or__3943__auto____7725;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;void 0;cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3941__auto____7729 = o;
if(and__3941__auto____7729)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3941__auto____7729;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{return (function (){var or__3943__auto____7730 = (cljs.core._meta[goog.typeOf(o)]);
if(or__3943__auto____7730)
{return or__3943__auto____7730;
} else
{var or__3943__auto____7731 = (cljs.core._meta["_"]);
if(or__3943__auto____7731)
{return or__3943__auto____7731;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3941__auto____7735 = o;
if(and__3941__auto____7735)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3941__auto____7735;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{return (function (){var or__3943__auto____7736 = (cljs.core._with_meta[goog.typeOf(o)]);
if(or__3943__auto____7736)
{return or__3943__auto____7736;
} else
{var or__3943__auto____7737 = (cljs.core._with_meta["_"]);
if(or__3943__auto____7737)
{return or__3943__auto____7737;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;void 0;cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3941__auto____7744 = coll;
if(and__3941__auto____7744)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3941__auto____7744;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{return (function (){var or__3943__auto____7745 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3943__auto____7745)
{return or__3943__auto____7745;
} else
{var or__3943__auto____7746 = (cljs.core._reduce["_"]);
if(or__3943__auto____7746)
{return or__3943__auto____7746;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3941__auto____7747 = coll;
if(and__3941__auto____7747)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3941__auto____7747;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{return (function (){var or__3943__auto____7748 = (cljs.core._reduce[goog.typeOf(coll)]);
if(or__3943__auto____7748)
{return or__3943__auto____7748;
} else
{var or__3943__auto____7749 = (cljs.core._reduce["_"]);
if(or__3943__auto____7749)
{return or__3943__auto____7749;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
void 0;void 0;cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3941__auto____7753 = coll;
if(and__3941__auto____7753)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3941__auto____7753;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{return (function (){var or__3943__auto____7754 = (cljs.core._kv_reduce[goog.typeOf(coll)]);
if(or__3943__auto____7754)
{return or__3943__auto____7754;
} else
{var or__3943__auto____7755 = (cljs.core._kv_reduce["_"]);
if(or__3943__auto____7755)
{return or__3943__auto____7755;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
void 0;void 0;cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3941__auto____7759 = o;
if(and__3941__auto____7759)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3941__auto____7759;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{return (function (){var or__3943__auto____7760 = (cljs.core._equiv[goog.typeOf(o)]);
if(or__3943__auto____7760)
{return or__3943__auto____7760;
} else
{var or__3943__auto____7761 = (cljs.core._equiv["_"]);
if(or__3943__auto____7761)
{return or__3943__auto____7761;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;void 0;cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3941__auto____7765 = o;
if(and__3941__auto____7765)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3941__auto____7765;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{return (function (){var or__3943__auto____7766 = (cljs.core._hash[goog.typeOf(o)]);
if(or__3943__auto____7766)
{return or__3943__auto____7766;
} else
{var or__3943__auto____7767 = (cljs.core._hash["_"]);
if(or__3943__auto____7767)
{return or__3943__auto____7767;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3941__auto____7771 = o;
if(and__3941__auto____7771)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3941__auto____7771;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{return (function (){var or__3943__auto____7772 = (cljs.core._seq[goog.typeOf(o)]);
if(or__3943__auto____7772)
{return or__3943__auto____7772;
} else
{var or__3943__auto____7773 = (cljs.core._seq["_"]);
if(or__3943__auto____7773)
{return or__3943__auto____7773;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;void 0;cljs.core.ISequential = {};
void 0;void 0;cljs.core.IList = {};
void 0;void 0;cljs.core.IRecord = {};
void 0;void 0;cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3941__auto____7777 = coll;
if(and__3941__auto____7777)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3941__auto____7777;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{return (function (){var or__3943__auto____7778 = (cljs.core._rseq[goog.typeOf(coll)]);
if(or__3943__auto____7778)
{return or__3943__auto____7778;
} else
{var or__3943__auto____7779 = (cljs.core._rseq["_"]);
if(or__3943__auto____7779)
{return or__3943__auto____7779;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3941__auto____7783 = coll;
if(and__3941__auto____7783)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3941__auto____7783;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{return (function (){var or__3943__auto____7784 = (cljs.core._sorted_seq[goog.typeOf(coll)]);
if(or__3943__auto____7784)
{return or__3943__auto____7784;
} else
{var or__3943__auto____7785 = (cljs.core._sorted_seq["_"]);
if(or__3943__auto____7785)
{return or__3943__auto____7785;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3941__auto____7789 = coll;
if(and__3941__auto____7789)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3941__auto____7789;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{return (function (){var or__3943__auto____7790 = (cljs.core._sorted_seq_from[goog.typeOf(coll)]);
if(or__3943__auto____7790)
{return or__3943__auto____7790;
} else
{var or__3943__auto____7791 = (cljs.core._sorted_seq_from["_"]);
if(or__3943__auto____7791)
{return or__3943__auto____7791;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3941__auto____7795 = coll;
if(and__3941__auto____7795)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3941__auto____7795;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{return (function (){var or__3943__auto____7796 = (cljs.core._entry_key[goog.typeOf(coll)]);
if(or__3943__auto____7796)
{return or__3943__auto____7796;
} else
{var or__3943__auto____7797 = (cljs.core._entry_key["_"]);
if(or__3943__auto____7797)
{return or__3943__auto____7797;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3941__auto____7801 = coll;
if(and__3941__auto____7801)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3941__auto____7801;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{return (function (){var or__3943__auto____7802 = (cljs.core._comparator[goog.typeOf(coll)]);
if(or__3943__auto____7802)
{return or__3943__auto____7802;
} else
{var or__3943__auto____7803 = (cljs.core._comparator["_"]);
if(or__3943__auto____7803)
{return or__3943__auto____7803;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3941__auto____7807 = o;
if(and__3941__auto____7807)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3941__auto____7807;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{return (function (){var or__3943__auto____7808 = (cljs.core._pr_seq[goog.typeOf(o)]);
if(or__3943__auto____7808)
{return or__3943__auto____7808;
} else
{var or__3943__auto____7809 = (cljs.core._pr_seq["_"]);
if(or__3943__auto____7809)
{return or__3943__auto____7809;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;void 0;cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3941__auto____7813 = d;
if(and__3941__auto____7813)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3941__auto____7813;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{return (function (){var or__3943__auto____7814 = (cljs.core._realized_QMARK_[goog.typeOf(d)]);
if(or__3943__auto____7814)
{return or__3943__auto____7814;
} else
{var or__3943__auto____7815 = (cljs.core._realized_QMARK_["_"]);
if(or__3943__auto____7815)
{return or__3943__auto____7815;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;void 0;cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3941__auto____7819 = this$;
if(and__3941__auto____7819)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3941__auto____7819;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{return (function (){var or__3943__auto____7820 = (cljs.core._notify_watches[goog.typeOf(this$)]);
if(or__3943__auto____7820)
{return or__3943__auto____7820;
} else
{var or__3943__auto____7821 = (cljs.core._notify_watches["_"]);
if(or__3943__auto____7821)
{return or__3943__auto____7821;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3941__auto____7825 = this$;
if(and__3941__auto____7825)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3941__auto____7825;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{return (function (){var or__3943__auto____7826 = (cljs.core._add_watch[goog.typeOf(this$)]);
if(or__3943__auto____7826)
{return or__3943__auto____7826;
} else
{var or__3943__auto____7827 = (cljs.core._add_watch["_"]);
if(or__3943__auto____7827)
{return or__3943__auto____7827;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3941__auto____7831 = this$;
if(and__3941__auto____7831)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3941__auto____7831;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{return (function (){var or__3943__auto____7832 = (cljs.core._remove_watch[goog.typeOf(this$)]);
if(or__3943__auto____7832)
{return or__3943__auto____7832;
} else
{var or__3943__auto____7833 = (cljs.core._remove_watch["_"]);
if(or__3943__auto____7833)
{return or__3943__auto____7833;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;void 0;cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3941__auto____7837 = coll;
if(and__3941__auto____7837)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3941__auto____7837;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{return (function (){var or__3943__auto____7838 = (cljs.core._as_transient[goog.typeOf(coll)]);
if(or__3943__auto____7838)
{return or__3943__auto____7838;
} else
{var or__3943__auto____7839 = (cljs.core._as_transient["_"]);
if(or__3943__auto____7839)
{return or__3943__auto____7839;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3941__auto____7843 = tcoll;
if(and__3941__auto____7843)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3941__auto____7843;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{return (function (){var or__3943__auto____7844 = (cljs.core._conj_BANG_[goog.typeOf(tcoll)]);
if(or__3943__auto____7844)
{return or__3943__auto____7844;
} else
{var or__3943__auto____7845 = (cljs.core._conj_BANG_["_"]);
if(or__3943__auto____7845)
{return or__3943__auto____7845;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3941__auto____7849 = tcoll;
if(and__3941__auto____7849)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3941__auto____7849;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3943__auto____7850 = (cljs.core._persistent_BANG_[goog.typeOf(tcoll)]);
if(or__3943__auto____7850)
{return or__3943__auto____7850;
} else
{var or__3943__auto____7851 = (cljs.core._persistent_BANG_["_"]);
if(or__3943__auto____7851)
{return or__3943__auto____7851;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3941__auto____7855 = tcoll;
if(and__3941__auto____7855)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3941__auto____7855;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{return (function (){var or__3943__auto____7856 = (cljs.core._assoc_BANG_[goog.typeOf(tcoll)]);
if(or__3943__auto____7856)
{return or__3943__auto____7856;
} else
{var or__3943__auto____7857 = (cljs.core._assoc_BANG_["_"]);
if(or__3943__auto____7857)
{return or__3943__auto____7857;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
void 0;void 0;cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3941__auto____7861 = tcoll;
if(and__3941__auto____7861)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3941__auto____7861;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{return (function (){var or__3943__auto____7862 = (cljs.core._dissoc_BANG_[goog.typeOf(tcoll)]);
if(or__3943__auto____7862)
{return or__3943__auto____7862;
} else
{var or__3943__auto____7863 = (cljs.core._dissoc_BANG_["_"]);
if(or__3943__auto____7863)
{return or__3943__auto____7863;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
void 0;void 0;cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3941__auto____7867 = tcoll;
if(and__3941__auto____7867)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3941__auto____7867;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{return (function (){var or__3943__auto____7868 = (cljs.core._assoc_n_BANG_[goog.typeOf(tcoll)]);
if(or__3943__auto____7868)
{return or__3943__auto____7868;
} else
{var or__3943__auto____7869 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3943__auto____7869)
{return or__3943__auto____7869;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3941__auto____7873 = tcoll;
if(and__3941__auto____7873)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3941__auto____7873;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{return (function (){var or__3943__auto____7874 = (cljs.core._pop_BANG_[goog.typeOf(tcoll)]);
if(or__3943__auto____7874)
{return or__3943__auto____7874;
} else
{var or__3943__auto____7875 = (cljs.core._pop_BANG_["_"]);
if(or__3943__auto____7875)
{return or__3943__auto____7875;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
void 0;void 0;cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3941__auto____7879 = tcoll;
if(and__3941__auto____7879)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3941__auto____7879;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{return (function (){var or__3943__auto____7880 = (cljs.core._disjoin_BANG_[goog.typeOf(tcoll)]);
if(or__3943__auto____7880)
{return or__3943__auto____7880;
} else
{var or__3943__auto____7881 = (cljs.core._disjoin_BANG_["_"]);
if(or__3943__auto____7881)
{return or__3943__auto____7881;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
void 0;void 0;cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3941__auto____7885 = x;
if(and__3941__auto____7885)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3941__auto____7885;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{return (function (){var or__3943__auto____7886 = (cljs.core._compare[goog.typeOf(x)]);
if(or__3943__auto____7886)
{return or__3943__auto____7886;
} else
{var or__3943__auto____7887 = (cljs.core._compare["_"]);
if(or__3943__auto____7887)
{return or__3943__auto____7887;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
void 0;void 0;cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3941__auto____7891 = coll;
if(and__3941__auto____7891)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3941__auto____7891;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{return (function (){var or__3943__auto____7892 = (cljs.core._drop_first[goog.typeOf(coll)]);
if(or__3943__auto____7892)
{return or__3943__auto____7892;
} else
{var or__3943__auto____7893 = (cljs.core._drop_first["_"]);
if(or__3943__auto____7893)
{return or__3943__auto____7893;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3941__auto____7897 = coll;
if(and__3941__auto____7897)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3941__auto____7897;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{return (function (){var or__3943__auto____7898 = (cljs.core._chunked_first[goog.typeOf(coll)]);
if(or__3943__auto____7898)
{return or__3943__auto____7898;
} else
{var or__3943__auto____7899 = (cljs.core._chunked_first["_"]);
if(or__3943__auto____7899)
{return or__3943__auto____7899;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3941__auto____7903 = coll;
if(and__3941__auto____7903)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3941__auto____7903;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{return (function (){var or__3943__auto____7904 = (cljs.core._chunked_rest[goog.typeOf(coll)]);
if(or__3943__auto____7904)
{return or__3943__auto____7904;
} else
{var or__3943__auto____7905 = (cljs.core._chunked_rest["_"]);
if(or__3943__auto____7905)
{return or__3943__auto____7905;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;void 0;cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3941__auto____7909 = coll;
if(and__3941__auto____7909)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3941__auto____7909;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{return (function (){var or__3943__auto____7910 = (cljs.core._chunked_next[goog.typeOf(coll)]);
if(or__3943__auto____7910)
{return or__3943__auto____7910;
} else
{var or__3943__auto____7911 = (cljs.core._chunked_next["_"]);
if(or__3943__auto____7911)
{return or__3943__auto____7911;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
void 0;/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3943__auto____7913 = (x === y);
if(or__3943__auto____7913)
{return or__3943__auto____7913;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__7914__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__7915 = y;
var G__7916 = cljs.core.first.call(null,more);
var G__7917 = cljs.core.next.call(null,more);
x = G__7915;
y = G__7916;
more = G__7917;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__7914 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7914__delegate.call(this, x, y, more);
};
G__7914.cljs$lang$maxFixedArity = 2;
G__7914.cljs$lang$applyTo = (function (arglist__7918){
var x = cljs.core.first(arglist__7918);
var y = cljs.core.first(cljs.core.next(arglist__7918));
var more = cljs.core.rest(cljs.core.next(arglist__7918));
return G__7914__delegate(x, y, more);
});
G__7914.cljs$lang$arity$variadic = G__7914__delegate;
return G__7914;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__7919 = null;
var G__7919__2 = (function (o,k){
return null;
});
var G__7919__3 = (function (o,k,not_found){
return not_found;
});
G__7919 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__7919__2.call(this,o,k);
case 3:
return G__7919__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7919;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__7920 = null;
var G__7920__2 = (function (_,f){
return f.call(null);
});
var G__7920__3 = (function (_,f,start){
return start;
});
G__7920 = function(_,f,start){
switch(arguments.length){
case 2:
return G__7920__2.call(this,_,f);
case 3:
return G__7920__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7920;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__7921 = null;
var G__7921__2 = (function (_,n){
return null;
});
var G__7921__3 = (function (_,n,not_found){
return not_found;
});
G__7921 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__7921__2.call(this,_,n);
case 3:
return G__7921__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7921;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
void 0;
void 0;
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt__7934 = cljs.core._count.call(null,cicoll);
if((cnt__7934 === 0))
{return f.call(null);
} else
{var val__7935 = cljs.core._nth.call(null,cicoll,0);
var n__7936 = 1;
while(true){
if((n__7936 < cnt__7934))
{var nval__7937 = f.call(null,val__7935,cljs.core._nth.call(null,cicoll,n__7936));
if(cljs.core.reduced_QMARK_.call(null,nval__7937))
{return cljs.core.deref.call(null,nval__7937);
} else
{{
var G__7946 = nval__7937;
var G__7947 = (n__7936 + 1);
val__7935 = G__7946;
n__7936 = G__7947;
continue;
}
}
} else
{return val__7935;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt__7938 = cljs.core._count.call(null,cicoll);
var val__7939 = val;
var n__7940 = 0;
while(true){
if((n__7940 < cnt__7938))
{var nval__7941 = f.call(null,val__7939,cljs.core._nth.call(null,cicoll,n__7940));
if(cljs.core.reduced_QMARK_.call(null,nval__7941))
{return cljs.core.deref.call(null,nval__7941);
} else
{{
var G__7948 = nval__7941;
var G__7949 = (n__7940 + 1);
val__7939 = G__7948;
n__7940 = G__7949;
continue;
}
}
} else
{return val__7939;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt__7942 = cljs.core._count.call(null,cicoll);
var val__7943 = val;
var n__7944 = idx;
while(true){
if((n__7944 < cnt__7942))
{var nval__7945 = f.call(null,val__7943,cljs.core._nth.call(null,cicoll,n__7944));
if(cljs.core.reduced_QMARK_.call(null,nval__7945))
{return cljs.core.deref.call(null,nval__7945);
} else
{{
var G__7950 = nval__7945;
var G__7951 = (n__7944 + 1);
val__7943 = G__7950;
n__7944 = G__7951;
continue;
}
}
} else
{return val__7943;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt__7964 = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val__7965 = (arr[0]);
var n__7966 = 1;
while(true){
if((n__7966 < cnt__7964))
{var nval__7967 = f.call(null,val__7965,(arr[n__7966]));
if(cljs.core.reduced_QMARK_.call(null,nval__7967))
{return cljs.core.deref.call(null,nval__7967);
} else
{{
var G__7976 = nval__7967;
var G__7977 = (n__7966 + 1);
val__7965 = G__7976;
n__7966 = G__7977;
continue;
}
}
} else
{return val__7965;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt__7968 = arr.length;
var val__7969 = val;
var n__7970 = 0;
while(true){
if((n__7970 < cnt__7968))
{var nval__7971 = f.call(null,val__7969,(arr[n__7970]));
if(cljs.core.reduced_QMARK_.call(null,nval__7971))
{return cljs.core.deref.call(null,nval__7971);
} else
{{
var G__7978 = nval__7971;
var G__7979 = (n__7970 + 1);
val__7969 = G__7978;
n__7970 = G__7979;
continue;
}
}
} else
{return val__7969;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt__7972 = arr.length;
var val__7973 = val;
var n__7974 = idx;
while(true){
if((n__7974 < cnt__7972))
{var nval__7975 = f.call(null,val__7973,(arr[n__7974]));
if(cljs.core.reduced_QMARK_.call(null,nval__7975))
{return cljs.core.deref.call(null,nval__7975);
} else
{{
var G__7980 = nval__7975;
var G__7981 = (n__7974 + 1);
val__7973 = G__7980;
n__7974 = G__7981;
continue;
}
}
} else
{return val__7973;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199546;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__7982 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var this__7983 = this;
if(((this__7983.i + 1) < this__7983.a.length))
{return (new cljs.core.IndexedSeq(this__7983.a,(this__7983.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__7984 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__7985 = this;
var c__7986 = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c__7986 > 0))
{return (new cljs.core.RSeq(coll,(c__7986 - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__7987 = this;
var this__7988 = this;
return cljs.core.pr_str.call(null,this__7988);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__7989 = this;
if(cljs.core.counted_QMARK_.call(null,this__7989.a))
{return cljs.core.ci_reduce.call(null,this__7989.a,f,(this__7989.a[this__7989.i]),(this__7989.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(this__7989.a[this__7989.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__7990 = this;
if(cljs.core.counted_QMARK_.call(null,this__7990.a))
{return cljs.core.ci_reduce.call(null,this__7990.a,f,start,this__7990.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__7991 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__7992 = this;
return (this__7992.a.length - this__7992.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var this__7993 = this;
return (this__7993.a[this__7993.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var this__7994 = this;
if(((this__7994.i + 1) < this__7994.a.length))
{return (new cljs.core.IndexedSeq(this__7994.a,(this__7994.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__7995 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__7996 = this;
var i__7997 = (n + this__7996.i);
if((i__7997 < this__7996.a.length))
{return (this__7996.a[i__7997]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__7998 = this;
var i__7999 = (n + this__7998.i);
if((i__7999 < this__7998.a.length))
{return (this__7998.a[i__7999]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((prim.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw('Invalid arity: ' + arguments.length);
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw('Invalid arity: ' + arguments.length);
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__8000 = null;
var G__8000__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8000__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8000 = function(array,f,start){
switch(arguments.length){
case 2:
return G__8000__2.call(this,array,f);
case 3:
return G__8000__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8000;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8001 = null;
var G__8001__2 = (function (array,k){
return (array[k]);
});
var G__8001__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8001 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__8001__2.call(this,array,k);
case 3:
return G__8001__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8001;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8002 = null;
var G__8002__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__8002__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__8002 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__8002__2.call(this,array,n);
case 3:
return G__8002__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8002;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8003 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8004 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var this__8005 = this;
var this__8006 = this;
return cljs.core.pr_str.call(null,this__8006);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8007 = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8008 = this;
return (this__8008.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8009 = this;
return cljs.core._nth.call(null,this__8009.ci,this__8009.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8010 = this;
if((this__8010.i > 0))
{return (new cljs.core.RSeq(this__8010.ci,(this__8010.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8011 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var this__8012 = this;
return (new cljs.core.RSeq(this__8012.ci,this__8012.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8013 = this;
return this__8013.meta;
});
cljs.core.RSeq;
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8017__8018 = coll;
if(G__8017__8018)
{if((function (){var or__3943__auto____8019 = (G__8017__8018.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3943__auto____8019)
{return or__3943__auto____8019;
} else
{return G__8017__8018.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__8017__8018.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8017__8018);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__8017__8018);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8024__8025 = coll;
if(G__8024__8025)
{if((function (){var or__3943__auto____8026 = (G__8024__8025.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____8026)
{return or__3943__auto____8026;
} else
{return G__8024__8025.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8024__8025.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8024__8025);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8024__8025);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s__8027 = cljs.core.seq.call(null,coll);
if((s__8027 == null))
{return null;
} else
{return cljs.core._first.call(null,s__8027);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__8032__8033 = coll;
if(G__8032__8033)
{if((function (){var or__3943__auto____8034 = (G__8032__8033.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____8034)
{return or__3943__auto____8034;
} else
{return G__8032__8033.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8032__8033.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8032__8033);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8032__8033);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s__8035 = cljs.core.seq.call(null,coll);
if(!((s__8035 == null)))
{return cljs.core._rest.call(null,s__8035);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__8039__8040 = coll;
if(G__8039__8040)
{if((function (){var or__3943__auto____8041 = (G__8039__8040.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3943__auto____8041)
{return or__3943__auto____8041;
} else
{return G__8039__8040.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__8039__8040.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8039__8040);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__8039__8040);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn__8043 = cljs.core.next.call(null,s);
if(!((sn__8043 == null)))
{{
var G__8044 = sn__8043;
s = G__8044;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__8045__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8046 = conj.call(null,coll,x);
var G__8047 = cljs.core.first.call(null,xs);
var G__8048 = cljs.core.next.call(null,xs);
coll = G__8046;
x = G__8047;
xs = G__8048;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8045 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8045__delegate.call(this, coll, x, xs);
};
G__8045.cljs$lang$maxFixedArity = 2;
G__8045.cljs$lang$applyTo = (function (arglist__8049){
var coll = cljs.core.first(arglist__8049);
var x = cljs.core.first(cljs.core.next(arglist__8049));
var xs = cljs.core.rest(cljs.core.next(arglist__8049));
return G__8045__delegate(coll, x, xs);
});
G__8045.cljs$lang$arity$variadic = G__8045__delegate;
return G__8045;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
void 0;
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s__8052 = cljs.core.seq.call(null,coll);
var acc__8053 = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s__8052))
{return (acc__8053 + cljs.core._count.call(null,s__8052));
} else
{{
var G__8054 = cljs.core.next.call(null,s__8052);
var G__8055 = (acc__8053 + 1);
s__8052 = G__8054;
acc__8053 = G__8055;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
void 0;
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1));
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{return linear_traversal_nth.call(null,cljs.core.next.call(null,coll),(n - 1),not_found);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__8062__8063 = coll;
if(G__8062__8063)
{if((function (){var or__3943__auto____8064 = (G__8062__8063.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____8064)
{return or__3943__auto____8064;
} else
{return G__8062__8063.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8062__8063.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8062__8063);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8062__8063);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__8065__8066 = coll;
if(G__8065__8066)
{if((function (){var or__3943__auto____8067 = (G__8065__8066.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____8067)
{return or__3943__auto____8067;
} else
{return G__8065__8066.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8065__8066.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8065__8066);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8065__8066);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__8070__delegate = function (coll,k,v,kvs){
while(true){
var ret__8069 = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__8071 = ret__8069;
var G__8072 = cljs.core.first.call(null,kvs);
var G__8073 = cljs.core.second.call(null,kvs);
var G__8074 = cljs.core.nnext.call(null,kvs);
coll = G__8071;
k = G__8072;
v = G__8073;
kvs = G__8074;
continue;
}
} else
{return ret__8069;
}
break;
}
};
var G__8070 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8070__delegate.call(this, coll, k, v, kvs);
};
G__8070.cljs$lang$maxFixedArity = 3;
G__8070.cljs$lang$applyTo = (function (arglist__8075){
var coll = cljs.core.first(arglist__8075);
var k = cljs.core.first(cljs.core.next(arglist__8075));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8075)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8075)));
return G__8070__delegate(coll, k, v, kvs);
});
G__8070.cljs$lang$arity$variadic = G__8070__delegate;
return G__8070;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__8078__delegate = function (coll,k,ks){
while(true){
var ret__8077 = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8079 = ret__8077;
var G__8080 = cljs.core.first.call(null,ks);
var G__8081 = cljs.core.next.call(null,ks);
coll = G__8079;
k = G__8080;
ks = G__8081;
continue;
}
} else
{return ret__8077;
}
break;
}
};
var G__8078 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8078__delegate.call(this, coll, k, ks);
};
G__8078.cljs$lang$maxFixedArity = 2;
G__8078.cljs$lang$applyTo = (function (arglist__8082){
var coll = cljs.core.first(arglist__8082);
var k = cljs.core.first(cljs.core.next(arglist__8082));
var ks = cljs.core.rest(cljs.core.next(arglist__8082));
return G__8078__delegate(coll, k, ks);
});
G__8078.cljs$lang$arity$variadic = G__8078__delegate;
return G__8078;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__8086__8087 = o;
if(G__8086__8087)
{if((function (){var or__3943__auto____8088 = (G__8086__8087.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____8088)
{return or__3943__auto____8088;
} else
{return G__8086__8087.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__8086__8087.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8086__8087);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__8086__8087);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__8091__delegate = function (coll,k,ks){
while(true){
var ret__8090 = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__8092 = ret__8090;
var G__8093 = cljs.core.first.call(null,ks);
var G__8094 = cljs.core.next.call(null,ks);
coll = G__8092;
k = G__8093;
ks = G__8094;
continue;
}
} else
{return ret__8090;
}
break;
}
};
var G__8091 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8091__delegate.call(this, coll, k, ks);
};
G__8091.cljs$lang$maxFixedArity = 2;
G__8091.cljs$lang$applyTo = (function (arglist__8095){
var coll = cljs.core.first(arglist__8095);
var k = cljs.core.first(cljs.core.next(arglist__8095));
var ks = cljs.core.rest(cljs.core.next(arglist__8095));
return G__8091__delegate(coll, k, ks);
});
G__8091.cljs$lang$arity$variadic = G__8091__delegate;
return G__8091;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h__8097 = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h__8097);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h__8097;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h__8099 = (cljs.core.string_hash_cache[k]);
if(!((h__8099 == null)))
{return h__8099;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3941__auto____8101 = goog.isString(o);
if(and__3941__auto____8101)
{return check_cache;
} else
{return and__3941__auto____8101;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw('Invalid arity: ' + arguments.length);
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8105__8106 = x;
if(G__8105__8106)
{if((function (){var or__3943__auto____8107 = (G__8105__8106.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto____8107)
{return or__3943__auto____8107;
} else
{return G__8105__8106.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__8105__8106.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8105__8106);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__8105__8106);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8111__8112 = x;
if(G__8111__8112)
{if((function (){var or__3943__auto____8113 = (G__8111__8112.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto____8113)
{return or__3943__auto____8113;
} else
{return G__8111__8112.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__8111__8112.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8111__8112);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__8111__8112);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__8117__8118 = x;
if(G__8117__8118)
{if((function (){var or__3943__auto____8119 = (G__8117__8118.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3943__auto____8119)
{return or__3943__auto____8119;
} else
{return G__8117__8118.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__8117__8118.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8117__8118);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__8117__8118);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__8123__8124 = x;
if(G__8123__8124)
{if((function (){var or__3943__auto____8125 = (G__8123__8124.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto____8125)
{return or__3943__auto____8125;
} else
{return G__8123__8124.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__8123__8124.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8123__8124);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__8123__8124);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__8129__8130 = x;
if(G__8129__8130)
{if((function (){var or__3943__auto____8131 = (G__8129__8130.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3943__auto____8131)
{return or__3943__auto____8131;
} else
{return G__8129__8130.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__8129__8130.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8129__8130);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__8129__8130);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__8135__8136 = x;
if(G__8135__8136)
{if((function (){var or__3943__auto____8137 = (G__8135__8136.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto____8137)
{return or__3943__auto____8137;
} else
{return G__8135__8136.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__8135__8136.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8135__8136);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__8135__8136);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__8141__8142 = x;
if(G__8141__8142)
{if((function (){var or__3943__auto____8143 = (G__8141__8142.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____8143)
{return or__3943__auto____8143;
} else
{return G__8141__8142.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8141__8142.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8141__8142);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8141__8142);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__8147__8148 = x;
if(G__8147__8148)
{if((function (){var or__3943__auto____8149 = (G__8147__8148.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto____8149)
{return or__3943__auto____8149;
} else
{return G__8147__8148.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__8147__8148.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8147__8148);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__8147__8148);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__8153__8154 = x;
if(G__8153__8154)
{if((function (){var or__3943__auto____8155 = (G__8153__8154.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto____8155)
{return or__3943__auto____8155;
} else
{return G__8153__8154.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__8153__8154.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8153__8154);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__8153__8154);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__8159__8160 = x;
if(G__8159__8160)
{if(cljs.core.truth_((function (){var or__3943__auto____8161 = null;
if(cljs.core.truth_(or__3943__auto____8161))
{return or__3943__auto____8161;
} else
{return G__8159__8160.cljs$core$IChunkedSeq$;
}
})()))
{return true;
} else
{if((!G__8159__8160.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8159__8160);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__8159__8160);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__8162__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__8162 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8162__delegate.call(this, keyvals);
};
G__8162.cljs$lang$maxFixedArity = 0;
G__8162.cljs$lang$applyTo = (function (arglist__8163){
var keyvals = cljs.core.seq(arglist__8163);;
return G__8162__delegate(keyvals);
});
G__8162.cljs$lang$arity$variadic = G__8162__delegate;
return G__8162;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(falsecljs.core.array_seq(arguments, 0));
}
throw('Invalid arity: ' + arguments.length);
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys__8165 = [];
goog.object.forEach(obj,(function (val,key,obj){
return keys__8165.push(key);
}));
return keys__8165;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__8169 = i;
var j__8170 = j;
var len__8171 = len;
while(true){
if((len__8171 === 0))
{return to;
} else
{(to[j__8170] = (from[i__8169]));
{
var G__8172 = (i__8169 + 1);
var G__8173 = (j__8170 + 1);
var G__8174 = (len__8171 - 1);
i__8169 = G__8172;
j__8170 = G__8173;
len__8171 = G__8174;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__8178 = (i + (len - 1));
var j__8179 = (j + (len - 1));
var len__8180 = len;
while(true){
if((len__8180 === 0))
{return to;
} else
{(to[j__8179] = (from[i__8178]));
{
var G__8181 = (i__8178 - 1);
var G__8182 = (j__8179 - 1);
var G__8183 = (len__8180 - 1);
i__8178 = G__8181;
j__8179 = G__8182;
len__8180 = G__8183;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__8187__8188 = s;
if(G__8187__8188)
{if((function (){var or__3943__auto____8189 = (G__8187__8188.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____8189)
{return or__3943__auto____8189;
} else
{return G__8187__8188.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8187__8188.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8187__8188);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8187__8188);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__8193__8194 = s;
if(G__8193__8194)
{if((function (){var or__3943__auto____8195 = (G__8193__8194.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____8195)
{return or__3943__auto____8195;
} else
{return G__8193__8194.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__8193__8194.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8193__8194);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__8193__8194);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3941__auto____8198 = goog.isString(x);
if(and__3941__auto____8198)
{return !((function (){var or__3943__auto____8199 = (x.charAt(0) === "\uFDD0");
if(or__3943__auto____8199)
{return or__3943__auto____8199;
} else
{return (x.charAt(0) === "\uFDD1");
}
})());
} else
{return and__3941__auto____8198;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3941__auto____8201 = goog.isString(x);
if(and__3941__auto____8201)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3941__auto____8201;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3941__auto____8203 = goog.isString(x);
if(and__3941__auto____8203)
{return (x.charAt(0) === "\uFDD1");
} else
{return and__3941__auto____8203;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3943__auto____8208 = cljs.core.fn_QMARK_.call(null,f);
if(or__3943__auto____8208)
{return or__3943__auto____8208;
} else
{var G__8209__8210 = f;
if(G__8209__8210)
{if((function (){var or__3943__auto____8211 = (G__8209__8210.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3943__auto____8211)
{return or__3943__auto____8211;
} else
{return G__8209__8210.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__8209__8210.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8209__8210);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__8209__8210);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3941__auto____8213 = cljs.core.number_QMARK_.call(null,n);
if(and__3941__auto____8213)
{return (n == n.toFixed());
} else
{return and__3941__auto____8213;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3941__auto____8216 = coll;
if(cljs.core.truth_(and__3941__auto____8216))
{var and__3941__auto____8217 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3941__auto____8217)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3941__auto____8217;
}
} else
{return and__3941__auto____8216;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__8226__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s__8222 = cljs.core.set([y,x]);
var xs__8223 = more;
while(true){
var x__8224 = cljs.core.first.call(null,xs__8223);
var etc__8225 = cljs.core.next.call(null,xs__8223);
if(cljs.core.truth_(xs__8223))
{if(cljs.core.contains_QMARK_.call(null,s__8222,x__8224))
{return false;
} else
{{
var G__8227 = cljs.core.conj.call(null,s__8222,x__8224);
var G__8228 = etc__8225;
s__8222 = G__8227;
xs__8223 = G__8228;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__8226 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8226__delegate.call(this, x, y, more);
};
G__8226.cljs$lang$maxFixedArity = 2;
G__8226.cljs$lang$applyTo = (function (arglist__8229){
var x = cljs.core.first(arglist__8229);
var y = cljs.core.first(cljs.core.next(arglist__8229));
var more = cljs.core.rest(cljs.core.next(arglist__8229));
return G__8226__delegate(x, y, more);
});
G__8226.cljs$lang$arity$variadic = G__8226__delegate;
return G__8226;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__8233__8234 = x;
if(G__8233__8234)
{if(cljs.core.truth_((function (){var or__3943__auto____8235 = null;
if(cljs.core.truth_(or__3943__auto____8235))
{return or__3943__auto____8235;
} else
{return G__8233__8234.cljs$core$IComparable$;
}
})()))
{return true;
} else
{if((!G__8233__8234.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8233__8234);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__8233__8234);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl__8240 = cljs.core.count.call(null,xs);
var yl__8241 = cljs.core.count.call(null,ys);
if((xl__8240 < yl__8241))
{return -1;
} else
{if((xl__8240 > yl__8241))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl__8240,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d__8242 = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3941__auto____8243 = (d__8242 === 0);
if(and__3941__auto____8243)
{return ((n + 1) < len);
} else
{return and__3941__auto____8243;
}
})())
{{
var G__8244 = xs;
var G__8245 = ys;
var G__8246 = len;
var G__8247 = (n + 1);
xs = G__8244;
ys = G__8245;
len = G__8246;
n = G__8247;
continue;
}
} else
{return d__8242;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw('Invalid arity: ' + arguments.length);
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__8249 = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r__8249))
{return r__8249;
} else
{if(cljs.core.truth_(r__8249))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a__8251 = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a__8251,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8251);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4090__auto____8257 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____8257)
{var s__8258 = temp__4090__auto____8257;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8258),cljs.core.next.call(null,s__8258));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__8259 = val;
var coll__8260 = cljs.core.seq.call(null,coll);
while(true){
if(coll__8260)
{var nval__8261 = f.call(null,val__8259,cljs.core.first.call(null,coll__8260));
if(cljs.core.reduced_QMARK_.call(null,nval__8261))
{return cljs.core.deref.call(null,nval__8261);
} else
{{
var G__8262 = nval__8261;
var G__8263 = cljs.core.next.call(null,coll__8260);
val__8259 = G__8262;
coll__8260 = G__8263;
continue;
}
}
} else
{return val__8259;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
void 0;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a__8265 = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a__8265);
return cljs.core.vec.call(null,a__8265);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__8272__8273 = coll;
if(G__8272__8273)
{if((function (){var or__3943__auto____8274 = (G__8272__8273.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____8274)
{return or__3943__auto____8274;
} else
{return G__8272__8273.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8272__8273.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8272__8273);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8272__8273);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__8275__8276 = coll;
if(G__8275__8276)
{if((function (){var or__3943__auto____8277 = (G__8275__8276.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto____8277)
{return or__3943__auto____8277;
} else
{return G__8275__8276.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__8275__8276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8275__8276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__8275__8276);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var this__8278 = this;
return this__8278.val;
});
cljs.core.Reduced;
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__8279__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8279 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8279__delegate.call(this, x, y, more);
};
G__8279.cljs$lang$maxFixedArity = 2;
G__8279.cljs$lang$applyTo = (function (arglist__8280){
var x = cljs.core.first(arglist__8280);
var y = cljs.core.first(cljs.core.next(arglist__8280));
var more = cljs.core.rest(cljs.core.next(arglist__8280));
return G__8279__delegate(x, y, more);
});
G__8279.cljs$lang$arity$variadic = G__8279__delegate;
return G__8279;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__8281__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8281 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8281__delegate.call(this, x, y, more);
};
G__8281.cljs$lang$maxFixedArity = 2;
G__8281.cljs$lang$applyTo = (function (arglist__8282){
var x = cljs.core.first(arglist__8282);
var y = cljs.core.first(cljs.core.next(arglist__8282));
var more = cljs.core.rest(cljs.core.next(arglist__8282));
return G__8281__delegate(x, y, more);
});
G__8281.cljs$lang$arity$variadic = G__8281__delegate;
return G__8281;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__8283__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8283 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8283__delegate.call(this, x, y, more);
};
G__8283.cljs$lang$maxFixedArity = 2;
G__8283.cljs$lang$applyTo = (function (arglist__8284){
var x = cljs.core.first(arglist__8284);
var y = cljs.core.first(cljs.core.next(arglist__8284));
var more = cljs.core.rest(cljs.core.next(arglist__8284));
return G__8283__delegate(x, y, more);
});
G__8283.cljs$lang$arity$variadic = G__8283__delegate;
return G__8283;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__8285__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8285 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8285__delegate.call(this, x, y, more);
};
G__8285.cljs$lang$maxFixedArity = 2;
G__8285.cljs$lang$applyTo = (function (arglist__8286){
var x = cljs.core.first(arglist__8286);
var y = cljs.core.first(cljs.core.next(arglist__8286));
var more = cljs.core.rest(cljs.core.next(arglist__8286));
return G__8285__delegate(x, y, more);
});
G__8285.cljs$lang$arity$variadic = G__8285__delegate;
return G__8285;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__8287__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__8288 = y;
var G__8289 = cljs.core.first.call(null,more);
var G__8290 = cljs.core.next.call(null,more);
x = G__8288;
y = G__8289;
more = G__8290;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8287 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8287__delegate.call(this, x, y, more);
};
G__8287.cljs$lang$maxFixedArity = 2;
G__8287.cljs$lang$applyTo = (function (arglist__8291){
var x = cljs.core.first(arglist__8291);
var y = cljs.core.first(cljs.core.next(arglist__8291));
var more = cljs.core.rest(cljs.core.next(arglist__8291));
return G__8287__delegate(x, y, more);
});
G__8287.cljs$lang$arity$variadic = G__8287__delegate;
return G__8287;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__8292__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__8293 = y;
var G__8294 = cljs.core.first.call(null,more);
var G__8295 = cljs.core.next.call(null,more);
x = G__8293;
y = G__8294;
more = G__8295;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8292 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8292__delegate.call(this, x, y, more);
};
G__8292.cljs$lang$maxFixedArity = 2;
G__8292.cljs$lang$applyTo = (function (arglist__8296){
var x = cljs.core.first(arglist__8296);
var y = cljs.core.first(cljs.core.next(arglist__8296));
var more = cljs.core.rest(cljs.core.next(arglist__8296));
return G__8292__delegate(x, y, more);
});
G__8292.cljs$lang$arity$variadic = G__8292__delegate;
return G__8292;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__8297__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__8298 = y;
var G__8299 = cljs.core.first.call(null,more);
var G__8300 = cljs.core.next.call(null,more);
x = G__8298;
y = G__8299;
more = G__8300;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8297 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8297__delegate.call(this, x, y, more);
};
G__8297.cljs$lang$maxFixedArity = 2;
G__8297.cljs$lang$applyTo = (function (arglist__8301){
var x = cljs.core.first(arglist__8301);
var y = cljs.core.first(cljs.core.next(arglist__8301));
var more = cljs.core.rest(cljs.core.next(arglist__8301));
return G__8297__delegate(x, y, more);
});
G__8297.cljs$lang$arity$variadic = G__8297__delegate;
return G__8297;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__8302__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__8303 = y;
var G__8304 = cljs.core.first.call(null,more);
var G__8305 = cljs.core.next.call(null,more);
x = G__8303;
y = G__8304;
more = G__8305;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8302 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8302__delegate.call(this, x, y, more);
};
G__8302.cljs$lang$maxFixedArity = 2;
G__8302.cljs$lang$applyTo = (function (arglist__8306){
var x = cljs.core.first(arglist__8306);
var y = cljs.core.first(cljs.core.next(arglist__8306));
var more = cljs.core.rest(cljs.core.next(arglist__8306));
return G__8302__delegate(x, y, more);
});
G__8302.cljs$lang$arity$variadic = G__8302__delegate;
return G__8302;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__8307__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8307 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8307__delegate.call(this, x, y, more);
};
G__8307.cljs$lang$maxFixedArity = 2;
G__8307.cljs$lang$applyTo = (function (arglist__8308){
var x = cljs.core.first(arglist__8308);
var y = cljs.core.first(cljs.core.next(arglist__8308));
var more = cljs.core.rest(cljs.core.next(arglist__8308));
return G__8307__delegate(x, y, more);
});
G__8307.cljs$lang$arity$variadic = G__8307__delegate;
return G__8307;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__8309__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8309 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8309__delegate.call(this, x, y, more);
};
G__8309.cljs$lang$maxFixedArity = 2;
G__8309.cljs$lang$applyTo = (function (arglist__8310){
var x = cljs.core.first(arglist__8310);
var y = cljs.core.first(cljs.core.next(arglist__8310));
var more = cljs.core.rest(cljs.core.next(arglist__8310));
return G__8309__delegate(x, y, more);
});
G__8309.cljs$lang$arity$variadic = G__8309__delegate;
return G__8309;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__8312 = (n % d);
return cljs.core.fix.call(null,((n - rem__8312) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8314 = cljs.core.quot.call(null,n,d);
return (n - (d * q__8314));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__8317 = (v - ((v >> 1) & 1431655765));
var v__8318 = ((v__8317 & 858993459) + ((v__8317 >> 2) & 858993459));
return ((((v__8318 + (v__8318 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__8319__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__8320 = y;
var G__8321 = cljs.core.first.call(null,more);
var G__8322 = cljs.core.next.call(null,more);
x = G__8320;
y = G__8321;
more = G__8322;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8319 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8319__delegate.call(this, x, y, more);
};
G__8319.cljs$lang$maxFixedArity = 2;
G__8319.cljs$lang$applyTo = (function (arglist__8323){
var x = cljs.core.first(arglist__8323);
var y = cljs.core.first(cljs.core.next(arglist__8323));
var more = cljs.core.rest(cljs.core.next(arglist__8323));
return G__8319__delegate(x, y, more);
});
G__8319.cljs$lang$arity$variadic = G__8319__delegate;
return G__8319;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__8327 = n;
var xs__8328 = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8329 = xs__8328;
if(and__3941__auto____8329)
{return (n__8327 > 0);
} else
{return and__3941__auto____8329;
}
})()))
{{
var G__8330 = (n__8327 - 1);
var G__8331 = cljs.core.next.call(null,xs__8328);
n__8327 = G__8330;
xs__8328 = G__8331;
continue;
}
} else
{return xs__8328;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__8332__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8333 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8334 = cljs.core.next.call(null,more);
sb = G__8333;
more = G__8334;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8332 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8332__delegate.call(this, x, ys);
};
G__8332.cljs$lang$maxFixedArity = 1;
G__8332.cljs$lang$applyTo = (function (arglist__8335){
var x = cljs.core.first(arglist__8335);
var ys = cljs.core.rest(arglist__8335);
return G__8332__delegate(x, ys);
});
G__8332.cljs$lang$arity$variadic = G__8332__delegate;
return G__8332;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.symbol_QMARK_.call(null,x))
{return x.substring(2,x.length);
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__8336__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8337 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__8338 = cljs.core.next.call(null,more);
sb = G__8337;
more = G__8338;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__8336 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8336__delegate.call(this, x, ys);
};
G__8336.cljs$lang$maxFixedArity = 1;
G__8336.cljs$lang$applyTo = (function (arglist__8339){
var x = cljs.core.first(arglist__8339);
var ys = cljs.core.rest(arglist__8339);
return G__8336__delegate(x, ys);
});
G__8336.cljs$lang$arity$variadic = G__8336__delegate;
return G__8336;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{name;
} else
{if(cljs.core.keyword_QMARK_.call(null,name))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8342 = cljs.core.seq.call(null,x);
var ys__8343 = cljs.core.seq.call(null,y);
while(true){
if((xs__8342 == null))
{return (ys__8343 == null);
} else
{if((ys__8343 == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8342),cljs.core.first.call(null,ys__8343)))
{{
var G__8344 = cljs.core.next.call(null,xs__8342);
var G__8345 = cljs.core.next.call(null,ys__8343);
xs__8342 = G__8344;
ys__8343 = G__8345;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__8346_SHARP_,p2__8347_SHARP_){
return cljs.core.hash_combine.call(null,p1__8346_SHARP_,cljs.core.hash.call(null,p2__8347_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
void 0;
void 0;
cljs.core.hash_imap = (function hash_imap(m){
var h__8351 = 0;
var s__8352 = cljs.core.seq.call(null,m);
while(true){
if(s__8352)
{var e__8353 = cljs.core.first.call(null,s__8352);
{
var G__8354 = ((h__8351 + (cljs.core.hash.call(null,cljs.core.key.call(null,e__8353)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e__8353)))) % 4503599627370496);
var G__8355 = cljs.core.next.call(null,s__8352);
h__8351 = G__8354;
s__8352 = G__8355;
continue;
}
} else
{return h__8351;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h__8359 = 0;
var s__8360 = cljs.core.seq.call(null,s);
while(true){
if(s__8360)
{var e__8361 = cljs.core.first.call(null,s__8360);
{
var G__8362 = ((h__8359 + cljs.core.hash.call(null,e__8361)) % 4503599627370496);
var G__8363 = cljs.core.next.call(null,s__8360);
h__8359 = G__8362;
s__8360 = G__8363;
continue;
}
} else
{return h__8359;
}
break;
}
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8384__8385 = cljs.core.seq.call(null,fn_map);
if(G__8384__8385)
{var G__8387__8389 = cljs.core.first.call(null,G__8384__8385);
var vec__8388__8390 = G__8387__8389;
var key_name__8391 = cljs.core.nth.call(null,vec__8388__8390,0,null);
var f__8392 = cljs.core.nth.call(null,vec__8388__8390,1,null);
var G__8384__8393 = G__8384__8385;
var G__8387__8394 = G__8387__8389;
var G__8384__8395 = G__8384__8393;
while(true){
var vec__8396__8397 = G__8387__8394;
var key_name__8398 = cljs.core.nth.call(null,vec__8396__8397,0,null);
var f__8399 = cljs.core.nth.call(null,vec__8396__8397,1,null);
var G__8384__8400 = G__8384__8395;
var str_name__8401 = cljs.core.name.call(null,key_name__8398);
(obj[str_name__8401] = f__8399);
var temp__4092__auto____8402 = cljs.core.next.call(null,G__8384__8400);
if(temp__4092__auto____8402)
{var G__8384__8403 = temp__4092__auto____8402;
{
var G__8404 = cljs.core.first.call(null,G__8384__8403);
var G__8405 = G__8384__8403;
G__8387__8394 = G__8404;
G__8384__8395 = G__8405;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8406 = this;
var h__2213__auto____8407 = this__8406.__hash;
if(!((h__2213__auto____8407 == null)))
{return h__2213__auto____8407;
} else
{var h__2213__auto____8408 = cljs.core.hash_coll.call(null,coll);
this__8406.__hash = h__2213__auto____8408;
return h__2213__auto____8408;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8409 = this;
if((this__8409.count === 1))
{return null;
} else
{return this__8409.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8410 = this;
return (new cljs.core.List(this__8410.meta,o,coll,(this__8410.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var this__8411 = this;
var this__8412 = this;
return cljs.core.pr_str.call(null,this__8412);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8413 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8414 = this;
return this__8414.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8415 = this;
return this__8415.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8416 = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8417 = this;
return this__8417.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8418 = this;
if((this__8418.count === 1))
{return cljs.core.List.EMPTY;
} else
{return this__8418.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8419 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8420 = this;
return (new cljs.core.List(meta,this__8420.first,this__8420.rest,this__8420.count,this__8420.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8421 = this;
return this__8421.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8422 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8423 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8424 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8425 = this;
return (new cljs.core.List(this__8425.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__8426 = this;
var this__8427 = this;
return cljs.core.pr_str.call(null,this__8427);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8428 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__8429 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__8430 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__8431 = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8432 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8433 = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8434 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8435 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8436 = this;
return this__8436.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8437 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__8441__8442 = coll;
if(G__8441__8442)
{if((function (){var or__3943__auto____8443 = (G__8441__8442.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3943__auto____8443)
{return or__3943__auto____8443;
} else
{return G__8441__8442.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__8441__8442.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8441__8442);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__8441__8442);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__8444__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__8444 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8444__delegate.call(this, x, y, z, items);
};
G__8444.cljs$lang$maxFixedArity = 3;
G__8444.cljs$lang$applyTo = (function (arglist__8445){
var x = cljs.core.first(arglist__8445);
var y = cljs.core.first(cljs.core.next(arglist__8445));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8445)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8445)));
return G__8444__delegate(x, y, z, items);
});
G__8444.cljs$lang$arity$variadic = G__8444__delegate;
return G__8444;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8446 = this;
var h__2213__auto____8447 = this__8446.__hash;
if(!((h__2213__auto____8447 == null)))
{return h__2213__auto____8447;
} else
{var h__2213__auto____8448 = cljs.core.hash_coll.call(null,coll);
this__8446.__hash = h__2213__auto____8448;
return h__2213__auto____8448;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8449 = this;
if((this__8449.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,this__8449.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8450 = this;
return (new cljs.core.Cons(null,o,coll,this__8450.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var this__8451 = this;
var this__8452 = this;
return cljs.core.pr_str.call(null,this__8452);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8453 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8454 = this;
return this__8454.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8455 = this;
if((this__8455.rest == null))
{return cljs.core.List.EMPTY;
} else
{return this__8455.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8456 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8457 = this;
return (new cljs.core.Cons(meta,this__8457.first,this__8457.rest,this__8457.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8458 = this;
return this__8458.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8459 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8459.meta);
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3943__auto____8464 = (coll == null);
if(or__3943__auto____8464)
{return or__3943__auto____8464;
} else
{var G__8465__8466 = coll;
if(G__8465__8466)
{if((function (){var or__3943__auto____8467 = (G__8465__8466.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____8467)
{return or__3943__auto____8467;
} else
{return G__8465__8466.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__8465__8466.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8465__8466);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__8465__8466);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__8471__8472 = x;
if(G__8471__8472)
{if((function (){var or__3943__auto____8473 = (G__8471__8472.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto____8473)
{return or__3943__auto____8473;
} else
{return G__8471__8472.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__8471__8472.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8471__8472);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__8471__8472);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__8474 = null;
var G__8474__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8474__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8474 = function(string,f,start){
switch(arguments.length){
case 2:
return G__8474__2.call(this,string,f);
case 3:
return G__8474__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8474;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8475 = null;
var G__8475__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8475__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8475 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__8475__2.call(this,string,k);
case 3:
return G__8475__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8475;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8476 = null;
var G__8476__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__8476__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8476 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__8476__2.call(this,string,n);
case 3:
return G__8476__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8476;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function (this_sym8479,coll){
var this__8480 = this;
var this_sym8479__8481 = this;
var ___8482 = this_sym8479__8481;
if((coll == null))
{return null;
} else
{var strobj__8483 = coll.strobj;
if((strobj__8483 == null))
{return cljs.core._lookup.call(null,coll,this__8480.k,null);
} else
{return (strobj__8483[this__8480.k]);
}
}
});
cljs.core.Keyword.prototype.apply = (function (this_sym8477,args8478){
var this__8484 = this;
return this_sym8477.call.apply(this_sym8477,[this_sym8477].concat(args8478.slice()));
});
cljs.core.Keyword;
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__8493 = null;
var G__8493__2 = (function (this_sym8487,coll){
var this_sym8487__8489 = this;
var this__8490 = this_sym8487__8489;
return cljs.core._lookup.call(null,coll,this__8490.toString(),null);
});
var G__8493__3 = (function (this_sym8488,coll,not_found){
var this_sym8488__8491 = this;
var this__8492 = this_sym8488__8491;
return cljs.core._lookup.call(null,coll,this__8492.toString(),not_found);
});
G__8493 = function(this_sym8488,coll,not_found){
switch(arguments.length){
case 2:
return G__8493__2.call(this,this_sym8488,coll);
case 3:
return G__8493__3.call(this,this_sym8488,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8493;
})()
;
String.prototype.apply = (function (this_sym8485,args8486){
return this_sym8485.call.apply(this_sym8485,[this_sym8485].concat(args8486.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__8495 = lazy_seq.x;
if(lazy_seq.realized)
{return x__8495;
} else
{lazy_seq.x = x__8495.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__8496 = this;
var h__2213__auto____8497 = this__8496.__hash;
if(!((h__2213__auto____8497 == null)))
{return h__2213__auto____8497;
} else
{var h__2213__auto____8498 = cljs.core.hash_coll.call(null,coll);
this__8496.__hash = h__2213__auto____8498;
return h__2213__auto____8498;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__8499 = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__8500 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__8501 = this;
var this__8502 = this;
return cljs.core.pr_str.call(null,this__8502);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8503 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8504 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8505 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8506 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__8507 = this;
return (new cljs.core.LazySeq(meta,this__8507.realized,this__8507.x,this__8507.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8508 = this;
return this__8508.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__8509 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8509.meta);
});
cljs.core.LazySeq;
void 0;

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8510 = this;
return this__8510.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var this__8511 = this;
var ___8512 = this;
(this__8511.buf[this__8511.end] = o);
return this__8511.end = (this__8511.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var this__8513 = this;
var ___8514 = this;
var ret__8515 = (new cljs.core.ArrayChunk(this__8513.buf,0,this__8513.end));
this__8513.buf = null;
return ret__8515;
});
cljs.core.ChunkBuffer;
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__8516 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__8516.arr[this__8516.off]),(this__8516.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__8517 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__8517.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var this__8518 = this;
if((this__8518.off === this__8518.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(this__8518.arr,(this__8518.off + 1),this__8518.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var this__8519 = this;
return (this__8519.arr[(this__8519.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var this__8520 = this;
if((function (){var and__3941__auto____8521 = (i >= 0);
if(and__3941__auto____8521)
{return (i < (this__8520.end - this__8520.off));
} else
{return and__3941__auto____8521;
}
})())
{return (this__8520.arr[(this__8520.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var this__8522 = this;
return (this__8522.end - this__8522.off);
});
cljs.core.ArrayChunk;
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw('Invalid arity: ' + arguments.length);
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27656296;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var this__8523 = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__8524 = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__8525 = this;
return cljs.core._nth.call(null,this__8525.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__8526 = this;
if((cljs.core._count.call(null,this__8526.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,this__8526.chunk),this__8526.more,this__8526.meta));
} else
{if((this__8526.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8526.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__8527 = this;
if((this__8527.more == null))
{return null;
} else
{return this__8527.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__8528 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__8529 = this;
return (new cljs.core.ChunkedCons(this__8529.chunk,this__8529.more,m));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__8530 = this;
return this__8530.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__8531 = this;
return this__8531.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__8532 = this;
if((this__8532.more == null))
{return cljs.core.List.EMPTY;
} else
{return this__8532.more;
}
});
cljs.core.ChunkedCons;
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__8536__8537 = s;
if(G__8536__8537)
{if(cljs.core.truth_((function (){var or__3943__auto____8538 = null;
if(cljs.core.truth_(or__3943__auto____8538))
{return or__3943__auto____8538;
} else
{return G__8536__8537.cljs$core$IChunkedNext$;
}
})()))
{return true;
} else
{if((!G__8536__8537.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8536__8537);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__8536__8537);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8541 = [];
var s__8542 = s;
while(true){
if(cljs.core.seq.call(null,s__8542))
{ary__8541.push(cljs.core.first.call(null,s__8542));
{
var G__8543 = cljs.core.next.call(null,s__8542);
s__8542 = G__8543;
continue;
}
} else
{return ary__8541;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret__8547 = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i__8548 = 0;
var xs__8549 = cljs.core.seq.call(null,coll);
while(true){
if(xs__8549)
{(ret__8547[i__8548] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs__8549)));
{
var G__8550 = (i__8548 + 1);
var G__8551 = cljs.core.next.call(null,xs__8549);
i__8548 = G__8550;
xs__8549 = G__8551;
continue;
}
} else
{}
break;
}
return ret__8547;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a__8559 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8560 = cljs.core.seq.call(null,init_val_or_seq);
var i__8561 = 0;
var s__8562 = s__8560;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8563 = s__8562;
if(and__3941__auto____8563)
{return (i__8561 < size);
} else
{return and__3941__auto____8563;
}
})()))
{(a__8559[i__8561] = cljs.core.first.call(null,s__8562));
{
var G__8566 = (i__8561 + 1);
var G__8567 = cljs.core.next.call(null,s__8562);
i__8561 = G__8566;
s__8562 = G__8567;
continue;
}
} else
{return a__8559;
}
break;
}
} else
{var n__2552__auto____8564 = size;
var i__8565 = 0;
while(true){
if((i__8565 < n__2552__auto____8564))
{(a__8559[i__8565] = init_val_or_seq);
{
var G__8568 = (i__8565 + 1);
i__8565 = G__8568;
continue;
}
} else
{}
break;
}
return a__8559;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a__8576 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8577 = cljs.core.seq.call(null,init_val_or_seq);
var i__8578 = 0;
var s__8579 = s__8577;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8580 = s__8579;
if(and__3941__auto____8580)
{return (i__8578 < size);
} else
{return and__3941__auto____8580;
}
})()))
{(a__8576[i__8578] = cljs.core.first.call(null,s__8579));
{
var G__8583 = (i__8578 + 1);
var G__8584 = cljs.core.next.call(null,s__8579);
i__8578 = G__8583;
s__8579 = G__8584;
continue;
}
} else
{return a__8576;
}
break;
}
} else
{var n__2552__auto____8581 = size;
var i__8582 = 0;
while(true){
if((i__8582 < n__2552__auto____8581))
{(a__8576[i__8582] = init_val_or_seq);
{
var G__8585 = (i__8582 + 1);
i__8582 = G__8585;
continue;
}
} else
{}
break;
}
return a__8576;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a__8593 = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s__8594 = cljs.core.seq.call(null,init_val_or_seq);
var i__8595 = 0;
var s__8596 = s__8594;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8597 = s__8596;
if(and__3941__auto____8597)
{return (i__8595 < size);
} else
{return and__3941__auto____8597;
}
})()))
{(a__8593[i__8595] = cljs.core.first.call(null,s__8596));
{
var G__8600 = (i__8595 + 1);
var G__8601 = cljs.core.next.call(null,s__8596);
i__8595 = G__8600;
s__8596 = G__8601;
continue;
}
} else
{return a__8593;
}
break;
}
} else
{var n__2552__auto____8598 = size;
var i__8599 = 0;
while(true){
if((i__8599 < n__2552__auto____8598))
{(a__8593[i__8599] = init_val_or_seq);
{
var G__8602 = (i__8599 + 1);
i__8599 = G__8602;
continue;
}
} else
{}
break;
}
return a__8593;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw('Invalid arity: ' + arguments.length);
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__8607 = s;
var i__8608 = n;
var sum__8609 = 0;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____8610 = (i__8608 > 0);
if(and__3941__auto____8610)
{return cljs.core.seq.call(null,s__8607);
} else
{return and__3941__auto____8610;
}
})()))
{{
var G__8611 = cljs.core.next.call(null,s__8607);
var G__8612 = (i__8608 - 1);
var G__8613 = (sum__8609 + 1);
s__8607 = G__8611;
i__8608 = G__8612;
sum__8609 = G__8613;
continue;
}
} else
{return sum__8609;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8618 = cljs.core.seq.call(null,x);
if(s__8618)
{if(cljs.core.chunked_seq_QMARK_.call(null,s__8618))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s__8618),concat.call(null,cljs.core.chunk_rest.call(null,s__8618),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8618),concat.call(null,cljs.core.rest.call(null,s__8618),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__8622__delegate = function (x,y,zs){
var cat__8621 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8620 = cljs.core.seq.call(null,xys);
if(xys__8620)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__8620))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__8620),cat.call(null,cljs.core.chunk_rest.call(null,xys__8620),zs));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8620),cat.call(null,cljs.core.rest.call(null,xys__8620),zs));
}
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
}),null));
});
return cat__8621.call(null,concat.call(null,x,y),zs);
};
var G__8622 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8622__delegate.call(this, x, y, zs);
};
G__8622.cljs$lang$maxFixedArity = 2;
G__8622.cljs$lang$applyTo = (function (arglist__8623){
var x = cljs.core.first(arglist__8623);
var y = cljs.core.first(cljs.core.next(arglist__8623));
var zs = cljs.core.rest(cljs.core.next(arglist__8623));
return G__8622__delegate(x, y, zs);
});
G__8622.cljs$lang$arity$variadic = G__8622__delegate;
return G__8622;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__8624__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8624 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8624__delegate.call(this, a, b, c, d, more);
};
G__8624.cljs$lang$maxFixedArity = 4;
G__8624.cljs$lang$applyTo = (function (arglist__8625){
var a = cljs.core.first(arglist__8625);
var b = cljs.core.first(cljs.core.next(arglist__8625));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8625)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8625))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8625))));
return G__8624__delegate(a, b, c, d, more);
});
G__8624.cljs$lang$arity$variadic = G__8624__delegate;
return G__8624;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
void 0;cljs.core.apply_to = (function apply_to(f,argc,args){
var args__8667 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a__8668 = cljs.core._first.call(null,args__8667);
var args__8669 = cljs.core._rest.call(null,args__8667);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a__8668);
} else
{return f.call(null,a__8668);
}
} else
{var b__8670 = cljs.core._first.call(null,args__8669);
var args__8671 = cljs.core._rest.call(null,args__8669);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a__8668,b__8670);
} else
{return f.call(null,a__8668,b__8670);
}
} else
{var c__8672 = cljs.core._first.call(null,args__8671);
var args__8673 = cljs.core._rest.call(null,args__8671);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a__8668,b__8670,c__8672);
} else
{return f.call(null,a__8668,b__8670,c__8672);
}
} else
{var d__8674 = cljs.core._first.call(null,args__8673);
var args__8675 = cljs.core._rest.call(null,args__8673);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a__8668,b__8670,c__8672,d__8674);
} else
{return f.call(null,a__8668,b__8670,c__8672,d__8674);
}
} else
{var e__8676 = cljs.core._first.call(null,args__8675);
var args__8677 = cljs.core._rest.call(null,args__8675);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a__8668,b__8670,c__8672,d__8674,e__8676);
} else
{return f.call(null,a__8668,b__8670,c__8672,d__8674,e__8676);
}
} else
{var f__8678 = cljs.core._first.call(null,args__8677);
var args__8679 = cljs.core._rest.call(null,args__8677);
if((argc === 6))
{if(f__8678.cljs$lang$arity$6)
{return f__8678.cljs$lang$arity$6(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678);
}
} else
{var g__8680 = cljs.core._first.call(null,args__8679);
var args__8681 = cljs.core._rest.call(null,args__8679);
if((argc === 7))
{if(f__8678.cljs$lang$arity$7)
{return f__8678.cljs$lang$arity$7(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680);
}
} else
{var h__8682 = cljs.core._first.call(null,args__8681);
var args__8683 = cljs.core._rest.call(null,args__8681);
if((argc === 8))
{if(f__8678.cljs$lang$arity$8)
{return f__8678.cljs$lang$arity$8(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682);
}
} else
{var i__8684 = cljs.core._first.call(null,args__8683);
var args__8685 = cljs.core._rest.call(null,args__8683);
if((argc === 9))
{if(f__8678.cljs$lang$arity$9)
{return f__8678.cljs$lang$arity$9(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684);
}
} else
{var j__8686 = cljs.core._first.call(null,args__8685);
var args__8687 = cljs.core._rest.call(null,args__8685);
if((argc === 10))
{if(f__8678.cljs$lang$arity$10)
{return f__8678.cljs$lang$arity$10(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686);
}
} else
{var k__8688 = cljs.core._first.call(null,args__8687);
var args__8689 = cljs.core._rest.call(null,args__8687);
if((argc === 11))
{if(f__8678.cljs$lang$arity$11)
{return f__8678.cljs$lang$arity$11(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688);
}
} else
{var l__8690 = cljs.core._first.call(null,args__8689);
var args__8691 = cljs.core._rest.call(null,args__8689);
if((argc === 12))
{if(f__8678.cljs$lang$arity$12)
{return f__8678.cljs$lang$arity$12(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690);
}
} else
{var m__8692 = cljs.core._first.call(null,args__8691);
var args__8693 = cljs.core._rest.call(null,args__8691);
if((argc === 13))
{if(f__8678.cljs$lang$arity$13)
{return f__8678.cljs$lang$arity$13(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692);
}
} else
{var n__8694 = cljs.core._first.call(null,args__8693);
var args__8695 = cljs.core._rest.call(null,args__8693);
if((argc === 14))
{if(f__8678.cljs$lang$arity$14)
{return f__8678.cljs$lang$arity$14(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694);
}
} else
{var o__8696 = cljs.core._first.call(null,args__8695);
var args__8697 = cljs.core._rest.call(null,args__8695);
if((argc === 15))
{if(f__8678.cljs$lang$arity$15)
{return f__8678.cljs$lang$arity$15(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696);
}
} else
{var p__8698 = cljs.core._first.call(null,args__8697);
var args__8699 = cljs.core._rest.call(null,args__8697);
if((argc === 16))
{if(f__8678.cljs$lang$arity$16)
{return f__8678.cljs$lang$arity$16(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698);
}
} else
{var q__8700 = cljs.core._first.call(null,args__8699);
var args__8701 = cljs.core._rest.call(null,args__8699);
if((argc === 17))
{if(f__8678.cljs$lang$arity$17)
{return f__8678.cljs$lang$arity$17(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698,q__8700);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698,q__8700);
}
} else
{var r__8702 = cljs.core._first.call(null,args__8701);
var args__8703 = cljs.core._rest.call(null,args__8701);
if((argc === 18))
{if(f__8678.cljs$lang$arity$18)
{return f__8678.cljs$lang$arity$18(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698,q__8700,r__8702);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698,q__8700,r__8702);
}
} else
{var s__8704 = cljs.core._first.call(null,args__8703);
var args__8705 = cljs.core._rest.call(null,args__8703);
if((argc === 19))
{if(f__8678.cljs$lang$arity$19)
{return f__8678.cljs$lang$arity$19(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698,q__8700,r__8702,s__8704);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698,q__8700,r__8702,s__8704);
}
} else
{var t__8706 = cljs.core._first.call(null,args__8705);
var args__8707 = cljs.core._rest.call(null,args__8705);
if((argc === 20))
{if(f__8678.cljs$lang$arity$20)
{return f__8678.cljs$lang$arity$20(a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698,q__8700,r__8702,s__8704,t__8706);
} else
{return f__8678.call(null,a__8668,b__8670,c__8672,d__8674,e__8676,f__8678,g__8680,h__8682,i__8684,j__8686,k__8688,l__8690,m__8692,n__8694,o__8696,p__8698,q__8700,r__8702,s__8704,t__8706);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
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
});
void 0;/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity__8722 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8723 = cljs.core.bounded_count.call(null,args,(fixed_arity__8722 + 1));
if((bc__8723 <= fixed_arity__8722))
{return cljs.core.apply_to.call(null,f,bc__8723,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist__8724 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8725 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8726 = cljs.core.bounded_count.call(null,arglist__8724,(fixed_arity__8725 + 1));
if((bc__8726 <= fixed_arity__8725))
{return cljs.core.apply_to.call(null,f,bc__8726,arglist__8724);
} else
{return f.cljs$lang$applyTo(arglist__8724);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8724));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__8727 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8728 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8729 = cljs.core.bounded_count.call(null,arglist__8727,(fixed_arity__8728 + 1));
if((bc__8729 <= fixed_arity__8728))
{return cljs.core.apply_to.call(null,f,bc__8729,arglist__8727);
} else
{return f.cljs$lang$applyTo(arglist__8727);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8727));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__8730 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8731 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8732 = cljs.core.bounded_count.call(null,arglist__8730,(fixed_arity__8731 + 1));
if((bc__8732 <= fixed_arity__8731))
{return cljs.core.apply_to.call(null,f,bc__8732,arglist__8730);
} else
{return f.cljs$lang$applyTo(arglist__8730);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8730));
}
});
var apply__6 = (function() { 
var G__8736__delegate = function (f,a,b,c,d,args){
var arglist__8733 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8734 = f.cljs$lang$maxFixedArity;
if(cljs.core.truth_(f.cljs$lang$applyTo))
{var bc__8735 = cljs.core.bounded_count.call(null,arglist__8733,(fixed_arity__8734 + 1));
if((bc__8735 <= fixed_arity__8734))
{return cljs.core.apply_to.call(null,f,bc__8735,arglist__8733);
} else
{return f.cljs$lang$applyTo(arglist__8733);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8733));
}
};
var G__8736 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8736__delegate.call(this, f, a, b, c, d, args);
};
G__8736.cljs$lang$maxFixedArity = 5;
G__8736.cljs$lang$applyTo = (function (arglist__8737){
var f = cljs.core.first(arglist__8737);
var a = cljs.core.first(cljs.core.next(arglist__8737));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8737)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8737))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8737)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8737)))));
return G__8736__delegate(f, a, b, c, d, args);
});
G__8736.cljs$lang$arity$variadic = G__8736__delegate;
return G__8736;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__8738){
var obj = cljs.core.first(arglist__8738);
var f = cljs.core.first(cljs.core.next(arglist__8738));
var args = cljs.core.rest(cljs.core.next(arglist__8738));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__8739__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8739 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8739__delegate.call(this, x, y, more);
};
G__8739.cljs$lang$maxFixedArity = 2;
G__8739.cljs$lang$applyTo = (function (arglist__8740){
var x = cljs.core.first(arglist__8740);
var y = cljs.core.first(cljs.core.next(arglist__8740));
var more = cljs.core.rest(cljs.core.next(arglist__8740));
return G__8739__delegate(x, y, more);
});
G__8739.cljs$lang$arity$variadic = G__8739__delegate;
return G__8739;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__8741 = pred;
var G__8742 = cljs.core.next.call(null,coll);
pred = G__8741;
coll = G__8742;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3943__auto____8744 = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3943__auto____8744))
{return or__3943__auto____8744;
} else
{{
var G__8745 = pred;
var G__8746 = cljs.core.next.call(null,coll);
pred = G__8745;
coll = G__8746;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__8747 = null;
var G__8747__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8747__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8747__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8747__3 = (function() { 
var G__8748__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8748 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8748__delegate.call(this, x, y, zs);
};
G__8748.cljs$lang$maxFixedArity = 2;
G__8748.cljs$lang$applyTo = (function (arglist__8749){
var x = cljs.core.first(arglist__8749);
var y = cljs.core.first(cljs.core.next(arglist__8749));
var zs = cljs.core.rest(cljs.core.next(arglist__8749));
return G__8748__delegate(x, y, zs);
});
G__8748.cljs$lang$arity$variadic = G__8748__delegate;
return G__8748;
})()
;
G__8747 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__8747__0.call(this);
case 1:
return G__8747__1.call(this,x);
case 2:
return G__8747__2.call(this,x,y);
default:
return G__8747__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
G__8747.cljs$lang$maxFixedArity = 2;
G__8747.cljs$lang$applyTo = G__8747__3.cljs$lang$applyTo;
return G__8747;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8750__delegate = function (args){
return x;
};
var G__8750 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8750__delegate.call(this, args);
};
G__8750.cljs$lang$maxFixedArity = 0;
G__8750.cljs$lang$applyTo = (function (arglist__8751){
var args = cljs.core.seq(arglist__8751);;
return G__8750__delegate(args);
});
G__8750.cljs$lang$arity$variadic = G__8750__delegate;
return G__8750;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__8758 = null;
var G__8758__0 = (function (){
return f.call(null,g.call(null));
});
var G__8758__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8758__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8758__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8758__4 = (function() { 
var G__8759__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8759 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8759__delegate.call(this, x, y, z, args);
};
G__8759.cljs$lang$maxFixedArity = 3;
G__8759.cljs$lang$applyTo = (function (arglist__8760){
var x = cljs.core.first(arglist__8760);
var y = cljs.core.first(cljs.core.next(arglist__8760));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8760)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8760)));
return G__8759__delegate(x, y, z, args);
});
G__8759.cljs$lang$arity$variadic = G__8759__delegate;
return G__8759;
})()
;
G__8758 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8758__0.call(this);
case 1:
return G__8758__1.call(this,x);
case 2:
return G__8758__2.call(this,x,y);
case 3:
return G__8758__3.call(this,x,y,z);
default:
return G__8758__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8758.cljs$lang$maxFixedArity = 3;
G__8758.cljs$lang$applyTo = G__8758__4.cljs$lang$applyTo;
return G__8758;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__8761 = null;
var G__8761__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8761__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8761__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8761__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8761__4 = (function() { 
var G__8762__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8762 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8762__delegate.call(this, x, y, z, args);
};
G__8762.cljs$lang$maxFixedArity = 3;
G__8762.cljs$lang$applyTo = (function (arglist__8763){
var x = cljs.core.first(arglist__8763);
var y = cljs.core.first(cljs.core.next(arglist__8763));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8763)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8763)));
return G__8762__delegate(x, y, z, args);
});
G__8762.cljs$lang$arity$variadic = G__8762__delegate;
return G__8762;
})()
;
G__8761 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__8761__0.call(this);
case 1:
return G__8761__1.call(this,x);
case 2:
return G__8761__2.call(this,x,y);
case 3:
return G__8761__3.call(this,x,y,z);
default:
return G__8761__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8761.cljs$lang$maxFixedArity = 3;
G__8761.cljs$lang$applyTo = G__8761__4.cljs$lang$applyTo;
return G__8761;
})()
});
var comp__4 = (function() { 
var G__8764__delegate = function (f1,f2,f3,fs){
var fs__8755 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__8765__delegate = function (args){
var ret__8756 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8755),args);
var fs__8757 = cljs.core.next.call(null,fs__8755);
while(true){
if(fs__8757)
{{
var G__8766 = cljs.core.first.call(null,fs__8757).call(null,ret__8756);
var G__8767 = cljs.core.next.call(null,fs__8757);
ret__8756 = G__8766;
fs__8757 = G__8767;
continue;
}
} else
{return ret__8756;
}
break;
}
};
var G__8765 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8765__delegate.call(this, args);
};
G__8765.cljs$lang$maxFixedArity = 0;
G__8765.cljs$lang$applyTo = (function (arglist__8768){
var args = cljs.core.seq(arglist__8768);;
return G__8765__delegate(args);
});
G__8765.cljs$lang$arity$variadic = G__8765__delegate;
return G__8765;
})()
;
};
var G__8764 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8764__delegate.call(this, f1, f2, f3, fs);
};
G__8764.cljs$lang$maxFixedArity = 3;
G__8764.cljs$lang$applyTo = (function (arglist__8769){
var f1 = cljs.core.first(arglist__8769);
var f2 = cljs.core.first(cljs.core.next(arglist__8769));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8769)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8769)));
return G__8764__delegate(f1, f2, f3, fs);
});
G__8764.cljs$lang$arity$variadic = G__8764__delegate;
return G__8764;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__8770__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8770 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8770__delegate.call(this, args);
};
G__8770.cljs$lang$maxFixedArity = 0;
G__8770.cljs$lang$applyTo = (function (arglist__8771){
var args = cljs.core.seq(arglist__8771);;
return G__8770__delegate(args);
});
G__8770.cljs$lang$arity$variadic = G__8770__delegate;
return G__8770;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__8772__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8772 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8772__delegate.call(this, args);
};
G__8772.cljs$lang$maxFixedArity = 0;
G__8772.cljs$lang$applyTo = (function (arglist__8773){
var args = cljs.core.seq(arglist__8773);;
return G__8772__delegate(args);
});
G__8772.cljs$lang$arity$variadic = G__8772__delegate;
return G__8772;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8774__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8774 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8774__delegate.call(this, args);
};
G__8774.cljs$lang$maxFixedArity = 0;
G__8774.cljs$lang$applyTo = (function (arglist__8775){
var args = cljs.core.seq(arglist__8775);;
return G__8774__delegate(args);
});
G__8774.cljs$lang$arity$variadic = G__8774__delegate;
return G__8774;
})()
;
});
var partial__5 = (function() { 
var G__8776__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8777__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8777 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8777__delegate.call(this, args);
};
G__8777.cljs$lang$maxFixedArity = 0;
G__8777.cljs$lang$applyTo = (function (arglist__8778){
var args = cljs.core.seq(arglist__8778);;
return G__8777__delegate(args);
});
G__8777.cljs$lang$arity$variadic = G__8777__delegate;
return G__8777;
})()
;
};
var G__8776 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8776__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8776.cljs$lang$maxFixedArity = 4;
G__8776.cljs$lang$applyTo = (function (arglist__8779){
var f = cljs.core.first(arglist__8779);
var arg1 = cljs.core.first(cljs.core.next(arglist__8779));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8779)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8779))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8779))));
return G__8776__delegate(f, arg1, arg2, arg3, more);
});
G__8776.cljs$lang$arity$variadic = G__8776__delegate;
return G__8776;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__8780 = null;
var G__8780__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__8780__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__8780__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__8780__4 = (function() { 
var G__8781__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__8781 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8781__delegate.call(this, a, b, c, ds);
};
G__8781.cljs$lang$maxFixedArity = 3;
G__8781.cljs$lang$applyTo = (function (arglist__8782){
var a = cljs.core.first(arglist__8782);
var b = cljs.core.first(cljs.core.next(arglist__8782));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8782)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8782)));
return G__8781__delegate(a, b, c, ds);
});
G__8781.cljs$lang$arity$variadic = G__8781__delegate;
return G__8781;
})()
;
G__8780 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__8780__1.call(this,a);
case 2:
return G__8780__2.call(this,a,b);
case 3:
return G__8780__3.call(this,a,b,c);
default:
return G__8780__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8780.cljs$lang$maxFixedArity = 3;
G__8780.cljs$lang$applyTo = G__8780__4.cljs$lang$applyTo;
return G__8780;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__8783 = null;
var G__8783__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8783__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__8783__4 = (function() { 
var G__8784__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__8784 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8784__delegate.call(this, a, b, c, ds);
};
G__8784.cljs$lang$maxFixedArity = 3;
G__8784.cljs$lang$applyTo = (function (arglist__8785){
var a = cljs.core.first(arglist__8785);
var b = cljs.core.first(cljs.core.next(arglist__8785));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8785)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8785)));
return G__8784__delegate(a, b, c, ds);
});
G__8784.cljs$lang$arity$variadic = G__8784__delegate;
return G__8784;
})()
;
G__8783 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8783__2.call(this,a,b);
case 3:
return G__8783__3.call(this,a,b,c);
default:
return G__8783__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8783.cljs$lang$maxFixedArity = 3;
G__8783.cljs$lang$applyTo = G__8783__4.cljs$lang$applyTo;
return G__8783;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__8786 = null;
var G__8786__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__8786__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__8786__4 = (function() { 
var G__8787__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__8787 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8787__delegate.call(this, a, b, c, ds);
};
G__8787.cljs$lang$maxFixedArity = 3;
G__8787.cljs$lang$applyTo = (function (arglist__8788){
var a = cljs.core.first(arglist__8788);
var b = cljs.core.first(cljs.core.next(arglist__8788));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8788)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8788)));
return G__8787__delegate(a, b, c, ds);
});
G__8787.cljs$lang$arity$variadic = G__8787__delegate;
return G__8787;
})()
;
G__8786 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__8786__2.call(this,a,b);
case 3:
return G__8786__3.call(this,a,b,c);
default:
return G__8786__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__8786.cljs$lang$maxFixedArity = 3;
G__8786.cljs$lang$applyTo = G__8786__4.cljs$lang$applyTo;
return G__8786;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__8804 = (function mapi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8812 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8812)
{var s__8813 = temp__4092__auto____8812;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8813))
{var c__8814 = cljs.core.chunk_first.call(null,s__8813);
var size__8815 = cljs.core.count.call(null,c__8814);
var b__8816 = cljs.core.chunk_buffer.call(null,size__8815);
var n__2552__auto____8817 = size__8815;
var i__8818 = 0;
while(true){
if((i__8818 < n__2552__auto____8817))
{cljs.core.chunk_append.call(null,b__8816,f.call(null,(idx + i__8818),cljs.core._nth.call(null,c__8814,i__8818)));
{
var G__8819 = (i__8818 + 1);
i__8818 = G__8819;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8816),mapi.call(null,(idx + size__8815),cljs.core.chunk_rest.call(null,s__8813)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8813)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s__8813)));
}
} else
{return null;
}
}),null));
});
return mapi__8804.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8829 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8829)
{var s__8830 = temp__4092__auto____8829;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8830))
{var c__8831 = cljs.core.chunk_first.call(null,s__8830);
var size__8832 = cljs.core.count.call(null,c__8831);
var b__8833 = cljs.core.chunk_buffer.call(null,size__8832);
var n__2552__auto____8834 = size__8832;
var i__8835 = 0;
while(true){
if((i__8835 < n__2552__auto____8834))
{var x__8836 = f.call(null,cljs.core._nth.call(null,c__8831,i__8835));
if((x__8836 == null))
{} else
{cljs.core.chunk_append.call(null,b__8833,x__8836);
}
{
var G__8838 = (i__8835 + 1);
i__8835 = G__8838;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8833),keep.call(null,f,cljs.core.chunk_rest.call(null,s__8830)));
} else
{var x__8837 = f.call(null,cljs.core.first.call(null,s__8830));
if((x__8837 == null))
{return keep.call(null,f,cljs.core.rest.call(null,s__8830));
} else
{return cljs.core.cons.call(null,x__8837,keep.call(null,f,cljs.core.rest.call(null,s__8830)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__8864 = (function keepi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____8874 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____8874)
{var s__8875 = temp__4092__auto____8874;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8875))
{var c__8876 = cljs.core.chunk_first.call(null,s__8875);
var size__8877 = cljs.core.count.call(null,c__8876);
var b__8878 = cljs.core.chunk_buffer.call(null,size__8877);
var n__2552__auto____8879 = size__8877;
var i__8880 = 0;
while(true){
if((i__8880 < n__2552__auto____8879))
{var x__8881 = f.call(null,(idx + i__8880),cljs.core._nth.call(null,c__8876,i__8880));
if((x__8881 == null))
{} else
{cljs.core.chunk_append.call(null,b__8878,x__8881);
}
{
var G__8883 = (i__8880 + 1);
i__8880 = G__8883;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8878),keepi.call(null,(idx + size__8877),cljs.core.chunk_rest.call(null,s__8875)));
} else
{var x__8882 = f.call(null,idx,cljs.core.first.call(null,s__8875));
if((x__8882 == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8875));
} else
{return cljs.core.cons.call(null,x__8882,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s__8875)));
}
}
} else
{return null;
}
}),null));
});
return keepi__8864.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8969 = p.call(null,x);
if(cljs.core.truth_(and__3941__auto____8969))
{return p.call(null,y);
} else
{return and__3941__auto____8969;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8970 = p.call(null,x);
if(cljs.core.truth_(and__3941__auto____8970))
{var and__3941__auto____8971 = p.call(null,y);
if(cljs.core.truth_(and__3941__auto____8971))
{return p.call(null,z);
} else
{return and__3941__auto____8971;
}
} else
{return and__3941__auto____8970;
}
})());
});
var ep1__4 = (function() { 
var G__9040__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8972 = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____8972))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3941__auto____8972;
}
})());
};
var G__9040 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9040__delegate.call(this, x, y, z, args);
};
G__9040.cljs$lang$maxFixedArity = 3;
G__9040.cljs$lang$applyTo = (function (arglist__9041){
var x = cljs.core.first(arglist__9041);
var y = cljs.core.first(cljs.core.next(arglist__9041));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9041)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9041)));
return G__9040__delegate(x, y, z, args);
});
G__9040.cljs$lang$arity$variadic = G__9040__delegate;
return G__9040;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8984 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____8984))
{return p2.call(null,x);
} else
{return and__3941__auto____8984;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8985 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____8985))
{var and__3941__auto____8986 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____8986))
{var and__3941__auto____8987 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____8987))
{return p2.call(null,y);
} else
{return and__3941__auto____8987;
}
} else
{return and__3941__auto____8986;
}
} else
{return and__3941__auto____8985;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8988 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____8988))
{var and__3941__auto____8989 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____8989))
{var and__3941__auto____8990 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____8990))
{var and__3941__auto____8991 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____8991))
{var and__3941__auto____8992 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____8992))
{return p2.call(null,z);
} else
{return and__3941__auto____8992;
}
} else
{return and__3941__auto____8991;
}
} else
{return and__3941__auto____8990;
}
} else
{return and__3941__auto____8989;
}
} else
{return and__3941__auto____8988;
}
})());
});
var ep2__4 = (function() { 
var G__9042__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____8993 = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____8993))
{return cljs.core.every_QMARK_.call(null,(function (p1__8839_SHARP_){
var and__3941__auto____8994 = p1.call(null,p1__8839_SHARP_);
if(cljs.core.truth_(and__3941__auto____8994))
{return p2.call(null,p1__8839_SHARP_);
} else
{return and__3941__auto____8994;
}
}),args);
} else
{return and__3941__auto____8993;
}
})());
};
var G__9042 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9042__delegate.call(this, x, y, z, args);
};
G__9042.cljs$lang$maxFixedArity = 3;
G__9042.cljs$lang$applyTo = (function (arglist__9043){
var x = cljs.core.first(arglist__9043);
var y = cljs.core.first(cljs.core.next(arglist__9043));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9043)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9043)));
return G__9042__delegate(x, y, z, args);
});
G__9042.cljs$lang$arity$variadic = G__9042__delegate;
return G__9042;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9013 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____9013))
{var and__3941__auto____9014 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____9014))
{return p3.call(null,x);
} else
{return and__3941__auto____9014;
}
} else
{return and__3941__auto____9013;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9015 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____9015))
{var and__3941__auto____9016 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____9016))
{var and__3941__auto____9017 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____9017))
{var and__3941__auto____9018 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____9018))
{var and__3941__auto____9019 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____9019))
{return p3.call(null,y);
} else
{return and__3941__auto____9019;
}
} else
{return and__3941__auto____9018;
}
} else
{return and__3941__auto____9017;
}
} else
{return and__3941__auto____9016;
}
} else
{return and__3941__auto____9015;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9020 = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto____9020))
{var and__3941__auto____9021 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____9021))
{var and__3941__auto____9022 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____9022))
{var and__3941__auto____9023 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____9023))
{var and__3941__auto____9024 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____9024))
{var and__3941__auto____9025 = p3.call(null,y);
if(cljs.core.truth_(and__3941__auto____9025))
{var and__3941__auto____9026 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____9026))
{var and__3941__auto____9027 = p2.call(null,z);
if(cljs.core.truth_(and__3941__auto____9027))
{return p3.call(null,z);
} else
{return and__3941__auto____9027;
}
} else
{return and__3941__auto____9026;
}
} else
{return and__3941__auto____9025;
}
} else
{return and__3941__auto____9024;
}
} else
{return and__3941__auto____9023;
}
} else
{return and__3941__auto____9022;
}
} else
{return and__3941__auto____9021;
}
} else
{return and__3941__auto____9020;
}
})());
});
var ep3__4 = (function() { 
var G__9044__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9028 = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____9028))
{return cljs.core.every_QMARK_.call(null,(function (p1__8840_SHARP_){
var and__3941__auto____9029 = p1.call(null,p1__8840_SHARP_);
if(cljs.core.truth_(and__3941__auto____9029))
{var and__3941__auto____9030 = p2.call(null,p1__8840_SHARP_);
if(cljs.core.truth_(and__3941__auto____9030))
{return p3.call(null,p1__8840_SHARP_);
} else
{return and__3941__auto____9030;
}
} else
{return and__3941__auto____9029;
}
}),args);
} else
{return and__3941__auto____9028;
}
})());
};
var G__9044 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9044__delegate.call(this, x, y, z, args);
};
G__9044.cljs$lang$maxFixedArity = 3;
G__9044.cljs$lang$applyTo = (function (arglist__9045){
var x = cljs.core.first(arglist__9045);
var y = cljs.core.first(cljs.core.next(arglist__9045));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9045)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9045)));
return G__9044__delegate(x, y, z, args);
});
G__9044.cljs$lang$arity$variadic = G__9044__delegate;
return G__9044;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__9046__delegate = function (p1,p2,p3,ps){
var ps__9031 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8841_SHARP_){
return p1__8841_SHARP_.call(null,x);
}),ps__9031);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8842_SHARP_){
var and__3941__auto____9036 = p1__8842_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto____9036))
{return p1__8842_SHARP_.call(null,y);
} else
{return and__3941__auto____9036;
}
}),ps__9031);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8843_SHARP_){
var and__3941__auto____9037 = p1__8843_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto____9037))
{var and__3941__auto____9038 = p1__8843_SHARP_.call(null,y);
if(cljs.core.truth_(and__3941__auto____9038))
{return p1__8843_SHARP_.call(null,z);
} else
{return and__3941__auto____9038;
}
} else
{return and__3941__auto____9037;
}
}),ps__9031);
});
var epn__4 = (function() { 
var G__9047__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto____9039 = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto____9039))
{return cljs.core.every_QMARK_.call(null,(function (p1__8844_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8844_SHARP_,args);
}),ps__9031);
} else
{return and__3941__auto____9039;
}
})());
};
var G__9047 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9047__delegate.call(this, x, y, z, args);
};
G__9047.cljs$lang$maxFixedArity = 3;
G__9047.cljs$lang$applyTo = (function (arglist__9048){
var x = cljs.core.first(arglist__9048);
var y = cljs.core.first(cljs.core.next(arglist__9048));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9048)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9048)));
return G__9047__delegate(x, y, z, args);
});
G__9047.cljs$lang$arity$variadic = G__9047__delegate;
return G__9047;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__9046 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9046__delegate.call(this, p1, p2, p3, ps);
};
G__9046.cljs$lang$maxFixedArity = 3;
G__9046.cljs$lang$applyTo = (function (arglist__9049){
var p1 = cljs.core.first(arglist__9049);
var p2 = cljs.core.first(cljs.core.next(arglist__9049));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9049)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9049)));
return G__9046__delegate(p1, p2, p3, ps);
});
G__9046.cljs$lang$arity$variadic = G__9046__delegate;
return G__9046;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3943__auto____9130 = p.call(null,x);
if(cljs.core.truth_(or__3943__auto____9130))
{return or__3943__auto____9130;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3943__auto____9131 = p.call(null,x);
if(cljs.core.truth_(or__3943__auto____9131))
{return or__3943__auto____9131;
} else
{var or__3943__auto____9132 = p.call(null,y);
if(cljs.core.truth_(or__3943__auto____9132))
{return or__3943__auto____9132;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__9201__delegate = function (x,y,z,args){
var or__3943__auto____9133 = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____9133))
{return or__3943__auto____9133;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__9201 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9201__delegate.call(this, x, y, z, args);
};
G__9201.cljs$lang$maxFixedArity = 3;
G__9201.cljs$lang$applyTo = (function (arglist__9202){
var x = cljs.core.first(arglist__9202);
var y = cljs.core.first(cljs.core.next(arglist__9202));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9202)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9202)));
return G__9201__delegate(x, y, z, args);
});
G__9201.cljs$lang$arity$variadic = G__9201__delegate;
return G__9201;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3943__auto____9145 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9145))
{return or__3943__auto____9145;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3943__auto____9146 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9146))
{return or__3943__auto____9146;
} else
{var or__3943__auto____9147 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____9147))
{return or__3943__auto____9147;
} else
{var or__3943__auto____9148 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9148))
{return or__3943__auto____9148;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3943__auto____9149 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9149))
{return or__3943__auto____9149;
} else
{var or__3943__auto____9150 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____9150))
{return or__3943__auto____9150;
} else
{var or__3943__auto____9151 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____9151))
{return or__3943__auto____9151;
} else
{var or__3943__auto____9152 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9152))
{return or__3943__auto____9152;
} else
{var or__3943__auto____9153 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____9153))
{return or__3943__auto____9153;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__9203__delegate = function (x,y,z,args){
var or__3943__auto____9154 = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____9154))
{return or__3943__auto____9154;
} else
{return cljs.core.some.call(null,(function (p1__8884_SHARP_){
var or__3943__auto____9155 = p1.call(null,p1__8884_SHARP_);
if(cljs.core.truth_(or__3943__auto____9155))
{return or__3943__auto____9155;
} else
{return p2.call(null,p1__8884_SHARP_);
}
}),args);
}
};
var G__9203 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9203__delegate.call(this, x, y, z, args);
};
G__9203.cljs$lang$maxFixedArity = 3;
G__9203.cljs$lang$applyTo = (function (arglist__9204){
var x = cljs.core.first(arglist__9204);
var y = cljs.core.first(cljs.core.next(arglist__9204));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9204)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9204)));
return G__9203__delegate(x, y, z, args);
});
G__9203.cljs$lang$arity$variadic = G__9203__delegate;
return G__9203;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3943__auto____9174 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9174))
{return or__3943__auto____9174;
} else
{var or__3943__auto____9175 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9175))
{return or__3943__auto____9175;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3943__auto____9176 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9176))
{return or__3943__auto____9176;
} else
{var or__3943__auto____9177 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9177))
{return or__3943__auto____9177;
} else
{var or__3943__auto____9178 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____9178))
{return or__3943__auto____9178;
} else
{var or__3943__auto____9179 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____9179))
{return or__3943__auto____9179;
} else
{var or__3943__auto____9180 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____9180))
{return or__3943__auto____9180;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3943__auto____9181 = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto____9181))
{return or__3943__auto____9181;
} else
{var or__3943__auto____9182 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____9182))
{return or__3943__auto____9182;
} else
{var or__3943__auto____9183 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____9183))
{return or__3943__auto____9183;
} else
{var or__3943__auto____9184 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____9184))
{return or__3943__auto____9184;
} else
{var or__3943__auto____9185 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____9185))
{return or__3943__auto____9185;
} else
{var or__3943__auto____9186 = p3.call(null,y);
if(cljs.core.truth_(or__3943__auto____9186))
{return or__3943__auto____9186;
} else
{var or__3943__auto____9187 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____9187))
{return or__3943__auto____9187;
} else
{var or__3943__auto____9188 = p2.call(null,z);
if(cljs.core.truth_(or__3943__auto____9188))
{return or__3943__auto____9188;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__9205__delegate = function (x,y,z,args){
var or__3943__auto____9189 = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____9189))
{return or__3943__auto____9189;
} else
{return cljs.core.some.call(null,(function (p1__8885_SHARP_){
var or__3943__auto____9190 = p1.call(null,p1__8885_SHARP_);
if(cljs.core.truth_(or__3943__auto____9190))
{return or__3943__auto____9190;
} else
{var or__3943__auto____9191 = p2.call(null,p1__8885_SHARP_);
if(cljs.core.truth_(or__3943__auto____9191))
{return or__3943__auto____9191;
} else
{return p3.call(null,p1__8885_SHARP_);
}
}
}),args);
}
};
var G__9205 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9205__delegate.call(this, x, y, z, args);
};
G__9205.cljs$lang$maxFixedArity = 3;
G__9205.cljs$lang$applyTo = (function (arglist__9206){
var x = cljs.core.first(arglist__9206);
var y = cljs.core.first(cljs.core.next(arglist__9206));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9206)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9206)));
return G__9205__delegate(x, y, z, args);
});
G__9205.cljs$lang$arity$variadic = G__9205__delegate;
return G__9205;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__9207__delegate = function (p1,p2,p3,ps){
var ps__9192 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__8886_SHARP_){
return p1__8886_SHARP_.call(null,x);
}),ps__9192);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8887_SHARP_){
var or__3943__auto____9197 = p1__8887_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto____9197))
{return or__3943__auto____9197;
} else
{return p1__8887_SHARP_.call(null,y);
}
}),ps__9192);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8888_SHARP_){
var or__3943__auto____9198 = p1__8888_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto____9198))
{return or__3943__auto____9198;
} else
{var or__3943__auto____9199 = p1__8888_SHARP_.call(null,y);
if(cljs.core.truth_(or__3943__auto____9199))
{return or__3943__auto____9199;
} else
{return p1__8888_SHARP_.call(null,z);
}
}
}),ps__9192);
});
var spn__4 = (function() { 
var G__9208__delegate = function (x,y,z,args){
var or__3943__auto____9200 = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto____9200))
{return or__3943__auto____9200;
} else
{return cljs.core.some.call(null,(function (p1__8889_SHARP_){
return cljs.core.some.call(null,p1__8889_SHARP_,args);
}),ps__9192);
}
};
var G__9208 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9208__delegate.call(this, x, y, z, args);
};
G__9208.cljs$lang$maxFixedArity = 3;
G__9208.cljs$lang$applyTo = (function (arglist__9209){
var x = cljs.core.first(arglist__9209);
var y = cljs.core.first(cljs.core.next(arglist__9209));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9209)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9209)));
return G__9208__delegate(x, y, z, args);
});
G__9208.cljs$lang$arity$variadic = G__9208__delegate;
return G__9208;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__9207 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9207__delegate.call(this, p1, p2, p3, ps);
};
G__9207.cljs$lang$maxFixedArity = 3;
G__9207.cljs$lang$applyTo = (function (arglist__9210){
var p1 = cljs.core.first(arglist__9210);
var p2 = cljs.core.first(cljs.core.next(arglist__9210));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9210)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9210)));
return G__9207__delegate(p1, p2, p3, ps);
});
G__9207.cljs$lang$arity$variadic = G__9207__delegate;
return G__9207;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9229 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9229)
{var s__9230 = temp__4092__auto____9229;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9230))
{var c__9231 = cljs.core.chunk_first.call(null,s__9230);
var size__9232 = cljs.core.count.call(null,c__9231);
var b__9233 = cljs.core.chunk_buffer.call(null,size__9232);
var n__2552__auto____9234 = size__9232;
var i__9235 = 0;
while(true){
if((i__9235 < n__2552__auto____9234))
{cljs.core.chunk_append.call(null,b__9233,f.call(null,cljs.core._nth.call(null,c__9231,i__9235)));
{
var G__9247 = (i__9235 + 1);
i__9235 = G__9247;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9233),map.call(null,f,cljs.core.chunk_rest.call(null,s__9230)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__9230)),map.call(null,f,cljs.core.rest.call(null,s__9230)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9236 = cljs.core.seq.call(null,c1);
var s2__9237 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto____9238 = s1__9236;
if(and__3941__auto____9238)
{return s2__9237;
} else
{return and__3941__auto____9238;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9236),cljs.core.first.call(null,s2__9237)),map.call(null,f,cljs.core.rest.call(null,s1__9236),cljs.core.rest.call(null,s2__9237)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9239 = cljs.core.seq.call(null,c1);
var s2__9240 = cljs.core.seq.call(null,c2);
var s3__9241 = cljs.core.seq.call(null,c3);
if((function (){var and__3941__auto____9242 = s1__9239;
if(and__3941__auto____9242)
{var and__3941__auto____9243 = s2__9240;
if(and__3941__auto____9243)
{return s3__9241;
} else
{return and__3941__auto____9243;
}
} else
{return and__3941__auto____9242;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9239),cljs.core.first.call(null,s2__9240),cljs.core.first.call(null,s3__9241)),map.call(null,f,cljs.core.rest.call(null,s1__9239),cljs.core.rest.call(null,s2__9240),cljs.core.rest.call(null,s3__9241)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__9248__delegate = function (f,c1,c2,c3,colls){
var step__9246 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9245 = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9245))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__9245),step.call(null,map.call(null,cljs.core.rest,ss__9245)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__9050_SHARP_){
return cljs.core.apply.call(null,f,p1__9050_SHARP_);
}),step__9246.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__9248 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9248__delegate.call(this, f, c1, c2, c3, colls);
};
G__9248.cljs$lang$maxFixedArity = 4;
G__9248.cljs$lang$applyTo = (function (arglist__9249){
var f = cljs.core.first(arglist__9249);
var c1 = cljs.core.first(cljs.core.next(arglist__9249));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9249)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9249))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9249))));
return G__9248__delegate(f, c1, c2, c3, colls);
});
G__9248.cljs$lang$arity$variadic = G__9248__delegate;
return G__9248;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__4092__auto____9252 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9252)
{var s__9253 = temp__4092__auto____9252;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__9253),take.call(null,(n - 1),cljs.core.rest.call(null,s__9253)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__9259 = (function (n,coll){
while(true){
var s__9257 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3941__auto____9258 = (n > 0);
if(and__3941__auto____9258)
{return s__9257;
} else
{return and__3941__auto____9258;
}
})()))
{{
var G__9260 = (n - 1);
var G__9261 = cljs.core.rest.call(null,s__9257);
n = G__9260;
coll = G__9261;
continue;
}
} else
{return s__9257;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9259.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__9264 = cljs.core.seq.call(null,coll);
var lead__9265 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead__9265)
{{
var G__9266 = cljs.core.next.call(null,s__9264);
var G__9267 = cljs.core.next.call(null,lead__9265);
s__9264 = G__9266;
lead__9265 = G__9267;
continue;
}
} else
{return s__9264;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__9273 = (function (pred,coll){
while(true){
var s__9271 = cljs.core.seq.call(null,coll);
if(cljs.core.truth_((function (){var and__3941__auto____9272 = s__9271;
if(and__3941__auto____9272)
{return pred.call(null,cljs.core.first.call(null,s__9271));
} else
{return and__3941__auto____9272;
}
})()))
{{
var G__9274 = pred;
var G__9275 = cljs.core.rest.call(null,s__9271);
pred = G__9274;
coll = G__9275;
continue;
}
} else
{return s__9271;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step__9273.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9278 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9278)
{var s__9279 = temp__4092__auto____9278;
return cljs.core.concat.call(null,s__9279,cycle.call(null,s__9279));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9284 = cljs.core.seq.call(null,c1);
var s2__9285 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto____9286 = s1__9284;
if(and__3941__auto____9286)
{return s2__9285;
} else
{return and__3941__auto____9286;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__9284),cljs.core.cons.call(null,cljs.core.first.call(null,s2__9285),interleave.call(null,cljs.core.rest.call(null,s1__9284),cljs.core.rest.call(null,s2__9285))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__9288__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9287 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9287))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__9287),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__9287)));
} else
{return null;
}
}),null));
};
var G__9288 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9288__delegate.call(this, c1, c2, colls);
};
G__9288.cljs$lang$maxFixedArity = 2;
G__9288.cljs$lang$applyTo = (function (arglist__9289){
var c1 = cljs.core.first(arglist__9289);
var c2 = cljs.core.first(cljs.core.next(arglist__9289));
var colls = cljs.core.rest(cljs.core.next(arglist__9289));
return G__9288__delegate(c1, c2, colls);
});
G__9288.cljs$lang$arity$variadic = G__9288__delegate;
return G__9288;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__9299 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____9297 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____9297)
{var coll__9298 = temp__4090__auto____9297;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__9298),cat.call(null,cljs.core.rest.call(null,coll__9298),colls));
} else
{if(cljs.core.seq.call(null,colls))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
}),null));
});
return cat__9299.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__9300__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__9300 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9300__delegate.call(this, f, coll, colls);
};
G__9300.cljs$lang$maxFixedArity = 2;
G__9300.cljs$lang$applyTo = (function (arglist__9301){
var f = cljs.core.first(arglist__9301);
var coll = cljs.core.first(cljs.core.next(arglist__9301));
var colls = cljs.core.rest(cljs.core.next(arglist__9301));
return G__9300__delegate(f, coll, colls);
});
G__9300.cljs$lang$arity$variadic = G__9300__delegate;
return G__9300;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9311 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9311)
{var s__9312 = temp__4092__auto____9311;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9312))
{var c__9313 = cljs.core.chunk_first.call(null,s__9312);
var size__9314 = cljs.core.count.call(null,c__9313);
var b__9315 = cljs.core.chunk_buffer.call(null,size__9314);
var n__2552__auto____9316 = size__9314;
var i__9317 = 0;
while(true){
if((i__9317 < n__2552__auto____9316))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c__9313,i__9317))))
{cljs.core.chunk_append.call(null,b__9315,cljs.core._nth.call(null,c__9313,i__9317));
} else
{}
{
var G__9320 = (i__9317 + 1);
i__9317 = G__9320;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9315),filter.call(null,pred,cljs.core.chunk_rest.call(null,s__9312)));
} else
{var f__9318 = cljs.core.first.call(null,s__9312);
var r__9319 = cljs.core.rest.call(null,s__9312);
if(cljs.core.truth_(pred.call(null,f__9318)))
{return cljs.core.cons.call(null,f__9318,filter.call(null,pred,r__9319));
} else
{return filter.call(null,pred,r__9319);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__9323 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk__9323.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__9321_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__9321_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__9327__9328 = to;
if(G__9327__9328)
{if((function (){var or__3943__auto____9329 = (G__9327__9328.cljs$lang$protocol_mask$partition1$ & 1);
if(or__3943__auto____9329)
{return or__3943__auto____9329;
} else
{return G__9327__9328.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__9327__9328.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9327__9328);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__9327__9328);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__9330__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__9330 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9330__delegate.call(this, f, c1, c2, c3, colls);
};
G__9330.cljs$lang$maxFixedArity = 4;
G__9330.cljs$lang$applyTo = (function (arglist__9331){
var f = cljs.core.first(arglist__9331);
var c1 = cljs.core.first(cljs.core.next(arglist__9331));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9331)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9331))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9331))));
return G__9330__delegate(f, c1, c2, c3, colls);
});
G__9330.cljs$lang$arity$variadic = G__9330__delegate;
return G__9330;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw('Invalid arity: ' + arguments.length);
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9338 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9338)
{var s__9339 = temp__4092__auto____9338;
var p__9340 = cljs.core.take.call(null,n,s__9339);
if((n === cljs.core.count.call(null,p__9340)))
{return cljs.core.cons.call(null,p__9340,partition.call(null,n,step,cljs.core.drop.call(null,step,s__9339)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____9341 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____9341)
{var s__9342 = temp__4092__auto____9341;
var p__9343 = cljs.core.take.call(null,n,s__9342);
if((n === cljs.core.count.call(null,p__9343)))
{return cljs.core.cons.call(null,p__9343,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__9342)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__9343,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__9348 = cljs.core.lookup_sentinel;
var m__9349 = m;
var ks__9350 = cljs.core.seq.call(null,ks);
while(true){
if(ks__9350)
{var m__9351 = cljs.core._lookup.call(null,m__9349,cljs.core.first.call(null,ks__9350),sentinel__9348);
if((sentinel__9348 === m__9351))
{return not_found;
} else
{{
var G__9352 = sentinel__9348;
var G__9353 = m__9351;
var G__9354 = cljs.core.next.call(null,ks__9350);
sentinel__9348 = G__9352;
m__9349 = G__9353;
ks__9350 = G__9354;
continue;
}
}
} else
{return m__9349;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__9355,v){
var vec__9360__9361 = p__9355;
var k__9362 = cljs.core.nth.call(null,vec__9360__9361,0,null);
var ks__9363 = cljs.core.nthnext.call(null,vec__9360__9361,1);
if(cljs.core.truth_(ks__9363))
{return cljs.core.assoc.call(null,m,k__9362,assoc_in.call(null,cljs.core._lookup.call(null,m,k__9362,null),ks__9363,v));
} else
{return cljs.core.assoc.call(null,m,k__9362,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__9364,f,args){
var vec__9369__9370 = p__9364;
var k__9371 = cljs.core.nth.call(null,vec__9369__9370,0,null);
var ks__9372 = cljs.core.nthnext.call(null,vec__9369__9370,1);
if(cljs.core.truth_(ks__9372))
{return cljs.core.assoc.call(null,m,k__9371,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k__9371,null),ks__9372,f,args));
} else
{return cljs.core.assoc.call(null,m,k__9371,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k__9371,null),args));
}
};
var update_in = function (m,p__9364,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__9364, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__9373){
var m = cljs.core.first(arglist__9373);
var p__9364 = cljs.core.first(cljs.core.next(arglist__9373));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9373)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9373)));
return update_in__delegate(m, p__9364, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9376 = this;
var h__2213__auto____9377 = this__9376.__hash;
if(!((h__2213__auto____9377 == null)))
{return h__2213__auto____9377;
} else
{var h__2213__auto____9378 = cljs.core.hash_coll.call(null,coll);
this__9376.__hash = h__2213__auto____9378;
return h__2213__auto____9378;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9379 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9380 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9381 = this;
var new_array__9382 = this__9381.array.slice();
(new_array__9382[k] = v);
return (new cljs.core.Vector(this__9381.meta,new_array__9382,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__9413 = null;
var G__9413__2 = (function (this_sym9383,k){
var this__9385 = this;
var this_sym9383__9386 = this;
var coll__9387 = this_sym9383__9386;
return coll__9387.cljs$core$ILookup$_lookup$arity$2(coll__9387,k);
});
var G__9413__3 = (function (this_sym9384,k,not_found){
var this__9385 = this;
var this_sym9384__9388 = this;
var coll__9389 = this_sym9384__9388;
return coll__9389.cljs$core$ILookup$_lookup$arity$3(coll__9389,k,not_found);
});
G__9413 = function(this_sym9384,k,not_found){
switch(arguments.length){
case 2:
return G__9413__2.call(this,this_sym9384,k);
case 3:
return G__9413__3.call(this,this_sym9384,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9413;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym9374,args9375){
var this__9390 = this;
return this_sym9374.call.apply(this_sym9374,[this_sym9374].concat(args9375.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9391 = this;
var new_array__9392 = this__9391.array.slice();
new_array__9392.push(o);
return (new cljs.core.Vector(this__9391.meta,new_array__9392,null));
});
cljs.core.Vector.prototype.toString = (function (){
var this__9393 = this;
var this__9394 = this;
return cljs.core.pr_str.call(null,this__9394);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9395 = this;
return cljs.core.ci_reduce.call(null,this__9395.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9396 = this;
return cljs.core.ci_reduce.call(null,this__9396.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9397 = this;
if((this__9397.array.length > 0))
{var vector_seq__9398 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < this__9397.array.length))
{return cljs.core.cons.call(null,(this__9397.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq__9398.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9399 = this;
return this__9399.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9400 = this;
var count__9401 = this__9400.array.length;
if((count__9401 > 0))
{return (this__9400.array[(count__9401 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9402 = this;
if((this__9402.array.length > 0))
{var new_array__9403 = this__9402.array.slice();
new_array__9403.pop();
return (new cljs.core.Vector(this__9402.meta,new_array__9403,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9404 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9405 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9406 = this;
return (new cljs.core.Vector(meta,this__9406.array,this__9406.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9407 = this;
return this__9407.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9408 = this;
if((function (){var and__3941__auto____9409 = (0 <= n);
if(and__3941__auto____9409)
{return (n < this__9408.array.length);
} else
{return and__3941__auto____9409;
}
})())
{return (this__9408.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9410 = this;
if((function (){var and__3941__auto____9411 = (0 <= n);
if(and__3941__auto____9411)
{return (n < this__9410.array.length);
} else
{return and__3941__auto____9411;
}
})())
{return (this__9410.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9412 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9412.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__2331__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode;
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__9415 = pv.cnt;
if((cnt__9415 < 32))
{return 0;
} else
{return (((cnt__9415 - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll__9421 = level;
var ret__9422 = node;
while(true){
if((ll__9421 === 0))
{return ret__9422;
} else
{var embed__9423 = ret__9422;
var r__9424 = cljs.core.pv_fresh_node.call(null,edit);
var ___9425 = cljs.core.pv_aset.call(null,r__9424,0,embed__9423);
{
var G__9426 = (ll__9421 - 5);
var G__9427 = r__9424;
ll__9421 = G__9426;
ret__9422 = G__9427;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__9433 = cljs.core.pv_clone_node.call(null,parent);
var subidx__9434 = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret__9433,subidx__9434,tailnode);
return ret__9433;
} else
{var child__9435 = cljs.core.pv_aget.call(null,parent,subidx__9434);
if(!((child__9435 == null)))
{var node_to_insert__9436 = push_tail.call(null,pv,(level - 5),child__9435,tailnode);
cljs.core.pv_aset.call(null,ret__9433,subidx__9434,node_to_insert__9436);
return ret__9433;
} else
{var node_to_insert__9437 = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret__9433,subidx__9434,node_to_insert__9437);
return ret__9433;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3941__auto____9441 = (0 <= i);
if(and__3941__auto____9441)
{return (i < pv.cnt);
} else
{return and__3941__auto____9441;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node__9442 = pv.root;
var level__9443 = pv.shift;
while(true){
if((level__9443 > 0))
{{
var G__9444 = cljs.core.pv_aget.call(null,node__9442,((i >>> level__9443) & 31));
var G__9445 = (level__9443 - 5);
node__9442 = G__9444;
level__9443 = G__9445;
continue;
}
} else
{return node__9442.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__9448 = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret__9448,(i & 31),val);
return ret__9448;
} else
{var subidx__9449 = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9448,subidx__9449,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9449),i,val));
return ret__9448;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__9455 = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9456 = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx__9455));
if((function (){var and__3941__auto____9457 = (new_child__9456 == null);
if(and__3941__auto____9457)
{return (subidx__9455 === 0);
} else
{return and__3941__auto____9457;
}
})())
{return null;
} else
{var ret__9458 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9458,subidx__9455,new_child__9456);
return ret__9458;
}
} else
{if((subidx__9455 === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret__9459 = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret__9459,subidx__9455,null);
return ret__9459;
} else
{return null;
}
}
}
});
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9462 = this;
return (new cljs.core.TransientVector(this__9462.cnt,this__9462.shift,cljs.core.tv_editable_root.call(null,this__9462.root),cljs.core.tv_editable_tail.call(null,this__9462.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9463 = this;
var h__2213__auto____9464 = this__9463.__hash;
if(!((h__2213__auto____9464 == null)))
{return h__2213__auto____9464;
} else
{var h__2213__auto____9465 = cljs.core.hash_coll.call(null,coll);
this__9463.__hash = h__2213__auto____9465;
return h__2213__auto____9465;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9466 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9467 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9468 = this;
if((function (){var and__3941__auto____9469 = (0 <= k);
if(and__3941__auto____9469)
{return (k < this__9468.cnt);
} else
{return and__3941__auto____9469;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail__9470 = this__9468.tail.slice();
(new_tail__9470[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__9468.meta,this__9468.cnt,this__9468.shift,this__9468.root,new_tail__9470,null));
} else
{return (new cljs.core.PersistentVector(this__9468.meta,this__9468.cnt,this__9468.shift,cljs.core.do_assoc.call(null,coll,this__9468.shift,this__9468.root,k,v),this__9468.tail,null));
}
} else
{if((k === this__9468.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(this__9468.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__9518 = null;
var G__9518__2 = (function (this_sym9471,k){
var this__9473 = this;
var this_sym9471__9474 = this;
var coll__9475 = this_sym9471__9474;
return coll__9475.cljs$core$ILookup$_lookup$arity$2(coll__9475,k);
});
var G__9518__3 = (function (this_sym9472,k,not_found){
var this__9473 = this;
var this_sym9472__9476 = this;
var coll__9477 = this_sym9472__9476;
return coll__9477.cljs$core$ILookup$_lookup$arity$3(coll__9477,k,not_found);
});
G__9518 = function(this_sym9472,k,not_found){
switch(arguments.length){
case 2:
return G__9518__2.call(this,this_sym9472,k);
case 3:
return G__9518__3.call(this,this_sym9472,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9518;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym9460,args9461){
var this__9478 = this;
return this_sym9460.call.apply(this_sym9460,[this_sym9460].concat(args9461.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var this__9479 = this;
var step_init__9480 = [0,init];
var i__9481 = 0;
while(true){
if((i__9481 < this__9479.cnt))
{var arr__9482 = cljs.core.array_for.call(null,v,i__9481);
var len__9483 = arr__9482.length;
var init__9487 = (function (){var j__9484 = 0;
var init__9485 = (step_init__9480[1]);
while(true){
if((j__9484 < len__9483))
{var init__9486 = f.call(null,init__9485,(j__9484 + i__9481),(arr__9482[j__9484]));
if(cljs.core.reduced_QMARK_.call(null,init__9486))
{return init__9486;
} else
{{
var G__9519 = (j__9484 + 1);
var G__9520 = init__9486;
j__9484 = G__9519;
init__9485 = G__9520;
continue;
}
}
} else
{(step_init__9480[0] = len__9483);
(step_init__9480[1] = init__9485);
return init__9485;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9487))
{return cljs.core.deref.call(null,init__9487);
} else
{{
var G__9521 = (i__9481 + (step_init__9480[0]));
i__9481 = G__9521;
continue;
}
}
} else
{return (step_init__9480[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9488 = this;
if(((this__9488.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail__9489 = this__9488.tail.slice();
new_tail__9489.push(o);
return (new cljs.core.PersistentVector(this__9488.meta,(this__9488.cnt + 1),this__9488.shift,this__9488.root,new_tail__9489,null));
} else
{var root_overflow_QMARK___9490 = ((this__9488.cnt >>> 5) > (1 << this__9488.shift));
var new_shift__9491 = ((root_overflow_QMARK___9490)?(this__9488.shift + 5):this__9488.shift);
var new_root__9493 = ((root_overflow_QMARK___9490)?(function (){var n_r__9492 = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r__9492,0,this__9488.root);
cljs.core.pv_aset.call(null,n_r__9492,1,cljs.core.new_path.call(null,null,this__9488.shift,(new cljs.core.VectorNode(null,this__9488.tail))));
return n_r__9492;
})():cljs.core.push_tail.call(null,coll,this__9488.shift,this__9488.root,(new cljs.core.VectorNode(null,this__9488.tail))));
return (new cljs.core.PersistentVector(this__9488.meta,(this__9488.cnt + 1),new_shift__9491,new_root__9493,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__9494 = this;
if((this__9494.cnt > 0))
{return (new cljs.core.RSeq(coll,(this__9494.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var this__9495 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var this__9496 = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__9497 = this;
var this__9498 = this;
return cljs.core.pr_str.call(null,this__9498);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var this__9499 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var this__9500 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9501 = this;
if((this__9501.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9502 = this;
return this__9502.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9503 = this;
if((this__9503.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(this__9503.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9504 = this;
if((this__9504.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9504.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9504.meta);
} else
{if((1 < (this__9504.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(this__9504.meta,(this__9504.cnt - 1),this__9504.shift,this__9504.root,this__9504.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail__9505 = cljs.core.array_for.call(null,coll,(this__9504.cnt - 2));
var nr__9506 = cljs.core.pop_tail.call(null,coll,this__9504.shift,this__9504.root);
var new_root__9507 = (((nr__9506 == null))?cljs.core.PersistentVector.EMPTY_NODE:nr__9506);
var cnt_1__9508 = (this__9504.cnt - 1);
if((function (){var and__3941__auto____9509 = (5 < this__9504.shift);
if(and__3941__auto____9509)
{return (cljs.core.pv_aget.call(null,new_root__9507,1) == null);
} else
{return and__3941__auto____9509;
}
})())
{return (new cljs.core.PersistentVector(this__9504.meta,cnt_1__9508,(this__9504.shift - 5),cljs.core.pv_aget.call(null,new_root__9507,0),new_tail__9505,null));
} else
{return (new cljs.core.PersistentVector(this__9504.meta,cnt_1__9508,this__9504.shift,new_root__9507,new_tail__9505,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9510 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9511 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9512 = this;
return (new cljs.core.PersistentVector(meta,this__9512.cnt,this__9512.shift,this__9512.root,this__9512.tail,this__9512.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9513 = this;
return this__9513.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9514 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9515 = this;
if((function (){var and__3941__auto____9516 = (0 <= n);
if(and__3941__auto____9516)
{return (n < this__9515.cnt);
} else
{return and__3941__auto____9516;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9517 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9517.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l__9522 = xs.length;
var xs__9523 = (((no_clone === true))?xs:xs.slice());
if((l__9522 < 32))
{return (new cljs.core.PersistentVector(null,l__9522,5,cljs.core.PersistentVector.EMPTY_NODE,xs__9523,null));
} else
{var node__9524 = xs__9523.slice(0,32);
var v__9525 = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node__9524,null));
var i__9526 = 32;
var out__9527 = cljs.core._as_transient.call(null,v__9525);
while(true){
if((i__9526 < l__9522))
{{
var G__9528 = (i__9526 + 1);
var G__9529 = cljs.core.conj_BANG_.call(null,out__9527,(xs__9523[i__9526]));
i__9526 = G__9528;
out__9527 = G__9529;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9527);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__9530){
var args = cljs.core.seq(arglist__9530);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 27525356;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var this__9531 = this;
if(((this__9531.off + 1) < this__9531.node.length))
{var s__9532 = cljs.core.chunked_seq.call(null,this__9531.vec,this__9531.node,this__9531.i,(this__9531.off + 1));
if((s__9532 == null))
{return null;
} else
{return s__9532;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9533 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9534 = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9535 = this;
return (this__9535.node[this__9535.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9536 = this;
if(((this__9536.off + 1) < this__9536.node.length))
{var s__9537 = cljs.core.chunked_seq.call(null,this__9536.vec,this__9536.node,this__9536.i,(this__9536.off + 1));
if((s__9537 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9537;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var this__9538 = this;
var l__9539 = this__9538.node.length;
var s__9540 = ((((this__9538.i + l__9539) < cljs.core._count.call(null,this__9538.vec)))?cljs.core.chunked_seq.call(null,this__9538.vec,(this__9538.i + l__9539),0):null);
if((s__9540 == null))
{return null;
} else
{return s__9540;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9541 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var this__9542 = this;
return cljs.core.chunked_seq.call(null,this__9542.vec,this__9542.node,this__9542.i,this__9542.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var this__9543 = this;
return this__9543.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9544 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__9544.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var this__9545 = this;
return cljs.core.array_chunk.call(null,this__9545.node,this__9545.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var this__9546 = this;
var l__9547 = this__9546.node.length;
var s__9548 = ((((this__9546.i + l__9547) < cljs.core._count.call(null,this__9546.vec)))?cljs.core.chunked_seq.call(null,this__9546.vec,(this__9546.i + l__9547),0):null);
if((s__9548 == null))
{return cljs.core.List.EMPTY;
} else
{return s__9548;
}
});
cljs.core.ChunkedSeq;
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw('Invalid arity: ' + arguments.length);
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9551 = this;
var h__2213__auto____9552 = this__9551.__hash;
if(!((h__2213__auto____9552 == null)))
{return h__2213__auto____9552;
} else
{var h__2213__auto____9553 = cljs.core.hash_coll.call(null,coll);
this__9551.__hash = h__2213__auto____9553;
return h__2213__auto____9553;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9554 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9555 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var this__9556 = this;
var v_pos__9557 = (this__9556.start + key);
return (new cljs.core.Subvec(this__9556.meta,cljs.core._assoc.call(null,this__9556.v,v_pos__9557,val),this__9556.start,((this__9556.end > (v_pos__9557 + 1)) ? this__9556.end : (v_pos__9557 + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__9583 = null;
var G__9583__2 = (function (this_sym9558,k){
var this__9560 = this;
var this_sym9558__9561 = this;
var coll__9562 = this_sym9558__9561;
return coll__9562.cljs$core$ILookup$_lookup$arity$2(coll__9562,k);
});
var G__9583__3 = (function (this_sym9559,k,not_found){
var this__9560 = this;
var this_sym9559__9563 = this;
var coll__9564 = this_sym9559__9563;
return coll__9564.cljs$core$ILookup$_lookup$arity$3(coll__9564,k,not_found);
});
G__9583 = function(this_sym9559,k,not_found){
switch(arguments.length){
case 2:
return G__9583__2.call(this,this_sym9559,k);
case 3:
return G__9583__3.call(this,this_sym9559,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9583;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym9549,args9550){
var this__9565 = this;
return this_sym9549.call.apply(this_sym9549,[this_sym9549].concat(args9550.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9566 = this;
return (new cljs.core.Subvec(this__9566.meta,cljs.core._assoc_n.call(null,this__9566.v,this__9566.end,o),this__9566.start,(this__9566.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__9567 = this;
var this__9568 = this;
return cljs.core.pr_str.call(null,this__9568);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var this__9569 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var this__9570 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9571 = this;
var subvec_seq__9572 = (function subvec_seq(i){
if((i === this__9571.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__9571.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq__9572.call(null,this__9571.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9573 = this;
return (this__9573.end - this__9573.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9574 = this;
return cljs.core._nth.call(null,this__9574.v,(this__9574.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9575 = this;
if((this__9575.start === this__9575.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__9575.meta,this__9575.v,this__9575.start,(this__9575.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var this__9576 = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9577 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9578 = this;
return (new cljs.core.Subvec(meta,this__9578.v,this__9578.start,this__9578.end,this__9578.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9579 = this;
return this__9579.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9580 = this;
return cljs.core._nth.call(null,this__9580.v,(this__9580.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9581 = this;
return cljs.core._nth.call(null,this__9581.v,(this__9581.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9582 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__9582.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret__9585 = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret__9585,0,tl.length);
return ret__9585;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret__9589 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx__9590 = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret__9589,subidx__9590,(((level === 5))?tail_node:(function (){var child__9591 = cljs.core.pv_aget.call(null,ret__9589,subidx__9590);
if(!((child__9591 == null)))
{return tv_push_tail.call(null,tv,(level - 5),child__9591,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret__9589;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__9596 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx__9597 = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child__9598 = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__9596,subidx__9597));
if((function (){var and__3941__auto____9599 = (new_child__9598 == null);
if(and__3941__auto____9599)
{return (subidx__9597 === 0);
} else
{return and__3941__auto____9599;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__9596,subidx__9597,new_child__9598);
return node__9596;
}
} else
{if((subidx__9597 === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__9596,subidx__9597,null);
return node__9596;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3941__auto____9604 = (0 <= i);
if(and__3941__auto____9604)
{return (i < tv.cnt);
} else
{return and__3941__auto____9604;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root__9605 = tv.root;
var node__9606 = root__9605;
var level__9607 = tv.shift;
while(true){
if((level__9607 > 0))
{{
var G__9608 = cljs.core.tv_ensure_editable.call(null,root__9605.edit,cljs.core.pv_aget.call(null,node__9606,((i >>> level__9607) & 31)));
var G__9609 = (level__9607 - 5);
node__9606 = G__9608;
level__9607 = G__9609;
continue;
}
} else
{return node__9606.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 22;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__9649 = null;
var G__9649__2 = (function (this_sym9612,k){
var this__9614 = this;
var this_sym9612__9615 = this;
var coll__9616 = this_sym9612__9615;
return coll__9616.cljs$core$ILookup$_lookup$arity$2(coll__9616,k);
});
var G__9649__3 = (function (this_sym9613,k,not_found){
var this__9614 = this;
var this_sym9613__9617 = this;
var coll__9618 = this_sym9613__9617;
return coll__9618.cljs$core$ILookup$_lookup$arity$3(coll__9618,k,not_found);
});
G__9649 = function(this_sym9613,k,not_found){
switch(arguments.length){
case 2:
return G__9649__2.call(this,this_sym9613,k);
case 3:
return G__9649__3.call(this,this_sym9613,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9649;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym9610,args9611){
var this__9619 = this;
return this_sym9610.call.apply(this_sym9610,[this_sym9610].concat(args9611.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9620 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9621 = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var this__9622 = this;
if(this__9622.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var this__9623 = this;
if((function (){var and__3941__auto____9624 = (0 <= n);
if(and__3941__auto____9624)
{return (n < this__9623.cnt);
} else
{return and__3941__auto____9624;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9625 = this;
if(this__9625.root.edit)
{return this__9625.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var this__9626 = this;
if(this__9626.root.edit)
{if((function (){var and__3941__auto____9627 = (0 <= n);
if(and__3941__auto____9627)
{return (n < this__9626.cnt);
} else
{return and__3941__auto____9627;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(this__9626.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root__9632 = (function go(level,node){
var node__9630 = cljs.core.tv_ensure_editable.call(null,this__9626.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__9630,(n & 31),val);
return node__9630;
} else
{var subidx__9631 = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__9630,subidx__9631,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__9630,subidx__9631)));
return node__9630;
}
}).call(null,this__9626.shift,this__9626.root);
this__9626.root = new_root__9632;
return tcoll;
}
} else
{if((n === this__9626.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(this__9626.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var this__9633 = this;
if(this__9633.root.edit)
{if((this__9633.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === this__9633.cnt))
{this__9633.cnt = 0;
return tcoll;
} else
{if((((this__9633.cnt - 1) & 31) > 0))
{this__9633.cnt = (this__9633.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail__9634 = cljs.core.editable_array_for.call(null,tcoll,(this__9633.cnt - 2));
var new_root__9636 = (function (){var nr__9635 = cljs.core.tv_pop_tail.call(null,tcoll,this__9633.shift,this__9633.root);
if(!((nr__9635 == null)))
{return nr__9635;
} else
{return (new cljs.core.VectorNode(this__9633.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3941__auto____9637 = (5 < this__9633.shift);
if(and__3941__auto____9637)
{return (cljs.core.pv_aget.call(null,new_root__9636,1) == null);
} else
{return and__3941__auto____9637;
}
})())
{var new_root__9638 = cljs.core.tv_ensure_editable.call(null,this__9633.root.edit,cljs.core.pv_aget.call(null,new_root__9636,0));
this__9633.root = new_root__9638;
this__9633.shift = (this__9633.shift - 5);
this__9633.cnt = (this__9633.cnt - 1);
this__9633.tail = new_tail__9634;
return tcoll;
} else
{this__9633.root = new_root__9636;
this__9633.cnt = (this__9633.cnt - 1);
this__9633.tail = new_tail__9634;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9639 = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9640 = this;
if(this__9640.root.edit)
{if(((this__9640.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(this__9640.tail[(this__9640.cnt & 31)] = o);
this__9640.cnt = (this__9640.cnt + 1);
return tcoll;
} else
{var tail_node__9641 = (new cljs.core.VectorNode(this__9640.root.edit,this__9640.tail));
var new_tail__9642 = cljs.core.make_array.call(null,32);
(new_tail__9642[0] = o);
this__9640.tail = new_tail__9642;
if(((this__9640.cnt >>> 5) > (1 << this__9640.shift)))
{var new_root_array__9643 = cljs.core.make_array.call(null,32);
var new_shift__9644 = (this__9640.shift + 5);
(new_root_array__9643[0] = this__9640.root);
(new_root_array__9643[1] = cljs.core.new_path.call(null,this__9640.root.edit,this__9640.shift,tail_node__9641));
this__9640.root = (new cljs.core.VectorNode(this__9640.root.edit,new_root_array__9643));
this__9640.shift = new_shift__9644;
this__9640.cnt = (this__9640.cnt + 1);
return tcoll;
} else
{var new_root__9645 = cljs.core.tv_push_tail.call(null,tcoll,this__9640.shift,this__9640.root,tail_node__9641);
this__9640.root = new_root__9645;
this__9640.cnt = (this__9640.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9646 = this;
if(this__9646.root.edit)
{this__9646.root.edit = null;
var len__9647 = (this__9646.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail__9648 = cljs.core.make_array.call(null,len__9647);
cljs.core.array_copy.call(null,this__9646.tail,0,trimmed_tail__9648,0,len__9647);
return (new cljs.core.PersistentVector(null,this__9646.cnt,this__9646.shift,this__9646.root,trimmed_tail__9648,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientVector;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9650 = this;
var h__2213__auto____9651 = this__9650.__hash;
if(!((h__2213__auto____9651 == null)))
{return h__2213__auto____9651;
} else
{var h__2213__auto____9652 = cljs.core.hash_coll.call(null,coll);
this__9650.__hash = h__2213__auto____9652;
return h__2213__auto____9652;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9653 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__9654 = this;
var this__9655 = this;
return cljs.core.pr_str.call(null,this__9655);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9656 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9657 = this;
return cljs.core._first.call(null,this__9657.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9658 = this;
var temp__4090__auto____9659 = cljs.core.next.call(null,this__9658.front);
if(temp__4090__auto____9659)
{var f1__9660 = temp__4090__auto____9659;
return (new cljs.core.PersistentQueueSeq(this__9658.meta,f1__9660,this__9658.rear,null));
} else
{if((this__9658.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__9658.meta,this__9658.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9661 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9662 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__9662.front,this__9662.rear,this__9662.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9663 = this;
return this__9663.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9664 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9664.meta);
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9665 = this;
var h__2213__auto____9666 = this__9665.__hash;
if(!((h__2213__auto____9666 == null)))
{return h__2213__auto____9666;
} else
{var h__2213__auto____9667 = cljs.core.hash_coll.call(null,coll);
this__9665.__hash = h__2213__auto____9667;
return h__2213__auto____9667;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__9668 = this;
if(cljs.core.truth_(this__9668.front))
{return (new cljs.core.PersistentQueue(this__9668.meta,(this__9668.count + 1),this__9668.front,cljs.core.conj.call(null,(function (){var or__3943__auto____9669 = this__9668.rear;
if(cljs.core.truth_(or__3943__auto____9669))
{return or__3943__auto____9669;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(this__9668.meta,(this__9668.count + 1),cljs.core.conj.call(null,this__9668.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__9670 = this;
var this__9671 = this;
return cljs.core.pr_str.call(null,this__9671);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9672 = this;
var rear__9673 = cljs.core.seq.call(null,this__9672.rear);
if(cljs.core.truth_((function (){var or__3943__auto____9674 = this__9672.front;
if(cljs.core.truth_(or__3943__auto____9674))
{return or__3943__auto____9674;
} else
{return rear__9673;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__9672.front,cljs.core.seq.call(null,rear__9673),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9675 = this;
return this__9675.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var this__9676 = this;
return cljs.core._first.call(null,this__9676.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var this__9677 = this;
if(cljs.core.truth_(this__9677.front))
{var temp__4090__auto____9678 = cljs.core.next.call(null,this__9677.front);
if(temp__4090__auto____9678)
{var f1__9679 = temp__4090__auto____9678;
return (new cljs.core.PersistentQueue(this__9677.meta,(this__9677.count - 1),f1__9679,this__9677.rear,null));
} else
{return (new cljs.core.PersistentQueue(this__9677.meta,(this__9677.count - 1),cljs.core.seq.call(null,this__9677.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__9680 = this;
return cljs.core.first.call(null,this__9680.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__9681 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9682 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9683 = this;
return (new cljs.core.PersistentQueue(meta,this__9683.count,this__9683.front,this__9683.rear,this__9683.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9684 = this;
return this__9684.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9685 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__9686 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__9689 = array.length;
var i__9690 = 0;
while(true){
if((i__9690 < len__9689))
{if((k === (array[i__9690])))
{return i__9690;
} else
{{
var G__9691 = (i__9690 + incr);
i__9690 = G__9691;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__9694 = cljs.core.hash.call(null,a);
var b__9695 = cljs.core.hash.call(null,b);
if((a__9694 < b__9695))
{return -1;
} else
{if((a__9694 > b__9695))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks__9703 = m.keys;
var len__9704 = ks__9703.length;
var so__9705 = m.strobj;
var out__9706 = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i__9707 = 0;
var out__9708 = cljs.core.transient$.call(null,out__9706);
while(true){
if((i__9707 < len__9704))
{var k__9709 = (ks__9703[i__9707]);
{
var G__9710 = (i__9707 + 1);
var G__9711 = cljs.core.assoc_BANG_.call(null,out__9708,k__9709,(so__9705[k__9709]));
i__9707 = G__9710;
out__9708 = G__9711;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__9708,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj__9717 = {};
var l__9718 = ks.length;
var i__9719 = 0;
while(true){
if((i__9719 < l__9718))
{var k__9720 = (ks[i__9719]);
(new_obj__9717[k__9720] = (obj[k__9720]));
{
var G__9721 = (i__9719 + 1);
i__9719 = G__9721;
continue;
}
} else
{}
break;
}
return new_obj__9717;
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9724 = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9725 = this;
var h__2213__auto____9726 = this__9725.__hash;
if(!((h__2213__auto____9726 == null)))
{return h__2213__auto____9726;
} else
{var h__2213__auto____9727 = cljs.core.hash_imap.call(null,coll);
this__9725.__hash = h__2213__auto____9727;
return h__2213__auto____9727;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9728 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9729 = this;
if((function (){var and__3941__auto____9730 = goog.isString(k);
if(and__3941__auto____9730)
{return !((cljs.core.scan_array.call(null,1,k,this__9729.keys) == null));
} else
{return and__3941__auto____9730;
}
})())
{return (this__9729.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9731 = this;
if(goog.isString(k))
{if((function (){var or__3943__auto____9732 = (this__9731.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3943__auto____9732)
{return or__3943__auto____9732;
} else
{return (this__9731.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,this__9731.keys) == null)))
{var new_strobj__9733 = cljs.core.obj_clone.call(null,this__9731.strobj,this__9731.keys);
(new_strobj__9733[k] = v);
return (new cljs.core.ObjMap(this__9731.meta,this__9731.keys,new_strobj__9733,(this__9731.update_count + 1),null));
} else
{var new_strobj__9734 = cljs.core.obj_clone.call(null,this__9731.strobj,this__9731.keys);
var new_keys__9735 = this__9731.keys.slice();
(new_strobj__9734[k] = v);
new_keys__9735.push(k);
return (new cljs.core.ObjMap(this__9731.meta,new_keys__9735,new_strobj__9734,(this__9731.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9736 = this;
if((function (){var and__3941__auto____9737 = goog.isString(k);
if(and__3941__auto____9737)
{return !((cljs.core.scan_array.call(null,1,k,this__9736.keys) == null));
} else
{return and__3941__auto____9737;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__9759 = null;
var G__9759__2 = (function (this_sym9738,k){
var this__9740 = this;
var this_sym9738__9741 = this;
var coll__9742 = this_sym9738__9741;
return coll__9742.cljs$core$ILookup$_lookup$arity$2(coll__9742,k);
});
var G__9759__3 = (function (this_sym9739,k,not_found){
var this__9740 = this;
var this_sym9739__9743 = this;
var coll__9744 = this_sym9739__9743;
return coll__9744.cljs$core$ILookup$_lookup$arity$3(coll__9744,k,not_found);
});
G__9759 = function(this_sym9739,k,not_found){
switch(arguments.length){
case 2:
return G__9759__2.call(this,this_sym9739,k);
case 3:
return G__9759__3.call(this,this_sym9739,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9759;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym9722,args9723){
var this__9745 = this;
return this_sym9722.call.apply(this_sym9722,[this_sym9722].concat(args9723.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9746 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__9747 = this;
var this__9748 = this;
return cljs.core.pr_str.call(null,this__9748);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9749 = this;
if((this__9749.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__9712_SHARP_){
return cljs.core.vector.call(null,p1__9712_SHARP_,(this__9749.strobj[p1__9712_SHARP_]));
}),this__9749.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9750 = this;
return this__9750.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9751 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9752 = this;
return (new cljs.core.ObjMap(meta,this__9752.keys,this__9752.strobj,this__9752.update_count,this__9752.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9753 = this;
return this__9753.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9754 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__9754.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9755 = this;
if((function (){var and__3941__auto____9756 = goog.isString(k);
if(and__3941__auto____9756)
{return !((cljs.core.scan_array.call(null,1,k,this__9755.keys) == null));
} else
{return and__3941__auto____9756;
}
})())
{var new_keys__9757 = this__9755.keys.slice();
var new_strobj__9758 = cljs.core.obj_clone.call(null,this__9755.strobj,this__9755.keys);
new_keys__9757.splice(cljs.core.scan_array.call(null,1,k,new_keys__9757),1);
cljs.core.js_delete.call(null,new_strobj__9758,k);
return (new cljs.core.ObjMap(this__9755.meta,new_keys__9757,new_strobj__9758,(this__9755.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9763 = this;
var h__2213__auto____9764 = this__9763.__hash;
if(!((h__2213__auto____9764 == null)))
{return h__2213__auto____9764;
} else
{var h__2213__auto____9765 = cljs.core.hash_imap.call(null,coll);
this__9763.__hash = h__2213__auto____9765;
return h__2213__auto____9765;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9766 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9767 = this;
var bucket__9768 = (this__9767.hashobj[cljs.core.hash.call(null,k)]);
var i__9769 = (cljs.core.truth_(bucket__9768)?cljs.core.scan_array.call(null,2,k,bucket__9768):null);
if(cljs.core.truth_(i__9769))
{return (bucket__9768[(i__9769 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9770 = this;
var h__9771 = cljs.core.hash.call(null,k);
var bucket__9772 = (this__9770.hashobj[h__9771]);
if(cljs.core.truth_(bucket__9772))
{var new_bucket__9773 = bucket__9772.slice();
var new_hashobj__9774 = goog.object.clone(this__9770.hashobj);
(new_hashobj__9774[h__9771] = new_bucket__9773);
var temp__4090__auto____9775 = cljs.core.scan_array.call(null,2,k,new_bucket__9773);
if(cljs.core.truth_(temp__4090__auto____9775))
{var i__9776 = temp__4090__auto____9775;
(new_bucket__9773[(i__9776 + 1)] = v);
return (new cljs.core.HashMap(this__9770.meta,this__9770.count,new_hashobj__9774,null));
} else
{new_bucket__9773.push(k,v);
return (new cljs.core.HashMap(this__9770.meta,(this__9770.count + 1),new_hashobj__9774,null));
}
} else
{var new_hashobj__9777 = goog.object.clone(this__9770.hashobj);
(new_hashobj__9777[h__9771] = [k,v]);
return (new cljs.core.HashMap(this__9770.meta,(this__9770.count + 1),new_hashobj__9777,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9778 = this;
var bucket__9779 = (this__9778.hashobj[cljs.core.hash.call(null,k)]);
var i__9780 = (cljs.core.truth_(bucket__9779)?cljs.core.scan_array.call(null,2,k,bucket__9779):null);
if(cljs.core.truth_(i__9780))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__9805 = null;
var G__9805__2 = (function (this_sym9781,k){
var this__9783 = this;
var this_sym9781__9784 = this;
var coll__9785 = this_sym9781__9784;
return coll__9785.cljs$core$ILookup$_lookup$arity$2(coll__9785,k);
});
var G__9805__3 = (function (this_sym9782,k,not_found){
var this__9783 = this;
var this_sym9782__9786 = this;
var coll__9787 = this_sym9782__9786;
return coll__9787.cljs$core$ILookup$_lookup$arity$3(coll__9787,k,not_found);
});
G__9805 = function(this_sym9782,k,not_found){
switch(arguments.length){
case 2:
return G__9805__2.call(this,this_sym9782,k);
case 3:
return G__9805__3.call(this,this_sym9782,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9805;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym9761,args9762){
var this__9788 = this;
return this_sym9761.call.apply(this_sym9761,[this_sym9761].concat(args9762.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9789 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__9790 = this;
var this__9791 = this;
return cljs.core.pr_str.call(null,this__9791);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9792 = this;
if((this__9792.count > 0))
{var hashes__9793 = cljs.core.js_keys.call(null,this__9792.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__9760_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__9792.hashobj[p1__9760_SHARP_])));
}),hashes__9793);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9794 = this;
return this__9794.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9795 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9796 = this;
return (new cljs.core.HashMap(meta,this__9796.count,this__9796.hashobj,this__9796.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9797 = this;
return this__9797.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9798 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__9798.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9799 = this;
var h__9800 = cljs.core.hash.call(null,k);
var bucket__9801 = (this__9799.hashobj[h__9800]);
var i__9802 = (cljs.core.truth_(bucket__9801)?cljs.core.scan_array.call(null,2,k,bucket__9801):null);
if(cljs.core.not.call(null,i__9802))
{return coll;
} else
{var new_hashobj__9803 = goog.object.clone(this__9799.hashobj);
if((3 > bucket__9801.length))
{cljs.core.js_delete.call(null,new_hashobj__9803,h__9800);
} else
{var new_bucket__9804 = bucket__9801.slice();
new_bucket__9804.splice(i__9802,2);
(new_hashobj__9803[h__9800] = new_bucket__9804);
}
return (new cljs.core.HashMap(this__9799.meta,(this__9799.count - 1),new_hashobj__9803,null));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__9806 = ks.length;
var i__9807 = 0;
var out__9808 = cljs.core.HashMap.EMPTY;
while(true){
if((i__9807 < len__9806))
{{
var G__9809 = (i__9807 + 1);
var G__9810 = cljs.core.assoc.call(null,out__9808,(ks[i__9807]),(vs[i__9807]));
i__9807 = G__9809;
out__9808 = G__9810;
continue;
}
} else
{return out__9808;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr__9814 = m.arr;
var len__9815 = arr__9814.length;
var i__9816 = 0;
while(true){
if((len__9815 <= i__9816))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr__9814[i__9816]),k))
{return i__9816;
} else
{if("\uFDD0'else")
{{
var G__9817 = (i__9816 + 2);
i__9816 = G__9817;
continue;
}
} else
{return null;
}
}
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__9820 = this;
return (new cljs.core.TransientArrayMap({},this__9820.arr.length,this__9820.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__9821 = this;
var h__2213__auto____9822 = this__9821.__hash;
if(!((h__2213__auto____9822 == null)))
{return h__2213__auto____9822;
} else
{var h__2213__auto____9823 = cljs.core.hash_imap.call(null,coll);
this__9821.__hash = h__2213__auto____9823;
return h__2213__auto____9823;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__9824 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__9825 = this;
var idx__9826 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9826 === -1))
{return not_found;
} else
{return (this__9825.arr[(idx__9826 + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__9827 = this;
var idx__9828 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9828 === -1))
{if((this__9827.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(this__9827.meta,(this__9827.cnt + 1),(function (){var G__9829__9830 = this__9827.arr.slice();
G__9829__9830.push(k);
G__9829__9830.push(v);
return G__9829__9830;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (this__9827.arr[(idx__9828 + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(this__9827.meta,this__9827.cnt,(function (){var G__9831__9832 = this__9827.arr.slice();
(G__9831__9832[(idx__9828 + 1)] = v);
return G__9831__9832;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__9833 = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__9865 = null;
var G__9865__2 = (function (this_sym9834,k){
var this__9836 = this;
var this_sym9834__9837 = this;
var coll__9838 = this_sym9834__9837;
return coll__9838.cljs$core$ILookup$_lookup$arity$2(coll__9838,k);
});
var G__9865__3 = (function (this_sym9835,k,not_found){
var this__9836 = this;
var this_sym9835__9839 = this;
var coll__9840 = this_sym9835__9839;
return coll__9840.cljs$core$ILookup$_lookup$arity$3(coll__9840,k,not_found);
});
G__9865 = function(this_sym9835,k,not_found){
switch(arguments.length){
case 2:
return G__9865__2.call(this,this_sym9835,k);
case 3:
return G__9865__3.call(this,this_sym9835,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9865;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym9818,args9819){
var this__9841 = this;
return this_sym9818.call.apply(this_sym9818,[this_sym9818].concat(args9819.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__9842 = this;
var len__9843 = this__9842.arr.length;
var i__9844 = 0;
var init__9845 = init;
while(true){
if((i__9844 < len__9843))
{var init__9846 = f.call(null,init__9845,(this__9842.arr[i__9844]),(this__9842.arr[(i__9844 + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__9846))
{return cljs.core.deref.call(null,init__9846);
} else
{{
var G__9866 = (i__9844 + 2);
var G__9867 = init__9846;
i__9844 = G__9866;
init__9845 = G__9867;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__9847 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var this__9848 = this;
var this__9849 = this;
return cljs.core.pr_str.call(null,this__9849);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__9850 = this;
if((this__9850.cnt > 0))
{var len__9851 = this__9850.arr.length;
var array_map_seq__9852 = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len__9851))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(this__9850.arr[i]),(this__9850.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq__9852.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__9853 = this;
return this__9853.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__9854 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__9855 = this;
return (new cljs.core.PersistentArrayMap(meta,this__9855.cnt,this__9855.arr,this__9855.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__9856 = this;
return this__9856.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__9857 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9857.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__9858 = this;
var idx__9859 = cljs.core.array_map_index_of.call(null,coll,k);
if((idx__9859 >= 0))
{var len__9860 = this__9858.arr.length;
var new_len__9861 = (len__9860 - 2);
if((new_len__9861 === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr__9862 = cljs.core.make_array.call(null,new_len__9861);
var s__9863 = 0;
var d__9864 = 0;
while(true){
if((s__9863 >= len__9860))
{return (new cljs.core.PersistentArrayMap(this__9858.meta,(this__9858.cnt - 1),new_arr__9862,null));
} else
{if(cljs.core._EQ_.call(null,k,(this__9858.arr[s__9863])))
{{
var G__9868 = (s__9863 + 2);
var G__9869 = d__9864;
s__9863 = G__9868;
d__9864 = G__9869;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr__9862[d__9864] = (this__9858.arr[s__9863]));
(new_arr__9862[(d__9864 + 1)] = (this__9858.arr[(s__9863 + 1)]));
{
var G__9870 = (s__9863 + 2);
var G__9871 = (d__9864 + 2);
s__9863 = G__9870;
d__9864 = G__9871;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap;
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len__9872 = cljs.core.count.call(null,ks);
var i__9873 = 0;
var out__9874 = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i__9873 < len__9872))
{{
var G__9875 = (i__9873 + 1);
var G__9876 = cljs.core.assoc_BANG_.call(null,out__9874,(ks[i__9873]),(vs[i__9873]));
i__9873 = G__9875;
out__9874 = G__9876;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__9874);
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__9877 = this;
if(cljs.core.truth_(this__9877.editable_QMARK_))
{var idx__9878 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9878 >= 0))
{(this__9877.arr[idx__9878] = (this__9877.arr[(this__9877.len - 2)]));
(this__9877.arr[(idx__9878 + 1)] = (this__9877.arr[(this__9877.len - 1)]));
var G__9879__9880 = this__9877.arr;
G__9879__9880.pop();
G__9879__9880.pop();
G__9879__9880;
this__9877.len = (this__9877.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__9881 = this;
if(cljs.core.truth_(this__9881.editable_QMARK_))
{var idx__9882 = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx__9882 === -1))
{if(((this__9881.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{this__9881.len = (this__9881.len + 2);
this__9881.arr.push(key);
this__9881.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,this__9881.len,this__9881.arr),key,val);
}
} else
{if((val === (this__9881.arr[(idx__9882 + 1)])))
{return tcoll;
} else
{(this__9881.arr[(idx__9882 + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__9883 = this;
if(cljs.core.truth_(this__9883.editable_QMARK_))
{if((function (){var G__9884__9885 = o;
if(G__9884__9885)
{if((function (){var or__3943__auto____9886 = (G__9884__9885.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____9886)
{return or__3943__auto____9886;
} else
{return G__9884__9885.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__9884__9885.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9884__9885);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__9884__9885);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__9887 = cljs.core.seq.call(null,o);
var tcoll__9888 = tcoll;
while(true){
var temp__4090__auto____9889 = cljs.core.first.call(null,es__9887);
if(cljs.core.truth_(temp__4090__auto____9889))
{var e__9890 = temp__4090__auto____9889;
{
var G__9896 = cljs.core.next.call(null,es__9887);
var G__9897 = tcoll__9888.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__9888,cljs.core.key.call(null,e__9890),cljs.core.val.call(null,e__9890));
es__9887 = G__9896;
tcoll__9888 = G__9897;
continue;
}
} else
{return tcoll__9888;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__9891 = this;
if(cljs.core.truth_(this__9891.editable_QMARK_))
{this__9891.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,this__9891.len,2),this__9891.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__9892 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__9893 = this;
if(cljs.core.truth_(this__9893.editable_QMARK_))
{var idx__9894 = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx__9894 === -1))
{return not_found;
} else
{return (this__9893.arr[(idx__9894 + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__9895 = this;
if(cljs.core.truth_(this__9895.editable_QMARK_))
{return cljs.core.quot.call(null,this__9895.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientArrayMap;
void 0;
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out__9900 = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i__9901 = 0;
while(true){
if((i__9901 < len))
{{
var G__9902 = cljs.core.assoc_BANG_.call(null,out__9900,(arr[i__9901]),(arr[(i__9901 + 1)]));
var G__9903 = (i__9901 + 2);
out__9900 = G__9902;
i__9901 = G__9903;
continue;
}
} else
{return out__9900;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__2331__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box;
void 0;
void 0;
void 0;
void 0;
void 0;
void 0;
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__9908__9909 = arr.slice();
(G__9908__9909[i] = a);
return G__9908__9909;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__9910__9911 = arr.slice();
(G__9910__9911[i] = a);
(G__9910__9911[j] = b);
return G__9910__9911;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr__9913 = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr__9913,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr__9913,(2 * i),(new_arr__9913.length - (2 * i)));
return new_arr__9913;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable__9916 = inode.ensure_editable(edit);
(editable__9916.arr[i] = a);
return editable__9916;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable__9917 = inode.ensure_editable(edit);
(editable__9917.arr[i] = a);
(editable__9917.arr[j] = b);
return editable__9917;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw('Invalid arity: ' + arguments.length);
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len__9924 = arr.length;
var i__9925 = 0;
var init__9926 = init;
while(true){
if((i__9925 < len__9924))
{var init__9929 = (function (){var k__9927 = (arr[i__9925]);
if(!((k__9927 == null)))
{return f.call(null,init__9926,k__9927,(arr[(i__9925 + 1)]));
} else
{var node__9928 = (arr[(i__9925 + 1)]);
if(!((node__9928 == null)))
{return node__9928.kv_reduce(f,init__9926);
} else
{return init__9926;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__9929))
{return cljs.core.deref.call(null,init__9929);
} else
{{
var G__9930 = (i__9925 + 2);
var G__9931 = init__9929;
i__9925 = G__9930;
init__9926 = G__9931;
continue;
}
}
} else
{return init__9926;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var this__9932 = this;
var inode__9933 = this;
if((this__9932.bitmap === bit))
{return null;
} else
{var editable__9934 = inode__9933.ensure_editable(e);
var earr__9935 = editable__9934.arr;
var len__9936 = earr__9935.length;
editable__9934.bitmap = (bit ^ editable__9934.bitmap);
cljs.core.array_copy.call(null,earr__9935,(2 * (i + 1)),earr__9935,(2 * i),(len__9936 - (2 * (i + 1))));
(earr__9935[(len__9936 - 2)] = null);
(earr__9935[(len__9936 - 1)] = null);
return editable__9934;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__9937 = this;
var inode__9938 = this;
var bit__9939 = (1 << ((hash >>> shift) & 0x01f));
var idx__9940 = cljs.core.bitmap_indexed_node_index.call(null,this__9937.bitmap,bit__9939);
if(((this__9937.bitmap & bit__9939) === 0))
{var n__9941 = cljs.core.bit_count.call(null,this__9937.bitmap);
if(((2 * n__9941) < this__9937.arr.length))
{var editable__9942 = inode__9938.ensure_editable(edit);
var earr__9943 = editable__9942.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr__9943,(2 * idx__9940),earr__9943,(2 * (idx__9940 + 1)),(2 * (n__9941 - idx__9940)));
(earr__9943[(2 * idx__9940)] = key);
(earr__9943[((2 * idx__9940) + 1)] = val);
editable__9942.bitmap = (editable__9942.bitmap | bit__9939);
return editable__9942;
} else
{if((n__9941 >= 16))
{var nodes__9944 = cljs.core.make_array.call(null,32);
var jdx__9945 = ((hash >>> shift) & 0x01f);
(nodes__9944[jdx__9945] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9946 = 0;
var j__9947 = 0;
while(true){
if((i__9946 < 32))
{if((((this__9937.bitmap >>> i__9946) & 1) === 0))
{{
var G__10000 = (i__9946 + 1);
var G__10001 = j__9947;
i__9946 = G__10000;
j__9947 = G__10001;
continue;
}
} else
{(nodes__9944[i__9946] = ((!(((this__9937.arr[j__9947]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),cljs.core.hash.call(null,(this__9937.arr[j__9947])),(this__9937.arr[j__9947]),(this__9937.arr[(j__9947 + 1)]),added_leaf_QMARK_):(this__9937.arr[(j__9947 + 1)])));
{
var G__10002 = (i__9946 + 1);
var G__10003 = (j__9947 + 2);
i__9946 = G__10002;
j__9947 = G__10003;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit,(n__9941 + 1),nodes__9944));
} else
{if("\uFDD0'else")
{var new_arr__9948 = cljs.core.make_array.call(null,(2 * (n__9941 + 4)));
cljs.core.array_copy.call(null,this__9937.arr,0,new_arr__9948,0,(2 * idx__9940));
(new_arr__9948[(2 * idx__9940)] = key);
(new_arr__9948[((2 * idx__9940) + 1)] = val);
cljs.core.array_copy.call(null,this__9937.arr,(2 * idx__9940),new_arr__9948,(2 * (idx__9940 + 1)),(2 * (n__9941 - idx__9940)));
added_leaf_QMARK_.val = true;
var editable__9949 = inode__9938.ensure_editable(edit);
editable__9949.arr = new_arr__9948;
editable__9949.bitmap = (editable__9949.bitmap | bit__9939);
return editable__9949;
} else
{return null;
}
}
}
} else
{var key_or_nil__9950 = (this__9937.arr[(2 * idx__9940)]);
var val_or_node__9951 = (this__9937.arr[((2 * idx__9940) + 1)]);
if((key_or_nil__9950 == null))
{var n__9952 = val_or_node__9951.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9952 === val_or_node__9951))
{return inode__9938;
} else
{return cljs.core.edit_and_set.call(null,inode__9938,edit,((2 * idx__9940) + 1),n__9952);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9950))
{if((val === val_or_node__9951))
{return inode__9938;
} else
{return cljs.core.edit_and_set.call(null,inode__9938,edit,((2 * idx__9940) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode__9938,edit,(2 * idx__9940),null,((2 * idx__9940) + 1),cljs.core.create_node.call(null,edit,(shift + 5),key_or_nil__9950,val_or_node__9951,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var this__9953 = this;
var inode__9954 = this;
return cljs.core.create_inode_seq.call(null,this__9953.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__9955 = this;
var inode__9956 = this;
var bit__9957 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9955.bitmap & bit__9957) === 0))
{return inode__9956;
} else
{var idx__9958 = cljs.core.bitmap_indexed_node_index.call(null,this__9955.bitmap,bit__9957);
var key_or_nil__9959 = (this__9955.arr[(2 * idx__9958)]);
var val_or_node__9960 = (this__9955.arr[((2 * idx__9958) + 1)]);
if((key_or_nil__9959 == null))
{var n__9961 = val_or_node__9960.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__9961 === val_or_node__9960))
{return inode__9956;
} else
{if(!((n__9961 == null)))
{return cljs.core.edit_and_set.call(null,inode__9956,edit,((2 * idx__9958) + 1),n__9961);
} else
{if((this__9955.bitmap === bit__9957))
{return null;
} else
{if("\uFDD0'else")
{return inode__9956.edit_and_remove_pair(edit,bit__9957,idx__9958);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9959))
{(removed_leaf_QMARK_[0] = true);
return inode__9956.edit_and_remove_pair(edit,bit__9957,idx__9958);
} else
{if("\uFDD0'else")
{return inode__9956;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var this__9962 = this;
var inode__9963 = this;
if((e === this__9962.edit))
{return inode__9963;
} else
{var n__9964 = cljs.core.bit_count.call(null,this__9962.bitmap);
var new_arr__9965 = cljs.core.make_array.call(null,(((n__9964 < 0))?4:(2 * (n__9964 + 1))));
cljs.core.array_copy.call(null,this__9962.arr,0,new_arr__9965,0,(2 * n__9964));
return (new cljs.core.BitmapIndexedNode(e,this__9962.bitmap,new_arr__9965));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var this__9966 = this;
var inode__9967 = this;
return cljs.core.inode_kv_reduce.call(null,this__9966.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__9968 = this;
var inode__9969 = this;
var bit__9970 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9968.bitmap & bit__9970) === 0))
{return not_found;
} else
{var idx__9971 = cljs.core.bitmap_indexed_node_index.call(null,this__9968.bitmap,bit__9970);
var key_or_nil__9972 = (this__9968.arr[(2 * idx__9971)]);
var val_or_node__9973 = (this__9968.arr[((2 * idx__9971) + 1)]);
if((key_or_nil__9972 == null))
{return val_or_node__9973.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9972))
{return cljs.core.PersistentVector.fromArray([key_or_nil__9972,val_or_node__9973], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var this__9974 = this;
var inode__9975 = this;
var bit__9976 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9974.bitmap & bit__9976) === 0))
{return inode__9975;
} else
{var idx__9977 = cljs.core.bitmap_indexed_node_index.call(null,this__9974.bitmap,bit__9976);
var key_or_nil__9978 = (this__9974.arr[(2 * idx__9977)]);
var val_or_node__9979 = (this__9974.arr[((2 * idx__9977) + 1)]);
if((key_or_nil__9978 == null))
{var n__9980 = val_or_node__9979.inode_without((shift + 5),hash,key);
if((n__9980 === val_or_node__9979))
{return inode__9975;
} else
{if(!((n__9980 == null)))
{return (new cljs.core.BitmapIndexedNode(null,this__9974.bitmap,cljs.core.clone_and_set.call(null,this__9974.arr,((2 * idx__9977) + 1),n__9980)));
} else
{if((this__9974.bitmap === bit__9976))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(this__9974.bitmap ^ bit__9976),cljs.core.remove_pair.call(null,this__9974.arr,idx__9977)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9978))
{return (new cljs.core.BitmapIndexedNode(null,(this__9974.bitmap ^ bit__9976),cljs.core.remove_pair.call(null,this__9974.arr,idx__9977)));
} else
{if("\uFDD0'else")
{return inode__9975;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__9981 = this;
var inode__9982 = this;
var bit__9983 = (1 << ((hash >>> shift) & 0x01f));
var idx__9984 = cljs.core.bitmap_indexed_node_index.call(null,this__9981.bitmap,bit__9983);
if(((this__9981.bitmap & bit__9983) === 0))
{var n__9985 = cljs.core.bit_count.call(null,this__9981.bitmap);
if((n__9985 >= 16))
{var nodes__9986 = cljs.core.make_array.call(null,32);
var jdx__9987 = ((hash >>> shift) & 0x01f);
(nodes__9986[jdx__9987] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i__9988 = 0;
var j__9989 = 0;
while(true){
if((i__9988 < 32))
{if((((this__9981.bitmap >>> i__9988) & 1) === 0))
{{
var G__10004 = (i__9988 + 1);
var G__10005 = j__9989;
i__9988 = G__10004;
j__9989 = G__10005;
continue;
}
} else
{(nodes__9986[i__9988] = ((!(((this__9981.arr[j__9989]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(this__9981.arr[j__9989])),(this__9981.arr[j__9989]),(this__9981.arr[(j__9989 + 1)]),added_leaf_QMARK_):(this__9981.arr[(j__9989 + 1)])));
{
var G__10006 = (i__9988 + 1);
var G__10007 = (j__9989 + 2);
i__9988 = G__10006;
j__9989 = G__10007;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n__9985 + 1),nodes__9986));
} else
{var new_arr__9990 = cljs.core.make_array.call(null,(2 * (n__9985 + 1)));
cljs.core.array_copy.call(null,this__9981.arr,0,new_arr__9990,0,(2 * idx__9984));
(new_arr__9990[(2 * idx__9984)] = key);
(new_arr__9990[((2 * idx__9984) + 1)] = val);
cljs.core.array_copy.call(null,this__9981.arr,(2 * idx__9984),new_arr__9990,(2 * (idx__9984 + 1)),(2 * (n__9985 - idx__9984)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(this__9981.bitmap | bit__9983),new_arr__9990));
}
} else
{var key_or_nil__9991 = (this__9981.arr[(2 * idx__9984)]);
var val_or_node__9992 = (this__9981.arr[((2 * idx__9984) + 1)]);
if((key_or_nil__9991 == null))
{var n__9993 = val_or_node__9992.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__9993 === val_or_node__9992))
{return inode__9982;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9981.bitmap,cljs.core.clone_and_set.call(null,this__9981.arr,((2 * idx__9984) + 1),n__9993)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9991))
{if((val === val_or_node__9992))
{return inode__9982;
} else
{return (new cljs.core.BitmapIndexedNode(null,this__9981.bitmap,cljs.core.clone_and_set.call(null,this__9981.arr,((2 * idx__9984) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,this__9981.bitmap,cljs.core.clone_and_set.call(null,this__9981.arr,(2 * idx__9984),null,((2 * idx__9984) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil__9991,val_or_node__9992,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__9994 = this;
var inode__9995 = this;
var bit__9996 = (1 << ((hash >>> shift) & 0x01f));
if(((this__9994.bitmap & bit__9996) === 0))
{return not_found;
} else
{var idx__9997 = cljs.core.bitmap_indexed_node_index.call(null,this__9994.bitmap,bit__9996);
var key_or_nil__9998 = (this__9994.arr[(2 * idx__9997)]);
var val_or_node__9999 = (this__9994.arr[((2 * idx__9997) + 1)]);
if((key_or_nil__9998 == null))
{return val_or_node__9999.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil__9998))
{return val_or_node__9999;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode;
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr__10015 = array_node.arr;
var len__10016 = (2 * (array_node.cnt - 1));
var new_arr__10017 = cljs.core.make_array.call(null,len__10016);
var i__10018 = 0;
var j__10019 = 1;
var bitmap__10020 = 0;
while(true){
if((i__10018 < len__10016))
{if((function (){var and__3941__auto____10021 = !((i__10018 === idx));
if(and__3941__auto____10021)
{return !(((arr__10015[i__10018]) == null));
} else
{return and__3941__auto____10021;
}
})())
{(new_arr__10017[j__10019] = (arr__10015[i__10018]));
{
var G__10022 = (i__10018 + 1);
var G__10023 = (j__10019 + 2);
var G__10024 = (bitmap__10020 | (1 << i__10018));
i__10018 = G__10022;
j__10019 = G__10023;
bitmap__10020 = G__10024;
continue;
}
} else
{{
var G__10025 = (i__10018 + 1);
var G__10026 = j__10019;
var G__10027 = bitmap__10020;
i__10018 = G__10025;
j__10019 = G__10026;
bitmap__10020 = G__10027;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap__10020,new_arr__10017));
}
break;
}
});

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10028 = this;
var inode__10029 = this;
var idx__10030 = ((hash >>> shift) & 0x01f);
var node__10031 = (this__10028.arr[idx__10030]);
if((node__10031 == null))
{var editable__10032 = cljs.core.edit_and_set.call(null,inode__10029,edit,idx__10030,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable__10032.cnt = (editable__10032.cnt + 1);
return editable__10032;
} else
{var n__10033 = node__10031.inode_assoc_BANG_(edit,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10033 === node__10031))
{return inode__10029;
} else
{return cljs.core.edit_and_set.call(null,inode__10029,edit,idx__10030,n__10033);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var this__10034 = this;
var inode__10035 = this;
return cljs.core.create_array_node_seq.call(null,this__10034.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10036 = this;
var inode__10037 = this;
var idx__10038 = ((hash >>> shift) & 0x01f);
var node__10039 = (this__10036.arr[idx__10038]);
if((node__10039 == null))
{return inode__10037;
} else
{var n__10040 = node__10039.inode_without_BANG_(edit,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n__10040 === node__10039))
{return inode__10037;
} else
{if((n__10040 == null))
{if((this__10036.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10037,edit,idx__10038);
} else
{var editable__10041 = cljs.core.edit_and_set.call(null,inode__10037,edit,idx__10038,n__10040);
editable__10041.cnt = (editable__10041.cnt - 1);
return editable__10041;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode__10037,edit,idx__10038,n__10040);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var this__10042 = this;
var inode__10043 = this;
if((e === this__10042.edit))
{return inode__10043;
} else
{return (new cljs.core.ArrayNode(e,this__10042.cnt,this__10042.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var this__10044 = this;
var inode__10045 = this;
var len__10046 = this__10044.arr.length;
var i__10047 = 0;
var init__10048 = init;
while(true){
if((i__10047 < len__10046))
{var node__10049 = (this__10044.arr[i__10047]);
if(!((node__10049 == null)))
{var init__10050 = node__10049.kv_reduce(f,init__10048);
if(cljs.core.reduced_QMARK_.call(null,init__10050))
{return cljs.core.deref.call(null,init__10050);
} else
{{
var G__10069 = (i__10047 + 1);
var G__10070 = init__10050;
i__10047 = G__10069;
init__10048 = G__10070;
continue;
}
}
} else
{return null;
}
} else
{return init__10048;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10051 = this;
var inode__10052 = this;
var idx__10053 = ((hash >>> shift) & 0x01f);
var node__10054 = (this__10051.arr[idx__10053]);
if(!((node__10054 == null)))
{return node__10054.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var this__10055 = this;
var inode__10056 = this;
var idx__10057 = ((hash >>> shift) & 0x01f);
var node__10058 = (this__10055.arr[idx__10057]);
if(!((node__10058 == null)))
{var n__10059 = node__10058.inode_without((shift + 5),hash,key);
if((n__10059 === node__10058))
{return inode__10056;
} else
{if((n__10059 == null))
{if((this__10055.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode__10056,null,idx__10057);
} else
{return (new cljs.core.ArrayNode(null,(this__10055.cnt - 1),cljs.core.clone_and_set.call(null,this__10055.arr,idx__10057,n__10059)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,this__10055.cnt,cljs.core.clone_and_set.call(null,this__10055.arr,idx__10057,n__10059)));
} else
{return null;
}
}
}
} else
{return inode__10056;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10060 = this;
var inode__10061 = this;
var idx__10062 = ((hash >>> shift) & 0x01f);
var node__10063 = (this__10060.arr[idx__10062]);
if((node__10063 == null))
{return (new cljs.core.ArrayNode(null,(this__10060.cnt + 1),cljs.core.clone_and_set.call(null,this__10060.arr,idx__10062,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n__10064 = node__10063.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n__10064 === node__10063))
{return inode__10061;
} else
{return (new cljs.core.ArrayNode(null,this__10060.cnt,cljs.core.clone_and_set.call(null,this__10060.arr,idx__10062,n__10064)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10065 = this;
var inode__10066 = this;
var idx__10067 = ((hash >>> shift) & 0x01f);
var node__10068 = (this__10065.arr[idx__10067]);
if(!((node__10068 == null)))
{return node__10068.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode;
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim__10073 = (2 * cnt);
var i__10074 = 0;
while(true){
if((i__10074 < lim__10073))
{if(cljs.core.key_test.call(null,key,(arr[i__10074])))
{return i__10074;
} else
{{
var G__10075 = (i__10074 + 2);
i__10074 = G__10075;
continue;
}
}
} else
{return -1;
}
break;
}
});

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit,shift,hash,key,val,added_leaf_QMARK_){
var this__10076 = this;
var inode__10077 = this;
if((hash === this__10076.collision_hash))
{var idx__10078 = cljs.core.hash_collision_node_find_index.call(null,this__10076.arr,this__10076.cnt,key);
if((idx__10078 === -1))
{if((this__10076.arr.length > (2 * this__10076.cnt)))
{var editable__10079 = cljs.core.edit_and_set.call(null,inode__10077,edit,(2 * this__10076.cnt),key,((2 * this__10076.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable__10079.cnt = (editable__10079.cnt + 1);
return editable__10079;
} else
{var len__10080 = this__10076.arr.length;
var new_arr__10081 = cljs.core.make_array.call(null,(len__10080 + 2));
cljs.core.array_copy.call(null,this__10076.arr,0,new_arr__10081,0,len__10080);
(new_arr__10081[len__10080] = key);
(new_arr__10081[(len__10080 + 1)] = val);
added_leaf_QMARK_.val = true;
return inode__10077.ensure_editable_array(edit,(this__10076.cnt + 1),new_arr__10081);
}
} else
{if(((this__10076.arr[(idx__10078 + 1)]) === val))
{return inode__10077;
} else
{return cljs.core.edit_and_set.call(null,inode__10077,edit,(idx__10078 + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,(1 << ((this__10076.collision_hash >>> shift) & 0x01f)),[null,inode__10077,null,null])).inode_assoc_BANG_(edit,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var this__10082 = this;
var inode__10083 = this;
return cljs.core.create_inode_seq.call(null,this__10082.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit,shift,hash,key,removed_leaf_QMARK_){
var this__10084 = this;
var inode__10085 = this;
var idx__10086 = cljs.core.hash_collision_node_find_index.call(null,this__10084.arr,this__10084.cnt,key);
if((idx__10086 === -1))
{return inode__10085;
} else
{(removed_leaf_QMARK_[0] = true);
if((this__10084.cnt === 1))
{return null;
} else
{var editable__10087 = inode__10085.ensure_editable(edit);
var earr__10088 = editable__10087.arr;
(earr__10088[idx__10086] = (earr__10088[((2 * this__10084.cnt) - 2)]));
(earr__10088[(idx__10086 + 1)] = (earr__10088[((2 * this__10084.cnt) - 1)]));
(earr__10088[((2 * this__10084.cnt) - 1)] = null);
(earr__10088[((2 * this__10084.cnt) - 2)] = null);
editable__10087.cnt = (editable__10087.cnt - 1);
return editable__10087;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var this__10089 = this;
var inode__10090 = this;
if((e === this__10089.edit))
{return inode__10090;
} else
{var new_arr__10091 = cljs.core.make_array.call(null,(2 * (this__10089.cnt + 1)));
cljs.core.array_copy.call(null,this__10089.arr,0,new_arr__10091,0,(2 * this__10089.cnt));
return (new cljs.core.HashCollisionNode(e,this__10089.collision_hash,this__10089.cnt,new_arr__10091));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var this__10092 = this;
var inode__10093 = this;
return cljs.core.inode_kv_reduce.call(null,this__10092.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var this__10094 = this;
var inode__10095 = this;
var idx__10096 = cljs.core.hash_collision_node_find_index.call(null,this__10094.arr,this__10094.cnt,key);
if((idx__10096 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10094.arr[idx__10096])))
{return cljs.core.PersistentVector.fromArray([(this__10094.arr[idx__10096]),(this__10094.arr[(idx__10096 + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var this__10097 = this;
var inode__10098 = this;
var idx__10099 = cljs.core.hash_collision_node_find_index.call(null,this__10097.arr,this__10097.cnt,key);
if((idx__10099 === -1))
{return inode__10098;
} else
{if((this__10097.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,this__10097.collision_hash,(this__10097.cnt - 1),cljs.core.remove_pair.call(null,this__10097.arr,cljs.core.quot.call(null,idx__10099,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var this__10100 = this;
var inode__10101 = this;
if((hash === this__10100.collision_hash))
{var idx__10102 = cljs.core.hash_collision_node_find_index.call(null,this__10100.arr,this__10100.cnt,key);
if((idx__10102 === -1))
{var len__10103 = this__10100.arr.length;
var new_arr__10104 = cljs.core.make_array.call(null,(len__10103 + 2));
cljs.core.array_copy.call(null,this__10100.arr,0,new_arr__10104,0,len__10103);
(new_arr__10104[len__10103] = key);
(new_arr__10104[(len__10103 + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,this__10100.collision_hash,(this__10100.cnt + 1),new_arr__10104));
} else
{if(cljs.core._EQ_.call(null,(this__10100.arr[idx__10102]),val))
{return inode__10101;
} else
{return (new cljs.core.HashCollisionNode(null,this__10100.collision_hash,this__10100.cnt,cljs.core.clone_and_set.call(null,this__10100.arr,(idx__10102 + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((this__10100.collision_hash >>> shift) & 0x01f)),[null,inode__10101])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var this__10105 = this;
var inode__10106 = this;
var idx__10107 = cljs.core.hash_collision_node_find_index.call(null,this__10105.arr,this__10105.cnt,key);
if((idx__10107 < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(this__10105.arr[idx__10107])))
{return (this__10105.arr[(idx__10107 + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var this__10108 = this;
var inode__10109 = this;
if((e === this__10108.edit))
{this__10108.arr = array;
this__10108.cnt = count;
return inode__10109;
} else
{return (new cljs.core.HashCollisionNode(this__10108.edit,this__10108.collision_hash,count,array));
}
});
cljs.core.HashCollisionNode;
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash__10114 = cljs.core.hash.call(null,key1);
if((key1hash__10114 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10114,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10115 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash__10114,key1,val1,added_leaf_QMARK___10115).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK___10115);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash__10116 = cljs.core.hash.call(null,key1);
if((key1hash__10116 === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash__10116,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK___10117 = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash__10116,key1,val1,added_leaf_QMARK___10117).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK___10117);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw('Invalid arity: ' + arguments.length);
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10118 = this;
var h__2213__auto____10119 = this__10118.__hash;
if(!((h__2213__auto____10119 == null)))
{return h__2213__auto____10119;
} else
{var h__2213__auto____10120 = cljs.core.hash_coll.call(null,coll);
this__10118.__hash = h__2213__auto____10120;
return h__2213__auto____10120;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10121 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var this__10122 = this;
var this__10123 = this;
return cljs.core.pr_str.call(null,this__10123);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10124 = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10125 = this;
if((this__10125.s == null))
{return cljs.core.PersistentVector.fromArray([(this__10125.nodes[this__10125.i]),(this__10125.nodes[(this__10125.i + 1)])], true);
} else
{return cljs.core.first.call(null,this__10125.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10126 = this;
if((this__10126.s == null))
{return cljs.core.create_inode_seq.call(null,this__10126.nodes,(this__10126.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,this__10126.nodes,this__10126.i,cljs.core.next.call(null,this__10126.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10127 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10128 = this;
return (new cljs.core.NodeSeq(meta,this__10128.nodes,this__10128.i,this__10128.s,this__10128.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10129 = this;
return this__10129.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10130 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10130.meta);
});
cljs.core.NodeSeq;
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len__10137 = nodes.length;
var j__10138 = i;
while(true){
if((j__10138 < len__10137))
{if(!(((nodes[j__10138]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j__10138,null,null));
} else
{var temp__4090__auto____10139 = (nodes[(j__10138 + 1)]);
if(cljs.core.truth_(temp__4090__auto____10139))
{var node__10140 = temp__4090__auto____10139;
var temp__4090__auto____10141 = node__10140.inode_seq();
if(cljs.core.truth_(temp__4090__auto____10141))
{var node_seq__10142 = temp__4090__auto____10141;
return (new cljs.core.NodeSeq(null,nodes,(j__10138 + 2),node_seq__10142,null));
} else
{{
var G__10143 = (j__10138 + 2);
j__10138 = G__10143;
continue;
}
}
} else
{{
var G__10144 = (j__10138 + 2);
j__10138 = G__10144;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10145 = this;
var h__2213__auto____10146 = this__10145.__hash;
if(!((h__2213__auto____10146 == null)))
{return h__2213__auto____10146;
} else
{var h__2213__auto____10147 = cljs.core.hash_coll.call(null,coll);
this__10145.__hash = h__2213__auto____10147;
return h__2213__auto____10147;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10148 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var this__10149 = this;
var this__10150 = this;
return cljs.core.pr_str.call(null,this__10150);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10151 = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var this__10152 = this;
return cljs.core.first.call(null,this__10152.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var this__10153 = this;
return cljs.core.create_array_node_seq.call(null,null,this__10153.nodes,this__10153.i,cljs.core.next.call(null,this__10153.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10154 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10155 = this;
return (new cljs.core.ArrayNodeSeq(meta,this__10155.nodes,this__10155.i,this__10155.s,this__10155.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10156 = this;
return this__10156.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10157 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10157.meta);
});
cljs.core.ArrayNodeSeq;
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len__10164 = nodes.length;
var j__10165 = i;
while(true){
if((j__10165 < len__10164))
{var temp__4090__auto____10166 = (nodes[j__10165]);
if(cljs.core.truth_(temp__4090__auto____10166))
{var nj__10167 = temp__4090__auto____10166;
var temp__4090__auto____10168 = nj__10167.inode_seq();
if(cljs.core.truth_(temp__4090__auto____10168))
{var ns__10169 = temp__4090__auto____10168;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j__10165 + 1),ns__10169,null));
} else
{{
var G__10170 = (j__10165 + 1);
j__10165 = G__10170;
continue;
}
}
} else
{{
var G__10171 = (j__10165 + 1);
j__10165 = G__10171;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw('Invalid arity: ' + arguments.length);
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10174 = this;
return (new cljs.core.TransientHashMap({},this__10174.root,this__10174.cnt,this__10174.has_nil_QMARK_,this__10174.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10175 = this;
var h__2213__auto____10176 = this__10175.__hash;
if(!((h__2213__auto____10176 == null)))
{return h__2213__auto____10176;
} else
{var h__2213__auto____10177 = cljs.core.hash_imap.call(null,coll);
this__10175.__hash = h__2213__auto____10177;
return h__2213__auto____10177;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10178 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10179 = this;
if((k == null))
{if(this__10179.has_nil_QMARK_)
{return this__10179.nil_val;
} else
{return not_found;
}
} else
{if((this__10179.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return this__10179.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10180 = this;
if((k == null))
{if((function (){var and__3941__auto____10181 = this__10180.has_nil_QMARK_;
if(and__3941__auto____10181)
{return (v === this__10180.nil_val);
} else
{return and__3941__auto____10181;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10180.meta,((this__10180.has_nil_QMARK_)?this__10180.cnt:(this__10180.cnt + 1)),this__10180.root,true,v,null));
}
} else
{var added_leaf_QMARK___10182 = (new cljs.core.Box(false));
var new_root__10183 = (((this__10180.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10180.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10182);
if((new_root__10183 === this__10180.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10180.meta,((added_leaf_QMARK___10182.val)?(this__10180.cnt + 1):this__10180.cnt),new_root__10183,this__10180.has_nil_QMARK_,this__10180.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10184 = this;
if((k == null))
{return this__10184.has_nil_QMARK_;
} else
{if((this__10184.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((this__10184.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__10207 = null;
var G__10207__2 = (function (this_sym10185,k){
var this__10187 = this;
var this_sym10185__10188 = this;
var coll__10189 = this_sym10185__10188;
return coll__10189.cljs$core$ILookup$_lookup$arity$2(coll__10189,k);
});
var G__10207__3 = (function (this_sym10186,k,not_found){
var this__10187 = this;
var this_sym10186__10190 = this;
var coll__10191 = this_sym10186__10190;
return coll__10191.cljs$core$ILookup$_lookup$arity$3(coll__10191,k,not_found);
});
G__10207 = function(this_sym10186,k,not_found){
switch(arguments.length){
case 2:
return G__10207__2.call(this,this_sym10186,k);
case 3:
return G__10207__3.call(this,this_sym10186,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10207;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym10172,args10173){
var this__10192 = this;
return this_sym10172.call.apply(this_sym10172,[this_sym10172].concat(args10173.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10193 = this;
var init__10194 = ((this__10193.has_nil_QMARK_)?f.call(null,init,null,this__10193.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__10194))
{return cljs.core.deref.call(null,init__10194);
} else
{if(!((this__10193.root == null)))
{return this__10193.root.kv_reduce(f,init__10194);
} else
{if("\uFDD0'else")
{return init__10194;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10195 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var this__10196 = this;
var this__10197 = this;
return cljs.core.pr_str.call(null,this__10197);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10198 = this;
if((this__10198.cnt > 0))
{var s__10199 = ((!((this__10198.root == null)))?this__10198.root.inode_seq():null);
if(this__10198.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,this__10198.nil_val], true),s__10199);
} else
{return s__10199;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10200 = this;
return this__10200.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10201 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10202 = this;
return (new cljs.core.PersistentHashMap(meta,this__10202.cnt,this__10202.root,this__10202.has_nil_QMARK_,this__10202.nil_val,this__10202.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10203 = this;
return this__10203.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10204 = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,this__10204.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10205 = this;
if((k == null))
{if(this__10205.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(this__10205.meta,(this__10205.cnt - 1),this__10205.root,false,null,null));
} else
{return coll;
}
} else
{if((this__10205.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root__10206 = this__10205.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root__10206 === this__10205.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(this__10205.meta,(this__10205.cnt - 1),new_root__10206,this__10205.has_nil_QMARK_,this__10205.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap;
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len__10208 = ks.length;
var i__10209 = 0;
var out__10210 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i__10209 < len__10208))
{{
var G__10211 = (i__10209 + 1);
var G__10212 = cljs.core.assoc_BANG_.call(null,out__10210,(ks[i__10209]),(vs[i__10209]));
i__10209 = G__10211;
out__10210 = G__10212;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10210);
}
break;
}
});

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 14;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var this__10213 = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var this__10214 = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var this__10215 = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10216 = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var this__10217 = this;
if((k == null))
{if(this__10217.has_nil_QMARK_)
{return this__10217.nil_val;
} else
{return null;
}
} else
{if((this__10217.root == null))
{return null;
} else
{return this__10217.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var this__10218 = this;
if((k == null))
{if(this__10218.has_nil_QMARK_)
{return this__10218.nil_val;
} else
{return not_found;
}
} else
{if((this__10218.root == null))
{return not_found;
} else
{return this__10218.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10219 = this;
if(this__10219.edit)
{return this__10219.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var this__10220 = this;
var tcoll__10221 = this;
if(this__10220.edit)
{if((function (){var G__10222__10223 = o;
if(G__10222__10223)
{if((function (){var or__3943__auto____10224 = (G__10222__10223.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto____10224)
{return or__3943__auto____10224;
} else
{return G__10222__10223.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__10222__10223.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10222__10223);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__10222__10223);
}
})())
{return tcoll__10221.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es__10225 = cljs.core.seq.call(null,o);
var tcoll__10226 = tcoll__10221;
while(true){
var temp__4090__auto____10227 = cljs.core.first.call(null,es__10225);
if(cljs.core.truth_(temp__4090__auto____10227))
{var e__10228 = temp__4090__auto____10227;
{
var G__10239 = cljs.core.next.call(null,es__10225);
var G__10240 = tcoll__10226.assoc_BANG_(cljs.core.key.call(null,e__10228),cljs.core.val.call(null,e__10228));
es__10225 = G__10239;
tcoll__10226 = G__10240;
continue;
}
} else
{return tcoll__10226;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var this__10229 = this;
var tcoll__10230 = this;
if(this__10229.edit)
{if((k == null))
{if((this__10229.nil_val === v))
{} else
{this__10229.nil_val = v;
}
if(this__10229.has_nil_QMARK_)
{} else
{this__10229.count = (this__10229.count + 1);
this__10229.has_nil_QMARK_ = true;
}
return tcoll__10230;
} else
{var added_leaf_QMARK___10231 = (new cljs.core.Box(false));
var node__10232 = (((this__10229.root == null))?cljs.core.BitmapIndexedNode.EMPTY:this__10229.root).inode_assoc_BANG_(this__10229.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK___10231);
if((node__10232 === this__10229.root))
{} else
{this__10229.root = node__10232;
}
if(added_leaf_QMARK___10231.val)
{this__10229.count = (this__10229.count + 1);
} else
{}
return tcoll__10230;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var this__10233 = this;
var tcoll__10234 = this;
if(this__10233.edit)
{if((k == null))
{if(this__10233.has_nil_QMARK_)
{this__10233.has_nil_QMARK_ = false;
this__10233.nil_val = null;
this__10233.count = (this__10233.count - 1);
return tcoll__10234;
} else
{return tcoll__10234;
}
} else
{if((this__10233.root == null))
{return tcoll__10234;
} else
{var removed_leaf_QMARK___10235 = (new cljs.core.Box(false));
var node__10236 = this__10233.root.inode_without_BANG_(this__10233.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK___10235);
if((node__10236 === this__10233.root))
{} else
{this__10233.root = node__10236;
}
if(cljs.core.truth_((removed_leaf_QMARK___10235[0])))
{this__10233.count = (this__10233.count - 1);
} else
{}
return tcoll__10234;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var this__10237 = this;
var tcoll__10238 = this;
if(this__10237.edit)
{this__10237.edit = null;
return (new cljs.core.PersistentHashMap(null,this__10237.count,this__10237.root,this__10237.has_nil_QMARK_,this__10237.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientHashMap;
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t__10243 = node;
var stack__10244 = stack;
while(true){
if(!((t__10243 == null)))
{{
var G__10245 = ((ascending_QMARK_)?t__10243.left:t__10243.right);
var G__10246 = cljs.core.conj.call(null,stack__10244,t__10243);
t__10243 = G__10245;
stack__10244 = G__10246;
continue;
}
} else
{return stack__10244;
}
break;
}
});

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850570;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10247 = this;
var h__2213__auto____10248 = this__10247.__hash;
if(!((h__2213__auto____10248 == null)))
{return h__2213__auto____10248;
} else
{var h__2213__auto____10249 = cljs.core.hash_coll.call(null,coll);
this__10247.__hash = h__2213__auto____10249;
return h__2213__auto____10249;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10250 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var this__10251 = this;
var this__10252 = this;
return cljs.core.pr_str.call(null,this__10252);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var this__10253 = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10254 = this;
if((this__10254.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return this__10254.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var this__10255 = this;
return cljs.core.peek.call(null,this__10255.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var this__10256 = this;
var t__10257 = cljs.core.first.call(null,this__10256.stack);
var next_stack__10258 = cljs.core.tree_map_seq_push.call(null,((this__10256.ascending_QMARK_)?t__10257.right:t__10257.left),cljs.core.next.call(null,this__10256.stack),this__10256.ascending_QMARK_);
if(!((next_stack__10258 == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack__10258,this__10256.ascending_QMARK_,(this__10256.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10259 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10260 = this;
return (new cljs.core.PersistentTreeMapSeq(meta,this__10260.stack,this__10260.ascending_QMARK_,this__10260.cnt,this__10260.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10261 = this;
return this__10261.meta;
});
cljs.core.PersistentTreeMapSeq;
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
void 0;
void 0;
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3941__auto____10263 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3941__auto____10263)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3941__auto____10263;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3941__auto____10265 = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3941__auto____10265)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3941__auto____10265;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__10269 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__10269))
{return cljs.core.deref.call(null,init__10269);
} else
{var init__10270 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__10269):init__10269);
if(cljs.core.reduced_QMARK_.call(null,init__10270))
{return cljs.core.deref.call(null,init__10270);
} else
{var init__10271 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__10270):init__10270);
if(cljs.core.reduced_QMARK_.call(null,init__10271))
{return cljs.core.deref.call(null,init__10271);
} else
{return init__10271;
}
}
}
});

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10274 = this;
var h__2213__auto____10275 = this__10274.__hash;
if(!((h__2213__auto____10275 == null)))
{return h__2213__auto____10275;
} else
{var h__2213__auto____10276 = cljs.core.hash_coll.call(null,coll);
this__10274.__hash = h__2213__auto____10276;
return h__2213__auto____10276;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10277 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10278 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10279 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10279.key,this__10279.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__10327 = null;
var G__10327__2 = (function (this_sym10280,k){
var this__10282 = this;
var this_sym10280__10283 = this;
var node__10284 = this_sym10280__10283;
return node__10284.cljs$core$ILookup$_lookup$arity$2(node__10284,k);
});
var G__10327__3 = (function (this_sym10281,k,not_found){
var this__10282 = this;
var this_sym10281__10285 = this;
var node__10286 = this_sym10281__10285;
return node__10286.cljs$core$ILookup$_lookup$arity$3(node__10286,k,not_found);
});
G__10327 = function(this_sym10281,k,not_found){
switch(arguments.length){
case 2:
return G__10327__2.call(this,this_sym10281,k);
case 3:
return G__10327__3.call(this,this_sym10281,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10327;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym10272,args10273){
var this__10287 = this;
return this_sym10272.call.apply(this_sym10272,[this_sym10272].concat(args10273.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10288 = this;
return cljs.core.PersistentVector.fromArray([this__10288.key,this__10288.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10289 = this;
return this__10289.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10290 = this;
return this__10290.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var this__10291 = this;
var node__10292 = this;
return ins.balance_right(node__10292);
});
cljs.core.BlackNode.prototype.redden = (function (){
var this__10293 = this;
var node__10294 = this;
return (new cljs.core.RedNode(this__10293.key,this__10293.val,this__10293.left,this__10293.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var this__10295 = this;
var node__10296 = this;
return cljs.core.balance_right_del.call(null,this__10295.key,this__10295.val,this__10295.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key,val,left,right){
var this__10297 = this;
var node__10298 = this;
return (new cljs.core.BlackNode(key,val,left,right,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var this__10299 = this;
var node__10300 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10300,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var this__10301 = this;
var node__10302 = this;
return cljs.core.balance_left_del.call(null,this__10301.key,this__10301.val,del,this__10301.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var this__10303 = this;
var node__10304 = this;
return ins.balance_left(node__10304);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var this__10305 = this;
var node__10306 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node__10306,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__10328 = null;
var G__10328__0 = (function (){
var this__10307 = this;
var this__10309 = this;
return cljs.core.pr_str.call(null,this__10309);
});
G__10328 = function(){
switch(arguments.length){
case 0:
return G__10328__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10328;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var this__10310 = this;
var node__10311 = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10311,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var this__10312 = this;
var node__10313 = this;
return node__10313;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10314 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10315 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10316 = this;
return cljs.core.list.call(null,this__10316.key,this__10316.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10317 = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10318 = this;
return this__10318.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10319 = this;
return cljs.core.PersistentVector.fromArray([this__10319.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10320 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10320.key,this__10320.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10321 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10322 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10322.key,this__10322.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10323 = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10324 = this;
if((n === 0))
{return this__10324.key;
} else
{if((n === 1))
{return this__10324.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10325 = this;
if((n === 0))
{return this__10325.key;
} else
{if((n === 1))
{return this__10325.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10326 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.BlackNode;

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10331 = this;
var h__2213__auto____10332 = this__10331.__hash;
if(!((h__2213__auto____10332 == null)))
{return h__2213__auto____10332;
} else
{var h__2213__auto____10333 = cljs.core.hash_coll.call(null,coll);
this__10331.__hash = h__2213__auto____10333;
return h__2213__auto____10333;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var this__10334 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var this__10335 = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var this__10336 = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([this__10336.key,this__10336.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__10384 = null;
var G__10384__2 = (function (this_sym10337,k){
var this__10339 = this;
var this_sym10337__10340 = this;
var node__10341 = this_sym10337__10340;
return node__10341.cljs$core$ILookup$_lookup$arity$2(node__10341,k);
});
var G__10384__3 = (function (this_sym10338,k,not_found){
var this__10339 = this;
var this_sym10338__10342 = this;
var node__10343 = this_sym10338__10342;
return node__10343.cljs$core$ILookup$_lookup$arity$3(node__10343,k,not_found);
});
G__10384 = function(this_sym10338,k,not_found){
switch(arguments.length){
case 2:
return G__10384__2.call(this,this_sym10338,k);
case 3:
return G__10384__3.call(this,this_sym10338,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10384;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym10329,args10330){
var this__10344 = this;
return this_sym10329.call.apply(this_sym10329,[this_sym10329].concat(args10330.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var this__10345 = this;
return cljs.core.PersistentVector.fromArray([this__10345.key,this__10345.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var this__10346 = this;
return this__10346.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var this__10347 = this;
return this__10347.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var this__10348 = this;
var node__10349 = this;
return (new cljs.core.RedNode(this__10348.key,this__10348.val,this__10348.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var this__10350 = this;
var node__10351 = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var this__10352 = this;
var node__10353 = this;
return (new cljs.core.RedNode(this__10352.key,this__10352.val,this__10352.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key,val,left,right){
var this__10354 = this;
var node__10355 = this;
return (new cljs.core.RedNode(key,val,left,right,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var this__10356 = this;
var node__10357 = this;
return cljs.core.tree_map_kv_reduce.call(null,node__10357,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var this__10358 = this;
var node__10359 = this;
return (new cljs.core.RedNode(this__10358.key,this__10358.val,del,this__10358.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var this__10360 = this;
var node__10361 = this;
return (new cljs.core.RedNode(this__10360.key,this__10360.val,ins,this__10360.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var this__10362 = this;
var node__10363 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10362.left))
{return (new cljs.core.RedNode(this__10362.key,this__10362.val,this__10362.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,this__10362.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10362.right))
{return (new cljs.core.RedNode(this__10362.right.key,this__10362.right.val,(new cljs.core.BlackNode(this__10362.key,this__10362.val,this__10362.left,this__10362.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,this__10362.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node__10363,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__10385 = null;
var G__10385__0 = (function (){
var this__10364 = this;
var this__10366 = this;
return cljs.core.pr_str.call(null,this__10366);
});
G__10385 = function(){
switch(arguments.length){
case 0:
return G__10385__0.call(this);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10385;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var this__10367 = this;
var node__10368 = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10367.right))
{return (new cljs.core.RedNode(this__10367.key,this__10367.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10367.left,null)),this__10367.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,this__10367.left))
{return (new cljs.core.RedNode(this__10367.left.key,this__10367.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,this__10367.left.left,null)),(new cljs.core.BlackNode(this__10367.key,this__10367.val,this__10367.left.right,this__10367.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node__10368,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var this__10369 = this;
var node__10370 = this;
return (new cljs.core.BlackNode(this__10369.key,this__10369.val,this__10369.left,this__10369.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var this__10371 = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var this__10372 = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var this__10373 = this;
return cljs.core.list.call(null,this__10373.key,this__10373.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var this__10374 = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var this__10375 = this;
return this__10375.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var this__10376 = this;
return cljs.core.PersistentVector.fromArray([this__10376.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var this__10377 = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([this__10377.key,this__10377.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10378 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var this__10379 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([this__10379.key,this__10379.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var this__10380 = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var this__10381 = this;
if((n === 0))
{return this__10381.key;
} else
{if((n === 1))
{return this__10381.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var this__10382 = this;
if((n === 0))
{return this__10382.key;
} else
{if((n === 1))
{return this__10382.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var this__10383 = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.RedNode;
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c__10389 = comp.call(null,k,tree.key);
if((c__10389 === 0))
{(found[0] = tree);
return null;
} else
{if((c__10389 < 0))
{var ins__10390 = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins__10390 == null)))
{return tree.add_left(ins__10390);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins__10391 = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins__10391 == null)))
{return tree.add_right(ins__10391);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app__10394 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10394))
{return (new cljs.core.RedNode(app__10394.key,app__10394.val,(new cljs.core.RedNode(left.key,left.val,left.left,app__10394.left,null)),(new cljs.core.RedNode(right.key,right.val,app__10394.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app__10394,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app__10395 = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app__10395))
{return (new cljs.core.RedNode(app__10395.key,app__10395.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app__10395.left,null)),(new cljs.core.BlackNode(right.key,right.val,app__10395.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app__10395,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c__10401 = comp.call(null,k,tree.key);
if((c__10401 === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c__10401 < 0))
{var del__10402 = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3943__auto____10403 = !((del__10402 == null));
if(or__3943__auto____10403)
{return or__3943__auto____10403;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del__10402,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del__10402,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del__10404 = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3943__auto____10405 = !((del__10404 == null));
if(or__3943__auto____10405)
{return or__3943__auto____10405;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del__10404);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del__10404,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk__10408 = tree.key;
var c__10409 = comp.call(null,k,tk__10408);
if((c__10409 === 0))
{return tree.replace(tk__10408,v,tree.left,tree.right);
} else
{if((c__10409 < 0))
{return tree.replace(tk__10408,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk__10408,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10412 = this;
var h__2213__auto____10413 = this__10412.__hash;
if(!((h__2213__auto____10413 == null)))
{return h__2213__auto____10413;
} else
{var h__2213__auto____10414 = cljs.core.hash_imap.call(null,coll);
this__10412.__hash = h__2213__auto____10414;
return h__2213__auto____10414;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var this__10415 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var this__10416 = this;
var n__10417 = coll.entry_at(k);
if(!((n__10417 == null)))
{return n__10417.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var this__10418 = this;
var found__10419 = [null];
var t__10420 = cljs.core.tree_map_add.call(null,this__10418.comp,this__10418.tree,k,v,found__10419);
if((t__10420 == null))
{var found_node__10421 = cljs.core.nth.call(null,found__10419,0);
if(cljs.core._EQ_.call(null,v,found_node__10421.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10418.comp,cljs.core.tree_map_replace.call(null,this__10418.comp,this__10418.tree,k,v),this__10418.cnt,this__10418.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10418.comp,t__10420.blacken(),(this__10418.cnt + 1),this__10418.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var this__10422 = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__10456 = null;
var G__10456__2 = (function (this_sym10423,k){
var this__10425 = this;
var this_sym10423__10426 = this;
var coll__10427 = this_sym10423__10426;
return coll__10427.cljs$core$ILookup$_lookup$arity$2(coll__10427,k);
});
var G__10456__3 = (function (this_sym10424,k,not_found){
var this__10425 = this;
var this_sym10424__10428 = this;
var coll__10429 = this_sym10424__10428;
return coll__10429.cljs$core$ILookup$_lookup$arity$3(coll__10429,k,not_found);
});
G__10456 = function(this_sym10424,k,not_found){
switch(arguments.length){
case 2:
return G__10456__2.call(this,this_sym10424,k);
case 3:
return G__10456__3.call(this,this_sym10424,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10456;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym10410,args10411){
var this__10430 = this;
return this_sym10410.call.apply(this_sym10410,[this_sym10410].concat(args10411.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var this__10431 = this;
if(!((this__10431.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,this__10431.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var this__10432 = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10433 = this;
if((this__10433.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10433.tree,false,this__10433.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var this__10434 = this;
var this__10435 = this;
return cljs.core.pr_str.call(null,this__10435);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var this__10436 = this;
var coll__10437 = this;
var t__10438 = this__10436.tree;
while(true){
if(!((t__10438 == null)))
{var c__10439 = this__10436.comp.call(null,k,t__10438.key);
if((c__10439 === 0))
{return t__10438;
} else
{if((c__10439 < 0))
{{
var G__10457 = t__10438.left;
t__10438 = G__10457;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__10458 = t__10438.right;
t__10438 = G__10458;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10440 = this;
if((this__10440.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10440.tree,ascending_QMARK_,this__10440.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10441 = this;
if((this__10441.cnt > 0))
{var stack__10442 = null;
var t__10443 = this__10441.tree;
while(true){
if(!((t__10443 == null)))
{var c__10444 = this__10441.comp.call(null,k,t__10443.key);
if((c__10444 === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack__10442,t__10443),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c__10444 < 0))
{{
var G__10459 = cljs.core.conj.call(null,stack__10442,t__10443);
var G__10460 = t__10443.left;
stack__10442 = G__10459;
t__10443 = G__10460;
continue;
}
} else
{{
var G__10461 = stack__10442;
var G__10462 = t__10443.right;
stack__10442 = G__10461;
t__10443 = G__10462;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c__10444 > 0))
{{
var G__10463 = cljs.core.conj.call(null,stack__10442,t__10443);
var G__10464 = t__10443.right;
stack__10442 = G__10463;
t__10443 = G__10464;
continue;
}
} else
{{
var G__10465 = stack__10442;
var G__10466 = t__10443.left;
stack__10442 = G__10465;
t__10443 = G__10466;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack__10442 == null))
{return (new cljs.core.PersistentTreeMapSeq(null,stack__10442,ascending_QMARK_,-1,null));
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10445 = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10446 = this;
return this__10446.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10447 = this;
if((this__10447.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,this__10447.tree,true,this__10447.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10448 = this;
return this__10448.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10449 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10450 = this;
return (new cljs.core.PersistentTreeMap(this__10450.comp,this__10450.tree,this__10450.cnt,meta,this__10450.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10451 = this;
return this__10451.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10452 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,this__10452.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var this__10453 = this;
var found__10454 = [null];
var t__10455 = cljs.core.tree_map_remove.call(null,this__10453.comp,this__10453.tree,k,found__10454);
if((t__10455 == null))
{if((cljs.core.nth.call(null,found__10454,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(this__10453.comp,null,0,this__10453.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(this__10453.comp,t__10455.blacken(),(this__10453.cnt - 1),this__10453.meta,null));
}
});
cljs.core.PersistentTreeMap;
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in__10469 = cljs.core.seq.call(null,keyvals);
var out__10470 = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in__10469)
{{
var G__10471 = cljs.core.nnext.call(null,in__10469);
var G__10472 = cljs.core.assoc_BANG_.call(null,out__10470,cljs.core.first.call(null,in__10469),cljs.core.second.call(null,in__10469));
in__10469 = G__10471;
out__10470 = G__10472;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10470);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__10473){
var keyvals = cljs.core.seq(arglist__10473);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__10474){
var keyvals = cljs.core.seq(arglist__10474);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in__10477 = cljs.core.seq.call(null,keyvals);
var out__10478 = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in__10477)
{{
var G__10479 = cljs.core.nnext.call(null,in__10477);
var G__10480 = cljs.core.assoc.call(null,out__10478,cljs.core.first.call(null,in__10477),cljs.core.second.call(null,in__10477));
in__10477 = G__10479;
out__10478 = G__10480;
continue;
}
} else
{return out__10478;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__10481){
var keyvals = cljs.core.seq(arglist__10481);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in__10484 = cljs.core.seq.call(null,keyvals);
var out__10485 = (new cljs.core.PersistentTreeMap(comparator,null,0,null,0));
while(true){
if(in__10484)
{{
var G__10486 = cljs.core.nnext.call(null,in__10484);
var G__10487 = cljs.core.assoc.call(null,out__10485,cljs.core.first.call(null,in__10484),cljs.core.second.call(null,in__10484));
in__10484 = G__10486;
out__10485 = G__10487;
continue;
}
} else
{return out__10485;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__10488){
var comparator = cljs.core.first(arglist__10488);
var keyvals = cljs.core.rest(arglist__10488);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__10489_SHARP_,p2__10490_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3943__auto____10492 = p1__10489_SHARP_;
if(cljs.core.truth_(or__3943__auto____10492))
{return or__3943__auto____10492;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__10490_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__10493){
var maps = cljs.core.seq(arglist__10493);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__10501 = (function (m,e){
var k__10499 = cljs.core.first.call(null,e);
var v__10500 = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k__10499))
{return cljs.core.assoc.call(null,m,k__10499,f.call(null,cljs.core._lookup.call(null,m,k__10499,null),v__10500));
} else
{return cljs.core.assoc.call(null,m,k__10499,v__10500);
}
});
var merge2__10503 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__10501,(function (){var or__3943__auto____10502 = m1;
if(cljs.core.truth_(or__3943__auto____10502))
{return or__3943__auto____10502;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2__10503,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__10504){
var f = cljs.core.first(arglist__10504);
var maps = cljs.core.rest(arglist__10504);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__10509 = cljs.core.ObjMap.EMPTY;
var keys__10510 = cljs.core.seq.call(null,keyseq);
while(true){
if(keys__10510)
{var key__10511 = cljs.core.first.call(null,keys__10510);
var entry__10512 = cljs.core._lookup.call(null,map,key__10511,"\uFDD0'user/not-found");
{
var G__10513 = ((cljs.core.not_EQ_.call(null,entry__10512,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__10509,key__10511,entry__10512):ret__10509);
var G__10514 = cljs.core.next.call(null,keys__10510);
ret__10509 = G__10513;
keys__10510 = G__10514;
continue;
}
} else
{return ret__10509;
}
break;
}
});
void 0;

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var this__10518 = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,this__10518.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10519 = this;
var h__2213__auto____10520 = this__10519.__hash;
if(!((h__2213__auto____10520 == null)))
{return h__2213__auto____10520;
} else
{var h__2213__auto____10521 = cljs.core.hash_iset.call(null,coll);
this__10519.__hash = h__2213__auto____10521;
return h__2213__auto____10521;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10522 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10523 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10523.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__10544 = null;
var G__10544__2 = (function (this_sym10524,k){
var this__10526 = this;
var this_sym10524__10527 = this;
var coll__10528 = this_sym10524__10527;
return coll__10528.cljs$core$ILookup$_lookup$arity$2(coll__10528,k);
});
var G__10544__3 = (function (this_sym10525,k,not_found){
var this__10526 = this;
var this_sym10525__10529 = this;
var coll__10530 = this_sym10525__10529;
return coll__10530.cljs$core$ILookup$_lookup$arity$3(coll__10530,k,not_found);
});
G__10544 = function(this_sym10525,k,not_found){
switch(arguments.length){
case 2:
return G__10544__2.call(this,this_sym10525,k);
case 3:
return G__10544__3.call(this,this_sym10525,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10544;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym10516,args10517){
var this__10531 = this;
return this_sym10516.call.apply(this_sym10516,[this_sym10516].concat(args10517.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10532 = this;
return (new cljs.core.PersistentHashSet(this__10532.meta,cljs.core.assoc.call(null,this__10532.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var this__10533 = this;
var this__10534 = this;
return cljs.core.pr_str.call(null,this__10534);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10535 = this;
return cljs.core.keys.call(null,this__10535.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10536 = this;
return (new cljs.core.PersistentHashSet(this__10536.meta,cljs.core.dissoc.call(null,this__10536.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10537 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10538 = this;
var and__3941__auto____10539 = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto____10539)
{var and__3941__auto____10540 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____10540)
{return cljs.core.every_QMARK_.call(null,(function (p1__10515_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10515_SHARP_);
}),other);
} else
{return and__3941__auto____10540;
}
} else
{return and__3941__auto____10539;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10541 = this;
return (new cljs.core.PersistentHashSet(meta,this__10541.hash_map,this__10541.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10542 = this;
return this__10542.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10543 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,this__10543.meta);
});
cljs.core.PersistentHashSet;
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 34;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__10562 = null;
var G__10562__2 = (function (this_sym10548,k){
var this__10550 = this;
var this_sym10548__10551 = this;
var tcoll__10552 = this_sym10548__10551;
if((cljs.core._lookup.call(null,this__10550.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__10562__3 = (function (this_sym10549,k,not_found){
var this__10550 = this;
var this_sym10549__10553 = this;
var tcoll__10554 = this_sym10549__10553;
if((cljs.core._lookup.call(null,this__10550.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__10562 = function(this_sym10549,k,not_found){
switch(arguments.length){
case 2:
return G__10562__2.call(this,this_sym10549,k);
case 3:
return G__10562__3.call(this,this_sym10549,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10562;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym10546,args10547){
var this__10555 = this;
return this_sym10546.call.apply(this_sym10546,[this_sym10546].concat(args10547.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var this__10556 = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var this__10557 = this;
if((cljs.core._lookup.call(null,this__10557.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var this__10558 = this;
return cljs.core.count.call(null,this__10558.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var this__10559 = this;
this__10559.transient_map = cljs.core.dissoc_BANG_.call(null,this__10559.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var this__10560 = this;
this__10560.transient_map = cljs.core.assoc_BANG_.call(null,this__10560.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var this__10561 = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,this__10561.transient_map),null));
});
cljs.core.TransientHashSet;

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var this__10565 = this;
var h__2213__auto____10566 = this__10565.__hash;
if(!((h__2213__auto____10566 == null)))
{return h__2213__auto____10566;
} else
{var h__2213__auto____10567 = cljs.core.hash_iset.call(null,coll);
this__10565.__hash = h__2213__auto____10567;
return h__2213__auto____10567;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var this__10568 = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var this__10569 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__10569.tree_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__10595 = null;
var G__10595__2 = (function (this_sym10570,k){
var this__10572 = this;
var this_sym10570__10573 = this;
var coll__10574 = this_sym10570__10573;
return coll__10574.cljs$core$ILookup$_lookup$arity$2(coll__10574,k);
});
var G__10595__3 = (function (this_sym10571,k,not_found){
var this__10572 = this;
var this_sym10571__10575 = this;
var coll__10576 = this_sym10571__10575;
return coll__10576.cljs$core$ILookup$_lookup$arity$3(coll__10576,k,not_found);
});
G__10595 = function(this_sym10571,k,not_found){
switch(arguments.length){
case 2:
return G__10595__2.call(this,this_sym10571,k);
case 3:
return G__10595__3.call(this,this_sym10571,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10595;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym10563,args10564){
var this__10577 = this;
return this_sym10563.call.apply(this_sym10563,[this_sym10563].concat(args10564.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var this__10578 = this;
return (new cljs.core.PersistentTreeSet(this__10578.meta,cljs.core.assoc.call(null,this__10578.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var this__10579 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,this__10579.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var this__10580 = this;
var this__10581 = this;
return cljs.core.pr_str.call(null,this__10581);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var this__10582 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,this__10582.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var this__10583 = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,this__10583.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var this__10584 = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var this__10585 = this;
return cljs.core._comparator.call(null,this__10585.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var this__10586 = this;
return cljs.core.keys.call(null,this__10586.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var this__10587 = this;
return (new cljs.core.PersistentTreeSet(this__10587.meta,cljs.core.dissoc.call(null,this__10587.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var this__10588 = this;
return cljs.core.count.call(null,this__10588.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var this__10589 = this;
var and__3941__auto____10590 = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto____10590)
{var and__3941__auto____10591 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____10591)
{return cljs.core.every_QMARK_.call(null,(function (p1__10545_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__10545_SHARP_);
}),other);
} else
{return and__3941__auto____10591;
}
} else
{return and__3941__auto____10590;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var this__10592 = this;
return (new cljs.core.PersistentTreeSet(meta,this__10592.tree_map,this__10592.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var this__10593 = this;
return this__10593.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var this__10594 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,this__10594.meta);
});
cljs.core.PersistentTreeSet;
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in__10598 = cljs.core.seq.call(null,coll);
var out__10599 = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in__10598))
{{
var G__10600 = cljs.core.next.call(null,in__10598);
var G__10601 = cljs.core.conj_BANG_.call(null,out__10599,cljs.core.first.call(null,in__10598));
in__10598 = G__10600;
out__10599 = G__10601;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out__10599);
}
break;
}
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__10602){
var keys = cljs.core.seq(arglist__10602);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__10604){
var comparator = cljs.core.first(arglist__10604);
var keys = cljs.core.rest(arglist__10604);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n__10610 = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__4090__auto____10611 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4090__auto____10611))
{var e__10612 = temp__4090__auto____10611;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__10612));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__10610,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__10603_SHARP_){
var temp__4090__auto____10613 = cljs.core.find.call(null,smap,p1__10603_SHARP_);
if(cljs.core.truth_(temp__4090__auto____10613))
{var e__10614 = temp__4090__auto____10613;
return cljs.core.second.call(null,e__10614);
} else
{return p1__10603_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__10644 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__10637,seen){
while(true){
var vec__10638__10639 = p__10637;
var f__10640 = cljs.core.nth.call(null,vec__10638__10639,0,null);
var xs__10641 = vec__10638__10639;
var temp__4092__auto____10642 = cljs.core.seq.call(null,xs__10641);
if(temp__4092__auto____10642)
{var s__10643 = temp__4092__auto____10642;
if(cljs.core.contains_QMARK_.call(null,seen,f__10640))
{{
var G__10645 = cljs.core.rest.call(null,s__10643);
var G__10646 = seen;
p__10637 = G__10645;
seen = G__10646;
continue;
}
} else
{return cljs.core.cons.call(null,f__10640,step.call(null,cljs.core.rest.call(null,s__10643),cljs.core.conj.call(null,seen,f__10640)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step__10644.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__10649 = cljs.core.PersistentVector.EMPTY;
var s__10650 = s;
while(true){
if(cljs.core.next.call(null,s__10650))
{{
var G__10651 = cljs.core.conj.call(null,ret__10649,cljs.core.first.call(null,s__10650));
var G__10652 = cljs.core.next.call(null,s__10650);
ret__10649 = G__10651;
s__10650 = G__10652;
continue;
}
} else
{return cljs.core.seq.call(null,ret__10649);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if((function (){var or__3943__auto____10655 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto____10655)
{return or__3943__auto____10655;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10656 = x.lastIndexOf("/");
if((i__10656 < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__10656 + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if((function (){var or__3943__auto____10659 = cljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto____10659)
{return or__3943__auto____10659;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{var i__10660 = x.lastIndexOf("/");
if((i__10660 > -1))
{return cljs.core.subs.call(null,x,2,i__10660);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__10667 = cljs.core.ObjMap.EMPTY;
var ks__10668 = cljs.core.seq.call(null,keys);
var vs__10669 = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3941__auto____10670 = ks__10668;
if(and__3941__auto____10670)
{return vs__10669;
} else
{return and__3941__auto____10670;
}
})())
{{
var G__10671 = cljs.core.assoc.call(null,map__10667,cljs.core.first.call(null,ks__10668),cljs.core.first.call(null,vs__10669));
var G__10672 = cljs.core.next.call(null,ks__10668);
var G__10673 = cljs.core.next.call(null,vs__10669);
map__10667 = G__10671;
ks__10668 = G__10672;
vs__10669 = G__10673;
continue;
}
} else
{return map__10667;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__10676__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10661_SHARP_,p2__10662_SHARP_){
return max_key.call(null,k,p1__10661_SHARP_,p2__10662_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__10676 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10676__delegate.call(this, k, x, y, more);
};
G__10676.cljs$lang$maxFixedArity = 3;
G__10676.cljs$lang$applyTo = (function (arglist__10677){
var k = cljs.core.first(arglist__10677);
var x = cljs.core.first(cljs.core.next(arglist__10677));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10677)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10677)));
return G__10676__delegate(k, x, y, more);
});
G__10676.cljs$lang$arity$variadic = G__10676__delegate;
return G__10676;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__10678__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__10674_SHARP_,p2__10675_SHARP_){
return min_key.call(null,k,p1__10674_SHARP_,p2__10675_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__10678 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10678__delegate.call(this, k, x, y, more);
};
G__10678.cljs$lang$maxFixedArity = 3;
G__10678.cljs$lang$applyTo = (function (arglist__10679){
var k = cljs.core.first(arglist__10679);
var x = cljs.core.first(cljs.core.next(arglist__10679));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10679)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10679)));
return G__10678__delegate(k, x, y, more);
});
G__10678.cljs$lang$arity$variadic = G__10678__delegate;
return G__10678;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10682 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10682)
{var s__10683 = temp__4092__auto____10682;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__10683),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__10683)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10686 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10686)
{var s__10687 = temp__4092__auto____10686;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__10687))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10687),take_while.call(null,pred,cljs.core.rest.call(null,s__10687)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp__10689 = cljs.core._comparator.call(null,sc);
return test.call(null,comp__10689.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include__10701 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4092__auto____10702 = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4092__auto____10702))
{var vec__10703__10704 = temp__4092__auto____10702;
var e__10705 = cljs.core.nth.call(null,vec__10703__10704,0,null);
var s__10706 = vec__10703__10704;
if(cljs.core.truth_(include__10701.call(null,e__10705)))
{return s__10706;
} else
{return cljs.core.next.call(null,s__10706);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10701,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____10707 = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4092__auto____10707))
{var vec__10708__10709 = temp__4092__auto____10707;
var e__10710 = cljs.core.nth.call(null,vec__10708__10709,0,null);
var s__10711 = vec__10708__10709;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e__10710))?s__10711:cljs.core.next.call(null,s__10711)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include__10723 = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.set([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4092__auto____10724 = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4092__auto____10724))
{var vec__10725__10726 = temp__4092__auto____10724;
var e__10727 = cljs.core.nth.call(null,vec__10725__10726,0,null);
var s__10728 = vec__10725__10726;
if(cljs.core.truth_(include__10723.call(null,e__10727)))
{return s__10728;
} else
{return cljs.core.next.call(null,s__10728);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include__10723,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto____10729 = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4092__auto____10729))
{var vec__10730__10731 = temp__4092__auto____10729;
var e__10732 = cljs.core.nth.call(null,vec__10730__10731,0,null);
var s__10733 = vec__10730__10731;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e__10732))?s__10733:cljs.core.next.call(null,s__10733)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw('Invalid arity: ' + arguments.length);
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var this__10734 = this;
var h__2213__auto____10735 = this__10734.__hash;
if(!((h__2213__auto____10735 == null)))
{return h__2213__auto____10735;
} else
{var h__2213__auto____10736 = cljs.core.hash_coll.call(null,rng);
this__10734.__hash = h__2213__auto____10736;
return h__2213__auto____10736;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var this__10737 = this;
if((this__10737.step > 0))
{if(((this__10737.start + this__10737.step) < this__10737.end))
{return (new cljs.core.Range(this__10737.meta,(this__10737.start + this__10737.step),this__10737.end,this__10737.step,null));
} else
{return null;
}
} else
{if(((this__10737.start + this__10737.step) > this__10737.end))
{return (new cljs.core.Range(this__10737.meta,(this__10737.start + this__10737.step),this__10737.end,this__10737.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var this__10738 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__10739 = this;
var this__10740 = this;
return cljs.core.pr_str.call(null,this__10740);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var this__10741 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var this__10742 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var this__10743 = this;
if((this__10743.step > 0))
{if((this__10743.start < this__10743.end))
{return rng;
} else
{return null;
}
} else
{if((this__10743.start > this__10743.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var this__10744 = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((this__10744.end - this__10744.start) / this__10744.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var this__10745 = this;
return this__10745.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var this__10746 = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(this__10746.meta,(this__10746.start + this__10746.step),this__10746.end,this__10746.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var this__10747 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta){
var this__10748 = this;
return (new cljs.core.Range(meta,this__10748.start,this__10748.end,this__10748.step,this__10748.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var this__10749 = this;
return this__10749.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var this__10750 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10750.start + (n * this__10750.step));
} else
{if((function (){var and__3941__auto____10751 = (this__10750.start > this__10750.end);
if(and__3941__auto____10751)
{return (this__10750.step === 0);
} else
{return and__3941__auto____10751;
}
})())
{return this__10750.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var this__10752 = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (this__10752.start + (n * this__10752.step));
} else
{if((function (){var and__3941__auto____10753 = (this__10752.start > this__10752.end);
if(and__3941__auto____10753)
{return (this__10752.step === 0);
} else
{return and__3941__auto____10753;
}
})())
{return this__10752.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var this__10754 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10754.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10757 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10757)
{var s__10758 = temp__4092__auto____10757;
return cljs.core.cons.call(null,cljs.core.first.call(null,s__10758),take_nth.call(null,n,cljs.core.drop.call(null,n,s__10758)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10765 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10765)
{var s__10766 = temp__4092__auto____10765;
var fst__10767 = cljs.core.first.call(null,s__10766);
var fv__10768 = f.call(null,fst__10767);
var run__10769 = cljs.core.cons.call(null,fst__10767,cljs.core.take_while.call(null,(function (p1__10759_SHARP_){
return cljs.core._EQ_.call(null,fv__10768,f.call(null,p1__10759_SHARP_));
}),cljs.core.next.call(null,s__10766)));
return cljs.core.cons.call(null,run__10769,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__10769),s__10766))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto____10784 = cljs.core.seq.call(null,coll);
if(temp__4090__auto____10784)
{var s__10785 = temp__4090__auto____10784;
return reductions.call(null,f,cljs.core.first.call(null,s__10785),cljs.core.rest.call(null,s__10785));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto____10786 = cljs.core.seq.call(null,coll);
if(temp__4092__auto____10786)
{var s__10787 = temp__4092__auto____10786;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__10787)),cljs.core.rest.call(null,s__10787));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__10790 = null;
var G__10790__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__10790__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__10790__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__10790__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__10790__4 = (function() { 
var G__10791__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__10791 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10791__delegate.call(this, x, y, z, args);
};
G__10791.cljs$lang$maxFixedArity = 3;
G__10791.cljs$lang$applyTo = (function (arglist__10792){
var x = cljs.core.first(arglist__10792);
var y = cljs.core.first(cljs.core.next(arglist__10792));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10792)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10792)));
return G__10791__delegate(x, y, z, args);
});
G__10791.cljs$lang$arity$variadic = G__10791__delegate;
return G__10791;
})()
;
G__10790 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10790__0.call(this);
case 1:
return G__10790__1.call(this,x);
case 2:
return G__10790__2.call(this,x,y);
case 3:
return G__10790__3.call(this,x,y,z);
default:
return G__10790__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10790.cljs$lang$maxFixedArity = 3;
G__10790.cljs$lang$applyTo = G__10790__4.cljs$lang$applyTo;
return G__10790;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__10793 = null;
var G__10793__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__10793__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__10793__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__10793__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__10793__4 = (function() { 
var G__10794__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10794 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10794__delegate.call(this, x, y, z, args);
};
G__10794.cljs$lang$maxFixedArity = 3;
G__10794.cljs$lang$applyTo = (function (arglist__10795){
var x = cljs.core.first(arglist__10795);
var y = cljs.core.first(cljs.core.next(arglist__10795));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10795)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10795)));
return G__10794__delegate(x, y, z, args);
});
G__10794.cljs$lang$arity$variadic = G__10794__delegate;
return G__10794;
})()
;
G__10793 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10793__0.call(this);
case 1:
return G__10793__1.call(this,x);
case 2:
return G__10793__2.call(this,x,y);
case 3:
return G__10793__3.call(this,x,y,z);
default:
return G__10793__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10793.cljs$lang$maxFixedArity = 3;
G__10793.cljs$lang$applyTo = G__10793__4.cljs$lang$applyTo;
return G__10793;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__10796 = null;
var G__10796__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__10796__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__10796__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__10796__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__10796__4 = (function() { 
var G__10797__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__10797 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10797__delegate.call(this, x, y, z, args);
};
G__10797.cljs$lang$maxFixedArity = 3;
G__10797.cljs$lang$applyTo = (function (arglist__10798){
var x = cljs.core.first(arglist__10798);
var y = cljs.core.first(cljs.core.next(arglist__10798));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10798)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10798)));
return G__10797__delegate(x, y, z, args);
});
G__10797.cljs$lang$arity$variadic = G__10797__delegate;
return G__10797;
})()
;
G__10796 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10796__0.call(this);
case 1:
return G__10796__1.call(this,x);
case 2:
return G__10796__2.call(this,x,y);
case 3:
return G__10796__3.call(this,x,y,z);
default:
return G__10796__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10796.cljs$lang$maxFixedArity = 3;
G__10796.cljs$lang$applyTo = G__10796__4.cljs$lang$applyTo;
return G__10796;
})()
});
var juxt__4 = (function() { 
var G__10799__delegate = function (f,g,h,fs){
var fs__10789 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__10800 = null;
var G__10800__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__10770_SHARP_,p2__10771_SHARP_){
return cljs.core.conj.call(null,p1__10770_SHARP_,p2__10771_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__10789);
});
var G__10800__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__10772_SHARP_,p2__10773_SHARP_){
return cljs.core.conj.call(null,p1__10772_SHARP_,p2__10773_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__10789);
});
var G__10800__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__10774_SHARP_,p2__10775_SHARP_){
return cljs.core.conj.call(null,p1__10774_SHARP_,p2__10775_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__10789);
});
var G__10800__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__10776_SHARP_,p2__10777_SHARP_){
return cljs.core.conj.call(null,p1__10776_SHARP_,p2__10777_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__10789);
});
var G__10800__4 = (function() { 
var G__10801__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__10778_SHARP_,p2__10779_SHARP_){
return cljs.core.conj.call(null,p1__10778_SHARP_,cljs.core.apply.call(null,p2__10779_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__10789);
};
var G__10801 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10801__delegate.call(this, x, y, z, args);
};
G__10801.cljs$lang$maxFixedArity = 3;
G__10801.cljs$lang$applyTo = (function (arglist__10802){
var x = cljs.core.first(arglist__10802);
var y = cljs.core.first(cljs.core.next(arglist__10802));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10802)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10802)));
return G__10801__delegate(x, y, z, args);
});
G__10801.cljs$lang$arity$variadic = G__10801__delegate;
return G__10801;
})()
;
G__10800 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__10800__0.call(this);
case 1:
return G__10800__1.call(this,x);
case 2:
return G__10800__2.call(this,x,y);
case 3:
return G__10800__3.call(this,x,y,z);
default:
return G__10800__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
G__10800.cljs$lang$maxFixedArity = 3;
G__10800.cljs$lang$applyTo = G__10800__4.cljs$lang$applyTo;
return G__10800;
})()
};
var G__10799 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10799__delegate.call(this, f, g, h, fs);
};
G__10799.cljs$lang$maxFixedArity = 3;
G__10799.cljs$lang$applyTo = (function (arglist__10803){
var f = cljs.core.first(arglist__10803);
var g = cljs.core.first(cljs.core.next(arglist__10803));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10803)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10803)));
return G__10799__delegate(f, g, h, fs);
});
G__10799.cljs$lang$arity$variadic = G__10799__delegate;
return G__10799;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__10806 = cljs.core.next.call(null,coll);
coll = G__10806;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3941__auto____10805 = cljs.core.seq.call(null,coll);
if(and__3941__auto____10805)
{return (n > 0);
} else
{return and__3941__auto____10805;
}
})()))
{{
var G__10807 = (n - 1);
var G__10808 = cljs.core.next.call(null,coll);
n = G__10807;
coll = G__10808;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__10810 = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__10810),s))
{if((cljs.core.count.call(null,matches__10810) === 1))
{return cljs.core.first.call(null,matches__10810);
} else
{return cljs.core.vec.call(null,matches__10810);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__10812 = re.exec(s);
if((matches__10812 == null))
{return null;
} else
{if((cljs.core.count.call(null,matches__10812) === 1))
{return cljs.core.first.call(null,matches__10812);
} else
{return cljs.core.vec.call(null,matches__10812);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__10817 = cljs.core.re_find.call(null,re,s);
var match_idx__10818 = s.search(re);
var match_str__10819 = ((cljs.core.coll_QMARK_.call(null,match_data__10817))?cljs.core.first.call(null,match_data__10817):match_data__10817);
var post_match__10820 = cljs.core.subs.call(null,s,(match_idx__10818 + cljs.core.count.call(null,match_str__10819)));
if(cljs.core.truth_(match_data__10817))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__10817,re_seq.call(null,re,post_match__10820));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__10827__10828 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___10829 = cljs.core.nth.call(null,vec__10827__10828,0,null);
var flags__10830 = cljs.core.nth.call(null,vec__10827__10828,1,null);
var pattern__10831 = cljs.core.nth.call(null,vec__10827__10828,2,null);
return (new RegExp(pattern__10831,flags__10830));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__10821_SHARP_){
return print_one.call(null,p1__10821_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3941__auto____10841 = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3941__auto____10841))
{var and__3941__auto____10845 = (function (){var G__10842__10843 = obj;
if(G__10842__10843)
{if((function (){var or__3943__auto____10844 = (G__10842__10843.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto____10844)
{return or__3943__auto____10844;
} else
{return G__10842__10843.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__10842__10843.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10842__10843);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__10842__10843);
}
})();
if(cljs.core.truth_(and__3941__auto____10845))
{return cljs.core.meta.call(null,obj);
} else
{return and__3941__auto____10845;
}
} else
{return and__3941__auto____10841;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3941__auto____10846 = !((obj == null));
if(and__3941__auto____10846)
{return obj.cljs$lang$type;
} else
{return and__3941__auto____10846;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__10847__10848 = obj;
if(G__10847__10848)
{if((function (){var or__3943__auto____10849 = (G__10847__10848.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto____10849)
{return or__3943__auto____10849;
} else
{return G__10847__10848.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__10847__10848.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10847__10848);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__10847__10848);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__10864 = cljs.core.first.call(null,objs);
var sb__10865 = (new goog.string.StringBuffer());
var G__10866__10867 = cljs.core.seq.call(null,objs);
if(G__10866__10867)
{var obj__10868 = cljs.core.first.call(null,G__10866__10867);
var G__10866__10869 = G__10866__10867;
while(true){
if((obj__10868 === first_obj__10864))
{} else
{sb__10865.append(" ");
}
var G__10870__10871 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10868,opts));
if(G__10870__10871)
{var string__10872 = cljs.core.first.call(null,G__10870__10871);
var G__10870__10873 = G__10870__10871;
while(true){
sb__10865.append(string__10872);
var temp__4092__auto____10874 = cljs.core.next.call(null,G__10870__10873);
if(temp__4092__auto____10874)
{var G__10870__10875 = temp__4092__auto____10874;
{
var G__10878 = cljs.core.first.call(null,G__10870__10875);
var G__10879 = G__10870__10875;
string__10872 = G__10878;
G__10870__10873 = G__10879;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____10876 = cljs.core.next.call(null,G__10866__10869);
if(temp__4092__auto____10876)
{var G__10866__10877 = temp__4092__auto____10876;
{
var G__10880 = cljs.core.first.call(null,G__10866__10877);
var G__10881 = G__10866__10877;
obj__10868 = G__10880;
G__10866__10869 = G__10881;
continue;
}
} else
{}
break;
}
} else
{}
return sb__10865;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return [cljs.core.str(cljs.core.pr_sb.call(null,objs,opts))].join('');
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__10883 = cljs.core.pr_sb.call(null,objs,opts);
sb__10883.append("\n");
return [cljs.core.str(sb__10883)].join('');
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__10897 = cljs.core.first.call(null,objs);
var G__10898__10899 = cljs.core.seq.call(null,objs);
if(G__10898__10899)
{var obj__10900 = cljs.core.first.call(null,G__10898__10899);
var G__10898__10901 = G__10898__10899;
while(true){
if((obj__10900 === first_obj__10897))
{} else
{cljs.core.string_print.call(null," ");
}
var G__10902__10903 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__10900,opts));
if(G__10902__10903)
{var string__10904 = cljs.core.first.call(null,G__10902__10903);
var G__10902__10905 = G__10902__10903;
while(true){
cljs.core.string_print.call(null,string__10904);
var temp__4092__auto____10906 = cljs.core.next.call(null,G__10902__10905);
if(temp__4092__auto____10906)
{var G__10902__10907 = temp__4092__auto____10906;
{
var G__10910 = cljs.core.first.call(null,G__10902__10907);
var G__10911 = G__10902__10907;
string__10904 = G__10910;
G__10902__10905 = G__10911;
continue;
}
} else
{}
break;
}
} else
{}
var temp__4092__auto____10908 = cljs.core.next.call(null,G__10898__10901);
if(temp__4092__auto____10908)
{var G__10898__10909 = temp__4092__auto____10908;
{
var G__10912 = cljs.core.first.call(null,G__10898__10909);
var G__10913 = G__10898__10909;
obj__10900 = G__10912;
G__10898__10901 = G__10913;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__10914){
var objs = cljs.core.seq(arglist__10914);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__10915){
var objs = cljs.core.seq(arglist__10915);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__10916){
var objs = cljs.core.seq(arglist__10916);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__10917){
var objs = cljs.core.seq(arglist__10917);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__10918){
var objs = cljs.core.seq(arglist__10918);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__10919){
var objs = cljs.core.seq(arglist__10919);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__10920){
var objs = cljs.core.seq(arglist__10920);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__10921){
var objs = cljs.core.seq(arglist__10921);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10922 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10922,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10923 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10923,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10924 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10924,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__4092__auto____10925 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto____10925))
{var nspc__10926 = temp__4092__auto____10925;
return [cljs.core.str(nspc__10926),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__4092__auto____10927 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto____10927))
{var nspc__10928 = temp__4092__auto____10927;
return [cljs.core.str(nspc__10928),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?goog.string.quote(obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10929 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10929,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize__10931 = (function (n,len){
var ns__10930 = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns__10930) < len))
{{
var G__10933 = [cljs.core.str("0"),cljs.core.str(ns__10930)].join('');
ns__10930 = G__10933;
continue;
}
} else
{return ns__10930;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize__10931.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize__10931.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize__10931.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize__10931.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize__10931.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize__10931.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair__10932 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair__10932,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__10934 = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var this__10935 = this;
var G__10936__10937 = cljs.core.seq.call(null,this__10935.watches);
if(G__10936__10937)
{var G__10939__10941 = cljs.core.first.call(null,G__10936__10937);
var vec__10940__10942 = G__10939__10941;
var key__10943 = cljs.core.nth.call(null,vec__10940__10942,0,null);
var f__10944 = cljs.core.nth.call(null,vec__10940__10942,1,null);
var G__10936__10945 = G__10936__10937;
var G__10939__10946 = G__10939__10941;
var G__10936__10947 = G__10936__10945;
while(true){
var vec__10948__10949 = G__10939__10946;
var key__10950 = cljs.core.nth.call(null,vec__10948__10949,0,null);
var f__10951 = cljs.core.nth.call(null,vec__10948__10949,1,null);
var G__10936__10952 = G__10936__10947;
f__10951.call(null,key__10950,this$,oldval,newval);
var temp__4092__auto____10953 = cljs.core.next.call(null,G__10936__10952);
if(temp__4092__auto____10953)
{var G__10936__10954 = temp__4092__auto____10953;
{
var G__10961 = cljs.core.first.call(null,G__10936__10954);
var G__10962 = G__10936__10954;
G__10939__10946 = G__10961;
G__10936__10947 = G__10962;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var this__10955 = this;
return this$.watches = cljs.core.assoc.call(null,this__10955.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__10956 = this;
return this$.watches = cljs.core.dissoc.call(null,this__10956.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var this__10957 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,this__10957.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var this__10958 = this;
return this__10958.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10959 = this;
return this__10959.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var this__10960 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__10974__delegate = function (x,p__10963){
var map__10969__10970 = p__10963;
var map__10969__10971 = ((cljs.core.seq_QMARK_.call(null,map__10969__10970))?clojure.lang.PersistentHashMap.create.call(null,cljs.core.seq.call(null,map__10969__10970)):map__10969__10970);
var validator__10972 = cljs.core._lookup.call(null,map__10969__10971,"\uFDD0'validator",null);
var meta__10973 = cljs.core._lookup.call(null,map__10969__10971,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta__10973,validator__10972,null));
};
var G__10974 = function (x,var_args){
var p__10963 = null;
if (goog.isDef(var_args)) {
  p__10963 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10974__delegate.call(this, x, p__10963);
};
G__10974.cljs$lang$maxFixedArity = 1;
G__10974.cljs$lang$applyTo = (function (arglist__10975){
var x = cljs.core.first(arglist__10975);
var p__10963 = cljs.core.rest(arglist__10975);
return G__10974__delegate(x, p__10963);
});
G__10974.cljs$lang$arity$variadic = G__10974__delegate;
return G__10974;
})()
;
atom = function(x,var_args){
var p__10963 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__4092__auto____10979 = a.validator;
if(cljs.core.truth_(temp__4092__auto____10979))
{var validate__10980 = temp__4092__auto____10979;
if(cljs.core.truth_(validate__10980.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",6394,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value__10981 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__10981,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__10982__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__10982 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10982__delegate.call(this, a, f, x, y, z, more);
};
G__10982.cljs$lang$maxFixedArity = 5;
G__10982.cljs$lang$applyTo = (function (arglist__10983){
var a = cljs.core.first(arglist__10983);
var f = cljs.core.first(cljs.core.next(arglist__10983));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10983)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10983))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10983)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10983)))));
return G__10982__delegate(a, f, x, y, z, more);
});
G__10982.cljs$lang$arity$variadic = G__10982__delegate;
return G__10982;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__10984){
var iref = cljs.core.first(arglist__10984);
var f = cljs.core.first(cljs.core.next(arglist__10984));
var args = cljs.core.rest(cljs.core.next(arglist__10984));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073774592;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var this__10985 = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,this__10985.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var this__10986 = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,this__10986.state,(function (p__10987){
var map__10988__10989 = p__10987;
var map__10988__10990 = ((cljs.core.seq_QMARK_.call(null,map__10988__10989))?clojure.lang.PersistentHashMap.create.call(null,cljs.core.seq.call(null,map__10988__10989)):map__10988__10989);
var curr_state__10991 = map__10988__10990;
var done__10992 = cljs.core._lookup.call(null,map__10988__10990,"\uFDD0'done",null);
if(cljs.core.truth_(done__10992))
{return curr_state__10991;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__10986.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__11021__11022 = options;
var map__11021__11023 = ((cljs.core.seq_QMARK_.call(null,map__11021__11022))?clojure.lang.PersistentHashMap.create.call(null,cljs.core.seq.call(null,map__11021__11022)):map__11021__11022);
var keywordize_keys__11024 = cljs.core._lookup.call(null,map__11021__11023,"\uFDD0'keywordize-keys",null);
var keyfn__11025 = (cljs.core.truth_(keywordize_keys__11024)?cljs.core.keyword:cljs.core.str);
var f__11048 = (function thisfn(x){
if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray(x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if((cljs.core.type.call(null,x) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2487__auto____11047 = (function iter__11037(s__11038){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11038__11043 = s__11038;
while(true){
var temp__4092__auto____11044 = cljs.core.seq.call(null,s__11038__11043);
if(temp__4092__auto____11044)
{var xs__4579__auto____11045 = temp__4092__auto____11044;
var k__11046 = cljs.core.first.call(null,xs__4579__auto____11045);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__11025.call(null,k__11046),thisfn.call(null,(x[k__11046]))], true),iter__11037.call(null,cljs.core.rest.call(null,s__11038__11043)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2487__auto____11047.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if("\uFDD0'else")
{return x;
} else
{return null;
}
}
}
}
}
});
return f__11048.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__11049){
var x = cljs.core.first(arglist__11049);
var options = cljs.core.rest(arglist__11049);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__11054 = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__11058__delegate = function (args){
var temp__4090__auto____11055 = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem__11054),args,null);
if(cljs.core.truth_(temp__4090__auto____11055))
{var v__11056 = temp__4090__auto____11055;
return v__11056;
} else
{var ret__11057 = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem__11054,cljs.core.assoc,args,ret__11057);
return ret__11057;
}
};
var G__11058 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11058__delegate.call(this, args);
};
G__11058.cljs$lang$maxFixedArity = 0;
G__11058.cljs$lang$applyTo = (function (arglist__11059){
var args = cljs.core.seq(arglist__11059);;
return G__11058__delegate(args);
});
G__11058.cljs$lang$arity$variadic = G__11058__delegate;
return G__11058;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret__11061 = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret__11061))
{{
var G__11062 = ret__11061;
f = G__11062;
continue;
}
} else
{return ret__11061;
}
break;
}
});
var trampoline__2 = (function() { 
var G__11063__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__11063 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11063__delegate.call(this, f, args);
};
G__11063.cljs$lang$maxFixedArity = 1;
G__11063.cljs$lang$applyTo = (function (arglist__11064){
var f = cljs.core.first(arglist__11064);
var args = cljs.core.rest(arglist__11064);
return G__11063__delegate(f, args);
});
G__11063.cljs$lang$arity$variadic = G__11063__delegate;
return G__11063;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__11066 = f.call(null,x);
return cljs.core.assoc.call(null,ret,k__11066,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k__11066,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3943__auto____11075 = cljs.core._EQ_.call(null,child,parent);
if(or__3943__auto____11075)
{return or__3943__auto____11075;
} else
{var or__3943__auto____11076 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3943__auto____11076)
{return or__3943__auto____11076;
} else
{var and__3941__auto____11077 = cljs.core.vector_QMARK_.call(null,parent);
if(and__3941__auto____11077)
{var and__3941__auto____11078 = cljs.core.vector_QMARK_.call(null,child);
if(and__3941__auto____11078)
{var and__3941__auto____11079 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3941__auto____11079)
{var ret__11080 = true;
var i__11081 = 0;
while(true){
if((function (){var or__3943__auto____11082 = cljs.core.not.call(null,ret__11080);
if(or__3943__auto____11082)
{return or__3943__auto____11082;
} else
{return (i__11081 === cljs.core.count.call(null,parent));
}
})())
{return ret__11080;
} else
{{
var G__11083 = isa_QMARK_.call(null,h,child.call(null,i__11081),parent.call(null,i__11081));
var G__11084 = (i__11081 + 1);
ret__11080 = G__11083;
i__11081 = G__11084;
continue;
}
}
break;
}
} else
{return and__3941__auto____11079;
}
} else
{return and__3941__auto____11078;
}
} else
{return and__3941__auto____11077;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6678,"\uFDD0'column",12))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",6682,"\uFDD0'column",12))))].join('')));
}
var tp__11093 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td__11094 = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta__11095 = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf__11096 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3943__auto____11097 = ((cljs.core.contains_QMARK_.call(null,tp__11093.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta__11095.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta__11095.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp__11093,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__11096.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td__11094,parent,ta__11095),"\uFDD0'descendants":tf__11096.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta__11095,tag,td__11094)});
})());
if(cljs.core.truth_(or__3943__auto____11097))
{return or__3943__auto____11097;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__11102 = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents__11103 = (cljs.core.truth_(parentMap__11102.call(null,tag))?cljs.core.disj.call(null,parentMap__11102.call(null,tag),parent):cljs.core.set([]));
var newParents__11104 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__11103))?cljs.core.assoc.call(null,parentMap__11102,tag,childsParents__11103):cljs.core.dissoc.call(null,parentMap__11102,tag));
var deriv_seq__11105 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__11085_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__11085_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__11085_SHARP_),cljs.core.second.call(null,p1__11085_SHARP_)));
}),cljs.core.seq.call(null,newParents__11104)));
if(cljs.core.contains_QMARK_.call(null,parentMap__11102.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__11086_SHARP_,p2__11087_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__11086_SHARP_,p2__11087_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__11105));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__11113 = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3943__auto____11115 = (cljs.core.truth_((function (){var and__3941__auto____11114 = xprefs__11113;
if(cljs.core.truth_(and__3941__auto____11114))
{return xprefs__11113.call(null,y);
} else
{return and__3941__auto____11114;
}
})())?true:null);
if(cljs.core.truth_(or__3943__auto____11115))
{return or__3943__auto____11115;
} else
{var or__3943__auto____11117 = (function (){var ps__11116 = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps__11116) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__11116),prefer_table)))
{} else
{}
{
var G__11120 = cljs.core.rest.call(null,ps__11116);
ps__11116 = G__11120;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____11117))
{return or__3943__auto____11117;
} else
{var or__3943__auto____11119 = (function (){var ps__11118 = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps__11118) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__11118),y,prefer_table)))
{} else
{}
{
var G__11121 = cljs.core.rest.call(null,ps__11118);
ps__11118 = G__11121;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____11119))
{return or__3943__auto____11119;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3943__auto____11123 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3943__auto____11123))
{return or__3943__auto____11123;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__11141 = cljs.core.reduce.call(null,(function (be,p__11133){
var vec__11134__11135 = p__11133;
var k__11136 = cljs.core.nth.call(null,vec__11134__11135,0,null);
var ___11137 = cljs.core.nth.call(null,vec__11134__11135,1,null);
var e__11138 = vec__11134__11135;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k__11136))
{var be2__11140 = (cljs.core.truth_((function (){var or__3943__auto____11139 = (be == null);
if(or__3943__auto____11139)
{return or__3943__auto____11139;
} else
{return cljs.core.dominates.call(null,k__11136,cljs.core.first.call(null,be),prefer_table);
}
})())?e__11138:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__11140),k__11136,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k__11136),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2__11140)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2__11140;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry__11141))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__11141));
return cljs.core.second.call(null,best_entry__11141);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3941__auto____11145 = mf;
if(and__3941__auto____11145)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3941__auto____11145;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{return (function (){var or__3943__auto____11146 = (cljs.core._reset[goog.typeOf(mf)]);
if(or__3943__auto____11146)
{return or__3943__auto____11146;
} else
{var or__3943__auto____11147 = (cljs.core._reset["_"]);
if(or__3943__auto____11147)
{return or__3943__auto____11147;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3941__auto____11151 = mf;
if(and__3941__auto____11151)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3941__auto____11151;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{return (function (){var or__3943__auto____11152 = (cljs.core._add_method[goog.typeOf(mf)]);
if(or__3943__auto____11152)
{return or__3943__auto____11152;
} else
{var or__3943__auto____11153 = (cljs.core._add_method["_"]);
if(or__3943__auto____11153)
{return or__3943__auto____11153;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3941__auto____11157 = mf;
if(and__3941__auto____11157)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3941__auto____11157;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3943__auto____11158 = (cljs.core._remove_method[goog.typeOf(mf)]);
if(or__3943__auto____11158)
{return or__3943__auto____11158;
} else
{var or__3943__auto____11159 = (cljs.core._remove_method["_"]);
if(or__3943__auto____11159)
{return or__3943__auto____11159;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3941__auto____11163 = mf;
if(and__3941__auto____11163)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3941__auto____11163;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3943__auto____11164 = (cljs.core._prefer_method[goog.typeOf(mf)]);
if(or__3943__auto____11164)
{return or__3943__auto____11164;
} else
{var or__3943__auto____11165 = (cljs.core._prefer_method["_"]);
if(or__3943__auto____11165)
{return or__3943__auto____11165;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3941__auto____11169 = mf;
if(and__3941__auto____11169)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3941__auto____11169;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{return (function (){var or__3943__auto____11170 = (cljs.core._get_method[goog.typeOf(mf)]);
if(or__3943__auto____11170)
{return or__3943__auto____11170;
} else
{var or__3943__auto____11171 = (cljs.core._get_method["_"]);
if(or__3943__auto____11171)
{return or__3943__auto____11171;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3941__auto____11175 = mf;
if(and__3941__auto____11175)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3941__auto____11175;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{return (function (){var or__3943__auto____11176 = (cljs.core._methods[goog.typeOf(mf)]);
if(or__3943__auto____11176)
{return or__3943__auto____11176;
} else
{var or__3943__auto____11177 = (cljs.core._methods["_"]);
if(or__3943__auto____11177)
{return or__3943__auto____11177;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3941__auto____11181 = mf;
if(and__3941__auto____11181)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3941__auto____11181;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{return (function (){var or__3943__auto____11182 = (cljs.core._prefers[goog.typeOf(mf)]);
if(or__3943__auto____11182)
{return or__3943__auto____11182;
} else
{var or__3943__auto____11183 = (cljs.core._prefers["_"]);
if(or__3943__auto____11183)
{return or__3943__auto____11183;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3941__auto____11187 = mf;
if(and__3941__auto____11187)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3941__auto____11187;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{return (function (){var or__3943__auto____11188 = (cljs.core._dispatch[goog.typeOf(mf)]);
if(or__3943__auto____11188)
{return or__3943__auto____11188;
} else
{var or__3943__auto____11189 = (cljs.core._dispatch["_"]);
if(or__3943__auto____11189)
{return or__3943__auto____11189;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__11192 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__11193 = cljs.core._get_method.call(null,mf,dispatch_val__11192);
if(cljs.core.truth_(target_fn__11193))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val__11192)].join('')));
}
return cljs.core.apply.call(null,target_fn__11193,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 64;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11194 = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var this__11195 = this;
cljs.core.swap_BANG_.call(null,this__11195.method_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11195.method_cache,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11195.prefer_table,(function (mf){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,this__11195.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var this__11196 = this;
cljs.core.swap_BANG_.call(null,this__11196.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__11196.method_cache,this__11196.method_table,this__11196.cached_hierarchy,this__11196.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var this__11197 = this;
cljs.core.swap_BANG_.call(null,this__11197.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__11197.method_cache,this__11197.method_table,this__11197.cached_hierarchy,this__11197.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var this__11198 = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__11198.cached_hierarchy),cljs.core.deref.call(null,this__11198.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,this__11198.method_cache,this__11198.method_table,this__11198.cached_hierarchy,this__11198.hierarchy);
}
var temp__4090__auto____11199 = cljs.core.deref.call(null,this__11198.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4090__auto____11199))
{var target_fn__11200 = temp__4090__auto____11199;
return target_fn__11200;
} else
{var temp__4090__auto____11201 = cljs.core.find_and_cache_best_method.call(null,this__11198.name,dispatch_val,this__11198.hierarchy,this__11198.method_table,this__11198.prefer_table,this__11198.method_cache,this__11198.cached_hierarchy);
if(cljs.core.truth_(temp__4090__auto____11201))
{var target_fn__11202 = temp__4090__auto____11201;
return target_fn__11202;
} else
{return cljs.core.deref.call(null,this__11198.method_table).call(null,this__11198.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__11203 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__11203.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(this__11203.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,this__11203.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__11203.method_cache,this__11203.method_table,this__11203.cached_hierarchy,this__11203.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var this__11204 = this;
return cljs.core.deref.call(null,this__11204.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var this__11205 = this;
return cljs.core.deref.call(null,this__11205.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var this__11206 = this;
return cljs.core.do_dispatch.call(null,mf,this__11206.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__11208__delegate = function (_,args){
var self__11207 = this;
return cljs.core._dispatch.call(null,self__11207,args);
};
var G__11208 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__11208__delegate.call(this, _, args);
};
G__11208.cljs$lang$maxFixedArity = 1;
G__11208.cljs$lang$applyTo = (function (arglist__11209){
var _ = cljs.core.first(arglist__11209);
var args = cljs.core.rest(arglist__11209);
return G__11208__delegate(_, args);
});
G__11208.cljs$lang$arity$variadic = G__11208__delegate;
return G__11208;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self__11210 = this;
return cljs.core._dispatch.call(null,self__11210,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 543162368;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this__11211 = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_11213,_){
var this__11212 = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(this__11212.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var this__11214 = this;
return (this__11214.uuid === other.uuid);
});
cljs.core.UUID.prototype.toString = (function (){
var this__11215 = this;
var this__11216 = this;
return cljs.core.pr_str.call(null,this__11216);
});
cljs.core.UUID;

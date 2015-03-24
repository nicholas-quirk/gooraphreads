goog.provide('c2.dom');
goog.require('cljs.core');
goog.require('goog.style');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('singult.core');
goog.require('clojure.string');
Element.prototype.matchesSelector = Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
if(cljs.core.truth_(typeof NodeList != "undefined"))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
return cljs.core.array_seq.call(null,array,0);
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
return cljs.core.array_seq.call(null,array,0);
});
void 0;
void 0;c2.dom.IDom = {};
c2.dom.__GT_dom = (function __GT_dom(x){
if((function (){var and__3941__auto____11221 = x;
if(and__3941__auto____11221)
{return x.c2$dom$IDom$__GT_dom$arity$1;
} else
{return and__3941__auto____11221;
}
})())
{return x.c2$dom$IDom$__GT_dom$arity$1(x);
} else
{return (function (){var or__3943__auto____11222 = (c2.dom.__GT_dom[goog.typeOf(x)]);
if(or__3943__auto____11222)
{return or__3943__auto____11222;
} else
{var or__3943__auto____11223 = (c2.dom.__GT_dom["_"]);
if(or__3943__auto____11223)
{return or__3943__auto____11223;
} else
{throw cljs.core.missing_protocol.call(null,"IDom.->dom",x);
}
}
})().call(null,x);
}
});
void 0;cljs.core.PersistentVector.prototype.c2$dom$IDom$ = true;
cljs.core.PersistentVector.prototype.c2$dom$IDom$__GT_dom$arity$1 = (function (v){
return singult.core.render.call(null,v);
});
(c2.dom.IDom["string"] = true);
(c2.dom.__GT_dom["string"] = (function (selector){
return c2.dom.select.call(null,selector);
}));
if(cljs.core.truth_(typeof Node != "undefined"))
{Node.prototype.c2$dom$IDom$ = true;
Node.prototype.c2$dom$IDom$__GT_dom$arity$1 = (function (node){
return node;
});
} else
{}
/**
* Select a single DOM node via CSS selector, optionally scoped by second arg.
*/
c2.dom.select = (function() {
var select = null;
var select__1 = (function (selector){
return document.querySelector(selector);
});
var select__2 = (function (selector,container){
return c2.dom.__GT_dom.call(null,container).querySelector(selector);
});
select = function(selector,container){
switch(arguments.length){
case 1:
return select__1.call(this,selector);
case 2:
return select__2.call(this,selector,container);
}
throw('Invalid arity: ' + arguments.length);
};
select.cljs$lang$arity$1 = select__1;
select.cljs$lang$arity$2 = select__2;
return select;
})()
;
/**
* Like select, but returns a collection of nodes.
*/
c2.dom.select_all = (function() {
var select_all = null;
var select_all__1 = (function (selector){
return document.querySelectorAll(selector);
});
var select_all__2 = (function (selector,container){
return c2.dom.__GT_dom.call(null,container).querySelectorAll(selector);
});
select_all = function(selector,container){
switch(arguments.length){
case 1:
return select_all__1.call(this,selector);
case 2:
return select_all__2.call(this,selector,container);
}
throw('Invalid arity: ' + arguments.length);
};
select_all.cljs$lang$arity$1 = select_all__1;
select_all.cljs$lang$arity$2 = select_all__2;
return select_all;
})()
;
/**
* Does live `node` match CSS `selector`?
*/
c2.dom.matches_selector_QMARK_ = (function matches_selector_QMARK_(node,selector){
return node.matchesSelector(selector);
});
/**
* Return the children of a live DOM element.
*/
c2.dom.children = (function children(node){
return c2.dom.__GT_dom.call(null,node).children;
});
/**
* Return parent of a live DOM node.
*/
c2.dom.parent = (function parent(node){
return c2.dom.__GT_dom.call(null,node).parentNode;
});
/**
* Make element last child of container.
* Returns live child.
*/
c2.dom.append_BANG_ = (function append_BANG_(container,el){
var el__11225 = c2.dom.__GT_dom.call(null,el);
goog.dom.appendChild(c2.dom.__GT_dom.call(null,container),el__11225);
return el__11225;
});
/**
* Make element first child of container.
* Returns live DOM child.
*/
c2.dom.prepend_BANG_ = (function prepend_BANG_(container,el){
var el__11227 = c2.dom.__GT_dom.call(null,el);
goog.dom.insertChildAt(c2.dom.__GT_dom.call(null,container),el__11227,0);
return el__11227;
});
/**
* Remove element from DOM and return it.
* > *el* CSS selector or live DOM node
*/
c2.dom.remove_BANG_ = (function remove_BANG_(el){
return goog.dom.removeNode(c2.dom.__GT_dom.call(null,el));
});
/**
* Replace live DOM node with a new one, returning the latter.
* > *old* CSS selector or live DOM node
* > *new* CSS selector, live DOM node, or hiccup vector
*/
c2.dom.replace_BANG_ = (function replace_BANG_(old,new$){
var new__11229 = c2.dom.__GT_dom.call(null,new$);
goog.dom.replaceNode(new__11229,c2.dom.__GT_dom.call(null,old));
return new__11229;
});
/**
* Get or set inline element style.
* 
* `(style el)`                map of inline element styles
* 
* `(style el :keyword)`       value of style :keyword
* 
* `(style el {:keyword val})` sets inline style according to map, returns element
* 
* `(style el :keyword val)`   sets single style, returns element
*/
c2.dom.style = (function() {
var style = null;
var style__1 = (function (el){
throw (new Error("TODO: return map of element styles"));
});
var style__2 = (function (el,x){
var el__11250 = c2.dom.__GT_dom.call(null,el);
if(cljs.core.keyword_QMARK_.call(null,x))
{return goog.style.getComputedStyle(el__11250,cljs.core.name.call(null,x));
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var G__11251__11252 = cljs.core.seq.call(null,x);
if(G__11251__11252)
{var G__11254__11256 = cljs.core.first.call(null,G__11251__11252);
var vec__11255__11257 = G__11254__11256;
var k__11258 = cljs.core.nth.call(null,vec__11255__11257,0,null);
var v__11259 = cljs.core.nth.call(null,vec__11255__11257,1,null);
var G__11251__11260 = G__11251__11252;
var G__11254__11261 = G__11254__11256;
var G__11251__11262 = G__11251__11260;
while(true){
var vec__11263__11264 = G__11254__11261;
var k__11265 = cljs.core.nth.call(null,vec__11263__11264,0,null);
var v__11266 = cljs.core.nth.call(null,vec__11263__11264,1,null);
var G__11251__11267 = G__11251__11262;
style.call(null,el__11250,k__11265,v__11266);
var temp__4092__auto____11268 = cljs.core.next.call(null,G__11251__11267);
if(temp__4092__auto____11268)
{var G__11251__11269 = temp__4092__auto____11268;
{
var G__11270 = cljs.core.first.call(null,G__11251__11269);
var G__11271 = G__11251__11269;
G__11254__11261 = G__11270;
G__11251__11262 = G__11271;
continue;
}
} else
{}
break;
}
} else
{}
return el__11250;
} else
{return null;
}
}
});
var style__3 = (function (el,k,v){
goog.style.setStyle(c2.dom.__GT_dom.call(null,el),cljs.core.name.call(null,k),((cljs.core.string_QMARK_.call(null,v))?v:((cljs.core.number_QMARK_.call(null,v))?(cljs.core.truth_(cljs.core.set(["\uFDD0'bottom","\uFDD0'width","\uFDD0'top","\uFDD0'right","\uFDD0'left","\uFDD0'height"]).call(null,cljs.core.keyword.call(null,k)))?[cljs.core.str(v),cljs.core.str("px")].join(''):v):null)));
return el;
});
style = function(el,k,v){
switch(arguments.length){
case 1:
return style__1.call(this,el);
case 2:
return style__2.call(this,el,k);
case 3:
return style__3.call(this,el,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
style.cljs$lang$arity$1 = style__1;
style.cljs$lang$arity$2 = style__2;
style.cljs$lang$arity$3 = style__3;
return style;
})()
;
/**
* Get or set element attributes.
* 
* `(attr el)`                map of element attributes
* 
* `(attr el :keyword)`       value of attr :keyword
* 
* `(attr el {:keyword val})` sets element attributes according to map, returns element
* 
* `(attr el :keyword val)`   sets single attr, returns element
*/
c2.dom.attr = (function() {
var attr = null;
var attr__1 = (function (el){
var attrs__11305 = c2.dom.__GT_dom.call(null,el).attributes;
return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2487__auto____11316 = (function iter__11306(s__11307){
return (new cljs.core.LazySeq(null,false,(function (){
var s__11307__11312 = s__11307;
while(true){
var temp__4092__auto____11313 = cljs.core.seq.call(null,s__11307__11312);
if(temp__4092__auto____11313)
{var xs__4579__auto____11314 = temp__4092__auto____11313;
var i__11315 = cljs.core.first.call(null,xs__4579__auto____11314);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,(attrs__11305[i__11315]).name),(attrs__11305[i__11315]).value], true),iter__11306.call(null,cljs.core.rest.call(null,s__11307__11312)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2487__auto____11316.call(null,cljs.core.range.call(null,attrs__11305.length));
})());
});
var attr__2 = (function (el,x){
var el__11317 = c2.dom.__GT_dom.call(null,el);
if(cljs.core.keyword_QMARK_.call(null,x))
{return el__11317.getAttribute(cljs.core.name.call(null,x));
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var G__11318__11319 = cljs.core.seq.call(null,x);
if(G__11318__11319)
{var G__11321__11323 = cljs.core.first.call(null,G__11318__11319);
var vec__11322__11324 = G__11321__11323;
var k__11325 = cljs.core.nth.call(null,vec__11322__11324,0,null);
var v__11326 = cljs.core.nth.call(null,vec__11322__11324,1,null);
var G__11318__11327 = G__11318__11319;
var G__11321__11328 = G__11321__11323;
var G__11318__11329 = G__11318__11327;
while(true){
var vec__11330__11331 = G__11321__11328;
var k__11332 = cljs.core.nth.call(null,vec__11330__11331,0,null);
var v__11333 = cljs.core.nth.call(null,vec__11330__11331,1,null);
var G__11318__11334 = G__11318__11329;
attr.call(null,el__11317,k__11332,v__11333);
var temp__4092__auto____11335 = cljs.core.next.call(null,G__11318__11334);
if(temp__4092__auto____11335)
{var G__11318__11336 = temp__4092__auto____11335;
{
var G__11338 = cljs.core.first.call(null,G__11318__11336);
var G__11339 = G__11318__11336;
G__11321__11328 = G__11338;
G__11318__11329 = G__11339;
continue;
}
} else
{}
break;
}
} else
{}
return el__11317;
} else
{return null;
}
}
});
var attr__3 = (function (el,k,v){
var el__11337 = c2.dom.__GT_dom.call(null,el);
if((v == null))
{el__11337.removeAttribute(cljs.core.name.call(null,k));
} else
{if(cljs.core._EQ_.call(null,"\uFDD0'style",k))
{c2.dom.style.call(null,el__11337,v);
} else
{el__11337.setAttribute(cljs.core.name.call(null,k),v);
}
}
return el__11337;
});
attr = function(el,k,v){
switch(arguments.length){
case 1:
return attr__1.call(this,el);
case 2:
return attr__2.call(this,el,k);
case 3:
return attr__3.call(this,el,k,v);
}
throw('Invalid arity: ' + arguments.length);
};
attr.cljs$lang$arity$1 = attr__1;
attr.cljs$lang$arity$2 = attr__2;
attr.cljs$lang$arity$3 = attr__3;
return attr;
})()
;
/**
* Get or set element text, returning element
*/
c2.dom.text = (function() {
var text = null;
var text__1 = (function (el){
return goog.dom.getTextContent(c2.dom.__GT_dom.call(null,el));
});
var text__2 = (function (el,v){
var el__11341 = c2.dom.__GT_dom.call(null,el);
goog.dom.setTextContent(el__11341,v);
return el__11341;
});
text = function(el,v){
switch(arguments.length){
case 1:
return text__1.call(this,el);
case 2:
return text__2.call(this,el,v);
}
throw('Invalid arity: ' + arguments.length);
};
text.cljs$lang$arity$1 = text__1;
text.cljs$lang$arity$2 = text__2;
return text;
})()
;
/**
* Get or set element value.
*/
c2.dom.val = (function() {
var val = null;
var val__1 = (function (el){
return goog.dom.forms.getValue(c2.dom.__GT_dom.call(null,el));
});
var val__2 = (function (el,v){
var el__11343 = c2.dom.__GT_dom.call(null,el);
goog.dom.forms.setValue(el__11343,v);
return el__11343;
});
val = function(el,v){
switch(arguments.length){
case 1:
return val__1.call(this,el);
case 2:
return val__2.call(this,el,v);
}
throw('Invalid arity: ' + arguments.length);
};
val.cljs$lang$arity$1 = val__1;
val.cljs$lang$arity$2 = val__2;
return val;
})()
;
/**
* Add or remove `class` to element based on boolean `classed?`, returning element.
*/
c2.dom.classed_BANG_ = (function classed_BANG_(el,class$,classed_QMARK_){
goog.dom.classes.enable(c2.dom.__GT_dom.call(null,el),cljs.core.name.call(null,class$),classed_QMARK_);
return el;
});
c2.dom.add_class_BANG_ = (function add_class_BANG_(el,class$){
return c2.dom.classed_BANG_.call(null,el,class$,true);
});
c2.dom.remove_class_BANG_ = (function remove_class_BANG_(el,class$){
return c2.dom.classed_BANG_.call(null,el,class$,false);
});
c2.dom.request_animation_frame = (function (){var or__3943__auto____11345 = window.requestAnimationFrame;
if(cljs.core.truth_(or__3943__auto____11345))
{return or__3943__auto____11345;
} else
{var or__3943__auto____11346 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__3943__auto____11346))
{return or__3943__auto____11346;
} else
{return (function (p1__11344_SHARP_){
return setTimeout((function (){
return p1__11344_SHARP_.call(null);
}),10);
});
}
}
})();

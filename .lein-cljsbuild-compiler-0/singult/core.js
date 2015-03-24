goog.provide('singult.core');
goog.require('cljs.core');
goog.require('singult.coffee');

/**
* @constructor
* @param {*} data
* @param {*} mapping
* @param {*} key_fn
* @param {*} enter
* @param {*} update
* @param {*} exit
* @param {*} force_update_QMARK_
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
singult.core.Unify = (function (data,mapping,key_fn,enter,update,exit,force_update_QMARK_,__meta,__extmap){
this.data = data;
this.mapping = mapping;
this.key_fn = key_fn;
this.enter = enter;
this.update = update;
this.exit = exit;
this.force_update_QMARK_ = force_update_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054858;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
singult.core.Unify.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2339__auto__){
var this__11392 = this;
var h__2213__auto____11393 = this__11392.__hash;
if(!((h__2213__auto____11393 == null)))
{return h__2213__auto____11393;
} else
{var h__2213__auto____11394 = cljs.core.hash_imap.call(null,this__2339__auto__);
this__11392.__hash = h__2213__auto____11394;
return h__2213__auto____11394;
}
});
singult.core.Unify.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2344__auto__,k__2345__auto__){
var this__11395 = this;
return this__2344__auto__.cljs$core$ILookup$_lookup$arity$3(this__2344__auto__,k__2345__auto__,null);
});
singult.core.Unify.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2346__auto__,k11390,else__2347__auto__){
var this__11396 = this;
if((k11390 === "\uFDD0'data"))
{return this__11396.data;
} else
{if((k11390 === "\uFDD0'mapping"))
{return this__11396.mapping;
} else
{if((k11390 === "\uFDD0'key-fn"))
{return this__11396.key_fn;
} else
{if((k11390 === "\uFDD0'enter"))
{return this__11396.enter;
} else
{if((k11390 === "\uFDD0'update"))
{return this__11396.update;
} else
{if((k11390 === "\uFDD0'exit"))
{return this__11396.exit;
} else
{if((k11390 === "\uFDD0'force-update?"))
{return this__11396.force_update_QMARK_;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__11396.__extmap,k11390,else__2347__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
});
singult.core.Unify.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2351__auto__,k__2352__auto__,G__11389){
var this__11397 = this;
var pred__11398__11401 = cljs.core.identical_QMARK_;
var expr__11399__11402 = k__2352__auto__;
if(pred__11398__11401.call(null,"\uFDD0'data",expr__11399__11402))
{return (new singult.core.Unify(G__11389,this__11397.mapping,this__11397.key_fn,this__11397.enter,this__11397.update,this__11397.exit,this__11397.force_update_QMARK_,this__11397.__meta,this__11397.__extmap,null));
} else
{if(pred__11398__11401.call(null,"\uFDD0'mapping",expr__11399__11402))
{return (new singult.core.Unify(this__11397.data,G__11389,this__11397.key_fn,this__11397.enter,this__11397.update,this__11397.exit,this__11397.force_update_QMARK_,this__11397.__meta,this__11397.__extmap,null));
} else
{if(pred__11398__11401.call(null,"\uFDD0'key-fn",expr__11399__11402))
{return (new singult.core.Unify(this__11397.data,this__11397.mapping,G__11389,this__11397.enter,this__11397.update,this__11397.exit,this__11397.force_update_QMARK_,this__11397.__meta,this__11397.__extmap,null));
} else
{if(pred__11398__11401.call(null,"\uFDD0'enter",expr__11399__11402))
{return (new singult.core.Unify(this__11397.data,this__11397.mapping,this__11397.key_fn,G__11389,this__11397.update,this__11397.exit,this__11397.force_update_QMARK_,this__11397.__meta,this__11397.__extmap,null));
} else
{if(pred__11398__11401.call(null,"\uFDD0'update",expr__11399__11402))
{return (new singult.core.Unify(this__11397.data,this__11397.mapping,this__11397.key_fn,this__11397.enter,G__11389,this__11397.exit,this__11397.force_update_QMARK_,this__11397.__meta,this__11397.__extmap,null));
} else
{if(pred__11398__11401.call(null,"\uFDD0'exit",expr__11399__11402))
{return (new singult.core.Unify(this__11397.data,this__11397.mapping,this__11397.key_fn,this__11397.enter,this__11397.update,G__11389,this__11397.force_update_QMARK_,this__11397.__meta,this__11397.__extmap,null));
} else
{if(pred__11398__11401.call(null,"\uFDD0'force-update?",expr__11399__11402))
{return (new singult.core.Unify(this__11397.data,this__11397.mapping,this__11397.key_fn,this__11397.enter,this__11397.update,this__11397.exit,G__11389,this__11397.__meta,this__11397.__extmap,null));
} else
{return (new singult.core.Unify(this__11397.data,this__11397.mapping,this__11397.key_fn,this__11397.enter,this__11397.update,this__11397.exit,this__11397.force_update_QMARK_,this__11397.__meta,cljs.core.assoc.call(null,this__11397.__extmap,k__2352__auto__,G__11389),null));
}
}
}
}
}
}
}
});
singult.core.Unify.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2349__auto__,entry__2350__auto__){
var this__11403 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2350__auto__))
{return this__2349__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2349__auto__,cljs.core._nth.call(null,entry__2350__auto__,0),cljs.core._nth.call(null,entry__2350__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2349__auto__,entry__2350__auto__);
}
});
singult.core.Unify.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2356__auto__){
var this__11404 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'data",this__11404.data),cljs.core.vector.call(null,"\uFDD0'mapping",this__11404.mapping),cljs.core.vector.call(null,"\uFDD0'key-fn",this__11404.key_fn),cljs.core.vector.call(null,"\uFDD0'enter",this__11404.enter),cljs.core.vector.call(null,"\uFDD0'update",this__11404.update),cljs.core.vector.call(null,"\uFDD0'exit",this__11404.exit),cljs.core.vector.call(null,"\uFDD0'force-update?",this__11404.force_update_QMARK_)], true),this__11404.__extmap));
});
singult.core.Unify.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2358__auto__,opts__2359__auto__){
var this__11405 = this;
var pr_pair__2360__auto____11406 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2360__auto____11406,[cljs.core.str("#"),cljs.core.str("Unify"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'data",this__11405.data),cljs.core.vector.call(null,"\uFDD0'mapping",this__11405.mapping),cljs.core.vector.call(null,"\uFDD0'key-fn",this__11405.key_fn),cljs.core.vector.call(null,"\uFDD0'enter",this__11405.enter),cljs.core.vector.call(null,"\uFDD0'update",this__11405.update),cljs.core.vector.call(null,"\uFDD0'exit",this__11405.exit),cljs.core.vector.call(null,"\uFDD0'force-update?",this__11405.force_update_QMARK_)], true),this__11405.__extmap));
});
singult.core.Unify.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2348__auto__){
var this__11407 = this;
return (7 + cljs.core.count.call(null,this__11407.__extmap));
});
singult.core.Unify.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2340__auto__,other__2341__auto__){
var this__11408 = this;
if(cljs.core.truth_((function (){var and__3941__auto____11409 = other__2341__auto__;
if(cljs.core.truth_(and__3941__auto____11409))
{var and__3941__auto____11410 = (this__2340__auto__.constructor === other__2341__auto__.constructor);
if(and__3941__auto____11410)
{return cljs.core.equiv_map.call(null,this__2340__auto__,other__2341__auto__);
} else
{return and__3941__auto____11410;
}
} else
{return and__3941__auto____11409;
}
})()))
{return true;
} else
{return false;
}
});
singult.core.Unify.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2343__auto__,G__11389){
var this__11411 = this;
return (new singult.core.Unify(this__11411.data,this__11411.mapping,this__11411.key_fn,this__11411.enter,this__11411.update,this__11411.exit,this__11411.force_update_QMARK_,G__11389,this__11411.__extmap,this__11411.__hash));
});
singult.core.Unify.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2342__auto__){
var this__11412 = this;
return this__11412.__meta;
});
singult.core.Unify.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2353__auto__,k__2354__auto__){
var this__11413 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'data","\uFDD0'force-update?","\uFDD0'enter","\uFDD0'exit","\uFDD0'key-fn","\uFDD0'update","\uFDD0'mapping"]),k__2354__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2353__auto__),this__11413.__meta),k__2354__auto__);
} else
{return (new singult.core.Unify(this__11413.data,this__11413.mapping,this__11413.key_fn,this__11413.enter,this__11413.update,this__11413.exit,this__11413.force_update_QMARK_,this__11413.__meta,this__11413.__hash,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__11413.__extmap,k__2354__auto__)),null));
}
});
singult.core.Unify.cljs$lang$type = true;
singult.core.Unify.cljs$lang$ctorPrSeq = (function (this__2378__auto__){
return cljs.core.list.call(null,"singult.core/Unify");
});
singult.core.__GT_Unify = (function __GT_Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_){
return (new singult.core.Unify(data,mapping,key_fn,enter,update,exit,force_update_QMARK_));
});
singult.core.map__GT_Unify = (function map__GT_Unify(G__11391){
return (new singult.core.Unify((new cljs.core.Keyword("\uFDD0'data")).call(null,G__11391),(new cljs.core.Keyword("\uFDD0'mapping")).call(null,G__11391),(new cljs.core.Keyword("\uFDD0'key-fn")).call(null,G__11391),(new cljs.core.Keyword("\uFDD0'enter")).call(null,G__11391),(new cljs.core.Keyword("\uFDD0'update")).call(null,G__11391),(new cljs.core.Keyword("\uFDD0'exit")).call(null,G__11391),(new cljs.core.Keyword("\uFDD0'force-update?")).call(null,G__11391),null,cljs.core.dissoc.call(null,G__11391,"\uFDD0'data","\uFDD0'mapping","\uFDD0'key-fn","\uFDD0'enter","\uFDD0'update","\uFDD0'exit","\uFDD0'force-update?")));
});
singult.core.Unify;
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
*/
singult.core.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.instance_QMARK_.call(null,singult.core.Unify,x))
{var map__11467__11468 = x;
var map__11467__11469 = ((cljs.core.seq_QMARK_.call(null,map__11467__11468))?clojure.lang.PersistentHashMap.create.call(null,cljs.core.seq.call(null,map__11467__11468)):map__11467__11468);
var force_update_QMARK___11470 = cljs.core._lookup.call(null,map__11467__11469,"\uFDD0'force-update?",null);
var exit__11471 = cljs.core._lookup.call(null,map__11467__11469,"\uFDD0'exit",null);
var update__11472 = cljs.core._lookup.call(null,map__11467__11469,"\uFDD0'update",null);
var enter__11473 = cljs.core._lookup.call(null,map__11467__11469,"\uFDD0'enter",null);
var key_fn__11474 = cljs.core._lookup.call(null,map__11467__11469,"\uFDD0'key-fn",null);
var mapping__11475 = cljs.core._lookup.call(null,map__11467__11469,"\uFDD0'mapping",null);
var data__11476 = cljs.core._lookup.call(null,map__11467__11469,"\uFDD0'data",null);
var data_arr__11484 = (function (){var a__11477 = [];
var G__11478__11479 = cljs.core.seq.call(null,data__11476);
if(G__11478__11479)
{var d__11480 = cljs.core.first.call(null,G__11478__11479);
var G__11478__11481 = G__11478__11479;
while(true){
a__11477.push(d__11480);
var temp__4092__auto____11482 = cljs.core.next.call(null,G__11478__11481);
if(temp__4092__auto____11482)
{var G__11478__11483 = temp__4092__auto____11482;
{
var G__11520 = cljs.core.first.call(null,G__11478__11483);
var G__11521 = G__11478__11483;
d__11480 = G__11520;
G__11478__11481 = G__11521;
continue;
}
} else
{}
break;
}
} else
{}
return a__11477;
})();
return (new singult.coffee.Unify(data_arr__11484,(function (p1__11388_SHARP_){
return clj__GT_js.call(null,mapping__11475.call(null,p1__11388_SHARP_));
}),key_fn__11474,enter__11473,update__11472,exit__11471,force_update_QMARK___11470));
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{var o__11485 = {};
var G__11486__11487 = cljs.core.seq.call(null,x);
if(G__11486__11487)
{var G__11489__11491 = cljs.core.first.call(null,G__11486__11487);
var vec__11490__11492 = G__11489__11491;
var k__11493 = cljs.core.nth.call(null,vec__11490__11492,0,null);
var v__11494 = cljs.core.nth.call(null,vec__11490__11492,1,null);
var G__11486__11495 = G__11486__11487;
var G__11489__11496 = G__11489__11491;
var G__11486__11497 = G__11486__11495;
while(true){
var vec__11498__11499 = G__11489__11496;
var k__11500 = cljs.core.nth.call(null,vec__11498__11499,0,null);
var v__11501 = cljs.core.nth.call(null,vec__11498__11499,1,null);
var G__11486__11502 = G__11486__11497;
var key__11503 = clj__GT_js.call(null,k__11500);
if(cljs.core.string_QMARK_.call(null,key__11503))
{} else
{throw "Cannot convert; JavaScript map keys must be strings";
}
(o__11485[key__11503] = clj__GT_js.call(null,v__11501));
var temp__4092__auto____11504 = cljs.core.next.call(null,G__11486__11502);
if(temp__4092__auto____11504)
{var G__11486__11505 = temp__4092__auto____11504;
{
var G__11522 = cljs.core.first.call(null,G__11486__11505);
var G__11523 = G__11486__11505;
G__11489__11496 = G__11522;
G__11486__11497 = G__11523;
continue;
}
} else
{}
break;
}
} else
{}
return o__11485;
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{var a__11506 = [];
a__11506.push(":*:");
var G__11507__11508 = cljs.core.seq.call(null,x);
if(G__11507__11508)
{var item__11509 = cljs.core.first.call(null,G__11507__11508);
var G__11507__11510 = G__11507__11508;
while(true){
a__11506.push(clj__GT_js.call(null,item__11509));
var temp__4092__auto____11511 = cljs.core.next.call(null,G__11507__11510);
if(temp__4092__auto____11511)
{var G__11507__11512 = temp__4092__auto____11511;
{
var G__11524 = cljs.core.first.call(null,G__11507__11512);
var G__11525 = G__11507__11512;
item__11509 = G__11524;
G__11507__11510 = G__11525;
continue;
}
} else
{}
break;
}
} else
{}
return a__11506;
} else
{if(cljs.core.coll_QMARK_.call(null,x))
{var a__11513 = [];
var G__11514__11515 = cljs.core.seq.call(null,x);
if(G__11514__11515)
{var item__11516 = cljs.core.first.call(null,G__11514__11515);
var G__11514__11517 = G__11514__11515;
while(true){
a__11513.push(clj__GT_js.call(null,item__11516));
var temp__4092__auto____11518 = cljs.core.next.call(null,G__11514__11517);
if(temp__4092__auto____11518)
{var G__11514__11519 = temp__4092__auto____11518;
{
var G__11526 = cljs.core.first.call(null,G__11514__11519);
var G__11527 = G__11514__11519;
item__11516 = G__11526;
G__11514__11517 = G__11527;
continue;
}
} else
{}
break;
}
} else
{}
return a__11513;
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
}
});
singult.core.node_data = singult.coffee.node_data;
singult.core.attr = (function attr($n,m){
return singult.coffee.attr.call(null,$n,singult.core.clj__GT_js.call(null,m));
});
singult.core.render = (function render(v){
return singult.coffee.render.call(null,singult.coffee.canonicalize.call(null,singult.core.clj__GT_js.call(null,v)));
});
singult.core.merge_BANG_ = (function merge_BANG_($n,v){
if((v == null))
{return null;
} else
{return singult.coffee.merge.call(null,$n,singult.coffee.canonicalize.call(null,singult.core.clj__GT_js.call(null,v)));
}
});
/**
* @param {...*} var_args
*/
singult.core.unify = (function() { 
var unify__delegate = function (data,mapping,p__11528){
var map__11537__11538 = p__11528;
var map__11537__11539 = ((cljs.core.seq_QMARK_.call(null,map__11537__11538))?clojure.lang.PersistentHashMap.create.call(null,cljs.core.seq.call(null,map__11537__11538)):map__11537__11538);
var force_update_QMARK___11540 = cljs.core._lookup.call(null,map__11537__11539,"\uFDD0'force-update?",null);
var exit__11541 = cljs.core._lookup.call(null,map__11537__11539,"\uFDD0'exit",null);
var update__11542 = cljs.core._lookup.call(null,map__11537__11539,"\uFDD0'update",null);
var enter__11543 = cljs.core._lookup.call(null,map__11537__11539,"\uFDD0'enter",null);
var key_fn__11544 = cljs.core._lookup.call(null,map__11537__11539,"\uFDD0'key-fn",null);
return (new singult.core.Unify(data,mapping,key_fn__11544,enter__11543,update__11542,exit__11541,force_update_QMARK___11540));
};
var unify = function (data,mapping,var_args){
var p__11528 = null;
if (goog.isDef(var_args)) {
  p__11528 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return unify__delegate.call(this, data, mapping, p__11528);
};
unify.cljs$lang$maxFixedArity = 2;
unify.cljs$lang$applyTo = (function (arglist__11545){
var data = cljs.core.first(arglist__11545);
var mapping = cljs.core.first(cljs.core.next(arglist__11545));
var p__11528 = cljs.core.rest(cljs.core.next(arglist__11545));
return unify__delegate(data, mapping, p__11528);
});
unify.cljs$lang$arity$variadic = unify__delegate;
return unify;
})()
;
singult.core.ignore = (function ignore(){
return (new singult.coffee.Ignore());
});

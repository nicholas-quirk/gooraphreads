goog.provide('reflex.core');
goog.require('cljs.core');
void 0;
reflex.core.capture_derefed = (function capture_derefed(f){
var _BANG_recently_derefed11551__11552 = reflex.core._BANG_recently_derefed;
try{reflex.core._BANG_recently_derefed = cljs.core.atom.call(null,cljs.core.set([]),"\uFDD0'meta",cljs.core.ObjMap.fromObject(["\uFDD0'no-deref-monitor"],{"\uFDD0'no-deref-monitor":true}));
var res__11554 = f.call(null);
return cljs.core.ObjMap.fromObject(["\uFDD0'res","\uFDD0'derefed"],{"\uFDD0'res":res__11554,"\uFDD0'derefed":cljs.core.deref.call(null,reflex.core._BANG_recently_derefed)});
}finally {reflex.core._BANG_recently_derefed = _BANG_recently_derefed11551__11552;
}});
reflex.core.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){
if(cljs.core.truth_((function (){var and__3941__auto____11556 = reflex.core._BANG_recently_derefed;
if(cljs.core.truth_(and__3941__auto____11556))
{return cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'no-deref-monitor")).call(null,cljs.core.meta.call(null,derefable)));
} else
{return and__3941__auto____11556;
}
})()))
{return cljs.core.swap_BANG_.call(null,reflex.core._BANG_recently_derefed,(function (p1__11546_SHARP_){
return cljs.core.conj.call(null,p1__11546_SHARP_,derefable);
}));
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
reflex.core.notify_deref_watcher_BANG_.call(null,this$);
return this$.state;
});
void 0;reflex.core.IDisposable = {};
reflex.core.dispose_BANG_ = (function dispose_BANG_(this$){
if((function (){var and__3941__auto____11560 = this$;
if(and__3941__auto____11560)
{return this$.reflex$core$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3941__auto____11560;
}
})())
{return this$.reflex$core$IDisposable$dispose_BANG_$arity$1(this$);
} else
{return (function (){var or__3943__auto____11561 = (reflex.core.dispose_BANG_[goog.typeOf(this$)]);
if(or__3943__auto____11561)
{return or__3943__auto____11561;
} else
{var or__3943__auto____11562 = (reflex.core.dispose_BANG_["_"]);
if(or__3943__auto____11562)
{return or__3943__auto____11562;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
void 0;
/**
* @constructor
* @param {*} state
* @param {*} dirty_QMARK_
* @param {*} f
* @param {*} key
* @param {*} parent_watchables
* @param {*} watches
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
reflex.core.ComputedObservable = (function (state,dirty_QMARK_,f,key,parent_watchables,watches,__meta,__extmap){
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.f = f;
this.key = key;
this.parent_watchables = parent_watchables;
this.watches = watches;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2766571274;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
reflex.core.ComputedObservable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2339__auto__){
var this__11566 = this;
var h__2213__auto____11567 = this__11566.__hash;
if(!((h__2213__auto____11567 == null)))
{return h__2213__auto____11567;
} else
{var h__2213__auto____11568 = cljs.core.hash_imap.call(null,this__2339__auto__);
this__11566.__hash = h__2213__auto____11568;
return h__2213__auto____11568;
}
});
reflex.core.ComputedObservable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2344__auto__,k__2345__auto__){
var this__11569 = this;
return this__2344__auto__.cljs$core$ILookup$_lookup$arity$3(this__2344__auto__,k__2345__auto__,null);
});
reflex.core.ComputedObservable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2346__auto__,k11564,else__2347__auto__){
var this__11570 = this;
if((k11564 === "\uFDD0'state"))
{return this__11570.state;
} else
{if((k11564 === "\uFDD0'dirty?"))
{return this__11570.dirty_QMARK_;
} else
{if((k11564 === "\uFDD0'f"))
{return this__11570.f;
} else
{if((k11564 === "\uFDD0'key"))
{return this__11570.key;
} else
{if((k11564 === "\uFDD0'parent-watchables"))
{return this__11570.parent_watchables;
} else
{if((k11564 === "\uFDD0'watches"))
{return this__11570.watches;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__11570.__extmap,k11564,else__2347__auto__);
} else
{return null;
}
}
}
}
}
}
}
});
reflex.core.ComputedObservable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2351__auto__,k__2352__auto__,G__11563){
var this__11571 = this;
var pred__11572__11575 = cljs.core.identical_QMARK_;
var expr__11573__11576 = k__2352__auto__;
if(pred__11572__11575.call(null,"\uFDD0'state",expr__11573__11576))
{return (new reflex.core.ComputedObservable(G__11563,this__11571.dirty_QMARK_,this__11571.f,this__11571.key,this__11571.parent_watchables,this__11571.watches,this__11571.__meta,this__11571.__extmap,null));
} else
{if(pred__11572__11575.call(null,"\uFDD0'dirty?",expr__11573__11576))
{return (new reflex.core.ComputedObservable(this__11571.state,G__11563,this__11571.f,this__11571.key,this__11571.parent_watchables,this__11571.watches,this__11571.__meta,this__11571.__extmap,null));
} else
{if(pred__11572__11575.call(null,"\uFDD0'f",expr__11573__11576))
{return (new reflex.core.ComputedObservable(this__11571.state,this__11571.dirty_QMARK_,G__11563,this__11571.key,this__11571.parent_watchables,this__11571.watches,this__11571.__meta,this__11571.__extmap,null));
} else
{if(pred__11572__11575.call(null,"\uFDD0'key",expr__11573__11576))
{return (new reflex.core.ComputedObservable(this__11571.state,this__11571.dirty_QMARK_,this__11571.f,G__11563,this__11571.parent_watchables,this__11571.watches,this__11571.__meta,this__11571.__extmap,null));
} else
{if(pred__11572__11575.call(null,"\uFDD0'parent-watchables",expr__11573__11576))
{return (new reflex.core.ComputedObservable(this__11571.state,this__11571.dirty_QMARK_,this__11571.f,this__11571.key,G__11563,this__11571.watches,this__11571.__meta,this__11571.__extmap,null));
} else
{if(pred__11572__11575.call(null,"\uFDD0'watches",expr__11573__11576))
{return (new reflex.core.ComputedObservable(this__11571.state,this__11571.dirty_QMARK_,this__11571.f,this__11571.key,this__11571.parent_watchables,G__11563,this__11571.__meta,this__11571.__extmap,null));
} else
{return (new reflex.core.ComputedObservable(this__11571.state,this__11571.dirty_QMARK_,this__11571.f,this__11571.key,this__11571.parent_watchables,this__11571.watches,this__11571.__meta,cljs.core.assoc.call(null,this__11571.__extmap,k__2352__auto__,G__11563),null));
}
}
}
}
}
}
});
reflex.core.ComputedObservable.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this__11577 = this;
reflex.core.notify_deref_watcher_BANG_.call(null,this$);
if(cljs.core.not.call(null,this__11577.dirty_QMARK_))
{return this$.state;
} else
{var map__11578__11579 = reflex.core.capture_derefed.call(null,this__11577.f);
var map__11578__11580 = ((cljs.core.seq_QMARK_.call(null,map__11578__11579))?clojure.lang.PersistentHashMap.create.call(null,cljs.core.seq.call(null,map__11578__11579)):map__11578__11579);
var derefed__11581 = cljs.core._lookup.call(null,map__11578__11580,"\uFDD0'derefed",null);
var res__11582 = cljs.core._lookup.call(null,map__11578__11580,"\uFDD0'res",null);
var G__11583__11584 = cljs.core.seq.call(null,this__11577.parent_watchables);
if(G__11583__11584)
{var w__11585 = cljs.core.first.call(null,G__11583__11584);
var G__11583__11586 = G__11583__11584;
while(true){
cljs.core.remove_watch.call(null,w__11585,this__11577.key);
var temp__4092__auto____11587 = cljs.core.next.call(null,G__11583__11586);
if(temp__4092__auto____11587)
{var G__11583__11588 = temp__4092__auto____11587;
{
var G__11636 = cljs.core.first.call(null,G__11583__11588);
var G__11637 = G__11583__11588;
w__11585 = G__11636;
G__11583__11586 = G__11637;
continue;
}
} else
{}
break;
}
} else
{}
this$.parent_watchables = derefed__11581;
var G__11589__11590 = cljs.core.seq.call(null,derefed__11581);
if(G__11589__11590)
{var w__11591 = cljs.core.first.call(null,G__11589__11590);
var G__11589__11592 = G__11589__11590;
while(true){
cljs.core.add_watch.call(null,w__11591,this__11577.key,((function (w__11591,G__11589__11592){
return (function (){
this$.dirty_QMARK_ = true;
return cljs.core._notify_watches.call(null,this$,null,null);
});})(w__11591,G__11589__11592))
);
var temp__4092__auto____11593 = cljs.core.next.call(null,G__11589__11592);
if(temp__4092__auto____11593)
{var G__11589__11594 = temp__4092__auto____11593;
{
var G__11638 = cljs.core.first.call(null,G__11589__11594);
var G__11639 = G__11589__11594;
w__11591 = G__11638;
G__11589__11592 = G__11639;
continue;
}
} else
{}
break;
}
} else
{}
this$.state = res__11582;
this$.dirty_QMARK_ = false;
return res__11582;
}
});
reflex.core.ComputedObservable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2349__auto__,entry__2350__auto__){
var this__11595 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2350__auto__))
{return this__2349__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2349__auto__,cljs.core._nth.call(null,entry__2350__auto__,0),cljs.core._nth.call(null,entry__2350__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2349__auto__,entry__2350__auto__);
}
});
reflex.core.ComputedObservable.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,_11597,_){
var this__11596 = this;
var G__11598__11599 = cljs.core.seq.call(null,this__11596.watches);
if(G__11598__11599)
{var G__11601__11603 = cljs.core.first.call(null,G__11598__11599);
var vec__11602__11604 = G__11601__11603;
var key__11605 = cljs.core.nth.call(null,vec__11602__11604,0,null);
var wf__11606 = cljs.core.nth.call(null,vec__11602__11604,1,null);
var G__11598__11607 = G__11598__11599;
var G__11601__11608 = G__11601__11603;
var G__11598__11609 = G__11598__11607;
while(true){
var vec__11610__11611 = G__11601__11608;
var key__11612 = cljs.core.nth.call(null,vec__11610__11611,0,null);
var wf__11613 = cljs.core.nth.call(null,vec__11610__11611,1,null);
var G__11598__11614 = G__11598__11609;
wf__11613.call(null);
var temp__4092__auto____11615 = cljs.core.next.call(null,G__11598__11614);
if(temp__4092__auto____11615)
{var G__11598__11616 = temp__4092__auto____11615;
{
var G__11640 = cljs.core.first.call(null,G__11598__11616);
var G__11641 = G__11598__11616;
G__11601__11608 = G__11640;
G__11598__11609 = G__11641;
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
reflex.core.ComputedObservable.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,wf){
var this__11617 = this;
return this$.watches = cljs.core.assoc.call(null,this__11617.watches,key,wf);
});
reflex.core.ComputedObservable.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var this__11618 = this;
return this$.watches = cljs.core.dissoc.call(null,this__11618.watches,key);
});
reflex.core.ComputedObservable.prototype.reflex$core$IDisposable$ = true;
reflex.core.ComputedObservable.prototype.reflex$core$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var this__11619 = this;
var G__11620__11621 = cljs.core.seq.call(null,this__11619.parent_watchables);
if(G__11620__11621)
{var w__11622 = cljs.core.first.call(null,G__11620__11621);
var G__11620__11623 = G__11620__11621;
while(true){
cljs.core.remove_watch.call(null,w__11622,this__11619.key);
var temp__4092__auto____11624 = cljs.core.next.call(null,G__11620__11623);
if(temp__4092__auto____11624)
{var G__11620__11625 = temp__4092__auto____11624;
{
var G__11642 = cljs.core.first.call(null,G__11620__11625);
var G__11643 = G__11620__11625;
w__11622 = G__11642;
G__11620__11623 = G__11643;
continue;
}
} else
{}
break;
}
} else
{}
return this$.watches = null;
});
reflex.core.ComputedObservable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2356__auto__){
var this__11626 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'state",this__11626.state),cljs.core.vector.call(null,"\uFDD0'dirty?",this__11626.dirty_QMARK_),cljs.core.vector.call(null,"\uFDD0'f",this__11626.f),cljs.core.vector.call(null,"\uFDD0'key",this__11626.key),cljs.core.vector.call(null,"\uFDD0'parent-watchables",this__11626.parent_watchables),cljs.core.vector.call(null,"\uFDD0'watches",this__11626.watches)], true),this__11626.__extmap));
});
reflex.core.ComputedObservable.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2358__auto__,opts__2359__auto__){
var this__11627 = this;
var pr_pair__2360__auto____11628 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2360__auto____11628,[cljs.core.str("#"),cljs.core.str("ComputedObservable"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'state",this__11627.state),cljs.core.vector.call(null,"\uFDD0'dirty?",this__11627.dirty_QMARK_),cljs.core.vector.call(null,"\uFDD0'f",this__11627.f),cljs.core.vector.call(null,"\uFDD0'key",this__11627.key),cljs.core.vector.call(null,"\uFDD0'parent-watchables",this__11627.parent_watchables),cljs.core.vector.call(null,"\uFDD0'watches",this__11627.watches)], true),this__11627.__extmap));
});
reflex.core.ComputedObservable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2348__auto__){
var this__11629 = this;
return (6 + cljs.core.count.call(null,this__11629.__extmap));
});
reflex.core.ComputedObservable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2340__auto__,other__2341__auto__){
var this__11630 = this;
if(cljs.core.truth_((function (){var and__3941__auto____11631 = other__2341__auto__;
if(cljs.core.truth_(and__3941__auto____11631))
{var and__3941__auto____11632 = (this__2340__auto__.constructor === other__2341__auto__.constructor);
if(and__3941__auto____11632)
{return cljs.core.equiv_map.call(null,this__2340__auto__,other__2341__auto__);
} else
{return and__3941__auto____11632;
}
} else
{return and__3941__auto____11631;
}
})()))
{return true;
} else
{return false;
}
});
reflex.core.ComputedObservable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2343__auto__,G__11563){
var this__11633 = this;
return (new reflex.core.ComputedObservable(this__11633.state,this__11633.dirty_QMARK_,this__11633.f,this__11633.key,this__11633.parent_watchables,this__11633.watches,G__11563,this__11633.__extmap,this__11633.__hash));
});
reflex.core.ComputedObservable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2342__auto__){
var this__11634 = this;
return this__11634.__meta;
});
reflex.core.ComputedObservable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2353__auto__,k__2354__auto__){
var this__11635 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'dirty?","\uFDD0'state","\uFDD0'key","\uFDD0'f","\uFDD0'watches","\uFDD0'parent-watchables"]),k__2354__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2353__auto__),this__11635.__meta),k__2354__auto__);
} else
{return (new reflex.core.ComputedObservable(this__11635.state,this__11635.dirty_QMARK_,this__11635.f,this__11635.key,this__11635.parent_watchables,this__11635.watches,this__11635.__meta,this__11635.__hash,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__11635.__extmap,k__2354__auto__)),null));
}
});
reflex.core.ComputedObservable.cljs$lang$type = true;
reflex.core.ComputedObservable.cljs$lang$ctorPrSeq = (function (this__2378__auto__){
return cljs.core.list.call(null,"reflex.core/ComputedObservable");
});
reflex.core.__GT_ComputedObservable = (function __GT_ComputedObservable(state,dirty_QMARK_,f,key,parent_watchables,watches){
return (new reflex.core.ComputedObservable(state,dirty_QMARK_,f,key,parent_watchables,watches));
});
reflex.core.map__GT_ComputedObservable = (function map__GT_ComputedObservable(G__11565){
return (new reflex.core.ComputedObservable((new cljs.core.Keyword("\uFDD0'state")).call(null,G__11565),(new cljs.core.Keyword("\uFDD0'dirty?")).call(null,G__11565),(new cljs.core.Keyword("\uFDD0'f")).call(null,G__11565),(new cljs.core.Keyword("\uFDD0'key")).call(null,G__11565),(new cljs.core.Keyword("\uFDD0'parent-watchables")).call(null,G__11565),(new cljs.core.Keyword("\uFDD0'watches")).call(null,G__11565),null,cljs.core.dissoc.call(null,G__11565,"\uFDD0'state","\uFDD0'dirty?","\uFDD0'f","\uFDD0'key","\uFDD0'parent-watchables","\uFDD0'watches")));
});
reflex.core.ComputedObservable;
reflex.core.ComputedObservable.prototype.cljs$core$IHash$ = true;
reflex.core.ComputedObservable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
return this$.key;
});

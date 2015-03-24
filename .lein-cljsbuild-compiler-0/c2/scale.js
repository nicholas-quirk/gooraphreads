goog.provide('c2.scale');
goog.require('cljs.core');
goog.require('c2.maths');
goog.require('c2.maths');
void 0;c2.scale.IInvertable = {};
c2.scale.invert = (function invert(scale){
if((function (){var and__3941__auto____7244 = scale;
if(and__3941__auto____7244)
{return scale.c2$scale$IInvertable$invert$arity$1;
} else
{return and__3941__auto____7244;
}
})())
{return scale.c2$scale$IInvertable$invert$arity$1(scale);
} else
{return (function (){var or__3943__auto____7245 = (c2.scale.invert[goog.typeOf(scale)]);
if(or__3943__auto____7245)
{return or__3943__auto____7245;
} else
{var or__3943__auto____7246 = (c2.scale.invert["_"]);
if(or__3943__auto____7246)
{return or__3943__auto____7246;
} else
{throw cljs.core.missing_protocol.call(null,"IInvertable.invert",scale);
}
}
})().call(null,scale);
}
});
void 0;
/**
* @constructor
* @param {*} domain
* @param {*} range
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
c2.scale._linear = (function (domain,range,__meta,__extmap){
this.domain = domain;
this.range = range;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054859;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
c2.scale._linear.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2339__auto__){
var this__7252 = this;
var h__2213__auto____7253 = this__7252.__hash;
if(!((h__2213__auto____7253 == null)))
{return h__2213__auto____7253;
} else
{var h__2213__auto____7254 = cljs.core.hash_imap.call(null,this__2339__auto__);
this__7252.__hash = h__2213__auto____7254;
return h__2213__auto____7254;
}
});
c2.scale._linear.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2344__auto__,k__2345__auto__){
var this__7255 = this;
return this__2344__auto__.cljs$core$ILookup$_lookup$arity$3(this__2344__auto__,k__2345__auto__,null);
});
c2.scale._linear.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2346__auto__,k7248,else__2347__auto__){
var this__7256 = this;
if((k7248 === "\uFDD0'domain"))
{return this__7256.domain;
} else
{if((k7248 === "\uFDD0'range"))
{return this__7256.range;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7256.__extmap,k7248,else__2347__auto__);
} else
{return null;
}
}
}
});
c2.scale._linear.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2351__auto__,k__2352__auto__,G__7247){
var this__7257 = this;
var pred__7258__7261 = cljs.core.identical_QMARK_;
var expr__7259__7262 = k__2352__auto__;
if(pred__7258__7261.call(null,"\uFDD0'domain",expr__7259__7262))
{return (new c2.scale._linear(G__7247,this__7257.range,this__7257.__meta,this__7257.__extmap,null));
} else
{if(pred__7258__7261.call(null,"\uFDD0'range",expr__7259__7262))
{return (new c2.scale._linear(this__7257.domain,G__7247,this__7257.__meta,this__7257.__extmap,null));
} else
{return (new c2.scale._linear(this__7257.domain,this__7257.range,this__7257.__meta,cljs.core.assoc.call(null,this__7257.__extmap,k__2352__auto__,G__7247),null));
}
}
});
c2.scale._linear.prototype.call = (function (this_sym7263,x){
var this__7264 = this;
var this_sym7263__7265 = this;
var ___7266 = this_sym7263__7265;
var domain_length__7267 = (cljs.core.last.call(null,this__7264.domain) - cljs.core.first.call(null,this__7264.domain));
var range_length__7268 = (cljs.core.last.call(null,this__7264.range) - cljs.core.first.call(null,this__7264.range));
return (cljs.core.first.call(null,this__7264.range) + (range_length__7268 * ((x - cljs.core.first.call(null,this__7264.domain)) / domain_length__7267)));
});
c2.scale._linear.prototype.apply = (function (this_sym7250,args7251){
var this__7269 = this;
return this_sym7250.call.apply(this_sym7250,[this_sym7250].concat(args7251.slice()));
});
c2.scale._linear.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2349__auto__,entry__2350__auto__){
var this__7270 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2350__auto__))
{return this__2349__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2349__auto__,cljs.core._nth.call(null,entry__2350__auto__,0),cljs.core._nth.call(null,entry__2350__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2349__auto__,entry__2350__auto__);
}
});
c2.scale._linear.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2356__auto__){
var this__7271 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'domain",this__7271.domain),cljs.core.vector.call(null,"\uFDD0'range",this__7271.range)], true),this__7271.__extmap));
});
c2.scale._linear.prototype.c2$scale$IInvertable$ = true;
c2.scale._linear.prototype.c2$scale$IInvertable$invert$arity$1 = (function (this$){
var this__7272 = this;
return cljs.core.assoc.call(null,this$,"\uFDD0'domain",this__7272.range,"\uFDD0'range",this__7272.domain);
});
c2.scale._linear.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2358__auto__,opts__2359__auto__){
var this__7273 = this;
var pr_pair__2360__auto____7274 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2360__auto____7274,[cljs.core.str("#"),cljs.core.str("_linear"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'domain",this__7273.domain),cljs.core.vector.call(null,"\uFDD0'range",this__7273.range)], true),this__7273.__extmap));
});
c2.scale._linear.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2348__auto__){
var this__7275 = this;
return (2 + cljs.core.count.call(null,this__7275.__extmap));
});
c2.scale._linear.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2340__auto__,other__2341__auto__){
var this__7276 = this;
if(cljs.core.truth_((function (){var and__3941__auto____7277 = other__2341__auto__;
if(cljs.core.truth_(and__3941__auto____7277))
{var and__3941__auto____7278 = (this__2340__auto__.constructor === other__2341__auto__.constructor);
if(and__3941__auto____7278)
{return cljs.core.equiv_map.call(null,this__2340__auto__,other__2341__auto__);
} else
{return and__3941__auto____7278;
}
} else
{return and__3941__auto____7277;
}
})()))
{return true;
} else
{return false;
}
});
c2.scale._linear.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2343__auto__,G__7247){
var this__7279 = this;
return (new c2.scale._linear(this__7279.domain,this__7279.range,G__7247,this__7279.__extmap,this__7279.__hash));
});
c2.scale._linear.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2342__auto__){
var this__7280 = this;
return this__7280.__meta;
});
c2.scale._linear.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2353__auto__,k__2354__auto__){
var this__7281 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'domain","\uFDD0'range"]),k__2354__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2353__auto__),this__7281.__meta),k__2354__auto__);
} else
{return (new c2.scale._linear(this__7281.domain,this__7281.range,this__7281.__meta,this__7281.__hash,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7281.__extmap,k__2354__auto__)),null));
}
});
c2.scale._linear.cljs$lang$type = true;
c2.scale._linear.cljs$lang$ctorPrSeq = (function (this__2378__auto__){
return cljs.core.list.call(null,"c2.scale/_linear");
});
c2.scale.__GT__linear = (function __GT__linear(domain,range){
return (new c2.scale._linear(domain,range));
});
c2.scale.map__GT__linear = (function map__GT__linear(G__7249){
return (new c2.scale._linear((new cljs.core.Keyword("\uFDD0'domain")).call(null,G__7249),(new cljs.core.Keyword("\uFDD0'range")).call(null,G__7249),null,cljs.core.dissoc.call(null,G__7249,"\uFDD0'domain","\uFDD0'range")));
});
c2.scale._linear;
/**
* @param {...*} var_args
*/
c2.scale.linear = (function() { 
var linear__delegate = function (kwargs){
return c2.scale.map__GT__linear.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'domain","\uFDD0'range"],{"\uFDD0'domain":cljs.core.PersistentVector.fromArray([0,1], true),"\uFDD0'range":cljs.core.PersistentVector.fromArray([0,1], true)}),cljs.core.apply.call(null,cljs.core.hash_map,kwargs)));
};
var linear = function (var_args){
var kwargs = null;
if (goog.isDef(var_args)) {
  kwargs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return linear__delegate.call(this, kwargs);
};
linear.cljs$lang$maxFixedArity = 0;
linear.cljs$lang$applyTo = (function (arglist__7282){
var kwargs = cljs.core.seq(arglist__7282);;
return linear__delegate(kwargs);
});
linear.cljs$lang$arity$variadic = linear__delegate;
return linear;
})()
;
void 0;

/**
* @constructor
* @param {*} domain
* @param {*} range
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
c2.scale._power = (function (domain,range,__meta,__extmap){
this.domain = domain;
this.range = range;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054859;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
c2.scale._power.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2339__auto__){
var this__7288 = this;
var h__2213__auto____7289 = this__7288.__hash;
if(!((h__2213__auto____7289 == null)))
{return h__2213__auto____7289;
} else
{var h__2213__auto____7290 = cljs.core.hash_imap.call(null,this__2339__auto__);
this__7288.__hash = h__2213__auto____7290;
return h__2213__auto____7290;
}
});
c2.scale._power.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2344__auto__,k__2345__auto__){
var this__7291 = this;
return this__2344__auto__.cljs$core$ILookup$_lookup$arity$3(this__2344__auto__,k__2345__auto__,null);
});
c2.scale._power.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2346__auto__,k7284,else__2347__auto__){
var this__7292 = this;
if((k7284 === "\uFDD0'domain"))
{return this__7292.domain;
} else
{if((k7284 === "\uFDD0'range"))
{return this__7292.range;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7292.__extmap,k7284,else__2347__auto__);
} else
{return null;
}
}
}
});
c2.scale._power.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2351__auto__,k__2352__auto__,G__7283){
var this__7293 = this;
var pred__7294__7297 = cljs.core.identical_QMARK_;
var expr__7295__7298 = k__2352__auto__;
if(pred__7294__7297.call(null,"\uFDD0'domain",expr__7295__7298))
{return (new c2.scale._power(G__7283,this__7293.range,this__7293.__meta,this__7293.__extmap,null));
} else
{if(pred__7294__7297.call(null,"\uFDD0'range",expr__7295__7298))
{return (new c2.scale._power(this__7293.domain,G__7283,this__7293.__meta,this__7293.__extmap,null));
} else
{return (new c2.scale._power(this__7293.domain,this__7293.range,this__7293.__meta,cljs.core.assoc.call(null,this__7293.__extmap,k__2352__auto__,G__7283),null));
}
}
});
c2.scale._power.prototype.call = (function (this_sym7299,x){
var this__7300 = this;
var this_sym7299__7301 = this;
var ___7302 = this_sym7299__7301;
return cljs.core.comp.call(null,c2.scale.linear.call(null,"\uFDD0'domain",cljs.core.map.call(null,c2.maths.expt,this__7300.domain),"\uFDD0'range",this__7300.range),c2.maths.expt).call(null,x);
});
c2.scale._power.prototype.apply = (function (this_sym7286,args7287){
var this__7303 = this;
return this_sym7286.call.apply(this_sym7286,[this_sym7286].concat(args7287.slice()));
});
c2.scale._power.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2349__auto__,entry__2350__auto__){
var this__7304 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2350__auto__))
{return this__2349__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2349__auto__,cljs.core._nth.call(null,entry__2350__auto__,0),cljs.core._nth.call(null,entry__2350__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2349__auto__,entry__2350__auto__);
}
});
c2.scale._power.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2356__auto__){
var this__7305 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'domain",this__7305.domain),cljs.core.vector.call(null,"\uFDD0'range",this__7305.range)], true),this__7305.__extmap));
});
c2.scale._power.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2358__auto__,opts__2359__auto__){
var this__7306 = this;
var pr_pair__2360__auto____7307 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2360__auto____7307,[cljs.core.str("#"),cljs.core.str("_power"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'domain",this__7306.domain),cljs.core.vector.call(null,"\uFDD0'range",this__7306.range)], true),this__7306.__extmap));
});
c2.scale._power.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2348__auto__){
var this__7308 = this;
return (2 + cljs.core.count.call(null,this__7308.__extmap));
});
c2.scale._power.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2340__auto__,other__2341__auto__){
var this__7309 = this;
if(cljs.core.truth_((function (){var and__3941__auto____7310 = other__2341__auto__;
if(cljs.core.truth_(and__3941__auto____7310))
{var and__3941__auto____7311 = (this__2340__auto__.constructor === other__2341__auto__.constructor);
if(and__3941__auto____7311)
{return cljs.core.equiv_map.call(null,this__2340__auto__,other__2341__auto__);
} else
{return and__3941__auto____7311;
}
} else
{return and__3941__auto____7310;
}
})()))
{return true;
} else
{return false;
}
});
c2.scale._power.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2343__auto__,G__7283){
var this__7312 = this;
return (new c2.scale._power(this__7312.domain,this__7312.range,G__7283,this__7312.__extmap,this__7312.__hash));
});
c2.scale._power.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2342__auto__){
var this__7313 = this;
return this__7313.__meta;
});
c2.scale._power.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2353__auto__,k__2354__auto__){
var this__7314 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'domain","\uFDD0'range"]),k__2354__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2353__auto__),this__7314.__meta),k__2354__auto__);
} else
{return (new c2.scale._power(this__7314.domain,this__7314.range,this__7314.__meta,this__7314.__hash,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7314.__extmap,k__2354__auto__)),null));
}
});
c2.scale._power.cljs$lang$type = true;
c2.scale._power.cljs$lang$ctorPrSeq = (function (this__2378__auto__){
return cljs.core.list.call(null,"c2.scale/_power");
});
c2.scale.__GT__power = (function __GT__power(domain,range){
return (new c2.scale._power(domain,range));
});
c2.scale.map__GT__power = (function map__GT__power(G__7285){
return (new c2.scale._power((new cljs.core.Keyword("\uFDD0'domain")).call(null,G__7285),(new cljs.core.Keyword("\uFDD0'range")).call(null,G__7285),null,cljs.core.dissoc.call(null,G__7285,"\uFDD0'domain","\uFDD0'range")));
});
c2.scale._power;
/**
* @param {...*} var_args
*/
c2.scale.power = (function() { 
var power__delegate = function (kwargs){
return c2.scale.map__GT__power.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'domain","\uFDD0'range"],{"\uFDD0'domain":cljs.core.PersistentVector.fromArray([0,1], true),"\uFDD0'range":cljs.core.PersistentVector.fromArray([0,1], true)}),cljs.core.apply.call(null,cljs.core.hash_map,kwargs)));
};
var power = function (var_args){
var kwargs = null;
if (goog.isDef(var_args)) {
  kwargs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return power__delegate.call(this, kwargs);
};
power.cljs$lang$maxFixedArity = 0;
power.cljs$lang$applyTo = (function (arglist__7315){
var kwargs = cljs.core.seq(arglist__7315);;
return power__delegate(kwargs);
});
power.cljs$lang$arity$variadic = power__delegate;
return power;
})()
;

/**
* @constructor
* @param {*} domain
* @param {*} range
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
c2.scale._log = (function (domain,range,__meta,__extmap){
this.domain = domain;
this.range = range;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 619054859;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
c2.scale._log.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__2339__auto__){
var this__7321 = this;
var h__2213__auto____7322 = this__7321.__hash;
if(!((h__2213__auto____7322 == null)))
{return h__2213__auto____7322;
} else
{var h__2213__auto____7323 = cljs.core.hash_imap.call(null,this__2339__auto__);
this__7321.__hash = h__2213__auto____7323;
return h__2213__auto____7323;
}
});
c2.scale._log.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__2344__auto__,k__2345__auto__){
var this__7324 = this;
return this__2344__auto__.cljs$core$ILookup$_lookup$arity$3(this__2344__auto__,k__2345__auto__,null);
});
c2.scale._log.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__2346__auto__,k7317,else__2347__auto__){
var this__7325 = this;
if((k7317 === "\uFDD0'domain"))
{return this__7325.domain;
} else
{if((k7317 === "\uFDD0'range"))
{return this__7325.range;
} else
{if("\uFDD0'else")
{return cljs.core._lookup.call(null,this__7325.__extmap,k7317,else__2347__auto__);
} else
{return null;
}
}
}
});
c2.scale._log.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__2351__auto__,k__2352__auto__,G__7316){
var this__7326 = this;
var pred__7327__7330 = cljs.core.identical_QMARK_;
var expr__7328__7331 = k__2352__auto__;
if(pred__7327__7330.call(null,"\uFDD0'domain",expr__7328__7331))
{return (new c2.scale._log(G__7316,this__7326.range,this__7326.__meta,this__7326.__extmap,null));
} else
{if(pred__7327__7330.call(null,"\uFDD0'range",expr__7328__7331))
{return (new c2.scale._log(this__7326.domain,G__7316,this__7326.__meta,this__7326.__extmap,null));
} else
{return (new c2.scale._log(this__7326.domain,this__7326.range,this__7326.__meta,cljs.core.assoc.call(null,this__7326.__extmap,k__2352__auto__,G__7316),null));
}
}
});
c2.scale._log.prototype.call = (function (this_sym7332,x){
var this__7333 = this;
var this_sym7332__7334 = this;
var ___7335 = this_sym7332__7334;
return cljs.core.comp.call(null,c2.scale.linear.call(null,"\uFDD0'domain",cljs.core.map.call(null,c2.maths.log,this__7333.domain),"\uFDD0'range",this__7333.range),c2.maths.log).call(null,x);
});
c2.scale._log.prototype.apply = (function (this_sym7319,args7320){
var this__7336 = this;
return this_sym7319.call.apply(this_sym7319,[this_sym7319].concat(args7320.slice()));
});
c2.scale._log.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__2349__auto__,entry__2350__auto__){
var this__7337 = this;
if(cljs.core.vector_QMARK_.call(null,entry__2350__auto__))
{return this__2349__auto__.cljs$core$IAssociative$_assoc$arity$3(this__2349__auto__,cljs.core._nth.call(null,entry__2350__auto__,0),cljs.core._nth.call(null,entry__2350__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__2349__auto__,entry__2350__auto__);
}
});
c2.scale._log.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__2356__auto__){
var this__7338 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'domain",this__7338.domain),cljs.core.vector.call(null,"\uFDD0'range",this__7338.range)], true),this__7338.__extmap));
});
c2.scale._log.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (this__2358__auto__,opts__2359__auto__){
var this__7339 = this;
var pr_pair__2360__auto____7340 = (function (keyval__2361__auto__){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts__2359__auto__,keyval__2361__auto__);
});
return cljs.core.pr_sequential.call(null,pr_pair__2360__auto____7340,[cljs.core.str("#"),cljs.core.str("_log"),cljs.core.str("{")].join(''),", ","}",opts__2359__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([cljs.core.vector.call(null,"\uFDD0'domain",this__7339.domain),cljs.core.vector.call(null,"\uFDD0'range",this__7339.range)], true),this__7339.__extmap));
});
c2.scale._log.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__2348__auto__){
var this__7341 = this;
return (2 + cljs.core.count.call(null,this__7341.__extmap));
});
c2.scale._log.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__2340__auto__,other__2341__auto__){
var this__7342 = this;
if(cljs.core.truth_((function (){var and__3941__auto____7343 = other__2341__auto__;
if(cljs.core.truth_(and__3941__auto____7343))
{var and__3941__auto____7344 = (this__2340__auto__.constructor === other__2341__auto__.constructor);
if(and__3941__auto____7344)
{return cljs.core.equiv_map.call(null,this__2340__auto__,other__2341__auto__);
} else
{return and__3941__auto____7344;
}
} else
{return and__3941__auto____7343;
}
})()))
{return true;
} else
{return false;
}
});
c2.scale._log.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__2343__auto__,G__7316){
var this__7345 = this;
return (new c2.scale._log(this__7345.domain,this__7345.range,G__7316,this__7345.__extmap,this__7345.__hash));
});
c2.scale._log.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__2342__auto__){
var this__7346 = this;
return this__7346.__meta;
});
c2.scale._log.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__2353__auto__,k__2354__auto__){
var this__7347 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.set(["\uFDD0'domain","\uFDD0'range"]),k__2354__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,this__2353__auto__),this__7347.__meta),k__2354__auto__);
} else
{return (new c2.scale._log(this__7347.domain,this__7347.range,this__7347.__meta,this__7347.__hash,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,this__7347.__extmap,k__2354__auto__)),null));
}
});
c2.scale._log.cljs$lang$type = true;
c2.scale._log.cljs$lang$ctorPrSeq = (function (this__2378__auto__){
return cljs.core.list.call(null,"c2.scale/_log");
});
c2.scale.__GT__log = (function __GT__log(domain,range){
return (new c2.scale._log(domain,range));
});
c2.scale.map__GT__log = (function map__GT__log(G__7318){
return (new c2.scale._log((new cljs.core.Keyword("\uFDD0'domain")).call(null,G__7318),(new cljs.core.Keyword("\uFDD0'range")).call(null,G__7318),null,cljs.core.dissoc.call(null,G__7318,"\uFDD0'domain","\uFDD0'range")));
});
c2.scale._log;
/**
* @param {...*} var_args
*/
c2.scale.log = (function() { 
var log__delegate = function (kwargs){
return c2.scale.map__GT__log.call(null,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'domain","\uFDD0'range"],{"\uFDD0'domain":cljs.core.PersistentVector.fromArray([1,10], true),"\uFDD0'range":cljs.core.PersistentVector.fromArray([0,1], true)}),cljs.core.apply.call(null,cljs.core.hash_map,kwargs)));
};
var log = function (var_args){
var kwargs = null;
if (goog.isDef(var_args)) {
  kwargs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, kwargs);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7348){
var kwargs = cljs.core.seq(arglist__7348);;
return log__delegate(kwargs);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;

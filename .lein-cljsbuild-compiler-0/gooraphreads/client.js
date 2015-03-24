goog.provide('gooraphreads.client');
goog.require('cljs.core');
goog.require('c2.core');
goog.require('c2.scale');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.net.XhrIo');
gooraphreads.client.main = (function main(){
var width__7232 = 500;
var bar_height__7233 = 20;
var data__7234 = cljs.core.ObjMap.fromObject(["A","B","C","D"],{"A":1,"B":2,"C":4,"D":3});
var s__7235 = c2.scale.linear.call(null,"\uFDD0'domain",cljs.core.PersistentVector.fromArray([0,cljs.core.apply.call(null,cljs.core.max,cljs.core.vals.call(null,data__7234))], true),"\uFDD0'range",cljs.core.PersistentVector.fromArray([0,width__7232], true));
return cljs.core.PersistentVector.fromArray(["\uFDD0'div#bars",c2.core.unify.call(null,data__7234,(function (p__7236){
var vec__7237__7238 = p__7236;
var label__7239 = cljs.core.nth.call(null,vec__7237__7238,0,null);
var val__7240 = cljs.core.nth.call(null,vec__7237__7238,1,null);
return cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":cljs.core.ObjMap.fromObject(["\uFDD0'height","\uFDD0'width","\uFDD0'background-color"],{"\uFDD0'height":bar_height__7233,"\uFDD0'width":s__7235.call(null,val__7240),"\uFDD0'background-color":"gray"})}),cljs.core.PersistentVector.fromArray(["\uFDD0'span",cljs.core.ObjMap.fromObject(["\uFDD0'style"],{"\uFDD0'style":cljs.core.ObjMap.fromObject(["\uFDD0'color"],{"\uFDD0'color":"white"})}),label__7239], true)], true);
}))], true);
});
goog.exportSymbol('gooraphreads.client.main', gooraphreads.client.main);

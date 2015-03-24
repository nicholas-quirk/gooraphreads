goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__11837 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"], true);
var table_section_wrapper__11838 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"], true);
var cell_wrapper__11839 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"], true);
domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], true),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""], true),"tfoot":table_section_wrapper__11838,"caption":table_section_wrapper__11838,"optgroup":opt_wrapper__11837,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"], true),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"], true),"td":cell_wrapper__11839,"thead":table_section_wrapper__11838,"th":cell_wrapper__11839,"option":opt_wrapper__11837,"tbody":table_section_wrapper__11838,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"], true),"colgroup":table_section_wrapper__11838});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___11852 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__11856 = (((function (){var and__3941__auto____11853 = cljs.core._EQ_.call(null,domina.tag_name,"table");
if(and__3941__auto____11853)
{return no_tbody_QMARK___11852;
} else
{return and__3941__auto____11853;
}
})())?(function (){var and__3941__auto____11854 = div.firstChild;
if(cljs.core.truth_(and__3941__auto____11854))
{return div.firstChild.childNodes;
} else
{return and__3941__auto____11854;
}
})():(((function (){var and__3941__auto____11855 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");
if(and__3941__auto____11855)
{return no_tbody_QMARK___11852;
} else
{return and__3941__auto____11855;
}
})())?divchildNodes:cljs.core.PersistentVector.EMPTY));
var G__11857__11858 = cljs.core.seq.call(null,tbody__11856);
if(G__11857__11858)
{var child__11859 = cljs.core.first.call(null,G__11857__11858);
var G__11857__11860 = G__11857__11858;
while(true){
if((function (){var and__3941__auto____11861 = cljs.core._EQ_.call(null,child__11859.nodeName,"tbody");
if(and__3941__auto____11861)
{return cljs.core._EQ_.call(null,child__11859.childNodes.length,0);
} else
{return and__3941__auto____11861;
}
})())
{child__11859.parentNode.removeChild(child__11859);
} else
{}
var temp__4092__auto____11862 = cljs.core.next.call(null,G__11857__11860);
if(temp__4092__auto____11862)
{var G__11857__11863 = temp__4092__auto____11862;
{
var G__11864 = cljs.core.first.call(null,G__11857__11863);
var G__11865 = G__11857__11863;
child__11859 = G__11864;
G__11857__11860 = G__11865;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__11879 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__11880 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__11879)))].join('').toLowerCase();
var vec__11878__11881 = cljs.core._lookup.call(null,domina.wrap_map,tag_name__11880,(new cljs.core.Keyword("\uFDD0'default")).call(null,domina.wrap_map));
var depth__11882 = cljs.core.nth.call(null,vec__11878__11881,0,null);
var start_wrap__11883 = cljs.core.nth.call(null,vec__11878__11881,1,null);
var end_wrap__11884 = cljs.core.nth.call(null,vec__11878__11881,2,null);
var div__11888 = (function (){var wrapper__11886 = (function (){var div__11885 = document.createElement("div");
div__11885.innerHTML = [cljs.core.str(start_wrap__11883),cljs.core.str(html__11879),cljs.core.str(end_wrap__11884)].join('');
return div__11885;
})();
var level__11887 = depth__11882;
while(true){
if((level__11887 > 0))
{{
var G__11890 = wrapper__11886.lastChild;
var G__11891 = (level__11887 - 1);
wrapper__11886 = G__11890;
level__11887 = G__11891;
continue;
}
} else
{return wrapper__11886;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__11888,html__11879);
} else
{}
if(cljs.core.truth_((function (){var and__3941__auto____11889 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3941__auto____11889)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__11879);
} else
{return and__3941__auto____11889;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__11888,html__11879);
} else
{}
return div__11888.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
void 0;domina.DomContent = {};
domina.nodes = (function nodes(content){
if((function (){var and__3941__auto____11895 = content;
if(and__3941__auto____11895)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3941__auto____11895;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{return (function (){var or__3943__auto____11896 = (domina.nodes[goog.typeOf(content)]);
if(or__3943__auto____11896)
{return or__3943__auto____11896;
} else
{var or__3943__auto____11897 = (domina.nodes["_"]);
if(or__3943__auto____11897)
{return or__3943__auto____11897;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if((function (){var and__3941__auto____11901 = nodeseq;
if(and__3941__auto____11901)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3941__auto____11901;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{return (function (){var or__3943__auto____11902 = (domina.single_node[goog.typeOf(nodeseq)]);
if(or__3943__auto____11902)
{return or__3943__auto____11902;
} else
{var or__3943__auto____11903 = (domina.single_node["_"]);
if(or__3943__auto____11903)
{return or__3943__auto____11903;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
void 0;domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3941__auto____11905 = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3941__auto____11905))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3941__auto____11905;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log_debug__delegate.call(this, mesg);
};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__11906){
var mesg = cljs.core.seq(arglist__11906);;
return log_debug__delegate(mesg);
});
log_debug.cljs$lang$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;
if (goog.isDef(var_args)) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, mesg);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__11907){
var mesg = cljs.core.seq(arglist__11907);;
return log__delegate(mesg);
});
log.cljs$lang$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
void 0;
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if((void 0 === domina.t11915))
{
/**
* @constructor
*/
domina.t11915 = (function (class_name,by_class,meta11916){
this.class_name = class_name;
this.by_class = by_class;
this.meta11916 = meta11916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.t11915.cljs$lang$type = true;
domina.t11915.cljs$lang$ctorPrSeq = (function (this__2330__auto__){
return cljs.core.list.call(null,"domina/t11915");
});
domina.t11915.prototype.domina$DomContent$ = true;
domina.t11915.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var this__11918 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,this__11918.class_name)));
});
domina.t11915.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var this__11919 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass(cljs.core.name.call(null,this__11919.class_name)));
});
domina.t11915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11917){
var this__11920 = this;
return this__11920.meta11916;
});
domina.t11915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11917,meta11916){
var this__11921 = this;
return (new domina.t11915(this__11921.class_name,this__11921.by_class,meta11916));
});
domina.t11915;
} else
{}
return (new domina.t11915(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__11922_SHARP_){
return p1__11922_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
void 0;
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__11923_SHARP_,p2__11924_SHARP_){
return goog.dom.insertChildAt(p1__11923_SHARP_,p2__11924_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__11926_SHARP_,p2__11925_SHARP_){
return goog.dom.insertSiblingBefore(p2__11925_SHARP_,p1__11926_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__11928_SHARP_,p2__11927_SHARP_){
return goog.dom.insertSiblingAfter(p2__11927_SHARP_,p1__11928_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__11930_SHARP_,p2__11929_SHARP_){
return goog.dom.replaceNode(p2__11929_SHARP_,p1__11930_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__11932 = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__11932)))
{return null;
} else
{return s__11932;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__11939__11940 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11939__11940)
{var n__11941 = cljs.core.first.call(null,G__11939__11940);
var G__11939__11942 = G__11939__11940;
while(true){
goog.style.setStyle(n__11941,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__4092__auto____11943 = cljs.core.next.call(null,G__11939__11942);
if(temp__4092__auto____11943)
{var G__11939__11944 = temp__4092__auto____11943;
{
var G__11945 = cljs.core.first.call(null,G__11939__11944);
var G__11946 = G__11939__11944;
n__11941 = G__11945;
G__11939__11942 = G__11946;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__11947){
var content = cljs.core.first(arglist__11947);
var name = cljs.core.first(cljs.core.next(arglist__11947));
var value = cljs.core.rest(cljs.core.next(arglist__11947));
return set_style_BANG___delegate(content, name, value);
});
set_style_BANG_.cljs$lang$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__11954__11955 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11954__11955)
{var n__11956 = cljs.core.first.call(null,G__11954__11955);
var G__11954__11957 = G__11954__11955;
while(true){
n__11956.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__4092__auto____11958 = cljs.core.next.call(null,G__11954__11957);
if(temp__4092__auto____11958)
{var G__11954__11959 = temp__4092__auto____11958;
{
var G__11960 = cljs.core.first.call(null,G__11954__11959);
var G__11961 = G__11954__11959;
n__11956 = G__11960;
G__11954__11957 = G__11961;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__11962){
var content = cljs.core.first(arglist__11962);
var name = cljs.core.first(cljs.core.next(arglist__11962));
var value = cljs.core.rest(cljs.core.next(arglist__11962));
return set_attr_BANG___delegate(content, name, value);
});
set_attr_BANG_.cljs$lang$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__11969__11970 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__11969__11970)
{var n__11971 = cljs.core.first.call(null,G__11969__11970);
var G__11969__11972 = G__11969__11970;
while(true){
n__11971.removeAttribute(cljs.core.name.call(null,name));
var temp__4092__auto____11973 = cljs.core.next.call(null,G__11969__11972);
if(temp__4092__auto____11973)
{var G__11969__11974 = temp__4092__auto____11973;
{
var G__11975 = cljs.core.first.call(null,G__11969__11974);
var G__11976 = G__11969__11974;
n__11971 = G__11975;
G__11969__11972 = G__11976;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__11982__11983 = pair.split(/\s*:\s*/);
var k__11984 = cljs.core.nth.call(null,vec__11982__11983,0,null);
var v__11985 = cljs.core.nth.call(null,vec__11982__11983,1,null);
if(cljs.core.truth_((function (){var and__3941__auto____11986 = k__11984;
if(cljs.core.truth_(and__3941__auto____11986))
{return v__11985;
} else
{return and__3941__auto____11986;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__11984.toLowerCase()),v__11985);
} else
{return acc;
}
}),cljs.core.ObjMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__11989 = domina.attr.call(null,content,"style");
if(cljs.core.string_QMARK_.call(null,style__11989))
{return domina.parse_style_attributes.call(null,style__11989);
} else
{if(cljs.core.truth_(style__11989.cssText))
{return domina.parse_style_attributes.call(null,style__11989.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__11995 = domina.single_node.call(null,content);
var attrs__11996 = node__11995.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__11987_SHARP_){
var attr__11997 = attrs__11996.item(p1__11987_SHARP_);
var value__11998 = attr__11997.nodeValue;
if((function (){var and__3941__auto____11999 = cljs.core.not_EQ_.call(null,null,value__11998);
if(and__3941__auto____11999)
{return cljs.core.not_EQ_.call(null,"",value__11998);
} else
{return and__3941__auto____11999;
}
})())
{return cljs.core.PersistentArrayMap.fromArrays([cljs.core.keyword.call(null,attr__11997.nodeName.toLowerCase())],[attr__11997.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__11996.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__12019__12020 = cljs.core.seq.call(null,styles);
if(G__12019__12020)
{var G__12022__12024 = cljs.core.first.call(null,G__12019__12020);
var vec__12023__12025 = G__12022__12024;
var name__12026 = cljs.core.nth.call(null,vec__12023__12025,0,null);
var value__12027 = cljs.core.nth.call(null,vec__12023__12025,1,null);
var G__12019__12028 = G__12019__12020;
var G__12022__12029 = G__12022__12024;
var G__12019__12030 = G__12019__12028;
while(true){
var vec__12031__12032 = G__12022__12029;
var name__12033 = cljs.core.nth.call(null,vec__12031__12032,0,null);
var value__12034 = cljs.core.nth.call(null,vec__12031__12032,1,null);
var G__12019__12035 = G__12019__12030;
domina.set_style_BANG_.call(null,content,name__12033,value__12034);
var temp__4092__auto____12036 = cljs.core.next.call(null,G__12019__12035);
if(temp__4092__auto____12036)
{var G__12019__12037 = temp__4092__auto____12036;
{
var G__12038 = cljs.core.first.call(null,G__12019__12037);
var G__12039 = G__12019__12037;
G__12022__12029 = G__12038;
G__12019__12030 = G__12039;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__12059__12060 = cljs.core.seq.call(null,attrs);
if(G__12059__12060)
{var G__12062__12064 = cljs.core.first.call(null,G__12059__12060);
var vec__12063__12065 = G__12062__12064;
var name__12066 = cljs.core.nth.call(null,vec__12063__12065,0,null);
var value__12067 = cljs.core.nth.call(null,vec__12063__12065,1,null);
var G__12059__12068 = G__12059__12060;
var G__12062__12069 = G__12062__12064;
var G__12059__12070 = G__12059__12068;
while(true){
var vec__12071__12072 = G__12062__12069;
var name__12073 = cljs.core.nth.call(null,vec__12071__12072,0,null);
var value__12074 = cljs.core.nth.call(null,vec__12071__12072,1,null);
var G__12059__12075 = G__12059__12070;
domina.set_attr_BANG_.call(null,content,name__12073,value__12074);
var temp__4092__auto____12076 = cljs.core.next.call(null,G__12059__12075);
if(temp__4092__auto____12076)
{var G__12059__12077 = temp__4092__auto____12076;
{
var G__12078 = cljs.core.first.call(null,G__12059__12077);
var G__12079 = G__12059__12077;
G__12062__12069 = G__12078;
G__12059__12070 = G__12079;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__12086__12087 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12086__12087)
{var node__12088 = cljs.core.first.call(null,G__12086__12087);
var G__12086__12089 = G__12086__12087;
while(true){
goog.dom.classes.add(node__12088,class$);
var temp__4092__auto____12090 = cljs.core.next.call(null,G__12086__12089);
if(temp__4092__auto____12090)
{var G__12086__12091 = temp__4092__auto____12090;
{
var G__12092 = cljs.core.first.call(null,G__12086__12091);
var G__12093 = G__12086__12091;
node__12088 = G__12092;
G__12086__12089 = G__12093;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__12100__12101 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12100__12101)
{var node__12102 = cljs.core.first.call(null,G__12100__12101);
var G__12100__12103 = G__12100__12101;
while(true){
goog.dom.classes.remove(node__12102,class$);
var temp__4092__auto____12104 = cljs.core.next.call(null,G__12100__12103);
if(temp__4092__auto____12104)
{var G__12100__12105 = temp__4092__auto____12104;
{
var G__12106 = cljs.core.first.call(null,G__12100__12105);
var G__12107 = G__12100__12105;
node__12102 = G__12106;
G__12100__12103 = G__12107;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes__12115 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var G__12116__12117 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12116__12117)
{var node__12118 = cljs.core.first.call(null,G__12116__12117);
var G__12116__12119 = G__12116__12117;
while(true){
goog.dom.classes.set(node__12118,classes__12115);
var temp__4092__auto____12120 = cljs.core.next.call(null,G__12116__12119);
if(temp__4092__auto____12120)
{var G__12116__12121 = temp__4092__auto____12120;
{
var G__12122 = cljs.core.first.call(null,G__12116__12121);
var G__12123 = G__12116__12121;
node__12118 = G__12122;
G__12116__12119 = G__12123;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__12130__12131 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12130__12131)
{var node__12132 = cljs.core.first.call(null,G__12130__12131);
var G__12130__12133 = G__12130__12131;
while(true){
goog.dom.setTextContent(node__12132,value);
var temp__4092__auto____12134 = cljs.core.next.call(null,G__12130__12133);
if(temp__4092__auto____12134)
{var G__12130__12135 = temp__4092__auto____12134;
{
var G__12136 = cljs.core.first.call(null,G__12130__12135);
var G__12137 = G__12130__12135;
node__12132 = G__12136;
G__12130__12133 = G__12137;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__12144__12145 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12144__12145)
{var node__12146 = cljs.core.first.call(null,G__12144__12145);
var G__12144__12147 = G__12144__12145;
while(true){
goog.dom.forms.setValue(node__12146,value);
var temp__4092__auto____12148 = cljs.core.next.call(null,G__12144__12147);
if(temp__4092__auto____12148)
{var G__12144__12149 = temp__4092__auto____12148;
{
var G__12150 = cljs.core.first.call(null,G__12144__12149);
var G__12151 = G__12144__12149;
node__12146 = G__12150;
G__12144__12147 = G__12151;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___12168 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___12169 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__12170 = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK___12171 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__12170);
if(cljs.core.truth_((function (){var and__3941__auto____12172 = allows_inner_html_QMARK___12168;
if(and__3941__auto____12172)
{var and__3941__auto____12174 = (function (){var or__3943__auto____12173 = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3943__auto____12173))
{return or__3943__auto____12173;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___12169);
}
})();
if(cljs.core.truth_(and__3941__auto____12174))
{return !(special_tag_QMARK___12171);
} else
{return and__3941__auto____12174;
}
} else
{return and__3941__auto____12172;
}
})()))
{var value__12175 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var G__12178__12179 = cljs.core.seq.call(null,domina.nodes.call(null,content));
if(G__12178__12179)
{var node__12180 = cljs.core.first.call(null,G__12178__12179);
var G__12178__12181 = G__12178__12179;
while(true){
goog.events.removeAll(node__12180);
node__12180.innerHTML = value__12175;
var temp__4092__auto____12182 = cljs.core.next.call(null,G__12178__12181);
if(temp__4092__auto____12182)
{var G__12178__12183 = temp__4092__auto____12182;
{
var G__12184 = cljs.core.first.call(null,G__12178__12183);
var G__12185 = G__12178__12183;
node__12180 = G__12184;
G__12178__12181 = G__12185;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e12176){if(cljs.core.instance_QMARK_.call(null,domina.Exception,e12176))
{var e__12177 = e12176;
domina.replace_children_BANG_.call(null,content,value__12175);
} else
{if("\uFDD0'else")
{throw e12176;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(cljs.core.string_QMARK_.call(null,inner_content))
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m__12191 = domina.single_node.call(null,node).__domina_data;
var value__12192 = (cljs.core.truth_(m__12191)?cljs.core._lookup.call(null,m__12191,key,null):null);
if(cljs.core.truth_((function (){var and__3941__auto____12193 = bubble;
if(cljs.core.truth_(and__3941__auto____12193))
{return (value__12192 == null);
} else
{return and__3941__auto____12193;
}
})()))
{var temp__4092__auto____12194 = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4092__auto____12194))
{var parent__12195 = temp__4092__auto____12194;
return get_data.call(null,parent__12195,key,true);
} else
{return null;
}
} else
{return value__12192;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
get_data.cljs$lang$arity$2 = get_data__2;
get_data.cljs$lang$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m__12201 = (function (){var or__3943__auto____12200 = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3943__auto____12200))
{return or__3943__auto____12200;
} else
{return cljs.core.ObjMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m__12201,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__12213 = domina.nodes.call(null,parent_content);
var children__12214 = domina.nodes.call(null,child_content);
var first_child__12222 = (function (){var frag__12215 = document.createDocumentFragment();
var G__12216__12217 = cljs.core.seq.call(null,children__12214);
if(G__12216__12217)
{var child__12218 = cljs.core.first.call(null,G__12216__12217);
var G__12216__12219 = G__12216__12217;
while(true){
frag__12215.appendChild(child__12218);
var temp__4092__auto____12220 = cljs.core.next.call(null,G__12216__12219);
if(temp__4092__auto____12220)
{var G__12216__12221 = temp__4092__auto____12220;
{
var G__12224 = cljs.core.first.call(null,G__12216__12221);
var G__12225 = G__12216__12221;
child__12218 = G__12224;
G__12216__12219 = G__12225;
continue;
}
} else
{}
break;
}
} else
{}
return frag__12215;
})();
var other_children__12223 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__12213) - 1),(function (){
return first_child__12222.cloneNode(true);
})));
if(cljs.core.seq.call(null,parents__12213))
{f.call(null,cljs.core.first.call(null,parents__12213),first_child__12222);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__12196_SHARP_,p2__12197_SHARP_){
return f.call(null,p1__12196_SHARP_,p2__12197_SHARP_);
}),cljs.core.rest.call(null,parents__12213),other_children__12223));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_item.cljs$lang$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$lang$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_array_ref.cljs$lang$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$lang$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3941__auto____12227 = obj;
if(cljs.core.truth_(and__3941__auto____12227))
{return obj.length;
} else
{return and__3941__auto____12227;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__12231__12232 = list_thing;
if(G__12231__12232)
{if((function (){var or__3943__auto____12233 = (G__12231__12232.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____12233)
{return or__3943__auto____12233;
} else
{return G__12231__12232.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12231__12232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12231__12232);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12231__12232);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([list_thing], true));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__12234__12235 = content;
if(G__12234__12235)
{if((function (){var or__3943__auto____12236 = (G__12234__12235.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____12236)
{return or__3943__auto____12236;
} else
{return G__12234__12235.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12234__12235.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12234__12235);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12234__12235);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if("\uFDD0'default")
{return cljs.core.seq.call(null,cljs.core.PersistentVector.fromArray([content], true));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if((content == null))
{return null;
} else
{if((function (){var G__12237__12238 = content;
if(G__12237__12238)
{if((function (){var or__3943__auto____12239 = (G__12237__12238.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto____12239)
{return or__3943__auto____12239;
} else
{return G__12237__12238.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__12237__12238.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12237__12238);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__12237__12238);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if("\uFDD0'default")
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
if((nodelist.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
if((coll.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
return coll.length;
});
} else
{}

goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.whitespace_QMARK_ = (function zprint$zutil$whitespace_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comma","comma",1699024745))));
});
zprint.zutil.skip_whitespace = (function zprint$zutil$skip_whitespace(var_args){
var G__46100 = arguments.length;
switch (G__46100) {
case 1:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.right,zloc);
});

zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(f,zprint.zutil.whitespace_QMARK_,zloc) : zprint.zutil.skip.call(null,f,zprint.zutil.whitespace_QMARK_,zloc));
});

zprint.zutil.skip_whitespace.cljs$lang$maxFixedArity = 2;

zprint.zutil.whitespace_not_newline_QMARK_ = (function zprint$zutil$whitespace_not_newline_QMARK_(zloc){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comma","comma",1699024745))));
});
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.leftmost_QMARK_ = rewrite_clj.zip.move.leftmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__46101 = (zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.find_root_and_path.call(null,zloc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46101,(0),null);
var zpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46101,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus(zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return (rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.seq_QMARK_.call(null,zloc));
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc));
});
/**
 * Is this a namespaced map?
 */
zprint.zutil.znamespacedmap_QMARK_ = (function zprint$zutil$znamespacedmap_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"namespaced-map","namespaced-map",1235665380));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return (zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc));
});
/**
 * Find the zloc inside of this zloc.
 */
zprint.zutil.zstart = (function zprint$zutil$zstart(zloc){
return (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5733__auto__ = zprint.zutil.zfirst(zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var first_loc = temp__5733__auto__;
var temp__5733__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5733__auto____$1)){
var nloc = temp__5733__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond_no_comment = (function zprint$zutil$zsecond_no_comment(zloc){
var temp__5733__auto__ = zprint.zutil.zfirst_no_comment(zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var first_loc = temp__5733__auto__;
var temp__5733__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5733__auto____$1)){
var nloc = temp__5733__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__46104 = zprint.zutil.zfirst(zloc);
var G__46104__$1 = (((G__46104 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__46104) : zprint.zutil.right_STAR_.call(null,G__46104)));
var G__46104__$2 = (((G__46104__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46104__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46104__$1)));
var G__46104__$3 = (((G__46104__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__46104__$2) : zprint.zutil.right_STAR_.call(null,G__46104__$2)));
if((G__46104__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46104__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46104__$3));
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird_no_comment = (function zprint$zutil$zthird_no_comment(zloc){
var G__46105 = zprint.zutil.zfirst_no_comment(zloc);
var G__46105__$1 = (((G__46105 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__46105) : zprint.zutil.right_STAR_.call(null,G__46105)));
var G__46105__$2 = (((G__46105__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__46105__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__46105__$1)));
var G__46105__$3 = (((G__46105__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__46105__$2) : zprint.zutil.right_STAR_.call(null,G__46105__$2)));
if((G__46105__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__46105__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,G__46105__$3));
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__46106 = zprint.zutil.zfirst(zloc);
var G__46106__$1 = (((G__46106 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__46106) : zprint.zutil.right_STAR_.call(null,G__46106)));
var G__46106__$2 = (((G__46106__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46106__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46106__$1)));
var G__46106__$3 = (((G__46106__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__46106__$2) : zprint.zutil.right_STAR_.call(null,G__46106__$2)));
var G__46106__$4 = (((G__46106__$3 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46106__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46106__$3)));
var G__46106__$5 = (((G__46106__$4 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__46106__$4) : zprint.zutil.right_STAR_.call(null,G__46106__$4)));
if((G__46106__$5 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46106__$5) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__46106__$5));
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc. Returns nil
 *   if nothing left.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc considering 
 *   newlines to not be whitespace. Returns nil if nothing left. Which is
 *   why this is nextnws and not rightnws, since it is exposed in zfns.
 */
zprint.zutil.znextnws_w_nl = (function zprint$zutil$znextnws_w_nl(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_not_newline_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__46306 = zprint.zutil.zrightnws(nloc);
var G__46307 = nloc;
nloc = G__46306;
ploc = G__46307;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5733__auto__ = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var nloc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__46308 = zprint.zutil.zleftnws(nloc);
var G__46309 = nloc;
nloc = G__46308;
ploc = G__46309;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5733__auto__ = (zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.prev_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5733__auto__)){
var ploc = temp__5733__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc) : zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc));
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc)));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))))){
return nloc;
} else {
var G__46310 = zprint.zutil.zrightnws(nloc);
var G__46311 = (i - (1));
nloc = G__46310;
i = G__46311;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1((zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc)));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_((zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zthing_QMARK_.call(null,nloc)))){
return i;
} else {
var G__46312 = zprint.zutil.zrightnws(nloc);
var G__46313 = (i + (1));
nloc = G__46312;
i = G__46313;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc, including newlines.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__46314 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__46315 = (function (){var temp__5733__auto__ = (((!(((zprint.zutil.whitespace_QMARK_(nloc)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323)))))))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__46314;
out = G__46315;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc, including newlines and commas.
 */
zprint.zutil.zmap_w_nl_comma = (function zprint$zutil$zmap_w_nl_comma(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__46317 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__46318 = (function (){var temp__5733__auto__ = (((!(((zprint.zutil.whitespace_QMARK_(nloc)) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323))))) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"comma","comma",1699024745)))))))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__46317;
out = G__46318;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__46337 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__46338 = (function (){var temp__5733__auto__ = (((!(zprint.zutil.whitespace_QMARK_(nloc))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5733__auto__)){
var result = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__46337;
out = G__46338;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__46339 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__46340 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)));
nloc = G__46339;
out = G__46340;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__46344 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__46345 = ((zprint.zutil.whitespace_QMARK_(nloc))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))));
nloc = G__46344;
out = G__46345;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap(cljs.core.identity,zloc);
});
/**
 * Return a seq of all of the non-whitespace children of zloc, including
 *   newlines.
 */
zprint.zutil.zseqnws_w_nl = (function zprint$zutil$zseqnws_w_nl(zloc){
return zprint.zutil.zmap_w_nl(cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_((zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.rightmost_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.rightmost_QMARK_.call(null,nloc)))){
return nloc;
} else {
var G__46347 = (function (){var G__46107 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
return (zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zremove.cljs$core$IFn$_invoke$arity$1(G__46107) : zprint.zutil.zremove.call(null,G__46107));
})();
nloc = G__46347;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var index = (0);
while(true){
if((index >= n)){
var G__46108 = zprint.zutil.zremove_right((zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.zreplace.cljs$core$IFn$_invoke$arity$2(nloc,end_struct) : zprint.zutil.zreplace.call(null,nloc,end_struct)));
return (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(G__46108) : zprint.zutil.up_STAR_.call(null,G__46108));
} else {
var xloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__46352 = xloc;
var G__46353 = ((zprint.zutil.whitespace_QMARK_(xloc))?index:(index + (1)));
nloc = G__46352;
index = G__46353;
continue;
}
break;
}
});
/**
 * How many non-whitespace children does zloc have?  Note that this will
 *   include comments.
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count(zprint.zutil.zseqnws(zloc));
});
/**
 * How many non-whitespace non-comment children are in zloc-seq? Note
 *   that this is fundamentally different from zcount, in that it doesn't
 *   take a zloc, but rather a zloc-seq (i.e., a seq of elements, each of
 *   which is a zloc).
 */
zprint.zutil.zcount_zloc_seq_nc_nws = (function zprint$zutil$zcount_zloc_seq_nc_nws(zloc_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46110_SHARP_,p2__46109_SHARP_){
if(cljs.core.truth_((zprint.zutil.whitespace_or_comment_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_or_comment_QMARK_.cljs$core$IFn$_invoke$arity$1(p2__46109_SHARP_) : zprint.zutil.whitespace_or_comment_QMARK_.call(null,p2__46109_SHARP_)))){
return p1__46110_SHARP_;
} else {
return (p1__46110_SHARP_ + (1));
}
}),(0),zloc_seq);
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__46362 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__46363 = (0);
var G__46364 = cljs.core.cons(left,out);
nloc = G__46362;
left = G__46363;
out = G__46364;
continue;
}
} else {
var G__46365 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__46366 = (left + (1));
var G__46367 = out;
nloc = G__46365;
left = G__46366;
out = G__46367;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__46368 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__46369 = (0);
var G__46370 = cljs.core.cons(left,out);
nloc = G__46368;
left = G__46369;
out = G__46370;
continue;
}
} else {
var G__46371 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__46372 = ((zprint.zutil.whitespace_QMARK_(nloc))?left:(left + (1)));
var G__46373 = out;
nloc = G__46371;
left = G__46372;
out = G__46373;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not((rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc)))){
return nloc;
} else {
var G__46377 = (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc));
nloc = G__46377;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__46378 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__46379 = (remaining_right - (1));
nloc = G__46378;
remaining_right = G__46379;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost(nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)))) && (cljs.core.not((function (){var G__46112 = (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.node.call(null,zloc));
return (rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46112) : rewrite_clj.node.printable_only_QMARK_.call(null,G__46112));
})())));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),":");
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return ((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc)) instanceof cljs.core.Symbol);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return ((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.sexpr.call(null,zloc)) == null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__46113 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__46113) : rewrite_clj.zip.down.call(null,G__46113));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.zsymbol_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__46114 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__46114) : rewrite_clj.zip.down.call(null,G__46114));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.z_coll_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
var G__46115 = rewrite_clj.parser.parse_string("...");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__46115) : zprint.zutil.edn_STAR_.call(null,G__46115));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = (rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.tag.call(null,zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
var G__46116 = zprint.zutil.zfirst(zloc);
return (zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46116) : zprint.zutil.zconstant_QMARK_.call(null,G__46116));
} else {
var and__4120__auto__ = cljs.core.not(zprint.zutil.z_coll_QMARK_(zloc));
if(and__4120__auto__){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_(zloc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_(zloc))){
var sexpr = (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc));
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4120__auto__ = zprint.zutil.zkeyword_QMARK_(nloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),":doc");
} else {
return and__4120__auto__;
}
})())){
if(typeof (function (){var G__46117 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(G__46117) : zprint.zutil.sexpr.call(null,G__46117));
})() === 'string'){
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
} else {
return null;
}
} else {
var G__46539 = (function (){var G__46118 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__46118) : rewrite_clj.zip.right.call(null,G__46118));
})();
nloc = G__46539;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = (function (){var G__46119 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(G__46119) : rewrite_clj.zip.string.call(null,G__46119));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defmacro")))){
var docloc = (function (){var G__46120 = (function (){var G__46121 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__46121) : rewrite_clj.zip.right.call(null,G__46121));
})();
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__46120) : rewrite_clj.zip.right.call(null,G__46120));
})();
if(typeof (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(docloc) : zprint.zutil.sexpr.call(null,docloc)) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"def")){
var maploc = (function (){var G__46122 = (function (){var G__46123 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__46123) : rewrite_clj.zip.right.call(null,G__46123));
})();
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__46122) : rewrite_clj.zip.down.call(null,G__46122));
})();
if(cljs.core.truth_((rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1(maploc) : rewrite_clj.zip.map_QMARK_.call(null,maploc)))){
return zprint.zutil.find_doc_in_map(maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5733__auto__ = zprint.zutil.find_docstring(zloc);
if(cljs.core.truth_(temp__5733__auto__)){
var doc_zloc = temp__5733__auto__;
var new_doc_zloc = (function (){var G__46124 = doc_zloc;
var G__46125 = (function (){var G__46126 = (function (){var G__46127 = rewrite_clj.parser.parse_string(["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(doc_zloc) : zprint.zutil.sexpr.call(null,doc_zloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join(''));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__46127) : zprint.zutil.edn_STAR_.call(null,G__46127));
})();
return (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__46126) : rewrite_clj.zip.node.call(null,G__46126));
})();
return (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(G__46124,G__46125) : zprint.zutil.replace_STAR_.call(null,G__46124,G__46125));
})();
var G__46128 = (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(new_doc_zloc) : rewrite_clj.zip.root.call(null,new_doc_zloc));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__46128) : zprint.zutil.edn_STAR_.call(null,G__46128));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(p__46129,pair_seq,ns){
var map__46130 = p__46129;
var map__46130__$1 = (((((!((map__46130 == null))))?(((((map__46130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46130):map__46130);
var map_options = map__46130__$1;
var in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46130__$1,new cljs.core.Keyword(null,"in-code?","in-code?",194866464));
var lift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46130__$1,new cljs.core.Keyword(null,"lift-ns?","lift-ns?",2021372853));
var lift_ns_in_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46130__$1,new cljs.core.Keyword(null,"lift-ns-in-code?","lift-ns-in-code?",1444279377));
var unlift_ns_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46130__$1,new cljs.core.Keyword(null,"unlift-ns?","unlift-ns?",1065087867));
if(cljs.core.truth_((function (){var and__4120__auto__ = lift_ns_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
if(cljs.core.truth_(in_code_QMARK_)){
return lift_ns_in_code_QMARK_;
} else {
return true;
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);
} else {
var strip_ns = ((function (map__46130,map__46130__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_){
return (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});})(map__46130,map__46130__$1,map_options,in_code_QMARK_,lift_ns_QMARK_,lift_ns_in_code_QMARK_,unlift_ns_QMARK_))
;
var ns__$1 = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__46139 = cljs.core.first(pair_seq__$1);
var seq__46140 = cljs.core.seq(vec__46139);
var first__46141 = cljs.core.first(seq__46140);
var seq__46140__$1 = cljs.core.next(seq__46140);
var k = first__46141;
var rest_of_pair = seq__46140__$1;
var pair = vec__46139;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")));
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",ns__$1].join(''),out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns__$1,current_ns)){
var G__46567 = ns__$1;
var G__46568 = cljs.core.next(pair_seq__$1);
var G__46569 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__46142 = (function (){var G__46143 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__46143) : rewrite_clj.node.token_node.call(null,G__46143));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__46142) : zprint.zutil.edn_STAR_.call(null,G__46142));
})(),rest_of_pair));
ns__$1 = G__46567;
pair_seq__$1 = G__46568;
out = G__46569;
continue;
} else {
return null;
}
} else {
var G__46570 = current_ns;
var G__46571 = cljs.core.next(pair_seq__$1);
var G__46572 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__46144 = (function (){var G__46145 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__46145) : rewrite_clj.node.token_node.call(null,G__46145));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__46144) : zprint.zutil.edn_STAR_.call(null,G__46144));
})(),rest_of_pair));
ns__$1 = G__46570;
pair_seq__$1 = G__46571;
out = G__46572;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__46615 = ns__$1;
var G__46616 = cljs.core.next(pair_seq__$1);
var G__46617 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns__$1 = G__46615;
pair_seq__$1 = G__46616;
out = G__46617;
continue;
} else {
return null;
}
}
}
break;
}
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = ns;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = unlift_ns_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.not(lift_ns_QMARK_);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__46151 = cljs.core.first(pair_seq__$1);
var seq__46152 = cljs.core.seq(vec__46151);
var first__46153 = cljs.core.first(seq__46152);
var seq__46152__$1 = cljs.core.next(seq__46152);
var k = first__46153;
var rest_of_pair = seq__46152__$1;
var pair = vec__46151;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),"::")));
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,out], null);
} else {
if(cljs.core.truth_(current_ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__46624 = cljs.core.next(pair_seq__$1);
var G__46625 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
pair_seq__$1 = G__46624;
out = G__46625;
continue;
} else {
var G__46632 = cljs.core.next(pair_seq__$1);
var G__46633 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__46154 = (function (){var G__46155 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)))].join(''));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__46155) : rewrite_clj.node.token_node.call(null,G__46155));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__46154) : zprint.zutil.edn_STAR_.call(null,G__46154));
})(),rest_of_pair));
pair_seq__$1 = G__46632;
out = G__46633;
continue;

}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,pair_seq], null);

}
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__46156 = zprint.zfns.zstring;
var znumstr_orig_val__46157 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__46158 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__46159 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__46160 = zprint.zfns.zsexpr;
var zseqnws_orig_val__46161 = zprint.zfns.zseqnws;
var zseqnws_w_nl_orig_val__46162 = zprint.zfns.zseqnws_w_nl;
var zmap_right_orig_val__46163 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__46164 = zprint.zfns.zfocus_style;
var zstart_orig_val__46165 = zprint.zfns.zstart;
var zfirst_orig_val__46166 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__46167 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__46168 = zprint.zfns.zsecond;
var zsecond_no_comment_orig_val__46169 = zprint.zfns.zsecond_no_comment;
var zthird_orig_val__46170 = zprint.zfns.zthird;
var zthird_no_comment_orig_val__46171 = zprint.zfns.zthird_no_comment;
var zfourth_orig_val__46172 = zprint.zfns.zfourth;
var znextnws_orig_val__46173 = zprint.zfns.znextnws;
var znextnws_w_nl_orig_val__46174 = zprint.zfns.znextnws_w_nl;
var znthnext_orig_val__46175 = zprint.zfns.znthnext;
var zcount_orig_val__46176 = zprint.zfns.zcount;
var zcount_zloc_seq_nc_nws_orig_val__46177 = zprint.zfns.zcount_zloc_seq_nc_nws;
var zmap_orig_val__46178 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__46179 = zprint.zfns.zmap_w_nl;
var zmap_w_nl_comma_orig_val__46180 = zprint.zfns.zmap_w_nl_comma;
var zanonfn_QMARK__orig_val__46181 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__46182 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__46183 = zprint.zfns.zfocus;
var zfind_path_orig_val__46184 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__46185 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__46186 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__46187 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__46188 = zprint.zfns.zmap_QMARK_;
var znamespacedmap_QMARK__orig_val__46189 = zprint.zfns.znamespacedmap_QMARK_;
var zset_QMARK__orig_val__46190 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__46191 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__46192 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__46193 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__46194 = zprint.zfns.ztag;
var zlast_orig_val__46195 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__46196 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__46197 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__46198 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__46199 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__46200 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__46201 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__46202 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__46203 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__46204 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__46205 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__46206 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__46207 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__46208 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__46209 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__46210 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__46211 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__46212 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__46213 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__46214 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__46215 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__46216 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__46217 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__46218 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__46219 = zprint.zfns.zlift_ns;
var zfind_orig_val__46220 = zprint.zfns.zfind;
var ztake_append_orig_val__46221 = zprint.zfns.ztake_append;
var zstring_temp_val__46222 = rewrite_clj.zip.string;
var znumstr_temp_val__46223 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__46224 = cljs.core.constantly(false);
var zcomment_QMARK__temp_val__46225 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__46226 = zprint.zutil.sexpr;
var zseqnws_temp_val__46227 = zprint.zutil.zseqnws;
var zseqnws_w_nl_temp_val__46228 = zprint.zutil.zseqnws_w_nl;
var zmap_right_temp_val__46229 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__46230 = zprint.zutil.zfocus_style;
var zstart_temp_val__46231 = zprint.zutil.zstart;
var zfirst_temp_val__46232 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__46233 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__46234 = zprint.zutil.zsecond;
var zsecond_no_comment_temp_val__46235 = zprint.zutil.zsecond_no_comment;
var zthird_temp_val__46236 = zprint.zutil.zthird;
var zthird_no_comment_temp_val__46237 = zprint.zutil.zthird_no_comment;
var zfourth_temp_val__46238 = zprint.zutil.zfourth;
var znextnws_temp_val__46239 = zprint.zutil.zrightnws;
var znextnws_w_nl_temp_val__46240 = zprint.zutil.znextnws_w_nl;
var znthnext_temp_val__46241 = zprint.zutil.znthnext;
var zcount_temp_val__46242 = zprint.zutil.zcount;
var zcount_zloc_seq_nc_nws_temp_val__46243 = zprint.zutil.zcount_zloc_seq_nc_nws;
var zmap_temp_val__46244 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__46245 = zprint.zutil.zmap_w_nl;
var zmap_w_nl_comma_temp_val__46246 = zprint.zutil.zmap_w_nl_comma;
var zanonfn_QMARK__temp_val__46247 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__46248 = cljs.core.constantly(false);
var zfocus_temp_val__46249 = zprint.zutil.zfocus;
var zfind_path_temp_val__46250 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__46251 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__46252 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__46253 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__46254 = rewrite_clj.zip.map_QMARK_;
var znamespacedmap_QMARK__temp_val__46255 = zprint.zutil.znamespacedmap_QMARK_;
var zset_QMARK__temp_val__46256 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__46257 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__46258 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__46259 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__46260 = zprint.zutil.ztag;
var zlast_temp_val__46261 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__46262 = cljs.core.constantly(false);
var zatom_QMARK__temp_val__46263 = cljs.core.constantly(false);
var zderef_temp_val__46264 = cljs.core.constantly(false);
var zrecord_QMARK__temp_val__46265 = cljs.core.constantly(false);
var zns_QMARK__temp_val__46266 = cljs.core.constantly(false);
var zobj_to_vec_temp_val__46267 = cljs.core.constantly(null);
var zexpandarray_temp_val__46268 = cljs.core.constantly(null);
var znewline_QMARK__temp_val__46269 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__46270 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__46271 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__46272 = cljs.core.constantly(false);
var zfuture_QMARK__temp_val__46273 = cljs.core.constantly(false);
var zdelay_QMARK__temp_val__46274 = cljs.core.constantly(false);
var zkeyword_QMARK__temp_val__46275 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__46276 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__46277 = cljs.core.constantly(false);
var zreader_macro_QMARK__temp_val__46278 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__46279 = cljs.core.constantly(null);
var zdotdotdot_temp_val__46280 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__46281 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__46282 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__46283 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__46284 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__46285 = zprint.zutil.zlift_ns;
var zfind_temp_val__46286 = zprint.zutil.zfind;
var ztake_append_temp_val__46287 = zprint.zutil.ztake_append;
zprint.zfns.zstring = zstring_temp_val__46222;

zprint.zfns.znumstr = znumstr_temp_val__46223;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__46224;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__46225;

zprint.zfns.zsexpr = zsexpr_temp_val__46226;

zprint.zfns.zseqnws = zseqnws_temp_val__46227;

zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_temp_val__46228;

zprint.zfns.zmap_right = zmap_right_temp_val__46229;

zprint.zfns.zfocus_style = zfocus_style_temp_val__46230;

zprint.zfns.zstart = zstart_temp_val__46231;

zprint.zfns.zfirst = zfirst_temp_val__46232;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__46233;

zprint.zfns.zsecond = zsecond_temp_val__46234;

zprint.zfns.zsecond_no_comment = zsecond_no_comment_temp_val__46235;

zprint.zfns.zthird = zthird_temp_val__46236;

zprint.zfns.zthird_no_comment = zthird_no_comment_temp_val__46237;

zprint.zfns.zfourth = zfourth_temp_val__46238;

zprint.zfns.znextnws = znextnws_temp_val__46239;

zprint.zfns.znextnws_w_nl = znextnws_w_nl_temp_val__46240;

zprint.zfns.znthnext = znthnext_temp_val__46241;

zprint.zfns.zcount = zcount_temp_val__46242;

zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_temp_val__46243;

zprint.zfns.zmap = zmap_temp_val__46244;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__46245;

zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_temp_val__46246;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__46247;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__46248;

zprint.zfns.zfocus = zfocus_temp_val__46249;

zprint.zfns.zfind_path = zfind_path_temp_val__46250;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__46251;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__46252;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__46253;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__46254;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__temp_val__46255;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__46256;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__46257;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__46258;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__46259;

zprint.zfns.ztag = ztag_temp_val__46260;

zprint.zfns.zlast = zlast_temp_val__46261;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__46262;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__46263;

zprint.zfns.zderef = zderef_temp_val__46264;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__46265;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__46266;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__46267;

zprint.zfns.zexpandarray = zexpandarray_temp_val__46268;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__46269;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__46270;

zprint.zfns.zmap_all = zmap_all_temp_val__46271;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__46272;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__46273;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__46274;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__46275;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__46276;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__46277;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__46278;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__46279;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__46280;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__46281;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__46282;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__46283;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__46284;

zprint.zfns.zlift_ns = zlift_ns_temp_val__46285;

zprint.zfns.zfind = zfind_temp_val__46286;

zprint.zfns.ztake_append = ztake_append_temp_val__46287;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__46221;

zprint.zfns.zfind = zfind_orig_val__46220;

zprint.zfns.zlift_ns = zlift_ns_orig_val__46219;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__46218;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__46217;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__46216;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__46215;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__46214;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__46213;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__46212;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__46211;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__46210;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__46209;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__46208;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__46207;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__46206;

zprint.zfns.zmap_all = zmap_all_orig_val__46205;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__46204;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__46203;

zprint.zfns.zexpandarray = zexpandarray_orig_val__46202;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__46201;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__46200;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__46199;

zprint.zfns.zderef = zderef_orig_val__46198;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__46197;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__46196;

zprint.zfns.zlast = zlast_orig_val__46195;

zprint.zfns.ztag = ztag_orig_val__46194;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__46193;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__46192;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__46191;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__46190;

zprint.zfns.znamespacedmap_QMARK_ = znamespacedmap_QMARK__orig_val__46189;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__46188;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__46187;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__46186;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__46185;

zprint.zfns.zfind_path = zfind_path_orig_val__46184;

zprint.zfns.zfocus = zfocus_orig_val__46183;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__46182;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__46181;

zprint.zfns.zmap_w_nl_comma = zmap_w_nl_comma_orig_val__46180;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__46179;

zprint.zfns.zmap = zmap_orig_val__46178;

zprint.zfns.zcount_zloc_seq_nc_nws = zcount_zloc_seq_nc_nws_orig_val__46177;

zprint.zfns.zcount = zcount_orig_val__46176;

zprint.zfns.znthnext = znthnext_orig_val__46175;

zprint.zfns.znextnws_w_nl = znextnws_w_nl_orig_val__46174;

zprint.zfns.znextnws = znextnws_orig_val__46173;

zprint.zfns.zfourth = zfourth_orig_val__46172;

zprint.zfns.zthird_no_comment = zthird_no_comment_orig_val__46171;

zprint.zfns.zthird = zthird_orig_val__46170;

zprint.zfns.zsecond_no_comment = zsecond_no_comment_orig_val__46169;

zprint.zfns.zsecond = zsecond_orig_val__46168;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__46167;

zprint.zfns.zfirst = zfirst_orig_val__46166;

zprint.zfns.zstart = zstart_orig_val__46165;

zprint.zfns.zfocus_style = zfocus_style_orig_val__46164;

zprint.zfns.zmap_right = zmap_right_orig_val__46163;

zprint.zfns.zseqnws_w_nl = zseqnws_w_nl_orig_val__46162;

zprint.zfns.zseqnws = zseqnws_orig_val__46161;

zprint.zfns.zsexpr = zsexpr_orig_val__46160;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__46159;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__46158;

zprint.zfns.znumstr = znumstr_orig_val__46157;

zprint.zfns.zstring = zstring_orig_val__46156;
}});

//# sourceMappingURL=zprint.zutil.js.map

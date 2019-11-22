goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__39780){
var vec__39781 = p__39780;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39781,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__39795 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39795,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39795,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39795,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__39803 = arguments.length;
switch (G__39803) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__39816_39885 = clojure.data.equality_partition;
var G__39817_39886 = "null";
var G__39818_39887 = ((function (G__39816_39885,G__39817_39886){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39816_39885,G__39817_39886))
;
goog.object.set(G__39816_39885,G__39817_39886,G__39818_39887);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__39819_39905 = clojure.data.equality_partition;
var G__39820_39906 = "string";
var G__39821_39907 = ((function (G__39819_39905,G__39820_39906){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39819_39905,G__39820_39906))
;
goog.object.set(G__39819_39905,G__39820_39906,G__39821_39907);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__39822_39908 = clojure.data.equality_partition;
var G__39823_39909 = "number";
var G__39824_39910 = ((function (G__39822_39908,G__39823_39909){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39822_39908,G__39823_39909))
;
goog.object.set(G__39822_39908,G__39823_39909,G__39824_39910);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__39826_39911 = clojure.data.equality_partition;
var G__39827_39912 = "array";
var G__39828_39913 = ((function (G__39826_39911,G__39827_39912){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__39826_39911,G__39827_39912))
;
goog.object.set(G__39826_39911,G__39827_39912,G__39828_39913);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__39830_39914 = clojure.data.equality_partition;
var G__39831_39915 = "function";
var G__39832_39916 = ((function (G__39830_39914,G__39831_39915){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39830_39914,G__39831_39915))
;
goog.object.set(G__39830_39914,G__39831_39915,G__39832_39916);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__39833_39917 = clojure.data.equality_partition;
var G__39834_39918 = "boolean";
var G__39835_39919 = ((function (G__39833_39917,G__39834_39918){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__39833_39917,G__39834_39918))
;
goog.object.set(G__39833_39917,G__39834_39918,G__39835_39919);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__39836_39920 = clojure.data.equality_partition;
var G__39837_39921 = "_";
var G__39838_39922 = ((function (G__39836_39920,G__39837_39921){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__39836_39920,G__39837_39921))
;
goog.object.set(G__39836_39920,G__39837_39921,G__39838_39922);
goog.object.set(clojure.data.Diff,"null",true);

var G__39843_39926 = clojure.data.diff_similar;
var G__39844_39927 = "null";
var G__39845_39928 = ((function (G__39843_39926,G__39844_39927){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39843_39926,G__39844_39927))
;
goog.object.set(G__39843_39926,G__39844_39927,G__39845_39928);

goog.object.set(clojure.data.Diff,"string",true);

var G__39846_39929 = clojure.data.diff_similar;
var G__39847_39930 = "string";
var G__39848_39931 = ((function (G__39846_39929,G__39847_39930){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39846_39929,G__39847_39930))
;
goog.object.set(G__39846_39929,G__39847_39930,G__39848_39931);

goog.object.set(clojure.data.Diff,"number",true);

var G__39849_39932 = clojure.data.diff_similar;
var G__39850_39933 = "number";
var G__39851_39934 = ((function (G__39849_39932,G__39850_39933){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39849_39932,G__39850_39933))
;
goog.object.set(G__39849_39932,G__39850_39933,G__39851_39934);

goog.object.set(clojure.data.Diff,"array",true);

var G__39852_39935 = clojure.data.diff_similar;
var G__39853_39936 = "array";
var G__39854_39937 = ((function (G__39852_39935,G__39853_39936){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__39852_39935,G__39853_39936))
;
goog.object.set(G__39852_39935,G__39853_39936,G__39854_39937);

goog.object.set(clojure.data.Diff,"function",true);

var G__39855_39938 = clojure.data.diff_similar;
var G__39856_39939 = "function";
var G__39857_39940 = ((function (G__39855_39938,G__39856_39939){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39855_39938,G__39856_39939))
;
goog.object.set(G__39855_39938,G__39856_39939,G__39857_39940);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__39858_39941 = clojure.data.diff_similar;
var G__39859_39942 = "boolean";
var G__39860_39943 = ((function (G__39858_39941,G__39859_39942){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__39858_39941,G__39859_39942))
;
goog.object.set(G__39858_39941,G__39859_39942,G__39860_39943);

goog.object.set(clojure.data.Diff,"_",true);

var G__39861_39944 = clojure.data.diff_similar;
var G__39862_39945 = "_";
var G__39863_39946 = ((function (G__39861_39944,G__39862_39945){
return (function (a,b){
var fexpr__39865 = (function (){var G__39866 = clojure.data.equality_partition(a);
var G__39866__$1 = (((G__39866 instanceof cljs.core.Keyword))?G__39866.fqn:null);
switch (G__39866__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39866__$1)].join('')));

}
})();
return (fexpr__39865.cljs$core$IFn$_invoke$arity$2 ? fexpr__39865.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__39865.call(null,a,b));
});})(G__39861_39944,G__39862_39945))
;
goog.object.set(G__39861_39944,G__39862_39945,G__39863_39946);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map

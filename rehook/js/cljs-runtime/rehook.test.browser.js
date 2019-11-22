goog.provide('rehook.test.browser');
goog.require('cljs.core');
goog.require('rehook.core');
goog.require('rehook.dom');
goog.require('rehook.dom.browser');
goog.require('rehook.test');
goog.require('zprint.core');
goog.require('clojure.string');
goog.require('clojure.data');
var module$node_modules$react_highlight$index=shadow.js.require("module$node_modules$react_highlight$index", {});
var module$node_modules$react_frame_component$lib$index=shadow.js.require("module$node_modules$react_frame_component$lib$index", {});
var module$node_modules$react_error_boundary$dist$commonjs$index=shadow.js.require("module$node_modules$react_error_boundary$dist$commonjs$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});

/** @define {string} */
goog.define("rehook.test.browser.HTML","");

/** @define {string} */
goog.define("rehook.test.browser.target","app");

/** @define {number} */
goog.define("rehook.test.browser.domheight",(400));
rehook.test.browser.highlight = (module$node_modules$react_highlight$index["default"]);
rehook.test.browser.error_boundary = (module$node_modules$react_error_boundary$dist$commonjs$index["default"]);
rehook.test.browser.frame = (module$node_modules$react_frame_component$lib$index["default"]);
rehook.test.browser.zpr_str = (function rehook$test$browser$zpr_str(var_args){
var G__51848 = arguments.length;
switch (G__51848) {
case 1:
return rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$1 = (function (code){
return rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$2(code,(80));
});

rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$2 = (function (code,numeric_width){
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51849_52155 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51850_52156 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51851_52157 = true;
var _STAR_print_fn_STAR__temp_val__51852_52158 = ((function (_STAR_print_newline_STAR__orig_val__51849_52155,_STAR_print_fn_STAR__orig_val__51850_52156,_STAR_print_newline_STAR__temp_val__51851_52157,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__51849_52155,_STAR_print_fn_STAR__orig_val__51850_52156,_STAR_print_newline_STAR__temp_val__51851_52157,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51851_52157;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51852_52158;

try{zprint.core.zprint.cljs$core$IFn$_invoke$arity$variadic(code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = numeric_width;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (80);
}
})()], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51850_52156;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51849_52155;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
});

rehook.test.browser.zpr_str.cljs$lang$maxFixedArity = 2;

rehook.test.browser.clojure_highlight = cljs.core.with_meta((function rehook$test$browser$clojure_highlight51856(ctx__39176__auto__,$__39177__auto__){
var _ = ctx__39176__auto__;
var $ = $__39177__auto__;
return ((function (_,$){
return (function rehook$test$browser$clojure_highlight51856_$_clojure_highlight51857(props__39178__auto__){
var props = props__39178__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4($,rehook.test.browser.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null),(props["children"]));
});
;})(_,$))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"clojure-highlight",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.current_scene = (function rehook$test$browser$current_scene(scenes,index){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(scenes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeline","timeline",192903161),index], null));
});
rehook.test.browser.previous_scene = (function rehook$test$browser$previous_scene(scenes,index){
var prev_index = (index - (1));
if((prev_index < (0))){
return null;
} else {
return rehook.test.browser.current_scene(scenes,prev_index);
}
});
rehook.test.browser.scene_key = (function rehook$test$browser$scene_key(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52159 = arguments.length;
var i__4731__auto___52160 = (0);
while(true){
if((i__4731__auto___52160 < len__4730__auto___52159)){
args__4736__auto__.push((arguments[i__4731__auto___52160]));

var G__52161 = (i__4731__auto___52160 + (1));
i__4731__auto___52160 = G__52161;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return rehook.test.browser.scene_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

rehook.test.browser.scene_key.cljs$core$IFn$_invoke$arity$variadic = (function (index,words){
return ["scene-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",words))].join('');
});

rehook.test.browser.scene_key.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
rehook.test.browser.scene_key.cljs$lang$applyTo = (function (seq51872){
var G__51873 = cljs.core.first(seq51872);
var seq51872__$1 = cljs.core.next(seq51872);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51873,seq51872__$1);
});

rehook.test.browser.error_handler = cljs.core.with_meta((function rehook$test$browser$error_handler51880(ctx__39179__auto__,$__39180__auto__){
var map__51882 = ctx__39179__auto__;
var map__51882__$1 = (((((!((map__51882 == null))))?(((((map__51882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51882):map__51882);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51882__$1,new cljs.core.Keyword(null,"title","title",636505583));
var $51879 = $__39180__auto__;
return ((function (map__51882,map__51882__$1,title,$51879){
return (function rehook$test$browser$error_handler51880_$_error_handler51881(props__39181__auto__){
var props = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$51879,(function (){var error = (props["error"]);
var stacktrace = (props["componentStack"]);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.PersistentArrayMap.EMPTY,cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.clojure_highlight,cljs.core.PersistentArrayMap.EMPTY,rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$2(error,(120))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"javascript"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(stacktrace)], null)], null);
})());
});
;})(map__51882,map__51882__$1,title,$51879))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"error-handler",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.material_icon = cljs.core.with_meta((function rehook$test$browser$material_icon51889(ctx__39179__auto__,$__39180__auto__){
var _ = ctx__39179__auto__;
var $51888 = $__39180__auto__;
return ((function (_,$51888){
return (function rehook$test$browser$material_icon51889_$_material_icon51890(props__39181__auto__){
var props = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$51888,(function (){var icon = (props["icon"]);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"material-icons",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"userSelect","userSelect",-391760051),"none"], null)], null),icon], null);
})());
});
;})(_,$51888))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"material-icon",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.code = cljs.core.with_meta((function rehook$test$browser$code51892(ctx__39176__auto__,$__39177__auto__){
var map__51894 = ctx__39176__auto__;
var map__51894__$1 = (((((!((map__51894 == null))))?(((((map__51894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51894):map__51894);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51894__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $ = $__39177__auto__;
return ((function (map__51894,map__51894__$1,test_results,$){
return (function rehook$test$browser$code51892_$_code51893(props__39178__auto__){
var props = props__39178__auto__;
var vec__51896 = (props["path"]);
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51896,(0),null);
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51896,(1),null);
var vec__51899 = rehook.core.use_atom_path(test_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null));
var scenes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51899,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51899,(1),null);
var scene = rehook.test.browser.current_scene(scenes,idx2);
var G__51902 = rehook.test.browser.error_boundary;
var G__51903 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"FallbackComponent","FallbackComponent",1371996581),(function (){var G__51905 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Error rendering Hiccup. You likely found a bug with rehook."], null);
var G__51906 = $;
return (rehook.test.browser.error_handler.cljs$core$IFn$_invoke$arity$2 ? rehook.test.browser.error_handler.cljs$core$IFn$_invoke$arity$2(G__51905,G__51906) : rehook.test.browser.error_handler.call(null,G__51905,G__51906));
})()], null);
var G__51904 = (function (){var G__51907 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__51908 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll"], null)], null);
var G__51909 = (function (){var G__51910 = rehook.test.browser.highlight;
var G__51911 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"key","key",-1516042587),rehook.test.browser.scene_key.cljs$core$IFn$_invoke$arity$variadic(idx2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["code"], 0))], null);
var G__51912 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51913_52162 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51914_52163 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51915_52164 = true;
var _STAR_print_fn_STAR__temp_val__51916_52165 = ((function (_STAR_print_newline_STAR__orig_val__51913_52162,_STAR_print_fn_STAR__orig_val__51914_52163,_STAR_print_newline_STAR__temp_val__51915_52164,sb__4661__auto__,G__51910,G__51911,G__51907,G__51908,G__51902,G__51903,vec__51896,idx1,idx2,vec__51899,scenes,_,scene,props,map__51894,map__51894__$1,test_results,$){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__51913_52162,_STAR_print_fn_STAR__orig_val__51914_52163,_STAR_print_newline_STAR__temp_val__51915_52164,sb__4661__auto__,G__51910,G__51911,G__51907,G__51908,G__51902,G__51903,vec__51896,idx1,idx2,vec__51899,scenes,_,scene,props,map__51894,map__51894__$1,test_results,$))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51915_52164;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51916_52165;

try{zprint.core.zprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__51922 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(scene);
return (fexpr__51922.cljs$core$IFn$_invoke$arity$0 ? fexpr__51922.cljs$core$IFn$_invoke$arity$0() : fexpr__51922.call(null));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(80)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51914_52163;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51913_52162;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__51910,G__51911,G__51912) : $.call(null,G__51910,G__51911,G__51912));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__51907,G__51908,G__51909) : $.call(null,G__51907,G__51908,G__51909));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__51902,G__51903,G__51904) : $.call(null,G__51902,G__51903,G__51904));
});
;})(map__51894,map__51894__$1,test_results,$))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"code",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.diff = cljs.core.with_meta((function rehook$test$browser$diff51925(ctx__39176__auto__,$__39177__auto__){
var map__51927 = ctx__39176__auto__;
var map__51927__$1 = (((((!((map__51927 == null))))?(((((map__51927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51927):map__51927);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51927__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $ = $__39177__auto__;
return ((function (map__51927,map__51927__$1,test_results,$){
return (function rehook$test$browser$diff51925_$_diff51926(props__39178__auto__){
var props = props__39178__auto__;
var vec__51931 = (props["path"]);
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51931,(0),null);
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51931,(1),null);
var vec__51934 = rehook.core.use_atom_path(test_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null));
var scenes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51934,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51934,(1),null);
var scene = rehook.test.browser.current_scene(scenes,idx2);
var prev_scene = rehook.test.browser.previous_scene(scenes,idx2);
var G__51938 = rehook.test.browser.highlight;
var G__51939 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure",new cljs.core.Keyword(null,"key","key",-1516042587),rehook.test.browser.scene_key.cljs$core$IFn$_invoke$arity$variadic(idx2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["code-diff"], 0))], null);
var G__51940 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51951_52166 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51952_52167 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51953_52168 = true;
var _STAR_print_fn_STAR__temp_val__51954_52169 = ((function (_STAR_print_newline_STAR__orig_val__51951_52166,_STAR_print_fn_STAR__orig_val__51952_52167,_STAR_print_newline_STAR__temp_val__51953_52168,sb__4661__auto__,G__51938,G__51939,vec__51931,idx1,idx2,vec__51934,scenes,_,scene,prev_scene,props,map__51927,map__51927__$1,test_results,$){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__51951_52166,_STAR_print_fn_STAR__orig_val__51952_52167,_STAR_print_newline_STAR__temp_val__51953_52168,sb__4661__auto__,G__51938,G__51939,vec__51931,idx1,idx2,vec__51934,scenes,_,scene,prev_scene,props,map__51927,map__51927__$1,test_results,$))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51953_52168;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51954_52169;

try{zprint.core.zprint.cljs$core$IFn$_invoke$arity$variadic(clojure.data.diff((function (){var fexpr__51955 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(scene);
return (fexpr__51955.cljs$core$IFn$_invoke$arity$0 ? fexpr__51955.cljs$core$IFn$_invoke$arity$0() : fexpr__51955.call(null));
})(),(function (){var fexpr__51956 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(prev_scene);
return (fexpr__51956.cljs$core$IFn$_invoke$arity$0 ? fexpr__51956.cljs$core$IFn$_invoke$arity$0() : fexpr__51956.call(null));
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(80)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51952_52167;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51951_52166;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__51938,G__51939,G__51940) : $.call(null,G__51938,G__51939,G__51940));
});
;})(map__51927,map__51927__$1,test_results,$))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"diff",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.dom = cljs.core.with_meta((function rehook$test$browser$dom51962(ctx__39176__auto__,$__39177__auto__){
var map__51965 = ctx__39176__auto__;
var map__51965__$1 = (((((!((map__51965 == null))))?(((((map__51965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51965):map__51965);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51965__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $ = $__39177__auto__;
return ((function (map__51965,map__51965__$1,test_results,$){
return (function rehook$test$browser$dom51962_$_dom51963(props__39178__auto__){
var props = props__39178__auto__;
var vec__51968 = (props["path"]);
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51968,(0),null);
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51968,(1),null);
var vec__51971 = rehook.core.use_atom_path(test_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null));
var scenes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51971,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51971,(1),null);
var scene = rehook.test.browser.current_scene(scenes,idx2);
var dom = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(scene);
var G__51976 = rehook.test.browser.error_boundary;
var G__51977 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"FallbackComponent","FallbackComponent",1371996581),(function (){var G__51979 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Error rendering to the DOM. You likely found a bug with rehook."], null);
var G__51980 = $;
return (rehook.test.browser.error_handler.cljs$core$IFn$_invoke$arity$2 ? rehook.test.browser.error_handler.cljs$core$IFn$_invoke$arity$2(G__51979,G__51980) : rehook.test.browser.error_handler.call(null,G__51979,G__51980));
})()], null);
var G__51978 = (function (){var G__51981 = rehook.test.browser.frame;
var G__51982 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initialContent","initialContent",2111812768),rehook.test.browser.HTML,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rehook.test.browser.domheight),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null);
var G__51983 = rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,cljs.core.clj__GT_js,cljs.core.with_meta(((function (G__51981,G__51982,G__51976,G__51977,vec__51968,idx1,idx2,vec__51971,scenes,_,scene,dom,props,map__51965,map__51965__$1,test_results,$){
return (function rehook$test$browser$dom51962_$_dom51963_$_ui51984(ctx__39194__auto__,$__39195__auto__){
var ___$1 = ctx__39194__auto__;
var $51985 = $__39195__auto__;
return ((function (___$1,$51985,G__51981,G__51982,G__51976,G__51977,vec__51968,idx1,idx2,vec__51971,scenes,_,scene,dom,props,map__51965,map__51965__$1,test_results,$){
return (function rehook$test$browser$dom51962_$_dom51963_$_ui51984_$_ui5198451986(props__39196__auto__){
var ___$2 = props__39196__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$51985,(dom.cljs$core$IFn$_invoke$arity$0 ? dom.cljs$core$IFn$_invoke$arity$0() : dom.call(null)));
});
;})(___$1,$51985,G__51981,G__51982,G__51976,G__51977,vec__51968,idx1,idx2,vec__51971,scenes,_,scene,dom,props,map__51965,map__51965__$1,test_results,$))
});})(G__51981,G__51982,G__51976,G__51977,vec__51968,idx1,idx2,vec__51971,scenes,_,scene,dom,props,map__51965,map__51965__$1,test_results,$))
,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"ui51984",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null)));
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__51981,G__51982,G__51983) : $.call(null,G__51981,G__51982,G__51983));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__51976,G__51977,G__51978) : $.call(null,G__51976,G__51977,G__51978));
});
;})(map__51965,map__51965__$1,test_results,$))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"dom",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.state = cljs.core.with_meta((function rehook$test$browser$state51989(ctx__39179__auto__,$__39180__auto__){
var map__51991 = ctx__39179__auto__;
var map__51991__$1 = (((((!((map__51991 == null))))?(((((map__51991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51991):map__51991);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51991__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $51988 = $__39180__auto__;
return ((function (map__51991,map__51991__$1,test_results,$51988){
return (function rehook$test$browser$state51989_$_state51990(props__39181__auto__){
var props = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$51988,(function (){var vec__51997 = (props["path"]);
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51997,(0),null);
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51997,(1),null);
var vec__52000 = rehook.core.use_atom_path(test_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null));
var scenes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52000,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52000,(1),null);
var scene = rehook.test.browser.current_scene(scenes,idx2);
var prev_scene = rehook.test.browser.previous_scene(scenes,idx2);
var state = (function (){var G__52005 = scene;
var G__52005__$1 = (((G__52005 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__52005));
if((G__52005__$1 == null)){
return null;
} else {
return cljs.core.deref(G__52005__$1);
}
})();
var prev_state = (function (){var G__52006 = prev_scene;
var G__52006__$1 = (((G__52006 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__52006));
if((G__52006__$1 == null)){
return null;
} else {
return cljs.core.deref(G__52006__$1);
}
})();
if(cljs.core.truth_(state)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflowX","overflowX",-1923805821),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"component"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"parent"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"index"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"previous value"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"current value"], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__51997,idx1,idx2,vec__52000,scenes,_,scene,prev_scene,state,prev_state,props,map__51991,map__51991__$1,test_results,$51988){
return (function (p__52008){
var vec__52009 = p__52008;
var vec__52012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52009,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52012,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52012,(1),null);
var id = vec__52012;
var map__52015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52009,(1),null);
var map__52015__$1 = (((((!((map__52015 == null))))?(((((map__52015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52015):map__52015);
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52015__$1,new cljs.core.Keyword(null,"current-value","current-value",2066017989));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,cljs.core.last(k)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,(function (){var or__4131__auto__ = cljs.core.last(cljs.core.butlast(k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,(i - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.clojure_highlight,cljs.core.PersistentArrayMap.EMPTY,rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(prev_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"current-value","current-value",2066017989)], null)),(120))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.clojure_highlight,cljs.core.PersistentArrayMap.EMPTY,rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$2(current_value,(120))], null)], null)], null);
});})(vec__51997,idx1,idx2,vec__52000,scenes,_,scene,prev_scene,state,prev_state,props,map__51991,map__51991__$1,test_results,$51988))
,state))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,"No state mounted"], null);
}
})());
});
;})(map__51991,map__51991__$1,test_results,$51988))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"state",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.effects = cljs.core.with_meta((function rehook$test$browser$effects52023(ctx__39179__auto__,$__39180__auto__){
var map__52025 = ctx__39179__auto__;
var map__52025__$1 = (((((!((map__52025 == null))))?(((((map__52025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52025):map__52025);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52025__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $52022 = $__39180__auto__;
return ((function (map__52025,map__52025__$1,test_results,$52022){
return (function rehook$test$browser$effects52023_$_effects52024(props__39181__auto__){
var props = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$52022,(function (){var vec__52027 = (props["path"]);
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52027,(0),null);
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52027,(1),null);
var vec__52030 = rehook.core.use_atom_path(test_results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scenes","scenes",-425219404)], null));
var scenes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52030,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52030,(1),null);
var scene = rehook.test.browser.current_scene(scenes,idx2);
var effects = (function (){var G__52033 = scene;
var G__52033__$1 = (((G__52033 == null))?null:new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(G__52033));
if((G__52033__$1 == null)){
return null;
} else {
return cljs.core.deref(G__52033__$1);
}
})();
var prev_scene = rehook.test.browser.previous_scene(scenes,idx2);
var prev_effects = (function (){var G__52038 = prev_scene;
var G__52038__$1 = (((G__52038 == null))?null:new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(G__52038));
if((G__52038__$1 == null)){
return null;
} else {
return cljs.core.deref(G__52038__$1);
}
})();
if(cljs.core.truth_(effects)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflowX","overflowX",-1923805821),"auto"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"component"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"parent"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"index"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"prev deps"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"deps"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),cljs.core.PersistentArrayMap.EMPTY,"evaled?"], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__52027,idx1,idx2,vec__52030,scenes,_,scene,effects,prev_scene,prev_effects,props,map__52025,map__52025__$1,test_results,$52022){
return (function (p__52042){
var vec__52043 = p__52042;
var vec__52046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52043,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52046,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52046,(1),null);
var id = vec__52046;
var map__52049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52043,(1),null);
var map__52049__$1 = (((((!((map__52049 == null))))?(((((map__52049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52049):map__52049);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52049__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var prev_deps = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(prev_effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"deps","deps",1883360319)], null));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,cljs.core.last(k)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,(function (){var or__4131__auto__ = cljs.core.last(cljs.core.butlast(k));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,(i - (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_deps], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deps], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.PersistentArrayMap.EMPTY,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rehook.test.eval_effect_QMARK_(idx2,prev_deps,deps)], 0))], null)], null);
});})(vec__52027,idx1,idx2,vec__52030,scenes,_,scene,effects,prev_scene,prev_effects,props,map__52025,map__52025__$1,test_results,$52022))
,effects))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,"No effects mounted"], null);
}
})());
});
;})(map__52025,map__52025__$1,test_results,$52022))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"effects",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.button = cljs.core.with_meta((function rehook$test$browser$button52052(ctx__39179__auto__,$__39180__auto__){
var _ = ctx__39179__auto__;
var $52051 = $__39180__auto__;
return ((function (_,$52051){
return (function rehook$test$browser$button52052_$_button52053(props__39181__auto__){
var props = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$52051,(function (){var on_click = (props["onClick"]);
var selected = (props["selected"]);
var title = (props["title"]);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(selected)?"1px solid #222":"1px solid #ccc"),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"3px",new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"10px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"userSelect","userSelect",-391760051),"none"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),on_click], null),(cljs.core.truth_(selected)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),cljs.core.PersistentArrayMap.EMPTY,title], null):title)], null);
})());
});
;})(_,$52051))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"button",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.test_assertion = cljs.core.with_meta((function rehook$test$browser$test_assertion52055(ctx__39179__auto__,$__39180__auto__){
var map__52057 = ctx__39179__auto__;
var map__52057__$1 = (((((!((map__52057 == null))))?(((((map__52057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52057):map__52057);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52057__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $52054 = $__39180__auto__;
return ((function (map__52057,map__52057__$1,test_results,$52054){
return (function rehook$test$browser$test_assertion52055_$_test_assertion52056(props__39181__auto__){
var props = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$52054,(function (){var vec__52059 = (props["path"]);
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52059,(0),null);
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52059,(1),null);
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"tests","tests",-1041085625),idx2], null);
var vec__52062 = rehook.core.use_atom_path(test_results,path);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52062,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52062,(1),null);
var vec__52065 = rehook.core.use_state(true);
var show_details_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52065,(0),null);
var set_show_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52065,(1),null);
var vec__52068 = rehook.core.use_state(new cljs.core.Keyword(null,"dom","dom",-1236537922));
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52068,(0),null);
var set_tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52068,(1),null);
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2(((function (vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054){
return (function (){
(set_show_details.cljs$core$IFn$_invoke$arity$1 ? set_show_details.cljs$core$IFn$_invoke$arity$1(true) : set_show_details.call(null,true));

return cljs.core.constantly(null);
});})(vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(tab)], null));

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"alignItems","alignItems",410331199)],["wrap","#F8F8F8","3px","20px","space-between","10px","flex","1px solid #88CC88",(cljs.core.truth_(new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(test))?"#77DD77":"#B74747"),"center"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.material_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),(cljs.core.truth_(new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(test))?"done":"highlight_off")], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"1000"], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(test),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.clojure_highlight,cljs.core.PersistentArrayMap.EMPTY,rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(test),(80))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ccc",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"24px",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"userSelect","userSelect",-391760051),"none",new cljs.core.Keyword(null,"width","width",-384071477),"70px"], null)], null),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(test)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"space-between",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),"wrap"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"3px",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),"wrap",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"10px",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054){
return (function (){
var G__52071 = new cljs.core.Keyword(null,"dom","dom",-1236537922);
return (set_tab.cljs$core$IFn$_invoke$arity$1 ? set_tab.cljs$core$IFn$_invoke$arity$1(G__52071) : set_tab.call(null,G__52071));
});})(vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054))
,new cljs.core.Keyword(null,"title","title",636505583),"DOM",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dom","dom",-1236537922),tab)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054){
return (function (){
var G__52072 = new cljs.core.Keyword(null,"hiccup","hiccup",1218876238);
return (set_tab.cljs$core$IFn$_invoke$arity$1 ? set_tab.cljs$core$IFn$_invoke$arity$1(G__52072) : set_tab.call(null,G__52072));
});})(vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054))
,new cljs.core.Keyword(null,"title","title",636505583),"Hiccup",new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),tab)], null)], null),(((new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(test) > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054){
return (function (){
var G__52073 = new cljs.core.Keyword(null,"diff","diff",2135942783);
return (set_tab.cljs$core$IFn$_invoke$arity$1 ? set_tab.cljs$core$IFn$_invoke$arity$1(G__52073) : set_tab.call(null,G__52073));
});})(vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054))
,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"diff","diff",2135942783)),new cljs.core.Keyword(null,"title","title",636505583),"Diff"], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054){
return (function (){
var G__52074 = new cljs.core.Keyword(null,"effects","effects",-282369292);
return (set_tab.cljs$core$IFn$_invoke$arity$1 ? set_tab.cljs$core$IFn$_invoke$arity$1(G__52074) : set_tab.call(null,G__52074));
});})(vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054))
,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"effects","effects",-282369292)),new cljs.core.Keyword(null,"title","title",636505583),"Effects"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054){
return (function (){
var G__52075 = new cljs.core.Keyword(null,"state","state",-1988618099);
return (set_tab.cljs$core$IFn$_invoke$arity$1 ? set_tab.cljs$core$IFn$_invoke$arity$1(G__52075) : set_tab.call(null,G__52075));
});})(vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054))
,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"state","state",-1988618099)),new cljs.core.Keyword(null,"title","title",636505583),"State"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054){
return (function (){
var G__52076 = cljs.core.not(show_details_QMARK_);
return (set_show_details.cljs$core$IFn$_invoke$arity$1 ? set_show_details.cljs$core$IFn$_invoke$arity$1(G__52076) : set_show_details.call(null,G__52076));
});})(vec__52059,idx1,idx2,path,vec__52062,test,_,vec__52065,show_details_QMARK_,set_show_details,vec__52068,tab,set_tab,props,map__52057,map__52057__$1,test_results,$52054))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"userSelect","userSelect",-391760051),"none"], null)], null),(cljs.core.truth_(show_details_QMARK_)?"Hide":"Show")], null)], null),(cljs.core.truth_(show_details_QMARK_)?(function (){var G__52077 = tab;
var G__52077__$1 = (((G__52077 instanceof cljs.core.Keyword))?G__52077.fqn:null);
switch (G__52077__$1) {
case "dom":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.dom,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(test)], null)], null)], null);

break;
case "hiccup":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(test)], null)], null)], null);

break;
case "diff":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.diff,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(test)], null)], null)], null);

break;
case "effects":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.effects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(test)], null)], null)], null);

break;
case "state":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(test)], null)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52077__$1)].join('')));

}
})():null)], null);
})());
});
;})(map__52057,map__52057__$1,test_results,$52054))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"test-assertion",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.mutation = cljs.core.with_meta((function rehook$test$browser$mutation52079(ctx__39179__auto__,$__39180__auto__){
var map__52081 = ctx__39179__auto__;
var map__52081__$1 = (((((!((map__52081 == null))))?(((((map__52081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52081):map__52081);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52081__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $52078 = $__39180__auto__;
return ((function (map__52081,map__52081__$1,test_results,$52078){
return (function rehook$test$browser$mutation52079_$_mutation52080(props__39181__auto__){
var props = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$52078,(function (){var vec__52083 = (props["path"]);
var idx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52083,(0),null);
var idx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52083,(1),null);
var path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx1,new cljs.core.Keyword(null,"tests","tests",-1041085625),idx2], null);
var vec__52086 = rehook.core.use_atom_path(test_results,path);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52086,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52086,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"alignItems","alignItems",410331199)],["wrap","#444","3px","20px","space-between","10px","flex","1px solid #ccc","#FCFCFC","center"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"left"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.material_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"changes"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"1000"], null)], null),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(test),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.clojure_highlight,cljs.core.PersistentArrayMap.EMPTY,rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(test),(80))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #ccc",new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ccc",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"24px",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"userSelect","userSelect",-391760051),"none",new cljs.core.Keyword(null,"width","width",-384071477),"70px"], null)], null),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(test),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.material_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),"trending_flat"], null)], null),(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(test) + (1))], null)], null);
})());
});
;})(map__52081,map__52081__$1,test_results,$52078))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"mutation",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.summary = cljs.core.with_meta((function rehook$test$browser$summary52090(ctx__39179__auto__,$__39180__auto__){
var map__52092 = ctx__39179__auto__;
var map__52092__$1 = (((((!((map__52092 == null))))?(((((map__52092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52092):map__52092);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52092__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $52089 = $__39180__auto__;
return ((function (map__52092,map__52092__$1,test_results,$52089){
return (function rehook$test$browser$summary52090_$_summary52091(props__39181__auto__){
var props = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$52089,(function (){var index = (props["index"]);
var vec__52094 = rehook.core.use_atom_path(test_results,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null));
var map__52097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52094,(0),null);
var map__52097__$1 = (((((!((map__52097 == null))))?(((((map__52097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52097):map__52097);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52097__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52097__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52097__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52094,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (index,vec__52094,map__52097,map__52097__$1,name,ns,tests,_,props,map__52092,map__52092__$1,test_results,$52089){
return (function (idx,test){
var G__52099 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(test);
var G__52099__$1 = (((G__52099 instanceof cljs.core.Keyword))?G__52099.fqn:null);
switch (G__52099__$1) {
case "assertion":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.test_assertion,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,idx], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"/","assertion-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)], null);

break;
case "mutation":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.mutation,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,idx], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"/","mutation-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52099__$1)].join('')));

}
});})(index,vec__52094,map__52097,map__52097__$1,name,ns,tests,_,props,map__52092,map__52092__$1,test_results,$52089))
,tests));
})());
});
;})(map__52092,map__52092__$1,test_results,$52089))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"summary",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.testcard = cljs.core.with_meta((function rehook$test$browser$testcard52102(ctx__39179__auto__,$__39180__auto__){
var map__52104 = ctx__39179__auto__;
var map__52104__$1 = (((((!((map__52104 == null))))?(((((map__52104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52104):map__52104);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52104__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $52101 = $__39180__auto__;
return ((function (map__52104,map__52104__$1,test_results,$52101){
return (function rehook$test$browser$testcard52102_$_testcard52103(props__39181__auto__){
var props = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$52101,(function (){var index = (props["index"]);
var vec__52106 = rehook.core.use_atom_path(test_results,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [index], null));
var map__52109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52106,(0),null);
var map__52109__$1 = (((((!((map__52109 == null))))?(((((map__52109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52109):map__52109);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,new cljs.core.Keyword(null,"line","line",212345235));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52106,(1),null);
var test_str = rehook.test.browser.zpr_str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(form));
var assertions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (index,vec__52106,map__52109,map__52109__$1,name,form,ns,line,tests,_,test_str,props,map__52104,map__52104__$1,test_results,$52101){
return (function (p1__52100_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__52100_SHARP_));
});})(index,vec__52106,map__52109,map__52109__$1,name,form,ns,line,tests,_,test_str,props,map__52104,map__52104__$1,test_results,$52101))
,tests);
var pass_QMARK_ = cljs.core.every_QMARK_(new cljs.core.Keyword(null,"pass","pass",1574159993),assertions);
var vec__52110 = rehook.core.use_state(true);
var show_code_snippet_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52110,(0),null);
var set_show_code_snippet = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52110,(1),null);
var vec__52113 = rehook.core.use_state((!(pass_QMARK_)));
var expanded_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52113,(0),null);
var set_expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52113,(1),null);
var total_assertions = cljs.core.count(assertions);
var title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_assertions)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__52118 = total_assertions;
switch (G__52118) {
case (1):
return "assertion";

break;
default:
return "assertions";

}
})()),")"].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"3px",new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),"15px solid",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),((pass_QMARK_)?"#77DD77":"#B74747"),new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"15px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"15px",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"flexGrow","flexGrow",1882590718),"1"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (index,vec__52106,map__52109,map__52109__$1,name,form,ns,line,tests,_,test_str,assertions,pass_QMARK_,vec__52110,show_code_snippet_QMARK_,set_show_code_snippet,vec__52113,expanded_QMARK_,set_expanded,total_assertions,title,props,map__52104,map__52104__$1,test_results,$52101){
return (function (){
var G__52119 = cljs.core.not(expanded_QMARK_);
return (set_expanded.cljs$core$IFn$_invoke$arity$1 ? set_expanded.cljs$core$IFn$_invoke$arity$1(G__52119) : set_expanded.call(null,G__52119));
});})(index,vec__52106,map__52109,map__52109__$1,name,form,ns,line,tests,_,test_str,assertions,pass_QMARK_,vec__52110,show_code_snippet_QMARK_,set_show_code_snippet,vec__52113,expanded_QMARK_,set_expanded,total_assertions,title,props,map__52104,map__52104__$1,test_results,$52101))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#222"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"5px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.material_icon,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),(cljs.core.truth_(expanded_QMARK_)?"keyboard_arrow_down":"chevron_right")], null)], null)], null),title], null)], null),(cljs.core.truth_(expanded_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (index,vec__52106,map__52109,map__52109__$1,name,form,ns,line,tests,_,test_str,assertions,pass_QMARK_,vec__52110,show_code_snippet_QMARK_,set_show_code_snippet,vec__52113,expanded_QMARK_,set_expanded,total_assertions,title,props,map__52104,map__52104__$1,test_results,$52101){
return (function (){
var G__52120 = cljs.core.not(show_code_snippet_QMARK_);
return (set_show_code_snippet.cljs$core$IFn$_invoke$arity$1 ? set_show_code_snippet.cljs$core$IFn$_invoke$arity$1(G__52120) : set_show_code_snippet.call(null,G__52120));
});})(index,vec__52106,map__52109,map__52109__$1,name,form,ns,line,tests,_,test_str,assertions,pass_QMARK_,vec__52110,show_code_snippet_QMARK_,set_show_code_snippet,vec__52113,expanded_QMARK_,set_expanded,total_assertions,title,props,map__52104,map__52104__$1,test_results,$52101))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"userSelect","userSelect",-391760051),"none"], null)], null),(cljs.core.truth_(show_code_snippet_QMARK_)?"Hide test form":"Show test form")], null),(cljs.core.truth_(show_code_snippet_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.clojure_highlight,cljs.core.PersistentArrayMap.EMPTY,test_str], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.summary,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null)], null)], null):null)], null);
})());
});
;})(map__52104,map__52104__$1,test_results,$52101))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"testcard",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.run_test_BANG_ = (function rehook$test$browser$run_test_BANG_(p__52121){
var map__52122 = p__52121;
var map__52122__$1 = (((((!((map__52122 == null))))?(((((map__52122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52122):map__52122);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"test","test",577538877));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((test.cljs$core$IFn$_invoke$arity$0 ? test.cljs$core$IFn$_invoke$arity$0() : test.call(null)),new cljs.core.Keyword(null,"column","column",2078222095),column,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column,new cljs.core.Keyword(null,"ns","ns",441598760),ns], 0));
});
rehook.test.browser.test_stats = (function rehook$test$browser$test_stats(test_results){
var tests = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_results], 0));
var assertions = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (tests){
return (function (p1__52124_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__52124_SHARP_));
});})(tests))
,tests);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"total-tests","total-tests",-219861496),cljs.core.count(test_results),new cljs.core.Keyword(null,"total-assertions","total-assertions",-502921628),cljs.core.count(assertions),new cljs.core.Keyword(null,"pass","pass",1574159993),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pass","pass",1574159993),assertions)),new cljs.core.Keyword(null,"fail","fail",1706214930),cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,new cljs.core.Keyword(null,"pass","pass",1574159993)),assertions))], null);
});
rehook.test.browser.test_outcome_str = (function rehook$test$browser$test_outcome_str(p__52125){
var map__52126 = p__52125;
var map__52126__$1 = (((((!((map__52126 == null))))?(((((map__52126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52126):map__52126);
var total_tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126__$1,new cljs.core.Keyword(null,"total-tests","total-tests",-219861496));
var total_assertions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126__$1,new cljs.core.Keyword(null,"total-assertions","total-assertions",-502921628));
var fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52126__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var test_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total_tests))?"test":"tests");
var assertion_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total_assertions))?"assertion":"assertions");
var fail_str = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),fail))?"failure":"failures");
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_tests)," ",test_str,", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_assertions)," ",assertion_str,", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fail)," ",fail_str,"."].join('');
});
rehook.test.browser.report_summary = cljs.core.with_meta((function rehook$test$browser$report_summary52129(ctx__39179__auto__,$__39180__auto__){
var map__52131 = ctx__39179__auto__;
var map__52131__$1 = (((((!((map__52131 == null))))?(((((map__52131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52131):map__52131);
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52131__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $52128 = $__39180__auto__;
return ((function (map__52131,map__52131__$1,test_results,$52128){
return (function rehook$test$browser$report_summary52129_$_report_summary52130(props__39181__auto__){
var _ = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$52128,(function (){var vec__52133 = rehook.core.use_atom(test_results);
var test_results__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52133,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52133,(1),null);
var test_stats = rehook.test.browser.test_stats(test_results__$1);
var output = rehook.test.browser.test_outcome_str(test_stats);
var success_QMARK_ = (new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(test_stats) === (0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),((success_QMARK_)?"green":"red")], null)], null),output], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (vec__52133,test_results__$1,___$1,test_stats,output,success_QMARK_,_,map__52131,map__52131__$1,test_results,$52128){
return (function (i,p__52136){
var map__52137 = p__52136;
var map__52137__$1 = (((((!((map__52137 == null))))?(((((map__52137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52137):map__52137);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52137__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52137__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"30px"], null),new cljs.core.Keyword(null,"key","key",-1516042587),["test-summary-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.testcard,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["test-summary-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"/testcard"].join(''),new cljs.core.Keyword(null,"index","index",-1531685915),i], null)], null)], null);
});})(vec__52133,test_results__$1,___$1,test_stats,output,success_QMARK_,_,map__52131,map__52131__$1,test_results,$52128))
,test_results__$1));
})());
});
;})(map__52131,map__52131__$1,test_results,$52128))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"report-summary",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.rehook_summary = cljs.core.with_meta((function rehook$test$browser$rehook_summary52141(ctx__39179__auto__,$__39180__auto__){
var map__52143 = ctx__39179__auto__;
var map__52143__$1 = (((((!((map__52143 == null))))?(((((map__52143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52143):map__52143);
var registry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143__$1,new cljs.core.Keyword(null,"registry","registry",1021159018));
var test_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143__$1,new cljs.core.Keyword(null,"test-results","test-results",575566942));
var $52140 = $__39180__auto__;
return ((function (map__52143,map__52143__$1,registry,test_results,$52140){
return (function rehook$test$browser$rehook_summary52141_$_rehook_summary52142(props__39181__auto__){
var _ = props__39181__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$52140,(function (){var vec__52145 = rehook.core.use_atom(registry);
var registry__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52145,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52145,(1),null);
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$1(((function (vec__52145,registry__$1,___$1,_,map__52143,map__52143__$1,registry,test_results,$52140){
return (function (){
console.log("%c running rehook.test report ~~~ \u266A\u250F(\u30FBo\uFF65)\u251B\u266A","background: #222; color: #bada55");

cljs.core.reset_BANG_(test_results,cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (vec__52145,registry__$1,___$1,_,map__52143,map__52143__$1,registry,test_results,$52140){
return (function (p1__52139_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(p1__52139_SHARP_)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__52139_SHARP_))].join('');
});})(vec__52145,registry__$1,___$1,_,map__52143,map__52143__$1,registry,test_results,$52140))
,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__52145,registry__$1,___$1,_,map__52143,map__52143__$1,registry,test_results,$52140){
return (function (p__52148){
var vec__52149 = p__52148;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52149,(0),null);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52149,(1),null);
return rehook.test.browser.run_test_BANG_(cljs.core.meta(var$));
});})(vec__52145,registry__$1,___$1,_,map__52143,map__52143__$1,registry,test_results,$52140))
,registry__$1))));

return cljs.core.constantly(null);
});})(vec__52145,registry__$1,___$1,_,map__52143,map__52143__$1,registry,test_results,$52140))
);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"calc(100% - 128px)",new cljs.core.Keyword(null,"maxMidth","maxMidth",495506757),"680px",new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"64px",new cljs.core.Keyword(null,"marginRight","marginRight",457313535),"64px",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"'Open Sans', sans-serif",new cljs.core.Keyword(null,"lineHeight","lineHeight",-1729831016),"1.5",new cljs.core.Keyword(null,"color","color",1011675173),"#24292e"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/wavejumper/rehook",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"rehook-test"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.test.browser.report_summary], null)], null);
})());
});
;})(map__52143,map__52143__$1,registry,test_results,$52140))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"rehook-summary",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.test.browser.report = (function rehook$test$browser$report(){
var G__52152 = rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"registry","registry",1021159018),rehook.test.registry,new cljs.core.Keyword(null,"test-results","test-results",575566942),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null),cljs.core.identity,cljs.core.clj__GT_js,rehook.test.browser.rehook_summary);
var G__52153 = document.getElementById(rehook.test.browser.target);
return module$node_modules$react_dom$index.render(G__52152,G__52153);
});

//# sourceMappingURL=rehook.test.browser.js.map

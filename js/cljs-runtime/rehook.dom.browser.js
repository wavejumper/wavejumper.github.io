goog.provide('rehook.dom.browser');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('rehook.util');
rehook.dom.browser.handle_type = (function rehook$dom$browser$handle_type(e,ctx,$){
if((e instanceof cljs.core.Keyword)){
return cljs.core.name(e);
} else {
if(rehook.util.rehook_component_QMARK_(e)){
return (e.cljs$core$IFn$_invoke$arity$2 ? e.cljs$core$IFn$_invoke$arity$2(ctx,$) : e.call(null,ctx,$));
} else {
if(cljs.core.sequential_QMARK_(e)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(module$node_modules$react$index.Fragment,e);
} else {
return e;

}
}
}
});
rehook.dom.browser.bootstrap = (function rehook$dom$browser$bootstrap(var_args){
var G__37714 = arguments.length;
switch (G__37714) {
case 4:
return rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37738 = arguments.length;
var i__4731__auto___37739 = (0);
while(true){
if((i__4731__auto___37739 < len__4730__auto___37738)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37739]));

var G__37740 = (i__4731__auto___37739 + (1));
i__4731__auto___37739 = G__37740;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((5)),(0),null));
return rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4752__auto__);

}
});

rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$4 = (function (ctx,ctx_f,props_f,e){
var ctx__$1 = (ctx_f.cljs$core$IFn$_invoke$arity$2 ? ctx_f.cljs$core$IFn$_invoke$arity$2(ctx,e) : ctx_f.call(null,ctx,e));
var temp__5735__auto__ = rehook.dom.browser.handle_type(e,ctx__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(rehook.dom.browser.bootstrap,ctx__$1,ctx_f,props_f));
if(cljs.core.truth_(temp__5735__auto__)){
var elem = temp__5735__auto__;
return module$node_modules$react$index.createElement(elem);
} else {
return null;
}
});

rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$5 = (function (ctx,ctx_f,props_f,e,args){
var ctx__$1 = (ctx_f.cljs$core$IFn$_invoke$arity$2 ? ctx_f.cljs$core$IFn$_invoke$arity$2(ctx,e) : ctx_f.call(null,ctx,e));
var temp__5735__auto__ = rehook.dom.browser.handle_type(e,ctx__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(rehook.dom.browser.bootstrap,ctx__$1,ctx_f,props_f));
if(cljs.core.truth_(temp__5735__auto__)){
var elem = temp__5735__auto__;
var G__37716 = elem;
var G__37717 = (function (){var G__37718 = ((cljs.core.contains_QMARK_(args,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)):args);
return (props_f.cljs$core$IFn$_invoke$arity$1 ? props_f.cljs$core$IFn$_invoke$arity$1(G__37718) : props_f.call(null,G__37718));
})();
return module$node_modules$react$index.createElement(G__37716,G__37717);
} else {
return null;
}
});

rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ctx_f,props_f,e,args,children){
var ctx__$1 = (ctx_f.cljs$core$IFn$_invoke$arity$2 ? ctx_f.cljs$core$IFn$_invoke$arity$2(ctx,e) : ctx_f.call(null,ctx,e));
var temp__5735__auto__ = rehook.dom.browser.handle_type(e,ctx__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(rehook.dom.browser.bootstrap,ctx__$1,ctx_f,props_f));
if(cljs.core.truth_(temp__5735__auto__)){
var elem = temp__5735__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(module$node_modules$react$index.createElement,elem,(function (){var G__37720 = ((cljs.core.contains_QMARK_(args,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.Keyword("rehook","id","rehook/id",-166238114)):args);
return (props_f.cljs$core$IFn$_invoke$arity$1 ? props_f.cljs$core$IFn$_invoke$arity$1(G__37720) : props_f.call(null,G__37720));
})(),children);
} else {
return null;
}
});

/** @this {Function} */
rehook.dom.browser.bootstrap.cljs$lang$applyTo = (function (seq37704){
var G__37708 = cljs.core.first(seq37704);
var seq37704__$1 = cljs.core.next(seq37704);
var G__37709 = cljs.core.first(seq37704__$1);
var seq37704__$2 = cljs.core.next(seq37704__$1);
var G__37710 = cljs.core.first(seq37704__$2);
var seq37704__$3 = cljs.core.next(seq37704__$2);
var G__37711 = cljs.core.first(seq37704__$3);
var seq37704__$4 = cljs.core.next(seq37704__$3);
var G__37712 = cljs.core.first(seq37704__$4);
var seq37704__$5 = cljs.core.next(seq37704__$4);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37708,G__37709,G__37710,G__37711,G__37712,seq37704__$5);
});

rehook.dom.browser.bootstrap.cljs$lang$maxFixedArity = (5);


//# sourceMappingURL=rehook.dom.browser.js.map

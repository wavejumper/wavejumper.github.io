goog.provide('rehook.util');
goog.require('cljs.core');
rehook.util.rehook_component_QMARK_ = (function rehook$util$rehook_component_QMARK_(e){
return new cljs.core.Keyword("rehook","component","rehook/component",355859388).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(e)) === true;
});
rehook.util.display_name = (function rehook$util$display_name(e){
if((e instanceof cljs.core.Keyword)){
return cljs.core.name(e);
} else {
if(rehook.util.rehook_component_QMARK_(e)){
return new cljs.core.Keyword("rehook","name","rehook/name",639402515).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(e));
} else {
return (e["displayName"]);

}
}
});

//# sourceMappingURL=rehook.util.js.map

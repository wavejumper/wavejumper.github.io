goog.provide('rehook.core');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
rehook.core.use_state = (function rehook$core$use_state(initial_value){
return module$node_modules$react$index.useState(initial_value);
});
rehook.core.use_effect = (function rehook$core$use_effect(var_args){
var G__43420 = arguments.length;
switch (G__43420) {
case 1:
return rehook.core.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rehook.core.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useEffect(f);
});

rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
var G__43421 = f;
var G__43422 = cljs.core.to_array(deps);
return module$node_modules$react$index.useEffect(G__43421,G__43422);
});

rehook.core.use_effect.cljs$lang$maxFixedArity = 2;

rehook.core.use_atom_fn = (function rehook$core$use_atom_fn(a,getter_fn,setter_fn){
var vec__43424 = rehook.core.use_state((function (){var G__43427 = cljs.core.deref(a);
return (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(G__43427) : getter_fn.call(null,G__43427));
})());
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43424,(0),null);
var set_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43424,(1),null);
rehook.core.use_effect.cljs$core$IFn$_invoke$arity$2(((function (vec__43424,val,set_val){
return (function (){
var id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
cljs.core.add_watch(a,id,((function (id,vec__43424,val,set_val){
return (function (_,___$1,___$2,next_state){
var G__43428 = (getter_fn.cljs$core$IFn$_invoke$arity$1 ? getter_fn.cljs$core$IFn$_invoke$arity$1(next_state) : getter_fn.call(null,next_state));
return (set_val.cljs$core$IFn$_invoke$arity$1 ? set_val.cljs$core$IFn$_invoke$arity$1(G__43428) : set_val.call(null,G__43428));
});})(id,vec__43424,val,set_val))
);

return ((function (id,vec__43424,val,set_val){
return (function (){
return cljs.core.remove_watch(a,id);
});
;})(id,vec__43424,val,set_val))
});})(vec__43424,val,set_val))
,cljs.core.PersistentVector.EMPTY);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [val,((function (vec__43424,val,set_val){
return (function (p1__43423_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(a,setter_fn,p1__43423_SHARP_);
});})(vec__43424,val,set_val))
], null);
});
/**
 * (use-atom my-atom)
 */
rehook.core.use_atom = (function rehook$core$use_atom(a){
return rehook.core.use_atom_fn(a,cljs.core.identity,(function (_,v){
return v;
}));
});
/**
 * (use-atom my-atom [:path :to :data])
 */
rehook.core.use_atom_path = (function rehook$core$use_atom_path(a,path){
return rehook.core.use_atom_fn(a,(function (p1__43429_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__43429_SHARP_,path);
}),(function (p1__43437_SHARP_,p2__43438_SHARP_){
return cljs.core.assoc_in(p1__43437_SHARP_,path,p2__43438_SHARP_);
}));
});

//# sourceMappingURL=rehook.core.js.map

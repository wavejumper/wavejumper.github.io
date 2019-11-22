goog.provide('rehook.test');
goog.require('cljs.core');
goog.require('rehook.core');
goog.require('rehook.util');
goog.require('cljs.test');
rehook.test.ctx_transformer = (function rehook$test$ctx_transformer(ctx,elem){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("rehook.test","id","rehook.test/id",204880042),(function (p1__51747_SHARP_){
if(cljs.core.truth_(p1__51747_SHARP_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__51747_SHARP_,rehook.util.display_name(elem));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rehook.util.display_name(elem)], null);
}
}));
});
rehook.test.use_state = (function rehook$test$use_state(scene_state,local_state,next_scene,component_id,state_id,initial_value){
var curr_state_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_id,cljs.core.inc);
var current_value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(local_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_id,curr_state_id], null),initial_value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scene_state,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_id,curr_state_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-value","current-value",2066017989),current_value,new cljs.core.Keyword(null,"initial-value","initial-value",470619381),initial_value], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_value,((function (curr_state_id,current_value){
return (function (p1__51748_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_value,p1__51748_SHARP_)){
return null;
} else {
var G__51749 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(local_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_id,curr_state_id], null),p1__51748_SHARP_);
return (next_scene.cljs$core$IFn$_invoke$arity$1 ? next_scene.cljs$core$IFn$_invoke$arity$1(G__51749) : next_scene.call(null,G__51749));
}
});})(curr_state_id,current_value))
], null);
});
rehook.test.use_effect = (function rehook$test$use_effect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51820 = arguments.length;
var i__4731__auto___51821 = (0);
while(true){
if((i__4731__auto___51821 < len__4730__auto___51820)){
args__4736__auto__.push((arguments[i__4731__auto___51821]));

var G__51822 = (i__4731__auto___51821 + (1));
i__4731__auto___51821 = G__51822;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return rehook.test.use_effect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

rehook.test.use_effect.cljs$core$IFn$_invoke$arity$variadic = (function (effects,component_id,effect_id,f,p__51755){
var vec__51756 = p__51755;
var deps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51756,(0),null);
var curr_effect_id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(effect_id,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(effects,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_id,curr_effect_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps","deps",1883360319),deps,new cljs.core.Keyword(null,"f","f",-1597136552),f], null));
});

rehook.test.use_effect.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
rehook.test.use_effect.cljs$lang$applyTo = (function (seq51750){
var G__51751 = cljs.core.first(seq51750);
var seq51750__$1 = cljs.core.next(seq51750);
var G__51752 = cljs.core.first(seq51750__$1);
var seq51750__$2 = cljs.core.next(seq51750__$1);
var G__51753 = cljs.core.first(seq51750__$2);
var seq51750__$3 = cljs.core.next(seq51750__$2);
var G__51754 = cljs.core.first(seq51750__$3);
var seq51750__$4 = cljs.core.next(seq51750__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51751,G__51752,G__51753,G__51754,seq51750__$4);
});

rehook.test.handle_type = (function rehook$test$handle_type(next_elements,e,ctx,$,args,raw_args,children){
var elem = (((e instanceof cljs.core.Keyword))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,args], null),children):((cljs.core.vector_QMARK_(e))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318)], null),e):((rehook.util.rehook_component_QMARK_(e))?(function (){var fexpr__51759 = (e.cljs$core$IFn$_invoke$arity$2 ? e.cljs$core$IFn$_invoke$arity$2(ctx,$) : e.call(null,ctx,$));
return (fexpr__51759.cljs$core$IFn$_invoke$arity$1 ? fexpr__51759.cljs$core$IFn$_invoke$arity$1(args) : fexpr__51759.call(null,args));
})():((cljs.core.fn_QMARK_(e))?(e.cljs$core$IFn$_invoke$arity$1 ? e.cljs$core$IFn$_invoke$arity$1(args) : e.call(null,args)):null))));
var temp__5733__auto__ = new cljs.core.Keyword("rehook","id","rehook/id",-166238114).cljs$core$IFn$_invoke$arity$1(raw_args);
if(cljs.core.truth_(temp__5733__auto__)){
var id = temp__5733__auto__;
var elem_meta = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e","e",1381269198),e,new cljs.core.Keyword(null,"args","args",1315556576),raw_args,new cljs.core.Keyword(null,"evaled","evaled",-1682199276),elem,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(next_elements,cljs.core.assoc,id,elem_meta);

return elem;
} else {
return elem;
}
});
rehook.test.bootstrap = (function rehook$test$bootstrap(var_args){
var G__51772 = arguments.length;
switch (G__51772) {
case 9:
return rehook.test.bootstrap.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___51824 = arguments.length;
var i__4731__auto___51825 = (0);
while(true){
if((i__4731__auto___51825 < len__4730__auto___51824)){
args_arr__4751__auto__.push((arguments[i__4731__auto___51825]));

var G__51826 = (i__4731__auto___51825 + (1));
i__4731__auto___51825 = G__51826;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((10)),(0),null));
return rehook.test.bootstrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),argseq__4752__auto__);

}
});

rehook.test.bootstrap.cljs$core$IFn$_invoke$arity$9 = (function (next_elements,next_scene,scene_state,effects,local_state,ctx,ctx_f,props_f,e){
return rehook.test.bootstrap(next_elements,next_scene,scene_state,effects,local_state,ctx,ctx_f,props_f,e,cljs.core.PersistentArrayMap.EMPTY);
});

rehook.test.bootstrap.cljs$core$IFn$_invoke$arity$variadic = (function (next_elements,next_scene,scene_state,effects,local_state,ctx,ctx_f,props_f,e,args,children){
var ctx__$1 = rehook.test.ctx_transformer((ctx_f.cljs$core$IFn$_invoke$arity$2 ? ctx_f.cljs$core$IFn$_invoke$arity$2(ctx,e) : ctx_f.call(null,ctx,e)),e);
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(args,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("rehook.test","id","rehook.test/id",204880042).cljs$core$IFn$_invoke$arity$1(ctx__$1));
var state_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var effect_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var use_effect_orig_val__51773 = rehook.core.use_effect;
var use_state_orig_val__51774 = rehook.core.use_state;
var use_effect_temp_val__51775 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(rehook.test.use_effect,effects,component_id,effect_id);
var use_state_temp_val__51776 = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(rehook.test.use_state,scene_state,local_state,next_scene,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_id,state_id], 0));
rehook.core.use_effect = use_effect_temp_val__51775;

rehook.core.use_state = use_state_temp_val__51776;

try{var $ = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(rehook.test.bootstrap,next_elements,next_scene,scene_state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([effects,local_state,ctx__$1,ctx_f,props_f], 0));
return rehook.test.handle_type(next_elements,e,ctx__$1,$,(props_f.cljs$core$IFn$_invoke$arity$1 ? props_f.cljs$core$IFn$_invoke$arity$1(args) : props_f.call(null,args)),args,children);
}finally {rehook.core.use_state = use_state_orig_val__51774;

rehook.core.use_effect = use_effect_orig_val__51773;
}});

/** @this {Function} */
rehook.test.bootstrap.cljs$lang$applyTo = (function (seq51761){
var G__51762 = cljs.core.first(seq51761);
var seq51761__$1 = cljs.core.next(seq51761);
var G__51763 = cljs.core.first(seq51761__$1);
var seq51761__$2 = cljs.core.next(seq51761__$1);
var G__51764 = cljs.core.first(seq51761__$2);
var seq51761__$3 = cljs.core.next(seq51761__$2);
var G__51765 = cljs.core.first(seq51761__$3);
var seq51761__$4 = cljs.core.next(seq51761__$3);
var G__51766 = cljs.core.first(seq51761__$4);
var seq51761__$5 = cljs.core.next(seq51761__$4);
var G__51767 = cljs.core.first(seq51761__$5);
var seq51761__$6 = cljs.core.next(seq51761__$5);
var G__51768 = cljs.core.first(seq51761__$6);
var seq51761__$7 = cljs.core.next(seq51761__$6);
var G__51769 = cljs.core.first(seq51761__$7);
var seq51761__$8 = cljs.core.next(seq51761__$7);
var G__51770 = cljs.core.first(seq51761__$8);
var seq51761__$9 = cljs.core.next(seq51761__$8);
var G__51771 = cljs.core.first(seq51761__$9);
var seq51761__$10 = cljs.core.next(seq51761__$9);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51762,G__51763,G__51764,G__51765,G__51766,G__51767,G__51768,G__51769,G__51770,G__51771,seq51761__$10);
});

rehook.test.bootstrap.cljs$lang$maxFixedArity = (10);

rehook.test.unmount_BANG_ = (function rehook$test$unmount_BANG_(scene){
var seq__51777 = cljs.core.seq(new cljs.core.Keyword(null,"evaled-effects","evaled-effects",1523828250).cljs$core$IFn$_invoke$arity$1(scene));
var chunk__51778 = null;
var count__51779 = (0);
var i__51780 = (0);
while(true){
if((i__51780 < count__51779)){
var vec__51787 = chunk__51778.cljs$core$IIndexed$_nth$arity$2(null,i__51780);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51787,(0),null);
var umount_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51787,(1),null);
(umount_f.cljs$core$IFn$_invoke$arity$0 ? umount_f.cljs$core$IFn$_invoke$arity$0() : umount_f.call(null));


var G__51835 = seq__51777;
var G__51836 = chunk__51778;
var G__51837 = count__51779;
var G__51838 = (i__51780 + (1));
seq__51777 = G__51835;
chunk__51778 = G__51836;
count__51779 = G__51837;
i__51780 = G__51838;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51777);
if(temp__5735__auto__){
var seq__51777__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51777__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51777__$1);
var G__51839 = cljs.core.chunk_rest(seq__51777__$1);
var G__51840 = c__4550__auto__;
var G__51841 = cljs.core.count(c__4550__auto__);
var G__51842 = (0);
seq__51777 = G__51839;
chunk__51778 = G__51840;
count__51779 = G__51841;
i__51780 = G__51842;
continue;
} else {
var vec__51790 = cljs.core.first(seq__51777__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51790,(0),null);
var umount_f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51790,(1),null);
(umount_f.cljs$core$IFn$_invoke$arity$0 ? umount_f.cljs$core$IFn$_invoke$arity$0() : umount_f.call(null));


var G__51843 = cljs.core.next(seq__51777__$1);
var G__51844 = null;
var G__51845 = (0);
var G__51846 = (0);
seq__51777 = G__51843;
chunk__51778 = G__51844;
count__51779 = G__51845;
i__51780 = G__51846;
continue;
}
} else {
return null;
}
}
break;
}
});
rehook.test.eval_effect_QMARK_ = (function rehook$test$eval_effect_QMARK_(ticks,prev_deps,deps){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),ticks)){
return true;
} else {
if(cljs.core.empty_QMARK_(deps)){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_deps,deps)){
return true;
} else {
return false;

}
}
}
});
rehook.test.mount_scene = (function rehook$test$mount_scene(prev_scene,scene){
var curr_tick = new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(prev_scene);
var curr_effects = (function (){var G__51793 = scene;
var G__51793__$1 = (((G__51793 == null))?null:new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(G__51793));
if((G__51793__$1 == null)){
return null;
} else {
return cljs.core.deref(G__51793__$1);
}
})();
var prev_effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(prev_scene);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(scene),new cljs.core.Keyword(null,"effects","effects",-282369292),curr_effects,new cljs.core.Keyword(null,"ticks","ticks",-406190313),(curr_tick + (1)),new cljs.core.Keyword(null,"elements","elements",657646735),(function (){var G__51794 = scene;
var G__51794__$1 = (((G__51794 == null))?null:new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__51794));
if((G__51794__$1 == null)){
return null;
} else {
return cljs.core.deref(G__51794__$1);
}
})(),new cljs.core.Keyword(null,"evaled-effects","evaled-effects",1523828250),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (curr_tick,curr_effects,prev_effects){
return (function (p__51795){
var vec__51796 = p__51795;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51796,(0),null);
var map__51799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51796,(1),null);
var map__51799__$1 = (((((!((map__51799 == null))))?(((((map__51799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51799):map__51799);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51799__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
});})(curr_tick,curr_effects,prev_effects))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (curr_tick,curr_effects,prev_effects){
return (function (p__51801){
var vec__51802 = p__51801;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51802,(0),null);
var map__51805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51802,(1),null);
var map__51805__$1 = (((((!((map__51805 == null))))?(((((map__51805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51805):map__51805);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51805__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var prev_deps = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(prev_effects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"deps","deps",1883360319)], null));
return rehook.test.eval_effect_QMARK_(curr_tick,prev_deps,deps);
});})(curr_tick,curr_effects,prev_effects))
,curr_effects)))], null);
});
rehook.test.init = (function rehook$test$init(ctx,ctx_f,props_f,e){
var scenes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeline","timeline",192903161),cljs.core.PersistentVector.EMPTY], null));
var next_scene = ((function (scenes){
return (function rehook$test$init_$_next_scene(next_local_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(scenes,cljs.core.update,new cljs.core.Keyword(null,"timeline","timeline",192903161),((function (scenes){
return (function (timeline){
var next_effects = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var next_elements = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var scene_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var render = rehook.test.bootstrap.cljs$core$IFn$_invoke$arity$9(next_elements,rehook$test$init_$_next_scene,scene_state,next_effects,next_local_state,ctx,ctx_f,props_f,e);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(timeline,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions,new cljs.core.Keyword(null,"render","render",-1408033454),render,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.count(timeline),new cljs.core.Keyword(null,"dom","dom",-1236537922),((function (next_effects,actions,next_elements,scene_state,render,scenes){
return (function (){
return render;
});})(next_effects,actions,next_elements,scene_state,render,scenes))
,new cljs.core.Keyword(null,"effects","effects",-282369292),next_effects,new cljs.core.Keyword(null,"state","state",-1988618099),scene_state,new cljs.core.Keyword(null,"elements","elements",657646735),next_elements], null));
});})(scenes))
);
});})(scenes))
;
next_scene(cljs.core.PersistentArrayMap.EMPTY);

return scenes;
});
rehook.test.mount_BANG_ = (function rehook$test$mount_BANG_(var_args){
var G__51808 = arguments.length;
switch (G__51808) {
case 1:
return rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (scenes){
return rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$2(scenes,null);
});

rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (scenes,scene){
var map__51809 = cljs.core.deref(scenes);
var map__51809__$1 = (((((!((map__51809 == null))))?(((((map__51809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51809):map__51809);
var timeline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809__$1,new cljs.core.Keyword(null,"timeline","timeline",192903161));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__51809,map__51809__$1,timeline){
return (function (prev_scene,scene__$1){
rehook.test.unmount_BANG_(prev_scene);

return rehook.test.mount_scene(prev_scene,scene__$1);
});})(map__51809,map__51809__$1,timeline))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ticks","ticks",-406190313),(0)], null),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(scene,new cljs.core.Keyword(null,"tick","tick",-835886976),(0)),timeline));
});

rehook.test.mount_BANG_.cljs$lang$maxFixedArity = 2;

rehook.test._STAR_report_STAR_ = null;
rehook.test._STAR_scene_STAR_ = null;
if((typeof rehook !== 'undefined') && (typeof rehook.test !== 'undefined') && (typeof rehook.test.registry !== 'undefined')){
} else {
rehook.test.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
rehook.test.clear_registry_BANG_ = (function rehook$test$clear_registry_BANG_(){
return cljs.core.reset_BANG_(rehook.test.registry,cljs.core.PersistentArrayMap.EMPTY);
});
rehook.test.children = (function rehook$test$children(var_args){
var G__51812 = arguments.length;
switch (G__51812) {
case 1:
return rehook.test.children.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rehook.test.children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rehook.test.children.cljs$core$IFn$_invoke$arity$1 = (function (id){
if(cljs.core.truth_(rehook.test._STAR_scene_STAR_)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("rehook.test/children called outside of test",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}

return rehook.test.children.cljs$core$IFn$_invoke$arity$2(rehook.test._STAR_scene_STAR_,id);
});

rehook.test.children.cljs$core$IFn$_invoke$arity$2 = (function (scene,id){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1((function (){var G__51813 = new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(scene);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__51813) : id.call(null,G__51813));
})());
});

rehook.test.children.cljs$lang$maxFixedArity = 2;

rehook.test.get_prop = (function rehook$test$get_prop(var_args){
var G__51815 = arguments.length;
switch (G__51815) {
case 2:
return rehook.test.get_prop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rehook.test.get_prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rehook.test.get_prop.cljs$core$IFn$_invoke$arity$2 = (function (id,k){
if(cljs.core.truth_(rehook.test._STAR_scene_STAR_)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("rehook.test/get-prop called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"k","k",-2146297393),k], null));
}

return rehook.test.get_prop.cljs$core$IFn$_invoke$arity$3(rehook.test._STAR_scene_STAR_,id,k);
});

rehook.test.get_prop.cljs$core$IFn$_invoke$arity$3 = (function (scene,id,k){
var G__51816 = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1((function (){var G__51817 = new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(scene);
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(G__51817) : id.call(null,G__51817));
})());
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__51816) : k.call(null,G__51816));
});

rehook.test.get_prop.cljs$lang$maxFixedArity = 3;

rehook.test.invoke_prop = (function rehook$test$invoke_prop(var_args){
var G__51819 = arguments.length;
switch (G__51819) {
case 3:
return rehook.test.invoke_prop.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rehook.test.invoke_prop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rehook.test.invoke_prop.cljs$core$IFn$_invoke$arity$3 = (function (id,k,args){
if(cljs.core.truth_(rehook.test._STAR_scene_STAR_)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("rehook.test/get-prop called outside of test",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"k","k",-2146297393),k,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

return rehook.test.invoke_prop.cljs$core$IFn$_invoke$arity$4(rehook.test._STAR_scene_STAR_,id,k,args);
});

rehook.test.invoke_prop.cljs$core$IFn$_invoke$arity$4 = (function (scene,id,k,args){
var temp__5733__auto__ = rehook.test.get_prop.cljs$core$IFn$_invoke$arity$3(scene,id,k);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return console.warn("No fn found for prop",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
}
});

rehook.test.invoke_prop.cljs$lang$maxFixedArity = 4;

rehook.test.main = (function rehook$test$main(){
return console.log("rehook.test ~~~ \u266A\u250F(\u30FBo\uFF65)\u251B\u266A");
});

//# sourceMappingURL=rehook.test.js.map

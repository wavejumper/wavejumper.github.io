goog.provide('rehook.dom');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl(new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"symbol?","symbol?",180148984),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"map?","map?",873867235),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol?","symbol?",180148984),new cljs.core.Keyword(null,"map?","map?",873867235)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.map_QMARK_], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("rehook.dom","args","rehook.dom/args",-2139089366),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"two-arity","two-arity",599354659),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719)),new cljs.core.Keyword(null,"three-arity","three-arity",1268548520),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null))),cljs.spec.alpha.or_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"two-arity","two-arity",599354659),new cljs.core.Keyword(null,"three-arity","three-arity",1268548520)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719)], null)),cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),new cljs.core.Keyword("rehook.dom","arg","rehook.dom/arg",-1384897719),cljs.core.symbol_QMARK_], null))], null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("rehook.dom","defui","rehook.dom/defui",2070928304),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("rehook.dom","args","rehook.dom/args",-2139089366),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Keyword("rehook.dom","args","rehook.dom/args",-2139089366),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword("rehook.dom","args","rehook.dom/args",-2139089366),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("rehook.dom","ui","rehook.dom/ui",-762814391),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("rehook.dom","args","rehook.dom/args",-2139089366),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"body","body",-2049205669)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rehook.dom","args","rehook.dom/args",-2139089366),cljs.spec.alpha.rep_impl(new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("rehook.dom","args","rehook.dom/args",-2139089366),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null)));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("rehook.dom","html","rehook.dom/html",-287159179),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render-fn","render-fn",398796518),new cljs.core.Keyword(null,"component","component",1555936782)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null)));
rehook.dom.eval_hiccup = (function rehook$dom$eval_hiccup(var_args){
var G__37713 = arguments.length;
switch (G__37713) {
case 2:
return rehook.dom.eval_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rehook.dom.eval_hiccup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37772 = arguments.length;
var i__4731__auto___37773 = (0);
while(true){
if((i__4731__auto___37773 < len__4730__auto___37772)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37773]));

var G__37774 = (i__4731__auto___37773 + (1));
i__4731__auto___37773 = G__37774;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return rehook.dom.eval_hiccup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

rehook.dom.eval_hiccup.cljs$core$IFn$_invoke$arity$2 = (function ($,e){
if(cljs.core.vector_QMARK_(e)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$,e);
} else {
return ($.cljs$core$IFn$_invoke$arity$1 ? $.cljs$core$IFn$_invoke$arity$1(e) : $.call(null,e));
}
});

rehook.dom.eval_hiccup.cljs$core$IFn$_invoke$arity$3 = (function ($,e,props){
return ($.cljs$core$IFn$_invoke$arity$2 ? $.cljs$core$IFn$_invoke$arity$2(e,props) : $.call(null,e,props));
});

rehook.dom.eval_hiccup.cljs$core$IFn$_invoke$arity$variadic = (function ($,e,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4($,e,props,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.eval_hiccup,$,x);
} else {
return x;
}
}),children));
});

/** @this {Function} */
rehook.dom.eval_hiccup.cljs$lang$applyTo = (function (seq37702){
var G__37705 = cljs.core.first(seq37702);
var seq37702__$1 = cljs.core.next(seq37702);
var G__37706 = cljs.core.first(seq37702__$1);
var seq37702__$2 = cljs.core.next(seq37702__$1);
var G__37707 = cljs.core.first(seq37702__$2);
var seq37702__$3 = cljs.core.next(seq37702__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37705,G__37706,G__37707,seq37702__$3);
});

rehook.dom.eval_hiccup.cljs$lang$maxFixedArity = (3);

rehook.dom.compile_hiccup = (function rehook$dom$compile_hiccup(var_args){
var G__37726 = arguments.length;
switch (G__37726) {
case 2:
return rehook.dom.compile_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rehook.dom.compile_hiccup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___37794 = arguments.length;
var i__4731__auto___37795 = (0);
while(true){
if((i__4731__auto___37795 < len__4730__auto___37794)){
args_arr__4751__auto__.push((arguments[i__4731__auto___37795]));

var G__37796 = (i__4731__auto___37795 + (1));
i__4731__auto___37795 = G__37796;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return rehook.dom.compile_hiccup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

rehook.dom.compile_hiccup.cljs$core$IFn$_invoke$arity$2 = (function ($,e){
return (new cljs.core.List(null,$,(new cljs.core.List(null,e,null,(1),null)),(2),null));
});

rehook.dom.compile_hiccup.cljs$core$IFn$_invoke$arity$3 = (function ($,e,props){
return (new cljs.core.List(null,$,(new cljs.core.List(null,e,(new cljs.core.List(null,props,null,(1),null)),(2),null)),(3),null));
});

rehook.dom.compile_hiccup.cljs$core$IFn$_invoke$arity$variadic = (function ($,e,props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.list,$,e,props,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(rehook.dom.compile_hiccup,$,x);
} else {
if((((x == null)) || (typeof x === 'string') || (typeof x === 'number'))){
return x;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("rehook.dom","eval-hiccup","rehook.dom/eval-hiccup",-69349124,null),null,(1),null)),(new cljs.core.List(null,$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0))));

}
}
}),children));
});

/** @this {Function} */
rehook.dom.compile_hiccup.cljs$lang$applyTo = (function (seq37722){
var G__37723 = cljs.core.first(seq37722);
var seq37722__$1 = cljs.core.next(seq37722);
var G__37724 = cljs.core.first(seq37722__$1);
var seq37722__$2 = cljs.core.next(seq37722__$1);
var G__37725 = cljs.core.first(seq37722__$2);
var seq37722__$3 = cljs.core.next(seq37722__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37723,G__37724,G__37725,seq37722__$3);
});

rehook.dom.compile_hiccup.cljs$lang$maxFixedArity = (3);


//# sourceMappingURL=rehook.dom.js.map

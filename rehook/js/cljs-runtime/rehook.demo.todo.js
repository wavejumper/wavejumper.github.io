goog.provide('rehook.demo.todo');
goog.require('cljs.core');
goog.require('rehook.core');
goog.require('rehook.dom');
goog.require('rehook.dom.browser');
rehook.demo.todo.add_todo = (function rehook$demo$todo$add_todo(counter,todos,text){
var id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todos,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null));
});
rehook.demo.todo.toggle = (function rehook$demo$todo$toggle(todos,id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todos,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"done","done",-889844188)], null),cljs.core.not);
});
rehook.demo.todo.save = (function rehook$demo$todo$save(todos,id,title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
rehook.demo.todo.delete$ = (function rehook$demo$todo$delete(todos,id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(todos,cljs.core.dissoc,id);
});
rehook.demo.todo.mmap = (function rehook$demo$todo$mmap(m,f,a){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,m) : f.call(null,a,m)));
});
rehook.demo.todo.complete_all = (function rehook$demo$todo$complete_all(todos,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todos,rehook.demo.todo.mmap,cljs.core.map,(function (p1__50053_SHARP_){
return cljs.core.assoc_in(p1__50053_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null),v);
}));
});
rehook.demo.todo.clear_done = (function rehook$demo$todo$clear_done(todos){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todos,rehook.demo.todo.mmap,cljs.core.remove,(function (p1__50054_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__50054_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"done","done",-889844188)], null));
}));
});
rehook.demo.todo.init = (function rehook$demo$todo$init(counter,todos){
var add_todo = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rehook.demo.todo.add_todo,counter,todos);
(add_todo.cljs$core$IFn$_invoke$arity$1 ? add_todo.cljs$core$IFn$_invoke$arity$1("Rename Cloact to Reagent") : add_todo.call(null,"Rename Cloact to Reagent"));

(add_todo.cljs$core$IFn$_invoke$arity$1 ? add_todo.cljs$core$IFn$_invoke$arity$1("Add undo demo") : add_todo.call(null,"Add undo demo"));

(add_todo.cljs$core$IFn$_invoke$arity$1 ? add_todo.cljs$core$IFn$_invoke$arity$1("Make all rendering async") : add_todo.call(null,"Make all rendering async"));

(add_todo.cljs$core$IFn$_invoke$arity$1 ? add_todo.cljs$core$IFn$_invoke$arity$1("Allow any arguments to component functions") : add_todo.call(null,"Allow any arguments to component functions"));

return rehook.demo.todo.complete_all(todos,true);
});
rehook.demo.todo.new_system = (function rehook$demo$todo$new_system(){
var todos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var todo_filter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"all","all",892129742)], null));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"todos","todos",630308868),todos,new cljs.core.Keyword(null,"counter","counter",804008177),counter,new cljs.core.Keyword(null,"todo-filter","todo-filter",-790774099),todo_filter,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(rehook.demo.todo.add_todo,counter,todos),new cljs.core.Keyword(null,"complete-all","complete-all",-671478147),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rehook.demo.todo.complete_all,todos),new cljs.core.Keyword(null,"clear-done","clear-done",-504170097),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rehook.demo.todo.clear_done,todos),new cljs.core.Keyword(null,"toggle","toggle",1291842030),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rehook.demo.todo.toggle,todos),new cljs.core.Keyword(null,"save","save",1850079149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rehook.demo.todo.save,todos),new cljs.core.Keyword(null,"delete","delete",-1768633620),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rehook.demo.todo.delete$,todos)], null),new cljs.core.Keyword(null,"init","init",-1875481434),((function (todos,counter,todo_filter){
return (function (){
return rehook.demo.todo.init(counter,todos);
});})(todos,counter,todo_filter))
], null);
});
rehook.demo.todo.todo_input = cljs.core.with_meta((function rehook$demo$todo$todo_input50057(ctx__39176__auto__,$__39177__auto__){
var _ = ctx__39176__auto__;
var $ = $__39177__auto__;
return ((function (_,$){
return (function rehook$demo$todo$todo_input50057_$_todo_input50058(props__39178__auto__){
var props = props__39178__auto__;
var map__50059 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__50059__$1 = (((((!((map__50059 == null))))?(((((map__50059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50059):map__50059);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50059__$1,new cljs.core.Keyword(null,"title","title",636505583));
var onSave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50059__$1,new cljs.core.Keyword(null,"onSave","onSave",221052498));
var onStop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50059__$1,new cljs.core.Keyword(null,"onStop","onStop",-1433402652));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50059__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50059__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50059__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var vec__50060 = rehook.core.use_state((function (){var or__4131__auto__ = title;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50060,(0),null);
var setter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50060,(1),null);
var stop = ((function (map__50059,map__50059__$1,title,onSave,onStop,id,class$,placeholder,vec__50060,val,setter,props,_,$){
return (function (){
(setter.cljs$core$IFn$_invoke$arity$1 ? setter.cljs$core$IFn$_invoke$arity$1("") : setter.call(null,""));

if(cljs.core.truth_(onStop)){
return (onStop.cljs$core$IFn$_invoke$arity$0 ? onStop.cljs$core$IFn$_invoke$arity$0() : onStop.call(null));
} else {
return null;
}
});})(map__50059,map__50059__$1,title,onSave,onStop,id,class$,placeholder,vec__50060,val,setter,props,_,$))
;
var save = ((function (map__50059,map__50059__$1,title,onSave,onStop,id,class$,placeholder,vec__50060,val,setter,stop,props,_,$){
return (function (){
var v = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(val));
if((!(cljs.core.empty_QMARK_(v)))){
return (onSave.cljs$core$IFn$_invoke$arity$1 ? onSave.cljs$core$IFn$_invoke$arity$1(v) : onSave.call(null,v));
} else {
return stop();
}
});})(map__50059,map__50059__$1,title,onSave,onStop,id,class$,placeholder,vec__50060,val,setter,stop,props,_,$))
;
var G__50064 = new cljs.core.Keyword(null,"input","input",556931961);
var G__50065 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"onBlur","onBlur",229342509),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.Keyword("rehook","id","rehook/id",-166238114)],[placeholder,val,"text",save,class$,id,((function (G__50064,map__50059,map__50059__$1,title,onSave,onStop,id,class$,placeholder,vec__50060,val,setter,stop,save,props,_,$){
return (function (p1__50056_SHARP_){
var G__50066 = p1__50056_SHARP_.which;
switch (G__50066) {
case (13):
return save();

break;
case (27):
return stop();

break;
default:
return null;

}
});})(G__50064,map__50059,map__50059__$1,title,onSave,onStop,id,class$,placeholder,vec__50060,val,setter,stop,save,props,_,$))
,((function (G__50064,map__50059,map__50059__$1,title,onSave,onStop,id,class$,placeholder,vec__50060,val,setter,stop,save,props,_,$){
return (function (p1__50055_SHARP_){
var G__50067 = p1__50055_SHARP_.target.value;
return (setter.cljs$core$IFn$_invoke$arity$1 ? setter.cljs$core$IFn$_invoke$arity$1(G__50067) : setter.call(null,G__50067));
});})(G__50064,map__50059,map__50059__$1,title,onSave,onStop,id,class$,placeholder,vec__50060,val,setter,stop,save,props,_,$))
,new cljs.core.Keyword(null,"todo-input","todo-input",717664950)]);
return ($.cljs$core$IFn$_invoke$arity$2 ? $.cljs$core$IFn$_invoke$arity$2(G__50064,G__50065) : $.call(null,G__50064,G__50065));
});
;})(_,$))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"todo-input",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.demo.todo.todo_stats = cljs.core.with_meta((function rehook$demo$todo$todo_stats50068(ctx__39176__auto__,$__39177__auto__){
var map__50070 = ctx__39176__auto__;
var map__50070__$1 = (((((!((map__50070 == null))))?(((((map__50070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50070):map__50070);
var todo_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50070__$1,new cljs.core.Keyword(null,"todo-filter","todo-filter",-790774099));
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50070__$1,new cljs.core.Keyword(null,"events","events",1792552201));
var $ = $__39177__auto__;
return ((function (map__50070,map__50070__$1,todo_filter,events,$){
return (function rehook$demo$todo$todo_stats50068_$_todo_stats50069(props__39178__auto__){
var props = props__39178__auto__;
var map__50072 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__50072__$1 = (((((!((map__50072 == null))))?(((((map__50072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50072):map__50072);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50072__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50072__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var clear = new cljs.core.Keyword(null,"clear-done","clear-done",-504170097).cljs$core$IFn$_invoke$arity$1(events);
var vec__50073 = rehook.core.use_atom_path(todo_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
var filt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50073,(0),null);
var set_filt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50073,(1),null);
var G__50077 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__50078 = cljs.core.PersistentArrayMap.EMPTY;
var G__50079 = (function (){var G__50082 = new cljs.core.Keyword(null,"span","span",1394872991);
var G__50083 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"todo-count",new cljs.core.Keyword("rehook","id","rehook/id",-166238114),new cljs.core.Keyword(null,"items-left","items-left",-919128409)], null);
var G__50084 = (function (){var G__50088 = new cljs.core.Keyword(null,"strong","strong",269529000);
var G__50089 = cljs.core.PersistentArrayMap.EMPTY;
var G__50090 = active;
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50088,G__50089,G__50090) : $.call(null,G__50088,G__50089,G__50090));
})();
var G__50085 = " ";
var G__50086 = (function (){var G__50091 = active;
switch (G__50091) {
case (1):
return "item";

break;
default:
return "items";

}
})();
var G__50087 = " left";
return ($.cljs$core$IFn$_invoke$arity$6 ? $.cljs$core$IFn$_invoke$arity$6(G__50082,G__50083,G__50084,G__50085,G__50086,G__50087) : $.call(null,G__50082,G__50083,G__50084,G__50085,G__50086,G__50087));
})();
var G__50080 = (function (){var G__50092 = new cljs.core.Keyword(null,"ul","ul",-1349521403);
var G__50093 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"filters"], null);
var G__50094 = (function (){var G__50097 = new cljs.core.Keyword(null,"li","li",723558921);
var G__50098 = cljs.core.PersistentArrayMap.EMPTY;
var G__50099 = (function (){var G__50100 = new cljs.core.Keyword(null,"a","a",-2123407586);
var G__50101 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),filt))?"selected":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__50100,G__50097,G__50098,G__50092,G__50093,G__50077,G__50078,G__50079,map__50072,map__50072__$1,active,done,clear,vec__50073,filt,set_filt,props,map__50070,map__50070__$1,todo_filter,events,$){
return (function (){
var G__50103 = new cljs.core.Keyword(null,"all","all",892129742);
return (set_filt.cljs$core$IFn$_invoke$arity$1 ? set_filt.cljs$core$IFn$_invoke$arity$1(G__50103) : set_filt.call(null,G__50103));
});})(G__50100,G__50097,G__50098,G__50092,G__50093,G__50077,G__50078,G__50079,map__50072,map__50072__$1,active,done,clear,vec__50073,filt,set_filt,props,map__50070,map__50070__$1,todo_filter,events,$))
], null);
var G__50102 = "All";
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50100,G__50101,G__50102) : $.call(null,G__50100,G__50101,G__50102));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50097,G__50098,G__50099) : $.call(null,G__50097,G__50098,G__50099));
})();
var G__50095 = (function (){var G__50104 = new cljs.core.Keyword(null,"li","li",723558921);
var G__50105 = cljs.core.PersistentArrayMap.EMPTY;
var G__50106 = (function (){var G__50107 = new cljs.core.Keyword(null,"a","a",-2123407586);
var G__50108 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),filt))?"selected":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__50107,G__50104,G__50105,G__50092,G__50093,G__50094,G__50077,G__50078,G__50079,map__50072,map__50072__$1,active,done,clear,vec__50073,filt,set_filt,props,map__50070,map__50070__$1,todo_filter,events,$){
return (function (){
var G__50110 = new cljs.core.Keyword(null,"active","active",1895962068);
return (set_filt.cljs$core$IFn$_invoke$arity$1 ? set_filt.cljs$core$IFn$_invoke$arity$1(G__50110) : set_filt.call(null,G__50110));
});})(G__50107,G__50104,G__50105,G__50092,G__50093,G__50094,G__50077,G__50078,G__50079,map__50072,map__50072__$1,active,done,clear,vec__50073,filt,set_filt,props,map__50070,map__50070__$1,todo_filter,events,$))
], null);
var G__50109 = "Active";
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50107,G__50108,G__50109) : $.call(null,G__50107,G__50108,G__50109));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50104,G__50105,G__50106) : $.call(null,G__50104,G__50105,G__50106));
})();
var G__50096 = (function (){var G__50111 = new cljs.core.Keyword(null,"li","li",723558921);
var G__50112 = cljs.core.PersistentArrayMap.EMPTY;
var G__50113 = (function (){var G__50114 = new cljs.core.Keyword(null,"a","a",-2123407586);
var G__50115 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),filt))?"selected":null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__50114,G__50111,G__50112,G__50092,G__50093,G__50094,G__50095,G__50077,G__50078,G__50079,map__50072,map__50072__$1,active,done,clear,vec__50073,filt,set_filt,props,map__50070,map__50070__$1,todo_filter,events,$){
return (function (){
var G__50117 = new cljs.core.Keyword(null,"done","done",-889844188);
return (set_filt.cljs$core$IFn$_invoke$arity$1 ? set_filt.cljs$core$IFn$_invoke$arity$1(G__50117) : set_filt.call(null,G__50117));
});})(G__50114,G__50111,G__50112,G__50092,G__50093,G__50094,G__50095,G__50077,G__50078,G__50079,map__50072,map__50072__$1,active,done,clear,vec__50073,filt,set_filt,props,map__50070,map__50070__$1,todo_filter,events,$))
], null);
var G__50116 = "Completed";
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50114,G__50115,G__50116) : $.call(null,G__50114,G__50115,G__50116));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50111,G__50112,G__50113) : $.call(null,G__50111,G__50112,G__50113));
})();
return ($.cljs$core$IFn$_invoke$arity$5 ? $.cljs$core$IFn$_invoke$arity$5(G__50092,G__50093,G__50094,G__50095,G__50096) : $.call(null,G__50092,G__50093,G__50094,G__50095,G__50096));
})();
var G__50081 = (((done > (0)))?(function (){var G__50118 = new cljs.core.Keyword(null,"button","button",1456579943);
var G__50119 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"clear-completed",new cljs.core.Keyword("rehook","id","rehook/id",-166238114),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),clear], null);
var G__50120 = "Clear completed ";
var G__50121 = done;
return ($.cljs$core$IFn$_invoke$arity$4 ? $.cljs$core$IFn$_invoke$arity$4(G__50118,G__50119,G__50120,G__50121) : $.call(null,G__50118,G__50119,G__50120,G__50121));
})():null);
return ($.cljs$core$IFn$_invoke$arity$5 ? $.cljs$core$IFn$_invoke$arity$5(G__50077,G__50078,G__50079,G__50080,G__50081) : $.call(null,G__50077,G__50078,G__50079,G__50080,G__50081));
});
;})(map__50070,map__50070__$1,todo_filter,events,$))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"todo-stats",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.demo.todo.todo_item = cljs.core.with_meta((function rehook$demo$todo$todo_item50123(ctx__39176__auto__,$__39177__auto__){
var ctx = ctx__39176__auto__;
var $ = $__39177__auto__;
return ((function (ctx,$){
return (function rehook$demo$todo$todo_item50123_$_todo_item50124(props__39178__auto__){
var props = props__39178__auto__;
var map__50125 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__50125__$1 = (((((!((map__50125 == null))))?(((((map__50125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50125):map__50125);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var done = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"done","done",-889844188));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50125__$1,new cljs.core.Keyword(null,"title","title",636505583));
var toggle = new cljs.core.Keyword(null,"toggle","toggle",1291842030).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(ctx));
var delete$ = new cljs.core.Keyword(null,"delete","delete",-1768633620).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(ctx));
var save = new cljs.core.Keyword(null,"save","save",1850079149).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(ctx));
var vec__50126 = rehook.core.use_state(false);
var editing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50126,(0),null);
var setter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50126,(1),null);
var G__50130 = new cljs.core.Keyword(null,"li","li",723558921);
var G__50131 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[(cljs.core.truth_(done)?"completed ":null),(cljs.core.truth_(editing)?"editing":null)].join('')], null);
var G__50132 = (function (){var G__50133 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__50134 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"view"], null);
var G__50135 = (function (){var G__50139 = new cljs.core.Keyword(null,"input","input",556931961);
var G__50140 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"toggle",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),done,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__50139,G__50133,G__50134,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$){
return (function (){
return (toggle.cljs$core$IFn$_invoke$arity$1 ? toggle.cljs$core$IFn$_invoke$arity$1(id) : toggle.call(null,id));
});})(G__50139,G__50133,G__50134,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$))
], null);
return ($.cljs$core$IFn$_invoke$arity$2 ? $.cljs$core$IFn$_invoke$arity$2(G__50139,G__50140) : $.call(null,G__50139,G__50140));
})();
var G__50136 = (function (){var G__50141 = new cljs.core.Keyword(null,"label","label",1718410804);
var G__50142 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onDoubleClick","onDoubleClick",-1364035213),((function (G__50141,G__50133,G__50134,G__50135,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$){
return (function (){
return (setter.cljs$core$IFn$_invoke$arity$1 ? setter.cljs$core$IFn$_invoke$arity$1(true) : setter.call(null,true));
});})(G__50141,G__50133,G__50134,G__50135,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$))
], null);
var G__50143 = title;
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50141,G__50142,G__50143) : $.call(null,G__50141,G__50142,G__50143));
})();
var G__50137 = (function (){var G__50144 = new cljs.core.Keyword(null,"button","button",1456579943);
var G__50145 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"destroy",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (G__50144,G__50133,G__50134,G__50135,G__50136,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$){
return (function (){
return (delete$.cljs$core$IFn$_invoke$arity$1 ? delete$.cljs$core$IFn$_invoke$arity$1(id) : delete$.call(null,id));
});})(G__50144,G__50133,G__50134,G__50135,G__50136,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$))
], null);
var G__50146 = "Delete";
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50144,G__50145,G__50146) : $.call(null,G__50144,G__50145,G__50146));
})();
var G__50138 = (cljs.core.truth_(editing)?(function (){var G__50147 = rehook.demo.todo.todo_input;
var G__50148 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"edit",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"onSave","onSave",221052498),((function (G__50147,G__50133,G__50134,G__50135,G__50136,G__50137,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$){
return (function (p1__50122_SHARP_){
return (save.cljs$core$IFn$_invoke$arity$2 ? save.cljs$core$IFn$_invoke$arity$2(id,p1__50122_SHARP_) : save.call(null,id,p1__50122_SHARP_));
});})(G__50147,G__50133,G__50134,G__50135,G__50136,G__50137,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$))
,new cljs.core.Keyword(null,"onStop","onStop",-1433402652),((function (G__50147,G__50133,G__50134,G__50135,G__50136,G__50137,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$){
return (function (){
return (setter.cljs$core$IFn$_invoke$arity$1 ? setter.cljs$core$IFn$_invoke$arity$1(false) : setter.call(null,false));
});})(G__50147,G__50133,G__50134,G__50135,G__50136,G__50137,G__50130,G__50131,map__50125,map__50125__$1,id,done,title,toggle,delete$,save,vec__50126,editing,setter,props,ctx,$))
], null);
return ($.cljs$core$IFn$_invoke$arity$2 ? $.cljs$core$IFn$_invoke$arity$2(G__50147,G__50148) : $.call(null,G__50147,G__50148));
})():null);
return ($.cljs$core$IFn$_invoke$arity$6 ? $.cljs$core$IFn$_invoke$arity$6(G__50133,G__50134,G__50135,G__50136,G__50137,G__50138) : $.call(null,G__50133,G__50134,G__50135,G__50136,G__50137,G__50138));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50130,G__50131,G__50132) : $.call(null,G__50130,G__50131,G__50132));
});
;})(ctx,$))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"todo-item",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.demo.todo.todo_app = cljs.core.with_meta((function rehook$demo$todo$todo_app50150(ctx__39176__auto__,$__39177__auto__){
var map__50152 = ctx__39176__auto__;
var map__50152__$1 = (((((!((map__50152 == null))))?(((((map__50152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50152):map__50152);
var ctx = map__50152__$1;
var todo_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50152__$1,new cljs.core.Keyword(null,"todo-filter","todo-filter",-790774099));
var todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50152__$1,new cljs.core.Keyword(null,"todos","todos",630308868));
var $ = $__39177__auto__;
return ((function (map__50152,map__50152__$1,ctx,todo_filter,todos,$){
return (function rehook$demo$todo$todo_app50150_$_todo_app50151(props__39178__auto__){
var _ = props__39178__auto__;
var vec__50154 = rehook.core.use_atom_path(todo_filter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
var filt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50154,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50154,(1),null);
var vec__50157 = rehook.core.use_atom(todos);
var todos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50157,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50157,(1),null);
var complete_all = new cljs.core.Keyword(null,"complete-all","complete-all",-671478147).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(ctx));
var add_todo = new cljs.core.Keyword(null,"add-todo","add-todo",-1657891401).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(ctx));
var items = cljs.core.vals(todos__$1);
var done = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),items));
var active = (cljs.core.count(items) - done);
var G__50160 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__50161 = cljs.core.PersistentArrayMap.EMPTY;
var G__50162 = (function (){var G__50163 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__50164 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"todoapp"], null);
var G__50165 = (function (){var G__50168 = new cljs.core.Keyword(null,"header","header",119441134);
var G__50169 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"header"], null);
var G__50170 = (function (){var G__50172 = new cljs.core.Keyword(null,"h1","h1",-1896887462);
var G__50173 = cljs.core.PersistentArrayMap.EMPTY;
var G__50174 = "todos (rehook)";
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50172,G__50173,G__50174) : $.call(null,G__50172,G__50173,G__50174));
})();
var G__50171 = (function (){var G__50175 = rehook.demo.todo.todo_input;
var G__50176 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"What needs to be done?",new cljs.core.Keyword(null,"onSave","onSave",221052498),add_todo], null);
return ($.cljs$core$IFn$_invoke$arity$2 ? $.cljs$core$IFn$_invoke$arity$2(G__50175,G__50176) : $.call(null,G__50175,G__50176));
})();
return ($.cljs$core$IFn$_invoke$arity$4 ? $.cljs$core$IFn$_invoke$arity$4(G__50168,G__50169,G__50170,G__50171) : $.call(null,G__50168,G__50169,G__50170,G__50171));
})();
var G__50166 = (cljs.core.truth_(cljs.core.not_empty(items))?(function (){var G__50177 = new cljs.core.Keyword(null,"div","div",1057191632);
var G__50178 = cljs.core.PersistentArrayMap.EMPTY;
var G__50179 = (function (){var G__50181 = new cljs.core.Keyword(null,"section","section",-300141526);
var G__50182 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main"], null);
var G__50183 = (function (){var G__50186 = new cljs.core.Keyword(null,"input","input",556931961);
var G__50187 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"toggle-all",new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),(active === (0)),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (G__50186,G__50181,G__50182,G__50177,G__50178,G__50163,G__50164,G__50165,G__50160,G__50161,vec__50154,filt,___$1,vec__50157,todos__$1,___$2,complete_all,add_todo,items,done,active,_,map__50152,map__50152__$1,ctx,todo_filter,todos,$){
return (function (){
var G__50188 = (active > (0));
return (complete_all.cljs$core$IFn$_invoke$arity$1 ? complete_all.cljs$core$IFn$_invoke$arity$1(G__50188) : complete_all.call(null,G__50188));
});})(G__50186,G__50181,G__50182,G__50177,G__50178,G__50163,G__50164,G__50165,G__50160,G__50161,vec__50154,filt,___$1,vec__50157,todos__$1,___$2,complete_all,add_todo,items,done,active,_,map__50152,map__50152__$1,ctx,todo_filter,todos,$))
], null);
return ($.cljs$core$IFn$_invoke$arity$2 ? $.cljs$core$IFn$_invoke$arity$2(G__50186,G__50187) : $.call(null,G__50186,G__50187));
})();
var G__50184 = (function (){var G__50189 = new cljs.core.Keyword(null,"label","label",1718410804);
var G__50190 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),"toggle-all"], null);
var G__50191 = "Mark all as complete";
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50189,G__50190,G__50191) : $.call(null,G__50189,G__50190,G__50191));
})();
var G__50185 = (function (){var filtered_items = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (){var G__50192 = filt;
var G__50192__$1 = (((G__50192 instanceof cljs.core.Keyword))?G__50192.fqn:null);
switch (G__50192__$1) {
case "active":
return cljs.core.complement(new cljs.core.Keyword(null,"done","done",-889844188));

break;
case "done":
return new cljs.core.Keyword(null,"done","done",-889844188);

break;
case "all":
return cljs.core.identity;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50192__$1)].join('')));

}
})(),items);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4($,new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"todo-list"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (filtered_items,G__50181,G__50182,G__50183,G__50184,G__50177,G__50178,G__50163,G__50164,G__50165,G__50160,G__50161,vec__50154,filt,___$1,vec__50157,todos__$1,___$2,complete_all,add_todo,items,done,active,_,map__50152,map__50152__$1,ctx,todo_filter,todos,$){
return (function (p1__50149_SHARP_){
var G__50193 = rehook.demo.todo.todo_item;
var G__50194 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50149_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50149_SHARP_)));
return ($.cljs$core$IFn$_invoke$arity$2 ? $.cljs$core$IFn$_invoke$arity$2(G__50193,G__50194) : $.call(null,G__50193,G__50194));
});})(filtered_items,G__50181,G__50182,G__50183,G__50184,G__50177,G__50178,G__50163,G__50164,G__50165,G__50160,G__50161,vec__50154,filt,___$1,vec__50157,todos__$1,___$2,complete_all,add_todo,items,done,active,_,map__50152,map__50152__$1,ctx,todo_filter,todos,$))
,filtered_items));
})();
return ($.cljs$core$IFn$_invoke$arity$5 ? $.cljs$core$IFn$_invoke$arity$5(G__50181,G__50182,G__50183,G__50184,G__50185) : $.call(null,G__50181,G__50182,G__50183,G__50184,G__50185));
})();
var G__50180 = (function (){var G__50195 = new cljs.core.Keyword(null,"footer","footer",1606445390);
var G__50196 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"footer"], null);
var G__50197 = (function (){var G__50198 = rehook.demo.todo.todo_stats;
var G__50199 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),active,new cljs.core.Keyword(null,"done","done",-889844188),done], null);
return ($.cljs$core$IFn$_invoke$arity$2 ? $.cljs$core$IFn$_invoke$arity$2(G__50198,G__50199) : $.call(null,G__50198,G__50199));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50195,G__50196,G__50197) : $.call(null,G__50195,G__50196,G__50197));
})();
return ($.cljs$core$IFn$_invoke$arity$4 ? $.cljs$core$IFn$_invoke$arity$4(G__50177,G__50178,G__50179,G__50180) : $.call(null,G__50177,G__50178,G__50179,G__50180));
})():null);
var G__50167 = (function (){var G__50200 = new cljs.core.Keyword(null,"footer","footer",1606445390);
var G__50201 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"footer"], null);
var G__50202 = (function (){var G__50203 = new cljs.core.Keyword(null,"p","p",151049309);
var G__50204 = cljs.core.PersistentArrayMap.EMPTY;
var G__50205 = "Double-click to edit a todo";
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50203,G__50204,G__50205) : $.call(null,G__50203,G__50204,G__50205));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50200,G__50201,G__50202) : $.call(null,G__50200,G__50201,G__50202));
})();
return ($.cljs$core$IFn$_invoke$arity$5 ? $.cljs$core$IFn$_invoke$arity$5(G__50163,G__50164,G__50165,G__50166,G__50167) : $.call(null,G__50163,G__50164,G__50165,G__50166,G__50167));
})();
return ($.cljs$core$IFn$_invoke$arity$3 ? $.cljs$core$IFn$_invoke$arity$3(G__50160,G__50161,G__50162) : $.call(null,G__50160,G__50161,G__50162));
});
;})(map__50152,map__50152__$1,ctx,todo_filter,todos,$))
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rehook","name","rehook/name",639402515),"todo-app",new cljs.core.Keyword("rehook","component","rehook/component",355859388),true], null));
rehook.demo.todo.system = (function rehook$demo$todo$system(){
var sys = rehook.demo.todo.new_system();
var fexpr__50206_50262 = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(sys);
(fexpr__50206_50262.cljs$core$IFn$_invoke$arity$0 ? fexpr__50206_50262.cljs$core$IFn$_invoke$arity$0() : fexpr__50206_50262.call(null));

return sys;
});
rehook.demo.todo.main = (function rehook$demo$todo$main(){
return rehook.dom.browser.bootstrap.cljs$core$IFn$_invoke$arity$4(rehook.demo.todo.system,cljs.core.identity,cljs.core.clj__GT_js,rehook.demo.todo.todo_app);
});

//# sourceMappingURL=rehook.demo.todo.js.map

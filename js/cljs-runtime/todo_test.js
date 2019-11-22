goog.provide('todo_test');
goog.require('cljs.core');
goog.require('rehook.test');
goog.require('rehook.demo.todo');
todo_test.todo_test__clear_completed = (function todo_test$todo_test__clear_completed(){
return cljs.test.test_var(todo_test.todo_test__clear_completed.cljs$lang$var);
});
todo_test.todo_test__clear_completed.cljs$lang$test = (function (){
var _STAR_report_STAR__orig_val__18581 = rehook.test._STAR_report_STAR_;
var _STAR_report_STAR__temp_val__18582 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"todo-test--clear-completed",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"with-component-mounted","with-component-mounted",744146890,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initial-render","initial-render",-1557366527,null),cljs.core.list(new cljs.core.Symbol("rehook.test","mount!","rehook.test/mount!",-478705121,null),new cljs.core.Symbol(null,"scenes","scenes",1215312123,null))], null),cljs.core.list(new cljs.core.Symbol(null,"is","is",2009660525,null),new cljs.core.Symbol(null,"initial-render","initial-render",-1557366527,null),"Initial render should show 4 TODO items",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rehook.test","children","rehook.test/children",1259745715,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clear completed ",(4)], null))),cljs.core.list(new cljs.core.Symbol(null,"io","io",1333189610,null),new cljs.core.Symbol(null,"initial-render","initial-render",-1557366527,null),"Click 'Clear completed'",cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))),cljs.core.list(new cljs.core.Symbol(null,"with-component-mounted","with-component-mounted",744146890,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render2","render2",1384648669,null),cljs.core.list(new cljs.core.Symbol("rehook.test","mount!","rehook.test/mount!",-478705121,null),new cljs.core.Symbol(null,"scenes","scenes",1215312123,null),new cljs.core.Symbol(null,"initial-render","initial-render",-1557366527,null))], null),cljs.core.list(new cljs.core.Symbol(null,"is","is",2009660525,null),new cljs.core.Symbol(null,"render2","render2",1384648669,null),"After clicking 'Clear Completed' it should clear TODO items",cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("rehook.test","children","rehook.test/children",1259745715,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961)))),cljs.core.list(new cljs.core.Symbol(null,"io","io",1333189610,null),new cljs.core.Symbol(null,"render2","render2",1384648669,null),"Invoking todo-input onChange",cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"foo"], null)], null))], null))),cljs.core.list(new cljs.core.Symbol(null,"with-component-mounted","with-component-mounted",744146890,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render3","render3",559321155,null),cljs.core.list(new cljs.core.Symbol("rehook.test","mount!","rehook.test/mount!",-478705121,null),new cljs.core.Symbol(null,"scenes","scenes",1215312123,null),new cljs.core.Symbol(null,"render2","render2",1384648669,null))], null),cljs.core.list(new cljs.core.Symbol(null,"is","is",2009660525,null),new cljs.core.Symbol(null,"render3","render3",559321155,null),"After inputting text, value should appear in input",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"foo",cljs.core.list(new cljs.core.Symbol("rehook.test","get-prop","rehook.test/get-prop",753713343,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"value","value",305978217)))),cljs.core.list(new cljs.core.Symbol(null,"io","io",1333189610,null),new cljs.core.Symbol(null,"render3","render3",559321155,null),"Pressing enter button on todo-input",cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(13)], null))], null))),cljs.core.list(new cljs.core.Symbol(null,"with-component-mounted","with-component-mounted",744146890,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"render4","render4",2046138245,null),cljs.core.list(new cljs.core.Symbol("rehook.test","mount!","rehook.test/mount!",-478705121,null),new cljs.core.Symbol(null,"scenes","scenes",1215312123,null),new cljs.core.Symbol(null,"render3","render3",559321155,null))], null),cljs.core.list(new cljs.core.Symbol(null,"is","is",2009660525,null),new cljs.core.Symbol(null,"render4","render4",2046138245,null),"After pressing enter button there should be one item to do",cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1))),cljs.core.list(new cljs.core.Symbol(null,"is","is",2009660525,null),new cljs.core.Symbol(null,"render4","render4",2046138245,null),"After pressing enter button, input's value should be cleared.",cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("rehook.test","get-prop","rehook.test/get-prop",753713343,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"value","value",305978217)))))))))], null));
rehook.test._STAR_report_STAR_ = _STAR_report_STAR__temp_val__18582;

try{var system__18564__auto__ = rehook.demo.todo.system;
var system_args__18565__auto__ = cljs.core.PersistentVector.EMPTY;
var invoked_system__18566__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(system__18564__auto__,system_args__18565__auto__);
var ctx_f__18567__auto__ = cljs.core.identity;
var props_f__18568__auto__ = cljs.core.identity;
var component__18569__auto__ = rehook.demo.todo.todo_app;
var shutdown_f__18570__auto__ = cljs.core.identity;
var scenes__18571__auto__ = rehook.test.init(invoked_system__18566__auto__,ctx_f__18567__auto__,props_f__18568__auto__,component__18569__auto__);
var scenes = scenes__18571__auto__;
try{var component__18554__auto___18612 = rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$1(scenes);
try{var initial_render_18613 = component__18554__auto___18612;
var _STAR_scene_STAR__orig_val__18583_18614 = rehook.test._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__18584_18615 = initial_render_18613;
rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__18584_18615;

try{if((rehook.test._STAR_report_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("assertion called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rehook.test","children","rehook.test/children",1259745715,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clear completed ",(4)], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null));
} else {
}

var res__18548__auto___18616 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rehook.test.children.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clear completed ",(4)], null));
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initial render should show 4 TODO items"], 0));

try{try{var value__10148__auto___18617 = res__18548__auto___18616;
if(value__10148__auto___18617){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18617,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18617,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e18585){var t__10190__auto___18618 = e18585;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__10190__auto___18618,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rehook.test._STAR_report_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"title","title",636505583),"Initial render should show 4 TODO items",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("rehook.test","children","rehook.test/children",1259745715,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clear completed ",(4)], null)),new cljs.core.Keyword(null,"pass","pass",1574159993),((res__18548__auto___18616)?true:false),new cljs.core.Keyword(null,"scene","scene",1523800415),(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(rehook.test._STAR_scene_STAR_) - (1))], null)], 0));
}finally {rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__18583_18614;
}
var _STAR_scene_STAR__orig_val__18586_18619 = rehook.test._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__18587_18620 = initial_render_18613;
rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__18587_18620;

try{if((rehook.test._STAR_report_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("io called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null));
} else {
}

try{rehook.test.invoke_prop.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rehook.test._STAR_report_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword(null,"title","title",636505583),"Click 'Clear completed'",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(rehook.test._STAR_scene_STAR_) - (1))], null)], 0));
}catch (e18588){if((e18588 instanceof Error)){
var e__18542__auto___18621 = e18588;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("io failed",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report","report",1394055010),cljs.core.deref(rehook.test._STAR_report_STAR_),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null),e__18542__auto___18621);
} else {
throw e18588;

}
}}finally {rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__18586_18619;
}
var component__18554__auto___18622__$1 = rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$2(scenes,initial_render_18613);
try{var render2_18623 = component__18554__auto___18622__$1;
var _STAR_scene_STAR__orig_val__18589_18624 = rehook.test._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__18590_18625 = render2_18623;
rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__18590_18625;

try{if((rehook.test._STAR_report_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("assertion called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("rehook.test","children","rehook.test/children",1259745715,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null));
} else {
}

var res__18548__auto___18626 = (rehook.test.children.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961)) == null);
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["After clicking 'Clear Completed' it should clear TODO items"], 0));

try{try{var value__10148__auto___18627 = res__18548__auto___18626;
if(value__10148__auto___18627){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18627,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18627,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e18591){var t__10190__auto___18628 = e18591;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__10190__auto___18628,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rehook.test._STAR_report_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"title","title",636505583),"After clicking 'Clear Completed' it should clear TODO items",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),cljs.core.list(new cljs.core.Symbol("rehook.test","children","rehook.test/children",1259745715,null),new cljs.core.Keyword(null,"clear-completed","clear-completed",1314054961))),new cljs.core.Keyword(null,"pass","pass",1574159993),((res__18548__auto___18626)?true:false),new cljs.core.Keyword(null,"scene","scene",1523800415),(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(rehook.test._STAR_scene_STAR_) - (1))], null)], 0));
}finally {rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__18589_18624;
}
var _STAR_scene_STAR__orig_val__18592_18629 = rehook.test._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__18593_18630 = render2_18623;
rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__18593_18630;

try{if((rehook.test._STAR_report_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("io called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"foo"], null)], null))], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null));
} else {
}

try{rehook.test.invoke_prop.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"foo"], null)], null))], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rehook.test._STAR_report_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword(null,"title","title",636505583),"Invoking todo-input onChange",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"foo"], null)], null))], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(rehook.test._STAR_scene_STAR_) - (1))], null)], 0));
}catch (e18594){if((e18594 instanceof Error)){
var e__18542__auto___18631 = e18594;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("io failed",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report","report",1394055010),cljs.core.deref(rehook.test._STAR_report_STAR_),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onChange","onChange",-312891301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"foo"], null)], null))], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null),e__18542__auto___18631);
} else {
throw e18594;

}
}}finally {rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__18592_18629;
}
var component__18554__auto___18632__$2 = rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$2(scenes,render2_18623);
try{var render3_18633 = component__18554__auto___18632__$2;
var _STAR_scene_STAR__orig_val__18595_18634 = rehook.test._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__18596_18635 = render3_18633;
rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__18596_18635;

try{if((rehook.test._STAR_report_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("assertion called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"foo",cljs.core.list(new cljs.core.Symbol("rehook.test","get-prop","rehook.test/get-prop",753713343,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"value","value",305978217))),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null));
} else {
}

var res__18548__auto___18636 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("foo",rehook.test.get_prop.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"value","value",305978217)));
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["After inputting text, value should appear in input"], 0));

try{try{var value__10148__auto___18637 = res__18548__auto___18636;
if(value__10148__auto___18637){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18637,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18637,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e18597){var t__10190__auto___18638 = e18597;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__10190__auto___18638,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rehook.test._STAR_report_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"title","title",636505583),"After inputting text, value should appear in input",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),"foo",cljs.core.list(new cljs.core.Symbol("rehook.test","get-prop","rehook.test/get-prop",753713343,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"value","value",305978217))),new cljs.core.Keyword(null,"pass","pass",1574159993),((res__18548__auto___18636)?true:false),new cljs.core.Keyword(null,"scene","scene",1523800415),(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(rehook.test._STAR_scene_STAR_) - (1))], null)], 0));
}finally {rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__18595_18634;
}
var _STAR_scene_STAR__orig_val__18598_18639 = rehook.test._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__18599_18640 = render3_18633;
rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__18599_18640;

try{if((rehook.test._STAR_report_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("io called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(13)], null))], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null));
} else {
}

try{rehook.test.invoke_prop.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(13)], null))], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rehook.test._STAR_report_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mutation","mutation",-285823378),new cljs.core.Keyword(null,"title","title",636505583),"Pressing enter button on todo-input",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(13)], null))], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(rehook.test._STAR_scene_STAR_) - (1))], null)], 0));
}catch (e18600){if((e18600 instanceof Error)){
var e__18542__auto___18641 = e18600;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("io failed",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"report","report",1394055010),cljs.core.deref(rehook.test._STAR_report_STAR_),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rehook.test","invoke-prop","rehook.test/invoke-prop",-260659308,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"which","which",-1255268941),(13)], null))], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null),e__18542__auto___18641);
} else {
throw e18600;

}
}}finally {rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__18598_18639;
}
var component__18554__auto___18642__$3 = rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$2(scenes,render3_18633);
try{var render4_18643 = component__18554__auto___18642__$3;
var _STAR_scene_STAR__orig_val__18601_18644 = rehook.test._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__18602_18645 = render4_18643;
rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__18602_18645;

try{if((rehook.test._STAR_report_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("assertion called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null));
} else {
}

var res__18548__auto___18646 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(1));
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["After pressing enter button there should be one item to do"], 0));

try{try{var value__10148__auto___18647 = res__18548__auto___18646;
if(value__10148__auto___18647){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18647,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18647,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e18603){var t__10190__auto___18648 = e18603;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__10190__auto___18648,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rehook.test._STAR_report_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"title","title",636505583),"After pressing enter button there should be one item to do",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"pass","pass",1574159993),((res__18548__auto___18646)?true:false),new cljs.core.Keyword(null,"scene","scene",1523800415),(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(rehook.test._STAR_scene_STAR_) - (1))], null)], 0));
}finally {rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__18601_18644;
}
var _STAR_scene_STAR__orig_val__18604_18649 = rehook.test._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__18605_18650 = render4_18643;
rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__18605_18650;

try{if((rehook.test._STAR_report_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("assertion called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("rehook.test","get-prop","rehook.test/get-prop",753713343,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"value","value",305978217))),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null));
} else {
}

var res__18548__auto___18651 = cljs.core.empty_QMARK_(rehook.test.get_prop.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"value","value",305978217)));
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["After pressing enter button, input's value should be cleared."], 0));

try{try{var value__10148__auto___18652 = res__18548__auto___18651;
if(value__10148__auto___18652){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18652,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18652,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e18606){var t__10190__auto___18653 = e18606;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__10190__auto___18653,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rehook.test._STAR_report_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"title","title",636505583),"After pressing enter button, input's value should be cleared.",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol("rehook.test","get-prop","rehook.test/get-prop",753713343,null),new cljs.core.Keyword(null,"todo-input","todo-input",717664950),new cljs.core.Keyword(null,"value","value",305978217))),new cljs.core.Keyword(null,"pass","pass",1574159993),((res__18548__auto___18651)?true:false),new cljs.core.Keyword(null,"scene","scene",1523800415),(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(rehook.test._STAR_scene_STAR_) - (1))], null)], 0));
}finally {rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__18604_18649;
}}finally {rehook.test.unmount_BANG_(component__18554__auto___18642__$3);
}}finally {rehook.test.unmount_BANG_(component__18554__auto___18632__$2);
}}finally {rehook.test.unmount_BANG_(component__18554__auto___18622__$1);
}}finally {rehook.test.unmount_BANG_(component__18554__auto___18612);
}
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(rehook.test._STAR_report_STAR_),new cljs.core.Keyword(null,"scenes","scenes",-425219404),cljs.core.deref(scenes__18571__auto__));
}finally {(shutdown_f__18570__auto__.cljs$core$IFn$_invoke$arity$1 ? shutdown_f__18570__auto__.cljs$core$IFn$_invoke$arity$1(invoked_system__18566__auto__) : shutdown_f__18570__auto__.call(null,invoked_system__18566__auto__));
}}finally {rehook.test._STAR_report_STAR_ = _STAR_report_STAR__orig_val__18581;
}});

todo_test.todo_test__clear_completed.cljs$lang$var = new cljs.core.Var(function(){return todo_test.todo_test__clear_completed;},new cljs.core.Symbol("todo-test","todo-test--clear-completed","todo-test/todo-test--clear-completed",683534072,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("rehook","test?","rehook/test?",-1763172863),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"todo-test","todo-test",2078442272,null),new cljs.core.Symbol(null,"todo-test--clear-completed","todo-test--clear-completed",1147871039,null),"todo_test.cljs",38,1,5,5,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo_test.todo_test__clear_completed)?todo_test.todo_test__clear_completed.cljs$lang$test:null)]));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rehook.test.registry,cljs.core.assoc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return todo_test.todo_test__clear_completed;},new cljs.core.Symbol("todo-test","todo-test--clear-completed","todo-test/todo-test--clear-completed",683534072,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("rehook","test?","rehook/test?",-1763172863),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"todo-test","todo-test",2078442272,null),new cljs.core.Symbol(null,"todo-test--clear-completed","todo-test--clear-completed",1147871039,null),"todo_test.cljs",38,1,5,5,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo_test.todo_test__clear_completed)?todo_test.todo_test__clear_completed.cljs$lang$test:null)]))),new cljs.core.Var(function(){return todo_test.todo_test__clear_completed;},new cljs.core.Symbol("todo-test","todo-test--clear-completed","todo-test/todo-test--clear-completed",683534072,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("rehook","test?","rehook/test?",-1763172863),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"todo-test","todo-test",2078442272,null),new cljs.core.Symbol(null,"todo-test--clear-completed","todo-test--clear-completed",1147871039,null),"todo_test.cljs",38,1,5,5,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo_test.todo_test__clear_completed)?todo_test.todo_test__clear_completed.cljs$lang$test:null)])));
todo_test.todo_stats__items_left = (function todo_test$todo_stats__items_left(){
return cljs.test.test_var(todo_test.todo_stats__items_left.cljs$lang$var);
});
todo_test.todo_stats__items_left.cljs$lang$test = (function (){
var _STAR_report_STAR__orig_val__18607 = rehook.test._STAR_report_STAR_;
var _STAR_report_STAR__temp_val__18608 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177),"todo-stats--items-left",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"with-component-mounted","with-component-mounted",744146890,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"initial-render","initial-render",-1557366527,null),cljs.core.list(new cljs.core.Symbol("rehook.test","mount!","rehook.test/mount!",-478705121,null),new cljs.core.Symbol(null,"scenes","scenes",1215312123,null))], null),cljs.core.list(new cljs.core.Symbol(null,"is","is",2009660525,null),new cljs.core.Symbol(null,"initial-render","initial-render",-1557366527,null),"Initial render should show 0 items left",cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol("rehook.test","children","rehook.test/children",1259745715,null),new cljs.core.Keyword(null,"items-left","items-left",-919128409)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)," items left"], null)))))], null));
rehook.test._STAR_report_STAR_ = _STAR_report_STAR__temp_val__18608;

try{var system__18564__auto__ = rehook.demo.todo.system;
var system_args__18565__auto__ = cljs.core.PersistentVector.EMPTY;
var invoked_system__18566__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(system__18564__auto__,system_args__18565__auto__);
var ctx_f__18567__auto__ = cljs.core.identity;
var props_f__18568__auto__ = cljs.core.identity;
var component__18569__auto__ = rehook.demo.todo.todo_stats;
var shutdown_f__18570__auto__ = cljs.core.identity;
var scenes__18571__auto__ = rehook.test.init(invoked_system__18566__auto__,ctx_f__18567__auto__,props_f__18568__auto__,component__18569__auto__);
var scenes = scenes__18571__auto__;
try{var component__18554__auto___18654 = rehook.test.mount_BANG_.cljs$core$IFn$_invoke$arity$1(scenes);
try{var initial_render_18655 = component__18554__auto___18654;
var _STAR_scene_STAR__orig_val__18609_18656 = rehook.test._STAR_scene_STAR_;
var _STAR_scene_STAR__temp_val__18610_18657 = initial_render_18655;
rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__temp_val__18610_18657;

try{if((rehook.test._STAR_report_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("assertion called outside of test",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol("rehook.test","children","rehook.test/children",1259745715,null),new cljs.core.Keyword(null,"items-left","items-left",-919128409)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)," items left"], null)),new cljs.core.Keyword(null,"scene","scene",1523800415),rehook.test._STAR_scene_STAR_], null));
} else {
}

var res__18548__auto___18658 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(rehook.test.children.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"items-left","items-left",-919128409)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)," items left"], null));
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initial render should show 0 items left"], 0));

try{try{var value__10148__auto___18659 = res__18548__auto___18658;
if(value__10148__auto___18659){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18659,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),value__10148__auto___18659,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e18611){var t__10190__auto___18660 = e18611;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Symbol(null,"res__18548__auto__","res__18548__auto__",839084807,null),new cljs.core.Keyword(null,"actual","actual",107306363),t__10190__auto___18660,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(rehook.test._STAR_report_STAR_,cljs.core.update,new cljs.core.Keyword(null,"tests","tests",-1041085625),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"title","title",636505583),"Initial render should show 0 items left",new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),cljs.core.list(new cljs.core.Symbol("rehook.test","children","rehook.test/children",1259745715,null),new cljs.core.Keyword(null,"items-left","items-left",-919128409)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)," items left"], null)),new cljs.core.Keyword(null,"pass","pass",1574159993),((res__18548__auto___18658)?true:false),new cljs.core.Keyword(null,"scene","scene",1523800415),(new cljs.core.Keyword(null,"ticks","ticks",-406190313).cljs$core$IFn$_invoke$arity$1(rehook.test._STAR_scene_STAR_) - (1))], null)], 0));
}finally {rehook.test._STAR_scene_STAR_ = _STAR_scene_STAR__orig_val__18609_18656;
}}finally {rehook.test.unmount_BANG_(component__18554__auto___18654);
}
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(rehook.test._STAR_report_STAR_),new cljs.core.Keyword(null,"scenes","scenes",-425219404),cljs.core.deref(scenes__18571__auto__));
}finally {(shutdown_f__18570__auto__.cljs$core$IFn$_invoke$arity$1 ? shutdown_f__18570__auto__.cljs$core$IFn$_invoke$arity$1(invoked_system__18566__auto__) : shutdown_f__18570__auto__.call(null,invoked_system__18566__auto__));
}}finally {rehook.test._STAR_report_STAR_ = _STAR_report_STAR__orig_val__18607;
}});

todo_test.todo_stats__items_left.cljs$lang$var = new cljs.core.Var(function(){return todo_test.todo_stats__items_left;},new cljs.core.Symbol("todo-test","todo-stats--items-left","todo-test/todo-stats--items-left",204084197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("rehook","test?","rehook/test?",-1763172863),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"todo-test","todo-test",2078442272,null),new cljs.core.Symbol(null,"todo-stats--items-left","todo-stats--items-left",-799487572,null),"todo_test.cljs",34,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo_test.todo_stats__items_left)?todo_test.todo_stats__items_left.cljs$lang$test:null)]));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rehook.test.registry,cljs.core.assoc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Var(function(){return todo_test.todo_stats__items_left;},new cljs.core.Symbol("todo-test","todo-stats--items-left","todo-test/todo-stats--items-left",204084197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("rehook","test?","rehook/test?",-1763172863),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"todo-test","todo-test",2078442272,null),new cljs.core.Symbol(null,"todo-stats--items-left","todo-stats--items-left",-799487572,null),"todo_test.cljs",34,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo_test.todo_stats__items_left)?todo_test.todo_stats__items_left.cljs$lang$test:null)]))),new cljs.core.Var(function(){return todo_test.todo_stats__items_left;},new cljs.core.Symbol("todo-test","todo-stats--items-left","todo-test/todo-stats--items-left",204084197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("rehook","test?","rehook/test?",-1763172863),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"todo-test","todo-test",2078442272,null),new cljs.core.Symbol(null,"todo-stats--items-left","todo-stats--items-left",-799487572,null),"todo_test.cljs",34,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(todo_test.todo_stats__items_left)?todo_test.todo_stats__items_left.cljs$lang$test:null)])));

//# sourceMappingURL=todo_test.js.map

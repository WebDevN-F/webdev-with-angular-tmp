"use strict";(self.webpackChunkwebdev_with_angular_tmp=self.webpackChunkwebdev_with_angular_tmp||[]).push([[431],{431:(H,v,r)=>{r.r(v),r.d(v,{TodoAppModule:()=>$});var p=r(6019),d=r(1850),t=r(3668);let O=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-about"]],decls:2,vars:0,template:function(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"about works!"),t.qZA())},styles:[""]}),e})();var A=r(8305),Z=r(4499);const P=[{id:1,name:"Task number one",day:"Monday",completed:!1},{id:2,name:"Task number two",day:"Tuesday",completed:!1},{id:3,name:"Task number three",day:"Wednesday",completed:!1},{id:4,name:"Task number four",day:"Thursday",completed:!1},{id:5,name:"Task number five",day:"Friday",completed:!1},{id:6,name:"Task number six",day:"Saturday",completed:!1}],x="WebDev.myTasks";let _=(()=>{class e{constructor(){this.tasks$=new Z.X(P)}getMyTasks(){const n=localStorage.getItem(x);return n&&this.tasks$.next(JSON.parse(n)),this.tasks$.asObservable()}addTask(n){const s=[...this.tasks$.value,n];this.tasks$.next(s),localStorage.setItem(x,JSON.stringify(s))}updateTask(n){const o=this.tasks$.value;o[n].completed=!o[n].completed,this.tasks$.next(o),localStorage.setItem(x,JSON.stringify(o))}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const w=function(e){return{completed:e}};function S(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"li"),t.TgZ(1,"input",1),t.NdJ("change",function(){const i=t.CHM(n).index;return t.oxw().onChange(i)}),t.qZA(),t.TgZ(2,"label",2),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.qZA()}if(2&e){const n=a.$implicit;t.xp6(1),t.MGl("id","task_",n.id,""),t.Q6J("checked",n.completed),t.xp6(1),t.MGl("for","task_",n.id,""),t.Q6J("ngClass",t.VKq(6,w,n.completed)),t.xp6(1),t.Oqu(n.name),t.xp6(2),t.Oqu(n.day)}}let J=(()=>{class e{constructor(n){this.taskService=n,this.myTasks=new A.y}ngOnInit(){this.myTasks=this.taskService.getMyTasks()}onChange(n){this.taskService.updateTask(n)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-tasks"]],decls:3,vars:3,consts:[[4,"ngFor","ngForOf"],["type","checkbox",3,"checked","id","change"],[3,"ngClass","for"]],template:function(n,o){1&n&&(t.TgZ(0,"ul"),t.YNc(1,S,6,8,"li",0),t.ALo(2,"async"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,o.myTasks)))},directives:[p.sg,p.mk],pipes:[p.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;width:100%;height:100%;padding:5px 20px;box-sizing:border-box;position:relative;z-index:1}[_nghost-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0;width:100%}[_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px;-webkit-user-select:none;user-select:none;cursor:pointer;transition:all .3s ease-in-out}[_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > label.completed[_ngcontent-%COMP%]{text-decoration:line-through}[_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:auto}[_nghost-%COMP%]   ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}"]}),e})();var y,C,N=r(5548),q=r(1640),T=0,b=0;const z=function(e,a,n){var o=a&&n||0,s=a||new Array(16),i=(e=e||{}).node||y,c=void 0!==e.clockseq?e.clockseq:C;if(null==i||null==c){var l=e.random||(e.rng||N.Z)();null==i&&(i=y=[1|l[0],l[1],l[2],l[3],l[4],l[5]]),null==c&&(c=C=16383&(l[6]<<8|l[7]))}var u=void 0!==e.msecs?e.msecs:Date.now(),m=void 0!==e.nsecs?e.nsecs:b+1,M=u-T+(m-b)/1e4;if(M<0&&void 0===e.clockseq&&(c=c+1&16383),(M<0||u>T)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");T=u,b=m,C=c;var g=(1e4*(268435455&(u+=122192928e5))+m)%4294967296;s[o++]=g>>>24&255,s[o++]=g>>>16&255,s[o++]=g>>>8&255,s[o++]=255&g;var h=u/4294967296*1e4&268435455;s[o++]=h>>>8&255,s[o++]=255&h,s[o++]=h>>>24&15|16,s[o++]=h>>>16&255,s[o++]=c>>>8|128,s[o++]=255&c;for(var k=0;k<6;++k)s[o+k]=i[k];return a||(0,q.Z)(s)};var f=r(9133);const I=function(e){return{"background-color":e}};let L=(()=>{class e{constructor(){this.buttonText="Button",this.color="white",this.buttonClick=new t.vpe}ngOnInit(){}onClickBtn(){this.buttonClick.emit()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-button"]],inputs:{buttonText:"buttonText",color:"color"},outputs:{buttonClick:"buttonClick"},decls:2,vars:4,consts:[["type","button",1,"btn",3,"ngStyle","click"]],template:function(n,o){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return o.onClickBtn()}),t._uU(1),t.qZA()),2&n&&(t.Q6J("ngStyle",t.VKq(2,I,o.color)),t.xp6(1),t.Oqu(o.buttonText))},directives:[p.PC],styles:[""]}),e})(),j=(()=>{class e{constructor(n,o){this.tasksService=n,this.renderer=o,this.taskName="",this.title="Default value if title empty"}ngOnInit(){}toggleAddTask(){if(!this.taskName)return void this.renderer.selectRootElement("#taskName").focus();const n={id:z(),name:this.taskName,completed:!1,day:(new Date).toLocaleDateString()};this.tasksService.addTask(n),this.taskName="",this.renderer.selectRootElement("#taskName").focus()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(_),t.Y36(t.Qsj))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],inputs:{title:"title"},decls:7,vars:2,consts:[[3,"routerLink"],[1,"header-container"],[1,"form-control"],["type","text","id","taskName","placeholder","Task Tracker",3,"ngModel","ngModelChange"],["buttonText","Add","color","green",3,"buttonClick"]],template:function(n,o){1&n&&(t.TgZ(0,"h1"),t.TgZ(1,"a",0),t._uU(2,"Welcome to Angular"),t.qZA(),t.qZA(),t.TgZ(3,"header",1),t.TgZ(4,"div",2),t.TgZ(5,"input",3),t.NdJ("ngModelChange",function(i){return o.taskName=i}),t.qZA(),t.qZA(),t.TgZ(6,"app-button",4),t.NdJ("buttonClick",function(){return o.toggleAddTask()}),t.qZA(),t.qZA()),2&n&&(t.xp6(1),t.Q6J("routerLink","/"),t.xp6(4),t.Q6J("ngModel",o.taskName))},directives:[d.yS,f.Fj,f.JJ,f.On,L],styles:["[_nghost-%COMP%]{display:block;width:100%;height:100%;position:relative;z-index:1}[_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 10px #0000001a;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:100%;padding:0 20px;box-sizing:border-box;position:relative;z-index:1}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:1.5rem}[_nghost-%COMP%]   h1[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})();const U=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-todo-app"]],decls:7,vars:1,consts:[[1,"todo_container"],["title","Task Tracker"],[3,"routerLink"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-header",1),t._UZ(2,"router-outlet"),t.TgZ(3,"footer"),t._uU(4," \xa9 2021 "),t.TgZ(5,"a",2),t._uU(6,"About"),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("routerLink","/about"))},directives:[j,d.lC,d.yS],styles:[".todo_container{max-width:500px;margin:30px auto;overflow:auto;min-height:300px;border:1px solid steelblue;padding:30px;border-radius:5px}.btn{display:inline-block;background:#000;color:#fff;border:none;padding:10px 20px;margin:5px;border-radius:5px;cursor:pointer;text-decoration:none;font-size:15px;font-family:inherit}.btn:focus{outline:none}.btn:active{transform:scale(.95)}.btn-block{display:block;width:100%}.form-control{margin:20px 0}.form-control label{display:block}.form-control input{width:100%;height:40px;margin:5px;padding:3px 7px;font-size:17px}.form-control-check{display:flex;align-items:center;justify-content:space-between}.form-control-check label{flex:1}.form-control-check input{flex:2;height:20px}\n"],encapsulation:2}),e})(),children:[{path:"",component:J},{path:"about",component:O}]}];let Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.Bz.forChild(U)],d.Bz]}),e})(),$=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.ez,f.u5,Q]]}),e})()}}]);
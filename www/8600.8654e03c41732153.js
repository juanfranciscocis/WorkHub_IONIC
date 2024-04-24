"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8600],{7700:(C,p,r)=>{r.d(p,{s:()=>f});var n=r(4496),t=r(4256),s=r(2508),c=r(2112);const e=()=>["/home"],u=()=>["/search"];let f=(()=>{var o;class l{constructor(a,g){this.usersService=a,this.router=g,this.isCompany=!1}ngOnInit(){var a;this.isCompany=(null===(a=this.usersService.getCurrentUser())||void 0===a?void 0:a.isCompany)||!1}companyOrPerson(){this.router.navigate(this.isCompany?["/profile"]:["/profile-personal"])}}return(o=l).\u0275fac=function(a){return new(a||o)(n.GI1(t.u),n.GI1(s.E5))},o.\u0275cmp=n.In1({type:o,selectors:[["app-barfooter"]],decls:10,vars:4,consts:[["translucent","true"],["col",""],["size","4"],["color","yellow","name","home-outline",1,"big-icon",3,"routerLink"],["color","yellow","name","search-outline",1,"big-icon",3,"routerLink"],["color","yellow","name","person-outline",1,"big-icon",3,"click"]],template:function(a,g){1&a&&(n.I0R(0,"ion-footer",0)(1,"ion-toolbar",1)(2,"ion-grid")(3,"ion-row")(4,"ion-col",2),n.wR5(5,"ion-icon",3),n.C$Y(),n.I0R(6,"ion-col",2),n.wR5(7,"ion-icon",4),n.C$Y(),n.I0R(8,"ion-col",2)(9,"ion-icon",5),n.qCj("click",function(){return g.companyOrPerson()}),n.C$Y()()()()()()),2&a&&(n.yG2(5),n.E7m("routerLink",n.q4q(2,e)),n.yG2(2),n.E7m("routerLink",n.q4q(3,u)))},dependencies:[c.Kk,c.eV,c.YP,c.Ko,c.qo,c.Md,c.mY,s.ER],styles:["ion-col[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:1em}.big-icon[_ngcontent-%COMP%]{font-size:2em}"]}),l})()},28:(C,p,r)=>{r.d(p,{A:()=>c});var n=r(1368),t=r(2112),s=r(4496);let c=(()=>{var e;class u{}return(e=u).\u0275fac=function(o){return new(o||e)},e.\u0275mod=s.a4G({type:e}),e.\u0275inj=s.s3X({imports:[n.MD,t.wZ]}),u})()},6032:(C,p,r)=>{r.d(p,{k:()=>e});var n=r(4496),t=r(2112),s=r(2508);const c=()=>["/home"];let e=(()=>{var u;class f{constructor(){}ngOnInit(){}}return(u=f).\u0275fac=function(l){return new(l||u)},u.\u0275cmp=n.In1({type:u,selectors:[["app-header"]],decls:3,vars:3,consts:[[3,"translucent"],[3,"routerLink"],["src","/assets/global/BizSwapLogo.png",1,"logo","ion-padding"]],template:function(l,m){1&l&&(n.I0R(0,"ion-header",0)(1,"ion-toolbar",1),n.wR5(2,"ion-img",2),n.C$Y()()),2&l&&(n.E7m("translucent",!0),n.yG2(),n.E7m("routerLink",n.q4q(2,c)))},dependencies:[t.wB,t.Eh,t.Md,t.mY,s.ER],styles:[".logo[_ngcontent-%COMP%]{width:15em}"]}),f})()},8600:(C,p,r)=>{r.r(p),r.d(p,{ProfilePersonalPageModule:()=>h});var n=r(1368),t=r(4716),s=r(2112),c=r(2508),e=r(4496),u=r(4256),f=r(6032),o=r(7700);const l=()=>["/login"],a=[{path:"",component:(()=>{var i;class _{constructor(d){this.usersService=d,this.user={companyName:"",email:"",password:"",isCompany:!1},this.user=this.usersService.getCurrentUser()}ngOnInit(){}saveChanges(){console.log(this.user),this.usersService.updateUser(this.user).then(d=>{location.reload()})}}return(i=_).\u0275fac=function(d){return new(d||i)(e.GI1(u.u))},i.\u0275cmp=e.In1({type:i,selectors:[["app-profile-personal"]],decls:25,vars:6,consts:[[3,"fullscreen"],[1,"ion-justify-content-center","ion-text-center"],["size","12"],[1,"ion-text-center","ion-justify-content-center","ion-align-items-center"],["alt","Silhouette of a person's head","src","https://ionicframework.com/docs/img/demos/avatar.svg"],["placeholder","Email",3,"ngModel","value","ngModelChange"],["expand","block","color","orange",1,"ion-margin",3,"click"],["expand","block","color","danger",1,"ion-margin",3,"routerLink"]],template:function(d,y){1&d&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-grid")(3,"ion-row",1)(4,"ion-col",2)(5,"ion-card")(6,"ion-card-header",3)(7,"ion-avatar"),e.wR5(8,"img",4),e.C$Y(),e.wR5(9,"br"),e.I0R(10,"ion-card-title"),e.OEk(11),e.C$Y()(),e.I0R(12,"ion-card-content")(13,"ion-input",5),e.iHE("ngModelChange",function(E){return e.kNx(y.user.email,E)||(y.user.email=E),E}),e.C$Y()()()()()(),e.I0R(14,"ion-grid")(15,"ion-row",1)(16,"ion-col",2)(17,"ion-button",6),e.qCj("click",function(){return y.saveChanges()}),e.OEk(18,"Save Changes"),e.C$Y()()()(),e.I0R(19,"ion-grid")(20,"ion-row",1)(21,"ion-col",2)(22,"ion-button",7),e.OEk(23,"Logout"),e.C$Y()()()()(),e.wR5(24,"app-barfooter")),2&d&&(e.yG2(),e.E7m("fullscreen",!0),e.yG2(10),e.cNF(y.user.companyName),e.yG2(2),e._6D("value",y.user.email),e.OKB("ngModel",y.user.email),e.yG2(9),e.E7m("routerLink",e.q4q(5,l)))},dependencies:[t.ue,t._G,s.O7,s.sn,s.KC,s.Gg,s.YY,s.I7,s.Kk,s._i,s.YP,s.A5,s.qo,s.qG,s.mY,c.ER,f.k,o.s]}),_})()}];let g=(()=>{var i;class _{}return(i=_).\u0275fac=function(d){return new(d||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[c.qQ.forChild(a),c.qQ]}),_})();var P=r(28);let h=(()=>{var i;class _{}return(i=_).\u0275fac=function(d){return new(d||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[n.MD,t.y,s.wZ,g,P.A]}),_})()},4256:(C,p,r)=>{r.d(p,{u:()=>c});var n=r(1528),t=r(8754),s=r(4496);let c=(()=>{var e;class u{constructor(o){this.firestore=o}createUser(o){var l=this;return(0,n.c)(function*(){return l.verifyIfUserExists(o).then(function(){var m=(0,n.c)(function*(a){if(a)return Promise.resolve(!1);let h="users/"+o.companyName;try{return yield(0,t.Sm)((0,t.UN)(l.firestore,h),o),localStorage.setItem("currentUser",JSON.stringify(o)),Promise.resolve(!0)}catch{return Promise.resolve(!1)}});return function(a){return m.apply(this,arguments)}}())})()}verifyIfUserExists(o){var l=this;return(0,n.c)(function*(){try{const m=(0,t.kt)((0,t.oV)(l.firestore,"users"),(0,t.A9)("companyName","==",o.companyName)),a=yield(0,t.uY)(m);return Promise.resolve(!a.empty)}catch{return Promise.resolve(!1)}})()}loginUser(o){var l=this;return(0,n.c)(function*(){try{const m=(0,t.kt)((0,t.oV)(l.firestore,"users"),(0,t.A9)("companyName","==",o.companyName),(0,t.A9)("password","==",o.password));if((yield(0,t.uY)(m)).empty)return Promise.resolve(!1);{let h="users/"+o.companyName;return o=(yield(0,t.i4)((0,t.UN)(l.firestore,h))).data(),localStorage.setItem("currentUser",JSON.stringify(o)),console.log("User logged in",l.getCurrentUser()),Promise.resolve(!0)}}catch{return Promise.resolve(!1)}})()}getCurrentUser(){const o=localStorage.getItem("currentUser");return o?JSON.parse(o):null}clearCurrentUser(){localStorage.removeItem("currentUser")}updateUser(o){var l=this;return(0,n.c)(function*(){const a=o.companyName;try{const P=(0,t.UN)(l.firestore,"users",a);return yield(0,t.gD)(P,{companyName:o.companyName,email:o.email,password:o.password,isCompany:o.isCompany}),console.log("User updated successfully:",o),!0}catch(P){return console.error("Error updating user:",P),!1}})()}}return(e=u).\u0275fac=function(o){return new(o||e)(s.CoB(t.OI))},e.\u0275prov=s.wxM({token:e,factory:e.\u0275fac,providedIn:"root"}),u})()}}]);
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2704],{2704:(M,R,l)=>{l.r(R),l.d(R,{RegisterPageModule:()=>C});var f=l(1368),s=l(4716),o=l(2112),h=l(2508),d=l(1528),e=l(4496),_=l(4256);const r=()=>["/login"],g=[{path:"",component:(()=>{var t;class u{constructor(n,i,y){this.usersService=n,this.alertController=i,this.router=y,this.username="",this.password="",this.email="",this.isCompany=!1}ngOnInit(){}register(){var n=this;return(0,d.c)(function*(){if(!n.username||!n.password||!n.email)return yield n.presentAlert("Error","Please fill all required fields"),!1;n.user={companyName:n.username,email:n.email,password:n.password,isCompany:n.isCompany,image:""};let i=yield n.usersService.createUser(n.user);return i?n.router.navigate(["/home"],{state:{user:n.user}}):yield n.presentAlert("Error","User already exists"),i})()}presentAlert(n,i){var y=this;return(0,d.c)(function*(){yield(yield y.alertController.create({header:n,message:i,buttons:["OK"]})).present()})()}}return(t=u).\u0275fac=function(n){return new(n||t)(e.GI1(_.u),e.GI1(o.iW),e.GI1(h.E5))},t.\u0275cmp=e.In1({type:t,selectors:[["app-register"]],decls:36,vars:6,consts:[[1,"center_toolbar"],["src","/assets/global/BizSwapLogo.png",1,"ion-text-center","ion-margin","ion-padding"],[1,"ion-text-center","white-text"],[1,"white-text"],[1,"ion-text-start","white-text"],["color","dark",1,"ion-border-radius"],["required","",1,"",3,"ngModel","ngModelChange"],["type","email","required","",1,"",3,"ngModel","ngModelChange"],["type","password","required","",3,"ngModel","ngModelChange"],["color","orange",3,"ngModel","ngModelChange"],["expand","block","color","orange",1,"ion-margin",3,"click"],[1,"ion-text-center"],["color","yellow","fill","clear",3,"routerLink"],[1,""]],template:function(n,i){1&n&&(e.I0R(0,"ion-header"),e.wR5(1,"ion-toolbar",0),e.C$Y(),e.I0R(2,"ion-content"),e.wR5(3,"ion-img",1),e.I0R(4,"ion-card")(5,"ion-card-header",2)(6,"ion-card-title",3),e.OEk(7,"Register"),e.C$Y()(),e.I0R(8,"ion-card-content")(9,"ion-label",4),e.OEk(10,"Name or Company"),e.C$Y(),e.I0R(11,"ion-item",5)(12,"ion-input",6),e.iHE("ngModelChange",function(a){return e.kNx(i.username,a)||(i.username=a),a}),e.C$Y()(),e.wR5(13,"br"),e.I0R(14,"ion-label",4),e.OEk(15,"Email"),e.C$Y(),e.I0R(16,"ion-item",5)(17,"ion-input",7),e.iHE("ngModelChange",function(a){return e.kNx(i.email,a)||(i.email=a),a}),e.C$Y()(),e.wR5(18,"br"),e.I0R(19,"ion-label",4),e.OEk(20,"Password"),e.C$Y(),e.I0R(21,"ion-item",5)(22,"ion-input",8),e.iHE("ngModelChange",function(a){return e.kNx(i.password,a)||(i.password=a),a}),e.C$Y()(),e.wR5(23,"br"),e.I0R(24,"ion-toggle",9),e.iHE("ngModelChange",function(a){return e.kNx(i.isCompany,a)||(i.isCompany=a),a}),e.I0R(25,"ion-label",3),e.OEk(26,"Are you a company? "),e.C$Y()()(),e.I0R(27,"ion-button",10),e.qCj("click",function(){return i.register()}),e.I0R(28,"ion-label",3),e.OEk(29,"Register"),e.C$Y()()(),e.I0R(30,"ion-grid")(31,"ion-row")(32,"ion-col",11)(33,"ion-button",12)(34,"ion-label",13),e.OEk(35,"Login"),e.C$Y()()()()()()),2&n&&(e.yG2(12),e.OKB("ngModel",i.username),e.yG2(5),e.OKB("ngModel",i.email),e.yG2(5),e.OKB("ngModel",i.password),e.yG2(2),e.OKB("ngModel",i.isCompany),e.yG2(9),e.E7m("routerLink",e.q4q(5,r)))},dependencies:[s.ue,s.eJ,s._G,o.sn,o.KC,o.Gg,o.YY,o.I7,o.Kk,o._i,o.YP,o.wB,o.Eh,o.A5,o.Yb,o.QR,o.qo,o.E$,o.Md,o.UJ,o.qG,o.mY,h.ER],styles:[".custom-content[_ngcontent-%COMP%], .center_tool[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.login[_ngcontent-%COMP%]{width:15em}.white-text[_ngcontent-%COMP%]{color:#fff!important}"]}),u})()}];let m=(()=>{var t;class u{}return(t=u).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[h.qQ.forChild(g),h.qQ]}),u})(),C=(()=>{var t;class u{}return(t=u).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[f.MD,s.y,o.wZ,m]}),u})()},4256:(M,R,l)=>{l.d(R,{u:()=>h});var f=l(1528),s=l(8754),o=l(4496);let h=(()=>{var d;class e{constructor(r){this.firestore=r}createUser(r){var c=this;return(0,f.c)(function*(){return c.verifyIfUserExists(r).then(function(){var g=(0,f.c)(function*(m){if(m)return Promise.resolve(!1);let u="users/"+r.companyName;try{return yield(0,s.Sm)((0,s.UN)(c.firestore,u),r),localStorage.setItem("currentUser",JSON.stringify(r)),r.isCompany&&(yield(0,s.Sm)((0,s.UN)(c.firestore,"posts",r.companyName),{companyName:r.companyName,description:"",contact:"",image:"",price:0})),Promise.resolve(!0)}catch{return Promise.resolve(!1)}});return function(m){return g.apply(this,arguments)}}())})()}verifyIfUserExists(r){var c=this;return(0,f.c)(function*(){try{const g=(0,s.kt)((0,s.oV)(c.firestore,"users"),(0,s.A9)("companyName","==",r.companyName)),m=yield(0,s.uY)(g);return Promise.resolve(!m.empty)}catch{return Promise.resolve(!1)}})()}loginUser(r){var c=this;return(0,f.c)(function*(){try{const g=(0,s.kt)((0,s.oV)(c.firestore,"users"),(0,s.A9)("companyName","==",r.companyName),(0,s.A9)("password","==",r.password));if((yield(0,s.uY)(g)).empty)return Promise.resolve(!1);{let u="users/"+r.companyName;return r=(yield(0,s.i4)((0,s.UN)(c.firestore,u))).data(),localStorage.setItem("currentUser",JSON.stringify(r)),console.log("User logged in",c.getCurrentUser()),Promise.resolve(!0)}}catch{return Promise.resolve(!1)}})()}getCurrentUser(){const r=localStorage.getItem("currentUser");return r?JSON.parse(r):null}clearCurrentUser(){localStorage.removeItem("currentUser")}updateUser(r){var c=this;return(0,f.c)(function*(){const m=r.companyName;try{const t=(0,s.UN)(c.firestore,"users",m);return yield(0,s.gD)(t,{companyName:r.companyName,email:r.email,password:r.password,isCompany:r.isCompany,image:r.image}),console.log("User updated successfully:",r),localStorage.removeItem("currentUser"),localStorage.setItem("currentUser",JSON.stringify(r)),!0}catch(t){return console.error("Error updating user:",t),!1}})()}}return(d=e).\u0275fac=function(r){return new(r||d)(o.CoB(s.OI))},d.\u0275prov=o.wxM({token:d,factory:d.\u0275fac,providedIn:"root"}),e})()}}]);
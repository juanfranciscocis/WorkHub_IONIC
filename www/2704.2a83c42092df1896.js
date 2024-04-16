"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2704],{2704:(f,c,a)=>{a.r(c),a.d(c,{RegisterPageModule:()=>M});var p=a(1368),u=a(4716),t=a(2112),d=a(2508),m=a(1528),e=a(4496),R=a(4256);const C=()=>["/login"],h=[{path:"",component:(()=>{var r;class s{constructor(n,o,l){this.usersService=n,this.alertController=o,this.router=l,this.username="",this.password="",this.email="",this.isCompany=!1}ngOnInit(){}register(){var n=this;return(0,m.c)(function*(){if(!n.username||!n.password||!n.email)return yield n.presentAlert("Error","Please fill all required fields"),!1;n.user={companyName:n.username,email:n.email,password:n.password,isCompany:n.isCompany};let o=yield n.usersService.createUser(n.user);return o?n.router.navigate(["/home"],{state:{user:n.user}}):yield n.presentAlert("Error","User already exists"),o})()}presentAlert(n,o){var l=this;return(0,m.c)(function*(){yield(yield l.alertController.create({header:n,message:o,buttons:["OK"]})).present()})()}}return(r=s).\u0275fac=function(n){return new(n||r)(e.GI1(R.u),e.GI1(t.iW),e.GI1(d.E5))},r.\u0275cmp=e.In1({type:r,selectors:[["app-register"]],decls:36,vars:6,consts:[[1,"center_toolbar"],["src","/assets/global/BizSwapLogo.png",1,"ion-text-center","ion-margin","ion-padding"],[1,"ion-text-center","white-text"],[1,"white-text"],[1,"ion-text-start","white-text"],["color","light",1,"ion-border-radius"],["required","",1,"",3,"ngModel","ngModelChange"],["type","email","required","",1,"",3,"ngModel","ngModelChange"],["type","password","required","",3,"ngModel","ngModelChange"],["color","orange",3,"ngModel","ngModelChange"],["expand","block","color","orange",1,"ion-margin",3,"click"],[1,"ion-text-center"],["color","yellow","fill","clear",3,"routerLink"],[1,""]],template:function(n,o){1&n&&(e.I0R(0,"ion-header"),e.wR5(1,"ion-toolbar",0),e.C$Y(),e.I0R(2,"ion-content"),e.wR5(3,"ion-img",1),e.I0R(4,"ion-card")(5,"ion-card-header",2)(6,"ion-card-title",3),e.OEk(7,"Register"),e.C$Y()(),e.I0R(8,"ion-card-content")(9,"ion-label",4),e.OEk(10,"Name or Company"),e.C$Y(),e.I0R(11,"ion-item",5)(12,"ion-input",6),e.iHE("ngModelChange",function(i){return e.kNx(o.username,i)||(o.username=i),i}),e.C$Y()(),e.wR5(13,"br"),e.I0R(14,"ion-label",4),e.OEk(15,"Email"),e.C$Y(),e.I0R(16,"ion-item",5)(17,"ion-input",7),e.iHE("ngModelChange",function(i){return e.kNx(o.email,i)||(o.email=i),i}),e.C$Y()(),e.wR5(18,"br"),e.I0R(19,"ion-label",4),e.OEk(20,"Password"),e.C$Y(),e.I0R(21,"ion-item",5)(22,"ion-input",8),e.iHE("ngModelChange",function(i){return e.kNx(o.password,i)||(o.password=i),i}),e.C$Y()(),e.wR5(23,"br"),e.I0R(24,"ion-toggle",9),e.iHE("ngModelChange",function(i){return e.kNx(o.isCompany,i)||(o.isCompany=i),i}),e.I0R(25,"ion-label",3),e.OEk(26,"Are you a company? "),e.C$Y()()(),e.I0R(27,"ion-button",10),e.qCj("click",function(){return o.register()}),e.I0R(28,"ion-label",3),e.OEk(29,"Register"),e.C$Y()()(),e.I0R(30,"ion-grid")(31,"ion-row")(32,"ion-col",11)(33,"ion-button",12)(34,"ion-label",13),e.OEk(35,"Login"),e.C$Y()()()()()()),2&n&&(e.yG2(12),e.OKB("ngModel",o.username),e.yG2(5),e.OKB("ngModel",o.email),e.yG2(5),e.OKB("ngModel",o.password),e.yG2(2),e.OKB("ngModel",o.isCompany),e.yG2(9),e.E7m("routerLink",e.q4q(5,C)))},dependencies:[u.ue,u.eJ,u._G,t.sn,t.KC,t.Gg,t.YY,t.I7,t.Kk,t._i,t.YP,t.wB,t.Eh,t.A5,t.Yb,t.QR,t.qo,t.E$,t.Md,t.UJ,t.qG,t.mY,d.ER],styles:[".custom-content[_ngcontent-%COMP%], .center_tool[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.login[_ngcontent-%COMP%]{width:15em}.white-text[_ngcontent-%COMP%]{color:#fff!important}"]}),s})()}];let y=(()=>{var r;class s{}return(r=s).\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.a4G({type:r}),r.\u0275inj=e.s3X({imports:[d.qQ.forChild(h),d.qQ]}),s})(),M=(()=>{var r;class s{}return(r=s).\u0275fac=function(n){return new(n||r)},r.\u0275mod=e.a4G({type:r}),r.\u0275inj=e.s3X({imports:[p.MD,u.y,t.wZ,y]}),s})()}}]);
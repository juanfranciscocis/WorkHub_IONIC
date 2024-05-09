"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7398],{7398:(E,m,s)=>{s.r(m),s.d(m,{FavoritesPageModule:()=>x});var d=s(1368),g=s(4716),c=s(2112),u=s(2508),v=s(1528),e=s(4496),h=s(692),p=s(4256),y=s(6032),F=s(7700);function C(t,a){1&t&&(e.I0R(0,"div",5),e.wR5(1,"ion-spinner",6),e.C$Y())}function R(t,a){if(1&t){const o=e.KQA();e.I0R(0,"ion-card",9)(1,"div",10),e.qCj("click",function(){const r=e.usT(o).$implicit,l=e.GaO(2);return e.CGJ(l.onclickpage(r.companyName))}),e.I0R(2,"ion-card-content",11),e.wR5(3,"img",12),e.C$Y(),e.I0R(4,"ion-card-header")(5,"ion-card-title"),e.OEk(6),e.C$Y(),e.I0R(7,"ion-card-subtitle"),e.OEk(8),e.C$Y()(),e.I0R(9,"ion-card-content",13),e.OEk(10),e.C$Y()(),e.I0R(11,"ion-card-content",14)(12,"ion-icon",15),e.qCj("click",function(){const r=e.usT(o).$implicit,l=e.GaO(2);return e.CGJ(l.unFavoriteAlert(r.companyName))}),e.C$Y()()()}if(2&t){const o=a.$implicit;e.yG2(3),e._6D("src",o.image,e.K6U),e.yG2(3),e.cNF(o.companyName),e.yG2(2),e.oRS("$ ",o.price,""),e.yG2(2),e.oRS(" ",o.description," ")}}function I(t,a){if(1&t&&(e.I0R(0,"div",7),e.yuY(1,R,13,4,"ion-card",8),e.C$Y()),2&t){const o=e.GaO();e.yG2(),e.E7m("ngForOf",o.items)}}function P(t,a){1&t&&(e.I0R(0,"div",16)(1,"h1"),e.OEk(2,"No favorites found"),e.C$Y(),e.I0R(3,"h6"),e.OEk(4,"Add favorites using the star icon"),e.C$Y(),e.wR5(5,"ion-icon",17),e.I0R(6,"h6"),e.OEk(7,"... or pull down to refresh"),e.C$Y(),e.wR5(8,"ion-icon",18),e.C$Y())}const $=[{path:"",component:(()=>{var t;class a{constructor(i,n,r){var l;this.service=i,this.usersService=n,this.router=r,this.isLoadingBusiness=!0,this.service.getFavorites((null===(l=this.usersService.getCurrentUser())||void 0===l?void 0:l.companyName)||"").then(f=>{this.items=f,this.isLoadingBusiness=!1})}ngOnInit(){}onclickpage(i){this.router.navigate(["/prod-description"],{queryParams:{name:i}})}unFavoriteAlert(i){var n=this;return(0,v.c)(function*(){const r=document.createElement("ion-alert");var l;r.header="Unfavorite",r.message="Do you want to remove this company from favorites?",r.buttons=[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:(l=(0,v.c)(function*(){yield n.unFavorite(i),yield n.confirmationAlertUnFavorite(i)}),function(){return l.apply(this,arguments)})}],document.body.appendChild(r),yield r.present()})()}confirmationAlertUnFavorite(i){return(0,v.c)(function*(){const n=document.createElement("ion-alert");n.header="Favorite",n.message=`The company ${i} has been removed from favorites`,n.buttons=[{text:"OK",role:"cancel",cssClass:"secondary"}],document.body.appendChild(n),yield n.present()})()}unFavorite(i){var n;this.service.removeFavorite((null===(n=this.usersService.getCurrentUser())||void 0===n?void 0:n.companyName)||"",i).then(r=>{this.doRefresh({target:{complete:()=>{}}})})}doRefresh(i){var n;this.service.getFavorites((null===(n=this.usersService.getCurrentUser())||void 0===n?void 0:n.companyName)||"").then(r=>{this.items=r,this.isLoadingBusiness=!1,i.target.complete()})}}return(t=a).\u0275fac=function(i){return new(i||t)(e.GI1(h.e),e.GI1(p.u),e.GI1(u.E5))},t.\u0275cmp=e.In1({type:t,selectors:[["app-favorites"]],decls:8,vars:4,consts:[[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["class","flex justify-center items-center p-5",4,"ngIf"],["class","ion-padding",4,"ngIf"],["class","flex flex-col justify-center items-center p-5",4,"ngIf"],[1,"flex","justify-center","items-center","p-5"],["name","lines"],[1,"ion-padding"],["color","Primary",4,"ngFor","ngForOf"],["color","Primary"],[3,"click"],[1,"card-content"],[1,"centered-image",3,"src"],["color","orange"],["color","orange",1,"flex","justify-center"],["name","star",3,"click"],[1,"flex","flex-col","justify-center","items-center","p-5"],["name","star-outline"],["name","arrow-down-outline"]],template:function(i,n){1&i&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-refresher",1),e.qCj("ionRefresh",function(l){return n.doRefresh(l)}),e.wR5(3,"ion-refresher-content"),e.C$Y(),e.yuY(4,C,2,0,"div",2)(5,I,2,1,"div",3)(6,P,9,0,"div",4),e.C$Y(),e.wR5(7,"app-barfooter")),2&i&&(e.yG2(),e.E7m("fullscreen",!0),e.yG2(3),e.E7m("ngIf",n.isLoadingBusiness),e.yG2(),e.E7m("ngIf",!n.isLoadingBusiness),e.yG2(),e.E7m("ngIf",0===(null==n.items?null:n.items.length)))},dependencies:[d.ay,d.u_,c.KC,c.Gg,c.YY,c.MN,c.I7,c._i,c.Ko,c._I,c.Wi,c.YA,y.k,F.s]}),a})()}];let G=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[u.qQ.forChild($),u.qQ]}),a})();var Y=s(28);let x=(()=>{var t;class a{}return(t=a).\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[d.MD,g.y,c.wZ,G,Y.A]}),a})()}}]);
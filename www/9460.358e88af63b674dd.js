"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9460],{9460:(G,d,a)=>{a.r(d),a.d(d,{HomePageModule:()=>R});var r=a(1368),g=a(4716),c=a(2112),m=a(2508),e=a(4496),u=a(2948),f=a(6032),p=a(7700);function y(n,i){1&n&&(e.I0R(0,"div",3),e.wR5(1,"ion-spinner",4),e.C$Y())}function P(n,i){if(1&n){const o=e.KQA();e.I0R(0,"ion-card",7),e.qCj("click",function(){const l=e.usT(o).$implicit,I=e.GaO(2);return e.CGJ(I.onclickpage(l.companyName))}),e.I0R(1,"ion-card-content",8),e.wR5(2,"img",9),e.C$Y(),e.I0R(3,"ion-card-header")(4,"ion-card-title"),e.OEk(5),e.C$Y(),e.I0R(6,"ion-card-subtitle"),e.OEk(7),e.C$Y()(),e.I0R(8,"ion-card-content",10),e.OEk(9),e.C$Y()()}if(2&n){const o=i.$implicit;e.yG2(2),e._6D("src",o.image,e.K6U),e.yG2(3),e.cNF(o.companyName),e.yG2(2),e.oRS("$ ",o.price,""),e.yG2(2),e.oRS(" ",o.description," ")}}function v(n,i){if(1&n&&(e.I0R(0,"div",5),e.yuY(1,P,10,4,"ion-card",6),e.C$Y()),2&n){const o=e.GaO();e.yG2(),e.E7m("ngForOf",o.items)}}const h=[{path:"",component:(()=>{var n;class i{constructor(t,s){this.service=t,this.router=s,this.isLoadingBusiness=!0,this.service.getAllPosts().then(l=>{this.items=l,this.isLoadingBusiness=!1})}ngOnInit(){}onclickpage(t){this.router.navigate(["/prod-description"],{queryParams:{name:t}})}}return(n=i).\u0275fac=function(t){return new(t||n)(e.GI1(u.c),e.GI1(m.E5))},n.\u0275cmp=e.In1({type:n,selectors:[["app-home"]],decls:5,vars:3,consts:[[3,"fullscreen"],["class","flex justify-center items-center p-5",4,"ngIf"],["class","ion-padding",4,"ngIf"],[1,"flex","justify-center","items-center","p-5"],["name","lines"],[1,"ion-padding"],["color","Primary",3,"click",4,"ngFor","ngForOf"],["color","Primary",3,"click"],[1,"card-content"],[1,"centered-image",3,"src"],["color","orange"]],template:function(t,s){1&t&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0),e.yuY(2,y,2,0,"div",1)(3,v,2,1,"div",2),e.C$Y(),e.wR5(4,"app-barfooter")),2&t&&(e.yG2(),e.E7m("fullscreen",!0),e.yG2(),e.E7m("ngIf",s.isLoadingBusiness),e.yG2(),e.E7m("ngIf",!s.isLoadingBusiness))},dependencies:[r.ay,r.u_,c.KC,c.Gg,c.YY,c.MN,c.I7,c._i,c.YA,f.k,p.s],styles:[".centered-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.card-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-card-title[_ngcontent-%COMP%]{--color: white}ion-card-subtitle[_ngcontent-%COMP%]{--color: orange}"]}),i})()}];let C=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({imports:[m.qQ.forChild(h),m.qQ]}),i})();var H=a(28);let R=(()=>{var n;class i{}return(n=i).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({imports:[r.MD,g.y,c.wZ,C,H.A]}),i})()}}]);
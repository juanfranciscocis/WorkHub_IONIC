"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4216],{4216:(M,p,r)=>{r.r(p),r.d(p,{ProdDescriptionPageModule:()=>I});var m=r(1368),g=r(4716),i=r(2112),u=r(2508),d=r(1528),e=r(4496),h=r(2948),f=r(4256),P=r(692),v=r(7700),y=r(3008);function C(o,a){1&o&&(e.I0R(0,"div",6),e.wR5(1,"ion-spinner",7),e.C$Y())}function b(o,a){if(1&o){const s=e.KQA();e.I0R(0,"div",8)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),e.OEk(4),e.C$Y(),e.I0R(5,"ion-card-subtitle"),e.OEk(6),e.C$Y()(),e.wR5(7,"img",9),e.I0R(8,"ion-card-content"),e.OEk(9),e.C$Y(),e.I0R(10,"ion-card-content",10)(11,"ion-button",11),e.qCj("click",function(){e.usT(s);const n=e.GaO();return e.CGJ(n.whatsapp(null==n.business?null:n.business.contact))}),e.I0R(12,"ion-label"),e.OEk(13),e.C$Y(),e.OEk(14," \xa0\xa0 "),e.wR5(15,"ion-icon",12),e.C$Y()()(),e.wR5(16,"app-products",13),e.I0R(17,"ion-button",14),e.qCj("click",function(){e.usT(s);const n=e.GaO();return e.CGJ(n.favoriteAlert(n.business.companyName))}),e.OEk(18,"Add to Favorites"),e.C$Y()()}if(2&o){const s=e.GaO();e.yG2(4),e.cNF(null==s.business?null:s.business.companyName),e.yG2(2),e.cNF(null==s.business?null:s.business.price),e.yG2(),e._6D("src",null==s.business?null:s.business.image,e.K6U),e.yG2(2),e.oRS(" ",null==s.business?null:s.business.description," "),e.yG2(4),e.cNF(null==s.business?null:s.business.contact),e.yG2(3),e.E7m("products",s.products)}}const R=[{path:"",component:(()=>{var o;class a{constructor(t,n,c,l){this.route=t,this.service=n,this.usersService=c,this.favoritesService=l,this.nameParam="",this.products=[],this.user={companyName:"user",email:"",password:"",isCompany:!1},this.isLoadingBusiness=!0,this.user=this.usersService.getCurrentUser()}ngOnInit(){this.route.queryParams.subscribe(t=>{this.nameParam=t.name,console.log(this.nameParam)}),console.log(this.nameParam),this.service.getPostByCompanyName(this.nameParam).then(t=>{this.business=t,console.log(this.business)}),this.service.getProductByName(this.nameParam).then(t=>{this.products=t,console.log("Products:",this.products),this.isLoadingBusiness=!1})}whatsapp(t){window.open("https://wa.me/"+t,"_blank")}favoriteAlert(t){var n=this;return(0,d.c)(function*(){const c=document.createElement("ion-alert");var l;c.header="Favorite",c.message="Do you want to add this company to favorites?",c.buttons=[{text:"Cancel",role:"cancel",cssClass:"secondary"},{text:"Yes",handler:(l=(0,d.c)(function*(){yield n.favorite(t),yield n.confirmationAlerFavorite(t)}),function(){return l.apply(this,arguments)})}],document.body.appendChild(c),yield c.present()})()}confirmationAlerFavorite(t){return(0,d.c)(function*(){const n=document.createElement("ion-alert");n.header="Favorite",n.message=`The company ${t} has been added to favorites`,n.buttons=[{text:"OK",role:"cancel",cssClass:"secondary"}],document.body.appendChild(n),yield n.present()})()}favorite(t){console.log("Favorite",t),console.log(this.user),this.favoritesService.addFavorite(this.user.companyName,t).then(n=>{console.log(n)})}doRefresh(t){this.service.getPostByCompanyName(this.nameParam).then(n=>{this.business=n,console.log(this.business)}),this.service.getProductByName(this.nameParam).then(n=>{this.products=n,console.log("Products:",this.products),t.target.complete()})}}return(o=a).\u0275fac=function(t){return new(t||o)(e.GI1(u.gV),e.GI1(h.c),e.GI1(f.u),e.GI1(P.e))},o.\u0275cmp=e.In1({type:o,selectors:[["app-prod-description"]],decls:9,vars:3,consts:[["slot","start"],["default-href","#"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["class","flex justify-center items-center p-5",4,"ngIf"],["class","ion-padding",4,"ngIf"],[1,"flex","justify-center","items-center","p-5"],["name","lines"],[1,"ion-padding"],["alt","image",1,"img-card",3,"src"],[1,"ion-text-center","ion-justify-content-center","ion-align-items-center"],["color","orange","fill","clear",3,"click"],["name","call",1,"big-icon"],[3,"products"],["color","orange","expand","block",1,"p-5",3,"click"]],template:function(t,n){1&t&&(e.I0R(0,"ion-toolbar")(1,"ion-buttons",0),e.wR5(2,"ion-back-button",1),e.C$Y()(),e.I0R(3,"ion-content",2)(4,"ion-refresher",3),e.qCj("ionRefresh",function(l){return n.doRefresh(l)}),e.wR5(5,"ion-refresher-content"),e.C$Y(),e.yuY(6,C,2,0,"div",4)(7,b,19,6,"div",5),e.C$Y(),e.wR5(8,"app-barfooter")),2&t&&(e.yG2(3),e.E7m("fullscreen",!0),e.yG2(3),e.E7m("ngIf",n.isLoadingBusiness),e.yG2(),e.E7m("ngIf",!n.isLoadingBusiness))},dependencies:[m.u_,i.sn,i.GS,i.KC,i.Gg,i.YY,i.MN,i.I7,i._i,i.Ko,i.QR,i._I,i.Wi,i.YA,i.Md,i.Im,v.s,y.G],styles:[".big-icon[_ngcontent-%COMP%]{font-size:40px;display:block;text-align:center}.small-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}img[_ngcontent-%COMP%]{width:100%;height:auto}ion-card-title[_ngcontent-%COMP%]{--color: white}ion-card-subtitle[_ngcontent-%COMP%]{--color: orange}"]}),a})()}];let G=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.a4G({type:o}),o.\u0275inj=e.s3X({imports:[u.qQ.forChild(R),u.qQ]}),a})();var D=r(28);let I=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.a4G({type:o}),o.\u0275inj=e.s3X({imports:[m.MD,g.y,i.wZ,G,D.A]}),a})()}}]);
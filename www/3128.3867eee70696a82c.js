"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3128],{3128:(R,h,r)=>{r.r(h),r.d(h,{SearchPageModule:()=>F});var u=r(1368),d=r(4716),a=r(2112),g=r(2508),e=r(4496),p=r(8828),f=r(6032),m=r(7700);function S(o,t){if(1&o&&(e.I0R(0,"ion-select-option",8),e.OEk(1),e.C$Y()),2&o){const c=t.$implicit;e._6D("value",c),e.yG2(),e.cNF(c)}}function v(o,t){1&o&&(e.I0R(0,"ion-card")(1,"ion-card-header")(2,"ion-card-title"),e.OEk(3,"WorkHub"),e.C$Y(),e.I0R(4,"ion-card-subtitle",9),e.OEk(5,"$20"),e.C$Y()()())}const y=()=>[1,2,3,4,5,6,7,8,9,10],C=[{path:"",component:(()=>{var o;class t{constructor(n){this.searchService=n,this.categories=["Electronics","Clothing","Food","Tourism","Furniture","Books","Other"],this.choosedCategory=""}ngOnInit(){}category(n){this.choosedCategory=n.detail.value,this.search("")}search(n){let i;i=""!==n?n.detail.value:"",this.searchService.makeSearch(i,this.choosedCategory).then(s=>{console.log(s)})}}return(o=t).\u0275fac=function(n){return new(n||o)(e.GI1(p._))},o.\u0275cmp=e.In1({type:o,selectors:[["app-search"]],decls:15,vars:5,consts:[[3,"fullscreen"],["size","9"],["color","orange",3,"debounce","ionInput"],["size","3"],["interface","popover","placeholder","Filter",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["size","12"],[4,"ngFor","ngForOf"],[3,"value"],["color","orange"]],template:function(n,i){1&n&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-grid")(3,"ion-row")(4,"ion-col",1)(5,"ion-searchbar",2),e.qCj("ionInput",function(l){return i.search(l)}),e.C$Y()(),e.I0R(6,"ion-col",3)(7,"ion-list")(8,"ion-item")(9,"ion-select",4),e.qCj("ionChange",function(l){return i.category(l)}),e.yuY(10,S,2,2,"ion-select-option",5),e.C$Y()()()()(),e.I0R(11,"ion-row")(12,"ion-col",6),e.yuY(13,v,6,0,"ion-card",7),e.C$Y()()()(),e.wR5(14,"app-barfooter")),2&n&&(e.yG2(),e.E7m("fullscreen",!0),e.yG2(4),e.E7m("debounce",1e3),e.yG2(5),e.E7m("ngForOf",i.categories),e.yG2(3),e.E7m("ngForOf",e.q4q(4,y)))},dependencies:[u.ay,a.KC,a.YY,a.MN,a.I7,a.Kk,a._i,a.YP,a.Yb,a.OC,a.qo,a.KQ,a.Cy,a.gd,a.IT,a.qG,f.k,m.s]}),t})()}];let P=(()=>{var o;class t{}return(o=t).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.a4G({type:o}),o.\u0275inj=e.s3X({imports:[g.qQ.forChild(C),g.qQ]}),t})();var I=r(28);let F=(()=>{var o;class t{}return(o=t).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.a4G({type:o}),o.\u0275inj=e.s3X({imports:[u.MD,d.y,a.wZ,P,I.A]}),t})()}}]);
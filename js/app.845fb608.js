(function(t){function e(e){for(var n,i,a=e[0],s=e[1],d=e[2],u=0,b=[];u<a.length;u++)i=a[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&b.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(b.length)b.shift()();return c.push.apply(c,d||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},c=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="puppies/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var l=s;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0d2b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={class:"kong border"},c={class:"container-fluid"},i={class:"row justify-content-center"},a={class:"col"};function s(t,e,r,s,d,l){var u=Object(n["y"])("TheHeader"),b=Object(n["y"])("router-view"),f=Object(n["y"])("TheFooter");return Object(n["r"])(),Object(n["e"])("div",o,[Object(n["f"])("div",c,[Object(n["f"])("div",i,[Object(n["f"])("div",a,[Object(n["h"])(u),Object(n["h"])(b)])]),Object(n["h"])(f)])])}var d={class:"div justify-content-between border-bottom"},l={class:"h5 p-1"},u=Object(n["f"])("div",{class:""},"00",-1);function b(t,e,r,o,c,i){return Object(n["r"])(),Object(n["e"])("div",d,[Object(n["f"])("div",l,Object(n["A"])(c.title),1),u])}var f={name:"TheHeader",data:function(){return{title:"idle boilerplate"}}},p=r("6b0d"),O=r.n(p);const j=O()(f,[["render",b]]);var m=j,h={class:"row justify-content-center"},v={class:"col-lg-6 col-md-8 mt-5"},w={class:"footer border-top mb-5 pt-3"},g={class:"m-0"},y={class:"fw-bold"},I=Object(n["g"])(" made by "),S=Object(n["f"])("a",{href:"https://www.nickbreslin.com"},"Nick Breslin",-1),M=Object(n["g"])(". "),x=Object(n["f"])("p",{class:"m-0"},[Object(n["g"])(" Proudly built with "),Object(n["f"])("a",{href:"https://https://vuejs.org/"},"Vue"),Object(n["g"])(" and "),Object(n["f"])("a",{href:"https://getbootstrap.com/"},"Bootstrap"),Object(n["g"])(". ")],-1);function C(t,e,r,o,c,i){return Object(n["r"])(),Object(n["e"])("div",h,[Object(n["f"])("div",v,[Object(n["f"])("div",w,[Object(n["f"])("p",g,[Object(n["f"])("span",y,Object(n["A"])(c.title),1),I,S,M]),x])])])}var A={name:"TheFooter",data:function(){return{title:"idle boilerplate"}}};const q=O()(A,[["render",C]]);var k=q,_={name:"App",components:{TheHeader:m,TheFooter:k}};r("d872");const P=O()(_,[["render",s],["__scopeId","data-v-a204d810"]]);var T=P,L=r("bc3a"),D=r.n(L),G=r("6c02");function E(t,e,r,o,c,i){var a=Object(n["y"])("LootChest");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(a,{itemIds:c.itemIds,draws:1,power:1,class:"mb-3"},null,8,["itemIds"]),Object(n["h"])(a,{itemIds:c.itemIds2,draws:1,power:3},null,8,["itemIds"])],64)}var F={class:"card"},B={class:"card-header d-flex justify-content-between"},H={class:"fw-bold"},N={class:"card-body"},R=Object(n["f"])("div",{class:"fw-bold"},"Contents...",-1),J={class:"col"},V={key:0},z={class:"col"},K={class:"card-footer"},Q=Object(n["f"])("div",{class:"fw-bold"},"Results...",-1),U={class:"col"};function W(t,e,r,o,c,i){return Object(n["r"])(),Object(n["e"])("div",F,[Object(n["f"])("div",B,[Object(n["f"])("span",H,"LootChest ("+Object(n["A"])(r.draws)+") - ("+Object(n["A"])(i.totalItemsCount)+")",1),Object(n["f"])("button",{onClick:e[0]||(e[0]=function(t){return i.open()}),class:"btn btn-sm btn-primary"},"Open")]),Object(n["f"])("div",N,[R,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(i.items,(function(t){return Object(n["r"])(),Object(n["e"])("div",{key:t.id,class:"row mb-1"},[Object(n["f"])("div",J,Object(n["A"])(t.id),1),Object(n["f"])("div",{class:Object(n["n"])(["col","text-".concat(t.rarityColor)])},[Object(n["g"])(Object(n["A"])(t.label),1),t.unique?(Object(n["r"])(),Object(n["e"])("span",V,"*")):Object(n["d"])("",!0)],2),Object(n["f"])("div",z,Object(n["A"])(t.chance)+"%",1)])})),128))]),Object(n["f"])("div",K,[Q,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.results,(function(t){return Object(n["r"])(),Object(n["e"])("div",{key:t.id,class:"row mb-1"},[Object(n["f"])("div",U,Object(n["A"])(t.id),1),Object(n["f"])("div",{class:Object(n["n"])(["col","text-".concat(t.rarityColor)])},Object(n["A"])(t.label),3)])})),128))])])}var X=r("2909"),Y=(r("a9e3"),r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0"),r("4de4"),r("caad"),r("2532"),r("159b"),r("7db0"),r("b680"),{common:"common",uncommon:"uncommon",rare:"rare",epic:"epic",legendary:"legendary",relic:"relic"}),Z={common:"white",uncommon:"success",rare:"primary",epic:"warning",legendary:"info",relic:"danger"},$={stone:0,iron:1,steel:2,magicSword:3},tt={goblin:0},et=[{id:$.stone,label:"Stone",rarity:Y.common},{id:$.iron,label:"Iron",rarity:Y.uncommon},{id:$.steel,label:"Steel",rarity:Y.rare},{id:$.magicSword,label:"Magic Sword",rarity:Y.epic,unique:!0},{id:$.goblinSword,label:"Goblin Sword",rarity:Y.epic,unique:!0},{id:$.goblinSword2,label:"Goblin Sword II",rarity:Y.epic,unique:!0},{id:$.goblinSword3,label:"Goblin Sword III",rarity:Y.epic,unique:!0}],rt=(tt.goblin,$.goblinSword,$.goblinSword2,$.goblinSword3,[{id:$.stone,quantityMin:3,quantityMax:5,droprate:5},{id:$.iron,droprate:3},{id:$.steel,droprate:2},{id:$.magicSword,droprate:40,unique:!0}]),nt=[{id:$.stone,quantityMin:3,quantityMax:5,droprate:5},{id:$.iron,droprate:3},{id:$.steel,droprate:2},{id:$.magicSword,droprate:1,unique:!0}],ot={name:"LootBox",data:function(){return{results:[]}},props:{itemIds:Array,draws:Number,power:Number},computed:{resultsIds:function(){var t=this.results.map((function(t){return t.id}));return t.length?Object(X["a"])(new Set(t)):[]},filteredItemIds:function(){var t=this;return this.itemIds.filter((function(e){return null===e||void 0===e||!e.unique||!t.resultsIds.includes(e.id)}))},totalItemsCount:function(){var t=this,e=this.filteredItemIds.map((function(e){return Math.round(Math.pow(e.droprate,t.power))})),r=function(t,e){return t+e},n=e.reduce(r);return n},totalItemsSimpleCount:function(){return this.totalItems.length},totalItems:function(){var t=this,e=[];return this.items.forEach((function(r){for(var n=0;n<Math.round(Math.pow(r.droprate,t.power));n+=1)e.push(r)})),e},items:function(){var t=this,e=this.filteredItemIds.map((function(e){var r=et.find((function(t){return t.id==e.id})),n=Z[r.rarity];e.label=r.label,e.rarityColor=n;var o=100/t.totalItemsCount*Math.round(Math.pow(e.droprate,t.power));return e.chance=o.toFixed(2),console.log(t.totalItemsCount,e.droprate,o),e}));return e}},methods:{open:function(){for(var t=0;t<this.draws;t+=1){var e=this.getItem();this.results.unshift(e)}},getItem:function(){var t=Math.floor(Math.random()*this.totalItemsCount),e=this.totalItems[t];return e}}};const ct=O()(ot,[["render",W]]);var it=ct,at={name:"Main",data:function(){return{duration:0,gold:88888,itemIds:rt,itemIds2:nt}},components:{LootChest:it},methods:{increaseDuration:function(){this.duration=this.duration+5},addResource:function(t){this.gold-=t}}};const st=O()(at,[["render",E]]);var dt=st,lt=[{path:"/",name:"Main",component:dt}],ut=Object(G["a"])({mode:"history",linkExactActiveClass:"active",history:Object(G["b"])("puppies/"),routes:lt}),bt=ut,ft=r("5502"),pt=Object(ft["a"])({state:{gold:0},mutations:{SET_GOLD:function(t,e){t.gold=e},ADD_GOLD:function(t,e){t.gold+=e},REMOVE_GOLD:function(t,e){t.gold-=e,t.gold<0&&(t.gold=0)}},actions:{},getters:{},modules:{}}),Ot=(r("f9e3"),r("cd74"),r("2486"),r("f33e"),Object(n["c"])(T).use(pt).use(bt));Ot.config.globalProperties.axios=D.a,Ot.mount("#app")},d872:function(t,e,r){"use strict";r("0d2b")},f33e:function(t,e,r){}});
//# sourceMappingURL=app.845fb608.js.map
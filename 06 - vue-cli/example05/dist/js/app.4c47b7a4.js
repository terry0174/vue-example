(function(e){function t(t){for(var r,l,i=t[0],u=t[1],s=t[2],f=0,m=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&m.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09ae":function(e,t,n){"use strict";var r=n("b185"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",{attrs:{tabs:"",align:"center"}},[n("b-nav-item",{attrs:{to:"/",exact:"","exact-active-class":"active"}},[e._v("List")]),n("b-nav-item",{attrs:{to:"/form","active-class":"active"}},[e._v("Form")])],1),n("router-view")],1)},o=[],l=n("2877"),i={},u=Object(l["a"])(i,a,o,!1,null,null,null),s=u.exports,c=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-card",{attrs:{"bg-variant":"light"}},[n("b-form",[n("b-form-group",{attrs:{label:"欄位:"}},[n("b-form-checkbox-group",{model:{value:e.display.column,callback:function(t){e.$set(e.display,"column",t)},expression:"display.column"}},[n("b-form-checkbox",{attrs:{value:"name"}},[e._v("姓名")]),n("b-form-checkbox",{attrs:{value:"sex"}},[e._v("性別")]),n("b-form-checkbox",{attrs:{value:"age"}},[e._v("年齡")]),n("b-form-checkbox",{attrs:{value:"phone"}},[e._v("電話")]),n("b-form-checkbox",{attrs:{value:"email"}},[e._v("E-mail")])],1)],1),n("b-form-group",{attrs:{label:"性別:"}},[n("b-form-checkbox-group",{model:{value:e.display.sex,callback:function(t){e.$set(e.display,"sex",t)},expression:"display.sex"}},[n("b-form-checkbox",{attrs:{value:"male"}},[e._v("男")]),n("b-form-checkbox",{attrs:{value:"female"}},[e._v("女")])],1)],1)],1),n("b-table",{attrs:{striped:"",hover:"",id:"items-table",items:e.items,fields:e.fields,"per-page":e.perPage,"current-page":e.currentPage},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[n("b-link",{on:{click:function(n){return n.preventDefault(),e.removeItem(t.value)}}},[e._v("X")])]}},{key:"cell(name)",fn:function(t){return[n("router-link",{attrs:{to:"/form/"+t.item.id}},[e._v(" "+e._s(t.value)+" ")])]}},{key:"cell(phone)",fn:function(t){return[e._v(" "+e._s(e._f("phoneFormat")(t.value))+" ")]}},{key:"cell(email)",fn:function(t){return[n("a",{attrs:{href:"mailto:"+t.value}},[e._v(" "+e._s(t.value)+" ")])]}}])}),n("b-pagination",{attrs:{"aria-controls":"items-table","total-rows":e.items.length,"per-page":e.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last",align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},m=[],p=(n("4de4"),n("caad"),n("d3b7"),n("2532"),n("bc3a")),b=n.n(p),d={data:function(){return{display:{column:["name","sex","age","phone","email"],sex:["male","female"]},data:[],currentPage:1,perPage:5}},filters:{phoneFormat:function(e){return e.substring(0,4)+"-"+e.substring(4,7)+"-"+e.substring(7)}},computed:{fields:function(){var e=new Array;e.push({key:"id",label:""});for(var t=0;t<this.display.column.length;t++)e.push({key:this.display.column[t],sortable:!0});return e},items:function(){var e=this;return this.data.filter((function(t,n,r){return e.display.sex.includes(t.sex)}))}},methods:{removeItem:function(e){var t=this;b.a.delete("http://localhost:3001/item/"+e).then((function(e){t.init()})).catch((function(e){console.log(e)})).finally((function(){}))},init:function(){var e=this;b.a.get("http://localhost:3001/item").then((function(t){e.data=t.data})).catch((function(e){console.log(e)})).finally((function(){}))}},mounted:function(){this.init()}},h=d,v=(n("09ae"),Object(l["a"])(h,f,m,!1,null,"cc3a8bd4",null)),g=v.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-container",[n("b-card",{attrs:{"bg-variant":"light"}},[n("b-form",{on:{submit:function(t){t.preventDefault(),e.isUpdate?e.updateItem():e.addItem()},reset:function(t){return e.$router.push("/")}}},[n("b-form-group",{attrs:{label:"姓名:","label-cols":"2"}},[n("b-form-input",{attrs:{type:"text",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("b-form-group",{attrs:{label:"性別:","label-cols":"2"}},[n("b-form-radio-group",{model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[n("b-form-radio",{attrs:{value:"male"}},[e._v("男")]),n("b-form-radio",{attrs:{value:"female"}},[e._v("女")])],1)],1),n("b-form-group",{attrs:{label:"年齡:","label-cols":"2"}},[n("b-form-input",{attrs:{type:"number",placeholder:"Enter age"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),n("b-form-group",{attrs:{label:"電話:","label-cols":"2"}},[n("b-form-input",{attrs:{type:"text",placeholder:"Enter phone"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),n("b-form-group",{attrs:{label:"E-mail:","label-cols":"2"}},[n("b-form-input",{attrs:{type:"email",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("b-button-group",[n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v(e._s(e.isUpdate?"修改":"新增"))]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("取消")])],1)],1)],1)],1)},y=[],_=(n("b0c0"),{data:function(){return{form:{name:"",sex:"male",age:0,phone:"",email:""}}},computed:{isUpdate:function(){return void 0!=this.$route.params.id}},methods:{updateItem:function(){var e=this;b.a.put("http://localhost:3001/item/"+this.$route.params.id,{id:this.$route.params.id,name:this.form.name,sex:this.form.sex,age:this.form.age,phone:this.form.phone,email:this.form.email}).then((function(t){e.$router.push("/")})).catch((function(e){console.log(e)})).finally((function(){}))},addItem:function(){var e=this;b.a.post("http://localhost:3001/item",this.form).then((function(t){e.$router.push("/")})).catch((function(e){console.log(e)})).finally((function(){}))},init:function(){if(void 0!=this.$route.params.id){var e=this;b.a.get("http://localhost:3001/item/"+this.$route.params.id).then((function(t){e.form=t.data})).catch((function(e){console.log(e)})).finally((function(){}))}}},mounted:function(){this.init()}}),k=_,$=(n("ef15"),Object(l["a"])(k,x,y,!1,null,"056f9cab",null)),P=$.exports;r["default"].use(c["a"]);var w=[{path:"/",name:"list",component:g},{path:"/form",name:"formAdd",component:P},{path:"/form/:id",name:"formUpdate",component:P}],O=new c["a"]({routes:w}),j=O,E=n("5f5b");n("f9e3"),n("2dd8");r["default"].config.productionTip=!1,r["default"].use(E["a"]),new r["default"]({router:j,render:function(e){return e(s)}}).$mount("#app")},8160:function(e,t,n){},b185:function(e,t,n){},ef15:function(e,t,n){"use strict";var r=n("8160"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4c47b7a4.js.map
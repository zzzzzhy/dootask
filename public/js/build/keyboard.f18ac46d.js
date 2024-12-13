import{n as i}from"./app.f0f1deb2.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.26189382.js";import"./@babel.f9bcab46.js";import"./dayjs.d979bf06.js";import"./localforage.b43da5c7.js";import"./markdown-it.bda97caf.js";import"./mdurl.ce6c1dd8.js";import"./uc.micro.8d343c98.js";import"./entities.48a44fec.js";import"./linkify-it.c5e8196e.js";import"./punycode.js.4b3f125a.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.897ae552.js";import"./vue.fd9b772e.js";import"./vuex.cc7cb26e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./mitt.1ea0a2a3.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.50be9c5e.js";import"./clipboard.058ef547.js";import"./view-design-hi.dbfb3540.js";import"./vuedraggable.9fd6afed.js";import"./sortablejs.d74243d9.js";import"./vue-resize-observer.c3c9ca4e.js";import"./element-sea.7f208f9b.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.0bdc1850.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.49abba38.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"setting-item submit"},[a("Form",{ref:"formData",attrs:{model:t.formData,rules:t.ruleData,"label-width":"auto"},nativeOn:{submit:function(e){e.preventDefault()}}},[t.$Electron?[a("FormItem",{attrs:{label:t.$L("\u622A\u56FE\u5FEB\u6377\u952E"),prop:"screenshot_key"}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v("Shift"),a("div",{staticClass:"input-box-push"},[t._v("+")]),a("Input",{staticClass:"input-box-key",attrs:{maxlength:2},model:{value:t.formData.screenshot_key,callback:function(e){t.$set(t.formData,"screenshot_key",e)},expression:"formData.screenshot_key"}})],1)]),a("FormItem",{attrs:{label:t.$L("\u65B0\u5EFA\u9879\u76EE")}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v("B ")])]),a("FormItem",{attrs:{label:t.$L("\u65B0\u5EFA\u4EFB\u52A1")}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v("N (K) ")])]),a("FormItem",{attrs:{label:t.$L("\u65B0\u4F1A\u8BAE")}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v("J ")])]),a("FormItem",{attrs:{label:t.$L("\u8BBE\u7F6E")}},[a("div",{staticClass:"input-box"},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v(", ")])])]:t._e(),t.$isEEUiApp?a("FormItem",{attrs:{label:t.$L("\u53D1\u9001\u6309\u94AE")}},[a("RadioGroup",{model:{value:t.formData.send_button_app,callback:function(e){t.$set(t.formData,"send_button_app",e)},expression:"formData.send_button_app"}},[a("Radio",{attrs:{label:"button"}},[t._v(t._s(t.$L("\u5F00\u542F")))]),a("Radio",{attrs:{label:"enter"}},[t._v(t._s(t.$L("\u5173\u95ED")))])],1),a("div",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5F00\u542F\u540E\uFF0C\u53D1\u9001\u6D88\u606F\u65F6\u952E\u76D8\u4E0A\u7684\u53D1\u9001\u6309\u94AE\u4F1A\u88AB\u66FF\u6362\u6210\u6362\u884C")))])],1):t.$Electron?a("FormItem",{attrs:{label:t.$L("\u53D1\u9001\u6309\u94AE")}},[a("RadioGroup",{attrs:{vertical:""},model:{value:t.formData.send_button_desktop,callback:function(e){t.$set(t.formData,"send_button_desktop",e)},expression:"formData.send_button_desktop"}},[a("Radio",{attrs:{label:"enter"}},[t._v("Enter "+t._s(t.$L("\u53D1\u9001")))]),a("Radio",{staticClass:"input-box",attrs:{label:"button"}},[t._v(" "+t._s(t.mateName)),a("div",{staticClass:"input-box-push"},[t._v("+")]),t._v("Enter "+t._s(t.$L("\u53D1\u9001"))+" ")])],1)],1):t._e()],2),a("div",{staticClass:"setting-footer"},[a("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u4FDD\u5B58")))]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},n=[];const m={data(){return{loadIng:0,mateName:/macintosh|mac os x/i.test(navigator.userAgent)?"Command":"Ctrl",formData:{screenshot_key:"",send_button_app:"",send_button_desktop:""},ruleData:{screenshot_key:[{validator:(t,s,a)=>{s=s.trim(),s=s.substring(s.length-1),s&&!/^[A-Za-z0-9]?$/.test(s)?a(new Error(this.$L("\u53EA\u80FD\u8F93\u5165\u5B57\u6BCD\u6216\u6570\u5B57"))):a(),this.$nextTick(e=>{this.$set(this.formData,t.field,s.toUpperCase())})},trigger:"change"}]}}},mounted(){this.initData()},methods:{initData(){this.formData=$A.cloneJSON(this.$store.state.cacheKeyboard),this.formData_bak=$A.cloneJSON(this.formData)},submitForm(){this.$refs.formData.validate(t=>{t&&this.$store.dispatch("handleKeyboard",this.formData).then(s=>{this.$Electron&&$A.bindScreenshotKey(s),$A.messageSuccess("\u4FDD\u5B58\u6210\u529F")})})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)}}},o={};var p=i(m,r,n,!1,_,"3f2987a4",null,null);function _(t){for(let s in o)this[s]=o[s]}var H=function(){return p.exports}();export{H as default};

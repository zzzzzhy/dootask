import{m as o}from"./vuex.cc7cb26e.js";import{n as a}from"./app.f0f1deb2.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.26189382.js";import"./@babel.f9bcab46.js";import"./dayjs.d979bf06.js";import"./localforage.b43da5c7.js";import"./markdown-it.bda97caf.js";import"./mdurl.ce6c1dd8.js";import"./uc.micro.8d343c98.js";import"./entities.48a44fec.js";import"./linkify-it.c5e8196e.js";import"./punycode.js.4b3f125a.js";import"./highlight.js.ab8aeea4.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.897ae552.js";import"./vue.fd9b772e.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./mitt.1ea0a2a3.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.50be9c5e.js";import"./clipboard.058ef547.js";import"./view-design-hi.dbfb3540.js";import"./vuedraggable.9fd6afed.js";import"./sortablejs.d74243d9.js";import"./vue-resize-observer.c3c9ca4e.js";import"./element-sea.7f208f9b.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.0bdc1850.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.49abba38.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"setting-item submit"},[t.configLoad>0?e("Loading"):e("Form",t._b({ref:"formDatum",attrs:{model:t.formDatum,rules:t.ruleDatum},nativeOn:{submit:function(r){r.preventDefault()}}},"Form",t.formOptions,!1),[t.isLdap?e("Alert",{attrs:{type:"warning"}},[t._v(t._s(t.$L("LDAP \u7528\u6237\u7981\u6B62\u4FEE\u6539\u90AE\u7BB1\u5730\u5740")))]):t._e(),e("FormItem",{attrs:{label:t.$L("\u65B0\u90AE\u7BB1\u5730\u5740"),prop:"newEmail"}},[t.isRegVerify==1?e("Input",{class:t.count>0?"setting-send-input":"setting-input",attrs:{search:"","enter-button":t.$L(t.sendBtnText),disabled:t.isLdap,placeholder:t.$L("\u8F93\u5165\u65B0\u90AE\u7BB1\u5730\u5740")},on:{"on-search":t.sendEmailCode},model:{value:t.formDatum.newEmail,callback:function(r){t.$set(t.formDatum,"newEmail",r)},expression:"formDatum.newEmail"}}):e("Input",{staticClass:"setting-input",attrs:{disabled:t.isLdap,placeholder:t.$L("\u8F93\u5165\u65B0\u90AE\u7BB1\u5730\u5740")},model:{value:t.formDatum.newEmail,callback:function(r){t.$set(t.formDatum,"newEmail",r)},expression:"formDatum.newEmail"}})],1),t.isRegVerify==1?e("FormItem",{attrs:{label:t.$L("\u9A8C\u8BC1\u7801"),prop:"code"}},[e("Input",{attrs:{placeholder:t.$L("\u8F93\u5165\u90AE\u7BB1\u9A8C\u8BC1\u7801")},model:{value:t.formDatum.code,callback:function(r){t.$set(t.formDatum,"code",r)},expression:"formDatum.code"}})],1):t._e()],1),e("div",{staticClass:"setting-footer"},[e("Button",{attrs:{loading:t.loadIng>0,type:"primary",disabled:t.isLdap},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),e("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},m=[];const l={data(){return{loadIng:0,configLoad:0,formDatum:{newEmail:"",code:""},ruleDatum:{newEmail:[{validator:(t,i,e)=>{i.trim()===""?e(new Error(this.$L("\u8BF7\u8F93\u5165\u65B0\u90AE\u7BB1\u5730\u5740\uFF01"))):$A.isEmail(i.trim())?e():e(new Error(this.$L("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740\uFF01")))},required:!0,trigger:"change"}]},count:0,isSendButtonShow:!0,isRegVerify:0,sendBtnText:this.$L("\u53D1\u9001\u9A8C\u8BC1\u7801")}},mounted(){this.getRegVerify()},computed:{...o(["formOptions"]),isLdap(){return this.$store.state.userInfo.identity.includes("ldap")}},methods:{sendEmailCode(){this.$store.dispatch("call",{url:"users/email/send",data:{type:2,email:this.formDatum.newEmail},spinner:!0}).then(t=>{this.isSendButtonShow=!1,this.count=120,this.sendBtnText=this.count+" \u79D2";let i=setInterval(()=>{this.count--,this.sendBtnText=this.count+" \u79D2",this.count<=0&&(this.sendBtnText=this.$L("\u53D1\u9001\u9A8C\u8BC1\u7801"),clearInterval(i))},1e3)}).catch(({msg:t})=>{$A.messageError(t)})},submitForm(){this.$refs.formDatum.validate(t=>{t&&(this.loadIng++,this.$store.dispatch("call",{url:"users/email/edit",data:this.formDatum}).then(({data:i})=>{this.count=0,this.sendBtnText=this.$L("\u53D1\u9001\u9A8C\u8BC1\u7801"),$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.$store.dispatch("saveUserInfo",i),this.$refs.formDatum.resetFields(),this.isSendButtonShow=!0}).catch(({msg:i})=>{$A.modalError(i)}).finally(i=>{this.loadIng--}))})},resetForm(){this.$refs.formDatum.resetFields()},getRegVerify(){this.configLoad++,this.$store.dispatch("call",{url:"system/setting/email"}).then(({data:t})=>{this.isRegVerify=t.reg_verify==="open"}).finally(t=>{this.configLoad--})}}},s={};var u=a(l,n,m,!1,p,null,null,null);function p(t){for(let i in s)this[i]=s[i]}var N=function(){return u.exports}();export{N as default};

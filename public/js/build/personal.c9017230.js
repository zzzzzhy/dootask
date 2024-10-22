import{I as o}from"./ImgUpload.0662324c.js";import{m as s}from"./vuex.cc7cb26e.js";import{n as m}from"./app.ea990217.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.ebd34ecd.js";import"./@babel.49d8906a.js";import"./dayjs.bd6d71a8.js";import"./localforage.7e8cfb0f.js";import"./markdown-it.f48c10fc.js";import"./entities.797c3e49.js";import"./uc.micro.39573202.js";import"./mdurl.2f66c031.js";import"./linkify-it.3ecfda1e.js";import"./punycode.c1b51344.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./@traptitech.b5c819e2.js";import"./vue.c448ed56.js";import"./openpgp_hi.15f91b1d.js";import"./axios.6ec123f8.js";import"./le5le-store.b40f9152.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.6e355525.js";import"./clipboard.7eddb2ef.js";import"./view-design-hi.563cfadb.js";import"./vuedraggable.dbf1607a.js";import"./sortablejs.20b8ddfe.js";import"./vue-resize-observer.452c7636.js";import"./element-sea.e89b014c.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.9f685ce8.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.5f40db32.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"setting-item submit"},[e("Form",{ref:"formData",class:t.formLabelClassName,attrs:{model:t.formData,rules:t.ruleData,labelPosition:t.formLabelPosition,labelWidth:t.formLabelWidth},nativeOn:{submit:function(a){a.preventDefault()}}},[e("FormItem",{attrs:{label:t.$L("\u5934\u50CF"),prop:"userimg"}},[e("ImgUpload",{attrs:{num:1,width:512,height:512,whcut:1},model:{value:t.formData.userimg,callback:function(a){t.$set(t.formData,"userimg",a)},expression:"formData.userimg"}}),e("span",{staticClass:"form-tip"},[t._v(t._s(t.$L("\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A200x200")))])],1),e("FormItem",{attrs:{label:t.$L("\u90AE\u7BB1"),prop:"email"}},[e("Input",{attrs:{disabled:""},model:{value:t.userInfo.email,callback:function(a){t.$set(t.userInfo,"email",a)},expression:"userInfo.email"}})],1),e("FormItem",{attrs:{label:t.$L("\u7535\u8BDD"),prop:"tel"}},[e("Input",{attrs:{maxlength:20,placeholder:t.$L("\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD")},model:{value:t.formData.tel,callback:function(a){t.$set(t.formData,"tel",a)},expression:"formData.tel"}})],1),e("FormItem",{attrs:{label:t.$L("\u6635\u79F0"),prop:"nickname"}},[e("Input",{attrs:{maxlength:20,placeholder:t.$L("\u8BF7\u8F93\u5165\u6635\u79F0")},model:{value:t.formData.nickname,callback:function(a){t.$set(t.formData,"nickname",a)},expression:"formData.nickname"}})],1),e("FormItem",{attrs:{label:t.$L("\u804C\u4F4D/\u804C\u79F0"),prop:"profession"}},[e("Input",{attrs:{maxlength:20,placeholder:t.$L("\u8BF7\u8F93\u5165\u804C\u4F4D/\u804C\u79F0")},model:{value:t.formData.profession,callback:function(a){t.$set(t.formData,"profession",a)},expression:"formData.profession"}})],1)],1),e("div",{staticClass:"setting-footer"},[e("Button",{attrs:{loading:t.loadIng>0,type:"primary"},on:{click:t.submitForm}},[t._v(t._s(t.$L("\u63D0\u4EA4")))]),e("Button",{staticStyle:{"margin-left":"8px"},attrs:{loading:t.loadIng>0},on:{click:t.resetForm}},[t._v(t._s(t.$L("\u91CD\u7F6E")))])],1)],1)},l=[];const p={components:{ImgUpload:o},data(){return{loadIng:0,formData:{userimg:"",email:"",tel:"",nickname:"",profession:""},ruleData:{email:[{required:!0,message:this.$L("\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740\uFF01"),trigger:"change"}],tel:[{required:!0,message:this.$L("\u8BF7\u8F93\u5165\u8054\u7CFB\u7535\u8BDD\uFF01"),trigger:"change"},{type:"string",min:6,message:this.$L("\u7535\u8BDD\u957F\u5EA6\u81F3\u5C116\u4F4D\uFF01"),trigger:"change"}],nickname:[{required:!0,message:this.$L("\u8BF7\u8F93\u5165\u6635\u79F0\uFF01"),trigger:"change"},{type:"string",min:2,message:this.$L("\u6635\u79F0\u957F\u5EA6\u81F3\u5C112\u4F4D\uFF01"),trigger:"change"}]}}},mounted(){this.initData()},computed:{...s(["userInfo","formLabelPosition","formLabelWidth","formLabelClassName"])},watch:{userInfo(){this.initData()}},methods:{initData(){this.$set(this.formData,"userimg",$A.strExists(this.userInfo.userimg,"/avatar")?"":this.userInfo.userimg),this.$set(this.formData,"email",this.userInfo.email),this.$set(this.formData,"tel",this.userInfo.tel),this.$set(this.formData,"nickname",typeof this.userInfo.nickname_original!="undefined"?this.userInfo.nickname_original:this.userInfo.nickname),this.$set(this.formData,"profession",this.userInfo.profession),this.formData_bak=$A.cloneJSON(this.formData)},submitForm(){this.$refs.formData.validate(t=>{if(t){let r=$A.cloneJSON(this.formData);$A.count(r.userimg)==0&&(r.userimg=""),this.loadIng++,this.$store.dispatch("call",{url:"users/editdata",data:r}).then(()=>{$A.messageSuccess("\u4FEE\u6539\u6210\u529F"),this.$store.dispatch("getUserInfo").catch(()=>{})}).catch(({msg:e})=>{$A.modalError(e)}).finally(e=>{this.loadIng--})}})},resetForm(){this.formData=$A.cloneJSON(this.formData_bak)}}},i={};var f=m(p,n,l,!1,u,null,null,null);function u(t){for(let r in i)this[r]=i[r]}var V=function(){return f.exports}();export{V as default};

(function(){"use strict";var t={2675:function(t,e,o){var s=o(9242),n=o(3396);const a={class:"app"};function l(t,e,o,s,l,i){const r=(0,n.up)("navbar"),u=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r),(0,n._)("div",a,[(0,n.Wm)(u)])],64)}o(7658);const i={class:"navbar"},r={class:"navbar__btns"};function u(t,e,o,s,a,l){const u=(0,n.up)("my-button");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",{onClick:e[0]||(e[0]=e=>t.$router.push("/"))},"Vue 3"),(0,n._)("div",r,[(0,n.Wm)(u,{onClick:e[1]||(e[1]=e=>t.$router.push("/posts"))},{default:(0,n.w5)((()=>[(0,n.Uk)("Посты")])),_:1}),(0,n.Wm)(u,{style:{"margin-left":"20px"},onClick:e[2]||(e[2]=e=>t.$router.push("/about"))},{default:(0,n.w5)((()=>[(0,n.Uk)("О сайте")])),_:1}),(0,n.Wm)(u,{style:{"margin-left":"20px"},onClick:e[3]||(e[3]=e=>t.$router.push("/store"))},{default:(0,n.w5)((()=>[(0,n.Uk)("store")])),_:1}),(0,n.Wm)(u,{style:{"margin-left":"20px"},onClick:e[4]||(e[4]=e=>t.$router.push("/composition"))},{default:(0,n.w5)((()=>[(0,n.Uk)("Composition")])),_:1})])])}var d={},c=o(89);const p=(0,c.Z)(d,[["render",u],["__scopeId","data-v-2d1627f2"]]);var m=p,h={components:{Navbar:m}};const v=(0,c.Z)(h,[["render",l]]);var g=v;const y={class:"btn"};function f(t,e,o,s,a,l){return(0,n.wg)(),(0,n.iD)("button",y,[(0,n.WI)(t.$slots,"default",{},void 0,!0)])}var w={name:"my-button"};const P=(0,c.Z)(w,[["render",f],["__scopeId","data-v-4a35233b"]]);var _=P;const b=["value"];function k(t,e,o,s,a,l){return(0,n.wg)(),(0,n.iD)("input",{value:o.modelValue,onInput:e[0]||(e[0]=(...t)=>l.updateInput&&l.updateInput(...t)),class:"input",type:"text"},null,40,b)}var S={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(t){this.$emit("update:modelValue",t.target.value)}}};const V=(0,c.Z)(S,[["render",k],["__scopeId","data-v-0c401ab1"]]);var C=V;function D(t,e,o,a,l,i){return t.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"dialog",onClick:e[1]||(e[1]=(0,s.iM)(((...e)=>t.hideDialog&&t.hideDialog(...e)),["stop"]))},[(0,n._)("div",{onClick:e[0]||(e[0]=(0,s.iM)((()=>{}),["stop"])),class:"dialog__content"},[(0,n.WI)(t.$slots,"default",{},void 0,!0)])])):(0,n.kq)("",!0)}var W={props:{show:{type:Boolean,default:!1}},methods:{hideDialog(){this.$emit("update:show",!1)}},mounted(){console.log("mixin mounted")}},M={name:"my-dialog",mixins:[W],mounted(){console.log("dialog mounted")}};const O=(0,c.Z)(M,[["render",D],["__scopeId","data-v-3f4386d6"]]);var L=O,Q=[_,C,L];const U=(0,n._)("h1",null,"Main",-1),I=[U];function x(t,e,o,s,a,l){return(0,n.wg)(),(0,n.iD)("div",null,I)}var Z={};const j=(0,c.Z)(Z,[["render",x]]);var $=j,A=o(2483);const H=(0,n._)("h1",null,"Страница с постами",-1),z={class:"app__btns"},F={key:1},R={class:"observer"};function T(t,e,o,s,a,l){const i=(0,n.up)("my-input"),r=(0,n.up)("my-button"),u=(0,n.up)("my-select"),d=(0,n.up)("post-form"),c=(0,n.up)("my-dialog"),p=(0,n.up)("post-list"),m=(0,n.Q2)("focus"),h=(0,n.Q2)("intersection");return(0,n.wg)(),(0,n.iD)("div",null,[H,(0,n.wy)((0,n.Wm)(i,{modelValue:a.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>a.searchQuery=t),placeholder:"Поиск...."},null,8,["modelValue"]),[[m]]),(0,n._)("div",z,[(0,n.Wm)(r,{onClick:l.showDialog},{default:(0,n.w5)((()=>[(0,n.Uk)(" Создать пользователя ")])),_:1},8,["onClick"]),(0,n.Wm)(u,{modelValue:a.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>a.selectedSort=t),options:a.sortOptions},null,8,["modelValue","options"])]),(0,n.Wm)(c,{show:a.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>a.dialogVisible=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{onCreate:l.createPost},null,8,["onCreate"])])),_:1},8,["show"]),a.isPostsLoading?((0,n.wg)(),(0,n.iD)("div",F,"Идет загрузка...")):((0,n.wg)(),(0,n.j4)(p,{key:0,posts:l.sortedAndSearchedPosts,onRemove:l.removePost},null,8,["posts","onRemove"])),(0,n.wy)((0,n._)("div",R,null,512),[[h,l.loadMorePosts]])])}const Y=t=>((0,n.dD)("data-v-381b695e"),t=t(),(0,n.Cn)(),t),B=Y((()=>(0,n._)("h4",null,"Создание поста",-1)));function q(t,e,o,a,l,i){const r=(0,n.up)("my-input"),u=(0,n.up)("my-button"),d=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("form",{onSubmit:e[2]||(e[2]=(0,s.iM)((()=>{}),["prevent"]))},[B,(0,n.wy)((0,n.Wm)(r,{modelValue:l.post.title,"onUpdate:modelValue":e[0]||(e[0]=t=>l.post.title=t),type:"text",placeholder:"Название"},null,8,["modelValue"]),[[d]]),(0,n.Wm)(r,{modelValue:l.post.body,"onUpdate:modelValue":e[1]||(e[1]=t=>l.post.body=t),type:"text",placeholder:"Описание"},null,8,["modelValue"]),(0,n.Wm)(u,{style:{"align-self":"flex-end","margin-top":"15px"},onClick:i.createPost},{default:(0,n.w5)((()=>[(0,n.Uk)(" Создать ")])),_:1},8,["onClick"])],32)}var E={data(){return{post:{title:"",body:""}}},methods:{createPost(){this.post.id=Date.now(),this.$emit("create",this.post),this.post={title:"",body:""}}}};const K=(0,c.Z)(E,[["render",q],["__scopeId","data-v-381b695e"]]);var N=K;const G=t=>((0,n.dD)("data-v-df55615e"),t=t(),(0,n.Cn)(),t),J={key:0},X=G((()=>(0,n._)("h3",null,"Список пользователей",-1))),tt={key:1,style:{color:"red"}};function et(t,e,o,a,l,i){const r=(0,n.up)("post-item");return o.posts.length>0?((0,n.wg)(),(0,n.iD)("div",J,[X,(0,n.Wm)(s.W3,{name:"user-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.posts,(e=>((0,n.wg)(),(0,n.j4)(r,{post:e,key:e.id,onRemove:o=>t.$emit("remove",e)},null,8,["post","onRemove"])))),128))])),_:1})])):((0,n.wg)(),(0,n.iD)("h2",tt," Список пользователей пуст "))}var ot=o(7139);const st=t=>((0,n.dD)("data-v-529df572"),t=t(),(0,n.Cn)(),t),nt={class:"post"},at=st((()=>(0,n._)("strong",null,"Название:",-1))),lt=st((()=>(0,n._)("strong",null,"Описание:",-1))),it={class:"post__btns"};function rt(t,e,o,s,a,l){const i=(0,n.up)("my-button");return(0,n.wg)(),(0,n.iD)("div",nt,[(0,n._)("div",null,[(0,n._)("div",null,(0,ot.zw)(o.post.id),1),(0,n._)("div",null,[at,(0,n.Uk)(" "+(0,ot.zw)(o.post.title),1)]),(0,n._)("div",null,[lt,(0,n.Uk)(" "+(0,ot.zw)(o.post.body),1)])]),(0,n._)("div",it,[(0,n.Wm)(i,{onClick:e[0]||(e[0]=e=>t.$router.push(`/posts/${o.post.id}`))},{default:(0,n.w5)((()=>[(0,n.Uk)(" Открыть ")])),_:1}),(0,n.Wm)(i,{onClick:e[1]||(e[1]=e=>t.$emit("remove",o.post))},{default:(0,n.w5)((()=>[(0,n.Uk)(" Удалить ")])),_:1})])])}var ut={props:{post:{type:Object,required:!0}}};const dt=(0,c.Z)(ut,[["render",rt],["__scopeId","data-v-529df572"]]);var ct=dt,pt={components:{PostItem:ct},props:{posts:{type:Array,required:!0}}};const mt=(0,c.Z)(pt,[["render",et],["__scopeId","data-v-df55615e"]]);var ht=mt,vt=o(4311);const gt=["value"],yt=(0,n._)("option",{disabled:"",value:""},"Выберите из списка",-1),ft=["value"];function wt(t,e,o,s,a,l){return(0,n.wg)(),(0,n.iD)("select",{value:o.modelValue,onChange:e[0]||(e[0]=(...t)=>l.changeOption&&l.changeOption(...t))},[yt,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.options,(t=>((0,n.wg)(),(0,n.iD)("option",{key:t.value,value:t.value},(0,ot.zw)(t.name),9,ft)))),128))],40,gt)}var Pt={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{changeOption(t){this.$emit("update:modelValue",t.target.value)}}};const _t=(0,c.Z)(Pt,[["render",wt]]);var bt=_t,kt={components:{MyInput:C,MySelect:bt,MyButton:_,PostList:ht,PostForm:N},data(){return{posts:[],dialogVisible:!1,isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},methods:{createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0},async fetchPosts(){try{this.isPostsLoading=!0;const t=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=t.data}catch(t){alert("Ошибка")}finally{this.isPostsLoading=!1}},async loadMorePosts(){try{this.page+=1;const t=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:this.page,_limit:this.limit}});this.totalPages=Math.ceil(t.headers["x-total-count"]/this.limit),this.posts=[...this.posts,...t.data]}catch(t){alert("Ошибка")}}},mounted(){this.fetchPosts()},computed:{sortedPosts(){return[...this.posts].sort(((t,e)=>t[this.selectedSort]?.localeCompare(e[this.selectedSort])))},sortedAndSearchedPosts(){return this.sortedPosts.filter((t=>t.title.toLowerCase().includes(this.searchQuery.toLowerCase())))}},watch:{}};const St=(0,c.Z)(kt,[["render",T]]);var Vt=St;const Ct=(0,n._)("h1",null,"About",-1),Dt=[Ct];function Wt(t,e,o,s,a,l){return(0,n.wg)(),(0,n.iD)("div",null,Dt)}var Mt={};const Ot=(0,c.Z)(Mt,[["render",Wt]]);var Lt=Ot;function Qt(t,e,o,s,a,l){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("h1",null,"Это страница поста с ID = "+(0,ot.zw)(t.$route.params.id),1)])}var Ut={};const It=(0,c.Z)(Ut,[["render",Qt]]);var xt=It;const Zt=(0,n._)("h1",null,"Страница с постами",-1),jt={class:"app__btns"},$t={key:1},At={class:"observer"},Ht={class:"page__wrapper"},zt=["onClick"];function Ft(t,e,o,s,a,l){const i=(0,n.up)("my-input"),r=(0,n.up)("my-button"),u=(0,n.up)("my-select"),d=(0,n.up)("post-form"),c=(0,n.up)("my-dialog"),p=(0,n.up)("post-list"),m=(0,n.Q2)("focus"),h=(0,n.Q2)("intersection");return(0,n.wg)(),(0,n.iD)("div",null,[Zt,(0,n.wy)((0,n.Wm)(i,{"model-value":t.searchQuery,"onUpdate:modelValue":t.setSearchQuery,placeholder:"Поиск...."},null,8,["model-value","onUpdate:modelValue"]),[[m]]),(0,n._)("div",jt,[(0,n.Wm)(r,{onClick:l.showDialog},{default:(0,n.w5)((()=>[(0,n.Uk)(" Создать пользователя ")])),_:1},8,["onClick"]),(0,n.Wm)(u,{"model-value":t.selectedSort,"onUpdate:modelValue":t.setSelectedSort,options:t.sortOptions},null,8,["model-value","onUpdate:modelValue","options"])]),(0,n.Wm)(c,{show:a.dialogVisible,"onUpdate:show":e[0]||(e[0]=t=>a.dialogVisible=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{onCreate:l.createPost},null,8,["onCreate"])])),_:1},8,["show"]),t.isPostsLoading?((0,n.wg)(),(0,n.iD)("div",$t,"Идет загрузка...")):((0,n.wg)(),(0,n.j4)(p,{key:0,posts:t.sortedAndSearchedPosts,onRemove:l.removePost},null,8,["posts","onRemove"])),(0,n.wy)((0,n._)("div",At,null,512),[[h,t.loadMorePosts]]),(0,n._)("div",Ht,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.totalPages,(e=>((0,n.wg)(),(0,n.iD)("div",{key:e,class:(0,ot.C_)(["page",{"current-page":t.page===e}]),onClick:o=>t.changePage(e)},(0,ot.zw)(e),11,zt)))),128))])])}var Rt=o(65),Tt={components:{MyInput:C,MySelect:bt,MyButton:_,PostList:ht,PostForm:N},data(){return{dialogVisible:!1}},methods:{...(0,Rt.OI)({setPage:"post/setPage",setSearchQuery:"post/setSearchQuery",setSelectedSort:"post/setSelectedSort"}),...(0,Rt.nv)({loadMorePosts:"post/loadMorePosts",fetchPosts:"post/fetchPosts"}),createPost(t){this.posts.push(t),this.dialogVisible=!1},removePost(t){this.posts=this.posts.filter((e=>e.id!==t.id))},showDialog(){this.dialogVisible=!0}},mounted(){this.fetchPosts()},computed:{...(0,Rt.rn)({posts:t=>t.post.posts,isPostsLoading:t=>t.post.isPostsLoading,selectedSort:t=>t.post.selectedSort,searchQuery:t=>t.post.searchQuery,page:t=>t.post.page,limit:t=>t.post.limit,totalPages:t=>t.post.totalPages,sortOptions:t=>t.post.sortOptions}),...(0,Rt.Se)({sortedPosts:"post/sortedPosts",sortedAndSearchedPosts:"post/sortedAndSearchedPosts"})},watch:{}};const Yt=(0,c.Z)(Tt,[["render",Ft]]);var Bt=Yt;const qt=(0,n._)("h1",null,"Страница с постами",-1),Et={class:"app__btns"},Kt={key:1};function Nt(t,e,o,s,a,l){const i=(0,n.up)("my-input"),r=(0,n.up)("my-button"),u=(0,n.up)("my-select"),d=(0,n.up)("post-form"),c=(0,n.up)("my-dialog"),p=(0,n.up)("post-list"),m=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[qt,(0,n.wy)((0,n.Wm)(i,{modelValue:s.searchQuery,"onUpdate:modelValue":e[0]||(e[0]=t=>s.searchQuery=t),placeholder:"Поиск...."},null,8,["modelValue"]),[[m]]),(0,n._)("div",Et,[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n.Uk)(" Создать пользователя ")])),_:1}),(0,n.Wm)(u,{modelValue:s.selectedSort,"onUpdate:modelValue":e[1]||(e[1]=t=>s.selectedSort=t),options:a.sortOptions},null,8,["modelValue","options"])]),(0,n.Wm)(c,{show:a.dialogVisible,"onUpdate:show":e[2]||(e[2]=t=>a.dialogVisible=t)},{default:(0,n.w5)((()=>[(0,n.Wm)(d)])),_:1},8,["show"]),s.isPostsLoading?((0,n.wg)(),(0,n.iD)("div",Kt,"Идет загрузка...")):((0,n.wg)(),(0,n.j4)(p,{key:0,posts:s.sortedAndSearchedPosts},null,8,["posts"]))]),(0,n._)("div",{onClick:e[3]||(e[3]=(...e)=>t.gt&&t.gt(...e))},"rf")],64)}var Gt=o(4870);function Jt(t){const e=(0,Gt.iH)([]),o=(0,Gt.iH)(0),s=(0,Gt.iH)(!0),a=async()=>{try{const n=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:1,_limit:t}});o.value=Math.ceil(n.headers["x-total-count"]/t),e.value=n.data}catch(n){alert("Ошибка")}finally{s.value=!1,console.log(e.value)}};return(0,n.bv)(a),{posts:e,isPostsLoading:s,totalPages:o}}function Xt(t){const e=(0,Gt.iH)(""),o=(0,n.Fl)((()=>[...t.value].sort(((t,o)=>t[e.value]?.localeCompare(o[e.value])))));return{selectedSort:e,sortedPosts:o}}function te(t){const e=(0,Gt.iH)(""),o=(0,n.Fl)((()=>t.value.filter((t=>t.title.toLowerCase().includes(e.value.toLowerCase())))));return{searchQuery:e,sortedAndSearchedPosts:o}}var ee={components:{MyInput:C,MySelect:bt,MyButton:_,PostList:ht,PostForm:N},data(){return{dialogVisible:!1,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}},setup(){const{posts:t,totalPages:e,isPostsLoading:o}=Jt(10),{sortedPosts:s,selectedSort:n}=Xt(t),{searchQuery:a,sortedAndSearchedPosts:l}=te(s);return{posts:t,totalPages:e,isPostsLoading:o,sortedPosts:s,selectedSort:n,searchQuery:a,sortedAndSearchedPosts:l}}};const oe=(0,c.Z)(ee,[["render",Nt]]);var se=oe;const ne=[{path:"/",component:$},{path:"/posts",component:Vt},{path:"/about",component:Lt},{path:"/posts/:id",component:xt},{path:"/store",component:Bt},{path:"/composition",component:se}],ae=(0,A.p7)({routes:ne,history:(0,A.PO)("/")});var le=ae,ie={mounted(t){t.focus()},name:"focus"},re={mounted(t,e){const o={rootMargin:"0px",threshold:1},s=(t,o)=>{t[0].isIntersecting&&e.value()},n=new IntersectionObserver(s,o);n.observe(t)},name:"intersection"},ue=[ie,re];const de={state:()=>({posts:[],isPostsLoading:!1,selectedSort:"",searchQuery:"",page:1,limit:10,totalPages:0,sortOptions:[{value:"title",name:"По названию"},{value:"body",name:"По содержимому"}]}),getters:{sortedPosts(t){return[...t.posts].sort(((e,o)=>e[t.selectedSort]?.localeCompare(o[t.selectedSort])))},sortedAndSearchedPosts(t,e){return e.sortedPosts.filter((e=>e.title.toLowerCase().includes(t.searchQuery.toLowerCase())))}},mutations:{setPosts(t,e){t.posts=e},setLoading(t,e){t.isPostsLoading=e},setPage(t,e){t.page=e},setSelectedSort(t,e){t.selectedSort=e},setTotalPages(t,e){t.totalPages=e},setSearchQuery(t,e){t.searchQuery=e}},actions:{async fetchPosts({state:t,commit:e}){try{e("setLoading",!0);const o=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",o.data)}catch(o){console.log(o)}finally{e("setLoading",!1)}},async loadMorePosts({state:t,commit:e}){try{e("setPage",t.page+1);const o=await vt.Z.get("https://jsonplaceholder.typicode.com/posts",{params:{_page:t.page,_limit:t.limit}});e("setTotalPages",Math.ceil(o.headers["x-total-count"]/t.limit)),e("setPosts",[...t.posts,...o.data])}catch(o){console.log(o)}}},namespaced:!0};var ce=(0,Rt.MT)({state:{isAuth:!1},modules:{post:de}});const pe=(0,s.ri)(g);Q.forEach((t=>{pe.component(t.name,t)})),ue.forEach((t=>{pe.directive(t.name,t)})),pe.use(le).use(ce).mount("#app")}},e={};function o(s){var n=e[s];if(void 0!==n)return n.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,n,a){if(!s){var l=1/0;for(d=0;d<t.length;d++){s=t[d][0],n=t[d][1],a=t[d][2];for(var i=!0,r=0;r<s.length;r++)(!1&a||l>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[r])}))?s.splice(r--,1):(i=!1,a<l&&(l=a));if(i){t.splice(d--,1);var u=n();void 0!==u&&(e=u)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[s,n,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,a,l=s[0],i=s[1],r=s[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(r)var d=r(o)}for(e&&e(s);u<l.length;u++)a=l[u],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(d)},s=self["webpackChunkvue3"]=self["webpackChunkvue3"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(2675)}));s=o.O(s)})();
//# sourceMappingURL=app.7e92cc22.js.map
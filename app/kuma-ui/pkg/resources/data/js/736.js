(self["webpackChunkkuma_gui"]=self["webpackChunkkuma_gui"]||[]).push([[736],{73570:function(e,t,a){var n=a(49237),s="  ";function i(e){var t=typeof e;return e instanceof Array?"array":"string"==t?"string":"boolean"==t?"boolean":"number"==t?"number":"undefined"==t||null===e?"null":"hash"}function r(e,t){var a=i(e);switch(a){case"array":o(e,t);break;case"hash":l(e,t);break;case"string":u(e,t);break;case"null":t.push("null");break;case"number":t.push(e.toString());break;case"boolean":t.push(e?"true":"false");break}}function o(e,t){for(var a=0;a<e.length;a++){var n=e[a],i=[];r(n,i);for(var o=0;o<i.length;o++)t.push((0==o?"- ":s)+i[o])}}function l(e,t){for(var a in e){var n=[];if(e.hasOwnProperty(a)){var o=e[a];r(o,n);var l=i(o);if("string"==l||"null"==l||"number"==l||"boolean"==l)t.push(d(a)+": "+n[0]);else{t.push(d(a)+": ");for(var u=0;u<n.length;u++)t.push(s+n[u])}}}}function d(e){return e.match(/^[\w]+$/)?e:n.requiresDoubleQuoting(e)?n.escapeWithDoubleQuotes(e):n.requiresSingleQuoting(e)?n.escapeWithSingleQuotes(e):e}function u(e,t){t.push(d(e))}var p=function(e){"string"==typeof e&&(e=JSON.parse(e));var t=[];return r(e,t),t.join("\n")};e.exports=p},74608:function(e,t,a){"use strict";a.d(t,{Z:function(){return y}});var n=a(70821);const s=e=>((0,n.dD)("data-v-1fa60dc9"),e=e(),(0,n.Cn)(),e),i=(0,n.Uk)(" Copy config to clipboard "),r=s((()=>(0,n._)("div",null,[(0,n._)("p",null,"Config copied to clipboard!")],-1)));function o(e,t,a,s,o,l){const d=(0,n.up)("CodeBlock"),u=(0,n.up)("KButton"),p=(0,n.up)("KPop"),c=(0,n.up)("KClipboardProvider"),m=(0,n.up)("KCard"),h=(0,n.up)("StatusInfo");return(0,n.wg)(),(0,n.j4)(h,{"has-error":null!==o.error,"is-loading":o.isLoading,error:o.error},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{"border-variant":"noBorder"},{body:(0,n.w5)((()=>[(0,n.Wm)(d,{class:"panel-code-block",language:"json",code:e.content},null,8,["code"])])),actions:(0,n.w5)((()=>[e.content?((0,n.wg)(),(0,n.j4)(c,{key:0},{default:(0,n.w5)((({copyToClipboard:t})=>[(0,n.Wm)(p,{placement:"bottom"},{content:(0,n.w5)((()=>[r])),default:(0,n.w5)((()=>[(0,n.Wm)(u,{appearance:"primary",onClick:a=>t(e.content)},{default:(0,n.w5)((()=>[i])),_:2},1032,["onClick"])])),_:2},1024)])),_:1})):(0,n.kq)("",!0)])),_:1})])),_:1},8,["has-error","is-loading","error"])}var l=a(62519),d=a(61496),u=a(21180),p=a(7433),c={name:"EnvoyData",components:{CodeBlock:d.Z,KButton:l.zU,KCard:l._s,KClipboardProvider:l.tm,KPop:l.JA,StatusInfo:p.Z},props:{dataPath:{type:String,required:!0},mesh:{type:String,required:!1,default:""},dppName:{type:String,required:!1,default:""},zoneIngressName:{type:String,required:!1,default:""},zoneEgressName:{type:String,required:!1,default:""}},data(){return{isLoading:!0,error:null}},watch:{dppName(){this.fetchContent()},zoneIngressName(){this.fetchContent()},zoneEgressName(){this.fetchContent()}},mounted(){this.fetchContent()},methods:{async fetchContent(){this.error=null,this.isLoading=!0;try{let e="";""!==this.mesh&&""!==this.dppName?e=await u["default"].getDataplaneData({dataPath:this.dataPath,mesh:this.mesh,dppName:this.dppName}):""!==this.zoneIngressName?e=await u["default"].getZoneIngressData({dataPath:this.dataPath,zoneIngressName:this.zoneIngressName}):""!==this.zoneEgressName&&(e=await u["default"].getZoneEgressData({dataPath:this.dataPath,zoneEgressName:this.zoneEgressName})),this.content="string"===typeof e?e:JSON.stringify(e,null,2)}catch(e){this.error=e}finally{this.isLoading=!1}}}},m=a(83744);const h=(0,m.Z)(c,[["render",o],["__scopeId","data-v-1fa60dc9"]]);var y=h},99997:function(e,t,a){"use strict";a.d(t,{Z:function(){return S}});var n=a(70821);const s=e=>((0,n.dD)("data-v-487d5c0d"),e=e(),(0,n.Cn)(),e),i={class:"yaml-view"},r={key:0,class:"yaml-view-content"},o=(0,n.Uk)(" Copy Universal YAML "),l=s((()=>(0,n._)("div",null,[(0,n._)("p",null,"Entity copied to clipboard!")],-1))),d=(0,n.Uk)(" Copy Kubernetes YAML "),u=s((()=>(0,n._)("div",null,[(0,n._)("p",null,"Entity copied to clipboard!")],-1))),p={key:1},c={class:"card-icon mb-3"},m=(0,n.Uk)(" Data Loading... "),h={class:"card-icon mb-3"},y=(0,n.Uk)(" There is no data to display. "),g={class:"card-icon mb-3"},w=(0,n.Uk)(" An error has occurred while trying to load this data. ");function v(e,t,a,s,v,f){const b=(0,n.up)("KButton"),k=(0,n.up)("KPop"),_=(0,n.up)("KClipboardProvider"),E=(0,n.up)("CodeBlock"),D=(0,n.up)("KTabs"),C=(0,n.up)("KCard"),S=(0,n.up)("KIcon"),I=(0,n.up)("KEmptyState");return(0,n.wg)(),(0,n.iD)("div",i,[f.isReady?((0,n.wg)(),(0,n.iD)("div",r,[a.isLoading||a.isEmpty?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(C,{key:0,title:f.yamlTitle,"border-variant":"noBorder"},{body:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(D,{key:e.environment,modelValue:f.activeTab.hash,"onUpdate:modelValue":t[0]||(t[0]=e=>f.activeTab.hash=e),tabs:v.tabs},{universal:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((({copyToClipboard:e})=>[(0,n.Wm)(k,{placement:"bottom"},{content:(0,n.w5)((()=>[l])),default:(0,n.w5)((()=>[(0,n.Wm)(b,{class:"copy-button",appearance:"primary",size:"small",onClick:()=>{e(f.yamlContent.universal)}},{default:(0,n.w5)((()=>[o])),_:2},1032,["onClick"])])),_:2},1024)])),_:1}),(0,n.Wm)(E,{language:"yaml",code:f.yamlContent.universal},null,8,["code"])])),kubernetes:(0,n.w5)((()=>[(0,n.Wm)(_,null,{default:(0,n.w5)((({copyToClipboard:e})=>[(0,n.Wm)(k,{placement:"bottom"},{content:(0,n.w5)((()=>[u])),default:(0,n.w5)((()=>[(0,n.Wm)(b,{class:"copy-button",appearance:"primary",size:"small",onClick:()=>{e(f.yamlContent.kubernetes)}},{default:(0,n.w5)((()=>[d])),_:2},1032,["onClick"])])),_:2},1024)])),_:1}),(0,n.Wm)(E,{language:"yaml",code:f.yamlContent.kubernetes},null,8,["code"])])),_:1},8,["modelValue","tabs"]))])),_:1},8,["title"]))])):(0,n.kq)("",!0),!0===a.loaders?((0,n.wg)(),(0,n.iD)("div",p,[a.isLoading?((0,n.wg)(),(0,n.j4)(I,{key:0,"cta-is-hidden":""},{title:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.Wm)(S,{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"})]),m])),_:1})):(0,n.kq)("",!0),a.isEmpty&&!a.isLoading?((0,n.wg)(),(0,n.j4)(I,{key:1,"cta-is-hidden":""},{title:(0,n.w5)((()=>[(0,n._)("div",h,[(0,n.Wm)(S,{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),y])),_:1})):(0,n.kq)("",!0),a.hasError?((0,n.wg)(),(0,n.j4)(I,{key:2,"cta-is-hidden":""},{title:(0,n.w5)((()=>[(0,n._)("div",g,[(0,n.Wm)(S,{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),w])),_:1})):(0,n.kq)("",!0)])):(0,n.kq)("",!0)])}var f=a(33907),b=a(73570),k=a.n(b),_=a(61496),E={name:"YamlView",components:{CodeBlock:_.Z},props:{title:{type:String,default:null},content:{type:Object,default:null},loaders:{type:Boolean,default:!0},isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1}},data(){return{tabs:[{hash:"#universal",title:"Universal"},{hash:"#kubernetes",title:"Kubernetes"}]}},computed:{...(0,f.Se)({environment:"config/getEnvironment"}),isReady(){return!this.isEmpty&&!this.hasError&&!this.isLoading},activeTab:{get(){const e=this.environment;return{hash:`#${e}`,nohash:e}},set(e){return{hash:`#${e}`,nohash:e}}},yamlTitle(){return this.title?this.title:this.content?.name?`Entity Overview for ${this.content.name}`:"Entity Overview"},yamlContent(){const e=this.content,t=()=>{const e={},t=Object.assign({},this.content),{name:a,mesh:n,type:s}=t,i=()=>{const e=Object.assign({},this.content);return delete e.type,delete e.mesh,delete e.name,!!(e&&Object.entries(e).length>0)&&e};if(e.apiVersion="kuma.io/v1alpha1",e.kind=s,void 0!==n&&(e.mesh=t.mesh),a?.includes(".")){const t=a.split("."),n=t.pop(),s=t.join(".");e.metadata={name:s,namespace:n}}else e.metadata={name:a};return i()&&(e.spec=i()),e},a={universal:k()(e),kubernetes:k()(t())};return a}}},D=a(83744);const C=(0,D.Z)(E,[["render",v],["__scopeId","data-v-487d5c0d"]]);var S=C},7433:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var n=a(70821);const s=e=>((0,n.dD)("data-v-382ac7c5"),e=e(),(0,n.Cn)(),e),i={class:"status-info"},r={class:"card-icon mb-3"},o=(0,n.Uk)(" Data Loading... "),l={class:"card-icon mb-3"},d=(0,n.Uk)(" An error has occurred while trying to load this data. "),u=s((()=>(0,n._)("summary",null,"Details",-1))),p={key:0,class:"badge-list"},c={class:"card-icon mb-3"},m=(0,n.Uk)(" There is no data to display. "),h={key:3};function y(e,t,a,s,y,g){const w=(0,n.up)("KIcon"),v=(0,n.up)("KEmptyState"),f=(0,n.up)("KBadge");return(0,n.wg)(),(0,n.iD)("div",i,[a.isLoading?((0,n.wg)(),(0,n.j4)(v,{key:0,"cta-is-hidden":"","data-testid":"status-info-loading-section"},{title:(0,n.w5)((()=>[(0,n._)("div",r,[(0,n.Wm)(w,{icon:"spinner",color:"rgba(0, 0, 0, 0.1)",size:"42"})]),o])),_:1})):a.hasError?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Wm)(v,{"cta-is-hidden":""},(0,n.Nv)({title:(0,n.w5)((()=>[(0,n._)("div",l,[(0,n.Wm)(w,{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),g.shouldShowApiError?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Uk)((0,n.zw)(a.error.message),1)],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[d],64))])),_:2},[g.shouldShowApiError&&Array.isArray(a.error.causes)&&a.error.causes.length>0?{name:"message",fn:(0,n.w5)((()=>[(0,n._)("details",null,[u,(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.error.causes,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},[(0,n._)("b",null,[(0,n._)("code",null,(0,n.zw)(e.field),1)]),(0,n.Uk)(": "+(0,n.zw)(e.message),1)])))),128))])])])),key:"0"}:void 0]),1024),g.shouldShowApiError?((0,n.wg)(),(0,n.iD)("div",p,[a.error.code?((0,n.wg)(),(0,n.j4)(f,{key:0,appearance:"warning"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,n.zw)(a.error.code),1)])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(f,{appearance:"warning"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,n.zw)(a.error.statusCode),1)])),_:1})])):(0,n.kq)("",!0)],64)):a.isEmpty?((0,n.wg)(),(0,n.j4)(v,{key:2,"cta-is-hidden":""},{title:(0,n.w5)((()=>[(0,n._)("div",c,[(0,n.Wm)(w,{class:"kong-icon--centered",icon:"warning",color:"var(--black-75)","secondary-color":"var(--yellow-300)",size:"42"})]),m])),_:1})):((0,n.wg)(),(0,n.iD)("div",h,[(0,n.WI)(e.$slots,"default",{},void 0,!0)]))])}var g=a(62519),w=a(76502),v={name:"StatusInfo",components:{KBadge:g.i1,KEmptyState:g.KB,KIcon:g.Ec},props:{isLoading:{type:Boolean,default:!1},hasError:{type:Boolean,default:!1},isEmpty:{type:Boolean,default:!1},error:{type:Object,required:!1,default:null}},computed:{shouldShowApiError(){return this.error instanceof w.ApiError}}},f=a(83744);const b=(0,f.Z)(v,[["render",y],["__scopeId","data-v-382ac7c5"]]);var k=b},51372:function(e,t,a){"use strict";a.d(t,{Z:function(){return R}});var n=a(70821);function s(e,t,a,s,i,r){const o=(0,n.up)("KAlert"),l=(0,n.up)("KCard");return(0,n.wg)(),(0,n.j4)(l,{"border-variant":"noBorder"},{body:(0,n.w5)((()=>[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.warnings,(({kind:e,payload:t,index:a})=>((0,n.wg)(),(0,n.iD)("li",{key:`${e}/${a}`,class:"mb-1"},[(0,n.Wm)(o,{appearance:"warning"},{alertMessage:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)((0,n.LL)(r.getWarningComponent(e)),{payload:t},null,8,["payload"]))])),_:2},1024)])))),128))])])),_:1})}function i(e,t,a,s,i,r){return(0,n.wg)(),(0,n.iD)("span",null,(0,n.zw)(a.payload),1)}var r={name:"WarningDefault",props:{payload:{type:[String,Object],required:!0}}},o=a(83744);const l=(0,o.Z)(r,[["render",i]]);var d=l;const u=(0,n.Uk)(" Envoy ("),p=(0,n.Uk)(") is unsupported by the current version of Kuma DP ("),c=(0,n.Uk)(") [Requirements: "),m=(0,n.Uk)("] ");function h(e,t,a,s,i,r){return(0,n.wg)(),(0,n.iD)("span",null,[u,(0,n._)("strong",null,(0,n.zw)(a.payload.envoy),1),p,(0,n._)("strong",null,(0,n.zw)(a.payload.kumaDp),1),c,(0,n._)("strong",null,(0,n.zw)(a.payload.requirements),1),m])}var y={name:"WarningEnvoyIncompatible",props:{payload:{type:Object,required:!0}}};const g=(0,o.Z)(y,[["render",h]]);var w=g;const v=(0,n.Uk)(" There is mismatch between versions of Kuma DP ("),f=(0,n.Uk)(") and the Zone CP ("),b=(0,n.Uk)(") ");function k(e,t,a,s,i,r){return(0,n.wg)(),(0,n.iD)("span",null,[v,(0,n._)("strong",null,(0,n.zw)(a.payload.kumaDpVersion),1),f,(0,n._)("strong",null,(0,n.zw)(a.payload.zoneVersion),1),b])}var _={name:"WarningZoneAndKumaDPVersionsIncompatible",props:{payload:{type:Object,required:!0}}};const E=(0,o.Z)(_,[["render",k]]);var D=E;const C=(0,n.Uk)(" Unsupported version of Kuma DP ("),S=(0,n.Uk)(") ");function I(e,t,a,s,i,r){return(0,n.wg)(),(0,n.iD)("span",null,[C,(0,n._)("strong",null,(0,n.zw)(a.payload.kumaDpVersion),1),S])}var T={name:"WarningUnsupportedKumaDPVersion",props:{payload:{type:Object,required:!0}}};const P=(0,o.Z)(T,[["render",I]]);var A=P;const x=(0,n.Uk)(" There is mismatch between versions of Zone CP ("),W=(0,n.Uk)(") and the Global CP ("),L=(0,n.Uk)(") ");function z(e,t,a,s,i,r){return(0,n.wg)(),(0,n.iD)("span",null,[x,(0,n._)("strong",null,(0,n.zw)(a.payload.zoneCpVersion),1),W,(0,n._)("strong",null,(0,n.zw)(a.payload.globalCpVersion),1),L])}var U={name:"WarningZoneAndGlobalCPSVersionsIncompatible",props:{payload:{type:Object,required:!0}}};const K=(0,o.Z)(U,[["render",z]]);var N=K,j=a(65404),Z={name:"WarningsWidget",props:{warnings:{type:Array,required:!0}},methods:{getWarningComponent(e=""){switch(e){case j.Bd:return w;case j.ZM:return A;case j.pC:return D;case j.s9:return N;default:return d}}}};const q=(0,o.Z)(Z,[["render",s]]);var R=q},36736:function(e,t,a){"use strict";a.d(t,{Z:function(){return re}});var n=a(70821);const s=e=>((0,n.dD)("data-v-17cb056e"),e=e(),(0,n.Cn)(),e),i=s((()=>(0,n._)("span",{class:"custom-control-icon"}," + ",-1))),r=(0,n.Uk)(" Create data plane proxy "),o=s((()=>(0,n._)("span",{class:"custom-control-icon"}," ← ",-1))),l=(0,n.Uk)(" View All "),d={key:0},u={key:0},p={class:"entity-status__label"},c={class:"reason-list"},m=s((()=>(0,n._)("span",{class:"entity-status__dot"},null,-1))),h={key:1},y=s((()=>(0,n._)("h4",null,"Tags",-1))),g={key:0},w=s((()=>(0,n._)("h4",null,"Versions",-1))),v={key:0},f=(0,n.Uk)(" This data plane proxy does not yet have mTLS configured — "),b=["href"];function k(e,t,a,s,k,_){const E=(0,n.up)("KButton"),D=(0,n.up)("DataOverview"),C=(0,n.up)("EntityURLControl"),S=(0,n.up)("LabelList"),I=(0,n.up)("SubscriptionHeader"),T=(0,n.up)("SubscriptionDetails"),P=(0,n.up)("AccordionItem"),A=(0,n.up)("AccordionList"),x=(0,n.up)("KCard"),W=(0,n.up)("StatusInfo"),L=(0,n.up)("DataplanePolicies"),z=(0,n.up)("EnvoyData"),U=(0,n.up)("KAlert"),K=(0,n.up)("YamlView"),N=(0,n.up)("WarningsWidget"),j=(0,n.up)("TabsWidget"),Z=(0,n.up)("FrameSkeleton");return(0,n.wg)(),(0,n.j4)(Z,null,{default:(0,n.w5)((()=>[(0,n.Wm)(D,{"page-size":k.pageSize,"has-error":k.hasError,"is-loading":k.isLoading,"empty-state":_.getEmptyState(),"table-data":_.buildTableData(),"table-data-is-empty":k.tableDataIsEmpty,"show-warnings":k.tableData.data.some((e=>e.withWarnings)),next:k.next,onTableAction:_.tableAction,onLoadData:t[0]||(t[0]=e=>_.loadData(e))},{additionalControls:(0,n.w5)((()=>[(0,n.Wm)(E,{class:"add-dp-button",appearance:"primary",size:"small",to:_.dataplaneWizardRoute,onClick:_.onCreateClick},{default:(0,n.w5)((()=>[i,r])),_:1},8,["to","onClick"]),e.$route.query.ns?((0,n.wg)(),(0,n.j4)(E,{key:0,class:"back-button",appearance:"primary",size:"small",to:a.nsBackButtonRoute},{default:(0,n.w5)((()=>[o,l])),_:1},8,["to"])):(0,n.kq)("",!0)])),_:1},8,["page-size","has-error","is-loading","empty-state","table-data","table-data-is-empty","show-warnings","next","onTableAction"]),!1===k.isEmpty?((0,n.wg)(),(0,n.j4)(j,{key:0,"has-error":k.hasError,"is-loading":k.isLoading,tabs:_.filterTabs(),"initial-tab-override":"overview"},{tabHeader:(0,n.w5)((()=>[(0,n._)("div",null,[k.entity.basicData?((0,n.wg)(),(0,n.iD)("h3",d," DPP: "+(0,n.zw)(k.entity.basicData.name),1)):(0,n.kq)("",!0)]),(0,n._)("div",null,[(0,n.Wm)(C,{name:_.entityName,mesh:_.entityMesh},null,8,["name","mesh"])])])),overview:(0,n.w5)((()=>[(0,n.Wm)(S,{"is-loading":k.entityIsLoading,"is-empty":k.entityIsEmpty},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.entity.basicData,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},["status"===t?((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("h4",null,(0,n.zw)(t),1),(0,n._)("div",{class:(0,n.C_)(["entity-status",{"is-offline":"offline"===e.status.toString().toLowerCase()||!1===e.status,"is-degraded":"partially degraded"===e.status.toString().toLowerCase()||!1===e.status}])},[(0,n._)("span",p,(0,n.zw)(e.status),1)],2),(0,n._)("div",c,[(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.reason,(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},[m,(0,n.Uk)(" "+(0,n.zw)(e),1)])))),128))])])])):((0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("h4",null,(0,n.zw)(t),1),(0,n.Uk)(" "+(0,n.zw)(e),1)]))])))),128))])]),(0,n._)("div",null,[y,(0,n._)("p",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.entity.tags,((e,t)=>((0,n.wg)(),(0,n.iD)("span",{key:t,class:"tag-cols"},[(0,n._)("span",null,(0,n.zw)(e.label)+": ",1),(0,n._)("span",null,(0,n.zw)(e.value),1)])))),128))]),k.entity.versions?((0,n.wg)(),(0,n.iD)("div",g,[w,(0,n._)("p",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.entity.versions,((e,t)=>((0,n.wg)(),(0,n.iD)("span",{key:t,class:"tag-cols"},[(0,n._)("span",null,(0,n.zw)(t)+": ",1),(0,n._)("span",null,(0,n.zw)(e),1)])))),128))])])):(0,n.kq)("",!0)])])),_:1},8,["is-loading","is-empty"])])),insights:(0,n.w5)((()=>[(0,n.Wm)(W,{"is-empty":0===k.subscriptionsReversed.length},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{"border-variant":"noBorder"},{body:(0,n.w5)((()=>[(0,n.Wm)(A,{"initially-open":0},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.subscriptionsReversed,((e,t)=>((0,n.wg)(),(0,n.j4)(P,{key:t},{"accordion-header":(0,n.w5)((()=>[(0,n.Wm)(I,{details:e},null,8,["details"])])),"accordion-content":(0,n.w5)((()=>[(0,n.Wm)(T,{details:e,"is-discovery-subscription":""},null,8,["details"])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["is-empty"])])),"dpp-policies":(0,n.w5)((()=>[(0,n.Wm)(L,{mesh:k.rawEntity.mesh,"dpp-name":k.rawEntity.name},null,8,["mesh","dpp-name"])])),"xds-configuration":(0,n.w5)((()=>[(0,n.Wm)(z,{"data-path":"xds",mesh:k.rawEntity.mesh,"dpp-name":k.rawEntity.name},null,8,["mesh","dpp-name"])])),"envoy-stats":(0,n.w5)((()=>[(0,n.Wm)(z,{"data-path":"stats",mesh:k.rawEntity.mesh,"dpp-name":k.rawEntity.name},null,8,["mesh","dpp-name"])])),"envoy-clusters":(0,n.w5)((()=>[(0,n.Wm)(z,{"data-path":"clusters",mesh:k.rawEntity.mesh,"dpp-name":k.rawEntity.name},null,8,["mesh","dpp-name"])])),mtls:(0,n.w5)((()=>[(0,n.Wm)(S,{"is-loading":k.entityIsLoading,"is-empty":k.entityIsEmpty},{default:(0,n.w5)((()=>[k.entity.mtls?((0,n.wg)(),(0,n.iD)("ul",v,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(k.entity.mtls,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t},[(0,n._)("h4",null,(0,n.zw)(e.label),1),(0,n._)("p",null,(0,n.zw)(e.value),1)])))),128))])):((0,n.wg)(),(0,n.j4)(U,{key:1,appearance:"danger"},{alertMessage:(0,n.w5)((()=>[f,(0,n._)("a",{href:`https://kuma.io/docs/${_.kumaDocsVersion}/documentation/security/#certificates`,class:"external-link",target:"_blank"}," Learn About Certificates in "+(0,n.zw)(k.productName),9,b)])),_:1}))])),_:1},8,["is-loading","is-empty"])])),yaml:(0,n.w5)((()=>[(0,n.Wm)(K,{"is-loading":k.entityIsLoading,"is-empty":k.entityIsEmpty,content:k.rawEntity},null,8,["is-loading","is-empty","content"])])),warnings:(0,n.w5)((()=>[(0,n.Wm)(N,{warnings:k.warnings},null,8,["warnings"])])),_:1},8,["has-error","is-loading","tabs"])):(0,n.kq)("",!0)])),_:1})}var _=a(33907),E=a(51991),D=a(93063),C=a(46187),S=a(21180),I=a(53419),T=a(70878),P=a(65404),A=a(93480),x=a(82318),W=a(59713),L=a(18574),z=a(99997),U=a(52681),K=a(51372),N=a(45689),j=a(79197),Z=a(46483),q=a(70172);const R={class:"flex items-center justify-between"},V={key:0,class:"text-lg"},B={key:1,class:"text-lg"},O={class:"subtitle"},Y={key:0},M={key:1},H={class:"flex flex-wrap justify-end"},$={class:"policy-wrapper"},G={class:"policy-type"};function Q(e,t,a,s,i,r){const o=(0,n.up)("KIcon"),l=(0,n.up)("KPop"),d=(0,n.up)("KBadge"),u=(0,n.up)("router-link"),p=(0,n.up)("AccordionItem"),c=(0,n.up)("AccordionList"),m=(0,n.up)("KCard"),h=(0,n.up)("StatusInfo");return(0,n.wg)(),(0,n.j4)(h,{"has-error":null!==i.error,"is-loading":i.isLoading,error:i.error,"is-empty":!i.hasItems},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{"border-variant":"noBorder"},{body:(0,n.w5)((()=>[(0,n.Wm)(c,{"initially-open":[],"multiple-open":""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.items,((e,t)=>((0,n.wg)(),(0,n.j4)(p,{key:t},{"accordion-header":(0,n.w5)((()=>[(0,n._)("div",R,[(0,n._)("div",null,["dataplane"===e.type?((0,n.wg)(),(0,n.iD)("p",V," Dataplane ")):(0,n.kq)("",!0),"dataplane"!==e.type?((0,n.wg)(),(0,n.iD)("p",B,(0,n.zw)(e.service),1)):(0,n.kq)("",!0),(0,n._)("p",O,["inbound"===e.type||"outbound"===e.type?((0,n.wg)(),(0,n.iD)("span",Y,(0,n.zw)(e.type)+" "+(0,n.zw)(e.name),1)):"service"===e.type||"dataplane"===e.type?((0,n.wg)(),(0,n.iD)("span",M,(0,n.zw)(e.type),1)):(0,n.kq)("",!0),(0,n.Wm)(l,{width:"300",placement:"right",trigger:"hover"},{content:(0,n.w5)((()=>[(0,n._)("div",null,(0,n.zw)(i.POLICY_TYPE_SUBTITLE[e.type]),1)])),default:(0,n.w5)((()=>[(0,n.Wm)(o,{icon:"help",size:"16",class:"ml-1"})])),_:2},1024)])]),(0,n._)("div",H,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.matchedPolicies,((e,a)=>((0,n.wg)(),(0,n.j4)(d,{key:`${t}-${a}`,class:"mr-2 mb-2"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,n.zw)(a),1)])),_:2},1024)))),128))])])])),"accordion-content":(0,n.w5)((()=>[(0,n._)("div",$,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.policyTypes,((e,a)=>((0,n.wg)(),(0,n.iD)("div",{key:`${t}-${a}`,class:"policy-item"},[(0,n._)("h4",G,(0,n.zw)(e.pluralDisplayName),1),(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.policies,((e,s)=>((0,n.wg)(),(0,n.iD)("li",{key:`${t}-${a}-${s}`,class:"my-1","data-testid":"policy-name"},[(0,n.Wm)(u,{to:e.route},{default:(0,n.w5)((()=>[(0,n.Uk)((0,n.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])])))),128))])])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["has-error","is-loading","error","is-empty"])}var F=a(7433);const J={inbound:"Policies applied on incoming connection on address",outbound:"Policies applied on outgoing connection to the address",service:"Policies applied on outgoing connections to service",dataplane:"Policies applied on all incoming and outgoing connections to the selected data plane proxy"};var X={name:"DataplanePolicies",components:{StatusInfo:F.Z,AccordionList:j.Z,AccordionItem:Z.Z},props:{mesh:{type:String,required:!0},dppName:{type:String,required:!0}},data(){return{items:[],hasItems:!1,isLoading:!0,error:null,searchInput:"",POLICY_TYPE_SUBTITLE:J}},computed:{...(0,_.rn)({policiesByType:e=>e.policiesByType})},watch:{dppName(){this.fetchPolicies()}},mounted(){this.fetchPolicies()},methods:{async fetchPolicies(){this.error=null,this.isLoading=!0;try{const{items:e,total:t,kind:a}=await S["default"].getDataplanePolicies({mesh:this.mesh,dppName:this.dppName});void 0!==a&&"SidecarDataplane"!==a||(this.processItems(e),this.items=e,this.hasItems=t>0)}catch(e){this.error=e}finally{this.isLoading=!1}},processItems(e){for(const t of e){t.policyTypes={};for(const e in t.matchedPolicies){const a=this.policiesByType[e],n={pluralDisplayName:a.pluralDisplayName,policies:t.matchedPolicies[e]};for(const e of n.policies)e.route={name:a.path,query:{ns:e.name},params:{mesh:e.mesh}};t.policyTypes[e]=n}}}}},ee=a(83744);const te=(0,ee.Z)(X,[["render",Q],["__scopeId","data-v-82a00330"]]);var ae=te,ne=a(74608),se={name:"DataplanesView",components:{EnvoyData:ne.Z,WarningsWidget:K.Z,EntityURLControl:A.Z,FrameSkeleton:x.Z,DataOverview:W.Z,TabsWidget:L.Z,YamlView:z.Z,LabelList:U.Z,AccordionList:j.Z,AccordionItem:Z.Z,SubscriptionDetails:D.Z,SubscriptionHeader:C.Z,DataplanePolicies:ae,StatusInfo:F.Z},props:{nsBackButtonRoute:{type:Object,default(){return{name:"dataplanes"}}},emptyStateMsg:{type:String,default:"There are no data plane proxies present."},dataplaneApiParams:{type:Object,default(){return{}}},tableHeaders:{type:Array,default(){return[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"type"},{label:"Tags",key:"tags"},{label:"Last Connected",key:"lastConnected"},{label:"Last Updated",key:"lastUpdated"},{label:"Total Updates",key:"totalUpdates"},{label:"Kuma DP version",key:"dpVersion"},{label:"Envoy version",key:"envoyVersion"},{key:"warnings",hideLabel:!0}]}},tabs:{type:Array,default(){return[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"DPP Insights"},{hash:"#dpp-policies",title:"Policies"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"},{hash:"#mtls",title:"Certificate Insights"},{hash:"#yaml",title:"YAML"},{hash:"#warnings",title:"Warnings"}]}}},data(){return{productName:N.sG,isLoading:!0,isEmpty:!1,hasError:!1,entityIsLoading:!0,entityIsEmpty:!1,warnings:[],tableDataIsEmpty:!1,tableData:{headers:[],data:[]},subscriptionsReversed:[],entity:{},rawEntity:{},pageSize:N.NR,next:null,shownTLSTab:!1,rawData:null}},computed:{...(0,_.Se)({environment:"config/getEnvironment",queryNamespace:"getItemQueryNamespace",multicluster:"config/getMulticlusterStatus"}),dataplaneWizardRoute(){return"universal"===this.environment?{name:"universal-dataplane"}:{name:"kubernetes-dataplane"}},kumaDocsVersion(){const e=this.$store.getters.getKumaDocsVersion;return null!==e?e:"latest"},entityName(){return this.entity?.basicData?.name||""},entityMesh(){return this.entity?.basicData?.mesh||""}},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.hasError=!1,this.entityIsLoading=!0,this.entityIsEmpty=!1,this.tableDataIsEmpty=!1,this.loadData()}},beforeMount(){this.loadData()},methods:{onCreateClick(){E.fy.logger.info(T.T.CREATE_DATA_PLANE_PROXY_CLICKED)},buildEntity(e,t,a,n){const s=a.mTLS?(0,P.Xj)(a.mTLS):null;return{basicData:e,tags:t,mtls:s,versions:n}},init(){this.loadData()},getEmptyState(){return{title:"No Data",message:this.emptyStateMsg}},filterTabs(){return this.warnings.length?this.tabs:this.tabs.filter((e=>"#warnings"!==e.hash))},buildTableData(){return{...this.tableData,headers:this.tableHeaders}},compatibilityKind(e){return(0,P.JD)(e)},tableAction(e){const t=e;this.getEntity(t)},async parseData(e){const{dataplane:t={},dataplaneInsight:a={}}=e,{name:n="",mesh:s=""}=e,{subscriptions:i=[]}=a,r=(0,P.wY)(t),{status:o}=(0,P.lR)(t,a),{totalUpdates:l,totalRejectedUpdates:d,dpVersion:u,envoyVersion:p,selectedTime:c,selectedUpdateTime:m,version:h}=i.reduce(((e,t)=>{const{status:a={},connectTime:n,version:s={}}=t,{total:i={},lastUpdateTime:r}=a,{responsesSent:o="0",responsesRejected:l="0"}=i,{kumaDp:d={},envoy:u={}}=s,{version:p}=d,{version:c}=u;let{selectedTime:m,selectedUpdateTime:h}=e;const y=Date.parse(n),g=Date.parse(r);return y&&(!m||y>m)&&(m=y),g&&(!h||g>h)&&(h=g),{totalUpdates:e.totalUpdates+parseInt(o,10),totalRejectedUpdates:e.totalRejectedUpdates+parseInt(l,10),dpVersion:p||e.dpVersion,envoyVersion:c||e.envoyVersion,selectedTime:m,selectedUpdateTime:h,version:s||e.version}}),{totalUpdates:0,totalRejectedUpdates:0,dpVersion:"-",envoyVersion:"-",selectedTime:NaN,selectedUpdateTime:NaN,version:{}}),y={name:n,mesh:s,tags:r,status:o,totalUpdates:l,totalRejectedUpdates:d,dpVersion:u,envoyVersion:p,withWarnings:!1,unsupportedEnvoyVersion:!1,unsupportedKumaDPVersion:!1,kumaDpAndKumaCpMismatch:!1,lastUpdated:m?(0,I.tV)(new Date(m).toUTCString()):"never",lastConnected:c?(0,I.tV)(new Date(c).toUTCString()):"never",type:(0,P.c1)(t)},{kind:g}=this.compatibilityKind(h);switch(g){case P.Bd:y.unsupportedEnvoyVersion=!0,y.withWarnings=!0;break;case P.ZM:y.unsupportedKumaDPVersion=!0,y.withWarnings=!0;break}if(this.multicluster){const{compatible:e}=await(0,P.nF)(r,u);e||(y.withWarnings=!0,y.kumaDpAndKumaCpMismatch=!0)}return y},async loadData(e="0"){this.isLoading=!0;const t=this.$route.params.mesh||null,a=this.$route.query.ns||null;try{const{data:n,next:s}=await(0,q.W)({getSingleEntity:S["default"].getDataplaneOverviewFromMesh.bind(S["default"]),getAllEntities:S["default"].getAllDataplaneOverviews.bind(S["default"]),getAllEntitiesFromMesh:S["default"].getAllDataplaneOverviewsFromMesh.bind(S["default"]),size:this.pageSize,offset:e,mesh:t,query:a,params:{...this.dataplaneApiParams}});if(n.length){this.next=s,this.rawData=n,this.getEntity({name:n[0].name});const e=await Promise.all(n.map((e=>this.parseData(e))));this.tableData.data=e,this.tableDataIsEmpty=!1,this.isEmpty=!1}else this.tableData.data=[],this.tableDataIsEmpty=!0,this.isEmpty=!0}catch(n){this.hasError=!0,this.isEmpty=!0,console.error(n)}finally{this.isLoading=!1}},async getEntity(e){this.entityIsLoading=!0,this.entityIsEmpty=!1;const t=this.rawData.find((t=>t.name===e.name)),a=(0,P.Ng)(t);if(a){const e=["type","name","mesh"],n=(0,P.mq)(t)||{},s=(0,P.lR)(a,n),i=(0,P.wY)(a),r=(0,P.yQ)(n),o={...(0,I.wy)(a,e),status:s};this.entity=this.buildEntity(o,i,n,r),this.warnings=[];const{subscriptions:l=[]}=n;this.subscriptionsReversed=Array.from(l).reverse(),l.length&&this.setEntityWarnings(l,i),this.rawEntity=(0,I.RV)(a)}else this.entity={},this.entityIsEmpty=!0;this.entityIsLoading=!1},async setEntityWarnings(e,t){const{version:a={}}=e[e.length-1],{kumaDp:n={},envoy:s={}}=a;if(n&&s){const e=this.compatibilityKind(a),{kind:t}=e;t!==P.dG&&t!==P.O3&&this.warnings.push(e)}if(this.multicluster){const{compatible:e,payload:a}=await(0,P.nF)(t,n.version);e||this.warnings.push({kind:P.pC,payload:a})}}}};const ie=(0,ee.Z)(se,[["render",k],["__scopeId","data-v-17cb056e"]]);var re=ie},49237:function(e,t,a){var n,s;s=a(11665),n=function(){var e;function t(){}return t.LIST_ESCAPEES=["\\","\\\\",'\\"','"',"\0","","","","","","","","\b","\t","\n","\v","\f","\r","","","","","","","","","","","","","","","","","","",(e=String.fromCharCode)(133),e(160),e(8232),e(8233)],t.LIST_ESCAPED=["\\\\",'\\"','\\"','\\"',"\\0","\\x01","\\x02","\\x03","\\x04","\\x05","\\x06","\\a","\\b","\\t","\\n","\\v","\\f","\\r","\\x0e","\\x0f","\\x10","\\x11","\\x12","\\x13","\\x14","\\x15","\\x16","\\x17","\\x18","\\x19","\\x1a","\\e","\\x1c","\\x1d","\\x1e","\\x1f","\\N","\\_","\\L","\\P"],t.MAPPING_ESCAPEES_TO_ESCAPED=function(){var e,a,n,s;for(n={},e=a=0,s=t.LIST_ESCAPEES.length;0<=s?a<s:a>s;e=0<=s?++a:--a)n[t.LIST_ESCAPEES[e]]=t.LIST_ESCAPED[e];return n}(),t.PATTERN_CHARACTERS_TO_ESCAPE=new s("[\\x00-\\x1f]|Â|Â |â¨|â©"),t.PATTERN_MAPPING_ESCAPEES=new s(t.LIST_ESCAPEES.join("|").split("\\").join("\\\\")),t.PATTERN_SINGLE_QUOTING=new s("[\\s'\":{}[\\],&*#?]|^[-?|<>=!%@`]"),t.requiresDoubleQuoting=function(e){return this.PATTERN_CHARACTERS_TO_ESCAPE.test(e)},t.escapeWithDoubleQuotes=function(e){var t;return t=this.PATTERN_MAPPING_ESCAPEES.replace(e,function(e){return function(t){return e.MAPPING_ESCAPEES_TO_ESCAPED[t]}}(this)),'"'+t+'"'},t.requiresSingleQuoting=function(e){return this.PATTERN_SINGLE_QUOTING.test(e)},t.escapeWithSingleQuotes=function(e){return"'"+e.replace(/'/g,"''")+"'"},t}(),e.exports=n},11665:function(e){var t;t=function(){function e(e,t){var a,n,s,i,r,o,l,d,u;null==t&&(t=""),s="",r=e.length,o=null,n=0,i=0;while(i<r){if(a=e.charAt(i),"\\"===a)s+=e.slice(i,+(i+1)+1||9e9),i++;else if("("===a)if(i<r-2)if(d=e.slice(i,+(i+2)+1||9e9),"(?:"===d)i+=2,s+=d;else if("(?<"===d){n++,i+=2,l="";while(i+1<r){if(u=e.charAt(i+1),">"===u){s+="(",i++,l.length>0&&(null==o&&(o={}),o[l]=n);break}l+=u,i++}}else s+=a,n++;else s+=a;else s+=a;i++}this.rawRegex=e,this.cleanedRegex=s,this.regex=new RegExp(this.cleanedRegex,"g"+t.replace("g","")),this.mapping=o}return e.prototype.regex=null,e.prototype.rawRegex=null,e.prototype.cleanedRegex=null,e.prototype.mapping=null,e.prototype.exec=function(e){var t,a,n,s;if(this.regex.lastIndex=0,a=this.regex.exec(e),null==a)return null;if(null!=this.mapping)for(n in s=this.mapping,s)t=s[n],a[n]=a[t];return a},e.prototype.test=function(e){return this.regex.lastIndex=0,this.regex.test(e)},e.prototype.replace=function(e,t){return this.regex.lastIndex=0,e.replace(this.regex,t)},e.prototype.replaceAll=function(e,t,a){var n;null==a&&(a=0),this.regex.lastIndex=0,n=0;while(this.regex.test(e)&&(0===a||n<a))this.regex.lastIndex=0,e=e.replace(this.regex,t),n++;return[e,n]},e}(),e.exports=t}}]);
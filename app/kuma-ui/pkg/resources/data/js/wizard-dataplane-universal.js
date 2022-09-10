"use strict";(self["webpackChunkkuma_gui"]=self["webpackChunkkuma_gui"]||[]).push([[253],{81191:function(e){e.exports={type:"Dataplane",mesh:null,name:null,networking:{}}},59812:function(e,a,t){t.d(a,{Z:function(){return U}});var n=t(70821);const l={class:"wizard-switcher"},i=(0,n.Uk)(" Running on "),r={class:"capitalize"},o={key:0},s={key:0},u=(0,n._)("p",null,[(0,n.Uk)(" We have detected that you are running on a "),(0,n._)("strong",null,"Kubernetes environment"),(0,n.Uk)(", and we are going to be showing you instructions for Kubernetes unless you decide to visualize the instructions for Universal. ")],-1),d=(0,n.Uk)(" Switch to Universal instructions "),p={key:1},c=(0,n._)("p",null,[(0,n.Uk)(" We have detected that you are running on a "),(0,n._)("strong",null,"Kubernetes environment"),(0,n.Uk)(", but you are viewing instructions for Universal. ")],-1),v=(0,n.Uk)(" Switch back to Kubernetes instructions "),w={key:1},m={key:0},h=(0,n._)("p",null,[(0,n.Uk)(" We have detected that you are running on a "),(0,n._)("strong",null,"Universal environment"),(0,n.Uk)(", but you are viewing instructions for Kubernetes. ")],-1),k=(0,n.Uk)(" Switch back to Universal instructions "),g={key:1},D=(0,n._)("p",null,[(0,n.Uk)(" We have detected that you are running on a "),(0,n._)("strong",null,"Universal environment"),(0,n.Uk)(", and we are going to be showing you instructions for Universal unless you decide to visualize the instructions for Kubernetes. ")],-1),y=(0,n.Uk)(" Switch to Kubernetes instructions ");function _(e,a,t,_,b,f){const S=(0,n.up)("KButton"),N=(0,n.up)("KEmptyState");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(N,{ref:"emptyState","cta-is-hidden":"","is-error":!e.environment,class:"my-6 wizard-empty-state"},(0,n.Nv)({message:(0,n.w5)((()=>["kubernetes"===e.environment?((0,n.wg)(),(0,n.iD)("div",o,[e.$route.name===b.wizardRoutes.kubernetes?((0,n.wg)(),(0,n.iD)("div",s,[u,(0,n._)("p",null,[(0,n.Wm)(S,{to:{name:b.wizardRoutes.universal},appearance:"secondary"},{default:(0,n.w5)((()=>[d])),_:1},8,["to"])])])):e.$route.name===b.wizardRoutes.universal?((0,n.wg)(),(0,n.iD)("div",p,[c,(0,n._)("p",null,[(0,n.Wm)(S,{to:{name:b.wizardRoutes.kubernetes},appearance:"secondary"},{default:(0,n.w5)((()=>[v])),_:1},8,["to"])])])):(0,n.kq)("",!0)])):"universal"===e.environment?((0,n.wg)(),(0,n.iD)("div",w,[e.$route.name===b.wizardRoutes.kubernetes?((0,n.wg)(),(0,n.iD)("div",m,[h,(0,n._)("p",null,[(0,n.Wm)(S,{to:{name:b.wizardRoutes.universal},appearance:"secondary"},{default:(0,n.w5)((()=>[k])),_:1},8,["to"])])])):e.$route.name===b.wizardRoutes.universal?((0,n.wg)(),(0,n.iD)("div",g,[D,(0,n._)("p",null,[(0,n.Wm)(S,{to:{name:b.wizardRoutes.kubernetes},appearance:"secondary"},{default:(0,n.w5)((()=>[y])),_:1},8,["to"])])])):(0,n.kq)("",!0)])):(0,n.kq)("",!0)])),_:2},["kubernetes"===e.environment||"universal"===e.environment?{name:"title",fn:(0,n.w5)((()=>[i,(0,n._)("span",r,(0,n.zw)(e.environment),1)])),key:"0"}:void 0]),1032,["is-error"])])}var b=t(33907),f={name:"EnvironmentSwitcher",data(){return{wizardRoutes:{kubernetes:"kubernetes-dataplane",universal:"universal-dataplane"}}},computed:{...(0,b.Se)({environment:"config/getEnvironment"}),instructionsCtaText(){return"universal"===this.environment?"Switch to Kubernetes instructions":"Switch to Universal instructions"},instructionsCtaRoute(){return"kubernetes"===this.environment?{name:"universal-dataplane"}:{name:"kubernetes-dataplane"}}}},S=t(83744);const N=(0,S.Z)(f,[["render",_]]);var U=N},99737:function(e,a,t){t.r(a),t.d(a,{default:function(){return ye}});var n=t(70821);const l={class:"wizard"},i={class:"wizard__content"},r=(0,n._)("h3",null," Create Universal Dataplane ",-1),o=(0,n._)("h3",null," To get started, please select on what Mesh you would like to add the Dataplane: ",-1),s=(0,n._)("p",null," If you've got an existing Mesh that you would like to associate with your Dataplane, you can select it below, or create a new one using our Mesh Wizard. ",-1),u=(0,n._)("small",null,"Would you like to see instructions for Kubernetes? Use sidebar to change wizard!",-1),d=(0,n._)("option",{disabled:"",value:""}," Select an existing Mesh… ",-1),p=["value"],c=(0,n._)("label",{class:"k-input-label mr-4"}," or ",-1),v=(0,n.Uk)(" Create a new Mesh "),w=(0,n._)("h3",null," Setup Dataplane Mode ",-1),m=(0,n._)("p",null," You can create a data plane for a service or a data plane for a Gateway. ",-1),h={for:"service-dataplane"},k=(0,n._)("span",null," Service Dataplane ",-1),g={for:"gateway-dataplane"},D=(0,n._)("span",null," Gateway Dataplane ",-1),y=["disabled"],_=(0,n.Uk)(" Edit "),b=(0,n.Uk)(" This is a unique ID for the Dataplane instance. "),f=(0,n._)("h3",null," Networking ",-1),S=(0,n._)("p",null," It's time to now configure the networking settings so that the Dataplane can connect to the local service, and other data planes can consume your service. ",-1),N=(0,n._)("p",null,[(0,n._)("strong",null,"All fields below are required to proceed.")],-1),U=(0,n.Uk)(" The IP address that other services will use to consume this data plane. "),P=(0,n.Uk)(" The data plane port (that other services will use to consume this service). "),W=(0,n.Uk)(" The address where your service is listening on the machine. "),z=(0,n.Uk)(" The port where your service is listening on the machine. "),C=["value","selected"],I=(0,n.Uk)(" The protocol of the service. "),x={key:0},T={key:0},A=(0,n._)("h3",null," Auto-Inject DPP ",-1),E=(0,n._)("h3",null,"Searching…",-1),K=(0,n._)("p",null,"We are looking for your dataplane.",-1),$=(0,n._)("h3",null,"Done!",-1),M=(0,n.Uk)(" Your Dataplane "),V={key:0},F=(0,n.Uk)(" was found! "),R=(0,n._)("p",null," Proceed to the next step where we will show you your new Dataplane. ",-1),Z=(0,n.Uk)(" View Your Dataplane "),G=(0,n._)("h3",null,"Dataplane not found",-1),q=(0,n._)("p",null,"We were unable to find your dataplane.",-1),H=(0,n._)("p",null," Please return to the first step and make sure to select an existing Mesh, or create a new one. ",-1),j=(0,n._)("h3",null,"Dataplane",-1),O=(0,n._)("h3",null,"Example",-1),Y=(0,n._)("p",null," Below is an example of a Dataplane resource output: ",-1),L=(0,n._)("code",{class:"block"},[(0,n._)("pre",null,"type: Dataplane\nmesh: default\nname: dp-echo-1\nnetworking:\n  address: 10.0.0.1\n  inbound:\n  - port: 10000\n    servicePort: 9000\n    tags:\n      kuma.io/service: echo")],-1);function B(e,a,t,B,J,Q){const X=(0,n.up)("KButton"),ee=(0,n.up)("FormFragment"),ae=(0,n.up)("KCard"),te=(0,n.up)("HelperTooltip"),ne=(0,n.up)("CodeView"),le=(0,n.up)("TabsWidget"),ie=(0,n.up)("EntityScanner"),re=(0,n.up)("KAlert"),oe=(0,n.up)("EnvironmentSwitcher"),se=(0,n.up)("StepSkeleton");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("div",i,[(0,n.Wm)(se,{steps:J.steps,"sidebar-content":J.sidebarContent,"footer-enabled":!1===J.hideScannerSiblings,"next-disabled":Q.nextDisabled},{general:(0,n.w5)((()=>[r,(0,n._)("p",null," Welcome to the wizard to create a new Dataplane resource in "+(0,n.zw)(e.title)+". We will be providing you with a few steps that will get you started. ",1),(0,n._)("p",null," As you know, the "+(0,n.zw)(J.productName)+" GUI is read-only. ",1),o,s,u,(0,n.Wm)(ae,{class:"my-6","has-shadow":""},{body:(0,n.w5)((()=>[(0,n.Wm)(ee,{title:"Choose a Mesh","for-attr":"dp-mesh","all-inline":""},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.wy)((0,n._)("select",{id:"dp-mesh","onUpdate:modelValue":a[0]||(a[0]=e=>J.validate.meshName=e),class:"k-input w-100","data-testid":"mesh-select"},[d,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.meshes.items,(e=>((0,n.wg)(),(0,n.iD)("option",{key:e.name,value:e.name},(0,n.zw)(e.name),9,p)))),128))],512),[[n.bM,J.validate.meshName]])]),(0,n._)("div",null,[c,(0,n.Wm)(X,{to:{name:"create-mesh"},appearance:"secondary"},{default:(0,n.w5)((()=>[v])),_:1})])])),_:1})])),_:1})])),topology:(0,n.w5)((()=>[w,m,(0,n.Wm)(ee,{"all-inline":"","equal-cols":"","hide-label-col":"","shift-right":""},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n._)("label",h,[(0,n.wy)((0,n._)("input",{id:"service-dataplane","onUpdate:modelValue":a[1]||(a[1]=e=>J.validate.univDataplaneType=e),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-service",checked:""},null,512),[[n.G2,J.validate.univDataplaneType]]),k]),(0,n._)("label",g,[(0,n.wy)((0,n._)("input",{id:"gateway-dataplane","onUpdate:modelValue":a[2]||(a[2]=e=>J.validate.univDataplaneType=e),class:"k-input",type:"radio",name:"dataplane-type",value:"dataplane-type-gateway"},null,512),[[n.G2,J.validate.univDataplaneType]]),D])])])),_:1}),(0,n.Wm)(ee,{"all-inline":"",title:"Service name","for-attr":"service-name"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("input",{id:"service-name","onUpdate:modelValue":a[3]||(a[3]=e=>J.validate.univDataplaneServiceName=e),"data-testid":"service-name",type:"text",class:"k-input w-100 mr-4"},null,512),[[n.nr,J.validate.univDataplaneServiceName]])])),_:1}),(0,n.Wm)(ee,{"all-inline":"",title:"Dataplane ID","for-attr":"dataplane-id"},{default:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.wy)((0,n._)("input",{id:"dataplane-id","onUpdate:modelValue":a[4]||(a[4]=e=>J.validate.univDataplaneId=e),type:"text",class:"k-input w-100",disabled:J.validate.univDataplaneCustomIdDisabled},null,8,y),[[n.nr,J.validate.univDataplaneId]])]),(0,n._)("div",null,[(0,n.Wm)(X,{appearance:"secondary",onClick:a[5]||(a[5]=e=>J.validate.univDataplaneCustomIdDisabled=!1)},{default:(0,n.w5)((()=>[_])),_:1}),(0,n.Wm)(te,null,{default:(0,n.w5)((()=>[b])),_:1})])])),_:1})])),networking:(0,n.w5)((()=>[f,S,N,(0,n.Wm)(ee,{"all-inline":"",title:"Data Plane IP Address","for-attr":"network-address"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("input",{id:"network-address","onUpdate:modelValue":a[6]||(a[6]=e=>J.validate.univDataplaneNetworkAddress=e),type:"text",class:"k-input w-100"},null,512),[[n.nr,J.validate.univDataplaneNetworkAddress]]),(0,n.Wm)(te,null,{default:(0,n.w5)((()=>[U])),_:1})])),_:1}),(0,n.Wm)(ee,{"all-inline":"","fill-first":"",title:"Data Plane Port","for-attr":"network-dataplane-port"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("input",{id:"network-dataplane-port","onUpdate:modelValue":a[7]||(a[7]=e=>J.validate.univDataplaneNetworkDPPort=e),type:"text",class:"k-input w-100"},null,512),[[n.nr,J.validate.univDataplaneNetworkDPPort]]),(0,n.Wm)(te,null,{default:(0,n.w5)((()=>[P])),_:1})])),_:1}),(0,n.Wm)(ee,{"all-inline":"",title:"Service IP Address","for-attr":"network-service-address"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("input",{id:"network-service-address","onUpdate:modelValue":a[8]||(a[8]=e=>J.validate.univDataplaneNetworkServiceAddress=e),type:"text",class:"k-input w-100"},null,512),[[n.nr,J.validate.univDataplaneNetworkServiceAddress]]),(0,n.Wm)(te,null,{default:(0,n.w5)((()=>[W])),_:1})])),_:1}),(0,n.Wm)(ee,{"all-inline":"",title:"Service Port","for-attr":"network-service-port"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("input",{id:"network-service-port","onUpdate:modelValue":a[9]||(a[9]=e=>J.validate.univDataplaneNetworkServicePort=e),type:"text",class:"k-input w-100"},null,512),[[n.nr,J.validate.univDataplaneNetworkServicePort]]),(0,n.Wm)(te,null,{default:(0,n.w5)((()=>[z])),_:1})])),_:1}),(0,n.Wm)(ee,{"all-inline":"",title:"Protocol","for-attr":"network-dataplane-protocol"},{default:(0,n.w5)((()=>[(0,n.wy)((0,n._)("select",{id:"network-dataplane-protocol","onUpdate:modelValue":a[10]||(a[10]=e=>J.validate.univDataplaneNetworkProtocol=e),class:"k-input w-100",name:"network-dataplane-protocol"},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(J.formFields.protocols,((e,a)=>((0,n.wg)(),(0,n.iD)("option",{key:a,value:e,selected:J.validate.univDataplaneNetworkProtocol===e},(0,n.zw)(e),9,C)))),128))],512),[[n.bM,J.validate.univDataplaneNetworkProtocol]]),(0,n.Wm)(te,null,{default:(0,n.w5)((()=>[I])),_:1})])),_:1})])),complete:(0,n.w5)((()=>[J.validate.meshName?((0,n.wg)(),(0,n.iD)("div",x,[!1===J.hideScannerSiblings?((0,n.wg)(),(0,n.iD)("div",T,[A,(0,n._)("p",null," It's time to first generate the credentials so that "+(0,n.zw)(e.title)+" will allow the Dataplane to successfully authenticate itself with the control plane, and then finally install the Dataplane process (powered by Envoy). ",1),(0,n.Wm)(le,{loaders:!1,tabs:J.tabs,"initial-tab-override":"universal"},{universal:(0,n.w5)((()=>[(0,n.Wm)(ne,{title:"Generate Dataplane Token","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:Q.generateDpTokenCodeOutput},null,8,["content"]),(0,n.Wm)(ne,{title:"Start Dataplane Process","copy-button-text":"Copy Command to Clipboard",lang:"bash",content:Q.startDpCodeOutput},null,8,["content"])])),_:1},8,["tabs"])])):(0,n.kq)("",!0),(0,n.Wm)(ie,{"loader-function":Q.scanForEntity,"should-start":!0,"has-error":J.scanError,"can-complete":J.scanFound,onHideSiblings:Q.hideSiblings},{"loading-title":(0,n.w5)((()=>[E])),"loading-content":(0,n.w5)((()=>[K])),"complete-title":(0,n.w5)((()=>[$])),"complete-content":(0,n.w5)((()=>[(0,n._)("p",null,[M,J.validate.univDataplaneId?((0,n.wg)(),(0,n.iD)("strong",V,(0,n.zw)(J.validate.univDataplaneId),1)):(0,n.kq)("",!0),F]),R,(0,n._)("p",null,[(0,n.Wm)(X,{appearance:"primary",onClick:Q.compeleteDataPlaneSetup},{default:(0,n.w5)((()=>[Z])),_:1},8,["onClick"])])])),"error-title":(0,n.w5)((()=>[G])),"error-content":(0,n.w5)((()=>[q])),_:1},8,["loader-function","has-error","can-complete","onHideSiblings"])])):((0,n.wg)(),(0,n.j4)(re,{key:1,appearance:"danger"},{alertMessage:(0,n.w5)((()=>[H])),_:1}))])),dataplane:(0,n.w5)((()=>[j,(0,n._)("p",null," In "+(0,n.zw)(e.title)+", a Dataplane resource represents a data plane proxy running alongside one of your services. Data plane proxies can be added in any Mesh that you may have created, and in Kubernetes, they will be auto-injected by "+(0,n.zw)(e.title)+". ",1)])),example:(0,n.w5)((()=>[O,Y,L])),switch:(0,n.w5)((()=>[(0,n.Wm)(oe)])),_:1},8,["steps","sidebar-content","footer-enabled","next-disabled"])])])}var J=t(33907),Q=t(73570),X=t.n(Q),ee=t(21180),ae=t(76227),te=t(53419),ne=t(93897),le=t(18574),ie=t(43022),re=t(59812);const oe=(0,n._)("a",null,"?",-1);function se(e,a,t,l,i,r){const o=(0,n.up)("KPop");return(0,n.wg)(),(0,n.j4)(o,{trigger:"hover",class:"help-icon"},{content:(0,n.w5)((()=>[(0,n._)("div",null,[(0,n.WI)(e.$slots,"default")])])),default:(0,n.w5)((()=>[oe])),_:3})}var ue={},de=t(83744);const pe=(0,de.Z)(ue,[["render",se]]);var ce=pe,ve=t(71551),we=t(5129),me=t(81191),he=t.n(me),ke=t(45689),ge={name:"DataplaneWizardUniversal",components:{FormFragment:ne.Z,TabsWidget:le.Z,StepSkeleton:ie.Z,EnvironmentSwitcher:re.Z,HelperTooltip:ce,CodeView:ve.Z,EntityScanner:we.Z},data(){return{productName:ke.sG,randString:Math.random().toString(36).substring(2,8),schema:he(),steps:[{label:"General",slug:"general"},{label:"Topology",slug:"topology"},{label:"Networking",slug:"networking"},{label:"Install",slug:"complete"}],tabs:[{hash:"#universal",title:"Universal"}],sidebarContent:[{name:"dataplane"},{name:"example"},{name:"switch"}],startScanner:!1,scanFound:!1,hideScannerSiblings:!1,scanError:!1,isComplete:!1,validate:{meshName:"",univDataplaneType:"dataplane-type-service",univDataplaneServiceName:"",univDataplaneId:"",univDataplaneCustomIdDisabled:!0,univDataplaneNetworkAddress:null,univDataplaneNetworkServicePort:null,univDataplaneNetworkServiceAddress:"127.0.0.1",univDataplaneNetworkDPPort:null,univDataplaneNetworkProtocol:"tcp"},formFields:{protocols:["tcp","http","grpc"]}}},computed:{...(0,J.Se)({title:"config/getTagline",version:"config/getVersion",environment:"config/getEnvironment",meshes:"getMeshList"}),getDataplaneSchema(){const e=Object.assign({},this.schema),{meshName:a,univDataplaneType:t,univDataplaneServiceName:n,univDataplaneId:l,univDataplaneNetworkAddress:i,univDataplaneNetworkServicePort:r,univDataplaneNetworkServiceAddress:o,univDataplaneNetworkDPPort:s,univDataplaneNetworkProtocol:u}=this.validate;if(a)return e.name=l,e.mesh=a,"dataplane-type-service"===t?(e.networking.gateway&&delete e.networking.gateway,e.networking={address:i,inbound:[{port:s,servicePort:r,serviceAddress:o,tags:{"kuma.io/service":n,"kuma.io/protocol":u}}]}):"dataplane-type-gateway"===t&&(e.networking.inbound&&delete e.networking.inbound,e.networking={address:i,gateway:{tags:{"kuma.io/service":n}}}),e},generateDpTokenCodeOutput(){const{univDataplaneId:e}=this.validate,a=`kumactl generate dataplane-token --name=${e} > kuma-token-${e}`;return a},startDpCodeOutput(){const{univDataplaneId:e}=this.validate,a=`kuma-dp run \\\n      --cp-address=${(0,ae.H)()} \\\n      --dataplane="${X()(this.getDataplaneSchema)}" \\\n      --dataplane-token-file=kuma-token-${e}`;return a},nextDisabled(){const{meshName:e,univDataplaneServiceName:a,univDataplaneId:t,univDataplaneNetworkAddress:n,univDataplaneNetworkServicePort:l,univDataplaneNetworkDPPort:i,univDataplaneNetworkProtocol:r}=this.validate;return!e.length||("1"===this.$route.query.step?!(a&&t):"2"===this.$route.query.step&&!(n&&l&&i&&r))}},watch:{"validate.univDataplaneId"(e){this.validate.univDataplaneId=(0,te.GL)(e)},"validate.univDataplaneServiceName"(e){const a=(0,te.GL)(e);this.validate.univDataplaneServiceName=a,""===this.validate.univDataplaneServiceName?this.validate.univDataplaneId="":this.validate.univDataplaneId=(0,te.GL)(`${e}-${this.randString}`)},"validate.univDataplaneNetworkServicePort"(e){const a=e.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkServicePort=a},"validate.univDataplaneNetworkDPPort"(e){const a=e.replace(/[a-zA-Z]*$/g,"").trim();this.validate.univDataplaneNetworkDPPort=a}},methods:{hideSiblings(){this.hideScannerSiblings=!0},scanForEntity(){const{meshName:e,univDataplaneId:a}=this.validate;this.scanComplete=!1,this.scanError=!1,e&&a&&ee["default"].getDataplaneFromMesh({mesh:e,name:a}).then((e=>{e&&e.name.length>0?(this.isRunning=!0,this.scanFound=!0):this.scanError=!0})).catch((e=>{this.scanError=!0,console.error(e)})).finally((()=>{this.scanComplete=!0}))},compeleteDataPlaneSetup(){this.$store.dispatch("updateSelectedMesh",this.validate.meshName),this.$router.push({name:"dataplanes",params:{mesh:this.validate.meshName}})}}};const De=(0,de.Z)(ge,[["render",B]]);var ye=De}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TagShow"],{"0418":function(t,e,a){"use strict";var c=a("7a23");const i={class:"navbar navbar-expand-lg navbar-light bg-white shadow-custom fixed-top"},r={class:"container-fluid"},n=Object(c["h"])("BULETIN BPBJ KALTIM"),l=Object(c["f"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["f"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"navbarCollapse"},b={class:"navbar-nav mr-auto mb-2 mb-md-0"},o={class:"nav-item"},u=Object(c["f"])("i",{class:"fa fa-book-open","aria-hidden":"true"},null,-1),d=Object(c["h"])(" BERITA"),j={class:"nav-item"},O=Object(c["f"])("i",{class:"fa fa-calendar","aria-hidden":"true"},null,-1),h=Object(c["h"])(" AGENDA"),f={class:"nav-item"},p=Object(c["f"])("i",{class:"fa fa-image","aria-hidden":"true"},null,-1),y=Object(c["h"])(" GALERI"),g={class:"nav-item"},m=Object(c["f"])("i",{class:"fa fa-video","aria-hidden":"true"},null,-1),v=Object(c["h"])(" VIDEO"),x={class:"nav-item"},w=Object(c["f"])("i",{class:"fa fa-phone","aria-hidden":"true"},null,-1),B=Object(c["h"])(" KONTAK");function k(t,e,a,k,A,C){const T=Object(c["z"])("router-link");return Object(c["u"])(),Object(c["e"])("nav",i,[Object(c["f"])("div",r,[Object(c["i"])(T,{to:{name:"home"},class:"navbar-brand font-weight-bold text-uppercase"},{default:Object(c["F"])(()=>[n]),_:1}),l,Object(c["f"])("div",s,[Object(c["f"])("ul",b,[Object(c["f"])("li",o,[Object(c["i"])(T,{to:{name:"post"},class:"nav-link font-weight-bold text-uppercase"},{default:Object(c["F"])(()=>[u,d]),_:1})]),Object(c["f"])("li",j,[Object(c["i"])(T,{to:{name:"event"},class:"nav-link font-weight-bold text-uppercase"},{default:Object(c["F"])(()=>[O,h]),_:1})]),Object(c["f"])("li",f,[Object(c["i"])(T,{to:{name:"photo"},class:"nav-link font-weight-bold text-uppercase"},{default:Object(c["F"])(()=>[p,y]),_:1})]),Object(c["f"])("li",g,[Object(c["i"])(T,{to:{name:"video"},class:"nav-link font-weight-bold text-uppercase"},{default:Object(c["F"])(()=>[m,v]),_:1})]),Object(c["f"])("li",x,[Object(c["i"])(T,{to:{name:"contact"},class:"nav-link font-weight-bold text-uppercase"},{default:Object(c["F"])(()=>[w,B]),_:1})])])])])])}var A={name:"HeaderComponent"},C=a("6b0d"),T=a.n(C);const _=T()(A,[["render",k]]);e["a"]=_},b066:function(t,e,a){"use strict";a.r(e);var c=a("7a23");const i={class:"post-index"},r={class:"pt-5 border-bottom bg-light"},n={class:"container pt-md-1 pb-md-1"},l=Object(c["f"])("h1",{class:"bd-title mt-4 font-weight-bold"},[Object(c["f"])("i",{class:"fa fa-book-open","aria-hidden":"true"}),Object(c["h"])(" BERITA ")],-1),s={class:"bd-lead"},b={"aria-label":"breadcrumb"},o={class:"breadcrumb"},u={class:"breadcrumb-item"},d=Object(c["f"])("i",{class:"fa fa-home"},null,-1),j=Object(c["h"])(" Home"),O={class:"breadcrumb-item"},h=Object(c["f"])("i",{class:"fa fa-book-open"},null,-1),f=Object(c["h"])(" Berita"),p={class:"container-fluid mt-5 mb-5"},y={class:"row"},g={key:0,class:"row"},m={class:"card h-100 shadow-sm border-0 rounded-lg"},v={class:"card-img"},x=["src"],w={class:"card-body"},B={class:"card-footer bg-white"},k=Object(c["f"])("i",{class:"fa fa-calendar","aria-hidden":"true"},null,-1),A={key:1},C=Object(c["f"])("div",{class:"alert alert-danger"}," DATA BERITA TERBARU BELUM TERSEDIA ! ",-1),T=[C],_={class:"text-center"},E=Object(c["f"])("span",{class:"fa fa-arrow-down"},null,-1),K=Object(c["h"])(" LIHAT LEBIH BANYAK"),N=[E,K];function S(t,e,a,C,E,K){const S=Object(c["z"])("Header"),F=Object(c["z"])("router-link"),I=Object(c["z"])("Footer");return Object(c["u"])(),Object(c["e"])("div",i,[Object(c["i"])(S),Object(c["f"])("header",r,[Object(c["f"])("div",n,[l,Object(c["f"])("p",s,Object(c["B"])(C.tagInfo.message),1)])]),Object(c["f"])("nav",b,[Object(c["f"])("ol",o,[Object(c["f"])("li",u,[Object(c["i"])(F,{to:{name:"home"},class:"text-decoration-none"},{default:Object(c["F"])(()=>[d,j]),_:1})]),Object(c["f"])("li",O,[Object(c["i"])(F,{to:{name:"post"},class:"text-decoration-none"},{default:Object(c["F"])(()=>[h,f]),_:1})])])]),Object(c["f"])("div",p,[Object(c["f"])("div",y,[C.posts.length>0?(Object(c["u"])(),Object(c["e"])("div",g,[(Object(c["u"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(C.posts,t=>(Object(c["u"])(),Object(c["e"])("div",{class:"col-md-4 mb-4",key:t.id},[Object(c["f"])("div",m,[Object(c["f"])("div",v,[Object(c["f"])("img",{src:t.image,class:"w-100",style:{height:"200px","object-fit":"cover","border-top-left-radius":".3rem","border-top-right-radius":".3rem"}},null,8,x)]),Object(c["f"])("div",w,[Object(c["i"])(F,{to:{name:"detail_post",params:{slug:t.slug}},class:"text-dark text-decoration-none"},{default:Object(c["F"])(()=>[Object(c["f"])("h6",null,Object(c["B"])(t.title),1)]),_:2},1032,["to"])]),Object(c["f"])("div",B,[k,Object(c["h"])(" "+Object(c["B"])(t.created_at),1)])])]))),128))])):(Object(c["u"])(),Object(c["e"])("div",A,T)),Object(c["G"])(Object(c["f"])("div",_,[Object(c["f"])("button",{type:"button",class:"btn btn-primary btn-md",onClick:e[0]||(e[0]=(...t)=>C.loadMore&&C.loadMore(...t))},N)],512),[[c["D"],C.moreExists]])])]),Object(c["i"])(I)])}var F=a("bc3a"),I=a.n(F),G=a("6c02"),L=a("0418"),R=a("fd2d"),M={name:"TagComponent",components:{Header:L["a"],Footer:R["a"]},setup(){const t=Object(c["x"])([]),e=Object(c["x"])({});let a=Object(c["x"])(!1),i=Object(c["x"])(0);const r=Object(G["c"])(),n=()=>{I.a.get("/api/tag/"+r.params.slug).then(c=>{e.value=c.data.response,t.value=c.data.data.data,c.data.data.current_page<c.data.data.last_page?(a.value=!0,i.value=c.data.data.current_page+1):a.value=!1})},l=()=>{I.a.get(`/api/tag/${r.params.slug}?page=${i.value}`).then(e=>{e.data.data.current_page<e.data.data.last_page?(a.value=!0,i.value=e.data.data.current_page+1):a.value=!1,e.data.data.data.forEach(e=>{t.value.push(e)})})};return Object(c["s"])(()=>{n()}),Object(c["E"])(()=>r.params.slug,()=>{n()}),{posts:t,tagInfo:e,moreExists:a,loadMore:l}}},P=a("6b0d"),U=a.n(P);const z=U()(M,[["render",S]]);e["default"]=z},e330:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"d",(function(){return s}));var c=a("7a23"),i=function(){return Math.random().toString(36).substring(2)},r=Object(c["j"])({name:"ContentLoader",props:{width:{type:[Number,String]},height:{type:[Number,String]},viewBox:{type:String},preserveAspectRatio:{type:String,default:"xMidYMid meet"},speed:{type:Number,default:2},baseUrl:{type:String,default:""},primaryColor:{type:String,default:"#f9f9f9"},secondaryColor:{type:String,default:"#ecebeb"},primaryOpacity:{type:Number,default:1},secondaryOpacity:{type:Number,default:1},uniqueKey:{type:String},animate:{type:Boolean,default:!0}},setup:function(t){var e=Object(c["b"])((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idClip"):i()})),a=Object(c["b"])((function(){return t.uniqueKey?"".concat(t.uniqueKey,"-idGradient"):i()})),r=Object(c["b"])((function(){var e;return null!==(e=t.width)&&void 0!==e?e:400})),n=Object(c["b"])((function(){var e;return null!==(e=t.height)&&void 0!==e?e:130})),l=Object(c["b"])((function(){var e;return null!==(e=t.viewBox)&&void 0!==e?e:"0 0 ".concat(r.value," ").concat(n.value)}));return{idClip:e,idGradient:a,computedViewBox:l}},render:function(){return Object(c["i"])("svg",{width:this.width,height:this.height,viewBox:this.computedViewBox,version:"1.1",preserveAspectRatio:this.preserveAspectRatio},[Object(c["i"])("rect",{style:{fill:"url(".concat(this.baseUrl,"#").concat(this.idGradient,")")},"clip-path":"url(".concat(this.baseUrl,"#").concat(this.idClip,")"),x:"0",y:"0",width:"100%",height:"100%"},null),Object(c["i"])("defs",null,[Object(c["i"])("clipPath",{id:this.idClip},[this.$slots["default"]?this.$slots["default"]():Object(c["i"])("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"100%"},null)]),Object(c["i"])("linearGradient",{id:this.idGradient},[Object(c["i"])("stop",{offset:"0%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?Object(c["i"])("animate",{attributeName:"offset",values:"-2; 1",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),Object(c["i"])("stop",{offset:"50%","stop-color":this.secondaryColor,"stop-opacity":this.secondaryOpacity},[this.animate?Object(c["i"])("animate",{attributeName:"offset",values:"-1.5; 1.5",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null]),Object(c["i"])("stop",{offset:"100%","stop-color":this.primaryColor,"stop-opacity":this.primaryOpacity},[this.animate?Object(c["i"])("animate",{attributeName:"offset",values:"-1; 2",dur:"".concat(this.speed,"s"),repeatCount:"indefinite"},null):null])])])])}}),n=Object(c["j"])((function(t,e){var a=e.attrs;return function(){return Object(c["i"])(r,a,{default:function(){return[Object(c["i"])("circle",{cx:"10",cy:"20",r:"8"},null),Object(c["i"])("rect",{x:"25",y:"15",rx:"5",ry:"5",width:"220",height:"10"},null),Object(c["i"])("circle",{cx:"10",cy:"50",r:"8"},null),Object(c["i"])("rect",{x:"25",y:"45",rx:"5",ry:"5",width:"220",height:"10"},null),Object(c["i"])("circle",{cx:"10",cy:"80",r:"8"},null),Object(c["i"])("rect",{x:"25",y:"75",rx:"5",ry:"5",width:"220",height:"10"},null),Object(c["i"])("circle",{cx:"10",cy:"110",r:"8"},null),Object(c["i"])("rect",{x:"25",y:"105",rx:"5",ry:"5",width:"220",height:"10"},null)]}})}})),l=(Object(c["j"])((function(t,e){var a=e.attrs;return function(){return Object(c["i"])(r,a,{default:function(){return[Object(c["i"])("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"70",height:"10"},null),Object(c["i"])("rect",{x:"80",y:"0",rx:"3",ry:"3",width:"100",height:"10"},null),Object(c["i"])("rect",{x:"190",y:"0",rx:"3",ry:"3",width:"10",height:"10"},null),Object(c["i"])("rect",{x:"15",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),Object(c["i"])("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"},null),Object(c["i"])("rect",{x:"15",y:"40",rx:"3",ry:"3",width:"90",height:"10"},null),Object(c["i"])("rect",{x:"115",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),Object(c["i"])("rect",{x:"185",y:"40",rx:"3",ry:"3",width:"60",height:"10"},null),Object(c["i"])("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"30",height:"10"},null)]}})}})),Object(c["j"])((function(t,e){var a=e.attrs;return function(){return Object(c["i"])(r,a,{default:function(){return[Object(c["i"])("rect",{x:"70",y:"15",rx:"4",ry:"4",width:"117",height:"6.4"},null),Object(c["i"])("rect",{x:"70",y:"35",rx:"3",ry:"3",width:"85",height:"6.4"},null),Object(c["i"])("rect",{x:"0",y:"80",rx:"3",ry:"3",width:"350",height:"6.4"},null),Object(c["i"])("rect",{x:"0",y:"100",rx:"3",ry:"3",width:"380",height:"6.4"},null),Object(c["i"])("rect",{x:"0",y:"120",rx:"3",ry:"3",width:"201",height:"6.4"},null),Object(c["i"])("circle",{cx:"30",cy:"30",r:"30"},null)]}})}}))),s=Object(c["j"])((function(t,e){var a=e.attrs;return function(){return Object(c["i"])(r,a,{default:function(){return[Object(c["i"])("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"10"},null),Object(c["i"])("rect",{x:"20",y:"20",rx:"3",ry:"3",width:"220",height:"10"},null),Object(c["i"])("rect",{x:"20",y:"40",rx:"3",ry:"3",width:"170",height:"10"},null),Object(c["i"])("rect",{x:"0",y:"60",rx:"3",ry:"3",width:"250",height:"10"},null),Object(c["i"])("rect",{x:"20",y:"80",rx:"3",ry:"3",width:"200",height:"10"},null),Object(c["i"])("rect",{x:"20",y:"100",rx:"3",ry:"3",width:"80",height:"10"},null)]}})}}));Object(c["j"])((function(t,e){var a=e.attrs;return function(){return Object(c["i"])(r,Object(c["n"])(a,{viewBox:"0 0 400 480"}),{default:function(){return[Object(c["i"])("circle",{cx:"30",cy:"30",r:"30"},null),Object(c["i"])("rect",{x:"75",y:"13",rx:"4",ry:"4",width:"100",height:"13"},null),Object(c["i"])("rect",{x:"75",y:"37",rx:"4",ry:"4",width:"50",height:"8"},null),Object(c["i"])("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"400",height:"400"},null)]}})}}))},fd2d:function(t,e,a){"use strict";var c=a("7a23");const i={class:"container-fluid",style:{background:"white"}},r={class:"row p-4"},n=Object(c["f"])("div",{class:"col-md-4"},[Object(c["f"])("h5",null,"TENTANG"),Object(c["f"])("hr"),Object(c["f"])("p",null," Buletin Digital Biro Pengadaan Barang dan Jasa Provinsi Kalimantan Timur ")],-1),l={class:"col-md-4"},s=Object(c["f"])("h5",null,"TAGS",-1),b=Object(c["f"])("hr",null,null,-1),o={key:0},u={key:1,class:"text-center"},d=Object(c["f"])("div",{class:"col-md-4"},[Object(c["f"])("h5",null,"KONTAK"),Object(c["f"])("hr"),Object(c["f"])("p",null,[Object(c["f"])("i",{class:"fa fa-map-marker","aria-hidden":"true"}),Object(c["h"])("Kantor Gubernur Prov Kaltim "),Object(c["f"])("br"),Object(c["h"])(" Alamat : Jl. Gajah Mada No 2, Samarinda Provinsi Kalimantan Timur "),Object(c["f"])("i",{class:"fas fa-phone"})])],-1),j=Object(c["f"])("div",{class:"container-fluid bg-dark"},[Object(c["f"])("div",{class:"row p-3"},[Object(c["f"])("div",{class:"text-center text-white font-weight-bold"}," Pengelolaan Sistem Informasi BPBJ Kaltim 2022 ")])],-1);function O(t,e,a,O,h,f){const p=Object(c["z"])("router-link"),y=Object(c["z"])("ListLoader");return Object(c["u"])(),Object(c["e"])("footer",null,[Object(c["f"])("div",i,[Object(c["f"])("div",r,[n,Object(c["f"])("div",l,[s,b,O.tags.length>0?(Object(c["u"])(),Object(c["e"])("div",o,[(Object(c["u"])(!0),Object(c["e"])(c["a"],null,Object(c["y"])(O.tags,t=>(Object(c["u"])(),Object(c["d"])(p,{to:{name:"detail_tag",params:{slug:t.slug}},key:t.id,class:"btn btn-sm btn-outline-secondary mb-2 me-2"},{default:Object(c["F"])(()=>[Object(c["h"])(Object(c["B"])(t.name.toUpperCase()),1)]),_:2},1032,["to"]))),128))])):(Object(c["u"])(),Object(c["e"])("div",u,[Object(c["i"])(y)]))]),d])]),j])}var h=a("e330"),f=a("bc3a"),p=a.n(f),y={name:"FooterComponent",components:{ListLoader:h["d"]},setup(){const t=Object(c["x"])([]);return Object(c["s"])(()=>{p.a.get("/api/tag").then(e=>{t.value=e.data.data.data}).catch(()=>{t.value=[]})}),{tags:t}}},g=a("6b0d"),m=a.n(g);const v=m()(y,[["render",O]]);e["a"]=v}}]);
//# sourceMappingURL=TagShow.70f4e8e5.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"B1p+":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Hindi"}}}}')},Bl7J:function(e,r,t){"use strict";var a=t("B1p+"),o=t("q1tI"),i=t.n(o),n=t("2A+t"),s=t("Wbzz"),c={color:"gray",textDecoration:"none",ml:[15,40,80]},d=function(e){var r=e.siteTitle;return Object(n.c)("header",{sx:{marginBottom:[0,1,3]}},Object(n.c)("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex"}},Object(n.c)("h1",{style:{margin:0}},Object(n.c)(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},r)),Object(n.c)("h5",null,Object(n.c)(s.Link,{sx:c,to:"/"},"Vowels")),Object(n.c)("h5",null,Object(n.c)(s.Link,{sx:c,to:"/commonWords"},"Common Words")),Object(n.c)("h5",null,Object(n.c)(s.Link,{sx:c,to:"/learn"},"Learn words")),Object(n.c)("h5",null,Object(n.c)(s.Link,{sx:c,to:"/greetings"},"Learn phrases"))))};d.defaultProps={siteTitle:""};var l=d;r.a=function(e){var r=e.children,t=e.flexDirection,o=void 0===t?"row":t,s=a.data;return Object(n.c)(i.a.Fragment,null,Object(n.c)(l,{siteTitle:s.site.siteMetadata.title}),Object(n.c)("div",{sx:{mx:[0,1,3,6],maxWidth:1200,padding:[0,1,3]}},Object(n.c)("main",{sx:{display:"flex",flexWrap:"wrap",flexDirection:o,alignItems:"center",justifyContent:"center",mb:[5]}},r),Object(n.c)("footer",null,"© ",(new Date).getFullYear(),", Built by"," ",Object(n.c)("a",{sx:{color:"highlight",textDecoration:"none","&:hover":{color:"purple"}},href:"https://stenqvist.co"},"V"))))}},izhR:function(e,r,t){"use strict";t.d(r,"a",(function(){return ge})),t.d(r,"c",(function(){return be})),t.d(r,"b",(function(){return ye}));t("a1Th"),t("h7Nl"),t("Btvt"),t("f3/d"),t("91GP"),t("bWfx"),t("LK8F"),t("V+eJ");var a=t("ZdEh"),o=(t("Oyvg"),t("4qRI")),i=t("9uj6"),n=(t("0l/t"),t("KKXr"),t("rGqo"),t("yt8O"),t("RW0V"),t("Vd3H"),t("8+KV"),t("MgzW")),s=t.n(n),c=function(e,r){var t=s()({},e,r);for(var a in e){var o;e[a]&&"object"==typeof r[a]&&s()(t,((o={})[a]=s()(e[a],r[a]),o))}return t},d={breakpoints:[40,52,64].map((function(e){return e+"em"}))},l=function(e){return"@media screen and (min-width: "+e+")"},p=function(e,r){return f(r,e,e)},f=function(e,r,t,a,o){for(r=r&&r.split?r.split("."):[r],a=0;a<r.length;a++)e=e?e[r[a]]:o;return e===o?t:e},u=function e(r){var t={},a=function(e){var a,o,i={},n=!1,p=e.theme&&e.theme.disableStyledSystemCache;for(var u in e)if(r[u]){var b=r[u],h=e[u],y=f(e.theme,b.scale,b.defaults);if("object"!=typeof h)s()(i,b(h,y,e));else{if(t.breakpoints=!p&&t.breakpoints||f(e.theme,"breakpoints",d.breakpoints),Array.isArray(h)){t.media=!p&&t.media||[null].concat(t.breakpoints.map(l)),i=c(i,g(t.media,b,y,h,e));continue}null!==h&&(i=c(i,m(t.breakpoints,b,y,h,e)),n=!0)}}return n&&(a=i,o={},Object.keys(a).sort((function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(e){o[e]=a[e]})),i=o),i};a.config=r,a.propNames=Object.keys(r),a.cache=t;var o=Object.keys(r).filter((function(e){return"config"!==e}));return o.length>1&&o.forEach((function(t){var o;a[t]=e(((o={})[t]=r[t],o))})),a},g=function(e,r,t,a,o){var i={};return a.slice(0,e.length).forEach((function(a,n){var c,d=e[n],l=r(a,t,o);d?s()(i,((c={})[d]=s()({},i[d],l),c)):s()(i,l)})),i},m=function(e,r,t,a,o){var i={};for(var n in a){var c=e[n],d=r(a[n],t,o);if(c){var p,f=l(c);s()(i,((p={})[f]=s()({},i[f],d),p))}else s()(i,d)}return i},b=function(e){var r=e.properties,t=e.property,a=e.scale,o=e.transform,i=void 0===o?p:o,n=e.defaultScale;r=r||[t];var s=function(e,t,a){var o={},n=i(e,t,a);if(null!==n)return r.forEach((function(e){o[e]=n})),o};return s.scale=a,s.defaults=n,s},h=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach((function(t){var a=e[t];r[t]=!0!==a?"function"!=typeof a?b(a):a:b({property:t,scale:t})})),u(r)},y=function(){for(var e={},r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];t.forEach((function(r){r&&r.config&&s()(e,r.config)}));var o=u(e);return o},v=h({width:{property:"width",scale:"sizes",transform:function(e,r){return f(r,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),w=v,x={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};x.bg=x.backgroundColor;var O=h(x),R=O,j=h({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),S=j,_=h({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),k=_,E={space:[0,4,8,16,32,64,128,256,512]},z=h({gridGap:{property:"gridGap",scale:"space",defaultScale:E.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:E.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:E.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),W=z,B={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};B.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},B.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},B.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},B.borderBottomColor={property:"borderBottomColor",scale:"colors"},B.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},B.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},B.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},B.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},B.borderLeftColor={property:"borderLeftColor",scale:"colors"},B.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},B.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},B.borderRightColor={property:"borderRightColor",scale:"colors"},B.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var C=h(B),L=C,T={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};T.bgImage=T.backgroundImage,T.bgSize=T.backgroundSize,T.bgPosition=T.backgroundPosition,T.bgRepeat=T.backgroundRepeat;var I=h(T),A=I,H={space:[0,4,8,16,32,64,128,256,512]},K=h({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:H.space},right:{property:"right",scale:"space",defaultScale:H.space},bottom:{property:"bottom",scale:"space",defaultScale:H.space},left:{property:"left",scale:"space",defaultScale:H.space}}),P=K,F={space:[0,4,8,16,32,64,128,256,512]},D=function(e){return"number"==typeof e&&!isNaN(e)},G=function(e,r){if(!D(e))return f(r,e,e);var t=e<0,a=Math.abs(e),o=f(r,a,a);return D(o)?o*(t?-1:1):t?"-"+o:o},N={};N.margin={margin:{property:"margin",scale:"space",transform:G,defaultScale:F.space},marginTop:{property:"marginTop",scale:"space",transform:G,defaultScale:F.space},marginRight:{property:"marginRight",scale:"space",transform:G,defaultScale:F.space},marginBottom:{property:"marginBottom",scale:"space",transform:G,defaultScale:F.space},marginLeft:{property:"marginLeft",scale:"space",transform:G,defaultScale:F.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:G,defaultScale:F.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:G,defaultScale:F.space}},N.margin.m=N.margin.margin,N.margin.mt=N.margin.marginTop,N.margin.mr=N.margin.marginRight,N.margin.mb=N.margin.marginBottom,N.margin.ml=N.margin.marginLeft,N.margin.mx=N.margin.marginX,N.margin.my=N.margin.marginY,N.padding={padding:{property:"padding",scale:"space",defaultScale:F.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:F.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:F.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:F.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:F.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:F.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:F.space}},N.padding.p=N.padding.padding,N.padding.pt=N.padding.paddingTop,N.padding.pr=N.padding.paddingRight,N.padding.pb=N.padding.paddingBottom,N.padding.pl=N.padding.paddingLeft,N.padding.px=N.padding.paddingX,N.padding.py=N.padding.paddingY;var M=y(h(N.margin),h(N.padding)),X=M,Y=h({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});t("DNiP");function V(){return(V=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var q=function(e,r,t,a,o){for(r=r&&r.split?r.split("."):[r],a=0;a<r.length;a++)e=e?e[r[a]]:o;return e===o?t:e},J=[40,52,64].map((function(e){return e+"em"})),$={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},U={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},Z={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},Q={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},ee=function(e,r){if("number"!=typeof r||r>=0)return q(e,r,r);var t=Math.abs(r),a=q(e,t,t);return"string"==typeof a?"-"+a:-1*a},re=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(e,r){var t;return V({},e,((t={})[r]=ee,t))}),{}),te=function e(r){return function(t){void 0===t&&(t={});var a=V({},$,{},t.theme||t),o={},i=function(e){return function(r){var t={},a=q(r,"breakpoints",J),o=[null].concat(a.map((function(e){return"@media screen and (min-width: "+e+")"})));for(var i in e){var n="function"==typeof e[i]?e[i](r):e[i];if(null!=n)if(Array.isArray(n))for(var s=0;s<n.slice(0,o.length).length;s++){var c=o[s];c?(t[c]=t[c]||{},null!=n[s]&&(t[c][i]=n[s])):t[i]=n[s]}else t[i]=n}return t}}("function"==typeof r?r(a):r)(a);for(var n in i){var s=i[n],c="function"==typeof s?s(a):s;if("variant"!==n)if(c&&"object"==typeof c)o[n]=e(c)(a);else{var d=q(U,n,n),l=q(Q,d),p=q(a,l,q(a,d,{})),f=q(re,d,q)(p,c,c);if(Z[d])for(var u=Z[d],g=0;g<u.length;g++)o[u[g]]=f;else o[d]=f}else o=V({},o,{},e(q(a,c))(a))}return o}},ae=function(e){var r,t,a=e.scale,o=e.prop,i=void 0===o?"variant":o,n=e.variants,s=void 0===n?{}:n,c=e.key;(t=Object.keys(s).length?function(e,r,t){return te(f(r,e,null))(t.theme)}:function(e,r){return f(r,e,null)}).scale=a||c,t.defaults=s;var d=((r={})[i]=t,r);return u(d)},oe=ae({key:"buttons"}),ie=ae({key:"textStyles",prop:"textStyle"}),ne=ae({key:"colorStyles",prop:"colors"}),se=(w.width,w.height,w.minWidth,w.minHeight,w.maxWidth,w.maxHeight,w.size,w.verticalAlign,w.display,w.overflow,w.overflowX,w.overflowY,R.opacity,S.fontSize,S.fontFamily,S.fontWeight,S.lineHeight,S.textAlign,S.fontStyle,S.letterSpacing,k.alignItems,k.alignContent,k.justifyItems,k.justifyContent,k.flexWrap,k.flexDirection,k.flex,k.flexGrow,k.flexShrink,k.flexBasis,k.justifySelf,k.alignSelf,k.order,W.gridGap,W.gridColumnGap,W.gridRowGap,W.gridColumn,W.gridRow,W.gridAutoFlow,W.gridAutoColumns,W.gridAutoRows,W.gridTemplateColumns,W.gridTemplateRows,W.gridTemplateAreas,W.gridArea,L.borderWidth,L.borderStyle,L.borderColor,L.borderTop,L.borderRight,L.borderBottom,L.borderLeft,L.borderRadius,A.backgroundImage,A.backgroundSize,A.backgroundPosition,A.backgroundRepeat,P.zIndex,P.top,P.right,P.bottom,P.left,function(e){var r=new RegExp("^("+e.join("|")+")$");return Object(o.a)((function(e){return Object(i.a)(e)&&!r.test(e)}))}),ce=(se(y(M,j,O,v,_,C,I,K,z,Y,oe,ie,ne).propNames),t("5D9J")),de=t("qKvR"),le=t("q1tI"),pe=t.n(le),fe=se(X.propNames.concat(R.propNames)),ue=Object(ce.a)("div",{shouldForwardProp:fe})({boxSizing:"border-box",margin:0,minWidth:0},(function(e){return Object(a.a)(e.__css)(e.theme)}),(function(e){var r=e.theme,t=e.variant,o=e.__themeKey;return void 0===o&&(o="variants"),Object(a.a)(Object(a.b)(r,o+"."+t,Object(a.b)(r,t)))}),X,R,(function(e){return Object(a.a)(e.sx)(e.theme)}),(function(e){return e.css}));Object(ce.a)(ue)({display:"flex"});pe.a.forwardRef((function(e,r){var t=e.width,a=e.columns,o=e.gap;void 0===o&&(o=3);var i=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["width","columns","gap"]),n=t?function e(r){return Array.isArray(r)?r.map(e):!!r&&"repeat(auto-fit, minmax("+(("number"==typeof(t=r)?t+"px":t)+", 1fr))");var t}(t):function e(r){return Array.isArray(r)?r.map(e):!!r&&("number"==typeof r?"repeat("+r+", 1fr)":r)}(a);return pe.a.createElement(ue,Object.assign({},{ref:r},i,{__themeKey:"grids",__css:{display:"grid",gridGap:o,gridTemplateColumns:n}}))}));var ge=pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"button",variant:"primary"},e,{__themeKey:"buttons",__css:{appearance:"none",display:"inline-block",textAlign:"center",lineHeight:"inherit",textDecoration:"none",fontSize:"inherit",px:3,py:2,color:"white",bg:"primary",border:0,borderRadius:4}}))})),me=pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"a",variant:"styles.a"},e,{__themeKey:"links"}))})),be=pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r},e,{__themeKey:"text"}))})),he=(pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"h2",variant:"heading"},e,{__themeKey:"text",__css:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"}}))})),pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"img"},e,{__themeKey:"images",__css:Object.assign({},{maxWidth:"100%",height:"auto"},e.__css)}))}))),ye=pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,variant:"primary"},e,{__themeKey:"cards"}))})),ve=pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"label",variant:"label"},e,{__themeKey:"forms",__css:{width:"100%",display:"flex"}}))})),we=pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"input",variant:"input"},e,{__themeKey:"forms",__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",bg:"transparent"}}))}));var xe=function(e){var r=e.size;void 0===r&&(r=24);var t=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size"]);return pe.a.createElement(ue,Object.assign({},{as:"svg",xmlns:"http://www.w3.org/2000/svg",width:r+"",height:r+"",viewBox:"0 0 24 24",fill:"currentcolor"},t))},Oe=function(e){return function(r){var t={};for(var a in r)e(a||"")&&(t[a]=r[a]);return t}},Re=/^m[trblxy]?$/,je=Oe((function(e){return Re.test(e)})),Se=Oe((function(e){return!Re.test(e)})),_e=function(e){return pe.a.createElement(xe,e,pe.a.createElement("path",{d:"M7 10l5 5 5-5z"}))};pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},je(e),{sx:{display:"flex"}}),pe.a.createElement(ue,Object.assign({},{ref:r,as:"select",variant:"select"},Se(e),{__themeKey:"forms",__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",bg:"transparent"}})),pe.a.createElement(_e,{sx:{ml:-28,alignSelf:"center",pointerEvents:"none"}}))})),pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"textarea",variant:"textarea"},e,{__themeKey:"forms",__css:{display:"block",width:"100%",p:2,appearance:"none",fontSize:"inherit",lineHeight:"inherit",border:"1px solid",borderRadius:4,color:"inherit",bg:"transparent"}}))}));var ke=function(e){return pe.a.createElement(xe,e,pe.a.createElement("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))},Ee=function(e){return pe.a.createElement(xe,e,pe.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}))},ze=function(e){return pe.a.createElement(pe.a.Fragment,null,pe.a.createElement(ke,Object.assign({},e,{__css:{display:"none","input:checked ~ &":{display:"block"}}})),pe.a.createElement(Ee,Object.assign({},e,{__css:{display:"block","input:checked ~ &":{display:"none"}}})))};pe.a.forwardRef((function(e,r){var t=e.className,a=e.sx,o=e.variant;void 0===o&&(o="radio");var i=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["className","sx","variant"]);return pe.a.createElement(ue,null,pe.a.createElement(ue,Object.assign({},{ref:r,as:"input",type:"radio"},i,{sx:{position:"absolute",opacity:0,zIndex:-1,width:1,height:1,overflow:"hidden"}})),pe.a.createElement(ue,{as:ze,"aria-hidden":"true",__themeKey:"forms",variant:o,className:t,sx:a,__css:{mr:2,borderRadius:9999,color:"gray","input:checked ~ &":{color:"primary"},"input:focus ~ &":{bg:"highlight"}}}))}));var We=function(e){return pe.a.createElement(xe,e,pe.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},Be=function(e){return pe.a.createElement(xe,e,pe.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}))},Ce=function(e){return pe.a.createElement(pe.a.Fragment,null,pe.a.createElement(We,Object.assign({},e,{__css:{display:"none","input:checked ~ &":{display:"block"}}})),pe.a.createElement(Be,Object.assign({},e,{__css:{display:"block","input:checked ~ &":{display:"none"}}})))},Le=(pe.a.forwardRef((function(e,r){var t=e.className,a=e.sx,o=e.variant;void 0===o&&(o="checkbox");var i=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["className","sx","variant"]);return pe.a.createElement(ue,null,pe.a.createElement(ue,Object.assign({},{ref:r,as:"input",type:"checkbox"},i,{sx:{position:"absolute",opacity:0,zIndex:-1,width:1,height:1,overflow:"hidden"}})),pe.a.createElement(ue,{as:Ce,"aria-hidden":"true",__themeKey:"forms",variant:o,className:t,sx:a,__css:{mr:2,borderRadius:4,color:"gray","input:checked ~ &":{color:"primary"},"input:focus ~ &":{color:"primary",bg:"highlight"}}}))})),{appearance:"none",width:16,height:16,bg:"currentcolor",border:0,borderRadius:9999,variant:"forms.slider.thumb"});pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"input",type:"range",variant:"slider"},e,{__themeKey:"forms",__css:{display:"block",width:"100%",height:4,my:2,cursor:"pointer",appearance:"none",borderRadius:9999,color:"inherit",bg:"gray",":focus":{outline:"none",color:"primary"},"&::-webkit-slider-thumb":Le,"&::-moz-range-thumb":Le,"&::-ms-thumb":Le}}))}));pe.a.forwardRef((function(e,r){var t=e.as;void 0===t&&(t=we);var a=e.label,o=e.name,i=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["as","label","name"]);return pe.a.createElement(ue,je(i),pe.a.createElement(ve,{htmlFor:o},a),pe.a.createElement(t,Object.assign({},{ref:r,id:o,name:o},Se(i))))})),pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"progress",variant:"styles.progress"},e,{__css:{display:"block",width:"100%",height:"4px",margin:0,padding:0,overflow:"hidden",appearance:"none",color:"primary",bg:"gray",borderRadius:9999,border:"none","&::-webkit-progress-bar":{bg:"transparent"},"&::-webkit-progress-value":{bg:"currentcolor"},"&::-moz-progress-bar":{bg:"currentcolor"}}}))}));pe.a.forwardRef((function(e,r){var t=e.size;void 0===t&&(t=128);var a=e.strokeWidth;void 0===a&&(a=2);var o=e.value;void 0===o&&(o=0);var i=e.min;void 0===i&&(i=0);var n=e.max;void 0===n&&(n=1);var s=e.title,c=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size","strokeWidth","value","min","max","title"]),d=16-a,l=2*d*Math.PI,p=l-(o-i)/(n-i)*l;return pe.a.createElement(ue,Object.assign({},{ref:r,as:"svg",viewBox:"0 0 32 32",width:t,height:t,strokeWidth:a,fill:"none",stroke:"currentcolor",role:"img","aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":n},c,{__css:{color:"primary"}}),s&&pe.a.createElement("title",null,s),pe.a.createElement("circle",{cx:16,cy:16,r:d,opacity:1/8}),pe.a.createElement("circle",{cx:16,cy:16,r:d,strokeDasharray:l,strokeDashoffset:p,transform:"rotate(-90 16 16)"}))}));var Te=Object(de.d)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}});pe.a.forwardRef((function(e,r){var t=e.size;void 0===t&&(t=48);var a=e.strokeWidth;void 0===a&&(a=4);var o=e.title;void 0===o&&(o="Loading...");var i=e.duration;void 0===i&&(i=500);var n=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size","strokeWidth","max","title","duration"]),s=16-a,c=2*s*Math.PI,d=c-1/4*c;return pe.a.createElement(ue,Object.assign({},{ref:r,as:"svg",viewBox:"0 0 32 32",width:t,height:t,strokeWidth:a,fill:"none",stroke:"currentcolor",role:"img"},n,{__css:{color:"primary",overflow:"visible"}}),pe.a.createElement("title",null,o),pe.a.createElement("circle",{cx:16,cy:16,r:s,opacity:1/8}),pe.a.createElement(ue,{as:"circle",cx:16,cy:16,r:s,strokeDasharray:c,strokeDashoffset:d,__css:{transformOrigin:"50% 50%",animationName:Te.toString(),animationTimingFunction:"linear",animationDuration:i+"ms",animationIterationCount:"infinite"}}))}));pe.a.forwardRef((function(e,r){var t=e.size;void 0===t&&(t=48);var a=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size"]);return pe.a.createElement(he,Object.assign({},{ref:r,width:t,height:t,variant:"avatar"},a,{__css:{borderRadius:9999}}))})),pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r},e,{__themeKey:"badges",__css:{display:"inline-block",verticalAlign:"baseline",fontSize:0,fontWeight:"bold",whiteSpace:"nowrap",px:1,borderRadius:2,color:"white",bg:"primary"}}))}));var Ie=pe.a.forwardRef((function(e,r){var t=e.size;void 0===t&&(t=32);var a=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size"]);return pe.a.createElement(ue,Object.assign({},{ref:r,as:"button",variant:"icon"},a,{__themeKey:"buttons",__css:{appearance:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",padding:1,width:t,height:t,color:"inherit",bg:"transparent",border:"none",borderRadius:4}}))}));var Ae=pe.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentcolor",viewBox:"0 0 24 24"},pe.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}));pe.a.forwardRef((function(e,r){var t=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["size"]);return pe.a.createElement(Ie,Object.assign({},{ref:r,title:"Close","aria-label":"Close",variant:"close"},t,{children:Ae}))})),pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r},e,{__themeKey:"alerts",__css:{display:"flex",alignItems:"center",px:3,py:2,fontWeight:"bold",color:"white",bg:"primary",borderRadius:4}}))})),pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,as:"hr",variant:"styles.hr"},e,{__css:{color:"gray",m:0,my:2,border:0,borderBottom:"1px solid"}}))}));pe.a.forwardRef((function(e,r){var t=e.ratio;void 0===t&&(t=16/9);var a=e.src,o=e.frameBorder;void 0===o&&(o=0);var i=e.allowFullScreen;void 0===i&&(i=!0);var n=e.width;void 0===n&&(n=560);var s=e.height;void 0===s&&(s=315);var c=e.allow,d=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["ratio","src","frameBorder","allowFullScreen","width","height","allow"]);return pe.a.createElement(ue,Object.assign({},d,{__css:{width:"100%",height:0,paddingBottom:100/t+"%",position:"relative",overflow:"hidden"}}),pe.a.createElement(ue,{ref:r,as:"iframe",src:a,width:n,height:s,frameBorder:o,allowFullScreen:i,allow:c,__css:{position:"absolute",width:"100%",height:"100%",top:0,bottom:0,left:0,border:0}}))}));var He=pe.a.forwardRef((function(e,r){var t=e.ratio;void 0===t&&(t=4/3);var a=e.children,o=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["ratio","children"]);return pe.a.createElement(ue,{ref:r,sx:{position:"relative",overflow:"hidden"}},pe.a.createElement(ue,{sx:{width:"100%",height:0,paddingBottom:100/t+"%"}}),pe.a.createElement(ue,Object.assign({},o,{__css:{position:"absolute",top:0,right:0,bottom:0,left:0}}),a))}));pe.a.forwardRef((function(e,r){var t=e.ratio,a=function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===r.indexOf(a)&&(t[a]=e[a]);return t}(e,["ratio"]);return pe.a.createElement(He,{ratio:t},pe.a.createElement(he,Object.assign({},{ref:r},a,{__css:{objectFit:"cover"}})))})),pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r,variant:"container"},e,{__themeKey:"layout",__css:{width:"100%",maxWidth:"container",mx:"auto"}}))})),pe.a.forwardRef((function(e,r){return pe.a.createElement(me,Object.assign({},{ref:r,variant:"nav"},e,{__css:{color:"inherit",textDecoration:"none",fontWeight:"bold",display:"inline-block","&:hover, &:focus, &.active":{color:"primary"}}}))})),pe.a.forwardRef((function(e,r){return pe.a.createElement(ue,Object.assign({},{ref:r},e,{__themeKey:"messages",__css:{padding:3,paddingLeft:function(e){return e.space[3]-e.space[1]},borderLeftWidth:function(e){return e.space[1]},borderLeftStyle:"solid",borderLeftColor:"primary",borderRadius:4,bg:"highlight"}}))}));var Ke=function(e){var r=e.size;return void 0===r&&(r=24),pe.a.createElement(ue,{as:"svg",xmlns:"http://www.w3.org/2000/svg",width:r,height:r,fill:"currentcolor",viewBox:"0 0 24 24",sx:{display:"block",margin:0}},pe.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))};pe.a.forwardRef((function(e,r){return pe.a.createElement(Ie,Object.assign({},{ref:r,title:"Menu","aria-label":"Toggle Menu",variant:"menu"},e),pe.a.createElement(Ke,null))}))},"p/Xm":function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var a=t("q1tI"),o=t.n(a),i=t("2A+t"),n=t("izhR");function s(e){var r=new SpeechSynthesisUtterance(e);r.rate=.5,r.lang="hi",speechSynthesis.speak(r)}var c=function(e){var r=e.onClick,t=e.tabIndex;return Object(i.c)("div",{onClick:r,onKeyDown:r,role:"button",tabIndex:t,sx:{height:"50%",width:"100% "}})},d=function(e){var r=e.hindi,t=e.english,d=e.iast,l=void 0!==d&&d,p=e.key,f=e.showDetails,u=void 0!==f&&f,g=e.width,m=Object(a.useState)(!1),b=m[0],h=m[1],y=Object(a.useState)(!1),v=y[0],w=y[1];return Object(i.c)(o.a.Fragment,null,Object(i.c)(n.b,{css:{minWidth:g},variant:"flashCard"},Object(i.c)(c,{tabIndex:p,onClick:function(){return s(r)}}),Object(i.c)(c,{tabIndex:p,onClick:function(){u?h(!b):w(!v)}}),Object(i.c)(n.c,{css:{position:"absolute"},variant:"flashCard"},r),v&&Object(i.c)(n.c,{sx:{fontSize:"smaller",color:"purple"}},t)),b&&Object(i.c)(o.a.Fragment,null,l&&Object(i.c)(n.c,{my:20},l),Object(i.c)(n.c,{mb:20,variant:"caps"},t)))};r.b=function(e){var r=e.letter,t=e.word,a=e.key;return Object(i.c)(n.b,{variant:"flashCard"},Object(i.c)(c,{tabIndex:a,onClick:function(){return s(r)}}),Object(i.c)(c,{tabIndex:a,onClick:function(){return s(t)}}),Object(i.c)(n.c,{css:{position:"absolute"},variant:"flashCard"},r))}}}]);
//# sourceMappingURL=41aa4027b29dfe066b0e41997991098ff5c7669c-22a983dbeec42885d308.js.map
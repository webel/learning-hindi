(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{O6gU:function(e){e.exports=JSON.parse('[{"english":"I\'m lost","iast":"Hum kho gaye hain.","hindi":"हम खो गये हैं ।"},{"english":"Can I help you?","iast":"Kya mein aapki madad kar sakta/ sakti (female) hoon?","hindi":"क्या मैं आपकी मदद कर सकता /सकती हुँ ।"},{"english":"Can you help me?","iast":"Kya aap meri madad kar saktey hain?","hindi":"क्या आप मेरी मदद कर सकते हैं ।"},{"english":"Where is the (bathroom/ pharmacy)?","iast":"śaucaghara/ pharmacy kahaan hai?","hindi":"शौचघर/ फार्मेसी कहां है"},{"english":"Go straight! then turn left/ right!","iast":"Seedhey jaaey! Phir bānyae/ dānyae mudiye","hindi":"सीधे जाएँ-फिर बाएँ-दाएँ मुडिए ।"},{"english":"I\'m looking for john.","iast":"Mein John ko dhoondh rahaa/ rahi (female) hoon.","hindi":"मैं जोन को ढुँढ रहा-रही हुँ ।"},{"english":"One moment please!","iast":"Ek minat…","hindi":"एक मिनट"},{"english":"Hold on please! (phone)","iast":"Ek minat…","hindi":"एक मिनट"},{"english":"How much is this?","iast":"Yeh kaisey diyaa?","hindi":"यह कैसे दिया ।"},{"english":"Excuse me ...! (to ask for something)","iast":"Kshama keejeeae…","hindi":"क्षमा कीजिए ।"},{"english":"Excuse me! ( to pass by)","iast":"Kshama keejeeae…","hindi":"क्षमा कीजिए ।"},{"english":"Come with me!","iast":"Mere saath aaeeyé!","hindi":"मेरे साथ आइए ।"}]')},"b+vx":function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var a=n("q1tI"),i=n.n(a),o=n("2A+t"),c=n("izhR");var r=function(e){var t=e.text;return Object(o.c)("div",{sx:{px:"5px",backgroundColor:"muted",boxShadow:"0 0 8px rgba(0, 0, 0, 0.125)",display:"inline-block",cursor:"pointer"},onClick:function(){return function(e){var t=new SpeechSynthesisUtterance(e);t.rate=.5,t.lang="hi",speechSynthesis.speak(t)}(t)}},t)},s=function(e){var t=e.english,n=e.iast;return Object(o.c)(i.a.Fragment,null,n&&Object(o.c)(c.c,{my:20},n),Object(o.c)(c.c,{mb:20,variant:"caps"},t))},l=function(e){var t=e.english,n=e.iast,a=e.word,s=e.soundsLike;return Object(o.c)(i.a.Fragment,null,n&&Object(o.c)(c.c,{my:20},n),(a||t)&&Object(o.c)("div",null,Object(o.c)(r,{text:a})," - ",Object(o.c)(c.c,{mb:20,variant:"caps",css:{display:"inline-block"}},t)),s&&Object(o.c)(c.c,{mb:20},s))}},mCtA:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),o=n("oR7h"),c=n("O6gU");t.default=function(){return i.a.createElement(o.a,{seoTitle:"Help & Directions",data:c,phrase:!0})}},oR7h:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var a=n("q1tI"),i=n.n(a),o=n("2A+t"),c=n("izhR");function r(e){var t=new SpeechSynthesisUtterance(e);t.rate=.5,t.lang="hi",speechSynthesis.speak(t)}var s=function(e){var t=e.onClick,n=e.tabIndex;return Object(o.c)("div",{onClick:t,onKeyDown:t,role:"button",tabIndex:n,sx:{zIndex:999,height:"50%",width:"100%","&:hover":{cursor:"pointer"}}})},l=function(e){var t=e.mainText,n=e.onTopClick,a=e.onBottomClick,i=e.smallText,r=e.showSmallText,l=e.variantTheme,h=void 0===l?"flashCard":l;return Object(o.c)(c.b,{variant:h},Object(o.c)(s,{tabIndex:"top-"+t,onClick:n}),Object(o.c)(s,{tabIndex:"bottom-"+t,onClick:a}),Object(o.c)(c.c,{variant:h},t),r&&Object(o.c)(c.c,{onClick:a,sx:{fontSize:"smaller",color:"purple",textAlign:"center",backgroundColor:"moreMuted",zIndex:999,cursor:"pointer"}},i))},h=function(e){var t=e.item,n=e.onTopClick,c=void 0!==n&&n,s=e.onBottomClick,h=void 0!==s&&s,u=e.showDetails,d=void 0!==u&&u,m=e.smallText,b=void 0!==m&&m,f=e.phrase,k=e.render,p=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["item","onTopClick","onBottomClick","showDetails","smallText","phrase","render"]),O=Object(a.useState)(!1),g=O[0],j=O[1],v=Object(a.useState)(!1),x=v[0],y=v[1],C=f?"phraseFlashCard":"flashCard",w={mainText:t.hindi,onTopClick:c||function(){return r(t.hindi)},onBottomClick:function(){p.single?j(!g):(y(!x),h&&h(t))},showSmallText:x,smallText:b?b(t):t.english,variantTheme:C};return d?Object(o.c)(i.a.Fragment,null,Object(o.c)(l,w),k&&k(),g&&d(Object.assign({},t))):Object(o.c)(l,w)},u=n("b+vx"),d=n("Bl7J"),m=n("vrFN");function b(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}function f(e){return Math.floor(Math.random()*e)}var k=function(e){var t=e.data,n=b(e,["data"]),i=Object(a.useState)(!1);i[0],i[1];return t.map((function(e){return Object(o.c)(h,Object.assign({key:e.hindi+"-"+Math.random(),item:e},n))}))},p=function(e){var t=e.data,n=e.onBottomClick,r=e.showDetails,s=b(e,["data","onBottomClick","showDetails"]),l=f(s.maxIndex||t.length),d=Object(a.useState)(t[l]),m=d[0],k=d[1],p=Object(a.useState)(!1),O=p[0],g=p[1],j=function(){var e=f(t.length);k(t[e])};return Object(o.c)(i.a.Fragment,null,Object(o.c)(h,Object.assign({showDetails:r||u.a,item:m,onBottomClick:function(e){n&&n(e),g(!O)}},s,{render:function(){return Object(o.c)(c.a,{sx:{fontSize:"small"},onClick:j},"Next")},single:!0})))};t.a=function(e){var t=e.seoTitle,n=b(e,["seoTitle"]),i=Object(a.useState)(!1),c=i[0],r=i[1];return Object(o.c)(d.a,{doubleClick:function(){r(!c)},flexDirection:c?"column":"row"},Object(o.c)(m.a,{title:t||"Learn"}),c?Object(o.c)(p,n):Object(o.c)(k,n))}}}]);
//# sourceMappingURL=component---src-pages-help-directions-js-2213337a501e4c9aac3b.js.map
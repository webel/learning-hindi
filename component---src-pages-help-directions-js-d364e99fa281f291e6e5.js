(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{O6gU:function(e){e.exports=JSON.parse('[{"english":"I\'m lost","iast":"Hum kho gaye hain.","hindi":"हम खो गये हैं ।"},{"english":"Can I help you?","iast":"Kya mein aapki madad kar sakta/ sakti (female) hoon?","hindi":"क्या मैं आपकी मदद कर सकता /सकती हुँ ।"},{"english":"Can you help me?","iast":"Kya aap meri madad kar saktey hain?","hindi":"क्या आप मेरी मदद कर सकते हैं ।"},{"english":"Where is the (bathroom/ pharmacy)?","iast":"śaucaghara/ pharmacy kahaan hai?","hindi":"शौचघर/ फार्मेसी कहां है"},{"english":"Go straight! then turn left/ right!","iast":"Seedhey jaaey! Phir bānyae/ dānyae mudiye","hindi":"सीधे जाएँ-फिर बाएँ-दाएँ मुडिए ।"},{"english":"I\'m looking for john.","iast":"Mein John ko dhoondh rahaa/ rahi (female) hoon.","hindi":"मैं जोन को ढुँढ रहा-रही हुँ ।"},{"english":"One moment please!","iast":"Ek minat…","hindi":"एक मिनट"},{"english":"Hold on please! (phone)","iast":"Ek minat…","hindi":"एक मिनट"},{"english":"How much is this?","iast":"Yeh kaisey diyaa?","hindi":"यह कैसे दिया ।"},{"english":"Excuse me ...! (to ask for something)","iast":"Kshama keejeeae…","hindi":"क्षमा कीजिए ।"},{"english":"Excuse me! ( to pass by)","iast":"Kshama keejeeae…","hindi":"क्षमा कीजिए ।"},{"english":"Come with me!","iast":"Mere saath aaeeyé!","hindi":"मेरे साथ आइए ।"}]')},mCtA:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),i=t.n(n),c=t("oR7h"),s=t("O6gU");a.default=function(){return i.a.createElement(c.a,{seoTitle:"Help & Directions",data:s,maxIndex:s.length,phrase:!0})}},oR7h:function(e,a,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("91GP");var n=t("q1tI"),i=t("2A+t"),c=t("izhR"),s=t("p/Xm"),r=t("Bl7J"),o=t("vrFN");function h(e){return Math.floor(Math.random()*e)}a.a=function(e){var a=e.data,t=e.maxIndex,l=function(e,a){if(null==e)return{};var t,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["data","maxIndex"]),u=h(t),d=Object(n.useState)(a[u]),b=d[0],m=d[1];return Object(i.c)(r.a,{doubleClick:l.doubleClick,flexDirection:"column"},Object(i.c)(o.a,{title:l.seoTitle||"Learn"}),Object(i.c)(s.a,Object.assign({},b,{showDetails:!0},l)),Object(i.c)(c.a,{sx:{fontSize:"small"},onClick:function(){var e=h(a.length);m(a[e])}},"Next"))}},"p/Xm":function(e,a,t){"use strict";t.d(a,"a",(function(){return h}));var n=t("q1tI"),i=t.n(n),c=t("2A+t"),s=t("izhR");function r(e){var a=new SpeechSynthesisUtterance(e);a.rate=.5,a.lang="hi",speechSynthesis.speak(a)}var o=function(e){var a=e.onClick,t=e.tabIndex;return Object(c.c)("div",{onClick:a,onKeyDown:a,role:"button",tabIndex:t,sx:{zIndex:999,height:"50%",width:"100%","&:hover":{cursor:"pointer"}}})},h=function(e){var a=e.hindi,t=e.english,h=e.iast,l=void 0!==h&&h,u=e.key,d=e.showDetails,b=void 0!==d&&d,m=e.phrase,f=Object(n.useState)(!1),k=f[0],p=f[1],g=Object(n.useState)(!1),O=g[0],j=g[1],y=m?"phraseFlashCard":"flashCard";return Object(c.c)(i.a.Fragment,null,Object(c.c)(s.b,{variant:y},Object(c.c)(o,{tabIndex:u,onClick:function(){return r(a)}}),Object(c.c)(o,{tabIndex:u,onClick:function(){b?p(!k):j(!O)}}),Object(c.c)(s.c,{variant:y},a),O&&Object(c.c)(s.c,{sx:{fontSize:"smaller",color:"purple"}},t)),k&&Object(c.c)(i.a.Fragment,null,l&&Object(c.c)(s.c,{my:20},l),Object(c.c)(s.c,{mb:20,variant:"caps"},t)))};a.b=function(e){var a=e.letter,t=e.word,n=e.key;return Object(c.c)(s.b,{variant:"flashCard"},Object(c.c)(o,{tabIndex:n,onClick:function(){return r(a)}}),Object(c.c)(o,{tabIndex:n,onClick:function(){return r(t)}}),Object(c.c)(s.c,{css:{position:"absolute"},variant:"flashCard"},a))}}}]);
//# sourceMappingURL=component---src-pages-help-directions-js-d364e99fa281f291e6e5.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"923b":function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),a=n.n(i),o=n("oR7h"),r=n("pKnI");e.default=function(){return a.a.createElement(o.a,{data:r,seoTitle:"Greetings",phrase:!0})}},"b+vx":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return h}));var i=n("q1tI"),a=n.n(i),o=n("2A+t"),r=n("izhR");var c=function(t){var e=t.text;return Object(o.c)("div",{sx:{px:"5px",backgroundColor:"muted",boxShadow:"0 0 8px rgba(0, 0, 0, 0.125)",display:"inline-block",cursor:"pointer",fontSize:["4vw","3vw","2vw"]},onClick:function(){return function(t){var e=new SpeechSynthesisUtterance(t);e.rate=.5,e.lang="hi",speechSynthesis.speak(e)}(e)}},e)},s=function(t){var e=t.english,n=t.iast;return Object(o.c)(a.a.Fragment,null,n&&Object(o.c)(r.e,{my:20},n),Object(o.c)(r.e,{mb:20,variant:"caps"},e))},h=function(t){var e=t.english,n=t.iast,i=t.word,s=t.soundsLike;return Object(o.c)(a.a.Fragment,null,n&&Object(o.c)(r.e,{my:20},n),(i||e)&&Object(o.c)("div",null,Object(o.c)(c,{text:i})," - ",Object(o.c)(r.e,{mb:20,variant:"caps",css:{display:"inline-block"}},e)),s&&Object(o.c)(r.e,{mb:20},s))}},oR7h:function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var i=n("q1tI"),a=n.n(i),o=n("2A+t"),r=n("izhR"),c=n("p/Xm"),s=n("b+vx"),h=n("Bl7J"),l=n("vrFN");function u(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}function d(t){return Math.floor(Math.random()*t)}var b=function(t){var e=t.data,n=u(t,["data"]),a=Object(i.useState)(!1);a[0],a[1];return e.map((function(t){return Object(o.c)(c.a,Object.assign({key:t.hindi+"-"+Math.random(),item:t},n))}))},m=function(t){var e=t.data,n=t.onBottomClick,h=t.showDetails,l=u(t,["data","onBottomClick","showDetails"]),b=d(l.maxIndex||e.length),m=Object(i.useState)(e[b]),v=m[0],f=m[1],g=Object(i.useState)(!1),p=g[0],O=g[1],k=function(){var t=d(e.length);f(e[t])};return Object(o.c)(a.a.Fragment,null,Object(o.c)(c.a,Object.assign({showDetails:h||s.a,item:v,onBottomClick:function(t){n&&n(t),O(!p)}},l,{render:function(){return Object(o.c)(r.a,{sx:{fontSize:"small"},onClick:k},"Next")},single:!0})))};e.a=function(t){var e=t.seoTitle,n=u(t,["seoTitle"]),a=Object(i.useState)(!1),r=a[0],c=a[1];return Object(o.c)(h.a,{doubleClick:function(){c(!r)},flexDirection:r?"column":"row"},Object(o.c)(l.a,{title:e||"Learn"}),r?Object(o.c)(m,n):Object(o.c)(b,n))}},"p/Xm":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var i=n("q1tI"),a=n.n(i),o=n("2A+t"),r=n("izhR");function c(t){var e=new SpeechSynthesisUtterance(t);e.rate=.5,e.lang="hi",speechSynthesis.speak(e)}var s=function(t){var e=t.onClick,n=t.tabIndex;return Object(o.c)("div",{onClick:e,onKeyDown:e,role:"button",tabIndex:n,sx:{zIndex:50,height:"50%",width:"100%","&:hover":{cursor:"pointer"}}})},h=function(t){var e=t.mainText,n=t.onTopClick,i=t.onBottomClick,a=t.smallText,c=t.showSmallText,h=t.variantTheme,l=void 0===h?"flashCard":h;return Object(o.c)(r.b,{variant:l},Object(o.c)(s,{tabIndex:"top-"+e,onClick:n}),Object(o.c)(s,{tabIndex:"bottom-"+e,onClick:i}),Object(o.c)(r.e,{variant:l},e),c&&Object(o.c)(r.e,{onClick:i,sx:{fontSize:"smaller",color:"purple",textAlign:"center",backgroundColor:"moreMuted",zIndex:999,cursor:"pointer"}},a))},l=function(t){var e=t.item,n=t.onTopClick,r=void 0!==n&&n,s=t.onBottomClick,l=void 0!==s&&s,u=t.showDetails,d=void 0!==u&&u,b=t.smallText,m=void 0!==b&&b,v=t.phrase,f=t.flashcardStyle,g=t.render,p=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["item","onTopClick","onBottomClick","showDetails","smallText","phrase","flashcardStyle","render"]),O=Object(i.useState)(!1),k=O[0],j=O[1],y=Object(i.useState)(!1),x=y[0],S=y[1],w=v?"phraseFlashCard":"flashCard";f&&(w=f);var C={mainText:e.hindi,onTopClick:r||function(){return c(e.hindi)},onBottomClick:function(){p.single?j(!k):(S(!x),l&&l(e))},showSmallText:x,smallText:m?m(e):e.english,variantTheme:w};return d?Object(o.c)(a.a.Fragment,null,Object(o.c)(h,C),g&&g(),k&&d(Object.assign({},e))):Object(o.c)(h,C)}},pKnI:function(t){t.exports=JSON.parse('[{"english":"Hi!","iast":"Namastey!","hindi":"नमस्ते"},{"english":"Good morning!","iast":"Suprabhaat","hindi":"सुप्रभात"},{"english":"Good evening!","iast":"Shubh sundhyaa.","hindi":"शुभ संध्या"},{"english":"Welcome! (to greet someone)","iast":"Aapka swaagat hai!","hindi":"आपका स्वागत हैं।"},{"english":"How are you?","iast":"Aap kaisey hain?","hindi":"आप कैसे हैं ?"},{"english":"I\'m fine, thanks!","iast":"Mein theek hoon, shukriya!","hindi":"मैं ठीक हुँ ।"},{"english":"And you?","iast":"Aur aap?","hindi":"और आप?"},{"english":"Good/ So-So.","iast":"Accha/ Theek-thaak","hindi":"अच्छा/ ठीक-ठाक"},{"english":"Thank you (very much)!","iast":"Shukriyaa (Bahut dhanyavaad)","hindi":"शुक्रीया (बहुत धन्यवाद)"},{"english":"Hey! Friend!","iast":"Arrey, Dost!.","hindi":"अरे, दोस्त"},{"english":"I missed you so much!","iast":"Mujhey aapkee bahut yaad aaee.?","hindi":"मुझे आपकी बहुत याद आयी।"},{"english":"What\'s new?","iast":"Kyaa chal rahaa hai?;","hindi":"क्या चल रहा हैं?"},{"english":"Nothing much","iast":"Zyaada kuch nahi","hindi":"ज्यादा कुछ नहीं ।"},{"english":"Good night!","iast":"Shubh raatri.","hindi":"शुभ रात्री।"},{"english":"See you later!","iast":"Phir milen-gay.!","hindi":"अलविदा।"},{"english":"Good bye!","iast":"Alvida!","hindi":"अलविदा।"}]')}}]);
//# sourceMappingURL=component---src-pages-greetings-js-da93481a227efb767aa5.js.map
(this.webpackJsonpquestionnaire=this.webpackJsonpquestionnaire||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/HowGayAreYou.3180e4ef.png"},104:function(e,t,a){e.exports=a.p+"static/media/HowGayAreYouBack.5eaaf587.png"},105:function(e,t,a){e.exports=a.p+"static/media/Gaetan Duga.2b9d9daf.png"},106:function(e,t,a){e.exports=a.p+"static/media/nolan diagram.4230f304.png"},182:function(e,t,a){e.exports=a(282)},270:function(e,t,a){},271:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);a(183),a(209),a(211),a(212),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251);var n=a(0),i=a.n(n),c=a(99),o=a.n(c),u=a(27),r=a.n(u),s=a(107),l=a(68),m=a.n(l),g=a(100),f=a(33),d=a(52),E=a.n(d),_=a(102),p=a.n(_),b=(a(260),a(11)),Q=(a(270),a(283)),h=a(284),I=function(e){var t=e.id,a=e.quizze,n=e.goLeftQuiz,c=e.goRightQuiz,o=e.hasRightQuiz,u=e.hasLeftQuiz,r=e.goToViewQuestions;console.log(a);var s={width:36,height:36,fill:"white"},l={backgroundImage:"url('".concat(a.imgBackground,"')")};return i.a.createElement(b.d,{id:t,separator:!1},i.a.createElement(b.g,{left:i.a.createElement("h1",{className:"Quiz__title"},a.title),separator:!1,visor:!1,transparent:!0}),i.a.createElement(b.b,{className:"Quiz"},i.a.createElement(b.b,{className:"Quiz__background-img",style:l}),i.a.createElement(b.b,{className:"Quiz__content"},i.a.createElement("div",{className:"Quiz__carousel"},i.a.createElement("button",{onClick:n,className:"Quiz__carousel-button ".concat(u?"":"Quiz__carousel-button_invisible")},i.a.createElement(Q.a,s)),i.a.createElement("img",{className:"Quiz__carousel-img",src:a.img,alt:t}),i.a.createElement("button",{onClick:c,className:"Quiz__carousel-button ".concat(o?"":"Quiz__carousel-button_invisible")},i.a.createElement(h.a,s))),i.a.createElement(b.a,{onClick:r,className:"Quiz__button-take-survey",mode:"overlay_secondary"},"\u041f\u0440\u043e\u0439\u0442\u0438 \u043e\u043f\u0440\u043e\u0441"))))},z=a(285),v=a(286),k=(a(271),Object(b.i)()),x=function(e){var t=e.id,a=e.question,n=e.numberCurrentQuestion,c=e.countQuestions,o=e.goToPrevQuestion,u=e.goToNextQuestion,r=e.backgroundImage,s={backgroundImage:"url('".concat(r,"')")};return i.a.createElement(b.d,{id:t,separator:!1},i.a.createElement(b.e,{left:i.a.createElement(i.a.Fragment,null,i.a.createElement(b.f,{onClick:o},k===b.c?i.a.createElement(z.a,{fill:"white"}):i.a.createElement(v.a,{fill:"white"})),i.a.createElement("div",{className:"Question__number-question"},n,"/",c)),separator:!1,visor:!1,transparent:!0}),i.a.createElement(b.b,{className:"Question",style:s},i.a.createElement(b.b,{className:"Question__content"},i.a.createElement("img",{className:"Question__image",src:a.questionImg,alt:"image_".concat(t)}),i.a.createElement("p",{className:"Question__question-text"},a.questionText),i.a.createElement("div",{className:"Question__answer-options"},a.answerOptions.map((function(e,t){return i.a.createElement(b.a,{key:t,mode:"overlay_secondary",className:"Question__answer",onClick:function(){return u(t)}},e.text)}))))))},N=function(e){var t=e.quizzes,a=Object(n.useState)(null),c=Object(f.a)(a,2),o=(c[0],c[1]),u=Object(n.useState)(i.a.createElement(p.a,{size:"large"})),l=Object(f.a)(u,2),d=l[0],_=l[1];Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,o(t),_(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var i=document.createAttribute("scheme");i.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(i)}})),function(){e.apply(this,arguments)}()}),[]);var Q=Object(n.useState)("VIEW_ID_QUIZES"),h=Object(f.a)(Q,2),z=h[0],v=h[1],k=function(e){return"quiz_".concat(e)},N=Object(n.useState)(k(0)),O=Object(f.a)(N,2),q=O[0],j=O[1],w=function(e){return function(){j(k(e+1))}},S=Object(n.useState)(0),y=Object(f.a)(S,2),T=y[0],V=y[1],U=function(e){return"question_".concat(e)},L=Object(n.useState)(U(0)),W=Object(f.a)(L,2),A=W[0],C=W[1],D=Object(n.useState)([]),P=Object(f.a)(D,2),R=P[0],B=P[1],G=function(e){return function(){B(R.slice(0,R.length-1)),e<=0?v("VIEW_ID_QUIZES"):C(U(e-1))}},K=function(e,t){return function(a){!function(e){B([].concat(Object(s.a)(R),[e]))}(a),e+1<t?C(U(e+1)):v("VIEW_ID_RESULT")}},Z=function(e){return function(){v("VIEW_ID_QUESTIONES"),V(e),C(U(0))}};return i.a.createElement(b.h,{activeView:z},i.a.createElement(E.a,{activePanel:q,popout:d,header:!1,id:"VIEW_ID_QUIZES"},t.map((function(e,a){return i.a.createElement(I,{id:k(a),key:k(a),quizze:e,goLeftQuiz:(n=a,function(){j(k(n-1))}),goRightQuiz:w(a),hasRightQuiz:a<t.length-1,hasLeftQuiz:a>0,goToViewQuestions:Z(a)});var n}))),i.a.createElement(E.a,{activePanel:A,id:"VIEW_ID_QUESTIONES"},t[T].quetions.map((function(e,a,n){return i.a.createElement(x,{id:U(a),key:U(a),question:e,numberCurrentQuestion:a+1,countQuestions:n.length,goToPrevQuestion:G(a),goToNextQuestion:K(a,n.length),backgroundImage:t[T].imgBackground})}))),i.a.createElement(E.a,{id:"VIEW_ID_RESULT",activePanel:"PANEL_RESULT"},i.a.createElement(b.d,{id:"PANEL_RESULT"},R)))},O=a(103),q=a.n(O),j=a(104),w=a.n(j),S=a(105),y=a.n(S),T=a(106),V=a.n(T),U=a(69),L=a.n(U),W=a(70),A=a.n(W),C={quizzes:[{title:"\u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u0433\u0435\u0439?",img:q.a,imgBackground:w.a,quetions:[{questionImg:y.a,questionText:"\u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0439 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u043b \u0432\u0430\u0441 \u043d\u0430 \u0430\u043d\u0438\u043c\u0435 \xab\u041f\u0435\u0440\u0432\u044b\u0439 \u043c\u0441\u0442\u0438\u0442\u0435\u043b\u044c\xbb, \u0432\u0430\u0448\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f:",answerOptions:[{text:"\u0421 \u043b\u0435\u0433\u043a\u043e\u0441\u0442\u044c\u044e \u043f\u0440\u0438\u043c\u0438\u0442\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435, \u0434\u0430\u0436\u0435 \u043d\u0435 \u043f\u043e\u0434\u0443\u043c\u0430\u0432, \u0447\u0442\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u0433\u0435\u0435\u043c"},{text:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u0434\u0435\u0436\u0434\u043e\u0439, \u0447\u0442\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u0433\u0435\u0435\u043c \u0438 \u0432\u044b \u0441\u0442\u0430\u043d\u0435\u0442\u0435 \u043f\u0430\u0440\u043e\u0439"},{text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u043a\u0430\u0436\u0438\u0442\u0435\u0441\u044c"}]},{questionImg:V.a,questionText:"\u0422\u0432\u043e\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0431\u0435\u0436\u0434\u0435\u043d\u0438\u044f?",answerOptions:[{text:"\u041b\u0435\u0432\u044b\u0435"},{text:"\u041f\u0440\u0430\u0432\u044b\u0435"},{text:"\u0422\u043e\u0442\u0430\u043b\u0438\u0442\u0430\u0440\u0438\u0437\u043c"},{text:"\u041b\u0438\u0431\u0435\u0440\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u0442\u0432\u043e"}]}]},{title:"\u041e\u043f\u0440\u043e\u04412",img:A.a,imgBackground:L.a,quetions:["21","22"]},{title:"\u041e\u043f\u0440\u043e\u04413",img:A.a,imgBackground:L.a,quetions:["31"]}]};r.a.send("VKWebAppInit"),o.a.render(i.a.createElement(N,C),document.getElementById("root")),Promise.all([a.e(3),a.e(4)]).then(a.bind(null,290)).then((function(e){e.default}))},69:function(e,t,a){e.exports=a.p+"static/media/test_back.0fc04a26.png"},70:function(e,t,a){e.exports=a.p+"static/media/test.ae700d24.png"}},[[182,1,2]]]);
//# sourceMappingURL=main.d50a7e92.chunk.js.map
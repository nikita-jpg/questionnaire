(this.webpackJsonpquestionnaire=this.webpackJsonpquestionnaire||[]).push([[0],{103:function(e,t,n){e.exports=n.p+"static/media/HowGayAreYou.2f2b6e9d.jpg"},104:function(e,t,n){e.exports=n.p+"static/media/HowGayAreYouBack.5eaaf587.png"},105:function(e,t,n){e.exports=n.p+"static/media/Gaetan Duga.2b9d9daf.png"},106:function(e,t,n){e.exports=n.p+"static/media/Gaetan Duga Back.afe9a4c6.png"},107:function(e,t,n){e.exports=n.p+"static/media/Nolan Diagram.4230f304.png"},108:function(e,t,n){e.exports=n.p+"static/media/Nolan Diagram Back.25314f75.png"},109:function(e,t,n){e.exports=n.p+"static/media/Cobain.4ed5d00e.png"},110:function(e,t,n){e.exports=n.p+"static/media/Cobain Back.fa424876.png"},111:function(e,t,n){e.exports=n.p+"static/media/Supply.c14d2a1d.png"},112:function(e,t,n){e.exports=n.p+"static/media/Supply Back.e7422728.png"},113:function(e,t,n){e.exports=n.p+"static/media/Bazooka.9611998e.png"},114:function(e,t,n){e.exports=n.p+"static/media/Bazooka Back.887ab076.png"},115:function(e,t,n){e.exports=n.p+"static/media/Steuerrad.bab2ef49.png"},116:function(e,t,n){e.exports=n.p+"static/media/Steuerrad Back.0de2066f.png"},117:function(e,t,n){e.exports=n.p+"static/media/USSR.4eb9cfe3.png"},118:function(e,t,n){e.exports=n.p+"static/media/USSR Back.a5e12be2.png"},119:function(e,t,n){e.exports=n.p+"static/media/Pringles.205d420b.png"},120:function(e,t,n){e.exports=n.p+"static/media/Pringles Back.6bf90f63.png"},196:function(e,t,n){e.exports=n(296)},284:function(e,t,n){},285:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);n(197),n(223),n(225),n(226),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265);var a=n(0),i=n.n(a),o=n(99),c=n.n(o),s=n(27),u=n.n(s),r=n(121),m=n(68),l=n.n(m),p=n(100),g=n(33),f=n(52),d=n.n(f),b=n(102),x=n.n(b),E=(n(274),n(11)),_=(n(284),n(297)),I=n(298),k=function(e){var t=e.id,n=e.quizze,a=e.goLeftQuiz,o=e.goRightQuiz,c=e.hasRightQuiz,s=e.hasLeftQuiz,u=e.goToViewQuestions;console.log(n);var r={width:36,height:36,fill:"white"},m={backgroundImage:"url('".concat(n.imgBackground,"')")};return i.a.createElement(E.d,{id:t,separator:!1},i.a.createElement(E.g,{left:i.a.createElement("h1",{className:"Quiz__title"},n.title),separator:!1,visor:!1,transparent:!0}),i.a.createElement(E.b,{className:"Quiz"},i.a.createElement(E.b,{className:"Quiz__background-img",style:m}),i.a.createElement(E.b,{className:"Quiz__content"},i.a.createElement("div",{className:"Quiz__carousel"},i.a.createElement("button",{onClick:a,className:"Quiz__carousel-button ".concat(s?"":"Quiz__carousel-button_invisible")},i.a.createElement(_.a,r)),i.a.createElement("img",{className:"Quiz__carousel-img",src:n.img,alt:t}),i.a.createElement("button",{onClick:o,className:"Quiz__carousel-button ".concat(c?"":"Quiz__carousel-button_invisible")},i.a.createElement(I.a,r))),i.a.createElement(E.a,{onClick:u,className:"Quiz__button-take-survey",mode:"overlay_secondary"},"\u041f\u0440\u043e\u0439\u0442\u0438 \u043e\u043f\u0440\u043e\u0441"))))},q=n(299),Q=n(300),h=(n(285),Object(E.i)()),z=function(e){var t=e.id,n=e.question,a=e.numberCurrentQuestion,o=e.countQuestions,c=e.goToPrevQuestion,s=e.goToNextQuestion,u=(e.backgroundImage,{backgroundImage:"url('".concat(n.questionImgBack,"')")});return i.a.createElement(E.d,{id:t,separator:!1},i.a.createElement(E.e,{left:i.a.createElement(i.a.Fragment,null,i.a.createElement(E.f,{onClick:c},h===E.c?i.a.createElement(q.a,{fill:"white"}):i.a.createElement(Q.a,{fill:"white"})),i.a.createElement("div",{className:"Question__number-question"},a,"/",o)),separator:!1,visor:!1,transparent:!0}),i.a.createElement(E.b,{className:"Question",style:u},i.a.createElement(E.b,{className:"Question__content"},i.a.createElement("img",{className:"Question__image",src:n.questionImg,alt:"image_".concat(t)}),i.a.createElement("p",{className:"Question__question-text"},n.questionText),i.a.createElement("div",{className:"Question__answer-options"},n.answerOptions.map((function(e,t){return i.a.createElement(E.a,{key:t,mode:"overlay_secondary",className:"Question__answer",onClick:function(){return s(t)}},e.text)}))))))},O=function(e){var t=e.quizzes,n=Object(a.useState)(null),o=Object(g.a)(n,2),c=(o[0],o[1]),s=Object(a.useState)(i.a.createElement(x.a,{size:"large"})),m=Object(g.a)(s,2),f=m[0],b=m[1];Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,c(t),b(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var i=document.createAttribute("scheme");i.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(i)}})),function(){e.apply(this,arguments)}()}),[]);var _=Object(a.useState)("VIEW_ID_QUIZES"),I=Object(g.a)(_,2),q=I[0],Q=I[1],h=function(e){return"quiz_".concat(e)},O=Object(a.useState)(h(0)),v=Object(g.a)(O,2),B=v[0],S=v[1],N=function(e){return function(){S(h(e+1))}},w=Object(a.useState)(0),T=Object(g.a)(w,2),j=T[0],y=T[1],V=function(e){return"question_".concat(e)},D=Object(a.useState)(V(0)),U=Object(g.a)(D,2),L=U[0],C=U[1],P=Object(a.useState)([]),R=Object(g.a)(P,2),W=R[0],A=R[1],G=function(e){return function(){A(W.slice(0,W.length-1)),e<=0?Q("VIEW_ID_QUIZES"):C(V(e-1))}},H=function(e,t){return function(n){!function(e){A([].concat(Object(r.a)(W),[e]))}(n),e+1<t?C(V(e+1)):Q("VIEW_ID_RESULT")}},K=function(e){return function(){Q("VIEW_ID_QUESTIONES"),y(e),C(V(0))}};return i.a.createElement(E.h,{activeView:q},i.a.createElement(d.a,{activePanel:B,popout:f,header:!1,id:"VIEW_ID_QUIZES"},t.map((function(e,n){return i.a.createElement(k,{id:h(n),key:h(n),quizze:e,goLeftQuiz:(a=n,function(){S(h(a-1))}),goRightQuiz:N(n),hasRightQuiz:n<t.length-1,hasLeftQuiz:n>0,goToViewQuestions:K(n)});var a}))),i.a.createElement(d.a,{activePanel:L,id:"VIEW_ID_QUESTIONES"},t[j].quetions.map((function(e,n,a){return i.a.createElement(z,{id:V(n),key:V(n),question:e,numberCurrentQuestion:n+1,countQuestions:a.length,goToPrevQuestion:G(n),goToNextQuestion:H(n,a.length),backgroundImage:t[j].imgBackground})}))),i.a.createElement(d.a,{id:"VIEW_ID_RESULT",activePanel:"PANEL_RESULT"},i.a.createElement(E.d,{id:"PANEL_RESULT"},W)))},v=n(103),B=n.n(v),S=n(104),N=n.n(S),w=n(105),T=n.n(w),j=n(106),y=n.n(j),V=n(107),D=n.n(V),U=n(108),L=n.n(U),C=n(109),P=n.n(C),R=n(110),W=n.n(R),A=n(111),G=n.n(A),H=n(112),K=n.n(H),Z=n(113),J=n.n(Z),Y=n(114),F=n.n(Y),M=n(115),X=n.n(M),$=n(116),ee=n.n($),te=n(117),ne=n.n(te),ae=n(118),ie=n.n(ae),oe=n(119),ce=n.n(oe),se=n(120),ue=n.n(se),re=n(69),me=n.n(re),le=n(70),pe=n.n(le),ge={quizzes:[{title:"\u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u0433\u0435\u0439?",img:B.a,imgBackground:N.a,quetions:[{questionImgBack:y.a,questionImg:T.a,questionText:"\u0417\u043d\u0430\u043a\u043e\u043c\u044b\u0439 \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u043b \u0432\u0430\u0441 \u043d\u0430 \u0430\u043d\u0438\u043c\u0435 \xab\u041f\u0435\u0440\u0432\u044b\u0439 \u043c\u0441\u0442\u0438\u0442\u0435\u043b\u044c\xbb, \u0432\u0430\u0448\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f:",answerOptions:[{text:"\u0421 \u043b\u0435\u0433\u043a\u043e\u0441\u0442\u044c\u044e \u043f\u0440\u0438\u043c\u0438\u0442\u0435 \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435, \u0434\u0430\u0436\u0435 \u043d\u0435 \u043f\u043e\u0434\u0443\u043c\u0430\u0432, \u0447\u0442\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u0433\u0435\u0435\u043c"},{text:"\u0421\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u0434\u0435\u0436\u0434\u043e\u0439, \u0447\u0442\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u043e\u043a\u0430\u0437\u0430\u0442\u044c\u0441\u044f \u0433\u0435\u0435\u043c \u0438 \u0432\u044b \u0441\u0442\u0430\u043d\u0435\u0442\u0435 \u043f\u0430\u0440\u043e\u0439"},{text:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u043a\u0430\u0436\u0438\u0442\u0435\u0441\u044c"}]},{questionImgBack:L.a,questionImg:D.a,questionText:"\u0422\u0432\u043e\u0438 \u043f\u043e\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0431\u0435\u0436\u0434\u0435\u043d\u0438\u044f?",answerOptions:[{text:"\u041b\u0435\u0432\u044b\u0435"},{text:"\u041f\u0440\u0430\u0432\u044b\u0435"},{text:"\u0422\u043e\u0442\u0430\u043b\u0438\u0442\u0430\u0440\u0438\u0437\u043c"},{text:"\u041b\u0438\u0431\u0435\u0440\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u0442\u0432\u043e"}]},{questionImgBack:W.a,questionImg:P.a,questionText:"\u041a\u0430\u043a \u0432\u044b \u0441\u0435\u0431\u044f \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u0432 \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435 \u043e\u0434\u043d\u0438\u0445 \u043c\u0443\u0436\u0447\u0438\u043d:",answerOptions:[{text:"\u041b\u0435\u0433\u043a\u043e \u0438 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e"},{text:"\u0418\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u0435\u0442\u0435 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043d\u0435\u043b\u043e\u0432\u043a\u043e\u0441\u0442\u044c \u0438 \u043d\u0430\u043f\u0440\u044f\u0436\u0435\u043d\u0438\u044f"},{text:"\u0438\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u0435\u0442\u0435 \u0443\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435 (\u0434\u0430\u0436\u0435 \u043e\u0442 \u043e\u0434\u043d\u043e\u0439 \u043c\u044b\u0441\u043b\u0438, \u0447\u0442\u043e \u0440\u044f\u0434\u043e\u043c \u043e\u0434\u043d\u0438 \u043c\u0443\u0436\u0447\u0438\u043d\u044b)"}]},{questionImgBack:K.a,questionImg:G.a,questionText:"\u0427\u0430\u0441\u0442\u043e \u043b\u0438 \u0432\u044b \u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438 \u0448\u0443\u0442\u0438\u0442\u0435 \u043f\u0440\u043e \u043c\u0430\u0441\u0442\u0440\u0443\u0431\u0430\u0446\u0438\u044e \u0438 \u043f\u0438\u0441\u044c\u043a\u0438?",answerOptions:[{text:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e. \u0412\u0435\u0441\u0435\u043b\u043e \u0436\u0435"},{text:"\u041c\u044b \u043f\u0440\u043e \u044d\u0442\u043e \u043d\u0435 \u0448\u0443\u0442\u0438\u043c, \u043c\u044b \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u043b\u044e\u0434\u0438"},{text:"\u0420\u0435\u0434\u043a\u043e"}]},{questionImgBack:F.a,questionImg:J.a,questionText:"\u0425\u043e\u0434\u0438\u0442\u0435 \u043b\u0438 \u0432\u044b \u0432 \u043a\u0430\u0447\u0430\u043b\u043a\u0443?",answerOptions:[{text:"\u0414\u0435\u043b\u0430\u044e \u0442\u0430\u043c \u043a\u0430\u0440\u0434\u0438o \u0438 o\u0441\u0442\u0430\u043b\u044c\u043do\u0435 \u0431\u0435\u0437 \u0444\u0430\u043d\u0430\u0442\u0438\u0437\u043c\u0430"},{text:"\u041d\u0435\u0442, \u043d\u0435 \u0445\u043e\u0436\u0443"},{text:"\u041d\u0430\u0441\u0442o\u044f\u0449\u0438\u0439 \u043c\u0443\u0436\u0438\u043a \u0434o\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043d\u0430\u043a\u0430\u0447\u0435\u043d\u044b\u043c \u0438 \u0441\u0438\u043b\u044c\u043d\u044b\u043c \u043a\u0430\u043a Van Darkholme \u043d\u0430 \u0444\u043e\u043d\u0435."}]},{questionImgBack:ee.a,questionImg:X.a,questionText:"\u0427\u0442\u043e \u0432\u044b \u0437\u043d\u0430\u0435\u0442\u0435 \u043f\u0440\u043e \u0413\u043e\u043b\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0448\u0442\u0443\u0440\u0432\u0430\u043b?",answerOptions:[{text:"\u0417\u043d\u0430\u044e"},{text:"H\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u044e, \u043d\u043e \u0437\u0430\u0433\u0443\u0433\u043b\u044e"},{text:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u044e \u0438 \u0433\u0443\u0433\u043b\u0438\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0443 (\u041f\u0440\u0430\u0432\u0434\u0430 \u043d\u0435 \u0431\u0443\u0434\u0443!)"}]},{questionImgBack:ie.a,questionImg:ne.a,questionText:"\u0412 \u0434\u0435\u0442\u0441\u0442\u0432\u0435 \u0432\u044b \u0445\u043e\u0434\u0438\u043b\u0438 \u0441 \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u0430\u043c\u0438, \u0432\u0437\u044f\u0432\u0448\u0438\u0441\u044c \u0437\u0430 \u0440\u0443\u043a\u0438?",answerOptions:[{text:"\u0414\u0430"},{text:"\u041d\u0435\u0442"}]},{questionImgBack:ue.a,questionImg:ce.a,questionText:"\u0412\u0430\u043c \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0442\u0432\u043e\u0440\u0447\u0435\u0441\u0442\u0432\u043e LOBODA-\u044b?",answerOptions:[{text:"\u0414\u0430"},{text:"\u041d\u0435\u0442"}]}]},{title:"\u041e\u043f\u0440\u043e\u04412",img:pe.a,imgBackground:me.a,quetions:["21","22"]},{title:"\u041e\u043f\u0440\u043e\u04413",img:pe.a,imgBackground:me.a,quetions:["31"]}]};u.a.send("VKWebAppInit"),c.a.render(i.a.createElement(O,ge),document.getElementById("root")),Promise.all([n.e(3),n.e(4)]).then(n.bind(null,304)).then((function(e){e.default}))},69:function(e,t,n){e.exports=n.p+"static/media/test_back.0fc04a26.png"},70:function(e,t,n){e.exports=n.p+"static/media/test.ae700d24.png"}},[[196,1,2]]]);
//# sourceMappingURL=main.176a5378.chunk.js.map
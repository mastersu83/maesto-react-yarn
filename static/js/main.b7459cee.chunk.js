(this["webpackJsonpmaesto-react-yarn"]=this["webpackJsonpmaesto-react-yarn"]||[]).push([[0],{196:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(37),i=c.n(a),o=(c(87),c(88),c(0)),p=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"footer__content",children:Object(o.jsx)("div",{className:"footer__copy",children:"\xa9 2020 Mesto Russia"})})})})},l=c(21),r=c.p+"static/media/Avatar.727b5baa.png",d=c.p+"static/media/edit-btn.a1892ea7.svg",j=c.p+"static/media/add-btn.54b14265.svg",m=c(7),u=c.p+"static/media/close-icon.a004a2d5.svg",b=c(198),O=c(197),_=function(e){var t=e.openAddPopup,c=e.addPopup,s=Object(m.c)();return Object(o.jsxs)("div",{className:"popup ".concat(c?"open":""),children:[Object(o.jsx)("div",{className:"popup__body",children:Object(o.jsxs)("div",{className:"popup__content",children:[Object(o.jsx)("img",{onClick:t,src:u,alt:"",className:"popup__close-img"}),Object(o.jsx)("div",{className:"popup__inner",children:Object(o.jsxs)("div",{className:"popup__formAdd",children:[Object(o.jsx)("div",{className:"popup__title",children:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"}),Object(o.jsx)(x,{onSubmit:function(e){var c,n;s((c=e.newPlace,n=e.newLink,{type:"NEW_PLACES_DATA",name:c,link:n})),t()}})]})})]})}),Object(o.jsx)("div",{onClick:t,className:"overlay"})]})},x=Object(O.a)({form:"addPlacesForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(b.a,{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"newPlace",component:"input",className:"popup__input"}),Object(o.jsx)(b.a,{placeholder:"\u0421\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u0440\u043a\u0443",name:"newLink",component:"input",className:"popup__input"})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"popup__submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})})),h=function(e){var t=e.openEditPopup,c=e.editPopup,s=Object(m.c)();return Object(o.jsxs)("div",{className:"popup ".concat(c?"open":""),children:[Object(o.jsx)("div",{className:"popup__body",children:Object(o.jsxs)("div",{className:"popup__content",children:[Object(o.jsx)("img",{onClick:t,className:"popup__close-img",src:u,alt:""}),Object(o.jsx)("div",{className:"popup__inner",children:Object(o.jsxs)("div",{className:"popup__formEdit",children:[Object(o.jsx)("div",{className:"popup__title",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),Object(o.jsx)(v,{onSubmit:function(e){var c,n;s((c=e.newName,n=e.newPost,{type:"NEW_PROFILE_DATA",name:c,post:n})),t()}})]})})]})}),Object(o.jsx)("div",{onClick:t,className:"overlay"})]})},v=Object(O.a)({form:"editProfileDataForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(b.a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f",name:"newName",component:"input",className:"popup__input"}),Object(o.jsx)(b.a,{placeholder:"\u0420\u0430\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",name:"newPost",component:"input",className:"popup__input"})]}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"popup__submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})})),f=function(e){return e.profile.name},N=function(e){return e.profile.post},g=function(){var e=n.a.useState(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],a=n.a.useState(!1),i=Object(l.a)(a,2),p=i[0],u=i[1],b=function(){s(!c)},O=function(){u(!p)},x=Object(m.d)(f),v=Object(m.d)(N);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"profile",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"profile__header",children:[Object(o.jsx)("img",{className:"profile__avatar",src:r,alt:"avatar"}),Object(o.jsxs)("div",{className:"profile__info",children:[Object(o.jsxs)("div",{className:"profile__data",children:[Object(o.jsx)("h2",{id:"name",className:"profile__name",children:x}),Object(o.jsx)("span",{id:"post",className:"profile__post",children:v})]}),Object(o.jsx)("div",{className:"profile__edit-link",children:Object(o.jsx)("button",{className:"popup-linkEdit popup-link",children:Object(o.jsx)("img",{onClick:b,className:"profile__edit-button",src:d,alt:""})})})]}),Object(o.jsx)("div",{className:"profile__add",children:Object(o.jsx)("button",{className:"popup-linkAdd popup-link",children:Object(o.jsx)("img",{onClick:O,className:"profile__add-button",src:j,alt:""})})})]})})}),Object(o.jsx)(h,{editPopup:c,openEditPopup:b}),Object(o.jsx)(_,{addPopup:p,openAddPopup:O})]})},k=function(e){return Object(o.jsxs)("div",{className:"popup".concat(e.imgPopup?" open":""),children:[Object(o.jsx)("div",{className:"popup__body",children:Object(o.jsxs)("div",{className:"popupImg__container",children:[Object(o.jsx)("img",{src:e.link,alt:"",className:"popupImg__image"}),Object(o.jsx)("h2",{className:"popupImg__name",children:e.name}),Object(o.jsx)("img",{onClick:e.openImagePopup,src:u,alt:"",className:"popup__close-img"})]})}),Object(o.jsx)("div",{onClick:e.openImagePopup,className:"overlay"})]})},y=function(e){var t=e.id,c=e.name,s=e.link,a=n.a.useState(!1),i=Object(l.a)(a,2),p=i[0],r=i[1],d=function(){r(!p)},j=n.a.useState(!0),u=Object(l.a)(j,2),b=u[0],O=u[1],_=Object(m.c)();return Object(o.jsxs)("div",{className:"places__item",children:[Object(o.jsx)("img",{onClick:d,src:s,alt:"",className:"places__item-img"}),Object(o.jsxs)("div",{className:"places__data",children:[Object(o.jsx)("h2",{className:"places__item-title",children:c}),Object(o.jsx)("button",{onClick:function(){O(!b)},type:"button",className:"places__item-like ".concat(b?"":"darken")})]}),Object(o.jsx)("button",{onClick:function(){_(function(e){return{type:"REMOVE_PLACES_ITEM",id:e}}(t))},type:"button",className:"places__remove-button"}),Object(o.jsx)(k,{imgPopup:p,link:s,name:c,openImagePopup:d})]})},P=function(e){return e.places.items},E=function(){var e=Object(m.d)(P).map((function(e){return Object(o.jsx)(y,{id:e.id,name:e.name,link:e.link},e.id)}));return Object(o.jsx)("section",{className:"places container",children:Object(o.jsx)("div",{className:"places__items",children:e})})},w=function(){return Object(o.jsxs)("main",{className:"main wrapper",children:[Object(o.jsx)(g,{}),Object(o.jsx)(E,{})]})},C=c.p+"static/media/logo.03b78ada.svg",A=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"header__wrapper",children:Object(o.jsx)("img",{className:"header__logo",src:C,alt:"logo"})})})})};var S=function(){return Object(o.jsxs)("div",{className:"root",children:[Object(o.jsx)(A,{}),Object(o.jsx)(w,{}),Object(o.jsx)(p,{})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,200)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))},L=c(14),F={name:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e",post:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430"},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_PROFILE_DATA":return Object(L.a)(Object(L.a)({},e),{},{name:t.name,post:t.post});default:return e}},D=c(82),M={items:[{id:0,name:"\u0410\u0440\u0445\u044b\u0437",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{id:1,name:"\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{id:2,name:"\u0418\u0432\u0430\u043d\u043e\u0432\u043e",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{id:3,name:"\u041a\u0430\u043c\u0447\u0430\u0442\u043a\u0430",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{id:4,name:"\u0425\u043e\u043b\u043c\u043e\u0433\u043e\u0440\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{id:5,name:"\u0411\u0430\u0439\u043a\u0430\u043b",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],newId:6},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_PLACES_DATA":var c={id:e.newId++,name:t.name,link:t.link};return Object(L.a)(Object(L.a)({},e),{},{items:[c].concat(Object(D.a)(e.items))});case"REMOVE_PLACES_ITEM":return Object(L.a)(Object(L.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.id}))});default:return e}},W=c(6),B=c(199),J=Object(W.b)({profile:T,places:R,form:B.a}),V=Object(W.c)(J);window.store=V;var z=V;i.a.render(Object(o.jsx)(m.a,{store:z,children:Object(o.jsx)(S,{})}),document.getElementById("root")),I()},87:function(e,t,c){},88:function(e,t,c){}},[[196,1,2]]]);
//# sourceMappingURL=main.b7459cee.chunk.js.map
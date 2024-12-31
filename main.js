(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/cohort-mag-4",headers:{authorization:"2af86e6d-93ad-4cc2-8543-2c9adf2e9dc6","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))};function n(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)})(r).then((function(){n.remove()})).catch((function(e){console.log("Ошибка при удалении карточки: ".concat(e))}))}function r(n,r,o){(function(n,r){var o=r?"DELETE":"PUT";return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:o,headers:e.headers}).then(t)})(r,n.classList.contains("card__like-button_is-active")).then((function(e){n.classList.toggle("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.log(e)}))}function o(e,t,n,r,o,c,a,u,i){var l=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),s=l.querySelector(".card__image"),d=l.querySelector(".card__like-count");s.setAttribute("src",n),s.setAttribute("alt",t),l.querySelector(".card__title").textContent=t,d.textContent=o.length;var p=l.querySelector(".card__delete-button");s.addEventListener("click",(function(){a(n,t)}));var f=l.querySelector(".card__like-button");return f.addEventListener("click",(function(){c(f,e,d)})),o.some((function(e){return e._id===i}))&&f.classList.add("card__like-button_is-active"),u!==i?(console.log("Removing delete button"),p.remove()):p.addEventListener("click",(function(){r(l,e)})),l}var c=function(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),100),document.addEventListener("keydown",u),e.addEventListener("click",i)},a=function(e){e&&(e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),e.removeEventListener("click",i))},u=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&a(t)}},i=function(e){e.target===e.currentTarget&&a(e.currentTarget)},l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),t.setCustomValidity(""),r.classList.remove(n.errorClass),r.textContent=""},s=function(e,t,n){!function(e,t){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},d=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){l(e,n,t)})),s(n,r,t)};function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранить",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Сохранение...";t.textContent=e?r:n}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";t.preventDefault();var r=t.submitter,o=r.textContent;p(!0,r,o,n),e().then((function(){t.target.reset()})).catch((function(e){console.error("Ошибка: ".concat(e))})).finally((function(){p(!1,r,o)}))}var _={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=document.querySelector(".places__list"),y=document.querySelectorAll(".popup__close"),h=document.querySelector(".popup_type_new-card"),S=document.querySelector('.popup__form[name="new-place"]'),b=S.querySelector(".popup__input_type_card-name"),q=S.querySelector(".popup__input_type_url"),g=document.querySelector(".profile__add-button"),E=document.querySelector(".popup_type_edit"),L=document.querySelector('.popup__form[name="edit-profile"]'),C=L.querySelector(".popup__input_type_name"),k=L.querySelector(".popup__input_type_description"),A=document.querySelector(".profile__info"),x=A.querySelector(".profile__title"),T=A.querySelector(".profile__description"),U=A.querySelector(".profile__edit-button"),w=document.querySelector(".popup_type_avatar"),j=document.querySelector('.popup__form[name="edit-avatar"]'),O=j.querySelector(".popup__input_type_avatar"),B=document.querySelector(".profile__image"),P=document.querySelector(".popup_type_image"),I=P.querySelector(".popup__image"),N=P.querySelector(".popup__caption"),D=null;function J(e,t){I.src=e,I.alt=t,N.textContent=t,c(P)}U.addEventListener("click",(function(){C.value=x.textContent,k.value=T.textContent,d(L,_),c(E)})),g.addEventListener("click",(function(){S.reset(),d(S,_),c(h)})),B.addEventListener("click",(function(){j.reset(),d(j,_),c(w)})),y.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){t&&a(t)}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,c,a=(c=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,c)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],i=a[1];D=u._id,x.textContent=u.name,T.textContent=u.about,B.style.backgroundImage="url(".concat(u.avatar,")"),i.forEach((function(e){var t=o(e._id,e.name,e.link,n,e.likes,r,J,e.owner._id,D);v.append(t)}))})).catch((function(e){return console.error("Ошибка загрузки данных: ".concat(e))})),L.addEventListener("submit",(function(n){f((function(){return(n=C.value,r=k.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:r})}).then(t)).then((function(e){x.textContent=e.name,T.textContent=e.about,a(E)}));var n,r}),n)})),S.addEventListener("submit",(function(c){f((function(){return(c=b.value,u=q.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:c,link:u})}).then(t)).then((function(e){var t=o(e._id,e.name,e.link,n,e.likes,r,J,e.owner._id,D);v.prepend(t),a(h)}));var c,u}),c)})),j.addEventListener("submit",(function(n){f((function(){return(n=O.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:n})}).then(t)).then((function(e){B.style.backgroundImage="url(".concat(e.avatar,")"),a(w)}));var n}),n)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);s(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?l(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),s(n,r,t)}))}))}(t,e)}))}(_)})();
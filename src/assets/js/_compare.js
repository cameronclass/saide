/*  */Вот второй js

let M=document.querySelectorAll(".mobile-back-
1"),C=document.querySelectorAll(".mobile-back-
2"),P=document.querySelectorAll(".main-menu-
item__dropdown_block");document.querySelectorAll(".main-
menu").forEach(e=>{e.addEventListener("click",(function(){!function(){let
e=!1;P.forEach((function(t){t.classList.contains("active")&&(e=!0)})),e?(C.forEach(
e=>{e.classList.add("active")}),M.forEach(e=>{e.classList.add("active")})):(C.forE
ach(e=>{e.classList.remove("active")}),M.forEach(e=>{e.classList.remove("active
")}))}()}))}),C.forEach(e=>{e.addEventListener("click",()=>{P.forEach(e=>{e.classL
ist.remove("active")})})});const L=document.querySelector(".main-
select__from"),k=document.querySelector(".main-select__to");function O(){let
e=window.location.hash.substring(1),t=document.querySelectorAll("[data-
menu]"),i=document.querySelectorAll("[data-menu-content]");t.forEach(t=>{let
i=t.getAttribute("data-
menu");"/"!==window.location.pathname&&"/bitrix_include_areas"!==window.location.pathname.split("-")[0]&&"/hash"!==window.location.pathname.split("-
")[0]||(e===i?t.classList.add("active"):t.classList.remove("active"))}),i.forEach(t=>{l
et i=t.getAttribute("data-menu-
content");"/"!==window.location.pathname&&"/bitrix_include_areas"!==window.loc
ation.pathname.split("-")[0]&&"/hash"!==window.location.pathname.split("-
")[0]||(e===i?t.classList.add("active"):t.classList.remove("active"))})}L&&L.addEve
ntListener("click",e=>{g.classList.remove("active"),v.classList.add("active"),b.clas
sList.remove("active")}),k&&k.addEventListener("click",e=>{g.classList.remove("a
ctive"),v.classList.remove("active"),b.classList.add("active")}),window.addEventLi
stener("hashchange",O),document.querySelectorAll("[data-
menu]").forEach((function(e){e.addEventListener("click",(function(){let
t=e.getAttribute("data-
menu");window.location.hash=t,O(),contentsLayer.classList.remove("active")}))})),
"/hash"!==window.location.pathname.split("-")[0]&&O(),function(){let
e=document.querySelectorAll("[data-drop]"),t=document.querySelectorAll("[data-
drop-content]");e.forEach((function(e){e.addEventListener("click",(function(){let
i=e.getAttribute("data-drop");t.forEach((function(e){let t=e.getAttribute("data-drop-
content");i===t?e.classList.add("active"):e.classList.remove("active")}))}))}))}(),win
dow.addEventListener("popstate",(function(){document.querySelectorAll("[data-
drop-
content]").forEach((function(e){e.classList.remove("active")}))}));initMenu=functio
n(){A=document.querySelector('.page-
menu__menu_group_items.active')?.querySelectorAll("[data-in-
menu]"),z=document.querySelector('.page-
menu__menu_group_items.active')?.querySelectorAll("[data-in-
level]");A&&A.forEach((function(e){e.addEventListener("click",(function(){const
t=document.querySelector('.page-
menu__menu_group_items.active')?.querySelectorAll("[data-in-
content]");A.forEach((function(e){e.classList.remove("active"),e.parentElement.cl
assList.remove("active")})),t.forEach((function(e){e.classList.remove("active")}));l
et i=document.querySelector('.page-
menu__menu_group_items.active')?.querySelectorAll("[data-in-
level]"),s=document.querySelector('.page-
menu__menu_group_items.active').querySelectorAll("[data-in-level-
content]");i.forEach((function(e){e.classList.remove("active")})),s.forEach((functio
n(e){e.classList.remove("active")}));let n=this.getAttribute("data-in-
menu");t.forEach((function(t){let i=t.getAttribute("data-in-
content");n===i&&(e.classList.toggle("active"),e.parentElement.classList.toggle("active"),t.classList.toggle("active"))}))}))})),z&&z.forEach((function(e){e.addEventL
istener("click",(function(){const t=document.querySelector('.page-
menu__menu_group_items.active')?.querySelectorAll("[data-in-level-
content]");z.forEach((function(e){e.classList.remove("active"),e.parentElement.cla
ssList.remove("active")})),t.forEach((function(e){e.classList.remove("active")}));let
i=this.getAttribute("data-in-level");t.forEach((function(t){let s=t.getAttribute("data-
in-level-
content");i===s&&(e.classList.toggle("active"),e.parentElement.classList.toggle("
active"),t.classList.toggle("active"))}))}))}))};initMenu();let
I=document.querySelector(".js-menu-hamburger");function D(){let
e=document.querySelector(".page-menu"),t=document.querySelector(".page-
menu__block");window.innerWidth<768&&(e&&e.classList.remove("active"),t?t.cl
assList.remove("active"):t.classList.add("active"))}D(),window.addEventListener("
resize",D),I&&I.addEventListener("click",(function(){this.classList.toggle("is-
active");let e=document.querySelector(".page-
menu"),t=document.querySelector(".page-
menu__block");e&&e.classList.toggle("active"),e&&e.classList.contains("active")?
t.classList.add("active"):t.classList.remove("active")}));document.querySelectorAll
("a").forEach(e=>{e.addEventListener("click",(function(t){"#"===e.getAttribute("hr
ef")&&t.preventDefault()}))});document.querySelectorAll(".page-
menu__menu_link").forEach(e=>{e.addEventListener("click",(function(e){this.clas
sList.toggle("_active");const t=document.querySelector(".page-
menu");document.querySelector(".page-
menu__menu_link._active")?t.classList.add("active"):t.classList.remove("active")}
))})
function activateMenu(){document.querySelectorAll(".main-menu-item").forEach((function(e){e.classList.remove("active")})),document.querySelectorAll(".main-menu__main_link, .main-menu-item__card").forEach((function(e){if(e.classList.contains("active")){var t=e.getAttribute(e.classList.contains("main-menu__main_link")?"data-menu":"data-drop");document.querySelectorAll('[data-menu-content="'+t+'"], [data-drop-content="'+t+'"]').forEach((function(e){e.classList.add("active")}))}}))}function handleClick(e){var t=e.target;(t.classList.contains("main-menu__main_link")||t.classList.contains("main-menu-item__card"))&&(document.querySelectorAll(".main-menu__main_link, .main-menu-item__card").forEach((function(e){e.classList.remove("active")})),t.classList.add("active"),activateMenu())}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementsByClassName("accordion-js__item"),t=document.getElementsByClassName("accordion-js__head");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(function(){e[n].classList.toggle("active")}));const n=document.querySelectorAll(".marketing-review__more"),a=document.querySelector(".marketing-review__text");n.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active"),e.closest(a).classList.toggle("active")})});let c=document.querySelector(".main-select__menu_left"),i=document.querySelector(".main-select__menu_right"),s=document.querySelector(".svg-left"),o=document.querySelector(".svg-right");c&&c.addEventListener("mouseenter",(function(){s.classList.add("active")})),c&&c.addEventListener("mouseleave",(function(){s.classList.remove("active")})),i&&i.addEventListener("mouseenter",(function(){o.classList.add("active")})),i&&i.addEventListener("mouseleave",(function(){o.classList.remove("active")}))}),document.addEventListener("click",handleClick),activateMenu();
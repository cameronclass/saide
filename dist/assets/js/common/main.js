document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementsByClassName("accordion-js__item"),t=document.getElementsByClassName("accordion-js__head");for(let c=0;c<t.length;c++)t[c].addEventListener("click",(function(){e[c].classList.toggle("active")}));const c=document.querySelectorAll(".marketing-review__more"),a=document.querySelector(".marketing-review__text");c.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active"),e.closest(a).classList.toggle("active")})});let n=document.querySelector(".main-select__menu_left"),s=document.querySelector(".main-select__menu_right"),i=document.querySelector(".svg-left"),o=document.querySelector(".svg-right");n&&n.addEventListener("mouseenter",(function(){i.classList.add("active")})),n&&n.addEventListener("mouseleave",(function(){i.classList.remove("active")})),s&&s.addEventListener("mouseenter",(function(){o.classList.add("active")})),s&&s.addEventListener("mouseleave",(function(){o.classList.remove("active")}));let l=document.querySelectorAll("[data-menu]"),r=document.querySelectorAll("[data-drop]");l.forEach((function(e){e.addEventListener("click",(function(){l.forEach(e=>{e.classList.remove("active")});let t=e.getAttribute("data-menu");document.querySelectorAll(".main-menu-item").forEach((function(c){var a=c.getAttribute("data-menu-content");t===a?(e.classList.add("active"),c.classList.add("active")):c.classList.remove("active")}))}))})),r.forEach((function(e){e.addEventListener("click",(function(){r.forEach(e=>{e.classList.remove("active")});let t=e.getAttribute("data-drop");document.querySelectorAll("[data-drop-content]").forEach((function(c){var a=c.getAttribute("data-drop-content");t===a?(e.classList.add("active"),c.classList.add("active")):c.classList.remove("active")}))}))}));const d=document.querySelectorAll(".main-select__menu_link"),u=document.querySelector(".js-go-index"),m=document.querySelector(".js-main-menu"),v=document.querySelector(".js-second-menu");d.forEach(e=>{e.addEventListener("click",e=>{m.classList.remove("active"),v.classList.add("active")})}),u.addEventListener("click",()=>{m.classList.add("active"),v.classList.remove("active")});const L=document.querySelectorAll(".main-menu__main_link"),f=(document.querySelectorAll(".main-select__menu_link"),document.querySelectorAll("[data-menu-content]"));function g(){const e=window.location.hash.substring(1);L.forEach(t=>{const c=t.getAttribute("data-menu");e===c?t.classList.add("active"):t.classList.remove("active")}),f.forEach(t=>{const c=t.getAttribute("data-menu-content");e===c?t.classList.add("active"):t.classList.remove("active")}),e&&v?(m.classList.remove("active"),v.classList.add("active")):v&&(m.classList.add("active"),v.classList.remove("active"))}window.addEventListener("hashchange",g),g()});
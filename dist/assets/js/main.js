document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".header__menu_item");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e!==t&&e.classList.contains("menu-item__active")&&e.classList.remove("menu-item__active")})),this.classList.toggle("menu-item__active")}))}));const t=document.querySelectorAll(".menu-item__cards_item");function c(e){e.stopPropagation(),this.classList.toggle("menu-item__cards_item_active");var c=this.closest(".menu-item__cards");c&&c.classList.toggle("menu-item__cards_active",null!==c.querySelector(".menu-item__cards_item_active")),t.forEach((function(e){e!==this&&e.classList.toggle("d-none")}),this);var s=this.querySelector(".menu-item__card");s&&s.classList.toggle("d-none");var n=this.querySelector(".menu-item__cards");n&&n.classList.toggle("d-none")}t.forEach((function(e){e.addEventListener("click",c)}));const s=document.getElementsByClassName("accordion-js__item"),n=document.getElementsByClassName("accordion-js__head");for(let e=0;e<n.length;e++)n[e].addEventListener("click",(function(){s[e].classList.toggle("active")}));const i=document.querySelectorAll(".marketing-review__more"),o=document.querySelector(".marketing-review__text");i.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active"),e.closest(o).classList.toggle("active")})});let a=document.querySelector(".main-select__menu_left"),r=document.querySelector(".main-select__menu_right"),l=document.querySelector(".svg-left"),m=document.querySelector(".svg-right");a.addEventListener("mouseenter",(function(){l.classList.add("active")})),a.addEventListener("mouseleave",(function(){l.classList.remove("active")})),r.addEventListener("mouseenter",(function(){m.classList.add("active")})),r.addEventListener("mouseleave",(function(){m.classList.remove("active")}))});
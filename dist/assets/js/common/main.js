document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".header__menu_item");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e!==t&&e.classList.contains("menu-item__active")&&e.classList.remove("menu-item__active")})),this.classList.toggle("menu-item__active")}))}));const t=document.querySelectorAll(".menu-item__cards_item");function c(e){e.stopPropagation(),this.classList.toggle("menu-item__cards_item_active");var c=this.closest(".menu-item__cards");c&&c.classList.toggle("menu-item__cards_active",null!==c.querySelector(".menu-item__cards_item_active")),t.forEach((function(e){e!==this&&e.classList.toggle("d-none")}),this);var n=this.querySelector(".menu-item__card");n&&n.classList.toggle("d-none");var s=this.querySelector(".menu-item__cards");s&&s.classList.toggle("d-none")}t.forEach((function(e){e.addEventListener("click",c)}));const n=document.getElementsByClassName("accordion-js__item"),s=document.getElementsByClassName("accordion-js__head");for(let e=0;e<s.length;e++)s[e].addEventListener("click",(function(){n[e].classList.toggle("active")}));const i=document.querySelector(".blog-page__menu_more_js"),o=document.querySelector(".blog-page__menu_more_drop");i.addEventListener("click",()=>{o.classList.toggle("active")})});
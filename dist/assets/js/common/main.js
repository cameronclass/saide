const accordionItem=document.getElementsByClassName("accordion-js__item"),accordionBtn=document.getElementsByClassName("accordion-js__head");for(let e=0;e<accordionBtn.length;e++)accordionBtn[e].addEventListener("click",(function(){accordionItem[e].classList.toggle("active")}));const reviewMoreBtn=document.querySelectorAll(".marketing-review__more"),reviewMoreText=document.querySelector(".marketing-review__text");reviewMoreBtn.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active"),e.closest(reviewMoreText).classList.toggle("active")})});let menuLeft=document.querySelector(".main-select__menu_left"),menuRight=document.querySelector(".main-select__menu_right"),svgLeft=document.querySelector(".svg-left"),svgRight=document.querySelector(".svg-right");menuLeft&&menuLeft.addEventListener("mouseenter",(function(){svgLeft.classList.add("active")})),menuLeft&&menuLeft.addEventListener("mouseleave",(function(){svgLeft.classList.remove("active")})),menuRight&&menuRight.addEventListener("mouseenter",(function(){svgRight.classList.add("active")})),menuRight&&menuRight.addEventListener("mouseleave",(function(){svgRight.classList.remove("active")}));const caseBlock=document.querySelectorAll(".case-block");caseBlock.forEach(e=>{e.addEventListener("click",(function(t){if(e.querySelectorAll(".tab-btn").forEach(e=>{e.classList.remove("active")}),t.target.classList.contains("tab-btn")){t.target.classList.add("active");let c=t.target.getAttribute("content-id");e.querySelectorAll(".content").forEach(e=>{e.classList.remove("show");let t=e.getAttribute("id");c===t&&e.classList.add("show")})}}))});const ReadSmore=window.readSmore,readMoreEls=document.querySelectorAll(".js-read-smore");ReadSmore(readMoreEls).init();
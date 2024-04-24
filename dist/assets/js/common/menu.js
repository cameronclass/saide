const mainSelectLinksRight=document.querySelectorAll(".main-select__menu_right .main-select__menu_link"),mainSelectLinksLeft=document.querySelectorAll(".main-select__menu_left .main-select__menu_link"),jsGoIndex=document.querySelectorAll(".js-go-index"),mainMenuJs=document.querySelector(".js-main-menu"),leftMenuJs=document.querySelector(".js-left-menu"),rightMenuJS=document.querySelector(".js-right-menu"),mobileFirstLayerLinks=document.querySelectorAll(".js-right-menu .main-menu__main_link"),rightMenuSecondLayer=document.querySelector(".js-right-menu .main-menu__second"),rightMenuSecondLayerBack=document.querySelector(".js-right-menu .mobile-back-1"),mobileFirstLayerLinksLeft=document.querySelectorAll(".js-left-menu .main-menu__main_link"),leftMenuSecondLayer=document.querySelector(".js-left-menu .main-menu__second"),leftMenuSecondLayerBack=document.querySelector(".js-left-menu .mobile-back-1");mainSelectLinksRight&&mainSelectLinksRight.forEach(e=>{e.addEventListener("click",e=>{mainMenuJs.classList.remove("active"),leftMenuJs.classList.remove("active"),rightMenuJS.classList.add("active")})}),mainSelectLinksLeft&&mainSelectLinksLeft.forEach(e=>{e.addEventListener("click",e=>{mainMenuJs.classList.remove("active"),leftMenuJs.classList.add("active"),rightMenuJS.classList.remove("active")})}),jsGoIndex&&jsGoIndex.forEach(e=>{e.addEventListener("click",()=>{mainMenuJs.classList.add("active"),leftMenuJs.classList.remove("active"),rightMenuJS.classList.remove("active"),rightMenuSecondLayer.classList.remove("active"),leftMenuSecondLayer.classList.remove("active")})}),mobileFirstLayerLinks&&mobileFirstLayerLinks.forEach(e=>{e.addEventListener("click",()=>{rightMenuSecondLayer.classList.add("active")})}),rightMenuSecondLayerBack&&rightMenuSecondLayerBack.addEventListener("click",()=>{rightMenuSecondLayer.classList.remove("active")}),mobileFirstLayerLinksLeft&&mobileFirstLayerLinksLeft.forEach(e=>{e.addEventListener("click",()=>{leftMenuSecondLayer.classList.add("active")})}),leftMenuSecondLayerBack&&leftMenuSecondLayerBack.addEventListener("click",()=>{leftMenuSecondLayer.classList.remove("active")});let mobileBack1=document.querySelectorAll(".mobile-back-1"),mobileBack2=document.querySelectorAll(".mobile-back-2"),dropContentElements=document.querySelectorAll(".main-menu-item__dropdown_block");function updateMobileBack2(){let e=!1;dropContentElements.forEach((function(t){t.classList.contains("active")&&(e=!0)})),e?(mobileBack2.forEach(e=>{e.classList.add("active")}),mobileBack1.forEach(e=>{e.classList.add("active")})):(mobileBack2.forEach(e=>{e.classList.remove("active")}),mobileBack1.forEach(e=>{e.classList.remove("active")}))}document.querySelectorAll(".main-menu").forEach(e=>{e.addEventListener("click",(function(){updateMobileBack2()}))}),mobileBack2.forEach(e=>{e.addEventListener("click",()=>{dropContentElements.forEach(e=>{e.classList.remove("active")})})});const mainSelectFrom=document.querySelector(".main-select__from"),mainSelectTo=document.querySelector(".main-select__to");function updateMenuState(){let e=window.location.hash.substring(1),t=document.querySelectorAll("[data-menu]"),n=document.querySelectorAll("[data-menu-content]");t.forEach((function(t){let n=t.getAttribute("data-menu");e===n?t.classList.add("active"):t.classList.remove("active")})),n.forEach((function(t){let n=t.getAttribute("data-menu-content");e===n?t.classList.add("active"):t.classList.remove("active")}))}function updateDropState(){let e=document.querySelectorAll("[data-drop]"),t=document.querySelectorAll("[data-drop-content]");e.forEach((function(e){e.addEventListener("click",(function(){let n=e.getAttribute("data-drop");t.forEach((function(e){let t=e.getAttribute("data-drop-content");n===t?e.classList.add("active"):e.classList.remove("active")}))}))}))}function removeClassOnPopstate(e){window.addEventListener("popstate",(function(){document.querySelectorAll("[data-drop-content]").forEach((function(e){e.classList.remove("active")}))}))}mainSelectFrom&&mainSelectFrom.addEventListener("click",e=>{mainMenuJs.classList.remove("active"),leftMenuJs.classList.add("active"),rightMenuJS.classList.remove("active")}),mainSelectTo&&mainSelectTo.addEventListener("click",e=>{mainMenuJs.classList.remove("active"),leftMenuJs.classList.remove("active"),rightMenuJS.classList.add("active")}),window.addEventListener("hashchange",updateMenuState),document.querySelectorAll("[data-menu]").forEach((function(e){e.addEventListener("click",(function(){let t=e.getAttribute("data-menu");window.location.hash=t,updateMenuState(),contentsLayer.classList.remove("active")}))})),updateMenuState(),updateDropState(),removeClassOnPopstate();let dataInButton=document.querySelectorAll("[data-in-menu]"),dataInLevelButton=document.querySelectorAll("[data-in-level]");dataInButton&&dataInButton.forEach((function(e){e.addEventListener("click",(function(){const t=document.querySelectorAll("[data-in-content]");dataInButton.forEach((function(e){e.classList.remove("active"),e.parentElement.classList.remove("active")})),t.forEach((function(e){e.classList.remove("active")}));let n=document.querySelectorAll("[data-in-level]"),c=document.querySelectorAll("[data-in-level-content]");n.forEach((function(e){e.classList.remove("active")})),c.forEach((function(e){e.classList.remove("active")}));let a=this.getAttribute("data-in-menu");t.forEach((function(t){let n=t.getAttribute("data-in-content");a===n&&(e.classList.toggle("active"),e.parentElement.classList.toggle("active"),t.classList.toggle("active"))}))}))})),dataInLevelButton&&dataInLevelButton.forEach((function(e){e.addEventListener("click",(function(){const t=document.querySelectorAll("[data-in-level-content]");dataInLevelButton.forEach((function(e){e.classList.remove("active"),e.parentElement.classList.remove("active")})),t.forEach((function(e){e.classList.remove("active")}));let n=this.getAttribute("data-in-level");t.forEach((function(t){let c=t.getAttribute("data-in-level-content");n===c&&(e.classList.toggle("active"),e.parentElement.classList.toggle("active"),t.classList.toggle("active"))}))}))}));let jsMenuHamburger=document.querySelector(".js-menu-hamburger");function toggleMenuClasses(){let e=document.querySelector(".page-menu"),t=document.querySelector(".page-menu__block");window.innerWidth<768&&(e&&e.classList.remove("active"),t?t.classList.remove("active"):t.classList.add("active"))}toggleMenuClasses(),window.addEventListener("resize",toggleMenuClasses),jsMenuHamburger&&jsMenuHamburger.addEventListener("click",(function(){this.classList.toggle("is-active");let e=document.querySelector(".page-menu"),t=document.querySelector(".page-menu__block");e&&e.classList.toggle("active"),e&&e.classList.contains("active")?t.classList.add("active"):t.classList.remove("active")}));
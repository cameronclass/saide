function removeClassOnPopstate(e){window.addEventListener("popstate",(function(){document.querySelectorAll("[data-drop-content]").forEach((function(e){e.classList.remove("active")}))}))}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".main-select__menu_right .main-select__menu_link"),t=document.querySelectorAll(".main-select__menu_left .main-select__menu_link"),c=document.querySelectorAll(".js-go-index"),a=document.querySelector(".js-main-menu"),n=document.querySelector(".js-left-menu"),s=document.querySelector(".js-right-menu");e.forEach(e=>{e.addEventListener("click",e=>{a.classList.remove("active"),n.classList.remove("active"),s.classList.add("active")})}),t.forEach(e=>{e.addEventListener("click",e=>{a.classList.remove("active"),n.classList.add("active"),s.classList.remove("active")})}),c.forEach(e=>{e.addEventListener("click",()=>{a.classList.add("active"),n.classList.remove("active"),s.classList.remove("active")})});const i=document.querySelector(".main-select__from"),o=document.querySelector(".main-select__to");function r(){var e=window.location.hash.substring(1),t=document.querySelectorAll("[data-menu]"),c=document.querySelectorAll("[data-menu-content]");t.forEach((function(t){var c=t.getAttribute("data-menu");e===c?t.classList.add("active"):t.classList.remove("active")})),c.forEach((function(t){var c=t.getAttribute("data-menu-content");e===c?t.classList.add("active"):t.classList.remove("active")}))}i.addEventListener("click",e=>{a.classList.remove("active"),n.classList.add("active"),s.classList.remove("active")}),o.addEventListener("click",e=>{a.classList.remove("active"),n.classList.remove("active"),s.classList.add("active")}),window.addEventListener("hashchange",r),document.querySelectorAll("[data-menu]").forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("data-menu");window.location.hash=t,r(),contentsLayer.classList.remove("active")}))})),r(),function(){let e=document.querySelectorAll("[data-drop]"),t=document.querySelectorAll("[data-drop-content]");e.forEach((function(e){e.addEventListener("click",(function(){var c=e.getAttribute("data-drop");t.forEach((function(e){var t=e.getAttribute("data-drop-content");c===t?e.classList.add("active"):e.classList.remove("active")}))}))}))}()}),removeClassOnPopstate();
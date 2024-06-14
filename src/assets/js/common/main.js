/* accordion */
const accordionItems = document.querySelectorAll(".accordion-js__item");
/* const accordionBtns = document.querySelectorAll(".accordion-js__head"); */

if (accordionItems)
  accordionItems.forEach((item) => {
    item.addEventListener("click", (item) => {
      item.classList.toggle("active");
    });
  });

const reviewMoreBtn = document.querySelectorAll(".marketing-review__more");
const reviewMoreText = document.querySelector(".marketing-review__text");

reviewMoreBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
    item.closest(reviewMoreText).classList.toggle("active");
  });
});

/* Главный экран меню svg cover */
let menuLeft = document.querySelector(".main-select__menu_left");
let menuRight = document.querySelector(".main-select__menu_right");
let svgLeft = document.querySelector(".svg-left");
let svgRight = document.querySelector(".svg-right");

if (menuLeft)
  menuLeft.addEventListener("mouseenter", function () {
    svgLeft.classList.add("active");
  });
if (menuLeft)
  menuLeft.addEventListener("mouseleave", function () {
    svgLeft.classList.remove("active");
  });
if (menuRight)
  menuRight.addEventListener("mouseenter", function () {
    svgRight.classList.add("active");
  });
if (menuRight)
  menuRight.addEventListener("mouseleave", function () {
    svgRight.classList.remove("active");
  });

/* Tabs */

const caseBlock = document.querySelectorAll(".case-block");

caseBlock.forEach((item) => {
  item.addEventListener("click", function (event) {
    let target = event.target;

    // Проверяем, имеет ли элемент класс "tab-btn" или его родительские элементы
    while (target !== item && !target.classList.contains("tab-btn")) {
      target = target.parentElement;
    }

    if (target.classList.contains("tab-btn")) {
      // Удаляем класс "active" со всех .tab-btn внутри текущего .case-block
      item.querySelectorAll(".tab-btn").forEach((tabBtn) => {
        tabBtn.classList.remove("active");
      });

      target.classList.add("active");

      let tabId = target.getAttribute("content-id");

      let tabContent = item.querySelectorAll(".content");

      tabContent.forEach((content) => {
        content.classList.remove("show");

        let contentID = content.getAttribute("id");
        if (tabId === contentID) {
          content.classList.add("show");
        }
      });
    }
  });
});

// Init JS
const ReadSmore = window.readSmore;

const readMoreEls = document.querySelectorAll(".js-read-smore");

ReadSmore(readMoreEls).init();

Fancybox.bind("[data-fancybox]", {});

let askButton = document.querySelectorAll(".js-ask-open");
let askPanel = document.querySelector(".ask-panel");
let askPanelClose = document.querySelector(".js-ask-close");

if (askButton)
  askButton.forEach((item) => {
    item.addEventListener("click", () => {
      askPanel.classList.toggle("active");
    });
  });

if (askPanelClose)
  askPanelClose.addEventListener("click", function () {
    askPanel.classList.remove("active");
  });

Splitting();

const cookieBtn = document.querySelector(".block-cookie__btn");
const cookieBlock = document.querySelector(".block-cookie");

if (cookieBlock)
  if (localStorage.getItem("cookiesAccepted")) {
    cookieBlock.classList.remove("active");
  } else {
    cookieBlock.classList.add("active");
  }

if (cookieBtn)
  cookieBtn.addEventListener("click", function () {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBlock.style.display = "none";
  });

/* Анимация */
AOS.init({
  duration: 700,
  anchorPlacement: "top-center",
  once: true,
  mirror: true,
  delay: 200,
});

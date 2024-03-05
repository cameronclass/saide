/* accordion */
const accordionItem = document.getElementsByClassName("accordion-js__item");
const accordionBtn = document.getElementsByClassName("accordion-js__head");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    accordionItem[i].classList.toggle("active");
  });
}

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
    // Удаляем класс "active" со всех .tab-btn внутри текущего .case-block
    item.querySelectorAll(".tab-btn").forEach((tabBtn) => {
      tabBtn.classList.remove("active");
    });

    if (event.target.classList.contains("tab-btn")) {
      event.target.classList.add("active");

      let tabId = event.target.getAttribute("content-id");

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

// target all read more elements
const readMoreEls = document.querySelectorAll(".js-read-smore");

// Init
ReadSmore(readMoreEls).init();

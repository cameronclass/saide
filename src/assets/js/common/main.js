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
const tabButtons = document.querySelectorAll(".tab-btn");

tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => tabClicked(tab));
});

function tabClicked(tab) {
  tabButtons.forEach((tab) => {
    tab.classList.remove("active");
  });
  tab.classList.add("active");

  const contents = document.querySelectorAll(".content");

  contents.forEach((content) => {
    content.classList.remove("show");
  });

  const contentId = tab.getAttribute("content-id");
  const contentSelected = document.getElementById(contentId);

  contentSelected.classList.add("show");
  //console.log(contentId)
}

// Init JS
const ReadSmore = window.readSmore;

// target all read more elements
const readMoreEls = document.querySelectorAll(".js-read-smore");

// Init
ReadSmore(readMoreEls).init();

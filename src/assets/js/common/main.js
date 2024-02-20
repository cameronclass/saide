document.addEventListener("DOMContentLoaded", () => {
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
});

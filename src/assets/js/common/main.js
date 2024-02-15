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

  // Получаем все кнопки меню
  let menuButtons = document.querySelectorAll(".main-menu__main_link");
  let menuInsideButtons = document.querySelectorAll("[data-drop]");

  // Добавляем обработчик события клика для каждой кнопки
  menuButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      menuButtons.forEach((item) => {
        item.classList.remove("active");
      });
      // Получаем значение атрибута "data-menu" кнопки
      let menuValue = button.getAttribute("data-menu");
      // Получаем все блоки меню
      let menuItems = document.querySelectorAll(".main-menu-item");
      // Перебираем все блоки меню
      menuItems.forEach(function (item) {
        // Получаем значение атрибута "data-menu-content" блока
        var itemValue = item.getAttribute("data-menu-content");

        // Если значение атрибутов совпадает, добавляем класс "active" обоим элементам
        if (menuValue === itemValue) {
          button.classList.add("active");
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });

  // Добавляем обработчик события клика для каждой кнопки
  menuInsideButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      menuInsideButtons.forEach((item) => {
        item.classList.remove("active");
      });
      // Получаем значение атрибута "data-menu" кнопки
      let menuValue = button.getAttribute("data-menu");
      // Получаем все блоки меню
      let menuItems = document.querySelectorAll("[data-drop-content]");
      // Перебираем все блоки меню
      menuItems.forEach(function (item) {
        // Получаем значение атрибута "data-menu-content" блока
        var itemValue = item.getAttribute("data-menu-content");

        // Если значение атрибутов совпадает, добавляем класс "active" обоим элементам
        if (menuValue === itemValue) {
          button.classList.add("active");
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });
});

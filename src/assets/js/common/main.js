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

// Функция для активации меню
function activateMenu() {
  // Удаляем класс "active" у всех элементов с классом "main-menu-item" и "main-menu-item__dropdown_block"
  document.querySelectorAll(".main-menu-item").forEach(function (item) {
    item.classList.remove("active");
  });

  // Получаем все элементы с классом "main-menu__main_link" и "main-menu-item__card"
  var menuItems = document.querySelectorAll(
    ".main-menu__main_link, .main-menu-item__card"
  );

  // Перебираем все найденные элементы
  menuItems.forEach(function (item) {
    // Проверяем, имеет ли элемент класс "active"
    if (item.classList.contains("active")) {
      // Получаем значение соответствующего атрибута
      var attributeValue = item.getAttribute(
        item.classList.contains("main-menu__main_link")
          ? "data-menu"
          : "data-drop"
      );

      // Находим элементы с классом "main-menu-item" и "main-menu-item__dropdown_block" и соответствующим атрибутом
      var relatedItems = document.querySelectorAll(
        '[data-menu-content="' +
          attributeValue +
          '"], [data-drop-content="' +
          attributeValue +
          '"]'
      );

      // Перебираем найденные элементы и добавляем им класс "active"
      relatedItems.forEach(function (relatedItem) {
        relatedItem.classList.add("active");
      });
    }
  });
}

// Функция для обработки клика по элементам меню
function handleClick(event) {
  // Получаем ссылку, на которую было произведено нажатие
  var target = event.target;

  // Проверяем, что нажатый элемент - элемент меню с классом "main-menu__main_link" или "main-menu-item__card"
  if (
    target.classList.contains("main-menu__main_link") ||
    target.classList.contains("main-menu-item__card")
  ) {
    // Удаляем класс "active" у всех элементов с классом "main-menu__main_link" и "main-menu-item__card"
    document
      .querySelectorAll(".main-menu__main_link, .main-menu-item__card")
      .forEach(function (item) {
        item.classList.remove("active");
      });

    // Добавляем класс "active" только к нажатому элементу меню
    target.classList.add("active");

    // Вызываем функцию активации меню
    activateMenu();
  }
}

// Добавляем обработчик события клика по всему документу
document.addEventListener("click", handleClick);

// Вызываем функцию активации меню при загрузке страницы
activateMenu();

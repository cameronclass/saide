document.addEventListener("DOMContentLoaded", () => {
  /* Main Selection */
  const mainSelectLinksRight = document.querySelectorAll(
    ".main-select__menu_right .main-select__menu_link"
  );
  const mainSelectLinksLeft = document.querySelectorAll(
    ".main-select__menu_left .main-select__menu_link"
  );
  const jsGoIndex = document.querySelectorAll(".js-go-index");
  const mainMenuJs = document.querySelector(".js-main-menu");
  const leftMenuJs = document.querySelector(".js-left-menu");
  const rightMenuJS = document.querySelector(".js-right-menu");

  if (mainSelectLinksRight)
    mainSelectLinksRight.forEach((item) => {
      item.addEventListener("click", (e) => {
        mainMenuJs.classList.remove("active");
        leftMenuJs.classList.remove("active");
        rightMenuJS.classList.add("active");
      });
    });

  if (mainSelectLinksLeft)
    mainSelectLinksLeft.forEach((item) => {
      item.addEventListener("click", (e) => {
        mainMenuJs.classList.remove("active");
        leftMenuJs.classList.add("active");
        rightMenuJS.classList.remove("active");
      });
    });

  if (jsGoIndex)
    jsGoIndex.forEach((item) => {
      item.addEventListener("click", () => {
        mainMenuJs.classList.add("active");
        leftMenuJs.classList.remove("active");
        rightMenuJS.classList.remove("active");
      });
    });

  /* Tablet */
  const mainSelectFrom = document.querySelector(".main-select__from");
  const mainSelectTo = document.querySelector(".main-select__to");

  if (mainSelectFrom)
    mainSelectFrom.addEventListener("click", (e) => {
      mainMenuJs.classList.remove("active");
      leftMenuJs.classList.add("active");
      rightMenuJS.classList.remove("active");
    });
  if (mainSelectTo)
    mainSelectTo.addEventListener("click", (e) => {
      mainMenuJs.classList.remove("active");
      leftMenuJs.classList.remove("active");
      rightMenuJS.classList.add("active");
    });

  /* Var */

  /* Второй уровень */
  function updateMenuState() {
    var hashMenu = window.location.hash.substring(1);
    var buttonsMenu = document.querySelectorAll("[data-menu]");
    var contentsMenu = document.querySelectorAll("[data-menu-content]");
    buttonsMenu.forEach(function (button) {
      var dataMenu = button.getAttribute("data-menu");
      if (hashMenu === dataMenu) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    contentsMenu.forEach(function (content) {
      var dataMenuContent = content.getAttribute("data-menu-content");
      if (hashMenu === dataMenuContent) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  }

  window.addEventListener("hashchange", updateMenuState);

  document.querySelectorAll("[data-menu]").forEach(function (button) {
    button.addEventListener("click", function () {
      var dataMenu = button.getAttribute("data-menu");
      window.location.hash = dataMenu;
      updateMenuState();
      contentsLayer.classList.remove("active");
    });
  });

  updateMenuState();

  /* Третий уровень */
  function updateDropState() {
    let buttonsLayer = document.querySelectorAll("[data-drop]");
    let contentsLayer = document.querySelectorAll("[data-drop-content]");
    buttonsLayer.forEach(function (button) {
      button.addEventListener("click", function () {
        var dropValue = button.getAttribute("data-drop");

        contentsLayer.forEach(function (content) {
          var dropContentValue = content.getAttribute("data-drop-content");
          if (dropValue === dropContentValue) {
            content.classList.add("active");
          } else {
            content.classList.remove("active");
          }
        });
      });
    });
  }

  updateDropState(); // Вызываем функцию один раз, чтобы установить начальное состояние

  // Функция для удаления класса при изменении адресной строки
  function removeClassOnPopstate(className) {
    window.addEventListener("popstate", function () {
      // Получаем все элементы, к которым нужно применить удаление класса
      var elementsData = document.querySelectorAll("[data-drop-content]");

      // Перебираем найденные элементы
      elementsData.forEach(function (element) {
        // Удаляем класс
        element.classList.remove("active");
      });
    });
  }

  // Пример использования функции
  removeClassOnPopstate();

  // Получаем все кнопки
  let dataInButton = document.querySelectorAll("[data-in-menu]");

  if (dataInButton)
    // Перебираем каждую кнопку
    dataInButton.forEach(function (button) {
      // Добавляем обработчик события клика
      button.addEventListener("click", function () {
        // Получаем значение data-in-menu для текущей кнопки
        var menuAttr = this.getAttribute("data-in-menu");

        // Получаем все div'ы с классом page-menu__menu_drop
        const dataInContent = document.querySelectorAll("[data-in-content]");

        // Перебираем каждый div
        dataInContent.forEach(function (div) {
          // Получаем значение data-in-content для текущего div'а
          var contentAttr = div.getAttribute("data-in-content");

          // Если значения совпадают, добавляем класс active обоим элементам
          if (menuAttr === contentAttr) {
            button.classList.toggle("active");
            div.classList.toggle("active");
          } /* else {
            // Иначе удаляем класс active, если он был ранее добавлен
            button.classList.remove("active");
            div.classList.remove("active");
          } */
        });
      });
    });
});

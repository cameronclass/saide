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

const mobileFirstLayerLinks = document.querySelectorAll(
  ".js-right-menu .main-menu__main_link"
);
const rightMenuSecondLayer = document.querySelector(
  ".js-right-menu .main-menu__second"
);
const rightMenuSecondLayerBack = document.querySelector(
  ".js-right-menu .mobile-back-1"
);

const mobileFirstLayerLinksLeft = document.querySelectorAll(
  ".js-left-menu .main-menu__main_link"
);
const leftMenuSecondLayer = document.querySelector(
  ".js-left-menu .main-menu__second"
);
const leftMenuSecondLayerBack = document.querySelector(
  ".js-left-menu .mobile-back-1"
);

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
      rightMenuSecondLayer.classList.remove("active");
      leftMenuSecondLayer.classList.remove("active");
    });
  });

//
if (mobileFirstLayerLinks)
  mobileFirstLayerLinks.forEach((button) => {
    button.addEventListener("click", () => {
      rightMenuSecondLayer.classList.add("active");
    });
  });

if (rightMenuSecondLayerBack)
  rightMenuSecondLayerBack.addEventListener("click", () => {
    rightMenuSecondLayer.classList.remove("active");
  });

if (mobileFirstLayerLinksLeft)
  mobileFirstLayerLinksLeft.forEach((button) => {
    button.addEventListener("click", () => {
      leftMenuSecondLayer.classList.add("active");
    });
  });

if (leftMenuSecondLayerBack)
  leftMenuSecondLayerBack.addEventListener("click", () => {
    leftMenuSecondLayer.classList.remove("active");
  });

//
let mobileBack1 = document.querySelectorAll(".mobile-back-1");
let mobileBack2 = document.querySelectorAll(".mobile-back-2");
let dropContentElements = document.querySelectorAll(
  ".main-menu-item__dropdown_block"
);

function updateMobileBack2() {
  let hasActiveClass = false;

  dropContentElements.forEach(function (element) {
    if (element.classList.contains("active")) {
      hasActiveClass = true;
    }
  });

  if (hasActiveClass) {
    mobileBack2.forEach((item) => {
      item.classList.add("active");
    });
    mobileBack1.forEach((item) => {
      item.classList.add("active");
    });
  } else {
    mobileBack2.forEach((item) => {
      item.classList.remove("active");
    });
    mobileBack1.forEach((item) => {
      item.classList.remove("active");
    });
  }
}

// Обработчик события для элементов с классом .main-menu
document.querySelectorAll(".main-menu").forEach((item) => {
  item.addEventListener("click", function () {
    updateMobileBack2();
  });
});

mobileBack2.forEach((item) => {
  item.addEventListener("click", () => {
    dropContentElements.forEach((drop) => {
      drop.classList.remove("active");
    });
  });
});

//

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

/* let */

/* Второй уровень */
function updateMenuState() {
  let hashMenu = window.location.hash.substring(1);
  let buttonsMenu = document.querySelectorAll("[data-menu]");
  let contentsMenu = document.querySelectorAll("[data-menu-content]");
  buttonsMenu.forEach(function (button) {
    let dataMenu = button.getAttribute("data-menu");
    if (hashMenu === dataMenu) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  contentsMenu.forEach(function (content) {
    let dataMenuContent = content.getAttribute("data-menu-content");
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
    let dataMenu = button.getAttribute("data-menu");
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
      let dropValue = button.getAttribute("data-drop");

      contentsLayer.forEach(function (content) {
        let dropContentValue = content.getAttribute("data-drop-content");
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
    let elementsData = document.querySelectorAll("[data-drop-content]");

    // Перебираем найденные элементы
    elementsData.forEach(function (element) {
      // Удаляем класс
      element.classList.remove("active");
    });
  });
}

// Пример использования функции
removeClassOnPopstate();

/* Внутреннее меню */
let dataInButton = document.querySelectorAll("[data-in-menu]");
let dataInLevelButton = document.querySelectorAll("[data-in-level]");

if (dataInButton)
  dataInButton.forEach(function (button) {
    button.addEventListener("click", function () {
      const dataInContent = document.querySelectorAll("[data-in-content]");
      dataInButton.forEach(function (btn) {
        btn.classList.remove("active");
        btn.parentElement.classList.remove("active");
      });
      dataInContent.forEach(function (div) {
        div.classList.remove("active");
      });

      let dataInLevelButton = document.querySelectorAll("[data-in-level]");
      let dataInLevelDrop = document.querySelectorAll(
        "[data-in-level-content]"
      );
      dataInLevelButton.forEach(function (div) {
        div.classList.remove("active");
      });
      dataInLevelDrop.forEach(function (div) {
        div.classList.remove("active");
      });

      let menuAttr = this.getAttribute("data-in-menu");

      dataInContent.forEach(function (div) {
        let contentAttr = div.getAttribute("data-in-content");

        if (menuAttr === contentAttr) {
          button.classList.toggle("active");
          button.parentElement.classList.toggle("active");
          div.classList.toggle("active");
        }
      });
    });
  });

if (dataInLevelButton)
  // Перебираем каждую кнопку
  dataInLevelButton.forEach(function (button) {
    // Добавляем обработчик события клика
    button.addEventListener("click", function () {
      // Получаем все div'ы с классом page-menu__menu_drop
      const dataInLevelDrop = document.querySelectorAll(
        "[data-in-level-content]"
      );
      // Удаляем класс active у всех элементов с атрибутами data-in-menu и data-in-content
      dataInLevelButton.forEach(function (btn) {
        btn.classList.remove("active");
        btn.parentElement.classList.remove("active");
      });
      dataInLevelDrop.forEach(function (div) {
        div.classList.remove("active");
      });

      // Получаем значение data-in-menu для текущей кнопки
      let menuAttr = this.getAttribute("data-in-level");

      // Перебираем каждый div
      dataInLevelDrop.forEach(function (div) {
        let contentAttr = div.getAttribute("data-in-level-content");

        // Если значения совпадают, добавляем класс active обоим элементам
        if (menuAttr === contentAttr) {
          button.classList.toggle("active");
          button.parentElement.classList.toggle("active");
          div.classList.toggle("active");
        }
      });
    });
  });

/* if (window.innerWidth > 768) {
  window.addEventListener("scroll", function () {
    let pageMenu = document.querySelector(".page-menu");
    let pageMenuBlock = document.querySelector(".page-menu__block");
    if (window.scrollY > 200) {
      pageMenuBlock.classList.add("active");
    } else {
      pageMenuBlock.classList.remove("active");
      pageMenu.classList.remove("active");
    }
  });
} */

let jsMenuHamburger = document.querySelector(".js-menu-hamburger");

// Функция для проверки размера экрана и управления классами
function toggleMenuClasses() {
  // Получаем элементы .page-menu и .page-menu__block
  let pageMenu = document.querySelector(".page-menu");
  let pageMenuBlock = document.querySelector(".page-menu__block");

  // Если ширина экрана меньше 768 пикселей
  if (window.innerWidth < 768) {
    // Убираем класс .active у элементов .page-menu и .page-menu__block
    if (pageMenu) {
      pageMenu.classList.remove("active");
    }

    if (pageMenuBlock) {
      pageMenuBlock.classList.remove("active");
    } else {
      pageMenuBlock.classList.add("active");
    }
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
toggleMenuClasses();
window.addEventListener("resize", toggleMenuClasses);

if (jsMenuHamburger) {
  jsMenuHamburger.addEventListener("click", function () {
    // Добавляем класс is-active к элементу с классом .js-menu-hamburger
    this.classList.toggle("is-active");

    // Получаем элементы .page-menu и .page-menu__block
    let pageMenu = document.querySelector(".page-menu");
    let pageMenuBlock = document.querySelector(".page-menu__block");

    // Добавляем или убираем класс .active у элемента .page-menu
    if (pageMenu) {
      pageMenu.classList.toggle("active");
    }

    // Если элемент .page-menu существует и имеет класс active
    if (pageMenu && pageMenu.classList.contains("active")) {
      // Добавляем класс .active к элементу .page-menu__block
      pageMenuBlock.classList.add("active");
    } else {
      // Убираем класс .active у элемента .page-menu__block
      pageMenuBlock.classList.remove("active");
    }
  });
}

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

  mainSelectLinksRight.forEach((item) => {
    item.addEventListener("click", (e) => {
      mainMenuJs.classList.remove("active");
      leftMenuJs.classList.remove("active");
      rightMenuJS.classList.add("active");
    });
  });

  mainSelectLinksLeft.forEach((item) => {
    item.addEventListener("click", (e) => {
      mainMenuJs.classList.remove("active");
      leftMenuJs.classList.add("active");
      rightMenuJS.classList.remove("active");
    });
  });

  jsGoIndex.forEach((item) => {
    item.addEventListener("click", () => {
      mainMenuJs.classList.add("active");
      leftMenuJs.classList.remove("active");
      rightMenuJS.classList.remove("active");
    });
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
});

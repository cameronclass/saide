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

  function updateMenuState() {
    var hash = window.location.hash.substring(1);
    var buttons = document.querySelectorAll("[data-menu]");
    var contents = document.querySelectorAll("[data-menu-content]");

    buttons.forEach(function (button) {
      var dataMenu = button.getAttribute("data-menu");
      if (hash === dataMenu) {
        button.classList.add("active");
        /* var parentSecondaryMenu = button.closest(".js-secondary-menu");
      if (parentSecondaryMenu) {
        parentSecondaryMenu.classList.add("active");
      } */
      } else {
        button.classList.remove("active");
      }
    });

    contents.forEach(function (content) {
      var dataMenuContent = content.getAttribute("data-menu-content");
      if (hash === dataMenuContent) {
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
    });
  });

  // Вызываем функцию updateMenuState() один раз, чтобы установить состояние меню при загрузке страницы
  updateMenuState();
});

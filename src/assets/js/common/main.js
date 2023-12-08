document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".header__menu_item");

  // Добавляем обработчик событий click для каждого элемента
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Проверяем наличие класса active у других элементов
      menuItems.forEach(function (otherItem) {
        if (
          otherItem !== item &&
          otherItem.classList.contains("menu-item__active")
        ) {
          otherItem.classList.remove("menu-item__active");
        }
      });

      // Тогглим класс active для текущего элемента
      this.classList.toggle("menu-item__active");
    });
  });

  // Получаем все элементы с классом .menu-item__card
  const menuItemsInside = document.querySelectorAll(
    ".menu-item__cards>.menu-item__card"
  );

  // Функция, которая будет добавлять класс active и скрывать другие элементы
  function toggleActiveClass() {
    // Добавляем класс active текущему элементу
    this.classList.toggle("menu-item__card_active");

    // Проверяем, есть ли у текущего элемента класс active
    var isActive = this.classList.contains("menu-item__card_active");

    // Скрываем/показываем остальные элементы в зависимости от наличия класса active
    menuItemsInside.forEach(function (menuItem) {
      if (menuItem !== this) {
        menuItem.classList.toggle("d-none", isActive);
      }
    }, this);
  }

  // Назначаем обработчик события click для каждого элемента меню
  menuItemsInside.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleActiveClass);
  });

  toggleActiveClass();
});

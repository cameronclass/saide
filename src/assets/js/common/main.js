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
});

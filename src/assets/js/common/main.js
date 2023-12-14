document.addEventListener("DOMContentLoaded", () => {
  /* Главное меню */
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
  /* Главное меню */

  /* Второе меню */

  // Получаем все элементы с классом .menu-item__cards_item
  const cardsItems = document.querySelectorAll(".menu-item__cards_item");

  // Функция, которая будет добавлять/удалять классы menu-item__cards_item_active и d-none
  function toggleActiveCardsItem(event) {
    // Останавливаем всплытие события, чтобы избежать обработки события на внешних родителях
    event.stopPropagation();

    // Добавляем/удаляем класс menu-item__cards_item_active текущему элементу
    this.classList.toggle("menu-item__cards_item_active");

    // Получаем родительский элемент .menu-item__cards
    var cards = this.closest(".menu-item__cards");

    // Переключаем класс .menu-item__cards_active для родительского элемента
    if (cards) {
      cards.classList.toggle(
        "menu-item__cards_active",
        cards.querySelector(".menu-item__cards_item_active") !== null
      );
    }

    // Скрываем/показываем все остальные элементы с классом .menu-item__cards_item
    cardsItems.forEach(function (item) {
      if (item !== this) {
        item.classList.toggle("d-none");
      }
    }, this);

    // Переключаем класс .d-none для первого элемента .menu-item__card
    var firstCard = this.querySelector(".menu-item__card");
    if (firstCard) {
      firstCard.classList.toggle("d-none");
    }

    var firstCards = this.querySelector(".menu-item__cards");
    if (firstCards) {
      firstCards.classList.toggle("d-none");
    }
  }

  // Назначаем обработчик события click для каждого элемента .menu-item__cards_item
  cardsItems.forEach(function (cardsItem) {
    cardsItem.addEventListener("click", toggleActiveCardsItem);
  });
});

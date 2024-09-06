new Swiper(".caseSwiperUp", {
  loop: false,
  spaceBetween: 30,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".case .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".case .swiper-button-next",
    prevEl: ".case .swiper-button-prev",
  },
});

new Swiper(".gallery-block__swiper .swiper", {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: ".gallery-block__swiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".gallery-block__swiper .swiper-button-next",
    prevEl: ".gallery-block__swiper .swiper-button-prev",
  },
});

new Swiper(".photo-studio .swiper", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".photo-studio .swiper-button-next",
    prevEl: ".photo-studio .swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});







document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelectorAll(".header__menu_item");
  e.forEach(function (t) {
    t.addEventListener("click", function () {
      e.forEach(function (e) {
        e !== t &&
          e.classList.contains("menu-item__active") &&
          e.classList.remove("menu-item__active");
      }),
        this.classList.toggle("menu-item__active");
    });
  });
  const t = document.querySelectorAll(".menu-item__cards_item");
  function i(e) {
    e.stopPropagation(), this.classList.toggle("menu-item__cards_item_active");
    var i = this.closest(".menu-item__cards");
    i &&
      i.classList.toggle(
        "menu-item__cards_active",
        null !== i.querySelector(".menu-item__cards_item_active")
      ),
      t.forEach(function (e) {
        e !== this && e.classList.toggle("d-none");
      }, this);
    var c = this.querySelector(".menu-item__card");
    c && c.classList.toggle("d-none");
    var n = this.querySelector(".menu-item__cards");
    n && n.classList.toggle("d-none");
  }
  t.forEach(function (e) {
    e.addEventListener("click", i);
  });
});
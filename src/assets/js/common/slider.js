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

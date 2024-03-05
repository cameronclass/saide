
let caseSwiperUp = new Swiper(".caseSwiperUp", {
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

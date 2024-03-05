/* let caseSwiper = new Swiper(".caseSwiper", {
  loop: false,
  spaceBetween: 0,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

let caseSwiper2 = new Swiper(".caseSwiper2", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: caseSwiper,
  },
}); */

let caseSwiperUp = new Swiper(".caseSwiperUp", {
  loop: false,
  spaceBetween: 0,
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

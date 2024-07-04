const swiper = new Swiper(".swiper", {
  // Optional parameters
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 24,
  keyboard: true,
  mousewheel: true,

  a11y: {
    enabled: true,
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
    firstSlideMessage: "This is the first slide",
    lastSlideMessage: "This is the last slide",
    paginationBulletMessage: "Go to slide {{index}}",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1024: {
      slidesPerView: 2,
    },
  },
});

const initSlider = () => {
  const promoSlider = new Swiper('[data-promo-slider]', {
    slidesPerView: 2,
    spaceBetween: 22,
    grabCursor: true,
    navigation: {
      nextEl: '.promo__swiper-button-next',
      prevEl: '.promo__swiper-button-prev',
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
      },
    },
  });
};

export {initSlider};

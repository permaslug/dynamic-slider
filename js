jQuery(document).ready( function() {

      var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 3,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
		clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    })
});

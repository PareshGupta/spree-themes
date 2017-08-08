var Sliders = function () {}

Sliders.prototype.init = function () {
  this.homeSlider();
  this.productThumbnailSlider();
}

Sliders.prototype.homeSlider = function () {
  $('.homepage-slider').bxSlider({
    auto: true
  });
}

Sliders.prototype.productThumbnailSlider = function () {
  $('#product-thumbnails').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 90,
    slideMargin: 5,
    infiniteLoop: false,
    hideControlOnEnd: true
  });
}

$(function () {
  var sliders = new Sliders();
  sliders.init();
});
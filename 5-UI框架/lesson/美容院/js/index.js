$(document).ready(function() {
	var mySwiper = new Swiper('.swiper-container', {
		loop: true,
		// 如果需要分页器
		pagination: '.swiper-pagination',

		// 如果需要前进后退按钮
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
	});
	//双swiper
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 0
	});
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		initialSlide: 1,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		spaceBetween: 0,
		centeredSlides: true,
		slidesPerView: 3,
		touchRatio: 0.2,
		slideToClickedSlide: true
	});
	galleryTop.params.control = galleryThumbs;
	galleryThumbs.params.control = galleryTop;
});
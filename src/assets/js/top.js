// JavaScript Document
$(function () {
	"use strict";
	var ojbect = {
		init: function () {
			this.sliderMain();
			this.idx_slider1();
			this.main_txt_h2();
		},
		sliderMain: function () {
			$('.slider_main').slick({
				autoplay: true,
				speed: 1000,
				autoplaySpeed: 5000,
				slidesToShow: 1,
				arrows: true,
				fade: true,
				cssEase: 'linear',
				dots: false,
				pauseOnHover: false,
				pauseOnFocus: false,

			});
		},
		idx_slider1: function () {
			var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
//            if (windowWidth > 640) {
	var scrollSpeed = 1;
	var posX = 50;
	setInterval(function () {
		posX -= scrollSpeed;
		$('.idx_slider1').css("background-position", posX + "px 0px");
	}, 50);
//            }
},
};
ojbect.init();
});

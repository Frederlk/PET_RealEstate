import Swiper, { Pagination, EffectFade } from "swiper";

import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    if (document.querySelector(".mainslider")) {
        new Swiper(".mainslider", {
            modules: [Pagination, EffectFade],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            autoHeight: true,
            speed: 800,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },

            pagination: {
                el: ".mainslider-dotts",
                clickable: true,
            },
        });
        let mainsliderImages = document.querySelectorAll(".mainslider__slide-ibg");
        let mainsliderDotts = document.querySelectorAll(".mainslider-dotts .swiper-pagination-bullet");
        for (let index = 0; index < mainsliderImages.length; index++) {
            const mainsliderImage = mainsliderImages[index].querySelector("img").getAttribute("src");
            mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
        }
    }

    if (document.querySelector(".similar-content__items")) {
        new Swiper(".similar-content__items", {
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 0,
            grabCursor: true,
            autoHeight: true,
            speed: 800,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },

                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});

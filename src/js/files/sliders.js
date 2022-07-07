/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination, EffectFade } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

import "../../scss/base/swiper.scss";

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".mainslider")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".mainslider", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Pagination, EffectFade],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            autoHeight: true,
            speed: 800,
            // Эффекты
            effect: "fade",
            fadeEffect: {
                // Параллельная
                // смена прозрачности
                crossFade: true,
            },

            pagination: {
                el: ".mainslider-dotts",
                clickable: true,
            },

            on: {},
        });
        let mainsliderImages = document.querySelectorAll(".mainslider__slide-ibg");
        let mainsliderDotts = document.querySelectorAll(".mainslider-dotts .swiper-pagination-bullet");
        for (let index = 0; index < mainsliderImages.length; index++) {
            const mainsliderImage = mainsliderImages[index].querySelector("img").getAttribute("src");
            mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
        }
    }

    if (document.querySelector(".similar-content__items")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".similar-content__items", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
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

            on: {},
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});

// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей

if (isMobile.any()) {
    let filterLive = document.querySelectorAll(".filter-live__category");
    filterLive.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            item.parentElement.classList.toggle("_active");
        });
    });
}

let feedbackColumn = document.querySelectorAll(".feedback__item");
feedbackColumn.forEach((item) => {
    item.addEventListener("click", function (e) {
        item.parentElement.classList.toggle("_active");
        e.preventDefault();
    });
});

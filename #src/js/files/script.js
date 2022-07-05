
if (isMobile.any()) {
   let filterLive = document.querySelectorAll('.filter-live__category');
   for (let index = 0; index < filterLive.length; index++) {
      const menuParent = filterLive[index];
      menuParent.addEventListener("click", function (e) {
         menuParent.parentElement.classList.toggle('_active');
         e.preventDefault();
      });
   }
};


let feedbackColumn = document.querySelectorAll('.feedback__item');
for (let index = 0; index < feedbackColumn.length; index++) {
   const feedbackItem = feedbackColumn[index];
   feedbackItem.addEventListener("click", function (e) {
      feedbackItem.parentElement.classList.toggle('_active');
      e.preventDefault();
   });
};

if (isMobile.any()) {
   let footerLabel = document.querySelectorAll('.links-footer__label');
   for (let index = 0; index < footerLabel.length; index++) {
      const footerList = footerLabel[index];
      footerList.addEventListener("click", function (e) {
         footerList.parentElement.classList.toggle('_active');
         e.preventDefault();
      });
   };
}

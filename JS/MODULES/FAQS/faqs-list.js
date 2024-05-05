const textBtns = document.querySelectorAll(".faqs-block-question__title");

textBtns.forEach((el) => {
  el.addEventListener("click", (elem) => {
    el.parentNode.classList.toggle("--active");

    if (
      elem.target
        .closest(".faqs-block-quetions__item")
        .classList.contains("--active")
    ) {
      elem.target
        .closest(".faqs-block-quetions__item")
        .querySelector(".faqs-block-question__content").style.maxHeight = `${
        elem.target
          .closest(".faqs-block-quetions__item")
          .querySelector(".faqs-block-question__content>h2").offsetHeight
      }px`;
    } else if (
      !elem.target
        .closest(".faqs-block-quetions__item")
        .classList.contains("--active")
    ) {
      elem.target
        .closest(".faqs-block-quetions__item")
        .querySelector(".faqs-block-question__content").style.maxHeight = `0px`;
    }
  });
});

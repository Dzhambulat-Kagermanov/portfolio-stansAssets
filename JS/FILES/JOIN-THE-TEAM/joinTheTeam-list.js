const listActiveRegion = document.querySelectorAll(".openings-jtt-item__head");
const itemHeightContainer = ".openings-jtt-item__content--container";
const itemHeight = ".openings-jtt-item__content";

listDowning(listActiveRegion, itemHeightContainer, itemHeight);

const textBtns = document.querySelectorAll(".faqs-block-question__title");

function listDowning(btns, itemHeightContainer, itemHeight) {
  btns.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.currentTarget.parentNode.classList.toggle("--active");
      console.log();
      if (event.currentTarget.parentNode.classList.contains("--active")) {
        event.currentTarget.parentNode.querySelector(
          itemHeightContainer
        ).style.maxHeight = `${
          event.currentTarget.parentNode.querySelector(itemHeight).offsetHeight
        }px`;
      } else {
        event.currentTarget.parentNode.querySelector(
          itemHeightContainer
        ).style.maxHeight = "0px";
      }
    });
  });
}

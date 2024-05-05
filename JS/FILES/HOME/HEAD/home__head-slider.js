const sliderBlock = document.querySelector(".home-slider");
const sliderLine = document.querySelector(".home-slider__line");
const sliderItems = document.querySelectorAll(".home-slider__item");

const homeHeadContainer = document.querySelector(".home-container-1");

document.addEventListener("DOMContentLoaded", () => {
  if (sliderBlock) {
    sliderBlock.style.height = homeHeadContainer.offsetHeight;
  }
});

const sliderPosBlock = document.querySelector(
  ".home-h-c-group__sliderPosition"
);
var sliderNowPos = 0;

sliderWidthInit(sliderBlock, sliderItems);

const sliderPosItems = document.querySelectorAll(".--sliderPos");

for (let index = 0; index < sliderPosItems.length; index++) {
  sliderPosItems[index].dataset.sliderPosIndex = index;
}

sliderPosItems.forEach((element) => {
  element.addEventListener("click", (el) => {
    clearInterval(sliderInterval);
    sliderPosItemActivating(el.target, sliderPosItems);
    sliderPositing(el.target, sliderItems, sliderLine);
  });
});

// FUNCTIONS
function sliderWidthInit(sliderBlock, sliderItems) {
  const $sliderPosItem = `<div
  class="home-h-c-group__sliderPosition-item --sliderPos"
></div>`;

  sliderBlock.style.width = sliderItems.length * 100 + "%";

  for (let index = 0; index < sliderItems.length; index++) {
    sliderPosBlock.insertAdjacentHTML("beforeend", $sliderPosItem);
  }
  document
    .querySelectorAll(".--sliderPos")
    [sliderNowPos].classList.add("--active");
}
function sliderPosItemActivating(target, sliderPosItems) {
  sliderPosItems.forEach((el) => {
    el.classList.remove("--active");
  });
  target.classList.add("--active");
}
function sliderPositing(target, sliderItems, sliderLine) {
  let posItemIndex = Number(target.dataset.sliderPosIndex);
  const sliderItemWidth = sliderItems[0].offsetWidth;

  sliderLine.style.transform = `translateX(${
    -sliderItemWidth * posItemIndex
  }px)`;
  sliderNowPos = posItemIndex;
}
function sliderPositingForInterval(sliderItems, sliderPosItems, sliderLine) {
  const sliderItemWidth = sliderItems[0].offsetWidth;

  if (sliderNowPos < sliderItems.length) {
    sliderLine.style.transform = `translateX(${
      -sliderItemWidth * sliderNowPos
    }px)`;
    sliderPosItemActivating(sliderPosItems[sliderNowPos], sliderPosItems);
    sliderNowPos++;
  } else {
    sliderNowPos = 0;
    sliderLine.style.transform = `translateX(${
      -sliderItemWidth * sliderNowPos
    }px)`;
    sliderPosItemActivating(sliderPosItems[sliderNowPos], sliderPosItems);
    sliderNowPos++;
  }
}
function sliderInterval() {
  let sliderIntervalVar = setInterval(() => {
    sliderPositingForInterval(sliderItems, sliderPosItems, sliderLine);
  }, 4000);
}
sliderInterval();

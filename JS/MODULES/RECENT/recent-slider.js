const sliderBtnLeft = document.querySelector(
  ".recent-block-slider__btn" && ".--left"
);
const sliderBtnRight = document.querySelector(
  ".recent-block-slider__btn" && ".--right"
);
const sliderLine = document.querySelector(".recent-block-slider__line");
const sliderItems = document.querySelectorAll(".recent-block-slider__item");
let sliderLinePosSize =
  sliderItems[0].offsetWidth +
  Number(window.getComputedStyle(sliderLine).columnGap.replace("px", ""));
let nowPos = 0;

var visibleItems;
if (window.innerWidth <= 1920 || window.innerWidth > 1920) {
  visibleItems = 3;
}
if (window.innerWidth <= 1280) {
  visibleItems = 2;
}
if (window.innerWidth <= 950) {
  visibleItems = 1;
}
window.addEventListener("resize", () => {
  if (window.innerWidth <= 1920 || window.innerWidth > 1920) {
    visibleItems = 3;
  }
  if (window.innerWidth <= 1280) {
    visibleItems = 2;
  }
  if (window.innerWidth <= 950) {
    visibleItems = 1;
  }
});

sliderBtnRight.addEventListener("click", () => {
  if (nowPos < sliderItems.length - visibleItems) {
    nowPos += 1;
    sliderLine.style.transform = `translateX(${
      sliderLinePosSize * nowPos * -1
    }px)`;
  } else {
    nowPos = 0;
    sliderLine.style.transform = `translateX(${sliderLinePosSize * nowPos}px)`;
  }
});

sliderBtnLeft.addEventListener("click", () => {
  if (nowPos <= 0) {
    nowPos = sliderItems.length - visibleItems;
    sliderLine.style.transform = `translateX(${
      sliderLinePosSize * nowPos * -1
    }px)`;
  } else {
    nowPos -= 1;
    sliderLine.style.transform = `translateX(${
      sliderLinePosSize * nowPos * -1
    }px)`;
  }
});

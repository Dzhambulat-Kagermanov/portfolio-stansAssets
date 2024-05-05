const burgerMenuContainer = document.querySelector(".burgerMenu-container");
const burgerMenuOpenBtn = document.querySelector(
  ".navigation-block__burger-btn " && ".--open"
);
const burgerMenuCloseBtn = document.querySelector(
  ".burgerMenu-block__btn--action" && ".--close"
);

burgerMenuOpenBtn.addEventListener("click", () => {
  burgerMenuContainer.classList.toggle("--active");
});
burgerMenuCloseBtn.addEventListener("click", () => {
  burgerMenuContainer.classList.remove("--active");
});

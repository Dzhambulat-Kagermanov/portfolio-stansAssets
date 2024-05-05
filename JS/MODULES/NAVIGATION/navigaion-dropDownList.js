const navBarListItems = document.querySelectorAll(
  ".navigation-bar__item" && ".--list"
);
const navBarListButtons = document.querySelectorAll(".--list-arrow");

navBarListItems.forEach((el) => {
  el.addEventListener("mouseover", (element) => {
    element.currentTarget.classList.add("--active");
  });
  el.addEventListener("mouseout", (element) => {
    element.currentTarget.classList.remove("--active");
  });
});

const pagesElements = document.querySelectorAll(".articles-blog-group__item");
const pagesBtnsContainer = document.querySelector(
  "articles-blog__group" && ".--btns"
);

pagination(
  pagesElements,
  pagesBtnsContainer,
  "articles-blog-group__item--btn",
  "articles-blog-group__item--btn --none",
  10,
  3,
  "articles-blog-group__item"
);
function pagination(
  // ВСЕ ЭЛЕМЕНТЫ СТРАНИЦЫ ДЛЯ ПАГИНАЦИИ
  pages,

  // КОНТЕЙНЕР В КОТОРОМ БУДУТ ХРАНИТЬСЯ КНОПКИ С ЦИФРАМИ
  pagesQuantityContainer,

  // КЛАСС ПО КОТОРОМУ БУДУТ СОЗДАНЫ КНОПКИ С ЦИФРАМИ
  pagesQuantityBtnClass,

  // КЛАСС ПО КОТОРОМУ БУДЕТ СОЗДАНА КНОПКА С ...
  pagesQuantityBtnMoreClass,

  // СКОЛЬКО СТРАНИЦ ДОЛЖНО БЫТЬ НА ОДНОЙ СТРАНИЦЕ
  visiblePagesOnPage,

  // СКОЛЬКО КНОПОК ДОЛЖНО БЫТЬ ВИДНО ДО ...
  maxVisiblePages,

  // КЛАСС ЭЛЕМЕНТА СТРАНИЦЫ
  pagesItemClass
) {
  let currentPagePostion = 1;
  let pagesQuantity = Math.ceil(pages.length / visiblePagesOnPage);
  let paginationMoreIndicator = false;

  // РАСПРЕДЕЛЕНИЕ ЭЛЕМЕНТОВ ПО visiblePagesOnPage ПУТЁМ СОЗДАНИЯ ДВУМЕРНОГО МАССИВА
  const pagesElements = [[]];
  let arrIndex = 0;
  for (let index = 0; index < pages.length; index++) {
    if (pagesElements[arrIndex].length < visiblePagesOnPage) {
      pagesElements[arrIndex].push(pages[index]);
    } else {
      pagesElements.push([]);
      arrIndex++;
      pagesElements[arrIndex].push(pages[index]);
    }
  }
  pagesElements[currentPagePostion - 1].forEach((element) => {
    element.classList.add("--active");
  });

  for (let index = 1; index <= pagesQuantity; index++) {
    if (index <= maxVisiblePages) {
      pagesQuantityContainer.insertAdjacentHTML(
        "beforeend",
        `<li class="${pagesQuantityBtnClass}">
			  <h2>${index}</h2>
		  </li>`
      );
    } else if (index > maxVisiblePages && paginationMoreIndicator != true) {
      pagesQuantityContainer.insertAdjacentHTML(
        "beforeend",
        `<li class="${pagesQuantityBtnMoreClass}">
				<h2>...</h2>
		  </li>`
      );
      paginationMoreIndicator = true;
    } else if (index > maxVisiblePages && paginationMoreIndicator == true) {
      pagesQuantityContainer.insertAdjacentHTML(
        "beforeend",
        `<li class="${pagesQuantityBtnClass} --last">
				<h2>${pagesQuantity}</h2>
			</li>`
      );
      break;
    }
  }

  const pagesQuantityBtns = document.querySelectorAll(
    `.${pagesQuantityBtnClass}:not(.--none)`
  );

  paginationListPageOnClick(
    pagesQuantityBtns,
    pagesQuantityBtnClass,
    visiblePagesOnPage,
    maxVisiblePages,
    pagesElements,
    pagesItemClass
  );

  function paginationListPageOnClick(
    pagesQuantityBtns,
    pagesQuantityBtnClass,
    visiblePagesOnPage,
    maxVisiblePages,
    pagesElements,
    pagesItemClass
  ) {
    pagesQuantityBtns.forEach((element) => {
      element.addEventListener("click", (event) => {
        if (!event.target.classList.contains(pagesQuantityBtnClass)) {
          document
            .querySelectorAll(`.${pagesItemClass}` && ".--active")
            .forEach((element) => {
              element.classList.remove("--active");
            });

          document
            .querySelectorAll(`.${pagesQuantityBtnClass}` && ".--acive")
            .forEach((el) => {
              el.classList.remove("--active");
            });
          event.target
            .closest(`.${pagesQuantityBtnClass}`)
            .classList.add("--active");

          pagesElements[
            Number(
              event.target
                .closest(`.${pagesQuantityBtnClass}`)
                .querySelector("h2").textContent
            ) - 1
          ].forEach((element) => {
            element.classList.add("--active");
          });
        } else {
          document
            .querySelectorAll(`.${pagesItemClass}` && ".--active")
            .forEach((element) => {
              element.classList.remove("--active");
            });

          document
            .querySelectorAll(`.${pagesQuantityBtnClass}` && ".--acive")
            .forEach((el) => {
              el.classList.remove("--active");
            });
          event.target.classList.add("--active");

          pagesElements[
            Number(event.target.querySelector("h2").textContent) - 1
          ].forEach((element) => {
            element.classList.add("--active");
          });
        }
      });
    });
  }
}

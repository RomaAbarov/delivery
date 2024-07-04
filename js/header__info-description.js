let div = document.querySelector(".header__info-description");
let headerInfo = document.querySelector(".header__info");
let headerInner = document.querySelector(".header__inner");

window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 1023.98px)").matches) {
    div.classList.add("header__info-description-modification");
    headerInner.append(div);
  } else {
    div.classList.remove("header__info-description-modification");
    headerInfo.prepend(div);
  }
});

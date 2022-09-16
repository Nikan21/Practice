"use strict";
let widthWindow = document.documentElement.clientWidth;
let heightWindow = document.documentElement.clientHeight;

//Adaptive change header elements
const ubisoftHeaderLogo = document.querySelector(".navbar-brand");
const headerWrapperMenu = document.querySelector(".header-wrapper-menu");
const headerButton = document.querySelector(".header-button");

if (widthWindow >= 992) {
  headerWrapperMenu.after(ubisoftHeaderLogo);
}

window.addEventListener("resize", changeHeader);

function changeHeader(event) {
  widthWindow = document.documentElement.clientWidth;
  heightWindow = document.documentElement.clientHeight;

  //Adaptive change header elements
  if (widthWindow >= 992) {
    headerWrapperMenu.after(ubisoftHeaderLogo);
  } else {
    headerButton.after(ubisoftHeaderLogo);
  }
}

//Adaptive change size background image in header-menu
const headerToggler = document.querySelector(".header-toggler");
const headerMenu = document.querySelector(".header-menu");

headerToggler.addEventListener("click", checkHeaderMenu);

function checkHeaderMenu(event) {
  let imageWidth = headerMenu.offsetWidth + "px";
  let imageHeight = headerMenu.offsetHeight - 50 + "px";
  if (!headerToggler.classList.contains("collapsed")) {
    headerMenu.style.backgroundSize = `${imageWidth} ${imageHeight}`;
    window.addEventListener("resize", changeBackgroundHeaderImage);
  } else {
    window.removeEventListener("resize", changeBackgroundHeaderImage);
  }

  function changeBackgroundHeaderImage(event) {
    console.log(headerToggler);
    imageWidth = headerMenu.offsetWidth + "px";
    imageHeight = headerMenu.offsetHeight - 50 + "px";
    headerMenu.style.backgroundSize = `${imageWidth} ${imageHeight}`;
  }
}

//Dynamic animation header toggler
const headerTogglerBurger = document.querySelector(".header-toggler-burger");
const headerTogglerCross = document.querySelector(".header-toggler-cross");
headerTogglerBurger.classList.add("test");

headerToggler.addEventListener("click", changeToggler);

function changeToggler(event) {
  if (!event.target.closest("button")) return;

  if (!headerToggler.classList.contains("collapsed")) {
    headerTogglerBurger.style.display = "none";
    headerTogglerCross.style.display = "block";
  }else{
    headerTogglerCross.style.display = "none";
    headerTogglerBurger.style.display = "block";
  }
}

//Remove events
if (widthWindow >= 992) {
  headerToggler.removeEventListener("click", checkHeaderMenu);
}

//Dynamic style for .modal-backdrop(height)
headerButton.addEventListener("click", dynamicModalBack);

function dynamicModalBack(event) {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const windowFullHeight = document.documentElement.scrollHeight;

  modalBackdrop.style.height = windowFullHeight + "px";
}

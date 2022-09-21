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

  if (widthWindow >= 992) {
    headerWrapperMenu.after(ubisoftHeaderLogo);
  } else {
    headerButton.after(ubisoftHeaderLogo);
  }
}

//Adaptive change size background image in header-menu
const headerToggler = document.querySelector(".header-toggler");
const headerMenu = document.querySelector(".header-menu");

window.addEventListener("resize", checkWidthForCheckHeaderMenu);

function checkWidthForCheckHeaderMenu(event) {
  widthWindow = document.documentElement.clientWidth;

  if (widthWindow <= 992) {
    headerToggler.addEventListener("click", checkHeaderMenu);
    window.removeEventListener("resize", checkWidthForCheckHeaderMenu);
  }
}

headerToggler.addEventListener("click", checkHeaderMenu);

function checkHeaderMenu(event) {
  let imageWidth = headerMenu.offsetWidth + "px";
  let imageHeight = headerMenu.offsetHeight - 50 + "px";

  if (!headerToggler.classList.contains("collapsed")) {
    if (widthWindow <= 390)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/noImage.jpg')";
    else if (widthWindow > 390 && widthWindow <= 490)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/altair.jpg')";
    else if (widthWindow > 490 && widthWindow <= 590)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/ezio.jpg')";
    else if (widthWindow > 590 && widthWindow <= 690)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/jacob.jpg')";
    else if (widthWindow > 690 && widthWindow <= 790)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/edward.jpg')";
    else if (widthWindow > 790 && widthWindow <= 890)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/shay.png')";
    else if (widthWindow > 890 && widthWindow <= 992)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/allAssassins.jpg')";

    headerMenu.style.backgroundSize = `${imageWidth} ${imageHeight}`;
    window.addEventListener("resize", changeBackgroundHeaderImage);
  } else {
    window.removeEventListener("resize", changeBackgroundHeaderImage);
  }

  function changeBackgroundHeaderImage(event) {
    imageWidth = headerMenu.offsetWidth + "px";
    imageHeight = headerMenu.offsetHeight - 50 + "px";
    headerMenu.style.backgroundSize = `${imageWidth} ${imageHeight}`;

    if (widthWindow <= 390)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/noImage.jpg')";
    else if (widthWindow > 390 && widthWindow <= 490)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/altair.jpg')";
    else if (widthWindow > 490 && widthWindow <= 590)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/ezio.jpg')";
    else if (widthWindow > 590 && widthWindow <= 690)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/jacob.jpg')";
    else if (widthWindow > 690 && widthWindow <= 790)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/edward.jpg')";
    else if (widthWindow > 790 && widthWindow <= 890)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/shay.png')";
    else if (widthWindow > 890 && widthWindow <= 992)
      headerMenu.style.backgroundImage = "url('./images/Header/headerBackground/allAssassins.jpg')";
  }
}

//Dynamic change header toggler
const headerTogglerBurger = document.querySelector(".header-toggler-burger");
const headerTogglerCross = document.querySelector(".header-toggler-cross");
headerTogglerBurger.classList.add("test");

headerToggler.addEventListener("click", changeToggler);

function changeToggler(event) {
  if (!event.target.closest("button")) return;

  if (!headerToggler.classList.contains("collapsed")) {
    headerTogglerBurger.style.display = "none";
    headerTogglerCross.style.display = "block";
  } else {
    headerTogglerCross.style.display = "none";
    headerTogglerBurger.style.display = "block";
  }
}

//Hide header-wrapper-menu when click on ancor
headerWrapperMenu.addEventListener("click", closeMenu);

function closeMenu(event) {
  const headerWrapperMenuClass = new bootstrap.Collapse(headerWrapperMenu, {
    toggle: false,
  });

  if (!event.target.closest("a")) return;

  headerWrapperMenuClass.hide();
  headerTogglerCross.style.display = "none";
  headerTogglerBurger.style.display = "block";
}

//Dynamic style for .modal-backdrop(height)
headerButton.addEventListener("click", dynamicModalBack);

function dynamicModalBack(event) {
  const modalBackdrop = document.querySelector(".modal-backdrop");
  const windowFullHeight = document.documentElement.scrollHeight;

  modalBackdrop.style.height = windowFullHeight + "px";
}

//First carousel
const left = document.querySelector('.first-carousel-prev')
const right = document.querySelector('.first-carousel-next')
const list = document.querySelector('.first-carousel-gallery')
const listElems = document.querySelectorAll('.first-carousel-card')
const firstCarouselImage = document.querySelectorAll('.first-carousel-image')
let widthSlider = 250 
let countSlides = 1 
let positionSlider = 0 
let margin = 0
let lastSlidePosition = (-widthSlider - margin) * (listElems.length - countSlides)

list.style.transition = 'transform 500ms'

if(widthWindow > 390 && widthWindow < 576) {
  widthSlider = 300
}else if(widthWindow >= 576 && widthWindow < 768){
  widthSlider = 265
  countSlides = 2
  margin = 20
  lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
}else if(widthWindow >= 768 && widthWindow < 992){
  widthSlider = 350
  countSlides = 2
  margin = 40
  lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
}else if(widthWindow >= 992 && widthWindow < 1200){
  widthSlider = 235
  countSlides = 4
  margin = 40
  lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
}else if(widthWindow >= 1200 && widthWindow < 1400){
  widthSlider = 275
  countSlides = 4
  margin = 80
  lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
}else{
  widthSlider = 325
  countSlides = 4
  margin = 80
  lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
}


left.addEventListener('click', moveLeft)

function moveLeft() {
  if(positionSlider === 0) {
    list.style.transform = `translateX(${lastSlidePosition}px)`
    positionSlider = lastSlidePosition
  }else{ 
    positionSlider += widthSlider * countSlides + margin
  list.style.transform = `translateX(${positionSlider}px)`
  }
}

right.addEventListener('click', moveRight)

function moveRight() {
  if(positionSlider === lastSlidePosition) {
    list.style.transform = `translateX(${0}px)`
    positionSlider = 0
  }else{ 
    positionSlider -= widthSlider * countSlides + margin
  list.style.transform = `translateX(${positionSlider}px)`
  }
}

window.addEventListener("resize", changeSizeSlider);

function changeSizeSlider(event) {
  if(widthWindow <= 390) {
    widthSlider = 250 
    countSlides = 1
    margin = 0
    lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
  }else if(widthWindow > 390 && widthWindow < 576) {
    widthSlider = 300 
    countSlides = 1
    margin = 0
    lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
  }else if(widthWindow >= 576 && widthWindow < 768){
    widthSlider = 265
    countSlides = 2
    margin = 20
    lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
  }else if(widthWindow >= 768 && widthWindow < 992){
    widthSlider = 350
    countSlides = 2
    margin = 40
    lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
  }else if(widthWindow >= 992 && widthWindow < 1200){
    widthSlider = 235
    countSlides = 4
    margin = 40
    lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
  }else if(widthWindow >= 1200 && widthWindow < 1400){
    widthSlider = 275
    countSlides = 4
    margin = 80
    lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
  }else{
    widthSlider = 325
    countSlides = 4
    margin = 80
    lastSlidePosition = (-widthSlider - margin / countSlides) * (listElems.length - countSlides)
  } 

  list.style.transform = `translateX(${0}px)`
  positionSlider = 0

  firstCarouselImage.forEach( (item) => {
    item.style.width = widthSlider + 'px'
  })
}


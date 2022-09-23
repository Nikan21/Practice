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
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/noImage.jpg')";
    else if (widthWindow > 390 && widthWindow <= 490)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/altair.jpg')";
    else if (widthWindow > 490 && widthWindow <= 590)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/ezio.jpg')";
    else if (widthWindow > 590 && widthWindow <= 690)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/jacob.jpg')";
    else if (widthWindow > 690 && widthWindow <= 790)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/edward.jpg')";
    else if (widthWindow > 790 && widthWindow <= 890)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/shay.png')";
    else if (widthWindow > 890 && widthWindow <= 992)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/allAssassins.jpg')";

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
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/noImage.jpg')";
    else if (widthWindow > 390 && widthWindow <= 490)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/altair.jpg')";
    else if (widthWindow > 490 && widthWindow <= 590)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/ezio.jpg')";
    else if (widthWindow > 590 && widthWindow <= 690)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/jacob.jpg')";
    else if (widthWindow > 690 && widthWindow <= 790)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/edward.jpg')";
    else if (widthWindow > 790 && widthWindow <= 890)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/shay.png')";
    else if (widthWindow > 890 && widthWindow <= 992)
      headerMenu.style.backgroundImage =
        "url('./images/Header/headerBackground/allAssassins.jpg')";
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
const firstCarouselPrev = document.querySelector(".first-carousel-prev");
const firstCarouselNext = document.querySelector(".first-carousel-next");
const firstCarouselGallery = document.querySelector(".first-carousel-gallery");
const firstCarouselCard = document.querySelectorAll(".first-carousel-card");
const firstCarouselImage = document.querySelectorAll(".first-carousel-image");
let firstWidthSlider, firstCountSlides, firstMargin, firstLastSlidePosition;
let firstPositionSlider = 0;

firstCarouselGallery.style.transition = "transform 500ms";

if (widthWindow <= 390) {
  firstWidthSlider = 250;
  firstCountSlides = 1;
  firstMargin = 0;
  firstLastSlidePosition =
    (-firstWidthSlider - firstMargin / firstCountSlides) *
    (firstCarouselCard.length - firstCountSlides);
} else if (widthWindow > 390 && widthWindow < 576) {
  firstWidthSlider = 300;
  firstCountSlides = 1;
  firstMargin = 0;
  firstLastSlidePosition =
    (-firstWidthSlider - firstMargin / firstCountSlides) *
    (firstCarouselCard.length - firstCountSlides);
} else if (widthWindow >= 576 && widthWindow < 768) {
  firstWidthSlider = 265;
  firstCountSlides = 2;
  firstMargin = 20;
  firstLastSlidePosition =
    (-firstWidthSlider - firstMargin / firstCountSlides) *
    (firstCarouselCard.length - firstCountSlides);
} else if (widthWindow >= 768 && widthWindow < 992) {
  firstWidthSlider = 350;
  firstCountSlides = 2;
  firstMargin = 40;
  firstLastSlidePosition =
    (-firstWidthSlider - firstMargin / firstCountSlides) *
    (firstCarouselCard.length - firstCountSlides);
} else if (widthWindow >= 992 && widthWindow < 1200) {
  firstWidthSlider = 235;
  firstCountSlides = 4;
  firstMargin = 40;
  firstLastSlidePosition =
    (-firstWidthSlider - firstMargin / firstCountSlides) *
    (firstCarouselCard.length - firstCountSlides);
} else if (widthWindow >= 1200 && widthWindow < 1400) {
  firstWidthSlider = 275;
  firstCountSlides = 4;
  firstMargin = 80;
  firstLastSlidePosition =
    (-firstWidthSlider - firstMargin / firstCountSlides) *
    (firstCarouselCard.length - firstCountSlides);
} else {
  firstWidthSlider = 325;
  firstCountSlides = 4;
  firstMargin = 80;
  firstLastSlidePosition =
    (-firstWidthSlider - firstMargin / firstCountSlides) *
    (firstCarouselCard.length - firstCountSlides);
}

console.log(firstCarouselPrev);
firstCarouselPrev.addEventListener("click", moveLeftFirstSlider);

function moveLeftFirstSlider() {
  if (firstPositionSlider === 0) {
    firstCarouselGallery.style.transform = `translateX(${firstLastSlidePosition}px)`;
    firstPositionSlider = firstLastSlidePosition;
  } else {
    firstPositionSlider += firstWidthSlider * firstCountSlides + firstMargin;
    firstCarouselGallery.style.transform = `translateX(${firstPositionSlider}px)`;
  }
}

firstCarouselNext.addEventListener("click", moveRightFirstSlider);

function moveRightFirstSlider() {
  if (firstPositionSlider === firstLastSlidePosition) {
    firstCarouselGallery.style.transform = `translateX(${0}px)`;
    firstPositionSlider = 0;
  } else {
    firstPositionSlider -= firstWidthSlider * firstCountSlides + firstMargin;
    firstCarouselGallery.style.transform = `translateX(${firstPositionSlider}px)`;
  }
}

window.addEventListener("resize", changeSizeSlider);

function changeSizeSlider(event) {
  if (widthWindow <= 390) {
    firstWidthSlider = 250;
    firstCountSlides = 1;
    firstMargin = 0;
    firstLastSlidePosition =
      (-firstWidthSlider - firstMargin / firstCountSlides) *
      (firstCarouselCard.length - firstCountSlides);
  } else if (widthWindow > 390 && widthWindow < 576) {
    firstWidthSlider = 300;
    firstCountSlides = 1;
    firstMargin = 0;
    firstLastSlidePosition =
      (-firstWidthSlider - firstMargin / firstCountSlides) *
      (firstCarouselCard.length - firstCountSlides);
  } else if (widthWindow >= 576 && widthWindow < 768) {
    firstWidthSlider = 265;
    firstCountSlides = 2;
    firstMargin = 20;
    firstLastSlidePosition =
      (-firstWidthSlider - firstMargin / firstCountSlides) *
      (firstCarouselCard.length - firstCountSlides);
  } else if (widthWindow >= 768 && widthWindow < 992) {
    firstWidthSlider = 350;
    firstCountSlides = 2;
    firstMargin = 40;
    firstLastSlidePosition =
      (-firstWidthSlider - firstMargin / firstCountSlides) *
      (firstCarouselCard.length - firstCountSlides);
  } else if (widthWindow >= 992 && widthWindow < 1200) {
    firstWidthSlider = 235;
    firstCountSlides = 4;
    firstMargin = 40;
    firstLastSlidePosition =
      (-firstWidthSlider - firstMargin / firstCountSlides) *
      (firstCarouselCard.length - firstCountSlides);
  } else if (widthWindow >= 1200 && widthWindow < 1400) {
    firstWidthSlider = 275;
    firstCountSlides = 4;
    firstMargin = 80;
    firstLastSlidePosition =
      (-firstWidthSlider - firstMargin / firstCountSlides) *
      (firstCarouselCard.length - firstCountSlides);
  } else {
    firstWidthSlider = 325;
    firstCountSlides = 4;
    firstMargin = 80;
    firstLastSlidePosition =
      (-firstWidthSlider - firstMargin / firstCountSlides) *
      (firstCarouselCard.length - firstCountSlides);
  }

  firstCarouselGallery.style.transform = `translateX(${0}px)`;
  firstPositionSlider = 0;

  firstCarouselImage.forEach((item) => {
    item.style.width = firstWidthSlider + "px";
  });
}

//Second carousel
const secondCarouselPrev = document.querySelector(".second-carousel-prev");
const secondCarouselNext = document.querySelector(".second-carousel-next");
const secondCarouselGallery = document.querySelector(
  ".second-carousel-gallery"
);
const secondCarouselCard = document.querySelectorAll(".second-carousel-card");
const secondCarouselImage = document.querySelectorAll(".second-carousel-image");
let secondWidthSlider, secondCountSlides, secondMargin, secondLastSlidePosition;
let secondPositionSlider = 0;

const secondCarouselCurrentPage = document.querySelector(
  ".second-carousel-current-page"
);
let secondCarouselFirstPage = 1;
let secondCarouselLastPage = secondCarouselCard.length;
secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;

const secondCarouselButtonWrapper = document.querySelector(
  ".second-carousel-button-wrapper"
);

secondCarouselGallery.style.transition = "transform 500ms";

if (widthWindow <= 390) {
  secondWidthSlider = 250;
  secondCountSlides = 1;
  secondMargin = 0;
  secondLastSlidePosition =
    (-secondWidthSlider - secondMargin / secondCountSlides) *
    (secondCarouselCard.length - secondCountSlides);
  secondCarouselLastPage = secondCarouselLastPage / secondCountSlides;
  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;
  secondCarouselButtonWrapper.style.display = "none";
} else if (widthWindow > 390 && widthWindow < 576) {
  secondWidthSlider = 300;
  secondCountSlides = 1;
  secondMargin = 0;
  secondLastSlidePosition =
    (-secondWidthSlider - secondMargin / secondCountSlides) *
    (secondCarouselCard.length - secondCountSlides);
  secondCarouselLastPage = secondCarouselLastPage / secondCountSlides;
  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;
  secondCarouselButtonWrapper.style.display = "none";
} else if (widthWindow >= 576 && widthWindow < 768) {
  secondWidthSlider = 265;
  secondCountSlides = 2;
  secondMargin = 20;
  secondLastSlidePosition =
    (-secondWidthSlider - secondMargin / secondCountSlides) *
    (secondCarouselCard.length - secondCountSlides);
  secondCarouselLastPage = secondCarouselLastPage / secondCountSlides;
  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;
  secondCarouselButtonWrapper.style.display = "none";
} else if (widthWindow >= 768 && widthWindow < 992) {
  secondWidthSlider = 350;
  secondCountSlides = 2;
  secondMargin = 40;
  secondLastSlidePosition =
    (-secondWidthSlider - secondMargin / secondCountSlides) *
    (secondCarouselCard.length - secondCountSlides);
  secondCarouselLastPage = secondCarouselLastPage / secondCountSlides;
  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;
  secondCarouselButtonWrapper.style.display = "none";
} else if (widthWindow >= 992 && widthWindow < 1200) {
  secondWidthSlider = 235;
  secondCountSlides = 4;
  secondMargin = 40;
  secondLastSlidePosition =
    (-secondWidthSlider - secondMargin / secondCountSlides) *
    (secondCarouselCard.length - secondCountSlides);
  secondCarouselLastPage = secondCarouselLastPage / secondCountSlides;
  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;
  secondCarouselCurrentPage.style.display = "none";
  secondCarouselButtonWrapper.style.display = "block";
} else if (widthWindow >= 1200 && widthWindow < 1400) {
  secondWidthSlider = 275;
  secondCountSlides = 4;
  secondMargin = 80;
  secondLastSlidePosition =
    (-secondWidthSlider - secondMargin / secondCountSlides) *
    (secondCarouselCard.length - secondCountSlides);
  secondCarouselLastPage = secondCarouselLastPage / secondCountSlides;
  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;
  secondCarouselCurrentPage.style.display = "none";
  secondCarouselButtonWrapper.style.display = "block";
} else {
  secondWidthSlider = 325;
  secondCountSlides = 4;
  secondMargin = 80;
  secondLastSlidePosition =
    (-secondWidthSlider - secondMargin / secondCountSlides) *
    (secondCarouselCard.length - secondCountSlides);
  secondCarouselLastPage = secondCarouselLastPage / secondCountSlides;
  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;
  secondCarouselCurrentPage.style.display = "none";
  secondCarouselButtonWrapper.style.display = "block";
}

secondCarouselPrev.addEventListener("click", moveLeftSecondSlider);

function moveLeftSecondSlider() {
  if (secondPositionSlider === 0) {
    secondCarouselGallery.style.transform = `translateX(${secondLastSlidePosition}px)`;
    secondPositionSlider = secondLastSlidePosition;
    secondCarouselFirstPage = secondCarouselLastPage;
  } else {
    secondPositionSlider +=
      secondWidthSlider * secondCountSlides + secondMargin;
    secondCarouselGallery.style.transform = `translateX(${secondPositionSlider}px)`;
    secondCarouselFirstPage -= 1;
  }

  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;
}

secondCarouselNext.addEventListener("click", moveRightSecondSlider);

function moveRightSecondSlider() {
  if (secondPositionSlider === secondLastSlidePosition) {
    secondCarouselGallery.style.transform = `translateX(${0}px)`;
    secondPositionSlider = 0;
    secondCarouselFirstPage = 1;
  } else {
    secondPositionSlider -=
      secondWidthSlider * secondCountSlides + secondMargin;
    secondCarouselGallery.style.transform = `translateX(${secondPositionSlider}px)`;
    secondCarouselFirstPage += 1;
  }

  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;
}

window.addEventListener("resize", changeSizeSlider);

function changeSizeSlider(event) {
  if (widthWindow <= 390) {
    secondWidthSlider = 250;
    secondCountSlides = 1;
    secondMargin = 0;
    secondLastSlidePosition =
      (-secondWidthSlider - secondMargin / secondCountSlides) *
      (secondCarouselCard.length - secondCountSlides);
    secondCarouselLastPage = 12;
    secondCarouselCurrentPage.style.display = "block";
    secondCarouselButtonWrapper.style.display = "none";
  } else if (widthWindow > 390 && widthWindow < 576) {
    secondWidthSlider = 300;
    secondCountSlides = 1;
    secondMargin = 0;
    secondLastSlidePosition =
      (-secondWidthSlider - secondMargin / secondCountSlides) *
      (secondCarouselCard.length - secondCountSlides);
    secondCarouselLastPage = 12;
    secondCarouselCurrentPage.style.display = "block";
    secondCarouselButtonWrapper.style.display = "none";
  } else if (widthWindow >= 576 && widthWindow < 768) {
    secondWidthSlider = 265;
    secondCountSlides = 2;
    secondMargin = 20;
    secondLastSlidePosition =
      (-secondWidthSlider - secondMargin / secondCountSlides) *
      (secondCarouselCard.length - secondCountSlides);
    secondCarouselLastPage = 6;
    secondCarouselCurrentPage.style.display = "block";
    secondCarouselButtonWrapper.style.display = "none";
  } else if (widthWindow >= 768 && widthWindow < 992) {
    secondWidthSlider = 350;
    secondCountSlides = 2;
    secondMargin = 40;
    secondLastSlidePosition =
      (-secondWidthSlider - secondMargin / secondCountSlides) *
      (secondCarouselCard.length - secondCountSlides);
    secondCarouselLastPage = 6;
    secondCarouselCurrentPage.style.display = "block";
    secondCarouselButtonWrapper.style.display = "none";
  } else if (widthWindow >= 992 && widthWindow < 1200) {
    secondWidthSlider = 235;
    secondCountSlides = 4;
    secondMargin = 40;
    secondLastSlidePosition =
      (-secondWidthSlider - secondMargin / secondCountSlides) *
      (secondCarouselCard.length - secondCountSlides);
    secondCarouselLastPage = 3;
    secondCarouselCurrentPage.style.display = "none";
    secondCarouselButtonWrapper.style.display = "block";
  } else if (widthWindow >= 1200 && widthWindow < 1400) {
    secondWidthSlider = 275;
    secondCountSlides = 4;
    secondMargin = 80;
    secondLastSlidePosition =
      (-secondWidthSlider - secondMargin / secondCountSlides) *
      (secondCarouselCard.length - secondCountSlides);
    secondCarouselLastPage = 3;
    secondCarouselCurrentPage.style.display = "none";
    secondCarouselButtonWrapper.style.display = "block";
  } else {
    secondWidthSlider = 325;
    secondCountSlides = 4;
    secondMargin = 80;
    secondLastSlidePosition =
      (-secondWidthSlider - secondMargin / secondCountSlides) *
      (secondCarouselCard.length - secondCountSlides);
    secondCarouselLastPage = 3;
    secondCarouselCurrentPage.style.display = "none";
    secondCarouselButtonWrapper.style.display = "block";
  }

  secondCarouselGallery.style.transform = `translateX(${0}px)`;
  secondPositionSlider = 0;
  secondCarouselFirstPage = 1;
  secondCarouselCurrentPage.textContent = `${secondCarouselFirstPage} iз ${secondCarouselLastPage}`;

  secondCarouselImage.forEach((item) => {
    item.style.width = secondWidthSlider - 10 + "px";
  });
}

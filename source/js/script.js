// Слайдер

var buttonsArray = document.querySelectorAll(".example__toggle");
var slidesArray = document.querySelectorAll(".example__slide");
var exampleState = document.querySelector(".example__state");
var exampleStateList = ["example__state--before", "example__state--after"];

if (buttonsArray.length === 2 && buttonsArray.length === slidesArray.length) {
  var clearCurrent = function () {
    slidesArray[0].classList.remove("example__slide--current");
    slidesArray[1].classList.remove("example__slide--current");
    exampleState.classList.remove(exampleStateList[0], exampleStateList[1]);
  };

  var setCurrent = function (index) {
    clearCurrent();
    slidesArray[index].classList.add("example__slide--current");
    exampleState.classList.add(exampleStateList[index]);
  }

  buttonsArray[0].addEventListener("click", function () {
    setCurrent(0);
  });

  buttonsArray[1].addEventListener("click", function () {
    setCurrent(1);
  });
}

// Мобильное меню
var buttonMenu = document.querySelector(".main-nav__toggle");
var menuToggle = document.querySelector(".main-nav__list");

if (buttonMenu && menuToggle) {
  buttonMenu.addEventListener("click", function () {
    buttonMenu.classList.toggle("main-nav__toggle--close");
    menuToggle.classList.toggle("main-nav__list--hide");
  })
};

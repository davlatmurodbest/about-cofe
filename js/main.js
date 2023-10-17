var elButton = document.querySelector(".btn") 
var elButtonenter = document.querySelector(".btn__enter") 
var elButtonexit = document.querySelector(".btn__exit") 
var elButtonbox = document.querySelector(".header__box") 

elButton.addEventListener ("click", () =>  {
    elButtonenter.classList.toggle ("btn__enter-class")
    elButtonexit.classList.toggle ("btn__exit-class")
    elButtonbox.classList.toggle ("header__block")
} )
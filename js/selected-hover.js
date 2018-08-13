"use strict";

(function () {
  var cards = document.querySelectorAll(".products-list__card-layer");

  function removeHoverClass (elem, elemClass) {
    if (elem.classList.contains(elemClass)) {
      elem.classList.remove(elemClass);
      return;
    }
  }

  function mouseLeaveHandler (evt) {
    evt.target.removeEventListener("mouseout", mouseLeaveHandler);
    if (evt.type == "mouseout") {
      removeHoverClass(evt.target, "layer--selected-hover");
      evt.target.classList.add("layer--selected-hover");
    } 
  }

  function handler (evt) {      
    removeHoverClass(evt.target, "layer--selected-hover");      
    evt.target.addEventListener("mouseout", mouseLeaveHandler);
  } 

  // cards.forEach(function (card) {
  //     card.addEventListener("click", handler);
  // });    
  //Не работает для IE 11 ¯\_(ツ)_/¯

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", handler);
  }
})();
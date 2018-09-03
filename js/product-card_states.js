(function() {
  var KEY_CODE = {
    ENTER: 13
  };
  var cards = document.querySelectorAll('.product-card');
  var cardBuyButtons = document.querySelectorAll('.product-card__button');

  var toggleClasses = function (elem, firstClass, secondClass) {
    elem.classList.toggle(firstClass);
    elem.classList.toggle(secondClass);
  };

  var toggleElems = function (elem1, elem2, className) {
    elem1.classList.toggle(className);
    elem2.classList.toggle(className);
  };

  function handleCardButtonClick(evt) {
    var element = evt.target.parentNode.previousElementSibling;
    toggleElems(element, element.nextElementSibling, 'visually-hidden');
    toggleClasses(element.previousElementSibling, 'product-card--selected', 'product-card--default');
  }

  function handleCardClick(evt) {
    var description = evt.target.nextElementSibling;
    toggleElems(description, description.nextElementSibling, 'visually-hidden');
    toggleClasses(evt.target, 'product-card--selected', 'product-card--default');
  }

  function handleCardKeyDown(evt) {  
    if (evt.keyCode === KEY_CODE.ENTER) {
      var description = this.nextElementSibling;
      toggleElems(description, description.nextElementSibling, 'visually-hidden');
      toggleClasses(this, 'product-card--selected', 'product-card--default');
    }
  }

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', handleCardClick);
    cards[i].addEventListener('keydown', handleCardKeyDown);
    if (cards[i].classList.contains('product-card--disabled')) {
      var buyMe = cards[i].nextElementSibling.nextElementSibling;
      toggleElems(buyMe, buyMe.nextElementSibling, 'visually-hidden');
    }
    cardBuyButtons[i].addEventListener('click', handleCardButtonClick);
  } 
})();
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

  function handleCardButtonClick(evt) {
    var element = evt.target.parentNode.previousElementSibling;
    toggleClasses(element, 'product-card--selected', 'product-card--default');
  }

  function handleCardClick(evt) {
    toggleClasses(evt.target, 'product-card--selected', 'product-card--default');
  }

  function handleCardKeyDown(evt) {  
    if (evt.keyCode === KEY_CODE.ENTER) {
      toggleClasses(this, 'product-card--selected', 'product-card--default');
    }
  }

  cards.forEach(function(card) {
    card.addEventListener('click', handleCardClick);
    card.addEventListener('keydown', handleCardKeyDown);
  });

  cardBuyButtons.forEach(function(button) {
    button.addEventListener('click', handleCardButtonClick);
  }); 
})();
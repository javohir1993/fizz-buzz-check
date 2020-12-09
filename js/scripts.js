var elContainer = document.querySelector('.container');
var elForm = elContainer.querySelector('.form');
var elInput = elContainer.querySelector('.input');
var elResultDiv = elContainer.querySelector('.result-div');

elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  var inputValue = elInput.value;

  if (inputValue % 5 === 0 && inputValue % 3 === 0) {
    elResultDiv.textContent = `FizzBuzz`
  } else if (inputValue % 3 === 0) {
    elResultDiv.textContent = `Fizz`;
  } else if (inputValue % 5 === 0) {
    elResultDiv.textContent = `Buzz`;
  } else {
    elResultDiv.textContent = inputValue;
  }

});

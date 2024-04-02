const input = document.querySelector('#fizzbuzz-input');
const button = document.querySelector('#fizzbuzz-button');
const text = document.querySelector('#fizzbuzz-text');
const dayInput = document.querySelector('#days-input');
const dayButton = document.querySelector('#days-button');
const dayText = document.querySelector('#days-text');

button.addEventListener('click', () => {
  const inputValue = input.value;
  if (inputValue % 3 === 0 && inputValue % 5 === 0) {
    text.textContent = `FizzBuzz`;
    text.classList.remove('hidden');
  } else if (inputValue % 3 === 0) {
    text.textContent = `Fizz`;
    text.classList.remove('hidden');
  } else if (inputValue % 5 === 0) {
    text.textContent = `Buzz`;
    text.classList.remove('hidden');
  }
});

dayButton.addEventListener('click', () => {
  const dayInputValue = Number(dayInput.value);

  if (dayInputValue > 7 || dayInputValue < 0) {
    dayText.textContent = `1 dan 7 gacham raqam kiriting !`;
    dayText.classList.remove('hidden');
  } else if (dayInputValue === 1) {
    dayText.textContent = `Dushanba`;
    dayText.classList.remove('hidden');
  } else if (dayInputValue === 2) {
    dayText.textContent = `Seshanba`;
    dayText.classList.remove('hidden');
  } else if (dayInputValue === 3) {
    dayText.textContent = `Chorshanba`;
    dayText.classList.remove('hidden');
  } else if (dayInputValue === 4) {
    dayText.textContent = `Payshanba`;
    dayText.classList.remove('hidden');
  } else if (dayInputValue === 5) {
    dayText.textContent = `Juma`;
    dayText.classList.remove('hidden');
  } else if (dayInputValue === 6) {
    dayText.textContent = `Shanba`;
    dayText.classList.remove('hidden');
  } else if (dayInputValue === 7) {
    dayText.textContent = `Oddi`;
    dayText.classList.remove('hidden');
  } else if (dayInputValue > 7) {
    dayText.textContent = `1 dan 7 gacham raqam kiriting !`;
  }
});

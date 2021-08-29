const lowercaseCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const symbolCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const form = document.querySelector(".form");
const showPassword = document.querySelector(".show-password");
const copyBtn = document.querySelector(".copy-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let password = "";

  const lowercase = e.target.lowercase.checked ? lowercaseCharacters : [];
  const uppercase = e.target.uppercase.checked ? uppercaseCharacters : [];
  const symbol = e.target.symbol.checked ? symbolCharacters : [];
  const number = e.target.number.checked ? numberCharacters : [];

  const passwordLength = e.target.passwordLength.value;

  const characters = [...lowercase, ...uppercase, ...symbol, ...number];

  if (characters.length == 0) {
    alert("Please Select The Character Type");
    return false;
  }

  for (let index = 0; index < passwordLength; index++) {
    password += getRandomePasswordCharacters(characters);
  }

  showPassword.textContent = password;
});

function getRandomePasswordCharacters(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let range = document.createRange();
  range.selectNode(showPassword);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("data copied");
});

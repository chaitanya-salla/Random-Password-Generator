const slider = document.getElementById("range");
const passwordTxtBox = document.getElementById("passBox");
const passwordLength = document.getElementById("passwordLength");
const loweCase = document.getElementById("lower");
const upperCase = document.getElementById("upper");
const numbers = document.getElementById("number");
const specialSymbols = document.getElementById("symbol");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const nums = "0123456789";
const lowerLetterts = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()+-=~";

passwordLength.textContent = slider.value;
const currentPassLegth = slider.addEventListener("input", () => {
  passwordLength.textContent = slider.value;
});

generateBtn.addEventListener("click", () => {
  passwordTxtBox.value = generatedPassword();
});

copyBtn.addEventListener("click", () => {
  if (passwordTxtBox.value !== "")
    navigator.clipboard.writeText(passwordTxtBox.value);
});

const generatedPassword = () => {
  let password = "";
  let allChars = "";

  allChars += loweCase.checked ? lowerLetterts : "";
  allChars += upperCase.checked ? lowerLetterts.toUpperCase() : "";
  allChars += numbers.checked ? nums : "";
  allChars += specialSymbols.checked ? symbols : "";

  if (allChars === "") {
    alert("You must select atleast one option !!");
    return "";
  }

  console.log(allChars);
  for (let i = 0; i < slider.value; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
    console.log(password);
  }

  return password;
};

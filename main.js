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
  copyBtn.innerText = "content_copy";
  passwordTxtBox.value = generatedPassword();
});

copyBtn.addEventListener("click", () => {
  if (passwordTxtBox.value !== "") {
    navigator.clipboard.writeText(passwordTxtBox.value);
    copyBtn.innerText = "check";
  }
});

const generatedPassword = () => {
  let password = "";

  if (
    !loweCase.checked &&
    !upperCase.checked &&
    !numbers.checked &&
    !specialSymbols.checked
  ) {
    alert("You must select atleast one option !!");
    return "";
  }

  for (let i = 0; i < slider.value; i++) {
    if (loweCase.checked && password.length < slider.value)
      password +=
        lowerLetterts[Math.floor(Math.random() * lowerLetterts.length)];

    if (upperCase.checked && password.length < slider.value)
      password +=
        lowerLetterts[
          Math.floor(Math.random() * lowerLetterts.length)
        ].toUpperCase();

    if (numbers.checked && password.length < slider.value)
      password += nums[Math.floor(Math.random() * nums.length)];

    if (specialSymbols.checked && password.length < slider.value)
      password += symbols[Math.floor(Math.random() * symbols.length)];
  }

  return password;
};

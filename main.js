// main.js

// Hesap makinesinin durumunu takip etmek için değişkenleri tanımla
let currentInput = "";
let currentResult = 0;
let operator = "";

// Sonuç gösterimini güncellemek için HTML düğmelerini ve sonuç ekranını seç
const resultDisplay = document.querySelector(".result");
const numberButtons = document.querySelectorAll(".buttonNumber");
const symbolButtons = document.querySelectorAll(".buttonSymbol");
const clearButton = document.querySelector(".buttonClear");
const getResultButton = document.querySelector(".getResult");

// Sayı düğmeleri için olay dinleyicilerini ekle
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.innerText;
    updateResultDisplay();
  });
});

// Sembol düğmeleri (operatörler ve özel semboller) için olay dinleyicilerini ekle
symbolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentInput !== "") {
      if (currentResult === 0) {
        currentResult = parseFloat(currentInput);
      } else {
        performCalculation();
      }
      operator = button.innerText;
      currentInput = "";
      updateResultDisplay();
    }
  });
});

// Temizle düğmesi için olay dinleyici ekle
clearButton.addEventListener("click", () => {
  clearCalculator();
  updateResultDisplay();
});

// Eşittir düğmesi için olay dinleyici ekle
getResultButton.addEventListener("click", () => {
  if (currentInput !== "") {
    performCalculation();
    operator = "";
    currentInput = "";
    updateResultDisplay();
  }
});

// Sonucu güncellemek için işlev
function updateResultDisplay() {
  resultDisplay.innerText = currentInput || currentResult.toString();
}

// Hesaplama işlemini gerçekleştiren işlev
function performCalculation() {
  const inputNumber = parseFloat(currentInput);
  switch (operator) {
    case "+":
      currentResult += inputNumber;
      break;
    case "-":
      currentResult -= inputNumber;
      break;
    case "*":
      currentResult *= inputNumber;
      break;
    case "/":
      if (inputNumber !== 0) {
        currentResult /= inputNumber;
      } else {
        clearCalculator();
        resultDisplay.innerText = "Hata";
        return;
      }
      break;
    case "%":
      currentResult %= inputNumber;
      break;
  }
}

// Hesap makinesini temizlemek için işlev
function clearCalculator() {
  currentInput = "";
  currentResult = 0;
  operator = "";
}

// Sonucu başlat
updateResultDisplay();

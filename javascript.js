
let displayText;
var firstNumber = "";
var secondNumber = 0;
var operator = "";
var operatorActive = false;
var firstNumberGiven = false;
var secondNumberCleared = false; 
var continutation = false;
var result = 0;
var resultString = "";
var firstNumberInt = 0;
var secondNumberInt = 0;
var initialClear = false;


//RANDOM VARIABLES

function add (a,b){
    return a+b
}

function subtract (a,b){
    return a-b
}

function multiply (a,b){
    return a*b
}

function divide (a,b){
    return a/b
}




function operate(operator, numberOne, numberTwo){
    if (operator == "+"){
        return add(numberOne,numberTwo)
    }
    else if (operator === "-"){
        return subtract(numberOne,numberTwo)
    }
    else if (operator === "X"){
        return multiply(numberOne,numberTwo)
    }
    else if (operator === "÷"){
        return divide(numberOne,numberTwo)
    }
}



const container = document.querySelector(".primaryContainer")


const mainScreen = document.querySelector(".mainScreen")

for (let i = 0; i < 6; i++) {
    const screenRow = document.createElement('div');
    screenRow.classList.add('gridRow');
    mainScreen.appendChild(screenRow);
}

const rows = document.querySelectorAll('.gridRow');

rows.forEach((row, index) => {
    // Example of manipulating rows based on their index
    if (index === 0) {
        displayText = document.createElement('span')
        displayText.classList.add("displayText")
        row.classList.add("rowZero")
        displayText.textContent = "0"
        row.appendChild(displayText)
        row.style.backgroundColor = 'white'; 
        row.style.height = '250px' // Change the background color of the first row
    }
    else if (index === 1){
        row.classList.add("rowOne")
        for (let j = 0; j < 2; j++){
            const screenButton = document.createElement('button');
            screenButton.classList.add("screenButton");
            row.appendChild(screenButton);
        }
    }
    else if (index > 1 && index < 5) {
        for (let j = 0; j < 4; j++){
            const screenButton = document.createElement('button');
            screenButton.classList.add("screenButton");
            screenButton.textContent = "0";
            row.appendChild(screenButton);
        }
    } else if (index === 5){
        row.classList.add("rowFive")
        for (let j = 0; j < 2; j++){
            const screenButton = document.createElement('button');
            screenButton.classList.add("screenButton");
            screenButton.textContent = "0";
            row.appendChild(screenButton);
        }
    }
  });

const screenButtons = document.querySelectorAll('.screenButton');
screenButtons.forEach((button, index) => {
    const buttonSymbols = ["AC","÷","7","8","9","X","4","5","6","-","1","2","3","+","0","="]
    button.textContent = buttonSymbols[index]
    button.addEventListener("click", () => {
        buttonClicked(button.textContent)
    })
    if (index === 0){
        button.classList.add("AC")  
    }
    if (index === 14){
        button.classList.add("Zero")
    }
    for (let i = 1; i < 20; i += 4){
        if (index === i){
            button.classList.add("orange")
        }
    }
})

function buttonClicked (buttonValue) {
    if (!initialClear){
        displayText.textContent = "0";
        firstNumber = "";
        firstNumberGiven = false;
        secondNumber = "";
        operator = "";
        operatorActive = false;
        secondNumberCleared = false;
        continutation = false;
        initialClear = true;
    }
    if (displayText.textContent === "0"){
        displayText.textContent = ""
    }
    if (!firstNumberGiven) {
        if (buttonValue === "1" && firstNumber.length < 10){
            firstNumber += "1";
            displayText.textContent += "1";
        }
        else if (buttonValue === "2" && firstNumber.length < 10){
            firstNumber += "2";
            displayText.textContent += "2";
        }
        else if (buttonValue === "3" && firstNumber.length < 10){
            firstNumber += "3";
            displayText.textContent += "3";
        }
        else if (buttonValue === "4" && firstNumber.length < 10){
            firstNumber += "4";
            displayText.textContent += "4";
        }
        else if (buttonValue === "5" && firstNumber.length < 10){
            firstNumber += "5";
            displayText.textContent += "5";
        }
        else if (buttonValue === "6" && firstNumber.length < 10){
            firstNumber += "6";
            displayText.textContent += "6";
        }
        else if (buttonValue === "7" && firstNumber.length < 10){
            firstNumber += "7";
            displayText.textContent += "7";
        }
        else if (buttonValue === "8" && firstNumber.length < 10){
            firstNumber += "8";
            displayText.textContent += "8";
        }
        else if (buttonValue === "9" && firstNumber.length < 10){
            firstNumber += "9";
            displayText.textContent += "9";
        }
        else if (buttonValue === "0" && firstNumber.length < 10){
            firstNumber += "0";
            displayText.textContent += "0";
        }
    }
    else if (firstNumberGiven && operatorActive){
        if (displayText.textContent !== "" && !secondNumberCleared){
            displayText.textContent = "";
            secondNumberCleared = true;
        }
        if (buttonValue === "1" && secondNumber.length < 10){
            secondNumber += "1";
            displayText.textContent += "1";
        }
        else if (buttonValue === "2" && secondNumber.length < 10){
            secondNumber += "2";
            displayText.textContent += "2";
        }
        else if (buttonValue === "3" && secondNumber.length < 10){
            secondNumber += "3";
            displayText.textContent += "3";
        }
        else if (buttonValue === "4" && secondNumber.length < 10){
            secondNumber += "4";
            displayText.textContent += "4";
        }
        else if (buttonValue === "5" && secondNumber.length < 10){
            secondNumber += "5";
            displayText.textContent += "5";
        }
        else if (buttonValue === "6" && secondNumber.length < 10){
            secondNumber += "6";
            displayText.textContent += "6";
        }
        else if (buttonValue === "7" && secondNumber.length < 10){
            secondNumber += "7";
            displayText.textContent += "7";
        }
        else if (buttonValue === "8" && secondNumber.length < 10){
            secondNumber += "8";
            displayText.textContent += "8";
        }
        else if (buttonValue === "9" && secondNumber.length < 10){
            secondNumber += "9";
            displayText.textContent += "9";
        }
        else if (buttonValue === "0" && secondNumber.length < 10){
            secondNumber += "0";
            displayText.textContent += "0";
        }
    } 
    if (buttonValue === "+" && !operatorActive){
        firstNumberGiven = true;
        operatorActive = true;
        displayText.textContent = "+"
        operator = "+"
    } 
    if (buttonValue === "-" && !operatorActive){
        firstNumberGiven = true;
        operatorActive = true;
        displayText.textContent = "-"
        operator = "-"
    } 
    if (buttonValue === "X" && !operatorActive){
        firstNumberGiven = true;
        operatorActive = true;
        displayText.textContent = "X"
        operator = "X"
    } 
    if (buttonValue === "÷" && !operatorActive){
        firstNumberGiven = true;
        operatorActive = true;
        displayText.textContent = "÷"
        operator = "÷"
    } 
    if (buttonValue === "AC"){
        displayText.textContent = "0";
        firstNumber = "";
        firstNumberGiven = false;
        secondNumber = "";
        operator = "";
        operatorActive = false;
        secondNumberCleared = false;
        continutation = false;
    }
    if (buttonValue === "="){
        continutation = true;
        firstNumberInt = Number(firstNumber)
        secondNumberInt = Number(secondNumber)
        result = operate(operator, firstNumberInt, secondNumberInt)
        resultString = result.toString().slice(0,9)
        if (continutation === true){
            firstNumber = result
            firstNumberGiven = true
            secondNumberCleared = false;
            secondNumber = ""
        }
        displayText.textContent = Number(resultString);
        operatorActive = false;     
    }
}



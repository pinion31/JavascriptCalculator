$(document).ready(function(){

    var sum = 0;
    var command = "start";
    var storedCommand;
    var number = [];
    var decimalMode = false;
    var decimalFactor = .1;

    var total = document.getElementById("result");

    //condense these buttons to an Object full of buttons
    var addButton = document.getElementById("add");
    addButton.onclick = function() { addCommand(add); };

    var multiplyButton = document.getElementById("multiply");
    multiplyButton.onclick = function() { addCommand(multiply); };

    var subtractButton = document.getElementById("subtract");
    subtractButton.onclick = function() { addCommand(subtract);  };

    var divideButton = document.getElementById("divide");
    divideButton.onclick = function() { addCommand(divide);  };

    var modButton = document.getElementById("mod");
    modButton.onclick = function() { addCommand(mod);  };

    var decimalButton = document.getElementById("decimal");
    decimalButton.onclick = function() { turnDecimalModeOn();  };

    var clearButton = document.getElementById("clear");
    clearButton.onclick = function() { clearAll(); displayTotal(0);  };

    var totalButton = document.getElementById("equals");
    totalButton.onclick = equals;

    var oneButton = document.getElementById("1");
    oneButton.onclick = function() { getNumber(1); };

    var twoButton = document.getElementById("2");
    twoButton.onclick = function() { getNumber(2); };

    var threeButton = document.getElementById("3");
    threeButton.onclick = function() { getNumber(3); };

    var fourButton = document.getElementById("4");
    fourButton.onclick = function() { getNumber(4); };

    var fiveButton = document.getElementById("5");
    fiveButton.onclick = function() { getNumber(5); };

    var sixButton = document.getElementById("6");
    sixButton.onclick = function() { getNumber(6); };

    var sevenButton = document.getElementById("7");
    sevenButton.onclick = function() { getNumber(7); };

    var eightButton = document.getElementById("8");
    eightButton.onclick = function() { getNumber(8); };

    var nineButton = document.getElementById("9");
    nineButton.onclick = function() { getNumber(9); };

    var zeroButton = document.getElementById("0");
    zeroButton.onclick = function() { getNumber(0); };


    //retrieves number based on button pushed and displays number
    function getNumber(num) {

        //if user presses another number after pressing equal
        //starts new equation
        if (command === "clear") {
            sum == 0;
            number.length = 0;
        }

        if (sum === 0) {
            sum = num;
        }
        else {
            if (decimalMode === false) {
                sum = (sum * 10);

                if (num !== 0) {
                    sum += num;
                }
            }
            else {
                sum += num * decimalFactor;
                decimalFactor = decimalFactor * .1;
            }
        }
        displayTotal(sum);
    }

    //stores selected number to be used in calculation
    function storeNumber() {
        //number[0] += sum;
        number.push(sum);
        clearSum();
        resetDecimalMode();
    }

    function turnDecimalModeOn() {
        decimalMode = true;
    }

    function resetDecimalMode() {
        decimalMode = false;
        decimalFactor = .1;
    }

    function addCommand(mathCommand) {

        if (number.length === 0) {

            if (command == "start" || command == "clear") {
                storeNumber(); //stores first number
                command = mathCommand;
            }
        }
        else if (number.length === 1) {

            if (command == "start" || command == "clear") {
                storeNumber();
            }
            var result;
            if (command !== "clear") {
                result = command();
            }
            else {
                result = number[0];
            }

            if (command == "start" || command == "clear") {
                displayTotal(result); //computes 2 numbers
                resetNumbersForChain(result);
                command = mathCommand;
            }
        }
    }

    //prepares numbers for additional math chaining
    function resetNumbersForChain(total) {
        number.pop()
        number[0] = total;
    }

    function equals() {
        if (command !== "clear") {

            storeNumber();

            var result = command();
            displayTotal(result); //computes 2 numbers
            resetNumbersForChain(result);

            storedCommand = command;

            clearMathCommand();
        }

    }

    function clearMathCommand() {
        command = "clear";
    }

    function multiply() {
        return number[0] * number[1];
    }

    function divide() {
        return number[0]/number[1];
    }

    function add(){
        return number[0] + number[1];
    }

    function subtract() {
        return number[0] - number[1];
    }

    function mod() {
        return number[0]%number[1];
    }

    function clearSum() {
        sum = 0;
    }

    function displayTotal(inputNum){
        total.innerHTML = inputNum;
    }

    function clearAll() {
        clearSum();
        clearMathCommand();
        number.length = 0;
        resetDecimalMode();
    }


});
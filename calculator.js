$(document).ready(function(){

    var sum = 0;
    var command = "";
    var storedCommand;
    var number = [];


    var total = document.getElementById("result");

    //condense these buttons to an Object full of buttons
    var addButton = document.getElementById("add");
    addButton.onclick = function() { addCommand(add); hit(); };

    var multiplyButton = document.getElementById("multiply");
    multiplyButton.onclick = function() { addCommand(multiply);hit();  };

    var subtractButton = document.getElementById("subtract");
    subtractButton.onclick = function() { addCommand(subtract); hit(); };

    var divideButton = document.getElementById("divide");
    divideButton.onclick = function() { addCommand(divide); hit(); };

    var modButton = document.getElementById("mod");
    modButton.onclick = function() { addCommand(mod); hit(); };

    var clearButton = document.getElementById("clear");
    clearButton.onclick = function() { clearAll(); displayTotal(0);hit();  };

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


    function hit() {
        console.log("hit");

    }
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
            sum = (sum * 10);

            if (num !== 0) {
                sum += num;
            }
        }

        displayTotal(sum);
    }

    //stores selected number to be used in calculation
    function storeNumber() {

        tallyNum += sum;
        /*
        nums.push(sum);
        clearSum();
        */
    }

    function storeFirstNumber() {
        //number[0] += sum;
        number.push(sum);
        clearSum();
    }

    function storeSecondNumber() {
        //number[1] += sum;
        number.push(sum);
        clearSum();
    }

    function addCommand(mathCommand) {

        if (number.length === 0) {
            storeFirstNumber(); //stores first number
            command = mathCommand;
           // displayTotal(number[0]);
        }
        else if (number.length === 1) {

            storeSecondNumber();
            var result;
            if (command !== "clear") {
                result = command();
            }
            else {
                console.log("clear");
                result = number[0];
            }

            displayTotal(result); //computes 2 numbers
            resetNumbersForChain(result);
            command = mathCommand;
        }
    }

    //prepares numbers for additional math chaining
    function resetNumbersForChain(total) {
        number.pop()
        number[0] = total;
        //sum = total;
    }

    function equals() {
        //number += sum;
        storeSecondNumber();

        if (command !== "clear") {
            var result = command();
            displayTotal(result); //computes 2 numbers
            resetNumbersForChain(result);
            storedCommand = command;
            clearMathCommand();
        }
        //displayTotal(number[0] );
       // clearEnd();
    }

     function clearEnd() {


    }
    //computes numbers based on command
    function computeTotal() {
        storeFirstNumber(); //stores 2nd number to be computed
        displayTotal(compute());
        clearEnd();
        //clearAll();
        //console.log(f);
    }


    function clearMathCommand() {
        command = "clear";
    }

    /*
    function compute(mathCommand) {
        //clearMathCommand();
        return mathCommand();
        /*
        switch (command) {
            case "mu":
                return multiply(nums[0],nums[1]);
            case "a":
                return add(nums[0],nums[1]);
            case "s":
                return subtract(nums[0],nums[1]);
            case "d":
                return divide(nums[0],nums[1]);
            case "mo":
                return mod(nums[0],nums[1]);
            default:
                return;

            //do nothing
        }


    }*/

    function multiply() {
        console.log(number[0] + " * " + number[1]);
        return number[0] * number[1];
    }

    function divide() {
        return number[0]/number[1];
    }

    function add(){
        //console.log(num01 + num02);
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

    }


});
let container1 = document.getElementById('container1');
// console.log(container1);

function changeColour(event) {
    const selectedDay = event.target.value;
    let color = "aliceblue";
    switch (selectedDay) {
        case "Monday":
            color = "yellow";
            break;
        case "Tuesday":
            color = "green";
            break;
        case "Wednesday":
            color = "blue";
            break;
        case "Thursday":
            color = "red";
            break;
        case "Friday":
            color = "grey"
            break;
        case "Saturday":
            color = "lightblue"
            break;
        case "Sunday":
            color = "orange"
            break;
        default:
            color = "aliceblue";
    }

    container1.style.backgroundColor = color;
    console.log(color);
}

document.getElementById('daySelect').addEventListener('change', changeColour);

//
//
//
// exercise 2
//
//
//
//

// made a button which checks the number
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', checkNumber);

// this function is called when the button is clicked
function checkNumber(event) {
    event.preventDefault();
    const numberInput = Number.parseInt(document.getElementById('numberInput').value);
    const result = analyzeNumber(numberInput);

    let finalAnswer = document.getElementsByClassName('result')[0];
    finalAnswer.textContent = result;
    console.log(finalAnswer);
    // console.log(numberInput);
}


// this function analyzes the number whether it is oddEven, or PrimeComposite and its range
function analyzeNumber(number) {
    let OddEven;
    let PrimeComposite;
    let Range;

    // checking if the number is even or odd.
    if (number % 2 == 0) {
        OddEven = 'even';
    }
    else {
        OddEven = 'odd';
    }

    // checking if the number is prime or composite
    if (checkPrime(number)) {
        PrimeComposite = 'prime';
    }
    else {
        PrimeComposite = 'composite';
    }

    // now checking the range
    if (number <= 50) {
        Range = 'less than or equal to 50';
    } else if (number > 50 && number <= 75) {
        Range = 'greater than 50 and less than or equal to 75';
    } else if (number > 75 && number <= 100) {
        Range = 'greater than 75 and less than or equal to 100';
    } else {
        Range = 'greater than 100';
    }

    // making the final analysis and returning it
    let numberAnalysis = `The number entered is an ${OddEven} ${PrimeComposite} number ${Range}.`;
    return numberAnalysis;
}


// this function checks if the number is prime or composite
function checkPrime(number) {

    // if the number is 1 or 2, return true
    if (number == 1 || number == 2) {
        return true;
    }

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
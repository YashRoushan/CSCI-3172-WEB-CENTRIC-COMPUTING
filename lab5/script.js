// made a method to find prime numbers
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}


function calculate() {
    const input = document.getElementById('numberInput').value;
    console.log(input);
    const inputArray = input.split(',');
    const inputNumbers = inputArray.map(Number);
    // console.log(inputNumbers);

    // making the variables for different loops.
    let primeCount_forLoop = 0;
    let compositeCount_forLoop = 0;
    let neitherCount_forLoop = 0;
    let primeCount_forEach = 0;
    let compositeCount_forEach = 0;
    let neitherCount_forEach = 0;
    let primeCount_map = 0;
    let compositeCount_map = 0;
    let neitherCount_map = 0;

    // Using for loop for the calcuations
    for (let i = 0; i < inputNumbers.length; i++) {
        // if 1 is entered
        if (inputNumbers[i] === 1) {
            neitherCount_forLoop++;
        }

        // if prime number is entered
        else if (isPrime(inputNumbers[i])) {
            primeCount_forLoop++;
        }

        // if the above conditions don't satisfy, then number is composite.
        else {
            compositeCount_forLoop++;
        }
    }


    // using for-each for the calculations
    inputNumbers.forEach(number => {
        if (number == 1) {
            neitherCount_forEach++;
        }
        else if (isPrime(number)) {
            primeCount_forEach++;
        }
        else {
            compositeCount_forEach++;
        }
    });

    // using map function for calculations
    inputNumbers.map(number => {
        if (number == 1) {
            neitherCount_map++;
        }
        else if (isPrime(number)) {
            primeCount_map++;
        }
        else {
            compositeCount_map++;
        }

        // return statement(good practice)
        return number;
    });

    console.log(primeCount_forEach);
    console.log(compositeCount_forEach);
    console.log(neitherCount_forEach);

    // writing the answer in result section
    const forLoop = document.getElementsByClassName('forLoop')[0];
    console.log(forLoop);
    forLoop.innerHTML = `<h2>For Loop</h2>
                        <p>Count of Prime Numbers: ${primeCount_forEach}</p>
                        <p>Count of Composite Numbers: ${compositeCount_forEach}</p>
                        <p>Count of Neither Numbers: ${neitherCount_forEach}</p>`

    const forEach = document.getElementsByClassName('forEach')[0];
    console.log(forEach);
    forEach.innerHTML = `<h2>ForEach Loop</h2>
                        <p>Count of Prime Numbers: ${primeCount_forEach}</p>
                        <p>Count of Composite Numbers: ${compositeCount_forEach}</p>
                        <p>Count of Neither Numbers: ${neitherCount_forEach}</p>`


    const map = document.getElementsByClassName('map')[0];
    console.log(map);
    map.innerHTML = `<h2>Map</h2>
                    <p>Count of Prime Numbers: ${primeCount_forEach}</p>
                    <p>Count of Composite Numbers: ${compositeCount_forEach}</p>
                    <p>Count of Neither Numbers: ${neitherCount_forEach}</p>`
}
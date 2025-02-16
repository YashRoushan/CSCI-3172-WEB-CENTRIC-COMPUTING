
// function to find area of a circle
function circleArea() {
    const pi = 3.14;
    const radius = 6;
    const area = (pi * Math.pow(radius, 2));
    console.log(`area of the circle with radius ${radius} is: ${area}`);
}

// calculator function
function calculator(a, b) {
    let addition = a + b;
    let subtraction = a - b;
    let multiplication = a * b;
    let division = 2;
    if (b != 0) {
        division = a / b;
    }
    else {
        // warn the user that they cannot divide by 0.
        division = "Connot divide by 0";
    }

    // print statements for the calculator function
    console.log(`${a} + ${b} =  ${addition}`);
    console.log(`${a} - ${b} =  ${subtraction}`);
    console.log(`${a} x ${b} =  ${multiplication}`);
    console.log(`${a} / ${b} =  ${division}`);
}

// function to find area of a rectangle
function rectangleArea() {
    const length = 20;
    const width = 15;
    const area = length * width;
    console.log(`The area of the rectangle with length ${length} and width ${width} is ${area}`)
}

// calling the methods
circleArea();
calculator(1, 2);
rectangleArea();

// prompting the user for more commands
console.log("Use the calculator by calling: calculator(a,b)");



// Q 1) What is the scope of const variable?
// Ans) 'Const' is a block scoped variable, which means it can be used only inside the block or function where it is declared in. The value of a const cannot be changed once it has been declared. If it is a reference to a variable, for example an array, its reference cannot be changed but the content of the variable can still be changed.

// Q 2) when were the let and const keyword added to JavaScript.
// Ans) Let and const were introduced during ES6(EcmaScript 6), in June 2015. Before that we used to use var, which was not block scoped and can be initialized many times which would sometimes introduce bugs or logical error in the code, Hence let and Const were introduced. var can still used today but is adviced not to be used.


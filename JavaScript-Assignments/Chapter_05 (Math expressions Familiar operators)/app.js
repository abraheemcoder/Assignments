// // Question_01
// // Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// // Answer:
// // Addition(+):
// let firstNum = 3;
// let secondNum = 5;
// let sum = firstNum + secondNum;
// document.getElementById("question1").innerHTML = "Sum of 3 and 5 is " + sum;


// // Question_02
// // Repeat task1 for subtraction, multiplication, division & modulus.
// // Answer:
// let firstNum = 3;
// let secondNum = 5;

// // Subtraction (-):
// let resultOfSubtraction = firstNum - secondNum;
// document.getElementById("question2-minus").innerHTML = "Result of Subtraction is " + resultOfSubtraction;

// // Multiplication (*):
// let resultOfMultiplication = firstNum * secondNum;
// document.getElementById("question2-multiple").innerHTML = "Result of Multiplication is " + resultOfMultiplication;

// // Division (/):
// let resultOfDivision = firstNum / secondNum;
// document.getElementById("question2-divide").innerHTML = "Result of Division is " + resultOfDivision;

// // Modulus  (Remainder %):
// let resultOfModulus = firstNum % secondNum;
// document.getElementById("question2-remain").innerHTML = "Result of Modulus is " + resultOfModulus;


// // Question_03
// // Do the following using JS Mathematic Expressions:
// // a. Declare a variable.
// // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// // c. Initialize the variable with some number.
// // d. Show the value of variable in your browser like “Initial value: 5”.
// // e. Increment the variable. (Increment means plus variable value by 1)
// // f. Show the value of variable in your browser like “Value after increment is: 6”. 
// // g. Add 7 to the variable. 
// // h. Show the value of variable in your browser like “Value after addition is: 13”. 
// // i. Decrement the variable. (Decrement means minus variable value by 1)
// // j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// // k. Show the remainder after dividing the variable’s value by 3.  
// // l. Output : “The remainder is : 0”.
// // Answer:
// let firstValue;
// document.getElementById("question3-b").innerHTML = "Value after variable declaration is " + firstValue;

// firstValue = 5;
// document.getElementById("question3-d").innerHTML = "Initial value: " + firstValue;

// // Increment ( Pre-increment: ++variable and Post-increment: variable++)
// document.getElementById("question3-f").innerHTML = "After increment is: " + ++firstValue;

// let secondValue = firstValue + 7;
// document.getElementById("question3-h").innerHTML = "After addition is: " + secondValue;

// // Decrement ( Pre-decrement: --variable and Post-decrement: variable--)
// document.getElementById("question3-j").innerHTML = "After decrement is: " + --secondValue;

// let thirdValue = 3;
// let remainder = secondValue % thirdValue;
// document.getElementById("question3-l").innerHTML = "The remainder is: " + remainder;
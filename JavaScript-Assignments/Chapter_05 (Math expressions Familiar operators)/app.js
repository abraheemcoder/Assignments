// // Question_01
// // Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// // Answer:
// // Addition(+):
// let firstNumber = 3;
// let secondNumber = 5;
// let sum = firstNumber + secondNumber;
// document.getElementById("question1-add").innerHTML = "Sum of 3 and 5 is " + sum;


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


// // // Question_04
// // // Cost of one movie ticket is 600 PKR. 
// // // Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 
// // // Example output: "Total cost to buy 5 tickets to a movie is 3000PKR"
// // // Answer:
// // let costOfOneTicket = 600;
// // let costOfFiveTickets = costOfOneTicket * 5;
// // document.getElementById("question4-cost").innerHTML = "Total cost to buy 5 tickets to a movie is " + costOfFiveTickets + "PKR";


// // Question_05
// // Write a script to display multiplication table of any number in your browser. 
// // E.g: "Table of 4
// //       4x1=4
// //       4x2=8
// //       4x3=12
// //       4x4=16
// //       4x5=20
// //       4x6=24
// //       4x7=28
// //       4x8=32
// //       4x9=36
// //       4x10=40"
// // Answer:
// // prompt(""): Use for taking data form User

// // Take Number form User
// let number = prompt("Enter a number to generate table");

// // Number(): Use to convert only number string into number
// // parseInt(): Extracts integer (whole number) from the beginning of a string & convert into number
// // parseFloat(): Extracts decimal number from the beginning of a string & convert into number

// // Convert Prompt input to Number
// number = parseFloat(number);

// // Heading
// document.getElementById("question5-heading").innerHTML = "Table of " + number;

// // for(initialization; condition; increment){}: Use to creating loop
// // condition: how long loop run
// // <=: less than and equal to
// // +=: For adding & storing variable value
// // ++: For increment
// // loop to Generate Table
// let result = "";
// for(let multipleBy = 1; multipleBy <= 10; multipleBy++){
//     result += number + "x" + multipleBy + "=" + (number * multipleBy) + "<br>";
// }

// // Result
// document.getElementById("question5-table").innerHTML = result;


// // Question_06
// // The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// // a.  Store a Celsius temperature into a variable. 
// // b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// // c.  Now store a Fahrenheit temperature into a variable. 
// // d. Convert it to Celsius & output “NNoF is NNoC”. 
// // Conversion Formulae: •℃ = (℉ - 32) x 5 / 9
// //                      •℉ = (℃ x 9 / 5) + 32
// // Answer:
// let celsiusTemp = (70 - 32) * 5 / 9;
// let fahrenheitTemp = (25 * 9 / 5) + 32;
// // Celsius temperature
// document.getElementById("question6-c").innerHTML = "70℉ is " + celsiusTemp + "℃";

// // Fahrenheit temperature
// document.getElementById("question6-f").innerHTML = "25℃ is " + fahrenheitTemp + "℉";


// // Question_07
// //  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// // a. Price of item 1 
// // b. Price of item 2 
// // c. Ordered quantity of item 1 
// // d. Ordered Quantity of item 2 
// // e. Shipping charges
// // Compute the total cost & show the receipt in your browser.
// // Answer:
// let heading = "Shopping cart"
// let priceOfItem1 = 650;
// let priceOfItem2 = 100;
// let quantityOfItem1 = 3;
// let quantityOfItem2 = 7;
// let shippingCharger = 100;
// let totalCostOfOrder = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharger;
// let br = "<br>"

// // Heading
// document.getElementById("question7-heading").innerHTML = heading;

// // order
// document.getElementById("question7-data").innerHTML = "Price of item 1 is " + priceOfItem1 + br + "Quantity of item 1 is " + quantityOfItem1 + br + "Price of item 2 is " + priceOfItem2 + br + "Quantity of item 2 is " + quantityOfItem2 + br + "Shipping charges is " + shippingCharger;

// // Receipt
// document.getElementById("question7-receipt").innerHTML = "Total cost of your order is " + totalCostOfOrder;


// Question_08
// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
// Answer:
let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;

// Heading
document.getElementById("")

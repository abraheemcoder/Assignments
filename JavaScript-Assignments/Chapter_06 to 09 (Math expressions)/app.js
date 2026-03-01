// Question_01
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// Result:
// The value ofa is: 10
// The value of ++a is,'
// Now the value of a is: II
// The value of a++ is: 11
// Now the value of a is: 12
// The value of —a is: 11
// Now the value Of a is: II
// The value of a— is: II
// Now the value of a is: 10
// Answer:
// Heading
let q1Heading = "Result:";
document.getElementById("q1-heading").innerHTML = q1Heading;

// Value of a
let q1A = 10;
let q1Br = "<br>"
document.getElementById("q1a").innerHTML = "The value of a is: " + q1A + q1Br + "-----------------------";

// Value of ++a
let q1PlusPlusA = ++q1A;
document.getElementById("q1++a").innerHTML = "The value of ++a is: " + q1PlusPlusA + q1Br + "Now the value of a is: " + q1PlusPlusA;

// Value of a++
let q1APlusPlus = q1PlusPlusA++;
document.getElementById("q1a++").innerHTML = "The value of a++ is: " + q1APlusPlus + q1Br + "Now the value of a is: " + q1APlusPlus;

// Value of --a
let q1MinusMinusA = --q1APlusPlus;
document.getElementById("q1--a").innerHTML = "The value of --a is: " + q1MinusMinusA + q1Br + "Now the value of a is: " + q1MinusMinusA;

// Value of a--
let q1AMinusMinus = q1MinusMinusA--;
document.getElementById("q1a--").innerHTML = "The value of a-- is: " + q1AMinusMinus + q1Br + "Now the value of a is: " + q1AMinusMinus;

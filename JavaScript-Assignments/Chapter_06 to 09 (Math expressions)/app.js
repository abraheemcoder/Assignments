// // Question_01
// // Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// // Result:
// // The value of a is: 10
// // The value of ++a is,'
// // Now the value of a is: II
// // The value of a++ is: 11
// // Now the value of a is: 12
// // The value of —a is: 11
// // Now the value Of a is: II
// // The value of a— is: II
// // Now the value of a is: 10
// // Answer:
// // Heading
// let q1Heading = "Result:";
// document.getElementById("q1-heading").innerHTML = q1Heading;

// // Value of a
// let q1A = 10;
// let q1Br = "<br>";
// let q1Output = "The value of a is:" + q1A + q1Br + "----------------------" + q1Br + q1Br;

// // Value of ++a
// q1Output += "The value of ++a is:" + (++q1A) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// // Value of a++
// q1Output += "The value of a++ is:" + (q1A++) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// // Value of --a
// q1Output += "The value of --a is:" + (--q1A) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// // Value of a--
// q1Output += "The value of a-- is:" + (q1A--) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// // Result
// document.getElementById("q1-result").innerHTML = q1Output;


// Question_02
// What will be the output in variables a, b & result after execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: 
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--;
// Answer:
// Para_01
let q2A = 2;
let q2B = 1;
let q2Br = "<br>";
document.getElementById("q2-para").innerHTML = "a: " + q2A + q2Br + "b: " + q2B;

// Step_01;
let q2Step1 = --q2A;
document.getElementById("q2-step1").innerHTML = "--a: " + q2Step1;

// Step_02;
let q2Step2 = --q2A - --q2B;
document.getElementById("q2-step2").innerHTML = "--a - --b: " + q2Step2;

// Step_03;
let q2Step3 = --q2A - --q2B + ++q2B;
document.getElementById("q2-step3").innerHTML = "--a - --b + ++b: " + q2Step3;

// Heading
let q2Heading = "Result:"
document.getElementById("q2-heading").innerHTML = q2Heading;

// Result
let q2Result = --q2A - --q2B + ++q2B + q2B--;
document.getElementById("q2-result").innerHTML = "--a - --b + ++b + b--: " + q2Result;

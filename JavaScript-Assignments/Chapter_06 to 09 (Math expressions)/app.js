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
// let q1Output = "The value of a is: " + q1A + q1Br + "----------------------" + q1Br + q1Br;

// // Value of ++a
// q1Output += "The value of ++a is: " + (++q1A) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// // Value of a++
// q1Output += "The value of a++ is: " + (q1A++) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// // Value of --a
// q1Output += "The value of --a is: " + (--q1A) + q1Br + "Now the value of a is:" + q1A + q1Br + q1Br;

// // Value of a--
// q1Output += "The value of a-- is: " + (q1A--) + q1Br + "Now the value of a is: " + q1A + q1Br + q1Br;

// // Result
// document.getElementById("q1-result").innerHTML = q1Output;


// // Question_02
// // What will be the output in variables a, b & result after execution of the following script: 
// // var a = 2, b = 1; 
// // var result = --a - --b + ++b + b--; 
// // Explain the output at each stage: 
// // --a; 
// // --a - --b; 
// // --a - --b + ++b; 
// // --a - --b + ++b + b--;
// // Answer:
// let q2A = 2;
// let q2B = 1;

// // --a:
// let step1 = --q2A;
// console.log(step1); // 

// // --a - --b:
// // Now,
// // a = 1 
// // --b = 0
// let step2 = step1 - --q2B;
// console.log(step2);

// // --a - --b + ++b:
// // Now,
// // a = 1
// // b = 0
// // ++b = 1 
// let step3 = step2 + ++q2B;
// console.log(step3);

// // --a - --b + ++b + b--:
// // Now,
// // a = 1
// // b = 1
// // b-- = 1
// let step4 = step3 + q2B--;

// // Final Result
// console.log(step4);


// Question_03
// Write a program that takes input a name from user & greet the user.
// Anewer:
let userName = prompt("Enter your name");
let greeting = "Hello " + userName + ", Welcome to our Website";

// Result
alert(greeting);
console.log(greeting);


// Question_04
// Write a program to take input a number from user & display it’s multiplication table onyourbrowser. If user does not enter a new number, multiplicationtable of 5 should be displayed by default.
// Answer:

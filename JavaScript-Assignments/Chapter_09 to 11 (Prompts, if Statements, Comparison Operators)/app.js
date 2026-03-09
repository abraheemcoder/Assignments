// // Question_01
// // Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
// Answer:
// let city = prompt("Enter your city name");

// if (city.toLowerCase() === "karachi"){
//     alert("welcome to city of lights");
// } else {
//     alert("Please come to Karachi");
// };


// // Question_02
// // Write a program to take “gender” as input from user. 
// // If the user is male, give the message: Good Morning Sir. 
// // If the user is female, give the message: Good Morning Ma’am.
// // Answer:
// let gender = prompt("Enter your gender");

// if (gender.toLowerCase() === "male"){
//     alert("Good Morning Sir")
// } else if (gender.toLowerCase() === "female"){
//     alert("Good Morning Ma'am");
// } else {
//     alert("Please enter your gender");
// };


// // Question_03
// // Write a program to take input color of road traffic signal from the user & show the message according to this table:
// // Message: Red: Must Stop
// //          Yellow: Ready to move
// //          Green: Move now
// // Answer:
// let color = prompt("Enter Signal color");

// if (color.toLowerCase() === "red"){
//     alert("Must Stop");
// } else if (color.toLowerCase() === "yellow"){
//     alert("Ready to move");
// } else if (color.toLowerCase() === "green"){
//     alert("Move now");
// } else {
//     alert("Please enter right signal color");
// };


// Question_04
// Write a program to take input remaining fuel in car (in litres) from user. 
// If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”
// Answer: 
// let fuel = prompt("Enter your fuel amount in litre");
// fuel = Number(fuel);

// if (fuel < "0.25"){
//     alert("Please refill the fuel in your car");
// } else {
//     alert("enjoy your drive");
// };


// // Question_05
// // Run this script, & check whether alert message would be displayed or not. 
// // Record the outputs. 
// // a. var a = 4; 
// // if (++a === 5){ 
// // alert("given condition for variable a is true"); 
// // };

// // b. var b = 82; 
// // if (b++ === 83){ 
// // alert("given condition for variable b is true"); 
// // };

// //  c. var c = 12; 
// // if (c++ === 13){ 
// // alert("condition 1 is true"); 
// // }; 
// // if (c === 13){ 
// // alert("condition 2 is true"); 
// // }; 
// // if (++c < 14){ 
// // alert("condition 3 is true"); 
// // }; 
// // if (c === 14){ 
// // alert("condition 4 is true"); 
// // }; 
 
// // d. var materialCost = 20000; 
// // var laborCost = 2000; 
// // var totalCost = materialCost + laborCost; 
// // if (totalCost === laborCost + materialCost){ 
// // alert("The cost equals"); 
// // };

// //  e. if (true){ 
// // alert("True"); 
// // }; 
// // if (false){ 
// // alert("False"); 
// // };

// // f. if ("car" < "cat"){ 
// // alert("car is smaller than cat"); 
// // };
// // Answer:

// // a ==> true
// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// };

// // b ==> false
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// };

// // c
// var c = 12; 
// // Condition 1  ==> false
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// }; 
// // Condition 2  ==> true
// if (c === 13){ 
// alert("condition 2 is true"); 
// }; 
// // Condition 3  ==> false
// if (++c < 14){ 
// alert("condition 3 is true"); 
// };
// // Condition 4  ==> true
// if(c === 14){ 
// alert("condition 4 is true"); 
// };

// // d ==> true
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// };

// // e
// if (true){ 
// alert("True"); 
// };              // Alert show
// if (false){ 
// alert("False"); 
// };              // Alert not show

// // f ==> true
// if("car" < "cat"){ 
// alert("car is smaller than cat"); 
// };


// Question_06
// Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following table:

/*1.Write a program that takes the lengths of three sides of a triangle and determines if a valid triangle can be formed. For a valid triangle, the sum of any two sides must be greater than the third side.*/

let a = 5, b = 6, c = 7;

if (a + b > c && a + c > b && b + c > a) {
    console.log("Valid triangle");
} else {
    console.log("Invalid triangle");
}


/* 2.Write a program to check whether a given number is prime or not. A prime number is a number that is only divisible by 1 and itself */
let num=prompt("enter the no")
isPrime=false
if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? "Prime" : "Not Prime"); 


/* 3.question */

var x=prompt("enter x value")
var y=prompt("enter y value")
var z=prompt("enter z value")
if (x > y && x > z) {
    largest = x;
} else if (y > x && y > z) {
    largest = y;
} else {
    largest = z;
}

console.log("The largest number is:", largest);


/*4.question */


var year=prompt("enter the year")

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
} else {
    console.log(year + " is not a leap year");
}

/*5.question */
var n=prompt("enter the value of n")

if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
} else if (n % 3 === 0) {
    console.log("Fizz");
} else if (n % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(n);
}
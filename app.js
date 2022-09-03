console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  } else {
    console.log("Not an odd number");
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else {
    console.log("They aren't divisible by 3 or 5");
  }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
// while for exercise 1
let num1 = prompt("Enter a number: ");
while (num1 % 2 != 0) {
  console.log(num1);
  num1++;
}

// while for exercise 2
let num2 = prompt("Enter a number: ");
while (num2 % 3 === 0 && num2 % 5 === 0) {
  console.log("FIZZBUZZ");
  num2++;
}
while (num2 % 3 === 0) {
  console.log("FIZZ");
  num2++;
}
while (num2 % 5 === 0) {
  console.log("BUZZ");
  num2++;
}

// do while exercise 1
let num3 = prompt("Enter a number: ");
do {
  console.log(num3);
  num3++;
} while (num3 % 2 != 0);

// do while exercise 2
let num4 = 1;

do {
  if (num4 % 3 === 0 && num4 % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (num4 % 3 === 0) {
    console.log("FIZZ");
  } else if (num4 % 5 === 0) {
    console.log("BUZZ");
  }
  num4++;
} while (num4 <= 100);

// Exercise 4 Section
let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);
for (let i = 0; i <= n; i++) {
  if (i === n) {
    console.log("Found value!");
    break;
  } else {
    console.log("Did not find value");
  }
}

// Exercise 5 Section
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (var i = start; i < n; i++) {
  if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
    console.log("fizzbuzz");
  } else if (i % fizzDivisor === 0) {
    console.log("fizz");
  } else if (i % buzzDivisor === 0) {
    console.log("buzz");
  }
}

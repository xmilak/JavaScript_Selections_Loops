console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0){
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log(i, "FIZZ");
    }else if (i % 5 == 0) {
        console.log(i,"BUZZ")
    }
}

//Exerccise 3 Section
console.log("Exercise 3:\n===========\n");
i=1;

while(i<=100){
    if (i % 2 != 0) {
        console.log(i)
    }
    i++
}

console.log("Do-While");
i=1;

do{
    if (i % 3==0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log (i, 'FIZZ');
    } else if (i % 5 == 0) {
        console.log(i, 'BUZZ');
    }
    i++
} while (i <= 100);

//Exerccise 4 Section
console.log("Exercise 4:\n===========\n");
let value = Math.round((Math.random()*500));
var n = Math.round(Math.random() * (500-100) + 100);

var i = 0;
for (; i <= n; i++){
    if (i == value) {
        console.log(`Found Value ${value}!`);
        break;
    }
} 

if (i != value) {
    console.log(`Did not find value ${value}`);
}

//Exerccise 5 Section
console.log("Exercise 5:\n===========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
var n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log(i,`FIZZBUZZ`);
    } else if (i % fizzDivisor == 0) {
        console.log(i,`FIZZ`);
    } else if (i % buzzDivisor == 0) {
        console.log(i,'BUZZ');
    }
}

console.log(`fizzDivisor: ${fizzDivisor}`);
console.log(`buzzDivor: ${buzzDivisor}`);
console.log(`start: ${start}`);
console.log(`n: ${n}`);
//1 Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 
//           Знайти суму та кількість позитивних елементів.
//2 Знайти мінімальний елемент масиву та його порядковий номер.
//3 Знайти максимальний елемент масиву та його порядковий номер.
//4 Визначити кількість негативних елементів.
//5 Знайти кількість непарних позитивних елементів.
//6 Знайти кількість парних позитивних елементів.
//7 Знайти суму парних позитивних елементів.
//8 Знайти суму непарних позитивних елементів.
//9 Знайти добуток позитивних елементів.
//10 Знайти найбільший серед елементів масиву, ост альні обнулити.


//1
const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]; 
let sum = 0;
let quintity = 0;

for(let item of arr) {
    if (item >= 0) {
        sum += item;
        quintity++;
    }
}
console.log(`1 - sum = ${sum}, quintity = ${quintity}`);

//2
let min = arr[0];
for(const item of arr) {
    if(item < min){
        min = item;
    }
}
console.log(`2 - ${min}`, arr.indexOf(min));


//3
let max = arr[0];
for(const item of arr) {
    if(item > max){
        max = item;
    }
}
console.log(`2 - ${max}`, arr.indexOf(max));


//4
let quintity4 = 0;
for(let item of arr) {
    if (item < 0) {
        quintity4++;
    }
}
console.log(`4 - quintity4 = ${quintity4}`);


//5 
let odd = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2 !== 0 && arr[i] > 0) {
        odd.push(arr[i]);
    }
}
console.log('5 -',odd.length);


//6 
let even = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2 === 0 && arr[i] > 0) {
        even.push(arr[i]);
    }
}
console.log('6 -',even.length);

//7 

let even1 = [];
let sum1 = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2 === 0 && arr[i] > 0) {
       even1.push(arr[i]);
       sum1 += arr[i];
    }
}
console.log('7 -',sum1);


//8
let odd1 = [];
let sum2 = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2 !== 0 && arr[i] > 0) {
        odd1.push(arr[i]);
        sum2 += arr[i];
    }
}
console.log('8 -',sum2);


//9 
let sum3 = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        sum3 += arr[i];
    }
}
console.log('9 -',sum3);

//10 
let max1 = arr[0];
for(const item of arr) {
    if(item > max1){
        max1 = item;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < max1) {
            arr[i] = 0;
        }
    }
}
console.log(`10 - ${arr.join(', ')}`);
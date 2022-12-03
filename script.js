console.log('** задание 2 **');

let arr = [1 , 2, 3];

sum = 0;
for(let key of arr) {
    sum = sum + key; // sum = 0+1 = 1+2 = 3+3 = 6
}

console.log(sum);

console.log('** задание 3 **');

let arr1 = [1 , 2, 3];

arr1.push(4 , 5);
console.log(arr1);

console.log('** задание 4 **');

let myName = 'Полина';
let mySurname = 'Денищенко';
let myAge = 13;

let name = prompt ('Введите ваше имя');
let surname = prompt ('Введите вашу фамилию');
let age = prompt (' сколько вам лет?');

console.log(`добрый день ${mySurname} ${myName} вам  ${myAge} лет`);
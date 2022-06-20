//1 Переменные
// variable //
// const firstName = "Name";
// const lastName = "lastName"; // string //
// // let age = 26; // number //
// const isProgrammer = true; // boolean //
// const _private = "name";
// const _ = "";
// const $ = "";
// // const if = ""; // error //
// const withNum5 = "5";
// const 5withNum5 = "5"; // error


// 2 Мутирование
// console.log("Имя человека: " + firstName + " ,Возраст человека: " + age);
// alert("Имя человека: " + firstName + " ,Возраст человека: " + age);
// const lastNamee = prompt("Введите фамилию");
// alert(firstName + " " + lastNamee);

//3 Операторы
// const currentYear = 2022;
// const birthYear = 1997;
// // const age = currentYear-birthYear;
// const a = 10;
// const b = 5;
// let c = 32;
// c=c+a; одинаковые c+=a;
// c+=a;
// c-=a;
// c*=a;
// c/=a;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(c);

//4 Типы данных
// const isProgrammer = true; // bolean
// const firstName = "Programmer"; // string
// const age = 25; // number
// let x; // undefined
// // null
// console.log(typeof isProgrammer);
// console.log(typeof firstName);
// console.log(typeof age);
// console.log(typeof x);
// console.log(null);

// //5 Приоритет операторов
// const fullAge = 25;
// const birthYear = 1997;
// const currentYear = 2022;

// // > < >= <= сравнение
// const isFullAge = currentYear - birthYear >= fullAge; // 25>=26
// console.log(isFullAge);

// 6 Условные оператор
// const courseStatus = "pending"; // ready, fail, pending

// if (courseStatus === "ready") {
//   console.log("Курс уже готов и его можно проходить")
// } else if (courseStatus === "pending") {
//   console.log("Курс находиться в процессе разработки")
// } else {
//   console.log("Курс не получился")
// }
const isReady = true;
// if (isReady){
//   console.log("Все готово!")
// } else {
//   console.log("Всё не готово!")
// }
// тернанрное выражение
isReady ? console.log("Все готово!") : console.log("Всё не готово!");

// const num1 = 42 // number число
// const num2 = "42" // string строка

// console.log(num1===num2) // всегда исползовать троейное = (===)
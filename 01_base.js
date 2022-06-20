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
// const isReady = true;
// // if (isReady){
// //   console.log("Все готово!")
// // } else {
// //   console.log("Всё не готово!")
// // }
// // тернарное выражение
// isReady ? console.log("Все готово!") : console.log("Всё не готово!");

// const num1 = 42 // number число
// const num2 = "42" // string строка

// console.log(num1===num2) // всегда исползовать троейное = (===)

// 7 Булевая логика (logic operators)
// a1 = true  && true       // t && t вернёт true
// a2 = true  && false      // t && f вернёт false
// a3 = false && true       // f && t вернёт false
// a4 = false && (3 == 4)   // f && f вернёт false
// a5 = 'Cat' && 'Dog'      // t && t вернёт "Dog"
// a6 = false && 'Cat'      // f && t вернёт false
// a7 = 'Cat' && false      // t && f вернёт false
// a8 = ''    && false      // f && f вернёт ""
// a9 = false && ''         // f && f вернёт false

// 8 функции
// function calculateAge(year) {
//   return 2022 - year;
// }

// // console.log(calculateAge(1997));
// // console.log(calculateAge(1998));
// // console.log(calculateAge(1999));
// function logInfoAbout(name, year) {
//   const age = calculateAge(year);
//   if (age > 0) {
//   console.log("Человек по имени "+ name + " сейчай имеет возраст " + age);
//   } else {
//     console.log("Вообщето это будущее")
//   }
// }
// logInfoAbout("Name", 1997);
// logInfoAbout("Jeka", 2021);

// 9 Массивы
// const cars = ["Мазда","Мерседес","Форд"];
// // const cars = new Array("Мазда","Мерседес","Форд");
// console.log(cars);
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars.length); // длина массива
// cars[0] = "Porshe";
// // cars[3] = "Mazda"; // расширение массива
// cars[cars.length] = "Mazda"; // расширение  массива
// console.log(cars);

// 10 циклы
// const cars = ["Мазда","Мерседес","Форд","Porshe"];
// // for (let i=0; i<cars.length; i++) {
// //   const car = cars[i];
// //   console.log(car);
// // }
// for (let car of cars) {
//   console.log(car);
// }

// // 11 Объекты
// const person = {
//   firstName: "Jon",
//   lastName: "Smith",
//   year: "1998",
//   languages: ["Ru","En","De"],
//   hasWife: false,
//   greet: function(){
//     console.log("greet");
//   }
// }
// console.log(person.firstName);
// console.log(person["lastName"]);
// const key = "languages";
// console.log(person[key]);
// person.hasWife=true;
// person.isProgrammer=true;
// console.log(person);
// person.greet();
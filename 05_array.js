// // Массивы
// const cars = ["Мазда","Мерседес","Форд", "БМВ"];
// const people = [
//   {name: "John", budget: 1000},
//   {name: "John", budget: 25},
//   {name: "John", budget: 3000},
// ]
// const fib = [1, 1, 2, 3, 5, 8, 13];
// // function это функция
// function addItemToEnd() {
  
// };
// method это метод
// cars.push("Reno"); // push добавляет в конец массива новый объект
// cars.unshift("Lada"); // добавляет объект в начала массива


// const firtcar = cars.shift();
// const lastCar = cars.pop();
// console.log(firtcar);
// console.log(lastCar);
// console.log(cars);

// // console.log(cars.reverse()); // reverse переворачивает весь массив
// // console.log(cars);
// let findedPerson;
// for (const person of people){

//   if (person.budget === 25) {
//     findedPerson = person;
//   }
// }
// console.log(findedPerson);

// // const index = cars.indexOf("БМВ");
// // cars[index] = "Porshe";
// // console.log(cars);
// // const index = people.findIndex(function(person){ // работает с объектами
// // return person.budget === 1000;
// // }); 
// // const person = people.find(function(person){
// //   return person.budget === 1000;
// // });
// // console.log(people[index]);
// const person = people.find (person => person.budget === 1000); // лямда функция

// console.log(person);

// console.log(cars.includes ("Мазда")); // наличие элемента с includes

// const upperCaseCasrs =  cars.map(car => { // метод map всегда возвращает новый массив
//   return car.toUpperCase ();
// })

// const pow2 = num => num ** 2;
// // const sqrt = num => Math.sqrt(num);

// // const pow2Fib = fib.map(pow2).map(Math.sqrt);
// // console.log(pow2Fib);
// const pow2Fib = fib.map(pow2);
// const filteredNumbers = pow2Fib.filter(num=> num > 20 );
// console.log(pow2Fib);
// console.log(filteredNumbers);



// Задача 1
// const text = "Hello, мы иузчаем JS";
// const reverseText = text.split("").reverse().join(" "); // split делит строчку и возвращает массив
// console.log(reverseText);

const people = [
  {name: "John", budget: 4200},
  {name: "John", budget: 3500},
  {name: "John", budget: 1700},
]

const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) =>{
  acc += person.budget;
  return acc
}, 0);
 console.log(allBudget);
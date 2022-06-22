// 1 Функции
// function declaration - можем обращаться когда захотим
// function greet(firstName) {
//   console.log("Hello - ", firstName);
// }
// // function expression - 
// const greet2 = function greet2(firstName) {
//   console.log("Hello 2 - ", firstName)
// }
// // greet("Jhonny");
// // greet2("Johnny");

// // console.log(typeof greet); // typeof определяем функция или переменная
// // console.dir(greet);

// // 2 Анонимные функции
// // let counter = 0;
// // const interval = setInterval(function() {
// //   if (counter === 5) {
// //     clearInterval(interval);
// //   } else {
// //     console.log(++counter);
// //   }
// // }, 1000);

// // 3 Стрелочные функции
// function greet() {
//     console.log("Hello - ");
//   };

//   const arrow = (firstName, age)=> {
//     console.log("Hello - ", firstName, age);
//   }
//   const arrow2 = firstName => console.log("Hello - ", firstName);
//   arrow2("Johnny");

//  const pow2 = num => num**2;
//   console.log(pow2(5));

  // 4 Параметры по умолчанию
  // const  sum = (a=2,b=a*2) => a + b;
  // console.log(sum(1,6));
  // console.log(sum());

  // function sumAll(...all){
  //   let result = 0
  //   for (let num of all){
  //     result += num;
  //   }
  //   return result;
  // }
  // const res = sumAll(1, 2, 3, 4, 5, 6, 7);
  // console.log(res);

  // 5 Замыкания // создание приватных переменных
function createMember(name) {
  return function (lastName) {
    console.log(name+lastName);
  }
};

const logWithLastName = createMember("Johnny");
console.log(logWithLastName("Billy"));
console.log(logWithLastName("Green"));
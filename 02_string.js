// const name = "Jon";
// const age = 26;

// function getAge() {
//   return age;
  
// }
// const output = "Привет, меня зовут " + name + " и мой возраст " + age + " лет.";
// const output = `Привет, меня зовут ${name} и мой возраст ${age<20 ? 'a': 'b'} лет`;
// console.log(output);
// const output = `
// <div>this is div</div>
// <p>this is o</p>
// `
// console.log(output);
// const firstName = "Johnny";
// console.log(firstName.length); // количество символов
// console.log(firstName.toUpperCase()); // все символы в верхний регистр
// console.log(firstName.toLowerCase()); // все символы в нижнийр регистр
// console.log(firstName.charAt(2)); // узнать на какой позиции какой символ
// console.log(firstName.indexOf("n")); // присутствует в строчке on
// console.log(firstName.startsWith("Jo")); // стартует ли строка со сторочки Jo "да или нет" (true false)
// console.log(firstName.endsWith("Jo")); // заканчивается ли строка на Jo "да или нет"
// console.log(firstName.repeat(3)); // дублирует текст три раза
// const string = " password ";
// console.log(string.trim()); // очищает пробелы
// console.log(string.trimLeft()); // очищает пробелы слева
// console.log(string.trimRight()); // очищает пробелы с права

function logPerson(s, name, age) {
  if (age < 0) {
    age = " Еще не родился";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
  
}
const personName = "Jhonny";
const personAge = 26;
const personName2 = "Jho";
const personAge2 = -26;
const output = logPerson`Имя: ${personName}, возраст: ${personAge}!`;
const output2 = logPerson`Имя: ${personName2}, возраст: ${personAge2}!`;
console.log(output);
console.log(output2);
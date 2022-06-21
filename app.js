// 1 Number числа
// const num = 42; // integer целое
// const float = 42.42; // float не целое
// const pow = 10e3; // валидное число
// console.log("MAX_SAFE_INTEGE ", Number.MAX_SAFE_INTEGER); //(Math.pow(2,53)-1);
// console.log("Math.pow 53", Math.pow(2,53)-1);
// console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
// console.log("MAX_VALUE ", Number.MAX_VALUE);
// console.log("MIN_VALUE ", Number.MIN_VALUE);
// console.log("MIN_VALUE ", Number.POSITIVE_INFINITY);
// console.log("MIN_VALUE ", Number.NEGATIVE_INFINITY);
// console.log("2/ 0", 2/0);
// console.log("Number.NaN ", Number.NaN); // not a number
// console.log(typeof NaN);
// const weird = 2 / undefined;
// console.log(Number.isNaN(weird)); // NaN
// console.log(Number.isNaN(42)); // нормальное число
// console.log(Number.isFinite(Infinity)); // 
// console.log(Number.isFinite(42)); //

// const stringInt = "42";
// const stringFloat = "42.42";
// console.log(Number.parseInt(stringInt)+2);
// console.log(Number(stringInt)+2);
// console.log(+stringInt+2);

// console.log(parseFloat(stringFloat)+2);
// console.log(+stringFloat+2);

// console.log(0.4+0.2); // 0.6000000000000001
// console.log((2/5)+(1/5)); // 0.6000000000000001
// console.log((0.4+0.2).toFixed(1)); // 0.6
// console.log(parseFloat((0.4+0.2).toFixed(1))); // 0.6

// 2 BigInt работа с большими числами про добавлении в конце "n"
// console.log(900719925474099999991n - 90071992547409999991n);
// console.log(-900719925474099999991n);
// // console.log(900719925474099999991n.23123n) // error не работает с не целыми числами
// // console.log(10n-4); // error
// console.log(parseInt(10n)-4); // решение этой проблемы console.log(10n-4); // error
// console.log(10n-BigInt(4));
// console.log(5n/2n); // 2n

// 3 Math
// console.log(Math.E); // экспонента
// console.log(Math.PI); // число пи
// console.log(Math.sqrt(25)); // квадратный корень
// console.log(Math.pow(5,3)); // в кубе
// console.log(Math.abs(-25));// модуль числа
// console.log(Math.max(42, 12, 23, 11, 4));// определяет максимальное число
// console.log(Math.min(42,2, 124, 55)); // определяет самое маленькое число
// console.log(Math.floor(4,8));// округляет в меньшую сторону
// console.log(Math.ceil(4,8)); // округляет в большую сторону
// console.log(Math.round(4,8)); // возвращает число, округлённое к ближайшему целому.
// console.log(Math.trunc(4,8)); // возвращает целую часть числа путём удаления всех дробных знаков.
// console.log(Math.random()); // рандомное значение числа

// // 4 Example
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max-min + 1) + min);
}
console.log(getRandomBetween(10, 42));
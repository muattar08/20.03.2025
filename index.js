// первая задача:
function checkAge(age) {
if (isNaN(age) || age <= 0) {
console.log("Дебил");
} else if (age >= 18) {
console.log("Впускаем");
} else {
console.log("Выгоняем");
}
}

let age = prompt("Введите ваш возраст:");
checkAge(Number(age));

// 2.вторая задача:
function calculate(a, b) {
console.log(`Сложение: ${a + b}`);
console.log(`Вычитание: ${a - b}`);
console.log(`Умножение: ${a * b}`);
console.log(`Деление: ${a / b}`);
console.log(`Возведение в степень: ${a ** b}`);
console.log(`Остаток от деления: ${a % b}`);
}

let a = Number(prompt("Введите число a:"));
let b = Number(prompt("Введите число b:"));
calculate(a, b);

// 3. третья задача:
function maxName(name1, name2, name3) {
return [name1, name2, name3].reduce((longest, current) => 
current.length > longest.length ? current : longest
);
}

console.log(maxName('Alex', 'George', 'Michael'));

// 4. четвертая задача:
function findMin(...args) {
if (args.length === 1 && Array.isArray(args[0])) {
return Math.min(...args[0]);
} else if (args.every(arg => typeof arg === 'object' && !Array.isArray(arg))) {
return Math.min(...args.flatMap(obj => Object.values(obj)));
} else {
return Math.min(...args);
}
}

console.log(findMin(1, 2)); 
console.log(findMin([1, 2])); 
console.log(findMin({ a: 1, b: 2 })); 
console.log(findMin({ a: 1, b: 2 }, { a: 11, b: 12 })); 

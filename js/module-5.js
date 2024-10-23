
// Функция makePizzaвозвращает строчку с сообщением клиенту.
// Дополни код таким образом, чтобы в переменной resultбыл результат выполнения функции makePizza, а в переменной pointerбыла ссылка на функцию makePizza.

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;

// console.log(result); // Your pizza is being prepared, please wait.
// console.log(pointer); // ƒ makePizza() {return "Your pizza is being prepared, please wait.";}




// ??? Как сделать чтобы в функция возвращала сообщеня через return, a вызо registerGuest через console.log давал такой же результат ???

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }


// registerGuest("Mango", greet);
// registerGuest("Mango", notify);





// Функция makeMessageпринимает один параметр имени доставляемой пиццы pizzaNameи возвращает строку с уведомлением клиента.
// Дополни функцию makeMessage таким образом, чтобы она ожидала второго параметра колбек-функцию (callback) и возвращала результат ее вызова.
// Функции deliverPizza или makePizza будут передаваться как колбек для makeMessage и ожидать аргументом имя пиццы.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }



// console.log(makeMessage("Royal Grand", makePizza)); // Pizza Royal Grand is being prepared, please wait...

// console.log(makeMessage("Ultracheese", deliverPizza)); // Delivering Ultracheese pizza.





// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// // registerGuest("Mango", function greet(name) {
// //   console.log(`Welcome ${name}!`);
// // });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });





// Функция makePizza имеет два параметра:
// pizzaName - имя пиццы
// callback - колбек-функцию.
// Во время выполнения makePizza вызывает этот колбек, передавая ему pizzaName как аргумент.
// Дополни второй вызов функции: makePizza("Ultracheese");
// передав вторым аргументом инлайн колбек-функцию eatPizza(pizzaName).
// Колбек eatPizza логирует строку: "Eating pizza <название пиццы>",
// где < название пиццы > это значение параметра pizzaName.

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });




// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });



// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems – массив чисел, и рассчитывает общую сумму его элементов, которая хранится в переменной totalPrice и возвращается как результат работы функции.

// Дополни вызов метода forEach, передавая ему колбек-функцию, которая на каждой итерации добавляет к totalPrice значение текущего элемента массива orderedItems.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (element) {
//       totalPrice += element;
//   });

//   return totalPrice;
// }


// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116



// Функция function filterArray(numbers, value) принимает первым параметром массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше значения второго параметра числа value.
// Если такие значения не найдены, функция возвращает пустой массив.
// Выполни рефакторинг функции таким образом, чтобы она использовала метод forEach.

// function filterArray(numbers, value) {
//     const arr = [];
//     numbers.forEach(function (number) {
        
//     if (number > value) {
//         arr.push(number);
//     }
//     });
//     return arr;
//  }


// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]






// Выполни рефакторинг функции calculateTotalPrice() таким образом, чтобы она была объявлена ​как стрелочная.

// function calculateTotalPrice(quantity, pricePerItem) {
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// }


// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200



// Выполни рефакторинг функции calculateTotalPrice() таким образом, чтобы она использовала неявный возврат.

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;



// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200





// const numbers = [5, 10, 15, 20, 25];

// Звичайна анонімна функція
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });


// Стрілочна анонімна функція
// numbers.forEach((number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// });




// Выполни рефакторинг функции calculateTotalPrice(orderedItems), заменив ее объявление на стрелочную функцию. Также замени колбек-функцию, передаваемую в метод forEach() на стрелочную функцию.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });
//     return totalPrice;
// }




// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116





// Замени объявления функции filterArray() и колбека для метода forEach() на стрелочные функции.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// }


// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if(number > value) {
//             filteredNumbers.push(number);
//         }
//     });
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]



//?!?!?!?!?!

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]




// const pureMultiply = (array, value) => {
//   const newArray = [];                              // ????

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;                                 //????
// };

// const numbers = [1, 2, 3, 4, 5];
// pureMultiply(numbers, 2);
// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]

// const doubledNumbers = pureMultiply(numbers, 2);
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]



//?!?!?!?!?!?!
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого – это четное число, добавляя к нему значение параметра value, который точно является числом.

// Выполни рефакторинг функции таким образом, чтобы она стала чистой – не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновленными значениями.

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
// }

// const arr = [1, 2, 3, 4, 5];
// changeEven(arr, 10)
// console.log(arr);


// function changeEven(numbers, value) {
//     const newArray = [];
//     numbers.forEach(element => {
//         if (element % 2 === 0) {
//             element = element + value;
//         }
//         newArray.push(element)
//     });
//     return newArray;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]



// В массиве planets хранятся названия планет.
// Дополни код таким образом, чтобы в переменной planetsLengths получился массив, состоящий из длин названий каждой планеты из массива planets.  Обязательно используй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths); // [5, 4, 5, 7]




// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]





// Массив books содержит коллекцию объектов книг, в которых значением свойств genres является массив жанров.
// Используя метод flatMap(), сделай так, чтобы в переменной genres получился массив жанров всех книг(свойство genres) из массива books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap(book => book.genres);

// console.log(genres); // ["adventure", "history", "fiction", "horror", "mysticism"]







// const getUserEmails = (users) => {
//     return users.map(user => user.email)
// };


// console.log(getUserEmails([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ])); // ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]





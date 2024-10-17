
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//     // console.log(key); // Ключ
//     // console.log(book[key]);  // Значення властивості з таким ключем
// }





// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
    
//     keys.push(key);
//     values.push(apartment[key]);

// }

// console.log(keys);
// console.log(values);






// const book = {

//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const keys = Object.keys(book);

// console.log(keys); // ['title', 'author', 'genres', 'rating']





// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
// //   console.log(key); // Ключ
// //   console.log(book[key]); // Значення властивості
// }




// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];

// const keys = Object.keys(apartment);

// for (const key of keys) {
//     values.push(apartment[key]);
// };

// console.log(values);
// console.log(keys);





// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }




// function countProps(object) {
//   let propCount = 0;

// //  const key = Object.keys(object);
    
//     return propCount = key.length;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));





// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]




// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// // console.log(keys);
// // console.log(values);




// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const item of Object.values(salaries)) {
//         totalSalary += item;
//     }
//     return totalSalary;
// };

// console.log(countTotalSalary({}));
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));





// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of Object.values(colors)) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
       
// }

// console.log(hexColors);
// console.log(rgbColors);



//IF ELSE
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];

//     let cost = null;

//     for (const product of products) {
//               if (product.name === productName) {
//          cost = product.price;
//         }
//         }
//    return cost;
//  }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Grip"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("Engine"));



// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]



// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     const arr = [];
    
//     for (const product of products) {

//         if (Object.keys(product).includes(propName)) {
//             arr.push(product[propName]);
//         }
      
//     }
//     return arr;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));



// IF ELSE ??????
// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//     ];
    
//     let sum = `Product ${productName} not found!`;

//     for (const product of products) {
//        if (product.name === productName) {
//            sum = product.price * product.quantity;
//        }
//     }
//     return sum;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));



// Объяви объект atTheOldToad со следующими свойствами:
// potions — массив. Пусть сейчас он будет пустым;
// getPotions() — метод, возвращающий строку "List of all available potions";
// addPotion(potionName) — метод, возвращающий строку "Adding <potionName>", где potionName это значение параметра potionName;

// const atTheOldToad = {
//   potions: [],
  
//   getPotions() {
//     return "List of all available potions";
//   },

// addPotion(potionName) {
//   return `Adding ${potionName}`;
// },
// }

// console.log(atTheOldToad.getPotions()); // List of all available potions
// console.log(atTheOldToad.addPotion("Invisibility")); // Adding Invisibility
// console.log(atTheOldToad.addPotion("Power potion")); // Adding Power potion


// Используя ключевое слово this напиши синтаксис для метода объекта getBooks(), чтобы его вызов давал доступа к значению свойства books

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]



// Объект atTheOldToadобладает следующими свойствами:

// potions — массив строк, с названиями зилья
// getPotions() — метод, возвращающий строку"List of all available potions"
// Измени код метода объекта getPotions() так, чтобы он возвращал значение свойства potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());




// Используя ключевое слово this, напиши синтаксис для метода объекта addBook(bookName), чтобы его вызов позволял добавление нового элемента в значение свойства books, который будет принят в параметр bookName

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]


// Объект atTheOldToad обладает следующими свойствами:
// potions — массив строк, с названиями зилья
// getPotions() — метод, возвращающий значение свойства potions
// addPotion() — метод, принимающий параметр строка с названием зельяpotionName
// Измени код метода addPotion(potionName) так, чтобы он добавлял снадобье potionName в конец массива в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {

//     this.potions.push(potionName)
//   },
// };

// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.getPotions());



// Добавь метод объекта getAverageRating(), который будет возвращать средний рейтинг книг:
// 1) Объяви метод getAvarageRating в объекте;
// 2) Объяви переменную totalRating для хранения общего рейтинга.
// 3) Перебери массив книг по ссылке this.books в цикле for...of.
// 4) На каждой итерации добавь к общему рейтингу - рейтинг книги.
// 5) После завершения цикла верни результат разделения общего рейтинга на количество книг(используя ссылку this.books).

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// console.log(bookShelf.getAvarageRating()); // 7





// Объект atTheOldToad обладает следующими свойствами:
// обладает следующими свойствами:
// potions — массив строк, с названиями зелья;
// getPotions() — метод, возвращающий значение свойства potions;
// addPotion() — метод, принимающий параметр объекта нового зелья newPotion и добавляющий его в конец массива в свойстве potions.
// Добавь метод объекта getTotalPrice(), который должен возвращать общую стоимость всех зелий по свойству potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//     },
  
//     getTotalPrice() {
//         let totalPrice = 0;

//         for (const potion of this.potions) {
//             totalPrice += potion.price;
//         }
//         return totalPrice
//     },
// };

// console.log(atTheOldToad.getPotions()); // [{name: 'Speed potion', price: 460}, {name: 'Stone skin', price: 520}]

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.getPotions()); // [{name: 'Speed potion', price: 460}, {name: 'Stone skin', price: 520}, {name: 'Invisibility', price: 620}]

// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// console.log(atTheOldToad.getPotions()); // [{name: 'Speed potion', price: 460}, {name: 'Stone skin', price: 520}, {name: 'Invisibility', price: 620}, {name: 'Power potion', price: 270}]

// console.log(atTheOldToad.getTotalPrice()); // 1870




// Метод changeRating ожидает название книги, которой необходимо изменить рейтинг, и новое значение рейтинга, которое нужно подменить в объекте.
// Перебор массива объектов в цикле, например for...of.
// Добавление проверки совпадения значения свойства объекта в текущей итерации и заданного значения (if).
// После вызова метода changeRating свойство rating объекта с совпадающим названием bookName будет обновлено на newRating.

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 			 book.rating = newRating;
// 			}
//         }
//         	}
// };

// bookShelf.changeRating("The Mist", 9);
// bookShelf.changeRating("The Last Kingdom", 4);

// console.log(bookShelf.books);




// Объект atTheOldToad обладает следующими свойствами:
// potions — массив объектов зелья;
// getPotions() — метод, возвращающий значение свойства potions;
// updatePotionName() — метод, принимающий два параметра строк oldName и newName;

// Дополни метод updatePotionName(oldName, newName) таким образом, чтобы он обновлял название зелья с oldName на newName в массиве свойства potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//     updatePotionName(oldName, newName) {
      
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//             }
//         }
//   },
// };


// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.potions); // [{name: 'Speed potion', price: 460}, {name: 'Invisibility', price: 520}]


// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.potions); // [{name: 'Polymorth', price: 460}, {name: 'Invisibility', price: 520}]




// Используя синтаксис остаточных параметров (...rest), дополни код функции add() так, чтобы она принимала любое количество аргументов в параметр args и возвращала их сумму.


// function add(...args) {
//   let sum = 0;
//   for (const num of args) {
//      sum += num;
//   }
//   return sum;
// }

// console.log(add(15, 27)); // 42
// console.log(add(12, 4, 11, 48)); // 75
// console.log(add(32, 6, 13, 19, 8)); // 78




// Функция addOverNum() принимает случайное количество аргументов чисел.
// Дополни код функции таким образом, чтобы она вычисляла сумму только тех аргументов, которые больше заданного числа, числа которое всегда будет передано первым аргументом.
// Для решения этой задачи сделать следующее:
// 1) Первый параметр value представляет заданное число, а остальные аргументы собраны синтаксисом (...args);
// 2) Внутри функции инициализирована переменная для хранения общей суммы;
// 3) Затем каждому аргументу  пройден с помощью цикла;
// 4) Если аргумент больше указанного числа, он добавлен к общей сумме;
// 5) Возврат общей сумму из функции

// function addOverNum(value, ...args) {
//   let sum = 0;
//   for (const num of args) {
//     if (num > value) {
//     sum += num;
//    }
//   }
//   return sum;
//  }



// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 218
      





// Функция getExtremeScores(scores) принимает массив отметок (чисел) в параметре scores.
// Дополни код функции так, чтобы она возвращала объект с двумя свойствами:
// Свойство best должно содержать наибольшее число из массива scores;
// Свойство worst должно содержать наименьшее число из массива scores.
// Используй оператор (...spread) и методы Math.max() и Math.min().

// function getExtremeScores(scores) {
//   const object = { best: 0, worst: 0 };
//   object.best = Math.max(...scores);
//   object.worst = Math.min(...scores);
//   return object;
//  }


// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); // { best: 81, worst: 4 }






// В переменных firstGroupScores, secondGroupScores  и thirdGroupScores хранятся результаты тестирования отдельных групп.
// Используя распыление, дополни код таким образом, чтобы:
// 1) В переменной allScores сохранялся массив всех результатов от первой до третьей группы включительно.
// 2) В переменной bestScore был самый высокий общий балл.
// 3) В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// console.log(bestScore); // 97
// console.log(worstScore); // 14




// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }




// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }





// В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию, которые хранятся в переменной defaultSettings. При создании теста все или часть настроек можно переопределить, пользовательские настройки сохраняются в переменной overrideSettings.
// Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределенные пользовательские настройки.
// Запиши код finalSettings таким образом, чтобы в переменной образовался объект финальных настроек теста.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {...defaultSettings, ...overrideSettings};



// console.log(finalSettings); // { theme: "light",  public: "false",  withPassword: "true",  minNumberOfQuestions: 10,  timePerQuestion: 30}

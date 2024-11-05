

// const user = {
//   username: "Victor",
//   showName() {
// 		// ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
//     return user.username;
//   },
// };

// console.log(user.showName());



// const user = {
//   username: "Victor",
//   showName() {
// 		// ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     return this.username;
//   },
// };

// console.log(user.showName());




// Выполни рефакторинг методов объекта pizzaPalace, расставив отсутствующие this в местах обращения к свойствам и методам объекта.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.checkPizza("Smoked"));


// console.log(pizzaPalace.order("Smoked")); // "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); // "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // "Sorry, there is no pizza named «Viennese»"




//call

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };


// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"




//apply

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"





//bind

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello;

// greet(); // TypeError: Cannot read properties of undefined (reading 'username')




// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"





// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice"
// };

// const greet = sayHello.bind(user);

// greet("Hello");




//bind & callback

"use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
// 	const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')



// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"






// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks();




// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount); // TypeError: Cannot read properties of undefined (reading 'firstName')



// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount.bind(library));




// Контекст внутри стрелочной функции определяется местом объявления, а не вызова.
// this внутри стрелки ссылается на контекст родительской области видимости, в которой она была объявлена и никогда не меняется.


// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window



// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// const user = {
//   username: "Mango",
// };

// showThis.call(user); // this in showThis: window


// "use strict";

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window


// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}





// function showThis() {
//   console.log("this in showThis: ", this.username);
// };

// showThis.call({ username: "Mango" }); // this in showThis: Mango
// showThis.apply({ username: "Mango" }); // this in showThis: Mango

// const boundShowThis = showThis.bind({ username: "Mango" });
// boundShowThis(); // this in showThis: Mango

//В отличие от обычных функций изменить значение this внутри стрелки после ее объявления невозможно. Это означает, что методы call, apply и bind не влияют на значение в стрелках.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis.call({ username: "Mango" }); // this in showThis: window
// showThis.apply({ username: "Mango" }); // this in showThis: window

// const boundShowThis = showThis.bind({ username: "Mango" });
// boundShowThis(); // this in showThis: window



// const a = () => {
// 	console.log(this);
// };

// function b() {
// 	a();
// }

// b.call({ user: "Mango" }); // window


// const a = () => {
// 	console.log(this.user);
// };

// function b() {
// 	a();
// }

// b.call({ user: "Mango" }); // undefined (window не содержит user)




// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// // Объект, на который указывает ссылка в свойстве  [[Prototype]] называется прототипом. В нашем примере объект  animal – это прототип для объекта  dog.

// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// // Обращение  dog.name работает очевидным образом: возвращает свойство  name объекта  dog. Обращаясь к  dog.legs, интерпретатор ищет свойство  legs в объекте  dog, не находит и продолжает поиск в объекте по ссылке с  [[Prototype]], то есть в этом случае в объекте  animal – его прототипе.






// Измени код таким образом, чтобы объект parent стал прототипом для объекта в переменной сhild.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;


// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.hasOwnProperty("heritage")); // true
// console.log(child.hasOwnProperty("name")); // true
// console.log(child.name); // "Jason"
// console.log(child.hasOwnProperty("age")); // true
// console.log(child.age); // 27



// const customer = {
// 	username: "Jacob"
// };

// const animal = {
// 	legs: 4
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false




// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// Свойство name принадлежит объекту dog, поэтому называется собственным свойством объекта dog.
// Свойство legs не принадлежит объекту dog. Это свойство его прототипа animal, поэтому оно называется несобственным свойством объекта dog.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false




// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }

// Для выбора именно собственных свойств при переборе циклом for...in необходимо на каждой итерации добавить проверку на собственное свойство методом obj.hasOwnProperty(key). Этот метод возвращает  true, если свойство с именем key принадлежит объекту  obj, а не его прототипу, в противном случае —  false.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
// 	if(dog.hasOwnProperty(key)) {
// 		console.log(key); // "name"
// 	}
// }



// Методы  Object.keys(obj) и Object.values(obj) возвращают массив только собственных ключей или значений только собственных свойств объекта obj без необходимости дополнительных проверок. Поэтому на практике используют именно их с циклом for...of вместо for...in и hasOwnProperty.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for(const key of Object.keys(dog)) {
// 	console.log(key); // "name"
// }




// Цепочки прототипов
// Цепочка прототипов строится с конца, то есть справа налево.

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// // Поскольку объекты objA, objB и objC связанные с цепочкой прототипов, объект objA может получить доступ к свойствам objB и objC, а объект objB — к свойствам objC.

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined





// Измени код, построив цепочку прототипов таким образом, чтобы объект ancestor был прототипом для parent, а тот, в свою очередь, был прототипом для child.

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;


// console.log(ancestor.isPrototypeOf("parent")); // false
// console.log(parent.isPrototypeOf("child")); // false
// console.log(ancestor.hasOwnProperty("surname")); // true
// console.log(ancestor.surname); // "Dawson"
// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.surname); // "Moore"
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); // "Moore"
// console.log(ancestor.hasOwnProperty("heritage")); // true
// console.log(ancestor.heritage); // "Irish"
// console.log(parent.hasOwnProperty("heritage")); // false
// console.log(parent.heritage); // "Irish"
// console.log(child.hasOwnProperty("heritage")); // false
// console.log(child.heritage); // "Irish"










// Процедурное программирование

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));



// Объектно-ориентированное программирование

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

// При таком подходе отсутствуют или почти отсутствуют глобальные переменные. Методы не зависят от параметров, а используют свойства объекта, задаваемые при его создании и могут быть изменены другими методами




// Классы

// class User {
//   // Тіло класу
// }

// После того, как класс был объявлен, можно создать его экземпляр с помощью специального оператора new, поставив его перед вызовом класса. Результатом вызова new User() будет экземпляр класса User. Он будет содержать данные и иметь поведение, описанное в классе.

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}




// Для инициализации экземпляра класса используется метод constructor.

// class  User {
//    // Синтаксис объявления метода класса
//   constructor () {
// 		 // ...
//   }
// }



// Вызов класса с оператором new приводит к созданию нового объекта и автоматическому вызову метода constructor.

// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}



// Передаваемые при вызове аргументы new User() становятся значениями параметров для метода constructor.

// class User {
//   constructor(name, email) {
// 		console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}




// Mетод constructor вызывается в контексте создаваемого экземпляра.

// class User {
//   constructor(name, email) {
//     // Инициализация свойств экземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// Таким образом, this внутри конструктора ссылается на вновь созданный объект.
// Это позволяет придавать каждому объекту свойства с одинаковыми именами, но разными значениями.






// Добавь классу Car метод constructor, который принимает три параметра:

// brand  - автомобильный бренд
// model - модель автомобиля
// price - цена на автомобиль
// Класс Car должен создать объект с однотипными свойствами brand, model и price, которые получают свои значения из аргументов, передаваемых при создании нового экземпляра с помощью оператора new.

// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }

// console.log(new Car("Audi", "Q3", 36000)); // {brand: "Audi", model: "Q3", price: 36000}
// console.log(new Car("BMW", "X5", 58900)); // {brand: "BMW", model: "X5", price: 58900}
// console.log(new Car("Nissan", "Murano", 31700)); // {brand: "Nissan", model: "Murano", price: 31700}




// Класс может принимать большое количество данных для свойств будущего объекта.
//  К ним также можно применять шаблон "Объект параметров", передав один объект с логически названными свойствами вместо несвязанного набора аргументов.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango);
// // { name: "Mango", email: "mango@mail.com" }



// Выполни рефакторинг класса Car таким образом, чтобы он принимал один параметр - объект со свойствами brand, model и price.

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // {brand: "Audi", model: "Q3", price: 36000}
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 })); // {brand: "BMW", model: "X5", price: 58900}
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); // {brand: "Nissan", model: "Murano", price: 31700}




//Методы классов

// Методы классов используются для работы с свойствами будущего экземпляра.
// Для доступа к свойствам в методах используется ключевое слово this, так как методы будут вызываться в контексте объекта экземпляра.

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// // После создания экземпляра вы можете использовать объявленные методы класса, которые будут иметь доступ к свойствам объекта, который их вызвал.

// const mango = new User({
// 	name: "Mango",
// 	email: "mango@mail.com"
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"


// // Методы класса добавляются к специальному объекту, который хранится в свойстве prototype самого класса.

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}





// Приватные поля класса

// Предположим, что почта пользователя должна быть недоступна для прямого изменения извне, то есть, приватной. Добавляя символ # к имени свойства в начале, мы делаем его приватным. Объявление приватного свойства перед инициализацией в конструкторе является обязательным.

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість

// Для получения или изменения значения приватного свойства используются публичные методы.

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"





// Выполни рефакторинг класса Car таким образом, чтобы свойство brand было приватным, и добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() – возвращает значение приватного свойства brand.
// changeBrand(newBrand) – изменяет значение приватного свойства brand на newBrand.

// class Car {
//     #brand;
//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
  
//     getBrand() {
//         return this.#brand;
//   }
  
//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
  
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // { model: "Q3", price: 36000 }
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 })); // { model: "X5", price: 58900 }
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); // { model: "Murano", price: 31700 }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }).getBrand()); // Audi
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }).getBrand()); // bmw
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }).getBrand()); // Nissan

// const rebranding = new Car({
//     brand: "X",
//     model: "Q3",
//     price: 36000
// });
 
// console.log(rebranding.getBrand());

// rebranding.changeBrand("Honda");

// console.log(rebranding.getBrand());




// Приватные методы

// Иногда нужно не просто получать или изменять адрес электронной почты, но и проводить определенные действия, которые должны быть скрыты от "внешнего мира".
// Скажем, каждый раз, когда электронная почта меняется, нужно валидировать ее формат.

// Это можно сделать с помощью приватных методов. Добавляя к названию метода в начале символ #, мы делаем его приватным.

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Публичный метод для получения электронной почты
//   getEmail() {
//     return this.#email;
//   }

//   // Публичный метод для изменения электронной почты
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   // Приватный метод для валидации электронной почты
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // Попробуем изменить электронную почту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// Прямой вызов приватного метода извне приведёт к ошибке
// mango.#validateEmail('test'); // Ошибка


// В этом примере приватный метод #validateEmail обеспечивает дополнительную логику для валидации электронной почты.

// Этот метод не доступен извне класса, поэтому пользователи (или другие разработчики) не могут вызывать его напрямую. Они могут использовать публичный метод changeEmail, который в свою очередь использует частный метод для валидации.





// Гетеры и сеттеры

// Геттеры и сеттеры - это специальный синтаксис объявления методов для взаимодействия со свойствами.

// считается хорошей практикой называть гетеры и сеттеры так же, как и свойство, с которым они работают. Это упрощает чтение кода и его понимание.

// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// // возвращаем значение приватного свойства #email с помощью геттера
// // изменяем ее значение с помощью сеттера
 
// const mango = new User({
// 	name: "Mango",
// 	email: "mango@mail.com"
// });

// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";

// console.log(mango.email); // mango@supermail.com

// Обращаясь к mango.email, вызывается геттер  get email() {...} и выполняется его код.
// При попытке записи  mango.email = "mango@supermail.com" вызывается сеттер  set email(newEmail) {...}, и строка " mango@supermail.com " будет являться значением параметра  newEmail.





// Преимущество в том, что это методы. Следовательно, при записи или чтении можно выполнить дополнительный код с любыми проверками.

// set email(newEmail) {
//   if(newEmail === "") {
//         return;
//   }
//   this.#email = newEmail;
// }





// Выполни рефакторинг класса Car. Дополнительно к частному свойству #brand сделай частными свойства model и price. Стандартизируй публичный интерфейс класса, заменив уже объявленные методы геттерами и сеттерами brand, model и price, для взаимодействия с частными свойствами.


// class Car {
//     #brand;
//     #model;
//     #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }



// Статические свойства

// Свойства, доступные только классу, но не его экземплярам — это статические свойства . Они полезны для хранения информации, относящейся к классу.

// class  MyClass {
// 	 static myProp = "value" ;
// }

// console.log (MyClass.myProp ) ; // "value"

// У экземпляра нет доступа к статическим свойствам класса.


// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
// 		basic: "basic"
//   };

//   #email;
//   #role;

//  constructor(params) {
//     this.#email = params.email;
//     this.#role = params.role || User.roles.basic;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   });

// console.log(mango.role); // "basic"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"



// Выполни рефакторинг класса Car. Добавь публичное статическое свойство maxPrice со значением число 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку значения newPrice передаваемого параметра. Если оно больше maxPrice, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

// Под объявлением класса мы добавили инициализации экземпляров и вызовы методов, чтобы показать, как будут использоваться гетеры и сеттеры price.

// class Car {
//     static maxPrice = 50000;

//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
    
//         if (newPrice > Car.maxPrice) {
//             return;
//         }
//            this.#price = newPrice;
//     }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000







// Статические методы

// class MyClass {
//   static myMethod() {
//     console.log("A static method");
//   }
// }

// MyClass.myMethod(); // "A static method"




// Добавим в класс User:
// статическое свойство takenEmails для хранения занятых почт пользователей
// статический метод isEmailTaken проверяет, доступна ли почта

// При инициализации экземпляра в конструкторе класса будем добавлять почту в список занятых.

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true





// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значение параметра price и частного статического свойства maxPrice.

// Если цена автомобиля превышает максимальное, метод должен вернуть строку "Error! Price exceeds the maximum".
// В противном случае метод должен вернуть строку "Success! Price is within acceptable limits".
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать, как будет использоваться метод checkPrice(price).


// class Car {
//     static #maxPrice = 50000;

//     static checkPrice(price) {
//       if (price > this.#maxPrice) {
//           return `Error! Price exceeds the maximum`;
//         }
//         return `Success! Price is within acceptable limits`;
//     }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"





// Наследование классов

// Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) подражает свойствам и методам другого класса (родительского).

// class Parent {}

// class Child extends Parent {
//   // ...
// }

// Это означает, что мы можем объявить базовый класс, который сохраняет общие характеристики и методы для группы производных классов, которые наследуют свойства и методы родительского, но также добавляют свои уникальные.

// создать общий класс User, который будет сохранять набор общих свойств и методов
// после чего создать классы для каждого типа пользователя, наследующих этот набор от класса User


// При необходимости изменить что-либо общее, достаточно будет изменить только код класса User.

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
// 	// Тело класса ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// Класс ContentEditor наследует от класса User его конструктор, геттер и сеттер email, а также приватное свойство #email






// В приложении требуется администратор с возможностью добавления почты пользователей в черный список.

// Объяви класс Admin, который наследует от класса User
// Добавь классу Admin публичное статическое свойство role (уровень доступа), значение которого - объект {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//     static role = {
//         BASIC: "basic",
//         SUPERUSER: "superuser"
//     }
// }

// console.log(Admin.role.BASIC); // "basic"
// console.log(Admin.role.SUPERUSER); // "superuser"



// Конструктор дочернего класса


// В конструкторе дочернего класса необходимо вызвать специальную функцию super(args) - это псевдоним конструктора родительского класса.

// При вызове конструктора родительского класса передаем необходимые ему аргументы для инициализации свойств.

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email);

//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({
// 	email: "mango@mail.com",
// 	posts: []
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"




// Добавь классу Admin метод constructor, принимающий один параметр params - объект настроек с двумя свойствами email и access. Добавь классу Admin публичное свойство access, значение которого будет передаваться при вызове конструктора

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {

//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
  
//     constructor(params) {
//         super(params.email);
//         this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// console.log(Admin.role.BASIC); // "basic"
// console.log(Admin.role.SUPERUSER); // "superuser"





// Методы дочернего класса

// Дочерний класс может использовать методы и свойства родительского класса. Кроме этого, в дочернем классе можно объявлять методы, которые будут доступны только его экземплярам.


// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({
// 	email: "mango@mail.com",
// 	posts: []
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost("post-1");
// editor.addPost("post-2");
// console.log(editor.posts); // ['post-1', 'post-2']

// User — это базовый класс, обладающий частным свойством #email.

// ContentEditor расширяет класс User и имеет собственное свойство posts. Класс ContentEditor также имеет метод addPost, позволяющий добавлять новые сообщения в posts.

// Метод addPost - это метод дочернего класса ContentEditor. Он будет доступен только экземплярам ContentEditor.





// Добавь классу Admin следующие свойства и методы:
// Публичное свойство blacklistedEmails для хранения черного списка почтовых адресов пользователей. Значение по умолчанию - это пустой массив.
// Публичный метод blacklist(email) для добавления почты в черный список. Метод должен добавлять значение параметра email в массив, хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в черном списке. Метод должен проверять наличие значения параметра email в массиве, хранящемся в свойстве blacklistedEmails, и возвращать true или false.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
  
   
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails = [];
//   }
  
//    blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
   
//     isBlacklisted(email) {
//      return this.blacklistedEmails.includes(email);
//  }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true



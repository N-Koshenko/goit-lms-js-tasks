
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



// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]




// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());





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


// function createCounter() {
//   let counter = 0;
//   return {
//     increment: function () {
//       return counter++;
//     },
//     decrement: function () {
//       return counter--;
//     }
//   }
// }


// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.increment())

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))
// removeDuplicates([1, 2, 2, 3, 4, 4]);

// function secondSymbol(s, symbol) {
//   let firstOccuranceIndex;
//   return s.split('').findIndex((char) => {

//     if (char === symbol) {
//       if (firstOccuranceIndex) {
//         return true;
//       }
//       firstOccuranceIndex = true;
//     }

//     return false;

//   });

// }

// const secondSymbol = (s, symbol) => s.indexOf(symbol, s.indexOf(symbol) + 1);

// console.log(secondSymbol('Hello world!!!', 'l'))
// console.log(secondSymbol('Hello world!!!', 'o'))
// console.log(secondSymbol('Hello world!!!', 'A'))



// function orderWeight(strng) {
//   const arr = strng.split(' ');
//   const weightWithSums = arr.map((el) => {
//     const sum = [...el].reduce((acc, num) => acc += Number(num), 0);
//     return { value: el, digitSum: sum }
//   })
//   const sortedSums = weightWithSums.toSorted((a, b) => a.digitSum - b.digitSum);
//   return sortedSums.map(el => el.value);

// }

// console.log(orderWeight("103 123 4444 99 2000"))
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))

// console.log((0.1 * 10 + 0.2 * 10) / 10)

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log('Met the number 5, interrupt the execution of the cycle');
//     break;
//   }
// }

// console.log('Log after cycle');

// function sum(a, b) {
//   const res = arguments;
//   console.log(res)
//   return a + b;
// }

// sum(2, 5);

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
//   changeRating(bookName, newRating) {
//     for (const book of this.books) {
//       if (book.title === bookName) {
//         book.rating = newRating;
//       }
//     }
//   },
// };
// console.log(bookShelf.getAvarageRating())
// bookShelf.getAvarageRating(); // 7
// bookShelf.changeRating("The Mist", 4)
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

// registerGuest("Mango", greet); // "Registering Mango!"
// // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];


// const uniqueCourses = students.flatMap(student => student.courses)
//   .filter((course, index, arr) => arr.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueCourses)

// [[Prototype]]

// const animal = {
//   legs: 4
// }

// const dog = Object.create(animal);
// dog.name = 'Tob';
// console.log(dog);
// console.log(dog.legs)
// console.log(dog.hasOwnProperty("legs"));

// class User {
//   #email;
//   static role = 'admin';

//   constructor(params) {
//     this.name = params.name;
//     this.title = params.title;
//     this.#email = params.email;
//   }

//   getName() {
//     return this.name;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   #validateEmail(newEmail) {
//     return newEmail.includes('@');
//   }

//   changeName(newName) {
//     this.name = newName;
//   }

//   changeEmail(newEmail) {
//     return this.#validateEmail(newEmail) ? this.#email = newEmail : 'Wrong format';
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
//     super(params)
//     this.posts = params.posts;
//   }
// }
// const admin = new User({ name: 'T', title: 'admin', email: 'TTTT@tt.com' });
// console.log(Object.getPrototypeOf(admin) === User.prototype);
// console.log(admin.getEmail());
// console.log(admin.changeEmail('gg'))
// console.log(admin.email);
// admin.email = 'tttgggg';
// console.log(admin.email);
// console.log(User.prototype);
// const editor = new ContentEditor({ name: 'ggg', title: 'ggg', email: 'ggg' })
// console.log(editor)

// class User {
//   constructor(email) {
//     this.email = email;
//   }
// }

// class Editor extends User {

//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new Editor({ email: 'email&f', posts: [] });
// console.log(editor)
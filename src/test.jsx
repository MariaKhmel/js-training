import axios from 'axios';

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
//   static role = 'base'
//   constructor(email) {
//     this.email = email;
//   }

//   static getRole() {
//     return this.role;
//   }
// }

// class Editor extends User {

//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new Editor({ email: 'email&f', posts: [] });
// console.log(Editor.getRole())

const menu = document.querySelector('.menu');
const elements = document.querySelectorAll('.menu-item');
console.log(menu.id);
console.log(elements);

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action);

saveBtn.addEventListener('click', e => {
  console.log(e.target);
});

document.addEventListener('keydown', e => {
  console.log(e.code);
  console.log(e.key);
});

const firstCallback = () => console.log('1st click');
const secondCallback = () => console.log('2nd click');
const thirdCallback = () => console.log('3rd click');

const multiclickBtn = document.querySelector('button[data-action="multi"]');
multiclickBtn.addEventListener('click', firstCallback);
multiclickBtn.addEventListener('click', secondCallback);
multiclickBtn.addEventListener('click', thirdCallback);

const form = document.querySelector('form');
const input = document.querySelector('input');
const localStorageKey = 'input';

input.value = localStorage.getItem(localStorageKey) ?? '';

form.addEventListener('input', e => {
  localStorage.setItem(localStorageKey, e.target.value);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.target.elements.input.value);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

const letters = '0123456ABCDEF';

const parent = document.querySelector('#parent');
const descendant = document.querySelector('#descendant');

const generateRandomHexColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};
parent.addEventListener('click', e => {
  console.log(e.target.nodeName);
});

const refs = {
  selectedColorOutput: document.querySelector('.output'),
  palette: document.querySelector('.colorPalette'),
};

refs.palette.addEventListener('click', getSelectedColor);

function createColorPalette() {
  const buttonsList = document.createElement('ul');
  buttonsList.classList.add('buttonList');
  for (let i = 1; i <= 60; i += 1) {
    const li = document.createElement('li');
    const colorButton = document.createElement('button');
    colorButton.type = 'button';
    colorButton.classList.add('colorButton');
    const color = generateRandomHexColor();
    colorButton.style.backgroundColor = color;
    colorButton.dataset.color = color;
    li.append(colorButton);
    buttonsList.append(li);
  }

  refs.palette.append(buttonsList);
}

createColorPalette();

function getSelectedColor(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const selectedColor = e.target.dataset.color;
  console.log(selectedColor);
  refs.selectedColorOutput.textContent = `Selected color - ${selectedColor}`;
}

console.log(localStorage);

const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('success');
//     } else {
//       reject('failed')
//     }
//   }, 2000)
// })
// promise.then((value) => {
//   return value;
// }).then(value => console.log(typeof value))

// const fetchUserFromServer = (userName, onSuccess, onError) => {
//   console.log(`Fetching data for ${userName}`);

//   const isSuccess = true;

//   setTimeout(() => {
//     if (isSuccess) {
//       onSuccess('success');
//     } else {
//       onError('error');
//     }
//   }, 2000)

// }

// fetchUserFromServer('Tim', (value) => console.log(value), (value) => console.log(value))

// const fetchUserFromServer = (userName) => {
//   console.log(`Fetching data for ${userName}`);
//   const isSuccess = true;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isSuccess) {
//         resolve('success');
//       } else {
//         reject('error');
//       }
//     }, 2000)
//   })

// }

// fetchUserFromServer('Tim')
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// Promise.resolve("success value")
//   .then(value => {
//     console.log(value);
//     throw new Error('wrong')
//   })
//   .catch(error => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Fulfilled A');
//   }, 1000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Fulfilled B');
//   }, 3000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Rejected C');
//   }, 2000);
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error)); // "Rejected C"

// const fetchUsersBtn = document.querySelector(
//   'button[data-action="fetchUsers"]'
// );
// const usersList = document.querySelector('.usersList');

// fetchUsersBtn.addEventListener('click', () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => {
//       return res.json();
//     })
//     .then(users => {
//       const markup = users
//         .map(
//           user =>
//             `<li key=${user.id}>
//             <p>${user.name}</p>
//           </li>`
//         )
//         .join('');

//       usersList.insertAdjacentHTML('beforeend', markup);
//     });
// });

// const postToAdd = {
//   title: 'CRUD',
//   body: 'CRUD is awesome!',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(res => res.json())
//   .then(result => console.log(result));

const fetchUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

fetchUsers().then(data => console.log(data));
const result = 10 / 0;
console.log(result);

const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];

const newUsers = [
  {
    id: 4,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 5,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 6,
    name: "Mike",
    isActive: false,
    age: 30,
  },
];


// for (i = 0; i < users.length; i += 1) {
//   names.push(users[i].name);
// }

// users.forEach(user => names.push(user.name))


// const names = users.reduce((iterator, user) => {
//   iterator.push(user.name);
//   return iterator;
// }, [])


// const names = users.sort((user1, user2) => user2.age - user1.age).filter(user => user.isActive).map(user => user.name);
// console.log(names);


// const createCounter = () => {
//   let counterValue = 0;

//   return {
//     increment: () => counterValue += 1,
//     getVal: () => counterValue,
//   }
// }

// const counter1 = createCounter();

// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.getVal())
// const counter2 = createCounter();
// console.log(counter2.increment());
// console.log(counter2.increment());
// console.log(counter2.increment());


// const multiply = (a, b) => {
//   if (b) {
//     return a * b;
//   }
//   return (c) => a * c;

// }

// const multiply = num1 => num2 => num1 * num2;

// console.log(multiply(5, 2));
// console.log(multiply(5)(2));

// const append = (array, el) => {
//   return [...array, el]
// }


// console.log(append(users, 'p'))

// const concat = (arr1, arr2) => {
//   return [...arr1, ...arr2];
//   // return arr1.concat(arr2);
// }

// const first = [1];
// const second = [1];
// console.log(concat(first, second));

// const checkUserName = (name) => {
//   let exists = false;
//   users.map(user => {
//     if (user.name === name) {
//       exists = true;
//     }
//   });

//   return exists;
// }

// const checkUserName = (arr, userName) => arr.some(arr => arr.name === userName);

// const checkUserName = (arr, userName) => {
//   return arr.find(el => el.name === userName);
// }

// console.log(checkUserName(users, 'Jack'))

// const arr = [1, 2, 3, 1, 2, 3];
// const uniqueValues = [...new Set(arr)];
// console.log(uniqueValues)

// const uniqueArr = arr => {
//   const result = [];

//   arr.map(el => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   })

//   return result;
// }
// console.log(uniqueArr(arr));

// const uniqueArr = arr => {
//   return arr.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       acc.push(el);
//     }
//     return acc;
//   }, [])
// }

// const uniqueArr = arr => {
//   return arr.reduce((acc, el) => {
//     return acc.includes(el) ? acc : [...acc, el];
//   }, [])
// }
// console.log(uniqueArr(arr))

// const arr = [1, 2, 3, 1, 2, 3];


// const sortArr = arr => {
//   return [...arr].sort((firstEl, nextEl) => firstEl - nextEl)

// }

// console.log(sortArr(arr));

// const names = ['masha', 'nicadamus', 'masik'];


// const sortArr = (arr) => {
//   return [...arr].sort((firstEl, secondEl) => firstEl.toLocaleCompare(secondEl));
// }

// const sortArr = (arr) => {
//   console.log(arr)
//   return [...arr].sort((firstEl, secondEl) => firstEl.toLocaleCompare(secondEl));
// }

// console.log(sortArr(names));

const sortArr = (arr) => {
  return [...arr].toSorted((firstEl, secondEl) => firstEl.localeCompare(secondEl));
}

const names = ['masha', 'nicadamus', 'masik'];
const sortedNames = sortArr(names);

console.log(sortedNames);
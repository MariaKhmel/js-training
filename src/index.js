// const users = [
//   {
//     id: 1,
//     name: "Jack",
//     isActive: true,
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "John",
//     isActive: true,
//     age: 18,
//   },
//   {
//     id: 3,
//     name: "Mike",
//     isActive: false,
//     age: 30,
//   },
// ];

import { Children } from "react";

// const newUsers = [
//   {
//     id: 4,
//     name: "Jack",
//     isActive: true,
//     age: 20,
//   },
//   {
//     id: 5,
//     name: "John",
//     isActive: true,
//     age: 18,
//   },
//   {
//     id: 6,
//     name: "Mike",
//     isActive: false,
//     age: 30,
//   },
// ];


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

// const sortArr = (arr) => {
//   return [...arr].toSorted((firstEl, secondEl) => firstEl.localeCompare(secondEl));
// }

// const names = ['masha', 'nicadamus', 'masik'];
// const sortedNames = sortArr(names);

// console.log(sortedNames);

// const saveSecretWord = () => {
//   const secretWord = 'secret';

//   return {
//     getSecretWord() {
//       return secretWord;
//     },
//   }

// }

// const secretObject = saveSecretWord();
// const secretWord = secretObject.getSecretWord();
// console.log(secretWord)

// const saveSecretWord = () => {
//   const secretWord = 'secret';

//   return () => secretWord;

// }


// const secretWord = saveSecretWord();
// console.log(secretWord())

// const obj = { a: 2, b: 3 };

// const clone = Object.assign({}, obj);
// clone.c = 5;

// const clone2 = { ...obj };
// console.log(clone2);

// const findvowels = stringToCheck => {
//   let vowelCounter = 0;
//   const vowels = ['a', 'o', 'i', 'e', 'u'];
//   stringToCheck.split(',').map(item => {
//     if (vowels.includes(item)) {
//       vowelCounter += 1;
//     }
//   })

//   return vowelCounter;
// }

// console.log(findvowels("a,g,b,n,t,r,u,i,o,j,k"));

// const findvowels = str => {
//   const vowels = ['a', 'o', 'i', 'e', 'u'];
//   const inputArray = str.split(',');

//   return inputArray.reduce((acc, el) => {
//     const loweredCaseEl = el.toLowerCase();
//     if (vowels.includes(loweredCaseEl)) acc += 1;
//     return acc;
//   }, 0);
// }

// console.log(findvowels("a,g,b,n,t,r,u,i,o,j,k"));

// const str = "Welcome to this neighbourhood!";


// const reverseStr = (str) => {
//   const strArr = str.split(' ');
//   return strArr.toReversed().join(' ');
// }

// console.log(reverseStr(str));

// const findCommonStr = arr => {
//   const commonStrObj = {};
//   arr.forEach(str => {
//     if (commonStrObj[str] === undefined) {
//       commonStrObj[str] = 1;
//     } else {
//       commonStrObj[str]++
//     }
//   })

//   let maxEntry;
//   let maxValue = 0;

//   for (str in commonStrObj) {
//     if (commonStrObj[str] > maxValue) {
//       maxValue = commonStrObj[str];
//       maxEntry = str;
//     }
//   }

//   return maxEntry;

// }

// const arr = ['a', 'k', 'b', 'k'];
// console.log(findCommonStr(arr));


// const person = {
//   'name': 'Ram',
//   age: 22,
// }

// console.log(Object.entries(person))

// const getObjectEntries = obj => {
//   const keys = Object.keys(obj);
//   const result = keys.map(key => {
//     const value = obj[key];
//     return [key, value];
//   })

//   return result;
// }

// console.log(getObjectEntries(person));

// const num = 5;
// console.log([...Array(num + 1).keys()].slice(1))

// const input = [2, 7, 11, 4, -2];
// const output = [20, 15, 11, 18, 24];

// const output = input.reduce((acc, el) => {
//   const indexOfEl = input.indexOf(el);
//   let sum = 0;
//   input.map(number => sum += number);
//   acc.push(sum - input[indexOfEl]);
//   return acc;
// }, [])

// console.log(output)

// const arr = [2, 3, 4, 5];

// const doubleNumbers = arr.map(function (number) {
//   return number * 2
// });
// console.log(doubleNumbers);

// const person = {
//   name: 'Tom',
//   sayHi: function () {
//     return `Hello, ${this.name} `;
//   }
// }

// console.log(person.sayHi());

// const user = {
//   name: 'Tom',
//   address: {
//     street: 'St.Patrick'
//   }
// }

// const user = null

// const { name, address } = { ...user };
// const { street } = { ...address };
// console.log(name, street);

// const str = "aa bb aa";

// const result = [...new Set(str.split(" "))].join(" ");
// const tryr = new Set(str.split(" "));
// console.log(typeof tryr)
// console.log(result);


// const arr = ['aaa', 'bbb', 'ccc'];

// Array.prototype.myForEach = function (callback) {
//   for (let i = 0; i < this.length; i += 1) {
//     callback(this[i], i, this);
//   }
// }

// arr.myForEach(el => console.log(el))

// const str = 'This is string to reverse';

// const reversedString = str.split(" ").reverse().join(" ");

// console.log(reversedString);
// console.log(str)

// const arr = ['hello', 'javascript', 'array', 'javascript', 'javascript', 'hello'];

// const findOccurance = arr => {
//   const obj = {}
//   arr.forEach((el) => {
//     if (obj[el] !== undefined) {
//       obj[el] += 1;
//     } else {
//       obj[el] = 1;
//     }

//   })
//   return obj;
// }

// const findOccurance = arr => {
//   return arr.reduce((acc, el) => {
//     if (acc[el] !== undefined) {
//       acc[el] += 1;
//     } else {
//       acc[el] = 1;
//     }
//     return acc;
//   }, {})
// }

// console.log(findOccurance(arr));

// const numArr = [4, 4, 6, 3, 2,2, -8];

// const findMaxNum = numbers => {
//   let maxNum = numbers[0];
//   numbers.forEach(num => {
//     if (num > maxNum) {

//       maxNum = num;
//     }
//   })
//   return maxNum;
// }

// const findMaxNum = numbers => numbers.reduce((prev, curr) => prev > curr ? prev : curr);

// console.log(findMaxNum(numArr));

// const numArr = [4, 4, 6, 3, 2, 2, -8];

// const findUniqueValue = arr => {
//   return [...new Set(arr)];
// }

// const findUniqueValue = arr => {
//   const newArr = [];
//   arr.forEach(el => {
//     if (!newArr.includes(el)) {
//       newArr.push(el);
//     }
//   })
//   return newArr;
// }

// const findUniqueValue = arr => {
//   return arr.reduce((acc, el) => {
//     if (!acc.includes(el)) {
//       acc.push(el);
//     }

//     return acc;
//   }, [])
// }

// const findUniqueValue = arr => {
//   return arr.filter((el, i, array) => array.indexOf(el) === i);
// }

// console.log(findUniqueValue(numArr));

// const arr = ['lets', 'learn', 'software', 'development'];

// const sentenceMaker = array => {
//   return array.join(' ');
// }

// console.log(sentenceMaker(arr))

// const reverseArr = arr => {
//   return arr.toReversed();
// };


// const reverseArr = (arr) => arr.reduceRight((acc, elem) => {
//   acc.push(elem);
//   return acc;
// }, [])


// console.log(reverseArr(arr));

// console.log(arr)

// const arr = [false, undefined, 0, 1, 'Coding', null, -10];

// const removeFalsyValues = arr => {
//   return arr.filter(el => Boolean(el) !== false)
// }

// console.log(removeFalsyValues(arr));

// const str = '25';

// console.log(typeof parseInt(str))

// const obj = {
//   'name': 'Tom',
//   'age': 25,
// }

// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// console.log(Object.keys(obj))
// const values = [];
// for (const el in obj) {
//   if (obj.hasOwnProperty(el)) {
//     values.push(obj[el])
//   }


// }
// console.log(values)

// const entries = Object.entries(obj);
// console.log(entries);

// const keys = [];
// const values = [];

// entries.map(el => {
//   keys.push(el[0]);
//   values.push(el[1]);
// })

// console.log(keys);
// console.log(values);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const extractLastElements = (num) => {
//   const arrLength = numbers.length;
//   const numberToRemove = arrLength - num;
//   return numbers.slice(-num);
// }

// console.log(extractLastElements(2))

// const numbers = [1, -2, 3, -4, 5, -6, -7, 8, 9];

// const countNegativeNums = (arr) => {
//   const positiveNumbers = [];
//   arr.forEach(el => {
//     if (el < 0) {
//       positiveNumbers.push(el);
//     }
//   })

//   return positiveNumbers;
// }


// const countNegativeNums = (arr) => {
//   return arr.reduce((acc, curr) => {
//     if (curr < 0) {
//       acc.push(curr);
//     };
//     return acc;
//   }, []).length;
// }

// const countNegativeNums = (arr) => {
//   return arr.reduce((acc, curr) => curr < 0 ? acc + 1 : acc, 0);
// }

// const countNegativeNums = (arr) => {
//   const negativeNymbers = arr.filter(el => el < 0);
//   return negativeNymbers.length;
// }
// console.log(countNegativeNums(numbers));

// const numsArr = [10, 10, 10, 10];

// const checkIfNumbersAreSame = numbers => {
//   let isSame = true;
//   numbers.forEach((el, index, array) => {
//     const nextIdx = index + 1;
//     if (array[nextIdx] && el !== array[nextIdx]) {
//       isSame = false;
//     }
//   })
//   return isSame;
// }
// const checkIfNumbersAreSame = numbers => [...new Set(numbers)].length === 1;

// const checkIfNumbersAreSame = numbers => numbers.every((el, i, arr) => arr[0] === el);

// console.log(checkIfNumbersAreSame(numsArr));

// Array.prototype.checkIfNumbersAreSame = function () {
//   for (let i = 0; i < this.length; i += 1) {
//     if (this[0] !== this[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(numsArr.checkIfNumbersAreSame())

// console.log(Object.getOwnPropertyNames(Array.prototype));

// const obj = {
//   temp: 30,
//   windSpeed: 13,
// }

// const renameObjKeys = obj => {
//   const { temp: wa_temp, windSpeed: wa_windSpeed } = obj;

//   const newObj = Object.assign({}, { wa_temp, wa_windSpeed });
//   return newObj;
// }


// const renameObjKeys = obj => {

//   const newObj = Object.fromEntries(Object.entries(obj).map(([key, value]) => [`wa_${key}`, value]));

//   return newObj;
// }



// console.log(renameObjKeys(obj));


// const obj = {
//   temp: 30,
//   windSpeed: 13,
//   humidity: 0.4,
// }


// const mapper = {
//   temp: "wa_temp",
//   windSpeed: "fe_windSpeed",
//   humidity: "ta_humidity",
// }


// const renameKeys = data => {

//   let mappedObject = {};

//   Object.keys(data).forEach(key => {
//     if (mapper[key]) {
//       mappedObject[mapper[key]] = obj[key];
//     } else {
//       mappedObject[key] = obj[key];
//     }
//   })

//   return mappedObject;

// }

// console.log(renameKeys(obj))

// const str = "le t's con cat the st r";

// console.log(str.replace(/ /g, ""))

// console.log(str.split(' ').join(''))

// const removeStrSpaces = text => {
//   let trimmedStr = '';

//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i].trim()) {
//       trimmedStr += str[i];
//     }
//   }

//   return trimmedStr;

// }

// console.log(removeStrSpaces(str));


const movie = {
  title: 'Inception',
  director: 'Christopher Nolan',
  releaseYear: 2010,
  genre: 'Science Fiction',
  duration: 148,
  rating: 8.8,
  leadActor: 'Leonardo DiCaprio',
  boxOffice: '836.8 million USD'
};

// delete movie.boxOffice;
// console.log(movie)

// const removeProps = (obj, arr) => {
//   const keys = Object.keys(obj);
//   keys.forEach(el => {
//     if (arr.includes(el)) {
//       delete obj.key;
//     }
//   })

//   return obj;

// }


// const removeProps = (obj, arr) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     delete obj[arr[i]];
//   }

//   return obj;
// }

// const removeProps = (obj, arr) => {
//   for (const key of arr) {
//     delete obj[key];
//   }

//   return obj;
// }


// console.log(removeProps(movie, ['boxOffice', 'rating']))

// const str = '090 110 997 06';

// const swapValues = (data, v1, v2) => {

//   let swapedStr = '';
//   for (let i = 0; i < data.length; i += 1) {
//     if (data[i] === v1) {
//       swapedStr += v2;
//     } else if (data[i] === v2) {
//       swapedStr += v1;
//     } else {
//       swapedStr += data[i];
//     }
//   }

//   return swapedStr;
// }
// const swapValues = (data, v1, v2) => {
//   return [...data].map(value => value === v1 ? v2 : value === v2 ? v1 : value).join('');
// }

// console.log(swapValues(str, "9", "0"));

// const boomRangsArr = [2, 7, 2, 1, 1, 5, 1, 2, 2, -2, 2];

// const countboomRangs = arr => {
//   let count = 0;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== arr[i + 1] && arr[i] === arr[i + 2]) {
//       count += 1;
//     }
//   }

//   return count;
// }

// console.log(countboomRangs(boomRangsArr));


// const memoizedValues = {};

// const normalMultiplyBy5 = num => {
//   if (num in memoizedValues) {
//     return memoizedValues[num];
//   } else {
//     memoizedValues[num] = num * 5;
//     return memoizedValues[num];
//   }

// }

// console.log(normalMultiplyBy5(2));
// console.log(normalMultiplyBy5(2));
// console.log(normalMultiplyBy5(3));
// console.log(normalMultiplyBy5(4));

// const numbers = [2, 3, 4, 5];

// numbers.forEach(el => el * 2);
// console.log(numbers)


// const multiplyBy2 = (number, cb) => {
// return setTimeout(() => {
//   cb(number * 2);
// }, 1000)

//   const promise = new Promise((resolve, reject) => {
//     return setTimeout(() => {
//       resolve(number * 2);
//     }, 1000)
//   })

//   return promise;

// }

// const keepMultiplying = async num => {
// multiplyBy2(num, (result1) => {
//   multiplyBy2(result1, result2 => {
//     multiplyBy2(result2, result3 => {
//       console.log(result3);
//     })
//   })
// });

// multiplyBy2(num).then(result1 => multiplyBy2(result1)
//   .then(result2 => multiplyBy2(result2))
//   .then(result3 => multiplyBy2(result3))
//   .then(result4 => console.log(result4))
// );

//   const result1 = await multiplyBy2(num);
//   const result2 = await multiplyBy2(result1);
//   const result3 = await multiplyBy2(result2);
//   const result4 = await multiplyBy2(result3);
//   console.log(result4);

// }

// keepMultiplying(10);
// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100

// let price = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 0

// const arr = [1, 2, 3, 4];

// const res = arr.map((el) => el * 2);
// console.log(res);
// const res2 = arr.forEach((el, index, array) => (array[index] = el * 4));
// console.log(arr);

// const postToUpdate = {
//   id: 1,
//   body: "CRUD is really awesome!",
// };

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(post => console.log(post))
//   .catch(error => console.log("ERROR:", error));

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then((deletedPost) => console.log(deletedPost))
//   .catch(error => console.log("Error:", error)); 
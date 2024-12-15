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




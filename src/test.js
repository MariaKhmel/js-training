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

// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//   }
// }

// console.log(likes([]));
// console.log(likes(['Peter']));
// console.log(likes(['Jacob', 'Alex']));
// console.log(likes(['Max', 'John', 'Mark']));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// weights array - is golden ore pieces weights
// n - is the weight of figurine
//
// return an array describing the left and right scale pans, 
// prepared to test that the figurine (possibly weighing n) 
// placed on the right pan afterward will balance the scales
function weightN(weights, n) {

  // for this example, let's assume there are at least 3 ore pieces

  const left = [weights[0], weights[2]];
  const right = [weights[1]];

  return [left, right];
}
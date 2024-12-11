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

function removeDuplicates(arr) {
  return arr.filter((el, index, arr) => arr.indexOf(el) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))
removeDuplicates([1, 2, 2, 3, 4, 4]); // Expected output: [1, 2, 3, 4]
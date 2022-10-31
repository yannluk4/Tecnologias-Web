const isEven = number => number % 2 === 0;

//Questão 1
function isArray(arr) {
  return Array.isArray(arr);
}

//Questão 2
function cloneArray(arr) {
  if (!isArray(arr)) return;
  return arr.slice();
}

//Questão 3
function arrayElements(arr, n = 1) {
  const output = [];
  for (let i = 0; i < n; i++) {
    output.push(arr[i]);
  }
  return output;
}

//Questão 4
function arrayLastElements(arr, n = 1) {
  return arr.slice(-n);
}

//Questão 5
function arrayToString(arr) {
  return arr.join("");
}

//Questão 6
function minusEveryTwoEvenNumbers(number) {
  const numbers = number.toString();
  const output = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    const previousState = numbers[i - 1];
    if (previousState % 2 === 0 && numbers[i] % 2 === 0) {
      output.push("-");
    }
    output.push(numbers[i]);
  }
  return arrayToString(output);
}

//Questão 7
function theMostFrequentNumber(arr) {
  let highestNumber = [undefined, 0];
  const frequences = {};
  arr.map(element => {
    if (element in frequences) {
      frequences[element] += 1;
    } else {
      frequences[element] = 1;
    }
  });
  Object.entries(frequences).forEach(element => {
    if (element[1] > highestNumber[1]) {
      highestNumber = element;
    }
  });
  return Number(highestNumber[0]);
}

//Questão 8
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

//Questão 9
function sumArrays() {
  const output = [];
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      arguments[i].forEach((element, index) => {
        if (output[index] === undefined) {
          output[index] = element;
        } else {
          output[index] += element;
        }
      });
    }
  }
  return output;
}

//Questão 10
function mergeArrays() {
  const output = arguments[0];
  if (arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      arguments[i].map(element => output.push(element));
    }
  }
  return output;
}

// main
const array1 = [2, 2, 2, 2, 7, 7, 7, 8, 8, 8];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [4, 4, 4, 4, 7, 7, 7, 9, 9, 9, 2];
const num = 1;
const numeros = 222346;

console.log(isArray(array1));
console.log(isArray(num));
console.log(arrayElements(array1));
console.log(arrayElements(array1, 4));
console.log(arrayLastElements(array1));
console.log(arrayLastElements(array1, 4));
console.log(minusEveryTwoEvenNumbers(numeros));
console.log(theMostFrequentNumber(array1));
console.log(removeDuplicates(array1));
console.log(sumArrays(array1, array1, array3));
console.log(mergeArrays(array1, array2));
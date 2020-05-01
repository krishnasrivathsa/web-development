// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2) {
  let result = num1 >= num2 ? num1 : num2;
  return result;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(arr) {


  console.log(arr.map(elm => ({ [elm]: elm.length })))

  if (arr.length > 0) {
    return arr.
      reduce((acc, cur) => acc.length >= cur.length ? acc : acc = cur,
        0);
  } else {
    return null;
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(arr) {
  if (arr.length > 0) {
    return arr.
      reduce((acc, cur) => acc + cur);
  } else return 0;
}
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg() {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(elmt[i], 10);
  }
  var avg = sum / arr.length;
  return avg
}

function add() {

}
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numsArr) {
  if (numsArr.length > 0) {
    let sum = numsArr.reduce((acc, cur) => acc + cur);
    let avg = sum / numsArr.length;
    return avg;
  } else return null;
}


// Progression 4.2: Array of strings
const items = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr) {
  var sum = 0;
  if (wordsArr.length > 0) {
    for (var i = 0; i < wordsArr.length; i++) {
      sum += wordsArr[i].length;
    }
    var avg = sum / wordsArr.length;
    return avg;
  }
  else
    return null;
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsArr) {

  return wordsArr.filter((elm, idx, arr) => arr.indexOf(elm) == idx);

}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsArr, wordSearch) {

  return wordsArr.includes(wordSearch) || null
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
function howManyTimesElementRepeated(wordsArr, wordSearch) {

  return wordsArr.filter(elm => elm === wordSearch).length
}

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix, n = 4) {
  let greatest = [];

  for (let a = 0; a < matrix.length; a++) {
    for (let i = 0; i <= matrix[a].length - n; i++) {
      let prod = 1;
      for (let j = i; j < i + n; j++) {
        prod *= matrix[a][j];
      }
      greatest.push(prod);
    }
  }

  for (let a = 0; a < matrix.length; a++) {
    for (let i = 0; i <= matrix.length - n; i++) {
      let prod = 1;
      for (let j = i; j < i + n; j++) {
        prod *= matrix[j][a];
      }
      greatest.push(prod);
    }
  }

  for (let a = 0; a <= matrix.length - n; a++) {
    for (let i = 0; i <= matrix[a].length - n; i++) {
      let prod = 1;
      for (let j = 0; j < n; j++) {
        prod *= matrix[a + j][i + j];
      }
      greatest.push(prod);
    }
  }
  return Math.max(...greatest);
}

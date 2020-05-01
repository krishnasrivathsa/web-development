// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
function get_names() {
  var proGrad_1 = process.argv[2];
  console.log(`" The driver\'s name is ${proGrad_1}"`);
  var proGrad_2 = process.argv[3];
  console.log(`" The navigators\'s name is ${proGrad_2}"`);
}

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

function length1(a) {
  var len = 0;
  while (a[len] !== undefined)
    len++;

}
function compare(var1, var2) {
  if (var1 > var2)
    process.stdout.write(`The driver has the longest name, it has` + ' ' + var1 + ' ' + `characters.`);
  else if (var2 > var1)
    process.stdout.write(
      'It seems that the navigator has the longest name, it has' + ' ' + var2 + ' ' + 'characters.');
  else
    process.stdout.write('Wow, you both have equally long names,' + ' ' + var1 + ' ' + 'characters!.');
}


// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.

function vowel() {
  var rl = require('readline');
  var prompts = rl.createInterface(process.stdin, process.stdout);
  prompts.question("name: ", function (str) {
    process.stdout.write(str + ' ');
    for (var i = 0; i < str.length; i++) {
      if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U')
        process.stdout.write(str[i] + ' ');
    }
    for (var i = 0; i < str.length; i++) {
      if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U')
        process.stdout.write(i + ' ');
    }
    process.exit();
  });
}


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters


function upperandlower() {
  var rl = require('readline');
  var prompts = rl.createInterface(process.stdin, process.stdout);
  prompts.question('string: ', function (str) {
    console.log(str + ' ');
    var count = 0;
    var count1 = 0;
    for (var i = 0; i < str.length; i++) {
      var ch = str.charAt(i);
      if (ch >= 'A' && ch <= 'Z')
        count++;
    }
    console.log('Upper case :' + count + ' ');
    for (var i = 0; i < str.length; i++) {
      var ch = str.charAt(i);
      if (ch >= 'a' && ch <= 'z')
        count1++;
    }
    console.log('Lower case :' + count1 + ' ');
    process.exit();
  });
}


// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Driver\'s name:', (str) => {
      var ret = "";
      for (var i = 0; i < str.length; i++) {
        ret += String.fromCharCode(str.charCodeAt(i) & 223);
      }
      console.log(ret);
      process.stdout.write(ret + ' ');

      resolve()
    });
  });
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Navigators\'s name:', (str1) => {
      var ret1 = "";
      for (let i = str1.length - 1; i >= 0; i--) {
        ret1 += str1[i];
      }

      console.log(ret1);
      resolve()
    });
  });
}

const main = async () => {
  await question1()
  await question2()
  rl.close()
}

main()

function merge() {
  var proGrad_1 = process.argv[2];
  var proGrad_2 = process.argv[3];
  console.log(proGrad_1 + ' ' + proGrad_2);
}


// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

function strcmp(a, b) {
  var proGrad_1 = process.argv[2];
  var proGrad_2 = process.argv[3];
  if (proGrad_1 === proGrad_2) {
    process.stdout.write(`What?! You both have the same name?`);
  }

  if (proGrad_1 > proGrad_2) {
    process.stdout.write(`Yo, the navigator goes first definitely.`);

  }
  else
    process.stdout.write(`The driver's name goes first.`);
}


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'

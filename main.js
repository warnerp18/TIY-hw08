/**
 * 1. create a new repo on Github called TIY-hw08 (08 for the day,
 * 2. add this script file to your index.html and run it in the browser to get the output
 * 3. debug and see the console.log() messages in the chrome dev tools
 */

/**
 *Things I learned:
 * 1. using ===: false === "false" is not true because "false" is a string
 * 2. To check the type of an object it is much better to use Object.prototype.toString instead of using typeof. More reliable.
 * 3. instanceof should be used only when dealing with "custom made objects that originate from the same JavaScript context"
 * 
 *
 * 
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------
function max(a, b){
    "use strict";
    if (a > b) {
 return a
     } else {
     return b };
 }
 

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function max(sum1, sum2, sum3){
    "use strict";
    if (sum1 > sum2 && sum1 > sum3) {
 return sum1
     } else if (sum2 > sum3) {
     return sum2;
      } else { return sum3};
 }
 

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
function isVowel(char){
    "use strict";
 var vowel = "aeiou"

    if (a === vowel) { return "true"

    } else { return "false"};
    
}
/** Matt's Code/Example Below used for other answer but used peices of this to answer above question:
function rovarspraket(phrase){
    "use strict";
    return phrase.split("").map(function(letter){
        /**
         * letter in each iteration is a character,
         * we test this character whether it is a consonant,
         * if so, return letter+'o'+letter
         * else, just return letter
         * @type {String}
         */
      /**  return "aeiouAEIOU \"'/\\".indexOf(letter) >= 0 ? letter : letter+"o"+letter;

    }).join("");
} */

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket("this is fun"){
    "use strict";
    var vowels = "aeiou"
    return.phrase.split("").map(function(letter))

    return "aeiou".indexof(letter) >=0? letter : letter+"o"+letter
}
//"this is fun".split("")
 //   var vowels = "aeiou";
  //  vowels.indexOf("t")
// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(1,2,3,4){
    "use strict";

}

function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){ 
    "use strict";
    var words = [ "I", "be", "weekend", "today"];

    words.sort(function (a,b){
return a > b ? -1 : 1;})
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}

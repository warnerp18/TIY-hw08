 // * 1. create a new repo on Github called TIY-hw08 (08 for the day,
 //* 2. add this script file to your index.html and run it in the browser to get the output
 //* 3. debug and see the console.log() messages in the chrome dev tools
 //*/

 /**
  *
  */

 // ---------------------
 // Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
 // ---------------------

 function max(a, b) {
     "use strict";
     if (a > b) {
         return a;
     } else {
         return b;
     }
 }
 console.log(max(2, 5));


 // ---------------------
 // Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
 // ---------------------

 function max(sum1, sum2, sum3) {
     "use strict";
     if (sum1 > sum2 && sum1 > sum3) {
         return sum1;
     } else if (sum2 > sum3) {
         return sum2;
     } else {
         return sum3;
     }
 }
 console.log(max(4, 7, 10))

 // ---------------------
 // Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
 // ---------------------

 function isVowel(char) {
     "use strict";
     return ['a', 'e', 'i', 'o', 'u'].indexOf(char) === 0
 }

 console.log(isVowel("a"));
 // ---------------------
 // Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
 // ---------------------

 function rovarspraket(phrase) {
     var resultArray = "";

     for (var i = 0; i < phrase.length; i++) {
         resultArray +=
             "aeiouAEIOU \"'/\\".indexOf(phrase[i]) >= 0 ? phrase[i] : phrase[i] + "o" + phrase[i];
     }

     return resultArray;
 }
 console.log(rovarspraket("what the..."))

 // ---------------------
 // Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
 // ---------------------
 function sum(a, b, c, d) {
     "use strict";
     return a + b + c + d;
 }

 function multiply(a, b, c, d) {
     "use strict";
     return a * b * c * d;
 }
 console.log(sum(1, 2, 3, 4));
 console.log(multiply(1, 2, 3, 10));

 // ---------------------
 // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
 // ---------------------

 function reverse(s) {
     "use strict";
     return s.split("").reverse().join("");
 }
 console.log(reverse("jag testar"));

 // ---------------------
 // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
 // ---------------------



 // doesn't work???



 function findLongestWord(a, b, c) {
     "use strict";
     var animals = ["cat", "bull", "rhino"];
     animals.sort(function(a, b, c) {
         return a > b ? -1 : 1;
     });
 }
 console.log(findLongestWord("cat", "bull", "rhino"));

 // ---------------------
 // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
 // ---------------------

//doesn't work?? I get "matt" if each name is in own quotes are in quotes. If all in one quote i get all names

 function filterLongWords(words, i) {
     "use strict";

         var i = 5;
         if (i <= words.length);
         return words;
     }

     console.log(filterLongWords("matt steve bob gregory"));

 // ---------------------
 // Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
 // ---------------------


 // still a little confused about this one



 function charFreq(string) {
     "use strict";
     var characters = {};

     for (var i = 0; i < string.length; i++) {

         characters[string[i]] =
             (characters[string[i]] === undefined) ?
             1 :
             characters[string[i]] + 1;
     }
     return characters;
 }
 console.log(charFreq("asflkjdsf asdlfkjsd sa23"));


 // // the object characters is empty

 // // we pass in a string called "hhllo"

 // // let's set this object characters equal to 

 // // Does the characters object have a property that is equal to the value of hello at index equal to 0 which is h?

 // // There is no property h in our characters object so let's define it and set it equal to a value of 1

 // // loop again with i equal to 1

 // // Does the characters object have a property that is equal to the value of hello at index equal to 1 which is h?

 // // Yes, this proprety is defined and has a value equal to 1, so set the value of the characters object whose property is the same
 // // as the value of the string at index=1 (which is also h) and let's increment it by 1. So now this property (which is h) is equal
 // // to 2.
 //     }

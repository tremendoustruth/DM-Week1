//SOME AWESOME METHODS FOR STRINGS
//                                         
let practice_with_some_strings = "Hello, world";
//an object wrapper around all primitives String(practice_with_some_strings)
let str = 'hello';
let temp = new String("new string"); // wrapper object
console.log(temp);
temp.custom = 1;
console.log(temp.custom);
//obtaining portions of a string
//substring and return "ell" ----->
console.log(practice_with_some_strings.substring(1,4));
//slice and return "worl" -----> 
console.log(practice_with_some_strings.slice(7,-2));
//split and return an array of both words -----> 
console.log(practice_with_some_strings.split(" "));
//Bonus: what method can take an array of words and put them back together
// Answer: the .join() method joins an array of words and returns a string. Example below.
exampleArray = ["Hello,", "world!!!!"]
combinedString = exampleArray.join(" ");
console.log(combinedString);
//searching a string
//indexOf "H" ----> 0
console.log(practice_with_some_strings.indexOf("H"));
//lastIndexOf "l" ----> 10
console.log(practice_with_some_strings.lastIndexOf("l"));
//boolean searching funtions
//startsWith "Hello" gives us?---> true
console.log(practice_with_some_strings.startsWith("Hello")); 
//endsWith "!" ---> false
console.log(practice_with_some_strings.endsWith("!"));
//includes "no" ---> false
console.log(practice_with_some_strings.includes("no"));
//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"
newHey = practice_with_some_strings.replace("llo", "ya");
console.log(newHey);
//toLowerCase ---> take a guess lol
console.log(practice_with_some_strings.toLowerCase());
//toUpperCase ---> take another guess
console.log(practice_with_some_strings.toUpperCase());
//inspecting individual characters of a string
//charAt 0 ---> 
console.log(practice_with_some_strings.charAt(0));
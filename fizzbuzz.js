//Write a program that counts from 1 to 50 in fizzbuzz fashion.
//To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.

for (let i=1; i<=50; i++){
    if (i%5===0 && i%3===0){console.log("fizzbuzz");
}
    else if (i%5===0){console.log("buzz");
}
    else if (i%3===0){console.log("fizz");
}
    else {console.log(i);}
}
let randomStuff = ["roof", null, "car", false, undefined]
randomStuff.unshift("puppies")
randomStuff.push("taxes")
randomStuff.splice(3,2,627)
let randomThing = randomStuff.slice(2,3)
for(let i = 0; i < randomStuff.length; i++){
    console.log(randomStuff[i])}

console.log(randomThing)
let sample = [1, 4, 11, 2, 37, -4];
let smallest = sample[0]
for (let i=0; i < sample.length; i++){console.log(sample[i]);}

//Notes at 10:28 
for (i=20; i>= 0; i-=2){
    console.log(i)
}
let myNum = 15

if(myNum % 5 === 0){
    console.log("I am divisible by 5")
} else if (myNum % 3 === 0){
    console.log("I am divisible by 3")
} else if(myNum % 5 === 0 && myNum % 3 === 0){
    console.log("I am divisible by 3 and 5")
}
let words = ["purple","blue","orange","green","yellow"]

let colorStr = "Some colors I like are "

for(i = 0; i < words.length; i++){
    if(i % 2 && i != 0 && i != words.length){
        colorStr += `${words[i]}, `
    } else if(i === words.length-1){
        colorStr += `and ${words[i]}.`
    }
}

console.log(colorStr)
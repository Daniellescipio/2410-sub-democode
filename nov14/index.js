const animals = ["hamster", "cat", "dog", "horse", "hippo", "aligator", "ape", "kangaroo"]

function shortestAnimal(){
    let shortest 
    for(let i=0;i<animals.length;i++){
        if(i===0){
           shortest= animals[i]
        }else{
            //every loop after that will compare the current shortest to the next element in the array
            const currentShortest = shortest.length
            const currentAnimal = animals[i].length
            if(currentAnimal<currentShortest){
                shortest = animals[i]
            }
        }
    }
    return shortest
}

function longestAnimal(){
    let longest 
    for(let i=0;i<animals.length;i++){
        if(i===0){
           longest= animals[i]
        }else{
            //every loop after that will compare the current longest to the next element in the array
            const currentLongest = longest.length
            const currentAnimal = animals[i].length
            if(currentAnimal>currentLongest){
                longest = animals[i]
            }
        }
    }
    return longest
}


console.log(shortestAnimal())
console.log(longestAnimal())




//Calculator

const add = (numOne, numTwo)=>{
 return numOne + numTwo
}
const sub = (numOne, numTwo)=>{
 return numOne - numTwo
}
const mult = (numOne, numTwo)=>{
 return numOne * numTwo
}
const div = (numOne, numTwo)=>{
 return numOne /numTwo
}

let numOne = Number(prompt("Please enter a number!"))
while(!Number(numOne)){
    numOne = prompt("That's not a number! Try again")
}
let numTwo = prompt("Please enter another number!")
while(!Number(numTwo)){
    numTwo = prompt("That's not a number! Try again")
}

let operator = prompt("Select an operation [*,+,-,/]")
const operations = ["*","+","-","/"]
//includes<----true if it's in the array and false if it's not
//indexOf<---- -num if it's not in the array and the index of the item if it is in the array
while(!operations.includes(operator)){
    operator = prompt("Sorry I don't know how to do that! Try one of these-->[*,+,-,/]")
}

if(operator === "+"){
   alert( add((numOne),(numTwo)))
}else if(operator === "-"){
    alert(sub((numOne),(numTwo)))
}else if(operator === "*"){
   alert( mult((numOne),(numTwo)))
}else{
   alert( div((numOne),(numTwo)))
}



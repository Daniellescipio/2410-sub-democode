const myFunct = ()=>{
    return "This is a method"
}

function tester(){
    return "This is another method"
}

const shoe = {
    brand:"converse",
    hasLaces:true,
    hasVelcro:false,
    colors:["green", "white", "black"],
    price:50,
    activityType:"walking",
    anything:tester
}
//console.log(shoe.anything())
// const colors = shoe.colors
// console.log(colors[2])


//console.log("the whole object:", shoe, "and the colors are:", shoe.colors)
//console.log("shoe before addition:",shoe)
//bracket notation is for dynamically searching through an object
//dot notation is for static searches


// function returnKeyValue(key){
//     return shoe[key]
// }
// returnKeyValue("brand")

shoe.hasHeels =false
shoe.colors =false
shoe["newProperty"] = "this is a new property"
//shoe.colors =false
shoe["activityType"] = "this is a changed property"
delete shoe.hasVelcro
delete shoe["price"]
//  const key word
// variable name
//in key word
// //object name
// for(const key in shoe){
//     console.log("the key is:",key)
//     console.log("the value is:",shoe[key])
// }


// console.log("the values of the array are:", Object.values(shoe))
// console.log("the keys of the array are:", Object.keys(shoe))
//shoe.myfunction()


const dinner = {
    cheeseburger:12,
    steak:20,
    soup:8,
    mac:14,
    soupCombo: 16
}

const lunch = {
    cheeseburger:12,
    apples:60,
    soup:8,
    sandwhich:89,
    soupCombo: 16
}

// console.log(Object.keys(dinner))
// console.log(Object.values(dinner))
let total = 0
for(const key in dinner){
    total = total +dinner[key]
}
//console.log("The total paid at dinner was", total, " dollars")

const prices = Object.values(dinner)
//console.log(prices)

let newTotal =0
for(let i=0;i<prices.length;i++){
    newTotal = newTotal +prices[i]
}
//console.log("calculated with a for loop, the total is",newTotal, " dollars")



const myDynamicFunction = (meal) =>{
    let total = 0
    for(const key in meal){
        total = total +meal[key]
    }
    return("The total paid at meal was "+ total+ " dollars")
}
console.log(myDynamicFunction(dinner))
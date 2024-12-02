//declare a function with an array as a parameter
//loop through the parameter array and add all the numbers
//I'll need a variable outside the loop to track my sum
//use an if statement to decide if the sum is even or odd
//I'll need a variable to track even/odd
//return the varaible keeping track of even/odd
const numbers = [2,3,2] //14 ->even
// const evenOrOdd = (nums)=>{
//     let sum  =0 
//     for(let i=0;i<nums.length;i++){
//         sum = sum + nums[i]
//     }
//     let final 
//     if(sum%2===0){
//         final = "even"
//     }else{
//         final = "odd"
//     }
//     return final
// }

// console.log(evenOrOdd(numbers))
//it does not return anything
//does something "for each" item of the array
//numbers.forEach((num, index)=>{console.log(num*10)})

//const findFuntion = num=>num <0

//returns the first item in the array that meets the return condition
const firstOdd = numbers.find(num=> num <0)
//console.log(firstOdd)

//returns an array of the same length as the original array
const timesTen = numbers.map(num=> num*10)
//console.log(timesTen)

//does not change any values in your array
const evens = numbers.filter(num=> {
    let final 
    if(num %2===0 && num%3===0){
            final= true
    }
        return final
    }
)
const odds = numbers.filter((num)=>{return num%2!==0})
console.log(odds, evens)

//reduce takes an array and turns it into anything
// this is a comment
//
/*1
2
3*/
const sum = numbers.reduce((final, num)=>{
    final = final + num
    if(final%2===0){
        final = "even"
    }
    return final
},0)
console.log(sum)
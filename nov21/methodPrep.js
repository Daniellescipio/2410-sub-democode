const ages = [12,34,61,3,17,83,14,9,55,72]
const names = ["Abby", "Joe", "Jane", "Max", "Phillip", "Jake", "Cleo", "Mary", "Tasha", "Erin"]
//Map --- create an array of the same length
//create a new array that tells how long each name is
const lengths = []
for(let i =0; i<names.length;i++){
    lengths.push(names[i].length)
}
//console.log(lengths)
//Filter -- create a smaller array or the same length
//create an array with only the ages over 21
const over21 = []
//const under21=[]
for(let i =0; i<ages.length;i++){
   if( ages[i]>=21){
    over21.push(ages[i])
   }
}
//console.log(over21)
//ForEach -- does something for each item in the array
//assign each name an age in an object
for(let i =0; i<names.length;i++){
  const obj = {
    name:  names[i],
    age:ages[i]
  }
//  console.log(obj)
}

//reduce -- and return anything
//add all the ages
let sum =0
for(let i =0; i<ages.length;i++){
    console.log(sum)
    sum = sum + ages[i]
    console.log("+", ages[i],"=",sum)
}
console.log(sum, "AFTER")
//find
//find the name with 7 letters
let sevenLetters 
for(let i =0; i<names.length;i++){
    if(names[i].length===7){
        sevenLetters = names[i]
        {break}
    }else{
        sevenLetters = false
    }
    console.log(names[i])
}
console.log(sevenLetters)


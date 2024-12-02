// const ages = [12,34,61,3,17,83,14,9,55,72]
// const names = ["Abby", "Joe", "Jane", "Max", "Phillip", "Jake", "Cleo", "Mary", "Tasha", "Erin"]
// // //Map --- create an array of the same length
// // //create a new array that tells how long each name is

// // // const lengths = []
// // // for(let i =0; i<names.length;i++){
// // //     lengths.push(names[i].length)
// // // }
// // // //console.log(lengths)
// //does not mutate array -- creates a new array
// const lengths = names.map(name=>name.length)
// console.log(lengths, names)

// const ages = [12,34,61,3,17,83,14,9,55,72]
// const names = ["Abby", "Joe", "Jane", "Max", "Phillip", "Jake", "Cleo", "Mary", "Tasha", "Erin"]
// //Filter -- create a smaller array or the same length
// //create an array with only the ages over 21

// // const over21 = []
// // //const under21=[]
// // for(let i =0; i<ages.length;i++){
// //    if( ages[i]>=21){
// //     over21.push(ages[i])
// //    }
// // }
// // //console.log(over21)
// function myFunction(age){
//     return age >21
// }
// //with an anonymous function
// const over21 = ages.filter((age)=>{
//     return age >21
// })
// //with a prewritten function
// const over21Againg = ages.filter(myFunction)

// console.log(over21, over21Againg, ages)

// const ages = [12,34,61,3,17,83,14,9,55,72]
// const names = ["Abby", "Joe", "Jane", "Max", "Phillip", "Jake", "Cleo", "Mary", "Tasha", "Erin"]
// // //ForEach -- does something for each item in the array
// // //assign each name an age in an object

// // for(let i =0; i<names.length;i++){
// //   const obj = {
// //      id:0
// //     name:  names[i],
// //     age:ages[i]
// //   }
// // //  console.log(obj)
// // }
// const obj={

// }
// names.forEach((name, index)=>{
//     console.log({
//         id:index+1,
//         name:name,
//         age:ages[index]
//     })
// })

// const ages = [12,34,61,3,17,83,14,9,55,72]
// const names = ["Abby", "Joe", "Jane", "Max", "Phillip", "Jake", "Cleo", "Mary", "Tasha", "Erin"]
// // //reduce -- and return anything
// // //write a sentence telling how old each person is
// // let sum =0
// // for(let i =0; i<ages.length;i++){
// //     console.log(sum)
// //     sum = sum + ages[i]
// //     console.log("+", ages[i],"=",sum)
// // }
// // console.log(sum, "AFTER")

// // const longString = names.reduce((final, name, index)=>{
// //     final= final + name + " is " +ages[index]+" "
// //     console.log(final, "inside")
// //     return final
// // },"")
// // console.log(longString, "outside")
// //return an object with names as keys and ages as values
// const bigObject = names.reduce((final, name, index)=>{
//     final[name] = ages[index]
//     console.log(final, "inside")
//     return final
// },{})
// console.log(bigObject)

const ages = [12,34,61,3,17,83,14,9,55,72]
const names = ["Abby", "Joe", "Jane", "Max", "Phillip", "Jake", "Cleo", "Mary", "Tasha", "Erin"]
// //find
// //find the name with 7 letters
// let sevenLetters 
// for(let i =0; i<names.length;i++){
//     if(names[i].length===7){
//         sevenLetters = names[i]
//         {break}
//     }else{
//         sevenLetters = false
//     }
//     console.log(names[i])
// }
// console.log(sevenLetters)
const sevenLetter = names.find(name=> name.length>=7)
console.log(sevenLetter)
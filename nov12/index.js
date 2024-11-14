// const animal0 = "cat"
// const animal1 = "dog"
// const animal2 = "mouse"
// const animal3 = "bird"
// const animal4 = "aligator"
// //                 0       1      2      3          4           5
// const animals = ["cat", "dog", "mouse","anaconda", "bird", "aligator"]
// const snacks=[]
// snacks.push("candy")
// const people = ["joe", "amy"]


// console.log(animals, "before")

// animals[0] = "hamster"

// console.log(animals, "after")

//does the method mutate/change the array?


//pop -- remove an item from the end of our array, this mutates our array
// console.log(animals.pop(), "this is what is returned from the pop method")
// console.log(animals)
// console.log(animals.length)
// console.log("the last one is", animals[animals.length-1])

//push -- adds an item to the end of our array , this mutates our array
// console.log(animals.push("parrot"))
// console.log(animals)


//shift --removes an item from the beginning of the array, this mutates our array
// console.log(animals.shift())
// console.log(animals)

//unshift --adds an item to the beginning of our array
// console.log(animals.unshift("lion"))
// console.log(animals)

//slice --takes a slice from your array and puts it in a new array , this does NOT mutate our array
//const animalSub = animals.slice(2,5)
// console.log(animalSub, "subset")
// console.log(animals, "after")


// //splice --removes or adds items to an array, removed items can be stored in another array, this mutates our array
// console.log(animals.splice(2,3, "tiger", "whale"))
// console.log(animals)

// //                  0           1       2           3           4           5           6       7
// const week = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" , "bumbleday"]

// //for loop to teach javascript the days and order of the week
// //
// for(let i=0; i <= week.length-1 ;i++){
//     //console.log("this is the", i, "loop")
//    // console.log("there are", i, "cookies in the")
//     console.log("this is the", i, "index and it is:", week[i])
// }

//  //                0           1       2
// const shoes = ["sneakers", "heels", "boots"]
// // shoes.push("skates")
// // shoes.shift()

// for(let i=0 ; i<=shoes.length-1 ; i++){
//     console.log(i)
//     console.log("the current shoe is : ",shoes[i], "and it's index in the array is:",i)
// }



// let cookieJar = 10

// while(cookieJar>0){
//     cookieJar--
//     console.log("Yum, that cookie was tasty, now there are only", cookieJar, "cookies left")

// }
// console.log("No more cookies :(")



//SCOPE

const globalScope = "This is a Global variable"

const myScopeFunction = (functScope1)=>{
    const functScope2 = "This can only be read inside the function"
    console.log(globalScope)
}
myScopeFunction()
//console.log(functScope2)
//if, forloops, and while loop <----block scoped

if(true){
    let arr = [1,2,3]
 
}

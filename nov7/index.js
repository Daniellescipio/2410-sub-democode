// // // let num = 1
// // // console.log(num, "1")
// // // num++
// // // console.log(num, "2")
// // // num--
// // // console.log(num, "3")





// // // // // if(license === true){
// // // // //    // what should happen if truthy
// // // // // }else if(license === "suspended"){
// // // // //     //what should happen if falsy
// // // // // }else{

// // // // // }




// // // // const status = "enrolled"
// // // // if(""){
// // // //     console.log("less than")
// // // //  }else {
// // // //     console.log("more than ")
// // // //  }


// // // //  if("a"){
// // // //     console.log("heyy")
// // // //  }else{
// // // //     console.log("hiiii")
// // // //  }

// // // //  if("b"){
// // // //     console.log("hiii")
// // // //  }else{
// // // //     console.log("hiiii")
// // // //  }

// // // //  if("b"){
// // // //     console.log("nooo")
// // // //  }else{
// // // //     console.log("hiiii")
// // // //  }



// // //  if(!"a"){
// // //     console.log("heyy")
// // //  }else if(!"b"){
// // //     console.log("hiii")
// // //  }else if(!"c"){
// // //     console.log("noooo")
// // //  }else{
// // //     console.log("gooo")
// // //  }

// // //declaring or define
// // // //hard coded
// // // //dynamic
// // // function myFirstFunction(numOne, numTwo){
// // //    // console.log(numOne, numTwo)
// // //     console.log(numOne+numTwo)
// // // }


// // // const mySecondFunction = (userName)=>{
// // //     if(typeof userName !== "string"){
// // //        // alert("Please enter a name")
// // //     }else{
// // //         console.log(`Hello ${userName}`)
// // //     }
   
// // // }

// // // let user = prompt("What's your Name")
// // // console.log(user)
// // // mySecondFunction(user)




// // // const myFunct = (numOne, numTwo)=>{
// // //     const sum = numOne+numTwo
// // //     if(sum>9){
// // //         alert("Youre new here")
// // //     }else{
// // //         alert("I've seen you before")
// // //     }

// // // }

// // // const myReturnFunct = (numOne, numTwo)=>{
// // //     const sum = numOne+numTwo
// // //     return(sum)
// // //     sum++
// // //     console.log(sum)
// // // }

// // // myFunct(4,7)
// // // myReturnFunct(9,1)

// // // const sum = myFunct(10,1)
// // // const sumTwo = myReturnFunct(2,3)
// // // console.log(sum, sumTwo)





// // const userAge = 15
// // const userName = "Jamey"
// // const userStatus = "new"

// // function welcome(){
// //     if(userAge<18){
// //         alert("You're too Young!")
// //     }else{
// //         if(userStatus === "new"){
// //             alert("Welcome " + userName)
// //         }else{
// //             alert("Welcome Back "+ userName)
// //         }
// //     }
// // }


// function getName(firstName, LastName){
//     const fullName = firstName + " " + LastName
//     return fullName
// }
// const userName = getName("Danielle", "Williams")
// console.log(userName)
// const greeting = (passedName)=>{
//     console.log(`Hello ${passedName}`)
// }

// greeting(userName)
const convertToMeters = (yards)=>{
    const meters = yards * 0.9144
    return meters
}
function createMessage(yards,meters){
    let message 
    const numYards = Number(yards)
    if(numYards===1760){
        message = "That is as long as a mile"
    }else if(numYards===100){
        message = "That is as long as a football field"
    }else if(numYards===26){
        message = "That is as long as a tennis court"
    }else{
        message = "That is as long as something I'm sure!"
    }
    return `You entered ${yards} yards which was converted to ${convertedMeters} meters, ${message} `
}

let yards = prompt("Enter some Yards to convert to Meters!")
console.log(yards)

let convertedMeters = convertToMeters(yards)
console.log(convertedMeters, "meters!")

alert(createMessage(yards, convertedMeters))
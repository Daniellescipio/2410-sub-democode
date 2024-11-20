const myArray = ["red", "yellow", "blue", "green", "purple", "orange"]

const myFunction = (color)=>{
    //find a javascript function that finds an item in an array and returns an index
    const found = myArray.includes(color)
    const foundTwo = myArray.indexOf(color)
    //console.log("with includes:", found, "with indexOf:", foundTwo, "and the color is:", color )
    //includes
    //indexOf
    if(foundTwo>=0){
       return `We found ${color} at position ${foundTwo}`
    }else{
        return `We did not find ${color}, Sorry!`
    }
  //  return foundTwo>=0 ? `We found ${color} at position ${foundTwo}` :`We did not find ${color}, Sorry!` 

}

function myOtherFunction(color){
    let found = false
    for(let i =0; i<myArray.length;i++){
        if(myArray.includes(color)){
            found = true
        }else{
            found = false
        }
    }
    return found
}

console.log(myOtherFunction(7))
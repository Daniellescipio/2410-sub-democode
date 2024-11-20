
const myIcecreamFunction = ()=>{

    const listOFlavors = prompt("Please enter some flavors", "strawberry,chocolate,vanilla,strawberry,strawberry,chocolate")
    //turn string from the user into an array
    const arrayOfFlavors = listOFlavors.split(",")
    //this is what it should look like once it is an array
    //-->["strawberry", "chocolate", "vanilla", "strawberry"]
    //this is our end goal.
    // { 
    // strawberry:2,
    // chocolate:1,
    // vanilla:1
    // }
    //creat an empty object to track the flavors
    const flavorObject ={}
        for(let i=0;i<arrayOfFlavors.length;i++){
            //Get any flavors/keys already in flavorObject
    
            //save the current flavor in the array to a variable for clarity
    
           // use an if statement and includes.indexOf to check if the flavor is found in the keys array
                //if it is found, set it equal to itself +1 using bracket notation
    
                //else, set it equal to one using bracket notation
    
        }
        //return the flavor at the end of the function
        return flavorObject
    //after the loop is done, return the built object
    }
    
    console.log(myIcecreamFunction())
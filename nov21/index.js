//create a player object with a level and life points
const player = {
    life:10,
    level:1
}
//ask the player how many opponents they would like.
const villianNum = prompt(`How many opponents would You like today?`,3)

//write a function that...
//creates an array of x number(from the user) bad guy objects, each with a name, level and life points
//return the array from the function
const opponentCreator = (num)=>{
    const arrOfVillians =[]
    const villianNames = []
    for(let i=0;i<num;i++){
        const villian = {
            name: 'villian'+(i+1),
            level:i+1,
            life: 10*(i+1)
        }
        villianNames.push(villian.name)
        arrOfVillians.push(villian)
    }
    return {
        villians:arrOfVillians,
        villianNames:villianNames
    } 
}

//save the value returned from the above function to a variable for later use
const opponentObject = opponentCreator(villianNum)
const opponentNames =opponentObject.villianNames
const opponents = opponentObject["villians"]

//get the players name
player.name = prompt("What's your name?", "Danielle")
//save it to the player object
//give an intro message that includes the level and life the player and the names of each villan
while(player.life>0||opponents.length>0){
   alert(player.life)
    alert(`${player.name}, you are a level ${player.level} player with ${player.life} life. The following opponents are ready to fight ${opponentNames}`)
//give the player the option to look for an opponent or leave the game
const playOrLeave = prompt("Would you like to fight[F] anyone? Or leave[L] the game", "F")

//if they choose to leave

    if(playOrLeave==="L"){
        alert("Thanks for playing, have a good day!")
    }else{
    fight()
    }
}

if(player.life<=0){
    alert("Loser")
}
if(opponents.length<=0){
    alert("Winner!!")
}

//give them a message exiting them from the game

//if they chose to look for an opponent...
//write and call a function that...
//checks if there are still bad guys, if there are, tell the player to chose heads or tails to pick their opponent
//uses a random number to "flip a coin", example: 1===heads 2===tails
//if 'the coin flips' in their favor, they get the opponent on their level
//otherwise they get an opponent of a higher level
//return the chosen opponent

function findOpponent(){
    const headsOrTails = prompt("Pick heads[H] or tails[T] to find an opponent", "H")
    const coinFlip = Math.floor(Math.random()*2)
    let chosenVillian
   if((headsOrTails ==="H" && coinFlip===0)||(headsOrTails === "T" && coinFlip===1)){
    //win condition
        for(let i=0;i<opponents.length;i++){
           if(opponents[i].level===player.level){
            chosenVillian = opponents[i]
           }
        }
    }else{
        //lose condition
        for(let i=0;i<opponents.length;i++){
            if(opponents[i].level!==player.level){
                chosenVillian = opponents[i]
            }
         }
    }
    return chosenVillian
}
//console.log(findOpponent())


function fight(){
    const opp = findOpponent()
    if(opp.level === player.level){
        //have the chance of being 0,1
        goodChance = Math.floor(Math.random()*2)
    }else if(opp.level < player.level){
         //have the chance of being 0
        goodChance = Math.floor(Math.random()*1)
    }else{
         //have the chance of being 0,1,2,3
        goodChance = Math.floor(Math.random()*4)
    }
    console.log(goodChance)
    if(goodChance===0){
        let oppIndex
        for(let i=0;i<opponents;i++){
            if(opp.name === opponents[i].name){
                oppIndex =i
            }
        }
        opponents.splice(oppIndex, 1)
        player.level = player.level+1
        alert("You defeated " +opp.name + ". Now you are a level "+player.level +" player. Congratulations" )
    }else{
        player.life= player.life - opp.life
        alert("Oh No!! You lost to" +opp.name + ". you are still a level "+player.level +" player. But now you only have" + player.life + " life points" )
    }
}
//write and call a function that...
//if the opponent is the same level, 75% chance of winning
//if the opponent is a higher level, 25% chance of winning
//if the opponent is a lower level, 100% chance of winning

//let the player know if the won or lost, 
//their level, their life, and the names of the remaining villians
//repeat the cycle until all bad guys are gone or the player is out of life.
//so the player can see their progess outside of the prompts/alerts, console/update the player object and villians array throughout the game. 
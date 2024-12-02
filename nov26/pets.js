class Pet{
    constructor(name, age, species, price){
        this.name = name
        this.age = age
        this.species = species
        this.price = price
    }
}

const pets = [
    new Pet("Spot", 6, {name:"dog", breed:"dalmation"}, 2250),
    new Pet("April", 6, {name:"dog", breed:"german shepard"}, 2250),
    new Pet("Rumi", 6, {name:"cat", breed:"siamese"}, 2250),
    new Pet("Zora", 6, {name:"rodent", breed:"hamster"}, 2250),
    new Pet("Bingo", 6, {name:"cat", breed:"maine coon"}, 2250),
    new Pet("DeeOhGee", 6, {name:"dog", breed:"poodle"}, 2250),
    new Pet("SeeAyTea", 6, {name:"cat", breed:"siamese"}, 2250),
    new Pet("Joan", 6, {name:"rodent", breed:"gerbil"}, 2250),
    new Pet("Pepper", 6, {name:"cat", breed:"persian"}, 2250),
    new Pet("Cheeto", 6, {name:"roden", breed:"guinea pig"}, 2250),
]
module.exports = pets
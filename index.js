// require('./add.js') one way
// importing the add module using commonJS


// const add = require("./addExport")

// console.log("Hello from the index.js")

// const sum = add( 7,7)
// console.log(sum);


// IFFE 
// require("./batman")
// require("./superman")

// const superhero = require("./super_hero")

// console.log(superhero.getName())

// superhero.setName("superman")
// console.log(superhero.getName())

// const newSuperhero = require("./super_hero")
// console.log(newSuperhero.getName())


const add = require("./math")
console.log(add(5,6))
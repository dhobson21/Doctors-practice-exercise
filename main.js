//Lightning Exercise 1: Write a factory function that creates an object that represents a doctor. The function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice


function createDoctor (name, specialty, address) {
  let Doctor = {
    name: name,
    specialty: specialty,
    address: address
  }
  console.log ('Doctor', Doctor)
}
createDoctor("Dustin Hobson", "Nerospecialist", "1430 Bell Rd. Apt. 401, Nashville, TN 37211")



// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels
var BowWowKennels = []
function createPet (name, breed) {
  let pet = {
    name: name,
    breed: breed
  }
  


BowWowKennels.push(pet)

}
createPet("Buster", "Yellow Lab")

createPet("Murf", "Pitbull")

createPet("Madi", "Collie")
console.log('BowWowKennels', BowWowKennels)





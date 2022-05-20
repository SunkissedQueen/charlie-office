// Objects
// Consider this variable:

// const learn = {
//   cohorts: {
//     "2021": ["Alpha", "Bravo", "Charlie", "Delta", "Echo"],
//     "2022": ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]
//   }
// }

// Write the code that logs the name of your cohort.
// console.log(learn.cohorts.)
// Write the code that uses destructuring to log the name of your cohort.

// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.

// Output: ["2021 Alpha", "2021 Bravo", "2021 Charlie", "2021 Delta", "2021 Echo", "2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot"]



// Class inheritance
// class name Car
class Car{
  constructor(){
    this.model = "generic car"
    this.year = "myCar year"
    this.lights = 
  }

  wheels(){
    this.wheels = 4
  }


}


// Story: As a programmer, I can make a car.
// Write a variable called myCar which is an instance of the class Car
let myCar = new Car()
// call the method to alter the new instance of car
myCar.wheels()
console.log(myCar)

// Story: As a programmer, I can give my car a model on initialization.
// The model for the car class can be "generic car" (Done)

// Story: As a programmer, I can give my car a year on initialization.
// The year for the car class can be "myCar year" (Done)

// Story: As a programmer, I can tell how many wheels myCar has.
// Calling the method wheels will return 4 (Done)

// Story: As a programmer, I can make a Tesla car.
// class Tesla inherits from class Car

// class Car{
//   constructor(){
//     this.model = "generic car"
//     this.year = "myCar year"
//   }

//   wheels(){
//     this.wheels = 4
//   }
// }
class Tesla extends Car{
  constructor(model, year){
    super(model, year)
  }
}

// Create an object called myTesla which is a instance of class Tesla
let myTesla = new Tesla()
console.log(myTesla)



// Story: As a programmer, I can give my Tesla a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class (done)

// Story: As a programmer, I can give my Tesla a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class (done)

// Story: As a programmer, I can make a Toyota car.
// class Toyota inherits from class Car
// create an object called myToyota which is a instance of class Toyota

// Story: As a programmer, I can give my Toyota a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Toyota a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can make a Volkswagen car.
// class Volkswagen inherits from class Car
// create an object called myVolkswagen which is a instance of class Volkswagen

// Story: As a programmer, I can give my Volkswagen a model on initialization.
// The model can be inherited from the parent class Car by passing the model through the constructor() and super() on the child class

// Story: As a programmer, I can give my Volkswagen a year on initialization.
// The year can be inherited from the parent class Car by passing the year through the constructor() and super() on the child class

// Story: As a programmer, I can give all my cars a lights property. Lights start in the off position.

// Story: As a programmer, I can turn the lights in all my cars on and off.

// Story: As a programmer, I can give all my cars a signal property. Turn signal starts in the off position.

// Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mph.

// Story: As a programmer, I can speed my Tesla up by 10 per acceleration.

// Story: As a programmer, I can slow my Tesla down by 7 per braking.

// Story: As a programmer, I can speed my Toyota up by 5 per acceleration.

// Story: As a programmer, I can slow my Toyota down by 2 per braking.

// Story: As a programmer, I can speed my Volkswagen up by 7 per acceleration.

// Story: As a programmer, I can slow my Volkswagen down by 5 per braking.

// Story: As a programmer, I can call upon a carInfo method that will tell me all the information about a car.
// The method can be created in the parent class and accessed by all child classes


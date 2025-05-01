
//Question 1

//First step:create an object called user
//Second step:pass the properties;name,stepsWalked(which is an array of daily steps)
//Third step:create method totalStep() which calculates and return the total number of steps by iterating through the steps
//Fourth step:create another method averageSteps() that will return the average steps per day

const user = {
    name:"Queen",
    stepsWalked: [{day:"Monday",steps:300},{day:"Tuesday",steps:600}],
    totalSteps(){
        let sum = 0;
        for(let i=0;i<this.stepsWalked.length;i++){
            sum += this.stepsWalked[i].steps
           
        }
        return sum
    },
    averageSteps(){
  let total = this.totalSteps()
  let average = total/this.stepsWalked.length
  return average
    }
}
console.log(user.totalSteps());
console.log(user.averageSteps());

//question 2

//Fist step:create an object called Recipe with name, ingredients(array),cookTime in minutes
//second step: create  a method displayRecipe()which will log the name and all ingredients in a readable list
//Third step: create another method isQuickMeal() that will return true if cookTime is 30 minutes or less by iteration

const Recipe = {
    name:"keza",
    ingredients:["salt","flour","vegetables","pepper"],
    cookTime:[20,30,15,30,60],
    displayRecipe(){
        console.log(` My name is ${this.name},My ingredients are : (${this.ingredients})`)
    },
    isQuickMeal(){
        for(cook in this.cookTime){
            if(cook<=30){
                console.log('True' )
             }
             else{
                 console.log('False')
             }
            }
        }
    }
Recipe.displayRecipe()
Recipe.isQuickMeal()

//question3

//First step:Create an object called a car
//second step:The object will have properties of model,mileage, and serviceHistory(an array of service dates)
//Third step: Create method addService having date as a parameter and we add a new service record
//Fourth step: Create another method lastServiceDate() which will return the most recent service date

const car={
    model:"Range rover",
    mileage: "10km per liter",
    serviceHistory: ["20th june 2027", "1st january 2023","4th july 2004"],
    addService : function(date){
        console.log(`this is a ${this.model} ${this.mileage} ${date}`)
        serviceHistory = this.serviceHistory.push(date)},
    lastService : function(){
        return this.serviceHistory.pop()
    }
}
car.addService("November 4th 2026")
console.log(car.lastService())



//question 4

//First step:Create an object of playlist with a property which is songs(array of song titles)
//second step: Add method addSong(title) to add a song 
//Third step: Add another method removeSong(title) to delete one song 
//Fourth step: Add another method listSong() which will log all songs currently in the playlist


const playlist ={
    songTitles:["on my way","Heal first","provider"],
    addSong(title){
        console.log(`I am adding new song called "${title}"`)
        this.songTitles.push(title)
    },
    removeSong(title){
        return this.songTitles.pop()
    },
    listSongs(){
        for(let i=0;i<this.songTitles.length;i++)
            console.log(this.songTitles[i])
    }
}
playlist.addSong("Love")
console.log(playlist.removeSong())
playlist.listSongs()

//question 5

//First method:create a course constructor with title, lesson(an array),completedLesson(array)
//second method: Add a method called markComplete(lesson) that will add the lesson to completedLessons
//Third method: Add a method getProgress() that will return a string  

function Course(title,lessons,completedLessons){
    this.title = title;
    this.lessons=lessons;
    this.completedLessons = completedLessons;
    this.markcomplete= function(lesson){
        completedLessons=completedLessons.push(lesson)
    }
    this.getProgress = function(){
        console.log(`${completedLessons} out of ${lessons.length}completed lesson`)
    }
}
const course = new Course("Biology",["javascript","Kotlin","QA"],["Python","PM"])
console.log(course)
course.markcomplete(["java"])
course.getProgress()
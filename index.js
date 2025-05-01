
//question 1
const User = {
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
console.log(User.totalSteps());
console.log(User.averageSteps());
//question 2
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
const Car={
    model:"Range rover",
    mileage:"11km per liter",
    serviceHistory:["15th june","11th may","5th december"],
    addService(date){
        console.log(`This is a ${this.model} ${this.mileage} ${date}`)
       return  this.serviceHistory=this.serviceHistory.push(date)
    },
    latestServiceDate(){
            return this.serviceHistory.at(-1)
    }

}
Car.addService("June 24th 2025")
console.log(Car.latestServiceDate())
//question 4
const Playlist ={
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
Playlist.addSong("Love")
console.log(Playlist.removeSong())
Playlist.listSongs()
//question 5
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
const course = new Course("Biology"["javascript","Kotlin","QA"]["Python","PM"])
console.log(course)
course.markcomplete(["java"])
course.getProgress()
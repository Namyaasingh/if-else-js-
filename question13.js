let readlineSync = require("readline-sync");
var age=readlineSync.questionInt("enter the age:")
if (age>=5){
    console.log("they can go to school")
}
if (age>=18){
    console.log("they are eligible for voting")
}
if (age>=21){
    console.log("they are eligible for driving")
}
if (age>=24){
    console.log("they can marry")
}
if (age>=25){
    console.log("theyt can drink")
}
else{
    console.log("they are child")
}
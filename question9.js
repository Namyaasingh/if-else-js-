let readlineSync=require("readline-sync");
var varx=readlineSync.questionInt("enter the number")
if (varx%2===0){
    console.log("it\'s divisible by 2");
}
else{
    console.log("it\'s not divisible by 2")
}
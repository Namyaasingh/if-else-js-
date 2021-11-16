let readlineSync = require("readline-sync");
var num1=readlineSync.questionInt("enter the number:")
if (num1%5==0 && num1%15==0){
    console.log(" this number is divisible by both.")
}
else{
    console.log("this number is not divisible by both.")
}
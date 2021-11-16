let readlineSync = require("readline-sync");
var num1=readlineSync.questionInt("enter the number:")
var num2=readlineSync.questionInt("enter the number:")
if (num1>=num2){
    console.log("num1 is greater than num2 or equal")
}
else{
    console.log("num2 is graeter than num1")
}
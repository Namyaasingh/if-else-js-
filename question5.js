let readlineSync = require("readline-sync");
var number=readlineSync.question("enter a number");
if (number<10){
    console.log("num is less than 10");
}
else if (number>10 && number<20){
    console.log("it is less tham 20");
}
else{
console.log("greater than 20");
}
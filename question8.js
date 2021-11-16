let readlineSync = require("readline-sync");
var water=readlineSync.questionInt("enter the level of water:");
if (water<1){
    console.log("we need to fill more water");
}
else if (water>=1 && water<=10){
    console.log("no need to fill more water");
}
else{
    console.log("water is overflow");
}
function main(numOne, numTwo) {
   // Only change code below this line 
    var reminder = numOne % numTwo;
   // Only change code above this line
   return reminder;

}  
 
console.log(parseInt(main(5,2)));
console.log(parseInt(main(15,4)));
console.log(parseInt(main(102,25)));

module.exports = main;
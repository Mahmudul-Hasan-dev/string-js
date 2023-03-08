//swapping variable using temp

var first = 10;
var second = 13;
console.log(first, second);

//use temp to store the current value 
var temp = first;
first = second;
second = temp;
console.log(first, second);
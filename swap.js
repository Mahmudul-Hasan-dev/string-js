//swapping variable using temp

var first = 10;
var second = 13;
console.log(first, second);

//approach 1
//use temp to store the current value 
var temp = first;
first = second;
second = temp;
console.log(first, second);

//approach 2:Destructuring
[first, second] = [second, first];
console.log('approach 2:', first, second);
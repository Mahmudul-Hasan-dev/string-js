//pow function have two parameter first is base and second one is power
const calculate = Math.pow(3, 2);
console.log(calculate);


///absolute value: abs function avoid - in calculation .if any calculation result come as - .abs will avoid that -

const num1 = 20;
const num2 = 23;

//to use abs we have to use math. cz abs is included in math liabrary
const gap = Math.abs(num1 - num2);

if (gap < 5) {
    console.log('closer number');
}
else {
    console.log('not closer number');
}

//round will fixup the value to upper level if it is more than 50%

var num3 = 2.65000;
var roundUp = Math.round(num3);
console.log(roundUp);

//ceil will roundup the value to upper number even if it is .1%up

var num4 = 2.001;
var roundUp2 = Math.ceil(num4);
console.log(roundUp2);

//floor will roundup the value to the lower roundup value no matter what is the percentage is

var num5 = 2.78;
var roundUp3 = Math.floor(num5);
console.log(roundUp3);

//random will select number randomly *6 will define the range of random selecting

console.log('random')
for (var i = 0; i < 20; i++) {
    var random = Math.round(Math.random() * 6);
    console.log(random);
}
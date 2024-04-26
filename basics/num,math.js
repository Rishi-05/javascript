const score = 4
const val = new Number(100)
console.log(val);

//changing into a string 
console.log(val.toString().length);

//changing into a floating point number
console.log(val.toFixed(1));

const newnum = 10.942
console.log(newnum.toPrecision(3));

const newnums = 110.942
console.log(newnums.toPrecision(3));

//to check what the value is, is it in hundreds,thousand,lakhs,etc
const number = 100000
console.log(number.toLocaleString('en-IN'));

/// ********** maths ********

console.log(Math.abs(-4))
console.log(Math.ceil(4.2))
console.log(Math.round(4.6))

//to remove decimal
console.log(Math.floor(4.9))
//and one can use min() and max()

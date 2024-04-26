// to concatinate
const val1 = 'risi'
const val2 = 10

console.log(val1 + val2);
console.log(`my name is ${val1} and my roll no. is ${val2}`)

//another method to declare a string
// string methods
const aname = new String("rishi")
console.log(aname[0]);
console.log(aname.__proto__);
console.log(aname.length)
console.log(val1.toUpperCase());
console.log(aname.charAt(2));
console.log(aname.indexOf('i'));

let newstring = aname.substring(0,4)
console.log(newstring);
let anotherstring = aname.slice(3,5)
console.log(anotherstring);

//to remove spaces in input
const string = "  rishi  "
let strings = string.trim()
console.log(strings);

//making changes in values or url's
let url = "https://www.youtube.com/shorts/Mh6-S3p1Ym0"
console.log(url.replace('shorts','something'))
console.log(url.includes('shorts'))
console.log(url.split('-'))

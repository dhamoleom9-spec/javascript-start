console.log("hay this is my first js file in cohort 2.0");
prompt("you want to enter..!");
alert("hay you entered in js world");

// let a; ---- initalization
// let a =12; ---- initalization & declearization

let a = 12;  //--primative data types those which has no brachets, and another var can have copy of it
b = a;

let obj = { // thos have brachets that ae nonprimative or refrances, they gate refrance of their parent when we change an a then obj also changed and viceversa
    name : "om sunil dhamole"
}
a = obj;

// --> coercion => concept jisme apka ak type automatically convert ho jata hay 
// "5" + 5 => 51 - here hi choice [add / concatenation]
// "5" - 5 => 4 - here is no choice it substract 

// --> falsy values => [0, false, "", null, undefined, NaN, document.all]
// --> other than that is true value 
// --> it is for we give if some other value so it convert that value into an `true` or `false` value
// if(null){
// }
// true + false = 1+0 = 1
// null + 1 = 0+1 = 1
// 5 + "5" = concatenation = 55
// !!undefined = original value = false

// question 1
let fruit = "mango";
console.log("my favorite fruit is : " + fruit);

// question 2
const dobyear = 2005;
const cyear = 2025;
const age = cyear-dobyear;
console.log(age); 

// question 3
let string = "l love javascript progtamming";
let slicestring = string.slice(7,18);
console.log(slicestring); 

// question 4
let football = "Football is my favorite sport";
console.log(football);
let cricket = football.replace("Football","Cricket");
console.log(cricket);

// question 5
let world = "hello world, world is beautiful"
console.log(world)
let earth = world.replaceAll("world", "earth")
console.log(earth)

// question 6
let str = "apple,banana,grapes,mango";
console.log(str)
let arr = str.slice()
console.log(arr)

// question 7
let x = 2;
let y = 2;
console.log(x=x,y=y)
console.log(x+y)
console.log(x-y)
console.log(x/y)
console.log(x*y)


// question 8
let one = 99;
console.log(typeof(one))

let two = "ram ram"
console.log(typeof(two))

let three = true
console.log(typeof(three))

let four = null
console.log(typeof(four))

let five = undefined
console.log(typeof(five))

// question 10
let firstname = "aditya";
let lastname = "dhotre";
let fullname = firstname + " " + lastname;
console.log(fullname);

// question 9
let java = "JavaScript is awesome"
console.log(java)
let aws = java.slice(14,21)
console.log(aws)

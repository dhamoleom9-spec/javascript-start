console.log("hay tjis is my first js file in cohort 2.0");
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
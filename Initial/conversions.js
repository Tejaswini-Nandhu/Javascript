// Results of Conversion of string, complex value, boolean.null,Undefined value into number data type
// "33" => 33
// "33aabc" => NaN : Not a number
// true => 1; false => 0
// null => 0
//undefined => NaN

//Results of Conversion of string, complex value, boolean.null,Undefined value into boolean data type
// 20 => true
let value=0;
console.log(typeof(value))

let undefinedvar;
console.log(typeof undefinedvar)
let bigNumber = 3453434546544557n
console.log(typeof bigNumber);
let testSymbol = Symbol(300)
console.log([typeof testSymbol, testSymbol])
let lakes=['ganga','yamuna','kaveri']
console.log("Array",typeof lakes);
let userDetails={
    name:"Rajesh",
    email:"rajesh@texas.com",
    age:30,
}
console.log("Object",typeof userDetails);
let myfunction= function(){
    console.log("welcome to javascript")
}
console.log("Function",typeof myfunction);

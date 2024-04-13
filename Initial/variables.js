// the varibles defined using cont keyword is immutable 
const acID=23456
// the varibles defined using let keyword is mutable and has well defined blocck and functional scope
let acEmail="log@gmail.com"
var acCity="Pune"
/* its not preferrable to use var keyword to define variable due to issues in block scope and functional scope*/

acEmail="cons@gamil.com"
acCity="kolkata"
console.table([acID,acEmail,acCity])
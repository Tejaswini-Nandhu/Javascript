//Number data type
let num=456666
//string data type
let str="Tejaswini Gajulapalli"
//boolean true or false
let isCorrect=true
//null data type
let updates=null //null is an object 
//undefined data type
let location
console.log("Primitive datatypes of Javascript")
console.log([typeof(num),typeof(str),typeof(isCorrect),typeof(updates),typeof(location)])
//object datatype

let firstObj={
    person1:{name:"sheela",
    age:30,
    isMarried:false
},
    person2:{
    name:"kavitha",
    age:22,
    isMarried:true
}
}
console.log("Non-Primitive datatypes of Javascript")
console.log(typeof(firstObj))
console.table(firstObj.person1)
/* 
console.log(num+" "+str)
console.log(str+" "+str)
console.log(str+" "+location+" "+updates)
console.table([num,str,isCorrect,updates,location,firstObj])*/

//Iterating objects
for(i in firstObj){
    console.log(i,":",firstObj[i]); 
}
console.log(1-"1") // 0
let a=2
let b=3
console.log("[++a+b++]",++a+b++);
console.log("[a+b++]",a+b++);console.log("[a+b]",a+b);
console.log("[++a+b]",++a+b);
console.log("[++a]",++a);
console.log("[b++]",b++)

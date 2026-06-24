const aryan={
    firstName:"Aryan",
    lastName:"Thapa",
    class:"bachelor",
    address:"kapan",
    college:"Texas college of management and IT",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    }
};
// console.log(aryan.name);
//dot notation
console.log(aryan.class);
// console.log(aryan.address);
// console.log(aryan.college);
//Bracket Notation
console.log(aryan["firstName"]);
console.log(aryan.fullName());
//Expression
let n1="firstName";
let n2="lastName";
let result=aryan[n1]+" "+aryan[n2];
console.log(result);


//add
// aryan.section="h";
// console.log(aryan);

//delete 
// delete aryan["section"];
// console.log(aryan);


myObj={
    name:"aryan",
    age:19,
    myCars:{
        car1:"BMW",
        car2:"Ford",
        car3:"Mercides"
    }
}
console.log(myObj.myCars.car3);

//using loop in object
const op={
    name:"aryan",
    class:"bachelor",
    address:"kapan"
};
let text="";
for(let x in op){
    text+=op[x]+" ";
}
console.log(text);

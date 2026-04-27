// function myfunction(msg)
// {
//     console.log(msg);
// }
// myfunction("i love function")
// function sum(a,b)
// {    
//     console.log(a+b);
// }
// sum(20,30)
// function add(a,b){
//     s=a+b;
//     return s;
// }
// let val=sum(9,10);
// console.log(val);

// const arrowsum = (a,b) =>{
//     console.log(a+b);
// }
// arrowsum(5,6);
// 

    let num=[52,41,90];
     
    let newArr =num.map((val) =>{
        return val*2;
    });
console.log(newArr);

 let calAquare = (num) => {
    console.log(num*num);
 };
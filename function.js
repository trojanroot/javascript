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


// map method

//     let num=[52,41,90];
     
//     let newArr =num.map((val) =>{
//         return val*2;
//     });
// console.log(newArr);

//  let calAquare = (num) => {
//     console.log(num*num);
//  };

// let newArry=num.map((val)=>
// {
//     return val;
// });
// console.log(newArry)

//filter method

// let nums=[1,2,3,4,5,6,7,8,9];
// let newArrr=nums.filter((val)=>
// {
//     return val%2===0;
// })
// console.log(newArrr);

//reduce method
let arr=[1,2,3,4];
const o=arr.reduce((result,current)=>
{
    return result+current;
})
console.log(o);
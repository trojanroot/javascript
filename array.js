// let heroes=["superman","Badman","spiderman","Dr.stranger"];
// for(let i=0;i<=heroes.length;i++)
// {
//  console.log(heroes[i]);
// }
// for(let element of heroes)
// {
//     console.log(element);
//     console.log(element.toUpperCase());
// }
// let arry=[85,97,44,37,76,60];
// let sum=0;
// for(let element of arry)
// {
//     sum=sum+element;
// }
// let average=sum/arry.length;
// console.log(`Sum is ${sum} and aaverage is ${average}`);
let item =["potato","apple","litche","tomato"];
item.push("chips","burger");
console.log(item);
d=item.pop();
console.log("deleted item is ",d)
console.log(item);
let marvelHeroes=["Ironman","Dr.stranger","spiderman"];
let dcHeroes=["Superman","Badman"];
let heroes=marvelHeroes.concat(dcHeroes);
console.log(heroes);
console.log(marvelHeroes.splice(1,4));
console.log(marvelHeroes.slice(1,3));

let arry=[1,2,3,4,5,6,7,8];
console.log(arry.splice(2,2,101,102));//to delete 3 and 4
console.log(arry.splice(2,0,101,102));// to add
console.log(arry.splice(3,1,101));//to replace

// for(let i=1;i<=5;i++){
//     let row="";
//     for(let j=1;j<=i;j++)
//     {
//     row=row+j;
//     }
//     console.log(row);
// }
// for(let i=5;i>=1;i--){
//     let row="";
//     for(let j=5;j>=i;j--)
//     {
//     row=row+j;
//     }
//     console.log(row);
// }
// let num=1;
// for(i=1;i<=4;i++){
//     let  pattern="";
//     for(j=1;j<=i;j++){
//         pattern+=num+"";
//         num++;
//     }
//     console.log(pattern);
// }
// row =5;
// for(i=1;i<=row;i++){
//     let pattern="";
//     for(j=1;j<=row;j++){
//         pattern+=" ";
//     }
//     for(k=1;k<=(2*i-1);k++){
//         pattern+= "*";
//     }
//     console.log(pattern);
// }
// for(i=0;i<=5;i++){
//     pattern=""
//     for(j=0;j<=i;j++){
//         if((i+j)%2===0){
//             pattern+="1";
//         }
//         else{
//             pattern+="0";
//         }
//     }
//     console.log(pattern);
// }

//number guessing
// let number=10;
// alert("You have only 3 chance to guess number");
// for(i=1;i<=3;i++){
//     let guess=Number(prompt("Guess the number from 1-50"));
//     if(guess===number){
//         console.log("Congratulation you have gussed correct number");
//     }
//     else{
//         console.log("Your guess is wrong")
//     }
//     if(i===3)
//     {
//         console.log("Your guessing chance is over");
//     }
// }

//Armstrong code
// for(i=1;i<=1000;i++){
//     num=i;
//     sum=0;
//     while(num>0){
//         let digit=num%10;
//         sum+=digit**3;
//         num=Math.floor(num/10);
//     }
//     if(sum===i){
//         console.log(i);
//     }
// }

//Palindrome  number
// for(i=0;i<=1000;i++){
//     num=i;
//     reverse=0;
//     while(num>0){
//         let digit=num%10;
//         reverse=reverse*10+digit;
//         num=Math.floor(num/10);
//     }
//     if(reverse==i){
//         console.log(i);
//     }
// }


// Standard Function
// function add(a, b) {
//   return a + b;
// }
// let sum= add(5,6);
// console.log(sum)

// // Function Expression
// const multiply = function(a, b) {
//   return a * b;
// };
// let mul=multiply(5,6);
// console.log(mul);


// let num = parseInt(inp); // Don't change this line

// // Type your code below
// console.log("Welcome to FizzBuzz!");
// function fizzbuzz(num){
//     if(num%3===0 && num%7===0){
//         return "FizzBuzz";
//     }
//     else if(num%3===0){
//         return "Fizz";
//     }
//     else if (String(num).includes("3")) {
//         return "Almost Fizz";
//     }
//     else if(num%7===0){
//         return "Buzz";
//     }

//     else{
//         return num;
//     }
// }
// for(let i=1;i<=num;i++){
//     console.log(fizzbuzz(i));
// }



// let userName=String(prompt("Enter the username: "));

// let passWord=prompt("Enter the passwrd: ");
// const access=(userName,passWord)=>{
//   if(userName.toLowerCase()==="admin"){
//     return "you got access admin.";
//   }
//   else if(userName.toLowerCase()==="user" && passWord==="user"){
//     return "you got access user.";
//   }
//   else{
//     return "access denied "+ userName;
//   }
// }
// console.log(access(userName,passWord));


const removeDuplicates=(arr)=>{
  let unique=[];
  for(let i=1;i<=arr.length;i++){
    found=false;
    for(let j=1;j<=unique.length;j++){
      if(arr[i]===unique[j]){
        found=true;
        break;
      }
    }
      if(found===false){
    unique.push(arr[i]);
  }
}
return unique;
}
  
console.log( removeDuplicates([1,2,2,3,4,5,5,6,6,7,7,8,8,9,9,9,9,9,10]));


const reverseArray=(arr)=>{
  let reversed=[];
  for(let i=arr.length-1;i>=0;i--){
    reversed.push(arr[i]);
  }
  return reversed; 
}
let re=reverseArray([1,2,9,8,5,6])
console.log(re);

let numbers = [40, 10, 30, 20, 50, 30, 10];
numbers.sort();
numbers.reverse();
console.log(numbers)
let firstIndex=numbers.indexOf(30);
console.log(firstIndex);
let lastIndex=numbers.lastIndexOf(10);
console.log(lastIndex);
let hasHundred=numbers.includes(100);
console.log(hasHundred);





function findElement(arr, num) {
    // Write code here
        if(arr.includes(num)){
            return arr.indexOf(num);
        }
        else{
            return -1;
        }
}



function swapEnds(arr) {
    // Write code here
    let temp=arr[0];
        arr[0]=arr[arr.length-1];
        arr[arr.length-1]=temp;
        return arr;
}

let arr = inp.split(", "); // Don't change this line
// Write your code below
let result=[];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
        result.push(arr[i]);
    }
}

console.log(result);

let arr = inp.split(",").map(Number); // Don't change this line

// Write your code below
let result=[];
arr.forEach((arr)=>{
    if(arr<50 || arr%5===0){
        result.push(arr);
    }
});
console.log(result);


// Write code here
const transformArray=(number)=>{
    // let filters=number.filter(num=>num<10);
    // let mul=filters.map(num=>num*2);
    // return mul;
      return number
        .filter(num => num >= 10)
        .map(num => num * 2);
}

let ingredients = [];

function addItem(item) {
    ingredients.push(item);
    console.log(item + " added to the grocery list.");
}

function removeItem(item) {
    let index = ingredients.indexOf(item);

    if (index !== -1) {
        ingredients.splice(index, 1);
        console.log(item + " removed from the grocery list.");
    } else {
        console.log(item + " is not in the grocery list.");
    }
}

function viewList() {
    if (ingredients.length === 0) {
        console.log("The grocery list is empty.");
    } else {
        console.log("Grocery List:");
        for (let i = 0; i < ingredients.length; i++) {
            console.log((i + 1) + ". " + ingredients[i]);
        }
    }
}

// Test
viewList();

addItem("Milk");
addItem("Bread");
addItem("Eggs");

viewList();

removeItem("Bread");

viewList();

removeItem("Cheese");



function doubleOdds(numbers) {
    // Write code here
    return numbers.map(num => {
        if (num % 2 !== 0) {
            return num * 2;
        }
        return num;
    });
}


function analyzeBudget(prices, items, budget) {
    // Write code here
    let affordableItems = [];
    let totalCost = 0;
    let outOfBudget = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= budget) {
            affordableItems.push(items[i]);
            totalCost += prices[i];
        } else {
            outOfBudget++;
        }
    }

    console.log("Affordable items:", affordableItems.join(","));
    console.log("Total budget needed:", totalCost);
    console.log("Items out of budget:", outOfBudget);
}

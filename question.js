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
function add(a, b) {
  return a + b;
}
let sum= add(5,6);
console.log(sum)

// Function Expression
const multiply = function(a, b) {
  return a * b;
};
let mul=multiply(5,6);
console.log(mul);
// let input=prompt("Enter the chacter to find vowels and consonants");
// for(let string of input)
// {
//     if(string==='a' || string ==='e' || string==='i'|| string==='o'|| string==='u')
//     {
//         console.log("vowels are ",string);
//     }
//     else
//     {
//         console.log("consonants are ",string);
//     }
// }
// let str=prompt("Enter the character: ");
// let count = 0;
// for (let i=0;str[i]!==undefined;i++)
// {
//     count++;
// }
// console.log("Lenght=",count);
// let str=prompt("Enter the character: ");
// let rev = "";
// for (let i=str.length-1;i>=0;i--)
// {
//     rev=rev+str[i];
// }
// console.log(rev);
// let str=prompt("Enter the character: ");
// let rev = "";
// for (let i=str.length-1;i>=0;i--)
// {
//     rev=rev+str[i];
// }
// console.log(rev);
// if (rev===str)
// {
//     console.log("palindron");
// }
// else
// {
//     console.log("it is not palindron")
// }
let str=" aryan thapa ";
let result="";
for(i=0;i< str.length; i++)
{
    if(str[i] !== " ")
    {
        result += str[i];
    }
}
console.log(result)
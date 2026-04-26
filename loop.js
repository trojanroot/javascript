// do-while loop
// let i=1;
// do{
//  console.log(i);
//  i++;
// }while (i<=10)
//while loop
// while (i<=10)
// {
//     console.log(i);
//     i++;
// }
//for loop
for(let i=0;i<=10;i++)
{
    console.log(i);
}
// for-of loop
let str="aryan";
for(let val of str)
{
    console.log(val);
}
//for-in loop
let student={
    name:"aryan",
    class:"bachlore",
    age : 20
};
for(let key in student)
{
    console.log(key);
    console.log(student[key]);
    console.log("key= ",key,"value= ",student[key]);
}
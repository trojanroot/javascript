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
row =5;
for(i=1;i<=row;i++){
    let pattern="";
    for(j=1;j<=row;j++){
        pattern+=" ";
    }
    for(k=1;k<=(2*i-1);k++){
        pattern+= "*";
    }
    console.log(pattern);
}
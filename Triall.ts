
// 1. Accept a char input from the user and display it on the console./
const readline=require('readline-sync');
// let value:string=readline.question("Input any value: ")
// console.log("the value input is "+value)
// 2.Accept two inputs from the user and output their sum./
// let num1:number=parseInt(readline.questionInt("Input number 1 : "));
// let num2:number=parseInt(readline.questionInt("Input number 2 : "));
// let sumTwo:number=num1+num2
// console.log("Sum of 2 values is "+sumTwo)
// 3. Write a program to find the simple interest.
// function simpleIntrest(p:number,n:number,r:number){
//     let simpleIntrest:number;
//     simpleIntrest=(p*n*r)/100;
//     return simpleIntrest;
// }
// let result: number;
// result=simpleIntrest(1500,2,12);
// console.log("Simple intrest is "+result);
// Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).
// let mark:number=parseInt(readline.questionInt("Enter student mark "))
// if (mark>=50){
//     console.log("congrts u passed")
// }else {
//     console.log("Sorry..better luck next time")
// }
//5. Write a program to show the grade obtained by a student after he/she enters their total mark percentage.

// let percentage:number=parseInt(readline.questionInt("Enter student percentage to find grade "))
// let grade:string='';
// if(percentage>=90){
//     grade='A'
// }else if(percentage>=80){
//     grade='B'
// }else if(percentage>=70){
//     grade='C'
// }else if(percentage>=60){
//     grade='D'
// }else if(percentage>=50){
//     grade='E'
// }else{
//     grade='FAILED'
// }
// console.log("Grade is "+grade)
// 6. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 
// let input:number=parseInt(readline.questionInt("Enter a input "));
// function findDay(day:number):void{
//     switch(day){
//         case 1:
//             console.log("SUNDAY !");
//                 break;
//         case 2:
//                 console.log("MONDAY !");
//                 break;
//         case 3:
//               console.log("TUESDAY !!");
//               break;
//         case 4: 
//               console.log("WEDNESDAY !");
//               break;
//         case 5:
//               console.log("THURESDAY !");
//               break;
//         case 6:
//               console.log("FRIDAY !!");
//               break;      
//         case 7:
//               console.log("SATURDAY !!");
//               break;      
//         default:
//              console.log("Invalid Type!!"); 
//     }
// }
// findDay(input)
//7 Write a program to print the multiplication table of given numbers.

 let input:number=parseInt(readline.questionInt("Enter a number to find multipaction of "));

function mul(num:number){
    let i:number;
    for( i=1;i<=10;i++){
        console.log(i+" * "+num+" = "+(num*i));
    }
}
mul(input)
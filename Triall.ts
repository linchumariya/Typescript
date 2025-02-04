
// 1. Accept a char input from the user and display it on the console./
// const readline=require('readline-sync');
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

//  let input:number=parseInt(readline.questionInt("Enter a number to find multipaction of "));

// function mul(num:number){
//     let i:number;
//     for( i=1;i<=10;i++){
//         console.log(i+" * "+num+" = "+(num*i));
//     }
// }
// mul(input)
// 8. Write a program to find the sum of all the odd numbers for a given limit
// let input:number=parseInt(readline.questionInt("Enter a number to findsum of all the odd numbers "));
// function oddSum(input:number):number{
//     let i:number;
//     let sum:number=0;
//     for(i=1;i<=input;i++){
//         if(i%2!==0){
//             sum+=i;
//         }
//     }
//     return sum;
// }
// console.log("sum is "+oddSum(input))
// 9. Write a program to print the following pattern 
// function patternPrinting(range:number):void{
//     let i:number;
//     let j:number;
//     let s:string='';
//     for(i=1;i<=range;i++){
//         s='';
//          for(j=1;j<=i;j++){
//              s+=j+ " ";
//          }
//          console.log(s);
//     }
// }
// patternPrinting(5);
// 10. Write a program to interchange the values of two arrays.
//Swap values of 2 arrays
// function swapValuesOfArray(first:(number|string)[],second:(number|string)[]):void{
//     let n1:number = first.length;
//     let n2:number =second.length;
//     let i:number;
//     if(n1!=n2){
//          console.log("Arrays are different size !!");
//          return;
//     }
//     let temp:number|string;
//     for(i=0;i<n1;i++){
//         temp=first[i];
//         first[i]=second[i];
//         second[i]=temp;
//     }
// }
// let n1:(number|string)[]=[2,4,5,7,8,9,10]; // using union oprator
// let n2:(number|string)[]=[12,14,15,17,18,19,24];
// swapValuesOfArray(n1,n2);
// console.log("AFTER SWAPPING")
// console.log("First Array :"+n1);
// console.log("SEcond Array ::"+n2);
// n1=['abc','def','ghi','jkl']; // string array
// n2=['pqr','stu','vwx','yza'];
// swapValuesOfArray(n1,n2);
// console.log("AFTER SWAPPING")
// console.log("First Array :"+n1);
// console.log("SEcond Array ::"+n2);
// 11. Write a program to find the number of even numbers in an array
// function countEvenNumberOfArray(arr:number[]):number{
//     let i:number=0;
//     let count:number=0;
//     while(i<arr.length){
//        if(arr[i]%2 === 0){
//             count++;
//        } 
//        i++;
//     }
//    return count;
// }

// let list: number[]=[3,4,6,8,9,10,13,15,20,21];
// let res:number = countEvenNumberOfArray(list);
// console.log("Even Count = "+res);
// 12. Write a program to sort an array in descending order
// function sortDescending(arr:(number|string)[]):void{
//     let i:number =0;
//     let j:number;
//     for(i=1;i<arr.length;i++){
//         let key=arr[i];
//         j=i-1;
//         while(j>=0 &&arr[j]<key){
//                arr[j+1]=arr[j];
//                j--;
//         }
//         arr[j+1]=key;
//     }
// }
// let array:(number|string)[]=[5,6,1,8,10,14,3,100,90];
// sortDescending(array);
// console.log("Sorted List "+array);
// array=["Anu","Zari","Shiva","Vasudev","Parth","Vsiahnav"];
// sortDescending(array);
// console.log("Sorted List "+array);
// 13. Write a program to identify whether a string is a palindrome or not
// function checkPalindrome(str:string):boolean{
//     let n:number=str.length;
//     for(let i=0,j=n-1;i<=j;i++,j--){
//          if(str[i]!=str[j]){
//              return false;
//          }
//     }
//     return true;
// }

// let s:string='malayalam';
// let values:boolean = checkPalindrome(s);
// console.log(s+"  Is palindrome ::"+values);
// s='English';
// values = checkPalindrome(s);
// console.log(s+" Is palindrome ::"+values);

// 14. Write a program to add to two dimensional arrays
// const rl=require('readline-sync');
// type List ={
//      list : number[];
//      size:number;
// }
// function getArray(arr:List):void{
//     arr.size=rl.questionInt("Enter the Size of array :: ");
//     for(let i=0;i<arr.size;i++){
//           arr.list.push(rl.questionInt(" Input value ::"));
//     }
// }
// function displayArray(arr:List):void{
//     console.log("Elements are ::");
//     for(let i=0;i<arr.size;i++){
//          console.log(arr.list[i]);
//     }
// }
// let arr1 :List ={
//      list:[],
//      size:0,
// };
// getArray(arr1);
// displayArray(arr1);
// // 15. Write a program to accept an array and display it on the
// interface TwoDArray{
//     [index: number]:number[];    
//  }
//  function sumMatrix(arr1:TwoDArray,arr2:TwoDArray):TwoDArray{
//       let result : number[][] = [];
//       for(let i=0;i<arr1[0].length;i++){
//           let row:number[]=[];
//           for(let j=0;j<arr1[i].length;j++){
//               row.push(arr1[i][j]+arr2[i][j]);
//          }
//          result.push(row);
//      }
//      return result;
//  }
//  const matrix1:TwoDArray =[
//      [1,2,3],
//      [4,5,6],
//      [7,8,9],
//  ]
//  const matrix2:TwoDArray=[
//      [9,8,7,],
//      [6,5,4],
//      [3,2,1],
//  ]
//  const sumArray = sumMatrix(matrix1,matrix2);
//  console.log("Sum Array ::");
//  console.log(sumArray);
//  16. Write a program to check whether a given number is prime or not
// const rl2=require('readline-sync');
// function isPrime(n:number):boolean{
//  for(let i=2;i<=n/2;i++){
//       let k=n%i;
//       if(k===0){
//          return false;
//     }
//  }
//  return true;
// }
// let num= parseInt(rl2.questionInt("Input any number ::"));
//  console.log(`The number ${num} is prime ::`,isPrime(num));
//  17. Write a menu driven program to do the basic mathematical operations
// const rl3= require('readline-sync');
// function addition(n1 :number,n2:number):number{
//      return (n1+n2);
// }
// function subtraction(n1 :number,n2:number):number{
//      return (n1-n2);
// }
// function multiplication(n1:number,n2:number):number{
//     return (n1*n2);
// }
// function division(n1:number,n2:number){
//     return (n1/n2);
// }

// console.log("Mathematical Operations !");
// console.log("1. ADD");
// console.log("2. SUBTRACTION");
// console.log("3. MULTIPLICATION");
// console.log("4. DIVISION");
// const option =parseInt(rl3.questionInt("Enter the option ::"));
// let num1:number=parseInt(rl3.questionInt("Input first number  ::"));
// let num2 :number = parseInt(rl3.question("INput second nuber ::"));
// switch(option){
//     case 1 :  console.log(" Sum ="+addition(num1,num2));
//               break;
//     case 2:
//               console.log(" Difference = " +subtraction(num1,num2));
//               break;
//     case 3:
//               console.log("Product :: "+multiplication(num1,num2));
//               break;
//     case 4:
//                console.log("Quotient ::"+division(num1,num2));
//                break;
//     default:
//                console.log("Invalid choice...");                                         
          
// }
// 18. Grades are computed using a weighted average.

// interface Student{
//     name:string;
//     id:number;
// }
// interface Mark extends Student{
//     writtern_test : number;
//     lab_exam:number;
//     assignment:number;
// }
// function findGrade(stud:Mark):number{
//      let total:number;
//      total=Math.floor((stud.writtern_test*70)/100 + 
//      (stud.lab_exam*20)/100+(stud.assignment*10)/100);
//      return total;
// }
// const student :Mark ={
//    name : "Veena Vinayan",
//    id:101,
//    writtern_test:75,
//    lab_exam:99,
//    assignment:85,
// }
// let average =findGrade(student);
// console.log("Grade ::"+average); 

// 19. Income tax is calculated

// const rl4=require('readline-sync');
// function findTax(p:EmployeePerson):number{
//     let tax:number;
//      if(p.salary>250000 && p.salary < 500000){
//           tax=(p.salary*5)/100;
//      }else if(p.salary>500000){
//          tax=(p.salary*20)/100;
//      }else if(p.salary>5000000){
//         tax=p.salary*30/100;
//      }else{
//          tax=0;
//      }
//     return tax;
// }
// type EmployeePerson={
//     name:string;
//     salary:number;
//     tax:number;
// }
// const person1: EmployeePerson ={
//      name:"",
//      salary:0,
//      tax:0,
// }
// person1.name=rl4.question("Input person Name ::");
// person1.salary=rl4.question("Input Salary ::");
// person1.tax=findTax(person1);
// console.log("Tax amount ::"+person1.tax);
//20. Pattern Printing
// let limit:number = 5;
// let i,j,k:number;
// let r:string;
// for(i=0,k=1;i<limit;i++){
//     r=' ';
//     for(j=0;j<=i;j++){
//        r+=k+" ";
//        k++;
//     }
//     console.log(r);
// }
//21.Multiply adjacent values of an array
// const rl5=require('readline-sync');
// type Lists ={
//     list :number[];
//     size:number;
// }
// function getArray(arr:Lists):void{
//       arr.size=rl5.questionInt("Enter the limit ::");
//       for(let i=0;i<arr.size;i++){
//           arr.list[i]=rl5.question(`Value ${i+1} ::`)
//       }
// } 
// function adjacentNumberProduct(a:Lists):Lists{
//     const arr :Lists ={
//         list:[],
//         size:a.size-1,
//     };
//     for(let i=0;i<a.size-1;i++){
//          arr.list[i]=a.list[i]*a.list[i+1];
//     }
//     return arr;
// }
// const list1 : Lists={
//     list:[],
//     size:0,
// }
// getArray(list1);
// let list2=adjacentNumberProduct(list1);
// console.log("Product Array ::  ::: "+list2.list);
//22.Add 2 2D arrays
// const rl6=require('readline-sync');
// interface Matrix{
//     list :number[][];
//     size:number;
// };
// function displayArray(list:Matrix):void{
//      for(let i=0;i<list.size;i++){
//            console.log(list.list[i]);
//         }
//     }       
// function getArray(list:Matrix):void{
//       list.size=rl6.questionInt("Enter the limit :: ");
//       list.list=new Array(list.size);
//       for(let i=0;i<list.size;i++){
//         list.list[i]=new Array(list.size);
//         for(let j=0;j<list.size;j++){
//              list.list[i][j]=rl6.questionInt("Value ::");
//         }
//       }
// }
// function sumMatrix(list1:Matrix,list2:Matrix):number[][]{
//        let res:number[][]=new Array(list1.size)
//        for(let i=0;i<list1.size;i++){
//          res[i]=new Array(list1.size);
//          for(let j=0;j<list2.size;j++){
//              res[i][j]=list1.list[i][j]+list2.list[i][j];
//         }
//     }
//        return res;
// }
// const m1 :Matrix ={
//     list:[],
//     size:0,
// }
// const m2:Matrix ={
//     list:[],
//     size:0,
// }
// getArray(m1);
// getArray(m2);
// const m3=sumMatrix(m1,m2);
// console.log("Result Matrix ::");
// displayArray({list:m3,size:m1.size});

// const rl7 = require('readline-sync');

// // 23.Matrix Class to handle 2D array storage and display
// class Matrix {
//     private list: number[][];
//     private size: number;
//     constructor() {
//         this.size = 0;
//         this.list = [];
//     }
//    public inputMatrix(): void {
//         this.size = rl7.questionInt("Enter the size of the matrix: ");
//         this.list = new Array(this.size);
//         for (let i = 0; i < this.size; i++) {
//             this.list[i] = new Array(this.size);
//             for (let j = 0; j < this.size; j++) {
//                 this.list[i][j] = rl7.questionInt(`Enter value for matrix[${i}][${j}]: `);
//             }
//         }
//     }
//     public displayMatrix(): void {
//         console.log("The matrix is:");
//         for (let i = 0; i < this.size; i++) {
//             console.log(this.list[i]); // Display each row
//         }
//     }
//     public static main(): void {
//         const matrixObj = new Matrix();
//         matrixObj.inputMatrix();  // Take matrix input
//         matrixObj.displayMatrix(); // Display the matrix
//     }
// }
// Matrix.main();
// 25.library
// var library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }
// ];
// function displayBookStatus(library:any) {
//     for (var i = 0; i < library.length; i++) {
//         var book = library[i];
//         if (book.readingStatus) {
//             console.log(`Already read '${book.title}' by ${book.author}.`);
//         } else {
//             console.log(`You still need to read '${book.title}' by ${book.author}.`);
//         }
//     }
// }
// displayBookStatus(library);
// 27.height
// var my_height:any = "eight";

// try {
//     // Check if my_height is NaN
//     if (isNaN(my_height)) {
//         throw new Error("notANumberError");
//     }
//     my_height = Number(my_height);
//     if (my_height > 50) {
//         throw new Error("hugeHeightError");
//     }
//     if (my_height < 10) {
//         throw new Error("tinyHeightError");
//     }
//    console.log(my_height);
// } catch (err:any) {
//     console.log(err.message);
// }
// // 28.vehicle
// class Car {
//     name: string;
//     mileage: number;
//     max_speed: number;

//     constructor(name: string, mileage: number, max_speed: number) {
//         this.name = name;
//         this.mileage = mileage;
//         this.max_speed = max_speed;
//     }
// }
// const car1 = new Car("Toyota", 15, 180);
// console.log(car1.name);      // Output: Toyota
// console.log(car1.mileage);   // Output: 15
// console.log(car1.max_speed); // Output: 180
// const car2 = new Car("Honda", 20, 200);
// console.log(car2.name);      // Output: Honda
// console.log(car2.mileage);   // Output: 20
// console.log(car2.max_speed); // Output: 200

// 29.Define the myFilter function
// function myFilter(myArray :any, callback :any) {
//     // Calculate the sum of the array elements
//     const sum = myArray.reduce((acc:number, cur:number) => acc + cur, 0);

//     // Use the callback function to check if the sum is even
//     if (callback(sum)) {
//         // If the callback returns true, return the sum
//         return sum;
//     } else {
//         // If the callback returns false, return a message indicating the sum is odd
//         return 'The sum is odd';
//     }
// }
// function isEven(num:any) {
//     return num % 2 === 0;
// }
// const inputArray = [1, 2, 3, 4, 6];
// const res1 = myFilter(inputArray, isEven);
// console.log(res1);
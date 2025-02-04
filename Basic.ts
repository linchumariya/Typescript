// console.log("hi");
//  var ourtuple:[number,boolean,string];
// ourtuple=[1,false,"iam"];
// console.info(ourtuple)
// var namee:string="linz"
// console.log(namee)
// var subj=["node","js","mongo"]
// console.log(subj)

// class Bus{
//     make:string;
//     model:string;
//     year:number;
//     constructor(make:string,model:string,year:number){
//         this.make=make;
//         this.model=model;
//         this.year=year;
//     }
// start(){
//     console.log(`the bus named${ this.model}is starting`)
// }
// }
// class Engine{
//     horsepower:number;
//     fueltype:string;
//     constuctor(horsepower:number,fueltype:string){
//         this,horsepower=horsepower;
//         this.fueltype=fueltype;
//     }
// }

// var obj=new Bus("volvo","v245",2025);
// console.log(obj);
// obj.start()

// class SUV extends Bus{
// offroad:boolean;
// constructor(make:string,model:string,year:number,offroad:boolean){
//    super(make,model,year)
// this.offroad=offroad;

// }
// toggle(){
//     this.offroad=!this.offroad
//     console.log(`${this.model} has capablity of offroad ? ${this.offroad}`)
// }
// }

// var tata=new SUV("TATA","safari",2025,true);
// tata.toggle()
// tata.toggle()


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Enter a character: ', (char) => {
//     console.log(`You entered: ${char}`);
//     readline.close();
//   });

//  let num1:number;
// let num2:number;
// const x:number=2;
// console.log(x);

// var arr:number[]=[1,2,3,]
// var str:string[]=['ho','jo']
// var st:string[][]=[["hi"],["ho"]]
// var stt=["hello",3]   

   
// enum Size{
//     small,
//     medium,
//     large,
    
    
//     xxl
// }
 
// var size:Size=0;
// var type:Size.small
let x:unknown=1;
// if(typeof x=="number"){
//     const result=x+1
// }
// else if (typeof x=="string"){
//     const result=x.length;
// }
// console.log(result)
 const result=(x as number)+1 //type casting

 const arr=[[{name:"linz"},{name:"veena"}]]
 const ar=arr.pop()?.pop()?.name//only going forward if its not undefined like checking
 const are=arr.pop()!.pop()!.name//forcing to move forward and defining the undefined
 function add(x:number,y:number){
 return x+y
 }

 function makeName(firstname:string,lastname:string,middlename?:string)
 {

 }
 const fullname=makeName("linz","veena")

 function sum(...number:number[]){

 }
 sum(1,2,3,4)  

 interface Person{
    name:string,
    age:number,
    height?:number
 }

 interface employee extends Person{
    employeeId:number;
 }
 const worker:employee={
    name:"tim",
    age:45,
    employeeId:10
 }

 class Person{
    private name:string;
    constructor(name:string){
        this.name=name
    }
    
 }
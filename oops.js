
// class student {

//     // Variables 

//     // methods 

//     studentname = "Raju"

//     display(){

//         console.log(this.studentname)
//     }

//     add(x, y){

//         console.log("first value :" + x)
//         console.log("second value :" + y)
//         console.log("Sum = " + (x+y))
//     }

//     constructor(){

//          console.log("This is method")
//     }

// }


// // constructor 

// // Method 

// // no need to call explicitly 

// // it will be automaticvalled 

// const stud = new student() // 10KB

// //stud.printmessage()

// const stud2 = new student() //10KB


// const stud3 = new student() //10KB

// Static 

// Non static methods 



// class  employee {
     

//      static a= 10  // Static Veriable

//      b = 20 // non Static veribale

//      methodone(){

//         console.log("this is method one ")
//         console.log("this is Non static method one ")

//      }

//      static methodtwo(){

//         console.log("this is method Two ")
//         console.log("this is static method one ")

//      }


// }


//const emp1 = new employee() 

// classname.staticvaribalename

// classname.staticmethodname

// console.log(employee.a)

// employee.methodtwo()



// emp1.methodone()

// class 
     // variables and methods 
     //creating objects of the class
     //constructor   
     //Static and Non static methods 


     
// // 1. Enacapsulation
// // 2. inheritance
// // 3. polymorphism 
// // 4. prototype


//1. Enacapsulation

// class workers{

//      constructor (wname, wplace, value3){

//           this.workername = wname

//           this.workerplace = wplace

//           this.workerdepatment = value3
//      }


//      displayedetails(){

//         console.log(this.workername, this.workerplace, this.workerdepatment)
//      }

// }

// const w1 = new workers("Arptia","tumkur", "l&d")

// //w1.details("Kishore", "Nellore","LandD")

// w1.displayedetails()

// // 2. Inheritance 


// class A{

//     a=100;
//     display(){
//         console.log(this.a)
//     }
//     messageofclassA(){

//         console.log("Parent class message")
//     }

// }


// class B extends A
// {
//     b=200;
//     show(){
//         console.log(this.b)
//     }

//     messageofClassB(){

//         console.log("B Parent/Clild class message")
//     }
// }


// class C extends B
// {
//     c=200;
//     cshow(){
//         console.log(this.b)
//     }

//     messageofClassc(){

//         console.log("C Clild class message")
//     }
// }


// const bobj = new C()

// bobj.display()
// bobj.messageofclassA()
// bobj.show()
// bobj.messageofClassB()
// bobj.cshow()
// bobj.messageofClassc()

//3 Polymorphism 

     // Method overriding 
     //Method Overloading 


//      class A{

//         display(a,b){
//             console.log(a)
//             console.log(b)
//             console.log("result :"+ (a+b))
//         }
//         message(){
    
//             console.log("Parent class message")
//         }
    
//     }
//     class B extends A
//     {
//         display(a,b,c){
//             console.log(a)
//             console.log(b)
//             console.log(c)
//             console.log(a+b+c)
//         } 
    
//         message(){
    
//             console.log("Clild class message")
//         }
//     }
    

// const obj = new A()

// obj.message()

// // Method Overriding 

// obj.display(3,5,7)

//Method Overloading 

// 4 . Prototype 




// class employee {

//     details (empname, empnum, empdept){
//     this.empname = empname;
//     this.empnum = empnum;
//     this.empdept = empdept;
//     }
    
//     displaydetyails(){

//         console.log( this.empname, this.empnum, this.empdept)
//     }

// }

// employee.prototype.org="DBSQA";


//  emp1 = new employee()

//  emp1.details("Raju", 418, "L&D")

// //emp1.displaydetyails()
// console.log(emp1.empname, emp1.empnum, emp1.empdept, emp1.org);

// emp2 = new employee();
// emp2.details("Radha", 419, "L&D")
// console.log(emp2.empname, emp2.empnum, emp2.empdept, emp2.org);


class employee {

    constructor (empname, empnum, empdept){
    this.empname = empname;
    this.empnum = empnum;
    this.empdept = empdept;
    }

}

employee.prototype.org="DBS QA";

employee.prototype.display= function (){

    console.log(this.empname, this.empnum, this.empdept, this.org)
}
emp1 = new employee("Raju", 418, "L&D")

emp1.display();

emp2 = new employee("Radha", 419, "L&D");
emp2.display();
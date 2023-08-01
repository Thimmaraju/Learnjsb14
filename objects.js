

const student = {

    "stuname":"Manjunath",
    "lastname": "G",
    "rollnumber": 418,
}


//cy.get(locator).type(student.stuname)

// cls


//edit/modify //add //delete

const  employees ={

    "emp1" : "Murali",
    "emp2": "Prasanna",
    "emp3": "Kishore",
    "emp4": "Manjunath"
}

// it (){
    
//     //cy.get()

//     //cy.contains

//     //cy.get("locator").type()

// }

//looping the values of objects


//for in 

//es6 

for (let i in employees){

    console.log("loop starts ")

    console.log(i)

    console.log(employees[i])

    console.log(i+ " : " +employees[i])


    console.log("loop ends  ")

}



// // xyz = {

//    stu1 : value1

//    stu2 : value2
// }


//cy.get(stu1).shoud("have.value", value1)

//cy.get(stu2).shoud("have.value", value2)

//cy.get(stu3).shoud("have.value", value3)


for (let i in xyz){

    //cy.get(i).shoud("have.value", xyz[i])
}
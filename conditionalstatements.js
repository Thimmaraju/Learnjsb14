

// condition

// {




// }

// {



// }


// if(condtion){


// }


// if(45<5){


//     console.log("This is if block code")
// }
// else{

//     console.log("This is else block code")
// }


// condition1

// {


// }

// condition2

// {


// }

// condition3
// {


// }

// default

// {



// }

//else if

//elseif


// for( let i=1; i<=100; i++){

//     if( i%3 ==0 && i%5==0){

//         console.log("fizzbuzz")
//     }
//     else if( i%3 ==0 ){

//         console.log("fizz")
//     }

//     else if( i%5==0){

//         console.log("buzz")
//     }
//     else{

//         console.log(i)
//     }
// }


let marks=70;

if (marks > 90 && marks <= 100) {
    console.log("grade = 'A+'");
}
else if (marks > 80 && marks <= 90) {
    console.log("grade = 'A'");
}
else if (marks > 70 && marks <= 80) {
    console.log("grade = 'B'");
}
else if (marks > 60 && marks <= 70) {
    console.log("grade = 'C'");
}
else if (marks > 50 && marks <= 60) {
    console.log("grade = 'D'");
}
else {
    console.log("grade = 'fail'");
}


//Switch 

//new Date().getDay() - Friday

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
 
  case  6:
    day = "Saturday";
  default:

  day = "Raju"

}

console.log(day);


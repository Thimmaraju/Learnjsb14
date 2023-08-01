 //Empty array
 
 arr1 = []

 arr2 = [ 1, 2,5,8,6,3, 4]

 arr3 = [ "Raju", "g", 418, "Blr", true, null]

 console.log(arr2.length)

 console.log(arr3)

 console.log(arr3[7])

 //methods to work with arrays 

 //sort() - sorting arrays elements 

 arr6 = [ "arpita", "murali", "manju", "prasanna", "sharon"]
 console.log(arr6.indexOf("prasanna"))

 console.log(arr6)
 arr4 = arr6.sort()
 console.log(arr4)

 //concat  - joining two arrays 



clubbedarry = arr3.concat(arr6)

console.log(clubbedarry)

//reverse() - reverse the array elements 

console.log(arr6)
reversedarray = arr6.reverse()

console.log(reversedarray)


// shift unshift

//push pop

//includes 

//push() method adds an element at the end of the array. 

let dailyActivities = ['eat', 'sleep'];

dailyActivities.push("read")

console.log(dailyActivities)



//The unshift() method adds an element at the beginning of the array. 

dailyActivities.unshift("wakeup at 5 am")

console.log(dailyActivities)

// change the element // replace the element

dailyActivities[2] = 'exercise';

console.log(dailyActivities)

//pop()  remove the last element

dailyActivities.pop()

console.log(dailyActivities)

// shift() remove the first element

dailyActivities.shift()

console.log(dailyActivities)

if (dailyActivities.includes("eat")){

    console.log("Eat is present")
}
else{

    console.log("eat is not present")
}

// []

// {



// }
// {


// }


newarr = ["exercise", "sleep", "work", "eat"]

const sliced = newarr.slice(1)

console.log(sliced)


let colors = ['red', 'green', 'blue'];

// for of 

for (const i of colors){
    // reaming 
    console.log("loop starts")
    console.log(i);
    console.log("loop ends")
}



//for in

// to work with objects 

// loop the properties of objects


// for of 

// to work with arrays

// loop the elements  of array


//exersize 1
// x = [1,2,3,4, 5, 6, 7]
// y = [a,b,c,d,e]

// z = [ 1,a,2,b,3,c,4,d,5,e,6,7]

//exersize 2

// exarr = [ "rara", "rar", "efjhbfujwevd", "brrtffb", "cerewcc", "arewrwer"]

// newarr = ["rar","brrtffb","cerewcc"]

// document 

// frequently interview 

// 20 questions Javascript 

// var and let 

// == ===

// any 1 programs 

// 80 cypress



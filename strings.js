
// var x = "Raju"

// var y = `Kishore`

// var z = 'Prasanna'

// sentence = "this is javascript class"

// str = "₹5,999"

// str2 = "₹6,499"

// //"₹5,999₹6,499"

// //12498 = 12498

// totalprice =  "₹12,498"

// console.log(str+str2)

// total = Number(str.replace("₹", "").replace(",", "")) +Number(str2.replace("₹", "").replace(",", ""))


// console.log(total)

// total2 = Number(totalprice.replace("₹", "").replace(",", ""))

// if(total === total2){

//     console.log("Both are equal")

// }


// 455

// str3 = "5"

// num1 = Number(str3)

// console.log(typeof(num1))


// // reverse the string 

// // Raju 

// // uajR

// stringgiven = "This is a string" // [T, h, i, ]

// reversedstring = stringgiven.split("").reverse().join("")

// console.log(reversedstring)


// // 3 ways 



// //convert streing to number

// // x = "10"

// // y = Number(x) //10


//index always starts with 0

x= "This is a String"

console.log(x[0])
   
console.log(x.length)

console.log(x.charAt(3))

arr = [ "eat", "sleep"]

arr[1]= "exersize"

// x[0]= "t"

//Strings immutable 

str = "erfbuhrfiuhner" // 2kb

const b = new String('erfbuhrfiuhner'); //8kb

console.log(typeof(b))

string1 = "Raju"

string2 = "G"

fullname = string1+" "+string2

console.log(fullname)

str3 = string1.concat(string2)

console.log(str3)

//coersion in JS

 num1 = "5"
 num2 = 6

 total = num1+num2 // "5"+"6"

 console.log(total)

 str5 = "10"
 num3 = 8

 total2 = str5*num3  //10*8 
  
 console.log(total2) // NaN

str7 = "This IS String in CAPS"

if(str7.includes("IS")){

    console.log(true)
}


//split is the methos to convert string to array 

arr2 = str7.split(" ") 

console.log(arr2)

arr3 = ["Raju", "G", "Blr"]

str11 = arr3.join("")

console.log(str11)


str12 = "      Raju     "

// to remove white spaces 

str13 = str12.trim()

console.log(str12.length)
console.log(str13.length)


// str8 = str7.toLowerCase()

// console.log(str8)

// str9= str7.toUpperCase()

// console.log(str9)

// str10= str7.substr(0,4)

// console.log(str10)

// price = "₹199.00"

// value = Number(price.substr(1,3))

// console.log(value)




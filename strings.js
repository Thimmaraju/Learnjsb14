
var x = "Raju"

var y = `Kishore`

var z = 'Prasanna'

sentence = "this is javascript class"

str = "₹5,999"

str2 = "₹6,499"

//"₹5,999₹6,499"

//12498 = 12498

totalprice =  "₹12,498"

console.log(str+str2)

total = Number(str.replace("₹", "").replace(",", "")) +Number(str2.replace("₹", "").replace(",", ""))


console.log(total)

total2 = Number(totalprice.replace("₹", "").replace(",", ""))

if(total === total2){

    console.log("Both are equal")

}


455

str3 = "5"

num1 = Number(str3)

console.log(typeof(num1))


// reverse the string 

// Raju 

// uajR

stringgiven = "This is a string" // [T, h, i, ]

reversedstring = stringgiven.split("").reverse().join("")

console.log(reversedstring)


// 3 ways 


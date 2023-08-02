
x = "madam"

//palindrom

y = "Raju"

// Not a palindrom

//write a function to check a string is palindrom or not 


function ispalindrome(str){

    reverstr = str.split("").reverse().join("")

    if(str == reverstr){

        console.log("Given String is palindrome")
    }
    else{

        console.log("Given String is not palindrome")
    }
}

ispalindrome("brbb")
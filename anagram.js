x = "Mary"
y = "Army"

// Anagram



function isanagram(x, y) {

    str1 = x.toLowerCase().split("").sort().join("") //amry
    str2 = y.toLowerCase().split("").sort().join("") //amry

    if (str1 == str2) {

        console.log("given strings  are anagram")
    }
    else {
        console.log("given strings  are not anagram")
    }

}

isanagram(x, y)
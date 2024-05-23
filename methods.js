let text = "asdfghjkl"

let arr1 = [1, 2, 3, 4, 5]

let obj = {
    intkey: 123,
    strkey: "asdfghjk",
    obj: {
        car: "ferrari",
        bike: "kawasakiNinja"
    }
    }

    console.log(text.length)
    console.log(arr1.length)
    console.log(obj.length)
  
    console.log(text.charAt(2))
    console.log(text.at(-2))
    console.log("Code of a is:",text.charCodeAt(1))
    console.log("Code of s is:",text.charCodeAt(2))
    console.log("Code of d is:",text.charCodeAt(3))
    console.log(text.slice(2,5));
    console.log(text.slice(-5,-1));
    console.log(text.substring(-3, 5)); //Negative values will be treated as zero



    console.log(arr1.length)
    console.log(obj.length)

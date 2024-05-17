// Temperature Converter:
let tempConverter = (temp, scale) => {
    if (scale == "F"||"f")
        return (temp-32)*5/9;
    else
        return (temp+32)*5/9
}

console.log(tempConverter(100,"c"))

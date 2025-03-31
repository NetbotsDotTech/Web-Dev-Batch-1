const family={
    hasband:"Ali",
    wife:"safia"
}
//For in Loop (it is used with object not array)
for (const element in family) { 
    // console.log(element," and ",family[element])
    
}



const gender={
    son:"daughter",
    boy:"girl",
    father:"Mother",
    men:"women",
    uncle:"ant"
}
for (const key in gender) {
    // console.log(` ${key} ==> ${gender[key]}`)
    if(gender[key]!=="women"){
        console.log(gender[key])

    }
    else{
        break
    }
  
        
    }



    for (const key in gender) {
        // console.log(` ${key} ==> ${gender[key]}`)
        if(gender[key]!=="women"){
            console.log(gender[key])
    
        }
        else{
            continue
        }
      
            
        }
    



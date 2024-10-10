import React from 'react'

const TimingWishes = ({timing}) => {
    let time=timing;
    if(time==="Morning"||time==="moring"){
        return <h4>Good Morning</h4>
    }
    else if(time==="afternoon"||time==="Afternoon"){
        return <h3>Good AfterNoon</h3>
    }
    else{
        return <h5>Good Evening</h5>
    }
  return (
    <div>
      
    </div>
  )
}

export default TimingWishes

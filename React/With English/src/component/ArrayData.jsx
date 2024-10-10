import React from 'react'

const ArrayData = () => {
    const detail=[
        {id:1,name:"Ali",eamil:"ali@gamil.com",location:"Skardu"},
        {id:2,name:"Basit Ali",eamil:"basit@gamil.com",location:"Baltistan"},
        {id:3,name:"Muhammad Ali",eamil:"muhammad@gamil.com",location:"Gilgit"},
    ]
  return (
    <div>
      {
        // detail.map((value,key)=>(
        //     <nav>
        //         <ul key={key}>
        //             <li>Name: {value.name}</li>
        //             <li>Email: {value.eamil}</li>
        //             <li>Location:{value.location}</li>
        //         </ul>
        //     </nav>
        // ))
        detail.map(({name,eamil,location,id})=>(
            <nav>
                <ul key={id }>
                    <li>Name: {name}</li>
                    <li>Email: {eamil}</li>
                    <li>Location:{location}</li>
                </ul>
            </nav>
        ))
      }
    </div>
  )
}

export default ArrayData

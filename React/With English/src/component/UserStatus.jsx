import React from 'react'

const UserStatus = ({login,admin}) => {
    if(login && admin){
        return <h3>Welcom Admin</h3>
    }
    else{
        return <h3>Welcome User</h3>
    }
  return (
    <div>
      
    </div>
  )
}

export default UserStatus

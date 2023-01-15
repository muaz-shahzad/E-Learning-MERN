import React from 'react'
import Userprofile from '../UserProfile/Userprofile'
import { useState } from 'react'


const UserPage = ({ setLoginUser, Username,Email,userid,rollno }) => {

  return (
    <>
      <Userprofile
        setUser1={setLoginUser}
        Username={Username}
        Email={Email}
        rollNo={rollno}
      />
    </>
  )
}

export default UserPage
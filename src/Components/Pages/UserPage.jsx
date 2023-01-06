import React from 'react'
import Userprofile from '../UserProfile/Userprofile'
import { useState } from 'react'


const UserPage = ({ setLoginUser, Username,Email,userid }) => {

  return (
    <>
      <Userprofile
        setUser1={setLoginUser}
        Username={Username}
        Email={Email}
        UserID={userid}
      />
    </>
  )
}

export default UserPage
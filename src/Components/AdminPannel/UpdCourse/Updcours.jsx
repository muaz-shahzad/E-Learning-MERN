import React from 'react'
import Adminnav from '../Adminnav'
// import "../AdminPannel/Adminpannel.css"
import "../Adminpannel.css"
import Updform from './Updform'

const Updcours = () => {
  return (
    <>
          <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav />
                    <Updform/>
                </main>
            </div>
    </>
  )
}

export default Updcours
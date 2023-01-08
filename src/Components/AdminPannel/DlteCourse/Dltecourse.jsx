import React from 'react'
import Adminnav from '../Adminnav'
// import "../AdminPannel/Adminpannel.css"
import "../Adminpannel.css"
import DlteForm from './DlteForm'

const Dltecourse = () => {
  return (
   <>
      <div className="min-height-300 bg-primary position-absolute w-100">
                <main className="main-content position-relative border-radius-lg ">
                    <Adminnav />
                    <DlteForm/>
                </main>
            </div>
   </>
  )
}

export default Dltecourse
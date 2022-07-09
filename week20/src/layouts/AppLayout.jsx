import React from 'react'
import Navbar from './nav/Navbar'

export default function AppLayout(props) {
  return (
    
    <main>


      {/* nav */}
      <Navbar></Navbar>

      {props.children}


      {/* footer */}




    </main>


  )
}

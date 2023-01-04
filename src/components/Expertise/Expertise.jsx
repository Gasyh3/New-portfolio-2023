import React from 'react'
import './Expertise.scss'
import CloudsSVG from '../CloudsSVG/CloudsSVG'


function Expertise() {
  return (
    <div className="expertise">
        <CloudsSVG />
        <h1 className="title">Expertise</h1>
        <main className="expertise__content">
            <section className="expertise__card"></section>
            <section className="expertise__card"></section>
            <section className="expertise__card"></section>
        </main>
    </div>
  )
}

export default Expertise
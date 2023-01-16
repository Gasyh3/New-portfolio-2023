import React from 'react'
import LoaderGIF from './assets/loader.gif'
import "./main.scss"


function Loader() {
  return (
    <div className="background">
        <img className="rocket" src={LoaderGIF} />
    </div>
  )
}

export default Loader
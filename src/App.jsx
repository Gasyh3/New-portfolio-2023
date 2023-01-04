import { useState } from 'react'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Expertise  from './components/Expertise/Expertise'

function App() {
  return (
    <div className="container">
      <div className="sky">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>

      <Header />
      <Hero />
      <Expertise />
      </div>
    </div>
  )
}

export default App

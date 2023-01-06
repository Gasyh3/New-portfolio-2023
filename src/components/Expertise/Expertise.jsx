import React from 'react'
import './Expertise.scss'
import CloudsSVG from '../svg-components/CloudsSVG/CloudsSVG'
import GearSVG from '../svg-components/GearSVG/GearSVG'
import reactLogo from '../../assets/react.svg'
import oopLogo from '../../assets/oop.svg'
import nodeLogo from '../../assets/nodejs.svg'

//Logo purplecat clicak effet on hover text appear click there
function Expertise() {
  return (
    <div className="expertise">
        <CloudsSVG />
        <h1 className="title">Expertise</h1>
        <main className="expertise__content">
            <section className="expertise__cards">
                <div className="expertise__card">
                <div className="expertise__card__head">
                <a href="https://reactjs.org" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                        <h5 className="card__title">
                            <span className="underline">
                                Frontend
                            </span>
                            <br />
                            Developpement
                        </h5>
                    </div>
                    <div className="expertise__card__content">
                <p className="card__text">
                    Passionné de UI/UX, je programme généralement en ReactJS et en SCSS.
                </p>
                </div>
                </div>
                <div className="expertise__card expertise__card--orange">
                <div className="expertise__card__head">
                <a href="https://nodejs.org/en/" target="_blank">
                        <img src={nodeLogo} className="logo react" alt="Node logo" />
                    </a>
                        <h5 className="card__title card__title--black">
                            <span className="underline">
                                Backend
                            </span>
                            <br />
                            Developpement
                        </h5>
                    </div>
                    <div className="expertise__card__content">
                <p className="card__text">
                    J'utilise NodeJS pour le backend et Express pour le routing.
                </p>
                </div>
                </div>
                <div className="expertise__card">
                <div className="expertise__card__head">
                    <a href="https://www.java.com/fr/" target="_blank">
                        <img src={oopLogo} className="logo react" alt="Java logo" />
                    </a>
                    <h5 className="card__title">
                        <span className="underline">
                            Software
                        </span>
                        <br />
                            Developpement
                     </h5>
                </div>

                <div className="expertise__card__content">
                <p className="card__text">

J'ai pu expérimenter durant mon apprentissage
la programmation orientée objet avec Java et C++.
</p>
                </div>
                </div>
            </section>
        </main>
        
    </div>
  )
}

export default Expertise
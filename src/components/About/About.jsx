import React from 'react'
import "./About.scss"
import Slideshow from "../Slideshow/Slideshow"

import { Scene } from '../Moutain/scene'

function Projects() {
  return (
    <div className="about">
        <h1 className='title'>À propos de moi</h1>
        <div className="aboutme">
            <div className="aboutme__text">
              <p>
                Salut ! Je suis Kévin Rakotoniaina et aussi loin que je me
                rappelle j'ai toujours eu un clavier et une souris entre les
                mains.
              </p>
              <p>
                Le domaine du développement m'a toujours fasciné - jeux vidéos,
                application mobile et site Web.
              </p>
              <p>
                Mon intêret pour le développement Web commence en 2017 lorsque
                je découvre HTML/CSS, depuis j'ai découvert un nouveau monde.
              </p>
              <p>
                Grâce à{" "}
                <a href="https://openclassrooms.com/fr/">OpenClassrooms</a> j'ai
                affiné mes compétences en travaillant sur des projets guidés
                dans le domaine du Web.
              </p>
              <p>
                Aujourd'hui je suis en Pré MSc Pro à l'{" "}
                <a href="https://www.epitech.eu/fr/formations/msc-pro-epitech-technology/">EPITECH </a>
                 Lyon. 
              </p>
            </div>
            <div className="aboutme__img">
              <Slideshow />
            </div>
          </div>
    </div>
  )
}

export default Projects
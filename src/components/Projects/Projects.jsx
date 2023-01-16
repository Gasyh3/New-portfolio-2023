import React from 'react'
import "./Projects.scss"
import CardProject from '../Card/Card'
import Booki from '../../assets/Booki.png'
import Ohmyfood from '../../assets/ohmyfood.png'
import Chouette from '../../assets/chouette.png'
import Jindeed from '../../assets/jindeed.png'
import Mabyt from '../../assets/mabyt.png'
import Kanap from '../../assets/kanap.png'
import Groupomania from '../../assets/groupomania.png'

import Html from '../../assets/html.svg'
import Sass from '../../assets/sass.svg'
import Js from '../../assets/javascript.svg'
import Css from '../../assets/css.svg'
import ReactLogo from '../../assets/react.svg'
import Node from '../../assets/nodejs.svg'
import Java from '../../assets/oop.svg'






function Projects() {
  return (
    <div className="projects">
        <h1 className='title'>Projets</h1>
        <div className="projects__content">
        <CardProject
            link="https://gasyh3.github.io/P3_website/index.html"
            img={Ohmyfood}
            title="OHMYFOOD"
            logo1={Html}
            logo2={Sass} 
           />
                    <CardProject
            link="https://gasyh3.github.io/P2_website/"
            img={Booki}
            title="Booki"
            logo1={Html}
            logo2={Css} 
           />
           <CardProject
            link="https://gasyh3.github.io/P4_website/after_optimisation/"
            img={Chouette}
            title="La Chouette Agence"
            logo1={Html}
            logo2={Css} 
           />
           <CardProject
            link="https://github.com/Gasyh3/RakotoniainaKevin_5_01022022"
            img={Kanap}
            title="Kanap"
            logo1={Html}
            logo2={Js} 
           />
            <CardProject
            link="https://github.com/https://github.com/EpitechMscProPromo2025/T-WEB-501-LYN-5-1-jobboard-jeremy.cusin-mermet/RakotoniainaKevin_5_01022022"
            img={Jindeed}
            title="Jindeed"
            logo1={ReactLogo}
            logo2={Node} 
           />  
           <CardProject
           link="https://github.com/Gasyh3/https://github.com/EpitechMscProPromo2025/T-JAV-501-LYN-5-1-dashboard-franck.crassava"
           img={Mabyt}
           title="Mabyt"
           logo1={ReactLogo}
           logo2={Java}
          /> 
          <CardProject
          link="https://github.com/Gasyh3/https://github.com/Gasyh3/groupomania_code_rakotoniaina_kevin"
          img={Groupomania}
          title="Groupomania"
          logo1={ReactLogo}
          logo2={Node}
         />

        </div>
    </div>
  )
}

export default Projects
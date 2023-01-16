import React from 'react'
import "./Footer.scss"
import Button from "../Button/Button"
import githubLogo from '../../assets/github.svg'
import twitterLogo from '../../assets/twitter.svg'
import linkedinLogo from '../../assets/linkedin.svg'



function Footer() {
  return (
    <div className='footer'>
        <div className="footer__content">

          
            <div className="footer__left">
                <h2 className="footer__title">
                    Je suis actuellement à la recherche d'une alternance en développement web.
                </h2>
            
                <Button
              classname="contact__button"
              action="Me contacter"
              onClick={() => (window.location = "mailto:kevin.rakotoniaina@epitech.eu")}
            ></Button>
            </div>
            <div className="footer__right">
            <div className="contact__number">+33 6 42 47 65 15</div>
            <nav className="footer__nav">
              <a href="https://github.com/Gasyh3" target="_blank">
                <img src={githubLogo} className="footer__link github" alt="github logo" />
              </a>
              <a href="https://twitter.com/RakotoKev14" target="_blank">
                <img src={twitterLogo} className="footer__link twitter" alt="twitter logo" />
              </a>
              <a href="https://www.linkedin.com/in/rakoto-kevin/" target="_blank">
                <img src={linkedinLogo} className="footer__link linkedin" alt="linkedin logo" />
              </a>
            </nav>
            </div>
        
        </div>
        <div className="footer__end">
            Designed and built by Kévin Rakotoniaina, 2023
        </div>
    </div>
  )
}

export default Footer
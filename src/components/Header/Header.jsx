import React from 'react'
import kevinLogo from '../../assets/kevin.svg'
import githubLogo from '../../assets/github.svg'
import twitterLogo from '../../assets/twitter.svg'
import linkedinLogo from '../../assets/linkedin.svg'

import './Header.scss'

function Header() {
  return (
    <div className="header">
      <a href="/" target="_blank">
        <img src={kevinLogo} className="header__logo" alt="kevin logo" />
      </a>
      <nav className="header__nav">
        <a href="https://github.com/Gasyh3" target="_blank">
          <img src={githubLogo} className="header__link github" alt="github logo" />
        </a>
        <a href="https://twitter.com/RakotoKev14" target="_blank">
          <img src={twitterLogo} className="header__link twitter" alt="twitter logo" />
        </a>
        <a href="https://www.linkedin.com/in/rakoto-kevin/" target="_blank">
          <img src={linkedinLogo} className="header__link linkedin" alt="linkedin logo" />
        </a>
      </nav>
    </div>
  )
}

export default Header
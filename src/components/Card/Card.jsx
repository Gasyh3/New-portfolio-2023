import React from 'react'
import "./Card.scss"


function CardProject(props) {
  return (
    <a className="cardprojects" href={props.link}>
            <div className="cardprojects__photo">
                <img src={props.img} alt="img" className="cardprojects__img" />
            </div>
            <div className="cardprojects__text">
                <h2 className="cardprojects__title">{props.title}</h2>
                <div className="cardprojects__description">
                    <img src={props.logo1} alt="logo" className="logoCardProjects" />
                    <img src={props.logo2} alt="logo" className="logoCardProjects" />
                </div>
                
            </div>
    </a>
  )
}

export default CardProject
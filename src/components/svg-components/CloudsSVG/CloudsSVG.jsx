import * as React from "react"
import "./CloudsSVG.scss"
import CloudPNG from "../../../assets/cloud.png"
import PurpleCloudPNG from "../../../assets/purplecloud.png"

const CloudsSVG = (props) => (
    <div className="background">
      <a href="https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE" target="_blank">
    <img src={PurpleCloudPNG} alt="Purplecat" className="clouds cloud1"/>
    </a>
    <img src={CloudPNG} alt="Cloud blue" className="clouds cloud2" />
    <img src={CloudPNG} alt="Cloud blue" className="clouds cloud3" />
    <img src={CloudPNG} alt="Cloud blue" className="clouds cloud4" />
    <img src={CloudPNG} alt="Cloud blue" className="clouds cloud5" />
    <img src={CloudPNG} alt="Cloud blue" className="clouds cloud6" />
  </div>
)

export default CloudsSVG

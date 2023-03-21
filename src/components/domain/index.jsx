import React from 'react'
import './style.scss'
import Section from '../shared/Section'
import SkillGraph from '../../images/ss.png'
import CallToAction from "../shared/CallToAction"
import {AiOutlineCloudDownload} from "react-icons/ai"

const SkillsAdv = () => {
  return (
    <Section background="dark" id="skillsAdv" >
        <div className="mainDiv">
            <div>
                <h2>Domain</h2>
                <p>A domain is the targeted subject area of a computer program. It is a term used in software engineering. Formally it represents the target subject of a specific programming project, whether narrowly or broadly defined.</p>
                <CallToAction text="Download CV" icon={<AiOutlineCloudDownload/>} />
            </div>
            <div className="skillPic">
                <img src={SkillGraph} alt="" />
            </div>
        </div>
    </Section>
  )
}

export default SkillsAdv
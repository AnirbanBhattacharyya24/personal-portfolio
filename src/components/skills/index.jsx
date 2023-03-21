import React from 'react'
import './style.scss';
import Section from '../shared/Section';
import TechIcons from '../../images/tech-icons.png'
import CallToAction from "../shared/CallToAction"
import {AiOutlineCloudDownload} from "react-icons/ai"

const Skills = () => {
  return (
    <Section background="dark" id="skills" >
        <div className="skills-content-wrapper">
            <div className="left-col">
                <img src={TechIcons} alt="skills" />
            </div>
            <div className="right-col">
                <h2>Skills</h2>
                <p>A skill is the learned ability to act with determined results with good execution often within a given amount of time, energy, or both. Skills can often be divided into domain-general and domain-specific skills.</p>
                <CallToAction text="Download CV" icon={<AiOutlineCloudDownload/>} />
            </div>
        </div>
    </Section>
  )
}

export default Skills
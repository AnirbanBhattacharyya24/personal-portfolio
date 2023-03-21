import React from 'react'
import './style.scss';
import logo1 from "../../../images/logo1.png";
import CallToAction from '../../shared/CallToAction';

const Navigation = () => {
  return (
    <div className="top-navigation-bar">
        <div className="app-logo">
            <div className="div1">
                <img src={logo1} alt="" />
            </div>
            <div className="div2">
                <p>anirbanb2425@gmail.com</p>
            </div>
        </div>
        <div className="navigation">
            <span className="navigation-item">Skills</span>
            <span className="navigation-item">Portfolio</span>
            <span className="navigation-item">Blogs & Articles</span>
            <CallToAction text="Contact me"/>
        </div>
    </div>
  )
}

export default Navigation
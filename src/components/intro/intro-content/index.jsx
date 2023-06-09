import React from 'react'
import "./style.scss";
import hand from "../../../images/hand.png";
import profilePic from "../../../images/img-new.png"
import CallToAction from '../../shared/CallToAction';
import { BsAwardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className='title'>
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} alt="" />
                            </span>
                            <span className='text'>, I am</span>
                        </span>
                        <span className="big-text">Anirban Bhattacharyya</span>
                    </h1>
                    <p>
                    Strong creative and analytical skills. Team player with an eye for detail. Always keen to learn new Technologies . Hard Worker and Quick Learner.
                    </p>
                    <CallToAction text="Contact Me"/>
                </div>
                <div className="right-col">
                    <img src={profilePic} alt="profile-pic" />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div>

                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroContent
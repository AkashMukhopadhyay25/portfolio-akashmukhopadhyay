import React from 'react'
import myimage from './me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons";


console.log(myimage)

const AboutMe = () => {
    return (
        <div className="about-me" id="aboutMe">
            <div className="about-me-img">
                <img src={myimage}/>
            </div>
            <div className="about-me-text">
                <h2>Hi, I'm Akash, Nice to meet you.</h2>
                <p>I am a Software Developer by Profession,<br/>
                A Freelance Developer By Hobby<br/>
                I love designing, developing, consulting, <br/>speaking and writing about building high quality, accessible websites.<br/>
                <br/>
                <br/>
                <a href="https://www.linkedin.com/in/akash-mukhopadhyay-352669148" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/AkashMukhopadhyay25" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                </a>
                <a href="https://www.instagram.com/__kaaashh__/" target="_blank">
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x"/>
                </a>
                </p>
            </div>
        </div>
    )
}

export default AboutMe

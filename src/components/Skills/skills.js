import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Hi, I’m Rohit Pokhariya — a passionate MERN Stack Developer.
I specialize in building responsive web applications using React JS, Tailwind CSS, Node.js, Express, and MongoDB. I love turning ideas into interactive, user-friendly websites and continuously explore new technologies to enhance my skills.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>MERN Developer</h2>
                        <p>Building powerful, full-stack web applications using MongoDB, Express.js, React, and Node.js.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>Designing pixel-perfect, responsive websites that look great on every device.</p>
                    </div>
                </div>
                {/* <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Mobile App UI Design </h2>
                        <p>You can write text related to mobile app development.</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default Skills;
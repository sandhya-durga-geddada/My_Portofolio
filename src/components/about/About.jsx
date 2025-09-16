import React from 'react';
import './About.css';
import Me from '../../assets/me-prof.png';
import Resume from '../../assets/Resume_RN.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Me} alt="" className='about__img' />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hello! I'm Sandhya Durga Geddeda, currently pursuing my B.Tech in Computer Science at Aditya Engineering College. <br></br><br></br>I’m passionate about full-stack development and have built projects like a Blood Donation Website with real-time donor tracking and OTP verification.

I’ve gained hands-on experience through my internship at Technical Hub, where I worked on MongoDB and strengthened my teamwork and development skills.I'm also certified in Python, HTML & CSS, and Java Foundation, and actively solve problems on platforms like LeetCode and Hackerrank to sharpen my skills.

<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>ReactJs</li>
                            <li>NodeJs</li>
                            <li>MongoDB</li>
                            <li>React Native</li>
                            <li>My SQL</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <AboutBox /> */}
        </section>
    )
}

export default About
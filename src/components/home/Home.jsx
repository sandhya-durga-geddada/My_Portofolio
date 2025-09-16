import React from 'react';
import './Home.css';
import Me from '../../assets/me-prof.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' />
                <h1 className="home__name">Sandhya Geddada</h1>
                <span className="home__education">I'm a Fullstack Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a> <br></br><br></br><br></br><br></br>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home
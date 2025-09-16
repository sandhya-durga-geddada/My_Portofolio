import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si'
import { IoMdMail } from "react-icons/io";

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/sandhya-durga-geddada' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href="" className='home__social-link' target='_blank' rel='noreferrer'>
                <IoMdMail />
            </a>

            <a href='https://www.linkedin.com/in/sandhya-geddada/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;

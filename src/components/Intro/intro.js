import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    // Function to force download resume
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/resume0.pdf";
        link.setAttribute("download", "Rohit_Resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Rohit</span> <br />Web Developer</span>
                <p className="introPara" >
                    I am a skilled web developer with experience in creating<br />
                    visually appealing and user friendly websites.
                </p>

                <div style={{ display: 'flex', gap: '10px' }}>
                    {/* Hire Me Button */}
                    <Link>
                        <button className="btn">
                            <img src={btnImg} alt="Hire" className='btnImg' />
                            Hire Me
                        </button>
                    </Link>

                    {/* Download Resume Button */}
                    <button className="btn" onClick={handleDownload}>
                        <img src={btnImg} alt="Download" className='btnImg' />
                        Resume
                    </button>
                </div>
            </div>

            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
};

export default Intro;

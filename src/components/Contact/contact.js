import './contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const frontendSkills = [
  { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png" },
  { name: "Tailwind CSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" },
  { name: "Redux", logo: "https://cdn.iconscout.com/icon/free/png-256/redux-283024.png" },
];

const backendSkills = [
  { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
 { name: "Express.js", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { name: "MongoDB", logo: "https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" },
  { name: "REST APIs", logo: "https://cdn-icons-png.flaticon.com/512/1476/1476763.png" },
];


const Contact = () => {
  const form = useRef();
  const [activeTab, setActiveTab] = useState('frontend');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_13gep2c',
      'template_evh2b36',
      form.current,
      '3q_YIl3FuJ85JT4or'
    )
    .then((result) => {
      console.log(result.text);
      e.target.reset();
      alert('Email Sent!');
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div id='contactPage'>

      {/* ✅ My Tech Stack Section */}
      <div id="techstack">
        <h1 className="contactPageTitle">My Tech Stack</h1>
        <span className="clientDesc">
          Here are the technologies I'm confident with, across frontend and backend.
        </span>

        <div className="techButtons">
          <button
            className={`techBtn ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend
          </button>
          <button
            className={`techBtn ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend
          </button>
        </div>

        <div className="techList">
          {(activeTab === 'frontend' ? frontendSkills : backendSkills).map((skill, index) => (
            <div className="skillBox" key={index}>
              <img src={skill.logo} alt={skill.name} className="skillLogo" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Contact Form Section */}
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name="from_name" />
          <input type="text" className="email" placeholder="Your Email" name="from_email" />
          <textarea name="message" placeholder="Your Message" rows={5} className="msg"></textarea>
          <button type="submit" value="Send" className="submitBtn">Submit</button>

          {/* Social Links */}
          <div className="links">
            <a href="https://linkedin.com/in/rohit-singh-pokhariya-24742a220" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="link" />
            </a>
            <a href="https://github.com/rohitpokhariya10" target="_blank" rel="noopener noreferrer">
              <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="link" />
            </a>
            <a href="https://www.instagram.com/rohitpokhariya07" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from 'react';
import { FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import  './contact.css';

const Contact = () => {
    const resumeLink = "https://docs.google.com/document/d/1pNhAE8DtvMzjor7Lp_cO4hFMs_fUWnU1/edit";
    const linkedInProfile = "https://www.linkedin.com/in/jonathangtngo/";
    const phoneNumber = "(408) 425-4265";
    const email = "Ngojonathan1040@gmail.com";

    return (
       <section id="contact" className="section contact">
            <h2>Contact</h2>
            <ul>
                <li>
                    <a href={linkedInProfile} target="_blank" rel="noreferrer">
                        <FaLinkedin /> LinkedIn
                    </a>
                </li>
                <li>
                    <a href={resumeLink} download>
                       Resume
                    </a>
                </li>
                <li>
                    <FaPhoneAlt /> {phoneNumber}
                </li>
                <li>
                    <FaEnvelope /> {email}
                </li>
            </ul>
        </section>
    );
};
export default Contact;

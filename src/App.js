import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import TypedText from './TypedText';
import bunnderImage from './bunnder.png'
import resumeWeb from './resume.png'
import ticTac from './Tic.png'
import Contact from './Contact.js'
import './App.css';

const App = () => {
  const projects = [
    {
        id: 1,
        title: 'Bunnder',
        role: 'Social Media',
        description: 'Bunnder is a Social Media Application that allows user to create an account and interact with other users. It is built using React and Firebase to store the users and chatlogs.',
        image: bunnderImage,
        technologies: ['ReactJS', 'JavaScript','FireBase']
    },
    {
        id: 2,
        title: 'Tic-Tac-Toe',
        role: 'Game',
        description: 'Tic-Tac-Toe is a game where two users play each other to see who can connect their symbol by 3 first. There is also a Bot that can play with you.',
        image: ticTac,
        technologies: ['ReactJS', 'JavaScript']
    },
    {
        id: 3,
        title: 'Personal Website',
        role: 'Resume',
        description: 'This website was my second project after Tic-Tac-Toe where I learned a lot of fundamentals of using React,GSAP,JS and put some of my personality into my website.',
        image: resumeWeb,
        technologies: ['ReactJS', 'JavaScript','CSS','FontAwesome']
    },
    // add more projects here...
];
    return (
        <div className="App">
            <Navbar />
            <section id="home" className="section home">
                {/* Content for the home section */}
                <video autoPlay loop muted>
                    <source src={`${process.env.PUBLIC_URL}/8 bit Japan - Live Wallpaper.mp4`} type="video/mp4" />
                </video>
                <h1>
                    <TypedText />
                </h1>
            </section>
            <About />

            <Projects projects={projects} />
            {/* Add more sections as needed */}
            <Contact max height =" -1000px" />
        </div>
    );
};

export default App;

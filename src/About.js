import React, { useState } from 'react';
import './Ghilbi/GhibliScene.css';
import './Ghilbi/SceneSection.css'
import './About.css';
import './Ghilbi/HowlsCastleCharacter.js';
import GhibliScene from './Ghilbi/GhibliScene';

const TimelineItem = ({ index, activeStar, setActiveStar, colors, label }) => {
  const handleClick = () => {
    setActiveStar(prevActiveStar => (prevActiveStar === index ? null : index));
  };

  return (
    <li>

      <div
        className={`timeline-badge ${activeStar === index ? 'active' : ''}`}
        onClick={handleClick}
      >
        <i className="fas fa-star"></i>
      </div>
      {activeStar === index && (
        <div className="timeline-panel">
          <div className="timeline-body">
            <div className="chatbox">
              <p>{label}</p>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

const About = () => {
  const [activeStar, setActiveStar] = useState(null);
  const colors = [ 'green'];

  const timelineData = [
    "Born",
    "Highschool",
    "Performance at Carneige Hall",
    "Start of UCR",
    "Covid",
    "Two InternShip at BioTech",
    "Got into University of the Pacific for Pharmacy",
    "Graduated from UCR",
    "Started Pharmacy School",
    "Dropped out of Pharmacy School",
    "Started Coding full time"
  ];

  return (
    <div id = "about" className="about-container" style={{ position: 'relative' }}>
      <GhibliScene isPlaying={true} />
      <div className="row d-flex justify-content-center">
        <div className="col-sm-10 col-md-8 col-lg-6 py-3">
            <h2 className="title">My Life Adventures!</h2>
              <ul className="timeline">

              {timelineData.map((label, index) => (
               <TimelineItem
                key={index}
                index={index}
                activeStar={activeStar}
                setActiveStar={setActiveStar}
                colors={colors}
                label={label}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>

);
};

export default About;

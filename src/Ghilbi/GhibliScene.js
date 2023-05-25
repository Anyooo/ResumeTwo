import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HowlsCastleCharacter from './HowlsCastleCharacter.js';
import SceneSection from './SceneSection.js';
import './GhibliScene.css'


gsap.registerPlugin(ScrollTrigger);

const GhibliScene = ({ isPlaying }) => {

  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const grass1Ref = useRef(null);
  const grass2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".GhibliScene",
        start: "top top",
        end: "+=100%",
        scrub: true
      }
    });

    tl.to(cloud1Ref.current, 5, { x: "-10vh" })
      .to(cloud2Ref.current, 5,{ x: "10vh" })
      .to(grass1Ref.current, 5,{ x: "-10vh" })
      .to(grass2Ref.current, 5,{ x: "10vh" });
  });

  return (
    <div className="GhibliScene">
      <SceneSection id="Ghibli">
        <div className="sky">
          <div ref={cloud1Ref} className="cloud c1" ></div>
          <div ref={cloud2Ref} className="cloud c2" ></div>
        </div>

        <HowlsCastleCharacter isPlaying={isPlaying} />

        <div ref={grass1Ref} className="grass1" ></div>
        <div ref={grass2Ref} className="grass2" ></div>
      </SceneSection>

    </div>
  );
}

export default GhibliScene;

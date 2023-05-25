import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { LOOP, LOOP_EASE_IN_OUT} from './constants'
import { gsap, Power0} from 'gsap';
import './HowlsCastleCharacter.css'

class HowlsCastleCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.castleContainer = React.createRef();
    this.loop = gsap.timeline();
    this.state = { scrollPosition: 0};
  }
  handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.setState({ scrollPosition });
    if (scrollPosition >= 900 && !this.state.animationStarted ){
      this.init();
      this.setState({ animationStarted: true});

    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

  }

  getNodes(className) {
    return this.castleContainer.current.querySelectorAll(className);
  }

  init() {
    const castle = {
      topTower: this.getNodes('.castle .top .top-tower'),
      bucket: this.getNodes('.castle .bucket'),
      frontLip: this.getNodes('.castle .mouth .front-lip'),
      backLip: this.getNodes('.castle .mouth .back-lip'),
      ear: this.getNodes('.castle .ear'),
      root: this.getNodes('.castle'),
      lLeg: this.getNodes('.castle .l-leg'),
      rLeg: this.getNodes('.castle .r-leg'),
      rArm: this.getNodes('.castle .r-arm-holder .r-arm'),
      lArm: this.getNodes('.castle .l-arm'),
      foliage1: this.getNodes('.castle .lower .foliage-foliage1'),
      foliage2: this.getNodes('.castle .lower .foliage-foliage2'),
      foliage3: this.getNodes('.castle .higher .foliage-foliage3')
    };

    const roughEaseConfig = {
      template: Power0.easeNone,
      strength: 1,
      points: 16,
      taper: 'none',
      randomize: false,
      clamp: false,
    };


      gsap.to(castle.topTower, 2, { rotation: -15, transformOrigin: '50% 100%', ease: roughEaseConfig, ...LOOP })
      gsap.to(castle.bucket, 0.6, { rotationZ: -25, rotationX: -45, transformOrigin: '50% 0%', ...LOOP })
      gsap.to([castle.frontLip, castle.backLip], 1.6, { rotation: -20, xPercent: -5, transformOrigin: '100% 0%', ease: roughEaseConfig, ...LOOP })// this is not moving
      gsap.to(castle.ear, 2, { rotation: -25, transformOrigin: '25% 50%', ease: roughEaseConfig, ...LOOP })
      gsap.to(castle.root, 1.6, { yPercent: -5, ...LOOP_EASE_IN_OUT })
      gsap.to(castle.lLeg, 2, { rotation: -15, transformOrigin: '0% 0%', ...LOOP_EASE_IN_OUT }) //not moving from here
      gsap.to(castle.rLeg, 2.3, { rotation: -15, transformOrigin: '0% 0%', ...LOOP_EASE_IN_OUT })
      gsap.to(castle.rArm, 1.8, { rotation: 15, transformOrigin: '0% 0%', ...LOOP_EASE_IN_OUT })
      gsap.to(castle.lArm, 2, { rotation: 15, transformOrigin: '0% 0%', ...LOOP_EASE_IN_OUT })
      gsap.to(castle.foliage1, 0.7, { transformOrigin: '50% 100%', skewX: 10, ...LOOP })
      gsap.to(castle.foliage2, 0.6, { transformOrigin: '50% 100%',skewX: -8, ...LOOP })
      gsap.to(castle.foliage3, 0.5, { transformOrigin: '50% 100%', skewX: 6, ...LOOP });
  }

  render() {
    // Here you'd render your Howl's Castle character's elements using the same CSS class names
    // that are used to select the nodes for animation. This is just a placeholder and would need
    // to be replaced with your actual JSX.
    const translateX = this.state.scrollPosition * -1.3;

    const castleStyle = {
      transform: `translateX(${translateX}px)`,
    };

    return (

      <ParallaxProvider>
      <Parallax y= {[-20,20]}>
      <div className="castle-container" ref={this.castleContainer} role="img" aria-labelledby="castleDesc"  style= {castleStyle}>

      <div className="castle">
        <div className="top">
          <div className="top-tower"></div>
          <div className="top-clothes"></div>
          <div className="top-top"></div>
        </div>
        <div className="bucket"></div>
        <div className="mouth">
          <div className="back-lip"></div>
          <div className="front-lip"></div>
        </div>
        <div className="l-leg"></div>
        <div className="r-leg"></div>
        <div className="l-arm"></div>
        <div className="body"></div>
        <div className="fans">
          <div className="fan2"></div>
          <div className="fan1"></div>
          <div className="fix-tail"></div>
        </div>
        <div className="r-arm-holder">
          <div className="r-arm"></div>
          <div className="fix-shoulder"></div>
        </div>
        <div className="ear"></div>
        <div className="lower-foliage">
          <div className="foliage2"></div>
          <div className="foliage1"></div>
          <div className="fix-balcony"></div>
        </div>
        <div className="wing"></div>
        <div className="higher-foliage">
          <div className="foliage3"></div>
          <div className="foliage2"></div>
          <div className="foliage1"></div>
          <div className="fix-roof"></div>
        </div>
        <div className="flag"></div>

      </div>
    </div>
    </Parallax>
    </ParallaxProvider>
  );
}
}

export default HowlsCastleCharacter;

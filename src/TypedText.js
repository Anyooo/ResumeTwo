import React from 'react';
import Typed from 'react-typed';
import './TypedText.css';

const TypedText = () => {
  return (
    <div className="typed-container">
      <Typed
        strings={[
          '<span class="highlight">H</span><span class="highlight">i</span>,<br/>I&#39;m <span class="highlight">J</span>onathan,<br/><span class="highlight">S</span>oftware Developer',
        ]}
        typeSpeed={55}
        startDelay={0}
        onComplete={(typed) => {
          typed.el.parentElement.classList.add('hide-cursor');
        }}
      />
    </div>
  );
};

export default TypedText;

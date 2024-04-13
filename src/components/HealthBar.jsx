import React from 'react';
import './HealthBar.css';

const HealthBar = ({ percentage }) => {
  const innerHealthBar = document.getElementById('innerHealthBar');
  
  innerHealthBar.style.width  = `calc((var(--widthOuterHealthBar) - 0.1rem) * ${playerData.players[clientID].health/100} )`
  return (
    <>
      <div id="outerHealthBar"></div>
      <div id="innerHealthBar"></div>
    </>
  );
};

export default HealthBar;

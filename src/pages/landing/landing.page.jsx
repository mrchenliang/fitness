
import React from 'react';
import './landing.styles.css';
import icon from '../../assets/icon.png';

const Landing = () => {
  const year = new Date().getFullYear();

  return (
    <div className="landing-page">
        <div className = "header">
          <img src={icon} className="logo" alt="logo" />
          <span className = 'title'>FitBrit Fitness</span>
        </div>
        <div className = 'footer'>
          <ul className="Social-Icons">
              <li>
                <div>
                  <a href="mailto:brittany.arora@fitbritfitness.ca" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope icon tooltip"><div className = 'tooltiptext'>Message Me</div></i></a>
                </div>
              </li>
              <li>
                <div>
                  <a href="http://instagram.com/fitbrit_runs" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram icon tooltip"><div className = 'tooltiptext'>Instagram Me</div></i></a>              
                </div>
              </li>
            </ul>
            <footer>
                <p>Copyright © FitBrit Fitness {year}</p>
            </footer>
          </div>
      </div>
    );
};

export default Landing;
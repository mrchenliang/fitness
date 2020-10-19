
import React from 'react';
import './footer.styles.css';


const Footer = (props) => {
    const year = new Date().getFullYear();
    return (
          <div className = 'footer'>
          <ul className="Social-Icons">
              <li>
                <div>
                  <a href="mailto:brittany.arora@fitbritfitness.ca" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope icon footertooltip"><div className = 'footertooltiptext'>Contact</div></i></a>
                </div>
              </li>
              <li>
                <div>
                  <a href="http://instagram.com/fitbrit_runs" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram icon footertooltip"><div className = 'footertooltiptext'>Instagram</div></i></a>              
                </div>
              </li>
            </ul>
            <p className = 'copyright'>Copyright © FitBrit Fitness {year}</p>
          </div>
    );
};

export default Footer;

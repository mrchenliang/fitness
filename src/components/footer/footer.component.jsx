
import React from 'react';
import './footer.styles.css';


const Footer = (props) => {
    const year = new Date().getFullYear();
    return (
          <div className = 'footer'>
          <ul className="Social-Icons" id = "contact">
              <li>
                <div>
                  <a href="mailto:brittany.arora@fitbritfitness.ca" rel="noopener noreferrer" target="_blank"><i className="fa fa-envelope icon footertooltip"><div className = 'footertooltiptext'>brittany.arora@fitbritfitness.ca</div></i></a>
                </div>
              </li>
              <li>
                <div>
                  <a href="http://instagram.com/fitbrit_runs" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram icon footertooltip"><div className = 'footertooltiptext'>@fitbrit_runs</div></i></a>              
                </div>
              </li>
            </ul>
            <p className = 'email'><a href="mailto:brittany.arora@fitbritfitness.ca" rel="noopener noreferrer" target="_blank">brittany.arora@fitbritfitness.ca</a></p>
            <p className = 'copyright'>Copyright © FitBrit Fitness {year} | Development By <a href="http://chenliang.ca" rel="noopener noreferrer" target="_blank">Chen Liang</a></p>
          </div>
    );
};

export default Footer;

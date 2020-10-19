import React from 'react';
import './welcome.styles.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import running from '../../assets/running-background.jpeg';


const About = () => {
    return (
    <div className='welcome-component' id = "welcome">
        <div className = 'welcome-background'>
            <img src={running} className="welcome-background" alt="welcome background" />
        </div>
        <div className = 'welcome-info'>
            <div className = 'welcome-intro'>Welcome!</div>
            <div className = 'paragraph'>
                FitBritFitness.ca is an Edmonton based fitness & health brand created in 2020 to help individuals become better versions of themselves. From custom programs, activewear, equipment & so much more!
            </div>
            <div className = 'learnMore'>
                <AnchorLink href="#about">Learn More</AnchorLink>
            </div>
        </div>
    </div>
    );
};

export default About;

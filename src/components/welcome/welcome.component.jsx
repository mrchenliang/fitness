import React from 'react';
import './welcome.styles.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import fitness from '../../assets/fitness.svg';


const Welcome = () => {
    return (
    <div className='welcome-component' id = "welcome">
        <div className = 'welcome-info'>
            <div className = 'welcome-intro'>Welcome!</div>
            <div className = 'paragraph'>
                FitBritFitness.ca is an Edmonton based fitness & health brand created in 2020 to help individuals become better versions of themselves. From custom programs, activewear, equipment & so much more!
            </div>
            <div className = 'learnMore'>
                <AnchorLink href="#credibility">Learn More</AnchorLink>
            </div>
        </div>
        <div className = 'welcome-background'>
            <img src={fitness} className="welcome-background" alt="welcome background" />
        </div>
    </div>
    );
};

export default Welcome;

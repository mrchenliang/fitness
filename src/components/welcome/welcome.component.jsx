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
                FitBritFitness.ca is an Edmonton based fitness & health brand created in 2020 to help individuals become better versions of themselves. Offering online delivery of personalized fitness programs, from individual sessions to long term training plans and seasonal challenges.
            </div>
            <div className = 'paragraph'>
                All populations are catered to, with knowledge and experience training people from various ages, stages, abilities, and comorbidities (obesity, hypertension, cardiovascular disease, stroke, osteoporosis, etc.). 
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

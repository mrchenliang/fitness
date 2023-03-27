import React from 'react';
import './welcome.styles.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import fitness from '../../assets/fitness.svg';
import Button from 'react-bootstrap/Button';


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
            <div className = 'freeWorkouts'>
                <Button variant="outline-dark" className = "freeWorkouts" href="mailto:brittany.arora@fitbritfitness.ca?subject=FitBrit%20Free%20Fitness&body=1%20am%20interested%20in%20checking%20out %20your%203%20FitBrit%20Free%20Fitness%20workouts.%20">FREE Workouts</Button>
            </div>
        </div>
        <div className = 'welcome-background'>
            <img src={fitness} className="welcome-background" alt="welcome background" />
        </div>
    </div>
    );
};

export default Welcome;

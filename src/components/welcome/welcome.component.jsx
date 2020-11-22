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
                FitBritFitness.ca is an Edmonton based fitness & health brand created in 2020 to help individuals become better versions of themselves. From custom programs, activewear, equipment & so much more! We offer online delivery of personalized fitness programs, from individual sessions to long term training plans. 
            </div>
            <div className = 'paragraph'>
                All populations are catered to, with knowledge and experience training people from all ages (youth to older adults), various comorbidities (obesity, hypertension, cardiovascular disease, stroke, osteoporosis, etc.) and in different stages of life (prenatal, post partum). Additional certificates obtained in Corrective Exercise Specialization, Sports Nutrition, Sports Performance Enhancement, and Behavior Change Management to ensure all will benefit from this wealth of knowledge.             </div>
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

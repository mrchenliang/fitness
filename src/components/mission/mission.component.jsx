import React from 'react';
import './mission.styles.css';
import mission from '../../assets/mission.svg';


const Mission = () => {
    return (
    <div className='mission-component' id = "mission">
        <div className = 'mission-background'>
            <img src={mission} className="mission-background-image" alt="mission background" />
        </div>
        <div className = 'mission-info'>
            <div className = 'mission-intro'>Mission</div>
            <div className = 'paragraph'>
                FitBrit Fitness believes in using current, evidence-based practices to create the most effective training plans that promote optimal physical and mental health, wellbeing, and transformational growth while decreasing the risk of injury and chronic conditions. We maximize results by creating unique plans for everyone based on physiological needs and personal desires.
            </div>
        </div>
    </div>
    );
};

export default Mission;

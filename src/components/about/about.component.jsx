import React from 'react';
import './about.styles.css';
import headshot from '../../assets/headshot.jpg';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const About = () => {
    return (
    <div className='about-component' id = "about">
            <div className = 'about-intro'>About Me</div>
            <div className = 'about-info'>
                <img src={headshot} className="headshot" alt="headshot" />
                <div className = 'about-paragraghs'>
                    <div className = 'paragraph'>
                        My name is Brittany Arora, and I am the creator of FitBritFitness.ca. 
                    </div>
                    <div className = 'paragraph'>
                        I am a Certified Personal Trainer and Certified Group Fitness Instructor with additional certifications in Nutrition. 
                    </div>
                    <div className = 'paragraph'>
                        To say my whole life revolves around health, fitness and nutrition would be an understatement. My focus is on using evidence based practices that are scientifically supported, up to date, and from credible sources to create the most effective and healthy plan for you. 
                    </div>
                    <div className = 'paragraph'>
                        I believe everyone will benefit from having a structured and individualized fitness plan to help guide their fitness journey, maximize results and keep their fitness routine exciting, no matter where their starting point is. I can't wait to see the things that we can accomplish together!
                    </div>
                    <div className = 'paragraph'>
                        My current personal fitness focus is mostly on running, weight lifting, cycling and boxing. I tend to cycle through sports each season to keep my exercise routine fresh and exciting. 
                    </div>
                </div>
            </div>
    </div>
    );
};

export default About;

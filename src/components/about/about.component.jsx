import React from 'react';
import './about.styles.css';
import headshot from '../../assets/headshot.jpg';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const About = () => {
    return (
    <div className='about-component' id = "about">
            <div className = 'about-intro'>About</div>
            <div className = 'about-info'>
                <img src={headshot} className="headshot" alt="headshot" />
                <div className = 'about-paragraghs'>
                    <div className = 'paragraph'>
                        My name is Brittany Arora, the creator of FitBritFitness.ca, and I am a Certified Personal Trainer. 
                    </div>
                    <div className = 'paragraph'>
                        To say my whole life revolves around health, fitness and nutrition would be an understatement. For years, all of my personal time was devoted to learning about health and fitness, and after many encouraging nudges from friends, I decided to take the next step and turn my hobbies into a career so I could better help others in their journey as well. 
                    </div>
                    <div className = 'paragraph'>
                        My current personal fitness focus is mostly on running, weightlifting, cycling and boxing. I tend to cycle through sports each season to keep my exercise routine fresh and exciting.
                    </div>
                    <div className = 'paragraph'>
                        I have been following a plant-based diet for over a decade now and am feeling healthier than ever. I support and encourage everyone to eat whichever diet fuels them best. I can be an educated resource on how to make positive impact on your diet and provide limitless new ideas, recipes, and meal prepping tips that will correlate with your personal goals. 
                    </div>
                    <div className = 'paragraph'>
                        I believe everyone will benefit from having a structured and individualized fitness plan to help guide their fitness journey, maximize results, and keep their fitness routine exciting, no matter where their starting point is. I cannot wait to see what we can accomplish together!
                    </div>
                </div>
            </div>
    </div>
    );
};

export default About;

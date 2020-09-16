import React from 'react';
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component';
import './about.styles.css';
// import image from '../../assets/image.png';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const About = () => {
    return (
    <div className='about-page'>
        <Navbar/>
        <div className = 'infos'>
            {/* <ReactCSSTransitionGroup
                transitionName="example" transitionAppear={true}
                transitionAppearTimeout={700}>
                {/* <img src={image} className="headshot" alt="headshot" /> */}
            {/* </ReactCSSTransitionGroup> */} */}
            <div className = 'about-info'>
                <div className = 'intro'>HELLO!</div>
                <div className = 'paragraghs'>
                    <div className = 'paragraph'>
                        My name is Lisa Chen and I’m an aspiring product manger with a background in management and marketing. I’m currently based in Toronto, Canada. 
                    </div>
                    <div className = 'paragraph'>
                        I have always loved art and storytelling and this passion has transformed into a curosity in the development of a well designed product. I love to understand the user challenges and come up with the best way to improve their experience.
                    </div>
                    <div className = 'paragraph'>
                        Currently, I worked at American Express as a product marketing manager focused on the Early Engagement portion ofthe customer journey. My goal is to make the onboarding process as smooth as possible for a new cardmember in all the platforms they may use. This includes the digital activation journeys, as well as the onboarding marketing curriculum.
                    </div>
                    <div className = 'paragraph'>
                        Outside of work, I am an avid cook and baker, and you can always find me in the kitchen trying out new recipes. I also love to create content in my spare time and share my recipes with people all over the world! 
                    </div>
                    <div className = 'paragraph'>
                        If you are interested in chatting, or just want to share across experiences and opportunities, please do not hesitate to reach out!
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    );
};

export default About;

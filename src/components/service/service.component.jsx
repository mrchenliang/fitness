import React, { Component } from 'react';
import './service.styles.css';
import { BiFoodMenu } from 'react-icons/bi';
import { GiMuscleUp, GiBiceps } from 'react-icons/gi';
import { MdAssessment } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PaypalButtons from '../../components/paypal/paypal.component'


class Service extends Component {

    state = {
        showPaypal: false,
        service: null,
        amount: null,
    };

    showPaypalButtons = ({service, amount}) => {
        this.setState({ showPaypal: !this.state.showPaypal});
        this.setState({ service: service });
        this.setState({ amount: amount });
        window.location = '#service';
    };
    render() {
        const { showPaypal } = this.state;
        if (showPaypal) {
            return (
                <div className = "paypal-component" id = 'service'>
                    <div className ="close" onClick={() => this.showPaypalButtons({service: null, amount: null})}>
                        <AiOutlineClose />
                    </div>
                    <PaypalButtons amount = {this.state.amount} service = {this.state.service}/>
                </div>
            )
        } else {
            return (
                <div className='service-component' id = "service">
                    <div className = 'service-intro'>Services</div>
                    <div className = 'service-paragraph'>Additional Services to Train Along With Me!</div>
                    <div className = 'service-cards'>
                        <Card className = "service-card" style={{ width: '16rem' }}>
                            <div className = "service-icon"><GiBiceps/></div>
                            <Card.Title className = 'service-card-title'>Personalized Training Session</Card.Title>
                            <Card.Body className = "service-card-body">
                                <Card.Text>
                                    1 session, 30 minutes, online via Zoom
                                </Card.Text>
                                <Card.Text className = 'service-description'>
                                    Personalized, one-on-one training session predesigned for best value of time. I will be virtually present to properly demonstrate each exercise, aid with form correction, answer questions and provide guidance. Workout template provided post workout for individual reuse.  
                                </Card.Text>
                                <div className = "service-price-button">
                                    <Card.Text className = "service-price">
                                        CAN $29.99
                                    </Card.Text>
                                    <Button variant="outline-dark" className = "service-button" onClick={() => this.showPaypalButtons({service: "Personalized Training Session", amount: "29.99"})} >Get Started</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className = "service-card" style={{ width: '16rem' }}>
                            <div className = "service-icon"><GiMuscleUp/></div>
                            <Card.Title className = 'service-card-title'>Personalized Training Package</Card.Title>
                            <Card.Body className = "service-card-body">
                                <Card.Text>
                                    5 sessions, 30 minutes each, online via Zoom
                                </Card.Text>
                                <Card.Text className = 'service-description'>
                                    Personalized, one-on-one training program predesigned for best value of time, with each new workout building upon the previous session. I will be virtually present to properly demonstrate each exercise, aid with form correction, answer questions and provide guidance. Workout template provided post workout for individual reuse.
                                </Card.Text>
                                <div className = "service-price-button">
                                    <Card.Text className = "service-price">
                                        CAN $99.99
                                    </Card.Text>
                                    <Button variant="outline-dark" className = "service-button" onClick={() => this.showPaypalButtons({service: "Personalized Training Package", amount: "99.99"})} >Get Started</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className = "service-card" style={{ width: '16rem' }}>
                            <div className = "service-icon"><MdAssessment/></div>
                            <Card.Title className = 'service-card-title'>Fitness Assessment</Card.Title>
                            <Card.Body className = "service-card-body">
                                <Card.Text>
                                    60 minutes, online via Zoom
                                </Card.Text>
                                <Card.Text className = 'service-description'>
                                    Includes: health history questionnaire, body composition assessment, cardiorespiratory and strength fitness assessment, posture and dynamic movement assessment followed by a discussion of findings and information on correction and potential plans. 
                                </Card.Text>
                                <div className = "service-price-button">
                                    <Card.Text className = "service-price">
                                        CAN $49.99
                                    </Card.Text>
                                    <Button variant="outline-dark" className = "service-button" onClick={() => this.showPaypalButtons({service: "Fitness Assessment", amount: "49.99"})} >Get Started</Button>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className = "service-card" style={{ width: '16rem' }}>
                            <div className = "service-icon"><BiFoodMenu/></div>
                            <Card.Title className = 'service-card-title'>FitBrit’s Favourites! eCookbook and Nutrition Guide</Card.Title>
                            <Card.Body className = "service-card-body">
                                <Card.Text>
                                    50+ simple, easy and healthy recipes, plant focused with inspiration from diverse cuisines. 
                                </Card.Text>
                                <Card.Text className = 'service-description'>
                                    Many contain few ingredients, require one pot only to prepare, and almost all recipes can be made in 10-20 minutes. Macronutrient breakdown included.                                 
                                </Card.Text>
                                <div className = "service-price-button">
                                    <Card.Text className = "service-price">
                                        CAN $19.99
                                    </Card.Text>
                                    <Button variant="outline-dark" className = "service-button" onClick={() => this.showPaypalButtons({service: "FitBrit’s Favourites! eCookbook and Nutrition Guide", amount: "19.99"})} >Get Started</Button>
                                </div>
                            </Card.Body>
                        </Card>
            
                    </div>
                </div>
            )
        }
    };
};

export default Service;

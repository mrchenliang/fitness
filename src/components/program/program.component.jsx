import React, { Component } from 'react';
import './program.styles.css';
import { BiDumbbell } from 'react-icons/bi';
import { GiWeightLiftingDown, GiWeightLiftingUp } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PaypalButtons from '../../components/paypal/paypal.component'


class Program extends Component {

    state = {
        showPaypal: false,
        program: null,
        amount: null,
    };

    showPaypalButtons = ({program, amount}) => {
        this.setState({ showPaypal: !this.state.showPaypal});
        this.setState({ program: program });
        this.setState({ amount: amount });
    };
    render() {
        const { showPaypal } = this.state;
        if (showPaypal) {
            return (
                <div className = "paypal-component">
                    <div className ="close" onClick={() => this.showPaypalButtons({program: null, amount: null})}>
                        <AiOutlineClose />
                    </div>
                    <PaypalButtons amount = {this.state.amount} program = {this.state.program}/>
                </div>
            )
        } else {
            return (
                <div className='program-component' id = "programs">
                    <div className = 'program-intro'>Programs</div>
                    <div className = 'program-paragraph'>The Beginner, Pro and Elite Custom Programs Include:</div>
                    <div className = 'program-info'>
                        <div className="program-list">
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "detailed consultation">✅</span> <div className = 'program-list-title'>Detailed consultation</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "fitness assessment">💪</span> <div className = 'program-list-title'>Fitness assessment</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "body composite assessment">📋</span> <div className = 'program-list-title'>Body composition assessment</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "individualized fitness plan">🏋️‍♀️</span> <div className = 'program-list-title'>Individualized fitness plan</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "weekly progress check ins">📈</span> <div className = 'program-list-title'>Weekly progress check ins</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "biweekly nutrition assessment and nutrition plan">🍔</span> <div className = 'program-list-title'>Nutrition plan and assessment</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "fitbrit\'s favourites ecookbook">📚</span> <div className = 'program-list-title'>FitBrit's Favourites! eCookbook</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "unlimited contact for support and guidance with me">🏆</span> <div className = 'program-list-title'>Unlimited contact for support and guidance with me</div>
                            </div>
                        </div>
                    </div>
                        <div className = 'program-paragraph'>Ultimately, every plan is completely unique and customized towards each individual in accordance with specific <i><b>goals, health, and abilities!</b></i></div>
                    <div className = 'program-cards'>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <span className = "program-discount">-25%</span>
                            <div className = "program-icon"><GiWeightLiftingDown/></div>

                            <Card.Body>
                                <Card.Title>Beginner</Card.Title>
                                <Card.Text>
                                1 month of personalized training.
                                </Card.Text>
                                <Card.Text className = "program-price">
                                CAN $66.75 <span>$89.00</span>
                                </Card.Text>
                                <Button variant="outline-dark" className = "program-button" onClick={() => this.showPaypalButtons({program: "Beginner", amount: "66.75"})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <span className = "program-discount">-25%</span>
                            <div className = "program-icon"><BiDumbbell/></div>

                            <Card.Body>
                                <Card.Title>Pro</Card.Title>
                                <Card.Text>
                                3 months of personalized training.
                                </Card.Text>
                                <Card.Text className = "program-price">
                                CAN $164.25 <span>$219.00</span>
                                </Card.Text>
                                <Button variant="outline-dark" className = "program-button" onClick={() => this.showPaypalButtons({program: "Pro", amount: "164.25"})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <span className = "program-discount">-25%</span>
                            <div className = "program-icon"><GiWeightLiftingUp/></div>

                            <Card.Body>
                                <Card.Title>Elite</Card.Title>
                                <Card.Text>
                                6 months of personalized training.
                                </Card.Text>
                                <Card.Text className = "program-price">
                                CAN $299.25 <span>$399.00</span>
                                </Card.Text>
                                <Button variant="outline-dark" className = "program-button" onClick={() => this.showPaypalButtons({program: "Elite", amount: "299.25"})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )
        }
    };
};

export default Program;

import React, { Component } from 'react';
import './challenge.styles.css';
import { AiOutlineClose } from 'react-icons/ai';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PaypalButtons from '../paypal/paypal.component'


class Challenge extends Component {

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
                <div className='program-component' id = "challenge">
                    <div className = 'program-intro'>FitBrit Fitness Summer Challenge</div>
                    <div className = 'program-paragraph'>June 1, 2021 – July 31, 2021</div>
                    <div className = 'program-info'>
                        <div className="program-list">
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "fitness prize">🏆</span> <div className = 'program-list-title'>Prizes for Top 3 Transformations</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "fitness plan">💪</span> <div className = 'program-list-title'>Home based, minimal equipment biweekly workout plan</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "fitness exercise">🏋️‍‍</span> <div className = 'program-list-title'>Modifiable exercises to best suit your ability level</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "fitness meal">🍔</span> <div className = 'program-list-title'>Meal guide and calorie + macro targets</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "fitness check ins">📈</span> <div className = 'program-list-title'>Weekly progress check ins</div>
                            </div>
                            <div className="program-list-item">
                                <span role = 'img' aria-label = "fitness check">✅</span> <div className = 'program-list-title'>Unlimited virtual support with me + exclusive Facebook group access</div>
                            </div>
                        </div>
                    </div>
                    <div className = 'program-cards'>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>FitBrit Fitness Summer Challenge</Card.Title>
                                <Card.Text className = "program-price">
                                CAN $149.99 
                                {/* <span>$89.00</span> */}
                                </Card.Text>
                                <Button variant="outline-dark" className = "program-button" onClick={() => this.showPaypalButtons({program: "FitBrit Fitness Summer Challenge", amount: "149.99"})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )
        }
    };
};

export default Challenge;

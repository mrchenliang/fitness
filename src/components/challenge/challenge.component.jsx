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
                    <div className = 'program-intro'>The FitBrit Fitness 2023 Comback Challenge!</div>
                    <div className = 'program-paragraph'>April 10th, 2023 – May 9th, 2023</div>
                    <div className = 'program-info'>
                        <div className="program-table">
                            <table>
                                <tr>
                                    <th>Feature</th>
                                    <th>Details</th>
                                </tr>
                                <tr>
                                    <td>Biweekly Workout Plans <span role = 'img' aria-label = "fitness plan">💪</span></td>
                                    <td>Home or Gym based program + Beginner and Advanced exercise options + LIVE workouts streamed weekly + No equipment necessary workouts</td>
                                </tr>
                                <tr>
                                    <td>Dietary Guidance <span role = 'img' aria-label = "fitness meal">🍔</span></td>
                                    <td>Completely Optional + Choice of calorie goal, macro targets, and/or meal guide + Guest speakers to teach you more about health and wellness</td>
                                </tr>
                                <tr>
                                    <td>Weekly Progress Check Ins <span role = 'img' aria-label = "fitness check ins">📈</span></td>
                                    <td>Weekly email updates + thorough intake to get a better understanding of what motivates you and how I can better support your journey</td>
                                </tr>
                                <tr>
                                    <td>Unlimited Virtual Support <span role = 'img' aria-label = "fitness check">✅</span></td>
                                    <td>24/7 support + Option to schedule private video calls with me to discuss progress and assess form</td>
                                </tr>
                                <tr>
                                    <td>Prizes! <span role = 'img' aria-label = "fitness prize">🏆</span></td>
                                    <td>3 prize categories + Comeback Ghost option (completely anonymous athlete) + Non-competitive option</td>
                                </tr>
                            </table> 
                        </div>
                    </div>
                    <div className = 'program-cards'>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>FitBrit Fitness Summer Challenge</Card.Title>
                                <Card.Text className = "program-price">
                                CAN $165.00
                                {/* <span>$89.00</span> */}
                                </Card.Text>
                                <Button variant="outline-dark" className = "program-button" onClick={() => this.showPaypalButtons({program: "FitBrit Fitness Summer Challenge", amount: "165.00"})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )
        }
    };
};

export default Challenge;

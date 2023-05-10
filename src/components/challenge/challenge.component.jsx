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
        window.location = '#challenge';
    };
    render() {
        const { showPaypal } = this.state;
        if (showPaypal) {
            return (
                <div className = "paypal-component" id = 'challenge'>
                    <div className ="close" onClick={() => this.showPaypalButtons({program: null, amount: null})}>
                        <AiOutlineClose />
                    </div>
                    <PaypalButtons amount = {this.state.amount} program = {this.state.program}/>
                </div>
            )
        } else {
            return (
                <div className='program-component' id = "challenge">
                    <div className = 'program-intro'>The FitBrit Fitness 2023 Sprint Challenge!</div>
                    <div className = 'program-paragraph'>4 Fast Weeks For Fast Progress</div>
                    <div className = 'program-paragraph'>May 29th, 2023 – June 25th, 2023</div>
                    <div className = 'program-info'>
                        <div className="program-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Weekly Workout Plans <span role = 'img' aria-label = "fitness plan">💪</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>Home/Gym based workouts in 30 minutes or less</li>
                                                <li>Exercise modifications for every ability level</li>
                                                <li>LIVE group workouts</li>
                                                <li>No equipment necessary workouts</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fuel Plan <span role = 'img' aria-label = "fitness meal">🍔</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>100% personalized to meet your individual goals</li>
                                                <li>Flexible fueling program</li>
                                                <li>Calorie goal, macro targets, and/or meal guide</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Progress Guaranteed <span role = 'img' aria-label = "progress guaranteed">💯</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>Evidence based programming for science-backed results or your money back</li>
                                            </ul>
                                        </td>                                    </tr>
                                    <tr>
                                        <td>Unlimited Virtual Support <span role = 'img' aria-label = "fitness check">✅</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>Available for 24/7 support, accountability, and motivating</li>
                                                <li>Available for private video calls to discuss progress / assess form</li>
                                            </ul>
                                        </td>                                    </tr>
                                    <tr>
                                        <td>Weekly Progress Check Ins <span role = 'img' aria-label = "fitness check ins">📈</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>Weekly email updates</li>
                                                <li>Thorough intake to learn how I can best support your journey</li>
                                            </ul>
                                        </td>                                       </tr>
                                    <tr>
                                        <td>Prizes! <span role = 'img' aria-label = "fitness prize">🏆</span></td>
                                        <td>3 prize categories + Comeback Ghost option (completely anonymous athlete) + Non-competitive option</td>
                                    </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div className = 'program-cards'>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>FitBrit Fitness Sprint Challenge</Card.Title>
                                <Card.Text className = "program-price">
                                CAN $125.00
                                {/* <span>$89.00</span> */}
                                </Card.Text>
                                <Button variant="outline-dark" className = "program-button" onClick={() => this.showPaypalButtons({program: "FitBrit Fitness Summer Challenge", amount: "125.00"})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )
        }
    };
};

export default Challenge;

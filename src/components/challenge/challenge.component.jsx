import React, { Component } from 'react';
import './challenge.styles.css';
import { AiOutlineClose } from 'react-icons/ai';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PaypalButtons from '../paypal/paypal.component'
import { challenge, challengeCost, challengeDates, challengeDescription } from '../../types/types';


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
                    <div className = 'program-intro'>The FitBrit Fitness 2023 {challenge}!</div>
                    <div className = 'program-paragraph'>{challengeDescription}</div>
                    <div className = 'program-paragraph'>{challengeDates}</div>
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
                                        <td>All-In-One App <span role = 'img' aria-label = "fitness app">📈</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>Workouts, fuel guide, food logging, progress measuring tools, goal setting, habit tracker, recipe data base, support group, and private personal trainer messaging all in a simple to use app</li>
                                                <li>Connects with fitness watches to streamline activity/workout syncing</li>
                                                <li>Positive accountability reinforcement with fun winning streaks, new personal record notifications, and special achievement badges</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Weekly Workout Plans <span role = 'img' aria-label = "fitness plan">💪</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>Home/Gym based workouts in 30 minutes or less</li>
                                                <li>Just need dumbbells!</li>
                                                <li>Exercise modifications with beginner to challenging difficulties</li>
                                                <li>LIVE group workouts (optional)</li>
                                                <li>No equipment workouts designed for vacations</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Fuel Plan <span role = 'img' aria-label = "fitness meal">🍔</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>100% personalized fueling program to meet your individual goals</li>
                                                <li>Choice of fuel plan (from lenient to more structured)</li>
                                                <li>In app food tracking, photo food journal, and product scanning</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Unlimited Virtual Support <span role = 'img' aria-label = "fitness check">✅</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>Available for 24/7 support, accountability, and motivating</li>
                                                <li>Available for private video calls to discuss progress / assess form</li>
                                                <li>Weekly holistic check ins so I can support you best</li>
                                            </ul>
                                        </td>                                    
                                    </tr>
                                    <tr>
                                        <td>Prizes! <span role = 'img' aria-label = "fitness prize">🏆</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>Fun prizes to stay motivated</li>
                                                <li>You vs You, never compared against others</li>
                                                <li>Holistic transformation considered (mental/emotional progress, overcoming adversity, not giving up, etc. – not just physical progress)</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Progress Guaranteed <span role = 'img' aria-label = "progress guaranteed">💯</span></td>
                                        <td>
                                            <ul className='program-list'>
                                                <li>Evidence based programming for science-backed results</li>
                                                <li>Achieve your goals with FitBrit as your coach, cheerleader, credible resource, motivator and accountability partner</li>
                                                <li>Commitment is risk free - results guaranteed or your money back</li>
                                            </ul>
                                        </td> 
                                   </tr>
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div className = 'program-cards'>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>FitBrit Fitness {challenge}</Card.Title>
                                <Card.Text className = "program-price">
                                CAN ${challengeCost}
                                {/* <span>$89.00</span> */}
                                </Card.Text>
                                <Button variant="outline-dark" className = "program-button" onClick={() => this.showPaypalButtons({program: `FitBrit Fitness ${challenge}`, amount: `${challengeCost}`})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )
        }
    };
};

export default Challenge;

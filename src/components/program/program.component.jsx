import React, { Component } from 'react';
import './program.styles.css';
import { BiDumbbell } from 'react-icons/bi';
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
                <div>
                    <div className ="close" onClick={() => this.showPaypalButtons({program: null, amount: null})}>
                        <AiOutlineClose />
                    </div>
                    <PaypalButtons amount = {this.state.amount} program = {this.state.program}/>
                </div>
            )
        } else {
            return (
                <div className='program-component' id = "program">
                    <div className = 'program-intro'>Programs</div>
                    <div className = 'program-cards'>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <div className = "program-icon"><BiDumbbell/></div>

                            <Card.Body>
                                <Card.Title>Decided</Card.Title>
                                <Card.Text>
                                1 month of personalized training.
                                </Card.Text>
                                <Button variant="outline-dark" onClick={() => this.showPaypalButtons({program: "Decided", amount: "100"})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <div className = "program-icon"><BiDumbbell/></div>

                            <Card.Body>
                                <Card.Title>Disciplined</Card.Title>
                                <Card.Text>
                                3 month of personalized training.
                                </Card.Text>
                                <Button variant="outline-dark" onClick={() => this.showPaypalButtons({program: "Disciplined", amount: "275"})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                        <Card className = "program-card" style={{ width: '16rem' }}>
                            <div className = "program-icon"><BiDumbbell/></div>

                            <Card.Body>
                                <Card.Title>Devoted</Card.Title>
                                <Card.Text>
                                6 month of personalized training.
                                </Card.Text>
                                <Button variant="outline-dark" onClick={() => this.showPaypalButtons({program: "Devoted", amount: "500"})} >Get Started</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            )
        }
    };
};

export default Program;

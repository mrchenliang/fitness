import React from 'react';
import './credibility.styles.css';
import { RiShieldKeyholeLine } from 'react-icons/ri';
import { AiOutlineFileProtect, AiOutlineTrophy } from 'react-icons/ai';

import AnchorLink from 'react-anchor-link-smooth-scroll'
import runner from '../../assets/runner.svg';

const Credibility = () => {
    return (
    <div className='credibility-component' id = "credibility">
        <div className = 'credibility-image'>
            <img src={runner} className="credibility-background" alt="welcome background" />
        </div>

        <div className = 'credibility-info'>
            <div className = 'credibility-intro'>Credibility</div>
                <div className = 'paragraph'>Build Your Body & Shape Yourself! At FitBrit Fitness, you are in good hands. We are: </div>
                <div className="credibility-list">
                    <div className="credibility-list-item">
                        < AiOutlineTrophy className = "credibility-icon"/>
                        <div className = 'credibility-list-text'>
                            <div className = 'credibility-list-title'>Satisfaction Guaranteed</div>
                            <div className = 'credibility-list-subtitle'>100% Money Back Guaranteed </div>
                        </div>
                    </div>
                    <div className="credibility-list-item">
                        < RiShieldKeyholeLine className = "credibility-icon"/>
                        <div className = 'credibility-list-text'>
                            <div className = 'credibility-list-title'>Fully Insured</div>
                            <div className = 'credibility-list-subtitle'>Complete Liability Coverage</div>
                        </div>
                    </div>
                    <div className="credibility-list-item">
                        < AiOutlineFileProtect className = "credibility-icon licensed"/>
                        <div className = 'credibility-list-text'>
                            <div className = 'credibility-list-title'>Fully Licensed</div>
                            <div className = 'credibility-list-subtitle'>Certified Personal Trainer, NASM-CPT | Certified Nutrition Coach, NASM-CNC | Corrective Exercise Specialist, NASM-CES</div>
                        </div>
                    </div>
                </div>
            <div className = 'joinToday'>
                <AnchorLink href="#programs">Join Today!  <i className="fa fa-arrow-right"/></AnchorLink>
            </div>
        </div>
    </div>
    );
};

export default Credibility;

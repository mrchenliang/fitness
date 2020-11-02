
import React from 'react';
import './home.styles.css';
import 'font-awesome/css/font-awesome.css';
import CustomNavbar from '../../components/navbar/navbar.component'
import Welcome from '../../components/welcome/welcome.component'
import Credibility from '../../components/credibility/credibility.component'
import Program from '../../components/program/program.component'
import About from '../../components/about/about.component'
import Subscribe from '../../components/subscribe/subscribe.component'
import Footer from '../../components/footer/footer.component';


const Home = () => {
  return (
    <div className="home-page">
      <CustomNavbar/>
      <Welcome/>
      <Credibility/>
      <Program/>
      <About/>
      <Subscribe/>
      <Footer/>
      </div>
    );
};

export default Home;
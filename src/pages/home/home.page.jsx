
import React from 'react';
import './home.styles.css';
import 'font-awesome/css/font-awesome.css';
import CustomNavbar from '../../components/navbar/navbar.component'
import EmailModal from '../../components/modal/modal.component';
import Welcome from '../../components/welcome/welcome.component'
import Mission from '../../components/mission/mission.component'
import Credibility from '../../components/credibility/credibility.component'
import Challenge from '../../components/challenge/challenge.component'
import Program from '../../components/program/program.component'
import Service from '../../components/service/service.component'
import About from '../../components/about/about.component'
import Subscribe from '../../components/subscribe/subscribe.component'
import Footer from '../../components/footer/footer.component';


const Home = () => {
  return (
    <div className="home-page">
      <CustomNavbar/>
      <EmailModal/>
      <Welcome/>
      <Mission/>
      <Credibility/>
      <Program/>
      <Challenge/>
      <Service/>
      <About/>
      <Subscribe/>
      <Footer/>
    </div>
    );
};

export default Home;
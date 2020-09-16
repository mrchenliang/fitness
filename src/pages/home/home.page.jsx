
import React from 'react';
import './home.styles.css';
// import 'font-awesome/css/font-awesome.css';
import Navbar from '../../components/navbar/navbar.component'
import Footer from '../../components/footer/footer.component';


const Home = () => {
  return (
    <div className="home-page">
      <Navbar/>
        <div className = 'home-intro'>
          <div className = 'tagLine'>Build Your Body &</div>
          <div className = 'intro'>Shape Yourself!</div>
          <div className = 'intro-blog'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  architecto beatae vitae dicta sunt explicabo.</div>
          <div><a class="button" href="/program">Join Today !<i className="fa fa-arrow-right"/></a></div>
        </div>
        <div className = 'home-story'>
          <div className = 'tagLine'>Our Story</div>
          <div className = 'intro-blog'>am, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta suntNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </div>
          <ul class="menu__list">
                <li class="menu__list-item">
                  <a class="menu__link" href="/about">Community</a>
                  <div>Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi  vitae dicta sunt explicabo sequi nesciunt. </div>
                </li>
                <li class="menu__list-item">
                  <a class="menu__link" href="/program">Personalized Training</a>
                  <div>Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi  vitae dicta sunt explicabo sequi nesciunt. </div>
                </li>
                <li class="menu__list-item">
                  <a class="menu__link" href="/contact">Professional</a>
                  <div>Trem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi  vitae dicta sunt explicabo sequi nesciunt. </div>
                </li>
            </ul>
        </div>
      <Footer/>
      </div>
    );
};

export default Home;
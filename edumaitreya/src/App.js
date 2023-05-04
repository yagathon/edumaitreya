import React from 'react';
import {useEffect} from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavigationBar from './components/navbar.js';
import Banner from './components/banner.js';
import AboutUs from './components/about.js';
import Program from './components/program.js';
import Footer from './components/footer.js';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
    <NavigationBar />
    <Banner/>
    <AboutUs/>
    <Program/>
    <Footer/>
    </div>
  );
}
export default App;
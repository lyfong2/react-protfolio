import React from 'react';

// -------------Component-------------
import Navbar from './components/Navbar/Navbar';
import Experiences from './components/Experiences/Experiences';
import Footer from './components/Footer/Footer'
import MainInfoSection from './components/MainInfoSection/MainInfoSection';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

// -------------CSS Style-------------
import './App.css';
import './style/animate.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <MainInfoSection />
        <Experiences />
        <Skills />
        <Work />
        <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './styles/App.css';
import HeaderSection from './page sections/HeaderSection/HeaderSection';
import InvestmentsSection from './page sections/InvestmentsSection/InvestmentsSection';
import ApplySection from './page sections/ApplySection/ApplySection';
import FooterSection from './page sections/FooterSection/FooterSection';

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <InvestmentsSection/>
      <ApplySection/>
      <FooterSection/>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookingForm from './components/BookingForm';

const App = () => {
  const [selectedLab, setSelectedLab] = useState('The AI Lab');

  const labs = [
    { name: 'The AI Lab', description: 'For AI/ML projects', image: 'https://i.pinimg.com/736x/91/8a/e0/918ae0d112190e9c2c93ac0772d29038.jpg' },
    { name: 'The Database Lab', description: 'For database-oriented work', image: 'https://i.pinimg.com/736x/4c/99/e4/4c99e47609111a93dea376e11dd13359.jpg' },
    { name: 'The Apple Lab', description: 'For iOS/macOS app development', image: 'https://i.pinimg.com/736x/10/7d/91/107d91105e383fc96d28ceac5ada0aa3.jpg' },
  ];


  const selectedLabDetails = labs.find(l => l.name === selectedLab);
  <div className="lab-image">
  <h4>{selectedLabDetails.name} Image</h4>
  <img src={selectedLabDetails.image} alt={selectedLabDetails.name} />
  <p><strong>Currently Selected:</strong> {selectedLabDetails.name}</p>
  </div>


  return (
    <div>
      <Navbar />
      <div className="booking-section">
        <div className="booking-banner">Book in advance to avoid the Hassle!!</div>
        <BookingForm 
          labs={labs.map(l => l.name)} 
          selectedLab={selectedLab} 
          setSelectedLab={setSelectedLab} 
          labDetails={selectedLabDetails}
        />
      </div>
    </div>
  );
};
export default App;

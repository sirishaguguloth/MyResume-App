import React from 'react';
import backgroundImage from '../assets/img1.webp';
import CustomNavbar from './CustomNavbar';


const BackgroundContainer = ({ children }) => {
  const divStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Adjust height as needed
    // Add other styles as needed
  };

  return (
    <div style={divStyle}>
      <CustomNavbar/>
    
     
      
      {children}
    </div>
  );
};

export default BackgroundContainer;


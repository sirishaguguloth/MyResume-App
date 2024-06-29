import React, { useState } from 'react'
import BackgroundContainer from '../Components/BackgroundContainer'
import '../styles/Nav.css';


export default function Home() {
  const handleDownload = (e) => {
   
    // Create an invisible link
    const link = document.createElement('a');
    link.href = '/src/assets/Siriresume.pdf';  // Replace with the path to your image
    link.download = 'Siriresume.pdf';  // Specify the filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
     {/* <img src={bgimg} alt="bgimg" /> */}
      <BackgroundContainer>
         <center>
         <div className="content" id='content'>
          <br></br>
            <h2>UI ALCHEMIST</h2>
            <h1>Frontend Developer</h1><br/>
            <p>I'm your pixel magician! ✨ Crafting interfaces that captivate like Martian landscapes<br></br> & convert like space lasers. Let's make your vision legendary!. Ready to see your vision come alive? Let's chat!</p>
            <br/>
            <div className="download">
            <input type="button" value="Download resume" onClick={handleDownload} />
            </div>
        </div>
         
         
         </center>
         
      </BackgroundContainer>
      
      
    </div>
  )
}

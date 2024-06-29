import React from 'react'
import '../styles/Nav.css';

export default function About() {
  const handleDown = (e) => {
   
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
      <center>
      <div className="about" id='about'>
        <div className="title">
           <h1>About Me</h1></div>
           <h2>Hii, I'm Sirisha Gugulothu</h2>
           <p> Hi,I am a passionate frontend developer .I have the ability to
             transform lines of code into visually stunning interfaces. 
             I am particularly enthusiastic about exploring the intersections of design and functionality, 
             striving to strike a perfect balance between aesthetics and usability. I bring a passion for creating
              captivating user interfaces using the latest web technologies. Proficient in HTML, CSS, bootstrap,and JavaScript, I specialize in transforming design concepts into seamless and interactive web experiences. My toolkit includes popular frontend libraries and frameworks, with a strong emphasis on React.js for building dynamic and responsive applications.
           </p>
      
            <div className="download">
            <input type="button" value="Download Resume"  onClick={handleDown} />
            </div>
      </div>   
      </center>
    </div>
  )
}

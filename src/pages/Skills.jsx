import React from 'react';
import '../styles/Nav.css';
import img1 from '../assets/skill/react-1.png';
import img2 from '../assets/skill/js.jpg';
import img3 from '../assets/skill/css.png';
import img4 from '../assets/skill/img1.jpg';
import img5 from '../assets/skill/B-1.jpg';
import img6 from '../assets/skill/git.jpg';
import img7 from '../assets/skill/vs1.jpg';
import img8 from '../assets/skill/java.png';
import img9 from '../assets/skill/e1.jpg';

export default function Skills() {
  return (
    <div className="skills" id='skills'>
      <center>
        <div className="it">
          <h2>My Skills</h2>
          <div className="img">
            <span className="line">
              <img  className="img1" src={img1} alt="react" height={100} />
              <img className="img2"src={img3} alt="css" height={100} />
              <img className="img3" src={img2} alt="js" height={100} />
            </span>
          </div>
          <div className="img">
            <span className="line">
              <img className="img4" src={img4} alt="html" height={100} />
              <img  className="img5"src={img5} alt="bootstrap" height={100} width={90} />
              <img className="img6"src={img6} alt="git" height={100} width={90}/>
            </span>
          </div>
          <div className="img">
            <span className="line">
              <img className="img7" src={img7} alt="vs" height={100} />
              <img className="img8" src={img8} alt="Java" height={100} width={93} />
              <img className="img9" src={img9} alt="eclipse" height={100} width={95} />
            </span>
          </div>
        </div>
      </center>
    </div>
  );
}

import '../style.css'
import { useState } from 'react'
import grad_profile from '../assets/images/grad_profile.jpg'
import profile from '../assets/images/profile.png'

export default function Home() {

  const [isHover, setIsHover] = useState(false);
  const [contactInfo, setContactInfo] = useState("skyler2601@gmail.com");

  const handleMouseEnter = (contactInfoSet) => {
    setIsHover(true);
    setContactInfo(contactInfoSet);

  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const contactStyle = {
    display: isHover ? 'block' : 'none',
  };

  return (
    <div id="home" className="section">
      <div className="header">
        <div>
          <h1>Skyler Krouse</h1>
          <div>
            <div className="horizontal-flex">
              {/* <a href={"mailto:skyler2601@gmail.com"}>skyler2601@gmail.com</a>
              <p>908-399-6601</p>
              <a href={"https://www.linkedin.com/in/skyler-krouse/"} target="_blank">LinkedIn</a> */}
              <a href={"mailto:skyler2601@gmail.com"} className="contact" onMouseEnter={() => handleMouseEnter("skyler2601@gmail.com")} onMouseLeave={handleMouseLeave}>E-Mail</a>
              <span className="contact" onMouseEnter={() => handleMouseEnter("(908) 399-6601")} onMouseLeave={handleMouseLeave}>Phone</span>
              <a href={"https://www.linkedin.com/in/skyler-krouse/"} className="contact" onMouseEnter={() => handleMouseEnter("https://www.linkedin.com/in/skyler-krouse/")} onMouseLeave={handleMouseLeave}>LinkedIn</a>
            </div>
            <div style={{ height: '50px' }}><span style={contactStyle}>{contactInfo}</span></div>
          </div>

        </div>
      </div>
      <div className="content">
        <img src={profile} alt="Profile Picture" style={{ width: "65%", borderRadius: 800 }}></img>
      </div>
    </div >
  );
}
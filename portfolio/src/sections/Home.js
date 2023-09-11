import '../style.css'
import Image from 'react'
import grad_profile from '../assets/images/grad_profile.jpg'
import profile from '../assets/images/profile.png'

export default function Home() {
  return (
    <div id="home" className="section">
      <div className="header">
        <div>
          <h1>Skyler Krouse</h1>
          <a href={"mailto:skyler2601@gmail.com"}>skyler2601@gmail.com</a>
          <p>908-399-6601</p>
          <a href={"https://www.linkedin.com/in/skyler-krouse/"} target="_blank">LinkedIn</a>
        </div>
      </div>
      <div className="content">
        <img src={profile} alt="Profile Picture" style={{ width: 400, borderRadius: 400 / 2 }}></img>
      </div>
    </div >
  );
}
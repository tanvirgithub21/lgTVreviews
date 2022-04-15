import React, { useEffect, useState } from "react";
import "./About.css";

const About = () => {
    const [aboutData, setAboutData] = useState({})
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/tanvirgithub21/ass-9-data/gh-pages/aboutData.json")
        .then(res => res.json())
        .then(data => setAboutData(data))
    },[])

    console.log(aboutData)
  return (
    <div className="aboutBox">
      <div className="aboutLogoImg">
       <h1>LG</h1>
      </div>
      <div className="aboutText">
        <h2>About</h2>
        <div className="aboutTextBox">
          <p>{aboutData?.about_text}</p>
        </div>
      </div>
    </div>
  );
};

export default About;

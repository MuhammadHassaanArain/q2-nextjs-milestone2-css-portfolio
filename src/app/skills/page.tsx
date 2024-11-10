import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSanity } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import "../skills/skills.css";
function Skills() {
  return (
    <main
    style={{background:"#2e2e31", textAlign:"center", display:"flex",flexDirection:"column", alignItems:"center", paddingTop:"40px", paddingBottom:"40px"}}
    >
      <section className="custom-width">
        <h2 
        style={{fontSize:"24px",color:"#ff9500", paddingTop:"16px",paddingBottom:"16px", fontWeight:700, }}
        >My SKills</h2>
        <p className="custom-md-text-xl"
        style={{color:"#a1a1a4", fontWeight:700, fontFamily:"monospace"}}
        >
          As a full stack developer, I have developed a comprehensive skill set
          spanning both frontend and backend technologies. This allows me to
          build robust, scalable, and dynamic web applications from the user
          interface down to the database. My expertise covers a range of modern
          tools, frameworks, and languages, empowering me to tackle all aspects
          of web development. Below is an overview of my primary skills, where I
          excel, and additional skills that complement my core expertise.
        </p>
      </section>
      <section>
        <h3
        style={{color:"#ff9500", fontSize:"1.25rem", paddingTop:"8px", paddingBottom:"8px", fontWeight:700}}
        >Top Skills</h3>
        <div className="custom-grid"
        >
          <div className="custom-container">
            <BiLogoTypescript className="customElement" />
            <span>Typescript</span>
          </div>
          <div className="custom-container">
            <SiNextdotjs className="customElement" />
            <span>Next JS </span>
          </div>
          <div className="custom-container">
            <BiLogoPostgresql className="customElement" />
            <span>PostgreSQl</span>
          </div>
          <div className="custom-container">
            <IoLogoJavascript className="customElement" />
            <span>Javascript</span>
          </div>
          <div className="custom-container">
            <SiSanity className="customElement" />
            <span>Sanity CMS</span>
          </div>
          <div className="custom-container">
            <FaReact className="customElement" />
            <span>React JS</span>
          </div>

          <div className="custom-container">
            <FaHtml5 className="customElement" />
            <span>HTML</span>
          </div>
          <div className="custom-container">
            <FaCss3 className="customElement" />
            <span>CSS</span>
          </div>
          <div className="custom-container">
            <FaGitAlt className="customElement" />
            <span>Git & Github</span>
          </div>
          <div className="custom-container">
            <FiFigma className="customElement" />
            <span>Figma</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;

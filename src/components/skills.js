import React from 'react'
import "../css/skills.css";
import node from "../images/node.png"
import cpp from "../images/cpp.png";
import react from "../images/react.png";

 
const Skills = () => {
  return (
    <>
 <h1 className='sauvih' style={{color: "skyblue"}}>My Recent Works</h1>
    <h4 className='saum'>Here I have displayed the skills in which I have good command and knowledge</h4>
<div className="container-skills" id="skills">

  <div className="skills">
  <ul className="ch-grid">
    <li>
        <div className="circle"> 
            <div className="mask half">
                <div className="fill"></div>
            </div>
            <div className="mask full">
                <div className="fill"></div>
             </div>
             <div className="inside-circle"> </div>
            <img src={cpp} alt="cpp" className="ch-img"/>
            <div className="ch-info">
                <h3>Improving this skill everyday</h3>
                <p>C++</p>
            </div>
            </div>
    </li>
    <li>
        <div className="circle"> 
            <div className="mask half">
                <div className="fill"></div>
            </div>
            <div className="mask full">
                <div className="fill"></div>
             </div>
             <div className="inside-circle"> </div>
            <img src={node} alt="node" className="ch-img"/>
            <div className="ch-info">
                <h3>Improving this skill everyday</h3>
                <p>Node</p>
            </div>
            </div>
    </li>
    <li>
        <div className="circle"> 
            <div className="mask half">
                <div className="fill"></div>
            </div>
            <div className="mask full">
                <div className="fill"></div>
             </div>
             <div className="inside-circle"></div>
            <img src={react} alt="html icon" className="ch-img"/>
            <div className="ch-info">
                <h3>Actively studying since jun '22</h3>
                <p>React</p>
            </div>
            </div>
    </li>
</ul>

</div>
</div> 


<div className="skill">
      <p className="skl">More :</p>
      <p className="skl sklLine">_________</p>
      <div className="sqlProg ProgWidth">
        <div className="p">
          <p>C/C++</p>
          <p>85%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar sqlBar"></span>
          </div>
        </div>
      </div>
      <div className="htmlProg ProgWidth">
        <div className="p">
          <p>JavaScript</p>
          <p>95%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar htmlBar"></span>
          </div>
        </div>
      </div>
      <div className="cssProg ProgWidth">
        <div className="p">
          <p>Java</p>
          <p>65%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar cssBar"></span>
          </div>
        </div>
      </div>
      <div className="jsProg ProgWidth">
        <div className="p">
          <p>HTML</p>
          <p>70%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar jsBar"></span>
          </div>
        </div>
      </div>
      <div className="javaProg ProgWidth">
        <div className="p">
          <p>React</p>
          <p>85%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar javaBar"></span>
          </div>
        </div>
      </div>
      <div className="reactProg ProgWidth">
        <div className="p">
          <p>Node JS</p>
          <p>65%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar reactBar"></span>
          </div>
        </div>
      </div>
      <div className="nodeProg ProgWidth">
        <div className="p">
          <p>CSS</p>
          <p>35%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar nodeBar"></span>
          </div>
        </div>
      </div>
      <div className="c/c++Prog ProgWidth">
        <div className="p">
          <p>MongoDB</p>
          <p>75%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar ccpBar"></span>
          </div>
        </div>
      </div>
      <div className="nodeProg ProgWidth">
        <div className="p">
          <p>SQL</p>
          <p>35%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar nodeBar"></span>
          </div>
        </div>
      </div>
      <div className="nodeProg ProgWidth">
        <div className="p">
          <p>Git/Github</p>
          <p>30%</p>
        </div>
        <div className="pp">
          <div className="skillDiv">
            <span className="skillBar nodeBar"></span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills

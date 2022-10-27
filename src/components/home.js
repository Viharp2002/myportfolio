import React from 'react';
import "../css/about.css";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <>
   <header className="masthead">
   <p className="masthead-intro"><Typewriter
   options={{
    autoStart: true,
    loop: true
   }}
   onInit={(typewriter)=>{
    typewriter
    .typeString("Hi! I am Vihar")
    .changeDelay(100)
    .pauseFor(100)
    .changeDeleteSpeed(10)
    .deleteAll()
    .typeString("I am a Web Developer")
    .pauseFor(100)
    .changeDeleteSpeed(10)
    .deleteAll()
    .typeString("I am a competitive coder")
    .pauseFor(100)
    .changeDeleteSpeed(10)
    .deleteAll()
    .typeString("I am an open source contributor")
    .pauseFor(100)
    .changeDeleteSpeed(10)
    .deleteAll()
    .start()}}
    /></p>
 </header> 
 <section className="introduction-section">
   <h1><u className='vihar'>Let me Introduce Myself</u></h1><br/>
	<p className='vih'>Hello myself Vihar Prajapati. I am currently pursuing my B.Tech in Computer Engineering at <a href="https://www.bvmengineering.ac.in/">Birla Vishwakarma Mahavidyalaya</a> I am a MERN Developer and good at Problem Solving. My areas of intrest are Machine Learning and Web Development.</p>
   <p>I love communicating with people clearly and creatively and I like arts, culture, and technology which is why I’m trying to learn more about code.</p>
 </section>
 <section className="location-section">
   <h1><u className='vihar'>Where I'm From</u></h1>
   <p className='vih'>Right now I live in Anand,Gujarat.</p>
 </section>
 <section className="questions-section">
   <h1><u>More About Me</u></h1> <br/><br/>
   <h1><u className='vihar'>What are my favorite hobbies?</u></h1><br/>
   <p className='vih'>I love to solve puzzeles, learn about new things and also reading novels.</p><br/><br/>
   <h1><u className='vihar'>What's my goal?</u></h1><br/>
   <p className='vih'>My goal is to achieve a good job where I can utilize and enhanced my skills as well as knowledge also I would like to work independently after gaining corporate area experience.</p>
  <br/><br/><h1><u className='vihar'>What's my background?</u></h1>
   <p className='vih'>I learned C and C++ before my college journey started and I started solving some problems based on these two technology. In my 2nd year of Engineering,I learned the basics of Web Development and made some basic projects on JavaScript. After gaining enough confidence and knowledge I made some intermediate level projects based on MERN technology. Apart from Coding and Web Development, I have keen interest in Machine Learning and Deep Learning. I have also made some projects that you can refer in 'Projects' Section. Since I graduated I've revisited my old knowledge and tried to bring it up to date.</p>
   <br/>
   </section>
    </>
  )
}

export default About

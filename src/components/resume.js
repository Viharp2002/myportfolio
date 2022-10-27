import React from 'react';
import "../css/resume.css";
import imgv from "../images/vihar.jpg"

const Resume = () => {
  return (
    <>
     <h1 className='sauvih' style={{color: "skyblue"}}>My Recent Works</h1>
    <h4 className='saum'>Here I have described myself in detailed</h4>
    <main class="container" style={{height: "100vh"}}>
  <div class="card">
    <img src={imgv} alt="gh" class="card__image" />
    <div class="card__text">
      <h2>Vihar Prajapati</h2>
      <p>I enjoy drinking a cup of coffee every day!</p>
      <p> Go through my resume and contact me.</p>
    </div>
    <h4>Projects Overview</h4>
    <ul class="card__info">
      <li>
        <span class="card__info__stats">17</span>
        <span>completed</span>
      </li>
      <li>
        <span class="card__info__stats">3</span>
        <span>Working</span>
      </li>
    </ul>
    <div class="card__action">
      <button onClick={()=>window.location.href = "resume_vihar.pdf"} class="card__action__button card__action--follow">Resume</button>
      <button onClick={()=>window.location.href = "https://www.instagram.com/viharp2002/"} class="card__action__button card__action--message">Follow</button>
    </div>
  </div>
</main>
    </>
  )
}

export default Resume

import React from 'react'
import "../css/projects.css"
import spotify from "../images/spotify.png";
import house from "../images/house.png";
import dino from "../images/dino.jpg";
import gujrat from "../images/gujrat.png";
import diabetes from "../images/diabetes.jpg";
import bootstrap from "../images/bootstrap.png";
import wether from "../images/wether.jpg";

const Projects = () => {
  return (
    <>
     <h1 className='sauvih' style={{color: "skyblue"}}>My Recent Works</h1>
    <h4 className='saum'>Here I have shown my major projects</h4>
<section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
  <div className="container">
    <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
 
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
          <img src={house} alt='vihar'></img>
          </div>
          <h3 className="iamv">Madhur-ECommerce</h3>
          <p className="iamvi">
             I have created a fully MERN web portal in which a user can find a house and can buy that house `on rent`.A user can also sell and buy his/her house `On specific rent`. Just like as OLX application.
          </p>
          <button className="custom-btn btn-12"><span>Click!</span><span>Show Project</span></button>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <img src={gujrat} alt="gujarat"></img>
          </div>
          <h3 className="iamv">Dijital Gujarat</h3>
          <p className="iamvi">
             Yes! We have made a solution of `Dijital Gujarat` website as a part of `Aazadi Ka Amrut Mahotsav` hackathon and in which we have solved all the issues related to `Dijital Gujarat` website.
          </p>
        <button className="custom-btn btn-12"><span>Click!</span><span>Show Project</span></button>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <img src={diabetes} alt="diabetes"></img>
          </div>
          <h3 className="iamv">Diabetes Predictor</h3>
          <p className="iamvi">
             This is a Machine Learning based model and it gives 78% accurate pridiction of a person wether he/she is diabetes affected or not. It gives based on the user's sample data.
          </p>
        <button className="custom-btn btn-12"><span>Click!</span><span>Show Project</span></button>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <img src={wether} alt="wether"></img>
          </div>
          <h3 className="iamv">Weather Info</h3>
          <p className="iamvi">
             It is the Weather app gives weather information of every city/village. I have used HTML,CSS for designing and Node JS for API request handling
          </p>
        <button className="custom-btn btn-12"><span>Click!</span><span>Show Project</span></button>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <img src={spotify} alt='vihar'></img>
          </div>
          <h3 className="iamv">Spotify Clone</h3>
          <p className="iamvi">
             I have tried to make a Spotify clone using pure HTML,CSS and JavaScript in which there are few songs yet. I have also used bootstrap and I am continuously updating this clone.
          </p>
        <button onClick={()=>{window.location.href= 'https://viharp2002.github.io/musicrepo.github.io/';}} className="custom-btn btn-12"><span>Click!</span><span>Show Project</span></button>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
            <img src={bootstrap} alt="bootstrap"></img>
          </div>
          <h3 className="iamv">All Languages in one Box</h3>
          <p className="iamvi">
             This website is built on pure Bootstrap in which user can find any language's offical site because there are many websites belong to that specific website.
          </p>
        <button className="custom-btn btn-12"><span>Click!</span><span>Show Project</span></button>
        </div>
      </div>
      <div className="col">
        <div className="service-card">
          <div className="icon-wrapper">
          <img src={dino} alt='vihar'></img>
          </div>
          <h3 className="iamv">Dinosaur PC-Game</h3>
          <p className="iamvi">
             I have made a PC game using pure HTML,CSS and JavaScript in which user can experiance the attacker-survivor based game.
          </p>
        <button onClick={()=>{window.location.href= 'https://dinosaurpcgame.netlify.app/';}} className="custom-btn btn-12"><span>Click!</span><span>Show Project</span></button>
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  )
}

export default Projects

import React from 'react'
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import { Route, Routes} from "react-router-dom";
import Footer from './components/footer';
import Home from "./components/home";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experiance from './components/experiance';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experiance' element={<Experiance/>} />
        
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App

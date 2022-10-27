import React from 'react';
import "../css/contact.css";

const Contact = () => {
  return (
    <>
     <section id="contact">
  <div class="contact-box">
    <div class="contact-links">
      <h2 style={{fontWeight: "bold"}}>CONTACT</h2>
      <div class="links">
        <div class="link">
          <a href='https://www.linkedin.com/in/vihar-prajapati-a52844226' target="_blank"><img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
        </div>
        <div class="link">
          <a href='https://github.com/Viharp2002' target="_blank"><img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
        </div>
        <div class="link">
          <a href = "mailto: viharp2002@gmail.com" target="_blank"><img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
        </div>
      </div>
    </div>
    <div class="contact-form-wrapper">
      <form action="https://formspree.io/f/xwkznbjy"
  method="POST">
        <div class="form-item">
          <input type="text" name="username" required />
          <label>Name:</label>
        </div>
        <div class="form-item">
          <input type="text" name="email" required />
          <label>Email:</label>
        </div>
        <div class="form-item">
          <textarea class="" name="message" required></textarea>
          <label>Message:</label>
        </div>
        <button class="submit-btn">Send</button>  
      </form>
    </div>
  </div>
</section> 
    </>
  )
}

export default Contact

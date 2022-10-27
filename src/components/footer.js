import React from 'react'
import "../css/footer.css";

const Footer = () => {
  return (
    <>
    <footer>
        <ul class="icons">
            <li><a hrhref="https://wa.me/9327307797?text=urlencodedtext" target={"_blank"}><ion-icon name="logo-whatsapp"></ion-icon></a></li>
            <li><a href="https://www.linkedin.com/in/vihar-prajapati-a52844226"><ion-icon name="logo-linkedin"></ion-icon></a></li>
            <li><a href="https://www.facebook.com/vihar.prajapati.5/"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="https://www.instagram.com/viharp2002/"><ion-icon name="logo-instagram"></ion-icon></a></li>
        </ul>
        <ul class="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/contact">Contact</a></li>
        </ul>
            <div class="footer-copyright">
                <p>Copyright @ 2022 All Rights Reserved.</p>
            </div>
    </footer> 
    </>
  )
}

export default Footer
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Md.Mehedi Hasan Masum</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="www.linkedin.com/in/mehedi325" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Mehedi325" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/mehedi.masum1997" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://www.instagram.com/masum_2468/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Google 2023. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
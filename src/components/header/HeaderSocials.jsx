import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/mehedi325/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Mehedi325" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.facebook.com/mehedi.masum1997" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://www.instagram.com/masum_2468/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials
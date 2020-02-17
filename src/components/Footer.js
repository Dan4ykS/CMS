import React from 'react';
import '../styles/scss/Footer.scss';
import { Link } from 'react-scroll';
import { feedbackMouseEnter, feedbackMouseLeave, showScrollTopArrow } from '../utils/helpFuncs';

const Footer = () => {
  showScrollTopArrow();
  return (
    <footer>
      <Link className='upArrow' to='header' smooth={true}>
        <i className='fas fa-chevron-up'></i>
      </Link>
      <div onMouseLeave={() => feedbackMouseLeave()} className='feedback'>
        <div onMouseEnter={() => feedbackMouseEnter()} className='mainIcon'>
          <i className='fas fa-phone'></i>
        </div>
        <div className='helperIcon helperIcon1'>
          <i className='fab fa-instagram'></i>
        </div>
        <div className='helperIcon helperIcon2'>
          <i className='fab fa-vk'></i>
        </div>
        <div className='helperIcon helperIcon3'>
          <i className='fab fa-facebook'></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

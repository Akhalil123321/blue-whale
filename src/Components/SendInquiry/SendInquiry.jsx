import { React } from 'react';
import { FaUserAlt, FaCommentDots, FaPhone, FaEnvelope } from "react-icons/fa";
import { useFiles } from '../../Components/Context/FilesContext';
import { motion } from "framer-motion";
// import inquiryImg from '../../Images/BLUE WHALE.png';
import { IoClose } from "react-icons/io5";
import './SendInquiry.css';

const SendInquiry = () => {
  const { inquiryActive, toggleInquiry } = useFiles();
  const closeMenu = () => toggleInquiry(false);
  const MenuState = inquiryActive ? 'send-inquiry-cont-open' : 'send-inquiry-cont-close';

  return (
    <div className={MenuState}>
      <motion.div 
        className="send-inquiry-cont-ch"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1, delay: 0.8 }}
      >
        <div className='inquiry-form-left'>
          {/* <img src={inquiryImg} alt='Blue Whale' className='inquiry-form-left-img'/> */}
        </div>
        <div className='inquiry-form-right'>
          <div className="inquiry-form-right-title">GET IN TOUCH</div>
          <form className='inquiry-form-right-form'>
            <div className="inquiry-form-right-field">
              <FaUserAlt className='inquiry-form-right-icon'/>
              <input className='inquiry-form-right-input' type="text" placeholder="Name"/>
            </div>
            <div className="inquiry-form-right-field">
              <FaEnvelope className='inquiry-form-right-icon'/>
              <input className='inquiry-form-right-input' type="email" placeholder="Email"/>
            </div>
            <div className="inquiry-form-right-field">
              <FaPhone className='inquiry-form-right-icon'/>
              <input className='inquiry-form-right-input' type="text" placeholder="Mobile Number"/>
            </div>
            <div className="inquiry-form-right-field">
              <FaCommentDots className='inquiry-form-right-icon'/>
              <textarea className='inquiry-form-right-input inquiry-form-right-textarea' placeholder="Enter Your Message (Max: 300 words)"/>
            </div>
            <button className='inquiry-form-right-button' onClick={closeMenu}>SUBMIT</button>
          </form>
        </div>
        <IoClose className='menu-close-icon' onClick={closeMenu}/>
      </motion.div>
      <motion.div
        className='blur-back' 
        initial={{ opacity: -2 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: 'spring', duration: 1, delay: 0 }}
      ></motion.div>
    </div>
  );
};

export default SendInquiry;

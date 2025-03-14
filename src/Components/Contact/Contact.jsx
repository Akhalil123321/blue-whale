/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useFiles } from '../../Components/Context/FilesContext';
import './Contact.css'

const Contact = () => {
  const { toggleInquiry } = useFiles();
    const closeMenu = () => toggleInquiry(false);
  return (
    <div className='contact-container'>
      <div className='contact-header'>
        <h2 className='contact-title'>GET IN TOUCH</h2>
      </div>
      <div className='contact-sections'>

        {/* Contact Information Section */}
        <div className='contact-info'>
          <ContactItem title='PHONE' link='tel:+97124421016' text='+971 2 442 1016' />
          <ContactItem title='FAX' text='+971 2 442 1016' />
          <ContactItem title='PO BOX' text='29994' />
        </div>

        {/* Contact Methods Section */}
        <div className='contact-methods'>
          <ContactItem 
            title='E-MAIL' 
            link='mailto:info@bluewhaledevelopment.com?subject=RFQ%20|%20Project%20Name&body=Dear%20BlueWhale,%0D%0A%0D%0AI%20would%20like%20to%20send%20an%20inquiry%20for:%0D%0A' 
            text='info@bluewhaledevelopment.com' 
          />
          
          {/* Social Media Section */}
          <div className='contact-item'>
            <span className='contact-label'>SOCIAL</span>
            <ul className='social-icons'>
              <SocialIcon link='#' icon={<FaFacebookF />} />
              <SocialIcon link='#' icon={<BiLogoLinkedin />} />
              <SocialIcon link='#' icon={<FaInstagram />} />
              <SocialIcon link='https://api.whatsapp.com/send?phone=971507890780' icon={<FaWhatsapp />} />
              <SocialIcon link='#' icon={<AiOutlineYoutube />} />
            </ul>
          </div>

          {/* Inquiry Button */}
          <div className='contact-item'>
            <button className='request-button' onClick={closeMenu}>CONTACT US</button>
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className='contact-location'>
        <span className='contact-label'>Location</span>
        <a className='contact-link' href='https://maps.app.goo.gl/AwMBKKyiNEbFfs2A8?g_st=iw' target='_blank' rel='noreferrer'>Shining Towers, Khalidiyah, Floor 25, Office 2502</a>
      </div>
    </div>
  );
};

const ContactItem = ({ title, link, text }) => (
  <div className='contact-item'>
    <span className='contact-label'>{title}</span>
    {link ? (
      <a className='contact-link' href={link} target='_blank' rel='noreferrer'>{text}</a>
    ) : (
      <span className='contact-text'>{text}</span>
    )}
  </div>
);

const SocialIcon = ({ link, icon }) => (
  <li>
    <a href={link} target='_blank' rel='noreferrer' className='social-icon'>
      {icon}
    </a>
  </li>
);

export default Contact

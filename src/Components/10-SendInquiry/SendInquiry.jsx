import React from 'react';
import { FaUserAlt, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { useFiles } from '../Context/FilesContext';
import './SendInquiry.css';

const ContactModal = () => {
  const { inquiryActive, toggleInquiry } = useFiles();
  const close = () => toggleInquiry(false);

  // دالة إرسال البيانات على الإيميل
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    // إنشاء رابط mailto
    const mailtoLink = `mailto:akhalil98@outlook.com?subject=New Inquiry from ${encodeURIComponent(name)}&body=
      Name: ${encodeURIComponent(name)}
      Email: ${encodeURIComponent(email)}
      Phone: ${encodeURIComponent(phone)}
      Message: ${encodeURIComponent(message)}
      `;

    // فتح البريد الافتراضي
    window.location.href = mailtoLink;

    close();
    };

  return (
    <AnimatePresence>
      {inquiryActive && (
        <motion.div
          className="cw-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close} // الضغط على الخلفية يغلق المودال
        >
          <motion.div
            className="cw-modal-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()} // منع التسرب داخل المودال
          >
            <button className="cw-modal-close" onClick={close}>
              <IoClose size={24} />
            </button>
            <h2 className="cw-modal-title">Get In Touch</h2>
            <form className="cw-modal-form" onSubmit={handleSubmit}>
              <div className="cw-form-group">
                <FaUserAlt className="cw-icon" />
                <input type="text" name="name" className="cw-input" placeholder="Your Name" required />
              </div>
              <div className="cw-form-group">
                <FaEnvelope className="cw-icon" />
                <input type="email" name="email" className="cw-input" placeholder="Your Email" required />
              </div>
              <div className="cw-form-group">
                <FaPhone className="cw-icon" />
                <input type="tel" name="phone" className="cw-input" placeholder="Phone Number" />
              </div>
              <div className="cw-form-group">
                <FaCommentDots className="cw-icon" />
                <textarea
                  name="message"
                  className="cw-textarea"
                  placeholder="Your Message"
                  maxLength={800}
                  required
                />
              </div>
              <button type="submit" className="cw-modern-button">
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

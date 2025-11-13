import React from 'react';
import './Tail.css';

const Tail = () => {
  return (
    <footer className="footer">
      <p className="copyright">
        © {new Date().getFullYear()} Blue Whale Development. All rights reserved.
      </p>
    </footer>
  );
};

export default Tail;

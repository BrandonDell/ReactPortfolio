import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <a
          href="https://github.com/BrandonDell"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
        <div>
          <a
            href="https://www.linkedin.com/in/brandondellcioppia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </a>
        </div>
        <p>Copyright {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;

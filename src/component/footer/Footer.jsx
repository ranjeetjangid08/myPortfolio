import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h2 className="footer_title">RANJEET</h2>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer_link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer_link">
              Testimonials
            </a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://snapchat.com/t/sikBmTBL"
            className="footer_social-link"
            target="-blank"
          >
            <i className="bx bxl-snapchat"></i>
          </a>
          <a
            href="https://www.instagram.com/ranjeetjangid08?igsh=M21kY2NieHUyb2Q%3D&utm_source=qr"
            className="footer_social-link"
            target="-blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ranjeet-jangid-514886262/"
            className="footer_social-link"
            target="-blank"
          >
            <i className="bx bxl-linkedin"> </i>
          </a>
        </div>
        <span className="footer_copy">
          &#169; Ranjeetsuthar. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

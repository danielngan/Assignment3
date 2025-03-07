import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaRss } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <img src="/FooterImages/Apple_App_Store.svg" alt="App Store" className="footer-app" />
                <img src="/FooterImages/googleplay-badge.png" alt="Google Play" className="footer-app" />
                <img src="/FooterImages/microsoft-badge.png" alt="Microsoft Store" className="footer-app" />
            </div>

            <div className="footer-menu">
                <div className="footer-column">
                    <h4>Watch</h4>
                    <ul>
                        <li><a href="#">Spotlight</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Free</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>My Account</h4>
                    <ul>
                        <li><a href="#">My Duvu</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Manage Devices</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Features</h4>
                    <ul>
                        <li><a href="#">Lists</a></li>
                        <li><a href="#">Family</a></li>
                        <li><a href="#">Disc to Digital</a></li>
                        <li><a href="#">InstaWatch</a></li>
                        <li><a href="#">Movies Anywhere</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Devices</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Forums</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Jobs</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-social">
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaYoutube /></a>
                <a href="#"><FaRss /></a>
            </div>
        </footer>
    );
};

export default Footer;

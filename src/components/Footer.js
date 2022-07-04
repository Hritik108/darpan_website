import React from "react";
import "../assets/styles/footer.css";
import Logo from "../assets/images/darpan_logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';



class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <div className="footer-details">
                <div className="footer-items">
                    <img id="logo" src={Logo} alt="logo"/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.</p>
                </div>
                <div className="footer-items">
                    <h3 id="links-header">Useful Links</h3>
                    <ul className="footer-links">
                       <li> <a href="#">Home</a> </li> 
                       <li> <a href="#">About Us</a> </li> 
                        <li> <a href="#">Events</a> </li>
                        <li> <a href="#"> Contact Us</a> </li>
                        </ul>
                </div>
                <div className="footer-items">
                    <h3 id="links-header">ABC</h3>
                    <ul className="footer-links">
                       <li> <a href="#">Home</a> </li> 
                       <li> <a href="#">About Us</a> </li> 
                        <li> <a href="#">Events</a> </li>
                        <li> <a href="#"> Contact Us</a> </li>
                        </ul>
                </div>
                <div className="footer-items">
                        <h3 id="links-header">CONTACT</h3>
                        <ul className="footer-links">
                        <li><EmailIcon className="contact-icon" /> darpanworli@gmail.com </li> 
                        <li> <PhoneIcon className="contact-icon" /> +91 8454077945 </li>
                        <li> <LocationOnIcon className="contact-icon" /><Button variant="contained" style={{ backgroundColor: "#06283D" }}>Location</Button></li>
                        </ul>
                        <p>Please Follow us on our social media platform</p>
                        <div className="social-media">
                            <a href=""><InstagramIcon className="icons" sx={{fontSize:25}} color="primary" /></a>
                            <a href=""><YouTubeIcon className="icons" sx={{fontSize:25}} color = "primary" /></a>
                            <a href=""><FacebookIcon className="icons" sx={{fontSize:25}} color = "primary" /></a>
				        </div>
                </div>
            </div>
            <div className="footer-bottom">
			Copyright &copy; Darpan Worli 2022. All rights reserved.
		</div>
        </div>
        );
    }
}

export default Footer;
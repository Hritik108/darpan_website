import React from "react";
import "../assets/styles/footer.css";
import Logo from "../assets/images/darpan_logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <div className="footer-details">
                <div className="footer-items">
                    <img id="logo" src={Logo} alt="logo"/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.</p>
                    
                    <div className="social-media">
                    {/* <i style={{fontSize:"24px"}} className="fa">&#xf16a;</i> */}
                    {/* <i class="fa-brands fa-instagram"></i>  */}
                    
                    <InstagramIcon className="icons" sx={{paddingRight:2,fontSize:35}} color="primary" />
                    
                    <YouTubeIcon className="icons" sx={{paddingRight:2,fontSize:35}} color = "primary" />
                   
                    
                    {/* <i style={{fontSize:"24px"}} className="fa">&#xf09a;</i>
                   <i style={{fontSize:"24px"}} className="fa">&#xf0e1;</i> */}
                    </div>
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
                        <h3 id="links-header">CONTACT</h3>
                        <ul className="contact-details">
                        <EmailIcon id="email-icon" /><li>darpanworli@gmail.com</li>
                        </ul>
                    </div>
                
            </div>
        </div>
            /* // <div className="footer-home">
            // <div className="contact-us" style={{backgroundColor:this.state.color}}>
            // <div  id="footer-company">
            //     <img src="" alt="logo"/>
            // <div>
            //     Lorem Ipsum is simply dummy text of the printing and typesetting
            // industry. Lorem Ipsum has been the industry's standard dummy text
            // ever since the 1500s, when an unknown printer took a galley of type
            // and scrambled it to make a type specimen book.
            //     </div>
            // </div>
            //     <div id="quick-links">
            //         <h3>Quick Links</h3>
            //         <div className="sub">Home</div>
            //         <div className="sub">About US</div>
            //         <div className="sub">Events</div>
            //         <div className="sub">Bookings</div>                    
            //     </div>
            //     <div id="contact">
            //         <h3>Contact</h3>
            //         <div className="sub">Address</div>
            //         <div className="sub">Email id</div>
            //         <div className="sub">Contact no:</div>
            //         <div className="sub">Lorem ipsum</div>
            //     </div>
            //     <div>
            //     <div className="footer">
            //     <i style={{fontSize:"24px"}} className="fa">&#xf16a;</i>
            //     <i style={{fontSize:"24px"}} className="fa">&#xf09a;</i>
            //     <i style={{fontSize:"24px"}} className="fa">&#xf0e1;</i>
            //     </div>
            //     </div>
//         </div>
                // </div> */
        );
    }
}

export default Footer;
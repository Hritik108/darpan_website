import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <div className="footer-left">
                    <img src="" alt="logo"/>
                    <div className="social-media">
                    {/* <i style={{fontSize:"24px"}} className="fa">&#xf16a;</i> */}
                    <i class="fa-brands fa-instagram"></i>
                    <i style={{fontSize:"24px"}} className="fa">&#xf09a;</i>
                   <i style={{fontSize:"24px"}} className="fa">&#xf0e1;</i>
                    </div>
                </div>
                
            </div>
            // <div className="footer-home">
            // <div className="contact-us" style={{backgroundColor:this.state.color}}>
            // <div  id="footer-company">
            //     {/* <img src="" alt="logo"/> */}
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
            //         {/* <div className="sub">Lorem ipsum</div> */}
            //     </div>
            //     <div>
            //     <div className="footer">
            //     <i style={{fontSize:"24px"}} className="fa">&#xf16a;</i>
            //     <i style={{fontSize:"24px"}} className="fa">&#xf09a;</i>
            //     <i style={{fontSize:"24px"}} className="fa">&#xf0e1;</i>
            //     </div>
            //     </div>
//         </div>
// </div>
        );
    }
}

export default Footer;
import React from "react";
import "../assets/styles/navbar.css"
import Logo from "../assets/images/Logo.jpg"
import jQuery from "jquery";


class Navbar extends React.Component{


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }

      handleScroll(event){
        let scrollTop = window.pageYOffset;
        console.log(scrollTop)

        if (scrollTop > 10){
            jQuery(".navbar-main").css({height:"60px",padding:'0% 5%',width:"100%"});
        }

        else{
            jQuery(".navbar-main").css({height:"80px",padding:'1% 10% 0% 10%',width:"80vw"});
        }
    }
    render(){



        return(
           <div className="navbar-main">
               <div className="navbar-logo">
                    <h3>DARPAN WORLI</h3>
               </div>
               <div className="navbar-right">
                    <a href="/home">Home</a>
                    <a href="/home">About Us</a>
                    <a href="/home">Events</a>
                    <a href="/home">Career Counseling</a>
                    <a href="/home">Contact Us</a>
               </div>
           </div>
        )
    }
}

export default Navbar;
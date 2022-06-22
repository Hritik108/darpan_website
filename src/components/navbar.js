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
            jQuery(".Navbar-main").css({height:"60px"});
        }

        else{
            jQuery(".Navbar-main").css({height:"80px"});
        }
    }
    render(){


        return(
           <div className="navbar-main">
               <div className="main-text">
                    DARPAN WORLI
               </div>
               <div className="navbar-logo">
               </div>
               <div className="navbar-items">
                    <a href="#">Home</a>
                    <a href="#">Events</a>
                    <a href="#">Career Counsiling</a>
                    <a href="#">lorem epsum</a>
                    <a href="#">lorem epsum</a>
               </div>
           </div>
        )
    }
}

export default Navbar;
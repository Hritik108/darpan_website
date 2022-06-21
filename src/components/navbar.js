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
            jQuery(".Navbar-main").css({"position":"fixed",height:"60px"});
        }

        else{
            jQuery(".Navbar-main").css({"position":"static",height:"80px"});
        }
    }
    render(){

        return(
            <div className="Navbar-main">
                <div className="Navbar-left">
                    <h3>I AM LOGO</h3>
                </div>
                <div className="Navbar-right">
                    <a href="#">lorem epsum</a>
                    <a href="#">lorem epsum</a>
                    <a href="#">lorem epsum</a>
                    <a href="#">lorem epsum</a>
                </div>
            </div>
        )
    }
}

export default Navbar;
import React from "react";
import "../assets/styles/navbar.css"
import Logo from "../assets/images/Logo.jpg"

class Navbar extends React.Component{

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
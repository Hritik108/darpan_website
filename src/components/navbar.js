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
                    <a href="/Home">Home</a>
                    <a href="About">About Us</a>
                    <div class="dropdown">
                        <button class="dropbtn"> Events
                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                        <a href="#">BHAGVAD GITA CLASSES</a>
                        <a href="#">SATURDAY MORNING PROGRAM</a>
                    </div>
                    </div> 
                    <a href="/Career">Career Counselling</a>
                    <a href="/Contact">Contact Us</a>
               </div>
           </div>
        )
    }
}

export default Navbar;
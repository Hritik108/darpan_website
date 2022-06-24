import React from "react";
import "../assets/styles/navbar.css"
import Logo from "../assets/images/Logo.jpg"
import jQuery from "jquery";


class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active :"home" ,
        }
        this.handleScroll = this.handleScroll.bind(this);
       
      }
  

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        if(window.location.pathname=="/Home"){
            this.setState({active: "home"});}
         else if(window.location.pathname=="/"){
            this.setState({active: "home"});}
         else if (window.location.pathname=="/About"){
            this.setState({active: "about"});}
   
         else if (window.location.pathname=="/Events"){
         this.setState({active: "events"});}
         
         else if (window.location.pathname=="/Career"){
         this.setState({active: "career"});}
   
         else if (window.location.pathname=="/Contact"){
         this.setState({active: "contact"});}

         console.log(this.state.active)
      }

      handleScroll(event){
        let scrollTop = window.pageYOffset;
        if (scrollTop > 10){
            jQuery(".navbar-main").css({height:"60px",padding:'0% 5%',width:"95%",border:"solid  #1363DF",borderWidth:"0px 0px 4px 0px"});
        }
        else{
            jQuery(".navbar-main").css({height:"80px",padding:'1% 10% 0% 10%',width:"80vw",border:"0px"});
        }
    }
    render(){
        return(
           <div className="navbar-main">
               <div className="navbar-logo">
                    <h3>DARPAN WORLI</h3>
               </div>
               <div className="navbar-right">
                    <a href="/Home">
                        Home
                        <div className={`${this.state.active === "home" ? 'circle': ''}`}></div>
                        </a>
                    <a href="/About">
                        About Us
                        <div className={`${this.state.active === "about" ? 'circle': ''}`}></div>
                    </a>
                    <a href="/Events">
                        Events
                        <div className={`${this.state.active === "events" ? 'circle': ''}`}></div>
                        </a>
                    <a href="/Career">
                        Career Counseling
                        <div className={`${this.state.active === "career" ? 'circle': ''}`}></div>
                    </a>
                    <a href="/Contact">
                        Contact Us
                        <div className={`${this.state.active === "contact" ? 'circle': ''}`}></div>
                    </a>
               </div>
           </div>
        )
    }
}

export default Navbar;
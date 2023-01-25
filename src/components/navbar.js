import React from "react";
import "../assets/styles/navbar.css";
import jQuery from "jquery";
import Logo from "../assets/images/navbar_logo.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "home",
      isResponsive: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    if (window.location.pathname === "/home") {
      this.setState({ active: "home" });
    } else if (window.location.pathname === "/") {
      this.setState({ active: "home" });
    } else if (window.location.pathname === "/about") {
      this.setState({ active: "about" });
    } else if (window.location.pathname === "/events") {
      this.setState({ active: "events" });
    } else if (window.location.pathname === "/career") {
      this.setState({ active: "career" });
    } else if (window.location.pathname === "/contact") {
      this.setState({ active: "contact" });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize(e) {
    let isResponsive = true;

    if (window.innerWidth > 880) {
      isResponsive = true;
    } else {
      isResponsive = false;
    }

    this.setState({ isResponsive });
  }

  handleScroll(event) {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 10) {
      jQuery(".navbar-main").css({
        height: "60px",
        padding: "0% 5%",
        width: "95%",
        border: "solid  #1363DF",
        borderWidth: "0px 0px 4px 0px",
        backgroundColor: "white",
      });
    } else {
      jQuery(".navbar-main").css({
        height: "80px",
        padding: "1% 10% 0% 10%",
        width: "80vw",
        border: "0px",
        backgroundColor: "transparent",
      });
    }
  }
  render() {
    const { isResponsive } = this.state;

    if (isResponsive) {
      return (
        <div className="navbar">
          <div className="navbar-main">
            <div className="navbar-logo">
              <a href="/">
                <img alt="Darpan Worli Logo" src={Logo} />
              </a>
            </div>
            <div className="navbar-right">
              <a href="/Home">
                Home
                <div
                  className={`${this.state.active === "home" ? "circle" : ""}`}
                ></div>
              </a>
              <a href="/Career">
                Career Counseling
                <div
                  className={`${
                    this.state.active === "career" ? "circle" : ""
                  }`}
                ></div>
              </a>
              <a href="/About">
                About Us
                <div
                  className={`${this.state.active === "about" ? "circle" : ""}`}
                ></div>
              </a>
              <a href="/Contact">
                Contact Us
                <div
                  className={`${
                    this.state.active === "contact" ? "circle" : ""
                  }`}
                ></div>
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-menuB">
          <div className="menu-sidebar">
            <button
              className="closebtn"
              onClick={() => closeNav()}
              style={{ background: "none", border: "none" }}
            >
              ×
            </button>
            <a className="path" href="/home">
              Home
            </a>
            <a className="path" href="/career">
              Career Counseling
            </a>
            <a className="path" href="/about">
              About Us
            </a>
            {/* <a className="path" href="/events">
              Events
            </a> */}

            <a className="path" href="/contact">
              Contact Us
            </a>
          </div>
          <div className="hamburger" onClick={() => openNav()}>
            ☰
          </div>
          <img id="navbar-logo" src={Logo} alt="Darpan_Logo" />
        </div>
      );
    }

    function openNav() {
      jQuery(".menu-sidebar").css({
        width: "300px",
        borderWidth: "0px 2px 0px 0px",
      });
      jQuery("body").css({ marginLeft: "30px", Transition: ".5s" });
    }

    function closeNav() {
      jQuery(".menu-sidebar").css({
        width: "0%",
        borderWidth: "0px 0px 0px 0px",
      });
      jQuery("body").css({ marginLeft: "0%", Transition: ".5s" });
    }
  }
}

export default Navbar;

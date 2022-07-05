import React from "react";
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "../../assets/styles/Home/hometestimonial.css"
import person_logo from "../../assets/images/person_logo.jpeg"

class HomeTestimonial extends React.Component{


    render(){
        var settings = {
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          };
        return (
            <Slider {...settings}>
            <div style={{height:window.innerHeight -10}}>
              <div className="carousel-item">
                <div>
                  <div className="item-left">
                        <img alt="person photo" src={person_logo} />
                  </div>
                  <div className="item-right">
                  <header className="item-header">
                    <h1>Name</h1>
                    <h4>Sub-Heading</h4>
                  </header>
                  </div>
                  </div>
              </div>
            </div>
            <div>
              <div className="carousel-item">
              <div>
                  <div className="item-left">
                        <img alt="person photo"  src={person_logo} />
                  </div>
                  <div className="item-right">
                  <header className="item-header">
                    <h1>Name</h1>
                  </header>
                  </div>
                  </div>
              </div>
            </div>
            <div>
              <div className="carousel-item">
              <div>
                  <div className="item-left">
                        <img alt="person photo"  src={person_logo} />
                  </div>
                  <div className="item-right">
                  <header className="item-header">
                    <h1>Name</h1>
                  </header>
                  </div>
                  </div>
              </div>
            </div>
            <div>
              <div className="carousel-item">
              <div>
                  <div className="item-left">
                        <img alt="person photo"  src={person_logo} />
                  </div>
                  <div className="item-right">
                  <header className="item-header">
                    <h1>Name</h1>
                  </header>
                  </div>
                  </div>
              </div>
            </div>
            <div>
              <div className="carousel-item">
              <div>
                  <div className="item-left">
                        <img alt="person photo"  src={person_logo} />
                  </div>
                  <div className="item-right">
                  <header className="item-header">
                    <h1>Name</h1>
                  </header>
                  </div>
                  </div>
              </div>
            </div>
            <div>
              <div className="carousel-item">
              <div>
                  <div className="item-left">
                        <img src={person_logo} />
                  </div>
                  <div className="item-right">
                  <header className="item-header">
                    <h1>Name</h1>
                  </header>
                  </div>
                  </div>
              </div>
            </div>
          </Slider>
        );
    }
}

export default HomeTestimonial
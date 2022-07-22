import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//CSS
import "../../assets/styles/Home/hometestimonial.css";

//IMAGES
import person_logo from "../../assets/images/person.png";
import right_arrow from "../../assets/images/right_arrow.png";
import left_arrow from "../../assets/images/left_arrow.png";
import smart_man from "../../assets/images/smart_man.png";
import smart_man2 from "../../assets/images/smart_man2.png";

class HomeTestimonial extends React.Component {
  render() {
    function next_arrow() {
      return <img src={right_arrow} />;
    }

    function prev_arrow() {
      return <img src={left_arrow} />;
    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
      adaptiveHeight: true,
      autoplaySpeed: 5000,
      className: "slides",
      // arrows: true,
      nextArrow: next_arrow(),
      prevArrow: prev_arrow(),
    };
    return (
      <Slider {...settings}>
        <div className="testimonial">
          <div className="carousel-item">
            <div className="item-left">
              <img alt="person logo" src={smart_man} />
            </div>
            <div className="item-right">
              <header className="item-header">
                <h1>Naresh Rana</h1>
                <h4>Software Engineer</h4>
              </header>
              <p>
                &#8220; It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using.
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="carousel-item">
            <div className="item-left">
              <img alt="person logo" src={smart_man2} />
            </div>
            <div className="item-right">
              <header className="item-header">
                <h1>Manish shukhla</h1>
                <h4>Software Engineer</h4>
              </header>
              <p>
                &#8220; It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="testimonial">
          <div className="carousel-item">
            <div className="item-left">
              <img alt="person logo" src={smart_man} />
            </div>
            <div className="item-right">
              <header className="item-header">
                <h1>Naresh Rana</h1>
                <h4>Software Engineer</h4>
              </header>
              <p>
                &#8220; It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using.
              </p>
            </div>
          </div>
        </div> */}
      </Slider>
    );
  }
}

export default HomeTestimonial;

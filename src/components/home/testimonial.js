import React from "react";
import Slider from "react-slick";
import "../../assets/styles/Home/hometestimonial.css";
// import person_logo from "../../assets/images/person_logo.jpeg";
import person_logo from "../../assets/images/person.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomeTestimonial extends React.Component {
  render() {
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      centerMode: true,
      adaptiveHeight: true,
      arrows: true,
      autoplaySpeed: 5000,
      className: "slides",
      arrows: true,
    };
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
        <div className="testimonial">
          <div className="carousel-item">
            <div className="item-left">
              <img alt="person logo" src={person_logo} />
            </div>
            <div className="item-right">
              <header className="item-header">
                <h1>Vikhil Bajanna Sallagargi</h1>
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
              <img alt="person logo" src={person_logo} />
            </div>
            <div className="item-right">
              <header className="item-header">
                <h1>Shubham Ramesh Gole</h1>
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
              <img alt="person logo" src={person_logo} />
            </div>
            <div className="item-right">
              <header className="item-header">
                <h1>Hritik Ramdhan Chauhan</h1>
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
      </Slider>
    );
  }
}

export default HomeTestimonial;

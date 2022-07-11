import React from "react";
import Slider from "react-slick";
import "../../assets/styles/Home/hometestimonial.css";
// import person_logo from "../../assets/images/person_logo.jpeg";
import person_logo from "../../assets/images/person.png";

class HomeTestimonial extends React.Component {
  render() {
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
        <div>
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
      </Slider>
    );
  }
}

export default HomeTestimonial;

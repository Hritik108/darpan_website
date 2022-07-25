import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-material-ui-carousel";

//CSS
import "../../assets/styles/Home/hometestimonial.css";

//IMAGES
import person_logo from "../../assets/images/person.png";
import right_arrow from "../../assets/images/right_arrow.png";
import left_arrow from "../../assets/images/left_arrow.png";
import smart_man from "../../assets/images/smart_man.png";
import smart_man2 from "../../assets/images/smart_man2.png";

function HomeTestimonial(props) {
  const items = [
    {
      name: "Mr. Deepak Mishra",
      description: "Sunday farms, Uttar Pradesh",
      full_description:
        "our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.",
      imageSrc: smart_man,
    },
    {
      name: "Mr. Deepak Mishra",
      description: "Sunday farms, Uttar Pradesh",
      full_description:
        "our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.",
      imageSrc: smart_man,
    },
    {
      name: "Mr. Deepak Mishra",
      description: "Sunday farms, Uttar Pradesh",
      full_description:
        "our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.",
      imageSrc: smart_man,
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysVisible="true"
      activeIndicatorIconButtonProps={{
        style: {
          color: "Black",
        },
      }}
      indicatorIconButtonProps={{
        style: {
          fontSize: "rem",
          width: "10px",
          padding: "15px",
        },
      }}
      navButtonsProps={{
        // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
          width: "8em",
          fontSize: "2rem",
          backgroundColor: "transparent",
        },
      }}
      animation="slide"
    >
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Carousel>
  );
}
const Item = ({ name, description, full_description, imageSrc }) => {
  return (
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
  );
};
export default HomeTestimonial;

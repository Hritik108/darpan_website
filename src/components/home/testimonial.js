// import React, { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import Carousel from "react-material-ui-carousel";

//CSS
import "../../assets/styles/Home/hometestimonial.css";

//IMAGES
// import person_logo from "../../assets/images/person.png";
// import right_arrow from "../../assets/images/right_arrow.png";
// import left_arrow from "../../assets/images/left_arrow.png";
import smart_man from "../../assets/images/smart_man.png";
// import smart_man2 from "../../assets/images/smart_man2.png";

import React from "react";
import Carousel from "react-responsive-carousel";
// import Testimonial from "./Testimonial";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./owl.css";

class HomeTestimonial extends React.Component {
  render() {
    return (
      <div class="gtco-testimonials">
        <h2>Testimonials Carousel - Cards Comments</h2>
        <div class="owl-carousel owl-carousel1 owl-theme">
          <div>
            <div class="card text-center">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                alt=""
              />
              <div class="card-body">
                <h5>
                  Ronne Galle <br />
                  <span> Project Manager </span>
                </h5>
                <p class="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus id quod maxime placeat ”{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301"
                alt=""
              />
              <div class="card-body">
                <h5>
                  Missy Limana
                  <br />
                  <span> Engineer </span>
                </h5>
                <p class="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus id quod maxime placeat ”{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302"
                alt=""
              />
              <div class="card-body">
                <h5>
                  Martha Brown
                  <br />
                  <span> Project Manager </span>
                </h5>
                <p class="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus id quod maxime placeat ”{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303"
                alt=""
              />
              <div class="card-body">
                <h5>
                  Hanna Lisem
                  <br />
                  <span> Project Manager </span>
                </h5>
                <p class="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus id quod maxime placeat ”{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* 
// class HomeTestimonial extends React.Component {
//   render(){
//     return
// render() {
//   return (
//     <div className="Testimonial1">
//       <figure className="snip1390">
//         <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" class="profile" />
//         <figcaption>
//           <h2>Eleanor Crisp</h2>
//           <h4>UX Design</h4>
//           <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
//         </figcaption>
//       </figure>
//       <figure class="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
//         <figcaption>
//           <h2>Gordon Norman</h2>
//           <h4>Accountant</h4>
//           <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. </blockquote>
//         </figcaption>
//       </figure>
//       <figure class="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
//         <figcaption>
//           <h2>Sue Shei</h2>
//           <h4>Public Relations</h4>
//           <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
//         </figcaption>
//       </figure>
//     </div>

// function HomeTestimonial(props) {
//   const items = [
//     {
//       name: "Mr. Deepak Mishra",
//       description: "Sunday farms, Uttar Pradesh",
//       full_description:
//         "our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.",
//       imageSrc: smart_man,
//     },
//     {
//       name: "Mr. Deepak Mishra",
//       description: "Sunday farms, Uttar Pradesh",
//       full_description:
//         "our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.",
//       imageSrc: smart_man,
//     },
//     {
//       name: "Mr. Deepak Mishra",
//       description: "Sunday farms, Uttar Pradesh",
//       full_description:
//         "our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.our diverse portfolio of operations ranging from Grandparents farmers.",
//       imageSrc: smart_man,
//     },
//   ];

//   return (
//     <div className="Testimonial-main">
//       <h1 style={{ textAlign: "center", fontSize: "300%" }}>Testimonial</h1>
//       <Carousel
//         navButtonsAlwaysVisible="true"
//         activeIndicatorIconButtonProps={{
//           style: {
//             color: "Black",
//           },
//         }}
//         indicatorIconButtonProps={{
//           style: {
//             fontSize: "rem",
//             width: "10px",
//             padding: "15px",
//           },
//         }}
//         navButtonsProps={{
//           // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
//           style: {
//             width: "8em",
//             fontSize: "2rem",
//             backgroundColor: "transparent",
//           },
//         }}
//         animation="slide"
//       >
//         {items.map((item, i) => (
//           <Item key={i} {...item} />
//         ))}
//       </Carousel>
//     </div>
//   );
// }
// const Item = ({ name, description, full_description, imageSrc }) => {
//   return (
//     <div className="testimonial">
//       <div className="carousel-item">
//         <div className="item-left">
//           <img alt="person logo" src={smart_man} />
//         </div>
//         <div className="item-right">
//           <header className="item-header">
//             <h1>Naresh Rana</h1>
//             <h4>Software Engineer</h4>
//           </header>
//           <p>
//             &#8220; It is a long established fact that a reader will be
//             distracted by the readable content of a page when looking at its
//             layout. The point of using.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
//     );
//   }
// } */
}
export default HomeTestimonial;

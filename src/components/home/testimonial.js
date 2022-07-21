import React from "react";
import Carousel from "react-material-ui-carousel";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

//CSS
import "../../assets/styles/Home/hometestimonial.css";

//IMAGES
import person_logo from "../../assets/images/person.png";

// class HomeTestimonial extends React.Component {
//   render() {
//     // var settings = {
//     //   dots: true,
//     //   infinite: true,
//     //   speed: 500,
//     //   slidesToShow: 1,
//     //   slidesToScroll: 1,
//     // };
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       centerMode: true,
//       adaptiveHeight: true,
//       arrows: true,
//       autoplaySpeed: 5000,
//       className: "slides",
//       arrows: true,
//     };
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     };
//     return (
//       <Slider {...settings}>
//         <div className="testimonial">
//           <div className="carousel-item">
//             <div className="item-left">
//               <img alt="person logo" src={person_logo} />
//             </div>
//             <div className="item-right">
//               <header className="item-header">
//                 <h1>Vikhil Bajanna Sallagargi</h1>
//                 <h4>Software Engineer</h4>
//               </header>
//               <p>
//                 &#8220; It is a long established fact that a reader will be
//                 distracted by the readable content of a page when looking at its
//                 layout. The point of using.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="testimonial">
//           <div className="carousel-item">
//             <div className="item-left">
//               <img alt="person logo" src={person_logo} />
//             </div>
//             <div className="item-right">
//               <header className="item-header">
//                 <h1>Shubham Ramesh Gole</h1>
//                 <h4>Software Engineer</h4>
//               </header>
//               <p>
//                 &#8220; It is a long established fact that a reader will be
//                 distracted by the readable content of a page when looking at its
//                 layout. The point of using.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="testimonial">
//           <div className="carousel-item">
//             <div className="item-left">
//               <img alt="person logo" src={person_logo} />
//             </div>
//             <div className="item-right">
//               <header className="item-header">
//                 <h1>Hritik Ramdhan Chauhan</h1>
//                 <h4>Software Engineer</h4>
//               </header>
//               <p>
//                 &#8220; It is a long established fact that a reader will be
//                 distracted by the readable content of a page when looking at its
//                 layout. The point of using.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     );
//   }
// }

function HomeTestimonial(props) {
  var items = [
    {
      image: person_logo,
      name: "Vikhil Bajanna Sallagargi",
      role: "Software developer",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      image: person_logo,
      name: "Shubham Ramesh Gole",
      role: "Software developer",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel position="static">
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  console.log(props);
  return (
    <div className="testimonial">
      <div className="carousel-item">
        <div className="item-left">
          <img alt="person logo" src={props.item.image} />
        </div>
        <div className="item-right">
          <header className="item-header">
            <h1>{props.item.name}</h1>
            <h4>{props.item.role}</h4>
          </header>
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonial;

import React from "react";
import HomeIndex from "../components/home/homeIndex"
import HomeTestimonial from "../components/home/testimonial"

class HomePage extends React.Component{

    render(){
        return (
            <div>
                <HomeIndex />
                <HomeTestimonial />
            </div>
        )
    }
}

export default HomePage;
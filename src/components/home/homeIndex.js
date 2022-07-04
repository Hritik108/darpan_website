import React from "react";
import "../../assets/styles/Home/homeindex.css"
import { Button } from '@mui/material';
import jQuery from 'jquery';
import Mountain from "../../assets/images/Mountain.jpeg"

class Homeindex extends React.Component{

    render(){
        return (
            <div className="index-main" style={{height:window.innerHeight -150}}>
                <div className="index-description">
                    <div className="desc-main">
                        <h3>Govardhan Eco-Village</h3>
                        <h1>KNOW <strong>YOURSELF</strong>, <br />
                            KNOW YOUR <strong>POTENTIAL</strong></h1>
                    </div>
                    <div className="desc-sub">
                        <p>
                        At Govardhan Ecovillage you lose yourself into the 
                        labyrinths of your innermost self using the time
                         honoured snaps of Ayurveda, Yoga and Meditation.
                        </p>
                    </div>
                    <div className="index-buttons">
                        <Button variant="contained" style={{ backgroundColor: "#06283D",position:"static" }}>KNOW MORE</Button>
                        <Button variant="contained" style={{ backgroundColor: "#06283D",position:"static" }}>ASK US ANYTHING</Button>
                        
                    </div>  
                </div>
                <div className="index-image">
                        <img src={Mountain} />
                    </div>
            </div>
        )
    }
}


export default Homeindex;
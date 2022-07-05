import React from "react";
import "../assets/styles/aboutus.css";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-home">
        {/* <div className="about-heading">
          <h1 id="about-head">About Us</h1>
        </div> */}
        <div className="about-content">
           <div className="heading-main">
                <div className="heading-text">
                    <h1>Our Story</h1>
                    <p>Our story is one of a true example of one person’s visions formed by thousands hands together!It is a journey of a century in service to the society, Mother Earth and our Lord.</p>
                </div>
               
            </div>
            
      </div>
      <div className="timeline-container">
			<div className="timeline-main">
      <ul className="cbp_tmtimeline">
					<li>
						<time className="cbp_tmtime"><span>1985</span></time>
						<div className="cbp_tmicon cbp_tmicon-phone"></div>
						<div className="cbp_tmlabel">
							{/* <h2>Ricebean black-eyed pea</h2> */}
							<p>Me. Jagbir Singh Dhull and Mr. Jasbir Singh Deswal established Skylark Hatcheries</p>
						</div>
					</li>
					<li>
						<time className="cbp_tmtime"><span>1996</span></time>
						<div className="cbp_tmicon cbp_tmicon-phone"></div>
						<div className="cbp_tmlabel">
							{/* <h2>Greens radish arugula</h2> */}
							<p>Skylark research and breeding farm established at village Urlana Kalan, Haryana</p>
						</div>
					</li>
					<li>
						<time className="cbp_tmtime"><span>1997</span></time>
						<div className="cbp_tmicon cbp_tmicon-phone" ></div>
						<div className="cbp_tmlabel">
							{/* <h2>Sprout garlic kohlrabi</h2> */}
							<p>Himgiri Hatcheries was set up in a village in Himachal Pradesh</p>
						</div>
					</li>
					<li>
						<time className="cbp_tmtime"><span>2000</span></time>
						<div className="cbp_tmicon cbp_tmicon-phone"></div>
						<div className="cbp_tmlabel">
							{/* <h2>Watercress ricebean</h2> */}
							<p>Breeder capacity increased to 2,00,000. Skylark breeding farm renamed</p>
						</div>
					</li>
				</ul>
      </div>
      </div>
    </div>
    );
  }
}

export default AboutUs;

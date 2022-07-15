import React from "react";
import "../assets/styles/aboutus.css";
import growth from "../assets/images/diagram.png";

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
              {/* <p>Our story is one of a true example of one person’s visions formed by thousands hands together!It is a journey of a century in service to the society, Mother Earth and our Lord.</p> */}
            </div>
          </div>
        </div>
        <div className="timeline-container">
          <div className="timeline-main">
            <ul className="cbp_tmtimeline">
              <li>
                <time className="cbp_tmtime">
                  <span>2016</span>
                </time>
                <div className="cbp_tmicon cbp_tmicon-phone" id="about-icon">
                  <img className="about-img" src={growth} />
                </div>
                <div className="cbp_tmlabel">
                  {/* <h2>Ricebean black-eyed pea</h2> */}
                  <p>
                    Me. Jagbir Singh Dhull and Mr. Jasbir Singh Deswal
                    established Skylark Hatcheries
                  </p>
                </div>
              </li>
              <li>
                <time className="cbp_tmtime">
                  <span>2018</span>
                </time>
                <div
                  className="cbp_tmicon cbp_tmicon-phone"
                  id="about-icon"
                ></div>
                <div className="cbp_tmlabel">
                  {/* <h2>Greens radish arugula</h2> */}
                  <p>
                    Skylark research and breeding farm established at village
                    Urlana Kalan, Haryana
                  </p>
                </div>
              </li>
              <li>
                <time className="cbp_tmtime">
                  <span>2020</span>
                </time>
                <div
                  className="cbp_tmicon cbp_tmicon-phone"
                  id="about-icon"
                ></div>
                <div className="cbp_tmlabel">
                  {/* <h2>Sprout garlic kohlrabi</h2> */}
                  <p>
                    Himgiri Hatcheries was set up in a village in Himachal
                    Pradesh
                  </p>
                </div>
              </li>
              <li>
                <time className="cbp_tmtime">
                  <span>2022</span>
                </time>
                <div
                  className="cbp_tmicon cbp_tmicon-phone"
                  id="about-icon"
                ></div>
                <div className="cbp_tmlabel">
                  {/* <h2>Watercress ricebean</h2> */}
                  <p>
                    Breeder capacity increased to 2,00,000. Skylark breeding
                    farm renamed
                  </p>
                </div>
              </li>
            </ul>
            <div className="aboutus-descp">
              <p>
                Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese
                pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a
                Portuguese professional footballer who plays as a forward for
                Premier League club Manchester United and captains the Portugal
                national team. Often considered the best player in the world and
                widely regarded as one of the greatest players of all time,
                Ronaldo has won five Ballon d'Or awards[note 3] and four
                European Golden Shoes, the most by a European player. He has won
                32 trophies in his career, including seven league titles, five
                UEFA Champions Leagues, and the UEFA European Championship.
                Ronaldo holds the records for most appearances (183), goals
                (140), and assists (42) in the Champions League, goals in the
                European Championship (14), international goals (117), and
                international appearances by a European (189). He is one of the
                few players to have made over 1,100 professional career
                appearances, and has scored over 800 official senior career
                goals for club and country. Ronaldo began his senior career with
                Sporting CP, before signing with Manchester United in 2003, aged
                18, winning the FA Cup in his first season. He would also go
                onto win three consecutive Premier League titles, the Champions
                League and the FIFA Club World Cup; at age 23, he won his first
                Ballon d'Or. Ronaldo was the subject of the then-most expensive
                association football transfer when he signed for Real Madrid in
                2009 in a transfer worth €94 million (£80 million), where he won
                15 trophies, including two La Liga titles, two Copa del Rey, and
                four Champions Leagues, and became the club's all-time top
                goalscorer. He won back-to-back Ballons d'Or in 2013 and 2014,
                and again in 2016 and 2017, and was runner-up three times behind
                Lionel Messi, his perceived career rival. In 2018, he signed for
                Juventus in a transfer worth an initial €100 million (£88
                million), the most expensive transfer for an Italian club and
                for a player over 30 years old. He won two Serie A titles, two
                Supercoppe Italiana, and a Coppa Italia, before returning to
                United in 2021. Ronaldo made his international debut for
                Portugal in 2003 at the age of 18 and has since earned over 180
                caps, making him Portugal's most-capped player. With more than
                100 goals at international level, he is also the nation's
                all-time top goalscorer. Ronaldo has played in and scored at 11
                major tournaments; he scored his first international goal at
                Euro 2004, where he helped Portugal reach the final. He assumed
                captaincy of the national team in July 2008. In 2015, Ronaldo
                was named the best Portuguese player of all time by the
                Portuguese Football Federation. The following year, he led
                Portugal to their first major tournament title at Euro 2016, and
                received the Silver Boot as the second-highest goalscorer of the
                tournament. He also led them to victory in the inaugural UEFA
                Nations League in 2019, and later received the Golden Boot as
                top scorer of Euro 2020.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;

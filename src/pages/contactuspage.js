import React from "react";
import Contactusform from "../components/Contact/Contactusform";
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet-async";
class Contactus extends React.Component {
  render() {
    return (
      <div className="Contactus">
        <Helmet>
          <title>Contact</title>
          <meta name="description" content="Reach us darpan worli" />
          <link rel="canonical" href="/Contact" />
          <meta
            name="keywords"
            content=" dapran ,worli ,Darpan , Worli , IYS Worli , Career Counseling"
          />
        </Helmet>
        <Navbar />
        <Contactusform />
      </div>
    );
  }
}

export default Contactus;

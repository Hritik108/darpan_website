import React from "react";
import Navbar from "../components/navbar";
import Appointment from "../components/Career/Appointment";
import { Helmet } from "react-helmet-async";
class Career extends React.Component {
  render() {
    return (
      <div className="Career">
        <Helmet>
          <title>Career</title>
          <meta
            name="description"
            content="Career counseling with darpan worli"
          />
          <link rel="canonical" href="/Career" />
          <meta
            name="keywords"
            content="Darpan , Worli , IYS Worli , Career Counseling"
          />
        </Helmet>
        <Navbar />
        <Appointment />
      </div>
    );
  }
}

export default Career;

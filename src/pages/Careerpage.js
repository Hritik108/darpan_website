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
          <link rel="canonical" href="https://www.darpanworli.in/career" />
          <meta
            name="keywords"
            content=" dapran ,worli ,Darpan , Worli , IYS Worli , Career Counseling"
          />
        </Helmet>
        <Navbar />
        <Appointment />
      </div>
    );
  }
}

export default Career;

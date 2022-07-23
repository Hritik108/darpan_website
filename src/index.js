import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Career from "./pages/Careerpage";
import Footer from "./components/Footer";
import Contactus from "./pages/contactuspage";
import Aboutus from "./pages/Aboutus";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

// );

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Home" element={<HomePage />} />
        <Route path="About" element={<Aboutus />} />
        <Route path="Career" element={<Career />} />
        <Route path="Contact" element={<Contactus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

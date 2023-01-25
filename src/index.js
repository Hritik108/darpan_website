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
import { HelmetProvider } from "react-helmet-async";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(

// );

ReactDOM.render(
  <div>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="career" element={<Career />} />
          <Route path="contact" element={<Contactus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  </div>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

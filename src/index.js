import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./components/navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import AboutUs from './components/AboutUs'
import Career from './pages/Careerpage';

 
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={HomePage} />
      <Route path="Home" element={< HomePage />} />
      <Route path="About" element={<AboutUs />} />
      <Route path="Career" element={<Career />} />
    </Routes>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

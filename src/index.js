import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home.js';
import About from './Component/About.js';
import Login from './Component/Login.js';
import Registration from './Component/Registration.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route>
        <Route path="/" element={<App />}>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Registration" element={<Registration/>}></Route> 
        </Route>
      </Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

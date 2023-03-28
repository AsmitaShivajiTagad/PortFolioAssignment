import React from "react";
import { Link } from "react-router-dom";
import './image.jpg';

export default function Home(){
   return(
    <header>
    <div className="HomeContainer">
      <h2>Hi,</h2>
      <h2>I'm Asmita!</h2>
      <h2>Welcome to my page</h2>
      <p>
        I'm a Web Developer Trainee at Function,Exploring New Skills...
      </p>
    </div>  
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpM86NExaubyQnvrNrHAKIs9cz6LEPKZiqAQ&usqp=CAU" alt=" "></img>
    </div> 
    <Link to="/About">
        <button className="moreBtn">Read More...</button>
    </Link>  
    </header>
   ) ;
}
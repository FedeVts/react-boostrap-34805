import React from "react";
import '../Main/Main.css'
import Banner from '../../assets/banner2.jpg'


const Main = () => {
  return (
    <div className="vh-100">
      <h2 className="text-center">
        Bienvenido a Volture
      </h2>
      <img className="img-fluid" src={Banner} alt="banner"/>
      
    </div>
  );
};

export default Main;

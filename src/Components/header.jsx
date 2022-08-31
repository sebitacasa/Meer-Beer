import React from "react"
import img from "../images/logo2.jpeg"
import "./style.css"
 const NewComponent = () => {
   
      return (
        <div>
     
          {/* Ir arriba */}
          <div className="go-top">
            <span><i className="fas fa-angle-up" /></span>
          </div>
          {/* Mene de navegacion */}
          <header id="header">
            <nav className="menu">
              <div className="logo-box">
                <h1><img src={img} alt="" width={105} height={80}/></h1>
                <span className="btn-menu"><i className="fab fa-wolf-pack-battalion" /></span>
              </div>
              <div className="list-container">
                <ul className="lists">
                  <li><a href="#" className="activo">Start</a></li>
                  <li><a href="#">Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </nav>
            {/* Img Header */}
            <div className="img-header">
              <div className="Welcome">
                <h1>Meer Beer</h1>
                <hr />
                <p>Cerveza Ipa </p>
                <button id="abajo">mas acerca </button>
              </div>
            </div>
          </header>
          {/* Menu de navegacion */}
         
        </div>
      );
    
  };

  export default NewComponent
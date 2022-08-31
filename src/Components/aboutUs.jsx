import React from 'react';
import imagen from "../images/beerMeer1.jpeg";
import imagen2 from "../images/beerMeer2.jpeg";
import imagen3 from "../images/MeerBeer3.jpeg";
import imagen4 from "../images/MeerBeer4.jpeg";
import imagen5 from "../images/MeerBeer5.jpeg";
import proceso1 from "../images/proceso1.jpeg"
import proceso2 from "../images/proceso2.jpeg"
import proceso3 from "../images/proceso3.jpeg"
import proceso4 from "../images/proceso4.jpeg"
import proceso5 from "../images/proceso5.jpeg"
import proceso6 from "../images/proceso6.jpeg"
import proceso7 from "../images/proceso7.jpeg"
import proceso8 from "../images/proceso8.jpeg"


const AboutUs = () => {
    return (
        <div>
            <main>
            {/* Acerca de nosotros */}
            <section className="acerca-de">
              <div className="info-container">
                <h1>About Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, nulla minus? Exercitationem, similique dolore laborum quod maiores dolores officiis eius inventore tempora voluptas deleniti repellat iusto tenetur, dolor blanditiis alias.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quisquam molestias qui deserunt fugiat delectus iusto, natus veniam voluptatibus expedita sint sed magnam quasi. Blanditiis iste eum aperiam optio veniam!</p>
                <div className="about-gallery">
                  <img src={imagen} alt="" /> 
                  <img src={imagen2} alt=""/> 
                  <img src={imagen3} alt="" /> 
                </div>
                <div className="about-more"><button>Read more</button></div>
              </div>
            </section>
            {/* Nuestros proyectos */}
            <section className="our-project">
              <div className="deg-background" />
              <div className="ejeZproject">
                <div className="container-project">
                  <div className="project-tittle">
                    <h2>Our Show</h2>   
                    <hr />
                  </div>
                  <div className="project-img">
                  <img src={proceso1} alt="" /> 
                  <img src={proceso2} alt="" /> 
                  <img src={proceso3} alt="" /> 
                  <img src={proceso4} alt="" /> 
                  <img src={proceso5} alt="" /> 
                  <img src={proceso6} alt="" /> 
                  <img src={proceso7} alt="" /> 
                  <img src={proceso8} alt="" /> 
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
    )
}

export default AboutUs;
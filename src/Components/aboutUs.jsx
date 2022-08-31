import React from "react";
import imagen from "../images/beerMeer1.jpeg";
import imagen2 from "../images/beerMeer2.jpeg";
import imagen3 from "../images/MeerBeer3.jpeg";
import imagen4 from "../images/MeerBeer4.jpeg";
import imagen5 from "../images/MeerBeer5.jpeg";
import proceso1 from "../images/proceso1.jpeg";
import proceso2 from "../images/proceso2.jpeg";
import proceso3 from "../images/proceso3.jpeg";
import proceso4 from "../images/proceso4.jpeg";
import proceso5 from "../images/proceso5.jpeg";
import proceso6 from "../images/proceso6.jpeg";
import proceso7 from "../images/proceso7.jpeg";
import proceso8 from "../images/proceso8.jpeg";

const AboutUs = () => {
  return (
    <div>
      <main>
        {/* Acerca de nosotros */}
        <section className="acerca-de">
          <div className="info-container">
            <h1>About Us</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              nulla minus? Exercitationem, similique dolore laborum quod maiores
              dolores officiis eius inventore tempora voluptas deleniti repellat
              iusto tenetur, dolor blanditiis alias.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quisquam molestias qui deserunt fugiat delectus iusto, natus
              veniam voluptatibus expedita sint sed magnam quasi. Blanditiis
              iste eum aperiam optio veniam!
            </p>
            <div className="about-gallery">
              <img src={imagen} alt="" />
              <img src={imagen2} alt="" />
              <img src={imagen3} alt="" />
            </div>
            <div className="about-more">
              <button>Leer mas</button>
            </div>
          </div>
        </section>
        {/* Nuestros proyectos */}
        <section className="our-project">
          <div className="deg-background" />
          <div className="ejeZproject">
            <div className="container-project">
              <div className="project-tittle">
                <h2 style={{fontSize: "33px", textAlign: "none", fontWeight: "bolder"}}>Nuetro proceso de la cerveza</h2>
                
              </div>
              <div className="project-img">
                <div className="divContanerProceso">
                  <p style={{color: "#ff8c42" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque numquam perspiciatis inventore ipsam non vero
                    provident, neque ut. Necessitatibus exercitationem
                    voluptatum asperiores eligendi
                  </p>
                </div>

                <img  className="img-proceso" src={proceso1} alt="" />
                <div className="divContanerProceso">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque numquam perspiciatis inventore ipsam non vero
                    provident, neque ut. Necessitatibus exercitationem
                    voluptatum asperiores eligendi
                  </p>
                </div>
                <img className="img-proceso" src={proceso2} alt="" />
                <div className="divContanerProceso">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque numquam perspiciatis inventore ipsam non vero
                    provident, neque ut. Necessitatibus exercitationem
                    voluptatum asperiores eligendi
                  </p>
                </div>
                <img className="img-proceso"  src={proceso3} alt="" />
                <div className='divContanerProceso' >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque numquam perspiciatis inventore ipsam non vero
                    provident, neque ut. Necessitatibus exercitationem
                    voluptatum asperiores eligendi
                  </p>
                </div>
                <img className="img-proceso" src={proceso4} alt="" />
                <div className='divContanerProceso'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque numquam perspiciatis inventore ipsam non vero
                    provident, neque ut. Necessitatibus exercitationem
                    voluptatum asperiores eligendi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sequi iusto voluptates ipsa sit veniam repellendus dignissimos deserunt qui ea at excepturi cupiditate, voluptatum, ipsam odit alias impedit neque debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis minima alias obcaecati ullam nihil aliquid? Delectus corrupti asperiores facilis nemo a aperiam deserunt soluta reiciendis obcaecati neque praesentium, ex iure! 
                  </p>
                </div>
                <img className="img-proceso" src={proceso5} alt="" />
                <div className='divContanerProceso'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque numquam perspiciatis inventore ipsam non vero
                    provident, neque ut. Necessitatibus exercitationem
                    voluptatum asperiores eligendi Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia molestias odit quasi placeat a sequi ex doloremque. Laborum in voluptatum, sapiente esse totam modi vitae velit officiis fuga optio enim? l
                  </p>
                </div>
                <img className="img-proceso" src={proceso6} alt="" />
                <div className='divContanerProceso'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque numquam perspiciatis inventore ipsam non vero
                    provident, neque ut. Necessitatibus exercitationem
                    voluptatum asperiores eligendi
                  </p>
                </div>
                <img className="img-proceso" src={proceso7} alt="" />
                <div className='divContanerProceso' >
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro eaque numquam perspiciatis inventore ipsam non vero
                    provident, neque ut. Necessitatibus exercitationem
                    voluptatum asperiores eligendi
                  </p>
                </div>
                <img className="img-proceso" src={proceso8} alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;

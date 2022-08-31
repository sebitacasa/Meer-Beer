import React from "react"

const Footer = () => {
    return (
        <div>
            <footer className="footer">
            <div className="deg-footer" />
            <div className="ejeZfooter">
              <div className="footer-content">
                <div className="footer-tittle">
                  <h2>Contactenos</h2>
                </div>
                <div className="formulario-content">
                  <form id="formulario">
                    <label htmlFor="user">Nombre:</label>
                    <input type="text" id="user" name="user" placeholder="Ingresa tu Nombre" />
                    <label htmlFor="email">Correo Electronico:</label>
                    <input type="email" id="email" name="email" placeholder="Ingresa tu Correo Electronico" />
                    <label htmlFor="message">Escribe tu mensaje</label>
                    <textarea name="menssage" id="message" defaultValue={""} />
                    <div className="send"><button>Enviar</button></div>
                    <div className="mensaje-form">
                      <p>Escribenos un mensaje, con gusto tendras una respuesta de parte de nosotros en muy poco tiempo.</p>
                    </div>
                  </form>
                </div>
                <div className="footer-text">
                  <p>© Meer Beer | Todos los derechos reservados</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
    )
}

export default Footer;
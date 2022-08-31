import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Placeholder from 'react-bootstrap/Placeholder';

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
            <Container>
              <Row>
                <Col xs>
                <Placeholder xs={6} />
                  <Placeholder className="w-75" />{" "}
                  <Placeholder style={{ width: "60%" }} />
                </Col>
                <Col xs={{ order: 12 }}>
                  {" "}
                  <Placeholder xs={6} />
                  <Placeholder className="w-75" />{" "}
                  <Placeholder style={{ width: "60%" }} />
                </Col>
                <Col xs={{ order: 1 }}>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Container>

            <div className="footer-text">
              <p>© Meer Beer | Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col } from "reactstrap";

class Neeedhelp extends React.Component {
  render() {
    return (
      <section id="needhelpmoisturestudio">
        <Container>
          <Row>
            <Col md="6">
              <div className="contact-info">
                <h4>Need help? We're here</h4>
                <p>
                  Why are we different from others? We build products that help
                  businesses grow exponentially. We build MVs that reduce
                  startup costs and help them raise funds.
                </p>
                <a href="contact" className="btn btn-purple">
                  Start Something new
                </a>
              </div>
            </Col>
            <Col md="6">
              <div className="logo">
                <a href="/">
                  <img
                    src={"images/Big-logo.svg"}
                    alt=""
                    className="img-responsive imglogo"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Neeedhelp;

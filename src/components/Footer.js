import React from "react";
import { Container, Row, Col } from "reactstrap";
import Icofont from "react-icofont";
import "./Footer.css";
import logo from "../images/logo.svg";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer-area">
        <Container>
          <hr className="footerline" />
          <Row className="align-items-center">
            <Col md="6">
              <Row>
                <Col md="5">
                  <div className="emailfooter">
                    <label className="fo">Email us</label>
                    <br />
                    <label>
                      <a href="mailto:info@moisturestudio.com">
                        info@moisturestudio.com
                      </a>
                    </label>
                  </div>
                </Col>
                <Col md="5">
                  <div className="socialfooter">
                    <label className="fo">Skype</label>
                    <br />
                    <label>
                      <a href="https://join.skype.com/invite/UakmU1natzhm">
                        info@moisturestudio.com
                      </a>
                    </label>
                  </div>
                </Col>
                {/* <Col md="4">
                    <div className="webfooter">
                        <label className="fo">Address</label><br/><label></label>
                    </div>
                </Col> */}
              </Row>
            </Col>
            <Col md="6">
              <ul className="social-link d-flex align-items-center justify-content-end">
                {/* <li>
                    <a href="#">
                    <Icofont icon="icofont-facebook" />
                    </a>
                </li> */}
                <li>
                  <a href="https://www.instagram.com/moisture_studio/">
                    <Icofont icon="icofont-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/moisturestudio">
                    <Icofont icon="icofont-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/moisture-studio">
                    <Icofont icon="icofont-linkedin" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;

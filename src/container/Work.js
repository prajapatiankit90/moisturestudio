import React, { Component } from "react";
// import { connect } from 'react-redux';
import "./Work.css";
import { Container, Row, Col } from "reactstrap";
// import Icofont from "react-icofont";
import AOS from "aos";
import Needhelp from "../components/Needhelp";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.title = "Work | Moisture";
    AOS.init({
      disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      delay: 500,
      duration: 1000,
    });
  }
  render() {
    return (
      <>
        <div className="main-area">
          <div className="hero-area process-pge">
            <Container>
              <div className="hero-content-wrapper">
                <div className="hero-content-innner-wrapper style-2 text-center">
                  <div className="shape-1-wrap">
                    <img
                      src={"images/Work%20header.svg"}
                      alt=""
                      className="workheader"
                    />
                  </div>
                  <h2 data-aos="fade-up">
                    Just <span className="text-purple"> glimpse </span>
                    of <br />
                    <span className="text-pink">our work</span>
                  </h2>
                </div>
              </div>
            </Container>
          </div>
          <div className="workportfolio11">
            <Container>
              <Row className="align-items-center bg portfolio11">
                <Col md="12">
                  <Col md="4">
                    <div className="workportfoliooneonea">
                      <h2>Vloggi</h2>
                      <p>
                        Vloggi is a startup based on Sydney Australia. It
                        provides service to large enterprise to small business.
                        It allows enterprise to make custom video which they
                        collected from their user.
                      </p>
                      <p>
                        For this unique concept this startup raised $3.4M
                        funding till now.
                      </p>
                      <p>
                        We improved their existence design where enterprise
                        collects the video and done made UX seamless.
                      </p>
                      <a
                        href="https://vloggi.com/"
                        className="btn btn-purple"
                        target="_blank"
                      >
                        View Website
                      </a>
                    </div>
                  </Col>
                  <Col md="8">
                    <div
                      className="portfolio-item-wrapper"
                      data-aos="fade-left"
                      data-aos-delay="800"
                    >
                      <div className="workportfoliooneoneb">
                        <img
                          src={"images/Vloggi.png"}
                          alt=""
                          className="img-responsive Vloggi"
                        />
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="workportfolio0">
            <Container>
              <Row className="align-items-center">
                <Col md="12">
                  <Col md="6">
                    <div className="portfolio-item-wrapper" data-aos="fade-up">
                      <div className="workportfoliozeroa">
                        <img
                          src={"images/pro1.jpg"}
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div
                      className="portfolio-item-wrapper ds-0"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <div className="workportfoliozerob">
                        <img
                          src={"images/pro2.jpg"}
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="workportfolio1">
            <Container>
              <Row className="align-items-center bg portfolio1">
                <Col md="12">
                  <Col md="4">
                    <div className="workportfolioonea">
                      <h2>Medi App</h2>
                      <p>
                        Medi app is a company which provide online consultation,
                        pharmacy, and laboratory service too.
                      </p>
                      <p>
                        We had done in depth research in this field, after
                        collecting the data we came up with branding and finally
                        made user journey.
                      </p>
                      <a
                        href={"images/Doctor_Book_Appoinement_System-PDF.pdf"}
                        className="btn btn-purple"
                        target="_blank"
                      >
                        View More
                      </a>
                    </div>
                  </Col>
                  <Col md="8">
                    <div
                      className="portfolio-item-wrapper"
                      data-aos="fade-left"
                      data-aos-delay="800"
                    >
                      <div className="workportfoliooneb">
                        <img
                          src={"images/MediApp.png"}
                          alt=""
                          className="img-responsive MediApp"
                        />
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="workportfolio2">
            <Container>
              <Row className="align-items-center">
                <Col md="12">
                  <Col md="6">
                    <div className="portfolio-item-wrapper" data-aos="fade-up">
                      <div className="workportfoliotwoa">
                        <img
                          src={"images/pro3.jpg"}
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div
                      className="portfolio-item-wrapper ds-0"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <div className="workportfoliotwob">
                        <img
                          src={"images/pro4.jpg"}
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="workportfolio3">
            <Container>
              <Row className="align-items-center bg portfolio3">
                <Col md="12">
                  <Col md="4">
                    <div className="workportfoliothreea">
                      <h2>Pay scall</h2>
                      <p>
                        Pay scall is Indonesian based startup, which provide
                        their services to the small to medium business.
                      </p>
                      <p>
                        It tracks employees salary, how much amount is pending,
                        when they took a leave, even attendance too.
                      </p>
                      <p>
                        App provides every employees details very precisely.
                      </p>
                      <p>
                        We'd done branding, UX as well as application design.
                      </p>
                      <a
                        href="https://www.gajiq.id/"
                        className="btn btn-purple"
                        target="_blank"
                      >
                        View More
                      </a>
                    </div>
                  </Col>
                  <Col md="8">
                    <div
                      className="portfolio-item-wrapper"
                      data-aos="fade-left"
                      data-aos-delay="800"
                    >
                      <div className="workportfoliothreeb">
                        <img
                          src={"images/Payscall.png"}
                          alt=""
                          className="img-responsive Payscallnew"
                        />
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="workportfolio4">
            <Container>
              <Row className="align-items-center">
                <Col md="12">
                  <Col md="6">
                    <div className="portfolio-item-wrapper" data-aos="fade-up">
                      <div className="workportfoliofoura">
                        <img
                          src={"images/pro5.jpg"}
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div
                      className="portfolio-item-wrapper ds-0"
                      data-aos="fade-up"
                      data-aos-delay="800"
                    >
                      <div className="workportfoliofourb">
                        <img
                          src={"images/pro6.jpg"}
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <section id="dontfindwork">
          <div className="manage-area">
            <Container>
              <div className="single-blk in-manage-area" data-aos="fade-up">
                <div className="v-line leftnew"></div>
                <div className="v-linerightnew"></div>
                <h4>Don't find anything you need</h4>
                <p>
                  Just reach us we've have had covered enough industry
                  <br />
                  to show someting special everytime
                </p>
              </div>
            </Container>
          </div>
        </section>
        <Needhelp />
      </>
    );
  }
}
export default Work;

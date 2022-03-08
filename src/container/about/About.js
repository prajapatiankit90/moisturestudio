import React, { useEffect } from "react";
// import { connect } from 'react-redux';
import "./About.css";
import { Container, Row, Col } from "reactstrap";
// import Icofont from "react-icofont";
import AOS from "aos";
import Needhelp from "../../components/Needhelp";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = (props) => {
  useEffect(() => {
    /* Page title */
    document.title = "About | Moisture";
    AOS.init({
      disable: "mobile",
      delay: 500,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="main-area fix">
        <div className="hero-area about-pge">
          <Container>
            <div className="hero-content-wrapper">
              <div className="hero-content-innner-wrapper text-center">
                <Image
                  data-aos="fade-right"
                  src={"images/About-header.svg"}
                  className="aboutbanner banner aos-init aos-animate"
                />
                <h2 data-aos="fade-up">
                  We're putting in
                  <span className="text-purple"> effort </span> so you
                  <br />
                  don’t <span className="text-pink"> need to</span>
                </h2>
                <Link
                  to="contact"
                  className="btn btn-purple"
                  data-aos="fade-up"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <section id="whatwedoaboutmoisturestudio"  className="service-two-area-section">
        <Container>
          <div className="service-two-area">
            <h3 className="sec-title">What we do</h3>
            <div className="service-two-flex-wrapper"></div>
            <Row>
                <Col md="4">
                  <div className="service-two-item" data-aos="fade-up">
                    <h4 className="text-purple">Strategy</h4>
                    <ul className="service-two-list">
                      <li>Research</li>
                      <li>UI/UX audit</li>
                      <li>Product strategy</li>
                      <li>Innovation consulting</li>
                    </ul>
                  </div>
                </Col>
                <Col md="4">
                  <div className="service-two-item" data-aos="fade-up">
                    <h4 className="text-purple">Design</h4>
                    <ul className="service-two-list">
                      <li>UI/UX design</li>
                      <li>Brand identity</li>
                      <li>Websites and mobile apps</li>
                      <li>Prototyping and testing</li>
                    </ul>
                  </div>
                </Col>
                <Col md="4">
                  <div className="service-two-item" data-aos="fade-up">
                    <h4 className="text-purple">Development</h4>
                    <ul className="service-two-list">
                      <li>HTML/CSS/JS</li>
                      <li>React/Angular or All</li>
                      <li>Backend/API integrations</li>
                      <li>iOS/Android native apps</li>
                    </ul>
                  </div>
                </Col>
            </Row>
          </div>
          <Row>
              <Col md="2"></Col>
              <Col md="4">
                <div
                  className="service-two-item"
                  data-aos="fade-up"
                  data-delay="500"
                >
                  <h4 className="text-pink">Marketing</h4>
                  <ul className="service-two-list">
                    <li>Content Marketing</li>
                    <li>Social Media</li>
                    <li>SEO</li>
                    <li>Paid Social</li>
                    <li>Cover all digital aspects</li>
                  </ul>
                </div>
              </Col>
              <Col md="4">
                <div
                  className="service-two-item"
                  data-aos="fade-up"
                  data-delay="500"
                >
                  <h4 className="text-pink">Intelligence</h4>
                  <ul className="service-two-list">
                    <li>Artificial Intelligence</li>
                    <li>Machine learning</li>
                    <li>Big data analytics</li>
                    <li>Augmented reality</li>
                    <li>Virtual reality</li>
                  </ul>
                </div>
              </Col>
              <Col md="2"></Col>
          </Row>
        </Container>
      </section>
      <section id="industriesservedmoisturestudio">
        <Container>
          <Row>
            <div className="serve-area">
              <div className="serve-wrapper">
                <div className="serve-middle-title">
                  <h3>
                    <div className="v-line left"></div>
                    Industries served
                    <div className="v-line right"></div>
                  </h3>
                </div>
                <div className="serve-rw one" data-aos="fade-up">
                  <div className="serve-step">
                    <p className="text-purple">
                      <span>1.</span>EdTech
                    </p>
                  </div>
                  <div className="serve-step">
                    <p className="text-purple">
                      <span>9.</span>Petcare
                    </p>
                  </div>
                </div>
                <div className="serve-rw two" data-aos="fade-up">
                  <div className="serve-step">
                    <p>
                      <span>2.</span>FInTech
                    </p>
                  </div>
                  <div className="serve-step">
                    <p>
                      <span>8.</span>CRM
                    </p>
                  </div>
                </div>
                <div className="serve-rw three" data-aos="fade-up">
                  <div className="serve-step">
                    <p>
                      <span>3.</span>FoodTech
                    </p>
                  </div>
                  <div className="serve-step">
                    <p>
                      <span>7.</span>ERP
                    </p>
                  </div>
                </div>
                <div className="serve-rw three-in" data-aos="fade-up">
                  <div className="serve-step">
                    <p>
                      <span>4.</span>Healthcare
                    </p>
                  </div>
                  <div className="serve-step">
                    <p>
                      <span>5.</span>Startups
                    </p>
                  </div>
                  <div className="serve-step">
                    <p>
                      <span>6.</span>Enterprise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section id="technologiesmoisturestudio">
        <Container>
          <Row>
            <h3 className="sec-title">Technologies</h3>
            <div className="use-case-g-wrapper" data-aos="fade-right">
              <div className="case-icon">
                <Image src={"images/p-1.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-2.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-3.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-4.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-5.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-6.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-7.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-8.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-9.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-10.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-11.svg"} alt="" />
              </div>
              <div className="case-icon">
                <Image src={"images/p-12.svg"} alt="" />
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <section id="manageclient">
        <Container className="position-relative">
          <Row>
            <div className="manage-area">
              <div className="single-blk in-manage-area" data-aos="fade-up">
                <div className="v-line leftnew"></div>
                <div className="v-linerightnew"></div>
                <h4>We will manage, don't worry</h4>
                <p>*for our upcoming clients</p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Needhelp />
    </>
  );
};
export default About;

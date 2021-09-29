import React from "react";
import "./Home.css";
import { Button, Container, Row, Col } from "reactstrap";
import AOS from "aos";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Needhelp from "../components/Needhelp";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      responsive: {
        0: {
          nav: false,
          dots: false,
          items: "1",
        },
        767: {
          nav: false,
          dots: false,
          items: "1",
        },
      },
    };
  }

  componentDidMount() {
    {
      /* Page title */
    }
    document.title = "Home | Moisture";
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
          <div className="hero-area">
            <Container>
              <div className="hero-content-wrapper">
                <div className="hero-content-innner-wrapper text-center">
                  <img
                    data-aos="fade-right"
                    src={"images/first-img.svg"}
                    className="aboutbanner banner aos-init aos-animate"
                  />
                  {/* <h1 className="hometextb">
                    MOIS<span className="hometextb">TURE</span>
                  </h1> */}
                  <h2 data-aos="fade-up">
                    Working with
                    <span className="text-purple"> businesses </span>
                    who want more <span className="text-pink">business</span>
                  </h2>
                  <a
                    href="contact"
                    className="btn btn-purple"
                    data-aos="fade-up"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <section id="businesshomemoisturestudio">
          <Container>
            <Row>
              <h3 className="sec-title">We're in the business of...</h3>
              <ul className="business-of-ul" data-aos="fade-up">
                <li>Product UX</li>
                <li>Strategy</li>
                <li className="branding">Branding</li>
                <li>Design </li>
                <li>App &amp; Website</li>
                <li className="development">Development</li>
                <li>Launch</li>
                <li>Marketing</li>
              </ul>
            </Row>
          </Container>
        </section>
        <section id="appmoisturestudio">
          <Container>
            <Row>
              <h3 className="sec-title">Precious work</h3>
              <Col md="12">
                <div className="portfolio-item-wrapper" data-aos="fade-up">
                  <div className="portfolio-img">
                    <img src={"images/work-11.jpg"} alt="" />
                  </div>
                  <div className="portfolio-item-content">
                    <div className="work-info-wrap">
                      <p>Scout icon</p>
                      <h5>
                        Exceptionally well-made and handpicked icons for users
                      </h5>
                    </div>
                    <div className="portfolio-crud-btn">
                      <a href="#" className="btn btn-light-puprle">
                        App
                      </a>
                      <a href="#" className="btn btn-light-puprle">
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="seo">
                <Col md="6">
                  <div className="portfolio-item-wrapper" data-aos="fade-up">
                    <div className="portfolio-img">
                      <img src={"images/work-3.jpg"} alt="" />
                    </div>
                    <div className="portfolio-item-content">
                      <div className="work-info-wrap">
                        <p>Single grain</p>
                        <h5>SEO Agency</h5>
                      </div>
                      <div className="portfolio-crud-btn">
                        <a href="#" className="btn btn-light-puprle">
                          Branding
                        </a>
                        <a href="#" className="btn btn-light-puprle">
                          Website
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div
                    className="portfolio-item-wrapper ds-0"
                    data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <div className="portfolio-img">
                      <img src={"images/work-2.jpg"} alt="" />
                    </div>
                    <div className="portfolio-item-content">
                      <div className="work-info-wrap">
                        <p>Dynamic reasoning</p>
                        <h5>Employee Communities</h5>
                      </div>
                      <div className="portfolio-crud-btn">
                        <a href="#" className="btn btn-light-puprle">
                          Website
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
            <Row>
              <Col md="12">
                <div className="app">
                  <div className="portfolio-item-wrapper" data-aos="fade-up">
                    <div className="portfolio-img">
                      <img src={"images/work-4.jpg"} alt="" />
                    </div>
                    <div className="portfolio-item-content">
                      <div className="work-info-wrap">
                        <p>Dazy Beer</p>
                        <h5>App that matches beer lovers who are nearby</h5>
                      </div>
                      <div className="portfolio-crud-btn">
                        <a href="#" className="btn btn-light-puprle">
                          App
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="achievementsmoisturestudio">
          <Container>
            <Row>
              <h3 className="sec-title">Some Achievements</h3>
              <ul className="achievements-ul">
                <li>
                  <h3 className="text-purple">
                    <span className="counter">47</span>+
                  </h3>
                  <p>Clients</p>
                </li>
                <li>
                  <h3 className="text-pink">
                    <span className="counter">5</span>+
                  </h3>
                  <p>Years of experience</p>
                </li>
                <li>
                  <h3 className="text-purple">
                    <span className="counter">20</span>+
                  </h3>
                  <p>Less but impactful experts</p>
                </li>
              </ul>
            </Row>
          </Container>
        </section>
        <section id="technologiesmoisturestudio">
          <Container>
            <Row>
              <h3 className="sec-title">Technologies</h3>
              <div className="use-case-g-wrapper" data-aos="fade-right">
                <div className="case-icon">
                  <img src={"images/p-1.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-2.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-3.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-4.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-5.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-6.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-7.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-8.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-9.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-10.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-11.svg"} alt="" />
                </div>
                <div className="case-icon">
                  <img src={"images/p-12.svg"} alt="" />
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section id="testimonialmoisturestudio">
          <Container>
            <h3 className="sec-title">Testimonials</h3>
            <div className="testimonial-active">
              <OwlCarousel
                className="aboutus-owl owl-theme"
                loop={true}
                margin={0}
                autoplay={true}
                autoplayTimeout={3000}
                smartSpeed={500}
                nav={true}
                items="3"
                responsive={this.state.responsive}
                dots={false}
              >
                <div className="item">
                  <Row className="align-items-center">
                    <Col md="12">
                      <Col md="6">
                        <div className="testimonial-img">
                          <img
                            src={"images/testimonial.jpg"}
                            alt=""
                            className="center img-responsive imgtesti"
                          />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="testimonial-info">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="43.392"
                              height="32.038"
                              viewBox="0 0 43.392 32.038"
                            >
                              <g
                                id="Group_18"
                                data-name="Group 18"
                                transform="translate(-907 -6205)"
                              >
                                <path
                                  id="Path_39"
                                  data-name="Path 39"
                                  d="M19.066,40.588H8.542c.18,7.67,2.355,8.541,5.088,8.789l1.054.131v8.434l-1.215-.065c-3.568-.2-7.513-.844-10.144-4.093C1.017,50.936,0,46.283,0,39.141V25.9H19.066Z"
                                  transform="translate(931.326 6179.095)"
                                  fill="#cecdd1"
                                ></path>
                                <path
                                  id="Path_40"
                                  data-name="Path 40"
                                  d="M130.066,25.9V40.588H119.682c.18,7.67,2.285,8.541,5.017,8.789l.984.131v8.434l-1.144-.065c-3.568-.2-7.548-.844-10.18-4.093-2.307-2.848-3.359-7.5-3.359-14.644V25.9Z"
                                  transform="translate(796 6179.095)"
                                  fill="#cecdd1"
                                ></path>
                              </g>
                            </svg>
                          </span>
                          <p>
                            It has been great to work with moisture, they
                            produced stunning design for our new UI and I really
                            love the time they spent researching the web for
                            best practices. they are dedicated, organized and
                            communicates well, we will so sure keep working
                            together in the future.
                          </p>
                          <div className="reviewer">
                            <h6>
                              Jérémy Giraudet<span>CTO, Vloggi</span>
                            </h6>
                          </div>
                        </div>
                      </Col>
                    </Col>
                  </Row>
                </div>
                <div className="item">
                  <Row className="align-items-center">
                    <Col md="6">
                      <div className="testimonial-img">
                        <img
                          src={"images/testimonial2.png"}
                          alt=""
                          className="center img-responsive imgtesti"
                        />
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="testimonial-info">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="43.392"
                            height="32.038"
                            viewBox="0 0 43.392 32.038"
                          >
                            <g
                              id="Group_18"
                              data-name="Group 18"
                              transform="translate(-907 -6205)"
                            >
                              <path
                                id="Path_39"
                                data-name="Path 39"
                                d="M19.066,40.588H8.542c.18,7.67,2.355,8.541,5.088,8.789l1.054.131v8.434l-1.215-.065c-3.568-.2-7.513-.844-10.144-4.093C1.017,50.936,0,46.283,0,39.141V25.9H19.066Z"
                                transform="translate(931.326 6179.095)"
                                fill="#cecdd1"
                              ></path>
                              <path
                                id="Path_40"
                                data-name="Path 40"
                                d="M130.066,25.9V40.588H119.682c.18,7.67,2.285,8.541,5.017,8.789l.984.131v8.434l-1.144-.065c-3.568-.2-7.548-.844-10.18-4.093-2.307-2.848-3.359-7.5-3.359-14.644V25.9Z"
                                transform="translate(796 6179.095)"
                                fill="#cecdd1"
                              ></path>
                            </g>
                          </svg>
                        </span>
                        <p>
                          My experience with moisture as been perfect. Did
                          exactly what I had in mind. Very creative and
                          professional. they will work on your project until
                          your satisfied.
                        </p>
                        <div className="reviewer">
                          <h6>
                            Gabriel Sylvestre{" "}
                            <span>Founder & CEO, Let's Bid</span>
                          </h6>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </OwlCarousel>
            </div>
          </Container>
        </section>
        <Needhelp />
      </>
    );
  }
}

export default Home;

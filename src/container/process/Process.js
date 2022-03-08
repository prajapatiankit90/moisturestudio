import React, { useEffect } from "react";
// import { connect } from 'react-redux';
import "./Process.css";
import { Container, Row, Col } from "reactstrap";
// import Icofont from "react-icofont";
import AOS from "aos";
import Needhelp from "../../components/Needhelp";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Process = (props) => {
  useEffect(() => {
    document.title = "Process | Moisture";
    AOS.init({
      disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      delay: 500,
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="main-area">
        <div className="hero-area process-pge">
          <Container>
            <div className="hero-content-wrapper">
              <div className="hero-content-innner-wrapper style-2 text-center">
                <div className="shape-1-wrap">
                  <Image
                    src={"images/Process-header.svg"}
                    alt=""
                    className="headerProcess"
                  />
                </div>
                <h2 data-aos="fade-up">
                  Our <span className="text-purple">Process</span> makes us
                  <br />
                  stand <span className="text-pink">out</span>
                </h2>
                <a href="contact" className="btn btn-purple" data-aos="fade-up">
                  Contact us
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <section id="understandingideaprocess" className="process-section">
        <Container>
          <div className="data-area">
            <div className="data-type-wrapper">
              <div
                className="twin-flex-title d-flex align-items-center justify-content-between"
                data-aos="fade-up"
              >
                <h3>Understanding ideas</h3>
              </div>
              <Row>
                <Col md="6"></Col>
                <Col md="6">
                  <div className="data-img Understandingidea">
                    <Image
                      src={"images/Group-1699.svg"}
                      alt=""
                      className="processUnderstandingidea"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="0"></Col>
                <Col md="6">
                  <div className="data-type-content" data-aos="fade-up">
                    <div className="single-blk type-2 Understandingidea">
                      <div className="v-lineleftUnderstandingidea"></div>
                      <div className="v-linerightUnderstandingidea"></div>
                      <h4>Idea</h4>
                      <p>
                        At the start, we familiarize ourselves with the ideas,
                        <br />
                        products and users of a partner.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6"></Col>
              </Row>
              <Row>
                <Col md="4"></Col>
                <Col md="4">
                  <div className="single-blk Understandingidea">
                    <div className="v-lineleftUnderstandingidea changeline"></div>
                    <div className="v-linerightUnderstandingusers changeline"></div>
                    <h4>Users</h4>
                    <p>
                      Users are the core of any business. Using in-depth
                      research, <br />
                      we can predict their behaviors and provide a better
                      experience.
                    </p>
                  </div>
                </Col>
                <Col md="4"></Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <section id="brainstormingdataprocess" className="process-section">
        <Container>
          <div className="data-type-wrapper reverse">
            <div
              className="twin-flex-title d-flex align-items-center justify-content-between"
              data-aos="fade-up"
            >
              <h3 className="text-pink">Brainstorming data</h3>
            </div>
            <Row>
              <Col md="6">
                <div className="data-img Brainstormingdata">
                  <Image
                    src={"images/Group-1700.svg"}
                    alt=""
                    className="processBrainstormingdata"
                  />
                </div>
              </Col>
              <Col md="6"></Col>
            </Row>
            <div className="data-type-content" data-aos="fade-up">
              <Row>
                <Col md="6"></Col>
                <Col md="6">
                  <div className="single-blk type-2 Brainstormingdata">
                    <div className="v-lineleftBrainstormingdata"></div>
                    <div className="v-linerightBrainstormingdata"></div>
                    <h4>Finding problem</h4>
                    <p>
                      At start, we understand idea or business of company <br />
                      and the who the users are.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="3"></Col>
                <Col md="6">
                  <div className="single-blk type-1">
                    <div className="v-lineleftBrainstormingdata"></div>
                    <div className="v-linerightBrainstormingdata"></div>
                    <h4>Solving journey</h4>
                    <p>
                      users are main aspect of the business, and by <br />
                      researching we predict their behaviours
                    </p>
                  </div>
                </Col>
                <Col md="3"></Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <section id="craftingthedesignprocess" className="process-section">
        <Container>
          <div className="data-area">
            <div className="data-type-wrapper">
              <div
                className="twin-flex-title d-flex align-items-center justify-content-between"
                data-aos="fade-up"
              >
                <h3 className="craftingd">Crafting the design</h3>
              </div>
              <Row>
                <Col md="6"></Col>
                <Col md="6">
                  <div className="data-img Understandingidea">
                    <Image
                      src={"images/Group-1701.svg"}
                      alt=""
                      className="processBrainstormingdata"
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="0"></Col>
                <Col md="6">
                  <div className="data-type-content" data-aos="fade-up">
                    <div className="single-blk type-2 Understandingidea">
                      <div className="v-lineleftUnderstandingidea"></div>
                      <div className="v-linerightUnderstandingidea"></div>
                      <h4>Idea</h4>
                      <p>
                        At start, we understand idea or business of company
                        <br />
                        and the who the users are.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6"></Col>
              </Row>
              <Row>
                <Col md="4"></Col>
                <Col md="4">
                  <div className="single-blk Understandingidea">
                    <div className="v-lineleftUnderstandingidea"></div>
                    <div className="v-linerightUnderstandingusers"></div>
                    <h4>Users</h4>
                    <p>
                      users are main aspect of the business, and by
                      <br />
                      researching we predict their behaviours
                    </p>
                  </div>
                </Col>
                <Col md="4"></Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <section id="developmentprocess" className="process-section">
        <Container>
          <div className="data-type-wrapper reverse">
            <div
              className="twin-flex-title d-flex align-items-center justify-content-between"
              data-aos="fade-up"
            >
              <h3 className="text-pink-manish">Development</h3>
            </div>
            <div className="data-type-content" data-aos="fade-up">
              <Row>
                <Col md="6">
                  <div className="data-img Brainstormingdata">
                    <Image
                      src={"images/Group-1719.svg"}
                      alt=""
                      className="processBrainstormingdata"
                    />
                  </div>
                </Col>
                <Col md="6"></Col>
              </Row>
              <Row>
                <Col md="6"></Col>
                <Col md="6">
                  <div className="single-blk type-2 Brainstormingdata">
                    <div className="v-lineleftBrainstormingdata"></div>
                    <div className="v-linerightBrainstormingdata"></div>
                    <h4>Finding problem</h4>
                    <p>
                      At start, we understand idea or business of company <br />
                      and the who the users are.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="3"></Col>
                <Col md="6">
                  <div className="single-blk type-1">
                    <div className="v-lineleftBrainstormingdata"></div>
                    <div className="v-linerightBrainstormingdata"></div>
                    <h4>Solving journey</h4>
                    <p>
                      users are main aspect of the business, and by <br />
                      researching we predict their behaviours
                    </p>
                  </div>
                </Col>
                <Col md="3"></Col>
              </Row>
              <div className="center-btn text-center mt-100">
                <Link to="#" className="btn btn-purple">
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Needhelp />
    </>
  );
};
export default Process;

import React, { Component } from "react";
import "./Contact.css";
import { Container, Row, Col, Button, Label, Input } from "reactstrap";
import AOS from "aos";
import axios from "axios";
import Icofont from "react-icofont";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Needhelp from "../components/Needhelp";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactDetail: {
        type: "",
        name: "",
        company: "",
        email: "",
        description: "",
        interested: "UI/UX Design",
        files: "",
      },
      errors: {
        type: "",
        name: "",
        company: "",
        email: "",
        description: "",
        interested: "",
        files: "",
      },
    };
  }

  componentDidMount() {
    document.title = "Contact | Moisture";
    AOS.init({
      disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      delay: 500,
      duration: 1000,
    });
  }
  onSubmit = async (e) => {
    const { contactDetail, errors } = this.state;
    if (
      contactDetail.name == "" ||
      contactDetail.company == "" ||
      contactDetail.email == "" ||
      contactDetail.description == "" ||
      contactDetail.interested == "" ||
      contactDetail.type == ""
    ) {
      this.setState({
        errors: {
          ...errors,
          name: contactDetail.name === "" ? "Full name is required" : "",
          company: contactDetail.company === "" ? "Company is required" : "",
          email:
            contactDetail.email === ""
              ? "Email is required "
              : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                  contactDetail.email
                )
              ? "Invalid email id"
              : "",
          description:
            contactDetail.description === "" ? "Description is required" : "",
          interested:
            contactDetail.interested === "" ? "Interested is required" : "",
          type: contactDetail.type === "" ? "Type is required" : "",
        },
      });
    } else {
      axios
        .post(
          "https://moisturestudio.com/moisturestudioAdmin/api/client/inquiry",
          {
            name: contactDetail.name,
            email: contactDetail.email,
            company: contactDetail.company,
            interested_in: contactDetail.interested,
            project_description: contactDetail.description,
            type: contactDetail.type,
            files: contactDetail.files,
          }
        )
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          // console.log(error);
          // toast.error("validation fail", {
          //   position: "top-right",
          //   autoClose: 5000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
        });
      this.setState({
        contactDetail: {
          ...contactDetail,
          type: "",
          name: "",
          company: "",
          email: "",
          description: "",
          interested: "UI/UX Design",
          files: "",
        },
      });
      toast.success("Contact succesfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  handleChange = (e) => {
    const { contactDetail, errors } = this.state;
    let { value, name } = e.target;
    // console.log(name);
    value = value ? value.trimStart() : "";
    switch (name) {
      case "name":
        errors.name = value === "" ? "Full name is required" : "";
        break;
      case "company":
        errors.company = value === "" ? "Company is required" : "";
        break;
      case "email":
        errors.email =
          value === ""
            ? "Email is required "
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ? "Invalid email id"
            : "";
        break;
      case "description":
        errors.description = value === "" ? "Description is required" : "";
        break;
      case "interested":
        errors.interested = value === "" ? "Interested is required" : "";
        break;
      case "type":
        errors.type = value === "" ? "Type is required" : "";
        break;
      default:
        break;
    }

    this.setState({
      contactDetail: { ...contactDetail, [name]: value },
    });
  };

  _handleImageChange(e) {
    const { contactDetail, errors } = this.state;
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        contactDetail: { ...contactDetail, files: reader.result },
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { contactDetail, errors } = this.state;
    return (
      <>
        <div className="main-area fix">
          <Container>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />

            <Row>
              <div className="hero-area about-pge">
                <div className="hero-content-wrapper">
                  <div className="hero-content-innner-wrapper style-2 style-3 text-center">
                    <div className="lineup-wrapper11">
                      <h1 data-aos="fade-right">
                        <img
                          src={"images/Contact-header.svg"}
                          alt=""
                          className="aboutbanner banner aos-init aos-animate"
                        />
                      </h1>
                    </div>
                    <h2 data-aos="fade-up">
                      We're <span className="text-purple">talkative</span>,
                      <br />
                      So let's start <span className="text-pink">talk</span>
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
              </div>
            </Row>
          </Container>
        </div>
        <section id="servicescontactus">
          <Container>
            <div className="service-two-area">
              <h3 className="sec-title">Our Offices</h3>
              <div className="service-two-flex-wrappernew">
                <Row>
                  <Col md="12">
                    <Col md="6">
                      <div className="contact-two-item" data-aos="fade-up">
                        <h4 className="text-purple contact">India</h4>
                        <ul className="contact-two-list">
                          <li>4033, Silver Business Point,</li>
                          <li> Uttran, Surat, Gujarat - 394105</li>
                          <li>India</li>
                        </ul>
                      </div>
                    </Col>
                    <Col md="4">
                      <div className="contact-two-item" data-aos="fade-up">
                        <h4 className="text-purple contact">Spain</h4>
                        <ul className="contact-two-list">
                          <li>Carrer dels Ferrocarrils Catalans 4 - 3</li>
                          <li> 99 08038 Barcelona</li>
                          <li>Spain</li>
                        </ul>
                      </div>
                    </Col>
                    <Col md="2"></Col>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </section>
        <section id="clientareacontacts">
          <Container>
            <Row>
              <div className="client-area">
                <h3 className="sec-title formtitle">Let's Start discussion</h3>
                <div className="form">
                  <div className="input-inside">
                    <Input
                      type="select"
                      name="type"
                      className=" form-control "
                      onChange={(e) => this.handleChange(e)}
                    >
                      {contactDetail.type == "" ? (
                        <option value="" selected>
                          -- Select Type --
                        </option>
                      ) : (
                        <option value="">-- Select Type --</option>
                      )}
                      {contactDetail.type == "New Projects" ? (
                        <option value="New Projects" selected>
                          New Projects
                        </option>
                      ) : (
                        <option value="New Projects">New Projects</option>
                      )}
                      {contactDetail.type == "Career" ? (
                        <option value="Career" selected>
                          Career
                        </option>
                      ) : (
                        <option value="Career">Career</option>
                      )}
                    </Input>
                    <span className="errors">{errors.type}</span>
                  </div>

                  <div className="input-inside">
                    <Label>What's your full name?</Label>
                    <Input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder=""
                      value={contactDetail.name}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="errors">{errors.name}</span>
                  </div>
                  <div className="input-inside">
                    <Label>Company</Label>
                    <Input
                      type="text"
                      name="company"
                      className="form-control"
                      placeholder=""
                      value={contactDetail.company}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="errors">{errors.company}</span>
                  </div>
                  <div className="input-inside">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder=""
                      value={contactDetail.email}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span className="errors">{errors.email}</span>
                  </div>
                  <div className="input-inside passion">
                    <Label>Interested in</Label>
                    <div className="intersting-sub-wrapper">
                      <Button
                        color="primary"
                        name="interested"
                        onClick={(e) => this.handleChange(e)}
                        className={
                          contactDetail.interested == "UI/UX Design"
                            ? "active"
                            : ""
                        }
                        value="UI/UX Design"
                      >
                        UI/UX Design
                      </Button>
                      <Button
                        color="primary"
                        name="interested"
                        onClick={(e) => this.handleChange(e)}
                        className={
                          contactDetail.interested == "Development"
                            ? "active"
                            : ""
                        }
                        value="Development"
                      >
                        Development
                      </Button>
                      <Button
                        color="primary"
                        name="interested"
                        onClick={(e) => this.handleChange(e)}
                        className={
                          contactDetail.interested == "Website" ? "active" : ""
                        }
                        value="Website"
                      >
                        Website
                      </Button>
                      <Button
                        color="primary"
                        name="interested"
                        onClick={(e) => this.handleChange(e)}
                        className={
                          contactDetail.interested == "App" ? "active" : ""
                        }
                        value="App"
                      >
                        App
                      </Button>
                      <Button
                        color="primary"
                        name="interested"
                        onClick={(e) => this.handleChange(e)}
                        className={
                          contactDetail.interested == "Marketing"
                            ? "active"
                            : ""
                        }
                        value="Marketing"
                      >
                        Marketing
                      </Button>
                      <Button
                        color="primary"
                        name="interested"
                        onClick={(e) => this.handleChange(e)}
                        className={
                          contactDetail.interested == "AI/ML" ? "active" : ""
                        }
                        value="AI/ML"
                      >
                        AI/ML
                      </Button>
                      <Button
                        color="primary"
                        name="interested"
                        onClick={(e) => this.handleChange(e)}
                        className={
                          contactDetail.interested == "Other" ? "active" : ""
                        }
                        value="Other"
                      >
                        Other
                      </Button>
                    </div>
                  </div>
                  <div className="input-inside with-textarea">
                    <div className="tw-flex-wrapper d-flex justify-content-between">
                      <Label>Project description</Label>
                      <Label className="upload-des">
                        <Input
                          type="file"
                          name="file"
                          accept=".pdf,.doc,.jpg,.png,"
                          onChange={(e) => this._handleImageChange(e)}
                        />
                        <Icofont icon="upload" title="File Uploads"></Icofont>
                      </Label>
                    </div>
                    <Input
                      type="textarea"
                      className="form-control"
                      name="description"
                      id="description"
                      cols="30"
                      rows="10"
                      value={contactDetail.description}
                      onChange={(e) => this.handleChange(e)}
                    ></Input>
                    <span className="errors">{errors.description}</span>
                  </div>
                  <div className="text-center mt-30">
                    <button
                      className="btn btn-purple"
                      onClick={(e) => this.onSubmit(e)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <Needhelp />
      </>
    );
  }
}
export default Contact;

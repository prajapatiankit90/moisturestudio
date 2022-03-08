import React, {  useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Contact.css";
import { Container, Row, Col, Label, Input } from "reactstrap";
import AOS from "aos";
import axios from "axios";
import Icofont from "react-icofont";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Needhelp from "../../components/Needhelp";
import MSButton from "../../components/MSButton";
import MSInput from "../../components/MSInput";
import { Link } from "react-router-dom";

const contact = {
  type: "",
  name: "",
  company: "",
  email: "",
  description: "",
  interested: "UI/UX Design",
  files: "",
};
const error = {
  type: "",
  name: "",
  company: "",
  email: "",
  description: "",
  interested: "",
  files: "",
};
const Contact = (props) => {
  const [contactDetail, setContactDetail] = useState(contact);
  const [errors, setError] = useState(error);
  useEffect(() => {
    document.title = "Contact | Moisture";
    AOS.init({
      disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      delay: 500,
      duration: 1000,
    });
  }, []);

  const onSubmit = async (e) => {
    if (
      contactDetail.name === "" ||
      contactDetail.company === "" ||
      contactDetail.email === "" ||
      contactDetail.description === "" ||
      contactDetail.interested === "" ||
      contactDetail.type === ""
    ) {
      setError({
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
      setContactDetail({
        type: "",
        name: "",
        company: "",
        email: "",
        description: "",
        interested: "UI/UX Design",
        files: "",
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

  const handleChange = (e) => {
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

    setContactDetail({ [name]: value });
  };

  const _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setContactDetail({ files: reader.result });
    };

    reader.readAsDataURL(file);
  };
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
                  <Link
                    to="/contact"
                    className="btn btn-purple"
                    data-aos="fade-up"
                  >
                    Contact us
                  </Link>
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
                  <Col md="6">
                    <div className="contact-two-item" data-aos="fade-up">
                      <h4 className="text-purple contact">Spain</h4>
                      <ul className="contact-two-list">
                        <li>Carrer dels Ferrocarrils Catalans 4 - 3</li>
                        <li> 99 08038 Barcelona</li>
                        <li>Spain</li>
                      </ul>
                    </div>
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
                <MSInput
                  labelName=""
                  type="select"
                  name="type"
                  className="form-control"
                  placeholder=""
                  dataValue={contactDetail.type}
                  handleChange={(e) => handleChange(e)}
                  error={errors.type}
                />
                <MSInput
                  labelName="Full Name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder=""
                  dataValue={contactDetail.name}
                  handleChange={(e) => handleChange(e)}
                  error={errors.name}
                />
                <MSInput
                  labelName="Company"
                  type="text"
                  name="company"
                  className="form-control"
                  placeholder=""
                  dataValue={contactDetail.company}
                  handleChange={(e) => handleChange(e)}
                  error={errors.company}
                />
                <MSInput
                  labelName="Email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder=""
                  dataValue={contactDetail.email}
                  handleChange={(e) => handleChange(e)}
                  error={errors.email}
                />
                <div className="input-inside passion">
                  <Label>Interested in</Label>
                  <div className="intersting-sub-wrapper">
                    <MSButton
                      color="primary"
                      name="interested"
                      interested={contactDetail.interested}
                      handleChange={(e) => handleChange(e)}
                      dataValue="UI/UX Design"
                    />
                    <MSButton
                      color="primary"
                      name="interested"
                      interested={contactDetail.interested}
                      handleChange={(e) => handleChange(e)}
                      dataValue="Development"
                    />
                    <MSButton
                      color="primary"
                      name="interested"
                      interested={contactDetail.interested}
                      handleChange={(e) => handleChange(e)}
                      dataValue="Website"
                    />
                    <MSButton
                      color="primary"
                      name="interested"
                      interested={contactDetail.interested}
                      handleChange={(e) => handleChange(e)}
                      dataValue="App"
                    />
                    <MSButton
                      color="primary"
                      name="interested"
                      interested={contactDetail.interested}
                      handleChange={(e) => handleChange(e)}
                      dataValue="Marketing"
                    />
                    <MSButton
                      color="primary"
                      name="interested"
                      interested={contactDetail.interested}
                      handleChange={(e) => handleChange(e)}
                      dataValue="AI/ML"
                    />
                    <MSButton
                      color="primary"
                      name="interested"
                      interested={contactDetail.interested}
                      handleChange={(e) => handleChange(e)}
                      dataValue="Other"
                    />
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
                        onChange={(e) => _handleImageChange(e)}
                      />
                      <Icofont icon="upload" title="File Uploads"></Icofont>
                    </Label>
                  </div>
                  <MSInput
                    type="textarea"
                    className="form-control"
                    name="description"
                    id="description"
                    cols="30"
                    rows="10"
                    dataValue={contactDetail.description}
                    handleChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="text-center mt-30">
                  <MSButton
                    className="btn btn-purple"
                    handleChange={(e) => onSubmit(e)}
                    dataValue="Submin"
                  />
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <Needhelp />
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  
});
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Contact);

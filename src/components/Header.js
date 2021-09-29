import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeMenu: "home",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    document.addEventListener("mousedown", this.handleClickOutside);
    const pathname = window.location.pathname;
    if (pathname == "/") {
      this.setState({
        activeMenu: "home",
      });
    } else {
      let name = pathname.replace("/", "");
      this.setState({
        activeMenu: name,
      });
    }
  }

  handleScroll = () => {
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window
    const navbar = document.querySelector("nav");

    const sections = document.querySelectorAll(".section");
    var scrollDistance = window.scrollY;
    sections.forEach((section, key) => {
      if (
        section.getBoundingClientRect().top <= scrollDistance &&
        section.getBoundingClientRect().top > -150 &&
        section.getBoundingClientRect().top < 50
      ) {
        // setActiveMenu();
        this.setState({
          activeMenu: section.getAttribute("id"),
        });
      }
    });

    if (scrollY > 20) {
      if (navbar.classList.contains("is-sticky") == false) {
        navbar.classList.add("is-sticky");
      }
    } else {
      if (navbar.classList.contains("is-sticky") == true) {
        navbar.classList.remove("is-sticky");
      }
    }
  };

  handleClickOutside = (event) => {
    // if (this.container.current && !this.container.current.contains(event.target)) {
    this.setState({
      isOpen: false,
    });
    // }
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    // setIsOpen();
  };

  render() {
    return (
      <header className="header-area">
        <Navbar expand="lg" fixed={"top"}>
          <Container>
            <NavbarBrand href="/" className="site_logo">
              <img
                src={"images/Small-Logo.svg"}
                className="headerlogo"
                alt="logo"
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}>
              <span></span>
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar className="menu-ul">
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className={this.state.activeMenu == "home" ? "active" : ""}
                    href="/"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={this.state.activeMenu == "about" ? "active" : ""}
                    href="/about"
                  >
                    About
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={
                      this.state.activeMenu == "process" ? "active" : ""
                    }
                    href="/process"
                  >
                    Process
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={this.state.activeMenu == "work" ? "active" : ""}
                    href="/work"
                  >
                    Work
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      this.state.activeMenu == "contact" ? "active" : ""
                    }
                    href="/contact"
                  >
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

export default Header;

import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";
import { Link } from "react-scroll";
import { Button } from '@pantherswap-libs/uikit'
import "./style.css";

const Wrapper = styled.div`
  position: fixed;
  width: 100%;

  left: 0;
  top: 0;
  background: #000;
  .navbars {
    padding: 0 80px;
  }
  .logo {
    color: var(--text-color);
    font-size: 65px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
  .menu-container a {
    color: var(--text-color);
    text-decoration: none;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    font-style: italic;
    padding: 10px 12px;
  }

  .hamburger {
    display: none;
    cursor: pointer;
  }
  
  @media only screen and (max-width: 991px) {
    .navbars {
      padding: 0 50px;
    }
    .logo {
      font-size: 50px;
    }

    .menu-container a {
      font-size: 16px;
      padding: 10px 16px;
      font-style: italic;
    }
  }
  @media only screen and (max-width: 953px) {
    .menu-container a {
      font-size: 15px;
      padding: 10px 8px;
    }
  }
  @media only screen and (max-width: 767px) {
    .navbars {
      padding: 0 30px;
    }
    .menu-container {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;

const Navbar = props => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar((prev) => !prev);
  };

  const menuItem = [
    { 
      text: "My Bulls", 
      url: "mybulls"
    },
    { 
      text: "Buy A Bull", 
      url: "buyabull" 
    },
    {
      text: "How It Works",
      url: "howitworks",
    },
    {
      text: "Roadmap",
      url: "roadmap",
    },
    {
      text: "Team",
      url: "team",
    },
    // {
    //   text: "Connect",
    //   url: "connect",
    // },
  ];

  return (
    <Wrapper>
      <Container fluid className="py-3 navbars" xs={11}>
        <Row>
          <Col xs={6} md={2}>
            <NavLink to="/" smooth={true} duration="500">
              <h1 className="logo">BBC</h1>
            </NavLink>
          </Col>

          <Col
            xs={6}
            md={10}
            className="d-flex justify-content-end align-items-center"
          >
            <div className="menu-container">
              {menuItem.map((el, i) => (
                <Link to={el.url}>
                  <NavLink activeClassName="active" to={el.url} key={i}>
                    {el.text}
                  </NavLink>
                </Link>
              ))}
              <button className = "wallet_button" onClick = {props.shootProps}>
                Connect
              </button>
            </div>
            <GiHamburgerMenu
              className="hamburger"
              size="30"
              color="var(--text-color)"
              onClick={showSidebar}
            />
          </Col>
        </Row>
        {sidebar && <Sidebar menuItem={menuItem} showSidebar={showSidebar} />}
      </Container>
    </Wrapper>
  );
};

export default Navbar;

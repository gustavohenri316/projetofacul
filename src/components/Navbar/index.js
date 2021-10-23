import React from "react";
import "./index.css";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Img,
} from "./NavbarElements";
import {Button ,Form, FormControl} from 'react-bootstrap'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
        <Img className="nav-logo"></Img>
        </NavLink>
        <NavMenu>
          <Form className="d-flex" >
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{borderRadius: "30px", width: "160px", height: "30px", color: "#FFF", backgroundColor: "#eeeeee", border: "none"}}
            />
            <Button variant="outline-success"
            style={{borderRadius: "30px", width: "60px", height: "38px", color: "#FFF", backgroundColor: "#0000ff", border: "none"}}>
              <FaSearch/>
            </Button>
          </Form>

          <NavLink to="/eventos">Eventos</NavLink>
          <NavLink to="/rockinrio">RockInRio</NavLink>
          <NavLink to="/cinema">Cinemas</NavLink>
          <NavLink to="/shows">Shows</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/step1">Cadastrar</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

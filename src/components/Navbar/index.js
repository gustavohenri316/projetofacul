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

const Navbar = () => {
  return (
    <>
      <Nav>
        <Img className="nav-logo" to="/"></Img>
        <NavMenu>
          <Form className="d-flex" >
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{borderRadius: "30px", width: "160px", height: "38px", color: "#000", backgroundColor: "transparent"}}
            />
            <Button variant="outline-success"
            style={{borderRadius: "30px"}}>Search</Button>
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

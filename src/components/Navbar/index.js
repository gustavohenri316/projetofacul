import React from "react";
import "./index.css";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Img, Busca, Icon
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
        <Busca>
        <Form className="d-flex" >
            <FormControl
              type="search"
              placeholder="            Pesquise aqui"
              className="me-2"
              aria-label="Search"
              style={{borderRadius: "30px", width: "200px", height: "40px", color: "#C4C4C4", backgroundColor: "#eeeeee", border: "none"}}
              
            />
           
          </Form>
          <Icon>
          <FaSearch style={{width: "30px", height: "27px", marginLeft: "10px", color:"#FFF", display: " flex"}}/>
          </Icon>
          
              
        </Busca>
        <NavMenu>
          
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

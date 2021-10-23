import React from 'react';
import './index.css'
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLink className="nav-logo" to="/"></NavLink>
          <NavMenu>
          
            <NavLink to='/eventos' >
              Eventos
            </NavLink>
            <NavLink to='/rockinrio' >
              RockInRio
            </NavLink>
            <NavLink to='/cinema' >
              Cinemas
            </NavLink>
            <NavLink to='/shows' >
              Shows
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/step1'>Cadastrar</NavBtnLink>
          </NavBtn>
       
      </Nav>
    </>
  );
};

export default Navbar;

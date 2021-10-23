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
          
            <NavLink to='/eventos' activeStyle>
              Eventos
            </NavLink>
            <NavLink to='/rockinrio' activeStyle>
              Rock In Rio
            </NavLink>
            <NavLink to='/cinema' activeStyle>
              Cinemas
            </NavLink>
            <NavLink to='/shows' activeStyle>
              Shows
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/step1'>Cadastre-se</NavBtnLink>
          </NavBtn>
       
      </Nav>
    </>
  );
};

export default Navbar;

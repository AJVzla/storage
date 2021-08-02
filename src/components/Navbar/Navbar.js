import React from 'react';
import logo from '../../jj.svg';
import './Navbar.sass';


const Navbar = () => (
  <React.Fragment>
    <header className="cabecera">
      <div className="cont-1300">
          <a href="#"><img src={logo} className="logo" alt="JJ" /></a>
         <div className="lista">
          <a href="#">Servicios</a>
          <a href="#">Productos</a>
          <a href="#"><i class="fas fa-shopping-cart"></i></a>
        </div>  
      </div>  
  </header>

  </React.Fragment>
);

export default Navbar;

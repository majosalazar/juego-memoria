import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="title">Juego de Memoria</div>
        <div>
          <button className="btn-reload">
            Reiniciar Juego
          </button>
        </div>
        <div className="title">   
          Intentos:
        </div>
      </header>
    );
  }
};

export default Header;
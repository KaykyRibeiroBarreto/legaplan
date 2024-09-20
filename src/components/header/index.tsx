import React from "react";
import "./styles.scss";
import LogoSvg from '../header/logoSvg'; // Ajuste conforme a estrutura do seu projeto


const Header: React.FC = () => {
  return (
    <header className="header">
  
     <div className="header__logo-container">
              <LogoSvg/>
        <h1 className="header__title">FocalPoint</h1>
      </div>

      {/* Greeting */}
      <div className="header__greeting">
        Bem-vindo de volta, Marcus
      </div>

      {/* Date */}
      <div className="header__date">
        Segunda, 01 de dezembro de 2025
      </div>
    </header>
  );
}

export default Header;

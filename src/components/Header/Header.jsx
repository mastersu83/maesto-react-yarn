import React from "react";
import logo from "../../assets/img/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <img className="header__logo" src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

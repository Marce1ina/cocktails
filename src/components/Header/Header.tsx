import React from "react";
import style from "./Header.module.scss";
import Icon from "../../assets/cocktail.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={style.container}>
      <Link to="/" className={style.logo}>
        <Icon />
      </Link>

      <h1 className={style.title}>Awesome cocktails</h1>

      <Link to="/drink" className={style.randomDrinkButton}>
        Random drink
      </Link>
    </div>
  );
};

export default Header;

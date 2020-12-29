import React from "react";
import style from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>THIS IS THE FOOTER</h1>
    </div>
  );
};

export default Footer;

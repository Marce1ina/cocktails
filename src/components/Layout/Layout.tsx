import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./Layout.module.scss";

const Layout: React.FC = ({ children }) => (
  <div className={style.container}>
    <Header />
    <div className={style.content}>{children}</div>
    <Footer />
  </div>
);

export default Layout;

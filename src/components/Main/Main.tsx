import React from "react";
import CategoryTile from "./CategoryTile/CategoryTile";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <div className={style.container}>
      <CategoryTile category="alcoholic" />
      <CategoryTile category="non-alcoholic" />
    </div>
  );
};

export default Main;

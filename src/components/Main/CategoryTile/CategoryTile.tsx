import React from "react";
import { Link } from "react-router-dom";
import style from "./CategoryTile.module.scss";

interface CategoryTileProps {
  category: "non-alcoholic" | "alcoholic";
}

const CategoryTile: React.FC<CategoryTileProps> = ({ category }) => {
  const handleClick = () => {
    console.log("filter");
  };

  return (
    <Link to="/list">
      <div className={style.container} onClick={handleClick}>
        <img
          className={style.image}
          src={
            category === "alcoholic"
              ? "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
              : "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg/preview"
          }
        />
        <span className={style.category}>{category}</span>
      </div>
    </Link>
  );
};

export default CategoryTile;

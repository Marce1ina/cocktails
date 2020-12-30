import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { setFilter } from "../../../redux/actions";
import style from "./CategoryTile.module.scss";

const mapState = () => ({});
const mapDispatch = { setFilter };

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface CategoryTileProps extends PropsFromRedux {
  category: "non-alcoholic" | "alcoholic";
}

const CategoryTile: React.FC<CategoryTileProps> = ({ category, setFilter }) => {
  const isAlcoholic = category === "alcoholic";
  const isNonAlcoholic = category === "non-alcoholic";

  const handleClick = () => setFilter({ alcoholic: isAlcoholic });

  const imgSrc = isAlcoholic
    ? "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
    : isNonAlcoholic
    ? "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg/preview"
    : undefined;

  return (
    <Link to="/list">
      <div className={style.container} onClick={handleClick}>
        <img className={style.image} src={imgSrc} />
        <span className={style.category}>{category}</span>
      </div>
    </Link>
  );
};

export default connector(CategoryTile);

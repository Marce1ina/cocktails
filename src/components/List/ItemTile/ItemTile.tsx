import React from "react";
import { Link } from "react-router-dom";
import { IDrink } from "../../../interface";
import style from "./ItemTile.module.scss";

interface Props {
  drink: IDrink;
}

const ItemTile: React.FC<Props> = ({ drink }) => {
  return (
    <Link to={`/drink?id=${drink.idDrink}`}>
      <div className={style.itemTile}>
        <p className={style.drinkName}>{drink.strDrink}</p>
        <img src={drink.strDrinkThumb + "/preview"} />
      </div>
    </Link>
  );
};

export default ItemTile;

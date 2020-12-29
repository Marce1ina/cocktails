import React from "react";
import style from "./Item.module.scss";
import { useLocation } from "react-router-dom";
import itemMock from "../../api/itemMock.json";

const drink = itemMock.drinks[0];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Item = () => {
  const query = useQuery();

  // Jak nie ma id to pobrac random

  return (
    <div className={style.container}>
      <div className={style.column}>
        <h1 className={style.title}>{drink.strDrink}</h1>
        <p className={style.ingredients}>
          <b className={style.withMargin}>Ingredients:</b>
          <ul>
            <li>{drink.strIngredient1}</li>
            <li>{drink.strIngredient2}</li>
            <li>{drink.strIngredient3}</li>
          </ul>
        </p>

        <p className={style.description}>
          <b className={style.withMargin}>Preparation:</b>
          {drink.strInstructions}
        </p>
      </div>
      <div className={style.column}>
        <img className={style.image} src={drink.strDrinkThumb + "/preview"} />
        <p className={style.withMargin}>
          <b>Alcoholic: </b>
          {drink.strAlcoholic === "Alcoholic" ? "Yes" : "No"}
        </p>
        <p className={style.withMargin}>
          <b>Category: </b>
          {drink.strCategory}
        </p>
        <p>
          <b>IBA: </b>
          {drink.strIBA}
        </p>
      </div>
    </div>
  );
};

export default Item;

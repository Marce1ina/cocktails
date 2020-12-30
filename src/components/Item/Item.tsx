import React, { useEffect } from "react";
import style from "./Item.module.scss";
import { useLocation } from "react-router-dom";
import {
  getById,
  getRandom,
  resetState,
  setLoading,
} from "../../redux/actions";
import { connect, ConnectedProps } from "react-redux";
import { IState } from "../../interface";

const mapState = (state: IState) => ({
  item: state.item,
  loading: state.loading,
});

const mapDispatch = { getById, getRandom, resetState, setLoading };

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Item: React.FC<Props> = ({
  getById,
  getRandom,
  resetState,
  setLoading,
  item: drink,
  loading,
}) => {
  const query = useQuery();
  const queryId = query ? query.get("id") : null;

  useEffect(() => {
    setLoading();

    const getItem = async () => {
      if (queryId) {
        await getById(queryId);
      } else {
        await getRandom();
      }
    };

    getItem();

    return resetState;
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className={style.container}>
      <div className={style.column}>
        <h1 className={style.title}>{drink.strDrink}</h1>
        <div className={style.ingredients}>
          <b className={style.withMargin}>Ingredients:</b>
          <ul className={style.withMargin}>
            {Object.entries(drink).map(([key, value]) => {
              if (key.startsWith("strIngredient") && value) {
                return <li key={key}>{value}</li>;
              }
            })}
          </ul>
        </div>

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
        {drink.strIBA && (
          <p>
            <b>IBA: </b>
            {drink.strIBA}
          </p>
        )}
      </div>
    </div>
  );
};

export default connector(Item);

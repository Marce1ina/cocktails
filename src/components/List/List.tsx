import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { IState } from "../../interface";
import mockData from "../../api/mocks.json";
import style from "./List.module.scss";
import ItemTile from "./ItemTile/ItemTile";

const mapState = (store: IState): IState => ({
  list: store.list,
  filters: store.filters,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const List: React.FC<Props> = () => {
  return (
    <div className={style.container}>
      {mockData.drinks ? (
        mockData.drinks.map((drink) => (
          <ItemTile key={drink.idDrink} drink={drink} />
        ))
      ) : (
        <p>Error fetching data from the server.</p>
      )}
    </div>
  );
};

export default connector(List);

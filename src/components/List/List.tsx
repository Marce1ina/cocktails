import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { IState } from "../../interface";
import style from "./List.module.scss";
import ItemTile from "./ItemTile/ItemTile";
import {
  getAlcoholic,
  getNonAlcoholic,
  resetState,
  setLoading,
} from "../../redux/actions";

const mapState = (state: IState): IState => ({
  list: state.list,
  filter: state.filter,
  loading: state.loading,
});

const mapDispatch = { getAlcoholic, getNonAlcoholic, resetState, setLoading };

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const List: React.FC<Props> = ({
  list,
  filter,
  loading,
  getNonAlcoholic,
  getAlcoholic,
  resetState,
  setLoading,
}) => {
  useEffect(() => {
    setLoading();

    const getItemsToDisplay = async () => {
      const filterName = Object.keys(filter)[0];
      const filterValue = Object.values(filter)[0];

      if (filterName === "alcoholic") {
        if (filterValue === true) {
          await getAlcoholic();
        }
        if (filterValue === false) {
          await getNonAlcoholic();
        }
      }
    };

    getItemsToDisplay();

    return resetState;
  }, []);

  return (
    <div className={style.container}>
      {loading ? (
        <p>Loading...</p>
      ) : list.length ? (
        list.map((drink) => <ItemTile key={drink.idDrink} drink={drink} />)
      ) : (
        <p>Error fetching data from the server.</p>
      )}
    </div>
  );
};

export default connector(List);

export interface IState {
  list: IDrink[];
  filter: IFilter;
  loading?: boolean;
}
export interface IAction {
  type: string;
  payload?: any;
}
export type Dispatch = React.Dispatch<IAction>;

export interface IDrink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface IFilter {
  alcoholic?: boolean;
}

export interface IList {
  drinks: IDrink[];
}

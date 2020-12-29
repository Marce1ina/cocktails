export interface IState {
  list: object[];
  filters: object[];
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

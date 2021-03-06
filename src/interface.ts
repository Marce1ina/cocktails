export interface IState {
  list: IDrink[];
  filter: IFilter;
  item: Partial<IDrinkDetails>;
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

export interface IDrinkDetails extends IDrink {
  strDrinkAlternate: string | null;
  strDrinkES: string | null;
  strDrinkDE: string | null;
  strDrinkFR: string | null;
  "strDrinkZH-HANS": string | null;
  "strDrinkZH-HANT": string | null;
  strTags: string;
  strVideo: string | null;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string | null;
  strInstructionsFR: string | null;
  "strInstructionsZH-HANS": string | null;
  "strInstructionsZH-HANT": string | null;
  strIngredient1: string;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string | null;
  strImageAttribution: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

export interface IFilter {
  alcoholic?: boolean;
}

export interface IList {
  drinks: IDrink[];
}

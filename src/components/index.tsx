import * as React from "react";
import * as ReactDOM from "react-dom";
// import "./index.css";
import { StoreProvider } from "../store";
import HomePage from "./HomePage";

ReactDOM.render(
  <StoreProvider>
    <HomePage />
  </StoreProvider>,
  document.getElementById("root")
);

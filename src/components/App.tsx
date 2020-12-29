import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { IState } from "../interface";
import Layout from "./Layout/Layout";
import Main from "./Main/Main";
import List from "./List/List";
import Item from "./Item/Item";
import { Switch, Route } from "react-router-dom";

const mapState = (store: IState) => ({});

const connector = connect(mapState);

type IPropsFromRedux = ConnectedProps<typeof connector>;

interface HelloWorldProps extends IPropsFromRedux {}

const App: React.FC<HelloWorldProps> = () => (
  <Layout>
    <Switch>
      <Route path="/list">
        <List />
      </Route>
      <Route path="/drink">
        <Item />
      </Route>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </Layout>
);

export default connector(App);

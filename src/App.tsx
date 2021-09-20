import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header/header";
import ItemList from "./components/item-list/item-list";

function App() {
  return (
  <Router>
    <Header/>
    <ItemList/>
    <Switch>

    </Switch>
    {/* <Footer/> */}
  </Router>
  );
}

export default App;

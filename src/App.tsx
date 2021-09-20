import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header/header";
<<<<<<< HEAD
import ItemList from "./components/item-list/item-list";
=======
import Footer from "./components/footer/footer"
>>>>>>> 747c1b6531590063e00990932492c329c8d58cc4

function App() {
  return (
  <Router>
    <Header/>
    <ItemList/>
    <Switch>

    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;

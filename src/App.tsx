import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/header/header";

function App() {
  return (
  <Router>
    <Header/>
    <Switch>

    </Switch>
    {/* <Footer/> */}
  </Router>
  );
}

export default App;

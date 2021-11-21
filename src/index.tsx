import React from "react";
import ReactDOM from "react-dom";
import "./reset.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./service/authservice";
import { RecoilRoot } from "recoil";
const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App authService={authService} />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

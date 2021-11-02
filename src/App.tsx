import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import MainPage from "./pages/main";
import LoginPage from "./pages/login";
import AuthService from "./service/authservice";
import LoginCallback from "./pages/login-callback";

interface  AppProps{
    authService: AuthService
}

function App({authService}:AppProps) {
    const [loginState, setLoginState] = useState(false)
    useEffect(()=>{
          const loginResult = authService.login()
    setLoginState(loginResult)
    },[])
  

    return (
        <main className="App">
            <Router>
            <Header loginState={loginState} setLoginState={setLoginState}/>
                <Switch>
                    <Route path="/login-callback" render={() => (<LoginCallback authService={authService} setLoginState={setLoginState}  />)}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/" component={MainPage}/>
                </Switch>
                <Footer/>
            </Router>
        </main>
    );
}

export default App;

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
import LoginCallback from "./pages/login-callback";
import AuthService from "./service/authservice";
import { UserInfo } from "./type/UserInfo";

interface AppProps {
    authService: AuthService;
}



function App({authService}:AppProps) {
    const login = async()=>{
        const token =  localStorage.getItem('key')
        // 토큰 있으면 로그인 , 없으면 로그아웃 시켜버리면 됨 
        if (token){
            const loginResult =  await authService.getProfile(token)
            setLoginState(loginResult)
        }
    }

    const [loginState, setLoginState] = useState<UserInfo>(null)
    useEffect(()=>{
        login()  
    },[])
  

    return (
        <main className="App" style={{backgroundColor:'#edece8'}}>
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

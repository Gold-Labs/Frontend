import React, { useEffect } from "react";
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
import { RegisterPage } from "./pages/register";
import {  useSetRecoilState } from "recoil";
import { UserInfoState } from "./state";
import { GoodsPage } from "./pages/goods";

interface AppProps {
    authService: AuthService;
}


function App({authService}:AppProps) {
    const setUserInfo = useSetRecoilState(UserInfoState)

    const login = async()=>{
        const token =  localStorage.getItem('key')
        if (token){
            const loginResult =  await authService.getProfile(token)
            setUserInfo(loginResult)
        }
    }

    useEffect(()=>{
        login()  
    },[])
    

    return (
        <main className="App" style={{backgroundColor:'#edece8'}}>
            <Router>
            <Header/>
                <Switch>
                    <Route path="/login/redirect" render={() => (<LoginCallback authService={authService} />)}/>
                    <Route path="/login" render={() => (<LoginPage authService={authService}/>)}/>
                    <Route path="/goods" component={GoodsPage}/>
                    <Route path="/register" render={()=>(<RegisterPage authService={authService}/>)}/>
                    <Route path="/" component={MainPage}/>
                </Switch>
                <Footer/>
            </Router>
        </main>
    );
}

export default App;

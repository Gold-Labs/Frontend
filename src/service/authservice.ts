
import axios, { AxiosInstance } from "axios";
import { UserInfo } from "../type/UserInfo";

export default class AuthService{
    private instance: AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_TEST+"/auth" ?? process.env.REACT_APP_CLIENT_URL +"/auth",
        })
    }

    async getProfile(token:string){
        const response= await this.instance.get("/profile", {
            headers: {
              'Authorization': `Bearer ${token}`
            }})
        return response.data
    }

    async login(user:UserInfo):Promise<{access_token:string}>{
        
        const response = await this.instance.post("/login",{
            ...user
        })
        return response.data
    }
    async checkDuplicate(email:string){
        try{
            const response = await this.instance.post("/duplicate-check",{
                email
            })
            return response.data
        }catch(err){
            console.log(err)
        }
    }

    async register(payload:{email:string,name:string,password:string}){
        try{
            const response = await this.instance.post('/register',{
                ...payload
            })
            return response.data
        }catch(error){
            console.log(error)
        }
    }

}
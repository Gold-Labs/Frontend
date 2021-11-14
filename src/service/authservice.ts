
import axios, { AxiosInstance } from "axios";

export default class AuthService{
    private instance: AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL: process.env.TEST? process.env.TEST:process.env.REACT_APP_CLIENT_URL,
        })
    }

    async getProfile(token:string){
        const response= await this.instance.get("/profile", {
            headers: {
              'Authorization': `Bearer ${token}`
            }})
        return response.data
    }

    async checkDuplicate(email:string){
        try{
            const response = await this.instance.post("/auth/duplicate-check",{
                email
            })
            return response.data
        }catch(err){
            console.log(err)
        }
    }

    async register(payload:{email:string,name:string,password:string}){
        try{
            const response = await this.instance.post('/auth/register',{
                ...payload
            })
            return response.data
        }catch(error){
            console.log(error)
        }
    }

}
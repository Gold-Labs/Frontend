
import axios, { AxiosInstance } from "axios";

export default class AuthService{
    private instance: AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_CLIENT_URL,
        })
        console.log(process.env.REACT_APP_CLIENT_URL)
    }

    async getProfile(token:string){
        const response= await this.instance.get("/profile", {
            headers: {
              'Authorization': `Bearer ${token}`
            }})
        return response.data
    }
}

import axios, { AxiosInstance } from "axios";

export default class AuthService{
    private instance: AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL: "http://localhost:3000/auth",
        })
    }

    async getProfile(token:string){
        const response= await this.instance.get("/profile", {
            headers: {
              'Authorization': `Bearer ${token}`
            }})
        return response.data
    }
}
import { User } from "./user";

export interface Auth {
    email:string;
    password:string;
}
export interface AuthResponse{
    accessToken:string;
    user:User;
}
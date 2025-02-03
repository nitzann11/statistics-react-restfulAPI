import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { CredentialsModel } from "../Models/CredentialsModel";
import { appConfig } from "../Utils/AppConfig";
import { store, userActions } from "../Redux/state";
import {jwtDecode} from "jwt-decode";

class UserService {
    public constructor() {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decodedToken = jwtDecode<{
                    email: string;
                    first_name: string;
                    last_name: string;
                    role_id: number;
                    user_id: number;
                }>(token);
    
                const user: UserModel = {
                    userId: decodedToken.user_id,
                    firstName: decodedToken.first_name,
                    lastName: decodedToken.last_name,
                    email: decodedToken.email,
                    roleId: decodedToken.role_id,
                };
    
                const action = userActions.login(user);
                store.dispatch(action);
            } catch (err) {
                console.error("Failed to decode token on initialization:", err);
                // Clear invalid token if decoding fails
                localStorage.removeItem("token");
            }
        }
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post(appConfig.loginUrl, credentials);
        const token = response.data; // This contains 'access' and 'refresh'
        
        // Extract the access token
        const accessToken = token.access;
        localStorage.setItem("token", accessToken); // Store only the access token
        console.log("Access Token received:", accessToken); // Debugging
    
        // Decode the access token to get user details
        const decodedToken = jwtDecode<{
            email: string;
            first_name: string;
            last_name: string;
            role_id: number;
            user_id: number;
        }>(accessToken);
        console.log("Decoded Token:", decodedToken); // Debugging
    
        const user: UserModel = {
            userId: decodedToken.user_id,
            firstName: decodedToken.first_name,
            lastName: decodedToken.last_name,
            email: decodedToken.email,
            roleId: decodedToken.role_id,
        };
    
        const action = userActions.login(user);
        store.dispatch(action);
    }
    


    public async register(user: UserModel): Promise<void> {
        try {
            const payload = {
                user_id: user.userId,
                first_name: user.firstName,
                last_name: user.lastName,
                email: user.email,
                password: user.password,
                role_id: user.roleId,
              };
            const response = await axios.post<string>(appConfig.registerUrl, payload);
            console.log("response data:", response.data);
        } catch (error: any) {
            console.error("Registration failed:", error);
            throw new Error(error.response?.data?.message || "Failed to register.");
        }
    }

    public logout(): void {
        localStorage.removeItem("token");
        const action = userActions.logout(null);
        store.dispatch(action);
    }
}

export const userService = new UserService();

import axios from "axios";
import { appConfig } from "../Utils/AppConfig";

class TokenService {
    public async refreshToken(refreshToken: string): Promise<string> {
        try {
            const response = await axios.post<{ access: string }>(appConfig.tokenRefreshUrl, {
                refresh: refreshToken,
            });
            return response.data.access;
        } catch (error: any) {
            console.error("Error refreshing token:", error);
            throw new Error(error.response?.data?.message || "Failed to refresh token.");
        }
    }
}

export const tokenService = new TokenService();

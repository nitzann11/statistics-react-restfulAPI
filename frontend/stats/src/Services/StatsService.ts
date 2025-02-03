import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { VacationModel } from "../Models/VacationModel";
import { TotalUserModel } from "../Models/TotalUserModel";
import { LikesDistributionModel } from "../Models/LikesDistributionModel";
import { TotalLikesModel } from "../Models/TotalLikesModel";

class StatsService {
  // Helper method to retrieve headers with the token
  private getHeaders() {
    const token = localStorage.getItem("token");
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Bearer prefix
        },
      };
    }
    console.warn("No token found in localStorage. Please log in.");
    return {}; // Return empty headers if no token
  }
  
  // Fetch Vacation Stats
  public async getVacationsStats(): Promise<VacationModel> {
    try {
      const response = await axios.get(appConfig.vacationStatsUrl, this.getHeaders());
  
      // Map the backend response to the `VacationModel` structure
      const mappedData: VacationModel = new VacationModel(
        response.data.destination,
        response.data.past_vacations,
        response.data.ongoing_vacations,
        response.data.future_vacations
      );
  
      return mappedData;
    } catch (error: any) {
      console.error("Error fetching vacation stats:", error?.response?.data || error.message);
      throw new Error(error?.response?.data?.message || "Failed to fetch vacation stats.");
    }
  }

  public async getTotalUsers(): Promise<TotalUserModel> {
    try {
      const response = await axios.get(appConfig.userStatsUrl, this.getHeaders());

      // Map the raw response to the TotalUserModel
      const mappedData: TotalUserModel = {
        totalUsers: response.data.total_users, // Map total_users to totalUsers
      };

      return mappedData; // Return the mapped data
    } catch (error:any) {
      console.error("Error fetching total users:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to fetch total users.");
    }
  }

  public async getTotalLikes(): Promise<TotalLikesModel> {
    try {
      const response = await axios.get(appConfig.totalLikesUrl, this.getHeaders());

      // Map the raw response to the TotalLikesModel
      const mappedData: TotalLikesModel = {
        totalLikes: response.data.total_likes, // Map total_likes to totalLikes
      };

      return mappedData; // Return the mapped data
    } catch (error:any) {
      console.error("Error fetching total likes:", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to fetch total likes.");
    }
  }
  

  // Fetch Likes Distribution
  public async getLikesDistribution(): Promise<LikesDistributionModel[]> {
    try {
      const response = await axios.get<LikesDistributionModel[]>(
        appConfig.likesDistributionUrl,
        this.getHeaders() // Pass headers with token
      );
      return response.data;
    } catch (error: any) {
      console.error("Error fetching likes distribution:", error?.response?.data || error.message);
      throw new Error(error?.response?.data?.message || "Failed to fetch likes distribution.");
    }
  }
}

export const statsService = new StatsService();

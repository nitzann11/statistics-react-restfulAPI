import { configureStore, createSlice } from "@reduxjs/toolkit"; // Import required functions from Redux Toolkit
import { setVacationsStats, setTotalUsers, setLikesDistribution, setTotalLikes, login, register, logout } from "./reducers"; // Import reducers
import { VacationModel } from "../Models/VacationModel"; // Import the VacationModel type
import { TotalUserModel } from "../Models/TotalUserModel"; // Import the TotalUserModel type
import { LikesDistributionModel } from "../Models/LikesDistributionModel"; // Import LikesDistributionModel type
import { UserModel } from "../Models/UserModel"; // Import UserModel type
import { TotalLikesModel } from "../Models/TotalLikesModel"; // Import TotalLikesModel type

// Define AppState type
export type AppState = {
  vacationsStats: VacationModel | null; // Stores vacation statistics
  totalUsers: TotalUserModel | null; // Stores total users
  totalLikes: TotalLikesModel | null; // Stores total likes
  likesDistribution: LikesDistributionModel[]; // Stores likes distribution data
  user: UserModel | null; // Stores the logged-in user data
};

// Vacations Stats Slice
const vacationsStatsSlice = createSlice({
  name: "vacationsStats",
  initialState: null as VacationModel | null, // Initial state
  reducers: { setVacationsStats }, // Reducer for setting vacation stats
});

// Total Users Slice
const totalUsersSlice = createSlice({
  name: "totalUsers",
  initialState: null as TotalUserModel | null, // Initial state
  reducers: { setTotalUsers }, // Reducer for setting total users
});

// Total Likes Slice
const totalLikesSlice = createSlice({
  name: "totalLikes",
  initialState: null as TotalLikesModel | null, // Initial state
  reducers: { setTotalLikes }, // Reducer for setting total likes
});

// Likes Distribution Slice
const likesDistributionSlice = createSlice({
  name: "likesDistribution",
  initialState: [] as LikesDistributionModel[], // Initial state
  reducers: { setLikesDistribution }, // Reducer for setting likes distribution
});

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState: null as UserModel | null, // Initial state
  reducers: { login, register, logout }, // Reducers for user authentication actions
});

// Export Actions
export const vacationsStatsActions = vacationsStatsSlice.actions;
export const totalUsersActions = totalUsersSlice.actions;
export const totalLikesActions = totalLikesSlice.actions;
export const likesDistributionActions = likesDistributionSlice.actions;
export const userActions = userSlice.actions;

// Export Reducers
export const vacationsStatsReducer = vacationsStatsSlice.reducer;
export const totalUsersReducer = totalUsersSlice.reducer;
export const totalLikesReducer = totalLikesSlice.reducer;
export const likesDistributionReducer = likesDistributionSlice.reducer;
export const userReducer = userSlice.reducer;

// Configure Store
export const store = configureStore<AppState>({
  reducer: {
    vacationsStats: vacationsStatsReducer,
    totalUsers: totalUsersReducer,
    likesDistribution: likesDistributionReducer,
    user: userReducer,
    totalLikes: totalLikesReducer,
  },
});

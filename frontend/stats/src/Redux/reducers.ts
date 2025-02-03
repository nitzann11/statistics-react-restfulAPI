import { PayloadAction } from "@reduxjs/toolkit";
import { VacationModel } from "../Models/VacationModel";
import { TotalUserModel } from "../Models/TotalUserModel";
import { LikesDistributionModel } from "../Models/LikesDistributionModel";
import { TotalLikesModel } from "../Models/TotalLikesModel";
import { UserModel } from "../Models/UserModel";

// Vacations Stats Reducer
export function setVacationsStats(
  _currentState: VacationModel | null,
  action: PayloadAction<VacationModel>
): VacationModel {
  return action.payload; // Simply return the new vacation stats
}

// Total Users Reducer
export function setTotalUsers(
  _currentState: TotalUserModel | null,
  action: PayloadAction<TotalUserModel>
): TotalUserModel {
  return action.payload; // Simply return the new total users stats
}

// Total Likes Reducer
export function setTotalLikes(
  _currentState: TotalLikesModel | null,
  action: PayloadAction<TotalLikesModel>
): TotalLikesModel {
  return action.payload; // Simply return the new total likes data
}

// Likes Distribution Reducer
export function setLikesDistribution(
  _currentState: LikesDistributionModel[],
  action: PayloadAction<LikesDistributionModel[]>
): LikesDistributionModel[] {
  return action.payload; // Simply return the new likes distribution data
}

// User Reducers
export function login(
  _currentState: UserModel | null,
  action: PayloadAction<UserModel>
): UserModel {
  return action.payload; // Simply return the logged-in user data
}

export function register(
  _currentState: UserModel | null,
  action: PayloadAction<UserModel>
): UserModel {
  return action.payload; // Simply return the registered user data
}

export function logout(
  _currentState: UserModel | null,
  _action: PayloadAction<null>
): null {
  return null; // Clear user data on logout
}

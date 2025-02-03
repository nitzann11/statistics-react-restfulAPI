import React, { useEffect, useState } from "react"; // React hooks for managing state and side effects
import { useDispatch, useSelector } from "react-redux"; // Redux hooks for dispatching actions and selecting state
import { statsService } from "../../../../Services/StatsService"; // Service to fetch statistics
import { totalUsersActions, totalLikesActions, AppState } from "../../../../Redux/state"; // Redux actions and state
import GroupIcon from "@mui/icons-material/Group"; // Material UI icon for Group (total users)
import FavoriteIcon from "@mui/icons-material/Favorite"; // Material UI icon for Likes (total likes)
import styles from "./FirstPanel.module.css"; // CSS module for styling
import { LoadingSpinner } from "../../../LoadingBars/LoadingSpinner/LoadingSpinner"; // Loading spinner component

// FirstPanel component definition
export function FirstPanel(): JSX.Element {
  const dispatch = useDispatch(); // Dispatch function to send actions to the Redux store
  const [loading, setLoading] = useState(true); // State to track loading status

  // Select total users and total likes from Redux store
  const totalUsers = useSelector((state: AppState) => state.totalUsers?.totalUsers || "There was an error while fetching data");
  const totalLikes = useSelector((state: AppState) => state.totalLikes?.totalLikes || "There was an error while fetching data");

  // Fetch statistics on component mount
  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        // Fetch total users and dispatch to Redux store
        const totalUsersData = await statsService.getTotalUsers();
        dispatch(totalUsersActions.setTotalUsers(totalUsersData));

        // Fetch total likes and dispatch to Redux store
        const totalLikesData = await statsService.getTotalLikes();
        dispatch(totalLikesActions.setTotalLikes(totalLikesData));
      } catch (error) {
        console.error("Error fetching statistics:", error); // Log any errors that occur during fetch
      } finally {
        setLoading(false); // Set loading to false after fetching completes
      }
    };

    fetchStatistics(); // Call the fetchStatistics function
  }, [dispatch]); // Re-run the effect when the dispatch function changes

  // If still loading, display the loading spinner
  if (loading) return <LoadingSpinner />;

  return (
    <div className={styles.firstPanel}> {/* Main container for the FirstPanel */}
      <h2 className={styles.heading}>Platform Statistics</h2> {/* Title of the panel */}
      
      {/* Container for stats */}
      <div className={styles.statsContainer}>
        {/* Total Users Stat */}
        <div className={styles.stat}>
          <span className={styles.statLabel}>Total Users:</span> {/* Label for total users */}
          <span className={styles.statValue}>{totalUsers}</span> {/* Value for total users */}
          <GroupIcon style={{ color: "#4caf50", marginRight: "8px" }} /> {/* Group icon with color */}
        </div>

        {/* Total Likes Stat */}
        <div className={styles.stat}>
          <span className={styles.statLabel}>Total Likes:</span> {/* Label for total likes */}
          <span className={styles.statValue}>{totalLikes}</span> {/* Value for total likes */}
          <FavoriteIcon style={{ color: "#e91e63", marginRight: "8px" }} /> {/* Favorite icon with color */}
        </div>
      </div>
    </div>
  );
}

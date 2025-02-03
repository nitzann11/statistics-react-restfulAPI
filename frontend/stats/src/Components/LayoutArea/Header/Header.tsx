import { useSwiper } from "swiper/react"; // Import Swiper hook to control slide navigation
import { useSelector } from "react-redux"; // Use Redux to access the global state
import { useEffect, useState } from "react"; // React hooks for managing state and side effects
import styles from "./Header.module.css"; // Import CSS module for styling
import { AppState } from "../../../Redux/state"; // Import app state type
import { UserModel } from "../../../Models/UserModel"; // Import user model for authentication data
import { userService } from "../../../Services/UserService"; // Service for user-related API calls
import { toastNotify } from "../../../Utils/ToastNotify"; // Utility for displaying notifications

// Material-UI Icons
import HomeIcon from "@mui/icons-material/Home"; // Icon for Home
import BarChartIcon from "@mui/icons-material/BarChart"; // Icon for Statistics
import LoginIcon from "@mui/icons-material/Login"; // Icon for Login
import LogoutIcon from "@mui/icons-material/Logout"; // Icon for Logout
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Icon for Account
import InfoIcon from "@mui/icons-material/Info"; // Icon for About section

/**
 * Header component that includes navigation buttons and user information.
 * Includes buttons for Home, Statistics/Login, and About with respective icons.
 */
export function Header(): JSX.Element {
  const swiper = useSwiper(); // Access swiper instance to control the slides
  const [currentSlide, setCurrentSlide] = useState(0); // State for tracking the current slide
  
  // Access user data from the Redux store
  const user = useSelector<AppState, UserModel | null>((state) => state.user);

  // Function to navigate to a specific slide
  const navigateToSlide = (slideNumber: number): void => {
    swiper.slideTo(slideNumber); // Navigate to the specified slide index
  };

  // Handle logout process
  const handleLogout = async (): Promise<void> => {
    try {
      await userService.logout(); // Call the logout function from the service
      toastNotify.success("Logged out successfully!"); // Show success toast
    } catch (err: any) {
      console.error("Logout failed:", err); // Log error to console
      toastNotify.fail("Failed to log out. Please try again."); // Show failure toast
    }
  };

  // Update current slide index when slide changes
  useEffect(() => {
    const handleSlideChange = () => {
      setCurrentSlide(swiper.activeIndex); // Update the slide index
    };

    swiper.on("slideChange", handleSlideChange); // Add listener for slide change
    return () => {
      swiper.off("slideChange", handleSlideChange); // Cleanup listener on unmount
    };
  }, [swiper]); // Re-run effect if swiper instance changes

  return (
    <header className={styles.header}> {/* Header container */}
      <nav className={styles.navbar}> {/* Navigation bar container */}
        <div className={styles.navButtons}> {/* Navigation buttons container */}
          {/* Home button */}
          <button
            onClick={() => navigateToSlide(0)} // Navigate to slide 0 (Home)
            className={`${styles.navLink} ${currentSlide === 0 ? styles.active : ""}`}
          >
            <HomeIcon fontSize="small" />
            Home
          </button>

          {/* Statistics/Login button */}
          <button
            onClick={() => navigateToSlide(1)} // Navigate to slide 1 (Statistics/Login)
            className={`${styles.navLink} ${currentSlide === 1 ? styles.active : ""}`}
          >
            {user ? (
              <>
                <BarChartIcon fontSize="small" />
                Statistics
              </>
            ) : (
              <>
                <LoginIcon fontSize="small" />
                Login
              </>
            )}
          </button>

          {/* About section button */}
          <button
            onClick={() => navigateToSlide(2)} // Assuming About is on slide 2
            className={`${styles.navLink} ${currentSlide === 2 ? styles.active : ""}`}
          >
            <InfoIcon fontSize="small" /> {/* About icon */}
            About
          </button>
        </div>

        {/* User info section */}
        <div className={styles.userSection}>
          {user ? (
            <>
              {/* Display user greeting if logged in */}
              <AccountCircleIcon fontSize="small" />
              <span className={styles.userGreeting}>
                Hello, {user.firstName} {user.lastName}
              </span>
              <button onClick={handleLogout} className={styles.logoutButton}>
                <LogoutIcon fontSize="small" />
                Logout
              </button>
            </>
          ) : (
            // Display guest message if not logged in
            <span className={styles.userGreeting}>Welcome, Guest</span>
          )}
        </div>
      </nav>
    </header>
  );
}

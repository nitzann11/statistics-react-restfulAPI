import { useEffect, useState } from "react"; // React hooks for managing state and side effects
import { useNavigate } from "react-router-dom"; // React Router hook for navigation
import { LinearProgress, Box, Button } from "@mui/material"; // Material UI components
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Back arrow icon
import styles from "./PageNotFound.module.css"; // CSS module for styling
import pageNotFoundVideo from "../../../assets/videos/pageNotFound.mp4"; // Path to the background video

// PageNotFound component definition
export function PageNotFound(): JSX.Element {
  const navigate = useNavigate(); // Use the navigate function to navigate to other routes
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Simulate a loading process before displaying content (e.g., for assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className={styles.PageNotFound}> {/* Main container for the page */}
      
      {/* Display loading bar while loading */}
      {isLoading && (
        <Box className={styles.loadingOverlay}>
          <LinearProgress className={styles.loadingBar} /> {/* Material UI loading bar */}
        </Box>
      )}

      {/* Page content displayed after loading */}
      {!isLoading && (
        <>
          {/* Background video */}
          <video
            className={styles.videoBackground}
            src={pageNotFoundVideo} // Video path
            autoPlay
            loop
            muted
            playsInline
          />
          
          {/* Overlay content */}
          <div className={styles.contentOverlay}>
            <h1>404 - Page Not Found</h1> {/* Error message */}
            <p>The page you are looking for doesn’t exist.</p> {/* Descriptive text */}

            {/* Button to navigate back to home */}
            <Button
              variant="contained"
              className={styles.backButton}
              startIcon={<ArrowBackIcon />} // Back arrow icon
              onClick={() => navigate("/home")} // Navigate to the home page on click
            >
              Return to Home
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

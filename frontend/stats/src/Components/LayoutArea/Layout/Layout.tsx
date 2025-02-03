import { useState, useEffect } from "react"; // React hooks for managing state and side effects
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper for slide navigation
import { LinearProgress, Box } from "@mui/material"; // Material UI components for loading bar
import "swiper/css"; // Swiper styles import
import { Keyboard, Mousewheel } from "swiper/modules"; // Import Swiper modules for keyboard and mousewheel navigation
import styles from "./Layout.module.css"; // Import CSS module for styling
import { Header } from "../Header/Header"; // Header component
import { Home } from "../../HomeArea/Home/Home"; // Home component
import { AuthForm } from "../../AuthArea/AuthLayout/AuthLayout"; // Auth form component
import { useSelector } from "react-redux"; // Redux selector for accessing global state
import { AppState } from "../../../Redux/state"; // Import AppState type for Redux state
import { StatisticsLayout } from "../../StatisticsArea/StatisticsLayout/StatisticsLayout"; // Statistics page component
import { About } from "../../AboutArea/About/About";

// Layout component definition
export function Layout(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true); // State to manage the loading status
  const user = useSelector((state: AppState) => state.user || null); // Get the user from Redux store, fallback to null if no user is present

  // Simulate a loading time (e.g., fetching user data or assets)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // After 2 seconds, stop the loading state
    }, 2000); // Adjust loading time as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className={styles.layout}> {/* Main container for the layout */}
      
      {/* Loading overlay with progress bar */}
      {isLoading && (
        <Box className={styles.loadingOverlay}>
          <LinearProgress color="primary" className={styles.loadingBar} /> {/* Loading bar */}
        </Box>
      )}

      {/* Swiper content - only shown after loading */}
      {!isLoading && (
        <Swiper
          spaceBetween={0} // No space between slides
          draggable={true} // Allow dragging of slides
          direction="vertical" // Vertical slide direction
          slidesPerView={1} // Only one slide visible at a time
          mousewheel={{
            releaseOnEdges: true, // Enable release at the edges of the swiper
            sensitivity: 1, // Sensitivity of mousewheel scrolling
          }}
          speed={800} // Slide transition speed (800ms)
          keyboard={{
            enabled: true, // Enable keyboard navigation
          }}
          className={styles.mySwiper} // Custom swiper styling
          modules={[Keyboard, Mousewheel]} // Swiper modules for keyboard and mousewheel navigation
        >
          {/* Header Component (always visible at the top) */}
          <Header />

          {/* Home Slide */}
          <SwiperSlide className={styles.slide}>
            <Home />
          </SwiperSlide>

          {/* Auth Slide (only visible if user is not logged in) */}
          {!user && (
            <SwiperSlide className={styles.slide}>
              <AuthForm />
            </SwiperSlide>
          )}

          {/* Statistics Slide (only visible if user is logged in) */}
          {user && (
            <SwiperSlide className={styles.slide}>
              <StatisticsLayout />
            </SwiperSlide>
          )}
          <SwiperSlide className={styles.slide}>
            <About />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}

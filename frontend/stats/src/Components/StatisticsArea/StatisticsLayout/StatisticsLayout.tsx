import { FirstPanel } from "../StatisticsPanels/FirstPanel/FirstPanel"; // Import FirstPanel component
import { SecondPanel } from "../StatisticsPanels/SecondPanel/SecondPanel"; // Import SecondPanel component
import { ThirdPanel } from "../StatisticsPanels/ThirdPanel/ThirdPanel"; // Import ThirdPanel component
import styles from "./StatisticsLayout.module.css"; // Import CSS module for styling
import Typography from "@mui/material/Typography"; // Import Typography from Material UI

// StatisticsLayout component definition
export function StatisticsLayout(): JSX.Element {
  return (
    <div className={styles.statisticsLayout}> {/* Main container for the statistics layout */}
      
      {/* Background video */}
      <video
        className={styles.backgroundVideo} // Style the background video
        src="/src/assets/videos/statistics.mp4" // Explicit path to the video source
        autoPlay // Auto-play the video
        loop // Loop the video indefinitely
        muted // Mute the video
      />
      
      {/* Left side text content */}
      <div className={styles.leftText}>
        <Typography variant="h1" component="h1" className={styles.boldText}>
          Let's
        </Typography>
        <Typography variant="h1" component="h1" className={styles.boldText}>
          see
        </Typography>
        <Typography variant="h1" component="h1" className={styles.boldText}>
          the
        </Typography>
        <Typography variant="h1" component="h1" className={styles.boldText}>
          stats!
        </Typography>
      </div>
      
      {/* Left Container for Panel 1 and Panel 2 */}
      <div className={styles.leftContainer}>
        {/* First Panel */}
        <div className={styles.panel}>
          <FirstPanel /> {/* First Panel Component */}
        </div>
        {/* Second Panel */}
        <div className={styles.panel}>
          <SecondPanel /> {/* Second Panel Component */}
        </div>
      </div>

      {/* Right Panel (Third Panel) */}
      <div className={styles.rightPanel}>
        <ThirdPanel /> {/* Third Panel Component */}
      </div>
    </div>
  );
}

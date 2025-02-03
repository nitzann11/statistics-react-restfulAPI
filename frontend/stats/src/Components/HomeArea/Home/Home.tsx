import styles from "./Home.module.css"; // Import CSS module styles for this component

// Home component definition
export function Home(): JSX.Element {
  return (
    <div className={styles.Home}> {/* Main container for the home page */}
      {/* Video background element */}
      <video
        className={styles.videoBackground} // Video background styling
        src="src/assets/videos/intro.mp4" // Path to the video file
        autoPlay // Auto-play the video as soon as it loads
        loop // Loop the video continuously
        muted // Mute the video (no sound)
        playsInline // Allow the video to play inline on mobile devices
      />

      {/* Overlay content to show on top of the video */}
      <div className={styles.contentOverlay}> 
        {/* Main heading */}
        <h1>Welcome to My Awesome Site</h1>
        {/* Additional text under the heading */}
        <p>Scroll down to explore more!</p>
      </div>
    </div>
  );
}

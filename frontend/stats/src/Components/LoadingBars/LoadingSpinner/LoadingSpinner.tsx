import { CircularProgress } from "@mui/material"; // Import CircularProgress from Material UI
import styles from "./LoadingSpinner.module.css"; // Import CSS module for styling

// LoadingSpinner component definition
export function LoadingSpinner(): JSX.Element {
  return (
    <div className={styles.loader}> {/* Wrapper div for the loader */}
      <CircularProgress size={60} thickness={5} /> {/* Circular progress spinner with custom size and thickness */}
      <p>Loading...</p> {/* Loading text */}
    </div>
  );
}

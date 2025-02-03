import styles from "./About.module.css"; // Import the About module CSS for styling
import meImage from "/src/assets/photos/me.png"; // Correct import path for Vite to access the image

/**
 * About component renders the about section for the user.
 * It includes the user's profile image, a heading "About Me", 
 * and a description of the user's skills and expertise.
 */
export function About(): JSX.Element {
  return (
    <div className={styles.aboutSection}>
      {/* Background Image */}
      <div className={styles.background}></div>

      {/* Overlay for better readability of text */}
      <div className={styles.overlay}></div>

      {/* About Text Content */}
      <div className={styles.aboutText}>
        {/* Profile Image Container */}
        <div className={styles.profileImageContainer}>
          <img src={meImage} alt="About Me" className={styles.profileImage} />
        </div>

        {/* Heading: About Me */}
        <h1>About Me</h1>

        {/* Description of the user */}
        <p>
          I am a 25-year-old full-stack developer with expertise in both front-end and back-end technologies. On the back-end, I specialize in Python, using frameworks like Django and Flask to build scalable and efficient systems. For the front-end, I am skilled in TypeScript/JavaScript, and I develop dynamic, interactive user interfaces with React.
        </p>
      </div>
    </div>
  );
}

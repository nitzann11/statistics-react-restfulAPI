import { useState } from "react";
import { Login } from "../Login/Login"; // Import Login component
import { Register } from "../Register/Register"; // Import Register component
import styles from "./AuthLayout.module.css"; // Import styles for the layout

export function AuthForm(): JSX.Element {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register form

  // Toggle between login and register forms
  const toggleForm = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className={styles.AuthForm}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>

      {/* Conditional rendering based on the isLogin state */}
      {isLogin ? (
        <Login toggleForm={toggleForm} /> // Pass toggleForm to Login component
      ) : (
        <Register toggleForm={toggleForm} /> // Pass toggleForm to Register component
      )}
    </div>
  );
}

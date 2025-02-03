import { useState } from "react";
import { UserModel } from "../../../Models/UserModel";
import { userService } from "../../../Services/UserService";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import styles from "./Register.module.css";
import { toastNotify } from "../../../Utils/ToastNotify";

// Register component definition
export function Register({ toggleForm }: { toggleForm: () => void }): JSX.Element {
  // State to hold user input and validation errors
  const [user, setUser] = useState<UserModel>(new UserModel());
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  // State to control the submit button's enabled/disabled status
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Handle input changes for all fields
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    // Update user data
    setUser((prevUser) => ({ ...prevUser, [name]: value }));

    // Basic validation for required fields and email format
    if (name === "email") {
      const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Regex for email validation
      setErrors((prevErrors) => ({ ...prevErrors, email: !isEmailValid }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: value.trim() === "" }));
    }

    // Check if all fields are valid to enable/disable the button
    setIsButtonDisabled(
      !user.firstName.trim() ||
      !user.lastName.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email) || // Revalidate email here
      !user.password.trim()
    );
  };

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    try {
      // Attempt registration via the userService
      await userService.register(user);
      toastNotify.success("Registration successful! You can now log in.");
      toggleForm(); // Switch to the login form after successful registration
    } catch (err: any) {
      // Show error message if registration fails
      toastNotify.fail(err.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} autoComplete="off">
        {/* Title of the form */}
        <Typography variant="h4" component="h1" className={styles.heading}>
          Register
        </Typography>

        {/* First Name Input */}
        <TextField
          fullWidth
          name="firstName"
          label="First Name"
          variant="outlined"
          value={user.firstName}
          onChange={handleInputChange}
          error={errors.firstName}
          helperText={errors.firstName ? "First name is required." : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Last Name Input */}
        <TextField
          fullWidth
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={user.lastName}
          onChange={handleInputChange}
          error={errors.lastName}
          helperText={errors.lastName ? "Last name is required." : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Email Input */}
        <TextField
          fullWidth
          name="email"
          label="Email"
          variant="outlined"
          value={user.email}
          onChange={handleInputChange}
          error={errors.email}
          helperText={errors.email ? "Enter a valid email address." : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Password Input */}
        <TextField
          fullWidth
          name="password"
          type="password"
          label="Password"
          variant="outlined"
          value={user.password}
          onChange={handleInputChange}
          error={errors.password}
          helperText={errors.password ? "Password is required." : ""}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          margin="normal"
          required
          autoComplete="off"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="success"
          disabled={isButtonDisabled} // Disable button if form is incomplete
          className={styles.registerButton}
        >
          Register
        </Button>

        {/* Toggle to Login Form */}
        <Typography variant="body2" className={styles.toggleSection}>
          Already have an account?{" "}
          <Button
            type="button"
            onClick={toggleForm}
            className={styles.toggleButton}
          >
            Login
          </Button>
        </Typography>
      </form>
    </div>
  );
}

import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CredentialsModel } from "../../../Models/CredentialsModel";
import { userService } from "../../../Services/UserService";
import { toastNotify } from "../../../Utils/ToastNotify";

// Login component definition
export function Login({ toggleForm }: { toggleForm: () => void }): JSX.Element {
  // State hooks for managing form data and UI states
  const [credentials, setCredentials] = useState<CredentialsModel>({
    email: "", // Stores the user's email
    password: "", // Stores the user's password
  });
  const [showPassword, setShowPassword] = useState(false); // Toggles password visibility
  const [hasError, setHasError] = useState(false); // Tracks login error state

  // Handles changes to form input fields
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials((prevState) => ({ ...prevState, [name]: value })); // Updates state with the changed value
    setHasError(false); // Resets the error state when user changes input
  };

  // Handles the form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission
    try {
      // Attempt to log in the user with the provided credentials
      await userService.login(credentials);
      toastNotify.success("Login successfully!"); // Display success toast notification
    } catch (err: any) {
      setHasError(true); // Set error state if login fails
      toastNotify.fail(err); // Display failure toast notification
    }
  };

  // Reusable styles for the input fields
  const inputStyles = {
    margin: "1rem 0", // Adds space between the input fields
    width: "100%", // Ensures inputs take up full width of their container
  };

  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.95)", // Slightly transparent background
        padding: "2rem", // Padding around the form
        borderRadius: "10px", // Rounded corners for the form container
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Box shadow for a floating effect
        maxWidth: "400px", // Max width for the form container
        width: "90%", // Allows form to take up 90% of its container's width
        textAlign: "center", // Centers text and form elements
      }}
    >
      <form onSubmit={handleSubmit}> {/* Handles form submission */}
        <Typography
          variant="h4" // Header style
          component="h1" // Used for the form heading
          sx={{
            fontFamily: "Roboto, sans-serif", // Font styling
            fontWeight: 700, // Bold text
            color: "black", // Black text color
            textAlign: "center", // Centers the heading
            marginBottom: "1.5rem", // Adds margin below the heading
            letterSpacing: "1px", // Letter spacing for better readability
            textTransform: "uppercase", // Converts text to uppercase
          }}
        >
          Login
        </Typography>

        {/* Email input field */}
        <TextField
          type="email" // Email input type
          name="email" // Name attribute for the email field
          label="Email" // Label for the input field
          variant="outlined" // Outlined input style
          value={credentials.email} // Bind the email state to the input value
          onChange={handleInputChange} // Updates email on input change
          required // Makes the field mandatory
          margin="normal" // Standard margin around the field
          error={hasError} // Shows red outline when there's an error
          helperText={hasError ? "Invalid email or password" : ""} // Error message shown when login fails
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon /> {/* Icon before the input */}
              </InputAdornment>
            ),
          }}
          sx={inputStyles} // Reusable styling for input fields
        />

        {/* Password input field */}
        <TextField
          type={showPassword ? "text" : "password"} // Toggles password visibility
          name="password" // Name attribute for the password field
          label="Password" // Label for the input field
          variant="outlined" // Outlined input style
          value={credentials.password} // Bind the password state to the input value
          onChange={handleInputChange} // Updates password on input change
          required // Makes the field mandatory
          margin="normal" // Standard margin around the field
          error={hasError} // Shows red outline when there's an error
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon /> {/* Icon before the password input */}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((prev) => !prev)} // Toggles password visibility
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />} {/* Toggle icon */}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={inputStyles} // Reusable styling for input fields
        />

        {/* Submit button */}
        <Button
          type="submit" // Submits the form
          variant="contained" // Button style
          color="primary" // Primary button color
          fullWidth // Makes the button take full width
          disabled={!credentials.email.trim() || !credentials.password.trim()} // Disable button if fields are empty
          sx={{ marginTop: "1rem" }} // Adds margin to the top of the button
        >
          Login
        </Button>

        {/* Link to toggle between Login and Register forms */}
        <Typography
          variant="body2" // Smaller text for the link
          sx={{
            marginTop: "1rem", // Adds space above the text
            color: "#000", // Black text color
            fontSize: "0.9rem", // Smaller font size for the link
          }}
        >
          Don't have an account?{" "}
          <Button
            type="button" // Button doesn't submit the form
            onClick={toggleForm} // Triggers form toggle
            sx={{
              color: "#1976d2", // Blue color for the link
              textTransform: "none", // No capitalization
              fontWeight: "bold", // Bold text
            }}
          >
            Register
          </Button>
        </Typography>
      </form>
    </Box>
  );
}

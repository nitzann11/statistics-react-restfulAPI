import { Layout } from "../LayoutArea/Layout/Layout"; // Import the Layout component
import { Routes, Route, Navigate } from "react-router-dom"; // Import routing components from react-router-dom
import { PageNotFound } from "./PageNotFound/PageNotFound"; // Import PageNotFound component for invalid routes

// Routing component definition
export function Routing(): JSX.Element {
  return (
    <div className="Routing"> {/* Main container for the routing component */}
      <Routes>
        {/* Redirect from empty path or root to '/home' */}
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Main route for the home page */}
        <Route path="/home" element={<Layout />} />
        
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

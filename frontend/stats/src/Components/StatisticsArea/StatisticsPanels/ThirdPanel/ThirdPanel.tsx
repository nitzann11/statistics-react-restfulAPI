import { useEffect, useState } from "react"; // React hooks for state and side effects
import { Bar } from "react-chartjs-2"; // Import Bar chart from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"; // Import Chart.js components
import { statsService } from "../../../../Services/StatsService"; // Service to fetch vacation statistics
import { VacationModel } from "../../../../Models/VacationModel"; // Vacation model for type safety
import { LoadingSpinner } from "../../../LoadingBars/LoadingSpinner/LoadingSpinner"; // Loading spinner component
import css from "./ThirdPanel.module.css"; // CSS module for styling

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// ThirdPanel component definition
export function ThirdPanel(): JSX.Element {
  const [vacationStats, setVacationStats] = useState<VacationModel | null>(null); // State to store vacation statistics
  const [loading, setLoading] = useState(true); // Loading state to track data fetching
  const [error, setError] = useState<string | null>(null); // Error state to manage API errors

  // Fetch vacation statistics from the API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const stats = await statsService.getVacationsStats(); // Fetch statistics from API

        // Ensure the response is valid
        if (!stats || typeof stats !== "object") {
          throw new Error("Invalid response from API");
        }

        setVacationStats(stats); // Set vacation statistics in state
      } catch (err) {
        console.error("Error fetching vacation stats:", err);
        setError("Failed to load vacation statistics."); // Set error message if fetching fails
      } finally {
        setLoading(false); // Stop loading after data is fetched or error occurs
      }
    };

    fetchStats(); // Call the fetch function on component mount
  }, []); // Empty dependency array ensures this runs once on mount

  // Show loading spinner if data is still being fetched
  if (loading) return <LoadingSpinner />;

  // Show error message if fetching data fails
  if (error) return <div className={css.errorMessage}>{error}</div>;

  // Ensure vacationStats is not null before rendering the chart
  if (!vacationStats) return <div className={css.errorMessage}>No data available</div>;

  // Chart.js data configuration
  const data = {
    labels: ["Past Vacations", "Ongoing Vacations", "Future Vacations"], // Labels for the bar chart
    datasets: [
      {
        label: "Vacations", // Dataset label
        data: [
          vacationStats?.pastVacations ?? 0, // Safe optional chaining and fallback to 0 if undefined
          vacationStats?.ongoingVacations ?? 0,
          vacationStats?.futureVacations ?? 0,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Colors for each bar
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Border color for each bar
        borderWidth: 1, // Border width for bars
      },
    ],
  };

  // Chart.js options for customization
  const options = {
    responsive: true, // Make the chart responsive to window resizing
    plugins: {
      legend: { position: "top" as const }, // Position the legend at the top
      title: { display: true, text: `Vacation Stats (${vacationStats.destination ?? "Unknown"})` }, // Display title with dynamic destination name
    },
    scales: { y: { beginAtZero: true } }, // Start y-axis from zero
  };

  return (
    <div className={css.thirdPanel}> {/* Container for the third panel */}
      <h2>Vacation Statistics</h2> {/* Heading for the panel */}
      <Bar data={data} options={options} /> {/* Render the Bar chart with data and options */}
    </div>
  );
}

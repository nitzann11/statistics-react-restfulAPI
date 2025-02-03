import React, { useEffect, useState } from "react"; // React hooks for managing state and side effects
import { Pie } from "react-chartjs-2"; // Import Pie chart component from react-chartjs-2
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"; // Import necessary Chart.js components
import { statsService } from "../../../../Services/StatsService"; // Service to fetch statistics
import styles from "./SecondPanel.module.css"; // Import CSS module for styling
import { LoadingSpinner } from "../../../LoadingBars/LoadingSpinner/LoadingSpinner"; // Import the LoadingSpinner component

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// SecondPanel component definition
export function SecondPanel(): JSX.Element {
  const [likesDistribution, setLikesDistribution] = useState<number[]>([]); // State for likes distribution values
  const [labels, setLabels] = useState<string[]>([]); // State for labels (destination names)
  const [loading, setLoading] = useState(true); // Loading state to manage spinner visibility

  // Fetch the likes distribution data from the API on component mount
  useEffect(() => {
    const fetchLikesDistribution = async () => {
      try {
        const distributionData = await statsService.getLikesDistribution(); // Fetch data from the stats service

        // Map the API response to labels and values
        const extractedLabels = distributionData.map((item) => item.destination);
        const extractedValues = distributionData.map((item) => item.likes);

        setLabels(extractedLabels); // Set the extracted labels (destinations)
        setLikesDistribution(extractedValues); // Set the extracted values (likes count)
      } catch (error) {
        console.error("Error fetching likes distribution:", error); // Log any error that occurs during the fetch
      } finally {
        setLoading(false); // Set loading to false after the fetch completes
      }
    };

    fetchLikesDistribution(); // Call the fetch function on mount
  }, []); // Empty dependency array ensures this runs only once on mount

  // If data is still loading, show the loading spinner
  if (loading) return <LoadingSpinner />;

  // Chart.js data configuration for the pie chart
  const data = {
    labels: labels.length > 0 ? labels : ["No Data"], // Set labels for the chart, fallback to "No Data" if empty
    datasets: [
      {
        label: "Likes Distribution", // Label for the dataset
        data: likesDistribution.length > 0 ? likesDistribution : [1], // Set data for the pie chart, fallback to 1 if empty
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF5722", "#9C27B0", // Colors for each segment
          "#00BCD4", "#E91E63", "#CDDC39", "#FFC107", "#795548", "#607D8B",
          "#3F51B5", "#8BC34A", "#F44336", "#2196F3", "#009688",
        ],
        borderColor: "#FFFFFF", // White border color for chart segments
        borderWidth: 2, // Border width for each chart segment
      },
    ],
  };

  // Chart.js options for customizing the chart's appearance and behavior
  const options = {
    responsive: true, // Make the chart responsive to window resizing
    plugins: {
      legend: {
        position: "top" as const, // Position of the legend (top of the chart)
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
  };

  return (
    <div className={styles.secondPanel}> {/* Main container for the second panel */}
      <h2 className={styles.heading}>Likes Distribution</h2> {/* Title of the panel */}
      <div className={styles.chartContainer}> {/* Container for the pie chart */}
        <Pie data={data} options={options} /> {/* Render the Pie chart with the given data and options */}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import DynamicTable from "./components/DynamicTable";

function App (){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      // Use Mock Api For the Data
      const response = await fetch(
        "https://630ee9c4379256341883572e.mockapi.io/Beach"
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

// In place of Api We Use a Static Data Of Array

  return (
    <div style={{ padding: "20px" }} className="text-center">
      <h1>Dynamic Table with API Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <DynamicTable data={data} />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default App;

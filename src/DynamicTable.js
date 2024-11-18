import React from "react";

const DynamicTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header} style={{ padding: "8px", backgroundColor: "#f4f4f4" }}>
              {header.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header} style={{ padding: "8px", textAlign: "center" }}>
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;

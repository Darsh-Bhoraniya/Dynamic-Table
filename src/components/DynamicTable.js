import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "./DynamicTable.css"; // Import custom styles

const DynamicTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-muted mt-4">No data available</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="table-container container my-4">
      <table className="table table-bordered table-striped table-hover shadow-sm rounded">
        <thead className="bg-primary text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="text-center align-middle">
                {header.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="table-row">
              {headers.map((header) => (
                <td key={header} className="text-center align-middle">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;

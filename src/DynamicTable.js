import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const DynamicTable = ({ data }) => {
  const headers = Object.keys(data[0]);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            {headers.map((header) => (
              <th key={header} className="text-center">
                {header.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header} className="text-center">
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

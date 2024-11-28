import React from "react";

const TotalDataComponent = ({ messageSent }) => {
  return (
    <div className="requested-data-container">
      <h1>Total Data</h1>

      {/* Display data in tabular format */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Product/Service</th>
            <th>Company</th>
            <th>City</th>
            <th>Sent At</th>
          </tr>
        </thead>
        <tbody>
          {[...messageSent]
            .sort((a, b) => new Date(b.sentAt) - new Date(a.sentAt))
            .map((message, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{message.name}</td>
                <td>{message.mobileNumber}</td>
                <td>{message.productOrService}</td>
                <td>{message.companyName}</td>
                <td>{message.cityname}</td>
                <td>{new Date(message.sentAt).toLocaleString()}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TotalDataComponent;

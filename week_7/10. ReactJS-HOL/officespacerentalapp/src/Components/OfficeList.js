import React from 'react';

const OfficeList = () => {
  const heading = "Office Space";
  const officeSpaces = [
    {
      id: 1,
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: "image.png"
    },
    {
      id: 2,
      name: "SmartWorks",
      rent: 65000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      name: "WeWork",
      rent: 58000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1581090700227-4c4cf3c6ebd4?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>{heading}, at Affordable Range</h1>

      {officeSpaces.map((office) => (
        <div
          key={office.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "8px",
            maxWidth: "500px"
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            width="100%"
            height="250"
            style={{ objectFit: "cover", borderRadius: "5px" }}
          />
          <h2>Name: {office.name}</h2>
          <h3 style={{ color: office.rent <= 60000 ? "red" : "green" }}>
            Rent: Rs. {office.rent}
          </h3>
          <h3>Address: {office.address}</h3>
        </div>
      ))}
    </div>
  );
};

export default OfficeList;

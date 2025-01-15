import React, { useState } from "react";
import { OEM_SPECS } from "../data/mockData";

const OEMSpecsSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = OEM_SPECS.filter((spec) =>
      spec.modelName.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="oem-search">
      <h2>Search OEM Specifications</h2>
      <input
        type="text"
        placeholder="Search by model name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((spec) => (
          <li key={spec.id}>
            <strong>{spec.modelName} ({spec.year})</strong> - 
            Price: {spec.listPrice}, Mileage: {spec.mileage}, Power: {spec.power}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OEMSpecsSearch;

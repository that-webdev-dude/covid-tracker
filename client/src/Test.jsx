import React, { useEffect, useState } from "react";

const App = () => {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/countries/name/Italy");
        if (response.ok) {
          const data = await response.json();
          setCountry(data);
        } else {
          throw new Error("Error fetching country data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {country ? (
        <div>
          <h1>Country: {country.name}</h1>
          <p>Code: {country.code}</p>
          <p>flag: {country.img}</p>
          {/* Add other properties as needed */}
        </div>
      ) : (
        <p>Loading country data...</p>
      )}
    </div>
  );
};

export default App;

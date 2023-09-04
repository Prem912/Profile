import React, { useState, useEffect } from "react";

function DataFetcherHooks() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())

      .then((data) => setData(data))

      .catch((error) => console.error("Error:", error));

    return () => {};
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default DataFetcherHooks;

import './App.css';
import Faq from './components/Faq';
import React, { useState, useEffect } from "react";

function App() {

  // A state variable to store the JSON data
  const [data, setData] = useState(null);

  // A function that fetches the JSON data from the backend
  async function fetchData() {
    // The URL of the backend route
    const url = "http://localhost:3000/learning";

    // Make a request and get a response
    const response = await fetch(url);

    // Extract the JSON data from the response
    const data = await response.json();

    // Store the data in the state variable
    setData(data);
  }

  // Use useEffect to call fetchData once when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>JSON Data from Backend</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

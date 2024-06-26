/*import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BookData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Book Name..." data={BookData} />
    </div>
  );
}

export default App;*/
/*
import React, { useState } from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (searchType, searchQuery) => {
    // Implement your search logic here.
    // For demonstration, we're just logging the search type and query.
    console.log(`Searching for ${searchQuery} by ${searchType}`);
    // Update the results state with your search results.
    // setResults(searchResults);
  };

  return (
    <div>
      <h1>Search</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        { Render your search results here }
        {results.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
*/
import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import AdvisorData from "./Data.json"; // Replace with your actual data source

function App() {
  return (
    <div className="App">
      <h1>Advisor-info</h1>
      <SearchBar placeholder="Search an advisor" data={AdvisorData} />
    </div>
  );
}

export default App;
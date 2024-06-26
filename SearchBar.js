import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [searchType, setSearchType] = useState('advisor_name'); // Default search type

  // Handle filter function
  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase();
    setWordEntered(searchWord);

    if (!data) {
      setFilteredData([]);
      return;
    }

    const newFilter = data.filter((value) => {
      const fieldValue = value[searchType] ? value[searchType].toLowerCase() : ""; // Handle undefined value
      return fieldValue.includes(searchWord); // Check if fieldValue exists before calling includes
    });

    setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
    setWordEntered(""); // Clear the input when switching search types
    setFilteredData([]); // Clear filtered results when switching search types
  };

  return (
    <div className="search">
      <FormControl component="fieldset">
        <FormLabel component="legend">Search By</FormLabel>
        <RadioGroup row aria-label="searchType" name="searchType" value={searchType} onChange={handleSearchTypeChange}>
          <FormControlLabel value="advisor_name" control={<Radio />} label="Advisor Name" />
          <FormControlLabel value="emp_id" control={<Radio />} label="Employee ID" />
          <FormControlLabel value="rep_code" control={<Radio />} label="Rep Code" />
        </RadioGroup>
      </FormControl>
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter} // Attach handleFilter to onChange event of input
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => (
            <a className="dataItem" href={value.link} target="_blank" rel="noopener noreferrer" key={key}>
              <p>{value.title} </p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
/*
import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
*/
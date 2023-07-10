import "./Autocomplete.css";
import React, { useState, useEffect } from "react";

const Autocomplete = ({ userOptions = [], onUserSelection }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = () => {
      let filteredSuggestions = [];
      if (!inputValue) {
        setSuggestions([]);
        return;
      } else {
        filteredSuggestions = userOptions.filter((option) => {
          return option.name.toLowerCase().startsWith(inputValue.toLowerCase());
        });

        if (
          filteredSuggestions.length === 1 &&
          filteredSuggestions[0].name === inputValue
        ) {
          setSuggestions([]);
        } else {
          setSuggestions(filteredSuggestions);
        }
      }
    };
    fetchSuggestions();
  }, [inputValue]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleClearButtonClick = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  const handleSuggestionClick = (e, suggestion) => {
    e.preventDefault();
    setInputValue(suggestion.name);
    onUserSelection(suggestion.name);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="add a country..."
      />

      <button onClick={handleClearButtonClick}>clear</button>

      {inputValue !== "" && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={(e) => handleSuggestionClick(e, suggestion)}
            >
              <img src={suggestion.img} alt={`${suggestion.name}'s Flag`} />
              <span>{suggestion.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;

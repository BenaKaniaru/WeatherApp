import React from "react";
import { useState, useEffect } from "react";
export default function SearchBar({
  setLocationData,
  locationData,
  setCurrentWeatherData,
  setError,
  error,
  setLoading,
  setForecastData,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [lastSearchInput, setLastSearchInput] = useState("Nairobi");
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";

  const fetchWeatherData = async (searchInput) => {
    setLoading(true);
    setError(""); //clear previous error message before fetching new data
    try {
      const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${searchInput}&days=7`
      );
      if (!response.ok) {
        throw new Error("City not found!");
      }
      const data = await response.json();
      setLocationData(data.location);
      setCurrentWeatherData(data.current);
      setForecastData(data.forecast);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeatherData(lastSearchInput); //Fetches data when lastSearchInput changes
    const interval = setInterval(() => {
      fetchWeatherData(lastSearchInput);
      console.log(locationData);
    }, 180000); //refreshes the data every three minutes
    return () => clearInterval(interval);
  }, [lastSearchInput]); //runs when lastSearchInput Changes

  function handleSubmit(e) {
    e.preventDefault();
    if (searchInput.trim() === "") {
      alert("Your Search Input is Empty!");
      return;
    }

    fetchWeatherData(searchInput);
    setLastSearchInput(searchInput); //updates the search city
    setSearchInput(""); //clear search input after fetching data
  }
  return (
    <div className="w-full px-2 md:px-10 max-w-2xl mx-auto">
      <form
        className="flex w-full max-w-[600px] mx-2 md:mx-10`"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full max-w-[600px] mx-auto">
          <input
            name="searchInput"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            placeholder="search for city"
            type="text"
            className="text-white p-1 md:p-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 border-1 !border-blue-500 focus:ring-blue-500"
          />
          <button
            type="submit"
            className=" !bg-blue-500 !rounded-l-none rounded-lg text-white p-2 md:p-2 w-10 h-8 md:h-10"
          >
            <img
              className="w-4 md:w-6"
              src="/search-interface-symbol.png"
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  );
}

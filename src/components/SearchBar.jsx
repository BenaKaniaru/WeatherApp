import { useState, useEffect } from "react";
export default function SearchBar({
  className,
  setLocationData,
  locationData,
  setCurrentWeatherData,
  setError,
  setLoading,
  setForecastData,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [lastSearchInput, setLastSearchInput] = useState("Nairobi");
  const URLBase = "https://api.weatherapi.com/v1/forecast.json?";
  const API_Key = "95774121798f41b5b7d121517251802";

  const fetchWeatherData = async (searchInput) => {
    setLoading(true);
    setError(""); //clear previous error message before fetching new data
    try {
      const response = await fetch(`${URLBase}key=${API_Key}&q=${searchInput}`);
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
    }, 60000); //fetches data every 60 seconds
    return () => clearInterval(interval);
  }, [lastSearchInput]); //runs when lastSearchInput Changes

  function handleSubmit(e) {
    e.preventDefault();
    if (searchInput.trim() === "") {
      setError("Your Search Input is Empty!");
      console.log("Your Search Input is Empty!");
      return;
    }

    fetchWeatherData(searchInput);
    setLastSearchInput(searchInput); //updates the search city
    setSearchInput(""); //clear search input after fetching data
  }
  return (
    <form className={`flex ${className} mx-10`} onSubmit={handleSubmit}>
      <input
        name="searchInput"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        placeholder="search for city"
        type="text"
        className="bg-green-white text-white p-2 rounded-l-lg flex-1 focus:outline-none focus:ring-2 border-1 !border-blue-500 focus:ring-blue-500"
      />
      <button
        type="submit"
        className=" !bg-blue-500 !rounded-l-none rounded-lg text-white  px-2 py-2"
      >
        Search
      </button>
    </form>
  );
}

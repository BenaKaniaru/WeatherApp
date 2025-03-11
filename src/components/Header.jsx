import React from "react";
import githubLogo from "../assets/github.png";
import SearchBar from "./SearchBar";
export default function Header({
  setLocationData,
  setCurrentWeatherData,
  locationData,
  setError,
  error,
  setLoading,
  setForecastData,
}) {
  return (
    <header className="flex items-center p-4 bg-gray-800 w-full fixed left-0 right-0 top-0 justify-between z-12">
      <p className="text-blue-500 font-bold md:text-xl lg:text-2xl w-24 md:w-32 lg:w-60">
        AngaPro
      </p>
      <SearchBar
        setLocationData={setLocationData}
        locationData={locationData}
        setCurrentWeatherData={setCurrentWeatherData}
        setForecastData={setForecastData}
        setError={setError}
        error={error}
        setLoading={setLoading}
      />
      <nav className="w-20 md:w-40 flex justify-end px-4">
        <ul>
          <li>
            <img className="w-8" src={githubLogo} alt="github logo" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

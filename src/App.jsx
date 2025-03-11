import React, { useState } from "react";
import Header from "./components/Header";
import WeatherDashboard from "./components/WeatherDashboard";
import { TrophySpin } from "react-loading-indicators";

function App() {
  const [locationData, setLocationData] = useState({});
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-gray-600 min-h-screen flex flex-col items-center">
      <Header
        setLocationData={setLocationData}
        locationData={locationData}
        setCurrentWeatherData={setCurrentWeatherData}
        setForecastData={setForecastData}
        setError={setError}
        error={error}
        setLoading={setLoading}
      />

      {/* Display Loading Animation Over the Content when data is loading */}

      <div className={loading ? "fixed top-60 z-10" : "hidden"}>
        <TrophySpin
          color={["black", "blue", "green", "red"]}
          size="large"
          easing="ease-in-out"
          speedPlus="-1"
          text="Loading..."
          textColor="white"
        />
      </div>

      {/*Display error message if an error occurs*/}

      <div className={error ? "text-red-500" : "hidden"}>
        <span>Error: {error}</span>
      </div>

      {/* Keep WeatherDashboard in the DOM to prevent flickering */}
      <WeatherDashboard
        locationData={locationData}
        currentWeatherData={currentWeatherData}
        forecastData={forecastData}
        error={error}
        loading={loading}
      />
    </div>
  );
}

export default App;

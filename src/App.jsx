import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import WeatherDashboard from "./components/WeatherDashboard";
function App() {
  const [locationData, setLocationData] = useState({});
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  console.log("forecastDataApp:", forecastData);
  console.log("locationDataApp:", locationData);
  return (
    <div className="bg-gray-600 min-h-screen">
      <Header
        setLocationData={setLocationData}
        locationData={locationData}
        setCurrentWeatherData={setCurrentWeatherData}
        setForecastData={setForecastData}
        setError={setError}
        error={error}
        setLoading={setLoading}
      />
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

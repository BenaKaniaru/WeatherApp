import React from "react";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import WeatherHighlights from "../components/WeatherHighlights";
export default function WeatherDashboard({
  currentWeatherData,
  forecastData,
  locationData,
  error,
  loading,
}) {
  return (
    <div className="grid md:grid-cols-[0.5fr_2fr] gap-2 items-start mt-3 ">
      <CurrentWeatherCard
        locationData={locationData}
        currentWeatherData={currentWeatherData}
        forecastData={forecastData}
        error={error}
        loading={loading}
      />

      <WeatherHighlights
        currentWeatherData={currentWeatherData}
        forecastData={forecastData}
      />
    </div>
  );
}

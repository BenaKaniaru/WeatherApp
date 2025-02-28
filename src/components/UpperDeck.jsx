import React from "react";
import SunCard from "./SunCard";
import UVCard from "./UVCard";
import WindCard from "./WindCard";

export default function WeatherHighlights({
  currentWeatherData,
  forecastData,
}) {
  return (
    <div className="flex flex-row gap-2 mr-4">
      <WindCard
        currentWeatherData={currentWeatherData}
        forecastData={forecastData}
      />
      <UVCard currentWeatherData={currentWeatherData} />
      <SunCard forecastData={forecastData} />
    </div>
  );
}

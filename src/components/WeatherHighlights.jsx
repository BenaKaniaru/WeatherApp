import React from "react";
import UpperDeck from "./UpperDeck";
import LowerDeck from "./LowerDeck";
import MiddleDeck from "./MiddleDeck";
import BelowDeck from "./BelowDeck";
export default function WeatherHighlights({
  currentWeatherData,
  forecastData,
}) {
  return (
    <div className="grid gap-4 ml-4 md:ml-0 pb-3">
      <UpperDeck
        currentWeatherData={currentWeatherData}
        forecastData={forecastData}
      />
      <MiddleDeck forecastData={forecastData} />
      <LowerDeck
        currentWeatherData={currentWeatherData}
        forecastData={forecastData}
      />

      <BelowDeck forecastData={forecastData} />
    </div>
  );
}

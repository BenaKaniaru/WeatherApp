import UpperDeck from "./UpperDeck";
import LowerDeck from "./LowerDeck";
export default function WeatherHighlights({
  currentWeatherData,
  forecastData,
}) {
  console.log("currentWeatherDatahigh:", currentWeatherData);
  return (
    <div className="grid gap-4">
      <UpperDeck
        currentWeatherData={currentWeatherData}
        forecastData={forecastData}
      />
      <LowerDeck
        currentWeatherData={currentWeatherData}
        forecastData={forecastData}
      />
    </div>
  );
}

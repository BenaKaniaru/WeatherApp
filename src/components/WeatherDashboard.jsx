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
    <div className="grid grid-cols-[0.5fr_2fr] gap-10 items-start mt-4">
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

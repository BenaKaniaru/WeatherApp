export default function FeelsLike({ currentWeatherData }) {
  let feelsLikeReason;

  if (currentWeatherData.feelslike_c < currentWeatherData.temp_c) {
    if (currentWeatherData.wind_kph > 15) {
      feelsLikeReason = "Feels colder due to strong winds.";
    } else if (currentWeatherData.humidity < 30) {
      feelsLikeReason = "Feels cooler due to dry air.";
    } else {
      feelsLikeReason = "Feels slightly cooler than the actual temperature.";
    }
  } else if (currentWeatherData.feelslike_c > currentWeatherData.temp_c) {
    if (currentWeatherData.humidity > 70) {
      feelsLikeReason = "Feels hotter due to high humidity.";
    } else if (
      currentWeatherData.wind_kph < 5 &&
      currentWeatherData.condition.text === "sunny"
    ) {
      feelsLikeReason = "Feels warmer due to direct sunlight and low wind.";
    } else {
      feelsLikeReason = "Feels slightly warmer than the actual temperature.";
    }
  } else {
    feelsLikeReason = "Feels about the same as the actual temperature.";
  }

  return (
    <div className="text-white bg-gray-800 rounded-lg p-4 shadow-2xl">
      <p className="font-light mb-4">Feels Like</p>
      <div className="flex justify-between items-end">
        <div className="flex items-end">
          <img
            className="w-6 h-6 "
            src="/temperature.png"
            alt="Temperature Icon"
          />
          <span className="text-2xl font-semibold">
            {currentWeatherData.feelslike_c}
          </span>
          <span className="text-sm font-light">
            <sup>o</sup>C
          </span>
        </div>

        <span className="text-xs ml-12 text-white font-light">
          {feelsLikeReason}
        </span>
      </div>
    </div>
  );
}

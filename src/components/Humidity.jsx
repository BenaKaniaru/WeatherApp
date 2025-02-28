export default function Humidity({ currentWeatherData }) {
  return (
    <div className="text-white bg-gray-800 rounded-lg p-4 shadow-2xl">
      <p className="font-light mb-4">Humidity</p>
      <div className="flex justify-between items-end">
        <div>
          <span className="text-2xl font-semibold">
            {currentWeatherData.humidity}
          </span>
          <span className="text-sm font-light">%</span>
        </div>

        <span className="text-xs ml-6 font-light">
          The dew point is {currentWeatherData.dewpoint_c}
          <sup className="text-xs">o</sup> right now
        </span>
      </div>
    </div>
  );
}

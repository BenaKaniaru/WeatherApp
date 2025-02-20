export default function WindCard({ currentWeatherData, forecastData }) {
  console.log("forecastDatainWinf:", forecastData);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-xl shadow-2xl">
      <p className="text-sm pb-2">Wind Status</p>
      <img src="/Wind.png" alt="wind graph" />
      <p className="text-2xl font-semi-bold">
        {currentWeatherData.wind_kph}
        <span className="text-sm font-light"> km/h</span>
      </p>
    </div>
  );
}

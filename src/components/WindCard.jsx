export default function WindCard({ currentWeatherData, forecastData }) {
  console.log("forecastDatainWinf:", forecastData);
  return (
    <div className="bg-gray-800 text-white p-1 md:p-4 rounded-xl shadow-2xl">
      <p className="text-xs md:text-sm font-light pb-2">Wind Status</p>
      <img src="/Wind.png" alt="wind graph" />
      <p className="text-sm md:text-xl lg:text-2xl font-semi-bold">
        {currentWeatherData.wind_kph}
        <span className="text-xs md:text-sm font-light"> km/h</span>
      </p>
    </div>
  );
}

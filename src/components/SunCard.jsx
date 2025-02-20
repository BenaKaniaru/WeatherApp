export default function SunCard({ forecastData }) {
  console.log("sunforecast:", forecastData);
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-2xl">
      <p className="text-sm">Sunrise and Sunset</p>
      <img src="/Sun.png" alt="sunflow image" />
      <div className="flex justify-between">
        <span className="text-sm">
          Sunrise{" "}
          <span className="text-md">
            {forecastData?.forecastday[0]?.astro?.sunrise || "N/A"}
          </span>
        </span>

        <span className="text-sm">
          Sunset{" "}
          <span className="text-md">
            {forecastData?.forecastday[0]?.astro?.sunset || "N/A"}
          </span>
        </span>
      </div>
    </div>
  );
}

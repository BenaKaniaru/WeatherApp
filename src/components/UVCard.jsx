export default function UVCard({ currentWeatherData }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-2xl shadow-gray-400">
      <p>UV Index</p>
      <img src="/UV.png" alt="UV Image holder" />
      <p className="text-2xl">
        {currentWeatherData.uv} <span className="text-sm font-light">uv</span>
      </p>
    </div>
  );
}

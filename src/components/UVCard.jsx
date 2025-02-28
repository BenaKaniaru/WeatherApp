export default function UVCard({ currentWeatherData }) {
  return (
    <div className="bg-gray-800 text-white p-1 md:p-4 rounded-lg shadow-2xl shadow-gray-400">
      <p className="font-light text-xs md:text-sm pb-2">UV Index</p>
      <img src="/UV.png" alt="UV Image holder" />
      <p className="text-sm md:text-xl lg:text-2xl font-semi-bold">
        {currentWeatherData.uv}{" "}
        <span className="text-xs md:text-sm font-light">uv</span>
      </p>
    </div>
  );
}

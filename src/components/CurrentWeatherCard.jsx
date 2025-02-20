export default function CurrentWeatherCard({
  locationData,
  currentWeatherData,
  error,
  loading,
}) {
  return (
    <div className=" flex flex-col justify-start p-4 gap-4 bg-gray-800 w-80 shadow-2xl shadow-gray-400 rounded-lg ml-4 h-full text-white">
      <img
        className="w-32 -mb-6"
        src={currentWeatherData?.condition?.icon || "N/A"}
        alt="weather Icon"
      />
      <span className="text-6xl -mb-6">
        {currentWeatherData?.temp_c || "N/A"}
        <sup className="text-4xl">°C</sup>
      </span>
      <div className="grid grid-cols-2 w-full items-center">
        <img
          className="-ml-4"
          src={currentWeatherData?.condition?.icon || "N/A"}
          alt="Weather Icon"
        />
        <span className="-ml-12">
          {currentWeatherData?.condition?.text || "N/A"}
        </span>
      </div>
      <span className="w-full h-0.5 bg-white -mt-2 opacity-10"></span>
      <div className="grid grid-cols-2 w-full">
        <img className="w-5" src="./public/location.png" alt="location Icon" />
        <span className="-ml-12">
          {locationData?.name || "N/A"}, {locationData?.country || "N/A"}
        </span>
      </div>
      <div className="grid grid-cols-2 w-full">
        <img className="w-5" src="./public/calendar.png" alt="calendar Icon" />
        <span className="-ml-12"> {locationData?.localtime || " N/A"}</span>
      </div>
    </div>
  );
}

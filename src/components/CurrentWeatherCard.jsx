import React from "react";
import { useEffect, useState } from "react";
export default function CurrentWeatherCard({
  locationData,
  currentWeatherData,
  forecastData,
}) {
  const [hourlyWeatherData, setHourlyWeatherData] = useState([]);

  useEffect(() => {
    if (forecastData?.forecastday?.[0]?.hour) {
      const hourlyData = forecastData.forecastday[0].hour;
      const currentTimeEpoch = Math.floor(Date.now() / 1000); // get current time in seconds
      const futureHours = hourlyData.filter(
        //filter out past hours and update only data for future hours from the current hour
        (hour) => hour.time_epoch > currentTimeEpoch
      );
      setHourlyWeatherData(futureHours);
    }
  }, [forecastData]);

  return (
    <div className=" flex flex-col justify-start p-4 gap-4 bg-gray-800  md:w-60 lg:w-80  shadow-2xl shadow-gray-400 rounded-lg mx-4 h-full text-white mb-4">
      <span className="font-light italic text-md">
        Today Weather Highlights
      </span>
      <div className="flex gap-6">
        <div>
          <img
            className="w-32 -mb-4"
            src={currentWeatherData?.condition?.icon || "N/A"}
            alt="weather Icon"
          />
          <div className="flex items-end">
            <span className="text-2xl md:text-4xl lg:text-6xl -mb-4">
              {currentWeatherData?.temp_c || "N/A"}
              <sup className="text-xl md:text-2xl lg:text-4xl">°C</sup>
            </span>
          </div>

          <div className="md:hidden mt-4 italic">
            {" "}
            <span className="text-xs font-light">Feels like</span>{" "}
            <span className="text-sm">
              {currentWeatherData?.feelslike_c || "N/A"}
            </span>
            <sup className="text-xs">°C</sup>{" "}
          </div>

          <div className="hidden md:flex mt-8">
            <img className="w-8 h-8 mr-6" src="/rain.png" alt="Rain Icon" />
            <span className="text-lg font-semibold">
              {forecastData?.forecastday?.[0]?.day?.daily_chance_of_rain}
              <span>%</span>{" "}
              <span className="text-sm font-light">chances of rain</span>
            </span>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex gap-2 items-center align-middle mb-1">
            <img className="w-4 h-4" src="/humidity.png" alt="Humidity Icon" />
            <span className="text-sm ml-2 font-light">
              Humidity is at{" "}
              <span className="text-lg font-semibold">
                {currentWeatherData.humidity}
              </span>
              <span className="text-sm font-light">%</span>
            </span>
          </div>

          <div className="flex gap-2 items-center mb-1">
            <img
              className="w-4 h-4"
              src="/visibility.png"
              alt="Visibility Icon"
            />
            <span className="text-sm font-light ml-2">
              Visibility is at{" "}
              <span className="font-semibold text-lg">
                {currentWeatherData.vis_km}
              </span>
              <span className="text-sm font-light">km</span>
            </span>
          </div>

          <div className="flex gap-2 items-center align-middle mb-1">
            <img className="w-4 h-4" src="/wind1.png" alt="Wind Icon" />
            <span className="text-sm ml-2 font-light">
              Windspeed{" "}
              <span className="text-lg font-semibold">
                {currentWeatherData.wind_kph}
              </span>
              <span className="text-sm font-light">kph</span>{" "}
              <span>{currentWeatherData.wind_dir}</span>
            </span>
          </div>

          <div className="flex gap-2 items-center align-middle mb-1">
            <img className="w-4 h-4" src="/rain.png" alt="Rain Icon" />
            <span>
              <span className="text-lg font-semibold ml-2">
                {forecastData?.forecastday?.[0]?.day?.daily_chance_of_rain}%{" "}
                <span className="text-sm font-light">chances of rain</span>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 w-full items-center">
        <img
          className="-ml-4"
          src={currentWeatherData?.condition?.icon || "N/A"}
          alt="Weather Icon"
        />
        <span className="-ml-3 md:-ml-6 lg:-ml-12 text-sm md:text-lg">
          {currentWeatherData?.condition?.text || "N/A"}
        </span>
      </div>
      <span className="w-full h-0.5 bg-white -mt-2 opacity-10"></span>
      <div className="grid grid-cols-2 w-full">
        <img className="w-5" src="/location.png" alt="location Icon" />
        <span className="-ml-3 md:-ml-6 lg:-ml-12 text-sm md:text-lg">
          {locationData?.name || "N/A"}, {locationData?.country || "N/A"}
        </span>
      </div>
      <div className="grid grid-cols-2 w-full">
        <img className="w-5" src="/calendar.png" alt="calendar Icon" />
        <span className="-ml-3 md:-ml-6 lg:-ml-12 text-sm md:text-lg">
          {" "}
          {locationData?.localtime || " N/A"}
        </span>
      </div>

      <div className="hidden md:grid">
        <p className="font-light italic p-4">Today's Hourly Forecast</p>
        <div className="hidden md:grid grid-cols-2 gap-4">
          {hourlyWeatherData.map((hour) => {
            const date = new Date(hour.time); //convert to Date object;
            let hour12 = date.getHours() % 12 || 12; //converts current hour to 12-hour format
            const ampm = date.getHours() >= 12 ? "PM" : "AM";

            return (
              <div
                key={hour.time_epoch}
                className="bg-gray-600 shadow-lg  p-2 rounded-lg"
              >
                <span className="text-white">{`${hour12} ${ampm}`}</span>
                <span>
                  <img src={hour.condition.icon} alt="" />
                </span>
                <span>{hour.condition.text}</span>
                <div className="flex items-end">
                  <span className="text-sm">
                    {hour.temp_c}
                    <sup className="text-sm">°C</sup>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

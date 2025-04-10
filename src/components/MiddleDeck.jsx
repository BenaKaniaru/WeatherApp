import { useState, useEffect } from "react";
export default function MiddleDeck({ forecastData }) {
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
    <div className="md:hidden bg-gray-800 text-white">
      <p className="pl-4 pt-4 italic font-light">
        Today's Hourly Weather Forecast{" "}
      </p>
      <div className=" grid grid-cols-3 p-4 gap-4">
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
  );
}

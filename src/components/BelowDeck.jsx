export default function BelowDeck({ forecastData }) {
  const getDayOfWeek = (dateString) => {
    //converts the provided date to its day of the week
    const today = new Date();
    today.setHours(0, 0, 0, 0); //setting today's time to midnight

    const date = new Date(dateString);
    date.setHours(0, 0, 0, 0); //setting the proided day's  time to midnight

    //calculate difference in days
    const difference = (date - today) / (1000 * 60 * 60 * 24);
    if (Math.floor(difference) === 1) {
      return "Tomorrow";
    }

    //if not tommorrow return the actual day
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  return (
    <div>
      <p className="text-white text-lg font-light italic">Weather Forecast</p>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mr-4 ">
        {forecastData?.forecastday?.slice(1).map((day) => (
          <div key={day.date} className="bg-gray-800 p-2 rounded-lg shadow-lg">
            <span className="text-white text-sm font-light">
              {getDayOfWeek(day.date)}
            </span>
            <div>
              <div className="grid gap-2 mb-3">
                <div className="mr-4">
                  <img src={day?.day?.condition?.icon} alt="" />
                  <span className="text-white text-xs md:text-sm mb-2">
                    {day?.day?.condition?.text}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-white text-xs md:text-sm">
                    Sunrise: {day.astro.sunrise}
                  </span>

                  <span className="text-white text-xs md:text-sm">
                    Sunset: {day.astro.sunset}
                  </span>
                </div>
              </div>

              <div>
                <div>
                  <span className="text-white text-xs md:text-sm font-light mr-8">
                    Min-temp:
                  </span>
                  {"  "}
                  <span className="text-white text-sm md:text-lg">
                    {day.day.mintemp_c}
                  </span>
                  <span className="text-white text-xs md:text-sm">
                    <sup>o</sup>C
                  </span>
                </div>

                <div>
                  <span className="text-white text-xs md:text-sm font-light mr-8">
                    Max-temp:
                  </span>
                  {"  "}
                  <span className="text-white text-sm md:text-lg">
                    {day.day.maxtemp_c}
                  </span>
                  <span className="text-white text-xs md:text-sm">
                    <sup>o</sup>C
                  </span>
                </div>

                <div>
                  <span className="text-white text-xs md:text-sm font-light mr-1">
                    Chances of rain:
                  </span>
                  {"  "}
                  <span className="text-white text-sm md:text-lg">
                    {day.day.daily_chance_of_rain}
                  </span>
                  <span className="text-white text-xs md:text-sm">%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

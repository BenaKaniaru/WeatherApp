import FeelsLike from "./FeelsLike";
import Humidity from "./Humidity";
import Visibility from "./Visibility";

export default function lowerDeck({ currentWeatherData }) {
  return (
    <div className="md:grid hidden md:grid-cols-3 gap-2 mr-4">
      <Humidity currentWeatherData={currentWeatherData} />
      <Visibility currentWeatherData={currentWeatherData} />
      <FeelsLike currentWeatherData={currentWeatherData} />
    </div>
  );
}

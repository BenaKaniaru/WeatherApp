import githubLogo from "../assets/github.png";
import SearchBar from "./SearchBar";
export default function Header({
  setLocationData,
  setCurrentWeatherData,
  locationData,
  setError,
  setLoading,
  setForecastData,
}) {
  return (
    <header className="flex items-center p-4 bg-gray-800 w-full top-0">
      <p className="text-blue-500 font-bold text-2xl w-60 ">AngaPro</p>
      <SearchBar
        className="flex-1"
        setLocationData={setLocationData}
        locationData={locationData}
        setCurrentWeatherData={setCurrentWeatherData}
        setForecastData={setForecastData}
        setError={setError}
        setLoading={setLoading}
      />
      <nav className="w-60 flex justify-end px-4">
        <ul>
          <li>
            <img className="w-6" src={githubLogo} alt="github logo" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

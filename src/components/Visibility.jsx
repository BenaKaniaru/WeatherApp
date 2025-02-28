export default function Visibility({ currentWeatherData }) {
  let visibilityAlert;
  if (currentWeatherData.vis_km < 0.1) {
    visibilityAlert = "Dangerous conditions for driving, near-zero visibility";
  } else if (currentWeatherData.vis_km < 1) {
    visibilityAlert = "Difficult to drive, objects appear blurry";
  } else if (currentWeatherData.vis_km < 5) {
    visibilityAlert = "Visible, but driving requires caution";
  } else if (currentWeatherData.vis_km < 10) {
    visibilityAlert =
      "Slight reduction in clarity, but mostly fine for driving";
  } else if (currentWeatherData.vis_km < 20) {
    visibilityAlert =
      "Clear conditions, good for driving and outdoor activities";
  } else {
    visibilityAlert =
      "Crystal-clear conditions, excellent for outdoor activities";
  }
  return (
    <div className="text-white bg-gray-800 rounded-lg p-4 shadow-2xl">
      <span className="font-light">Visibility</span>
      <div
        className={`flex justify-between items-end mt-4 ${
          currentWeatherData.vis_km < 5
            ? "text-red-500 font-bold"
            : "text-white"
        } `}
      >
        <div>
          <span className={`text-2xl font-semibold `}>
            {currentWeatherData.vis_km}
          </span>
          <span className="text-sm font-light">km</span>
        </div>
        <span className=" ml-6 text-xs font-light">{visibilityAlert}</span>
      </div>
    </div>
  );
}

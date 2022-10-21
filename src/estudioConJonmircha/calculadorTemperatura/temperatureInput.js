export function TemperatureInput({ temperature, scale, onTemperatureChange }) {
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  const handleChange = (e) => { 
    onTemperatureChange(e.target.value);
  };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange} className="text-violet-400 bg-violet-200 font-semibold px-2 focus:ring focus:ring-violet-400 focus:text-violet-700  focus:outline-none hover:text-violet-800 hover:bg-violet-100 rounded-3xl"/>
    </fieldset>
  );
}

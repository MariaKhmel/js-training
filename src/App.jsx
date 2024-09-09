import { useState } from "react";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi"],
  },
  {
    name: "Pak",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chittagong"],
  },
];

const App = () => {
  const [country, setCountry] = useState(countries[0]);

  const handleCountryChange = (e) =>
    countries.find((country) => {
      if (country.value === e.target.value) {
        setCountry(country);
      }
    });
  // setCountry(countries[e.target.value])
  return (
    <>
      <select onChange={handleCountryChange}>
        {countries.map(({ name, value }, index) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>

      <select>
        {country.cities.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};

export default App;

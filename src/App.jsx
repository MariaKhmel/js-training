import axios from "axios";
import { useEffect, useState } from "react";

// const countries = [
//   {
//     name: "India",
//     value: "IN",
//     cities: ["Delhi"],
//   },
//   {
//     name: "Pak",
//     value: "PK",
//     cities: ["Lahore", "Karachi"],
//   },
//   {
//     name: "Bangladesh",
//     value: "BG",
//     cities: ["Dhaka", "Chittagong"],
//   },
// ];
const basicUrl = "https://jsonplaceholder.typicode.com/todos";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(20);

  const numOfTotalPages = Math.ceil(todos.length / todosPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  console.log(pages);

  useEffect(() => {
    const fetchTodos = () => {
      fetch(`${basicUrl}`)
        .then((res) => res.json())
        .then((result) => setTodos(result));
    };

    fetchTodos();
  }, []);

  return (
    <>
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <h1>
        {pages.map((page) => (
          <span key={page}>{`${page} | `}</span>
        ))}
      </h1>
    </>
  );
  // const [country, setCountry] = useState(countries[0]);
  // const handleCountryChange = (e) =>
  //   countries.find((country) => {
  //     if (country.value === e.target.value) {
  //       setCountry(country);
  //     }
  //   });
  // return (
  //   <>
  //     <select onChange={handleCountryChange}>
  //       {countries.map(({ name, value }) => (
  //         <option key={value} value={value}>
  //           {name}
  //         </option>
  //       ))}
  //     </select>
  //     <select>
  //       {country.cities.map((el) => (
  //         <option key={el} value={el}>
  //           {el}
  //         </option>
  //       ))}
  //     </select>
  //   </>
  // );
};

export default App;

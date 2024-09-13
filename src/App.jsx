import axios from "axios";
import { useEffect, useState } from "react";
import css from "./App.module.css";
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
  const [todosPerPage, setTodosPerPage] = useState(10);

  const numOfTotalPages = Math.ceil(todos.length / todosPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastTodo = currentPage * todosPerPage; //40
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage; //30
  const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const prevPageHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPageHandler = () => {
    if (currentPage !== numOfTotalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
      <select onChange={(e) => setTodosPerPage(e.target.value)}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <ul>
        {visibleTodos.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      <span onClick={prevPageHandler}>Prev</span>
      <p>
        {pages.map((page) => (
          <span
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? css.active : ""}
          >{`${page} | `}</span>
        ))}
      </p>
      <span onClick={nextPageHandler}>Next</span>
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

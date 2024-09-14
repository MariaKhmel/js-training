// import { useEffect, useState } from "react";

// const App2 = () => {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     console.log(e.target.value);
//   };
//   return (
//     <>
//       <input value={inputValue} onChange={handleInputChange} />
//     </>
//   );
// };

// export default App2;

import { useState } from "react";

const ERR_MSG = "Please enter value greater than 12";

export default function App() {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const handleTextChange = (e) => {
    setIsError(false);
    setText(e.target.value);

    if (Number(e.target.value) < 12) {
      setIsError(true);
    }
  };

  return (
    <>
      <input value={text} onChange={handleTextChange} />
      {isError ? ERR_MSG : null}
    </>
  );
}

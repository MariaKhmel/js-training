import { useEffect, useState } from "react";

const App2 = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <input value={inputValue} onChange={handleInputChange} />
    </>
  );
};

export default App2;

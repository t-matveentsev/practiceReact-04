import { useState } from "react";
import CustomInput from "./CustomInput";

const UseIdExample = () => {
  const [inputsCounter, setInputsCounter] = useState(1);
  return (
    <div>
      <button onClick={() => setInputsCounter((prev) => prev + 1)}>+1</button>
      <button onClick={() => setInputsCounter((prev) => prev - 1)}>-1</button>
      <button onClick={() => setInputsCounter(1)}>Reset</button>
      {Array(inputsCounter)
        .fill("")
        .map((_, idx) => (
          <CustomInput key={idx} />
        ))}
    </div>
  );
};
export default UseIdExample;

import { useId } from "react";

const CustomInput = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>This is label for my input: </label>
      <input id={id} />
    </div>
  );
};
export default CustomInput;

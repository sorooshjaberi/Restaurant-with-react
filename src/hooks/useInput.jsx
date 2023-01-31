import { useState } from "react";
const useInput = (validator) => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const isInputInValid = !isValid && isTouched;

  const changeHandler = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsValid(value);
    setIsTouched(true);
  };
  const blurHandler = () => {
    setIsValid(validator(inputValue));
    setIsTouched(true);
  };

  return { changeHandler, isInputInValid, blurHandler , inputValue,setInputValue,isTouched };
};
export default useInput;

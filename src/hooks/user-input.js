import { useState } from "react";

const UserInput = (value) => {
  const [userInputValue, setUserInputValue] = useState("");

  const [isTouched, setIsTouched] = useState(false)

const validate = value(userInputValue)

const hasError = !validate && isTouched

  const inputChangeHandler = (e) => {
    setUserInputValue(e.target.value);
  };

  const inputBlurHandle = ()=>{
    setIsTouched(true)
  }

  const reset = () => {
    setUserInputValue("");
    setIsTouched(false)
  };

  return {
    userInputValue,
    validate,
    inputChangeHandler,
    inputBlurHandle,
    reset,
    hasError
  };
};

export default UserInput;

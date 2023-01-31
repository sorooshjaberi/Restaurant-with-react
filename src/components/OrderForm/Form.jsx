import React from "react";
import "./OrderForm.scss";
import InputGroup from "./InputGroup";
import useInput from "../../hooks/useInput";
const Form = () => {
  const {
    blurHandler: nameBlurHandler,
    changeHandler: nameChangeHandler,
    inputValue: nameInputValue,
    isInputInValid: isNameInputInvalid,
    isTouched: isNameTouched,
    setInputValue: setNameInputValue,
  } = useInput((val) => {
    return /\w+/.test(val);
  });
  const {
    blurHandler: addressBlurHandler,
    changeHandler: addressChangeHandler,
    inputValue: addressInputValue,
    isInputInValid: isAddressInputInvalid,
    isTouched: isAddressTouched,
    setInputValue: setAddressInputValue,
  } = useInput((val) => {
    return /\w+/.test(val);
  });
  const {
    blurHandler: numberBlurHandler,
    changeHandler: numberChangeHandler,
    inputValue: numberInputValue,
    isInputInValid: isNumberInputInvalid,
    isTouched: isNumberTouched,
    setInputValue: setNumberInputValue,
  } = useInput((val) => {
    return /\b\d+\b/.test(val);
  });
  const isAnyInvalid =
    isNumberInputInvalid || isAddressInputInvalid || isNumberInputInvalid;
  const isAllTouched = isNumberTouched && isAddressTouched && isNumberTouched;
  const validateAll = () => {
    nameBlurHandler();
    addressBlurHandler();
    numberBlurHandler();
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //if none or some of inputs were'nt touched
    if (!isAllTouched) {
      validateAll();
    }
    //if all were valid beside being touched => continue
    else if (!isAnyInvalid && isAllTouched) {
        //post data
    }
    
  };
  return (
    <form className="form__content" onSubmit={submitHandler}>
      <InputGroup
        name="name"
        label="Name :"
        {...{
          blurHandler: nameBlurHandler,
          changeHandler: nameChangeHandler,
          inputValue: nameInputValue,
          isInputInValid: isNameInputInvalid,
          isTouched: isNameTouched,
          setInputValue: setNameInputValue,
        }}
        error="fill the name!"
      />
      <InputGroup
        name="address"
        label="Address :"
        {...{
          blurHandler: addressBlurHandler,
          changeHandler: addressChangeHandler,
          inputValue: addressInputValue,
          isInputInValid: isAddressInputInvalid,
          isTouched: isAddressTouched,
          setInputValue: setAddressInputValue,
        }}
        error="fill the address!"
      />
      <InputGroup
        name="number"
        label="Phone Number :"
        error="fill this with numbers!"
        {...{
          blurHandler: numberBlurHandler,
          changeHandler: numberChangeHandler,
          inputValue: numberInputValue,
          isInputInValid: isNumberInputInvalid,
          isTouched: isNumberTouched,
          setInputValue: setNumberInputValue,
        }}
      />

      <div className="form__content__controllers">
        <button type="submit">Pay</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
};

export default Form;

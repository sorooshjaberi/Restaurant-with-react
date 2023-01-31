import React from "react";

const InputGroup = (props) => {
  return (
    <div
      className={
        "form__content__inputGroup " + (props.isInputInValid && "invalid")
      }
    >
      <label htmlFor="name">{props.label}</label>
      <input
        type="text"
        name={props.name}
        id={props.name}
        value={props.inputValue}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
      />
    </div>
    
  );
};

export default InputGroup;

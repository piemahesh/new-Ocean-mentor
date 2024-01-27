/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function FormInput(props) {
  return (
    <>
      <input
        style={{ outline: "none" }}
        className=" w-75 px-2 my-3  bg-transparent border-0  text-secondary"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        // onBlur={props.onBlur}
        name={props.name}
      />
    </>
  );
}

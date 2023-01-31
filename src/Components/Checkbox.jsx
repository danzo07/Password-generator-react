import React from "react";
import { useState } from "react";
import { CheckBox } from "../style.styled";

function Checkbox({ id, label, checked, ...props }) {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  return (
    <CheckBox>
      <input
        id={id}
        type="checkbox"
        onChange={() => setIsChecked((prev) => !prev)}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </CheckBox>
  );
}

export default Checkbox;

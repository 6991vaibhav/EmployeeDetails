import React, { useState } from 'react';

export const CustomInput = ({ field, title, value, type, handleChange }) => {
  // const [inputVal, setInputVal] = useState(value);

  const _handleChange = (val) => {
    handleChange(field, val);
  };

  return (
    <div className="fieldWrapper">
      <label>{title}</label>
      <input type={type} value={value} onChange={(e) => _handleChange(e.target.value)} />
    </div>
  )
}

export default CustomInput;
import React from "react";

const InputField = ({
  id,
  name,
  value,
  onChange,
  label,
  error,
  required = false,
  type = "text",
}) => (
  <div>
    <label htmlFor={id} className="block text-xs text-gray-500 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="text-base w-full p-2 border border-gray-300 rounded"
      required={required}
    />
    {error && (
      <p className="text-red-500 text-xs mt-1">This field is required</p>
    )}
  </div>
);

export default InputField;

import React from "react";

const SelectField = ({ id, name, value, onChange, label, options }) => (
  <div>
    <label htmlFor={id} className="block text-xs text-gray-500 mb-1">
      {label}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="text-base w-full p-2 border border-gray-300 rounded"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;

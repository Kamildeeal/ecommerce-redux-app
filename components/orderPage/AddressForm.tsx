import React from "react";
import InputField from "./InputField";

const AddressForm = ({ formData, errors, handleChange }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
    <InputField
      id="street"
      name="street"
      label="STREET"
      value={formData.street}
      onChange={handleChange}
      error={errors.street}
    />
    <InputField
      id="houseNumber"
      name="houseNumber"
      label="HOUSE NUMBER"
      value={formData.houseNumber}
      onChange={handleChange}
      error={errors.houseNumber}
      required
    />
    <InputField
      id="email"
      name="email"
      label="EMAIL"
      type="email"
      value={formData.email}
      onChange={handleChange}
      error={errors.email}
      required
    />
  </div>
);

export default AddressForm;

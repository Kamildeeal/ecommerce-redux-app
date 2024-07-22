import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";

const ContactForm = ({ formData, errors, handleChange }) => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <InputField
        id="firstName"
        name="firstName"
        label="FIRST NAME"
        value={formData.firstName}
        onChange={handleChange}
        error={errors.firstName}
        required
      />
      <SelectField
        id="country"
        name="country"
        label="COUNTRY"
        value={formData.country}
        onChange={handleChange}
        options={[
          { value: "Poland", label: "Poland" },
          { value: "Germany", label: "Germany" },
          { value: "US", label: "USA" },
          { value: "UK", label: "United Kingdom" },
        ]}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <InputField
        id="lastName"
        name="lastName"
        label="LAST NAME"
        value={formData.lastName}
        onChange={handleChange}
        error={errors.lastName}
        required
      />
      <InputField
        id="phoneNumber"
        name="phoneNumber"
        label="PHONE NUMBER"
        type="tel"
        value={formData.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
        required
      />
    </div>
  </>
);

export default ContactForm;

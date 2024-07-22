import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
  updateField,
  setErrors,
  resetForm,
} from "@/lib/features/clientInfo/ClientInfoSlice";
import AddressForm from "@/components/orderPage/AddressForm";
import ContactForm from "@/components/orderPage/ContactForm";
import FormActions from "@/components/orderPage/FormActions";
const RecipientDetails = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.clientInfo);
  const errors = formData.errors;

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const checkFormValidity = () => {
      const requiredFields = [
        "firstName",
        "lastName",
        "phoneNumber",
        "houseNumber",
        "email",
        "postalCode",
        "city",
      ];
      const formValid = requiredFields.every(
        (field) => formData[field as keyof typeof formData] !== ""
      );
      setIsFormValid(formValid);
    };

    checkFormValidity();
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateField({ name, value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!formData.firstName) newErrors.firstName = true;
    if (!formData.lastName) newErrors.lastName = true;
    if (!formData.phoneNumber) newErrors.phoneNumber = true;
    if (!formData.houseNumber) newErrors.houseNumber = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.postalCode) newErrors.postalCode = true;
    if (!formData.city) newErrors.city = true;

    dispatch(setErrors(newErrors));

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
    }
  };

  const handleAutoFill = () => {
    const testData = {
      firstName: "Kamil",
      lastName: "Wojciak",
      phoneNumber: "123456789",
      houseNumber: "123",
      email: "kamil.wojciak.1995@gmail.com",
      street: "lottery",
      postalCode: "00-000",
      city: "Szczecin",
      country: "Poland",
    };
    Object.keys(testData).forEach((key) => {
      dispatch(updateField({ name: key, value: testData[key] }));
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-5 font-sans">
      <h2 className="text-xl font-bold mb-5">Recipient Details</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg border-2 border-gray-800"
      >
        <div className="flex flex-col sm:flex-row justify-between">
          <h3 className="text-sm text-gray-600 mb-5">SHIPPING ADDRESS</h3>
          <button
            type="button"
            onClick={handleAutoFill}
            className="bg-green-500 text-2xl text-white shadow-bottom-only shadow-neutral-800 rounded-xl hover:bg-green-700 py-2 px-6"
          >
            Auto-fill fields
          </button>
        </div>
        <ContactForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
        />
        <AddressForm
          formData={formData}
          errors={errors}
          handleChange={handleChange}
        />
        <FormActions
          isFormValid={isFormValid}
          handleReset={() => dispatch(resetForm())}
        />
      </form>
    </div>
  );
};

export default RecipientDetails;

"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
  updateField,
  setErrors,
  resetForm,
} from "@/lib/features/clientInfo/ClientInfoSlice";
import Link from "next/link";
import { Tooltip } from "@mui/material";

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

  return (
    <div className="max-w-3xl mx-auto p-5 font-sans">
      <h2 className="text-xl font-bold mb-5">Recipient Details</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg border-2 border-gray-800"
      >
        <h3 className="text-sm text-gray-600 mb-5">SHIPPING ADDRESS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-xs text-gray-500 mb-1"
            >
              FIRST NAME
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className=" text-base w-full p-2 border border-gray-300 rounded"
              required
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-xs text-gray-500 mb-1"
            >
              COUNTRY
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="text-base w-full p-2 border border-gray-300 rounded"
            >
              <option value="Poland">Poland</option>
              <option value="Germany">Germany</option>
              <option value="US">USA</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="lastName"
              className="block text-xs text-gray-500 mb-1"
            >
              LAST NAME
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-base"
              required
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-xs text-gray-500 mb-1"
            >
              PHONE NUMBER
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="text-base w-full p-2 border border-gray-300 rounded"
              required
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                Providing a phone number is necessary as it allows us to contact
                you in case of issues with the delivery.
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label
              htmlFor="street"
              className="block text-xs text-gray-500 mb-1"
            >
              STREET
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="text-base w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label
              htmlFor="houseNumber"
              className="block text-xs text-gray-500 mb-1"
            >
              HOUSE NUMBER
            </label>
            <input
              type="text"
              id="houseNumber"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleChange}
              className="text-base w-full p-2 border border-gray-300 rounded"
              required
            />
            {errors.houseNumber && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-xs text-gray-500 mb-1">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-base w-full p-2 border border-gray-300 rounded"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label
              htmlFor="postalCode"
              className="block text-xs text-gray-500 mb-1"
            >
              POSTAL CODE
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="text-base w-full p-2 border border-gray-300 rounded"
              required
            />
            {errors.postalCode && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="city" className="block text-xs text-gray-500 mb-1">
              CITY
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="text-base w-full p-2 border border-gray-300 rounded"
              required
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div className="text-right mt-6 text-xl">
          <Tooltip
            title={
              isFormValid
                ? "Move to payment method"
                : "All fields are required!"
            }
            placement="top"
          >
            <Link href={isFormValid ? "/cart/payment" : "#"}>
              <button
                type="submit"
                className={`${
                  isFormValid
                    ? "bg-gray-800"
                    : "mx-auto lg:my-2 px-4 py-2 text-xl border-2 max-w-max border-gray-800 font-bold text-white  rounded-lg shadow-sm cursor transition bg-blue-600 hover:text-gray-800 hover:bg-white cursor-not-allowed"
                } text-white shadow-bottom-only shadow-neutral-800 rounded-xl py-2 px-6 mr-8`}
                disabled={!isFormValid}
              >
                Continue
              </button>
            </Link>
          </Tooltip>
          <button
            className="bg-black text-white shadow-bottom-only shadow-gray-800 rounded-xl hover:bg-gray-900 py-2 px-6 border-2 border-blue-600"
            onClick={() => dispatch(resetForm())}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipientDetails;

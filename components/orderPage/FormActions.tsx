import React from "react";
import { Tooltip } from "@mui/material";
import Link from "next/link";

const FormActions = ({ isFormValid, handleReset }) => (
  <div className="text-center sm:text-right mt-6 text-xl">
    <Tooltip
      title={
        isFormValid ? "Move to payment method" : "All fields are required!"
      }
      placement="top"
    >
      <Link href={isFormValid ? "/cart/payment" : "#"}>
        <button
          type="submit"
          className={`${
            isFormValid
              ? "bg-blue-600 border-2 border-gray-800"
              : "mx-auto lg:my-2 px-4 py-2 text-xl border-2 max-w-max border-gray-800 font-bold text-white  rounded-lg shadow-sm cursor transition bg-gray-800 hover:text-gray-800 hover:bg-white cursor-not-allowed"
          } text-white shadow-bottom-only shadow-neutral-800 rounded-xl py-2 px-6 mr-2 sm:mr-8`}
          disabled={!isFormValid}
        >
          Continue
        </button>
      </Link>
    </Tooltip>
    <button
      type="button"
      className="bg-black text-white shadow-bottom-only shadow-gray-800 rounded-xl hover:bg-gray-900 py-2 px-6 border-2 border-blue-600"
      onClick={handleReset}
    >
      Reset
    </button>
  </div>
);

export default FormActions;

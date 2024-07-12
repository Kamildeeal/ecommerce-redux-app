import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface LoadingSpinnerProps {
  loading: boolean;
}

const LoadingSpinner = ({ loading }: LoadingSpinnerProps) => (
  <div className="flex items-center justify-center min-h-screen">
    <ClipLoader color={"black"} loading={loading} size={150} />
  </div>
);

export default LoadingSpinner;

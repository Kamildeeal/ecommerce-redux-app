import React from "react";
import { ToastSuccess } from "@/utils/ToastSuccess";
import { ToastRemove } from "@/utils/ToastRemove";

const ToastContainer = () => {
  return (
    <>
      <div className="fixed top-[6rem] left-1/2 transform -translate-x-1/2 z-[100]">
        <ToastSuccess />
      </div>
      <div className="fixed top-[9.5rem] left-1/2 transform -translate-x-1/2 z-[100]">
        <ToastRemove />
      </div>
    </>
  );
};

export default ToastContainer;

"use client";

import { Toast } from "flowbite-react";
import { HiCheck } from "react-icons/hi";

interface ToastProps {
  visible: boolean;
  onClose: () => void;
}

export function ToastSuccess({ visible, onClose }: ToastProps) {
  if (!visible) return null;
  return (
    <Toast className="flex gap-3">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <HiCheck className="h-6 w-6" />
      </div>
      <div className="ml-3 text-xl font-normal">
        Item moved to cart successfully
      </div>
      <Toast.Toggle onClick={onClose} />
    </Toast>
  );
}

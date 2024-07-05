"use client";

import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";

interface ToastProps {
  visible: boolean;
  onClose: () => void;
}

export function ToastRemove({ visible, onClose }: ToastProps) {
  if (!visible) return null;
  return (
    <Toast className="flex gap-3">
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
        <HiX className="h-5 w-5" />
      </div>
      <div className="ml-3 text-xl font-normal">Item has been deleted.</div>
      <Toast.Toggle />
    </Toast>
  );
}

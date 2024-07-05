"use client";

import { hideToastRemove } from "@/lib/features/toats/ToastsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hookts";
import { Toast } from "flowbite-react";
import { HiX } from "react-icons/hi";

export function ToastRemove() {
  const { removeItemVisible } = useAppSelector((state) => state.toast);
  const dispatch = useAppDispatch();

  if (!removeItemVisible) return null;

  return (
    <div className=" border-red-500 border-4">
      <Toast className="flex gap-3 border-red-500 border-2">
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-xl font-normal">Item has been deleted.</div>
        <Toast.Toggle onClick={() => dispatch(hideToastRemove())} />
      </Toast>
    </div>
  );
}

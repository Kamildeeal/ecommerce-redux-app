import {
  showToastRemove,
  showToastSuccess,
} from "@/lib/features/toast/ToastsSlice";
import { useAppDispatch } from "@/lib/hookts";
export default function handleToasts() {
  const dispatch = useAppDispatch();

  const handleAddItemToast = () => {
    dispatch(showToastSuccess());
  };

  const handleRemoveItemToast = () => {
    dispatch(showToastRemove());
  };

  return {
    handleAddItemToast,
    handleRemoveItemToast,
  };
}

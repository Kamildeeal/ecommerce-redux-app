// components/Header/ModalWrapper.tsx

import React from "react";
import CategoriesModal from "@/components/categoriesModal/CategoriesModal";
import ClosedModal from "@/components/categoriesModal/StripeClosedModal";
import { AnimatePresence } from "framer-motion";

interface ModalWrapperProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isOpen,
  handleCloseModal,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <CategoriesModal
          handleCloseModal={handleCloseModal}
          openCategories={isOpen}
        />
      ) : (
        <AnimatePresence>
          <ClosedModal handleOpenModal={handleCloseModal} />
        </AnimatePresence>
      )}
    </AnimatePresence>
  );
};

export default ModalWrapper;

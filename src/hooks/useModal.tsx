import { ReactNode, useState } from "react";
import Modal from "react-modal";
export const useModal = (isBlur: boolean = true) => {
  const [isOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return {
    Modal: isOpen
      ? ({ children }: { children: ReactNode }) => (
          <Modal
            style={customStyles}
            isOpen={isOpen}
            onRequestClose={isBlur ? () => setIsOpen(false) : () => null}
          >
            {children}
          </Modal>
        )
      : () => null,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

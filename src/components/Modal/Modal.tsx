import { useEffect } from "react";
import { ModalElement } from "./style";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

interface ModalProps {
  isActive: boolean;
  onClose: () => void;
  text: string | null;
}

export const Modal: React.FC<ModalProps> = ({ isActive, onClose, text }) => {
  useEffect(() => {
    if (isActive) {
      const id = setTimeout(() => {
        onClose();
      }, 2500);

      return () => clearTimeout(id);
    }
  }, [isActive, onClose]);

  return (
    <ModalElement>
      <IoCheckmarkDoneCircleOutline />
      <p>{text}</p>
    </ModalElement>
  );
};

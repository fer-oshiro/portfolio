import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const displayClass = isOpen ? "block" : "hidden";
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-gray-700 bg-opacity-75 ${displayClass}`}
      onClick={handleClick}
    >
      <div
        className="md:hidden text-white p-8 cursor-pointer text-3xl max-w-fit absolute right-0"
        onClick={onClose}
      >
        <AiOutlineClose />
      </div>
      <div
        className="flex items-center justify-center min-h-screen px-4 w-screen top-0 "
        ref={modalRef}
      >
        <div className="md:bg-white rounded-lg absolute left-0 md:left-10 right-0 md:right-10 md:h-5/6 max-w-7xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

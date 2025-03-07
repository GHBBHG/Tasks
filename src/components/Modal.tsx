import { X } from "lucide-react";
import { ReactNode } from "react";

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

export const Modal = ({ closeModal, children }: ModalProps) => {
  return (
    <>
      <div
        className={`w-full h-full p-4 bg-black opacity-[0.8] z-[10000] top-0 left-0 fixed`}
        onClick={closeModal}
      ></div>
      <div
        className={`bg-neutral-800 rounded-xl mx-auto w-[50%] lg:w-[80%] sm:w-[90%] h-[70%] z-[10001] fixed top-[15%] left-[25%] lg:left-[10%] sm:left-[5%] opacity-[1] overflow-y-auto overflow-x-hidden`}
      >
        <div className="w-full flex justify-end p-2 text-2xl text-white">
          <span onClick={closeModal} className="cursor-pointer">
            <X
              size={26}
              className="text-white hover:text-red-600 ease-in duration-200"
            />
          </span>
        </div>
        {children}
      </div>
    </>
  );
};

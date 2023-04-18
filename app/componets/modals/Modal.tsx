"use client"
import { useState,useCallback,useEffect} from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps{
 title?: String;
 disabled?: boolean;
 onClose: () => void;
 onSubmit: () => void;
 isOpen?: boolean;
 body?: React.ReactElement;
 footer?: React.ReactElement;
 actionLabel: string;
}


const Modal: React.FC<ModalProps> = ({
title,
disabled,
body,
footer,
onClose,
isOpen,
onSubmit,
actionLabel, 

}) => {
  const [showModal, setShowModal] = useState(isOpen);
  
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose= useCallback(() =>{
    if(disabled){ 
    return;
  }
  setShowModal(false);
  setTimeout(() => {
    onClose();
  }, 300)
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() =>{
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/6 h-full lg:h-auto md:h-auto my-6">
          {/* content */}
          <div className={`h-full duration-300 translate
                ${showModal ? 'translate-y-0' : 'translate-y-full'}
                ${showModal ? 'opacity-100' : 'opacity-0'} `}>
            <div className="relative h-full lg:h-auto md:h-auto w-full border-0 flex flex-col rounded-lg shadow-lg bg-white outline-none focus:outline-none">

              {/* header */}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button   onClick={handleClose} className="absolute p-1 left-9 transitionhover:opacity-70 border-0 ">
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>

              {/* body */}
              <div className="relative p-6 flex-auto">{body}</div>

              {/* footer */}
              <div className="flex flex-col gap-2 p-6"> {footer}
                <div className="flex items-center gap-4 w-full ">
                  <Button
                       disabled={disabled} 
                       label={actionLabel} 
                       onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Modal
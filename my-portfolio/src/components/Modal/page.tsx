import React from "react";
import Navbar from "../Navbar/page";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="relative bg-gray-900 p-4 rounded-lg w-full max-w-3xl mx-4 shadow-lg">
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-red-600 text-4xl focus:outline-none"
                    onClick={onClose}
                >
                    &times;
                </button>

                {/* Modal Content */}
                {children}
            </div>
        </div>
    );
};

export default Modal;

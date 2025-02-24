import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <button style={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed" as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modal: {
        backgroundColor: "##181a52",
        padding: "20px",
        borderRadius: "8px",
        width: "400px",
        maxWidth: "90%",
        position: "relative" as const,
    },
    closeButton: {
        position: "absolute" as const,
        top: "10px",
        right: "10px",
        background: "none",
        border: "none",
        fontSize: "18px",
        cursor: "pointer",
    },
};

export default Modal;
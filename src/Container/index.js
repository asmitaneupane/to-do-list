import { useState } from "react";
import Modal from "../Modal";
import TriggerButton from "../TriggerButton";

const Container = ({
    triggerText,
    showModal,
    closeModal,
    onKeyDown,
    onClickOutside,
    toggleScrollLock,
    closeButton,
    onSubmit
}) => {

    const [isShown, setIsShown] = useState(false);

    showModal = () => {
        setIsShown(true);
        closeButton.focus();
        toggleScrollLock();
    };

    closeModal = () => {
        setIsShown(false);
        closeButton.focus();
        toggleScrollLock();
    }

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            closeModal();
        }
    }

    onClickOutside = (event) => {
        if (Modal && Modal.contains(event.target)) return;
        closeModal();
    }

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    }

    return (
        <>
            <TriggerButton
                triggerText={triggerText}
                buttonRef={(n) => (TriggerButton = n)}
                showModal={showModal}
            />
            {isShown ? (
                <Modal
                    onSubmit={onSubmit}
                    modalRef={(n) => (Modal = n)}
                    buttonRef={(n) => (closeButton = n)}
                    closeModal={closeModal}
                    onKeyDown={onKeyDown}
                    onClickOutside={onClickOutside}
                />
            ) : null}
        </>
    )
};

export default Container
import Form from '../Form';
import FocusTrap from 'focus-trap-react';
import { useRef } from 'react';

const Modal = ({
    onClickOutside,
    onKeyDown,
    closeModal,
    onSubmit
}) => {

    const modalRef = useRef(null);
    const buttonRef = useRef(null);

    return (
        <div className="modal-wrapper">
            <FocusTrap>
                <aside
                    tag="aside"
                    role="dialog"
                    tabIndex="-1"
                    aria-modal="true"
                    className="modal-cover"
                    onClick={onClickOutside}
                    onKeyDown={onKeyDown}
                >
                    <div className="modal-area" ref={modalRef}>

                        <button
                            ref={buttonRef}
                            aria-label="Close Modal"
                            aria-labelledby="close-modal"
                            className="modal-close"
                            onClick={closeModal}
                        >
                            <span className="close-modal">
                                <i className="fa-solid fa-xmark" />
                            </span>
                        </button>
                        <div className="modal-body">
                            <Form onSubmit={onSubmit} />
                        </div>
                    </div>
                </aside>
            </FocusTrap>
        </div>
    );
};

export default Modal
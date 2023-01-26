import { useRef } from "react";

const TriggerButton = ({ triggerText, showModal }) => {

    const buttonRef = useRef(null);
    return (
        <button
            className="btn btn-modal"
            ref={buttonRef}
            onClick={showModal}
        >
            {triggerText}
        </button>
    )
}

export default TriggerButton
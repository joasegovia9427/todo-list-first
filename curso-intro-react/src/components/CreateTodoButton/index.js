import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    const btn = document.getElementById("addButton");

    const onClickButton = () => {
        console.log("clic");
        // props.setOpenModal(true);
        // props.setOpenModal(!props.openModal);
        props.setOpenModal((prevState) => !prevState);
        if (!props.openModal) {
            btn.className = "CreateTodoButtonClose";
        } else {
            btn.className = "CreateTodoButton";
        }
    };

    return (
        <button
            id="addButton"
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };

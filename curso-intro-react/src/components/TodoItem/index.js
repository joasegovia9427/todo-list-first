import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span
                className={`Icon Icon-check ${props.completed &&
                    "Icon-check--active"}`}
                onClick={props.onComplete}
            >
                <img
                    className={`check ${props.completed && "check-active"}`}
                    src={process.env.PUBLIC_URL + "/assests/images/Check.svg"}
                    alt="checkIcon"
                ></img>
            </span>
            <p
                className={`TodoItem-p ${props.completed &&
                    "TodoItem-p--complete"}`}
            >
                {props.text}
            </p>
            <span className="Icon Icon-delete" onClick={props.onDelete}>
                <img
                    className={`delete ${props.completed && "delete-active"}`}
                    src={process.env.PUBLIC_URL + "/assests/images/Cancel.svg"}
                    alt="deleteIcon"
                ></img>
            </span>
        </li>
    );
}

export { TodoItem };

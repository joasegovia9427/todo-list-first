import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../TodoContext";

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <>
            <img
                className="icon-image"
                src={process.env.PUBLIC_URL + "/assests/images/icon.svg"}
                alt="icon"
            ></img>

            <h2 className="TodoCounter">
                You have completed <br />
                {completedTodos} of {totalTodos} TODOs
            </h2>
        </>
    );
}

export { TodoCounter };

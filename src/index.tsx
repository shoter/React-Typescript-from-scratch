const style = require("./style.scss");

import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./ToDoList";

function todo(id : string, name :string) {
    return {
        id: id,
        name: name
    }
}

function List(props : {}) {
    let todos: IToDo[] = [
    todo("1", "umyj zęby"),
    todo("2", "Złóż biurko"),
    todo("3", "xD")
    ];

    return <ToDoList items={todos} />
}


ReactDOM.render(<List />, document.getElementById("root"));    
 
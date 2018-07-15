import React from "react";
import ReactDOM from "react-dom";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends React.Component<IToDoListProps> 
{
    constructor(props: IToDoListProps)
    {
        super(props);
    }

    render() {
        var items = this.props.items.map((item : IToDo) => 
    <ToDoItem key={item.id} name={item.name} /> );

        return ( 
        <div className="toDoList">
            {items}
        </div>)
    }
}
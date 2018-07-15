import React, {Component} from "react";
import ReactDOM from "react-dom";

export default class ToDoItem extends React.Component<IToDoItemProps, IToDoItemState>
{
    constructor(props: IToDoItemProps) {
        super(props);

        this.state = {
            checked: false
        };
    }

    onClick() {
        this.setState((prevState : IToDoItemState, props: IToDoItemProps) => {
            checked: !prevState.checked
        });
    }

    render() {
        return (
            <div className="toDoItem" >
                <input checked={this.state.checked} onClick={this.onClick.bind(this)} type="checkbox"/>
                <span>
                    {this.props.name}
                </span>
            </div>
        )
    }
}
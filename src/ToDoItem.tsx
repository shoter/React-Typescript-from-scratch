import React from "react";

export default class ToDoItem extends React.Component<IToDoItemProps, IToDoItemState>
{
    constructor(props: IToDoItemProps) {
        super(props);

        this.state = {
            checked: false
        };
    }

    onClick() {
        this.setState((prevState : IToDoItemState, props: IToDoItemProps) => 
            ({checked: !prevState.checked}));
    }

    render() {
        return (
            <div className={"toDoItem" + (this.state.checked?" checked":"")} >
                <input checked={this.state.checked} onClick={this.onClick.bind(this)} type="checkbox"/>
                <span>
                    {this.props.name}
                </span>
            </div>
        )
    }
}
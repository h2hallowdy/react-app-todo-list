import React, { Component } from 'react';
import './TodoItem.css'

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let className = 'TodoItem';
        if (item.isComplete) {
            className += ' TodoItem-complete';
        }
        return (
            <div className={className} onClick={onClick}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;
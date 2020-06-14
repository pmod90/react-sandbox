import React from 'react';
import  { connect } from 'react-redux'

class TodoList extends React.Component {

    render() {
        // getting redux store content via props
        const { todos } = this.props;
        const todoList = todos.map((todo) => {
            return <span>{todo}</span>
        });
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

//mapping redux store state to component props
const mapStateToProps = (state,action) => {
    return {
        todos : state.todos
    }
}

//retuens a higher-order-powered version of the component that is connected to the redux store
export default connect(mapStateToProps)(TodoList);
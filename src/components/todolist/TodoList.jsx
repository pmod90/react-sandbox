import React from 'react';
import  { connect } from 'react-redux'

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.todoInputRef = React.createRef();
    }
    addTodo = (e) => {
        console.log(this.todoInputRef.current.value);
        this.props.addTodo(this.todoInputRef.current.value);

    }

    render() {
        // getting redux store content via props
        const { todos } = this.props;
        const todoList = todos.map((todo) => {
            return <span key>{todo}</span>
        });
        return (
            <div>
            <input ref={this.todoInputRef} type="text"/>
            <button onClick={this.addTodo}>Add Todo</button>
            <div>
                {todoList}
            </div>
            </div>
            
        );
    }
}

//mapping redux store state to component props, making a part or all of the state acessible for the component
const mapStateToProps = (state,action) => {
    console.log(state);

    return {
        todos : state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (todo) => { dispatch( {type: 'ADD_TODO', todo: todo} )}
    }
}

//retuens a higher-order-powered version of the component that is connected to the redux store
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
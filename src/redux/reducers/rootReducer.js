const initState = {
    todos : ['Buy Milk', 'Buy axios']
};

const rootReducer = (state=initState, action) => {
    if(action.type === 'ADD_TODO') {
        return {
            todos: [...state.todos, action.todo]
        }
    }
    return state;
    
}

export default rootReducer;
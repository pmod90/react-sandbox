export default function courseReducer(state =[], action) {
    switch(action.type) {
        case "CREATE_COURSE":
            // return state.push(action.course); DONT DO THIS, MUTATES STATE
            return [...state, {...action.course}];
        default:
            return state;    
    }
}
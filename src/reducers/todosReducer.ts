import { Todo, Action, ActionTypes } from '../actions';

const reducer = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((el: Todo) => el.id !== action.payload);
        default:
            return state;
    }
};

export default reducer;

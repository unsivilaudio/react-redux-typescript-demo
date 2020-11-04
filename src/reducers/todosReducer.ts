import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/Types';

interface ActionData {
    type: ActionTypes;
    payload: any;
}

const reducer = (state: Todo[] = [], action: FetchTodosAction) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;

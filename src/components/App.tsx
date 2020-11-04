import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers/index';

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean;
}

class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);

        this.state = { fetching: false };
    }

    componentDidUpdate(prevProps: AppProps) {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({ fetching: false });
        }
    }

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({ fetching: true });
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderList = (): JSX.Element[] => {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
                    {todo.title}
                </div>
            );
        });
    };

    render() {
        return (
            <div className='Container'>
                <h1>Hello There</h1>
                <button onClick={this.onButtonClick}>Fetch Todos</button>
                {this.state.fetching ? 'LOADING...' : null}
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(App);
